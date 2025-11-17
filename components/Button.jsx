import '../styles/Button.css'
export default function Button({text, onclick, style}){
    return(
        <>
            <button onClick={onclick} className={style}>{text}</button>
        </>
    )
}