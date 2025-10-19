import Captions from "../components/Captions.jsx"
import InfoBox from '../components/InfoBox.jsx';
import Button from '../components/Button.jsx'



import sup from '../assets/img/supply-chain-representation-still-life.jpg'
import secondImg from '../assets/img/top-view-delivery-truck-with-copy-space.jpg'
import truck from '../assets/icons/truck.png'
import deadline from '../assets/icons/deadline.png'
import radar from '../assets/icons/radar.png'
import idea from  '../assets/icons/idea.png'
import rating from '../assets/icons/rating.png'
export default function Service(){

    return(
        <>
            <Captions captionTitle={'Nasze usługi'} captionDesc={'To oferujemy'}/>
            <section className='box marginContent' style={{width: "100%"}}>
                <img src={sup} alt="Zdjęcie kierowcy z telefonem" />
                <div>
                    <Captions captionTitle={'Transport'} captionDesc={'Bezpieczne i terminowe przewozy w kraju i za granicą'}>Historia</Captions>
                    <p className="desc">Naszą specjalnością jest kompleksowa obsługa transportowa na terenie całej Polski oraz Europy. Dzięki nowoczesnej flocie pojazdów, regularnie serwisowanych i dostosowanych do różnych rodzajów ładunków, gwarantujemy pełne bezpieczeństwo i najwyższy standard przewozu. Każde zlecenie traktujemy indywidualnie – dopasowując rozwiązania do charakteru towaru, wymagań klienta oraz specyfiki trasy. Zespół naszych doświadczonych kierowców i logistyków czuwa nad każdym etapem realizacji przewozu, aby zapewnić terminowość i pełną kontrolę nad transportem. Oferujemy elastyczne formy współpracy, szybki kontakt i wsparcie na każdym etapie – od planowania, przez załadunek, aż po dostarczenie przesyłki do miejsca docelowego. Z nami Twoje towary zawsze dotrą na czas – bezpiecznie i w najlepszych warunkach.</p>
                </div>
            </section>
            <section className='box marginContent'>
                <div>
                    <Captions captionTitle={'Transport'} captionDesc={'Bezpieczne i terminowe przewozy w kraju i za granicą'} >Historia</Captions>
                    <p className="desc">Świadczymy kompleksowe usługi spedycyjne, zapewniając pełną obsługę logistyczną dla firm i klientów indywidualnych. Naszym celem jest to, aby każdy ładunek dotarł do miejsca przeznaczenia szybko, bezpiecznie i w najbardziej optymalny sposób.

Zajmujemy się planowaniem całej trasy, doborem odpowiedniego środka transportu, organizacją niezbędnych dokumentów oraz koordynacją wszystkich etapów przewozu. 

Nasz zespół spedytorów dba o stały kontakt z klientem i bieżące monitorowanie przesyłki, dzięki czemu masz pewność, że Twój towar jest w dobrych rękach od momentu załadunku aż po dostarczenie do odbiorcy.

Z nami zyskujesz spokój i pewność, że Twoja logistyka działa bez zakłóceń.</p>
                </div>
                <img src={secondImg} alt="Zdjęcie kierowcy z telefonem" />
            </section>

            <Captions captionTitle={'Dlaczego my'} captionDesc={'To nas wyróżnia'}/>
            <div className="flex flexAround marginContent">
                <InfoBox img={truck} desc='Nowoczesna flota' width='12vw' height='20vh'/>     
                <InfoBox img={deadline} desc='Terminowość' width='12vw' height='20vh'/>     
                <InfoBox img={radar} desc='Zasięg krajowy i międzynarodowy' width='12vw' height='20vh'/>     
                <InfoBox img={truck} desc='Stały kontakt i monitoring' width='12vw' height='20vh'/>     
                <InfoBox img={rating} desc='Doświadczony zespół' width='12vw' height='20vh'/>     
                <InfoBox img={idea} desc='Indywidualne podejście' width='12vw' height='20vh'/>     
            </div>
            <section className="flex" id='ContactButton'>
                <h1>Potrzebujesz naszej usługi?</h1>
                <p>Skontaktuj się z nami</p>
                <Button text='Kontakt' />
            </section>

        </>
    )
}