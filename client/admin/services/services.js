/* global myApp */

myApp.service('DataService', function ($http) {
	var self = this

	self.searchProductByName = function (query, callback) {
	console.log('search Called (in service)')
	var title = query.title
	var url = '/api/products/search?title=' + title
	$http.get(url)
	  .then(function(response){
	  	console.log(response)
	  	callback(response.data.results)
	  })
	}

	self.searchAllProducts = function (callback) {
	console.log('Service Search ALL products called')
	var url = '/api/products'
	$http.get(url)
		.then(function(response){
			console.log(response.data)
			callback(response.data)
		})
	}

	self.getProduct = function (id, callback) {
		console.log('Service GET Product')
		var url = '/api/products/search/' + id
		$http.get(url)
			.then(function(response) {
				// console.log(response.data)
				callback(response.data)
			})
	}

	self.updateProduct = function (id, updatedProduct, callback) {
		console.log('Service PUT product')
		var url = '/api/products/' + id
		$http.put(url, updatedProduct)
			.then(function(response){
				callback(response)
			})
	}

	self.deleteProduct = function (id, callback) {
		console.log('Service Delete product')
		var url = '/api/products/' + id
		$http.delete(url)
			.then(function(response){
				callback(response)
			})
	}

	self.createProduct = function (product, callback) {
		console.log('Create Product Service called')
		var url = '/api/products/'
		$http.post(url, product)
			.then(function(response){
				console.log(response)
				callback(response._id)
			})
	}
})
