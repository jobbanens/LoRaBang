const express = require('express')
const router = express.Router()
const Location = require('../models/location')

router.use(express.json())

router.get('/', (req, res) => {
  Location.find({}, function(err, locations) {
    res.send(locations);
  });
})

router.post('/create', (req, res) => {
  var newLocation = new Location({
    deviceName: req.body.deviceName,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  })

  newLocation.save((err, result) => { 
    if(result == undefined) {
      res.status(500).send(`Error: ${err._message}`)
    } else {
      res.status(200).send(`Location for device ${req.body.deviceName} saved at (${req.body.latitude}, ${req.body.longitude})!`)
    }
  }) 
})  

module.exports = router