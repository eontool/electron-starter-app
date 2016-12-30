//Export here all custom type definitions and will be available globally.

interface Window {
    $: Object;
    jQuery: Object;
}

declare namespace myApp {

    interface Constants extends Object {
        appName: string;
        appTitle: string;
        appVersion: string;
        serverUrl: string;
    }

    interface DemoDirective extends angular.IScope {
        title: string;
    }

    interface TemplateService {
        load: (file: string) => Promise<string>
    }

    interface Animation {
        loading: (key: boolean) => void;
    }

}