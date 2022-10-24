const journalPage = require('../models/journalPage')

const createJournalPage = async (req, res) => {
  console.log(req.body)
  try {
    const newPage = await new journalPage(req.body)
    await newPage.save()
    //status 201 means request succeeded, new resource was created as a result
    return res.status(201).json({ newPage })
  } catch (error) {
    //status 500 means server has encountered a situation it does not know how to handle
    return res.status(500).json({ error: `Something's wrong!` })
  }
}

module.exports = {
  createJournalPage
}
