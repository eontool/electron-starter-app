export default class GenericInterceptor implements angular.IHttpInterceptor {

  static $inject = [
    '$q',
    'Animation'
  ];

  constructor(
    private $q: angular.IQService,
    private Animation: myApp.Animation
  ) {
    //console.log('Interceptor constructor.');
  }

  static factory(
    $q: angular.IQService,
    Animation: myApp.Animation
  ): GenericInterceptor {
    //console.log("factory!");
    return new GenericInterceptor($q, Animation);
  }

  request = (config: ng.IRequestConfig): ng.IRequestConfig => {
    //console.info('Request:', config);
    this.Animation.loading(true);
    return config;
  };

  requestError = <T>(rejection: angular.IHttpPromiseCallbackArg<T>): angular.IPromise<T> => {
    this.Animation.loading(false);
    return this.$q.when(rejection);
  }

  response = <T>(response: angular.IHttpPromiseCallbackArg<T>): angular.IPromise<T> => {
    this.Animation.loading(false);
    return this.$q.when(response);
  }

  responseError = <T>(rejection: angular.IHttpPromiseCallbackArg<T>): angular.IPromise<T> => {
    this.Animation.loading(false);
    return this.$q.when(rejection);
  }

}