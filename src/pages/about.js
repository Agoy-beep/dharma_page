import { lorem, quote, kintsugiText } from '../filler/filler'


export default function AboutPage(){
    return( 
            <div className= "container flex flex-col text-center mx-auto my-auto ">
            <h1 className="text-3xl my-8">Over Kintsugi Studio</h1>
            <div className="container flex  rounded-lg mx-auto border-2 w-44 h-32"></div>
            <p className="my-5">{kintsugiText}</p>
            <h1 className="text-3xl my-8">Over Nele</h1>
            <div className="container flex flex-row">
                <p className="text-xl my-4 italic">"{quote}"</p>
            </div>
            <p className="my-5">{lorem}</p>
        </div>
    )
}