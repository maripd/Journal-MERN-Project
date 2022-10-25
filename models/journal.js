const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    journal_id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    dateCreated: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Journal', schema)