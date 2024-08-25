import "./ButtonLink.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ButtonLink = (props) => {
    const text = props.text;
    const colour = props.colour;
    const selectedStyle = props.buttonStyle;
    const useIcon = props.useIcon;
    const icon = props.icon;
    const linkTo = props.linkTo;
    const bold = props.bold;
    const selectedSize = props.fontSize;
    const disabled = props.disabled;

    return (  
        <Link to={linkTo} className={"linker" + (disabled === true ? " disabled-link" : "")}>
            <div className={"button " + colour + " " + selectedStyle} style={{fontSize: selectedSize}}> 
                <p className={bold === true ? "bold" : ""}>{text}</p>
                {useIcon === true && <img className="button-image" alt="" src={icon}/>}
            </div>
        </Link>
    );
}
 
export default ButtonLink;