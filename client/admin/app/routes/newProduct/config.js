/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/newProduct', {
        templateUrl: 'app/routes/newProduct/product_upload.html',
        contoller: 'newProductController',
        controllerAs: 'newCtrl'
      })
      })
