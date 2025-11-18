import { useTranslation } from "react-i18next";
import Captions from "../components/Captions.jsx";
import Adv from "../components/Adv.jsx";
import Button from '../components/Button.jsx'
import '../styles/Carrier.css'

import img from '../assets/img/aggr2.jpg'
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
                <Adv img='' desc={t('stability')} height='100px'/>
                <Adv img='' desc={t('Fleet')}  height='100px'/>
                <Adv img='' desc={t('Support')}  height='100px'/>
                <Adv img='' desc={t('Roz')}  height='100px'/>
                <Adv img='' desc={t('WorkLife')}  height='100px'/>
                <Adv img='' desc={t('insurance')}  height='100px'/>
            </div>
        </section>
    )
}