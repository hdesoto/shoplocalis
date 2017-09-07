// /* global __base */
// const path = require('path')
// const Product = require(path.join(__base, '/models/Product.js'))

function deleteCartItem (req, res) {
  var cartItem = +req.params.cartItem
  var newCart = req.session.cart.filter(item => { return item.cartItem !== cartItem })
  req.session.cart = newCart
  req.session.save(function (err) {
    if (err) throw err
    res.send({'ok': 'Item deleted from Cart', 'cart': req.session.cart})
  })
}

module.exports = deleteCartItem
