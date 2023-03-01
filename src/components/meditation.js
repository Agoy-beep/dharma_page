import React, { useEffect, useState } from 'react';
import { meditationContainerClassName, meditationContainerHiddenClassName } from '../collections/layout';
import { retrieveArrayOfLabels, retrieveLabel } from "../helpers/labelhelper";

export default function Meditation(props) {
    const [containerVisibleClassName, setContainerVisibleClassName] = useState(meditationContainerHiddenClassName);
    const meditation_title = retrieveLabel(props.meditationTitle, props.lang);
    const arrayOfLabels = retrieveArrayOfLabels(props.meditation, props.lang);

    useEffect(() => {
        if(props.show){
            setContainerVisibleClassName(() => meditationContainerClassName);
        }
        else {
            setContainerVisibleClassName(() => meditationContainerHiddenClassName);
        }
    }, [props.show])
    

    return (
        <React.Fragment>
            {props.show ? <div className={containerVisibleClassName}>
                <h3 className="mt-4 mx-auto font-bold text-2xl md:text-base">{meditation_title}</h3>
                <ul className="mt-4 mb-6 ml-8 list-disc">
                    {arrayOfLabels.map(label => <li className="my-2 mx-6 text-3xl md:text-base" key={label.key}>{label.lang}</li> )}
                </ul>
             </div> : <div className={containerVisibleClassName}></div>}
        </React.Fragment>
        )
}