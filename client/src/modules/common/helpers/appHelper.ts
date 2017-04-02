class AppHelper {
    public injector: IInjector = null;
    public config: IAppConfig = null;
    public setConfig(config: IAppConfig) {
        this.config = config;
    }
    public setInjector(injector: IInjector) {
        this.injector = injector;
    }
}

let appHelpper = new AppHelper();
export default appHelpper;

export interface IInjector {
    get(type: any): any;
}
export interface IAppConfig {
    rootUrl:string;
}