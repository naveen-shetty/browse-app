/*global angular */
angular.module('productApp', ['ui.router'])
    .config(['$stateProvider',
        function ($stateProvider) {

            $stateProvider.state('pdp', {
                url: '/pdp/:productId',
                templateUrl: 'product/partials/product.html',
                controller: "ProductController"
            });
        }

    ]);









