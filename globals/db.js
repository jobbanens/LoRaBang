const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://lora:FX9ixjQv2DjhRAJm@cluster0.zipfa.mongodb.net/LoRaBang?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to the database!");
});

module.exports = db