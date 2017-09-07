/* global angular */
(function () {
  angular.module('storeApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'app/routes/login/admin_login.html',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
        })
    })
})()
