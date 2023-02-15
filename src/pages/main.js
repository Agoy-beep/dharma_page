import React from 'react';
import { lorem } from '../filler/filler';
import { retrieveLabel } from '../helpers/labelhelper.js';
import Meditation from '../components/meditation';

export default function Main(props) {
    const main_title_1 = retrieveLabel('main.title_1', props.lang);
    const main_paragraph_1 = retrieveLabel('main.paragraph_1', props.lang);
    const main_quote_1 = retrieveLabel('main.quote_1', props.lang);
    const main_title_2 = retrieveLabel('main.title_2', props.lang);
    const main_paragraph_2 = retrieveLabel('main.paragraph_2', props.lang);
    const main_paragraph_3 = retrieveLabel('main.paragraph_3', props.lang);
    return (
        <React.Fragment>
            <div className= "container flex flex-col mx-5 my-8 border rounded-lg border-gray-light shadow-lg">
                <h1 className="text-4xl my-8 text-center">{main_title_1}</h1>
                <p className="my-8 mx-12 text-left text-lg  border-orange border-double ">{main_paragraph_1}</p>
            </div> 
            <div className= "container flex flex-col mx-5 my-auto border rounded-lg border-gray-light shadow-lg">
                <h1 className="text-4xl my-8 text-center">{main_title_2}</h1>
                <p className="my-5 mx-12 text-left text-lg  border-orange border-double ">{main_paragraph_2}</p>
                {/* insert optionele meditatiebeschrijving als component? */}
                <p className="my-5 mx-12 text-left text-lg  border-orange border-double ">{main_paragraph_3}</p>
                <p className="text-2xl my-5 mx-12 text-center italic">"{main_quote_1}"</p>
                <p className="my-5 mx-12">{lorem}</p>
            </div> 
        </React.Fragment>
    )
}