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
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const common_1 = require("@app/common");
let Categories = class Categories extends common_1.BasePage {
    constructor(router) {
        super(router);
        this.categories = [];
        let self = this;
        let categoryService = window.ioc.resolve(common_1.IoCNames.ICategoryService);
        categoryService.getCategories().then((categories) => {
            self.categories = categories;
        })
            .error(function (errors) { console.log("Error here:", errors); });
    }
    onEditUserClicked(id) {
        this.navigate("editCategory", id);
    }
    onSummaryClicked(category) {
        this.selectedCategory = category;
    }
    onBindingChanged(newdata) {
        this.selectedCategory.key = newdata;
    }
};
Categories = __decorate([
    core_1.Component({
        templateUrl: "src/modules/security/_share/category/category.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Categories);
exports.Categories = Categories;
//# sourceMappingURL=categories.js.map