"use strict";
//Common libraries
const jQuery = require("jquery");
const angular = require("angular");
require("angular-ui-router");
window.$ = window.jQuery = jQuery;
//Constants
const app_constant_1 = require("./constants/app.constant");
//Configuration
const routes_config_1 = require("./configuration/routes.config");
const transitions_config_1 = require("./configuration/transitions.config");
const interceptors_config_1 = require("./configuration/interceptors.config");
//Controllers
const main_controller_1 = require("./controllers/main.controller");
const auth_controller_1 = require("./controllers/auth.controller");
//Services
const animation_service_1 = require("./services/animation.service");
const template_service_1 = require("./services/template.service");
//Factories
const interceptor_factory_1 = require("./factories/interceptor.factory");
angular
    .module('MainApp', ['ui.router', 'templates'])
    .constant('Constants', app_constant_1.default())
    .config(routes_config_1.default)
    .config(interceptors_config_1.default)
    .run(transitions_config_1.default)
    .service('Animation', animation_service_1.default)
    .service('TemplateService', template_service_1.default)
    .controller('MainController', main_controller_1.default)
    .controller('AuthCtrl', auth_controller_1.default)
    .factory('GenericInterceptor', interceptor_factory_1.default.factory);
