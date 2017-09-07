/* global __base */
const path = require('path')
const User = require(path.join(__base, '/models/User.js'))

function addUser (req, res) {
  var user = req.body
  User.create(user)
    .then(() => res.send('User created successfully'))
}

module.exports = addUser
