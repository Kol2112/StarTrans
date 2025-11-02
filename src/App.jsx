import { Route, Routes, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import MainPage from './Pages/MainPage.jsx';
import Service from './Pages/Service.jsx';
import About from './Pages/About.jsx';
import Carrier from './Pages/Carrier.jsx';
import Contact from './Pages/Contact.jsx';


import './App.scss';

function App() {

  const {t} = useTranslation();
  const location = useLocation();

    const getHeading = () => {
    const path = decodeURIComponent(location.pathname);
    switch (path) {
      case '/Usługi':
        return { headingCap: t('serviceHeadingCap'), headingSMCap: t('serviceHeadingSmCap'), background: 'secondBackground'};
      case '/O-nas':
        return { headingCap: t('aboutHeadingCap'), headingSMCap: t('aboutHeadingSmCap'), background: 'secondBackground' };
      case '/Kariera':
        return { headingCap: t('carrierHeadingCap'), headingSMCap: t('carrierHeadingSmCap'), background: 'secondBackground' };
      case '/Kontakt':
        return { headingCap: t('contactHeadingCap'), headingSMCap: t('contactHeadingSmCap'), background: 'secondBackground' };
      default:
        return { headingCap: t('headingCaption'), headingSMCap: t('headingSmCaption'), background: 'mainBackground'};
    }
  };

  const { headingCap, headingSMCap, background } = getHeading();


  return (
    <>
    <Header headingCap={headingCap} headingSMCap={headingSMCap} bckgrnd={background}/>
    <main id='content'>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='Usługi' element={<Service />} />
        <Route path='O-nas' element={<About />} />
        <Route path='Kariera' element={<Carrier />} />
        <Route path='Kontakt' element={<Contact />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
