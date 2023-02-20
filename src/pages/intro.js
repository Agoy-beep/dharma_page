import React, { useEffect, useState} from 'react';
import Footer from '../footer';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { retrieveLabel, markdownParser } from '../helpers/labelhelper';
import { containerClassName, 
  containerHiddenClassName,
  paragraphClassName, 
  divClassName, 
  buttonClassName } from '../collections/layout.js';

  // let navigate = 'false';

export default function Intro(props) {
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
  // const navigateAway = () => {
  //   navigate = 'true';
  // }
    
  useEffect(()=>{
      setContainerVisibleClassName(() => containerClassName);
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
  <div className="mt-24 md:mt-0"></div>
    <div className= {containerVisibleClassName}>
    {/* <h1 className={titleClassName}>{main_title_1}</h1> */}
      <div className="text-2xl my-8 text-center">{intro_div_par1_1}</div>
      <p className={paragraphClassName}><ReactMarkdown>{intro_paragraph_1}</ReactMarkdown></p>
      <p className={paragraphClassName}><ReactMarkdown>{intro_paragraph_2}</ReactMarkdown></p>
      <p className={paragraphClassName}>{intro_paragraph_3}</p>
      <div className={divClassName}>{intro_div_par1_2}</div>
      {/* <div className={divClassName}>{intro_div_par1_3}</div> */}
      <button className={buttonClassName}><Link to= "/main">{to_the_text}</Link></button>
    </div>
    <Footer lang={props.lang}/>
  </React.Fragment>
 )
}