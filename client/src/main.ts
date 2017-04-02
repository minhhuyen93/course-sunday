///<reference path="extension.d.ts"/>//
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {SecurityModule} from "./securityModule";
import IoCHelpper from "./iocHelpper";
import appHelpper from "./appHelpper";
IoCHelpper.configIoC().then(()=>{
platformBrowserDynamic().bootstrapModule(SecurityModule)
});
