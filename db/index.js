// const mongoose = require('mongoose')
// require('dotenv').config() // Add this line

// let dbUrl =
//   process.env.NODE_ENV === 'production'
//     ? process.env.MONGODB_URI
//     : 'mongodb://127.0.0.1:27017/journalDatabase'
// console.log(dbUrl)
// mongoose
//   .connect(dbUrl)
//   .then(() => {
//     console.log('Successfully connected to MongoDB!')
//   })
//   .catch((e) => {
//     console.error('Connection error', e.message)
//   })
// mongoose.set('debug', true)

// const db = mongoose.connection

// module.exports = db

const mongoose = require('mongoose')

mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/journalDatabase',
    { useNewUrlParser: true }
  )
  .then((connect) => console.log('connected to mongodb..'))
  .catch((e) => console.log('could not connect to mongodb', e))

module.exports = { mongoose }
