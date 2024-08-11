import Article from "../components/Article";
import ButtonRedirect from "../components/ButtonRedirect";

import greenUnderline from '../assets/green-underline.svg';
import clubPhoto from '../assets/about-lesa.svg';
import executivePhoto from '../assets/meet-the-team.svg';
import greenArrow from '../assets/white-link-icon.svg'

import Lottie from 'react-lottie-player';
import lottieJson from '../assets/hero-animation.json'
import lottiePoster from '../assets/hero-animation-poster.png';
import logoBadge from '../assets/hero-poster.svg';
import blueLinkIcon from '../assets/blue-link-icon.svg'

import icon from "../assets/white-link-icon.svg"
import "./Home.css"
import ButtonLink from "../components/ButtonLink";
import redUnderline from "../assets/red-underline.svg"
import { useState } from "react";

const Home = () => {
    const [animationStatus, setAnimationStatus] = useState(false);

    const connectThroughCulture = [{header:"Connect through culture", body:["LESA hosts various events throughout the year. These events provide opportunities to make new friends and explore our shared heritage. Whether you're a new student or nearing graduation, LESA is here to enrich your university experience with Latin American traditions."]}];
    const homeAwayFromHome = [{header:"Home away from home", body:["Moving to Canada can be challenging, but with LESA, you'll never feel alone. Our community is a home away from home, providing support and companionship. Join our events to take a break from academic life and reconnect with your roots and cultural identity."]}];
    const everyoneIsWelcome = [{header:"Everyone is welcome", body:["Anyone with an interest in Latinx culture, regardless of ethnic background or major, is welcome to attend events and/or join the executive team!"]}];
    const whoRunsLESA = [{header:"Who runs LESA?", body:["Find out who plans all our fun events and find contact information for all our current executive members."]}];
    
    const questions = [{header:"Questions?", body:["Email us at: lesa@studentorg.utoronto.ca","Follow us on Instagram: @uoft_lesa"]},{header:"Complaints?", body:["Submit complaints to the EngSoc Ombudsperson at: ombudsperson@skule.ca"]}]
    const getInvolved = [{header:"How to get involved", body:["LESA holds recruitment cycles for our executive team in October and April.","Use the link below to join as a general member and see any open executive positions."]}]
    const getSupport = [{header:"Get the support you need", body:["Our resources page has a curated list of links to help international students in their transition to life in Canada.","An extensive list of mental health resources can be found on the Student Life website."]}]

    return (
        <div>
            <div className="hero">
                <h1 id="hero-heading">Community,<br/>Culture,<br/>Connection.</h1>
                <div id="hero-image"><img src={logoBadge} alt=""/></div>
                <div id="hero-info">
                    <p id="hero-paragraph">Welcome to the largest community of Latinx engineers at UofT!</p>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <ButtonLink text="Join LESA" bold fontSize="1.5rem"colour="blue" buttonStyle="stroke" useIcon icon={blueLinkIcon} linkTo="/join"/>
                    </div>
                </div>
                <div id="hero-animation">
                    <div>
                        <Lottie id="lottie-player" animationData={lottieJson} background="transparent" speed="1" loop play onLoad={() => setAnimationStatus(true)}/>
                        {!animationStatus && <img id="hero-poster" src={lottiePoster} alt="Animation of various LESA events"/>}
                    </div>
                </div>
            </div>

            <div className="about">
                <h1 className="section-heading">What is LESA?</h1>
                <img id="about-underline" src={greenUnderline} alt=''/>
                <div className="lesa-description">
                    <img src={clubPhoto} alt='Lots of LESA members having fun together'/>
                    <p>The Latin Engineering Students' Association (LESA) connects the Skule community with Latinx culture in a unique and vibrant way. We aim to make your UofT journey memorable while keeping you connected to your cultural heritage.</p>
                </div>
                <div className="about-spread">
                    <Article articleInfo={connectThroughCulture}headerText="Connect through culture" justification="flex-start" articleStyle="fill" foregroundColour="green" backgroundColour="white" fontSize="2.5rem"/>
                    <Article articleInfo={homeAwayFromHome} justification="flex-start" articleStyle="fill" foregroundColour="green" backgroundColour="white" fontSize="2.5rem"/>
                    <Article articleInfo={everyoneIsWelcome} justification="flex-start" articleStyle="fill" foregroundColour="green" backgroundColour="white" fontSize="2.5rem"/>
                </div>
                <div className="meet-the-team">
                        <Article articleInfo={whoRunsLESA} justification="center" articleStyle="fill" foregroundColour="green" backgroundColour="white" fontSize="2.5rem" buttons={[<ButtonLink text="Meet the Team" bold fontSize="1.5rem" colour="green" buttonStyle="fill" useIcon icon={greenArrow} linkTo="/team"/>]}/>
                    <div className="meet-the-team-image">
                        <img src={executivePhoto} alt="All LESA executives together."/>
                    </div>
                </div>
            </div>

            <h1 className="section-heading">Connect with us.</h1>
            <img id="connect-underline" src={redUnderline} alt=""/>
            <div className="connect-spread">
                <Article articleInfo={questions} justification="flex-start" articleStyle="fill" foregroundColour="red" backgroundColour="grey" fontSize="2.5rem" buttons={[<ButtonRedirect text="EngSoc Complaints Policy" bold fontSize="1.3rem" colour="red" buttonStyle="fill" useIcon icon={icon} linkTo="https://skule.ca/wp-content/uploads/Policy-on-Complaints.pdf"/>]}/>
                <Article articleInfo={getInvolved} justification="flex-start" articleStyle="fill" foregroundColour="red" backgroundColour="grey" fontSize="2.5rem" buttons={[<ButtonLink text="Join LESA" bold fontSize="1.3rem" colour="red" buttonStyle="fill" useIcon icon={icon} linkTo="/join"/>]}/>
                <Article articleInfo={getSupport} justification="flex-start" articleStyle="fill" foregroundColour="red" backgroundColour="grey" fontSize="2.5rem" buttons={[<ButtonLink text="LESA Resources" bold fontSize="1.3rem" colour="red" buttonStyle="fill" useIcon icon={icon} linkTo="/resources"/>, <ButtonRedirect text="UofT Resources" bold fontSize="1.3rem" colour="dark-grey" buttonStyle="fill" useIcon icon={icon} linkTo="https://studentlife.utoronto.ca/task/support-when-you-feel-distressed/"/>]}/>
            </div>
        </div>
    );
}
 
export default Home;