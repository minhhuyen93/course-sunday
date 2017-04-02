"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const page_1 = require("./components/page");
const formButton_1 = require("./components/formButton");
const formButtonPrimary_1 = require("./components/formButtonPrimary");
const formInput_1 = require("./components/formInput");
const horizalForm_1 = require("./components/horizalForm");
const forms_1 = require("@angular/forms");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    core_1.NgModule({
        declarations: [page_1.Page, formButton_1.FormButton, formButtonPrimary_1.FormButtonPrimary, formInput_1.FormInput, horizalForm_1.HorizalForm],
        imports: [forms_1.FormsModule, router_1.RouterModule],
        exports: [page_1.Page, formButton_1.FormButton, formButtonPrimary_1.FormButtonPrimary, formInput_1.FormInput, horizalForm_1.HorizalForm]
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=commonModule.js.map