/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/admin', {
        templateUrl: 'app/routes/dashboard/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashCtrl'
      })
      })
      