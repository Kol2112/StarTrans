from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv
import requests

# Załaduj dane konfiguracyjne
load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])


# Stałe
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")
RECAPTCHA_SECRET = os.getenv("RECAPTCHA_SECRET")

def verify_recaptcha(token):
    """Weryfikuje token reCAPTCHA wysłany z frontendu"""
    url = "https://www.google.com/recaptcha/api/siteverify"
    payload = {"secret": RECAPTCHA_SECRET, "response": token}
    r = requests.post(url, data=payload)
    result = r.json()
    return result.get("success", False) and result.get("score", 0) > 0.5

@app.route("/send_mail", methods=["POST"])
def send_mail():
    data = request.get_json()

    # Walidacja reCAPTCHA
    recaptcha_token = data.get("recaptchaToken")
    if not recaptcha_token or not verify_recaptcha(recaptcha_token):
        return jsonify({"success": False, "error": "Niepoprawna weryfikacja reCAPTCHA"}), 400

    name = data.get("name", "Brak")
    sender_email = data.get("email", "Brak")
    tel = data.get("tel", "Brak")
    desc = data.get("desc", "Brak")

    # Tworzymy wiadomość e-mail
    msg = EmailMessage()
    msg["Subject"] = f"📩 Wiadomość z formularza kontaktowego od {name}"
    msg["From"] = EMAIL_USER  # zawsze Twój mail (konto wysyłające)
    msg["To"] = EMAIL_RECEIVER  # odbiorca wiadomości (Twoja firma)
    msg["Reply-To"] = sender_email  # adres wpisany przez użytkownika
    msg.set_content(f"""
    Imię: {name}
    E-mail nadawcy: {sender_email}
    Telefon: {tel}

    Treść wiadomości:
    {desc}
    """)

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(msg)
        return jsonify({"success": True, "message": "Wiadomość wysłana pomyślnie!"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
