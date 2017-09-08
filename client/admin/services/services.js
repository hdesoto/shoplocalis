/* global myApp */

myApp.service('DataService', function ($http) {
  var self = this

  self.searchProductByName = function (query, callback) {
    var title = query.title
    var url = '/api/products/search?title=' + title
    $http.get(url)
      .then(function (response) {
        callback(response.data.results)
      })
  }

  self.searchAllProducts = function (callback) {
    var url = '/api/products'
    $http.get(url)
      .then(function (response) {
        callback(response.data)
      })
  }

  self.getProduct = function (id, callback) {
    var url = '/api/products/search/' + id
    $http.get(url)
      .then(function (response) {
        callback(response.data)
      })
  }

  self.updateProduct = function (id, updatedProduct, callback) {
    var url = '/api/products/' + id
    $http.put(url, updatedProduct)
      .then(function (response) {
        callback(response)
      })
  }

  self.deleteProduct = function (id, callback) {
    var url = '/api/products/' + id
    $http.delete(url)
      .then(function (response) {
        callback(response)
      })
  }

  self.createProduct = function (product, callback) {
    var url = '/api/products/'
    $http.post(url, product)
      .then(function (response) {
        callback(response.data)
      })
  }

  self.searchProductByTitle = function (query, callback) {
    console.log('Search Service called')
    var url = '/api/products/search/?title=' + query
    $http.get(url)
      .then(function (response) {
        callback(response)
      })
  }

  self.searchAllOrders = function (callback) {
    var url = '/api/orders'
    $http.get(url)
      .then(function (response) {
        callback(response.data)
      })
  }
})
