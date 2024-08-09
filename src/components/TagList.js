import Tag from "./Tag";
import "./Tag.css";

const TagList = (props) => {
    const tagList = props.tagList;

    return (  
        <div className="tagContainer">
            {tagList.map((tag) => (
                <Tag text={tag.text} tagStyle={tag.style} colour={tag.colour}/>
            ))}
        </div>
    );
}
 
export default TagList;