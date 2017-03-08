import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Layout } from "./defaultPage";
import { SecurityRoures } from "./securityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import { CategoryService } from "./categoryService";
import { CategorySummary } from "./categorySummary";
import { ChangeColor } from "./changeColor";
import { Page } from "./page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormInput } from "./formInput";
import { HttpModule } from "@angular/http";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoures, HttpModule],
    declarations: [Layout, Categories, AddCategory, EditCategory, CategorySummary, ChangeColor, Page, FormInput],
    providers: [CategoryService],
    bootstrap: [Layout],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule { }
