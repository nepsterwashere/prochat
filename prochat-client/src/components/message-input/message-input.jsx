import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'
import './message-input.scss'

export function MessageInput({ postMessage }) {
  const [message, setMessage] = useState({
    user: '',
    content: ''
  })

  const handleSubmit = (e) => {
    postMessage(message)
    setMessage({
      user: '',
      content: ''
    })
    e.preventDefault()
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} class="message-input">
      <Grid container spacing={2}>
        <Grid item xs="4">
          <TextField label="Name"
            value={message.user}
            onInput={(e) => setMessage({ ...message, user: e.target.value })}
          />
        </Grid>
        <Grid item xs="4">
          <TextField label="Nachricht"
            value={message.content}
            onInput={(e) => setMessage({ ...message, content: e.target.value })}
          />
        </Grid>
        <Grid item xs="4">
          <Button type="submit"
            variant="contained"
            color="primary"
          >
            Senden
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}