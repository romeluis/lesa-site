import React, { useState } from "react";
import backIcon from "../assets/black-back-link-icon.svg";
import ButtonAction from "./ButtonAction";
import useFetchJSON from "../utils/FetchJSON";

import "./DetailViewer.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EventForm = (props) => {
    const {id} = useParams();
    const {data: eventData, isPending, error} = useFetchJSON("https://api.lesauoft.com/events/" + id);

    const [userInput, setUserInput] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async () => {
        setFormSubmitted(true);
        // Validate that userInput is a positive integer
        const studentId = parseInt(userInput, 10);
        
        if (!userInput || isNaN(studentId) || studentId <= 0 || !Number.isInteger(studentId)) {
            alert("Please enter a valid positive student number.");
            setFormSubmitted(false);
            return;
        }

        try {
            const response = await fetch(`https://api.lesauoft.com/submit/event/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    student_id: studentId
                })
            });

            const data = await response.json();

            if (data.message === "Student not found.") {
                alert("You must be a registered General Member first before registering for this event.");
                setFormSubmitted(false);
            } else if (response.ok) {
                // Success case - you might want to show a success message or redirect
                alert("Successfully registered for the event!");
                userLocation.key ? userHistory.goBack() : userHistory.push(defaultReturn);
            } else {
                // Handle other error cases
                alert("An error occurred while registering. Please try again.");
                setFormSubmitted(false);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while registering. Please try again.");
            setFormSubmitted(false);
        }
    };

    const userLocation = useLocation();
    const userHistory = useHistory();
    const defaultReturn = "/"

    return (
        <div className="detail-page-container">
            {/*Top Bar*/}
            <div className="back-button grey hoverOnly" onClick={() => {userLocation.key ? userHistory.goBack() : userHistory.push(defaultReturn)}}>
                <img src={backIcon} alt=""/>
            </div>
            {!isPending && error == null && eventData.length > 0 &&  <h1 className="detail-page-title">{"Register for " + eventData[0].name}</h1>}
            {!isPending && error != null && eventData.length === 0 &&
                <div>
                    <div className="details-loading2 shimmerError"/>
                </div>
            }
            {isPending && error == null && 
                <div>
                    <div className="details-loading2 shimmerLoad"/>
                </div>
            }

            {/*Emoji + shimmerLoad*/}
            <div>
                {!isPending && error == null &&  eventData.length > 0 && <h1 className="detail-emoji">{eventData[0].emoji}</h1>}
                {isPending && error == null &&  <div className="emoji-loading shimmerLoad"/>}
                {!isPending && error != null  && eventData.length === 0 &&  <div className="emoji-loading shimmerError"/>}
            </div>

            <div className="details-sub-container">
                {!isPending && !error && eventData.length > 0 &&
                    <div className="form-question">
                        <label className="detail-entry-title">{"Student Number*"}</label>

                            <input
                                type="text"
                                placeholder={"Enter your student number"}
                                onChange={(e) => setUserInput(e.target.value)}
                                className="form-text-input"
                            />

                            <ButtonAction
                                text="Submit" bold fontSize="1.3rem" colour="green" buttonStyle="fill" action={handleSubmit} disabled={formSubmitted}
                            />
                    </div>
                }
                {!isPending && error != null &&  eventData.length === 0 &&  
                <div>
                    <div className="details-loading2 shimmerError"/>
                </div>
                }
                {isPending && error == null && 
                    <div>
                        <div className="details-loading2 shimmerLoad"/>
                    </div>
                }
            </div>
        </div>
    );
}

export default EventForm;