import { NavLink } from "react-router";
import {useState} from 'react';
import { useTranslation } from "react-i18next";
import Logo from '../assets/logo/StarTransLogo.png'
import ThemeToggler from "./ThemeToggler.jsx";
import LanguageDropdown from "./LanguageDropdown.jsx";
import '../styles/Nav.scss'
export default function Nav(){
    const { t } = useTranslation();
    const [pos, setNewPos] = useState(null);

    function resetScrollHandle(){
        window.scroll(0,0)
    }

    window.onscroll = function(){
            if(this.window.pageYOffset > 50){
                setNewPos('bckgrnd');
            }else{
                setNewPos(null)
            }
    }
    return(
        <>
            
            <div className="navi">
                <div className={pos}>

                    <div id='logo'>
                        <NavLink to='/'><img src={Logo} alt="Logo firmy" id='img' onClick={resetScrollHandle}/></NavLink>
                    </div>
                    <nav>   
                        <NavLink to='/Usługi' onClick={resetScrollHandle}>{t('service')}</NavLink>
                        <NavLink to='/O-nas' onClick={resetScrollHandle}>{t('aboutNavi')}</NavLink>
                        <NavLink to='/Kariera' onClick={resetScrollHandle}>{t('carrierNavi')}</NavLink>
                        <NavLink to='/Kontakt' onClick={resetScrollHandle}>{t('contactNavi')}</NavLink>
                    </nav>

                </div>
                <div id='Tooltip' className={pos}>
                    <ThemeToggler />
                    <LanguageDropdown />

                </div>
            </div>
        </>
    )
}