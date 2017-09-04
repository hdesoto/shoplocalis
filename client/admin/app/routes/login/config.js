/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/login', {
        templateUrl: 'app/routes/login/admin_login.html',
        contoller: 'loginController',
        controllerAs: 'loginCtrl'
      })
      })
