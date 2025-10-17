import { NavLink } from "react-router";
import {useState} from 'react';
import Logo from '../assets/logo/StarTransLogo.png'
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
                </div>
            </div>
        </>
    )
}