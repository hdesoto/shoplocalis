/* global __base */
/* SHOP LOCALIS */

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const shortid = require('shortid')

mongoose.Promise = Promise

const PORT = process.env.PORT || 3001
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/shoplocalis'

const app = express()

global.__base = path.join(__dirname)
console.log('Base is: ' + __base)

const assetsPath = path.join('__dirname', '../client')
const adminPath = path.join('__dirname', '../client/admin')

app.use(express.static(assetsPath))
app.use('/admin', express.static(adminPath))

/* bodyParser */
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* express-session */
app.use(session({
  secret: 'zebrapassenger',
  // cookie: { secure: true },
  resave: false,
  saveUninitialized: true,
  store: new FileStore(),
  name: 'cookie-Cart'
}))

/* ===== Passport Load ===== */
const passport = require('./config/passport/')
app.use(passport.initialize())
/* ===== Passport Load END===== */

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
const User = require('./models/User')
// ********** APIs **********
  // ==== API PRODUCTS ==== //
const routesProducts = require('./routes/admin/products')
app.use('/api/products', routesProducts)

  // ==== API ORDERS ====
const routesOrders = require('./routes/admin/orders')
app.use('/api/orders', routesOrders)

  // ==== API USERS ====
const routesUsers = require('./routes/admin/users')
app.use('/api/users', routesUsers)

// ********** HOME **********
const routesHome = require('./routes/public/home')
app.use('/', routesHome)

// ********** CART **********
const routesCart = require('./routes/public/cart')
app.use('/cart', routesCart)

const routesAuth = require('./routes/auth')
app.use(routesAuth)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
