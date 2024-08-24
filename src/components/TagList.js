import Tag from "./Tag";
import "./Tag.css";

const TagList = (props) => {
    const tagList = props.tagList;
    const selectedSize = props.fontSize;
    const wrap = props.wrap;

    return (  
        <div className="tagContainer" style={{flexWrap: (wrap ? "wrap" : "no-wrap")}}>
            {tagList.map((tag, index) => (
                <Tag key={index} text={tag.text} tagStyle={tag.style} colour={tag.colour} fontSize={selectedSize} style={{fontSize: selectedSize}} pulse={tag.pulse}/>
            ))}
        </div>
    );
}
 
export default TagList;