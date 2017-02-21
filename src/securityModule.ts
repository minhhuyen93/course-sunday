import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Layout } from "./defaultPage";
import {SecurityRoures} from "./securityRoute";
import {Categories} from "./categories";
import {AddCategory} from "./addCategory";
import {EditCategory} from "./editCategory";
import {CategoryService} from "./categoryService";
import {CategorySummary} from "./categorySummary";
import {ChangeColor} from "./changeColor";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoures],
    declarations: [Layout, Categories, AddCategory, EditCategory, CategorySummary, ChangeColor],
    providers: [CategoryService],
    bootstrap: [Layout]
})
export class SecurityModule { }
