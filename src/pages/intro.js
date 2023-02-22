import React, { useEffect, useState} from 'react';
import Footer from '../footer';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { retrieveLabel, markdownParser } from '../helpers/labelhelper';
import { containerClassName, 
  containerHiddenClassName,
  paragraphClassName,
  titleSubClassName,
  titleClassName,
  divClassName, 
  buttonClassName } from '../collections/layout.js';

export default function Intro(props) {
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
  
    
  useEffect(()=>{
      setContainerVisibleClassName(() => containerClassName);
      props.buttonClick()
  }, []);

  // useEffect(()=>{
  //   setContainerVisibleClassName(() => containerHiddenClassName);
  // }, [navigate === 'true']);

  const intro_paragraph_1 = retrieveLabel('intro.paragraph_1', props.lang);
  const intro_paragraph_2 = retrieveLabel('intro.paragraph_2', props.lang);
  const intro_paragraph_3 = retrieveLabel('intro.paragraph_3', props.lang);
  const intro_div_par1_1 = retrieveLabel('intro.div_1', props.lang);
  const intro_div_par1_2 = retrieveLabel('intro.div_2', props.lang);
  const intro_div_par1_3 = retrieveLabel('intro.div_3', props.lang);
  const to_the_text = retrieveLabel('intro.button', props.lang);
 return (
  <React.Fragment>
  <div className="mt-32 h-4 md:mt-0"></div>
    <div className= {containerVisibleClassName}>
    {/* <h1 className={titleClassName}>{main_title_1}</h1> */}
      <div className={paragraphClassName}>{intro_div_par1_1}</div>
      <p className={paragraphClassName}><ReactMarkdown>{intro_paragraph_1}</ReactMarkdown></p>
      <p className={paragraphClassName}><ReactMarkdown>{intro_paragraph_2}</ReactMarkdown></p>
      <p className={paragraphClassName}>{intro_paragraph_3}</p>
      <div className={paragraphClassName}>{intro_div_par1_2}</div>
      {/* <div className={divClassName}>{intro_div_par1_3}</div> */}
      <button className={buttonClassName} onClick={props.buttonClick}><Link to= "/main">{to_the_text}</Link></button>
    </div>
    <div className={containerVisibleClassName}>
      <div className={titleClassName}>Werken aan de website</div>
      <p className={titleSubClassName}>Verbeteringen die feedback kunnen gebruiken</p>
      <p className={paragraphClassName}><ol>
        <li>- Uitzicht voor smartphones</li>
        <li>- Rooster/lijst van bronnen bij pc schermen</li>
        <li>- Algemene lay-out</li>
      </ol></p>
      <p className={titleSubClassName}>Verbeteringen waar op dit moment aan gewerkt wordt</p>
      <p className={paragraphClassName}><ol>
        <li>- Inleidingtekst wordt nog verder aangepast, zowel qua inhoud als lay-out</li>
        <li>- FAQ/bronnen worden uitgebreid</li>
        <li>- Filterknoppen voor kalender en bronnen</li>
        <li>- Samenstelling van kalenderelementen wordt nog uitgebreid</li>
        <li>- Paginaovergangen</li>
        <li>- Plaats van de footer</li>
      </ol></p>
    </div>
    <Footer lang={props.lang}/>
  </React.Fragment>
 )
}