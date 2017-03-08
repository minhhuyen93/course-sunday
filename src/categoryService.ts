import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
@Injectable()
export class CategoryService{
    private http: Http;
    constructor(http:Http){
        this.http = http;
    }
    public getCategories(): Observable<any>{
        return this.http.get("/api/categories.json").map(this.handleData)
        .catch((errors:any)=> Observable.throw(errors.json().errors || 'Server error'));
    }
    private handleData(response: Response){
        return response.json();
    }
}