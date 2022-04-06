const mongoose = require('mongoose')
const joi = require('joi')
const joigoose = require('joigoose')(mongoose)

const joiSchema = joi.object().keys({
  deviceName: joi.string().max(64).required(),
  latitude: joi.number().min(-90).max(90),
  longitude: joi.number().min(-180).max(180)
})

const mongooseSchema = new mongoose.Schema(joigoose.convert(joiSchema))

module.exports = mongoose.model('locations', mongooseSchema)