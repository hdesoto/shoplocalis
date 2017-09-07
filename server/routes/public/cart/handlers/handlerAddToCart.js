// /* global __base */
// const path = require('path')
// const Product = require(path.join(__base, '/models/Product.js'))

function addToCart (req, res) {
  const {_id, title, image_url, price} = JSON.parse(req.body.product)
  const quantity = +req.body.quantity
  const itemTotal = Math.round((quantity * price) * 100) / 100
  const cartItem = req.session.cart.length + 1
  // console.log("Cart item: " + cartItem)
  const newCartItem = {cartItem, _id, title, image_url, price, quantity, itemTotal}
  var repeated = false
  req.session.cart.forEach(function (item) {
    if (item._id === newCartItem._id) {
      repeated = true
    }
  })
  if (!repeated) {
    req.session.cart.push(newCartItem)
  }
  req.session.save(function (err) {
    if (err) throw err
    res.redirect('/')
  })
}

module.exports = addToCart
