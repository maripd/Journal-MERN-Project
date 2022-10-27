const journalPage = require('../models/journalPage')
const pageEditor = require('../models/pageEditor')

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

const getAllJournalPages = async (req, res) => {
  try {
    const allPages = await journalPage.find()
    return res.status(200).json({ allPages })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPage = async (req, res) => {
  try {
    const pageId = req.params.id
    const journalItem = await journalPage.findById(pageId)
    return res.status(200).json({ journalItem })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const updatePage = async (req, res) => {
  try {
    const pageId = req.params.id
    const editPage = await journalPage.findByIdAndUpdate(pageId, req.body)
    console.log(editPage)
    return res.status(200).json({ editPage })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const deletePage = async (req, res) => {
  const pageId = req.params.id
  try {
    const removePage = await journalPage.findByIdAndDelete(pageId)
    console.log(removePage)
    return res.status(200).json({ removePage })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const addStickers = async (req, res) => {
  console.log(req.body)
  try {
    const stickers = await new journalPage(req.body)
    await stickers.save()
    return res.status(201).json({ stickers })
  } catch (error) {
    return res.status(500).json({ error: 'There is an error!' })
  }
}

module.exports = {
  createJournalPage,
  getAllJournalPages,
  getPage,
  updatePage,
  deletePage,
  addStickers
}
