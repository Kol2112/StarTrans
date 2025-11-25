<?php
// server.php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Wczytanie .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$EMAIL_USER = $_ENV['EMAIL_USER'] ?? '';
$EMAIL_PASS = $_ENV['EMAIL_PASS'] ?? '';
$EMAIL_RECEIVER = $_ENV['EMAIL_RECEIVER'] ?? '';
$RECAPTCHA_SECRET = $_ENV['RECAPTCHA_SECRET'] ?? '';
$ALLOWED_ORIGIN = $_ENV['ALLOWED_ORIGIN'] ?? 'http://localhost:5173';

// Ustaw nagłówek CORS dynamicznie (opcjonalnie)
header("Access-Control-Allow-Origin: " . $ALLOWED_ORIGIN);

// Weryfikacja reCAPTCHA v3
function verify_recaptcha($token, $secret)
{
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = http_build_query([
        "secret" => $secret,
        "response" => $token
    ]);
    $options = [
        "http" => [
            "method" => "POST",
            "header" => "Content-Type: application/x-www-form-urlencoded\r\n",
            "content" => $data,
            "timeout" => 10
        ]
    ];
    $context = stream_context_create($options);
    $result = @file_get_contents($url, false, $context);
    if (!$result) return false;
    $resp = json_decode($result, true);
    return isset($resp['success'], $resp['score']) && $resp['success'] === true && $resp['score'] > 0.5;
}

// Odczyt JSON z requestu
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
    echo json_encode(["success" => false, "error" => "Niepoprawna weryfikacja reCAPTCHA"]);
    exit;
}

$name = $input['name'] ?? 'Brak';
$email = $input['email'] ?? 'Brak';
$tel = $input['tel'] ?? 'Brak';
$desc = $input['desc'] ?? 'Brak';

// (Opcjonalnie) Prosta walidacja po stronie serwera
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Nieprawidłowy format e-mail"]);
    exit;
}

$mail = new PHPMailer(true);
try {
    // Konfiguracja SMTP
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
E-mail nadawcy: {$email}
Telefon: {$tel}

Treść wiadomości:
{$desc}
    ";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Wiadomość wysłana pomyślnie!"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => $mail->ErrorInfo ?: $e->getMessage()]);
}
