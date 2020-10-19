import React from 'react'
import { useSubscription, useMutation } from '@apollo/client'
import { MessageBubble } from '../../components/message-bubble/message-bubble'
import { ChatFooter } from '../../components/chat-footer/chat-footer'
import Container from '@material-ui/core/Container'
import { MESSAGE_SUBSCRIPTION, POST_MESSAGE } from '../../graphql/message-queries'
import './chat.scss'
import { useUser } from '../../hooks/user'
import { ChatHeader } from '../../components/chat-header/chat-header'

export function Chat() {
  const { data } = useSubscription(MESSAGE_SUBSCRIPTION)
  const userName = useUser()
  const [postMessage] = useMutation(POST_MESSAGE)

  const submitMessage = (message) => {
    postMessage({
      variables: message
    })
  }

  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        {data && data.messages.map(({ user, content }) => (
          <div className={`chat__message-${user === userName.name ? 'right' : 'left'}`}>
            <MessageBubble user={user} message={content} isUser={user === userName.name} />
          </div>
        ))}
      </div>
      <ChatFooter postMessage={(message) => submitMessage(message)} />
    </div>
  )
}