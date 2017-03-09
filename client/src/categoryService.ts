import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Promise } from "./promise";
import { IConnector } from "./iConnector";
import { HttpConnector } from "./httpConnector";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
@Injectable()
export class CategoryService {
    private iconnector: IConnector;
    constructor(iconnector: HttpConnector) {
        this.iconnector = iconnector;
    }
    public getCategories(): Promise {
        return this.iconnector.get("/api/categories.json");
    }
}