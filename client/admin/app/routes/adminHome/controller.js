/* global myApp */

myApp.controller('adminHomeController', function ($routeParams, $location, DataService, SweetAlert) {
  console.log('Admin Home Controller loaded...')
  var self = this
  showAllProducts()

  function showAllProducts () {
    console.log('Show all products')
    DataService.searchAllProducts(function (response) {
      self.aProducts = response
      console.log(self.aProducts)
    })
  }
})
