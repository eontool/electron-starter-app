"use strict";
class TemplateService {
    constructor($templateCache) {
        this.$templateCache = $templateCache;
        //console.log($templateCache.info());
    }
    load(file) {
        return new Promise((resolve, reject) => {
            let template = this.$templateCache.get(file);
            if (template) {
                resolve(template);
            }
            else {
                reject(false);
            }
        });
    }
}
TemplateService.$inject = ['$templateCache'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TemplateService;
