"use strict";
function Interceptors($httpProvider) {
    $httpProvider.interceptors.push('GenericInterceptor');
    console.log('Interceptor pushed!');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Interceptors;
