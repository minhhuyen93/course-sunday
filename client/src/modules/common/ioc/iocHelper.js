"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("../models/promise");
const iocFactory_1 = require("./iocFactory");
let iocHelper = {
    configIoC: configIoC
};
exports.default = iocHelper;
function configIoC(appConfig) {
    let def = promise_1.PromiseFactory.create();
    window.ioc = iocFactory_1.IoCFactory.create();
    window.ioc.import(appConfig.ioc);
    def.resolve({});
    return def;
}
//# sourceMappingURL=iocHelper.js.map