import arrow from "../../assets/white-link-icon.svg"
import "./EventPreview.css";

import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {getPriceString, getRegistrationString, getShortDateString} from '../../utils/EventUtils.js';

const EventPreview = (props) => {
    const eventInfo = props.eventInfo;
    return (  
        <Link className="event-preview" to={"/events/" + eventInfo.id} key={eventInfo.id}>
            <div className="entry-heading">
                <h1>{getShortDateString(eventInfo)}</h1>
                <img src={arrow} alt=''/>
            </div>
            <div>
                <h2 className={eventInfo.type === "LESA Event" ? "green" : (eventInfo.type === "FROSH Event" ? "purple" : "")}>{eventInfo.name}</h2>
                <h3>{eventInfo.location}</h3>
            </div>
            <div className="tag-container">
                <p className="tag">{getPriceString(eventInfo)}</p>
                <p className="tag">{getRegistrationString(eventInfo)}</p>
                <p className={"tag " + (eventInfo.type === "LESA Event" ? "greenTag" : (eventInfo.type === "FROSH Event" ? "purpleTag" : ""))}>{eventInfo.type}</p>
            </div>
        </Link>
    );
}
 
export default EventPreview;