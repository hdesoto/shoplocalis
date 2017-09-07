/* global angular */
(function () {
  angular.module('storeApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/register', {
          templateUrl: 'app/routes/register/register.html',
          controller: 'registerController',
          controllerAs: 'registerCtrl'
        })
    })
})()
