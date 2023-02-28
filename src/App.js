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

export default function App() {
  const [language, setLanguage] = useState('nl');
  const [destination, setDestination] = useState();
  const [isMainButtonClicked, setIsMainButtonClicked] = useState(false);

  const clickHomeLink = () => {
    setTimeout(() => setDestination(() => '/'),20);
    setIsMainButtonClicked();
  }
  const clickMainLink = () => setTimeout(() => setDestination(() => '/main'),20);
  const clickSessionsLink = () => {
    setTimeout(() => setDestination(() => '/sessions'),20);
    setIsMainButtonClicked();
   }
  const clickSourcesLink = () => {
    setTimeout(() => setDestination(() => '/sources'),20);
    setIsMainButtonClicked();
  }
  const clickAboutMeLink = () => {
    setTimeout(() => setDestination(() => '/about'),20);
    setIsMainButtonClicked();
  }

  const setLanguageToDutch = () => {
    setLanguage('nl');
  }
  const setLanguageToEnglish = () => {
    setLanguage('en');
  }
  const setMainHeaderViaIntroButton = () => {
    setTimeout(() => setDestination(() => '/main'), 1000);
    setIsMainButtonClicked((prevState) => !prevState);
    // setDestination(() => '/main');
  }
  const fadeOut = () => {
    console.log('APP FADEOUT IS CALLED');
    setTimeout(() => setDestination(() => '/sessions'), 1000);
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
            <div id='pages-container' className="flex-auto content-center h-full min-h-screen pt-8 md:pt-16 bg-darkyellowtrees bg-fixed bg-center bg-repeat-y md:bg-repeat-x">
              <Routes>
                <Route path='/' element={<IntroPage lang={language} buttonClick={setMainHeaderViaIntroButton} destination={destination} fadeOut={fadeOut}/>}/>
                <Route path='/main' element={<MainPage lang={language}/>} />
                <Route path='/sessions' element={<SessionsPage lang={language}/>} />
                <Route path='/sources' element={<SourcesPage lang={language}/>} />
                <Route path='/about' element={<AboutPage lang={language}/>} />
              </Routes>
            </div>
          }
      
    </BrowserRouter>
    {/* <Footer lang={language}/> */}
  </React.Fragment>
  )
}