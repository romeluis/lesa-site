const Tag = (props) => {
    const text = props.text;
    const colour = props.colour;
    const style = props.tagStyle;
    const selectedSize = props.fontSize;
    const pulseState = props.pulse;

    return (  
        <p className={"tag " + colour + " " + style + " " + (pulseState ? (colour + "-pulse") : "")} style={{fontSize: selectedSize}}>
            {text}
        </p>
    );
}
 
export default Tag;