import { HttpConnector } from "../modules/common/index";
import { CategoryService } from "../modules/security/_share/services/categoryService";
import { IoCNames, IoCLifeCycle } from "@app/common";
import { Layout } from "@app/theme/default";
import { ModuleNames } from "./enum";

interface IAppConfig{
    ioc:Array<any>,
    modules:Array<any>;
    layOut: any;
    rootUrl: string;
}

let appConfig : IAppConfig = {
    modules: [ModuleNames.Security],
    layOut: Layout,
    rootUrl: "http://localhost:62729/",
    ioc: []
}
export default appConfig;