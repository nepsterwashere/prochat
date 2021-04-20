import React from 'react'
import usePlayer from '../../hooks/player.hook'
import './videojs.scss'

export default function VideoJS() {
    const playerRef = usePlayer({
        src: `${process.env.REACT_APP_VIDEO_URL}`, 
        controls: true, 
        autoplay: false
    });

    return (
        <div data-vjs-player>
            <video ref={playerRef} className="video-js"></video>
        </div>
    )
}