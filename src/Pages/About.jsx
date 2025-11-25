import { useTranslation } from "react-i18next";
import Captions from "../components/Captions";
export default function About(title){
    const { t } = useTranslation();

    const marginLeft = {marginLeft: '2rem'}
    return(
        <>
        <title>{`StarTrans - ${title.title}`}</title>
            <section className='box marginContent'>
                <span className=" aboutCmp leftSide">
                </span>
                <div className="descBox">
                    <Captions captionTitle={t('HistoryCaption')} captionDesc={t('HistorySmCaption')} style={marginLeft}></Captions>
                    <p className="desc">{t('History')}</p>
                </div>
            </section>
            <section className='box marginContent'>
                <div className="descBox">
                    <Captions captionTitle={t('OurMissionCaption')} captionDesc={t('OurMissionSmCaption')} style={marginLeft}></Captions>
                    <p className="desc">{t('ourMission')}</p>
                </div>
                <span className=" missionCmp rightSide">
                </span>
            </section>

        </>
    )
}