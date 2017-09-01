/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/editProduct', {
        templateUrl: 'app/routes/editProduct/product_edit.html',
        contoller: 'editProductController',
        controllerAs: 'editCtrl'
      })
      })
