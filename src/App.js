import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./header";
import SessionsPage from "./pages/sessions";
import IntroPage from './pages/intro';
import MainPage from "./pages/main";
import SourcesPage from "./pages/sources";
import AboutPage from "./pages/about";
import ScrollToTop from './helpers/scrolltotop';
import React, { useState } from 'react';
import { headerLinksContainerClassName } from './collections/layout';

const initialHeaderState = {
  isMainActive: false,
  isSessionsActive: false,
  isSourcesActive: false,
  isAboutMeActive: false
}
let buttonMainWasClicked = true;
export default function App() {
  const [language, setLanguage] = useState('nl');
  const [isMainButtonClicked, setIsMainButtonClicked] = useState(false);
  const setLanguageToDutch = () => {
    setLanguage('nl');
  }
  const setLanguageToEnglish = () => {
    setLanguage('en');
  }
  const setMainHeaderViaIntroButton = () => {
    setIsMainButtonClicked((prevState) => !prevState)
  }

  return (
    <React.Fragment>
      <BrowserRouter basename='/dharma_page/'>
      <ScrollToTop />
        <Header
          lang={language} 
          setToDutch={setLanguageToDutch}
          setToEnglish={setLanguageToEnglish}
          buttonMain={isMainButtonClicked}
          />
          { 
            <div id='pages-container' className="flex-auto content-center h-full min-h-screen pt-8 md:pt-16 bg-darkyellowtrees bg-fixed bg-center bg-repeat-y">
              <Routes>
                <Route path='/' element={<IntroPage lang={language} buttonClick={setMainHeaderViaIntroButton} buttonMain={isMainButtonClicked}/>}/>
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