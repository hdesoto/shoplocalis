const Product = require('../../../models/Product')

function apiGetAllProducts (req, res) {
  Product.find()
    .limit(15)
    .then(products => res.json(products))
}

module.exports = apiGetAllProducts
