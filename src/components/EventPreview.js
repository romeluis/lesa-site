import arrow from "../assets/white-link-icon.svg";
import "./EventPreview.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { isDateSet, monthShortForms, monthFullForms, formatTime, formatEventPrice, formatEventRegistration } from "../utils/EventUtils";
import TagList from "./TagList";

class EventPreviewDisplay {
    constructor() {
        this.dateString = "";
        this.startTimeString = "";
        this.tags = [];
        this.colour = "pink";
    }

    create(eventInfo) {
        if (isDateSet(eventInfo)) {
            this.dateString = eventInfo.day.toString() + " " + monthShortForms[eventInfo.month - 1];
            this.startTimeString = ", " + formatTime(eventInfo.startHour, eventInfo.startMinute);
        } else {
            this.dateString = monthFullForms[eventInfo.month - 1];
            this.startTimeString = ", Time TBD"
        }

        let registration = formatEventRegistration(eventInfo.link);

        let price = formatEventPrice(eventInfo.price);

        if (eventInfo.type === "FROSH Event") {
            this.colour  = "purple";
        } else if (eventInfo.type === "UofT Event") {
            this.colour  = "dark-blue"
        } else if (eventInfo.type === "Community Event") {
            this.colour  = "orange";
        }

        this.tags = [{text:price, style:"stroke", colour: "black", pulse: false}, 
                     {text:registration, style:"stroke", colour: ((registration === "Register now!") ? this.colour : "black"), pulse: (registration === "Register now!")}, 
                     {text:eventInfo.type, style:"fill", colour: this.colour, pulse: false}]; 
    }
}

const EventPreview = (props) => {
    const selectedSize = props.fontSize;
    const widthMax = props.maxWidth;
    const widthMin = props.minWidth;
    const span = props.spanOverride;
    const wrap = props.wrap;

    const eventInfo = props.eventInfo;
    const processedEventInfo = new EventPreviewDisplay();
    processedEventInfo.create(eventInfo);

    return (  
        <Link className={"link-container " + (span == null ? "" : "preview-override")} style={{fontSize: selectedSize}} to={"/events/" + eventInfo.id} key={eventInfo.id}>
            <div className="preview-container" style={{maxWidth: widthMax, minWidth: widthMin}}>
                <div className="preview-content">
                    <h2 className="date-title">{processedEventInfo.dateString}</h2>
                    <div>
                        <h1 className={"event-title " + processedEventInfo.colour + "-text"} style={{fontSize: selectedSize}}>{eventInfo.name}</h1>
                        <p className="event-info">{(eventInfo.location === "TBD" ? "Location TBD": eventInfo.location) + processedEventInfo.startTimeString}</p>
                    </div>
                    <TagList wrap={wrap ? true : false} tagList={processedEventInfo.tags} fontSize="0.35em"/>
                </div>
                <div className="preview-decoration">
                    <img src={arrow} alt=""/>
                </div>
            </div>
        </Link>
    );
}
 
export default EventPreview;