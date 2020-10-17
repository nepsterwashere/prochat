const { GraphQLServer, PubSub } = require('graphql-yoga')

const messages = []

const subscribers = []
const onMessagesUpdate = (fn) => subscribers.push(fn)

const typeDefs = `
  type Message {
    id: ID!
    user: String
    content: String
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    postMessage(user: String!, content: String!): ID!
  }

  type Subscription {
    messages: [Message!]
  }
`

const resolvers = {
  Query: {
    messages: () => messages
  },
  Mutation: {
    postMessage: (_, { user, content }) => {
      const id = messages.length

      messages.push({
        id,
        user,
        content
      })

      subscribers.forEach(fn => fn())
      return id
    }
  },
  Subscription: {
    messages: {
      subscribe: (_, __, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2, 15)
        onMessagesUpdate(() => pubsub.publish(channel, { messages }))
        setTimeout(() => pubsub.publish(channel, { messages }), 0)
        return pubsub.asyncIterator(channel)
      }
    }
  }
}

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

server.start(({ port }) => {
  console.log(`Server started on http://localhost:${port}`)
})