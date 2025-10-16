import React from "react";
import '../styles/Header.scss'
import Logo from '../assets/logo/StarTransLogo.png'
import { NavLink } from "react-router";
export default function Header({motto}){

    return(
        <header>
            <div id='navi' className="bckgrnd">
                <div id='logo'>
                    <NavLink to='/'><img src={Logo} alt="Logo firmy" id='img'/></NavLink>
                </div>
                <nav>   
                    <NavLink to='/Usługi'>Usługi</NavLink>
                    <NavLink to='/O-nas'>O firmie</NavLink>
                    <NavLink to='/Kariera'>Kariera</NavLink>
                    <NavLink to='/Kontakt'>Kontakt</NavLink>
                </nav>
                <div id='Tooltip'>

                </div>
            </div>
            <div id='motto'>
                {motto}
                <h1>Twój biznes w ruchu, nasza
                misja w drodze.
                </h1>
                <p>Transport i spedycja</p>
            </div>

        </header>
    )
}