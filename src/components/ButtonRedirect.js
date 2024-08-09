import "./ButtonLink.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ButtonRedirect = (props) => {
    const text = props.text;
    const colour = props.colour;
    const style = props.buttonStyle;
    const useIcon = props.useIcon;
    const icon = props.icon;
    const linkTo = props.linkTo;
    const bold = props.bold;
    const selectedSize = props.fontSize;

    return (  
        <a href={linkTo} class="linker">
            <div className={"button " + colour + " " + style}> 
                <p className={bold === true ? "bold" : ""} style={{fontSize: selectedSize}}>{text}</p>
                {useIcon === true && <img style={{width: selectedSize}} alt="" src={icon}/>}
            </div>
        </a>
    );
}
 
export default ButtonRedirect;