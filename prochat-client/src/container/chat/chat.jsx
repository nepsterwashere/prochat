import React from 'react'
import { useSubscription, useMutation } from '@apollo/client'
import { ChatMessage } from '../../components/chat-message/chat-message'
import { ChatFooter } from '../../components/chat-footer/chat-footer'
import { MESSAGE_SUBSCRIPTION, POST_MESSAGE } from '../../graphql/message-queries'
import { useUser } from '../../hooks/user'
import { ChatHeader } from '../../components/chat-header/chat-header'
import './chat.scss'

export function Chat() {
  const { data } = useSubscription(MESSAGE_SUBSCRIPTION)
  const ctxUser = useUser()
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
          <ChatMessage user={user} message={content} isOwn={ctxUser.fullname === user} />
        ))}
      </div>
      <ChatFooter user={ctxUser} postMessage={(message) => submitMessage(message)} />
    </div>
  )
}