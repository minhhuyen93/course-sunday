import { IObjectBuilder } from "./builder/iobjectBuilder";
import { SingletonObjectBuilder } from "./builder/singletonObjectBuilder";
import { TransientObjectBuilder } from "./builder/transientObjectBuilder";
import { IoCLifeCycle } from "./enum";
import appHelper from "../helpers/appHelper";
export class IoCFactory {
    public static create(): IoCContainer {
        return new IoCContainer();
    }
}

export class IoCContainer {
    private registrations: Array<any>;
    constructor() {
        this.registrations = [];
    }
    public import(registration: Array<any>) {
        this.registrations = registration;
    }

    public resolve(obj: any) {
        if (typeof obj == "function") {
            return this.resolveAngularObject(obj);
        }
        let declaration = this.registrations.firstOrDefault((item: any) => { return item.name == obj });
        let objectBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
    }

    private resolveAngularObject(obj: any) {
        return appHelper.injector.get(obj);
    }

    private getObjectBuilder(declaration: any) {
        switch (declaration.lifeCycle) {
            case IoCLifeCycle.Singleton:
                return new SingletonObjectBuilder(declaration);
            default:
            case IoCLifeCycle.Transient:
                return new TransientObjectBuilder(declaration);
        }
    }
}