const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const collection = 'users'
const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId

var userSchema = new Schema({
  // name: {
  //   type: String,
  //   required: true
  // },
  // email: {
  //   type: String,
  //   // required: true,
  //   // unique: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // },
  // isAdmin: {
  //   type: Boolean,
  //   required: false
  // },
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
