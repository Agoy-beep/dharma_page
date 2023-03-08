import React, {useState, useEffect} from 'react';
import { containerHiddenClassName,
  sourceContainerClassName,
  sourceContainerHiddenClassNameCard,
  sourceContainerClassNameImageOnly,
  sourceParagraphClassName,
  sourceTitleSubClassName,
  sourceButtonClassName, 
  sourceButtonsContainer} from '../collections/layout.js';

export default function Source(props) {
  
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
  const [containerImageOnlyVisibleClassName, setContainerImageOnlyVisibleClassName] = useState(containerHiddenClassName);
    
  useEffect(()=>{
      setContainerImageOnlyVisibleClassName(() => containerHiddenClassName);
        setContainerImageOnlyVisibleClassName(() => sourceContainerClassNameImageOnly);
    }, [props.showDetail]);

    useEffect(()=>{
        setContainerVisibleClassName(() => sourceContainerHiddenClassNameCard);
        if(props.showDetail === true){
          setContainerVisibleClassName(() => sourceContainerClassName);
        }  
    }, [props.showDetail]);

  return (
    <React.Fragment>
    {props.showDetail ? 
    <div className= {containerVisibleClassName}>
        <div className={sourceTitleSubClassName}>{props.title}</div>
        <div className={props.image_card_styling}>
        <img src={props.image} alt='icon' className="object-cover" onClick={props.clickIcon}></img>
        </div>
        <p className={sourceParagraphClassName}>{props.description}</p>
      <div className={sourceButtonsContainer}>
      {props.hasBackButton ? <button className={sourceButtonClassName} onClick={props.clickIcon}>Naar menu</button> : <div></div>}
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