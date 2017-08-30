const Product = require('../../../models/Product')

function apiAddProduct (req, res) {
  
  const {title, description, price, uom, stock, picture} = req.body
  const product = new Product({ title, description, price, uom, stock, picture })

  product.save(function (err) {
    if (err) {
      console.log(err)
    }
    res.json(product)
  })
}

module.exports = apiAddProduct
