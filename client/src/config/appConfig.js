"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("@app/theme/default");
const enum_1 = require("./enum");
let appConfig = {
    modules: [enum_1.ModuleNames.Security],
    layOut: default_1.Layout,
    rootUrl: "http://localhost:62729/",
    ioc: []
};
exports.default = appConfig;
//# sourceMappingURL=appConfig.js.map