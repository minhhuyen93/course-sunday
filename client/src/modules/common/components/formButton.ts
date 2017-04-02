import {Component, Input} from "@angular/core";
@Component({
    selector:"form-button",
    templateUrl:"src/modules/common/components/formButton.html"
})

export class FormButton{
    @Input() cls:string = "btn-default";
    @Input() label:any;
}