const Product = require('../../../models/Product')

function getAllProducts (req, res) {
  Product.find()
    .limit(15)
    .then(products => res.render('pages/index', { products }))
}


module.exports = getAllProducts
