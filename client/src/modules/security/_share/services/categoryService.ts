import { Http, Response } from "@angular/http";
import { Promise, IoCNames, IConnector } from "@app/common";
import { ICategoryService } from "./iCategoryService";
export class CategoryService implements ICategoryService {
    public getCategories(): Promise {
        let iconnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get("api/categories");
    }
    public create(category: any): Promise {
        let iconnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.post("api/categories", category);
    }
}