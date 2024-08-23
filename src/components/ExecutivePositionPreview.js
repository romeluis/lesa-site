import arrow from "../assets/white-link-icon.svg";
import "./ExecutivePositionPreview.css";

import { isUpcomingGeneral, monthShortForms } from "../utils/EventUtils";
import TagList from "./TagList";

const ExecutivePositionPreview = (props) => {
    const positionInfo = props.positionInfo;
    const selectedSize = props.fontSize;
    const selectedColour = props.colour;

    const currentDate = new Date();
    let statusString = "";
    let pulseStatus = false;
    let colour = "black";
    let tagStyle = "stroke";
    let linkEnabled = false;
    if (isUpcomingGeneral(positionInfo.startDay - 1 , positionInfo.startMonth - 1, currentDate.getFullYear(), currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear())) {
        statusString = "Applications Open " + monthShortForms[positionInfo.startMonth - 1] + " " + positionInfo.startDay;
    } else {
        if (isUpcomingGeneral(positionInfo.endDay - 1, positionInfo.endMonth - 1, currentDate.getFullYear(), currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear())) {
            statusString = "Apply Now until " + monthShortForms[positionInfo.endMonth - 1] + " " + positionInfo.endDay;
            //tagStyle = "fill";
            colour = "orange"
            pulseStatus = true;
            linkEnabled = true;
        } else {
            statusString = "Applications Closed";
        }
    }

    const tags = [{text: positionInfo.commitment, style:"fill", colour: "orange", pulse: false}, 
                  {text: statusString, style: tagStyle, colour: colour, pulse: pulseStatus}]; 

    return (
        <a className={"job-link-container " + (linkEnabled ? "" : "disabled-link")} href={linkEnabled ? (positionInfo.link) : "/"}>
            <div className="executive-position-container" style={{fontSize: selectedSize}}>
                <div className="preview-content">
                    <h1 className={"job-title " + selectedColour + "-text"} style={{fontSize: selectedSize}} >{positionInfo.name}</h1>
                    <TagList tagList={tags} fontSize="0.4em" wrap/>
                </div>
                <div className="preview-decoration">
                    <img src={arrow} alt=""/>
                </div>
            </div>
        </a>
    );
}
 
export default ExecutivePositionPreview;