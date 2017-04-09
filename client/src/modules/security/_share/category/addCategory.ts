import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BasePage, IoCNames } from "@app/common";
import { CategoryService } from "../services/categoryService";
import { AddCategoryModel } from "./addCategoryModel";
@Component({
    templateUrl: "src/modules/security/_share/category/addCategory.html"
})

export class AddCategory extends BasePage {
    private categoryService: CategoryService;
    public model: AddCategoryModel = new AddCategoryModel();
    constructor(router: Router) {
        super(router);
    }
    public onCancelClicked() {
        this.navigate("/categories");
    }

    public onSaveClicked() {
        let self = this;
        let categoryService = window.ioc.resolve(IoCNames.ICategoryService);
        self.categoryService.create(self.model).then(function () {
            self.navigate("/categories");
        });
    }
}
