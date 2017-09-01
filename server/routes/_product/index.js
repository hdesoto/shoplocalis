const express = require('express')
const router = express.Router()

const searchProductByTitle  = require('./handlers/searchProductByTitle')
const apiSearchProductByTitle = require('./handlers/apiSearchProductByTitle')

router.get('/product/search', searchProductByTitle)
router.get('/api/product/search', apiSearchProductByTitle)

module.exports = router
