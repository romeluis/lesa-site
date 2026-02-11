import "./EventSpread.css";
import arrow from "../assets/white-link-icon.svg";

import { isUpcoming, isDateSet, getSortableDay, monthSectionShortForms } from "../utils/EventUtils";
import useFetchJSON from "../utils/FetchJSON";
import EventPreview from "./EventPreview";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
        eventList.map((event) => {
            if (isUpcoming(event, this.currentDay, this.currentMonth + 1, this.currentYear)) {
                this.upcomingEvents.push(event);

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
            return 0;
        });

        this.upcomingEvents.sort((x, y) => {
            if (x.year > y.year) {
                return 1;
            } else if (x.year < y.year) {
                return -1;
            } else {
                if (x.month > y.month) {
                    return 1;
                } else if (x.month < y.month) {
                    return -1;
                } else {
                    if (getSortableDay(x) > getSortableDay(y)) {
                        return 1;
                    } else if (getSortableDay(x) < getSortableDay(y)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
        });

        this.upcomingEvents.splice(numPreviews);

        for (let index = 0; index < numMonths; index++) {
            let thisMonth = this.getNextMonth(index);

            let numberString = "No Events";
            if (this.eventsMonthlyHistogram[thisMonth] === 1) {
                numberString = "1 Event";
            } else if (this.eventsMonthlyHistogram[thisMonth] > 1) {
                numberString = this.eventsMonthlyHistogram[thisMonth].toString() + " Events";
            }

            this.upcomingMonths.push({title: monthSectionShortForms[thisMonth], number: numberString, monthIndex: (thisMonth % 2 === 0 ? thisMonth/2 : (thisMonth-1)/2)});
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
    const {data: eventList, isPending, error} = useFetchJSON("https://api.lesauoft.com/events");

    const numberOfPreviews = props.maxPreviews;
    const numberOfMonths = props.maxMonths;

    const controller = new EventSpreadController();
    if (!isPending && error === null) {
        controller.create(eventList, numberOfPreviews, numberOfMonths);
    }

    return (  
        <div className="event-spread"> 
            {!isPending && error === null &&
                controller.upcomingEvents.map((event) => (
                    <EventPreview eventInfo={event} fontSize="1.9rem" minWidth="200px" key={event.id} spanOverride wrap={false}/>
                ))}
            {!isPending && error === null &&
                controller.upcomingMonths.map((month, index) => (
                    <Link className="month-preview" key={index} to={"/events"}>
                        <div className="month-preview-text">
                            <h1>{month.title}</h1>
                            <p>{month.number}</p>
                        </div>
                        <img className="month-preview-decoration" src={arrow} alt=""/>
                    </Link>
                ))}
            {(isPending || error) &&
                <>
                <div className="spread-loading-container-large shimmerLoad"/>
                <div className="spread-loading-container-large shimmerLoad"/>

                <div className="spread-loading-container-small shimmerLoad"/>
                <div className="spread-loading-container-small shimmerLoad"/>
                <div className="spread-loading-container-small shimmerLoad"/>
                <div className="spread-loading-container-small shimmerLoad"/>
                <div className="spread-loading-container-small shimmerLoad"/>
                <div className="spread-loading-container-small shimmerLoad"/>
                </>
            }
        </div>
    );
}
 
export default EventSpread;