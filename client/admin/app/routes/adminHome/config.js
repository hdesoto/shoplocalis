/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/', {
        templateUrl: 'app/routes/adminHome/admin_home.html',
        controller: 'adminHomeController',
        controllerAs: 'adminHomeCtrl',
        secure: true
      })
    })
      