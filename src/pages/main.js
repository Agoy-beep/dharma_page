import React, { useState } from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import Meditation from '../components/meditation';

const meditationStarterBools = {
    meditation_1: false,
    meditation_2: false,
}

export default function Main(props) {
    const [meditationBools, setMedationBools] = useState(meditationStarterBools);
    const main_title_1 = retrieveLabel('main.title_1', props.lang);
    const main_paragraph_1 = retrieveLabel('main.paragraph_1', props.lang);
    const main_quote_1 = retrieveLabel('main.quote_1', props.lang);
    const main_title_2 = retrieveLabel('main.title_2', props.lang);
    const main_title_3 = retrieveLabel('main.title_3', props.lang);
    const main_paragraph_2 = retrieveLabel('main.paragraph_2', props.lang);
    const main_paragraph_3 = retrieveLabel('main.paragraph_3', props.lang);
    const main_paragraph_4 = retrieveLabel('main.paragraph_4', props.lang);
    const main_paragraph_5 = retrieveLabel('main.paragraph_5', props.lang);
    const main_paragraph_6 = retrieveLabel('main.paragraph_6', props.lang)
    const toggleFirstMeditation = () => {
        setMedationBools((prevState) => {return {...prevState, meditation_1: !meditationBools.meditation_1}});
    }
    const toggleSecondMeditation = () => {
        setMedationBools((prevState) => {return {...prevState, meditation_2: !meditationBools.meditation_2}});
    }

    return (
        <React.Fragment>
            <div className= "container flex flex-col mx-5 my-8 border rounded-lg border-gray-light shadow-lg">
                <h1 className="text-4xl my-8 text-center">{main_title_1}</h1>
                <p className="my-8 mx-12 text-left text-lg  border-orange border-double ">{main_paragraph_1}</p>
            </div> 
            <div className= "container flex flex-col mx-5 my-auto border rounded-lg border-gray-light shadow-lg">
                <h1 className="text-4xl my-8 text-center">{main_title_2}</h1>
                <div className="container flex flex-col pb-5 justify-evenly">
                <p className="my-5 ml-12 text-left text-lg">{main_paragraph_2}</p>
                <button className="w-52 h-12 m-auto overflow-hidden text-center text-lg bg-orange opacity-70 rounded-lg 
                    transition ease-in-out delay-100 hover:scale-110 duration-200" onClick={toggleFirstMeditation}>
                    Probeer een meditatie
                    {/* <img src='medbutton.png' alt='voorbeeld' className="object-cover float-right"></img> */}
                </button>
                </div>
                <Meditation lang={props.lang} show={meditationBools.meditation_1} meditation={'vip1_'} meditationTitle={'meditation.dual.vip1.title'}/>
                <p className="my-5 mx-12 text-left text-lg">{main_paragraph_3}</p>
                <p className="text-2xl my-5 mx-12 text-center italic">"{main_quote_1}"</p>
                <p className="my-5 mx-12 text-left text-lg ">{main_paragraph_4}</p>
                <button className="w-52 h-12 m-auto overflow-hidden text-center text-lg bg-orange opacity-70 rounded-lg 
                    transition ease-in-out delay-100 hover:scale-110 duration-200" onClick={toggleSecondMeditation}>
                    De Body Scan
                    {/* <img src='medbutton.png' alt='voorbeeld' className="object-cover float-right"></img> */}
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_2}  meditation={'vip2_'} meditationTitle={'meditation.dual.vip2.title'} />
                <p className="my-5 mx-12 text-left text-lg ">{main_paragraph_5}</p>
                <p className="my-5 mx-12 text-left text-lg ">{main_paragraph_6}</p>
            </div>
            <div className= "container flex flex-col mx-5 my-8 border rounded-lg border-gray-light shadow-lg">
                <h1 className="text-4xl my-8 text-center">{main_title_3}</h1>
                <p className="my-8 mx-12 text-left text-lg  border-orange border-double ">{main_paragraph_5}</p>
            </div> 
        </React.Fragment>
    )
}