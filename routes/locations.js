const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Location list")
})

router.post('/create', (req, res) => {
  res.status(200).send("Bedankt voor de inzending!")
})

module.exports = router