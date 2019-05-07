(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/account/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/can-deactivate.guard */ "./src/app/auth/can-deactivate.guard.ts");
/* harmony import */ var _auth_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/create/create.component */ "./src/app/auth/create/create.component.ts");
/* harmony import */ var _profile_resolve_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-resolve.guard */ "./src/app/account/profile-resolve.guard.ts");
/* harmony import */ var _favotite_favotite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favotite/favotite.component */ "./src/app/account/favotite/favotite.component.ts");











var routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                canDeactivate: [_auth_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]],
                resolve: {
                    user: _profile_resolve_guard__WEBPACK_IMPORTED_MODULE_9__["ProfileResolveGuard"]
                }
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            },
            {
                path: 'register',
                component: _auth_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"]
            },
            {
                path: 'favorite',
                component: _favotite_favotite_component__WEBPACK_IMPORTED_MODULE_10__["FavotiteComponent"]
            }
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row profile\">\n    <div class=\"col-md-3\">\n      <div class=\"profile-sidebar\">\n        <ul>\n          <li>\n            <i class=\"fa fa-home\"></i>\n            <a routerLink=\"/dashboard\" routerLinkActive=\"active\" >\n              <span>Dashboard</span>\n            </a>\n          </li>\n          <li>\n            <i class=\"fa fa-user-circle\"></i>\n            <a routerLink=\"/profile\" routerLinkActive=\"active\" >\n              <span>Profile</span>\n            </a>\n          </li>\n          <li>\n            <i class=\"fa fa-heart-o\t\"></i>\n            <a routerLink=\"/favorite\" routerLinkActive=\"active\" >\n              <span>Favorite</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col-md-9\">\n      <div class=\"profile-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  margin: 20px 0; }\n\n/* Profile sidebar */\n\n.profile-sidebar {\n  padding: 20px 0 10px 0;\n  background: #4c5a63;\n  height: 600px; }\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important; }\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px; }\n\n.profile-usertitle-name {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px; }\n\n.profile-usertitle-job {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px; }\n\n/* Profile Content */\n\n.profile-content {\n  padding: 20px;\n  background: #faebd7ad;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n\na {\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase; }\n\na:hover {\n  color: #cdd48a; }\n\nli {\n  margin: 0 auto;\n  list-style-type: none;\n  padding: 10px 0px; }\n\ni {\n  color: #6ca0af;\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEIsb0JBQUE7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFHWCw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQW9CckIsb0JBQUE7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVTtFQUNWLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxjQUF5QixFQUFBOztBQUczQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsY0FBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4vKiBQcm9maWxlIHNpZGViYXIgKi9cbi5wcm9maWxlLXNpZGViYXIge1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjNGM1YTYzO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ucHJvZmlsZS11c2VycGljIGltZyB7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZS11c2VydGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wcm9maWxlLXVzZXJ0aXRsZS1uYW1lIHtcbiAgY29sb3I6ICM1YTczOTE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4ucHJvZmlsZS11c2VydGl0bGUtam9iIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1YjliZDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLy8gLnByb2ZpbGUtdXNlcmJ1dHRvbnMge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyB9XG5cbi8vIC5wcm9maWxlLXVzZXJidXR0b25zIC5idG4ge1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICBmb250LXNpemU6IDExcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgIHBhZGRpbmc6IDZweCAxNXB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vIH1cblxuLy8gLnByb2ZpbGUtdXNlcmJ1dHRvbnMgLmJ0bjpsYXN0LWNoaWxkIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4vLyB9XG5cbi8qIFByb2ZpbGUgQ29udGVudCAqL1xuLnByb2ZpbGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWViZDdhZDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgIFxufVxuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjA1LCAyMTIsIDEzOCk7XG59XG5cbmxpIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5pIHtcbiAgY29sb3I6IHJnYigxMDgsIDE2MCwgMTc1KTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AccountComponent = /** @class */ (function () {
    function AccountComponent(router) {
        this.router = router;
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/account/dashboard/dashboard.component.ts");
/* harmony import */ var _favotite_favotite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./favotite/favotite.component */ "./src/app/account/favotite/favotite.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");



 //








var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _favotite_favotite_component__WEBPACK_IMPORTED_MODULE_9__["FavotiteComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-page\">\n  <h4>Dashboard Page</h4>\n  <h5>Hello, YourName</h5>\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex natus hic, mollitia laudantium numquam excepturi illum. Aliquam asperiores suscipit cupiditate sunt dolorum pariatur assumenda cumque at debitis, modi velit.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  color: #49817b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2FjY291bnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgY29sb3I6IHJnYig3MywgMTI5LCAxMjMpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/account/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/account/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/account/favotite/favotite.component.html":
/*!**********************************************************!*\
  !*** ./src/app/account/favotite/favotite.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list-card [listProduct]=\"listProduct\">\n</app-list-card>"

/***/ }),

/***/ "./src/app/account/favotite/favotite.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/account/favotite/favotite.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZmF2b3RpdGUvZmF2b3RpdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/favotite/favotite.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/favotite/favotite.component.ts ***!
  \********************************************************/
/*! exports provided: FavotiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavotiteComponent", function() { return FavotiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/localer.service */ "./src/app/core/services/localer.service.ts");



var FavotiteComponent = /** @class */ (function () {
    function FavotiteComponent(localer) {
        this.localer = localer;
        this.listFavorite = [];
    }
    FavotiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCurrent = this.localer.getSessionStorage('login');
        if (this.localer.getLocalStorage('favorite')) {
            this.listFavorite = JSON.parse(this.localer.getLocalStorage('favorite'));
            this.objInArrFavorite = this.listFavorite.find(function (item) { return item.user === _this.userCurrent; });
            this.listProduct = this.objInArrFavorite.favoriteUser;
        }
    };
    FavotiteComponent.prototype.ngDoCheck = function () {
    };
    FavotiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favotite',
            template: __webpack_require__(/*! ./favotite.component.html */ "./src/app/account/favotite/favotite.component.html"),
            styles: [__webpack_require__(/*! ./favotite.component.scss */ "./src/app/account/favotite/favotite.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__["LocalerService"]])
    ], FavotiteComponent);
    return FavotiteComponent;
}());



/***/ }),

/***/ "./src/app/account/profile-resolve.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/account/profile-resolve.guard.ts ***!
  \**************************************************/
/*! exports provided: ProfileResolveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolveGuard", function() { return ProfileResolveGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/api.service */ "./src/app/core/services/api.service.ts");



var ProfileResolveGuard = /** @class */ (function () {
    function ProfileResolveGuard(apiService) {
        this.apiService = apiService;
    }
    ProfileResolveGuard.prototype.resolve = function (route) {
        console.log(this.apiService.get('Account/2'));
        return this.apiService.get('users/2');
    };
    ProfileResolveGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProfileResolveGuard);
    return ProfileResolveGuard;
}());



/***/ }),

/***/ "./src/app/account/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container emp-profile\">\n  <form [formGroup]=\"formReactive\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-img\">\n          <img\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog\"\n            alt=\"\" />\n          <div class=\"file btn btn-lg btn-primary\">\n            Change Photo\n            <input type=\"file\" name=\"file\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n          <h5>\n            {{lastName | uppercase}}\n          </h5>\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">About</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <input *ngIf=\"edit\" type=\"submit\" class=\"profile-edit-btn\" name=\"btnSave\" value=\"Save\" />\n        <input type=\"button\" class=\"profile-edit-btn\" name=\"btnShowEdit\" value=\"{{edit ? 'Cancle':'Edit'}}\" (click)=\"changeForm($event)\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n      </div>\n      <div class=\"col-md-8\" *ngIf=\"!edit\">\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{firstName}} {{lastName}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Email</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{email}}</p>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n\n      <div class=\"col-md-8\" *ngIf=\"edit\">\n          <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n              <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>First Name</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"text\" value=\"{{firstName}}\" formControlName=\"firstName\" />\n                </div>  \n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Last Name</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"text\" value=\"{{old(lastName)}}\" formControlName=\"lastName\"/>\n                </div>  \n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Email</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"text\" value=\"{{email}}\" formControlName=\"email\" disabled/>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"password\" value=\"{{password}}\" formControlName=\"password\"/>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Confirm Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"password\" value=\"{{password}}\" formControlName=\"confirmPassword\"/>\n                </div>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/account/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/account/profile/profile.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff; }\n\n.profile-img {\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc; }\n\ninput {\n  margin-bottom: 12px;\n  font-weight: 600;\n  color: #0e62cc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsTUFBTSxFQUFBOztBQUVSO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGdDQUErQixFQUFBOztBQUVqQztFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXAtcHJvZmlsZXtcbiAgcGFkZGluZzogMyU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByb2ZpbGUtaW1ne1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWcgaW1ne1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IC0yMCU7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjEyNTI5Yjg7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4ucHJvZmlsZS1oZWFkIGg1e1xuICBjb2xvcjogIzMzMztcbn1cbi5wcm9maWxlLWhlYWQgaDZ7XG4gIGNvbG9yOiAjMDA2MmNjO1xufVxuLnByb2ZpbGUtZWRpdC1idG57XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAyJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9pbGUtcmF0aW5ne1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODE4MTgyO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5wcm9pbGUtcmF0aW5nIHNwYW57XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFic3tcbiAgbWFyZ2luLWJvdHRvbTo1JTtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMDYyY2M7XG59XG4ucHJvZmlsZS13b3Jre1xuICBwYWRkaW5nOiAxNCU7XG4gIG1hcmdpbi10b3A6IC0xNSU7XG59XG4ucHJvZmlsZS13b3JrIHB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MTgxODI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5wcm9maWxlLXdvcmsgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2ZpbGUtd29yayB1bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wcm9maWxlLXRhYiBsYWJlbHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9maWxlLXRhYiBwe1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwNjJjYztcbn1cbmlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwZTYyY2M7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/account/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/sevices/deactivate-dialog.service */ "./src/app/core/sevices/deactivate-dialog.service.ts");
/* harmony import */ var src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/localer.service */ "./src/app/core/services/localer.service.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, dialogService, localer, fb, router) {
        this.route = route;
        this.dialogService = dialogService;
        this.localer = localer;
        this.fb = fb;
        this.router = router;
        this.edit = false; // set default form view profile
        this.arr = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // console.log(this.route.data.subscribe);
        // this.route.data.subscribe(data => {
        //   console.log(data.user);
        //   this.user = data.user;
        // });
        // this.route.paramMap.subscribe( data => {
        //   this.firstName = data.get('firstName');
        //   this.lastName = data.get('lastName');
        //   this.email = data.get('email');
        // });
        // this.router.data.subscribe(data => this.userData = data.user.data
        this.formReactive = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ProfileComponent.prototype.changeForm = function (e) {
        this.edit = !this.edit;
    };
    ProfileComponent.prototype.onSubmit = function () {
        var param = this.formReactive.value;
        console.log(param);
        this.updateLocal('Account', param);
    };
    ProfileComponent.prototype.updateLocal = function (key, value) {
        var _this = this;
        if (key && value) {
            this.arr = JSON.parse(this.localer.getLocalStorage(key)).filter(function (i) { return i.email !== _this.email; });
            value.email = this.email;
            this.arr.push(value);
            this.localer.removeLocalStorage(key);
            this.localer.saveLocalStorage(key, this.arr);
            this.localer.saveSessionStorage('login', this.email, 2);
            this.edit = !this.edit;
        }
    };
    ProfileComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.profile = JSON.parse(this.localer.getLocalStorage('Account')).find(function (i) { return i.email === _this.localer.getSessionStorage('login'); });
        this.firstName = this.profile.firstName;
        this.lastName = this.profile.lastName;
        this.email = this.profile.email;
        this.password = this.profile.password;
    };
    ProfileComponent.prototype.canDeactivate = function () {
        return this.dialogService.confirm('Do you want to leave?');
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/account/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/account/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DeactivateDialogService"],
            src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_5__["LocalerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");






var routers = [
    {
        path: '',
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"]
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
    },
    {
        path: 'account',
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
    }
    // ,
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routers)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-header></app-header>\n  <ng-container *ngIf=\"router.url == '/'\">\n    <app-slider></app-slider>\n  </ng-container>\n\n  <div class=\"title-page\" *ngIf=\"router.url == '/child'\">\n    <div class=\"inner inner4\">List product children</div>\n  </div>\n\n  <div class=\"title-page\" *ngIf=\"router.url == '/men'\">\n    <div class=\"inner inner4\">List product men</div>\n  </div>\n\n  <div class=\"title-page\" *ngIf=\"router.url == '/women'\">\n    <div class=\"inner inner4\">List product women.</div>\n  </div>\n\n</header>\n\n<main class=\"page-content container\">\n\n  <!-- exercise7: angular attribute direction -->\n  <ng-template>\n    <h4>Attribute Directive</h4>\n    <h5>Pick a hover color</h5>\n    <div>\n      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n      <input type=\"radio\" name=\"colors\" (click)=\"color='green'\">Green\n      <input type=\"radio\" name=\"colors\" (click)=\"color='pink'\">Pink\n      <input type=\"radio\" name=\"colors\" (click)=\"color='purple'\">Purple\n    </div>\n    <button [appHoverItem]=\"color\">konichiwa</button>\n    <button [appHoverItem]=\"color\" defaultColor=\"violet\">sayyounara</button>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n</main>\n\n<footer class=\"page-footer\">Footer</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.banner {\n  background-image: url(\"https://js.devexpress.com/Content/ImagesNew/Overview/angular-banner.png\");\n  height: 180px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\nh1 {\n  color: white;\n  padding-top: 55px; }\n\n.container {\n  width: 1240px;\n  margin: 0 auto; }\n\n.page-content {\n  margin-top: 5%;\n  margin-bottom: 10%; }\n\n.page-footer {\n  position: fixed;\n  background-color: #f1f3f5;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 3; }\n\nbutton {\n  margin: 50px;\n  border: 1px solid gray;\n  border-radius: 15px; }\n\n.card-news > div > img {\n  width: 348px;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.title-page {\n  background-image: url('bgr-img-title-page.png');\n  line-height: 300px;\n  padding-left: 162px;\n  font-family: fantasy; }\n\n.inner {\n  display: inline-block;\n  vertical-align: middle;\n  background: #4c5a63;\n  padding: 3px 5px; }\n\n.inner4 {\n  line-height: normal;\n  /* Reset line-height for the child. */\n  background: none;\n  margin: 0 auto;\n  color: #633808;\n  font-size: xx-large; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdHQUFnRztFQUNoRyxhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsK0NBQWdFO0VBQ2hFLGtCQUFrQjtFQUVsQixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQW1CO0VBQUUscUNBQUE7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFxQjtFQUNyQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2pzLmRldmV4cHJlc3MuY29tL0NvbnRlbnQvSW1hZ2VzTmV3L092ZXJ2aWV3L2FuZ3VsYXItYmFubmVyLnBuZ1wiKTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1NXB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cbi5wYWdlLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzO1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmNhcmQtbmV3cz5kaXY+aW1nIHtcbiAgd2lkdGg6IDM0OHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50aXRsZS1wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2Jnci1pbWctdGl0bGUtcGFnZS5wbmcnKTtcbiAgbGluZS1oZWlnaHQ6IDMwMHB4O1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTYycHg7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xufVxuXG4uaW5uZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQ6cmdiKDc2LCA5MCwgOTkpOztcbiAgcGFkZGluZzogM3B4IDVweDtcbn1cblxuLmlubmVyNCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7IC8qIFJlc2V0IGxpbmUtaGVpZ2h0IGZvciB0aGUgY2hpbGQuICovXG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogcmdiKDk5LCA1NiwgOCk7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cblxuLy8gc3dpcGVye1xuLy8gICBoZWlnaHQ6IDI1MHB4O1xuLy8gICB3aWR0aDogODAlO1xuLy8gICBtYXJnaW46IGF1dG87XG4vLyB9XG5cbi8vIC5zd2lwZXItc2xpZGV7XG4vLyAgIGltZ3tcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICB9XG4vLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(api, router) {
        this.api = api;
        this.router = router;
        // descCart: any;
        this.title = 'erxercise-angular';
        this.config = {
            autoplay: 3000,
            initialSlide: 3,
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30 // Space between each Item
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        /**
         *  exercise 9: service advance
         * this.subscribe = this.api.get(END_POINT.listNews).subscribe();
         * this.news$ = this.api.getAssets(END_POINT.newsJson);
         */
        /**
         * Use Router events: load start header of page
         */
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                window.scroll(0, 100);
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

















// import { SwiperModule } from 'angular2-useful-swiper';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_8__["FeaturesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_12__["AccountModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]
                // SwiperModule
            ],
            providers: [_features_features_module__WEBPACK_IMPORTED_MODULE_8__["FeaturesModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/auth/create/create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'register',
                component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.verifyLogin(state.url);
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/auth/create/create.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/can-deactivate.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/can-deactivate.guard.ts ***!
  \**********************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/auth/create/create.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/create/create.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"check\">\n    Please enter your mail again! Current email exists!\n  </div>\n  <form\n    class=\"form-horizontal\"\n    role=\"form\"\n    [formGroup]=\"formReactive\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <h2>Register New User</h2>\n        <hr />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"name\">First Name</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-user\"></i>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"firstName\"\n            />\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"col-md-3\"\n        *ngIf=\"\n          formReactive.controls.firstName.invalid &&\n          (formReactive.controls.firstName.dirty ||\n            formReactive.controls.firstName.touched)\n        \"\n      >\n        <div class=\"form-control-feedback\">\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('firstName').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"name\">Last Name</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-user\"></i>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"lastName\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.lastName.invalid &&\n            (formReactive.controls.lastName.dirty ||\n              formReactive.controls.lastName.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('lastName').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"email\">E-Mail Address</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-at\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.email.invalid &&\n            (formReactive.controls.email.dirty ||\n              formReactive.controls.email.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('email').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"password\">Password</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group has-danger\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-key\"></i>\n            </div>\n            <input\n              type=\"password\"\n              class=\"form-control\"\n              formControlName=\"password\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.password.invalid &&\n            (formReactive.controls.password.dirty ||\n              formReactive.controls.password.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('password').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"password\">Confirm Password</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-repeat\"></i>\n            </div>\n            <input\n              type=\"password\"\n              name=\"password-confirmation\"\n              class=\"form-control\"\n              formControlName=\"confirmPassword\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.confirmPassword.invalid &&\n            (formReactive.controls.confirmPassword.dirty ||\n              formReactive.controls.confirmPassword.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('confirmPassword').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-success\"\n          [disabled]=\"\n            formReactive.invalid ||\n            formReactive.controls.password.value !=\n              formReactive.controls.confirmPassword.value\n          \"\n        >\n          <i class=\"fa fa-user-plus\"></i> Register\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/create/create.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/create/create.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container {\n  background-color: #717679a6; }\n\nform {\n  padding-bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2F1dGgvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTc2NzlhNjtcbn1cbmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/create/create.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/create/create.component.ts ***!
  \*************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_localer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/localer.service */ "./src/app/core/services/localer.service.ts");
/* harmony import */ var src_app_core_services_json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/json.service */ "./src/app/core/services/json.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CreateComponent = /** @class */ (function () {
    function CreateComponent(fb, localer, json, api, router) {
        this.fb = fb;
        this.localer = localer;
        this.json = json;
        this.api = api;
        this.router = router;
        this.arr = [];
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.formReactive = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // this.formReactive.valueChanges.subscribe(
        //   data => console.log(data)
        // );
    };
    CreateComponent.prototype.onSubmit = function () {
        var param = this.formReactive.value;
        this.saveLocal('Account', param);
        // this.json.saveText(JSON.stringify(param), '../../../assets/users.json');
    };
    CreateComponent.prototype.saveLocal = function (key, value) {
        if (key && value) {
            var valStorage = this.localer.getLocalStorage(key);
            this.arr = JSON.parse(this.localer.getLocalStorage(key));
            if (valStorage) {
                this.check = this.arr.map(function (element) { return element.email; }).includes(value.email);
                console.log(this.arr);
                if (!this.check) {
                    this.arr.push(value);
                    this.localer.removeLocalStorage(key);
                    this.localer.saveLocalStorage(key, this.arr);
                    this.router.navigate(['/login']);
                }
            }
            else {
                this.localer.saveLocalStorage(key, value);
                this.arr.push(value);
            }
        }
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/auth/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/auth/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_localer_service__WEBPACK_IMPORTED_MODULE_3__["LocalerService"],
            src_app_core_services_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"],
            src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger mess\" role=\"alert\" *ngIf=\"checkSuccess === false\">\n    Account doesn't exist. Enter a different account.\n  </div>\n  <div class=\"alert alert-success mess\" role=\"alert\" *ngIf=\"checkSuccess === true\">\n    Login successfully!\n  </div>\n\n  <div class=\"d-flex justify-content-center form-login\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Sign In</h3>\n        <div class=\"d-flex justify-content-end social_icon\">\n          <span><i class=\"fa fa-facebook-square\"></i></span>\n          <span><i class=\"fa fa-google-plus-square\"></i></span>\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <form #login=\"ngForm\" (ngSubmit)=\"onSubmit(login)\">\n          <div class=\"input-group form-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-at\"></i></span>\n            </div>\n            <input #validEmail=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"email\" ngModel name=\"email\" required>\n            <!-- {{validEmail?.invalid}} -->\n            <!-- {{login?.value?.email}} -->\n          </div>\n          <ng-container *ngIf=\"validEmail.invalid && (validEmail.dirty || validEmail.touched)\">\n            <p class=\"text-danger form-group\" *ngIf=\"validEmail.errors.required\">This field is required</p>\n          </ng-container>\n          <div class=\"input-group form-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n            </div>\n            <input #validPassword=\"ngModel\" type=\"password\" class=\"form-control\" placeholder=\"password\" ngModel name=\"password\" required>\n          </div>\n          <ng-container *ngIf=\"validPassword.invalid && (validPassword.dirty || validPassword.touched)\">\n            <p class=\"text-danger form-group\" *ngIf=\"validPassword.errors.required\">This field is required</p>\n          </ng-container>\n          <!-- <div class=\"d-flex justify-content-center remember\">\n            <input class=\"m-1\" type=\"checkbox\">Remember Me\n          </div> -->\n          <div class=\"form-group d-flex justify-content-center\">\n            <button class=\"btn btn-primary m-3\" type=\"submit\" [disabled]=\"login.invalid\">Login</button>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n          Don't have an account?<a routerLink=\"/register\" routerLinkActive=\"active\">Sign Up</a>\n        </div>\n        <!-- <div class=\"d-flex justify-content-center\">\n          <a href=\"#\">Forgot your password?</a>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mess {\n  width: 40%;\n  margin: 0 auto; }\n\n.form-login > div {\n  width: 40%;\n  margin-top: 5px; }\n\n.card {\n  background-color: #4c5a63;\n  color: #fff; }\n\n.card-body {\n  background-color: #717679a6; }\n\n.social_icon > span > i {\n  font-size: 30px;\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzcyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvcm0tbG9naW4+ZGl2IHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXRvcDogNXB4OyBcbn1cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNWE2MztcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzY3OWE2OyAgXG59XG4uc29jaWFsX2ljb24+c3Bhbj5pIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/localer.service */ "./src/app/core/services/localer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cookie.service */ "./src/app/core/services/cookie.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookieService, localer, router) {
        this.cookieService = cookieService;
        this.localer = localer;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        this.checkAccount('Account', f.value);
    };
    LoginComponent.prototype.checkAccount = function (key, account) {
        if (key) {
            this.obj = JSON.parse(this.localer.getLocalStorage(key));
            this.checkMail = this.obj.find(function (element) { return element.email === account.email; });
            this.checkSuccess = this.checkMail.password.includes(account.password);
            if (this.checkSuccess && typeof this.checkMail === 'object') {
                this.cookieService.setCookie('login', this.checkMail.email, 2);
                this.router.navigate(['/profile']); // , this.checkMail]
                // this.router.navigate(['profile', this.checkMail]);
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__["LocalerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: END_POINT, API_DOMAIN, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINT", function() { return END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DOMAIN", function() { return API_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var END_POINT = {
    listNews: 'news',
    newsJson: 'assets/news.json',
    users: 'profile'
};
var API_DOMAIN = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api;
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiService.prototype.get = function (url, params) {
        return this.httpClient.get(API_DOMAIN + url, {
            // tslint:disable-next-line:object-literal-shorthand
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.post = function (url, params) {
        return this.httpClient.post(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.put = function (url, params) {
        return this.httpClient.put(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.patch = function (url, params) {
        return this.httpClient.patch(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.getAssets = function (url) {
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.setAssets = function (url, params) {
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.getConfigResponse = function (url) {
        return this.httpClient.get(API_DOMAIN + url, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error('Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie.service */ "./src/app/core/services/cookie.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    AuthService.prototype.logout = function () {
        this.cookieService.setCookie('login', 0, 0);
        this.router.navigate(['/']);
    };
    AuthService.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.cookieService.getCookie('login')) {
            return true;
        }
        return false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/cookie.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/cookie.service.ts ***!
  \*************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    CookieService.prototype.getCookie = function (cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };
    CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/core/services/json.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/json.service.ts ***!
  \***********************************************/
/*! exports provided: JsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonService", function() { return JsonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JsonService = /** @class */ (function () {
    function JsonService() {
    }
    JsonService.prototype.saveText = function (text, filename) {
        var a = document.createElement('a');
        a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
        a.setAttribute('save', filename);
        a.setAttribute('download', filename);
        a.click();
    };
    JsonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JsonService);
    return JsonService;
}());



/***/ }),

/***/ "./src/app/core/services/localer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/localer.service.ts ***!
  \**************************************************/
/*! exports provided: LocalerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalerService", function() { return LocalerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie.service */ "./src/app/core/services/cookie.service.ts");



var LocalerService = /** @class */ (function () {
    function LocalerService(cookieService) {
        this.cookieService = cookieService;
    }
    LocalerService.prototype.saveLocalStorage = function (key, value) {
        if (typeof value === 'object') {
            return localStorage.setItem(key, JSON.stringify(value));
        }
        return localStorage.setItem(key, value);
    };
    LocalerService.prototype.getLocalStorage = function (key) {
        if (typeof localStorage.getItem(key) === 'string') {
            return localStorage.getItem(key);
        }
        return JSON.parse(localStorage.getItem(key));
    };
    LocalerService.prototype.removeLocalStorage = function (key) {
        return localStorage.removeItem(key);
    };
    LocalerService.prototype.saveSessionStorage = function (key, value, exdays) {
        if (typeof value === 'object') {
            return this.cookieService.setCookie(key, JSON.stringify(value), exdays);
        }
        return this.cookieService.setCookie(key, value, exdays);
    };
    LocalerService.prototype.getSessionStorage = function (key) {
        if (typeof this.cookieService.getCookie(key) === 'object') {
            return JSON.stringify(this.cookieService.getCookie(key));
        }
        return this.cookieService.getCookie(key);
    };
    LocalerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], LocalerService);
    return LocalerService;
}());



/***/ }),

/***/ "./src/app/core/sevices/deactivate-dialog.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/sevices/deactivate-dialog.service.ts ***!
  \***********************************************************/
/*! exports provided: DeactivateDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateDialogService", function() { return DeactivateDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DeactivateDialogService = /** @class */ (function () {
    function DeactivateDialogService() {
    }
    DeactivateDialogService.prototype.confirm = function (message) {
        var confirmation = window.confirm(message || 'Is it OK?');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (ob) {
            ob.next(confirmation);
        });
    };
    DeactivateDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeactivateDialogService);
    return DeactivateDialogService;
}());



/***/ }),

/***/ "./src/app/features/btn-localer/btn-localer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/btn-localer/btn-localer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"keyInput\">Key</label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your key!\" [(ngModel)]=\"keyInput\">\n  <label for=\"valueInput\">Value</label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your value!\" [(ngModel)]=\"valueInput\">\n</div>\n<div class=\"btn-localer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveLocal()\">Save LocalStorage</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"getLocal()\">Get LocalStorage</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveSession()\">Save SessionStorage</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"getSession()\">Get SessionStorage</button>\n</div>"

/***/ }),

/***/ "./src/app/features/btn-localer/btn-localer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/btn-localer/btn-localer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-localer {\n  text-align: center; }\n\n.btn-localer > button {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2ZlYXR1cmVzL2J0bi1sb2NhbGVyL2J0bi1sb2NhbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYnRuLWxvY2FsZXIvYnRuLWxvY2FsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxvY2FsZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLWxvY2FsZXI+YnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/features/btn-localer/btn-localer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/btn-localer/btn-localer.component.ts ***!
  \***************************************************************/
/*! exports provided: BtnLocalerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnLocalerComponent", function() { return BtnLocalerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../app/core/services/localer.service */ "./src/app/core/services/localer.service.ts");



var BtnLocalerComponent = /** @class */ (function () {
    function BtnLocalerComponent(localerService) {
        this.localerService = localerService;
        this.keyInput = 'hello';
        this.valueInput = 'konnichiwa';
    }
    BtnLocalerComponent.prototype.ngOnInit = function () {
    };
    BtnLocalerComponent.prototype.saveLocal = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.saveLocalStorage(this.keyInput, this.valueInput);
        }
    };
    BtnLocalerComponent.prototype.getLocal = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.getLocalStorage(this.keyInput);
        }
    };
    BtnLocalerComponent.prototype.saveSession = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.saveSessionStorage(this.keyInput, this.valueInput, 2);
        }
    };
    BtnLocalerComponent.prototype.getSession = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.getSessionStorage(this.keyInput);
        }
    };
    BtnLocalerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btn-localer',
            template: __webpack_require__(/*! ./btn-localer.component.html */ "./src/app/features/btn-localer/btn-localer.component.html"),
            styles: [__webpack_require__(/*! ./btn-localer.component.scss */ "./src/app/features/btn-localer/btn-localer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__["LocalerService"]])
    ], BtnLocalerComponent);
    return BtnLocalerComponent;
}());



/***/ }),

/***/ "./src/app/features/detail-card/detail-card.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/detail-card/detail-card.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- Portfolio Item Heading -->\n  <h1 class=\"my-4\">Page Heading\n    <small>Secondary Text</small>\n  </h1>\n\n  <!-- Portfolio Item Row -->\n  <div class=\"row\">\n\n    <div class=\"col-md-8\">\n      <img class=\"img-fluid img-card\" src=\"{{infoCard?.img}}\" alt=\"\">\n    </div>\n\n    <div class=\"col-md-4\">\n      <h3 class=\"my-3\">{{infoCard?.title}}</h3>\n      <p>{{infoCard?.desc}}</p>\n      <h3 class=\"my-3\">Price:</h3>\n      <p>{{infoCard?.price}}</p>\n      <!-- <button class=\"btn btn-sm\"\n        [ngClass]=\"{ 'disabled' : isSubmitting,\n                      'btn-outline-primary': !article.favorited,\n                      'btn-primary': article.favorited }\"\n        (click)=\"toggleFavorite()\">\n        <i class=\"ion-heart\"></i> <ng-content></ng-content>\n      </button> -->\n      <button>Add your favorite</button>\n    </div>\n\n  </div>\n  <!-- /.row -->\n\n  <!-- Related Projects Row -->\n  <h3 class=\"my-4\">Related Projects</h3>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6 mb-4\" *ngFor=\"let itemCard of relativalCard\">\n      <img class=\"img-fluid img-related\" src=\"{{itemCard.img}}\" alt=\"\">\n      <a [routerLink]=\"['/detail-card', itemCard.id]\" routerLinkActive=\"active\">\n        {{itemCard.title}}\n      </a>\n      <div>{{itemCard.price}}</div>\n    </div>\n  </div>\n  <!-- /.row -->"

/***/ }),

/***/ "./src/app/features/detail-card/detail-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/detail-card/detail-card.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-card {\n  width: 480px;\n  height: 500px; }\n\n.img-related {\n  width: 200px;\n  height: 250px; }\n\na {\n  display: table-row-group; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2ZlYXR1cmVzL2RldGFpbC1jYXJkL2RldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWY7RUFDRSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2RldGFpbC1jYXJkL2RldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jYXJkIHtcbiAgd2lkdGg6IDQ4MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuLmltZy1yZWxhdGVkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuYSB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/detail-card/detail-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/detail-card/detail-card.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCardComponent", function() { return DetailCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




var DetailCardComponent = /** @class */ (function () {
    function DetailCardComponent(route, api) {
        this.route = route;
        this.api = api;
    }
    DetailCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.paramMap.subscribe(function (params) {
            _this.id = +params.get('id'); // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.api.getAssets(src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["END_POINT"].newsJson).subscribe(function (data) {
            _this.infoCard = data.man.find(function (item) {
                return item.id === _this.id;
            });
            _this.infoCart1 = data.women.find(function (item) {
                return item.id === _this.id;
            });
            if (_this.infoCard) {
                _this.infoCard = data.man.find(function (item) {
                    return item.id === _this.id;
                });
                _this.relativalCard = data.man.filter(function (item) { return item.id !== _this.id; });
            }
            else if (_this.infoCart1) {
                _this.infoCard = data.women.find(function (item) {
                    return item.id === _this.id;
                });
                _this.relativalCard = data.women.filter(function (item) { return item.id !== _this.id; });
            }
            else {
                _this.infoCard = data.child.find(function (item) {
                    return item.id === _this.id;
                });
                _this.relativalCard = data.child.filter(function (item) { return item.id !== _this.id; });
            }
        });
    };
    DetailCardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetailCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-card',
            template: __webpack_require__(/*! ./detail-card.component.html */ "./src/app/features/detail-card/detail-card.component.html"),
            styles: [__webpack_require__(/*! ./detail-card.component.scss */ "./src/app/features/detail-card/detail-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], DetailCardComponent);
    return DetailCardComponent;
}());



/***/ }),

/***/ "./src/app/features/features-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function() { return FeaturesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lifecycle-hooks/lifecycle-hooks.component */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-card/detail-card.component */ "./src/app/features/detail-card/detail-card.component.ts");







var routes = [
    {
        path: '',
        component: _features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"],
        children: [
            {
                path: 'men',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                data: { page: 'men' }
            },
            {
                path: 'women',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                data: { page: 'women' }
            },
            {
                path: 'child',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                data: { page: 'child' }
            },
            {
                path: 'lifecycle-hooks',
                component: _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_4__["LifecycleHooksComponent"]
            },
            {
                path: 'detail-card/:id',
                component: _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_6__["DetailCardComponent"]
            },
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            }
        ]
    }
];
var FeaturesRoutingModule = /** @class */ (function () {
    function FeaturesRoutingModule() {
    }
    FeaturesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FeaturesRoutingModule);
    return FeaturesRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-slider></app-slider> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/features/features.component.scss":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/features/features.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features-routing.module */ "./src/app/features/features-routing.module.ts");
/* harmony import */ var _btn_localer_btn_localer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btn-localer/btn-localer.component */ "./src/app/features/btn-localer/btn-localer.component.ts");
/* harmony import */ var _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifecycle-hooks/lifecycle-hooks.component */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts");
/* harmony import */ var _lifecycle_hooks_app_lifecycle_title_app_lifecycle_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component */ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.ts");
/* harmony import */ var _lifecycle_hooks_app_lifecycle_content_app_lifecycle_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component */ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.ts");
/* harmony import */ var _lifecycle_hooks_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifecycle-hooks/app-modal/app-modal.component */ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail-card/detail-card.component */ "./src/app/features/detail-card/detail-card.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");













var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _btn_localer_btn_localer_component__WEBPACK_IMPORTED_MODULE_5__["BtnLocalerComponent"],
                _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_6__["LifecycleHooksComponent"],
                _lifecycle_hooks_app_lifecycle_title_app_lifecycle_title_component__WEBPACK_IMPORTED_MODULE_7__["AppLifecycleTitleComponent"],
                _lifecycle_hooks_app_lifecycle_content_app_lifecycle_content_component__WEBPACK_IMPORTED_MODULE_8__["AppLifecycleContentComponent"],
                _lifecycle_hooks_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_9__["AppModalComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_11__["DetailCardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _features_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeaturesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ]
        })
    ], FeaturesModule);
    return FeaturesModule;
}());



/***/ }),

/***/ "./src/app/features/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"sliderHome\"></ng-container>\n\n<div class=\"box\">\n    <div class=\"row\">\n      <div class=\"col-md-3\" *ngFor=\"let itemCard of listProduct$\">\n        <div class=\"box-part text-center\">\n          <!-- <i class=\"fa fa-instagram fa-3x\" aria-hidden=\"true\"></i> -->\n          <img src=\"{{itemCard.img}}\" class=\"card-img-top\" alt=\"...\">\n          <div  *ngIf=\"checkLogin\" id=\"item-card-{{itemCard.id}}\" class=\"heart\" (click)=\"addFavorite($event)\"></div>\n          <div class=\"card-body\">\n            <div class=\"title\">\n              <h4>{{itemCard.title }}</h4>\n            </div>\n            <div class=\"text\">\n              <span>{{itemCard.price}}</span>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <a [routerLink]=\"['/detail-card', itemCard.id]\" routerLinkActive=\"active\">View More</a>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row > div {\n  margin-bottom: 50px; }\n\n.box-part {\n  box-shadow: 3px 3px 1px 1px rgba(50, 164, 200, 0.21); }\n\n.card-body {\n  border: solid 2px #dbdbdb; }\n\n.card-footer {\n  background-color: #dbdbdb; }\n\n.card-footer > a {\n  color: #4c5a63; }\n\nimg {\n  width: 100%;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.heart {\n  cursor: pointer;\n  background-image: url(\"https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png\");\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 2900%;\n  position: absolute;\n  float: center;\n  top: -3%;\n  left: 72%;\n  z-index: 1;\n  width: 80px;\n  height: 80px; }\n\n.heart:hover {\n  background-position: right; }\n\n.favorite {\n  background-position: right; }\n\n.is_animating {\n  -webkit-animation: heart-burst 0.8s steps(28) 1;\n          animation: heart-burst 0.8s steps(28) 1; }\n\n@-webkit-keyframes heart-burst {\n  from {\n    background-position: left; }\n  to {\n    background-position: right; } }\n\n@keyframes heart-burst {\n  from {\n    background-position: left; }\n  to {\n    background-position: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9EQUFvRCxFQUFBOztBQUV0RDtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUNmLDBGQUEwRjtFQUMxRix5QkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLHNCQUFxQjtFQUVyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwwQkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwwQkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwrQ0FBc0M7VUFBdEMsdUNBQXNDLEVBQUE7O0FBR3hDO0VBQ0U7SUFDRSx5QkFBd0IsRUFBQTtFQUUxQjtJQUNFLDBCQUF5QixFQUFBLEVBQUE7O0FBTDdCO0VBQ0U7SUFDRSx5QkFBd0IsRUFBQTtFQUUxQjtJQUNFLDBCQUF5QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93PmRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5ib3gtcGFydCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMXB4IDFweCByZ2JhKDUwLCAxNjQsIDIwMCwgMC4yMSk7XG59XG4uY2FyZC1ib2R5IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2RiZGJkYjtcbn1cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG59XG4uY2FyZC1mb290ZXI+YSB7XG4gIGNvbG9yOiAjNGM1YTYzO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVhcnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCAnaHR0cHM6Ly9hYnMudHdpbWcuY29tL2EvMTQ0NjU0MjE5OS9pbWcvdDEvd2ViX2hlYXJ0X2FuaW1hdGlvbi5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6MjkwMCU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogY2VudGVyO1xuICB0b3A6IC0zJTtcbiAgbGVmdDogNzIlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaGVhcnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xufVxuXG4uZmF2b3JpdGUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xufVxuXG4uaXNfYW5pbWF0aW5nIHtcbiAgYW5pbWF0aW9uOiBoZWFydC1idXJzdCAuOHMgc3RlcHMoMjgpIDE7XG59XG5cbkBrZXlmcmFtZXMgaGVhcnQtYnVyc3Qge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQ7XG4gIH1cbiAgdG8geyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/localer.service */ "./src/app/core/services/localer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, authService, localer, router, route) {
        this.api = api;
        this.authService = authService;
        this.localer = localer;
        this.router = router;
        this.route = route;
        this.news = [];
        this.checkLogin = false;
        this.objCartList = { user: '', favoriteUser: [] };
        this.favoriteList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.api.get(src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["END_POINT"].listNews).subscribe();
        this.api.getAssets(src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["END_POINT"].newsJson).subscribe(function (data) {
            _this.man = data.man;
            _this.women = data.women;
            _this.child = data.child;
            data.man.forEach(function (item) {
                _this.news.push(item);
            });
            data.women.forEach(function (item) {
                _this.news.push(item);
            });
            data.child.forEach(function (item) {
                _this.news.push(item);
            });
            // tslint:disable-next-line:no-shadowed-variable
            _this.route.data.subscribe(function (item) {
                if (item.page === 'child') {
                    _this.listProduct$ = _this.child;
                }
                else if (item.page === 'men') {
                    _this.listProduct$ = _this.man;
                }
                else if (item.page === 'women') {
                    _this.listProduct$ = _this.women;
                }
                else {
                    _this.listProduct$ = _this.news;
                }
            });
        });
        if (this.authService.isLoggedIn()) {
            this.checkLogin = true;
        }
        // tslint:disable-next-line:only-arrow-functions
        // $(document).ready( function() {
        //   /* when a user clicks, toggle the 'is-animating' class */
        //   $('.heart').on('click touchstart', function() {
        //     // $(this).toggleClass('is_animating');
        //     console.log($(this)[0].id.substr(10));
        //     this.cardList.push($(this)[0].id.substr(10));
        //   });
        //   /*when the animation is over, remove the class*/
        //   $('.heart').on('animationend', function() {
        //     $(this).toggleClass('is_animating');
        //   });
        // });
    };
    HomeComponent.prototype.addFavorite = function ($event) {
        var _this = this;
        $event.target.classList.toggle('is_animating');
        this.idFavorite = -1;
        // get id of useLogin current
        if (this.localer.getLocalStorage('favorite')) {
            this.favoriteList = JSON.parse(this.localer.getLocalStorage('favorite'));
        }
        if (this.favoriteList) {
            this.idFavorite = this.favoriteList.findIndex(function (item) { return item.user === _this.localer.getSessionStorage('login'); });
        }
        if (this.idFavorite === -1) {
            this.objCartList.user = (this.localer.getSessionStorage('login'));
            this.objCartList.favoriteUser.push(Number($event.target.id.substr(10)));
            this.favoriteList.push(this.objCartList);
            this.localer.saveLocalStorage('favorite', this.favoriteList);
        }
        else {
            // show color red for item selected
            this.objCartList = this.favoriteList[this.idFavorite];
            if (!this.objCartList.favoriteUser.includes(Number($event.target.id.substr(10)))) {
                this.favoriteList[this.idFavorite].favoriteUser.push(Number($event.target.id.substr(10)));
                this.localer.saveLocalStorage('favorite', this.favoriteList);
                $event.target.classList.toggle('favorite');
            }
            else {
                // nếu product đã tồn tại trong danh sách yêu thích thì xoá
                if (confirm('Do you want to dis favorite?')) {
                    // tslint:disable-next-line:max-line-length
                    this.favoriteList[this.idFavorite].favoriteUser = this.favoriteList[this.idFavorite].favoriteUser.filter(function (item) { return item !== Number($event.target.id.substr(10)); });
                    this.localer.saveLocalStorage('favorite', this.favoriteList);
                    $event.target.classList.remove('favorite');
                }
            }
        }
    };
    // showColorFavorit(id: any, tag: any) {
    // }
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/features/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_4__["LocalerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"elementCard.id==elementClick\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n  <div class=\"card-body\">\n    {{elementCard.desc}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9hcHAtbGlmZWN5Y2xlLWNvbnRlbnQvYXBwLWxpZmVjeWNsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AppLifecycleContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLifecycleContentComponent", function() { return AppLifecycleContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppLifecycleContentComponent = /** @class */ (function () {
    function AppLifecycleContentComponent() {
    }
    AppLifecycleContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleContentComponent.prototype, "elementClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleContentComponent.prototype, "elementCard", void 0);
    AppLifecycleContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifecycle-content',
            template: __webpack_require__(/*! ./app-lifecycle-content.component.html */ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.html"),
            styles: [__webpack_require__(/*! ./app-lifecycle-content.component.scss */ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppLifecycleContentComponent);
    return AppLifecycleContentComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- card title -->\n<div class=\"btn-group btn-group-justified row-card\" role=\"group\">\n  <div class=\"btn-group\" role=\"group\">\n    <button [id]=\"elementCard.id\" type=\"button\" class=\"btn btn-default rounded-circle\" (click)=\"detailCard($event)\">+</button>\n  </div>\n  <div class=\"btn-group\" role=\"group\">\n    <h2 class=\"mb-0\">\n      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n        {{elementCard.name}}\n      </button>\n    </h2>\n  </div>\n  <div class=\"btn-group remove-card\" role=\"group\">\n    <button type=\"button\" class=\"close\" data-toggle=\"modal\"  [attr.data-target]=\"'#hook-model-'+elementCard.id\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-card {\n  border: 1px solid rgba(0, 0, 0, 0.075); }\n\n.remove-card {\n  border-left: 1px solid rgba(0, 0, 0, 0.075);\n  width: 50px;\n  height: auto; }\n\n.remove-card > button {\n  width: 100%;\n  height: 100%; }\n\nbutton.rounded-circle {\n  color: white;\n  background: #bb1414;\n  width: 30px;\n  height: 30px;\n  margin: 10px 5px 10px 25px;\n  padding: initial; }\n\n.btn-group > h2 > button {\n  width: 1000px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9hcHAtbGlmZWN5Y2xlLXRpdGxlL2FwcC1saWZlY3ljbGUtdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQ0FBa0MsRUFBQTs7QUFFbkM7RUFDQywyQ0FBdUM7RUFDdkMsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFYjtFQUNDLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWI7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLGFBQWE7RUFDYixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9hcHAtbGlmZWN5Y2xlLXRpdGxlL2FwcC1saWZlY3ljbGUtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNhcmQge1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNzUpO1xufVxuLnJlbW92ZS1jYXJkIHtcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNzUpO1xuXHR3aWR0aDogNTBweDtcblx0aGVpZ2h0OiBhdXRvO1xufVxuLnJlbW92ZS1jYXJkPmJ1dHRvbiB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5idXR0b24ucm91bmRlZC1jaXJjbGUge1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQ6ICNiYjE0MTQ7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMTBweCA1cHggMTBweCAyNXB4OyBcblx0cGFkZGluZzogaW5pdGlhbDtcbn1cbi5idG4tZ3JvdXA+aDI+YnV0dG9uIHtcblx0d2lkdGg6IDEwMDBweDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AppLifecycleTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLifecycleTitleComponent", function() { return AppLifecycleTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppLifecycleTitleComponent = /** @class */ (function () {
    function AppLifecycleTitleComponent() {
        this.cardCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AppLifecycleTitleComponent.prototype.ngOnInit = function () {
    };
    AppLifecycleTitleComponent.prototype.detailCard = function ($event) {
        this.cardCurrent.emit($event.target.id);
        console.log('ID clicking :' + $event.target.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleTitleComponent.prototype, "elementCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleTitleComponent.prototype, "cardCurrent", void 0);
    AppLifecycleTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifecycle-title',
            template: __webpack_require__(/*! ./app-lifecycle-title.component.html */ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.html"),
            styles: [__webpack_require__(/*! ./app-lifecycle-title.component.scss */ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppLifecycleTitleComponent);
    return AppLifecycleTitleComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-modal/app-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [attr.id]=\"'hook-model-'+elementClick.id\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h5>Are you sure want to delete?</h5>\n        <h6><b>{{elementClick?.name}}</b></h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"methodRemoveHook(elementClick?.id)\">OK</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" aria-label=\"Close\">CANCLE</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-modal/app-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9hcHAtbW9kYWwvYXBwLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-modal/app-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModalComponent", function() { return AppModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppModalComponent = /** @class */ (function () {
    function AppModalComponent() {
        this.removeHook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AppModalComponent.prototype.ngOnInit = function () {
    };
    AppModalComponent.prototype.methodRemoveHook = function (id) {
        this.removeHook.emit(id);
        console.log('Remove ID: ' + id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppModalComponent.prototype, "elementClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppModalComponent.prototype, "removeHook", void 0);
    AppModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./app-modal.component.html */ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.html"),
            styles: [__webpack_require__(/*! ./app-modal.component.scss */ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModalComponent);
    return AppModalComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/lifecycle-hooks.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" *ngFor=\" let itemLifeCycleHooks of listLifeCycleHooks; let i=index\">\n  <app-lifecycle-title (cardCurrent)=\"getCardClicking($event)\"  [elementCard]=\"itemLifeCycleHooks\"></app-lifecycle-title>\n  <app-lifecycle-content [elementCard]=\"itemLifeCycleHooks\" [elementClick]=\"descCart\" >\n  </app-lifecycle-content>\n  <app-modal [elementClick]=\"itemLifeCycleHooks\" (removeHook)=\"removeHook($event)\"></app-modal>\n</div>"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/lifecycle-hooks.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9saWZlY3ljbGUtaG9va3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts ***!
  \***********************************************************************/
/*! exports provided: LifecycleHooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleHooksComponent", function() { return LifecycleHooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LifecycleHooksComponent = /** @class */ (function () {
    function LifecycleHooksComponent() {
        this.listLifeCycleHooks = [
            {
                id: 0,
                name: 'ngOnChanges()',
                desc: 'Called before ngOnInit() and whenever one or more data-bound input properties change.'
            },
            {
                id: 1,
                name: 'ngOnInit()',
                desc: 'Called once, after the first ngOnChanges().'
            },
            {
                id: 2,
                name: 'ngDoCheck()',
                desc: 'Called during every change detection run, immediately after ngOnChanges() and ngOnInit().'
            },
            {
                id: 3,
                name: 'ngAfterContentInit()',
                desc: 'Called once after the first ngDoCheck().'
            },
            {
                id: 4,
                name: 'ngAfterContentChecked()',
                desc: 'Called after the ngAfterContentInit() and every subsequent ngDoCheck().'
            },
            {
                id: 5,
                name: 'ngAfterViewInit()',
                desc: 'Called once after the first ngAfterContentChecked().'
            },
            {
                id: 6,
                name: 'ngAfterViewChecked()',
                desc: 'Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().'
            },
            {
                id: 7,
                name: 'ngOnDestroy()',
                desc: 'Called just before Angular destroys the directive/component.'
            }
        ];
    }
    LifecycleHooksComponent.prototype.ngOnInit = function () {
        console.log(this.listLifeCycleHooks);
    };
    LifecycleHooksComponent.prototype.getCardClicking = function ($event) {
        this.descCart = $event;
        console.log('Get Card Clicking in parent: ' + $event);
    };
    LifecycleHooksComponent.prototype.removeHook = function ($event) {
        this.listLifeCycleHooks = this.listLifeCycleHooks.filter(function (element) {
            return element.id !== $event;
        });
    };
    LifecycleHooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifecycle-hooks',
            template: __webpack_require__(/*! ./lifecycle-hooks.component.html */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.html"),
            styles: [__webpack_require__(/*! ./lifecycle-hooks.component.scss */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LifecycleHooksComponent);
    return LifecycleHooksComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <div class=\"container\">\n    <div class=\"navbar-brand\" href=\"#\">\n      <img id=\"nav-logo\" alt=\"Angular Logo\" src=\"../assets/images/logo.png\">\n      <span>TTBe</span>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/women\" routerLinkActive=\"active\">Woman</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/men\" routerLinkActive=\"active\">Men</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/child\" routerLinkActive=\"active\">Children</a>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!status\" class=\"nav-item nav-left float-right\">\n      <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n    </div>\n    <div *ngIf=\"status\" class=\"nav-item nav-left float-right\">\n      {{status}}\n      <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/component/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-transform: uppercase; }\n\nnav {\n  text-transform: uppercase;\n  background-color: #4c5a63; }\n\n.nav-tabs > li > a {\n  color: black; }\n\n#nav-logo {\n  width: 30px;\n  vertical-align: bottom; }\n\n.float-right {\n  float: right;\n  color: #5dffcd;\n  text-align: center; }\n\n.float-right > a {\n  color: rgba(255, 255, 255, 0.5); }\n\n.float-right > a:hover {\n  color: #fff; }\n\n.container {\n  width: 1240px;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSwrQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxubmF2IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNWE2Mztcbn1cbi5uYXYtdGFicz5saT5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuI25hdi1sb2dvIHtcbiAgd2lkdGg6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uZmxvYXQtcmlnaHR7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM1ZGZmY2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbG9hdC1yaWdodD5hIHtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xufVxuLmZsb2F0LXJpZ2h0PmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTI0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/component/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cookie.service */ "./src/app/core/services/cookie.service.ts");
/* harmony import */ var src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/sevices/deactivate-dialog.service */ "./src/app/core/sevices/deactivate-dialog.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, cookieService, dialogService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.dialogService = dialogService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.status = this.cookieService.getCookie('login');
    };
    HeaderComponent.prototype.logout = function () {
        this.dialogService.confirm('Do you want to logout?');
        this.authService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_services_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DeactivateDialogService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/list-card/list-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/list-card/list-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"box\"> -->\n    <div class=\"row\">\n      <div class=\"col-md-5\" *ngFor=\"let itemCard of listInfoProduct$\">\n        <div class=\"box-part text-center\">\n          <!-- <i class=\"fa fa-instagram fa-3x\" aria-hidden=\"true\"></i> -->\n          <img src=\"{{itemCard.img}}\" class=\"card-img-top\" alt=\"...\">\n          <div id=\"item-card-{{itemCard.id}}\" class=\"heart\" (click)=\"addFavorite($event)\"></div>\n          <div class=\"card-body\">\n            <div class=\"title\">\n              <h4>{{itemCard.title }}</h4>\n            </div>\n            <div class=\"text\">\n              <span>{{itemCard.price}}</span>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <a [routerLink]=\"['/detail-card', itemCard.id]\" routerLinkActive=\"active\">View More</a>\n          </div>\n        </div>\n      </div>\n    </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/shared/component/list-card/list-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/list-card/list-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  justify-content: center; }\n\n.row > div {\n  margin-bottom: 50px; }\n\n.box-part {\n  box-shadow: 3px 3px 1px 1px rgba(50, 164, 200, 0.21); }\n\n.card-body {\n  border: solid 2px #dbdbdb; }\n\n.card-footer {\n  background-color: #dbdbdb; }\n\n.card-footer > a {\n  color: #4c5a63; }\n\nimg {\n  width: 100%;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.heart {\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  background-image: url(\"https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png\");\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 2900%;\n  position: absolute;\n  float: center;\n  top: -3%;\n  left: 72%;\n  z-index: 1;\n  width: 80px;\n  height: 80px; }\n\n.heart:hover {\n  background-position: right; }\n\n.favorite {\n  background-position: right; }\n\n.is_animating {\n  -webkit-animation: heart-burst 0.8s steps(28) 1;\n          animation: heart-burst 0.8s steps(28) 1; }\n\n@-webkit-keyframes heart-burst {\n  from {\n    background-position: left; }\n  to {\n    background-position: right; } }\n\n@keyframes heart-burst {\n  from {\n    background-position: left; }\n  to {\n    background-position: right; } }\n\n.col-md-3 {\n  width: 255px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbGlzdC1jYXJkL2xpc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9EQUFvRCxFQUFBOztBQUV0RDtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEZBQTBGO0VBQzFGLHlCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isc0JBQXFCO0VBRXJCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLCtDQUFzQztVQUF0Qyx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRTtJQUNFLHlCQUF3QixFQUFBO0VBRTFCO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLHlCQUF3QixFQUFBO0VBRTFCO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFHN0I7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2xpc3QtY2FyZC9saXN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucm93PmRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5ib3gtcGFydCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMXB4IDFweCByZ2JhKDUwLCAxNjQsIDIwMCwgMC4yMSk7XG59XG4uY2FyZC1ib2R5IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2RiZGJkYjtcbn1cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG59XG4uY2FyZC1mb290ZXI+YSB7XG4gIGNvbG9yOiAjNGM1YTYzO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVhcnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCAnaHR0cHM6Ly9hYnMudHdpbWcuY29tL2EvMTQ0NjU0MjE5OS9pbWcvdDEvd2ViX2hlYXJ0X2FuaW1hdGlvbi5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6MjkwMCU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogY2VudGVyO1xuICB0b3A6IC0zJTtcbiAgbGVmdDogNzIlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaGVhcnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xufVxuXG4uZmF2b3JpdGUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xufVxuXG4uaXNfYW5pbWF0aW5nIHtcbiAgYW5pbWF0aW9uOiBoZWFydC1idXJzdCAuOHMgc3RlcHMoMjgpIDE7XG59XG5cbkBrZXlmcmFtZXMgaGVhcnQtYnVyc3Qge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQ7XG4gIH1cbiAgdG8geyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuICB9XG59XG4uY29sLW1kLTMge1xuICB3aWR0aDogMjU1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/component/list-card/list-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/list-card/list-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCardComponent", function() { return ListCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/localer.service */ "./src/app/core/services/localer.service.ts");
/* harmony import */ var src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/sevices/deactivate-dialog.service */ "./src/app/core/sevices/deactivate-dialog.service.ts");





var ListCardComponent = /** @class */ (function () {
    function ListCardComponent(api, localer, dialogService) {
        this.api = api;
        this.localer = localer;
        this.dialogService = dialogService;
        this.objCartList = { user: '', favoriteUser: [] };
        this.favoriteList = [];
        this.listInfoProduct$ = [];
    }
    ListCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAssets(_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["END_POINT"].newsJson).subscribe(function (data) {
            data.man.forEach(function (item) {
                if (_this.listProduct.find(function (i) { return i === item.id; })) {
                    _this.listInfoProduct$.push(item);
                }
            });
            data.women.forEach(function (item) {
                if (_this.listProduct.find(function (i) { return i === item.id; })) {
                    _this.listInfoProduct$.push(item);
                }
            });
            data.child.forEach(function (item) {
                if (_this.listProduct.find(function (i) { return i === item.id; })) {
                    _this.listInfoProduct$.push(item);
                }
            });
            console.log(_this.listInfoProduct$);
        });
    };
    ListCardComponent.prototype.ngOnChanges = function () {
        console.log('change data ' + this.listProduct);
    };
    ListCardComponent.prototype.addFavorite = function ($event) {
        var _this = this;
        $event.target.classList.toggle('is_animating');
        this.idFavorite = -1;
        if (this.localer.getLocalStorage('favorite')) {
            this.favoriteList = JSON.parse(this.localer.getLocalStorage('favorite'));
        }
        if (this.favoriteList) {
            this.idFavorite = this.favoriteList.findIndex(function (item) { return item.user === _this.localer.getSessionStorage('login'); });
        }
        if (this.idFavorite === -1) { // if not exist
            this.objCartList.user = (this.localer.getSessionStorage('login'));
            this.objCartList.favoriteUser.push(Number($event.target.id.substr(10)));
            this.favoriteList.push(this.objCartList);
            this.localer.saveLocalStorage('favorite', this.favoriteList);
        }
        else {
            this.objCartList = this.favoriteList[this.idFavorite];
            if (!this.objCartList.favoriteUser.includes(Number($event.target.id.substr(10)))) {
                this.favoriteList[this.idFavorite].favoriteUser.push(Number($event.target.id.substr(10)));
                this.localer.saveLocalStorage('favorite', this.favoriteList);
                $event.target.classList.toggle('favorite');
            }
            else {
                // nếu product đã tồn tại trong danh sách yêu thích thì xoá
                if (confirm('Do you want to dis favorite?')) {
                    // tslint:disable-next-line:max-line-length
                    this.favoriteList[this.idFavorite].favoriteUser = this.favoriteList[this.idFavorite].favoriteUser.filter(function (item) { return item !== Number($event.target.id.substr(10)); });
                    this.localer.saveLocalStorage('favorite', this.favoriteList);
                    $event.target.classList.remove('favorite');
                    window.location.reload();
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListCardComponent.prototype, "listProduct", void 0);
    ListCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-card',
            template: __webpack_require__(/*! ./list-card.component.html */ "./src/app/shared/component/list-card/list-card.component.html"),
            styles: [__webpack_require__(/*! ./list-card.component.scss */ "./src/app/shared/component/list-card/list-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_3__["LocalerService"],
            src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DeactivateDialogService"]])
    ], ListCardComponent);
    return ListCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/slider/slider.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/slider/slider.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <swiper [config]=\"config\">\n    <div class=\"swiper-container\">\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider1.jpeg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider2.png\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider3.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider4.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider5.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider6.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider7.jpg\" />\n    </div>\n  </div>\n  <div class=\"swiper-pagination\"></div>\n  <div class=\"swiper-button-next\"></div>\n  <div class=\"swiper-button-prev\"></div>\n  </div>\n</swiper> -->\n<div class=\"bd-example\">\n    <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"../assets/images/slider/banner1.png\" class=\"d-block w-100 h-25\" alt=\"...\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>First slide label</h5>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../assets/images/slider/banner2.jpg\" class=\"d-block w-100 h-25\" alt=\"...\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>Second slide label</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../assets/images/slider/banner3.jpg\" class=\"d-block w-100 h-25\" alt=\"...\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>Third slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/shared/component/slider/slider.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/slider/slider.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper {\n  height: 250px;\n  width: 100%; }\n\n.swiper-slide img {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.carousel-inner {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvZmluYWwtcHJvamVjdC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2I7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXJ7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRle1xuICBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/component/slider/slider.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/slider/slider.component.ts ***!
  \*************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent(elementRef) {
        this.elementRef = elementRef;
        this.config = {
            autoplay: 3000,
            initialSlide: 3,
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30 // Space between each Item
        };
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 3,
            spaceBetween: 10,
            preventClicks: false,
            // default is true to prevent accident click when swipe. But it caused the link is not clickable sometimes.
            breakpoints: {
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/shared/component/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/shared/component/slider/slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/shared/directive/hover-item.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directive/hover-item.directive.ts ***!
  \**********************************************************/
/*! exports provided: HoverItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverItemDirective", function() { return HoverItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HoverItemDirective = /** @class */ (function () {
    function HoverItemDirective(el) {
        this.el = el;
        this.el.nativeElement.style.color = 'black';
    }
    HoverItemDirective.prototype.onMouseEnter = function () {
        this.changeColor(this.varChangeColor || this.defaultColor || 'red');
    };
    HoverItemDirective.prototype.onMouseLeave = function () {
        this.changeColor(null);
    };
    HoverItemDirective.prototype.changeColor = function (color) {
        this.el.nativeElement.style.color = color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HoverItemDirective.prototype, "defaultColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appHoverItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HoverItemDirective.prototype, "varChangeColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverItemDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverItemDirective.prototype, "onMouseLeave", null);
    HoverItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHoverItem]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HoverItemDirective);
    return HoverItemDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipe/word-limit.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipe/word-limit.pipe.ts ***!
  \************************************************/
/*! exports provided: WordLimitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordLimitPipe", function() { return WordLimitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WordLimitPipe = /** @class */ (function () {
    function WordLimitPipe() {
    }
    WordLimitPipe.prototype.transform = function (value, length) {
        var rest = '...';
        var truncatedText = '';
        if (value.length <= length) {
            return value;
        }
        else {
            truncatedText = value.slice(0, length - 3);
        }
        return truncatedText + rest;
    };
    WordLimitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'wordLimit'
        })
    ], WordLimitPipe);
    return WordLimitPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/shared/component/header/header.component.ts");
/* harmony import */ var _component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/list-card/list-card.component */ "./src/app/shared/component/list-card/list-card.component.ts");
/* harmony import */ var _component_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/slider/slider.component */ "./src/app/shared/component/slider/slider.component.ts");
/* harmony import */ var angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-useful-swiper */ "./node_modules/angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _directive_hover_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/hover-item.directive */ "./src/app/shared/directive/hover-item.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipe_word_limit_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/word-limit.pipe */ "./src/app/shared/pipe/word-limit.pipe.ts");










// import { FavoriteDirective } from './directive/favorite.directive';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_4__["ListCardComponent"],
                _component_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _directive_hover_item_directive__WEBPACK_IMPORTED_MODULE_7__["HoverItemDirective"],
                _pipe_word_limit_pipe__WEBPACK_IMPORTED_MODULE_9__["WordLimitPipe"],
                _component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_4__["ListCardComponent"]
                // FavoriteDirective
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
            ],
            exports: [
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_4__["ListCardComponent"],
                _component_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _directive_hover_item_directive__WEBPACK_IMPORTED_MODULE_7__["HoverItemDirective"],
                _pipe_word_limit_pipe__WEBPACK_IMPORTED_MODULE_9__["WordLimitPipe"],
                _component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_4__["ListCardComponent"]
                // FavoriteDirective
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'https://reqres.in/api/'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mba0296p/training/angular-project/final-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map