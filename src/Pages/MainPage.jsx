import { useTranslation } from "react-i18next";
import transport from '../assets/icons/mainPage/fast-delivery.png'
import transportLight from '../assets/icons/mainPage/fast-delivery_light.png'
import sped from '../assets/icons/mainPage/worldwide-shipping.png'
import spedLight from '../assets/icons/mainPage/worldwide-shipping_light.png'
import aboutPic from '../assets/img/full-shot-man-sitting-truck.jpg'
import aboutPic2 from '../assets/img/aboutPic2.jpg'
import quality from '../assets/icons/mainPage/quality.png';
import qualityLight from '../assets/icons/mainPage/quality_light.png';

import money from '../assets/icons/mainPage/24-hours.png';
import moneyLight from '../assets/icons/mainPage/24-hours_light.png';
import invest from '../assets/icons/mainPage/investment.png';
import investLight from '../assets/icons/mainPage/investment_light.png';
import flexy from '../assets/icons/mainPage/continuous.png';
import flexyLight from '../assets/icons/mainPage/continuous_light.png';

import Captions from '../components/Captions.jsx'
import ServiceBox from '../components/ServiceBox.jsx'
import InfoBox from '../components/InfoBox.jsx';

import '../styles/MainPage.css'
import {useEffect, useState } from "react";


export default function MainPage(title){
    const [pic, setPic] = useState(aboutPic)
    const {t} = useTranslation();
    
    const ob ={
      trans: transport,
      sp: sped,
      qualityHandler: quality,
      moneyHandler: money,
      investHandler: invest,
      flexyHandler: flexy,
    }
    const obLight ={
      trans: transportLight,
      sp: spedLight,
      qualityHandler: qualityLight,
      moneyHandler: moneyLight,
      investHandler: investLight,
      flexyHandler: flexyLight,
    }
    const root = document.documentElement.getAttribute('data-theme')
    const [icon, setIcon] = useState(root == 'dark' ? ob : obLight);

    useEffect(()=>{
      const root = document.documentElement;
      const obs = new MutationObserver(() => {
        const theme = root.getAttribute('data-theme');

        setIcon(theme == 'dark' ? ob : obLight);
    });

 obs.observe(root, { attributes: true });


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

    return () => {
      window.removeEventListener('resize', handleWin)
      obs.disconnect()
    }

    },[])
    


    return(
        <>

        <title>{`StarTrans - ${title.title}`}</title>
        
        <Captions captionTitle={t("serviceCaptionMP")} captionDesc={t('serviceSmCaptionMP')}/>
      
      <div id='serviceBox'>
        <ServiceBox img={icon['trans']} title={'Transport'} desc={t('transportDescMP')}/>
        <ServiceBox img={icon['sp']} title={t('spedCaptionMP')} desc={t('spedDescMP')}/>
      </div>
      <Captions captionTitle={t('aboutCaptionMP')} captionDesc={t('aboutSmCaptionMP')}/>
      <section className='box marginContent'>
        <img src={pic} alt="Zdjęcie kierowcy z telefonem" />
        <p className="desc">{t('transDescSV')}</p>
      </section>
      <Captions captionTitle={t('chooseUsCaptionMP')} captionDesc={t('chooseUsSmCaptionMP')}/>
      <section className='infoBox marginContent'>
        <InfoBox img={icon['qualityHandler']} desc={t('exp')} type={'containerMP'}/>
        <InfoBox img={icon['moneyHandler']} desc={t('reliable')} type={'containerMP'}/>
        <InfoBox img={icon['investHandler']} desc={t('competitive')} type={'containerMP'}/>
        <InfoBox img={icon['flexyHandler']} desc={t('flexService')} type={'containerMP'}/>
      </section>
      </>
    )
}