/* global __base */
/* SHOP LOCALIS */

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

mongoose.Promise = Promise

const PORT = process.env.PORT || 3001
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/shoplocalis'

const app = express()

global.__base = path.join(__dirname)
console.log(__base)

const assetsPath = path.join('__dirname', '../client')
const adminPath = path.join('__dirname', '../client/admin')

app.use(express.static(assetsPath))
app.use('/admin', express.static(adminPath))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(session({
  secret: 'zebrapassenger',
  // cookie: { secure: true },
  resave: false,
  saveUninitialized: true,
  store: new FileStore(),
  name: 'cookie-Cart'
}))

app.use(function (req, res, next) {
  req.session.cart = req.session.cart || []
  next()
})

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.locals.pretty = true

mongoose.connect(URL_DB, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to DB Shoplocalis')
})

/* === Routes === */

// Call to Models and theirs methods
const Product = require('./models/Product')
// const Order = require('./models/Order')
const User = require('./models/User')

// ********** API PRODUCTS ********** //
const routesProducts = require('./routes/admin/products')
app.use('/api/products', routesProducts)

// ********** API ORDERS **********
const routesOrders = require('./routes/admin/orders')
app.use('/api/orders', routesOrders)

// ********** API USERS **********
const routesUsers = require('./routes/admin/users')
app.use('/api/users', routesUsers)

// ********** HOME **********
app.get('/', function (req, res) {
  const cart = req.session.cart
  Product.getAllProducts(function (err, products) {
    if (err) {
      throw err
    }
    res.render('pages/index', {products, cart})
  }, 70)
})

app.get('/product/search', function (req, res) {
  const cart = req.session.cart
  const search = true
  const query = req.query.title
  Product.searchProductByTitle(query, function (err, products) {
    if (err) {
      throw err
    }
    res.render('pages/index', {products, cart, search, query})
  })
})

app.get('/checkout', function (req, res) {
  const cart = req.session.cart
  res.render('pages/checkout', {cart})
})

// ********** ADD ITEM TO CART **********
app.post('/cart', (req, res) => {
  const {_id, title, image_url, price} = JSON.parse(req.body.product)
  const quantity = +req.body.quantity
  const itemTotal = quantity * price
  const cartItem = req.session.cart.length + 1
  // console.log("Cart item: " + cartItem)
  const newCartItem = {cartItem, _id, title, image_url, price, quantity, itemTotal}
  var repeated = false
  req.session.cart.forEach(function (item) {
    if (item._id === newCartItem._id) {
      repeated = true
    }
  })
  if (!repeated) {
    req.session.cart.push(newCartItem)
  }
  req.session.save(function (err) {
    if (err) throw err
    res.redirect('/')
  })
})

// ********** See CART **********
app.get('/cart', (req, res) => {
  const cart = req.session.cart
  // console.log(cart)
  const total = cart.reduce(function(sum, value){
    return sum + value.itemTotal
  },0)
  // console.log(total)
  res.render('pages/cart', {cart, total})
})

app.delete('/cart/:cartItem', function (req, res) {
  var cartItem = +req.params.cartItem
  var newCart = req.session.cart.filter(item => { return item.cartItem !== cartItem })
  req.session.cart = newCart
  req.session.save(function (err) {
    if (err) throw err
    res.send({'ok': 'Item deleted from Cart', 'cart': req.session.cart})
  })
})

app.put('/cart/:cartItem', function (req, res) {
  var cartItem = +req.params.cartItem
  var newQuantity = +req.body.quantity
  console.log(req.session.cart)
  req.session.cart.forEach(function (item) {
    if (item.cartItem === cartItem) {
      item.quantity = newQuantity
      item.itemTotal = Math.round((newQuantity * item.price) * 100) / 100
    }
  })
  req.session.save(function (err) {
    if (err) throw err
    res.send({'ok': 'Quantity updated', 'cart': req.session.cart})
  })
})




app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
