const mongoose = require('mongoose')
const Schema = mongoose.Schema

const journalPage = new Schema(
  {
    journalTitle: { type: String, required: true },
    journalText: { type: String, required: true },
    journalStickers: { type: Array, required: false },
    journalColor: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('journalPage', journalPage)
