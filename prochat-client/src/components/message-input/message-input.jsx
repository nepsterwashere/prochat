import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'
import './message-input.scss'

export function MessageInput({ postMessage }) {
  const [message, setMessage] = useState({
    user: 'Jan',
    content: ''
  })

  const handleSubmit = (e) => {
    if (message.user && message.content) {
      postMessage(message)
      setMessage({
        content: ''
      })
    }
    e.preventDefault()
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} class="message-input">
      <Grid container spacing={2}>
        <Grid item xs="11">
          <TextField label="Nachricht"
            value={message.content}
            onInput={(e) => setMessage({ ...message, content: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs="1">
          <IconButton type="submit" aria-label="send">
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  )
}