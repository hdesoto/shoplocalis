/* global __base */
const path = require('path')
const User = require(path.join(__base, '/models/User.js'))

function getAllUsers (req, res) {
  const limit = req.query.limit
  User.find().limit(limit)
    .then((users) => res.json(users))
}

module.exports = getAllUsers
