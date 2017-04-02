import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"category-summary",
    templateUrl: "src/modules/security/_share/components/categorySummary.html"
})

export class CategorySummary{
    @Input() data:any = null;
    @Output() onDataChanged: any = new EventEmitter<string>();
    public onValueChanged(newKey:any){
        this.data = newKey;
        this.onDataChanged.emit(this.data);
    }
}