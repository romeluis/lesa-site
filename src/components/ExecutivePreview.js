import TagList from "./TagList";
import "./ExecutivePreview.css";

const ExecutivePreview = (props) => {
    const executiveInfo = props.executiveInfo;

    let imageLink = "https://lesauoft.com/defaultExecutive.svg";
    if (executiveInfo.image !== "NONE") {
        imageLink = "https://lesauoft.com/" + executiveInfo.image + ".png";
    }

    const tags = [{text: executiveInfo.position, style:"fill", colour: "green", pulse: false},
                  {text: executiveInfo.program, style:"stroke", colour: "black", pulse: false}]
    
    return (
        <div className="executive-card">
            <div className="executive-card-image-container">
                <img src={imageLink} alt="Portrait of Executive"/>
            </div>
            <div className="executive-card-info-container">
                <h2 className="executive-card-name">{executiveInfo.fullName + " " + executiveInfo.country}</h2>
                <TagList tagList={tags} wrap fontSize="0.9em"/>
                <p className="executive-card-bio">{executiveInfo.bio}</p>
            </div>
        </div>
    );
}
 
export default ExecutivePreview;