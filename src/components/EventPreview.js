import arrow from "../assets/white-link-icon.svg";
import "./EventPreview.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { monthShortForms } from "../utils/EventUtils";
import TagList from "./TagList";

class EventPreviewDisplay {
    constructor() {
        this.dateString = "";
        this.startTimeString = "";
        this.tags = [];
        this.colour = "pink";
    }

    create(eventInfo) {
        this.dateString = eventInfo.day.toString() + " " + monthShortForms[eventInfo.month];
        this.startTimeString = (eventInfo.startHour > 12 ? (eventInfo.startHour - 12).toString() : eventInfo.startHour.toString()) + ":" + (eventInfo.startMinute < 10 ? ("0" + eventInfo.startMinute.toString()) : eventInfo.startMinute.toString()) + (eventInfo.startHour > 12 ? "PM" : "AM");

        let registration = "Registration not required";
        if (eventInfo.link !== "0") {
            if (eventInfo.link === "1") {
                registration = "Registration TBA";
            } else {
                registration = "Register now!";
            }
        }

        let price = "Free";
        if (eventInfo.price != "0") {
            price = "$" + eventInfo.price.toString();
        }

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
    }
}

const EventPreview = (props) => {
    const selectedSize = props.fontSize;

    const eventInfo = props.eventInfo;
    const processedEventInfo = new EventPreviewDisplay();
    processedEventInfo.create(eventInfo);

    return (  
        <Link className="link-container" style={{fontSize: selectedSize}} to={"/events/" + eventInfo.id} key={eventInfo.id}>
            <div className="preview-container">
                <div className="preview-content">
                    <h2 className="date-title">{processedEventInfo.dateString}</h2>
                    <div>
                        <h1 className={"event-title " + processedEventInfo.colour + "-text"} style={{fontSize: selectedSize}}>{eventInfo.name}</h1>
                        <p className="event-info">{eventInfo.location + ", " + processedEventInfo.startTimeString}</p>
                    </div>
                    <TagList tagList={processedEventInfo.tags} fontSize="0.35em"/>
                </div>
                <div className="preview-decoration">
                        <img src={arrow} alt=""/>
                    </div>
            </div>
        </Link>
    );
}
 
export default EventPreview;