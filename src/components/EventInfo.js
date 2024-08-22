import backIcon from "../assets/black-back-link-icon.svg";
import "./EventInfo.css";
import whiteArrow from "../assets/grey-link-icon.svg"

import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchJSON from "../utils/FetchJSON";
import TagList from "./TagList";
import ButtonRedirect from "./ButtonRedirect";
import { formatEventPrice, formatEventRegistration, formatTime, isDateSet, monthFullForms } from "../utils/EventUtils";

class EventDisplay {
    constructor() {
        this.dateString = "";
        this.timeString = "";
        this.tags = [];
        this.colour = "pink";
        this.showButton = false;
    }

    create(eventInfo) {
        if (eventInfo == null) {
            return;
        }

        if (isDateSet(eventInfo)) {
            this.dateString = eventInfo.day.toString() + " " + monthFullForms[eventInfo.month] + " " + eventInfo.year.toString();
            this.timeString = formatTime(eventInfo.startHour, eventInfo.startMinute) + " - " + formatTime(eventInfo.endHour, eventInfo.endMinute);
        } else {
            this.dateString = monthFullForms[eventInfo.month] + " " + eventInfo.year.toString();
            this.timeString = "Time TBD";
        }
        let registration = formatEventRegistration(eventInfo.link);

        let price = formatEventPrice(eventInfo.price);

        if (eventInfo.type === "FROSH Event") {
            this.colour  = "purple";
        } else if (eventInfo.type === "UofT Event") {
            this.colour  = "blue"
        } else if (eventInfo.type === "Community Event") {
            this.colour  = "orange";
        }

        this.tags = [{text:price, style:"stroke", colour: this.colour, pulse: false}, 
                     {text:registration, style:"stroke", colour: this.colour, pulse: (registration == "Register now!")}, 
                     {text:eventInfo.type, style:"fill", colour: this.colour, pulse: false}]; 

        if (eventInfo.link !== "0" && eventInfo.link !== "1") {
            this.showButton = true;
        }
    }
}

const EventInfo = (props) => {
    const {id} = useParams();
    const {data: eventData, isPending, error} = useFetchJSON("https://api.lesauoft.com/events/" + id);
    const EventController = new EventDisplay();

    if (!isPending && eventData.length > 0) {
        EventController.create(eventData[0]);
    }

    const userHistory = useHistory();

    return (  
        <div className="event-info-page-container">
            <div className="back-button grey hoverOnly" onClick={() => userHistory.goBack()}>
                <img src={backIcon} alt=""/>
            </div>
            <h1 className="page-title">Event Details</h1>
            {!isPending && error == null &&  <h1 className="event-emoji">{eventData[0].emoji}</h1>}
            {!isPending && error == null && 
                <div className="event-details-container">
                    <div>
                        <p className="detail-title">Event Title</p>
                        <h2 className={"event-name " + EventController.colour + "-text"}>{eventData[0].name}</h2>
                    </div>
                    <div>
                        <p className="detail-title">Date</p>
                        <h2 className="event-info-data">{EventController.dateString}</h2>
                    </div>
                    <div>
                        <p className="detail-title">Time</p>
                        <h2 className="event-info-data">{EventController.timeString}</h2>
                    </div>
                    <div>
                        <p className="detail-title">Location</p>
                        <h2 className="event-info-data">{eventData[0].location}</h2>
                    </div>
                    <div>
                        <p className="detail-title">Other Information</p>
                        <TagList tagList={EventController.tags} fontSize="0.8rem"/>
                    </div>
                    <div>
                        <p className="detail-title">Description</p>
                        <p className="event-description">{eventData[0].description}</p>
                    </div>
                    {EventController.showButton && <ButtonRedirect text="Registration" fontSize="1.25rem"colour={EventController.colour} buttonStyle="stroke" bold useIcon icon={whiteArrow} linkTo={eventData[0].link}/>}
                </div>}
        </div>
    );
}
 
export default EventInfo;