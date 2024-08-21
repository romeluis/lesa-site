import { useEffect, useMemo, useState } from "react";
import ButtonDropDown from "./ButtonDropDown";
import EventPreview from "./EventPreview";
import "./EventBrowser.css";
import useFetchJSON from "../utils/FetchJSON";

const EventBrowser = (props) => {
    const [urlQuery, setUrlQuery] = useState("https://api.lesauoft.com/events");

    const [sortState, setSortState] = useState("Date Ascending");
    const [filterState, setFilterState] = useState("None");

    const {data: requestedEvents, isPending, error} = useFetchJSON(urlQuery);

    const sortedEvents = useMemo(() => {
        let result = requestedEvents;

        if (result == null) {
            return null;
        }

        if (sortState === "Price Ascending") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortState === "Price Descending") {
            result.sort((a, b) => b.price - a.price);
        } else if (sortState === "Date Ascending") {
            result.sort((x, y) => {
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
                        if (x.day > y.day) {
                            return 1;
                        } else if (x.day < y.day) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                }
            });
        } else if (sortState === "Date Descending") {
            result.sort((x, y) => {
                if (x.year > y.year) {
                    return -1;
                } else if (x.year < y.year) {
                    return 1;
                } else {
                    if (x.month > y.month) {
                        return -1;
                    } else if (x.month < y.month) {
                        return 1;
                    } else {
                        if (x.day > y.day) {
                            return -1;
                        } else if (x.day < y.day) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                }
            });
        }

        return result;
    }, [requestedEvents, sortState]);

    const changeFilter = (newOption) => {
        setFilterState(newOption);
        if (newOption === "None") {
            setUrlQuery("https://api.lesauoft.com/events");
        } else if (newOption === "LESA Event") {
            setUrlQuery("https://api.lesauoft.com/events?type=LESA+Event");
        } else if (newOption === "FROSH Event") {
            setUrlQuery("https://api.lesauoft.com/events?type=FROSH+Event");
        } else if (newOption === "UofT Event") {
            setUrlQuery("https://api.lesauoft.com/events?type=UofT+Event");
        } else if (newOption === "Community Event") {
            setUrlQuery("https://api.lesauoft.com/events?type=Community+Event");
        } else {
            setUrlQuery("https://api.lesauoft.com/events");
        }
    }

    const changeSort = (newOption) => {
        setSortState(newOption);
    }

    return (  
        <div>
            <div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
                <ButtonDropDown selectedOption={sortState} changeOption={setSortState} onChangeFunction={changeSort} selectionText="Sort" size="1.125rem" options={["Date Ascending", "Date Descending", "Price Ascending", "Price Descending"]} colour="grey" buttonStyle="hoverOnly"/>
                <ButtonDropDown selectedOption={filterState} changeOption={setFilterState} onChangeFunction={changeFilter} selectionText="Filter" size="1.125rem" options={["None", "LESA Event", "FROSH Event", "UofT Event", "Community Event"]} colour="grey" buttonStyle="hoverOnly"/>
            </div>

            {(sortedEvents != null) && (sortedEvents.length > 0) && !isPending && 
            <div className="event-viewer">
                {sortedEvents.map((event) => (
                    <EventPreview eventInfo={event} fontSize="2.15rem" minWidth="500px" key={event.id}/>
                ))}
            </div>}
            {(sortedEvents != null) && (sortedEvents.length <= 0) &&
                <div className="empty-events-container">
                    <h2 className="empty-events-message">No Events Found</h2>
                </div>
            }
            {(isPending || error) &&
                <div className="event-viewer">
                    <div className="browser-loading-container shimmerLoad"/>
                    <div className="browser-loading-container shimmerLoad"/>
                    <div className="browser-loading-container shimmerLoad"/>
                    <div className="browser-loading-container shimmerLoad"/>
                </div>
            }
        </div>
    );
}
 
export default EventBrowser;