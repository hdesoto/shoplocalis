/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function updateProduct (req, res) {
  var id = req.params._id
  var updatedProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    uom: req.body.uom,
    // stock: req.body.stock,
    image_url: req.body.image_url,
    modifiedDate: Date.now()
  }
  Product.findByIdAndUpdate(id, updatedProduct, {runValidators: true})
    .then(() => res.send('Product updated correctly'))
}

module.exports = updateProduct
