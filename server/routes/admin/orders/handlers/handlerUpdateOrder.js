/* global __base */
const path = require('path')
const Order = require(path.join(__base, '/models/Order.js'))

function updateOrder (req, res) {
  var id = req.params._id
  var updatedOrder = {
    deliveryaddress: req.body.deliveryaddress,
    dateofdelivery: req.body.dateofdelivery,
    modifiedDate: Date.now()
  }
  Order.findByIdAndUpdate(id, updatedOrder, {runValidators: true})
    .then(() => res.send('Order updated successfully'))
}

module.exports = updateOrder
