import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import  { useNavigate } from 'react-router-dom';
import { retrieveLabel } from './helpers/labelhelper.js';
import { headerLinkClassName, 
    headerLinkClassNameClicked, 
    headerLinkContainerClassName,
    headerLinksContainerClassName,
    headerHomeLinkContainer } from "./collections/layout.js";

export default function Header(props) {
    const navigate = useNavigate();

    const title = retrieveLabel('title', props.lang);
    const main = retrieveLabel('main', props.lang);
    const sessions = retrieveLabel('sessions', props.lang);
    const about = retrieveLabel('about', props.lang);
    const sources = retrieveLabel('sources', props.lang);

    // useEffect(()=> {
    //     props.buttonMain ? props.clickMainLink : props.clickHomeLink;
    // },[props.buttonMain]);

    useEffect(() => {
        if(props.destination !== undefined) {
            return navigate(props.destination);
        }
    }, [props.destination]);


// contains the logo, info, about and contact tab.
    return (
        <div className={headerLinksContainerClassName}>
            <div className={headerHomeLinkContainer}>
            <button className="text-4xl mx-auto " onClick={props.clickHomeLink}>{title}</button>
            </div>
            <div className={headerLinkContainerClassName}>
            <button className={props.destination === '/main' || props.buttonMain ? headerLinkClassNameClicked : headerLinkClassName} onClick={props.clickMainLink}>
                {main}
            </button>
            <button className={props.destination === '/sessions' ? headerLinkClassNameClicked : headerLinkClassName} onClick={props.clickSessionsLink}>
                {sessions}
            </button>
            <button  className={props.destination === '/sources' ? headerLinkClassNameClicked : headerLinkClassName} onClick={props.clickSourcesLink}>
                {sources}
            </button>
            <button className={props.destination === '/about' ? headerLinkClassNameClicked : headerLinkClassName} onClick={props.clickAboutMeLink} >
                {about}      
            </button>
                {/* <div className="container flex-row-reverse space-x-2 basis-1/5">
                <button className="p-2 w-12 bg-orange opacity-70 rounded-lg transition ease-in-out delay-100 hover:scale-110 hover:underline-offset-1 duration-200" onClick={props.setToEnglish}>ENG</button>
                <button className="p-2 w-12 bg-orange opacity-70 rounded-lg transition ease-in-out delay-100 hover:scale-110 hover:underline-offset-1 duration-200" onClick={props.setToDutch}>NL</button>
                </div> */}
                
            </div>
        </div>
    )       
}