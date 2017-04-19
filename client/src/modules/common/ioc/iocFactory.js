"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singletonObjectBuilder_1 = require("./builder/singletonObjectBuilder");
const transientObjectBuilder_1 = require("./builder/transientObjectBuilder");
const enum_1 = require("./enum");
const appHelper_1 = require("../helpers/appHelper");
class IoCFactory {
    static create() {
        return new IoCContainer();
    }
}
exports.IoCFactory = IoCFactory;
class IoCContainer {
    constructor() {
        this.registrations = [];
    }
    import(registration) {
        this.registrations = registration;
    }
    registers(registrations) {
        let self = this;
        registrations.forEach((item) => {
            self.registrations.push(item);
        });
    }
    resolve(obj) {
        if (typeof obj == "function") {
            return this.resolveAngularObject(obj);
        }
        let declaration = this.registrations.firstOrDefault((item) => { return item.name == obj; });
        let objectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
    }
    resolveAngularObject(obj) {
        return appHelper_1.default.injector.get(obj);
    }
    getObjectBuilder(declaration) {
        switch (declaration.lifeCycle) {
            case enum_1.IoCLifeCycle.Singleton:
                return new singletonObjectBuilder_1.SingletonObjectBuilder(declaration);
            default:
            case enum_1.IoCLifeCycle.Transient:
                return new transientObjectBuilder_1.TransientObjectBuilder(declaration);
        }
    }
}
exports.IoCContainer = IoCContainer;
//# sourceMappingURL=iocFactory.js.map