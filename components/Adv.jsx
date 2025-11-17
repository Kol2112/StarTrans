import '../styles/Adv.css'
export default function Adv({img, desc}){
    return(
        <section style={{}} className='marginContent advItem'>
            <img className="advItemContent" src={img} alt="ddd" />
            <p className="advItemContent">{desc}</p>
        </section>
    )
}