import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
    templateUrl: "src/editCategory.html",
})
export class EditCategory{
    private routeParams: ActivatedRoute;
    constructor(route: ActivatedRoute){
        this.routeParams = route;
        console.log("Id:", route.params["value"].id);
    }
}