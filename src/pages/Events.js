import EventBrowser from "../components/EventBrowser";
import "./Events.css";

const Events = () => {
    return ( 
        <div>
            <h1 className="page-title">Upcoming Events</h1>
            <EventBrowser/>
        </div>
    );
}
 
export default Events;