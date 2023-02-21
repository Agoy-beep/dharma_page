import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { retrieveLabel } from './helpers/labelhelper.js';
import { headerLinkClassName, 
    headerLinkClassNameClicked, 
    headerLinkContainerClassName,
    headerLinksContainerClassName,
    HeaderHomeLinkContainer } from "./collections/layout.js";

const startClickState = {
    isMainActive: false,
    isSessionsActive: false,
    isSourcesActive: false,
    isAboutMeActive: false
}

export default function Header(props) {
    const [clickState, setClickState] = useState(startClickState);
    const title = retrieveLabel('title', props.lang);
    const main = retrieveLabel('main', props.lang);
    const sessions = retrieveLabel('sessions', props.lang);
    const about = retrieveLabel('about', props.lang);
    const sources = retrieveLabel('sources', props.lang);
    const clickHomeLink = () => setClickState(() => startClickState);
    const clickMainLink = () => {
        setClickState((prevState) =>{
            return {
                isMainActive: !prevState.isMainActive,
                isSessionsActive: false,
                isSourcesActive: false,
                isAboutMeActive: false
            }
        });
    }
    useEffect(()=> {
        props.buttonMain ? clickMainLink() : clickHomeLink();
    },[props.buttonMain])
    const clickSessionsLink = () => {
        setClickState((prevState) =>{
            return {
                isMainActive: false,
                isSessionsActive: !prevState.isSessionsActive,
                isSourcesActive: false,
                isAboutMeActive: false
            }
        });
    }
    const clickSourcesLink = () => {
        setClickState((prevState) =>{
            return {
                isMainActive: false,
                isSessionsActive: false,
                isSourcesActive: !prevState.isAboutMeActive,
                isAboutMeActive: false,
            }
        });
    }
    const clickAboutMeLink = () => {
        setClickState((prevState) =>{
            return {
                isMainActive: false,
                isSessionsActive: false,
                isSourcesActive: false,
                isAboutMeActive: !prevState.isAboutMeActive,
            }
        });
    }

// contains the logo, info, about and contact tab.
    return (
        <div className={headerLinksContainerClassName}>
            <div className={HeaderHomeLinkContainer}>
                <div className="text-4xl mx-auto " onClick={clickHomeLink}><Link to= "/">{title}</Link></div>
            </div>
            <div className={headerLinkContainerClassName}>
            <div className={clickState.isMainActive ? headerLinkClassNameClicked : headerLinkClassName}>
                <Link to= "/main" onClick={clickMainLink}>{main}</Link></div>
            <div className={clickState.isSessionsActive ? headerLinkClassNameClicked : headerLinkClassName}>
                    <Link to= "/sessions" onClick={clickSessionsLink}>{sessions}</Link></div>
            <div className={clickState.isSourcesActive ? headerLinkClassNameClicked : headerLinkClassName}>
                    <Link to= "/sources" onClick={clickSourcesLink}>{sources}</Link></div>
            <div className={clickState.isAboutMeActive ? headerLinkClassNameClicked : headerLinkClassName}>
                    <Link to= "/about" onClick={clickAboutMeLink}>{about}</Link></div>
                {/* <div className="container flex-row-reverse space-x-2 basis-1/5">
                <button className="p-2 w-12 bg-orange opacity-70 rounded-lg transition ease-in-out delay-100 hover:scale-110 hover:underline-offset-1 duration-200" onClick={props.setToEnglish}>ENG</button>
                <button className="p-2 w-12 bg-orange opacity-70 rounded-lg transition ease-in-out delay-100 hover:scale-110 hover:underline-offset-1 duration-200" onClick={props.setToDutch}>NL</button>
                </div> */}
                
            </div>
        </div>
    )       
}