import { useTranslation } from "react-i18next";
import Captions from "../components/Captions";

import mission from '../assets/img/OurMission.jpg'
export default function About(title){
    const { t } = useTranslation();
    return(
        <>
        <title>{`StarTrans - ${title.title}`}</title>
            <section className='box marginContent'>
                <img src={mission} alt="Zdjęcie z łączonymi dłońmi" />
                <div className="descBox">
                    <Captions captionTitle={t('HistoryCaption')} captionDesc={t('HistorySmCaption')}>Historia</Captions>
                    <p className="desc">{t('History')}</p>
                </div>
            </section>
            <section className='box marginContent'>
                <div className="descBox">
                    <Captions captionTitle={t('OurMissionCaption')} captionDesc={t('OurMissionSmCaption')}>Historia</Captions>
                    <p className="desc">{t('ourMission')}</p>
                </div>
                <img src={''} alt="Zdjęcie kierowcy z telefonem" style={{borderRadius: '0 1rem 1rem 0'}}/>
            </section>

        </>
    )
}