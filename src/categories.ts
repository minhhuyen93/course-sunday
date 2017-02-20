import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import {CategoryService} from "./categoryService";
@Component({
    templateUrl: "src/category.html"
})

export class Categories {
    private router: Router;
    public categories: Array<any> = [];
    public selectedCategory: any;
    constructor(router: Router, categoryService: CategoryService) {
        this.router = router;
        this.categories = categoryService.getCategories();
    }
    public onEditUserClicked(id: any) {
        this.router.navigate(["/editCategory", id]);
    }

    public onSummaryClicked(category:any){
        this.selectedCategory = category;
    }
}