import arrow from "../assets/white-link-icon.svg";
import "./ExecutivePositionPreview.css";

import { isUpcomingGeneral, monthShortForms } from "../utils/EventUtils";
import TagList from "./TagList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ExecutivePositionPreview = (props) => {
    const positionInfo = props.positionInfo;
    const selectedSize = props.fontSize;
    const selectedColour = props.colour;

    const currentDate = new Date();
    let statusString = "";
    let pulseStatus = false;
    let colour = "black";
    let tagStyle = "stroke";
    if (isUpcomingGeneral(positionInfo.startDay, positionInfo.startMonth - 1, positionInfo.startYear, currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear())) {
        statusString = "Applications Open " + monthShortForms[positionInfo.startMonth - 1] + " " + positionInfo.startDay;
    } else {
        if (isUpcomingGeneral(positionInfo.endDay, positionInfo.endMonth - 1, positionInfo.endYear, currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear())) {
            statusString = "Apply Now until " + monthShortForms[positionInfo.endMonth - 1] + " " + positionInfo.endDay;
            //tagStyle = "fill";
            colour = "orange"
            pulseStatus = true;
        } else {
            statusString = "Applications Closed";
        }
    }

    const tags = [{text: positionInfo.commitment, style:"fill", colour: "orange", pulse: false}, 
                  {text: statusString, style: tagStyle, colour: colour, pulse: pulseStatus}]; 

    return (
        <Link className="job-link-container" to={"../jobs/" + positionInfo.id}>
            <div className="executive-position-container" style={{fontSize: selectedSize}}>
                <div className="preview-content">
                    <h1 className={"job-title " + selectedColour + "-text"} style={{fontSize: selectedSize}} >{positionInfo.name}</h1>
                    <TagList tagList={tags} fontSize="0.4em" wrap/>
                </div>
                <div className="preview-decoration">
                    <img src={arrow} alt=""/>
                </div>
            </div>
        </Link>
    );
}
 
export default ExecutivePositionPreview;