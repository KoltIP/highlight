import React from "react";

const Video = (props) => {
    console.log(props);
    return (
        <div className="item item-video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}

export default Video;