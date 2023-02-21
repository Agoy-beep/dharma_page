import { retrieveLabel } from './helpers/labelhelper.js';


export default function Footer(props) {
    const footer = retrieveLabel('footer', props.lang);
    return(
        <div className="container text-center mx-auto text-lg md:text-base text-white pt-2 pb-8">
            <div>{footer}</div>
        </div>
    )
}