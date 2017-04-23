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
const router_1 = require("@angular/router");
const common_1 = require("@app/common");
const addCategoryModel_1 = require("./addCategoryModel");
let AddCategory = class AddCategory extends common_1.BasePage {
    constructor(router) {
        super(router);
        this.model = new addCategoryModel_1.AddCategoryModel();
    }
    onCancelClicked() {
        this.navigate("/categories");
    }
    onSaveClicked() {
        let self = this;
        let categoryService = window.ioc.resolve(common_1.IoCNames.ICategoryService);
        self.categoryService.create(self.model).then(function () {
            self.navigate("/categories");
        });
    }
};
AddCategory = __decorate([
    core_1.Component({
        templateUrl: "src/modules/security/_share/category/addCategory.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AddCategory);
exports.AddCategory = AddCategory;
//# sourceMappingURL=addCategory.js.map