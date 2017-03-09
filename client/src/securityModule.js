"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const defaultPage_1 = require("./defaultPage");
const securityRoute_1 = require("./securityRoute");
const categories_1 = require("./categories");
const addCategory_1 = require("./addCategory");
const editCategory_1 = require("./editCategory");
const categoryService_1 = require("./categoryService");
const categorySummary_1 = require("./categorySummary");
const changeColor_1 = require("./changeColor");
const page_1 = require("./page");
const core_2 = require("@angular/core");
const formInput_1 = require("./formInput");
const http_1 = require("@angular/http");
const httpConnector_1 = require("./httpConnector");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, securityRoute_1.SecurityRoures, http_1.HttpModule],
        declarations: [defaultPage_1.Layout, categories_1.Categories, addCategory_1.AddCategory, editCategory_1.EditCategory, categorySummary_1.CategorySummary, changeColor_1.ChangeColor, page_1.Page, formInput_1.FormInput],
        providers: [categoryService_1.CategoryService, httpConnector_1.HttpConnector],
        bootstrap: [defaultPage_1.Layout],
        schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map