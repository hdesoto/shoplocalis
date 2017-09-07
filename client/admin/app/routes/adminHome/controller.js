/* global myApp */

myApp.controller('adminHomeController', function ($routeParams, $location, DataService, SweetAlert) {
  var self = this
  showAllProducts()

  function showAllProducts () {
    DataService.searchAllProducts(function (response) {
      self.aProducts = response
    })
  }
})
