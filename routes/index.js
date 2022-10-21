const { Router } = require('express') // returns an express obj with a property called { Router } and the value of this property is a function
//const controllers = require('../controllers')
const router = Router()

//add root route
router.get('/journal-pages', (req, res) => {
  res.send('this server is working!')
})

module.exports = router
