
function updateCartItem (req, res) {
  var cartItem = +req.params.cartItem
  var newQuantity = +req.body.quantity
  console.log(req.session.cart)
  req.session.cart.forEach(function (item) {
    if (item.cartItem === cartItem) {
      item.quantity = newQuantity
      item.itemTotal = Math.round((newQuantity * item.price) * 100) / 100
    }
  })
  req.session.save(function (err) {
    if (err) throw err
    res.send({'ok': 'Quantity updated', 'cart': req.session.cart})
  })
}

module.exports = updateCartItem
