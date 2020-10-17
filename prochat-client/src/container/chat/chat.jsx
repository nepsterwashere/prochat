import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { MessageBubble } from '../../components/message-bubble/message-bubble'
import { MessageInput } from '../../components/message-input/message-input'
import Container from '@material-ui/core/Container'
import { GET_MESSAGES, POST_MESSAGE } from '../../graphql/message-queries'

export function Chat() {
  const { data } = useQuery(GET_MESSAGES)
  const [postMessage] = useMutation(POST_MESSAGE)

  const submitMessage = (message) => {
    postMessage({
      variables: message
    })
  }

  return (
    <Container>
      { data && (data.messages || []).map(({ user, content }) => (
        <MessageBubble user={user} message={content} />
      ))}
      <MessageInput postMessage={(message) => submitMessage(message)} />
    </Container>
  )
}