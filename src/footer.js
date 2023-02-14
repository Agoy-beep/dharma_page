import { retrieveLabel } from './helpers/labelhelper.js';


export default function Footer(props) {
    const footer = retrieveLabel('footer', props.lang);
    return(
        <div className="container text-center mx-auto">
            <div>{footer}</div>
        </div>
    )
}