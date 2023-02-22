import React, { useState, useEffect } from 'react';
import Source from '../components/source.js';
import Footer from '../footer.js';
import { retrieveLabel } from '../helpers/labelhelper.js'
import { sourceImageClassNameWide,
    sourceImageClassNameBook, 
    sourceImageClassNameBookOnly, 
    sourceImageClassNameWideOnly, 
    sourceSwitchButtonClassName, 
    topFiller,
    bottomFiller,
    sourceContainerGridMode,
    sourceContainerSwitchButtons,
    sourceFilterButtonClassName} from '../collections/layout.js';

const notClicked = {
    isWakingUpClicked: false,
    isWhyMeditateClicked: false,
    isChangeYourMindClicked: false,
    isInLoveClicked: false,
    isWhoAmIClicked: false,
    showIconsOnly: true
}
const isSmartphoneScreen = window.innerWidth < '1000';

export default function SourcesPage(props){
    const [whichImageClicked, setwhichImageClicked] = useState(notClicked);
    const [isFullScreenWithGrid, setIsFullScreenWithGrid] = useState(false);
    const [isAppFilterOn, setIsAppFilterOn] = useState(false);
    const [isBookFilterOn, setIsBookFilterOn] = useState(false);
    const changeLook = () => {
        setIsFullScreenWithGrid((prevState) => !prevState);
    }
    const filterApps = () => {
        setIsAppFilterOn((prevState) => !prevState);
        setIsBookFilterOn(() => false);
    }
    const filterBooks = () => {
        setIsBookFilterOn((prevState) => !prevState);
        setIsAppFilterOn(() => false);
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
                    isWhoAmIClicked: false,
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
                    isWhoAmIClicked: false,
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
                    isWhoAmIClicked: false,
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
                    isWhoAmIClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov'
                    }
                })
            },
            showCard: whichImageClicked.isInLoveClicked

        },
        {
            id: '5',
            title: 'Who Am I - Ramana Maharshi',
            image: 'who_am_i.png',
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookOnly,
            description: retrieveLabel('source_5', props.lang),
            buttonText: retrieveLabel('source.button.link.book', props.lang),
            link: 'https://www.goodreads.com/book/show/551750.Who_Am_I_',
            clickIcon: function clickInLoveWithTheWorld() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    isWhoAmIClicked: !whichImageClicked.isWhoAmIClicked,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Who Am I - Ramana Maharshi'
                    }
                })
            },
            showCard: whichImageClicked.isWhoAmIClicked

        },
    ]


    const filterByKey = sources.filter(source => {
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
        }
        return undefined;
    });

    const sourcesAppOnly = sources.filter(source => {
        if(source.title.includes('App')){
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
        }
        return undefined;
    });

    const sourcesBookOnly = sources.filter(source => {
        if(!source.title.includes('App')){
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
        }
        return undefined;
    });

    const decideOnWhatToShow = () => {
        if(isAppFilterOn){
            return (
                <div className={isFullScreenWithGrid ? sourceContainerGridMode : undefined }>
                        {sourcesAppOnly.map((source) => (
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
                                showCard={!isFullScreenWithGrid}
                                hasBackButton={isFullScreenWithGrid}
                            />
                    ))}
                </div>
            )
        }
        if(isBookFilterOn){
            return (
                <div className={isFullScreenWithGrid ? sourceContainerGridMode : undefined }>
                        {sourcesBookOnly.map((source) => (
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
                                showCard={!isFullScreenWithGrid}
                                hasBackButton={isFullScreenWithGrid}
                            />
                    ))}
                </div>
            )
        }
        if(isSmartphoneScreen || isFullScreenWithGrid){
            if(whichImageClicked.showIconsOnly ){
                return (
                    <div className={sourceContainerGridMode}>
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
                                hasBackButton={isFullScreenWithGrid}
                            />
                        ))}
                    </div>
                )
            } else{
                return (
                    <Source 
                        key={filterByKey[0].id}
                        title={filterByKey[0].title}
                        image={filterByKey[0].image}
                        image_card_styling={filterByKey[0].imageCardStyling}
                        image_icon_styling={filterByKey[0].imageIconStyling}
                        description={filterByKey[0].description}
                        button_text={filterByKey[0].buttonText}
                        link={filterByKey[0].link}
                        clickIcon={filterByKey[0].clickIcon}
                        showCard={true}
                        hasBackButton={isFullScreenWithGrid || isSmartphoneScreen}
                    />
                 )
            }

        }else {
            console.log('Weeeeeee');
            return (
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
                            hasBackButton={isFullScreenWithGrid}
                            />
                    ))}
                </div>
            )
        }
    }
    
    return(
        <React.Fragment>
            <div className={topFiller}></div>
            <div className={sourceContainerSwitchButtons}>
                {!isSmartphoneScreen 
                ? 
                <React.Fragment>
                    <button className={sourceSwitchButtonClassName} onClick={changeLook}>
                        {isFullScreenWithGrid ? 'naar lijstweergave' : 'naar roosterweergave'} 
                    </button>
                    <button className={sourceFilterButtonClassName} onClick={filterApps}>
                        {isAppFilterOn ? 'App filter aan' : 'App filter uit'} 
                    </button>
                    <button className={sourceFilterButtonClassName} onClick={filterBooks}>
                        {isBookFilterOn ? 'Boek filter aan' : 'Boek filter uit'} 
                    </button>

                </React.Fragment>
                :
                <div></div>
                }
            </div>
            {decideOnWhatToShow()}
            {/* {isSmartphoneScreen || isFullScreenWithGrid
            ? 
                (isBookFilterOn
                ?
                <div className={isFullScreenWithGrid ? sourceContainerGridMode : undefined }>
                        {sourcesBookOnly.map((source) => (
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
                                hasBackButton={isFullScreenWithGrid}
                            />
                    ))}
                </div>
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
                            hasBackButton={isFullScreenWithGrid}
                            />
                    ))}
                </div>
                )
                (whichImageClicked.showIconsOnly 
                ? 
                    <div className={sourceContainerGridMode}>
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
                                hasBackButton={isFullScreenWithGrid}
                            />
                    ))}
                    </div>
                :
                <Source 
                        key={filterByKey[0].id}
                        title={filterByKey[0].title}
                        image={filterByKey[0].image}
                        image_card_styling={filterByKey[0].imageCardStyling}
                        image_icon_styling={filterByKey[0].imageIconStyling}
                        description={filterByKey[0].description}
                        button_text={filterByKey[0].buttonText}
                        link={filterByKey[0].link}
                        clickIcon={filterByKey[0].clickIcon}
                        showCard={true}
                        hasBackButton={isFullScreenWithGrid || isSmartphoneScreen}
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
                        hasBackButton={isFullScreenWithGrid}
                        />
                ))}
            </div>
            }
            */}
           
           {/* <Source title='I Am That - Nisagardatta' 
           image={image_why_meditate} 
           description={lorem}
           button_text={button_bookLink}
           link={link_why_meditate} />  */}
           <div className={bottomFiller}></div>
           <Footer lang={props.lang} />
        </React.Fragment>
    )
}