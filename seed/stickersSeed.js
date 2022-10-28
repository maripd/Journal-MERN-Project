const db = require('../db')
const Stickers = require('../models/stickers')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const stickersDb = async () => {
  const stickers = [
    {
      name: 'sticker1'
    },
    {
      name: 'sticker2'
    },
    {
      name: 'sticker3'
    },
    {
      name: 'sticker4'
    },
    {
      name: 'sticker5'
    },
    {
      name: 'sticker6'
    },
    {
      name: 'sticker7'
    },
    {
      name: 'sticker8'
    },
    {
      name: 'sticker9'
    },
    {
      name: 'sticker10'
    },
    {
      name: 'sticker11'
    },
    {
      name: 'sticker11'
    },
    {
      name: 'sticker12'
    },
    {
      name: 'sticker13'
    },
    {
      name: 'sticker14'
    },
    {
      name: 'sticker15'
    },
    {
      name: 'sticker16'
    },
    {
      name: 'sticker17'
    },
    {
      name: 'sticker18'
    },
    {
      name: 'sticker19'
    },
    {
      name: 'sticker20'
    },
    {
      name: 'sticker21'
    },
    {
      name: 'sticker22'
    },
    {
      name: 'sticker23'
    },
    {
      name: 'sticker24'
    }
  ]
  await Stickers.insertMany(stickers)
  console.log('Created some stickers!')
}

const run = async () => {
  await stickersDb()
  db.close()
}
run()
