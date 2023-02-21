import React, {useState, useEffect} from 'react';
import { containerHiddenClassName,
  containerClassNameSource,
  containerHiddenClassNameSourceCard,
  containerClassNameSourceImageOnly,
  paragraphClassNameSource,
  titleSubClassNameSource,
  sourceButtonClassName } from '../collections/layout.js';

  const notClicked = false;
export default function Source(props) {
  
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
  const [containerImageOnlyVisibleClassName, setContainerImageOnlyVisibleClassName] = useState(containerHiddenClassName);
    
  useEffect(()=>{
      setContainerImageOnlyVisibleClassName(() => containerHiddenClassName);
        setContainerImageOnlyVisibleClassName(() => containerClassNameSourceImageOnly);
    }, [props.showCard === false]);

    useEffect(()=>{
        setContainerVisibleClassName(() => containerHiddenClassNameSourceCard);
        if(props.showCard === true){
          setContainerVisibleClassName(() => containerClassNameSource);
        }  
    }, [props.showCard]);

  return (
    <React.Fragment>
    {props.showCard ? 
    <div className= {containerVisibleClassName}>
        <div className={titleSubClassNameSource}>{props.title}</div>
        <div className={props.image_card_styling}>
        <img src={props.image} alt='icon' className="object-cover" onClick={props.clickIcon}></img>
        </div>
        <p className={paragraphClassNameSource}>{props.description}</p>
      <div className="flex m-auto justify-center md:justify-start">
        <a href={props.link} target="_blank" rel="noopener noreferrer" >
          <button className={sourceButtonClassName}>{props.button_text}</button>
        </a>
      </div>
    </div>   
    : 
    <div className={containerImageOnlyVisibleClassName}>
    <div className={props.image_icon_styling}>
        <img src={props.image} alt='icon' className="object-cover" onClick={props.clickIcon} ></img>
        </div>
    </div> }
    
    
    </React.Fragment>
  )
}