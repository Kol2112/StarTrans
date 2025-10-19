import { NavLink } from "react-router";
import {useState} from 'react';
import Logo from '../assets/logo/StarTransLogo.png'
import ThemeToggler from "./ThemeToggler.jsx";
import '../styles/Nav.scss'
export default function Nav(){
    const [pos, setNewPos] = useState(null);
    window.onscroll = function(){
            if(this.window.pageYOffset > 50){
                setNewPos('bckgrnd');
            }else{
                setNewPos(null)
            }
    }


    return(
        <>
            
            <div id='navi' className={pos}>
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
                    <ThemeToggler />
                    <p>PL</p>
                    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="white"/>
                        <path d="M12 16l8 8 8-8" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
            </div>
        </>
    )
}