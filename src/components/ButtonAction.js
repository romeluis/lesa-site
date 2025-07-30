import React from 'react';
import './ButtonLink.css';

const ButtonAction = (props) => {
    const text = props.text;
    const colour = props.colour;
    const selectedStyle = props.buttonStyle;
    const useIcon = props.useIcon;
    const icon = props.icon;
    const action = props.action;
    const bold = props.bold;
    const selectedSize = props.fontSize;
    const disabled = props.disabled;

    return (
        <div className={"button " + colour + " " + selectedStyle + (disabled ? " disabled" : "")} style={{fontSize: selectedSize}} onClick={() => {if (!disabled) action()}}> 
                <p className={bold === true ? "bold" : ""}>{text}</p>
                {useIcon === true && <img className="button-image" alt="" src={icon}/>}
        </div>
    );
};

export default ButtonAction;
