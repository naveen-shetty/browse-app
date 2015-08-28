exports.config =
# See docs at http://brunch.readthedocs.org/en/latest/config.html.
  modules:
    definition: false
    wrapper: false
  paths:
    public: 'public/browse-app/'
  files:
    javascripts:
      joinTo:
        'js/browseApp.js': /^app(\/|\\)(product|common)(\/|\\)/
        'js/angular.js': /^vendor(\/|\\)angular(\/|\\)/
        'js/angularExt.js': /^vendor(\/|\\)(angular-animate|angular-bootstrap|angular-resource|angular-route|angular-sanitize|angular-ui-router)(\/|\\)/
      order:
        before: [
          'app/product/productApp.js'
          'app/common/app.js'
        ]
        after: [

        ]
    stylesheets:
      joinTo:
        'css/app.css': /^app(\/|\\)/
        'css/bootstrap.css': /^bower_components(\/|\\)/
      order:
        after: [

        ]
    templates:
      joinTo:
        'js/browseApp.js': /^app(\/|\\)common(\/|\\)/
        'js/browseApp.js': /^app(\/|\\)product(\/|\\)/
  plugins:
    angular_templates:
      module: 'templateCache'
    uglify:
      mangle: true
      compress:
        global_defs:
          DEBUG: true
        pure_funcs: [ 'console.log' ]
    cleancss:
      keepSpecialComments: 0
      removeEmpty: true
    jshint:
      pattern: /^app(\/|\\).*\.js$/
      warnOnly: true

