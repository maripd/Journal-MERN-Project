const mongoose = require('mongoose')
const Schema = mongoose.Schema

const journalPage = new Schema(
  {
    //journalPage_id: { type: String, required: true },
    journalTitle: { type: String, required: true },
    journalText: { type: String, requred: true }
    // journalDateCreated: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('journalPage', journalPage)
