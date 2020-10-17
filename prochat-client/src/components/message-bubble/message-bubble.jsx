import React from 'react'
import './message-bubble.scss'

export function MessageBubble({ user, message, isUser }) {
  return (
    <div className="message-bubble">
      <div class="message-bubble__username">{isUser ? 'Ich' : user}</div>
      <div class={`message-bubble__bubble-${isUser ? 'right' : 'left'}`}>
        <div class="message-bubble__message">{message}</div>
      </div>
    </div>
  )
}