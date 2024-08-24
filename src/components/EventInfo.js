//import "./EventInfo.css";

import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchJSON from "../utils/FetchJSON";
import { formatEventPrice, formatTime, isDateSet, monthFullForms } from "../utils/EventUtils";
import DetailViewer from "./DetailViewer";
import ButtonRedirect from "./ButtonRedirect";
import icon from "../assets/grey-link-icon.svg";

class EventDisplay {
    constructor() {
        this.colour = "pink";
        this.emoji = null;
        this.pageInfo = [];
    }

    create(eventInfo) {
        if (eventInfo == null) {
            return;
        }

        this.emoji = eventInfo.emoji;
        let title = [{type: "text", title: "Event Title", body: eventInfo.name, colour: this.colour}];

        let dateString = "";
        let timeString = "";
        if (isDateSet(eventInfo)) {
            dateString = eventInfo.day.toString() + " " + monthFullForms[eventInfo.month - 1] + " " + eventInfo.year.toString();
            timeString = formatTime(eventInfo.startHour, eventInfo.startMinute) + " - " + formatTime(eventInfo.endHour, eventInfo.endMinute);
        } else {
            dateString = monthFullForms[eventInfo.month - 1] + " " + eventInfo.year.toString() + ", Exact Date TBD";
            timeString = "TBD";
        }
        let date = [{type: "text", title: "Date", body: dateString, colour: "black"}];
        let time = [{type: "text", title: "Time", body: timeString, colour: "black"}];

        let location = [{type: "text", title: "Location", body: eventInfo.location, colour: "black"}];
        let price = [{type: "text", title: "Price", body: formatEventPrice(eventInfo.price), colour: "black"}];

        let org = [];
        let buttonType = false;
        if (eventInfo.type === "FROSH Event") {
            this.colour  = "purple";
            buttonType = true;
            org = [{type: "text", title: "Organization", body: eventInfo.organization, colour: "black"}];
        } else if (eventInfo.type === "UofT Event") {
            this.colour  = "blue";
            buttonType = true;
            org = [{type: "text", title: "Organization", body: eventInfo.organization, colour: "black"}];
        } else if (eventInfo.type === "Community Event") {
            this.colour  = "orange";
            buttonType = true;
            org = [{type: "text", title: "Organization", body: eventInfo.organization, colour: "black"}];
        }

        let button = [];
        if (eventInfo.link !== "0" && eventInfo.link !== "1") {
            if (buttonType) {
                button = {type: "button", title: "Link", body: <ButtonRedirect text="Learn More" fontSize="1.25rem" colour={this.colour}  buttonStyle="stroke" useIcon icon={icon} linkTo={eventInfo.link}/>, colour: "black"};
            } else {
                button = {type: "button", title: "Registration", body: <ButtonRedirect text="Register Now" fontSize="1.25rem" colour={this.colour} buttonStyle="stroke" useIcon icon={icon} linkTo={eventInfo.link} bold/>, colour: "black"};
            }
        } else if (eventInfo.link === "1") {
            button = [{type: "text", title: "Registration", body: "Registration TBA", colour: "black"}];
        } else {
            button = [{type: "text", title: "Registration", body: "Registration not required", colour: "black"}];
        }

        let desc = [];
        if (eventInfo.description !== "NONE") {
            desc=[{type: "long-text", title: "Description", body: eventInfo.description, colour: "black"}];
        }

        //Compile all the info
        this.pageInfo = title.concat(org, date, time, location, price, button, desc);
    }
}

const EventInfo = () => {
    const {id} = useParams();
    const {data: eventData, isPending, error} = useFetchJSON("https://api.leauoft.com/events/" + id);
    const EventController = new EventDisplay();

    const userHistory = useHistory();
    const userLocation = useLocation();

    if (!isPending && error == null && eventData.length > 0) {
        EventController.create(eventData[0]);
    }

    return (  
        <DetailViewer emoji={EventController.emoji} pageInfo={EventController.pageInfo} infoState={isPending} infoError={error} defaultReturn="../events" pageTitle="Event Details" history={userHistory} location={userLocation}/>
    );
}
 
export default EventInfo;