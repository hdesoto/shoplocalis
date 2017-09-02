/* SHOP LOCALIS */
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
// const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

mongoose.Promise = Promise

const PORT = process.env.PORT || 3001
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/shoplocalis'

const app = express()

const assetsPath = path.join('__dirname', '../client')
const adminPath = path.join('__dirname', '../client/admin')

app.use(express.static(assetsPath))
app.use('/admin', express.static(adminPath))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// app.use(cookieParser())
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
// console.log(path.join(__dirname,''))
app.set('views', path.join(__dirname, '/views'))

app.locals.pretty = true

mongoose.connect(URL_DB, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to DB Shoplocalis')
})

/* === Routes === */

// Call to Models and theirs methods
const Product = require('./models/Product')
const Order = require('./models/Order')
const User = require('./models/User')

// ********** API PRODUCTS **********
app.get('/api/products', function (req, res) {
  Product.getAllProducts(function (err, products) {
    if (err) {
      throw err
    }
    res.json(products)
  })
})

app.post('/api/products', function (req, res) {
  var product = req.body
  Product.addProduct(product, function (err, product) {
    if (err) {
      throw err
    }
    res.json(product)
  })
})

app.put('/api/product/:_id', function (req, res) {
  var id = req.params._id
  var updatedProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    uom: req.body.uom,
    stock: req.body.stock,
    image_url: req.body.image_url
  }
  Product.updateProduct(id, updatedProduct, {}, function (err, product) {
    if (err) {
      throw err
    }
    res.json(product)
  })
})

app.delete('/api/product/:_id', function (req, res) {
  var id = req.params._id
  Product.deleteProduct(id, function (err, product) {
    if (err) {
      throw err
    }
    res.json(product)
  })
})

app.get('/api/products/search', function (req, res) {
  Product.searchProductByTitle(req.query.title, function (err, products) {
    if (err) {
      throw err
    }
    res.json(products)
  })
})

// ********** API ORDERS **********
app.get('/api/orders', function (req, res) {
  Order.getAllOrders(function (err, orders) {
    if (err) {
      throw err
    }
    res.json(orders)
  })
})

// var lastOrderNumber = 5;

app.post('/api/orders', function (req, res) {
  var order = req.body
  // order.ordernbr = lastOrderNumber + 1
  Order.addOrder(order, function (err, order) {
    if (err) {
      throw err
    }
    res.json(order)
  })
})

app.put('/api/order/:_id', function (req, res) {
  var id = req.params._id
  var updatedOrder = {
    deliveryaddress: req.body.deliveryaddress,
    dateofdelivery: req.body.dateofdelivery
  }
  Order.updateOrder(id, updatedOrder, {}, function (err, order) {
    if (err) {
      throw err
    }
    res.json(order)
  })
})

app.delete('/api/order/:_id', function (req, res) {
  var id = req.params._id
  Order.deleteOrder(id, function (err, order) {
    if (err) {
      throw err
    }
    res.json(order)
  })
})

// ********** API USERS **********
app.get('/api/users', function (req, res) {
  User.getAllUsers(function (err, users) {
    if (err) {
      throw err
    }
    res.json(users)
  })
})

// var lastOrderNumber = 5;

app.post('/api/users', function (req, res) {
  var user = req.body
  User.addUser(user, function (err, user) {
    if (err) {
      throw err
    }
    res.json(user)
  })
})

app.put('/api/user/:_id', function (req, res) {
  var id = req.params._id
  var updatedUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  }
  User.updateUser(id, updatedUser, {}, function (err, user) {
    if (err) {
      throw err
    }
    res.json(user)
  })
})

app.delete('/api/user/:_id', function (req, res) {
  var id = req.params._id
  User.deleteUser(id, function (err, user) {
    if (err) {
      throw err
    }
    res.json(user)
  })
})

app.get('/api/users/search', function (req, res) {
  User.searchUserByName(req.query.name, function (err, users) {
    if (err) {
      throw err
    }
    res.json(users)
  })
})

// ********** API HOME **********
app.get('/', function (req, res) {
  const cart = req.session.cart
  Product.getAllProducts(function (err, products) {
    if (err) {
      throw err
    }
    res.render('pages/index', {products, cart})
  }, 10)
})

app.get('/product/search', function (req, res) {
  Product.searchProductByTitle(req.query.title, function (err, products) {
    if (err) {
      throw err
    }
    // const cart = req.session.cart
    res.render('pages/index', {products})
  })
})

// **** ADD ITEM TO CART
app.post('/cart', (req, res) => {
  // let tempCart = req.session.cart
  // console.log('Before adding item')
  // console.log(tempCart)
  const {_id, title, image_url, price} = JSON.parse(req.body.product)
  const quantity = +req.body.quantity
  const itemTotal = quantity * price
  const newCartItem = {_id, title, image_url, price, quantity, itemTotal}
  // tempCart.push(newCartItem)
  // console.log('After adding item in variable temp cart: ')
  // console.log(req.session.cart)
  // req.session.cart = cart
  req.session.cart.push(newCartItem)
  console.log('After adding item in req.session.cart: ')
  console.log(req.session.cart)
  //res.redirect('/')
  res.send('Added to Cart')
})

app.get('/cart', (req, res) => {
  const cart = req.session.cart
  res.render('pages/cart', {cart})
})

app.delete('/cart/:id', function (req, res) {
  var id = req.params._id
  var newCart = req.session.cart.filter(item => { return item._id !== id })
  req.session.cart = newCart
  res.redirect('/cart')
})

app.put('/cart/:id', function (req, res) {
  var id = req.params._id
  var newQuantity = req.body.quantity
  req.session.cart.forEach(function (item) {
    if (item._id === id) {
      item.quantity = newQuantity
    }
  })
  res.redirect('/cart')
})

// const routesAllProducts = require('./routes/products')
// const routesSingleProduct = require('./routes/product')
// // app.use('/', routesAllProducts)
// app.use('/product', routesSingleProduct)

// app.use('/products', routesAllProducts)
// app.use('/api/products', routesAllProducts)
// const searchProduct = require('./routes/product')
// app.use('/api/product', searchProduct)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
