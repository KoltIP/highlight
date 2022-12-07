import React from "react";
import Video from '../Video';
import Popular from '../Popular';
import New from '../New';

const WithOptionVideo = (props) => {

    const video = props;
    if (video.views >1000)    
        return (
            <Popular>
                <Video {...video}/>
            </Popular>
        )        
    else if (video.views <100)    
        return(
            <New>
                <Video {...video}/>
            </New>
        )    
    else
        return (
            <Video {...video}/>
        )
}

export default WithOptionVideo;