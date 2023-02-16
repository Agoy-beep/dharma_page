import React, { useState } from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import Meditation from '../components/meditation.js';
import Footer from "../footer.js";
import { containerClassName, 
    titleClassName, 
    paragraphClassName, 
    divClassName, 
    quoteClassName, 
    paragraphBottomClassName, 
    titleSubClassName,
    buttonClassName } from '../collections/layout.js';

const meditationStarterBools = {
    meditation_1: false,
    meditation_2: false,
    meditation_3: false,
    meditation_4: false,
    meditation_5: false,
}

export default function Main(props) {
    const [meditationBools, setMedationBools] = useState(meditationStarterBools);
    const main_title_1 = retrieveLabel('main.title_1', props.lang);
    const main_quote_1 = retrieveLabel('main.quote_1', props.lang);
    const main_quote_3 = retrieveLabel('main.quote_3', props.lang);
    const main_title_2 = retrieveLabel('main.title_2', props.lang);
    const main_title_3 = retrieveLabel('main.title_3', props.lang);
    const main_title_sub_1 = retrieveLabel('main.title.sub_1', props.lang);
    const main_title_sub_2 = retrieveLabel('main.title.sub_2', props.lang);
    const main_title_sub_3 = retrieveLabel('main.title.sub_3', props.lang);
    const main_title_sub_4 = retrieveLabel('main.title.sub_4', props.lang);
    const main_title_sub_5 = retrieveLabel('main.title.sub_5', props.lang);
    const main_title_sub_6 = retrieveLabel('main.title.sub_6', props.lang);
    const main_paragraph_1 = retrieveLabel('main.paragraph_1', props.lang);
    const main_div_par1_1 = retrieveLabel('main.div.par1_1', props.lang);
    const main_div_par1_2 = retrieveLabel('main.div.par1_2', props.lang);
    const main_paragraph_2 = retrieveLabel('main.paragraph_2', props.lang);
    const main_paragraph_3 = retrieveLabel('main.paragraph_3', props.lang);
    const main_paragraph_4 = retrieveLabel('main.paragraph_4', props.lang);
    const main_paragraph_5 = retrieveLabel('main.paragraph_5', props.lang);
    const main_paragraph_6 = retrieveLabel('main.paragraph_6', props.lang);
    const main_paragraph_7 = retrieveLabel('main.paragraph_7', props.lang);
    const main_paragraph_8 = retrieveLabel('main.paragraph_8', props.lang);
    const main_paragraph_9 = retrieveLabel('main.paragraph_9', props.lang);
    const main_paragraph_10 = retrieveLabel('main.paragraph_10', props.lang);
    const main_paragraph_11 = retrieveLabel('main.paragraph_11', props.lang);
    const main_paragraph_12 = retrieveLabel('main.paragraph_12', props.lang);
    const main_paragraph_13 = retrieveLabel('main.paragraph_13', props.lang);
    const main_paragraph_14 = retrieveLabel('main.paragraph_14', props.lang);
    const main_paragraph_15 = retrieveLabel('main.paragraph_15', props.lang);
    const main_paragraph_16 = retrieveLabel('main.paragraph_16', props.lang);
    const main_paragraph_17 = retrieveLabel('main.paragraph_17', props.lang);
    const main_paragraph_18 = retrieveLabel('main.paragraph_18', props.lang);
    const main_paragraph_19 = retrieveLabel('main.paragraph_19', props.lang);
    const main_paragraph_20 = retrieveLabel('main.paragraph_20', props.lang);
    const main_paragraph_21 = retrieveLabel('main.paragraph_21', props.lang);
    const main_paragraph_22 = retrieveLabel('main.paragraph_22', props.lang);
    const main_paragraph_23 = retrieveLabel('main.paragraph_23', props.lang);
    const main_paragraph_24 = retrieveLabel('main.paragraph_24', props.lang);
    const main_paragraph_25 = retrieveLabel('main.paragraph_25', props.lang);
    const main_paragraph_26 = retrieveLabel('main.paragraph_26', props.lang);
    const toggleFirstMeditation = () => {
        setMedationBools((prevState) => {return {...prevState, meditation_1: !meditationBools.meditation_1}});
    }
    const toggleSecondMeditation = () => {
        setMedationBools((prevState) => {return {...prevState, meditation_2: !meditationBools.meditation_2}});
    }
    const toggleThirdMeditation = () => {
        setMedationBools((prevState) => {return {...prevState, meditation_3: !meditationBools.meditation_3}});
    }
    const toggleFourthMeditation = () => {
        setMedationBools((prevState) => {return {...prevState, meditation_4: !meditationBools.meditation_4}});
    }
    const toggleFifthMeditation = () => {
        setMedationBools((prevState) => {return {...prevState, meditation_5: !meditationBools.meditation_5}});
    }

    return (
        <React.Fragment>
            <div className= {containerClassName}>
                <h1 className={titleClassName}>{main_title_1}</h1>
                <div className={divClassName}>{main_div_par1_1}</div>
                <p className={paragraphBottomClassName}>{main_paragraph_1}</p>
                <div className={divClassName}>{main_div_par1_2}</div>
            </div> 
            <div className= {containerClassName}>
                <h1 className={titleClassName}>{main_title_2}</h1>
                <h3 className={titleSubClassName}>{main_title_sub_1}</h3>
                {/* <div className="container flex flex-col pb-5 justify-evenly"> */}
                <p className={paragraphClassName}>{main_paragraph_2}</p>
                <button className={buttonClassName} onClick={toggleFirstMeditation}>
                    Ademhaling
                    {/* <img src='medbutton.png' alt='voorbeeld' className="object-cover float-right"></img> */}
                </button>
                {/* </div> */}
                <Meditation lang={props.lang} show={meditationBools.meditation_1} meditation={'vip1_'} meditationTitle={'meditation.dual.vip1.title'}/>
                <p className={paragraphClassName}>{main_paragraph_3}</p>
                <p className={quoteClassName}>"{main_quote_1}"</p>
                <p className={paragraphClassName}>{main_paragraph_4}</p>
                <h3 className={titleSubClassName}>{main_title_sub_2}</h3>
                <p className={paragraphClassName}>{main_paragraph_5}</p>
                <button className={buttonClassName} onClick={toggleSecondMeditation}>
                    De Body Scan
                    {/* <img src='medbutton.png' alt='voorbeeld' className="object-cover float-right"></img> */}
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_2}  meditation={'vip2_'} meditationTitle={'meditation.dual.vip2.title'} />
                <h3 className={titleSubClassName}>{main_title_sub_3}</h3>
                <p className={paragraphClassName}>{main_paragraph_6}</p>
                <p className={paragraphClassName}>{main_paragraph_7}</p>
                <button className={buttonClassName} onClick={toggleThirdMeditation}>
                    Metta
                    {/* <img src='medbutton.png' alt='voorbeeld' className="object-cover float-right"></img> */}
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_3}  meditation={'vip3_'} meditationTitle={'meditation.dual.vip3.title'} />
                <p className={paragraphClassName}>{main_paragraph_8}</p>
                <p className={paragraphClassName}>{main_paragraph_9}</p>
                <p className={paragraphClassName}>{main_paragraph_10}</p>
                <p className={paragraphBottomClassName}>{main_paragraph_11}</p>
            </div>
            <div className= {containerClassName}>
                <h1 className={titleClassName}>{main_title_3}</h1>
                <h3 className={titleSubClassName}>{main_title_sub_4}</h3>
                <p className={paragraphClassName}>{main_paragraph_12}</p>
                <p className={paragraphClassName}>{main_paragraph_13}</p>
                <p className={paragraphClassName}>{main_paragraph_14}</p>
                <h3 className={titleSubClassName}>{main_title_sub_5}</h3>
                <p className={paragraphClassName}>{main_paragraph_15}</p>
                <p className={paragraphClassName}>{main_paragraph_16}</p>
                <p className={paragraphClassName}>{main_paragraph_17}</p>
                <p className={paragraphClassName}>{main_paragraph_18}</p>
                <button className={buttonClassName} onClick={toggleFourthMeditation}>
                   De Uitdaging
                    {/* <img src='medbutton.png' alt='voorbeeld' className="object-cover float-right"></img> */}
                </button>
                {/* </div> */}
                <Meditation lang={props.lang} show={meditationBools.meditation_4} meditation={'nondual1_'} meditationTitle={'meditation.nondual1.title'}/>
                <p className={quoteClassName}>"{main_quote_3}"</p>
                <p className={paragraphClassName}>{main_paragraph_19}</p>
                <button className={buttonClassName} onClick={toggleFifthMeditation}>
                    Staren, Of Niet Staren?
                    {/* <img src='medbutton.png' alt='voorbeeld' className="object-cover float-right"></img> */}
                </button>
                {/* </div> */}
                <Meditation lang={props.lang} show={meditationBools.meditation_5} meditation={'nondual2_'} meditationTitle={'meditation.nondual2.title'}/>
                <p className={paragraphClassName}>{main_paragraph_20}</p>
                <p className={paragraphClassName}>{main_paragraph_21}</p>
                <p className={paragraphClassName}>{main_paragraph_22}</p>
                <p className={paragraphClassName}>{main_paragraph_23}</p>
                <h3 className={titleSubClassName}>{main_title_sub_6}</h3>
                <p className={paragraphClassName}>{main_paragraph_24}</p>
                <p className={paragraphClassName}>{main_paragraph_25}</p>
                <p className={paragraphClassName}>{main_paragraph_26}</p>
            </div> 
            <Footer lang={props.lang} />
        </React.Fragment>
    )
}