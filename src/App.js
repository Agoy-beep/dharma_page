import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";
import InfoPage from "./pages/info";
import MainPage from "./pages/main";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import React, { useState } from 'react';

export default function App() {
  const [language, setLanguage] = useState('nl');
  const setLanguageToDutch = () => {
    setLanguage('nl');
  }
  const setLanguageToEnglish = () => {
    setLanguage('en');
}

  return (
    <BrowserRouter>
    <Header lang={language} setToDutch={setLanguageToDutch} setToEnglish={setLanguageToEnglish}/>
      { 
        <div id='pages-container' className="flex-1 h-screen my-36 mx-60">
          <Routes>
            <Route path='/' element={<MainPage lang={language}/>} />
            <Route path='info' element={<InfoPage lang={language}/>} />
            <Route path='main' element={<MainPage lang={language}/>} />
            <Route path='about' element={<AboutPage lang={language}/>} />
            <Route path='contact' element={<ContactPage lang={language}/>} />
          </Routes>
        </div>
      }
    <Footer lang={language}/>
  </BrowserRouter>
  )
}