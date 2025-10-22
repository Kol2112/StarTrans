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
            
            <div className="navi">
                <div className={pos}>

                    <div id='logo'>
                        <NavLink to='/'><img src={Logo} alt="Logo firmy" id='img'/></NavLink>
                    </div>
                    <nav>   
                        <NavLink to='/Usługi'>Usługi</NavLink>
                        <NavLink to='/O-nas'>O firmie</NavLink>
                        <NavLink to='/Kariera'>Kariera</NavLink>
                        <NavLink to='/Kontakt'>Kontakt</NavLink>
                    </nav>

                </div>
                <div id='Tooltip' className={pos}>
                    <ThemeToggler />
                    <div className='lang'>
                        <p>PL</p>
                        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="10" fill="white"/>
                            <path d="M10 13l5 5 5-5" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                </div>
            </div>
        </>
    )
}