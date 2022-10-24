const { Router } = require('express') // returns an express obj with a property called { Router } and the value of this property is a function
//const controllers = require('../controllers')
const router = Router()
const controllers = require('../controllers/index.js')

//add root route
router.post('/journalPages', controllers.createJournalPage)

module.exports = router
