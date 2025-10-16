import Captions from "../components/Captions.jsx";
import Adv from "../components/Adv.jsx";
import '../styles/Carrier.scss'

import img from '../assets/img/satisfied-businessman-company-employer-wearing-suit-handshake-new-employee-get-hired-job-interview-man-hr-manager-employ-successful-candidate-shake-hand-business-meeting-placement-concept.jpg'
export default function Carrier(){
    return(
        <>
            <Captions captionTitle={'Kariera'} captionDesc={'Nie czekaj i dołącz do naszego zespołu'}/>
            <section className="content">
                <div className="flex">
                    <div>
                        <p className="text">Szukasz stabilnej pracy w dynamicznie rozwijającej się branży? 
                        U nas zyskasz nie tylko pewne zatrudnienie, ale także wsparcie zespołu, nowoczesną flotę i realne możliwości rozwoju. 
                        </p>
                        
                        <p className="text">Stawiamy na profesjonalizm, bezpieczeństwo i partnerskie relacje – z klientami i pracownikami.</p>


                        <p className="text">Razem budujemy przyszłość transportu – <span style={{color:"#07931C"}}>dołącz do nas już dziś!</span></p>
                    </div>
                    <img src={img} alt="Zdjęcie podania rąk" />
                </div>
                <div className="CV">
                    <h2>Osoby zainteresowane prosimy o przesyłanie CV na email.</h2>
                    <p className="text">Prosimy o załączeniu klauzuli RODO na końcu CV:</p>
                    <p className='text'><i><q>Wyrażam zgodę na przetwarzanie danych osobowych zawartych w mojej ofercie 
                        pracy dla potrzeb niezbędnych do realizacji procesu rekrutacji prowadzonego przez StarTrans 
                        siedzibą w Leżajsku zgodnie z ustawą z dnia 29 sierpnia 1997 r. o ochronie danych osobowych 
                        (tj. Dz. U. z 2014 r. poz. 1182, 1662)
                    </q></i>.</p>
                </div>
            </section>
            <Captions captionTitle={'Dlaczego warto u nas pracować?'} captionDesc={'Poznaj korzyści, które czekają właśnie na Ciebie!'}/>
            <div className="flex advantage">
                <Adv img='' desc='Test' width='200px' height='100px'/>
                <Adv img='' desc='Test' width='200px' height='100px'/>
                <Adv img='' desc='Test' width='200px' height='100px'/>
            </div>
        </>
    )
}