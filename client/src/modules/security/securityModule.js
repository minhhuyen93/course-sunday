"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const defaultPage_1 = require("../../../src/defaultPage");
const securityRoute_1 = require("./securityRoute");
const categories_1 = require("./_share/category/categories");
const addCategory_1 = require("./_share/category/addCategory");
const editCategory_1 = require("./_share/category/editCategory");
const categorySummary_1 = require("./_share/components/categorySummary");
const changeColor_1 = require("./_share/components/changeColor");
const core_2 = require("@angular/core");
const http_1 = require("@angular/http");
const core_3 = require("@angular/core");
const commonModule_1 = require("../common/commonModule");
const index_1 = require("../common/index");
const appConfig_1 = require("../../../src/config/appConfig");
let SecurityModule = class SecurityModule {
    constructor(ref) {
        index_1.default.appHelper.setInjector(ref["_injector"]);
        index_1.default.appHelper.setConfig(appConfig_1.default);
    }
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, commonModule_1.CommonModule, securityRoute_1.SecurityRoures],
        declarations: [defaultPage_1.Layout, categories_1.Categories, addCategory_1.AddCategory, editCategory_1.EditCategory, categorySummary_1.CategorySummary, changeColor_1.ChangeColor],
        bootstrap: [defaultPage_1.Layout],
        schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA]
    }),
    __metadata("design:paramtypes", [core_3.ApplicationRef])
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map