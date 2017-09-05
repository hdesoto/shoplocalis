/* global myApp */

myApp.controller('searchController', function ($routeParams, $location, DataService) {

  console.log('search Product Controller loaded...')
  var self = this
  // self.query
  console.log(self.query)
  self.query = $routeParams.query
  self.noResults = false
  searchProduct()

  function searchProduct () {
    console.log('searchProduct from Controller')
    console.log(self.query)
    DataService.searchProductByTitle(self.query, function (response) {
      self.resultArray = response.data
      if (self.resultArray.length === 0) {
        self.noResults = true
      }
      console.log(self.resultArray)
    })
  }
})
