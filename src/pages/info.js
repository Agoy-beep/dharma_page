import { lorem, quote } from '../filler/filler'

export default function InfoPage(){
    return(
        <div className= "container flex flex-col text-center mx-auto my-auto ">
            <h1 className="text-4xl my-8">SESSIES</h1>
            <div className="container flex  rounded-full mx-auto border-2 w-32 h-32"></div>
            <p className="my-5">{lorem}</p>
            <p className="text-2xl my-5 italic">"{quote}"</p>
            <p className="my-5">{lorem}</p>
        </div>
        
    )
}