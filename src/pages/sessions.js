import React from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import Session from '../components/session.js';
import Footer from '../footer.js';
import { bottomFiller, topFiller } from '../collections/layout.js';
import NoSession from '../components/nosession.js';

export default function SessionsPage(props){
    const sessions= [
        {
            id: 'Session_1',
            type: retrieveLabel('session.type_1', props.lang),
            subject: retrieveLabel('session.subject.meditation.recurring', props.lang),
            description: retrieveLabel('session.description.meditation.recurring_1hr', props.lang),
            date: new Date('01-15-2025'),
            time:'20.00-21.00',
            location:'Mortsel'
        },
        {
            id: 'Session_2',
            type: retrieveLabel('session.type_1', props.lang),
            subject: retrieveLabel('session.subject.meditation.recurring', props.lang),
            description: retrieveLabel('session.description.meditation.recurring_2hr', props.lang),
            date: new Date('01-15-2025'),
            time:'9.00-11.00',
            location:'Mortsel'
        },
        {
            id: 'Workshop_1',
            type: retrieveLabel('session.type_2', props.lang),
            subject: retrieveLabel('session.subject.nondual.intro', props.lang),
            description: retrieveLabel('session.description.nondual.intro', props.lang),
            date: new Date('01-12-2025'),
            time:'09.00-11.00',
            location:'Mortsel'
        },
        {
            id: 'Workshop_2',
            type: retrieveLabel('session.type_2', props.lang),
            subject: retrieveLabel('session.subject.dual.intro', props.lang),
            description: retrieveLabel('session.description.dual.intro', props.lang),
            date: new Date('01-12-2025'),
            time:'09.00-11.00',
            location:'Mortsel'
        },
    ];

    const noSession = {
        id: 'NoSession_1',
            type: retrieveLabel('session.type_0', props.lang),
            subject: retrieveLabel('nosession.subject', props.lang),
            description: retrieveLabel('nosession.description', props.lang),
            date: new Date('01-15-2025'),
            time:'20.00-21.00',
            location:'Mortsel'
    }

    return (
        <React.Fragment>
            <div className={topFiller}></div>
            <NoSession 
                key={noSession.id}
                subject={noSession.subject}
                description={noSession.description}
            />
            {/* {sessions.map(session =>(
                <Session
                    key={session.id}
                    type={session.type}
                    subject={session.subject}
                    description={session.description}
                    date={session.date}
                    time={session.time}
                    location={session.location}
                    lang={props.lang}
                    />
            ))} */}
            <div className={bottomFiller}></div>
            <Footer lang={props.lang} />
        </React.Fragment>
             
    )
}