"use strict";
class MainController {
    constructor($timeout, Constants) {
        this.$timeout = $timeout;
        this.Constants = Constants;
    }
}
MainController.$inject = [
    '$timeout',
    'Constants'
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainController;
