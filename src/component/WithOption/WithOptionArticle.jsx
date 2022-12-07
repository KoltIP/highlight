import React from "react";
import Article from '../Article';
import Popular from '../Popular';
import New from '../New';
const WithOptionArticle = (props) => {
      
    const article = props;
    if (article.views >1000)    
        return (
            <Popular>
                <Article {...article}/>
            </Popular>
        )        
    else if (article.views <100)    
        return(
            <New>
                <Article {...article}/>
            </New>
        )    
    else
        return (
            <Article {...article}/>
        )
}

export default WithOptionArticle;