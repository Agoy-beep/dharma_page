import React, {useState, useEffect} from 'react';
import { containerHiddenClassName,
  containerClassNameSource,
  paragraphClassNameSource,
  titleSubClassNameSource,
  sourceButtonClassName } from '../collections/layout.js';

export default function Source(props) {
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => containerClassNameSource);
    }, []);

  return (
    <div className= {containerVisibleClassName}>
        <div className={titleSubClassNameSource}>{props.title}</div>
      {/* <div className="container flex flex-col-reverse md:flex-none md:flex-row place-items-center"> */}
        <div className={props.image_styling}>
        <img src={props.image} alt='icon' className="object-cover" ></img>
        </div>
        <p className={paragraphClassNameSource}>{props.description}</p>
      {/* </div> */}
      <div className="flex m-auto justify-center md:justify-start">
        <a href={props.link} target="_blank" rel="noopener noreferrer" >
          <button className={sourceButtonClassName}>{props.button_text}</button>
        </a>
      </div>
    </div> 
  )
}