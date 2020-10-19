const { GraphQLServer, PubSub } = require('graphql-yoga')
const { connect } = require('./src/database/mongodb')
const { Message } = require('./src/database/schemas/message.schema')
const { findAllMessages } = require('./src/services/message.service')
require('dotenv').config()

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

const subscribers = []
const onMessagesUpdate = (fn) => subscribers.push(fn)

const resolvers = {
  Query: {
    messages: () => {
      return findAllMessages()
    }
  },
  Mutation: {
    postMessage: async (_, { userId, fullname, content }) => {
      const message = new Message({
        userId,
        fullname,
        content,
        date: new Date()
      })

      await message.save()

      subscribers.forEach(fn => fn())
      return message._id
    }
  },
  Subscription: {
    messages: {
      subscribe: async (_, __, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2, 15)
        onMessagesUpdate(() => {
          const messages = findAllMessages()
          pubsub.publish(channel, { messages })
        })
        setTimeout(() => {
          const messages = findAllMessages()
          pubsub.publish(channel, { messages })
        }, 0)
        return pubsub.asyncIterator(channel)
      }
    }
  }
}

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

function bootstrap() {
  connect()
  server.start(({ port }) => {
    console.log(`Server started on http://localhost:${port}`)
  })
}

bootstrap()
