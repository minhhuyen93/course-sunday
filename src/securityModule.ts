import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Layout } from "./defaultPage";
import {SecurityRoures} from "./securityRoute";
import {Categories} from "./categories";
import {AddCategory} from "./addCategory";
import {EditCategory} from "./editCategory";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoures],
    declarations: [Layout, Categories, AddCategory, EditCategory],
    bootstrap: [Layout]
})
export class SecurityModule { }
