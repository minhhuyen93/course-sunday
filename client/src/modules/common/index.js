"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const helperFacade_1 = require("./models/helperFacade");
__export(require("./appCommonModule"));
__export(require("./ioc/enum"));
__export(require("./models/promise"));
__export(require("./connector/httpConnector"));
__export(require("./models/basePage"));
const iocHelper_1 = require("./ioc/iocHelper");
const appHelper_1 = require("./helpers/appHelper");
const routeHelper_1 = require("./helpers/routeHelper");
let helperFacade = new helperFacade_1.HelperFacade();
helperFacade.iocHelper = iocHelper_1.default;
helperFacade.appHelper = appHelper_1.default;
helperFacade.routeHelper = routeHelper_1.default;
exports.default = helperFacade;
//# sourceMappingURL=index.js.map