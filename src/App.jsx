import { Route, Routes } from 'react-router';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import MainPage from './Pages/MainPage.jsx';
import Service from './Pages/Service.jsx';
import About from './Pages/About.jsx';
import Carrier from './Pages/Carrier.jsx';
import Contact from './Pages/Contact.jsx';
import './App.scss'


function App() {
  return (
    <>
    <Header />
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
