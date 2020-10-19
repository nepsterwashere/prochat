import React from 'react'
import { useSubscription, useMutation } from '@apollo/client'
import { MessageBubble } from '../../components/message-bubble/message-bubble'
import { MessageInput } from '../../components/message-input/message-input'
import Container from '@material-ui/core/Container'
import { MESSAGE_SUBSCRIPTION, POST_MESSAGE } from '../../graphql/message-queries'
import './chat.scss'
import { useUser } from '../../hooks/user'

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
    <Container className="container">
      <div className="chat">
        <div className="chat__messages">
          {data && data.messages.map(({ user, content }) => (
            <div className={`chat__message-${user === userName.name ? 'right' : 'left'}`}>
              <MessageBubble user={user} message={content} isUser={user === userName.name} />
            </div>
          ))}
        </div>
        <MessageInput postMessage={(message) => submitMessage(message)} />
      </div>
    </Container>
  )
}