import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

export function MessageInput({ postMessage }) {
  const [message, setMessage] = useState({
    user: '',
    content: ''
  })
  return (
    <form class="message-input">
      <Grid container spacing={2}>
        <Grid item>
          <TextField label="Name"
            value={message.user}
            onInput={(e) => setMessage({ ...message, user: e.target.value })}
          />
        </Grid>
        <Grid item>
          <TextField label="Nachricht"
            value={message.content}
            onInput={(e) => setMessage({ ...message, content: e.target.value })}
          />
        </Grid>
        <Grid item>
          <Button onClick={() => postMessage(message)}
            variant="contained"
            color="primary">
            Senden
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}