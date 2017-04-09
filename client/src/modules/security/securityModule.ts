import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SecurityRoutes } from "./securityRoute";
import { Categories } from "./_share/category/categories";
import { AddCategory } from "./_share/category/addCategory";
import { EditCategory } from "./_share/category/editCategory";
import { CategorySummary } from "./_share/components/categorySummary";
import { ChangeColor } from "./_share/components/changeColor";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppCommonModule } from "@app/common";
@NgModule({
    imports: [CommonModule, AppCommonModule, SecurityRoutes],
    declarations: [Categories, AddCategory, EditCategory, CategorySummary, ChangeColor],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule {
}
