import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import {SecurityRoures} from "./securityRoute";
import {Categories} from "./categories";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoures],
    declarations: [DefaultPage, Categories],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }
