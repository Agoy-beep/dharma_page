import React, { useState, useEffect } from 'react';
import Source from '../components/source.js';
import Footer from '../footer.js';
import { retrieveLabel } from '../helpers/labelhelper.js'
import { sourceImageClassNameWide,
    sourceImageClassNameBook, sourceImageClassNameBookOnly, sourceImageClassNameWideOnly, containerClassNameSource } from '../collections/layout.js';


const notClicked = {
    isWakingUpClicked: false,
    isWhyMeditateClicked: false,
    isChangeYourMindClicked: false,
    isInLoveClicked: false,
    showIconsOnly: true
}



export default function SourcesPage(props){
    const [whichImageClicked, setwhichImageClicked] = useState(notClicked);
    const sources=[
        {
            id: '1',
            title: 'Waking Up App',
            image: 'wakingup.png',
            imageCardStyling: sourceImageClassNameWide,
            imageIconStyling: sourceImageClassNameWideOnly,
            description: retrieveLabel('source_1', props.lang),
            buttonText: retrieveLabel('source.button.link.app', props.lang),
            link: 'https://app.wakingup.com/',
            clickIcon: function clickWakingUp() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: !whichImageClicked.isWakingUpClicked,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Waking Up App',
                    }
                })
            },
            showCard: whichImageClicked.isWakingUpClicked

        },
        {
            id: '2',
            title: 'Why Meditate',
            image: 'whymeditate.png',
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookOnly,
            description: retrieveLabel('source_2', props.lang),
            buttonText: retrieveLabel('source.button.link.book', props.lang),
            link: 'https://www.amazon.com/Why-Meditate-Working-Thoughts-Emotions/dp/1401926630',
            clickIcon: function clickWhyMeditate(){
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: !whichImageClicked.isWhyMeditateClicked,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Why Meditate',
                    }
                })
            },
            showCard: whichImageClicked.isWhyMeditateClicked

        },
        {
            id: '3',
            title: 'How To Change Your Mind - Michael Pollan',
            image: 'how_to_change_your_mind.png',
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookOnly,
            description: retrieveLabel('source_3', props.lang),
            buttonText: retrieveLabel('source.button.link.book', props.lang),
            link: 'https://www.standaardboekhandel.be/p/how-to-change-your-mind-9781594204227',
            clickIcon: function clickHowToChangeYourMind() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: !whichImageClicked.isChangeYourMindClicked,
                    isInLoveClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'How To Change Your Mind - Michael Pollan',
                    }
                })
            },
            showCard: whichImageClicked.isChangeYourMindClicked

        },
        {
            id: '4',
            title: 'In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov',
            image: 'in_love_with_the_world.png',
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookOnly,
            description: retrieveLabel('source_4', props.lang),
            buttonText: retrieveLabel('source.button.link.book', props.lang),
            link: 'https://www.bol.com/be/nl/p/in-love-with-the-world/9200000097279934/',
            clickIcon: function clickInLoveWithTheWorld() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: !whichImageClicked.isInLoveClicked,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov'
                    }
                })
            },
            showCard: whichImageClicked.isInLoveClicked

        },
    ]
    
    const filter = sources.filter(source => {
        if(source.title === whichImageClicked.key){
        return (
            <Source 
                key={source.id}
                title={source.title}
                image={source.image}
                image_card_styling={source.imageCardStyling}
                image_icon_styling={source.imageIconStyling}
                description={source.description}
                button_text={source.buttonText}
                link={source.link}
                clickIcon={source.clickIcon}
                showCard={source.showCard}
            />
        )
    }});
    return(
        <React.Fragment>
            <div className="mt-24 md:mt-0"></div>
            <div className="container grid w-full h-32 bg-transparent rounded-lg text-white text-4xl place-content-center uppercase "></div>
            {window.innerWidth < '1000' ? (whichImageClicked.showIconsOnly ? 
            <React.Fragment>
            <div className="container grid grid-flow-col gap-2 items-center mr-2">
            {sources.map((source) => (
                <Source 
                    key={source.id}
                    title={source.title}
                    image={source.image}
                    image_card_styling={source.imageCardStyling}
                    image_icon_styling={source.imageIconStyling}
                    description={source.description}
                    button_text={source.buttonText}
                    link={source.link}
                    clickIcon={source.clickIcon}
                    showCard={source.showCard}
                />
            ))}
            </div>
            </React.Fragment>
            :
            <div className="container grid grid-flow-row items-left">
            <Source 
                    key={filter[0].id}
                    title={filter[0].title}
                    image={filter[0].image}
                    image_card_styling={filter[0].imageCardStyling}
                    image_icon_styling={filter[0].imageIconStyling}
                    description={filter[0].description}
                    button_text={filter[0].buttonText}
                    link={filter[0].link}
                    clickIcon={filter[0].clickIcon}
                    showCard={true}
                />
            </div>)
            :
            <div>
            {sources.map((source) => (
                <Source 
                    key={source.id}
                    title={source.title}
                    image={source.image}
                    image_card_styling={source.imageCardStyling}
                    image_icon_styling={source.imageIconStyling}
                    description={source.description}
                    button_text={source.buttonText}
                    link={source.link}
                    clickIcon={source.clickIcon}
                    showCard={true}
                />
            ))}
            </div>
            }
            {/* <div className={titleClassName}>BRONNEN</div> */}
            {/* <div className="mt-24 md:mt-0"></div>
            {whichImageClicked.showIconsOnly ? <div className="container grid grid-flow-col items-center ">
                <Source title='Waking Up App' 
                    image={image_waking_up} 
                    image_styling={sourceImageClassNameWide}
                    image_single_styling={sourceImageClassNameWideOnly}
                    clickIcon={clickWakingUp}
                    showText={isImageClicked.isWakingUpClicked}
                    description={description_waking_up}
                    button_text={button_appLink}
                    link={link_waking_up} /> 
                <Source title='Why Meditate - Matthieu Ricard' 
                    image={image_why_meditate}
                    image_styling={sourceImageClassNameBook}
                    image_single_styling={sourceImageClassNameBookOnly}
                    showText={isImageClicked.isWhyMeditateClicked}
                    clickIcon={clickWhyMeditateUp}
                    description={description_why_meditate}
                    button_text={button_bookLink}
                    link={link_why_meditate} />
                <Source title='How To Change Your Mind - Michael Pollan' 
                    image={image_how_to_change_your_mind}
                    image_styling={sourceImageClassNameBook}
                    showText={isImageClicked.isChangeYourMindClicked}
                    image_single_styling={sourceImageClassNameBookOnly}
                    description={description_how_to_change_your_mind}
                    button_text={button_bookLink}
                    link={link_how_to_change_your_mind} />
                <Source title='In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov' 
                    image={image_in_love_with_the_world}
                    image_styling={sourceImageClassNameBook}
                    showText={isImageClicked.isInLoveClicked}
                    image_single_styling={sourceImageClassNameBookOnly}
                    description={description_in_love_with_the_world}
                    button_text={button_bookLink}
                    link={link_in_love_with_the_world} />
            </div>
            : 
            <React.Fragment>
            <Source title='Waking Up App' 
                    image={image_waking_up} 
                    image_styling={sourceImageClassNameWide}
                    image_single_styling={sourceImageClassNameWideOnly}
                    clickIcon={clickWakingUp}
                    showText={isImageClicked.isWakingUpClicked}
                    description={description_waking_up}
                    button_text={button_appLink}
                    link={link_waking_up} /> 
                <Source title='Why Meditate - Matthieu Ricard' 
                    image={image_why_meditate}
                    image_styling={sourceImageClassNameBook}
                    showText={isImageClicked.isWhyMeditateClicked}
                    image_single_styling={sourceImageClassNameBookOnly}
                    description={description_why_meditate}
                    button_text={button_bookLink}
                    link={link_why_meditate} />
                <Source title='How To Change Your Mind - Michael Pollan' 
                    image={image_how_to_change_your_mind}
                    image_styling={sourceImageClassNameBook}
                    showText={isImageClicked.isChangeYourMindClicked}
                    image_single_styling={sourceImageClassNameBookOnly}
                    description={description_how_to_change_your_mind}
                    button_text={button_bookLink}
                    link={link_how_to_change_your_mind} />
                <Source title='In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov' 
                    image={image_in_love_with_the_world}
                    image_styling={sourceImageClassNameBook}
                    showText={isImageClicked.isInLoveClicked}
                    image_single_styling={sourceImageClassNameBookOnly}
                    description={description_in_love_with_the_world}
                    button_text={button_bookLink}
                    link={link_in_love_with_the_world} />
                </React.Fragment>} */}
           
           {/* <Source title='Who Am I - Ramana Maharshi' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_bookLink}
           link={link_why_meditate} />
           <Source title='I Am That - Nisagardatta' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_bookLink}
           link={link_why_meditate} />  */}
           {/* <Footer lang={props.lang} /> */}
        </React.Fragment>
    )
}