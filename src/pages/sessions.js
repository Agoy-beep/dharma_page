import React from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import Session from '../components/session.js';
import Footer from '../footer.js';

export default function SessionsPage(props){
    const sessions= [
        {
            id: '1',
            subject: retrieveLabel('session.subject.nondual.intro', props.lang),
            description: retrieveLabel('session.description.nondual.intro', props.lang),
            date: new Date('01-12-2025'),
            time:'09.00-11.00',
            location:'Mortsel'
        },
        {
            id: '2',
            subject: retrieveLabel('session.subject.dual.intro', props.lang),
            description: retrieveLabel('session.description.dual.intro', props.lang),
            date: new Date('01-12-2025'),
            time:'09.00-11.00',
            location:'Mortsel'
        },
    ];

    return (
        <React.Fragment>
            <div className="mt-24 md:mt-0"></div>
            <div className="container grid w-full h-32 bg-transparent rounded-lg text-white text-4xl place-content-center uppercase "></div>
            {sessions.map(session =>(
                <Session
                    key={session.id}
                    subject={session.subject}
                    description={session.description}
                    date={session.date}
                    time={session.time}
                    location={session.location}
                    lang={props.lang}
                    />
            ))}
            <div className="container grid w-full h-32 bg-transparent rounded-lg text-white text-4xl place-content-center uppercase "></div>
            {/* <Footer lang={props.lang} /> */}
        </React.Fragment>
             
    )
}