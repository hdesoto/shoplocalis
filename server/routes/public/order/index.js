const express = require('express')
const router = express.Router()

const orderConfirmation = require('./handlers/handlerOrderConfirmation')
const goToCheckout = require('./handlers/handlerGoToCheckout')

router.get('/order_confirmation', orderConfirmation)
router.get('/checkout', goToCheckout)
