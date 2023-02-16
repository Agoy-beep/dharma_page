import React, { useState } from 'react';
import { retrieveArrayOfLabels, retrieveLabel } from "../helpers/labelhelper";

const hidden = "w-0 h-0";

export default function Meditation(props) {
    // const [hiddenState, setHiddenState] = useState(hidden);
    const meditation_title = retrieveLabel(props.meditationTitle, props.lang);
    const arrayOfLabels = retrieveArrayOfLabels(props.meditation, props.lang);
    
    // const dehide = "container flex flex-col mx-10 w-0 h-0 my-auto bg-gray bg-opacity-25 border rounded-lg border-gray-light shadow-lg "
    const unhide = "container flex transition-all ease-in-out delay-150 duration-700 flex-col mx-10 w-2/3 my-auto bg-gray bg-opacity-25 border rounded-lg border-gray-light shadow-lg "

    return (
        <React.Fragment>
            {props.show ? <div className={props.show ? unhide : hidden}>
                <h3 className="mt-4 mx-auto font-bold">{meditation_title}</h3>
                <ul className="mt-4 mb-6 ml-8 list-disc">
                    {arrayOfLabels.map(label => <li className="my-2 mx-6" key={label.key}>{label.lang}</li> )}
                </ul>
             </div> : <div></div>}
        </React.Fragment>
        )
}