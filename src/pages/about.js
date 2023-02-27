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
        <div className="mt-32 h-4 md:mt-0"></div>
            <div className= {containerVisibleClassName}>
                {/* <h1 className={titleClassName}>{about_title}</h1> */}
                
                <div className="mt-4 ">
                <div className="container float-right w-52 h-52 mr-10 ml-4 mt-4">
                    <img src='me.png' alt='icon' className="object-cover rounded-2xl"></img>
                </div>
                <div className={paragraphClassName}>{about_paragraph_1}</div>
                <div className={paragraphClassName}>{about_paragraph_2}</div>
                </div>
                <div className={paragraphClassName}><ReactMarkdown>{about_paragraph_3}</ReactMarkdown></div>     
            </div>
            <FaqPage lang={props.lang}/>
            <Footer lang={props.lang} />

        </React.Fragment>
        
    )
}