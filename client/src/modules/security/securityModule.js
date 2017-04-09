"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const securityRoute_1 = require("./securityRoute");
const categories_1 = require("./_share/category/categories");
const addCategory_1 = require("./_share/category/addCategory");
const editCategory_1 = require("./_share/category/editCategory");
const categorySummary_1 = require("./_share/components/categorySummary");
const changeColor_1 = require("./_share/components/changeColor");
const core_2 = require("@angular/core");
const common_2 = require("@app/common");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, common_2.AppCommonModule, securityRoute_1.SecurityRoutes],
        declarations: [categories_1.Categories, addCategory_1.AddCategory, editCategory_1.EditCategory, categorySummary_1.CategorySummary, changeColor_1.ChangeColor],
        schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map