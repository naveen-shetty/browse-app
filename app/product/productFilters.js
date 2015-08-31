/* global angular */
angular.module('productApp')
    .filter('trustAsHtml', ['$sce' , function($sce) {
        return function(htmlInput) {
            var sanitizedHtml = htmlInput;
            sanitizedHtml = $sce.trustAsHtml(htmlInput);
            return sanitizedHtml;
        };

    }]
);