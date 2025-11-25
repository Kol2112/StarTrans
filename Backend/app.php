<?php
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

// Nagłówki CORS
header("Access-Control-Allow-Origin: $ALLOWED_ORIGIN");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Obsługa preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Funkcja do weryfikacji reCAPTCHA
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

// Weryfikacja reCAPTCHA
$recaptchaToken = $input['recaptchaToken'] ?? null;
if (!$recaptchaToken || !verify_recaptcha($recaptchaToken, $RECAPTCHA_SECRET)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Niepoprawna weryfikacja reCAPTCHA"]);
    exit;
}

// Pobranie danych formularza
$name = $input['name'] ?? 'Brak';
$email = $input['email'] ?? 'Brak';
$tel = $input['tel'] ?? 'Brak';
$desc = $input['desc'] ?? 'Brak';

// Prosta walidacja e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Nieprawidłowy format e-mail"]);
    exit;
}

// Wysyłka maila
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
    echo json_encode(["success" => false, "error" => $mail->ErrorInfo ?: $e->getMessage()]);
}
