/* global myApp */

(function () {
  // angular.module('MyApp')
  myApp.controller('loginController', LoginCtrl)

  console.log('Login Controller loaded...')

  function LoginCtrl (AuthService, /* toastr, */ $location) {
    var self = this

    self.login = function(e) {
      console.log('Login called')
      e.preventDefault()
      AuthService.login(self.username, self.password)
        .then(success => {
          if (success) {
            // toastr.success('succesfully logged')
            $location.path('/')
          } else {
            alert('Error')
            // toastr.error('try again!')
          }
        })
    }
  }
})()
