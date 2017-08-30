const Product = require('../../../models/Product')

function searchProductByTitle (req, res) {
  console.log(req.query)
  const searchtitle = new RegExp(req.query.title, 'i')

  Product.find({title: searchtitle})
    //.then(product => res.send(product))
    
    .then(products => res.render('pages/index', { products }))
}

module.exports = searchProductByTitle
