import React, { useEffect, useState } from 'react'
import videojs from 'video.js'
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

    // instantiate Video.js
    useEffect(() => {
        setPlayer(videojs(
            videoNode,
            {...videoJsOptions},
            function onPlayerReady() {
                console.log('onPlayerReady', this)
            })
        )

        // destroy player on unmount
        return function cleanup() {
            if (player) {
                player.dispose()
            }
        };
    }, [])

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    return (
        <div data-vjs-player>
            <video ref={node => this.videoNode = node} className="video-js"></video>
        </div>
    )
}