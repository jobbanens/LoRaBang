const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')

router.get('/', (req, res) => {
  res.render('devices', {devices: devices})
})

router.post('/create', (req, res) => {
  res.status(200).send("Bedankt voor de inzending!")
})

router
.route('/:id')
.get((req, res) => {
  req.params.id
  res.render('devicesDetail', {device: req.device})
})

const devices = [{ id: 0, company: 1, name:"Job", location:[50.8526592, 5.7147392]}, { id: 1, company: 2, name:"Thijs", location:[50.3456723, 5.5234678]}]

router.param('id', (req, res, next, id) => {
  req.device = devices[id]
  next()
})

module.exports = router