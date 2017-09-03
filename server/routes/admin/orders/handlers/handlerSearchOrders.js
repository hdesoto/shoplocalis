/* global __base */
const path = require('path')
const Order = require(path.join(__base, '/models/Order.js'))

function searchOrdersByAddress (req, res) {
  const deliveryaddress = new RegExp(req.query.deliveryaddress, 'i')
  Order.find({deliveryaddress: deliveryaddress})
    .then((orders) => res.json(orders))
}

function searchOrdersByEmail (req, res) {
  const email = new RegExp(req.query.email, 'i')
  Order.find({email: email})
    .then((orders) => res.json(orders))
}

module.exports = searchOrdersByAddress
module.exports = searchOrdersByEmail
