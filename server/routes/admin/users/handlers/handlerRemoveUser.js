/* global __base */
const path = require('path')
const User = require(path.join(__base, '/models/User.js'))

function removeUser (req, res) {
  var id = req.params._id
   User.findByIdAndRemove(id)
    .then(() => res.send('User successfully deleted'))
}

module.exports = removeUser
