const { Router } = require('express') // returns an express obj with a property called { Router } and the value of this property is a function
//const controllers = require('../controllers')
const router = Router()
const controllers = require('../controllers/index.js')

router.post('/journalPages', controllers.createJournalPage)
router.get('/journalAllPages', controllers.getAllJournalPages)
router.get('/getPage/:id', controllers.getPage)
router.put('/updatePage/:id', controllers.updatePage)
router.delete('/deletePage/:id', controllers.deletePage)
router.get('/getStickers', controllers.getStickers)

module.exports = router
