"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@app/common");
class CategoryService {
    getCategories() {
        let iconnector = window.ioc.resolve(common_1.IoCNames.IConnector);
        return iconnector.get("api/categories");
    }
    create(category) {
        let iconnector = window.ioc.resolve(common_1.IoCNames.IConnector);
        return iconnector.post("api/categories", category);
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=categoryService.js.map