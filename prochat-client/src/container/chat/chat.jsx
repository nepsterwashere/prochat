import React from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import { MessageBubble } from '../../components/message-bubble/message-bubble'
import { MessageInput } from '../../components/message-input/message-input'
import Container from '@material-ui/core/Container'

const GET_MESSAGES = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`

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