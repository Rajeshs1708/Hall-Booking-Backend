const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

exports.db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connection established...')
  } catch (error) {
    console.log(error)
    throw error
  }
}
