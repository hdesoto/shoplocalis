/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function deleteProduct (req, res) {
  var id = req.params._id
  Product.findByIdAndRemove(id)
    .then(() => res.send('Product Removed'))
}

module.exports = deleteProduct
