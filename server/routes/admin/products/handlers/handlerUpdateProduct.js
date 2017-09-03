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
    stock: req.body.stock,
    image_url: req.body.image_url,
    modifiedDate: Date.now()
  }
  Product.findByIdAndUpdate(id, updatedProduct, {runValidators: true})
    .then(() => res.send('Product updated correctly'))
}

module.exports = updateProduct

// app.put('/api/product/:_id', function (req, res) {
//   var id = req.params._id
//   var updatedProduct = {
//     title: req.body.title,
//     description: req.body.description,
//     price: req.body.price,
//     uom: req.body.uom,
//     stock: req.body.stock,
//     image_url: req.body.image_url
//   }
//   Product.updateProduct(id, updatedProduct, {}, function (err, product) {
//     if (err) {
//       throw err
//     }
//     res.json(product)
//   })
// })

// // UPDATE PRODUCT
// module.exports.updateProduct = function (id, update, options, callback) {
//   var updatedProduct = {
//     title: update.title,
//     description: update.description,
//     price: update.price,
//     uom: update.uom,
//     stock: update.stock,
//     image_url: update.image_url,
//     modifiedDate: Date.now()
//     // , modifiedBy: 'User...'
//   }
//   Product.findByIdAndUpdate(id, updatedProduct, {runValidators: true}, callback)
// }
