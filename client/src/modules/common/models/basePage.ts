import { Router } from "@angular/router";
import { AfterViewInit } from "@angular/core";
export class BasePage implements AfterViewInit {
    private router: Router;
    constructor(router: Router) {
        this.router = router;
    }
    ngAfterViewInit() {
        this.onReady();
    }
    protected onReady() {
    }
    protected navigate(url: string, ...option: Array<any>) {
        let params = option || [];
        params.unshift(url);
        this.router.navigate([params]);
    }
}