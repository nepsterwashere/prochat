import mongoose from 'mongoose'

const connectToDB = async () => {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
}

export { connectToDB }