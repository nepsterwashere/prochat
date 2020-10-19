import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'
import './chat-footer.scss'

export function ChatFooter({ user, postMessage }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.fullname && message) {
      postMessage({
        userId: user.userId,
        fullname: user.fullname,
        content: message
      })
      setMessage('')
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} class="chat-footer">
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar>{user.fullname ? user.fullname.substr(0, 2) : 'error'}</Avatar>
        </Grid>
        <Grid item>
          <span className="chat-footer__avatar-username">
            {user.fullname}
          </span>
          <span className="chat-footer__avatar-userid">
            ({user.userId})
          </span>
        </Grid>
      </Grid>
      <TextField label="Nachricht"
        value={message}
        onInput={(e) => setMessage(e.target.value)}
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