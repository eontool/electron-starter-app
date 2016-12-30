export default function Routes(
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider,
    $httpProvider: angular.IHttpProvider
    ) {

    //console.log("routesConfig");

    let viewPath: string = 'views/';

    let authState = {
        name: 'authState',
        url: '/',
        fileName: 'auth/main.html',
        resolve: {
            template: ['TemplateService', (loadTemplate: myApp.TemplateService) => {
                return loadTemplate.load(authState.fileName).then(
                    (data) => {
                        return data;
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            }]
        },
        templateProvider: (template: string) => {
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