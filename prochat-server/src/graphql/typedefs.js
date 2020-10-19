const typeDefs = `
  type Message {
    fullname: String
    userId: String
    content: String
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

module.exports = {
  typeDefs
}