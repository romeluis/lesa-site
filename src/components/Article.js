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
            {articleInfo.map((article, index) => (
                <div className="text-items" key={index}>
                    <h1 className={"article-title " + foregroundColour + "-text"} style={{fontSize: selectedSize}}>{article.header}</h1>
                    {article.body.map((text, index) => (
                        <p className="article-text" key={index}>{text}</p>
                    ))}
            </div>
            ))}
            {buttons != null && buttons.length !== 0 && 
            <div className="buttons">
                {buttons.map((button, index) => (
                    <div key={index}>
                        {button}
                    </div>
                ))}
            </div>}
        </div>
    );
}
 
export default Article;