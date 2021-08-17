import React from 'react'

const VideoListItem=({video,onVideoClicked})=>{
    
    return( 
            <li onClick={()=>onVideoClicked(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img src={video.snippet.thumbnails.default.url}></img>
                    </div>
                    <div className='media-body'>

                        <div className="media-heading">
                            <b>{video.snippet.title} </b>               
                        </div>

                        <div className="media-description">
                            {video.snippet.description}
                        </div>

                    </div>
                </div>
            </li>
        );
}
export default VideoListItem