import React, { useState, useEffect } from 'react';
import Source from '../components/source.js';
import Footer from '../footer.js';
import { retrieveLabel } from '../helpers/labelhelper.js'
import { sourceImageClassNameWide,
    sourceImageClassNameBook, 
    sourceImageClassNameBookOnly, 
    sourceImageClassNameWideOnly, 
    sourceContainerClassName, 
    sourceButtonClassName,
    headerLinkClassName,
    sourceSwitchButtonClassName, 
    topFiller,
    sourceContainerGridMode} from '../collections/layout.js';

const notClicked = {
    isWakingUpClicked: false,
    isWhyMeditateClicked: false,
    isChangeYourMindClicked: false,
    isInLoveClicked: false,
    showIconsOnly: true
}
const isSmartphoneScreen = window.innerWidth < '1000';

export default function SourcesPage(props){
    const [whichImageClicked, setwhichImageClicked] = useState(notClicked);
    const [showAsGrid, setShowAsGrid] = useState(false);
    const changeLook = () => {
        setShowAsGrid((prevState) => !prevState);
    }
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
            title: 'Why Meditate - Matthieu Ricard',
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
                    key: 'Why Meditate - Matthieu Ricard',
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
            <div className={topFiller}></div>
            <div className={sourceContainerGridMode}>
                {!isSmartphoneScreen ? 
                <button className={sourceSwitchButtonClassName} onClick={changeLook}>
                    {showAsGrid ? 'naar lijstweergave' : 'naar roosterweergave'} 
                </button>
                :
                <div></div>
                }
            </div>
            {isSmartphoneScreen || showAsGrid === true ? (whichImageClicked.showIconsOnly ? 
            <React.Fragment>
            <div className="container grid grid-flow-col gap-2 w-11/12 md:w-4/6 xl:w-7/12 items-center mx-auto">
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
                    hasBackButton={showAsGrid}
                />
            ))}
            </div>
            </React.Fragment>
            :
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
                    hasBackButton={showAsGrid || isSmartphoneScreen}
                />
            )
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
                    hasBackButton={showAsGrid}
                />
            ))}
            </div>
            }
           
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
           <div className="container h-32 bg-transparent "></div>
           <Footer lang={props.lang} />
        </React.Fragment>
    )
}