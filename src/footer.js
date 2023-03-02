import React, { useState, useEffect } from 'react';
import { retrieveLabel } from './helpers/labelhelper.js';
import { footerContainerClassName, footerContainerHiddenClassName } from './collections/layout.js';


export default function Footer(props) {
    const footer = retrieveLabel('footer', props.lang);
    const [footerCurrentContainerClassName, setFooterCurrencContainerClassName] = useState(footerContainerHiddenClassName);
    
    useEffect(()=>{
        setTimeout(() => setFooterCurrencContainerClassName(() => footerContainerClassName), 100);
    },[]);

    useEffect(() => {
        setFooterCurrencContainerClassName(() => footerContainerHiddenClassName);
    }, [props.fadeOut])


    return(
        <div className={footerCurrentContainerClassName}>
            <div>{footer}</div>
        </div>
    )
}