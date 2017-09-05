/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/search/:query', {
        templateUrl: 'app/routes/searchProduct/search_results.html',
        controller: 'searchController',
        controllerAs: 'searchCtrl'
      })
      })
