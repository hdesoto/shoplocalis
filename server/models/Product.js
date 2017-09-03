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
    ref: 'User'
  }
}, { collection })

var Product = module.exports = mongoose.model('Product', productSchema)

// GET ALL PRODUCTS
module.exports.getAllProducts = function (callback, limit) {
  Product.find(callback).limit(limit)
}

// OLD METHODS (NOW IN ROUTES)
  // // ADD PRODUCT
  // module.exports.addProduct = function (product, callback) {
  //   Product.create(product, callback)
  // }

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

  // // DELETE PRODUCT
  // module.exports.deleteProduct = function (id, callback) {
  //   Product.findByIdAndRemove(id, callback)
  // }

  // // SEARCH PRODUCT BY TITLE
  // module.exports.searchProductByTitle = function (title, callback) {
  //   const searchedTitle = new RegExp(title, 'i')
  //   Product.find({title: searchedTitle}, callback)
  // }
