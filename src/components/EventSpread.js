import "./EventSpread.css";
import arrow from "../assets/white-link-icon.svg";

import { isUpcoming, isDateSet, monthSectionShortForms } from "../utils/EventUtils";
import useFetchJSON from "../utils/FetchJSON";
import EventPreview from "./EventPreview";

class EventSpreadController {
    constructor() {
        const dateToday = new Date();
        this.currentDay = dateToday.getDate();
        this.currentMonth = dateToday.getMonth();
        this.currentYear = dateToday.getFullYear();

        this.upcomingEvents = [];
        this.upcomingMonths = [];
        this.eventsMonthlyHistogram = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    create(eventList, numPreviews, numMonths) {
        let index = 0;
        eventList.map((event) => {
            if (isUpcoming(event, this.currentDay, this.currentMonth, this.currentYear)) {
                if (index < numPreviews) {
                    this.upcomingEvents.push(event);
                    index++;
                }
                if (isDateSet(event)) {
                    if (event.day <= 15) {
                        this.eventsMonthlyHistogram[2 * (event.month - 1)] += 1;
                    } else {
                        this.eventsMonthlyHistogram[2 * (event.month - 1) + 1] += 1;
                    }
                } else {
                    this.eventsMonthlyHistogram[2 * (event.month - 1) + 1] += 1;
                }
            }
        })

        for (let index = 0; index < numMonths; index++) {
            let thisMonth = this.getNextMonth(index);

            let numberString = "No Events";
            if (this.eventsMonthlyHistogram[thisMonth] == 1) {
                numberString = "1 Event";
            } else if (this.eventsMonthlyHistogram[thisMonth] > 1) {
                numberString = this.eventsMonthlyHistogram[thisMonth].toString() + " Events";
            }

            this.upcomingMonths.push({title: monthSectionShortForms[thisMonth], number: numberString});
        }

    }

    getNextMonth(index) {
        let newMonth = index + 2 * this.currentMonth;
        if (this.currentDay > 15) {
            newMonth += 1;
        }
        if (newMonth >= 24) {
            newMonth -= 24;
        }
        return newMonth;
    }
}

const EventSpread = (props) => {
    const {data: eventList, isPending, error} = useFetchJSON("http://localhost:3000/events.json");

    const numberOfPreviews = props.maxPreviews;
    const numberOfMonths = props.maxMonths;

    const controller = new EventSpreadController();
    if (!isPending) {
        controller.create(eventList, numberOfPreviews, numberOfMonths);
    }

    return (  
        <div className="event-spread"> 
            {!isPending &&
                controller.upcomingEvents.map((event) => (
                    <EventPreview eventInfo={event} fontSize="2.15rem" minWidth="425px"/>
                ))}
            {!isPending &&
                controller.upcomingMonths.map((month) => (
                    <div className="month-preview">
                        <div className="month-preview-text">
                            <h1>{month.title}</h1>
                            <p>{month.number}</p>
                        </div>
                        <img className="month-preview-decoration" src={arrow}/>
                    </div>
                ))}
        </div>
    );
}
 
export default EventSpread;