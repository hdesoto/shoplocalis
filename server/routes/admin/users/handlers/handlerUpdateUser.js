/* global __base */
const path = require('path')
const User = require(path.join(__base, '/models/User.js'))

function updateUser (req, res) {
  var id = req.params._id
  var updatedUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    modifiedDate: Date.now()
  }
  User.findByIdAndUpdate(id, updatedUser, {runValidators: true})
    .then(() => res.send('User updated successfully'))
}

module.exports = updateUser
