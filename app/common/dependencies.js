//Simple Configuration file Only
// Internal apps
angular.module('internalApps', [ 'productApp' ,  'addToCart' ]);
// external apps
angular.module('vendorApps', [  'ui.router' ,
    'templateCache', 'ui.bootstrap' , 'ui.bootstrap.tpls', 'pasvaz.bindonce' ]);


