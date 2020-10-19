import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'
import './chat-footer.scss'

export function ChatFooter({ postMessage }) {
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
    <form onSubmit={(e) => handleSubmit(e)} class="chat-footer">
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar>JV</Avatar>
        </Grid>
        <Grid item>
          <span className="chat-footer__avatar-username">
            Jan Völker
          </span>
          <span className="chat-footer__avatar-userid">
            (PD07822)
          </span>
        </Grid>
      </Grid>
      <TextField label="Nachricht"
        value={message.content}
        onInput={(e) => setMessage({ ...message, content: e.target.value })}
        fullWidth
      />
      <Grid container justify="flex-end" spacing={2}>
        <Grid item>
          <Button
            type="submit"
            endIcon={<SendIcon />}
          >
            Senden
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}