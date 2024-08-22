import backIcon from "../assets/black-back-link-icon.svg";
import "./EventInfo.css";
import whiteArrow from "../assets/grey-link-icon.svg"

import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchJSON from "../utils/FetchJSON";
import ButtonRedirect from "./ButtonRedirect";
import { formatEventPrice, formatEventRegistration, formatTime, isDateSet, monthFullForms } from "../utils/EventUtils";

class EventDisplay {
    constructor() {
        this.dateString = "";
        this.timeString = "";
        this.tags = [];
        this.colour = "pink";
        this.showButton = false;
        this.showDescription = false;
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
            this.timeString = "TBD";
        }

        if (eventInfo.type === "FROSH Event") {
            this.colour  = "purple";
        } else if (eventInfo.type === "UofT Event") {
            this.colour  = "blue"
        } else if (eventInfo.type === "Community Event") {
            this.colour  = "orange";
        }

        if (eventInfo.link !== "0" && eventInfo.link !== "1") {
            this.showButton = true;
        }

        if (eventInfo.description !== "NONE") {
            this.showDescription = true;
        }
    }
}

const EventInfo = (props) => {
    const {id} = useParams();
    const {data: eventData, isPending, error} = useFetchJSON("https://api.lesauoft.com/events/" + id);
    const EventController = new EventDisplay();

    if (!isPending && error == null && eventData.length > 0) {
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
            {(isPending || error != null) &&  <div className="emoji-loading shimmerLoad"/>}
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
                        <p className="detail-title">Price</p>
                        <h2 className="event-info-data">{formatEventPrice(eventData[0].price)}</h2>
                    </div>
                    <div>
                        {EventController.showButton && <ButtonRedirect text="Registration" fontSize="1.25rem"colour={EventController.colour} buttonStyle="stroke" bold useIcon icon={whiteArrow} linkTo={eventData[0].link}/>}
                        {!EventController.showButton && 
                            <>
                                <p className="detail-title">Registration</p>
                                <p className="event-info-data">{formatEventRegistration(eventData[0].link)}</p>
                            </>}
                    </div>
                    {EventController.showDescription && <div>
                        <p className="detail-title">Description</p>
                        <p className="event-description">{eventData[0].description}</p>
                    </div>}
                </div>}
                {(isPending || error != null) && 
                <div className="event-details-container">
                    <div>
                        <p className="detail-title">Event Title</p>
                        <div className="event-details-loading3 shimmerLoad"/>
                    </div>
                    <div>
                        <p className="detail-title">Date</p>
                        <div className="event-details-loading1 shimmerLoad"/>
                    </div>
                    <div>
                        <p className="detail-title">Time</p>
                        <div className="event-details-loading3 shimmerLoad"/>
                    </div>
                    <div>
                        <p className="detail-title">Location</p>
                        <div className="event-details-loading2 shimmerLoad"/>
                    </div>
                    <div>
                        <p className="detail-title">Price</p>
                        <div className="event-details-loading1 shimmerLoad"/>
                    </div>
                    <div>
                        <p className="detail-title">Registration</p>
                        <div className="event-details-loading3 shimmerLoad"/>
                    </div>
                </div>}
        </div>
    );
}
 
export default EventInfo;