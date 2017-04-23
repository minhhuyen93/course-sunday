///<reference path="extension.d.ts"/>//
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./modules/security/securityModule";
import helperFacade from "./modules/common/index";
import appConfig from "./config/appConfig";
import { AppModule } from "./appModule";
helperFacade.iocHelper.configIoC(appConfig).then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule)
});
