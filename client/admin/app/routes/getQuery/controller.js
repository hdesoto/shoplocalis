/* global myApp */

myApp.controller('getQueryController', function ($routeParams, $location) {
  console.log('get Query Controller loaded...')
  var self = this
  // self.query

  self.getQueryAndRedirect = function () {
    console.log('Hola')
    console.log(self.query)
    $location.path('/search/' + self.query)
    // console.log('searchProduct from Controller')
    // DataService.searchProductByTitle(self.query, function (response) {
    //   self.resultArray = response.data
    //   console.log(self.resultArray)
    // })
  }
})
