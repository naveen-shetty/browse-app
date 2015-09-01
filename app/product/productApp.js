/*global angular */
var productApp = angular.module('productApp',['ui.router']);


productApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('pdp', {
            url : '/pdp/:productId',
            templateUrl : 'product/partials/product.html',
            controller  : "ProductController"
        });
    }

]);









