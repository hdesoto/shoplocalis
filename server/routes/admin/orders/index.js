const express = require('express')
const router = express.Router()

const addOrder = require('./handlers/handlerAddOrder')
const searchOrdersByAddress = require('./handlers/handlerSearchOrders')
const removeOrder = require('./handlers/handlerRemoveOrder')
const updateOrder = require('./handlers/handlerUpdateOrder')
const getAllOrders = require('./handlers/handlerAllOrders')

router.post('/', addOrder)
router.get('/search', searchOrdersByAddress)
router.delete('/:_id', removeOrder)
router.put('/:_id', updateOrder)
router.get('/', getAllOrders)

module.exports = router
