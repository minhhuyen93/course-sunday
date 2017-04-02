"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppHelper {
    constructor() {
        this.injector = null;
        this.config = null;
    }
    setConfig(config) {
        this.config = config;
    }
    setInjector(injector) {
        this.injector = injector;
    }
}
let appHelpper = new AppHelper();
exports.default = appHelpper;
//# sourceMappingURL=appHelper.js.map