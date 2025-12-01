import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Captions from "../components/Captions.jsx";
import Adv from "../components/Adv.jsx";
import Button from '../components/Button.jsx'
import '../styles/Carrier.css'

import img from '../assets/img/aggr2.webp'

import stability from '../assets/icons/Carrier/StableCR.png'
import Support from '../assets/icons/Carrier/SupportCR.png'
import fleet from '../assets/icons/Carrier/FleetCR.png'
import growth from '../assets/icons/Carrier/growthCR.png'
import wlBalance from '../assets/icons/Carrier/wlBalanceCR.png'
import insurance from '../assets/icons/Carrier/insuranceCR.png'

import stabilityLight from '../assets/icons/Carrier/StableCR_DARK.png'
import SupportLight from '../assets/icons/Carrier/SupportCR_DARK.png'
import fleetLight from '../assets/icons/Carrier/FleetCR_DARK.png'
import growthLight from '../assets/icons/Carrier/growthCR_DARK.png'
import wlBalanceLight from '../assets/icons/Carrier/wlBalanceCR_DARK.png'
import insuranceLight from '../assets/icons/Carrier/insuranceCR_DARK.png'
export default function Carrier(title){

    const {t} = useTranslation();
        const icons ={
            stabilityState: stability,
            SupportState: Support,
            fleetState: fleet,
            growthState: growth,
            wlBalanceState: wlBalance,
            insuranceState: insurance
        }
        const iconsLight ={
            stabilityState: stabilityLight,
            SupportState: SupportLight,
            fleetState: fleetLight,
            growthState: growthLight,
            wlBalanceState: wlBalanceLight,
            insuranceState: insuranceLight
        }
        const doc = document.documentElement.getAttribute('data-theme')
        const [icon, setIcon] = useState(doc == 'dark' ? icons : iconsLight)

    useEffect(()=>{
        const root = document.documentElement
        const obs = new MutationObserver(()=>{
            const theme = root.getAttribute('data-theme')
            setIcon(theme == 'dark' ? icons : iconsLight);
        })
        obs.observe(root, {attributes: true});
    
        return ()=>obs.disconnect()
    },[])
    return(
        <section>
            <title>{`StarTrans - ${title.title}`}</title>
            <Captions captionTitle={t('carrierNavi')} captionDesc={t('carrierSmCaptionCR')}/>
            <section className="content">
                <div className="carDesc">
                    <div className="text">
                        <p>{t('carrierDesc1')}</p>
                        <p style={{marginTop: '1rem'}}>{t('carrierDesc2')}</p>
                        <p style={{marginTop: '1rem'}}>{t('carrierDesc3')}</p>
                        <a href="https://www.wp.pl" className="btn"><Button text="Dołącz do nas!" style={'btnCnt'} /></a>
                    </div>
                    <img src=
                    {img} alt="Zdjęcie podania rąk" />
                </div>
                <div className="CV">
                    <h2>{t('cvReqHeading')}</h2>
                    <p className="text">{t('cvReqDesc')}</p>
                    <p className='text'><i><q>{t('cvReqClause')}
                    </q></i>.</p>
                </div>
            </section>
            <Captions captionTitle={t('workUsCaption')} captionDesc={t('workUsSMCaption')}/>
            <div className="flex advantage">
                <Adv img={icon['stabilityState']} desc={t('stability')} height='80px'/>
                <Adv img={icon['fleetState']} desc={t('Fleet')}  height='80px'/>
                <Adv img={icon['SupportState']} desc={t('Support')}  height='80px'/>
                <Adv img={icon['growthState']} desc={t('Roz')}  height='80px'/>
                <Adv img={icon['wlBalanceState']} desc={t('WorkLife')}  height='80px'/>
                <Adv img={icon['insuranceState']} desc={t('insurance')}  height='80px'/>
            </div>
        </section>
    )
}