import arrow from "../assets/grey-link-icon.svg"

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { monthShortForms } from "../utils/EventUtils";
import TagList from "./TagList";

class EventPreviewDisplay {
    constructor() {
        this.dateString = "";
        this.startTimeString = "";
        this.endTimeString = "";
        this.tags = [];
    }

    create(eventInfo) {
        this.dateString = eventInfo.day.toString() + " " + monthShortForms[eventInfo.month];
        this.startTimeString = (eventInfo.startHour > 12 ? (eventInfo.startHour - 12).toString() : eventInfo.startHour.toString()) + ":" + (eventInfo.startMinute < 10 ? ("0" + eventInfo.startMinute.toString()) : eventInfo.startMinute.toString()) + (eventInfo.startHour > 12 ? "PM" : "AM");
        this.endTimeString = (eventInfo.endHour > 12 ? (eventInfo.endHour - 12).toString() : eventInfo.endHour.toString()) + ":" + (eventInfo.endMinute < 10 ? ("0" + eventInfo.endMinute.toString()) : eventInfo.endMinute.toString()) + (eventInfo.endMinute > 12 ? "PM" : "AM");

        let registration = "Registration not required";
        if (eventInfo.link !== "0") {
            if (eventInfo.link === "1") {
                registration = "Registration TBA"
            } else {
                registration = "Register now!"
            }
        }

        let price = "Free";
        if (eventInfo.price != "0") {
            price = "$" + eventInfo.price.toString();
        }

        let tagColour = "green";
        if (eventInfo.type === "FROSH Event") {
            tagColour = "purple";
        } else if (eventInfo.type === "UofT Event") {
            tagColour = "blue"
        } else if (eventInfo.type === "Community Event") {
            tagColour = "orange";
        }

        this.tags = [{text:price, style:"stroke", colour: tagColour}, 
                     {text:registration, style:"stroke", colour: tagColour}, 
                     {text:eventInfo.type, style:"fill", colour: tagColour}]; //red is for community event
    }
}

const EventPreview = (props) => {
    const selectedSize = props.fontSize;

    const eventInfo = props.eventInfo;
    const processedEventInfo = new EventPreviewDisplay();
    processedEventInfo.create(eventInfo);

    return (  
        <Link className="preview-container" style={{fontSize: selectedSize}} to={"/events/" + eventInfo.id} key={eventInfo.id}>
            <div className="preview-content">
                <h2 className="date-title">{processedEventInfo.dateString}</h2>
                <div>
                    <h1 className="event-title" style={{fontSize: selectedSize}}>{eventInfo.name}</h1>
                    <p>{eventInfo.location + ", " + processedEventInfo.startTimeString + " to " + processedEventInfo.endTimeString}</p>
                </div>
                <TagList tagList={processedEventInfo.tags} fontSize="0.5em"/>
            </div>
            <div className="preview-decoration">
                <img src={arrow} alt=""/>
            </div>
        </Link>
    );
}
 
export default EventPreview;