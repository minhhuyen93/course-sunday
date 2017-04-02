import { IConnector } from "./iConnector";
import { Response, Http } from "@angular/http";
import { PromiseFactory, Promise } from "../models/promise";
import "rxjs/add/operator/map";
import appHelper from "../helpers/appHelper";
export class HttpConnector implements IConnector {
    public post(url: string, data: any): Promise {
        let def = PromiseFactory.create();
        // let rootUrl = appConfig.rootUrl;
        // url = rootUrl + url;
        // this.http.post(url, data)
        //     .map(this.handleResponse)
        //     .subscribe(
        //     (data: any) => def.resolve(data),
        //     (errors: any) => def.reject(errors)
        //     );
        return def;
    }

    public get(url: string): Promise {
        let http:Http = window.ioc.resolve(Http);
        let def = PromiseFactory.create();
        let rootUrl = appHelper.config.rootUrl;
        url = rootUrl + url;
        http.get(url)
            .map(this.handleResponse)
            .subscribe(
            (data: any) => def.resolve(data),
            (errors: any) => def.reject(errors)
            );
        return def;
    }
    private handleResponse(response: Response) {
        return response.json().data;
    }
}