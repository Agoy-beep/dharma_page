import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";
import SessionsPage from "./pages/sessions";
import MainPage from "./pages/main";
import SourcesPage from "./pages/sources";
import AboutPage from "./pages/about";
import ScrollToTop from './helpers/scrolltotop';
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
    <React.Fragment>
      <BrowserRouter basename='/dharma_page/'>
      <ScrollToTop />
        <Header 
          lang={language} 
          setToDutch={setLanguageToDutch}
          setToEnglish={setLanguageToEnglish}
          />
          { 
            <div id='pages-container' className="flex-1 h-screen my-36 mx-20">
              <Routes>
                <Route path='/' element={<MainPage lang={language}/>} />
                <Route path='/sessions' element={<SessionsPage lang={language}/>} />
                <Route path='/main' element={<MainPage lang={language}/>} />
                <Route path='/about' element={<AboutPage lang={language}/>} />
                <Route path='/sources' element={<SourcesPage lang={language}/>} />
              </Routes>
            </div>
          }
      
    </BrowserRouter>
    {/* <Footer lang={language}/> */}
  </React.Fragment>
  )
}