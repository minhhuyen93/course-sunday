import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Categories } from "./_share/category/categories";
import { AddCategory } from "./_share/category/addCategory";
import { EditCategory } from "./_share/category/editCategory";
let routes: Routes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: "categories", component: Categories },
    { path: "addCategory", component: AddCategory },
    { path: "editCategory/:id", component: EditCategory }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SecurityRoures { }