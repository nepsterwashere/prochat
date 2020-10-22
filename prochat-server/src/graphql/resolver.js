import dayjs from 'dayjs'
import { PubSub } from 'graphql-yoga'
import Message from '../database/schemas/message.schema.js'
import { findAllMessages } from '../services/message.service.js'

const pubsub = new PubSub()
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
        date: dayjs()
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

export { resolvers, pubsub }
