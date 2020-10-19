import { gql } from '@apollo/client'

export const GET_MESSAGES = gql`
  query {
    messages {
      userId
      fullname
      content
    }
  }
`

export const POST_MESSAGE = gql`
  mutation($userId: String!, $fullname: String!, $content: String!) {
    postMessage(userId: $userId, fullname: $fullname, content: $content)
  }
`

export const MESSAGE_SUBSCRIPTION = gql`
  subscription {
    messages {
      userId
      fullname
      content
    }
  }
`
