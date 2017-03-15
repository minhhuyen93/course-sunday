import { IConnector } from "./iConnector";
import { Response, Http } from "@angular/http";
import { PromiseFactory, Promise } from "./promise";
import { Injectable } from "@angular/core";
import appRootUrl from "./appRootUrl";
@Injectable()
export class HttpConnector implements IConnector {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    public post(url: string, data: any): Promise {
        let def = PromiseFactory.create();
        let rootUrl = appRootUrl.rootUrl;
        url = rootUrl + url;
        this.http.post(url, data)
            .map(this.handleResponse)
            .subscribe(
            (data: any) => def.resolve(data),
            (errors: any) => def.reject(errors)
            );
        return def;
    }

    public get(url: string): Promise {
        let rootUrl = appRootUrl.rootUrl;
        url = rootUrl + url;
        let def = PromiseFactory.create();
        this.http.get(url)
            .map(this.handleResponse)
            .subscribe(
            (data: any) => def.resolve(data),
            (errors: any) => def.reject(errors)
            );
        return def;
    }
    private handleResponse(response: Response) {
        return response.json();
    }
}