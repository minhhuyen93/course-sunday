import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Layout } from "../../../src/defaultPage";
import { SecurityRoures } from "./securityRoute";
import { Categories } from "./_share/category/categories";
import { AddCategory } from "./_share/category/addCategory";
import { EditCategory } from "./_share/category/editCategory";
import { CategorySummary } from "./_share/components/categorySummary";
import { ChangeColor } from "./_share/components/changeColor";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { ApplicationRef } from "@angular/core";
import { CommonModule } from "../common/commonModule";
import helpFacade from "../common/index";
import appConfig from "../../../src/config/appConfig";
@NgModule({
    imports: [BrowserModule, HttpModule, CommonModule, SecurityRoures],
    declarations: [Layout, Categories, AddCategory, EditCategory, CategorySummary, ChangeColor],
    bootstrap: [Layout],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule {
    constructor(ref: ApplicationRef) {
        helpFacade.appHelper.setInjector(ref["_injector"]);
        helpFacade.appHelper.setConfig(appConfig);
    }
}
