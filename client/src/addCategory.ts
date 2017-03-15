import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CategoryService} from "./categoryService";
@Component({
    templateUrl: "src/addCategory.html"
})

export class AddCategory{
    private router:Router;
    private categoryService: CategoryService;
    public category:any ={}
    constructor (router:Router, categoryService:CategoryService){
        this.router = router;
        this.categoryService = categoryService;
    }
    public onCancelClicked(){
        this.router.navigate(["/categories"]);
    }

    public onSaveClicked(){
        let self = this;
        self.categoryService.create(self.category).then(function(){
            self.router.navigate(["/categories"]);
        });
    }
}
