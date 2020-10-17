import { gql } from '@apollo/client'

export const GET_MESSAGES = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`

export const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`

export const MESSAGE_SUBSCRIPTION = gql`
  subscription {
    messages {
      id
      user
      content
    }
  }
`
