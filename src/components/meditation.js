import { retrieveArrayOfLabels } from "../helpers/labelhelper";

export default function Meditation(props) {
    const arrayOfLabels = retrieveArrayOfLabels('vip1', props.lang);
    const loop = () => {for (const label of arrayOfLabels) {
        return <li>{label}</li>;
    }}
    return <ul>
            {loop}
        </ul>
}