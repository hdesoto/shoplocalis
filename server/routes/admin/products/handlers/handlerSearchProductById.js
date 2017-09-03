/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function searchProductById (req, res) {
  const id = req.params._id
  Product.findById(id)
    .then((product) => res.json(product))
}

module.exports = searchProductById
