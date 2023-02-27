import React from 'react';
import { 
  paragraphClassName, 
  titleSubClassName,
  } from '../collections/layout.js';

export default function Faq(props) {
  return (
    <div className="container flex flex-col mx-8 my-4 w-fit pb-8 border rounded-lg border-gray-light shadow-lg">
      <div className={titleSubClassName}>{props.question}</div>
      <div className={paragraphClassName}>{props.answer}</div>
    </div>
  )
}