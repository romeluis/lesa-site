const Tag = (props) => {
    const text = props.text;
    const colour = props.colour;
    const style = props.tagStyle;
    const selectedSize = props.fontSize;

    return (  
        <p className={"tag " + colour + " " + style} style={{fontSize: selectedSize}}>
            {text}
        </p>
    );
}
 
export default Tag;