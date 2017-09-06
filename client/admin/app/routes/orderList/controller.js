/* global myApp */

myApp.controller('ordersListController', function ($routeParams, $location, DataService, SweetAlert) {
  console.log('List of Orders Controller loaded...')
  var self = this
  showAllOrders()

  function showAllOrders () {
    // console.log('Show all products')
    DataService.searchAllOrders(function (response) {
      self.aOrders = response
      // console.log(self.aProducts)
    })
  }
})
