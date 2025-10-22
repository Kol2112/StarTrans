import { NavLink } from 'react-router'
import '../styles/ServiceBox.scss'
import Button from './Button.jsx'
export default function ServiceBox({img, title, desc}){
    return(
        <section className='contentBox marginContent flexAround'>
            <img src={img} alt="" />
            <h1 className='contentTitle'>{title}</h1>
            <p className='contentText'>{desc}</p>
            <NavLink to='/Kontakt'><Button text='Zamów usługę' /></NavLink>
        </section>
    )
}