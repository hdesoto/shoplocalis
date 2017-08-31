const mongoose = require('mongoose')
const collection = 'orders'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


var orderSchema = new mongoose.Schema({
  ordernbr: {
    type: Number,
    required: true,
    index: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  deliveryaddress: {
    type: String,
    required: true
  },
  orderdate: {
    type: Number,
    default: Date.now()
  },
  dateofdelivery: {
    type: Number,
    required: false
  },
  modifiedDate: {
    type: Number,
    required: false
  },
  modifiedBy: {
    type: ObjectId,
    ref: 'User'
  },
  items: [{
    type: ObjectId,
    ref: 'Product'
  }]
}, { collection })

var Order = module.exports = mongoose.model('Order', orderSchema)

// GET ALL ORDERS
module.exports.getAllOrders = function (callback, limit) {
  Order.find(callback).limit(limit)
}

// ADD ORDER
module.exports.addOrder = function (order, callback) {
  Order.create(order, callback)
}

// UPDATE ORDER
module.exports.updateOrder = function (id, update, options, callback) {
  var updatedOrder = {
    deliveryaddress: update.deliveryaddress,
    dateofdelivery: update.dateofdelivery,
    // items: [{type: ObjectId, ref: 'Product'}
    modifiedDate: Date.now()
    // , modifiedBy: 'User...'
  }
  Order.findByIdAndUpdate(id, updatedOrder, {runValidators: true}, callback)
}

// DELETE ORDER
module.exports.deleteOrder = function (id, callback) {
  Order.findByIdAndRemove(id, callback)
}
