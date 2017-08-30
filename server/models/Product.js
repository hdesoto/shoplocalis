const mongoose = require('mongoose')
const collection = 'products'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  uom: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: false
  },
  creationDate: {
    type: Number,
    default: Date.now()
  },
  createdBy: {
    type: ObjectId,
    ref: 'User',
    required: false
  },
  modifiedDate: {
    type: Number,
    required: false
  },
  modifiedBy: {
    type: ObjectId,
    ref: 'User'
  }
}, { collection })

module.exports = mongoose.model('Product', productSchema)
