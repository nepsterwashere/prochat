import mongoose from 'mongoose'

const connect = async () => {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
}

export default connect