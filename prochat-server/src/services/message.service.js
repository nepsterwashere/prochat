const { Message } = require("../database/schemas/message.schema")
const dayjs = require("dayjs")

const findAllMessages = () => {
  return Message.find((_, results) => {
    return results
      .map(({ userId, fullname, content, date }) => ({
        userId,
        fullname,
        content,
        date: dayjs(date).format('YYYY-MM-DD')
      }))
  })
}

const deleteExpiredMessages = () => {
  const deleteDate = dayjs().format('YYYY-MM-DD')

  // TODO: Date comparison not working
  Message.deleteMany({ date: { "$lt": deleteDate } })

  console.log(`[Info]: removed messages older than a day!`)
}

module.exports = {
  findAllMessages,
  deleteExpiredMessages
}