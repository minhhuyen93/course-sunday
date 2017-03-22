import { IObjectBuilder } from "../builder/iobjectBuilder";
import { SingletonObjectBuilder } from "../builder/singletonObjectBuilder";
import { TransientObjectBuilder } from "../builder/transientObjectBuilder";
import { IoCLifeCycle } from "./enum";
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

    public resolve(name: string) {
        let declaration = this.registrations.firstOrDefault((item: any) => { return item.name == name });
        let objectBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
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