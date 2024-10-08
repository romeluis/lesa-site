import { Helmet } from "react-helmet";
import EventBrowser from "../components/EventBrowser";
import "./Events.css";

const Events = () => {
    return ( 
        <div>
            <Helmet>
                <title>LESA Upcoming Events</title>
                <meta
                name="description"
                content="See all of LESA's upcoming events this academic year!"
                />
            </Helmet>
            <h1 className="event-page-title">Upcoming Events</h1>
            <EventBrowser/>
        </div>
    );
}
 
export default Events;