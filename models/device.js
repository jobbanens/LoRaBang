const mongoose = require('mongoose')
const joi = require('joi')
const joigoose = require('joigoose')(mongoose)

const joiSchema = joi.object().keys({
  name: joi.string().max(64).required(),
  team: joi.string().max(64).required()
})

const mongooseSchema = new mongoose.Schema(joigoose.convert(joiSchema))

module.exports = mongoose.model('devices', mongooseSchema)