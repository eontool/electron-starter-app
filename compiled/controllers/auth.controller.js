"use strict";
class AuthCtrl {
    constructor($http, $timeout, Animation, $location, appConstants) {
        this.$http = $http;
        this.$timeout = $timeout;
        this.Animation = Animation;
        this.$location = $location;
        this.appConstants = appConstants;
        //methods
        this.disableButtons = false;
        this.animations = this.Animation;
        this.signinFn = () => {
            //this.Animation.loading(true);
            //this.disableButtons = true;
            this.$http.post(this.appConstants.serverUrl + '/auth/login', this.signin).then((response) => {
                console.log(response);
                this.$timeout(() => {
                    this.$location.path('/home');
                }, 1000);
            }, (error) => {
                console.log(error);
                if (error.status === 401) {
                }
                else {
                }
                //this.Animation.loading(false);
                //this.disableButtons = false;
            });
        };
        let vm = this;
    }
}
AuthCtrl.$inject = [
    "$http",
    '$timeout',
    'Animation',
    '$location',
    'Constants'
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthCtrl;
