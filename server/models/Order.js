const mongoose = require('mongoose')
const collection = 'orders'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var orderSchema = new mongoose.Schema({
  orderNbr: {
    type: String,
    required: true
    // index: true,
    // unique: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  deliveryAddress1: {
    type: String,
    required: true
  },
  deliveryAddress2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalCode: {
    type: Number,
    required: true
  },
  preferedTimeOfDelivery: {
    type: String,
    required: false
  },
  paymentMethod: {
    type: String,
    required: true
  },
  orderDate: {
    type: Number,
    default: Date.now()
  },
  dateOfDelivery: {
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
    product: {
      type: ObjectId,
      required: true,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
}, { collection })

var Order = module.exports = mongoose.model('Order', orderSchema)
