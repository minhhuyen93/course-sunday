import { HttpConnector } from "../modules/common/index";
import { CategoryService } from "../modules/security/_share/services/categoryService";
import { IoCNames, IoCLifeCycle } from "@app/common";
import { Layout } from "@app/theme/default";
let appConfig = {
    layOut: Layout,
    rootUrl: "http://localhost:62729/",
    ioc: [
        { name: IoCNames.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
    ]
}
export default appConfig;