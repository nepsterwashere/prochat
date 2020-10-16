import React from 'react'
import './message-bubble.scss'

export function MessageBubble({ user, message }) {
  return (
    <React.Fragment>
      <div class="message-bubble__username">{user}</div>
      <div class="message-bubble__bubble">
        <div class="message-bubble__message">{message}</div>
      </div>
    </React.Fragment>
  )
}