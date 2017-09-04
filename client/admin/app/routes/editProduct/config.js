/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/edit_product/:id', {
        templateUrl: 'app/routes/editProduct/product_edit.html',
        controller: 'editProductController',
        controllerAs: 'editCtrl'
      })
      })
