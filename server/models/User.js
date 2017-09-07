const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const collection = 'users'
const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId

var userSchema = new Schema({
  dateOfCreation: {
    type: Number,
    default: Date.now()
  },
  modifiedDate: {
    type: Number,
    required: false
  }
}, { collection })

userSchema.plugin(passportLocalMongoose)
// var User = module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('User', userSchema)
