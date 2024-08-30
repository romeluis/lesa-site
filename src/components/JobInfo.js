import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import DetailViewer from "./DetailViewer";
import { isUpcomingGeneral, monthFullForms } from "../utils/EventUtils";
import useFetchJSON from "../utils/FetchJSON";
import ButtonRedirect from "./ButtonRedirect";
import icon from "../assets/grey-link-icon.svg";

class JobDisplay {
    constructor() {
        this.pageInfo = [];
        this.colour = "orange";
        this.emoji = null;
        this.currentDate = new Date();
    }

    create(jobInfo) { 
        if (jobInfo == null) {
            return;
        }

        this.emoji = jobInfo.emoji;
        let title = [{type: "text", title: "Position Title", body: jobInfo.name, colour: this.colour}];
        let division = [{type: "text", title: "Division", body: jobInfo.division, colour: "black"}];
        let commitment = [{type: "text", title: "Commitment Level", body: jobInfo.commitment, colour: "black"}];
        let meetingTime = [{type: "text", title: "Est. Meeting Time per Month", body: (jobInfo.meetingTime + " hour" + (jobInfo.meetingTime !== 1 ? "s" : "")), colour: "black"}];

        let startString = jobInfo.startDay.toString() + " " + monthFullForms[jobInfo.startMonth - 1] + " " + jobInfo.startYear;
        let endString = jobInfo.endDay.toString() + " " + monthFullForms[jobInfo.endMonth - 1] + " " + jobInfo.endYear;

        let dates = [{type: "text", title: "Applications open:", body: startString, colour: "black"},
                     {type: "text", title: "Applications close:", body: endString, colour: "black"}];
        
        let link = null;
        if (jobInfo.link === "0" || isUpcomingGeneral(jobInfo.startDay, jobInfo.startMonth, jobInfo.startYear, this.currentDate.getDate(), this.currentDate.getMonth() + 1, this.currentDate.getFullYear())) {
            link = [{type: "button", title: "Application Link", body: <ButtonRedirect bold text="Apply Now" fontSize="1.25rem" colour={this.colour}  buttonStyle="stroke" useIcon disabled icon={icon} linkTo={jobInfo.link}/>, colour: "black"}];
        } else {
            link = [{type: "button", title: "Application Link", body: <ButtonRedirect bold text="Apply Now" fontSize="1.25rem" colour={this.colour}  buttonStyle="stroke" useIcon icon={icon} linkTo={jobInfo.link}/>, colour: "black"}];
        }

        let desc = [{type: "long-text", title: "Position Details", body: jobInfo.description, colour: "black"}];

        this.pageInfo = title.concat(division, commitment, meetingTime, dates, link, desc);
    }
}

const JobInfo = () => {
    const {id} = useParams();
    const {data: jobData, isPending, error} = useFetchJSON("https://api.lesauoft.com/jobs/" + id);
    const JobController = new JobDisplay();

    const userHistory = useHistory();
    const userLocation = useLocation();

    if (!isPending && error == null && jobData.length > 0) {
        JobController.create(jobData[0]);
    }

    return ( 
        <DetailViewer emoji={JobController.emoji} pageInfo={JobController.pageInfo} infoState={isPending} infoError={error} defaultReturn="../join" pageTitle="Position Details" history={userHistory} location={userLocation}/>
     );
}
 
export default JobInfo;