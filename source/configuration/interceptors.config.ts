export default function Interceptors(
    $httpProvider: angular.IHttpProvider,
): void {
    $httpProvider.interceptors.push('GenericInterceptor');
    console.log('Interceptor pushed!');
}
