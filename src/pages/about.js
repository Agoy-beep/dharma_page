import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import FaqPage from './faqpage';
import Footer from '../footer';
import { retrieveLabel } from '../helpers/labelhelper.js';
import { containerClassName,
    containerHiddenClassName, 
    titleClassName, 
    paragraphClassName, 
    } from '../collections/layout.js';


export default function AboutPage(props){
    const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => containerClassName);
    }, []);

    const about_title = retrieveLabel('about', props.lang);
    const about_paragraph_1 = retrieveLabel('about.paragraph_1', props.lang);
    const about_paragraph_2 = retrieveLabel('about.paragraph_2', props.lang);
    const about_paragraph_3 = retrieveLabel('about.paragraph_3', props.lang);

    return( 
        <React.Fragment>
            <div className= {containerVisibleClassName}>
                <h1 className={titleClassName}>{about_title}</h1>
                <p className={paragraphClassName}>{about_paragraph_1}</p>
                <p className={paragraphClassName}>{about_paragraph_2}</p>
                <p className={paragraphClassName}><ReactMarkdown>{about_paragraph_3}</ReactMarkdown></p>     
            </div>
            <FaqPage lang={props.lang}/>
            <Footer lang={props.lang} />

        </React.Fragment>
        
    )
}