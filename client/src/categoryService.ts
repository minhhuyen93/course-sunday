import { Http, Response } from "@angular/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs/Observable";
import { Promise } from "./promise";
import { IConnector } from "./iConnector";
// import { HttpConnector } from "./httpConnector";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";
import { IoCNames } from "./enum";
import { ICategoryService } from "./iCategoryService";
// @Injectable()
export class CategoryService implements ICategoryService {
    // private iconnector: IConnector;
    // constructor(iconnector: HttpConnector) {
    //     this.iconnector = iconnector;
    // }
    public getCategories(): Promise {
        let iconnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get("api/categories");
    }
    public create(category: any): Promise {
        let iconnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.post("api/categories", category);
    }
}