import React from 'react'
import { Chat } from '../../container/chat/chat'
import VideoJS from '../../container/video/videojs'
import './stream.scss'

export default function Stream() {
    return (
        <div className="pro-chat">
            <div className="pro-chat--video">
                <h1 className="pro-chat--video-heading">{`${process.env.REACT_APP_VIDEO_HEADING || 'Live-Stream'}`}</h1>
                <VideoJS />
            </div>
            <div className="pro-chat--chat">
                <Chat />
            </div>
        </div>
    )
}