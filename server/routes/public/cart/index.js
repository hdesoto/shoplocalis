const express = require('express')
const router = express.Router()

const addToCart = require('./handlers/handlerAddToCart')
const showCart = require('./handlers/handlerShowCart')
const deleteCartItem = require('./handlers/handlerDeleteCartItem')
const updateCartItem = require('./handlers/handlerUpdateCartItem')
const goToCheckout = require('./handlers/handlerGoToCheckout')

router.post('/', addToCart)
router.get('/', showCart)
router.delete('/:cartItem', deleteCartItem)
router.put('/:cartItem', updateCartItem)
router.get('/checkout', goToCheckout)

module.exports = router
