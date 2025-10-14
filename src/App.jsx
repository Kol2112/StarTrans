import { Route, Routes } from 'react-router';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import MainPage from './Pages/MainPage.jsx';
import Service from './Pages/Service.jsx';

import './App.scss'


function App() {
  return (
    <>
    <Header />
    <main id='content'>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='Usługi' element={<Service />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
