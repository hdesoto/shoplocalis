const express = require('express')
const router = express.Router()

//const addTask = require('./handlers/addTask')


/* Non Api Routes */
const getAllProducts = require('./handlers/getAllProducts')



/* API ROUTES */
const apiAddProduct = require('./handlers/apiAddProduct')
const apiGetAllProducts = require('./handlers/apiGetAllProducts')


router.get('/', getAllProducts)

router.get('/api/products', apiGetAllProducts)
// router.post('/api/products',apiAddProduct)


module.exports = router
