import React from "react";
import Nav from './Nav.jsx'
import '../styles/Header.css'

export default function Header({headingCap, headingSMCap, bckgrnd, style}){
    return(
        <header className={bckgrnd} style={style}>
            <Nav />
            <div id='motto'>
                <h1>{headingCap}</h1>
                <p>{headingSMCap}</p>
            </div>

        </header>
    )
}