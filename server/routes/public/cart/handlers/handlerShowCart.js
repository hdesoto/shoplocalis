// /* global __base */
// const path = require('path')
// const Product = require(path.join(__base, '/models/Product.js'))

function showCart (req, res) {
  const cart = req.session.cart
  const total = Math.round((cart.reduce(function (sum, value) {
    return sum + value.itemTotal
  }, 0)) * 100) / 100
  res.render('pages/cart', {cart, total})
}

module.exports = showCart
