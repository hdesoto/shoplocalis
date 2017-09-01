/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/', {
        templateUrl: 'app/routes/dashboard/dashboard.html',
        contoller: 'dashboardController',
        controllerAs: 'dashCtrl'
      })
      })
