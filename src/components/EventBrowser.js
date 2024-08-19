import { useRef, useState } from "react";
import ButtonDropDown from "./ButtonDropDown";
import EventPreview from "./EventPreview";
import "./EventBrowser.css";

const EventBrowser = (props) => {
    const [sortState, setSortState] = useState("Date Ascending");
    const [filterState, setFilterState] = useState("None");
    const requestedEvents = [{
        "id":1,
        "name":"Frosh Matriculation",
        "day":31,
        "month":8,
        "year":2024,
        "startHour":8,
        "startMinute":0,
        "endHour":9,
        "endMinute":0,
        "location":"Convocation Hall",
        "type": "FROSH Event",
        "price": 0,
        "link":"0"
    },
    {
        "id":2,
        "name":"EngSoc Club Fair",
        "day":1,
        "month":9,
        "year":2024,
        "startHour":8,
        "startMinute":0,
        "endHour":15,
        "endMinute":0,
        "location":"Bahen",
        "type": "FROSH Event",
        "price": 0,
        "link":"0"
    },
    {
        "id":3,
        "name":"International Student Welcome",
        "day":0,
        "month":9,
        "year":2024,
        "startHour":0,
        "startMinute":0,
        "endHour":0,
        "endMinute":0,
        "location":"TBD",
        "type": "LESA Event",
        "price": 0,
        "link":"0"
    },
    {
        "id":4,
        "name":"2024 General Member Welcome",
        "day":0,
        "month":9,
        "year":2024,
        "startHour":0,
        "startMinute":0,
        "endHour":0,
        "endMinute":0,
        "location":"TBD",
        "type": "LESA Event",
        "price": 0,
        "link":"0"
    },
    {
        "id":5,
        "name":"LESA Pub Crawl",
        "day":0,
        "month":10,
        "year":2024,
        "startHour":0,
        "startMinute":0,
        "endHour":0,
        "endMinute":0,
        "location":"TBD",
        "type": "LESA Event",
        "price": 30,
        "link":"1"
    },
    {
        "id":6,
        "name":"Industry Professionals",
        "day":0,
        "month":10,
        "year":2024,
        "startHour":0,
        "startMinute":0,
        "endHour":0,
        "endMinute":0,
        "location":"TBD",
        "type": "LESA Event",
        "price": 0,
        "link":"1"
    }];

    return (  
        <div>
            <div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
                <ButtonDropDown selectedOption={sortState} changeOption={setSortState} selectionText="Sort" size="1.125rem" options={["Date Ascending", "Date Descending", "Price Ascending", "Price Descending"]} colour="grey" buttonStyle="hoverOnly"/>
                <ButtonDropDown selectedOption={filterState} changeOption={setFilterState} selectionText="Filter" size="1.125rem" options={["None", "LESA Event", "FROSH Event", "UofT Event", "Community Event"]} colour="grey" buttonStyle="hoverOnly"/>
            </div>

            {(requestedEvents.length > 0) && 
            <div className="event-viewer">
                {requestedEvents.map((event) => (
                    <EventPreview eventInfo={event} fontSize="2.15rem" minWidth="500px" key={event.id}/>
                ))}
            </div>}
            {(requestedEvents.length <= 0) &&
                <div className="empty-events-container">
                    <h2 className="empty-events-message">No Events Found</h2>
                </div>
            }
        </div>
    );
}
 
export default EventBrowser;