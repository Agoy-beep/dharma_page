import React, { useEffect, useState} from 'react';
import Footer from '../footer';
import { Link } from "react-router-dom";
import { retrieveLabel } from '../helpers/labelhelper';
import { containerClassName, 
  containerHiddenClassName,
  titleClassName, 
  paragraphClassName, 
  divClassName, 
  quoteClassName, 
  paragraphBottomClassName, 
  titleSubClassName,
  buttonClassName } from '../collections/layout.js';

export default function Intro(props) {
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => containerClassName);
    }, []);

  const intro_paragraph_1 = retrieveLabel('intro.paragraph_1', props.lang);
  const intro_paragraph_2 = retrieveLabel('intro.paragraph_2', props.lang);
  const intro_paragraph_3 = retrieveLabel('intro.paragraph_3', props.lang);
  const intro_div_par1_1 = retrieveLabel('intro.div_1', props.lang);
  const intro_div_par1_2 = retrieveLabel('intro.div_2', props.lang);
  const intro_div_par1_3 = retrieveLabel('intro.div_3', props.lang);
  const to_the_text = retrieveLabel('intro.button', props.lang);
 return (
  <React.Fragment>
    <div className= {containerVisibleClassName}>
    {/* <h1 className={titleClassName}>{main_title_1}</h1> */}
      <div className="text-2xl my-8 text-center">{intro_div_par1_1}</div>
      <p className={paragraphClassName}>{intro_paragraph_1}</p>
      <p className={paragraphClassName}>{intro_paragraph_2}</p>
      <p className={paragraphClassName}>{intro_paragraph_3}</p>
      <div className={divClassName}>{intro_div_par1_2}</div>
      {/* <div className={divClassName}>{intro_div_par1_3}</div> */}
      <button className={buttonClassName}><Link to= "/main">{to_the_text}</Link></button>
    </div>
    <Footer lang={props.lang}/>
  </React.Fragment>
 )
}