/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/delete_product/:id', {
        templateUrl: 'app/routes/deleteProduct/product_delete.html',
        controller: 'deleteProductController',
        controllerAs: 'delCtrl'
      })
      })
