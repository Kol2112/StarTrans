import '../styles/infoBox.scss';
export default function InfoBox({img, desc, width, height}){
    return(
        <section style={{width: width, height: height, border:'solid white 2px'}} className='marginContent container :before'>
            <img src={img} alt="ddd" />
            <p>{desc}</p>
        </section>
    )
}