import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./header";
import SessionsPage from "./pages/sessions";
import IntroPage from './pages/intro';
import Footer from './footer';
import MainPage from "./pages/main";
import SourcesPage from "./pages/sources";
import AboutPage from "./pages/about";
import ScrollToTop from './helpers/scrolltotop';
import React, { useState } from 'react';
import { headerLinksContainerClassName } from './collections/layout';

export default function App() {
  const [language, setLanguage] = useState('nl');
  const [destination, setDestination] = useState();
  const [isMainButtonClicked, setIsMainButtonClicked] = useState(false);

  const clickHomeLink = () => {
    setDestination(() => '/');
    setIsMainButtonClicked();
  }
  const clickMainLink = () => setDestination(() => '/main');
  const clickSessionsLink = () => {
    setDestination(() => '/sessions');
    setIsMainButtonClicked();
  }
  const clickSourcesLink = () => {
    setDestination(() => '/sources');
    setIsMainButtonClicked();
  }
  const clickAboutMeLink = () => {
    setDestination(() => '/about');
    setIsMainButtonClicked();
  }

  const setLanguageToDutch = () => {
    setLanguage('nl');
  }
  const setLanguageToEnglish = () => {
    setLanguage('en');
  }
  const setMainHeaderViaIntroButton = () => {
    setIsMainButtonClicked((prevState) => !prevState);
    setDestination(() => '/main')
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
          clickHomeLink={clickHomeLink}
          clickMainLink={clickMainLink}
          clickSessionsLink={clickSessionsLink}
          clickSourcesLink={clickSourcesLink}
          clickAboutMeLink={clickAboutMeLink}
          destination={destination}
          />
          { 
            <div id='pages-container' className="flex-auto content-center h-full min-h-screen pt-8 md:pt-16 bg-darkyellowtrees bg-fixed bg-center bg-repeat-y">
              <Routes>
                <Route path='/' element={<IntroPage lang={language} buttonClick={setMainHeaderViaIntroButton}/>}/>
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