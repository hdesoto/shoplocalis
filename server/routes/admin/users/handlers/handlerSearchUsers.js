/* global __base */
const path = require('path')
const User = require(path.join(__base, '/models/User.js'))

function searchUsersByName (req, res) {
  const searchedName = new RegExp(req.query.name, 'i')
  User.find({name: searchedName})
    .then((Users) => res.json(Users))
}

function searchUsersByEmail (req, res) {
  const email = new RegExp(req.query.email, 'i')
  User.find({email: email})
    .then((Users) => res.json(Users))
}

module.exports = searchUsersByName
module.exports = searchUsersByEmail
