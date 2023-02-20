import React from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import Session from '../components/session.js';
import Footer from '../footer.js';

    const date = new Date('01-12-2025');

export default function SessionsPage(props){
    const subject_non_dual_intro = retrieveLabel('session.subject.nondual.intro', props.lang);
    const description_non_dual_intro = retrieveLabel('session.description.nondual.intro', props.lang);
    const subject_dual_intro = retrieveLabel('session.subject.dual.intro', props.lang);
    const description_dual_intro = retrieveLabel('session.description.dual.intro', props.lang);

    return (
        <React.Fragment>
            <div className="mt-24 md:mt-0"></div>
            <Session 
            lang={props.lang} 
            subject={subject_non_dual_intro} 
            date={date} 
            description={description_non_dual_intro} 
            time="09.00-11.00" 
            location="Mortsel"
            />
            <Session 
            lang={props.lang} 
            subject={subject_dual_intro} 
            date={date} 
            description={description_dual_intro} 
            time="13.00-15.00" 
            location="Mortsel"
            />
            <Footer lang={props.lang} />
        </React.Fragment>
             
    )
}