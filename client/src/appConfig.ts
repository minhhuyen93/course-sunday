import { HttpConnector } from "./httpConnector";
import { CategoryService } from "./categoryService";
import { IoCNames, IoCLifeCycle } from "./enum";
let appConfig = {
    rootUrl: "http://localhost:3000/",
    ioc: [
        { name: IoCNames.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
    ]
}

export default appConfig