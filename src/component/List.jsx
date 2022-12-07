import React from "react";
import Video from '../component/Video';
import Article from "./Article";
import WithOptionVideo from '../component/WithOption/WithOptionVideo';
import WithOptionArticle from '../component/WithOption/WithOptionArticle';

const List = (props) => {
    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                return (
                    <WithOptionVideo {...item} key={index} />
                );

            case 'article':
                return (
                    <WithOptionArticle {...item} key={index} />
                );
        }
    });
}

export default List;