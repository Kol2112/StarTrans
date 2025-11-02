import { useTranslation } from "react-i18next";
import transport from '../assets/icons/mainPage/fast-delivery.png'
import sped from '../assets/icons/mainPage/worldwide-shipping.png'
import aboutPic from '../assets/img/full-shot-man-sitting-truck.jpg'
import quality from '../assets/icons/mainPage/quality.png';
import money from '../assets/icons/mainPage/24-hours.png';
import invest from '../assets/icons/mainPage/investment.png';
import flexy from '../assets/icons/mainPage/continuous.png';

import Captions from '../components/Captions.jsx'
import ServiceBox from '../components/ServiceBox.jsx'
import InfoBox from '../components/InfoBox.jsx';

import '../styles/MainPage.scss'

export default function MainPage(){
    const {t} = useTranslation();

    return(
        <>
        <title>StarTrans - Strona główna</title>
        <Captions captionTitle={t("serviceCaptionMP")} captionDesc={t('serviceSmCaptionMP')}/>
      
      <div className='flex flexAround'>
        <ServiceBox img={transport} title={'Transport'} desc={t('transportDescMP')}/>
        <ServiceBox img={sped} title={t('spedCaptionMP')} desc={t('spedDescMP')}/>
      </div>
      <Captions captionTitle={t('aboutCaptionMP')} captionDesc={t('aboutSmCaptionMP')}/>
      <section className='box marginContent' style={{width: "100%"}}>
        <img src={aboutPic} alt="Zdjęcie kierowcy z telefonem" />
        <p>Historia</p>
      </section>
      <Captions captionTitle={t('chooseUsCaptionMP')} captionDesc={t('chooseUsSmCaptionMP')}/>
      <section className='flex flexAround marginContent'>
        <InfoBox img={quality} desc={t('exp')}/>
        <InfoBox img={money} desc={t('reliable')}/>
        <InfoBox img={invest} desc={t('competitive')}/>
        <InfoBox img={flexy} desc={t('flexService')}/>
      </section>
      </>
    )
}