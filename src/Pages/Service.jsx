import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import Captions from "../components/Captions.jsx"
import InfoBox from '../components/InfoBox.jsx';
import Button from '../components/Button.jsx'

import sup from '../assets/img/supply-chain-representation-still-life.jpg'
import secondImg from '../assets/img/top-view-delivery-truck-with-copy-space.jpg'
import truck from '../assets/icons/truck.png'
import deadline from '../assets/icons/deadline.png'
import radar from '../assets/icons/radar.png'
import idea from  '../assets/icons/idea.png'
import rating from '../assets/icons/rating.png'
export default function Service(){
    const {t} = useTranslation();

    const marginLeft = {marginLeft: '1rem'}
    return(
        <>
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
                <img src={secondImg} alt="Zdjęcie kierowcy z telefonem" />
            </section>

            <Captions captionTitle={t('whyUsCaptionSV')} captionDesc={t('whyUsSMCaptionSV')}/>
            <div className="flex flexAround marginContent">
                <InfoBox img={truck} desc={t('fleet')} width='12vw' height='20vh'/>     
                <InfoBox img={deadline} desc={t('term')} width='12vw' height='20vh'/>     
                <InfoBox img={radar} desc={t('reach')} width='12vw' height='20vh'/>     
                <InfoBox img={truck} desc={t('cont&monitoring')} width='12vw' height='20vh'/>     
                <InfoBox img={rating} desc={t('expTeam')} width='12vw' height='20vh'/>     
                <InfoBox img={idea} desc={t('inv')} width='12vw' height='20vh'/>     
            </div>
            <section className="flex" id='ContactButton'>
                <h1>{t('servicesReqHeadingSV')}</h1>
                <p>{t('servicesReqContactSV')}</p>
                <NavLink to='/kontakt'><Button text={t('contactBtn')} /></NavLink>
            </section>

        </>
    )
}