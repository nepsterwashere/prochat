const typeDefs = `
  type Message {
    fullname: String
    userId: String
    content: String
    date: String
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    postMessage(userId: String!, fullname: String!, content: String!): ID!
  }

  type Subscription {
    messages: [Message!]
  }
`

export default typeDefs
