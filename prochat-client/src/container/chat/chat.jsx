import React, { useEffect, createRef } from 'react'
import { useSubscription, useMutation } from '@apollo/client'
import { ChatMessage } from '../../components/chat-message/chat-message'
import { ChatFooter } from '../../components/chat-footer/chat-footer'
import { MESSAGE_SUBSCRIPTION, POST_MESSAGE } from '../../graphql/message-queries'
import { useUser } from '../../hooks/user.hook'
import { ChatHeader } from '../../components/chat-header/chat-header'
import './chat.scss'
import ChatLogin from '../../components/chat-login/chat-login'

export function Chat() {
  let messagesEnd = createRef()

  const { data } = useSubscription(MESSAGE_SUBSCRIPTION)
  const [user, setUser] = useUser()

  const [postMessage] = useMutation(POST_MESSAGE)

  useEffect(() => {
    if (user) messagesEnd.scrollIntoView()
  })

  const handleLogin = (user) => {
    const newUser = {
      fullname: `${user.firstName} ${user.lastName}`,
      userId: `${user.firstName}${user.lastName}` + Math.random()
    } 

    setUser(newUser)

    localStorage.setItem("user", JSON.stringify(newUser))
  }

  const submitMessage = (message) => {
    postMessage({
      variables: message
    })
  }

  return (
    <div className="chat">
      <ChatHeader />
      { user ? (
        <React.Fragment>
          <div id="chat__messages" className="chat__messages">
            {data && data.messages.map(({ userId, fullname, content }) => (
              <ChatMessage fullname={fullname} content={content} isOwn={user.userId === userId} />
            ))}
            <div style={{ float: "left", clear: "both" }}
              ref={(el) => { messagesEnd = el }}>
            </div>
          </div>
          <ChatFooter user={user} postMessage={(message) => submitMessage(message)} />
        </React.Fragment>
      ) : (
        <div className="chat__login">
          <ChatLogin handleLogin={handleLogin} />
        </div>
      )}
    </div>
  )
}