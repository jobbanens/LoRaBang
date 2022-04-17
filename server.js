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
  // Retrieve all location data from the database and pass it to the renderer (views/index.ejs)
  const Location = require('./models/location')
  Location.find({}, function(err, data) {
    _locations = data
    res.render('index', {locations: _locations })
  })
})

// Routes
const deviceRouter = require('./routes/devices')
const locationRouter = require('./routes/locations')

app.use('/devices', deviceRouter)
app.use('/locations', locationRouter)

// Start Express app
app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))