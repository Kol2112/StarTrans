import Captions from '../components/Captions.jsx';
import Button from '../components/Button.jsx';
import InfoBox from '../components/InfoBox.jsx';
import '../styles/Contanct.scss'

import home from '../assets/icons/home.png'
import email from '../assets/icons/email.png'
import telephone from '../assets/icons/telephone.png'
export default function Contact(){

    return(
        <section id='box'>
            <Captions captionTitle={'Formularz kontaktowy'} captionDesc={'Skorzystaj z formularza kontaktowego, żeby omówić szczegóły'}/>
            <section className='content'>
                    <div  className='form'>
                        <input type="text" defaultValue='Imię' />
                        <input type="email" defaultValue='Email' />
                        <input type="tel" defaultValue='Nr. Tel' />
                        <textarea className='descInpt' type="text" defaultValue='Treść' />
                        <div className='agree'>
                            <input style={{width:'auto'}} type="checkbox" /><p>Treść zgody na przetwarzanie danych</p>
                        </div>
                        <Button text='Wyślij'/>
                    </div>
                    <div className='infoSection'>
                        <section className='flex contactInfo'>
                            <InfoBox width='30%' height='7.88rem' img={home} desc='Leżajsk, ulica'/>
                            <InfoBox width='30%' height='7.88rem' img={email} desc='email@gmail.com'/>
                            <InfoBox width='30%' height='7.88rem' img={telephone} desc='00000000'/>
                        </section>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34306.8244881745!2d22.400810432298666!3d50.27568616069454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cc6b74783fbf1%3A0x2e4fed9de334b27d!2sMickiewicza%2057%2C%2037-300%20Le%C5%BCajsk!5e0!3m2!1sen!2spl!4v1760615340083!5m2!1sen!2spl"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </section>
        </section>
    )
}