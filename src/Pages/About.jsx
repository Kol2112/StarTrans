import { useTranslation } from "react-i18next";
import Captions from "../components/Captions";
export default function About(){
    const { t } = useTranslation();
    return(
        <>
        <Captions captionTitle={t('Service')} captionDesc={t('Specjalizacja')}/>
            <h2>{t('test')}</h2>
        </>
    )
}