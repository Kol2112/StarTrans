import { Route, Routes, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import MainPage from './Pages/MainPage.jsx';
import Service from './Pages/Service.jsx';
import About from './Pages/About.jsx';
import Carrier from './Pages/Carrier.jsx';
import Contact from './Pages/Contact.jsx';


import './App.css';
function App() {

  const {t} = useTranslation();
  const location = useLocation();

  const getHeading = () => {
    const path = decodeURIComponent(location.pathname);
    switch (path) {
      case '/Service':
        return { headingCap: t('serviceHeadingCap'), headingSMCap: t('serviceHeadingSmCap'), background: 'secondBackground'};
      case '/About':
        return { headingCap: t('aboutHeadingCap'), headingSMCap: t('aboutHeadingSmCap'), background: 'secondBackground' };
      case '/Career':
        return { headingCap: t('carrierHeadingCap'), headingSMCap: t('carrierHeadingSmCap'), background: 'secondBackground' };
      case '/Contact':
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
        <Route index element={<MainPage title={t('mainPG')}/>} />
        <Route path='Service' element={<Service title={t('service')}/>} />
        <Route path='About' element={<About title={t('aboutNavi')}/>} />
        <Route path='Career' element={<Carrier title={t('carrierNavi')}/>} />
        <Route path='Contact' element={<Contact title={t('contactNavi')}/>} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
