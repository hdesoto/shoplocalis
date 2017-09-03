/* global __base */
const path = require('path')
const Order = require(path.join(__base, '/models/Order.js'))

function addOrder (req, res) {
  var order = req.body
  Order.create(order)
    .then(() => res.send('Order created successfully'))
}

module.exports = addOrder

// app.post('/api/orders', function (req, res) {
//   var order = req.body
//   // order.ordernbr = lastOrderNumber + 1
//   Order.addOrder(order, function (err, order) {
//     if (err) {
//       throw err
//     }
//     res.json(order)
//   })
// })

// // ADD ORDER
// module.exports.addOrder = function (order, callback) {
//   Order.create(order, callback)
// }
