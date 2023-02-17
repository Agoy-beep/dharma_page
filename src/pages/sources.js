import React from 'react';
import { lorem } from '../filler/filler.js';
import Source from '../components/source.js';
import Footer from '../footer.js';
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
    const button_appLink = retrieveLabel('source.button.link.app', props.lang);
    const link_waking_up = 'https://app.wakingup.com/';
    const image_why_meditate = 'whymeditate.png';
    const description_why_meditate = retrieveLabel('source_2', props.lang);
    const button_bookLink = retrieveLabel('source.button.link.book', props.lang)
    const link_why_meditate = 'https://www.amazon.com/Why-Meditate-Working-Thoughts-Emotions/dp/1401926630';
    const image_how_to_change_your_mind = 'how_to_change_your_mind.png';
    const description_how_to_change_your_mind = retrieveLabel('source_3', props.lang);
    const link_how_to_change_your_mind = 'https://www.standaardboekhandel.be/p/how-to-change-your-mind-9781594204227';
    const image_in_love_with_the_world = 'in_love_with_the_world.png'
    const link_in_love_with_the_world = 'https://www.bol.com/be/nl/p/in-love-with-the-world/9200000097279934/'
    const description_in_love_with_the_world = retrieveLabel('source_4', props.lang);
    return(
        <React.Fragment>
            {/* <div className={titleClassName}>BRONNEN</div> */}
           <Source title='Waking Up App' 
           image={image_waking_up} 
           description={description_waking_up} 
           button_text={button_appLink}
           link={link_waking_up} /> 
           <Source title='Why Meditate - Matthieu Ricard' 
           image={image_why_meditate} 
           description={description_why_meditate}
           button_text={button_bookLink}
           link={link_why_meditate} />
           <Source title='How To Change Your Mind - Michael Pollan' 
           image={image_how_to_change_your_mind} 
           description={description_how_to_change_your_mind}
           button_text={button_bookLink}
           link={link_how_to_change_your_mind} />
           <Source title='In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov' 
           image={image_in_love_with_the_world} 
           description={description_in_love_with_the_world}
           button_text={button_bookLink}
           link={link_in_love_with_the_world} />
           {/* <Source title='Who Am I - Ramana Maharshi' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_bookLink}
           link={link_why_meditate} />
           <Source title='I Am That - Nisagardatta' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_bookLink}
           link={link_why_meditate} />  */}
           <Footer lang={props.lang} />
        </React.Fragment>
    )
}