/* global __base */
const path = require('path')
const Order = require(path.join(__base, '/models/Order.js'))
const shortid = require('shortid')

function addOrder (req, res) {
  const {
    name,
    lastName,
    email,
    deliveryAddress1,
    deliveryAddress2,
    city,
    state,
    postalCode,
    preferedTimeOfDelivery,
    paymentMethod
    } = req.body

  const order = new Order()
  const orderNbr = shortid.generate()
  // const items = JSON.parse(req.session.cart)
  const items = req.session.cart.map((_item) => {
      return { product: _item._id, quantity: _item.quantity }
  })
  // console.log(items)

  order.orderNbr = orderNbr
  order.name = name
  order.lastName = lastName
  order.email = email
  order.deliveryAddress1 = deliveryAddress1
  order.deliveryAddress2 = deliveryAddress2
  order.city = city
  order.state = state
  order.postalCode = postalCode
  order.preferedTimeOfDelivery = preferedTimeOfDelivery
  order.paymentMethod = paymentMethod
  order.items = items

  order.save()
    .then(function () {
      req.session.cart = []
      // const message = 'Orden creada correctamente.'
      req.session.orderNbr = orderNbr
      req.session.save(function (err) {
        if (err) throw err
        res.redirect('/order_confirmation')
      })
    })
}

module.exports = addOrder
