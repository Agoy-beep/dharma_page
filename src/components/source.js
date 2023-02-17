import React, {useState, useEffect} from 'react';
import { containerHiddenClassName,
  paragraphBottomClassName, 
  titleSubClassName,
  sourceButtonClassName } from '../collections/layout.js';

const containerClassName= "container my-8 pb-8 mx-auto items-center transition-all ease-in-out delay-100 duration-1000 border rounded-lg bg-white border-gray-light shadow-lg opacity-90";

export default function Source(props) {
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => containerClassName);
    }, []);

  return (
    <div className= {containerVisibleClassName}>
        <h1 className={titleSubClassName}>{props.title}</h1>
        <div className="container w-40 h-32 mr-12 overflow-hidden border-2 rounded-lg float-right">
        <img src={props.image} alt='icon' className="object-contain"></img>
        </div>
        <p className={paragraphBottomClassName}>{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className={sourceButtonClassName}>{props.button_text}</button>
        </a>
    </div> 
  )
}