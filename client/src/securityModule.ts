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
import {HttpConnector} from "./httpConnector";
import {HorizalForm} from "./horizalForm";
import {FormButton} from "./formButton";
import {FormButtonPrimary} from "./formButtonPrimary";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoures, HttpModule],
    declarations: [Layout, Categories, AddCategory, EditCategory, CategorySummary, ChangeColor, Page, FormInput, HorizalForm, FormButton, FormButtonPrimary],
    providers: [CategoryService, HttpConnector],
    bootstrap: [Layout],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule { }
