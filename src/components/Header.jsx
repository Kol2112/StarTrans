import React from "react";
import Nav from './Nav.jsx'
import '../styles/Header.css'

export default function Header({headingCap, headingSMCap, bckgrnd}){
    return(
        <header className={bckgrnd}>
            <Nav />
            <div id='motto'>
                <h1>{headingCap}</h1>
                <p>{headingSMCap}</p>
            </div>

        </header>
    )
}