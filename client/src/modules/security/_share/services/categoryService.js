"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../common/index");
class CategoryService {
    getCategories() {
        let iconnector = window.ioc.resolve(index_1.IoCNames.IConnector);
        return iconnector.get("api/categories");
    }
    create(category) {
        let iconnector = window.ioc.resolve(index_1.IoCNames.IConnector);
        return iconnector.post("api/categories", category);
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=categoryService.js.map