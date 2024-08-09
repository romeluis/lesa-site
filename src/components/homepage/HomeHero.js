//Resources
import Lottie from 'react-lottie-player';
import lottieJson from '../../assets/hero-animation.json'
import lottiePoster from '../../assets/hero-animation-poster.png';
import logoBadge from '../../assets/hero-poster.svg';
import blueLinkIcon from '../../assets/blue-link-icon.svg'
import './HomeHero.css';

import { useState } from 'react';
import ButtonLink from '../ButtonLink';

const HomeHero = () => {
    const [animationStatus, setAnimationStatus] = useState(false);

    return (
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
    );
}
 
export default HomeHero;