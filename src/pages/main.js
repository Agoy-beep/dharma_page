import React, { useState, useEffect } from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import ReactMarkdown from 'react-markdown';
import Meditation from '../components/meditation.js';
import Footer from "../footer.js";
import { containerClassName,
    containerHiddenClassName,
    mainContainerClassName,
    titleClassName, 
    paragraphClassName, 
    divClassName, 
    quoteClassName,
    quoterClassName, 
    paragraphBottomClassName, 
    titleSubClassName,
    buttonClassName, 
    buttonClassNameClicked,
    topFiller} from '../collections/layout.js';

const meditationStarterBools = {
    meditation_1: false,
    meditation_2: false,
    meditation_3: false,
    meditation_4: false,
    meditation_5: false,
}

export default function Main(props) {
    const [meditationBools, setMedationBools] = useState(meditationStarterBools);
    const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    console.log('ON MAIN ', containerVisibleClassName);
    
    useEffect(()=>{
        console.log('MAIN USE EFFECT');
        setContainerVisibleClassName(() => containerClassName);
        return () => {
            console.log('MAIN USE EFFECT ON DESTROY');
            setContainerVisibleClassName(() => containerHiddenClassName);
        }

    }, []);

    const main_title_1 = retrieveLabel('main.title_1', props.lang);
    const main_quote_1 = retrieveLabel('main.quote_1', props.lang);
    const main_quote_1_pt_2 = retrieveLabel('main.quote_1_pt_2', props.lang);
    const main_quote_2 = retrieveLabel('main.quote_2', props.lang);
    const main_quote_2_pt_2 = retrieveLabel('main.quote_2_pt_2', props.lang);
    const main_quote_3 = retrieveLabel('main.quote_3', props.lang);
    const main_quote_3_pt_2 = retrieveLabel('main.quote_3_pt_2', props.lang);
    const main_quote_4 = retrieveLabel('main.quote_4', props.lang);
    const main_quote_4_pt_2 = retrieveLabel('main.quote_4_pt_2', props.lang);
    const main_quote_5 = retrieveLabel('main.quote_5', props.lang);
    const main_quote_5_pt_2 = retrieveLabel('main.quote_5_pt_2', props.lang);
    const main_quote_6 = retrieveLabel('main.quote_6', props.lang);
    const main_quote_6_pt_2 = retrieveLabel('main.quote_6_pt_2', props.lang);
    const main_title_2 = retrieveLabel('main.title_2', props.lang);
    const main_title_3 = retrieveLabel('main.title_3', props.lang);
    const main_title_sub_1 = retrieveLabel('main.title.sub_1', props.lang);
    const main_title_sub_2 = retrieveLabel('main.title.sub_2', props.lang);
    const main_title_sub_3 = retrieveLabel('main.title.sub_3', props.lang);
    const main_title_sub_4 = retrieveLabel('main.title.sub_4', props.lang);
    const main_title_sub_5 = retrieveLabel('main.title.sub_5', props.lang);
    const main_title_sub_6 = retrieveLabel('main.title.sub_6', props.lang);
    const main_title_sub_7 = retrieveLabel('main.title.sub_7', props.lang);
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
    const main_paragraph_22_div_1 = retrieveLabel('main.paragraph_22.div_1', props.lang);
    const main_paragraph_22_div_2 = retrieveLabel('main.paragraph_22.div_2', props.lang);
    const main_paragraph_23 = retrieveLabel('main.paragraph_23', props.lang);
    const main_paragraph_24 = retrieveLabel('main.paragraph_24', props.lang);
    const main_paragraph_25 = retrieveLabel('main.paragraph_25', props.lang);
    const main_paragraph_26 = retrieveLabel('main.paragraph_26', props.lang);
    const main_paragraph_27 = retrieveLabel('main.paragraph_27', props.lang);
    const main_paragraph_28 = retrieveLabel('main.paragraph_28', props.lang);

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
            <div className={topFiller}></div>
            <div className= {containerVisibleClassName}>
                <h1 className={titleClassName}>{main_title_2}</h1>
                <h3 className={titleSubClassName}>{main_title_sub_1}</h3>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_2}</ReactMarkdown></div>
                <button className={meditationBools.meditation_1 ? buttonClassNameClicked : buttonClassName} onClick={toggleFirstMeditation}>
                    Ademhaling
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_1} meditation={'vip1_'} meditationTitle={'meditation.dual.vip1.title'}/>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_3}</ReactMarkdown></div>
                <div className={quoteClassName}>"{main_quote_2}"</div>
                <div className={quoterClassName}>{main_quote_2_pt_2}</div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_4}</ReactMarkdown></div>
                <h3 className={titleSubClassName}>{main_title_sub_2}</h3>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_5}</ReactMarkdown></div>
                <button className={meditationBools.meditation_2 ? buttonClassNameClicked : buttonClassName} onClick={toggleSecondMeditation}>
                    Bodyscan
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_2}  meditation={'vip2_'} meditationTitle={'meditation.dual.vip2.title'} />
                <h3 className={titleSubClassName}>{main_title_sub_3}</h3>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_6}</ReactMarkdown></div>
                <div className={quoteClassName}>"{main_quote_3}"</div>
                <div className={quoterClassName}>{main_quote_3_pt_2}</div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_7}</ReactMarkdown></div>
                <button className={meditationBools.meditation_3 ? buttonClassNameClicked : buttonClassName} onClick={toggleThirdMeditation}>
                    Metta
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_3}  meditation={'vip3_'} meditationTitle={'meditation.dual.vip3.title'} />
                <div className={quoteClassName}>"{main_quote_1}"</div>
                <div className={quoterClassName}>{main_quote_1_pt_2}</div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_8}</ReactMarkdown></div>
                {/* <div className={paragraphClassName}>{main_paragraph_9}</div> */}
                {/* <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_10}</ReactMarkdown></div>
                <div className={paragraphBottomClassName}>{main_paragraph_11}</div> */}
            </div>
            <div className= {containerVisibleClassName}>
                <h1 className={titleClassName}>{main_title_3}</h1>
                <h3 className={titleSubClassName}>{main_title_sub_4}</h3>
                {/* <div className={paragraphClassName}>{main_paragraph_12}</div> */}
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_13}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_14}</ReactMarkdown></div>
                <div className={quoteClassName}>"{main_quote_4}"</div>
                <div className={quoterClassName}>{main_quote_4_pt_2}</div>
                <h3 className={titleSubClassName}>{main_title_sub_5}</h3>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_15}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_16}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_17}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_18}</ReactMarkdown></div>
                <button className={meditationBools.meditation_4 ? buttonClassNameClicked : buttonClassName} onClick={toggleFourthMeditation}>
                   De Uitdaging
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_4} meditation={'nondual1_'} meditationTitle={'meditation.nondual1.title'}/>
                <div className={paragraphClassName}>{main_paragraph_19}</div>
                <div className={titleSubClassName}><ReactMarkdown>{main_title_sub_6}</ReactMarkdown></div>
                <button className={meditationBools.meditation_5 ? buttonClassNameClicked : buttonClassName} onClick={toggleFifthMeditation}>
                    Staren, Of Niet Staren?
                </button>
                <Meditation lang={props.lang} show={meditationBools.meditation_5} meditation={'nondual2_'} meditationTitle={'meditation.nondual2.title'}/>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_20}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_21}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_22}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_23}</ReactMarkdown></div>
                <h3 className={titleSubClassName}>{main_title_sub_7}</h3>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_24}</ReactMarkdown></div>
                <div className={quoteClassName}>"{main_quote_5}"</div>
                <div className={quoterClassName}>{main_quote_5_pt_2}</div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_25}</ReactMarkdown></div>
                <div className={quoteClassName}>"{main_quote_6}"</div>
                <div className={quoterClassName}>{main_quote_6_pt_2}</div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_26}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_27}</ReactMarkdown></div>
                <div className={paragraphClassName}><ReactMarkdown>{main_paragraph_28}</ReactMarkdown></div>
            </div> 
            <Footer lang={props.lang} />
        </React.Fragment>
    )
}