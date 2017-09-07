/* global myApp */

(function () {
  // angular.module('MyApp')
  myApp.controller('registerController', RegisterCtrl)

  console.log('Regiser Controller loaded...')

  function RegisterCtrl (AuthService/*, toastr */, $location) {
    var self = this

    self.register = function (e) {
      e.preventDefault()
      AuthService.register(self.username, self.password)
        .then(data => {
          if (data.success) {
            $location.path('/')
          } else {
            alert('Error' + data.msg)
            // toastr.error(data.msg)
          }
        })
    }
  }
})()
