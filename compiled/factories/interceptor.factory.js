"use strict";
class GenericInterceptor {
    constructor($q, Animation) {
        this.$q = $q;
        this.Animation = Animation;
        this.request = (config) => {
            //console.info('Request:', config);
            this.Animation.loading(true);
            return config;
        };
        this.requestError = (rejection) => {
            this.Animation.loading(false);
            return this.$q.when(rejection);
        };
        this.response = (response) => {
            this.Animation.loading(false);
            return this.$q.when(response);
        };
        this.responseError = (rejection) => {
            this.Animation.loading(false);
            return this.$q.when(rejection);
        };
        //console.log('Interceptor constructor.');
    }
    static factory($q, Animation) {
        //console.log("factory!");
        return new GenericInterceptor($q, Animation);
    }
}
GenericInterceptor.$inject = [
    '$q',
    'Animation'
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GenericInterceptor;
