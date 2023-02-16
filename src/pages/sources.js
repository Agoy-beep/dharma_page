import React from 'react';
import { lorem } from '../filler/filler.js';
import Source from '../components/source.js';
import { retrieveLabel } from '../helpers/labelhelper.js'
import { containerClassName, 
    titleClassName, 
    paragraphClassName, 
    divClassName, 
    quoteClassName, 
    paragraphBottomClassName, 
    titleSubClassName,
    sourceButtonClassName } from '../collections/layout.js';

export default function SourcesPage(props){
    const image_waking_up = 'wakingup.png';
    const description_waking_up = retrieveLabel('source_1', props.lang);
    const button_waking_up = retrieveLabel('source.button.link.app', props.lang);
    const link_waking_up = 'https://app.wakingup.com/';
    const image_why_meditate = 'whymeditate.png';
    const button_why_meditate = retrieveLabel('source.button.link.book', props.lang)
    const link_why_meditate = 'https://www.amazon.com/Why-Meditate-Working-Thoughts-Emotions/dp/1401926630';
    return(
        <React.Fragment>
            <div className={titleClassName}>BRONNEN</div>
           <Source title='Waking Up App' 
           image={image_waking_up} 
           description={description_waking_up} 
           button_text={button_waking_up}
           link={link_waking_up} /> 
           <Source title='Why Meditate - Matthieu Ricard' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_why_meditate}
           link={link_why_meditate} />
           <Source title='How To Change Your Mind - Michael Pollan' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_why_meditate}
           link={link_why_meditate} />
           
           <Source title='Who Am I - Ramana Maharshi' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_why_meditate}
           link={link_why_meditate} />
           <Source title='I Am That - Nisagardatta' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_why_meditate}
           link={link_why_meditate} /> 
        </React.Fragment>
    )
}