import transport from '../assets/icons/mainPage/fast-delivery.png'
import sped from '../assets/icons/mainPage/worldwide-shipping.png'
import aboutPic from '../assets/img/full-shot-man-sitting-truck.jpg'
import quality from '../assets/icons/mainPage/quality.png';
import money from '../assets/icons/mainPage/24-hours.png';
import invest from '../assets/icons/mainPage/investment.png';
import flexy from '../assets/icons/mainPage/continuous.png';

import Captions from '../components/Captions.jsx'
import ServiceBox from '../components/ServiceBox.jsx'
import InfoBox from '../components/InfoBox.jsx';
export default function MainPage(){

    return(
        <>
        <Captions captionTitle={'Usługi'} captionDesc={'W tym się specjalizujemy'}/>
      <div className='flex flexAround'>
        <ServiceBox img={transport} title={'Transport'} desc={'Oferujemy profesjonalne usługi transportowe, zapewniając szybki i bezpieczny przewóz towarów na terenie kraju i za granicą. Dzięki nowoczesnej flocie i doświadczonemu zespołowi gwarantujemy terminową dostawę i pełne wsparcie logistyczne.'}/>
        <ServiceBox img={sped} title={'Spedycja'} desc={'Świadczymy kompleksowe usługi spedycyjne, organizując transport krajowy i międzynarodowy dopasowany do potrzeb klienta. Zajmujemy się całością procesu logistycznego, dbając o optymalne trasy, formalności i bezpieczeństwo przesyłek.'}/>
      </div>
      <Captions captionTitle={'O nas'} captionDesc={'Twoi partnerzy w logistyce'}/>
      <section className='box marginContent' style={{width: "100%"}}>
        <img src={aboutPic} alt="Zdjęcie kierowcy z telefonem" />
        <p>Historia</p>
      </section>
      <Captions captionTitle={'Dlaczego warto nas wybrać?'} captionDesc={'To nas wyróżnia'}/>
      <section className='flex flexAround'>
        <InfoBox img={quality} desc={'Doświadczenie'}/>
        <InfoBox img={money} desc={'Niezawodność w dostarczaniu towaru'}/>
        <InfoBox img={invest} desc={'Konkurencyjna oferta'}/>
        <InfoBox img={flexy} desc={'Elastyczna usługa'}/>
      </section>
      </>
    )
}