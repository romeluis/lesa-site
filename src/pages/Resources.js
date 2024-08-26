import useFetchJSON from "../utils/FetchJSON";
import Article from "../components/Article";
import ButtonRedirect from "../components/ButtonRedirect";
import icon from "../assets/grey-link-icon.svg";
import "./Resources.css";

const Resources = () => {
    const {data: pageElements, isPending, error} = useFetchJSON("https://api.lesauoft.com/resources");

    return ( 
        <div>
            <h1 className="resource-page-title">LESA Resources</h1>

            <div style={{display: "flex", gap: "1rem", flexDirection: "column", marginBottom: "2rem"}}>
                {!isPending && error == null &&
                    pageElements.map((element) => (
                        <>
                            {element.type === "Article" &&
                                <Article key={element.id} articleInfo={[{header: element.title, body:[element.body]}]} articleStyle="fill" foregroundColour="red" backgroundColour="white" fontSize="2rem"/>
                            }
                            {element.type === "Resource Link" &&
                                <Article key={element.id} articleInfo={[{header: element.title, body:[element.body]}]} articleStyle="grey" foregroundColour="red" backgroundColour="white" fontSize="2rem" buttons={[<ButtonRedirect text="Access Resource" fontSize="1.25rem"colour="red" buttonStyle="fill" useIcon icon={icon} linkTo={element.link}/>,]}/>
                            }
                            {element.type === "Heading" &&
                                <h2 key={element.id} className="resource-heading">{element.title}</h2>
                            }
                            {element.type === "Body" &&
                                <p key={element.id} className="resource-body">{element.body}</p>
                            }
                        </>
                    ))
                }
                {(isPending || error != null) &&
                    <>
                        <div className="resourceLoad shimmerLoad"/>
                        <div className="resourceLoad shimmerLoad"/>
                        <div className="resourceLoad shimmerLoad"/>
                        <div className="resourceLoad shimmerLoad"/>
                    </>
                }
            </div>
        </div>
    );
}
 
export default Resources;