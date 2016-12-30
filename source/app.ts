//Common libraries
import * as jQuery from 'jquery';
import * as angular from 'angular';
import 'angular-ui-router';

window.$ = window.jQuery = jQuery;

//Constants
import Constants from './constants/app.constant';

//Configuration
import Routes from './configuration/routes.config';
import Transitions from './configuration/transitions.config';
import Interceptors from './configuration/interceptors.config';

//Controllers
import MainController from './controllers/main.controller';
import AuthCtrl from './controllers/auth.controller';

//Services
import Animation from './services/animation.service';
import TemplateService from './services/template.service';

//Factories
import GenericInterceptor from './factories/interceptor.factory';

angular
    .module('MainApp', ['ui.router', 'templates'])
    .constant('Constants', Constants())
    .config(Routes)
    .config(Interceptors)
    .run(Transitions)
    .service('Animation', Animation)
    .service('TemplateService', TemplateService)
    .controller('MainController', MainController)
    .controller('AuthCtrl', AuthCtrl)
    .factory('GenericInterceptor', GenericInterceptor.factory)


