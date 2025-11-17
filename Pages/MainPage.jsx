import { useTranslation } from "react-i18next";
import transport from '../assets/icons/mainPage/fast-delivery.png'
import sped from '../assets/icons/mainPage/worldwide-shipping.png'

import aboutPic from '../assets/img/full-shot-man-sitting-truck.jpg'
import aboutPic2 from '../assets/img/aboutPic2.jpg'
import quality from '../assets/icons/mainPage/quality.png';
import money from '../assets/icons/mainPage/24-hours.png';
import invest from '../assets/icons/mainPage/investment.png';
import flexy from '../assets/icons/mainPage/continuous.png';

import Captions from '../components/Captions.jsx'
import ServiceBox from '../components/ServiceBox.jsx'
import InfoBox from '../components/InfoBox.jsx';

import '../styles/MainPage.css'
import {useEffect, useState } from "react";


export default function MainPage(title){
    const [pic, setPic] = useState(aboutPic)
    const {t} = useTranslation();

    useEffect(()=>{
      function handleWin(){
      if(window.innerWidth <= 900){
        setPic(aboutPic2)
      }
      else if(window.innerWidth > 900){
        setPic(aboutPic)
      }
    }
    handleWin();

    window.addEventListener('resize', handleWin)

    return () => window.removeEventListener('resize', handleWin)
    },[])


    return(
        <>

        <title>{`StarTrans - ${title.title}`}</title>
        
        <Captions captionTitle={t("serviceCaptionMP")} captionDesc={t('serviceSmCaptionMP')}/>
      
      <div id='serviceBox'>
        <ServiceBox img={transport} title={'Transport'} desc={t('transportDescMP')}/>
        <ServiceBox img={sped} title={t('spedCaptionMP')} desc={t('spedDescMP')}/>
      </div>
      <Captions captionTitle={t('aboutCaptionMP')} captionDesc={t('aboutSmCaptionMP')}/>
      <section className='box marginContent'>
        <img src={pic} alt="Zdjęcie kierowcy z telefonem" />
        <p className="desc">{t('transDescSV')}</p>
      </section>
      <Captions captionTitle={t('chooseUsCaptionMP')} captionDesc={t('chooseUsSmCaptionMP')}/>
      <section className='infoBox marginContent'>
        <InfoBox img={quality} desc={t('exp')} type={'containerMP'}/>
        <InfoBox img={money} desc={t('reliable')} type={'containerMP'}/>
        <InfoBox img={invest} desc={t('competitive')} type={'containerMP'}/>
        <InfoBox img={flexy} desc={t('flexService')} type={'containerMP'}/>
      </section>
      </>
    )
}