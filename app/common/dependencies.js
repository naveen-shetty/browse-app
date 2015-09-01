//Simple Configuration file Only
// Internal apps
angular.module('internalApps', [ 'productApp' ,  'addToCart' ]);
// external apps
angular.module('vendorApps', [  'ui.router' , 'ngAnimate',
    'templateCache', 'ui.bootstrap' , 'ui.bootstrap.tpls', 'pasvaz.bindonce' ]);


