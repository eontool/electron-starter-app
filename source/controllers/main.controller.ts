export default class MainController{

    static $inject = [
        '$timeout',
        'Constants'
    ];

    constructor(
        private $timeout: angular.ITimeoutService,
        private Constants: myApp.Constants
    ){

    }

}