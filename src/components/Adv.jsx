import '../styles/Adv.css'
export default function Adv({img, desc, height}){
    return(
        <section className='marginContent advItem'>
            <img style={{height: height}}className="advItemContent" src={img} alt="ddd" />
            <p className="advItemContent">{desc}</p>
        </section>
    )
}