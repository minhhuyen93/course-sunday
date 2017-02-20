import {Component, Input} from "@angular/core";
@Component({
    selector:"category-summary",
    templateUrl: "src/categorySummary.html"
})

export class CategorySummary{
    @Input() data:any = null;
}