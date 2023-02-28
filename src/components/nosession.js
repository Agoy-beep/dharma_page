import React, {useState, useEffect} from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import ReactMarkdown from 'react-markdown';
import { containerHiddenClassName,
  sessionContainerClassName,
  paragraphClassName,
  titleSubClassName,
  nosessionContainerClassName, 
   } from '../collections/layout.js';

   export default function NoSession(props) {
    const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => nosessionContainerClassName);
    }, []);

    return (
      <div className={containerVisibleClassName}>
        <div className="text-4xl md:text-xl my-2 md:my-4 mx-8 md:ml-4 md:mr-4 xl:mr-8 xl:ml-8 text-left uppercase">{props.subject}</div>
        <div className={paragraphClassName}><ReactMarkdown>{props.description}</ReactMarkdown></div>
      </div>
    )

   }