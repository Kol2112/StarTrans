import { useTranslation } from "react-i18next";
import Captions from "../components/Captions.jsx";
import Adv from "../components/Adv.jsx";
import Button from '../components/Button.jsx'
import '../styles/Carrier.css'

import img from '../assets/img/aggr2.jpg'

import stability from '../assets/icons/Carrier/StableCR.png'
import Support from '../assets/icons/Carrier/SupportCR.png'
import fleet from '../assets/icons/Carrier/FleetCR.png'
import growth from '../assets/icons/Carrier/growthCR.png'
import wlBalance from '../assets/icons/Carrier/wlBalanceCR.png'
import insurance from '../assets/icons/Carrier/insuranceCR.png'
export default function Carrier(title){

    const {t} = useTranslation();
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
                <Adv img={stability} desc={t('stability')} height='80px'/>
                <Adv img={fleet} desc={t('Fleet')}  height='80px'/>
                <Adv img={Support} desc={t('Support')}  height='80px'/>
                <Adv img={growth} desc={t('Roz')}  height='80px'/>
                <Adv img={wlBalance} desc={t('WorkLife')}  height='80px'/>
                <Adv img={insurance} desc={t('insurance')}  height='80px'/>
            </div>
        </section>
    )
}