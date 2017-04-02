import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"form-input",
    templateUrl:"src/modules/common/components/formInput.html"
})

export class FormInput{
    @Input() value:any;
    @Input() label:any;
    @Output() valueChange: any = new EventEmitter<any>();
    public onValuedChanged(){
        this.valueChange.emit(this.value);
    }
}