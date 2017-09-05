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
    default: Date.now(),
    required: true
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
    ref: 'User',
    required: false
  }
}, { collection })

var Product = module.exports = mongoose.model('Product', productSchema)

// GET ALL PRODUCTS
module.exports.getAllProducts = function (callback, limit) {
  Product.find(callback).limit(limit)
}

module.exports.searchProductByTitle = function (query, callback) {
  const searchedTitle = new RegExp(query, 'i')
  Product.find({title: searchedTitle}, callback)
    // .then((products) => res.json(products))
}
