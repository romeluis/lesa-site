import React, { useState } from "react";
import backIcon from "../assets/black-back-link-icon.svg";
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

    const handleSubmit = async () => {
        // Validate required fields
        const validationErrors = [];
        
        formConfiguration.questions.forEach(question => {
            if (question.required) {
                const userValue = userInputs[question.databaseKey];
                
                // Check if field is empty, undefined, or contains placeholder text
                if (!userValue || 
                    userValue.trim() === '' || 
                    userValue === question.placeholder) {
                    validationErrors.push(question.title);
                }
            }
        });

        // If there are validation errors, alert user and return
        if (validationErrors.length > 0) {
            alert(`Please fill in the following required fields: ${validationErrors.join(', ')}`);
            return;
        }

        try {
            // Send the data to the destination URL
            const response = await fetch(formConfiguration.destination, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInputs)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                // Optionally reset the form or redirect
                setUserInputs({});
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
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
                            <select
                                onChange={(e) => handleInputChange(question.databaseKey, e.target.value)}
                                className="form-text-input"
                            >
                                <option value="">{question.placeholder}</option>
                                {question.options.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                {!isPending && !error && (
                    <ButtonAction
                        text="Submit" bold fontSize="1.3rem" colour="green" buttonStyle="fill" action={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
}

export default Form;