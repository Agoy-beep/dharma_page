import { Link } from "react-router-dom";
import { retrieveLabel } from './helpers/labelhelper.js';

export default function Header(props) {
    
    const title = retrieveLabel('title', props.lang);
    const offer = retrieveLabel('offer', props.lang);
    const sessions = retrieveLabel('sessions', props.lang);
    const about = retrieveLabel('about', props.lang);
    const contact = retrieveLabel('contact', props.lang);
// contains the logo, info, about and contact tab.
    return (
        <div className="container fixed top-0 flex mx-auto px-16 h-28 max-w-full bg-gray-dark opacity-100 text-white rounded-lg">
            <div className="container flex items-center mx-auto px-4 basis-1/3">
                <div className="text-4xl ">{title}</div>
            </div>
            <div className="container flex items-center text-center px-14 basis-2/3">
                <div className="text-xl basis-1/4 transition ease-in-out delay-150 hover:scale-125 hover:underline-offset-1 duration-200">
                    <Link to= "/offer">{offer}</Link></div>
                <div className="text-xl basis-1/4 transition ease-in-out delay-150 hover:scale-125 hover:underline-offset-1 duration-200">
                    <Link to= "/info">{sessions}</Link></div>
                <div className="text-xl basis-1/4 hover:text-2xl hover:-translate-y-1">
                    <Link to= "/about">{about}</Link></div>
                <div className="text-xl basis-1/4 hover:text-2xl">
                    <Link to= "/contact">{contact}</Link></div>
                <button onClick={props.setToEnglish}>ENG</button>
                <button onClick={props.setToDutch}>NL</button>
            </div>
        </div>
    )       
}