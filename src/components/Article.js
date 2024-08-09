import "./Article.css"

const Article = (props) => {
    const articleInfo = props.articleInfo;
    const buttons = props.buttons;
    const backgroundColour = props.backgroundColour;
    const foregroundColour = props.foregroundColour;
    const selectedSize = props.fontSize;
    const articleStyle = props.articleStyle;
    const justification = props.justification;

    return (  
        <div className={"article-container " + backgroundColour + "-container " + articleStyle + "-container"} style={{fontSize: selectedSize, justifyContent: justification}}>
            {articleInfo.map((article) => (
                <div className="text-items">
                    <h1 className={"article-title " + foregroundColour + "-text"} style={{fontSize: selectedSize}}>{article.header}</h1>
                    {article.body.map((text) => (
                        <p className="article-text">{text}</p>
                    ))}
            </div>
            ))}
            {buttons != null && buttons.length !== 0 && 
            <div className="buttons">
                {buttons.map((button) => (
                    button
                ))}
            </div>}
        </div>
    );
}
 
export default Article;