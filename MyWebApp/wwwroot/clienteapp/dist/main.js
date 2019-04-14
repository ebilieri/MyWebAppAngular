(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClienteApp/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./ClienteApp/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClienteApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClienteApp/app/app.component.css":
/*!******************************************!*\
  !*** ./ClienteApp/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRlQXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./ClienteApp/app/app.component.html":
/*!*******************************************!*\
  !*** ./ClienteApp/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<lista-produto></lista-produto>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./ClienteApp/app/app.component.ts":
/*!*****************************************!*\
  !*** ./ClienteApp/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./ClienteApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Meu Primeiro APP Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ClienteApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClienteApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClienteApp/app/app.module.ts":
/*!**************************************!*\
  !*** ./ClienteApp/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./ClienteApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./ClienteApp/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loja_listaProduto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loja/listaProduto.component */ "./ClienteApp/app/loja/listaProduto.component.ts");
/* harmony import */ var _servicos_dataServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicos/dataServices */ "./ClienteApp/app/servicos/dataServices.ts");



//import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _loja_listaProduto_component__WEBPACK_IMPORTED_MODULE_6__["ListaProduto"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([], { useHash: true, enableTracing: true })
            ],
            providers: [_servicos_dataServices__WEBPACK_IMPORTED_MODULE_7__["DataServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClienteApp/app/loja/listaProduto.component.css":
/*!********************************************************!*\
  !*** ./ClienteApp/app/loja/listaProduto.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto-info img {       \r\n    margin: 0 2px;   \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudGVBcHAvYXBwL2xvamEvbGlzdGFQcm9kdXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6IkNsaWVudGVBcHAvYXBwL2xvamEvbGlzdGFQcm9kdXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHV0by1pbmZvIGltZyB7ICAgICAgIFxyXG4gICAgbWFyZ2luOiAwIDJweDsgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./ClienteApp/app/loja/listaProduto.component.html":
/*!*********************************************************!*\
  !*** ./ClienteApp/app/loja/listaProduto.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\" produto-info col-xs-4 well\" *ngFor=\"let p of produtos\">\r\n    <img src=\"/img/smartphone-lg-k10.jpg\" width=\"200\" height=\"200\" />\r\n    <h4>{{p.nome}}</h4>\r\n    <h3><strong>{{p.preco | currency:\"R$\":true}}</strong></h3>\r\n    <button id=\"meu-button\" class=\"btn btn-success btn-sm\" (click)=\"adicionarProduto(p)\">Comprar</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClienteApp/app/loja/listaProduto.component.ts":
/*!*******************************************************!*\
  !*** ./ClienteApp/app/loja/listaProduto.component.ts ***!
  \*******************************************************/
/*! exports provided: ListaProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProduto", function() { return ListaProduto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./ClienteApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicos/dataServices */ "./ClienteApp/app/servicos/dataServices.ts");



var ListaProduto = /** @class */ (function () {
    function ListaProduto(data) {
        this.data = data;
        this.produtos = data.produtos;
    }
    ListaProduto.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarProdutos()
            .subscribe(function () { return _this.produtos = _this.data.produtos; });
    };
    ListaProduto = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "lista-produto",
            template: __webpack_require__(/*! ./listaProduto.component.html */ "./ClienteApp/app/loja/listaProduto.component.html"),
            styles: [__webpack_require__(/*! ./listaProduto.component.css */ "./ClienteApp/app/loja/listaProduto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__["DataServices"]])
    ], ListaProduto);
    return ListaProduto;
}());



/***/ }),

/***/ "./ClienteApp/app/servicos/dataServices.ts":
/*!*************************************************!*\
  !*** ./ClienteApp/app/servicos/dataServices.ts ***!
  \*************************************************/
/*! exports provided: DataServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServices", function() { return DataServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./ClienteApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var DataServices = /** @class */ (function () {
    function DataServices(http) {
        this.http = http;
    }
    DataServices.prototype.carregarProdutos = function () {
        var _this = this;
        return this.http.get("/api/produto")
            .map(function (result) { return _this.produtos = result.json(); });
    };
    DataServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataServices);
    return DataServices;
}());



/***/ }),

/***/ "./ClienteApp/environments/environment.ts":
/*!************************************************!*\
  !*** ./ClienteApp/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClienteApp/main.ts":
/*!****************************!*\
  !*** ./ClienteApp/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClienteApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClienteApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./ClienteApp/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Emerson\Angular\MyWebAppSolution\MyWebApp\ClienteApp\main.ts */"./ClienteApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map