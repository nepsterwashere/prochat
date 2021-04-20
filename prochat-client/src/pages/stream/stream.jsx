import React from 'react'
import { Chat } from '../../container/chat/chat'
import './stream.scss'

export default function Stream() {
    return (
        <div className="pro-chat">
            <div className="pro-chat--video">
                <h1 className="pro-chat--video-heading">{`${process.env.REACT_APP_VIDEO_HEADING || 'Live-Stream'}`}</h1>
                <video
                    id="my-video"
                    fluid="true"
                    class="video-js"
                    controls
                    preload="auto"
                    data-setup="{}"
                >
                    <source 
                        src={`${process.env.REACT_APP_VIDEO_URL}`} 
                        type={`${process.env.REACT_APP_VIDEO_TYPE}`} 
                    />
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that supports HTML5 video
                    </p>
                </video>
            </div>
            <div className="pro-chat--chat">
                <Chat />
            </div>
        </div>
    )
}