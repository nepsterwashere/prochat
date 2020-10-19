const messageSchema = new Schema({
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

export const MessageModel = mongoose.model('Message', messageSchema)
