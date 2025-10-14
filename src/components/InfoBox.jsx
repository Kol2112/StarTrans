import '../styles/infoBox.scss';
export default function InfoBox({img, desc}){
    return(
        <section className='marginContent container :before'>
            <img src={img} alt="ddd" />
            <p>{desc}</p>
        </section>
    )
}