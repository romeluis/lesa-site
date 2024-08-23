import "./Join.css"
import Article from "../components/Article";
import ButtonRedirect from "../components/ButtonRedirect";
import icon from "../assets/white-link-icon.svg";
import useFetchJSON from "../utils/FetchJSON";
import ExecutivePositionPreview from "../components/ExecutivePositionPreview";


const Join = () => {
    const articleInfo = [{header:"Become a General Member", body: ["General Members are welcome to attend any of the events we host! This is the easiest way to get involved in LESA and all the fun things we do. "]}];
    const buttonList = [<ButtonRedirect text="Sign Up Now!" bold fontSize="1.3rem" colour="green" buttonStyle="fill" useIcon icon={icon} linkTo="https://join.lesauoft.com"/>, <ButtonRedirect text="LESA Instagram" bold fontSize="1.3rem" colour="dark-grey" buttonStyle="fill" useIcon icon={icon} linkTo="https://instagram.com/uoft_lesa"/>];

    const {data: jobsList, isPending, error} = useFetchJSON("https://api.lesauoft.com/jobs");

    return (  
        <div className="join-container">
            <div className="join-inner-container">
                <Article articleInfo={articleInfo} articleStyle="fill" foregroundColour="green" backgroundColour="grey" fontSize="2.5rem" buttons={buttonList}/>   
                <div className={"article-container grey-container fill-container"} style={{fontSize: "2.5rem", justifyContent: null}}>
                    <div>
                        <h1 className={"article-title orange-text"} style={{fontSize: "2.5rem"}}>Join the Executive Team</h1>
                        <p className="article-text">If you're looking to take an active role in LESA, joining our executive team is a great opportunity! We typically recuruit in September/October for the current academic year and in March/April for the following academic year. You can check out any roles we are actively hiring for below!</p>
                    </div>
                    {!isPending && error == null && jobsList.length > 0 &&
                        <div className="job-browser">
                            {jobsList.map((job, index) => (
                                <ExecutivePositionPreview positionInfo={job} fontSize="0.9em" colour="orange" key={index}/>
                            ))}
                        </div>}
                    {isPending &&
                        <div className="job-browser">
                            <div className="shimmerLoad job-browser-loading-container"/>
                            <div className="shimmerLoad job-browser-loading-container"/>
                        </div>}
                    {((!isPending && error == null && jobsList.length === 0) || (!isPending && error != null)) &&
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                            <p className="empty-events-message">No Positions Available</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Join;