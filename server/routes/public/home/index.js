const express = require('express')
const router = express.Router()

const showHome = require('./handlers/handlerShowHome')
const searchResults = require('./handlers/handlerShowResults')
const orderConfirmation = require('./handlers/handlerOrderConfirmation')

router.get('/', showHome)
router.get('/product/search', searchResults)
router.get('/order_confirmation', orderConfirmation)

module.exports = router
