import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import appConfig from "./config/appConfig";
import helpFacade from "@app/common";

let routes:any = helpFacade.routeHelper.getModuleRoutes(appConfig.modules);

@NgModule({
    declarations: [appConfig.layOut],
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [appConfig.layOut],
})
export class AppModule {
    constructor(ref: ApplicationRef) {
        helpFacade.appHelper.setInjector(ref["_injector"]);
        helpFacade.appHelper.setConfig(appConfig);
    }
}