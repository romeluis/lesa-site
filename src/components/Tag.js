const Tag = (props) => {
    const text = props.text;
    const colour = props.colour;
    const style = props.tagStyle;
    const selectedSize = props.fontSize;
    const pulseState = props.pulse;
    const wrap = props.wrap;

    return (  
        <p className={"tag " + colour + " " + style + " " + (pulseState ? (colour + "-pulse") : "")} style={{fontSize: selectedSize, textWrap: (wrap==true? "wrap" : "nowrap")}}>
            {text}
        </p>
    );
}
 
export default Tag;