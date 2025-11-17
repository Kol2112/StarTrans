import '../styles/infoBox.css';
export default function InfoBox({img='#', desc, width, height, shadow, type}){
    return(
        <section style={{width: width, height: height, boxShadow: shadow}} className={`container ${type}`}>
            <img src={img} alt="ddd" />
            <p>{desc}</p>
        </section>
    )
}