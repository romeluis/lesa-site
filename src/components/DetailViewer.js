import backIcon from "../assets/black-back-link-icon.svg";
import cpifIcon from "../assets/cpif.svg"

import "./DetailViewer.css";

const DetailViewer = (props) => {
    const emoji = props.emoji;
    const pageInfo = props.pageInfo;
    const pageTitle = props.pageTitle;
    const defaultReturn = props.defaultReturn;
    const cpif = props.cpif

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
            <h1 className="detail-page-title">{pageTitle}</h1>

            {/*Emoji + shimmerLoad*/}
            <div>
                {!isPending && error == null &&  <h1 className="detail-emoji">{emoji}</h1>}
                {isPending && error == null &&  <div className="emoji-loading shimmerLoad"/>}
                {!isPending && error != null  &&  <div className="emoji-loading shimmerError"/>}
                {cpif && <img alt="This event is CPSIF Funded" src={cpifIcon}/>}
            </div>

            {/*Info Section*/}
            <div className="details-sub-container">
                {!isPending && error == null && pageInfo.map((section, index) => (
                    <div key={index}>
                        <p className="detail-entry-title">{section.title}</p>
                        {section.type === "text" && <h2 className={"detail-entry-info " + section.colour + "-text " + (index === 0 ? "first-entry" : "")}>{section.body}</h2>}
                        {section.type === "long-text" && <h2 className={"detail-entry-desc"}>{section.body}</h2>}
                        {section.type === "button" && <>{section.body}</>}
                    </div>
                ))}
                {/*Info Shimmer Load*/}
                {isPending && error == null && 
                    <>
                        <div>
                            <div className="details-title-loading shimmerLoad"/>
                            <div className="details-loading2 shimmerLoad"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerLoad"/>
                            <div className="details-loading1 shimmerLoad"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerLoad"/>
                            <div className="details-loading3 shimmerLoad"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerLoad"/>
                            <div className="details-loading1 shimmerLoad"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerLoad"/>
                            <div className="details-loading2 shimmerLoad"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerLoad"/>
                            <div className="details-loading3 shimmerLoad"/>
                        </div>
                    </>}
                {/*Info Error Load*/}
                {!isPending && error != null && 
                    <>
                        <div>
                            <div className="details-title-loading shimmerError"/>
                            <div className="details-loading2 shimmerError"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerError"/>
                            <div className="details-loading1 shimmerError"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerError"/>
                            <div className="details-loading3 shimmerError"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerError"/>
                            <div className="details-loading1 shimmerError"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerError"/>
                            <div className="details-loading2 shimmerError"/>
                        </div>
                        <div>
                            <div className="details-title-loading shimmerError"/>
                            <div className="details-loading3 shimmerError"/>
                        </div>
                    </>}
            </div>

        </div>
    );
}
 
export default DetailViewer;