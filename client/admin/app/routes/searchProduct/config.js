/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/search', {
        templateUrl: 'app/routes/searchProduct/card_deck.html',
        contoller: 'searchProductController',
        controllerAs: 'searchCtrl'
      })
      })
