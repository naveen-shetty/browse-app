/**
 * Created by nshetty on 8/14/2015.
 */

angular.module('browseApp',
    [ 'internalApps' , 'vendorApps' ])

    .run([ '$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            // best practice to have state  and state variables in root scope instead of injected it everywhere
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

        }])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            // $locationProvider.html5Mode(true).hashPrefix("!"); To enable HTML 5 mode
            $urlRouterProvider.otherwise("/pdp/dummy-pid"); // re-direct to dummy page

        }]);





