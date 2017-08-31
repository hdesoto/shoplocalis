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
  modifiedDate : {
    type: Number,
    required: false
  }
}, { collection })

var User = module.exports = mongoose.model('User', userSchema)

// GET ALL USERS
module.exports.getAllUsers = function (callback, limit) {
  User.find(callback).limit(limit)
}

// ADD USER
module.exports.addUser = function (user, callback) {
  User.create(user, callback)
}

// UPDATE USER
module.exports.updateUser = function (id, update, options, callback) {
  var updatedUser = {
    name: update.name,
    email: update.email,
    password: update.password,
    isAdmin: update.isAdmin,
    modifiedDate: Date.now()
    // , modifiedBy: 'User...'
  }
  User.findByIdAndUpdate(id, updatedUser, {runValidators: true}, callback)
}

// DELETE USER
module.exports.deleteUser = function (id, callback) {
  User.findByIdAndRemove(id, callback)
}

// SEARCH USER BY NAME
module.exports.searchUserByName = function (name, callback) {
  const searchedName = new RegExp(name, 'i')
  User.find({name: searchedName}, callback)
}
