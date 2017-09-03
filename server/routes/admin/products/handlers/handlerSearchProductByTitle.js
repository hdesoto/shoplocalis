/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function searchProductByTitle (req, res) {
  const searchedTitle = new RegExp(req.query.title, 'i')
  Product.find({title: searchedTitle})
    .then((products) => res.json(products))
}

module.exports = searchProductByTitle
