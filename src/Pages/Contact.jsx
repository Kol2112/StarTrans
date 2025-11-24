import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Captions from '../components/Captions.jsx';
import Button from '../components/Button.jsx';
import InfoBox from '../components/InfoBox.jsx';
import '../styles/Contact.css'

import home from '../assets/icons/Contact/home.png'
import email from '../assets/icons/Contact/email.png'
import telephone from '../assets/icons/Contact/telephone.png'

import homeLight from '../assets/icons/Contact/homeLight.png'
import emailLight from '../assets/icons/Contact/emailLight.png'
import telephoneLight from '../assets/icons/Contact/telephoneLight.png'

export default function Contact(title) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: t('formName'),
        email: 'Email',
        tel: t('formTel'),
        desc: t('formDesc'),
    });
    const [consent, setConsent] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // nowy stan dla komunikatu błędu

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

    const icons ={
        homeState: home,
        emailState: email,
        telephoneState: telephone
    }
    const iconsLight ={
        homeState: homeLight,
        emailState: emailLight,
        telephoneState: telephoneLight
    }
    const doc = document.documentElement.getAttribute('data-theme')
    const [icon, setIcon] = useState(doc === 'dark' ? icons : iconsLight)

    useEffect(() => {
        const root = document.documentElement
        const obs = new MutationObserver(()=>{
            const theme = root.getAttribute('data-theme')
            setIcon(theme === 'dark' ? icons : iconsLight);
        })
        obs.observe(root, {attributes: true});

        const checkRecaptcha = setInterval(() => {
            if (window.grecaptcha) {
                console.log("✅ reCAPTCHA załadowana");
                clearInterval(checkRecaptcha);
            }
        }, 500);

        return () => {
            clearInterval(checkRecaptcha); 
            obs.disconnect();
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setErrorMessage(''); // resetujemy poprzedni komunikat

        if(formData['name'] === t('formName')){
            setErrorMessage('Podaj swoje imię!');
            return;
        }
        if(formData['desc'] === t('formDesc')){
            setErrorMessage('Uzupełnij treść wiadomości!');
            return;
        }

        const nameRegex = /^[a-zA-Z\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telRegex = /^[0-9]+$/;

        if (!nameRegex.test(formData.name)) {
            setErrorMessage("Imię i nazwisko nie może zawierać cyfr ani znaków specjalnych.");
            return;
        }

        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Podano niepoprawny adres email.");
            return;
        }

        if (!telRegex.test(formData.tel) || formData['tel'].length<6) {
            setErrorMessage("Podano niepoprawny numer telefonu.");
            return;
        }

        if (!consent) {
            setErrorMessage("Musisz wyrazić zgodę na przetwarzanie danych osobowych.");
            return;
        }

        if (!window.grecaptcha) {
            setErrorMessage("reCAPTCHA nie jest gotowa, spróbuj ponownie za kilka sekund.");
            return;
        }

        setTimeout(() => { 
            window.grecaptcha.ready(() => { 
                window.grecaptcha.execute("6Le5cv8rAAAAABU9QjGyC0d2mkaOAgzehxLKyW6P", { action: "submit" }) 
                .then((token) => { 
                    const payload = { name: formData.name, email: formData.email, tel: formData.tel, desc: formData.desc, recaptchaToken: token }; 
                    fetch("http://localhost:5000/send_mail", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }) 
                    .then((res) => res.json()) 
                    .then((data) => { 
                        if (data.success) { 
                            setErrorMessage('Wiadomość wysłana pomyślnie!');
                            setFormData({ name: t('formName'), email: 'Email', tel: t('formTel'), desc: t('formDesc') });
                            setConsent(false);
                        } else { 
                            setErrorMessage("Nie udało się wysłać wiadomości: " + data.error); 
                        } 
                    }) 
                    .catch(() => setErrorMessage("Błąd połączenia z serwerem.")); 
                }); 
            }); 
        }, 100);
    }

    return (
        <>
            {errorMessage && (
                <div id='errorBox'>
                    {errorMessage}
                </div>
            )}

            <section id='box'>
                <title>{`StarTrans - ${title.title}`}</title>
                <Captions captionTitle={t('formCaptionFR')} captionDesc={t('formSMCaptionFR')} />
                <section className='content marginContent'>
                    <div className='form'>
                        <input type="text" name="name" value={formData.name} onFocus={clearField} onChange={handleChange} />
                        <input type="email" name="email" value={formData.email} onFocus={clearField} onChange={handleChange} />
                        <input type="tel" name="tel" value={formData.tel} onFocus={clearField} onChange={handleChange} onKeyDown={(e) => {
                            if (!/[0-9]/.test(e.key)) e.preventDefault();
                        }} />
                        <textarea className='descInpt' name="desc" value={formData.desc} onFocus={clearField} onChange={handleChange} />

                        <div className='agree'>
                            <input type="checkbox" id="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ width: 'auto', marginRight: '0.5rem' }}/>
                            <label htmlFor="consent">{t('formCheckbox')}</label>
                        </div>

                        <Button text={t('formSubBtn')} onclick={handleSubmit} />
                    </div>

                    <div className='infoSection'>
                        <section className='contactInfo'>
                            <InfoBox type='containerContact' img={icon['homeState']} desc='Spółdzielcza 8, 37-300 Leżajsk' />
                            <InfoBox type='containerContact' img={icon['emailState']} desc='biuro@startrans.com.pl' />
                            <InfoBox type='containerContact' img={icon['telephoneState']} desc='+48 668 310 267' />
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
        </>
    )
}
