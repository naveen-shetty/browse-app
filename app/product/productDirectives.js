angular.module('productApp')
    .directive('starRatings', [ function() {
            return {
                restrict: 'EA',
                template: '<div class="star-rating" ng-show="show" ng-bind-html="ratingHTML |trustAsHtml"></div>',
                scope: {
                    avgRating: '='
                },
                link: function(scope, element, attrs){
                    // whole star = A, empty star = c, half star = B

                    scope.$watch('avgRating', function() {
                        scope.show = true; //sets template to show

                            if (!scope.avgRating){ //hides template if no product rating or product rating is 0
                                scope.show = false;
                            } else {
                                //console.log(typeof scope.rating); glyphicon glyphicon-remove
                                var fullStar = '<span class="glyphicon glyphicon-star rating-star"></span>';
                                var halfStar = '<span class="glyphicon glyphicon-star half-star rating-star"></span>';
                                var ratingNum = Math.floor(scope.avgRating);
                                console.log("scope.avgRating " + scope.avgRating);
                                var ratingHTML = "";
                                for (var i = 0; i < ratingNum; i++ ){ //updates array for whole stars
                                    ratingHTML = ratingHTML + fullStar;
                                }
                                if(scope.rating % 1 !== 0){ //updates array for half star if needed
                                    ratingHTML = ratingHTML + halfStar;
                                }
                                ratingHTML = ratingHTML + " overall";
                                scope.ratingHTML = ratingHTML;
                            }
                    });
                }
            };
        }]
    );
