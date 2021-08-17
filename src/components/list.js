import React from 'react'
import VideoListItem from './videoListItem'

const VideoList=(props)=>{

    const videoItems= props.videos.map((video)=>{
        return (
        <VideoListItem 
        onVideoClicked={props.onVideoClicked}
        key={video.etag} 
        video={video}/>
        );
    })

    return (
        <ul className="col-md-4">
            {videoItems}
        </ul>
    )
}

export default VideoList