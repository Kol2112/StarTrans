import '../styles/Shared.scss'
export default function Captions({captionTitle, captionDesc}){
    return(
        <section className='marginContent'>
            <div className="border">
                <h1 className='captionTitle'>{captionTitle}</h1>
                <p className='captionDesc'>{captionDesc}</p>
            </div>
        </section>
    )
}