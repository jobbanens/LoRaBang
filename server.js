// Load .env variables
require('dotenv').config()

// Setup Express app
const express = require('express')
const app = express()

// Setup .ejs file rendering
app.set('view engine', 'ejs')

// Load database connection
const db = require('./globals/db')

// Render root index.html
app.get('/', (req, res) => {
  const moment = require('moment')
  res.render('index', { time: moment().format('hh:mm:ss') })
})

// Routes
const deviceRouter = require('./routes/devices')
const locationRouter = require('./routes/locations')

app.use('/devices', deviceRouter)
app.use('/locations', locationRouter)

// Start Express app
app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))