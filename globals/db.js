// Load .env variables
require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to the database!");
});

module.exports = db