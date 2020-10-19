const mongoose = require("mongoose")
const { Schema } = mongoose

const messageSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = {
  Message
}
