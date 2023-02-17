import { lorem } from '../filler/filler.js';
import { containerClassName, 
  titleClassName, 
  paragraphClassName, 
  divClassName, 
  quoteClassName, 
  paragraphBottomClassName, 
  titleSubClassName,
  sourceButtonClassName } from '../collections/layout.js';

export default function Source(props) {
  return (
    <div className= "container  my-8 pb-8 mx-auto items-center border rounded-lg border-gray-light shadow-lg">
        <h1 className={titleSubClassName}>{props.title}</h1>
        <div className="container w-40 h-32 mr-12 overflow-hidden border-2 rounded-lg float-right">
        <img src={props.image} alt='icon' className="object-contain"></img>
        </div>
        <p className={paragraphBottomClassName}>{props.description}</p>
        <a href={props.link} target="_blank">
          <button className={sourceButtonClassName}>{props.button_text}</button>
        </a>
    </div> 
  )
}