// /* global __base */
// const path = require('path')
// const Product = require(path.join(__base, '/models/Product.js'))

function orderConfirmation (req, res) {
  const orderNbr = req.session.orderNbr
  const cart = req.session.cart
  res.render('pages/order_confirmation', {orderNbr, cart})
}

module.exports = orderConfirmation
