/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function getAllProducts (req, res) {
  const limit = req.query.limit
  Product.find().limit(limit)
    .then((products) => res.json(products))
}

module.exports = getAllProducts
