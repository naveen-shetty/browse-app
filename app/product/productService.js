/**
 * Created by nshetty on 8/14/2015.
 * global angular
 */

angular.module('productApp').factory("productService" ,["$rootScope" , "$http" ,
    function($rootScope , $http ){

        /************************************************** private methods****************************/

        var arrayHasLength = function(arrayObj){
            return (angular.isArray(arrayObj) && arrayObj.length > 0);
        };
        /**
         * Parses Images and returns primary images and alt images
         * @param prodImgAry
         * @returns {{primImg: {}, altImgs: {}[]}}
         */
        var getProductImgs = function(prodImgAry) {
            var prodImgObj = {
                primImg: {},
                altImgs: [
                    {}
                ]
            };
            var altImgs = [] , primImg, altImg ;
            if (arrayHasLength (prodImgAry)) {
                var primaryImgs = prodImgAry[0].PrimaryImage;
                altImgs = prodImgAry[0].AlternateImages;
                if ( arrayHasLength(primaryImgs)) {
                    primImg = primaryImgs[0];
                }
                if (arrayHasLength(altImgs) ) {
                    if (angular.isUndefined(primImg)) {
                        primImg = altImgs[0]; // make alternate image as the main image
                    }
                }
            }
            prodImgObj.primImg = primImg;
            prodImgObj.altImgs = altImgs;
            return prodImgObj;
        };
        /**
         * Parses and returns price details
         * @param offerArray
         * @returns {*}
         */
        var getOfferPrice = function(offerArray) {
            var offerPriceObj;
            if (arrayHasLength (offerArray)) {
                 var offerPriceArr = offerArray[0].OfferPrice;
                if (arrayHasLength(offerPriceArr)) {
                    offerPriceObj = offerPriceArr[0];
                }
            }
            return offerPriceObj;
        };
        /**
         * Parses and returns price details
         * @param offerArray
         * @returns {*}
         */
        var getCustomerReview = function(customerReviewArray) {
            var customerReviewObj ={};
            if (arrayHasLength (customerReviewArray)) {
                customerReviewObj = customerReviewArray[0];
            }
            return customerReviewObj;
        };
        /**
         *Returns Product features
         * @param itemDescArray
         * @returns {Array}
         */
        var getProductFeatures = function(itemDescArray) {
            var features =[];
            if (arrayHasLength (itemDescArray)) {
                features = itemDescArray[0].features ;
            }
            return features;
        };

        /**
         * Checks if ATC is enabled
         * @param productDetails
         * @returns {boolean}
         */
        var atcEnabled = function(productDetails){
            var purchasingChannelCode = productDetails.purchasingChannelCode;
            var isOnline = true ; // Hardcoded to true. It is not clear from Json which node to look at
            return ((purchasingChannelCode ==="0" || purchasingChannelCode ==="1" ) && isOnline);
        };

        /**
         * Checks if ATC is enabled
         * @param productDetails
         * @returns {boolean}
         */
        var pickUpEnabled = function(productDetails){
            var purchasingChannelCode = productDetails.purchasingChannelCode;
            var isStore = true ; // Hardcoded to true. It is not clear from Json which node to look at
            return ((purchasingChannelCode ==="0" || purchasingChannelCode ==="1" ) && isStore);
        };

        var appendTransform = function(defaults, transform) {

            // We can't guarantee that the default transformation is an array
            defaults = angular.isArray(defaults) ? defaults : [defaults];

            // Append the new transformation to the defaults
            return defaults.concat(transform);
        };




        /************************************************Private Methods : End ****************************************/
        var config = {

            getProductDetails: function (productId) {


                return  $http({
                            url: 'json/item-data.json',
                            method: 'GET',
                            transformResponse: appendTransform($http.defaults.transformResponse, function(data) {
                                var productDetails ;
                                var productArray = data.CatalogEntryView;
                                if(arrayHasLength(productArray) ){
                                    productDetails = productArray[0];
                                    productDetails.imageDetails = getProductImgs(productDetails.Images);
                                    productDetails.offerPrice = getOfferPrice(productDetails.Offers);
                                    productDetails.customerReview = getCustomerReview(productDetails.CustomerReview);
                                    productDetails.enableAtc = atcEnabled(productDetails);
                                    productDetails.enablePickUp = pickUpEnabled(productDetails);
                                    productDetails.features = getProductFeatures(productDetails.ItemDescription);
                                }
                                data.productDetails =productDetails;
                                return data;
                            })
                    });
            }
        };

        return config;



    }]);
