/* global __base */
const path = require('path')
// const Product = require(path.join(__base, '/models/Product.js'))

function orderConfirmation (req, res) {
  const cart = req.session.cart
  res.render(path.join(__base, 'views/pages/checkout'), {cart})
}

module.exports = orderConfirmation
