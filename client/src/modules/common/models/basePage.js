"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePage {
    constructor(router) {
        this.router = router;
    }
    ngAfterViewInit() {
        this.onReady();
    }
    onReady() {
    }
    navigate(url, ...option) {
        let params = option || [];
        params.unshift(url);
        this.router.navigate([params]);
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=basePage.js.map