"use strict";
function Routes($stateProvider, $urlRouterProvider, $httpProvider) {
    //console.log("routesConfig");
    let viewPath = 'views/';
    let authState = {
        name: 'authState',
        url: '/',
        fileName: 'auth/main.html',
        resolve: {
            template: ['TemplateService', (loadTemplate) => {
                    return loadTemplate.load(authState.fileName).then((data) => {
                        return data;
                    }, (error) => {
                        console.log(error);
                    });
                }]
        },
        templateProvider: (template) => {
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
