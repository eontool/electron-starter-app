export default class TemplateService {

    static $inject = ['$templateCache'];

    constructor(
        private $templateCache: angular.ITemplateCacheService
    ) {
        //console.log($templateCache.info());
    }
    public load(file: string): Promise<string> {
        return new Promise((resolve, reject) => {
            let template: {} = this.$templateCache.get(file);
            if (template) {
                resolve(template);
            }
            else {
                reject(false);
            }
        });
    }

}