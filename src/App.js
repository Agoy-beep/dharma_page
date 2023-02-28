import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./header";
import SessionsPage from "./pages/sessions";
import IntroPage from './pages/intro';
import Footer from './footer';
import MainPage from "./pages/main";
import SourcesPage from "./pages/sources";
import AboutPage from "./pages/about";
import ScrollToTop from './helpers/scrolltotop';

export default function App() {
  const [language, setLanguage] = useState('nl');
  const [preflightDestination, setPreflightDestination] = useState();
  const [destination, setDestination] = useState();
  const [canFadeOut, setCanFadeOut] = useState(false);
  // !!!!! set to true for testing
  const [canFireNavigator, setCanFireNavigator] = useState(true);
  const [isMainButtonClicked, setIsMainButtonClicked] = useState(false);
  console.log('IN APP');
  console.log('CAN FADE OUT ', canFadeOut);
  console.log('CAN FIRE NAVIGATOR ', canFireNavigator);
  console.log('PREFLIGHT ', preflightDestination);
  const fireNavigator = () => {
    return setCanFireNavigator(()=> true)
  }

  useEffect(() => {
    if(canFireNavigator === true) {
      console.log('FIRED NAVIGATOR IN APP');
      setTimeout(() => setDestination(() => preflightDestination), 700)
      setIsMainButtonClicked();
      setCanFadeOut(() => false);
      // setCanFireNavigator(()=> false);
    }
  }, [canFireNavigator, preflightDestination])

  const clickHomeLink = () => {
    setCanFadeOut(() => true);
    setPreflightDestination(()=>'/');
  }

  const clickMainLink = () => { 
    setCanFadeOut(() => true);
    setPreflightDestination(()=>'/main');
  };

  const clickSessionsLink = () => {
    setCanFadeOut(() => true);
    setPreflightDestination(()=>'/sessions');
   }
  const clickSourcesLink = () => {
    setCanFadeOut(() => true);
    setPreflightDestination(()=>'/sources');
  }
  const clickAboutMeLink = () => {
    setCanFadeOut(() => true);
    setPreflightDestination(()=>'/about');
  }

  const setLanguageToDutch = () => {
    setLanguage('nl');
  }
  const setLanguageToEnglish = () => {
    setLanguage('en');
  }
  const setMainHeaderViaIntroButton = () => {
    setTimeout(() => setDestination(() => '/main'), 700);
    setIsMainButtonClicked((prevState) => !prevState);
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
          preflight={preflightDestination}
          />
          { 
            <div id='pages-container' className="flex-auto content-center h-full min-h-screen pt-8 md:pt-16 bg-darkyellowtrees bg-fixed bg-center bg-repeat-y md:bg-repeat-x">
              <Routes>
                <Route path='/' element={<IntroPage 
                                            lang={language} 
                                            buttonClick={setMainHeaderViaIntroButton} 
                                            destination={destination} 
                                            canFadeOut={canFadeOut} 
                                            // fireNavigator={fireNavigator}
                                            preflight={preflightDestination}/>}/>
                <Route path='/main' element={<MainPage 
                                            lang={language}
                                            destination={destination} 
                                            canFadeOut={canFadeOut} 
                                            // fireNavigator={fireNavigator}
                                            preflight={preflightDestination}/>} />
                <Route path='/sessions' element={<SessionsPage 
                                            lang={language}
                                            destination={destination} 
                                            canFadeOut={canFadeOut} 
                                            // fireNavigator={fireNavigator}
                                            preflight={preflightDestination}/>} />
                <Route path='/sources' element={<SourcesPage 
                                            lang={language}
                                            destination={destination} 
                                            canFadeOut={canFadeOut} 
                                            // fireNavigator={fireNavigator}
                                            preflight={preflightDestination}/>} />
                <Route path='/about' element={<AboutPage 
                                            lang={language}
                                            destination={destination} 
                                            canFadeOut={canFadeOut} 
                                            // fireNavigator={fireNavigator}
                                            preflight={preflightDestination}/>} />
              </Routes>
            </div>
          }
      
    </BrowserRouter>
    {/* <Footer lang={language}/> */}
  </React.Fragment>
  )
}