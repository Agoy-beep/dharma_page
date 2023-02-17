import React from 'react';
import Faq from '../components/faq';
import { retrieveLabel } from '../helpers/labelhelper';
import { containerClassName, 
  titleClassName, 
  paragraphClassName, 
  divClassName, 
  quoteClassName, 
  paragraphBottomClassName, 
  titleSubClassName,
  sourceButtonClassName } from '../collections/layout.js';

export default function FaqPage(props) {
  const faq_title = retrieveLabel('faq.title', props.lang);
  const faq_q1_question = retrieveLabel('faq.q1.question', props.lang);
  const faq_q1_answer = retrieveLabel('faq.q1.answer', props.lang);

  return (
    <React.Fragment>
    <div className={containerClassName}>
      <div className={titleClassName}>{faq_title}</div>
      <Faq question={faq_q1_question} answer={faq_q1_answer} />
    </div>

    </React.Fragment>
    
  )
}