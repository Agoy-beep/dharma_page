import React, { useState, useEffect } from 'react';
import Source from '../components/source.js';
import Footer from '../footer.js';
import whyMeditatePic from '../assets/whymeditate.png';
import howToChangePic from '../assets/how_to_change_your_mind.png';
import goenkaPic from '../assets/goenka.png';
import iAmThatPic from '../assets/I_am_that.png';
import inLovePic from '../assets/in_love_with_the_world.png';
import mingyurPic from '../assets/mingyur.png';
import theBookPic from '../assets/the_book.png';
import effortlessMindfulnessPic from '../assets/the_way_of_effortless_mindfulness.png';
import whoAmIPic from '../assets/who_am_i.png';
import wakingUpPic from '../assets/wakingup.png';
import { retrieveLabel } from '../helpers/labelhelper.js'
import { sourceImageClassNameWide,
    sourceImageClassNameBook, 
    sourceImageClassNameBookIcon, 
    sourceImageClassNameWideIcon, 
    sourceSwitchButtonClassName, 
    topFiller,
    bottomFiller,
    sourceContainerGridMode,
    sourceContainerSwitchButtons,
    sourceImageClassNamePortrait,
    sourceImageClassNamePortraitIcon,
    containerHiddenClassName, 
    sourcesWrapperHiddenClassname,
    sourcesWrapperClassName} from '../collections/layout.js';

const notClicked = {
    isWakingUpClicked: false,
    isWhyMeditateClicked: false,
    isChangeYourMindClicked: false,
    isInLoveClicked: false,
    isWhoAmIClicked: false,
    isTheBookClicked: false,
    isIAmThatClicked: false,
    isTheWayOfEffortlessMindfulnessClicked: false,
    isGoenkaClicked: false,
    isMingyurClicked: false,
    showIconsOnly: true
}
const isSmartphoneScreen = window.innerWidth < '1000';

export default function SourcesPage(props){
    const [footerFadeOut, setFooterFadeOut] = useState(false);
    const [whichImageClicked, setwhichImageClicked] = useState(notClicked);
    const [isFullScreenWithGrid, setIsFullScreenWithGrid] = useState(false);
    const [isAppFilterOn, setIsAppFilterOn] = useState(false);
    const [isBookFilterOn, setIsBookFilterOn] = useState(false);
    const [containerVisibleClassName, setContainerVisibleClassName] = useState(containerHiddenClassName);
    const [wrapperVisibleClassName, setWrapperVisibleClassName] = useState(sourcesWrapperHiddenClassname);
    
    useEffect(()=>{
        setContainerVisibleClassName(() => sourceContainerSwitchButtons);
        setTimeout(() => setWrapperVisibleClassName(() => sourcesWrapperClassName), 100);
    }, []);

    useEffect(() => {
        if(props.canFadeOut === true && props.preflight !== '/sources') {
          setContainerVisibleClassName(() => containerHiddenClassName);
          setWrapperVisibleClassName(() => sourcesWrapperHiddenClassname);
          setFooterFadeOut(() => true);
        }
      }, [props.canFadeOut, props.preflight])

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
            id: 'Book_1',
            title: 'Why Meditate - Matthieu Ricard',
            image: whyMeditatePic,
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookIcon,
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
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Why Meditate - Matthieu Ricard',
                    }
                })
            },
            showDetail: whichImageClicked.isWhyMeditateClicked

        },
        {
            id: 'Book_2',
            title: 'In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov',
            image: inLovePic,
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookIcon,
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
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'In Love With The World - Yongey Mingyur Rinpoche, Helen Tworkov'
                    }
                })
            },
            showDetail: whichImageClicked.isInLoveClicked

        },
        {
            id: 'Book_3',
            title: 'Who Am I - Ramana Maharshi',
            image: whoAmIPic,
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookIcon,
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
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Who Am I - Ramana Maharshi'
                    }
                })
            },
            showDetail: whichImageClicked.isWhoAmIClicked

        },
        {
            id: 'Book_4',
            title: 'The Book: On The Taboo Against Knowing Who You Are - Alan Watts',
            image: theBookPic,
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookIcon,
            description: retrieveLabel('source_6', props.lang),
            buttonText: retrieveLabel('source.button.link.book', props.lang),
            link: 'https://www.goodreads.com/book/show/60551.The_Book',
            clickIcon: function clickTheBook() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    isWhoAmIClicked: false,
                    isTheBookClicked: !whichImageClicked.isTheBookClicked,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'The Book: On The Taboo Against Knowing Who You Are - Alan Watts'
                    }
                })
            },
            showDetail: whichImageClicked.isTheBookClicked

        },
        {
            id: 'Book_5',
            title: 'I Am That: Talks With Nisagradatta Maharaj',
            image: iAmThatPic,
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookIcon,
            description: retrieveLabel('source_7', props.lang),
            buttonText: retrieveLabel('source.button.link.book', props.lang),
            link: 'https://www.goodreads.com/book/show/299869.I_Am_That',
            clickIcon: function clickIAmThat() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    isWhoAmIClicked: false,
                    isTheBookClicked: false,
                    isIAmThatClicked: !whichImageClicked.isIAmThatClicked,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'I Am That: Talks With Nisagradatta Maharaj'
                    }
                })
            },
            showDetail: whichImageClicked.isIAmThatClicked
        },
        {
            id: 'Book_6',
            title: 'How To Change Your Mind - Michael Pollan',
            image: howToChangePic,
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookIcon,
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
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'How To Change Your Mind - Michael Pollan',
                    }
                })
            },
            showDetail: whichImageClicked.isChangeYourMindClicked

        },
        {
            id: 'Book_7',
            title: 'The Way Of Effortless Mindfulness - Loch Kelly',
            image: effortlessMindfulnessPic,
            imageCardStyling: sourceImageClassNameBook,
            imageIconStyling: sourceImageClassNameBookIcon,
            description: retrieveLabel('source_8', props.lang),
            buttonText: retrieveLabel('source.button.link.book', props.lang),
            link: 'https://www.goodreads.com/book/show/40899270-the-way-of-effortless-mindfulness',
            clickIcon: function clickEffortlessMindfulness() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    isWhoAmIClicked: false,
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: !whichImageClicked.isTheWayOfEffortlessMindfulnessClicked,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'The Way Of Effortless Mindfulness - Loch Kelly'
                    }
                })
            },
            showDetail: whichImageClicked.isTheWayOfEffortlessMindfulnessClicked
        },
        {
            id: 'App_1',
            title: 'Waking Up App',
            image: wakingUpPic,
            imageCardStyling: sourceImageClassNameWide,
            imageIconStyling: sourceImageClassNameWideIcon,
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
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Waking Up App',
                    }
                })
            },
            showDetail: whichImageClicked.isWakingUpClicked
        },
        {
            id: 'Retreat_1',
            title: 'Vipassana Retreat',
            image: goenkaPic,
            imageCardStyling: sourceImageClassNamePortrait,
            imageIconStyling: sourceImageClassNamePortraitIcon,
            description: retrieveLabel('source_9', props.lang),
            buttonText: retrieveLabel('source.button.link.website', props.lang),
            link: 'https://pajjota.dhamma.org/nl/het-centrum-in-belgie/',
            clickIcon: function clickGoenka() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    isWhoAmIClicked: false,
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: !whichImageClicked.isGoenkaClicked,
                    isMingyurClicked: false,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Vipassana Retreat',
                    }
                })
            },
            showDetail: whichImageClicked.isGoenkaClicked
        },
        {
            id: 'Course_1',
            title: 'Tergar Meditation',
            image: mingyurPic,
            imageCardStyling: sourceImageClassNamePortrait,
            imageIconStyling: sourceImageClassNamePortraitIcon,
            description: retrieveLabel('source_10', props.lang),
            buttonText: retrieveLabel('source.button.link.website', props.lang),
            link: 'https://tergar.org',
            clickIcon: function clickMingyur() {
                setwhichImageClicked(()=> { 
                    return {
                    isWakingUpClicked: false,
                    isWhyMeditateClicked: false,
                    isChangeYourMindClicked: false,
                    isInLoveClicked: false,
                    isWhoAmIClicked: false,
                    isTheBookClicked: false,
                    isIAmThatClicked: false,
                    isTheWayOfEffortlessMindfulnessClicked: false,
                    isGoenkaClicked: false,
                    isMingyurClicked: !whichImageClicked.isMingyurClicked,
                    showIconsOnly: !whichImageClicked.showIconsOnly,
                    key: 'Tergar Meditation',
                    }
                })
            },
            showDetail: whichImageClicked.isMingyurClicked
        },
    ]

    // Beslis welk detail wordt getoond 
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
        if(source.id.includes('App')){
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
        if(source.id.includes('Book')){
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
                                showDetail={!isFullScreenWithGrid}
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
                                showDetail={!isFullScreenWithGrid}
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
                                showDetail={source.showCard}
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
                        showDetail={true}
                        hasBackButton={isFullScreenWithGrid || isSmartphoneScreen}
                    />
                 )
            }

        }else {
            return (
                <React.Fragment>
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
                            showDetail={true}
                            hasBackButton={isFullScreenWithGrid}
                            />
                    ))}
                </React.Fragment>
            )
        }
    }
    
    return(
        <React.Fragment>
            <div className={topFiller}></div>
            <div className={wrapperVisibleClassName}>
                <div className={sourceContainerSwitchButtons}>
                    {!isSmartphoneScreen 
                    ? 
                    <React.Fragment>
                        <button className={sourceSwitchButtonClassName} onClick={changeLook}>
                            {isFullScreenWithGrid ? 'naar lijstweergave' : 'naar roosterweergave'} 
                        </button>
                        {/* <button className={isAppFilterOn ? sourceFilterButtonClassNameActive : sourceFilterButtonClassName } onClick={filterApps}>
                            Appfilter
                        </button>
                        <button className={isBookFilterOn ? sourceFilterButtonClassNameActive : sourceFilterButtonClassName} onClick={filterBooks}>
                            Boekfilter 
                        </button> */}

                    </React.Fragment>
                    :
                    <div></div>
                    }
                </div>
                <div className="container md:col-span-3 lg:col-span-4">
                    {decideOnWhatToShow()}
                </div>
            </div>
            <div className={bottomFiller}></div>
            {/* <Footer lang={props.lang} fadeOut={footerFadeOut}/> */}
    </React.Fragment>
    )
}