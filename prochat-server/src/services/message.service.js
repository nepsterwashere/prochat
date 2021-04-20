import Message from "../database/schemas/message.schema.js"
import dayjs from "dayjs"

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
  Message.deleteMany({ date: { "$lt": new Date() } })

  console.log("[Info]: removed all messages older than a day!")
}

export { 
  findAllMessages,
  deleteExpiredMessages 
}
