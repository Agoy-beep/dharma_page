import React, {useState, useEffect} from 'react';
import { retrieveLabel } from '../helpers/labelhelper.js';
import { containerHiddenClassName,
  containerClassNameSession,
  paragraphClassName, 
   } from '../collections/layout.js';


export default function Session(props) {
  const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => containerClassNameSession);
    }, []);

  const daysOfTheWeek = [
    {key: retrieveLabel('session.day_1', props.lang)},
    {key: retrieveLabel('session.day_2', props.lang)},
    {key: retrieveLabel('session.day_3', props.lang)},
    {key: retrieveLabel('session.day_4', props.lang)},
    {key: retrieveLabel('session.day_5', props.lang)},
    {key: retrieveLabel('session.day_6', props.lang)},
    {key: retrieveLabel('session.day_7', props.lang)},
  ]
  const monthsOfTheYear = [
    {key: retrieveLabel('session.month_1', props.lang)},
    {key: retrieveLabel('session.month_2', props.lang)},
    {key: retrieveLabel('session.month_3', props.lang)},
    {key: retrieveLabel('session.month_4', props.lang)},
    {key: retrieveLabel('session.month_5', props.lang)},
    {key: retrieveLabel('session.month_6', props.lang)},
    {key: retrieveLabel('session.month_7', props.lang)},
    {key: retrieveLabel('session.month_8', props.lang)},
    {key: retrieveLabel('session.month_9', props.lang)},
    {key: retrieveLabel('session.month_10', props.lang)},
    {key: retrieveLabel('session.month_11', props.lang)},
    {key: retrieveLabel('session.month_12', props.lang)},
  ]
  const dayName = daysOfTheWeek[props.date.getDay()].key;
  const day = props.date.getDate();
  const month = monthsOfTheYear[props.date.getMonth()].key;
  const year = props.date.getFullYear();
  return (
      <div className={containerVisibleClassName}>
        <div className="container flex-auto flex-row md:flex-col md:ml-8 w-full md:w-fit h-full  border border-gray-light rounded-lg bg-gray bg-opacity-50">
          <div className="container flex flex-row justify-center md:justify-start md:mx-8 py-2">
            <div className="mr-1 text-lg">{day}</div>
            <div className="mx-1 text-lg">{month}</div>
            <div className="mx-1 text-lg">{year}</div>
          </div>
          <div className="container flex flex-row justify-center m-auto w-full md:ml-8 md:mr-2 md:w-fit py-2 border border-gray-light rounded-lg bg-gray ">
            <div className="mx-2 min-w-fit">{dayName}</div>
              <div className="mr-2 min-w-fit">{props.time}</div>
            </div>
         </div>
        <div className="container w-full md:w-4/5">
          <div className="text-2xl my-4 ml-4 md:ml-12 text-left">{props.subject}</div>
          <div className={paragraphClassName}>{props.description}</div>
        </div>
      </div>
  )
}