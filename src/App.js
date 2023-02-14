import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from "./header";
import Footer from "./footer";
import InfoPage from "./pages/info";
import OfferPage from "./pages/offer";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import React from 'react';

export default function App() {
  const [lang, setLang] = useState('nl');
  const language = document.documentElement.lang;
  const setLanguageToDutch = () => {
    const languageIdTag = document.getElementById('language');
    setLang('nl');
    languageIdTag.lang = lang;
  }
  const setLanguageToEnglish = () => {
    const languageIdTag = document.getElementById('language');
    setLang('en');
    languageIdTag.lang = lang;
}

  return (
    <BrowserRouter>
    <Header lang={language} setToDutch={setLanguageToDutch} setToEnglish={setLanguageToEnglish}/>
      { 
        <div id='pages-container' className="flex-1 h-screen my-36 mx-60">
          <Routes>
            <Route path='/' element={<OfferPage lang={language}/>} />
            <Route path='info' element={<InfoPage lang={language}/>} />
            <Route path='offer' element={<OfferPage lang={language}/>} />
            <Route path='about' element={<AboutPage lang={language}/>} />
            <Route path='contact' element={<ContactPage lang={language}/>} />
          </Routes>
        </div>
      }
    <Footer lang={language}/>
  </BrowserRouter>
  )
}