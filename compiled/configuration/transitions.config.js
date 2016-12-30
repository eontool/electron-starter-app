"use strict";
function Transitions($location, $transitions, Animation) {
    //console.log("runConfig");
    $transitions.onBefore({}, () => {
        //console.log("onBefore");
        Animation.loading(true);
    });
    $transitions.onStart({}, () => {
        //console.log("onStart");
    });
    $transitions.onFinish({}, () => {
        //console.log('onFinish');
    });
    $transitions.onError({}, (error) => {
    });
    $transitions.onSuccess({}, () => {
        //console.log("onSuccess");
        Animation.loading(false);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transitions;
