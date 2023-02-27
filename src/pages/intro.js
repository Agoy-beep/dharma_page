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
  buttonClassName, 
  topFiller} from '../collections/layout.js';

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
  <div className={topFiller}></div>
    <div className= {containerVisibleClassName}>
    {/* <h1 className={titleClassName}>{main_title_1}</h1> */}
      <div className={paragraphClassName}>{intro_div_par1_1}</div>
      <div className={paragraphClassName}><ReactMarkdown>{intro_paragraph_1}</ReactMarkdown></div>
      <div className={paragraphClassName}><ReactMarkdown>{intro_paragraph_2}</ReactMarkdown></div>
      <div className={paragraphClassName}>{intro_paragraph_3}</div>
      <div className={paragraphClassName}>{intro_div_par1_2}</div>
      {/* <div className={divClassName}>{intro_div_par1_3}</div> */}
      <button className={buttonClassName} onClick={props.buttonClick}><Link to= "/main">{to_the_text}</Link></button>
    </div>
    {/* <div className={containerVisibleClassName}>
      <h1 className={titleClassName}>Werken aan de website</h1>
      <h3 className={titleSubClassName}>Verbeteringen die feedback kunnen gebruiken</h3>
      <div className={paragraphClassName}><ol>
        <li>- Uitzicht voor smartphones</li>
        <li>- Rooster/lijst van bronnen bij pc schermen</li>
        <li>- Algemene lay-out</li>
        <li>- Aangepaste inleidingstekst</li>
      </ol></div>
      <h3 className={titleSubClassName}>Verbeteringen waar op dit moment aan gewerkt wordt</h3>
      <div className={paragraphClassName}><ol>
        <li>- Samenstelling van kalenderelementen wordt nog uitgebreid</li>
        <li>- Paginaovergangen</li>
      </ol></div>
    </div> */}
    <Footer lang={props.lang}/>
  </React.Fragment>
 )
}