/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function searchProducts (req, res) {
  const cart = req.session.cart
  const search = true
  const query = req.query.title
  Product.searchProductByTitle(query, function (err, products) {
    if (err) {
      throw err
    }
    res.render('pages/index', {products, cart, search, query})
  })
}

module.exports = searchProducts
