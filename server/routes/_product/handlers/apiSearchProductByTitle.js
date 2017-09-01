const Product = require('../../../models/Product')

function apiSearchProductByTitle (req, res) {
  
  // const { title, description, price, uom, stock, picture, creationDate, createdBy, modifiedDate, modifiedBy } = req.query
  const  searchTitle = new RegExp(req.query.title, 'i')


  Product.find({title: searchTitle})
    .limit(10)
    .then(product => res.json(product))
}

module.exports = apiSearchProductByTitle
