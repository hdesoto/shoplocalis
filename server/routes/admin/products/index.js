const express = require('express')
const router = express.Router()

const addProduct = require('./handlers/handlerAddProduct')
const searchProductByTitle = require('./handlers/handlerSearchProductByTitle')
const searchProductById = require('./handlers/handlerSearchProductById')
const removeProduct = require('./handlers/handlerRemoveProduct')
const updateProduct = require('./handlers/handlerUpdateProduct')
const getAllProducts = require('./handlers/handlerAllProducts')

router.post('/', addProduct)
router.get('/search', searchProductByTitle)
router.get('/search/:_id', searchProductById)
router.delete('/:_id', removeProduct)
router.put('/:_id', updateProduct)
router.get('/', getAllProducts)

module.exports = router
