/**
 * Created by nshetty on 8/14/2015.
 */

var browseApp = angular.module('browseApp', [  'ui.router' ,'productApp' , 'templateCache' ]);


browseApp.run([ '$rootScope', '$state', '$stateParams', '$location',
    function ($rootScope, $state, $stateParams , $location ) {
        // best practice to have state  and state variables in root scope instead of injected it everywhere
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

    }]);

productApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function($stateProvider, $urlRouterProvider , $locationProvider) {

       // $locationProvider.html5Mode(true).hashPrefix("!"); To enable HTML 5 mode
        $urlRouterProvider.otherwise("/pdp/dummy-pid"); // re-direct to dummy page

    }]);





