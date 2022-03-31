require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://lora:FX9ixjQv2DjhRAJm@cluster0.zipfa.mongodb.net/LoRaBang?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.post('/hook', (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

app.get('/', (req, res) => {
  res.send("lmao")
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))