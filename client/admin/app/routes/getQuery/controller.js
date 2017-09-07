/* global myApp */

myApp.controller('getQueryController', function ($routeParams, $location) {
  console.log('get Query Controller loaded...')
  var self = this

  self.getQueryAndRedirect = function () {
    console.log('Hola')
    console.log(self.query)
    $location.path('/search/' + self.query)
  }
})
