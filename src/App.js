import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./header";
import SessionsPage from "./pages/sessions";
import IntroPage from './pages/intro';
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
            <div id='pages-container' className="flex-auto content-center h-full min-h-screen mt-12 pt-8 bg-darkyellowtrees bg-fixed bg-repeat-y">
              <Routes>
                <Route path='/' element={<IntroPage lang={language}/>} />
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