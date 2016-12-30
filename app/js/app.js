(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
//Common libraries

var jQuery = require("jquery");
var angular = require("angular");
require("angular-ui-router");
window.$ = window.jQuery = jQuery;
//Constants
var app_constant_1 = require("./constants/app.constant");
//Configuration
var routes_config_1 = require("./configuration/routes.config");
var transitions_config_1 = require("./configuration/transitions.config");
var interceptors_config_1 = require("./configuration/interceptors.config");
//Controllers
var main_controller_1 = require("./controllers/main.controller");
var auth_controller_1 = require("./controllers/auth.controller");
//Services
var animation_service_1 = require("./services/animation.service");
var template_service_1 = require("./services/template.service");
//Factories
var interceptor_factory_1 = require("./factories/interceptor.factory");
angular.module('MainApp', ['ui.router', 'templates']).constant('Constants', app_constant_1.default()).config(routes_config_1.default).config(interceptors_config_1.default).run(transitions_config_1.default).service('Animation', animation_service_1.default).service('TemplateService', template_service_1.default).controller('MainController', main_controller_1.default).controller('AuthCtrl', auth_controller_1.default).factory('GenericInterceptor', interceptor_factory_1.default.factory);

},{"./configuration/interceptors.config":2,"./configuration/routes.config":3,"./configuration/transitions.config":4,"./constants/app.constant":5,"./controllers/auth.controller":6,"./controllers/main.controller":7,"./factories/interceptor.factory":8,"./services/animation.service":9,"./services/template.service":10,"angular":"angular","angular-ui-router":"angular-ui-router","jquery":"jquery"}],2:[function(require,module,exports){
"use strict";

function Interceptors($httpProvider) {
    $httpProvider.interceptors.push('GenericInterceptor');
    console.log('Interceptor pushed!');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Interceptors;

},{}],3:[function(require,module,exports){
"use strict";

function Routes($stateProvider, $urlRouterProvider, $httpProvider) {
    //console.log("routesConfig");
    var viewPath = 'views/';
    var authState = {
        name: 'authState',
        url: '/',
        fileName: 'auth/main.html',
        resolve: {
            template: ['TemplateService', function (loadTemplate) {
                return loadTemplate.load(authState.fileName).then(function (data) {
                    return data;
                }, function (error) {
                    console.log(error);
                });
            }]
        },
        templateProvider: function templateProvider(template) {
            return template;
        }
    };
    $urlRouterProvider.otherwise('/');
    $stateProvider.state(authState);
    //Define interceptor for every http request and control loading animation
    // $httpInterceptorFactory('requestLoadingAnimation', ($q ,Animation: myApp.Animation) => {
    //     return {
    //         'request': (config:any) => {
    //         },
    //         'requestError': (rejection:any) => {
    //         },
    //         'response': (response:any) => {
    //         },
    //         'responseError': (rejection:any) => {
    //         }
    //     }
    // });
    // //register interceptor
    //$httpProvider.interceptors.push('httpRequestAnimation');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;

},{}],4:[function(require,module,exports){
"use strict";

function Transitions($location, $transitions, Animation) {
    //console.log("runConfig");
    $transitions.onBefore({}, function () {
        //console.log("onBefore");
        Animation.loading(true);
    });
    $transitions.onStart({}, function () {
        //console.log("onStart");
    });
    $transitions.onFinish({}, function () {
        //console.log('onFinish');
    });
    $transitions.onError({}, function (error) {});
    $transitions.onSuccess({}, function () {
        //console.log("onSuccess");
        Animation.loading(false);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transitions;

},{}],5:[function(require,module,exports){
"use strict";

function Constants() {
    return {
        appName: 'Mongo Desktop Client',
        appVersion: '0.1',
        serverUrl: 'http://127.0.0.1:3000'
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Constants;

},{}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthCtrl = function AuthCtrl($http, $timeout, Animation, $location, appConstants) {
    var _this = this;

    _classCallCheck(this, AuthCtrl);

    this.$http = $http;
    this.$timeout = $timeout;
    this.Animation = Animation;
    this.$location = $location;
    this.appConstants = appConstants;
    //methods
    this.disableButtons = false;
    this.animations = this.Animation;
    this.signinFn = function () {
        //this.Animation.loading(true);
        //this.disableButtons = true;
        _this.$http.post(_this.appConstants.serverUrl + '/auth/login', _this.signin).then(function (response) {
            console.log(response);
            _this.$timeout(function () {
                _this.$location.path('/home');
            }, 1000);
        }, function (error) {
            console.log(error);
            if (error.status === 401) {} else {}
            //this.Animation.loading(false);
            //this.disableButtons = false;
        });
    };
    var vm = this;
};

AuthCtrl.$inject = ["$http", '$timeout', 'Animation', '$location', 'Constants'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthCtrl;

},{}],7:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function MainController($timeout, Constants) {
    _classCallCheck(this, MainController);

    this.$timeout = $timeout;
    this.Constants = Constants;
};

MainController.$inject = ['$timeout', 'Constants'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainController;

},{}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericInterceptor = function () {
    function GenericInterceptor($q, Animation) {
        var _this = this;

        _classCallCheck(this, GenericInterceptor);

        this.$q = $q;
        this.Animation = Animation;
        this.request = function (config) {
            //console.info('Request:', config);
            _this.Animation.loading(true);
            return config;
        };
        this.requestError = function (rejection) {
            _this.Animation.loading(false);
            return _this.$q.when(rejection);
        };
        this.response = function (response) {
            _this.Animation.loading(false);
            return _this.$q.when(response);
        };
        this.responseError = function (rejection) {
            _this.Animation.loading(false);
            return _this.$q.when(rejection);
        };
        //console.log('Interceptor constructor.');
    }

    _createClass(GenericInterceptor, null, [{
        key: 'factory',
        value: function factory($q, Animation) {
            //console.log("factory!");
            return new GenericInterceptor($q, Animation);
        }
    }]);

    return GenericInterceptor;
}();

GenericInterceptor.$inject = ['$q', 'Animation'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GenericInterceptor;

},{}],9:[function(require,module,exports){
// import * as $ from 'jquery';
// import * as angular from 'angular';
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    // private buttons: JQuery;
    function Animation($timeout) {
        _classCallCheck(this, Animation);

        this.$timeout = $timeout;
        this.loadingContainer = $('#loading');
        $timeout(function () {
            console.log("Running after the digest cycle");
            //let button = $('#myButton');
            //button.attr('disabled', '');
        }, 500, false);
    }

    _createClass(Animation, [{
        key: "loading",
        value: function loading(value) {
            var buttons = void 0;
            buttons = $('button[type="submit"]');
            if (value) {
                buttons.attr('disabled', 'true');
                this.loadingContainer.fadeIn(250);
                console.log('animation start!');
            } else {
                this.loadingContainer.fadeOut(250);
                buttons.removeAttr('disabled');
                console.log('animation stop!');
            }
        }
    }]);

    return Animation;
}();

Animation.$inject = ['$timeout'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Animation;

},{}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateService = function () {
    function TemplateService($templateCache) {
        _classCallCheck(this, TemplateService);

        this.$templateCache = $templateCache;
        //console.log($templateCache.info());
    }

    _createClass(TemplateService, [{
        key: "load",
        value: function load(file) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var template = _this.$templateCache.get(file);
                if (template) {
                    resolve(template);
                } else {
                    reject(false);
                }
            });
        }
    }]);

    return TemplateService;
}();

TemplateService.$inject = ['$templateCache'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TemplateService;

},{}]},{},[1]);
