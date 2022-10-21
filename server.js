const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

//create server by calling express function
//use is a way to add functionality to our server
const server = express()
server.use(express.json())
server.use(logger('dev'))

server.use(routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//start server, ready to listen to requests
server.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
