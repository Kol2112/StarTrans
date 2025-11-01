import React from "react";
import Nav from './Nav.jsx'
import { useTranslation } from "react-i18next";
import '../styles/Header.scss'

export default function Header({motto}){
    const { t } = useTranslation();
    return(
        <header>
            <Nav />
            <div id='motto'>
                {motto}
                <h1>{t('headingCaption')}
                </h1>
                <p>{t('headingSmCaption')}</p>
            </div>

        </header>
    )
}