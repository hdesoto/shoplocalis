/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function getAllProducts (req, res) {
  const cart = req.session.cart
  Product.getAllProducts(function (err, products) {
    if (err) {
      throw err
    }
    res.render('pages/index', {products, cart})
  }, 70)
}

module.exports = getAllProducts
