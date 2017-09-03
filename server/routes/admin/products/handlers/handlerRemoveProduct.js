/* global __base */
const path = require('path')
const Product = require(path.join(__base, '/models/Product.js'))

function deleteProduct (req, res) {
  var id = req.params._id
  Product.findByIdAndRemove(id)
    .then(() => res.send('Product Removed'))
}

module.exports = deleteProduct

// DELETE PRODUCT
// module.exports.deleteProduct = function (id, callback) {
//   Product.findByIdAndRemove(id, callback)
// }

// app.delete('/api/product/:_id', function (req, res) {
  
//   Product.deleteProduct(id, function (err, product) {
//     if (err) {
//       throw err
//     }
//     res.json(product)
//   })
// })