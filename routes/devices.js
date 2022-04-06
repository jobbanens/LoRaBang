const express = require('express')
const router = express.Router()
const Device = require('../models/device')

router.use(express.json())

router.get('/', (req, res) => {
  Device.find({}, function(err, devices) {
    res.send(devices);
  });
})

router.post('/create', (req, res) => {
  var newDevice = new Device({
    name: req.body.name
  })

  newDevice.save((err, result) => { 
    if(result == undefined) {
      res.status(500).send(`Error: ${err._message}`)
    } else {
      res.status(200).send(`Device ${req.body.name} saved!`)
    }
  }) 
})  

module.exports = router