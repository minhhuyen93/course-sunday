"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../modules/common/index");
const categoryService_1 = require("../modules/security/_share/services/categoryService");
const index_2 = require("../modules/common/index");
let appConfig = {
    rootUrl: "http://localhost:62729/",
    ioc: [
        { name: index_2.IoCNames.ICategoryService, instance: categoryService_1.CategoryService, lifeCycle: index_2.IoCLifeCycle.Singleton },
        { name: index_2.IoCNames.IConnector, instance: index_1.HttpConnector, lifeCycle: index_2.IoCLifeCycle.Transient }
    ]
};
exports.default = appConfig;
//# sourceMappingURL=appConfig.js.map