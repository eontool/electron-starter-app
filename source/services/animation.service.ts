// import * as $ from 'jquery';
// import * as angular from 'angular';

export default class Animation {

    static $inject = [
        '$timeout'
    ];

    private loadingContainer: JQuery = $('#loading');
    // private buttons: JQuery;

    constructor(
        private $timeout: angular.ITimeoutService
    ) {

        $timeout(function () {
            console.log("Running after the digest cycle");
            //let button = $('#myButton');
            //button.attr('disabled', '');
        }, 500, false);

    }

    loading(value: boolean): void {
        let buttons: JQuery;
        buttons = $('button[type="submit"]');
        if (value) {
            buttons.attr('disabled', 'true');
            this.loadingContainer.fadeIn(250);
            console.log('animation start!');
        }
        else {
            this.loadingContainer.fadeOut(250);
            buttons.removeAttr('disabled');
            console.log('animation stop!');
        }
    }

}