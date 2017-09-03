/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function addProduct (req, res) {
  const product = req.body
  Product.create(product)
    .then(() => res.send('Product Added'))
}

module.exports = addProduct

// // ADD PRODUCT
// module.exports.addProduct = function (product, callback) {
//   Product.create(product, callback)
// }

// app.post('/api/products', function (req, res) {
//   var product = req.body
//   Product.addProduct(product, function (err, product) {
//     if (err) {
//       throw err
//     }
//     res.json(product)
//   })
// })