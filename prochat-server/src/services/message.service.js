const { Message } = require("../database/schemas/message.schema")
const { dayjs } = require("dayjs")

const findAllMessages = () => {
  return Message.find((_, results) => {
    return results
      .map(({ userId, fullname, content }) => ({
        userId,
        fullname,
        content
      }))
  })
}

const deleteExpiredMessages = () => {
  const messages = this.findAllMessages()
  let counter = 0

  messages.forEach(message => {
    if (dayjs(message.date).isBefore(dayjs())) {
      message.remove()
      counter++
    }
  })

  console.log(`[Info]: removed ${counter} messages older than a day!`)
}

module.exports = {
  findAllMessages,
  deleteExpiredMessages
}