/* global angular */

angular.module('storeApp')
      .config(function ($routeProvider) {
        $routeProvider
      .when('/orders', {
        templateUrl: 'app/routes/orderList/orders_list.html',
        controller: 'ordersListController',
        controllerAs: 'ordersListCtrl'
      })
    })
      