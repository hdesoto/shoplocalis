/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/routes/dashboard/dashboard.html',
        contoller: 'dashboardController',
        controllerAs: 'dashCtrl'
      })
      })
