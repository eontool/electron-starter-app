import { TransitionService } from 'angular-ui-router';

export default function Transitions(
    $location: angular.ILocationService,
    $transitions: TransitionService,
    Animation: myApp.Animation
) {

    //console.log("runConfig");

    $transitions.onBefore({}, (): void => {
        //console.log("onBefore");
        Animation.loading(true);
    });

    $transitions.onStart({}, (): void => {
        //console.log("onStart");

    });

    $transitions.onFinish({}, (): void => {
        //console.log('onFinish');
    });

    $transitions.onError({}, (error): void => {
    });

    $transitions.onSuccess({}, (): void => {
        //console.log("onSuccess");
        Animation.loading(false);
    });

}