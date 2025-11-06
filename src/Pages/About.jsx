import { useTranslation } from "react-i18next";
import Captions from "../components/Captions";
export default function About(title){
    const { t } = useTranslation();
    return(
        <>
        <title>{`StarTrans - ${title.title}`}</title>
            <Captions captionTitle={t('Service')} captionDesc={t('Specjalizacja')}/>
            <h2>{t('test')}</h2>
        </>
    )
}