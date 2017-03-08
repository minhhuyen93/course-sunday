import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import {CategoryService} from "./categoryService";
import {CategorySummary} from "./categorySummary"
@Component({
    templateUrl: "src/category.html"
})

export class Categories {
    private router: Router;
    public categories: Array<any> = [];
    public selectedCategory: any;
    constructor(router: Router, categoryService: CategoryService) {
        this.router = router;
        let self = this;
        categoryService.getCategories().subscribe((categories:Array<any>)=>{
            self.categories = categories;
        });
    }
    public onEditUserClicked(id: any) {
        this.router.navigate(["/editCategory", id]);
    }

    public onSummaryClicked(category:any){
        this.selectedCategory = category;
    }

    public onBindingChanged(newdata:any){
        this.selectedCategory.key = newdata;
    }
}