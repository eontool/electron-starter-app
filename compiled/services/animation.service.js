// import * as $ from 'jquery';
// import * as angular from 'angular';
"use strict";
class Animation {
    // private buttons: JQuery;
    constructor($timeout) {
        this.$timeout = $timeout;
        this.loadingContainer = $('#loading');
        $timeout(function () {
            console.log("Running after the digest cycle");
            //let button = $('#myButton');
            //button.attr('disabled', '');
        }, 500, false);
    }
    loading(value) {
        let buttons;
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
Animation.$inject = [
    '$timeout'
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Animation;
