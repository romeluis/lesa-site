import TagList from "../components/TagList";
import ButtonLink from "../components/ButtonLink";
import icon from "../assets/grey-link-icon.svg"
import iconGreen from "../assets/green-link-icon.svg"
import iconBlue from "../assets/blue-link-icon.svg"
import Article from "../components/Article";
import EventPreview from "../components/EventPreview";

import events from "../assets/events.json";
import EventSpread from "../components/EventSpread";
import ButtonDropDown from "../components/ButtonDropDown";

const Test = () => {
    var tagList = [{text:"test", style:"fill", colour: "pink", pulse: true},
                    {text:"test", style:"stroke", colour: "pink", pulse: true},
                    {text:"test", style:"fill", colour: "green", pulse: true},
                    {text:"test", style:"stroke", colour: "green", pulse: true},
                    {text:"test", style:"fill", colour: "blue", pulse: true},
                    {text:"test", style:"stroke", colour: "blue", pulse: true},
                    {text:"test", style:"fill", colour: "white", pulse: true},
                    {text:"test", style:"stroke", colour: "white", pulse: true},
                    {text:"test", style:"fill", colour: "grey", pulse: true},
                    {text:"test", style:"stroke", colour: "grey", pulse: true},
                    {text:"test", style:"fill", colour: "red", pulse: true},
                    {text:"test", style:"stroke", colour: "red", pulse: true},
                    {text:"test", style:"fill", colour: "orange", pulse: true},
                    {text:"test", style:"stroke", colour: "orange", pulse: true},
                    {text:"test", style:"fill", colour: "purple", pulse: true},
                    {text:"test", style:"stroke", colour: "purple", pulse: true}];

    var buttonList = [
        <ButtonLink text="test" fontSize="1.25rem"colour="blue" buttonStyle="fill" useIcon icon={icon} linkTo="/"/>,
        <ButtonLink text="test" fontSize="1.25rem"colour="green" buttonStyle="stroke" bold useIcon icon={iconGreen} linkTo="/"/>
    ];

    var article = [{header:"test", body:["test"]}];
    var articeltwo = [{header:"Lorem Ipsum", body:["es simplemente el texto de relleno de las imprentas y archivos de texto.", "Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."]}]

    return (  
        <div>
            <h1 style={{marginBottom: "1rem"}}>Tag List Component</h1>
            <TagList tagList={tagList} fontSize="1rem"/>

            <h1 style={{marginTop: "1rem"}}>Button Component</h1>
            <div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
            <ButtonLink text="test" fontSize="2rem" colour="green" buttonStyle="fill" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="green" buttonStyle="fill" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="green" buttonStyle="stroke" bold useIcon icon={iconGreen} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="green" buttonStyle="stroke" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="green" buttonStyle="hoverOnly" useIcon icon={iconGreen} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="green" buttonStyle="hoverOnly" linkTo="/"/>
            </div><div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
            <ButtonLink text="test" fontSize="1.25rem"colour="blue" buttonStyle="fill" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="blue" buttonStyle="fill" linkTo="/"/>
            
            <ButtonLink text="test" fontSize="1.25rem"colour="blue" buttonStyle="stroke" useIcon icon={iconBlue} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="blue" buttonStyle="stroke" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="blue" buttonStyle="hoverOnly" useIcon icon={iconBlue} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="blue" buttonStyle="hoverOnly" linkTo="/"/>
            </div><div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
            <ButtonLink text="test" fontSize="1.25rem"colour="orange" buttonStyle="fill" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="orange" buttonStyle="fill" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="orange" buttonStyle="stroke" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="orange" buttonStyle="stroke" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="orange" buttonStyle="hoverOnly" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="orange" buttonStyle="hoverOnly" linkTo="/"/>
            </div><div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
            <ButtonLink text="test" fontSize="1.25rem"colour="grey" buttonStyle="fill" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="grey" buttonStyle="fill" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="grey" buttonStyle="stroke" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="grey" buttonStyle="stroke" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="grey" buttonStyle="hoverOnly" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="grey" buttonStyle="hoverOnly" linkTo="/"/>
            </div><div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center", backgroundColor: "var(--light-grey)"}}>
            <ButtonLink text="test" fontSize="1.25rem"colour="white" buttonStyle="fill" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="white" buttonStyle="fill" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="white" buttonStyle="stroke" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="white" buttonStyle="stroke" linkTo="/"/>

            <ButtonLink text="test" fontSize="1.25rem"colour="white" buttonStyle="hoverOnly" useIcon icon={icon} linkTo="/"/>
            <ButtonLink text="test" fontSize="1.25rem"colour="white" buttonStyle="hoverOnly" linkTo="/"/>
            </div>

            <h1 style={{marginBottom: "1rem", marginTop: "1rem"}}>Drop Down Component</h1>
            <div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
                <ButtonDropDown selectionText="Date" size="1.125rem" options={["Ascending", "Descending"]} colour="grey" buttonStyle="hoverOnly"/>
                <ButtonDropDown selectionText="Filter" size="1.125rem" options={["None", "Price Low", "Price High", "LESA Event", "Community Event", "FROSH Event", "UofT Event"]} colour="grey" buttonStyle="hoverOnly"/>
            </div>

            <h1 style={{marginTop: "1rem"}}>Article Component</h1>
            <div style={{display: "flex", gap:"1rem", marginTop: "1rem", alignItems: "center"}}>
                <Article articleInfo={articeltwo} articleStyle="fill" foregroundColour="red" backgroundColour="grey" fontSize="2.5rem" buttons={buttonList}/>
                <Article articleInfo={article} foregroundColour="green" backgroundColour="green" fontSize="2rem" articleStyle="stroke"/>
            </div>

            <h1 style={{marginBottom: "1rem", marginTop: "1rem"}}>Event Preview Component</h1>
            <div style={{display: "flex", gap: "1.5rem"}}>
                <EventPreview eventInfo={events[0]} fontSize="2.15rem" minWidth="500px"/>
                <EventPreview eventInfo={events[1]} fontSize="2.15rem"/>
                <EventPreview eventInfo={events[2]} fontSize="2.15rem"/>
                <EventPreview eventInfo={events[3]} fontSize="2.15rem" maxWidth="500px"/>
            </div>

            <EventSpread maxPreviews={4} maxMonths={24}/>
        </div>
    );
}
 
export default Test;