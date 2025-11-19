import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import Captions from "../components/Captions.jsx"
import InfoBox from '../components/InfoBox.jsx';
import Button from '../components/Button.jsx'

import sup from '../assets/img/supply-chain-representation-still-life.jpg'
import secondImg from '../assets/img/top-view-delivery-truck-with-copy-space.jpg'



import truck from '../assets/icons/Service/truck.png'
import deadline from '../assets/icons/Service/deadline.png'
import radar from '../assets/icons/Service/radar.png'
import monitoring from '../assets/icons/Service/call.png'
import idea from  '../assets/icons/Service/idea.png'
import rating from '../assets/icons/Service/rating.png'

import truckLight from '../assets/icons/Service/truckLight.png'
import deadlineLight from '../assets/icons/Service/deadlineLight.png'
import radarLight from '../assets/icons/Service/radarLight.png'
import monitoringLight from '../assets/icons/Service/callLight.png'
import ideaLight from  '../assets/icons/Service/ideaLight.png'
import ratingLight from '../assets/icons/Service/ratingLight.png'
import { useEffect, useState } from "react";
export default function Service(title){
    const {t} = useTranslation();
        const icons ={
          truckState: truck,
          deadlineState: deadline,
          radarState: radar,
          monitoringState: monitoring,
          ideaState: idea,
          ratingState: rating
        }
        const iconsLight ={
          truckState: truckLight,
          deadlineState: deadlineLight,
          radarState: radarLight,
          monitoringState: monitoringLight,
          ideaState: ideaLight,
          ratingState: ratingLight
        }
        const root = document.documentElement.getAttribute('data-theme')
        const [icon, setIcon] = useState(root == 'dark' ? icons : iconsLight)

    useEffect(()=>{
        const test = document.documentElement
        const obs = new MutationObserver(()=>{
            // console.log(root);
            setIcon(root == 'dark' ? icons : iconsLight);
        })
        obs.observe(test, {attributes: true});
    
        return ()=>obs.disconnect()
    },[])
    const marginLeft = {marginLeft: '1rem'}
    return(
        <>
            <title>{`StarTrans - ${title.title}`}</title>
            <Captions captionTitle={t("urServiceCaptionSV")} captionDesc={t('urServiceSmCaptionSV')}/>
            <section className='box marginContent'>
                <img src={sup} alt="Zdjęcie kierowcy z telefonem" />
                <div className="descBox">
                    <Captions captionTitle={'Transport'} captionDesc={t('transSMCaptionSV')} style={marginLeft}>Historia</Captions>
                    <p className="desc">{t('transDescSV')}</p>
                </div>
            </section>
            <section className='box marginContent'>
                <div className="descBox">
                    <Captions captionTitle={t('spedCaptionMP')} captionDesc={t('spedSMCaptionSV')} style={marginLeft}>Historia</Captions>
                    <p className="desc">{t('spedDescSV')}</p>
                </div>
                <img src={secondImg} alt="Zdjęcie kierowcy z telefonem" style={{borderRadius: '0 1rem 1rem 0'}}/>
            </section>

            <Captions captionTitle={t('whyUsCaptionSV')} captionDesc={t('whyUsSMCaptionSV')}/>
            <div className="infoBox marginContent">
                <InfoBox img={icon['truckState']} desc={t('fleet')} type={'containerService'} />     
                <InfoBox img={deadline} desc={t('term')} type={'containerService'} />     
                <InfoBox img={radar} desc={t('reach')} type={'containerService'} />     
                <InfoBox img={monitoring} desc={t('cont&monitoring')} type={'containerService'} />     
                <InfoBox img={rating} desc={t('expTeam')} type={'containerService'} />     
                <InfoBox img={idea} desc={t('inv')} type={'containerService'} />     
            </div>
            <section className="flex" id='ContactButton'>
                <h1>{t('servicesReqHeadingSV')}</h1>
                <p>{t('servicesReqContactSV')}</p>
                <NavLink to='/Contact'><Button text={t('contactBtn')} /></NavLink>
            </section>

        </>
    )
}