//Resources
import "./Navbar.css"
import logo from "../assets/lesa-logo-stripped-green.svg";
import hamburgerIcon from "../assets/hamburger-icon.svg"
import hamburgerIconClosed from "../assets/hamburger-icon-close.svg"

//Tags
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {useState} from "react";
import ButtonLink from "./ButtonLink";
import ButtonRedirect from "./ButtonRedirect";

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
            <Link to="/" style={{display: "block", width: "fit-content"}}><img className="nav-logo" src={logo} alt="LESA Logo"/></Link>
            
            {!screenStatus && 
            <div className="nav-links">
                <ButtonLink text="Events" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="/events"/>
                <ButtonLink text="Team" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="/team"/>
                <ButtonLink text="Resources" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="/resources"/>
                <ButtonRedirect text="Photo Albums" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="https://drive.google.com/drive/folders/1-H9Icoxu5RQgw5Q87b0MOSuOGn4_h5Oj?usp=sharing"/>
                <ButtonLink text="Join Us" bold fontSize="1.3rem" colour="green" buttonStyle="fill" linkTo="/join"/>
            </div>}

            {screenStatus && 
            <div className="nav-hamburger" onClick={() => setMenuStatus(!menuStatus)}>
                <img className="nav-logo" src={!menuStatus ? hamburgerIcon : hamburgerIconClosed} alt="Hamburger Menu"/>
            </div>}
            {screenStatus && menuStatus && 
            <div className="nav-links" onClick={() => setMenuStatus(false)}>
                <ButtonLink text="Events" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="/events"/>
                <ButtonLink text="Team" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="/team"/>
                <ButtonLink text="Resources" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="/resources"/>
                <ButtonRedirect text="Photo Albums" fontSize="1.125rem" colour="white" buttonStyle="hoverOnly" linkTo="https://drive.google.com/drive/folders/1-H9Icoxu5RQgw5Q87b0MOSuOGn4_h5Oj?usp=sharing"/>
                <ButtonLink text="Join Us" bold fontSize="1.3rem" colour="green" buttonStyle="fill" linkTo="/join"/>
            </div>}
        </header>
    );
}
 
export default Navbar;