import '../styles/Footer.scss'
export default function Footer(){
    return(
        <footer className='flex flexAround'>
            <p>C 2025 Wszelkie prawa zastrzeżone</p>
            <p>Leżajsk, ulica</p>
            <div className='contact'>
                <p><a href='mailto:#'>mail</a></p>
                <p><a href="tel:#">telefon</a></p>
            </div>
        </footer>
    )
};