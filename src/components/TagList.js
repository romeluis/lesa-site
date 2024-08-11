import Tag from "./Tag";
import "./Tag.css";

const TagList = (props) => {
    const tagList = props.tagList;
    const selectedSize = props.fontSize;

    return (  
        <div className="tagContainer">
            {tagList.map((tag) => (
                <Tag text={tag.text} tagStyle={tag.style} colour={tag.colour} fontSize={selectedSize} style={{fontSize: selectedSize}} pulse={tag.pulse}/>
            ))}
        </div>
    );
}
 
export default TagList;