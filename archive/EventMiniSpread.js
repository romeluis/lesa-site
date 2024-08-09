import './EventMiniSpread.css';

import {isUpcoming, isDateSet} from "../../utils/EventUtils.js";
import EventPreview from './EventPreview';

class EventSpread {
    constructor() {
        //Get current date
        const dateToday = new Date();
        this.currentDay = dateToday.getDate();
        this.currentMonth = dateToday.getMonth();
        this.currentYear = dateToday.getFullYear();

        this.allEvents = [];
        this.upcomingEvents = [];
        this.eventsMonthlyHistogram = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    init(events) {
        const FULL_PREVIEW_COUNT = 5;
        let currentPreviewCount = 0;
        for (let index = 0; index < events.length; index++) {
            let currentEvent = events[index];
            this.allEvents.push(currentEvent);
            if (isUpcoming(currentEvent, this.currentDay, this.currentMonth, this.currentYear) && currentPreviewCount < FULL_PREVIEW_COUNT) {
                this.upcomingEvents.push(currentEvent);
                currentPreviewCount++;
            }

            if (isDateSet(currentEvent)) {
                if (currentEvent.day <= 15) {
                    this.eventsMonthlyHistogram[2 * parseInt(currentEvent.month)] += 1;
                } else {
                    this.eventsMonthlyHistogram[2 * parseInt(currentEvent.month) + 1] += 1;
                }
            } else {
                this.eventsMonthlyHistogram[2 * parseInt(currentEvent.month) + 1] += 1;
            }
        }
    }

    //Access functions
    getNextMonth(index) {
        let newMonth = index + 2 * this.currentMonth;
        if (this.currentDay > 15) {
            newMonth += 1;
        }

        if (newMonth > 24) {
            newMonth -= 24;
        }
        return newMonth;
    }
    getMonthNumOfEvents(month) { //Note: month = 0 is Jan.
        return this.eventsMonthlyHistogram[month];
    }
}

const EventMiniSpread = (props) => {
    const eventList = props.eventList;
    const EventController = new EventSpread();
    EventController.init(eventList);

    return (  
        <div className="event-spread">
            {EventController.upcomingEvents.map((event) => (
                <EventPreview eventInfo={event}/>
            ))}

        </div>
    );
}
 
export default EventMiniSpread;