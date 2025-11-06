import '../styles/Caption.css'
export default function Captions({captionTitle, captionDesc, style}){
    return(
        <section className='marginContent leftMargin' style={style}>
            <div className="border">
                <h1 className='captionTitle'>{captionTitle}</h1>
                <p className='captionDesc'>{captionDesc}</p>
            </div>
        </section>
    )
}