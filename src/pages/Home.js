import Article from "../components/Article";
import ButtonRedirect from "../components/ButtonRedirect";
import HomeAbout from "../components/homepage/HomeAbout";
import HomeHero from "../components/homepage/HomeHero"
import icon from "../assets/white-link-icon.svg"
import "./Home.css"
import ButtonLink from "../components/ButtonLink";

const Home = () => {
    const questions = [{header:"Questions?", body:["Email us at: lesa@studentorg.utoronto.ca","Follow us on Instagram: @uoft_lesa"]},{header:"Complaints?", body:["Submit complaints to the EngSoc Ombudsperson at: ombudsperson@skule.ca"]}]
    const getInvolved = [{header:"How to get involved", body:["LESA holds recruitment cycles for our executive team in October and April.","Use the link below to join as a general member and see any open executive positions."]}]
    const getSupport = [{header:"Get the support you need", body:["Our resources page has a curated list of links to help international students in their transition to life in Canada.","An extensive list of mental health resources can be found on the Student Life website."]}]

    return (
        <div>
            <HomeHero/>


            <HomeAbout/>

            <div className="connect-spread">
                <Article articleInfo={questions} justification="flex-start" articleStyle="fill" foregroundColour="red" backgroundColour="grey" fontSize="2.5rem" buttons={[<ButtonRedirect text="EngSoc Complaints Policy" bold fontSize="1.3rem" colour="red" buttonStyle="fill" useIcon icon={icon} linkTo="https://skule.ca/wp-content/uploads/Policy-on-Complaints.pdf"/>]}/>
                <Article articleInfo={getInvolved} justification="flex-start" articleStyle="fill" foregroundColour="red" backgroundColour="grey" fontSize="2.5rem" buttons={[<ButtonLink text="Join LESA" bold fontSize="1.3rem" colour="red" buttonStyle="fill" useIcon icon={icon} linkTo="/join"/>]}/>
                <Article articleInfo={getSupport} justification="flex-start" articleStyle="fill" foregroundColour="red" backgroundColour="grey" fontSize="2.5rem" buttons={[<ButtonLink text="LESA Resources" bold fontSize="1.3rem" colour="red" buttonStyle="fill" useIcon icon={icon} linkTo="/resources"/>, <ButtonRedirect text="UofT Resources" bold fontSize="1.3rem" colour="dark-grey" buttonStyle="fill" useIcon icon={icon} linkTo="https://studentlife.utoronto.ca/task/support-when-you-feel-distressed/"/>]}/>
            </div>
        </div>
    );
}
 
export default Home;