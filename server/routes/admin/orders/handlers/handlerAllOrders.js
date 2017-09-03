/* global __base */
const path = require('path')
const Order = require(path.join(__base, '/models/Order.js'))

function getAllOrders (req, res) {
  const limit = req.query.limit
  Order.find().limit(limit)
    .then((orders) => res.json(orders))
}

module.exports = getAllOrders
