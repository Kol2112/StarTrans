<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$EMAIL_USER = 'nspkpl2@gmail.com';
$EMAIL_PASS = "wbxu sxaq arun hzrr";
$EMAIL_RECEIVER = 'biuro@startrans.com.pl';
$RECAPTCHA_SECRET = '6Le5cv8rAAAAAO_5K53Iv5LII7LGhKIYPPYWO6lO';
$ALLOWED_ORIGIN = 'https://startrans.com.pl';

header("Access-Control-Allow-Origin: $ALLOWED_ORIGIN");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

function verify_recaptcha($token, $secret)
{
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        "secret" => $secret,
        "response" => $token
    ];

    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true); 
    
    $result = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_errno($ch)) {
        error_log('Błąd cURL reCAPTCHA: ' . curl_error($ch));
        curl_close($ch);
        return false;
    }
    
    curl_close($ch);

    if ($http_code !== 200 || !$result) {
        return false;
    }

    $resp = json_decode($result, true);
    return isset($resp['success'], $resp['score']) && $resp['success'] === true && $resp['score'] > 0.5;
}

$raw = file_get_contents("php://input");
$input = json_decode($raw, true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Brak danych wejściowych lub nieprawidłowy JSON"]);
    exit;
}

$recaptchaToken = $input['recaptchaToken'] ?? null;
if (!$recaptchaToken || !verify_recaptcha($recaptchaToken, $RECAPTCHA_SECRET)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Niepoprawna weryfikacja reCAPTCHA (błąd weryfikacji lub niski wynik)"]);
    exit;
}

$name = $input['name'] ?? 'Brak';
$email = $input['email'] ?? 'Brak';
$tel = $input['tel'] ?? 'Brak';
$desc = $input['desc'] ?? 'Brak';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Nieprawidłowy format e-mail"]);
    exit;
}

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $EMAIL_USER;
    $mail->Password = $EMAIL_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom($EMAIL_USER, 'Formularz kontaktowy');
    $mail->addAddress($EMAIL_RECEIVER);
    $mail->addReplyTo($email);

    $mail->Subject = "📩 Wiadomość z formularza kontaktowego od {$name}";
    $mail->Body = "
Imię: {$name}
E-mail: {$email}
Telefon: {$tel} 

Treść wiadomości:
{$desc}
    ";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Wiadomość wysłana pomyślnie!"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Błąd wysyłania: " . ($mail->ErrorInfo ?: $e->getMessage())]);
}