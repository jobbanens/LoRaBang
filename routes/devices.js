const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Device list")
})

router.post('/create', (req, res) => {
  res.status(200).send("Bedankt voor de inzending!")
})

router
.route('/:id')
.get((req, res) => {
  req.params.id
  const device = req.device
  res.send(`Get device with ID ${req.params.id}<br>${device[0]}`)
})
.put((req, res) => {
  req.params.id
  res.send(`Update device with ID ${req.params.id}`)
})
.delete((req, res) => {
  req.params.id
  res.send(`Delete device with ID ${req.params.id}`)
})

const devices = [{ id: 0, company: 1, name:"Job", location:[50.8526592, 5.7147392]}, { id: 1, company: 2, name:"Thijs", location:[50.3456723, 5.5234678]}]

router.param('id', (req, res, next, id) => {
  req.device = devices[id]
  next()
})

module.exports = router