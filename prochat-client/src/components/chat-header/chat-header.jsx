import React from 'react'
import Grid from '@material-ui/core/Grid'
import './chat-header.scss'

export function ChatHeader() {
  return (
    <div className="chat-header">
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <span className="chat-header__title">
            Chat
          </span>
        </Grid>
      </Grid>
    </div>
  )
}