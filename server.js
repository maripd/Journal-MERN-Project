const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

//create server by calling express function
//use is a way to add functionality to our server
const app = express()
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//start server, ready to listen to requests
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))