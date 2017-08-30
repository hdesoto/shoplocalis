const mongoose = require('mongoose')
const collection = 'orders'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var orderSchema = new mongoose.Schema({
  ordernbr: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdBy:{
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
  items: [{type: ObjectId, ref: 'Product'}]
}, { collection })

module.exports = mongoose.model('Order', orderSchema)
