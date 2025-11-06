import { useTranslation } from 'react-i18next'
import '../styles/Footer.css'
export default function Footer(){
    const {t} = useTranslation();
    return(
        <footer className='flex flexAround'>
            <p>{t('footerRights')}</p>
            <p>Leżajsk, ulica</p>
            <div className='contact'>
                <p><a href='mailto:#'>mail</a></p>
                <p><a href="tel:#">telefon</a></p>
            </div>
        </footer>
    )
};