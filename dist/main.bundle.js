webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_list_company_list_component__ = __webpack_require__("../../../../../src/app/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_edit_company_edit_component__ = __webpack_require__("../../../../../src/app/company-edit/company-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__company_list_company_list_component__["a" /* CompanyListComponent */] },
    { path: "company/:company_id", component: __WEBPACK_IMPORTED_MODULE_3__company_edit_company_edit_component__["a" /* CompanyEditComponent */] },
    { path: "create", component: __WEBPACK_IMPORTED_MODULE_3__company_edit_company_edit_component__["a" /* CompanyEditComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n<router-outlet></router-outlet>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rx_js_operators__ = __webpack_require__("../../../../../src/app/rx-js.operators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_list_company_list_component__ = __webpack_require__("../../../../../src/app/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__company_edit_company_edit_component__ = __webpack_require__("../../../../../src/app/company-edit/company-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_company_service__ = __webpack_require__("../../../../../src/app/service/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__company_list_company_list_component__["a" /* CompanyListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__company_edit_company_edit_component__["a" /* CompanyEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular_tree_component__["a" /* TreeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__service_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_15__shared_app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/company-edit/company-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company-edit/company-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card-title>\n<div *ngIf=\"companyData.name\"> Company - {{companyData.name}}</div>\n<div *ngIf=\"!companyData.name\"> New Company </div>\n</mat-card-title>\n\n<div class=\"container\" *ngIf=\"companyForm && pageData\">\n\t<form [formGroup]=\"companyForm\" (ngSubmit)=\"onSubmit(companyForm)\" >\n\t\t<div>\n\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t<input id=\"name\" matInput formControlName=\"name\" placeholder=\"Name\">\n\t\t\t</mat-form-field>\n\t\t\t<div *ngIf=\"checkError('name' ,'required')\">\n\t\t\t\tОбовязкове поле.\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t<input id=\"estimate\" matInput formControlName=\"estimate\" placeholder=\"Estimate\">\n\t\t\t</mat-form-field>\n\t\t\t<div *ngIf=\"checkError('estimate' ,'required')\">\n\t\t\t\tОбовязкове поле.\n\t\t\t</div>\n\t\t</div>\n\n    <div class=\"form-group\">{{company_id}}\n\t\t\t<mat-form-field>\n\t\t\t\t\t<mat-select placeholder=\"Parent\" formControlName=\"parent_id\">\n\t\t\t\t\t\t<mat-option  [value]=0 >\n\t\t\t\t\t\t\t\tБез головної категорії\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t<mat-option  *ngFor=\"let c of pageData?.company \" [value]=\"c.company_id\"  >\n\t\t\t\t\t\t\t{{c.name}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t</div>\n    \n    \n    <div *ngIf=\"errorMessage\">\n\t\t\t{{errorMessage}}\n\t\t</div>\n\t\t<button mat-button [disabled]=\"companyForm.invalid\" >Save</button>\n\t\t<a routerLink=\"/\">Back</a>\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/company-edit/company-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_company_data__ = __webpack_require__("../../../../../src/app/service/company-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_company_service__ = __webpack_require__("../../../../../src/app/service/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //для обробки форми


var CompanyEditComponent = /** @class */ (function () {
    function CompanyEditComponent(service, router, fb, activatedRoute) {
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
    }
    CompanyEditComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getPageData();
        this.getCompany();
    };
    CompanyEditComponent.prototype.getCompany = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var company_id = params["company_id"];
            if (company_id) {
                _this.service.getCompany(company_id).subscribe(function (company) {
                    _this.companyData = company;
                    _this.companyForm.patchValue(_this.companyData);
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _this.companyData = new __WEBPACK_IMPORTED_MODULE_3__service_company_data__["a" /* CompanyData */]({ 'company_id': null, 'name': null, 'estimate': null, 'parent_id': null });
                _this.companyForm.patchValue(_this.companyData);
            }
        });
    };
    CompanyEditComponent.prototype.getPageData = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var company_id = params["company_id"];
            if (!company_id) {
                company_id = 0;
            }
            _this.service.getPageData(company_id).subscribe(function (pageData) {
                _this.pageData = pageData;
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    CompanyEditComponent.prototype.onSubmit = function (companyForm) {
        var _this = this;
        this.companyData.name = companyForm.value.name;
        this.companyData.estimate = companyForm.value.estimate;
        this.companyData.parent_id = companyForm.value.parent_id;
        if (this.companyData.company_id) {
            this.service.updateCompany(this.companyData)
                .subscribe(function () { return _this.goBack(); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.service.addCompany(this.companyData)
                .subscribe(function () { return _this.goBack(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    CompanyEditComponent.prototype.goBack = function () {
        this.router.navigate(["../../"], { relativeTo: this.activatedRoute });
    };
    CompanyEditComponent.prototype.checkError = function (element, errorType) {
        return this.companyForm.get(element).hasError(errorType) &&
            this.companyForm.get(element).touched;
    };
    CompanyEditComponent.prototype.buildForm = function () {
        this.companyForm = this.fb.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            estimate: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            parent_id: [""],
            company_id: [""],
        });
    };
    CompanyEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-edit',
            template: __webpack_require__("../../../../../src/app/company-edit/company-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/company-edit/company-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CompanyEditComponent);
    return CompanyEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/company-list/company-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card-title *ngIf=\"company\">\n  Company <a routerLink=\"/create\" class=\"right\">Add Company</a>\n  <tree-root [nodes]=\"company\" >\n      <ng-template #treeNodeTemplate let-node let-index=\"index\">\n          <span><a routerLink=\"/company/{{node.data.id}}\">{{ node.data.name }}</a></span>  \n          <span *ngIf=\" node.data.estimate\"> | {{ node.data.estimate }}</span>   \n          <span *ngIf=\" node.data.estimate_cildren\"> | {{ node.data.estimate_cildren }}</span>\n          <mat-button-toggle (click)=\"deleteCompany(node.data.id)\" >Видалити</mat-button-toggle>\n      </ng-template>\n  </tree-root>\n</mat-card-title>\n"

/***/ }),

/***/ "../../../../../src/app/company-list/company-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_company_service__ = __webpack_require__("../../../../../src/app/service/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(service) {
        this.service = service;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.getCompany();
    };
    CompanyListComponent.prototype.getCompany = function () {
        var _this = this;
        this.service.getAllCompany().subscribe(function (company) {
            _this.company = company;
            console.dir(_this.company);
        });
    };
    CompanyListComponent.prototype.deleteCompany = function (company_id) {
        var _this = this;
        if (company_id > 0) {
            this.service.deleteCompany(company_id)
                .subscribe(function () { return _this.getCompany(); });
        }
    };
    CompanyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-list',
            template: __webpack_require__("../../../../../src/app/company-list/company-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/company-list/company-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_company_service__["a" /* CompanyService */]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rx-js.operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);






/***/ }),

/***/ "../../../../../src/app/service/all-company-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCompanyData; });
var AllCompanyData = /** @class */ (function () {
    function AllCompanyData(res) {
        this.id = parseInt(res.company_id);
        this.name = res.name;
        this.estimate = parseInt(res.estimate);
        if (res.estimate_cildren)
            this.estimate_cildren = parseInt(res.estimate_cildren);
        this.parent_id = parseInt(res.parent_id);
        if (res.children) {
            var k = 0;
            var temp_children = [];
            for (var i in res.children) {
                temp_children[k] = res.children[i];
                k++;
            }
            this.children = temp_children;
        }
    }
    return AllCompanyData;
}());



/***/ }),

/***/ "../../../../../src/app/service/company-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyData; });
var CompanyData = /** @class */ (function () {
    function CompanyData(res) {
        this.company_id = res.company_id;
        this.name = res.name;
        this.estimate = res.estimate;
        this.parent_id = res.parent_id;
    }
    return CompanyData;
}());



/***/ }),

/***/ "../../../../../src/app/service/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_data__ = __webpack_require__("../../../../../src/app/service/company-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_company_data__ = __webpack_require__("../../../../../src/app/service/all-company-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_data__ = __webpack_require__("../../../../../src/app/service/page-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_settings__ = __webpack_require__("../../../../../src/app/shared/settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CompanyService = /** @class */ (function () {
    function CompanyService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.url = __WEBPACK_IMPORTED_MODULE_7__shared_settings__["a" /* Settings */].API_URL;
    }
    CompanyService.prototype.getAllCompany = function () {
        var company = this.http.get(this.url, this.appService.getOptions())
            .map(this.extractAllCompanyData)
            .catch(this.handleError);
        return company;
    };
    CompanyService.prototype.extractAllCompanyData = function (response) {
        this.responseCompany = response.json();
        var i = this.responseCompany.length - 1;
        for (i; i > 0; i--) {
            var k_1 = 0;
            for (var j in this.responseCompany[i]) {
                var estimate_cildren = this.responseCompany[i][j]['estimate_cildren'] ? this.responseCompany[i][j]['estimate_cildren'] : this.responseCompany[i][j]['estimate'];
                if (!this.responseCompany[i - 1][this.responseCompany[i][j]['parent_id']]['children']) {
                    this.responseCompany[i - 1][this.responseCompany[i][j]['parent_id']]['children'] = [new __WEBPACK_IMPORTED_MODULE_4__all_company_data__["a" /* AllCompanyData */](this.responseCompany[i][j])];
                }
                else {
                    this.responseCompany[i - 1][this.responseCompany[i][j]['parent_id']]['children'][k_1] = new __WEBPACK_IMPORTED_MODULE_4__all_company_data__["a" /* AllCompanyData */](this.responseCompany[i][j]);
                }
                if (!this.responseCompany[i - 1][this.responseCompany[i][j]['parent_id']]['estimate_cildren'])
                    this.responseCompany[i - 1][this.responseCompany[i][j]['parent_id']]['estimate_cildren'] = parseInt(this.responseCompany[i - 1][this.responseCompany[i][j]['parent_id']]['estimate']) + parseInt(estimate_cildren);
                else
                    this.responseCompany[i - 1][this.responseCompany[i][j]['parent_id']]['estimate_cildren'] += parseInt(estimate_cildren);
                k_1++;
            }
        }
        var company = [];
        var k = 0;
        for (var j in this.responseCompany[0]) {
            company[k] = new __WEBPACK_IMPORTED_MODULE_4__all_company_data__["a" /* AllCompanyData */](this.responseCompany[0][j]);
            k++;
        }
        return company;
    };
    CompanyService.prototype.getCompany = function (company_id) {
        var company = this.http.get(this.url + '/' + company_id, this.appService.getOptions())
            .map(this.extractCompanyData)
            .catch(this.handleError);
        return company;
    };
    CompanyService.prototype.extractCompanyData = function (response) {
        return new __WEBPACK_IMPORTED_MODULE_3__company_data__["a" /* CompanyData */](response.json());
    };
    CompanyService.prototype.getPageData = function (company_id) {
        var data = this.http.get(this.url + 'company-data/' + company_id, this.appService.getOptions())
            .map(this.extractData)
            .catch(this.handleError);
        return data;
    };
    CompanyService.prototype.extractData = function (response) {
        return new __WEBPACK_IMPORTED_MODULE_5__page_data__["a" /* PageData */](response.json());
    };
    CompanyService.prototype.updateCompany = function (company) {
        return this.http.put(this.url + company.company_id, "data=" + JSON.stringify(company), this.appService.getOptions())
            .catch(this.handleError);
    };
    CompanyService.prototype.addCompany = function (company) {
        return this.http.post(this.url, "data=" + JSON.stringify(company), this.appService.getOptions())
            .catch(this.handleError);
    };
    CompanyService.prototype.deleteCompany = function (company_id) {
        return this.http.delete(this.url + company_id, this.appService.getOptions())
            .catch(this.handleError);
    };
    CompanyService.prototype.handleError = function (error, cought) {
        var message = "";
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var errorData = error.json().error || JSON.stringify(error.json());
            message = "code: " + error.status + "  \n message: " + (error.statusText || '') + " \n " + errorData;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_app_service__["a" /* AppService */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "../../../../../src/app/service/page-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageData; });
var PageData = /** @class */ (function () {
    function PageData(res) {
        this.company = res.company;
    }
    return PageData;
}());



/***/ }),

/***/ "../../../../../src/app/shared/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");

var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getOptions = function () {
        var haders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: haders });
        return options;
    };
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.API_URL = "http://eliftech.test/public/";
    return Settings;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map