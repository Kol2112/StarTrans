import '../styles/Adv.scss'
export default function Adv({img, desc}){
    return(
        <section style={{width:'30%', height:'8rem', border:'solid white 2px'}} className='marginContent advItem'>
            <img className="advItemContent" src={img} alt="ddd" />
            <p className="advItemContent">{desc}</p>
        </section>
    )
}