import React from 'react'
import usePlayer from '../../hooks/player.hook'
import './videojs.scss'

export default function VideoJS() {
    const playerRef = usePlayer({
        src: {
            src: `${process.env.REACT_APP_VIDEO_URL}`,
            type: `${process.env.REACT_APP_VIDEO_TYPE}`,
        },
        controls: true, 
        autoplay: false
    });

    return (
        <div data-vjs-player>
            <video ref={playerRef} className="video-js"></video>
        </div>
    )
}