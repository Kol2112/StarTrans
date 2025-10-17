import '../styles/infoBox.scss';
export default function InfoBox({img='#', desc, width, height, shadow}){
    return(
        <section style={{width: width, height: height, border:'solid white 2px', boxShadow: shadow}} className=' container :before'>
            <img src={img} alt="ddd" />
            <p>{desc}</p>
        </section>
    )
}