import { IConnector } from "./iConnector";
import { Response, Http } from "@angular/http";
import { PromiseFactory, Promise } from "./promise";
// import { Injectable } from "@angular/core";
import appConfig from "./appConfig";
// @Injectable()
export class HttpConnector implements IConnector {
    // private http: Http;
    // constructor(http: Http) {
    //     this.http = http;
    // }

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
        let def = PromiseFactory.create();
        // let rootUrl = appConfig.rootUrl;
        // url = rootUrl + url;
        // this.http.get(url)
        //     .map(this.handleResponse)
        //     .subscribe(
        //     (data: any) => def.resolve(data),
        //     (errors: any) => def.reject(errors)
        //     );
        def.resolve([
            {
                "id": 1,
                "name": "huyen",
                "key": "hehe",
                "description": "hoho custome",
                "color": "red"
            },
            {
                "id": 1,
                "name": "huyen mingo",
                "key": "dep trai vo dich",
                "description": "hoho custome",
                "color": "green"
            }
        ]);
        return def;
    }
    private handleResponse(response: Response) {
        return response.json();
    }
}