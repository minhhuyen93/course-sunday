import {Component, Input} from "@angular/core";
@Component({
    selector:"form-button-primary",
    template:"<form-button [cls]='cls' [label]='label'></form-button>"
})

export class FormButtonPrimary{
    @Input() cls:string = "btn-primary";
    @Input() label:any;
}