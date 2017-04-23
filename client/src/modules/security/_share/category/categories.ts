import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { IoCNames, BasePage } from "@app/common";
import { CategoryService } from "../services/categoryService";
import { CategorySummary } from "../components/categorySummary";
import { ICategoryService } from "../services/iCategoryService";
@Component({
    templateUrl: "src/modules/security/_share/category/category.html"
})

export class Categories extends BasePage {
    public categories: Array<any> = [];
    public selectedCategory: any;
    constructor(router: Router) {
        super(router);
        let self = this;
        let categoryService: ICategoryService = window.ioc.resolve(IoCNames.ICategoryService);
        categoryService.getCategories().then((categories: Array<any>) => {
            self.categories = categories;
        })
            .error(function (errors: any) { console.log("Error here:", errors) });
    }
    public onEditUserClicked(id: any) {
        this.navigate("editCategory",id)
    }

    public onSummaryClicked(category: any) {
        this.selectedCategory = category;
    }

    public onBindingChanged(newdata: any) {
        this.selectedCategory.key = newdata;
    }
}