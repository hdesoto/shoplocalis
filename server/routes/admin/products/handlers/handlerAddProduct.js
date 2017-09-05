/* global __base */

const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function addProduct (req, res) {
  const product = new Product()

  product.title = req.body.title
  product.description = req.body.description
  product.price = req.body.price
  product.uom = req.body.uom
  product.stock = req.body.stock
  product.image_url = req.body.image_url
  // const product = req.body

  // Product.create(product)
  product.save()
    .then((product) => res.send(product))
}

module.exports = addProduct
