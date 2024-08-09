//Resources
import './HomeAbout.css';
import greenUnderline from '../../assets/green-underline.svg';
import clubPhoto from '../../assets/about-lesa.svg';
import executivePhoto from '../../assets/meet-the-team.svg';
import greenArrow from '../../assets/white-link-icon.svg'

import ButtonLink from '../ButtonLink';
import Article from '../Article';

const HomeAbout = () => {
    const connectThroughCulture = [{header:"Connect through culture", body:["LESA hosts various events throughout the year. These events provide opportunities to make new friends and explore our shared heritage. Whether you're a new student or nearing graduation, LESA is here to enrich your university experience with Latin American traditions."]}];
    const homeAwayFromHome = [{header:"Home away from home", body:["Moving to Canada can be challenging, but with LESA, you'll never feel alone. Our community is a home away from home, providing support and companionship. Join our events to take a break from academic life and reconnect with your roots and cultural identity."]}];
    const everyoneIsWelcome = [{header:"Everyone is welcome", body:["Anyone with an interest in Latinx culture, regardless of ethnic background or major, is welcome to attend events and/or join the executive team!"]}];
    const whoRunsLESA = [{header:"Who runs LESA?", body:["Find out who plans all our fun events and find contact information for all our current executive members."]}];

    return (
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
    );
}
 
export default HomeAbout;