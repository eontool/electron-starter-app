export default class AuthCtrl {

    static $inject = [
        "$http",
        '$timeout',
        'Animation',
        '$location',
        'Constants'
    ];



    constructor(
        private $http: angular.IHttpService,
        private $timeout: angular.ITimeoutService,
        private Animation: myApp.Animation,
        private $location: angular.ILocationService,
        private appConstants: appConstants
    ) {

        let vm = this;

    }

    
    //methods
    private disableButtons = false;
    private animations = this.Animation;
    private signin: angular.IScope;
    private register: angular.IScope;
    private recover: angular.IScope;
    
    public signinFn = () => {
        //this.Animation.loading(true);
        //this.disableButtons = true;
        this.$http.post(this.appConstants.serverUrl + '/auth/login', this.signin).then(
            (response) => {
                console.log(response);
                this.$timeout(() => {
                    this.$location.path('/home');
                }, 1000);
            },
            (error) => {
                console.log(error);
                if (error.status === 401) {
                }
                else {
                }
                //this.Animation.loading(false);
                //this.disableButtons = false;
            }
        );
    }

}