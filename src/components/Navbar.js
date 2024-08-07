//Resources
import "./Navbar.css"
import logo from "../assets/lesa-logo-stripped-green.svg";
import hamburgerIcon from "../assets/hamburger-icon.svg"

//Tags
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {useState} from "react";

const Navbar = () => {
    const [menuStatus, setMenuStatus] = useState(false);
    const [screenStatus, setScreenStatus] = useState(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 800);

    window.addEventListener('resize', () => {
        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw < 800) {
            setScreenStatus(true);
        } else {
            setScreenStatus(false);
        }
    });

    return ( 
        <header>
            <Link to="/"><img className="nav-logo" src={logo} alt="LESA Logo"/></Link>
            
            {!screenStatus && 
            <div className="nav-links">
                <Link className="nav-button" to="/events">Events</Link>
                <Link className="nav-button" to="/team">Team</Link>
                <Link className="nav-button" to="/resources">Resources</Link>
                <a className="nav-button" href="https://drive.google.com/drive/folders/1-H9Icoxu5RQgw5Q87b0MOSuOGn4_h5Oj?usp=sharing">Photo Albums</a>
                <Link className="nav-call-to-action" to="/join">Join Us</Link>
            </div>}

            {screenStatus && 
            <div className="nav-hamburger" onClick={() => setMenuStatus(!menuStatus)}>
                <img className="nav-logo" src={hamburgerIcon} alt="Hamburger Menu"/>
            </div>}
            {screenStatus && menuStatus && 
            <div className="nav-links">
                <Link className="nav-button" to="/events">Events</Link>
                <Link className="nav-button" to="/team">Team</Link>
                <Link className="nav-button" to="/resources">Resources</Link>
                <a className="nav-button" href="https://drive.google.com/drive/folders/1-H9Icoxu5RQgw5Q87b0MOSuOGn4_h5Oj?usp=sharing">Photo Albums</a>
                <Link className="nav-call-to-action" to="/join">Join Us</Link>
            </div>}
        </header>
    );
}
 
export default Navbar;