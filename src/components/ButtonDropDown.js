import dropDownArrow from "../assets/drop-down-arrow.svg";
import dropDownArrowOpened from "../assets/drop-down-arrow-open.svg";
import "./ButtonDropDown.css";

import {useState} from "react";

const ButtonDropDown = (props) => {
    const selectionText = props.selectionText;
    const options = props.options;
    const colour = props.colour;
    const selectedStyle = props.buttonStyle;
    const selectedSize = props.size;
    const callback = props.onChangeFunction;

    const selectedOption = props.selectedOption;
    const setSelectedOption = props.changeOption;

    const [dropDownState, setDropDownState] = useState(false);
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

    return (
        <div style={{position: "relative", display: "block"}}>
            <div className={"button-drop-down " + colour + " " + selectedStyle + " " + ((dropDownState) ? "button-selected" : "")} style={{fontSize: selectedSize}} onClick={() => setDropDownState(!dropDownState)}>
                <p className="button-text"><span className="bold">{selectionText + ": "}</span>{selectedOption}</p>
                <img className="drop-down-img" alt="" src={dropDownState ? dropDownArrowOpened : dropDownArrow}/>
            </div>
            {dropDownState &&
                <div className="drop-down-options" style={{fontSize: selectedSize}} onMouseLeave={() => setDropDownState(false)}>
                    {options.map((option, index) => (
                        <div key={index} className={"drop-down-option " + ((currentOptionIndex === index) ? "selected-option" : "")} style={{fontSize: selectedSize}} onClick={() => {
                            setCurrentOptionIndex(index);
                            setDropDownState(false);
                            callback(options[index]);
                        }}>
                            <p className="drop-down-option-text">{option}</p>
                        </div>
                    ))}
                </div>}
        </div>
    );
}
 
export default ButtonDropDown;