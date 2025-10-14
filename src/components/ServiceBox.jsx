import '../styles/ServiceBox.scss'

export default function ServiceBox({img, title, desc}){
    return(
        <section className='contentBox marginContent'>
            <img src={img} alt="" />
            <h1 className='contentTitle'>{title}</h1>
            <p className='contentText'>{desc}</p>
            <button>Zamów usługę</button>
        </section>
    )
}