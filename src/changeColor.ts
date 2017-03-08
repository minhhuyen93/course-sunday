import {Directive, ElementRef, Input} from "@angular/core";
@Directive({
    selector:"[changeColor]"
})

export class ChangeColor{
    @Input("changeColor") color:string;
    private ui: ElementRef;
    constructor(ui:ElementRef){
        this.ui = ui;
    }
    ngAfterViewInit(){
        this.ui.nativeElement.style.backgroundColor = this.color;
    }
}