import '../styles/Adv.scss'
export default function Adv({img, desc, width, height}){
    return(
        <section style={{width: width, height: height, border:'solid white 2px'}} className='marginContent advItem'>
            <img src={img} alt="ddd" />
            <p>{desc}</p>
        </section>
    )
}