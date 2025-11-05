import '../styles/Captions.scss'
export default function Captions({captionTitle, captionDesc, style}){
    return(
        <section className='marginContent' style={style}>
            <div className="border">
                <h1 className='captionTitle'>{captionTitle}</h1>
                <p className='captionDesc'>{captionDesc}</p>
            </div>
        </section>
    )
}