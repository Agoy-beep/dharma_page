import React, {useEffect, useState } from 'react';
import Faq from '../components/faq';
import { retrieveLabel } from '../helpers/labelhelper';
import { aboutContainerClassName, aboutContainerHiddenClassName,
  titleClassName, 
  } from '../collections/layout.js';

export default function FaqPage(props) {
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(aboutContainerHiddenClassName);
    
  useEffect(()=>{
    setTimeout(() => setContainerVisibleClassName(() => aboutContainerClassName), 200);
  }, []);

  useEffect(() => {
    if(props.canFadeOut === true && props.preflight !== '/about') {
      setContainerVisibleClassName(() => aboutContainerHiddenClassName);
    }
  }, [props.canFadeOut, props.preflight])

  const faq_title = retrieveLabel('faq.title', props.lang);
  // const faq_q1_question = retrieveLabel('faq.q1.question', props.lang);
  // const faq_q1_answer = retrieveLabel('faq.q1.answer', props.lang);

  const faqs = [
    {
      id: 'faq_1',
      question: retrieveLabel('faq.q1.question', props.lang),
      answer: retrieveLabel('faq.q1.answer', props.lang)
    },
    {
      id: 'faq_2',
      question: retrieveLabel('faq.q2.question', props.lang),
      answer: retrieveLabel('faq.q2.answer', props.lang)
    },
  ]
  return (
    <React.Fragment>
    <div className={containerVisibleClassName}>
      <div className={titleClassName}>{faq_title}</div>
      {faqs.map((faq) => (
        <Faq 
          key={faq.id}
          question= {faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
    </React.Fragment>
    
  )
}