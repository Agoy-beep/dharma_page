import React from 'react';
import { containerClassName, 
  titleClassName, 
  paragraphClassName, 
  divClassName, 
  quoteClassName, 
  paragraphBottomClassName, 
  titleSubClassName,
  sourceButtonClassName } from '../collections/layout.js';

export default function Faq(props) {
  return (
    <div className="container flex flex-col mx-8 my-8 w-fit pb-8 border rounded-lg border-gray-light shadow-lg">
      <div className={titleSubClassName}>{props.question}</div>
      <div className={paragraphClassName}>{props.answer}</div>
    </div>
  )
}