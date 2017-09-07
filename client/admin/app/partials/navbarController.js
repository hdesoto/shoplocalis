/* global myApp */

(function () {
  myApp.controller('navbarController', navBarCtrl)

  function navBarCtrl (AuthService, $location, $scope) {
    $scope.logout = function () {
      AuthService.logout()
      $location.path('/login')
    }
  }
})()
