/* global __base */
const path = require('path')
const User = require(path.join(__base, '/models/User.js'))

function addUser (req, res) {
  var order = req.body
  User.create(user)
    .then(() => res.send('User created successfully'))
}

module.exports = addUser

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
