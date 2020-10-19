const { Message } = require("../database/schemas/message.schema")

const findAllMessages = () => {
  return Message.find((_, results) => {
    return results.map(({ userId, fullname, content }) => ({ userId, fullname, content }))
  })
}

module.exports = {
  findAllMessages
}