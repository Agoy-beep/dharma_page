import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  paragraphClassName,
  nosessionContainerClassName,
  nosessionContainerHiddenClassName, 
   } from '../collections/layout.js';

   export default function NoSession(props) {
     const [containerVisibleClassName, setContainerVisibleClassName] = useState(nosessionContainerHiddenClassName);
     
     useEffect(()=>{
       setContainerVisibleClassName(() => nosessionContainerClassName);
      }, []);

      useEffect(() => {
        if(props.canFadeOut === true && props.preflight !== '/sessions') {
          setContainerVisibleClassName(() => nosessionContainerHiddenClassName); 
        }
      }, [props.canFadeOut, props.preflight])
      
    return (
      <div className={containerVisibleClassName}>
        {/* <div className="text-3xl md:text-xl my-2 md:my-4 mx-8 md:ml-4 md:mr-4 xl:mr-8 xl:ml-8 text-left uppercase">{props.subject}</div> */}
        <div className={paragraphClassName}><ReactMarkdown>{props.description}</ReactMarkdown></div>
      </div>
    )

   }