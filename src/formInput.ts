import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"form-input",
    templateUrl:"src/formInput.html"
})

export class FormInput{
    @Input() value:any;
    @Output() valueChange: any = new EventEmitter<any>();
    public onValuedChanged(){
        this.valueChange.emit(this.value);
    }
}