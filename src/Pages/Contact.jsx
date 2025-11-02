import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Captions from '../components/Captions.jsx';
import Button from '../components/Button.jsx';
import InfoBox from '../components/InfoBox.jsx';
import '../styles/Contanct.scss'

import home from '../assets/icons/home.png'
import email from '../assets/icons/email.png'
import telephone from '../assets/icons/telephone.png'

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: t('formName'),
        email: 'Email',
        tel: t('formTel'),
        desc: t('formDesc'),
    });
    const [consent, setConsent] = useState(false);

    const clearField = (e) => {
        const { name, value } = e.target;
        const placeholders = {
            name: t('formName'),
            email: 'Email',
            tel: t('formTel'),
            desc: t('formDesc'),
        };

        if (value === placeholders[name]) {
            setFormData((prev) => ({ ...prev, [name]: '' }));
            e.target.value = '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        const checkRecaptcha = setInterval(() => {
            if (window.grecaptcha) {
                console.log("✅ reCAPTCHA załadowana");
                clearInterval(checkRecaptcha);
            }
        }, 500);
        return () => clearInterval(checkRecaptcha);
    }, []);

function handleSubmit(e) {
    e.preventDefault();

    if(formData['name'] === t('formName')){
        alert('Podaj swoje imię!');
        return;
    }
    if(formData['desc'] === t('formDesc')){
        alert('Uzupełnij treść wiadomości!');
        return;
    }

    // Walidacja pól
    const nameRegex = /^[a-zA-Z\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^[0-9]+$/;

    if (!nameRegex.test(formData.name)) {
        alert("❌ Imię i nazwisko nie może zawierać cyfr ani znaków specjalnych.");
        return;
    }

    if (!emailRegex.test(formData.email)) {
        alert("❌ Podano niepoprawny adres email.");
        return;
    }

    if (!telRegex.test(formData.tel) || formData['tel'].length<6) {
        alert("❌ Podano niepoprawny numer telefonu.");
        return;
    }

    if (!consent) {
        alert("❗ Musisz wyrazić zgodę na przetwarzanie danych osobowych.");
        return;
    }

    if (!window.grecaptcha) {
        alert("reCAPTCHA nie jest gotowa, spróbuj ponownie za kilka sekund.");
        return;
    }

    setTimeout(() => { window.grecaptcha.ready(() => { window.grecaptcha.execute("6Le5cv8rAAAAABU9QjGyC0d2mkaOAgzehxLKyW6P", { action: "submit" }) .then((token) => { const payload = { name: formData.name, email: formData.email, tel: formData.tel, desc: formData.desc, recaptchaToken: token }; fetch("http://localhost:5000/send_mail", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), }) .then((res) => res.json()) .then((data) => { if (data.success) { alert("✅ Wiadomość wysłana pomyślnie!"); setFormData({ name: t('formName'), email: 'Email', tel: t('formTel'), desc: t('formDesc'), }); setConsent(false); } else { alert("❌ Nie udało się wysłać wiadomości: " + data.error); } }) .catch(() => alert("⚠️ Błąd połączenia z serwerem.")); }); }); }, 100);
}


    return (
        <section id='box'>
            <Captions captionTitle={t('formCaptionFR')} captionDesc={t('formSMCaptionFR')} />
            <section className='content marginContent'>
                <div className='form'>
                    <input type="text"
                        name="name"
                        value={formData.name}
                        onFocus={clearField}
                        onChange={handleChange} />
                    <input type="email"
                        name="email"
                        value={formData.email}
                        onFocus={clearField}
                        onChange={handleChange} />
                    <input type="tel"
                        name="tel"
                        value={formData.tel}
                        onFocus={clearField}
                        onChange={handleChange}
                        onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault(); // blokuje wpisanie nie-cyfry
                            }
                        }} />
                    <textarea className='descInpt'
                        name="desc"
                        value={formData.desc}
                        onFocus={clearField}
                        onChange={handleChange} />


                    <div className='agree'>
                        <input
                            type="checkbox"
                            id="consent"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            style={{ width: 'auto', marginRight: '0.5rem' }}
                        />
                        <label htmlFor="consent">{t('formCheckbox')}</label>
                    </div>

                    <Button text={t('formSubBtn')} onclick={handleSubmit} />
                </div>

                <div className='infoSection'>
                    <section className='flex contactInfo'>
                        <InfoBox width='30%' height='7.88rem' img={home} desc='Leżajsk, ulica' />
                        <InfoBox width='30%' height='7.88rem' img={email} desc='email@gmail.com' />
                        <InfoBox width='30%' height='7.88rem' img={telephone} desc='00000000' />
                    </section>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34306.8244881745!2d22.400810432298666!3d50.27568616069454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cc6b74783fbf1%3A0x2e4fed9de334b27d!2sMickiewicza%2057%2C%2037-300%20Le%C5%BCajsk!5e0!3m2!1sen!2spl!4v1760615340083!5m2!1sen!2spl"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </section>
    )
}
