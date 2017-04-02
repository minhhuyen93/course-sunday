import { Promise, PromiseFactory } from "../models/promise";
import { IoCFactory } from "./iocFactory";
let iocHelper = {
    configIoC: configIoC
}
export default iocHelper;

function configIoC(appConfig:any): Promise {
    let def = PromiseFactory.create();

    window.ioc = IoCFactory.create();
    window.ioc.import(appConfig.ioc);
    def.resolve({});
    return def;
}