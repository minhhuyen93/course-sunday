"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../modules/common/index");
const categoryService_1 = require("../modules/security/_share/services/categoryService");
const common_1 = require("@app/common");
const default_1 = require("@app/theme/default");
const enum_1 = require("./enum");
let appConfig = {
    modules: [enum_1.ModuleNames.Security],
    layOut: default_1.Layout,
    rootUrl: "http://localhost:62729/",
    ioc: [
        { name: common_1.IoCNames.ICategoryService, instance: categoryService_1.CategoryService, lifeCycle: common_1.IoCLifeCycle.Singleton },
        { name: common_1.IoCNames.IConnector, instance: index_1.HttpConnector, lifeCycle: common_1.IoCLifeCycle.Transient }
    ]
};
exports.default = appConfig;
//# sourceMappingURL=appConfig.js.map