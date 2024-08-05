//Resources
import "./Navbar.css"
import logo from "../assets/lesa-logo-stripped-green.svg";

//Tags
import {Link} from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <header>
            <Link to="/"><img className="nav-logo" src={logo} alt="LESA Logo"/></Link>
            <div className="nav-links">
                <Link className="nav-button" to="/events">Events</Link>
                <Link className="nav-button" to="/team">Team</Link>
                <Link className="nav-button" to="/resources">Resources</Link>
                <a className="nav-button" href="https://drive.google.com/drive/folders/1-H9Icoxu5RQgw5Q87b0MOSuOGn4_h5Oj?usp=sharing">Photo Albums</a>
                <Link className="nav-call-to-action" to="/join">Join Us</Link>
            </div>
        </header>
    );
}
 
export default Navbar;