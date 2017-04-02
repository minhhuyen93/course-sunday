"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@angular/http");
const promise_1 = require("../models/promise");
require("rxjs/add/operator/map");
const appHelper_1 = require("../helpers/appHelper");
class HttpConnector {
    post(url, data) {
        let def = promise_1.PromiseFactory.create();
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
    get(url) {
        let http = window.ioc.resolve(http_1.Http);
        let def = promise_1.PromiseFactory.create();
        let rootUrl = appHelper_1.default.config.rootUrl;
        url = rootUrl + url;
        http.get(url)
            .map(this.handleResponse)
            .subscribe((data) => def.resolve(data), (errors) => def.reject(errors));
        return def;
    }
    handleResponse(response) {
        return response.json().data;
    }
}
exports.HttpConnector = HttpConnector;
//# sourceMappingURL=httpConnector.js.map