import { Grid } from '@material-ui/core'
import React from 'react'
import { Chat } from '../../container/chat/chat'
import VideoJS from '../../container/video/videojs'

export default function Stream() {
    return (
        <div>
            <Grid>
                <Grid>
                    <VideoJS />
                </Grid>
                <Grid>
                    <Chat />
                </Grid>
            </Grid>
        </div>
    )
}