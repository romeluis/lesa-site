import React from "react";
import backIcon from "../assets/black-back-link-icon.svg";


class FormConfiguration {
    constructor() {
        this.title = ""
        this.emoji = ""

        this.userInputs = []
        this.questions = []
    }
}

const Form = (props) => {
    const formConfiguration = props.configuration
    const isPending = props.infoState;
    const error = props.infoError; 

    const userLocation = props.location;
    const userHistory = props.history;

    return (
        <div className="detail-page-container">
            {/*Top Bar*/}
            <div className="back-button grey hoverOnly" onClick={() => {userLocation.key ? userHistory.goBack() : userHistory.push(defaultReturn)}}>
                <img src={backIcon} alt=""/>
            </div>
            {!isPending && error == null && <h1 className="detail-page-title">{formConfiguration.title}</h1>}
            {isPending && error == null &&  <div className="details-loading2 shimmerLoad"/>}
            {!isPending && error != null  &&  <div className="details-loading2 shimmerError"/>}

            {/*Emoji + shimmerLoad*/}
            <div>
                {!isPending && error == null &&  <h1 className="detail-emoji">{emoji}</h1>}
                {isPending && error == null &&  <div className="emoji-loading shimmerLoad"/>}
                {!isPending && error != null  &&  <div className="emoji-loading shimmerError"/>}
            </div>

            <div className="details-sub-container">
                {!isPending && error == null && formConfiguration.questions.map((question, index) => (
                    <div key={index}>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Form;