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
  const deleteDate = dayjs().format('YYYY-MM-DD')

  // FIXME: Date comparison not working
  Message.deleteMany({ date: { "$lt": deleteDate } })

  console.log(`[Info]: removed messages older than a day!`)
}

export { 
  findAllMessages,
  deleteExpiredMessages 
}
