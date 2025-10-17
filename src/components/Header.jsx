import React from "react";
import Nav from './Nav.jsx'

import '../styles/Header.scss'

export default function Header({motto}){

    return(
        <header>
            <Nav />
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