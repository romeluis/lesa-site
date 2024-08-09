const Tag = (props) => {
    const text = props.text;
    const colour = props.colour;
    const style = props.tagStyle;

    return (  
        <p className={"tag " + colour + " " + style}>
            {text}
        </p>
    );
}
 
export default Tag;