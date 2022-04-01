require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const moment = require('moment')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(logger)

mongoose.connect("mongodb+srv://lora:FX9ixjQv2DjhRAJm@cluster0.zipfa.mongodb.net/LoRaBang?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/', (req, res) => {
  res.render('index', { time: moment().format('hh:mm:ss') })
})

const deviceRouter = require('./routes/devices')
const locationRouter = require('./routes/locations')

app.use('/devices', deviceRouter)
app.use('/locations', locationRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))