var addToCart = angular.module('addToCart' ,[]);

addToCart.directive('atcButton', ['$modal' , function($modal) {
        return {
            restrict: 'EA',
            replace:true,
            template: '<button type="button" class="btn btn-danger btn-atc" ng-click="doATC()">ADD TO CART</button>',
            scope: {
                image   : '=img',
                qty     : '=qty',
                title   :'=title'
            },
            link: function (scope, element, attrs) {

                scope.doATC =function(){

                    var prd ={
                        image   : scope.image,
                        qty     : scope.qty,
                        title   : scope.title
                    };

                    scope.prd = prd;

                    var modalInstance = $modal.open({
                        templateUrl: 'app/addtocart/confirmAtc.html',
                        scope   : scope
                    });

                };

            }
        };
    }]
);
