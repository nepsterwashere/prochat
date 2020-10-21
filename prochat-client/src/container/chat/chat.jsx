import React, { useEffect, createRef } from 'react'
import { useSubscription, useMutation } from '@apollo/client'
import { ChatMessage } from '../../components/chat-message/chat-message'
import { ChatFooter } from '../../components/chat-footer/chat-footer'
import { MESSAGE_SUBSCRIPTION, POST_MESSAGE } from '../../graphql/message-queries'
import { useUser } from '../../hooks/user'
import { ChatHeader } from '../../components/chat-header/chat-header'
import './chat.scss'

export function Chat() {
  let messagesEnd = createRef()

  const { data } = useSubscription(MESSAGE_SUBSCRIPTION)
  const ctxUser = useUser()
  const [postMessage] = useMutation(POST_MESSAGE)

  useEffect(() => {
    messagesEnd.scrollIntoView()
  })

  const submitMessage = (message) => {
    postMessage({
      variables: message
    })
  }

  return (
    <div className="chat">
      <ChatHeader />
      <div id="chat__messages" className="chat__messages">
        {data && data.messages.map(({ userId, fullname, content }) => (
          <ChatMessage fullname={fullname} content={content} isOwn={ctxUser.userId === userId} />
        ))}
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { messagesEnd = el }}>
        </div>
      </div>
      <ChatFooter user={ctxUser} postMessage={(message) => submitMessage(message)} />
    </div>
  )
}