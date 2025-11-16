import { useTranslation } from 'react-i18next'
import '../styles/Footer.css'
export default function Footer(){
    const {t} = useTranslation();
    return(
        <footer>
            <p>{t('footerRights')}</p>
            <p>Spółdzielcza 8, 37-300 Leżajsk</p>
            <div className='contact'>
                <p><a href='mailto:biuro@startrans.com.pl'>biuro@startrans.com.pl</a></p>
                <p><a href="tel:668310267">+48 668 310 267</a></p>
            </div>
        </footer>
    )
};