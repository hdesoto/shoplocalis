/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/new_product', {
        templateUrl: 'app/routes/newProduct/product_upload.html',
        contoller: 'newProductController',
        controllerAs: 'newCtrl'
      })
      })
