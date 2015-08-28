/**
 * Created by nshetty on 8/16/2015.
 */

/*global angular */
angular.module('productApp').controller("ProductController" , ["$scope"  , "$stateParams"  ,"productService", "$sce",
    function ($scope  , $stateParams , productService , $sce ) {
        /**
         * Initializes the scope object
         */
        var initialize =function() {
            $scope.productDetails = {};
            $scope.productDetails.id = $stateParams.productId;
            productService.getProductDetails($scope.productDetails.id)
                .then(function (response) {

                    var productDetails = response.data.productDetails;
                    if(!angular.isObject(productDetails)){
                        //handle the error here and abort further execution.
                    }else{
                        $scope.productDetails = productDetails;
                        $scope.productDetails.nextTh = nextTh;
                        $scope.productDetails.prevTh = prevTh;
                        $scope.productDetails.changePrimaryImg =changePrimaryImg;
                        $scope.productDetails.increment =increment;
                        $scope.productDetails.decrementNonZeroNonNegative =decrementNonZeroNonNegative;
                    }
                }
            );
        };
        /**
         * Image Carousel next button
         */
        var nextTh = function() {
            var thumb = $scope.productDetails.imageDetails.altImgs.pop();
            $scope.productDetails.imageDetails.altImgs.unshift(thumb);
            changePrimaryImg(0);
        };

        /**
         * Image Carousel previous button
         */
        var prevTh = function() {
            var thumb = $scope.productDetails.imageDetails.altImgs.shift();
            $scope.productDetails.imageDetails.altImgs.push(thumb);
            changePrimaryImg(0);
        };
        /**
         * Change Primary Image
         */
        var changePrimaryImg = function(index) {
            var primImageObj = angular.copy($scope.productDetails.imageDetails.altImgs[index]);
            $scope.productDetails.imageDetails.primImg = primImageObj;
            $scope.productDetails.imageDetails.selectedthInd =index;
        };

        var increment = function(value) {
            return ++value;
        };

        var decrementNonZeroNonNegative = function(value) {
            value--;
            if(value<1){
                value =1;
            }
            return value;
        };

        //*******************************Private Methods end here*******************************////
        //*****************************scope level methods**************************//
        /**
         *
         * @param htmlInput
         * @returns sanitized html string
         */
        $scope.santize = function(htmlInput){
            return $sce.trustAsHtml(htmlInput);
        };
        //*****************************scope level methods**************************//

        //*****************************Controller execution flow**************************//
        // initialize here
        initialize();


    }
]);