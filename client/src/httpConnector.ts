import { IConnector } from "./iConnector";
import { Response, Http } from "@angular/http";
import { PromiseFactory, Promise } from "./promise";
import { Injectable } from "@angular/core";
@Injectable()
export class HttpConnector implements IConnector {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public get(url: string): Promise {
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