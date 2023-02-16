import { Link } from "react-router-dom";
import { retrieveLabel } from './helpers/labelhelper.js';

export default function Header(props) {
    const title = retrieveLabel('title', props.lang);
    const main = retrieveLabel('main', props.lang);
    const sessions = retrieveLabel('sessions', props.lang);
    const about = retrieveLabel('about', props.lang);
    const sources = retrieveLabel('sources', props.lang);
// contains the logo, info, about and contact tab.
    return (
        <div className="container fixed top-0 flex mx-auto z-10 px-16 h-28 max-w-full bg-gray-light opacity-85 text-black rounded-lg">
            <div className="container flex items-center mx-auto px-4 basis-1/5">
                <div className="text-4xl ">{title}</div>
            </div>
            <div className="container flex items-center text-center px-14 basis-4/5">
                <div className="text-xl basis-1/4 transition ease-in-out delay-100 hover:scale-110 hover:underline-offset-1 duration-200">
                    <Link to= "/main">{main}</Link></div>
                <div className="text-xl basis-1/4 transition ease-in-out delay-75 hover:scale-110 hover:underline-offset-1 duration-200">
                    <Link to= "/sessions">{sessions}</Link></div>
                <div className="text-xl basis-1/4 transition ease-in-out delay-75 hover:scale-110 hover:underline-offset-1 duration-200">
                    <Link to= "/sources">{sources}</Link></div>
                <div className="text-xl basis-1/4 transition ease-in-out delay-75 hover:scale-110 hover:underline-offset-1 duration-200">
                    <Link to= "/about">{about}</Link></div>
                {/* <div className="container flex-row-reverse space-x-2 basis-1/5">
                <button className="p-2 w-12 bg-orange opacity-70 rounded-lg transition ease-in-out delay-100 hover:scale-110 hover:underline-offset-1 duration-200" onClick={props.setToEnglish}>ENG</button>
                <button className="p-2 w-12 bg-orange opacity-70 rounded-lg transition ease-in-out delay-100 hover:scale-110 hover:underline-offset-1 duration-200" onClick={props.setToDutch}>NL</button>
                </div> */}
                
            </div>
        </div>
    )       
}