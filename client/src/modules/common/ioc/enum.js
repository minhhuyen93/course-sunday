"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCNames = {
    ICategoryService: "categoryService",
    IConnector: "HttpConnector"
};
var IoCLifeCycle;
(function (IoCLifeCycle) {
    IoCLifeCycle[IoCLifeCycle["Singleton"] = 0] = "Singleton";
    IoCLifeCycle[IoCLifeCycle["Transient"] = 1] = "Transient";
})(IoCLifeCycle = exports.IoCLifeCycle || (exports.IoCLifeCycle = {}));
//# sourceMappingURL=enum.js.map