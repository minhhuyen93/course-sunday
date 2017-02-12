import {Router, ActivatedRoute} from "@angular/router";
import {Component} from "@angular/core";
@Component({
    templateUrl: "src/category.html"
})

export class Categories {
    private router: Router;
    constructor(router: Router){
        this.router = router;
    }
    public onEditUserClicked(id:any){
        this.router.navigate(["/editCategory",id]);
    }
}