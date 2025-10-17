import '../styles/infoBox.scss';
export default function InfoBox({img='#', desc, width, height, shadow}){
    return(
        <section style={{width: width, height: height, boxShadow: shadow}} className=' container'>
            <img src={img} alt="ddd" />
            <p>{desc}</p>
        </section>
    )
}