import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import Button from './Button.jsx'
import '../styles/ServiceBox.css'
export default function ServiceBox({img, title, desc, onChange}){
    const {t} = useTranslation();
    return(
        <section className='contentBox'>
            <img src={img} alt="" onChange={onChange}/>
            <h1 className='contentTitle'>{title}</h1>
            <p className='contentText'>{desc}</p>
            <NavLink to='/Contact'><Button text={t('orderService')} /></NavLink>
        </section>
    )
}