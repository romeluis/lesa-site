import React, { useState } from "react";
import backIcon from "../assets/black-back-link-icon.svg";
import ButtonDropDown from "./ButtonDropDown";
import ButtonAction from "./ButtonAction";

import "./DetailViewer.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export class FormConfiguration {
    constructor() {
        this.title = ""
        this.emoji = ""
        this.destination = "" // URL to send the form data to

        this.questions = []
    }
}

export class Question {
    constructor() {
        this.title = ""
        this.databaseKey = "" // key to store in the database
        this.type = "text" // text | dropdown
        this.placeholder = ""
        this.options = [] // for dropdowns
        this.required = false
    }
}

const Form = (props) => {
    const formConfiguration = props.formConfiguration;
    const isPending = props.infoState;
    const error = props.infoError;

    const [userInputs, setUserInputs] = useState({});

    const handleInputChange = (key, value) => {
        setUserInputs(prev => ({...prev, [key]: value}));
    };

    const handleSubmit = () => {
        // Here you would typically send the data to a server
        console.log("Form submitted:", userInputs);
        // You can use the fetch API to send the data to the destination URL
        // fetch(formConfiguration.destination, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(userInputs),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    };

    const userLocation = useLocation();
    const userHistory = useHistory();
    const defaultReturn = "/join"

    return (
        <div className="detail-page-container">
            {/*Top Bar*/}
            <div className="back-button grey hoverOnly" onClick={() => {userLocation.key ? userHistory.goBack() : userHistory.push(defaultReturn)}}>
                <img src={backIcon} alt=""/>
            </div>
            <h1 className="detail-page-title">{formConfiguration.title}</h1>

            {/*Emoji + shimmerLoad*/}
            <div>
                {!isPending && error == null &&  <h1 className="detail-emoji">{formConfiguration.emoji}</h1>}
                {isPending && error == null &&  <div className="emoji-loading shimmerLoad"/>}
                {!isPending && error != null  &&  <div className="emoji-loading shimmerError"/>}
            </div>

            <div className="details-sub-container">
                {!isPending && !error && formConfiguration.questions.map((question, index) => (
                    <div key={index} className="form-question">
                        <label className="detail-entry-title">{question.title}</label>
                        {question.type === "text" && (
                            <input
                                type="text"
                                placeholder={question.placeholder}
                                onChange={(e) => handleInputChange(question.databaseKey, e.target.value)}
                                className="form-text-input"
                            />
                        )}
                        {question.type === "dropdown" && (
                            <ButtonDropDown
                                options={question.options}
                                onSelect={(option) => handleInputChange(question.databaseKey, option)}
                            />
                        )}
                    </div>
                ))}
                {!isPending && !error && (
                    <ButtonAction
                        text="Submit"
                        onClick={handleSubmit}
                        className="form-submit-button"
                        color="green"
                    />
                )}
            </div>
        </div>
    );
}

export default Form;