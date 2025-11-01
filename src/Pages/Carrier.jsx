import { useTranslation } from "react-i18next";
import Captions from "../components/Captions.jsx";
import Adv from "../components/Adv.jsx";
import '../styles/Carrier.scss'

import img from '../assets/img/satisfied-businessman-company-employer-wearing-suit-handshake-new-employee-get-hired-job-interview-man-hr-manager-employ-successful-candidate-shake-hand-business-meeting-placement-concept.jpg'
export default function Carrier(){

    const {t} = useTranslation();
    return(
        <section>
            <Captions captionTitle={t('carrierNavi')} captionDesc={t('carrierSmCaptionCR')}/>
            <section className="content">
                <div className="flex">
                    <div>
                        <p className="text">{t('carrierDesc1')}</p>
                        
                        <p className="text">{t('carrierDesc2')}</p>


                        <p className="text">{t('carrierDesc3')} <span style={{color:"#07931C"}}>{t('carrierDesc4Span')}</span></p>
                    </div>
                    <img src={img} alt="Zdjęcie podania rąk" />
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
                <Adv img='' desc='Test' height='100px'/>
                <Adv img='' desc='Test'  height='100px'/>
                <Adv img='' desc='Test'  height='100px'/>
                <Adv img='' desc='Test'  height='100px'/>
                <Adv img='' desc='Test'  height='100px'/>
                <Adv img='' desc='Test'  height='100px'/>
            </div>
        </section>
    )
}