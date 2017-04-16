"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const categories_1 = require("./_share/category/categories");
const addCategory_1 = require("./_share/category/addCategory");
const editCategory_1 = require("./_share/category/editCategory");
let routes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: "categories", component: categories_1.Categories },
    { path: "addCategory", component: addCategory_1.AddCategory },
    { path: "editCategory/:id", component: editCategory_1.EditCategory }
];
let SecurityRoutes = class SecurityRoutes {
};
SecurityRoutes = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], SecurityRoutes);
exports.SecurityRoutes = SecurityRoutes;
//# sourceMappingURL=securityRoute.js.map