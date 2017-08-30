/* SHOP LOCALIS */
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

mongoose.Promise = Promise

const PORT = process.env.PORT || 3001
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/shoplocalis'

const app = express()

app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine', 'pug')
//console.log(path.join(__dirname,''))
app.set('views', path.join(__dirname, '/views'))

app.locals.pretty = true

mongoose.connect(URL_DB, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to DB Shoplocalis')
})



/* === Routes === */



const routesAllProducts = require('./routes/products')
const routesSingleProduct = require('./routes/product')
app.use('/', routesAllProducts)
app.use('/', routesSingleProduct)


// app.use('/products', routesAllProducts)
// app.use('/api/products', routesAllProducts)
// const searchProduct = require('./routes/product')
// app.use('/api/product', searchProduct)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)