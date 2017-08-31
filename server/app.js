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

// Call to Models and theirs methods
const Product = require('./models/Product')
const Order = require('./models/Order')
const User = require('./models/User')


// const routesAllProducts = require('./routes/products')
// const routesSingleProduct = require('./routes/product')
// // app.use('/', routesAllProducts)
// app.use('/product', routesSingleProduct)


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

app.get('/api/products/search', function (req, res){
  Product.searchProductByTitle(req.query.title, function (err, products){
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

app.get('/api/users/search', function (req, res){
  User.searchUserByName(req.query.name, function (err, users){
    if (err) {
      throw err
    }
    res.json(users)
  })
})


// HOME

app.get('/', function (req, res) {
  Product.getAllProducts(function (err, products) {
    if (err) {
      throw err
    }
    res.render('pages/index', {products})
  }, 10)
})

app.get('/product/search', function (req, res) {
  Product.searchProductByTitle(req.query.title, function (err, products) {
    if (err) {
      throw err
    }
    res.render('pages/index', {products})
  })
})


// app.use('/products', routesAllProducts)
// app.use('/api/products', routesAllProducts)
// const searchProduct = require('./routes/product')
// app.use('/api/product', searchProduct)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
