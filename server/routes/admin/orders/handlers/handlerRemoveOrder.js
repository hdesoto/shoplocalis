/* global __base */
const path = require('path')
const Order = require(path.join(__base, '/models/Order.js'))

function removeOrder (req, res) {
  var id = req.params._id
   Order.findByIdAndRemove(id)
    .then(() => res.send('Order successfully deleted'))
}

module.exports = removeOrder
