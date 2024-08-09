//Resources
import './HomeAbout.css';
import greenUnderline from '../../assets/green-underline.svg';
import clubPhoto from '../../assets/about-lesa.svg';
import executivePhoto from '../../assets/meet-the-team.svg';
import greenArrow from '../../assets/green-link-icon.svg'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const HomeAbout = () => {
    return ( 
        <div className="about">
            <h1 className="section-heading">What is LESA?</h1>
            <img id="about-underline" src={greenUnderline} alt=''/>
            <div className="lesa-description">
                <img src={clubPhoto} alt='Lots of LESA members having fun together'/>
                <p>The Latin Engineering Students' Association (LESA) connects the Skule community with Latinx culture in a unique and vibrant way. We aim to make your UofT journey memorable while keeping you connected to your cultural heritage.</p>
            </div>
            <div className="about-spread">
                <div>
                    <h2>Connect through culture</h2>
                    <p>LESA hosts various events throughout the year. These events provide opportunities to make new friends and explore our shared heritage. Whether you're a new student or nearing graduation, LESA is here to enrich your university experience with Latin American traditions.</p>
                </div>
                <div id="home-away-from-home">
                    <h2>Home away from home</h2>
                    <p>Moving to Canada can be challenging, but with LESA, you'll never feel alone. Our community is a home away from home, providing support and companionship. Join our events to take a break from academic life and reconnect with your roots and cultural identity.</p>
                </div>
                <div>
                    <h2>Everyone is welcome</h2>
                    <p>Anyone with an interest in Latinx culture, regardless of ethnic background or major, is welcome to attend events and/or join the executive team!</p>
                </div>
            </div>
            <div className="meet-the-team">
                <div className="meet-the-team-text">
                    <div>
                        <h2>Who runs LESA?</h2>
                        <p>Find out who plans all our fun events and find contact information for all our current executive members.</p>
                    </div>
                    <div>
                        <Link className="about-primary-link" to="/team">
                            <p>Meet the team</p>
                            <img src={greenArrow} alt=''/>
                        </Link>
                    </div>
                </div>
                <div className="meet-the-team-image">
                    <img src={executivePhoto} alt="All LESA executives together."/>
                </div>
            </div>
        </div>
    );
}
 
export default HomeAbout;