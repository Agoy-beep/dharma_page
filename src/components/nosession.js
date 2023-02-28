import React, {useState, useEffect} from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import ReactMarkdown from 'react-markdown';
import { containerHiddenClassName,
  sessionContainerClassName,
  paragraphClassName,
  titleSubClassName,
  nosessionContainerClassName,
  nosessionContainerHiddenClassName, 
   } from '../collections/layout.js';

   export default function NoSession(props) {
     const [containerVisibleClassName, setContainerVisibleClassName] = useState(nosessionContainerHiddenClassName);
     console.log('NO SESSION LOADED');
     console.log('NO SESSION VISIBLE CONTAINER ', containerVisibleClassName);
     
     useEffect(()=>{
       setContainerVisibleClassName(() => nosessionContainerClassName);
      }, []);

      useEffect(() => {
        if(props.canFadeOut === true) {
          setContainerVisibleClassName(() => nosessionContainerHiddenClassName);
          return props.fireNavigator(); 
        }
      }, [props.canFadeOut])
      
    return (
      <div className={containerVisibleClassName}>
        <div className="text-4xl md:text-xl my-2 md:my-4 mx-8 md:ml-4 md:mr-4 xl:mr-8 xl:ml-8 text-left uppercase">{props.subject}</div>
        <div className={paragraphClassName}><ReactMarkdown>{props.description}</ReactMarkdown></div>
      </div>
    )

   }