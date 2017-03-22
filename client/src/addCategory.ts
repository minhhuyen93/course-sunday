import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CategoryService} from "./categoryService";
import {AddCategoryModel} from "./addCategoryModel";
import {BasePage} from "./basePage";
@Component({
    templateUrl: "src/addCategory.html"
})

export class AddCategory extends BasePage{
    private categoryService: CategoryService;
    public model:AddCategoryModel = new AddCategoryModel();
    constructor (router:Router, categoryService:CategoryService){
        // this.router = router;
        super(router);
        this.categoryService = categoryService;
    }
    public onCancelClicked(){
        this.navigate("/categories");
    }   

    public onSaveClicked(){
        let self = this;
        self.categoryService.create(self.model).then(function(){
            self.navigate("/categories");
        });
    }
}
