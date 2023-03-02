import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import FaqPage from './faqpage';
import Footer from '../footer';
import { retrieveLabel } from '../helpers/labelhelper.js';
import { 
    paragraphClassName,
    aboutContainerHiddenClassName,
    aboutContainerClassName, 
    } from '../collections/layout.js';


export default function AboutPage(props){
    const [footerFadeOut, setFooterFadeOut] = useState(false);
    const [containerVisibleClassName, setContainerVisibleClassName] = useState(aboutContainerHiddenClassName);
    
    useEffect(()=>{
            setTimeout(() => setContainerVisibleClassName(() => aboutContainerClassName), 100);
        return (() => {

        })
    }, []);

    useEffect(() => {
        if(props.canFadeOut === true && props.preflight !== '/about') {
          setContainerVisibleClassName(() => aboutContainerHiddenClassName);
          setFooterFadeOut(() => true);
        }
      }, [props.canFadeOut, props.preflight])

    const about_paragraph_1 = retrieveLabel('about.paragraph_1', props.lang);
    const about_paragraph_2 = retrieveLabel('about.paragraph_2', props.lang);
    const about_paragraph_3 = retrieveLabel('about.paragraph_3', props.lang);

    return( 
        <React.Fragment>
        <div className="mt-32 h-4 md:mt-0"></div>
            <div className= {containerVisibleClassName}>
                
                <div className="mt-4 ">
                <div className="container float-right w-52 h-52 mr-10 ml-4 mt-4">
                    <img src='me.png' alt='icon' className="object-cover rounded-2xl"></img>
                </div>
                <div className={paragraphClassName}>{about_paragraph_1}</div>
                <div className={paragraphClassName}>{about_paragraph_2}</div>
                </div>
                <div className={paragraphClassName}><ReactMarkdown>{about_paragraph_3}</ReactMarkdown></div>     
            </div>
            <FaqPage lang={props.lang} canFadeOut={props.canFadeOut} preflight={props.preflight}/>
            <Footer lang={props.lang} fadeOut={footerFadeOut} />
        </React.Fragment>
        
    )
}