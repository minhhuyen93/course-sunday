class AppHelpper{
    public injector:IInjector = null;
    public setInjector(injector:IInjector){
        this.injector = injector;
    }
}

let appHelpper= new AppHelpper();
export default appHelpper;

export interface IInjector{
    get(type:any):any;
}