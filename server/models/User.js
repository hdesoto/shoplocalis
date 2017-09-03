const mongoose = require('mongoose')
const collection = 'users'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: false
  },
  dateOfCreation: {
    type: Number,
    default: Date.now()
  },
  modifiedDate: {
    type: Number,
    required: false
  }
}, { collection })

// var User = module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('User', userSchema)
