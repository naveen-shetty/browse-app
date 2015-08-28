angular.module('productApp').directive('starRatings',
    ['$sce' , function($sce) {
        return {
            restrict: 'EA',
            template: '<div class="star-rating" ng-show="show" ng-bind-html="ratingHTML"></div>',
            scope: {
                rating: '='
            },
            link: function(scope, element, attrs){
                // whole star = A, empty star = c, half star = B

                scope.$watch('rating', function() {
                    scope.show = true; //sets template to show

                        if (!scope.rating){ //hides template if no product rating or product rating is 0
                            scope.show = false;

                        } else {
                            //console.log(typeof scope.rating);

                            var fullStar = '<span class="glyphicon glyphicon-star rating-star"></span>';
                            var halfStar = '<span class="glyphicon glyphicon-star half-star rating-star"></span>';

                            var ratingNum = Math.floor(scope.rating);
                            var ratingHTML = "";

                            for (var i = 0; i < ratingNum; i++ ){ //updates array for whole stars
                                ratingHTML = ratingHTML + fullStar;
                            }

                            if(scope.rating % 1 !== 0){ //updates array for half star if needed
                                ratingHTML = ratingHTML + halfStar;
                            }
                            ratingHTML = ratingHTML + " overall";
                            scope.ratingHTML = $sce.trustAsHtml(ratingHTML);
                        }
                });
            }
        };
    }]
);