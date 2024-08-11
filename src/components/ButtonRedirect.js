import "./ButtonLink.css";

const ButtonRedirect = (props) => {
    const text = props.text;
    const colour = props.colour;
    const selectedStyle = props.buttonStyle;
    const useIcon = props.useIcon;
    const icon = props.icon;
    const linkTo = props.linkTo;
    const bold = props.bold;
    const selectedSize = props.fontSize;

    return (  
        <a href={linkTo} className="linker">
            <div className={"button " + colour + " " + selectedStyle} style={{fontSize: selectedSize}}> 
                <p className={bold === true ? "bold" : ""}>{text}</p>
                {useIcon === true && <img alt="" src={icon}/>}
            </div>
        </a>
    );
}
 
export default ButtonRedirect;