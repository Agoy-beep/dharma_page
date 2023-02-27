import React, {useState, useEffect} from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import ReactMarkdown from 'react-markdown';
import { containerHiddenClassName,
  sessionContainerClassName,
  paragraphClassName,
  titleSubClassName, 
   } from '../collections/layout.js';

   export default function NoSession(props) {
    const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => "container flex-1 flex-row w-11/12 md:w-4/6 xl:w-7/12 md:items-center mx-auto my-3 md:my-12 pb-4 transition-all ease-in-out delay-100 duration-1000 bg-white border rounded-md border-gray-light shadow-md opacity-90");
    }, []);

    return (
      <div className={containerVisibleClassName}>
        <div className="text-4xl md:text-xl my-2 md:my-4 mx-8 md:ml-4 md:mr-4 xl:mr-8 xl:ml-8 text-left uppercase">{props.subject}</div>
        <div className={paragraphClassName}><ReactMarkdown>{props.description}</ReactMarkdown></div>
      </div>
    )

   }