import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { CategoryService } from "./categoryService";
import { CategorySummary } from "./categorySummary";
import { ICategoryService } from "./iCategoryService";
import { IoCNames } from "./enum";
@Component({
    templateUrl: "src/category.html"
})

export class Categories {
    private router: Router;
    public categories: Array<any> = [];
    public selectedCategory: any;
    constructor(router: Router) {
        this.router = router;
        let self = this;
        let categoryService: ICategoryService = window.ioc.resolve(IoCNames.ICategoryService);
        categoryService.getCategories().then((categories: Array<any>) => {
            self.categories = categories;
        })
            .error(function (errors: any) { console.log("Error here:", errors) });
    }
    public onEditUserClicked(id: any) {
        this.router.navigate(["/editCategory", id]);
    }

    public onSummaryClicked(category: any) {
        this.selectedCategory = category;
    }

    public onBindingChanged(newdata: any) {
        this.selectedCategory.key = newdata;
    }
}