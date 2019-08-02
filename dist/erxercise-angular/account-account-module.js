(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

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
/* harmony import */ var _favotite_favotite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./favotite/favotite.component */ "./src/app/account/favotite/favotite.component.ts");









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
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            },
            // {
            //   path: 'register',
            //   component: CreateComponent
            // },
            {
                path: 'favorite',
                component: _favotite_favotite_component__WEBPACK_IMPORTED_MODULE_8__["FavotiteComponent"]
            }
            // ,
            // {
            //   path: '**',
            //   component: NotFoundComponent,
            // }
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

module.exports = ".profile {\n  margin: 20px 0; }\n\n/* Profile sidebar */\n\n.profile-sidebar {\n  padding: 20px 0 10px 0;\n  background: #4c5a63;\n  height: 600px; }\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important; }\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px; }\n\n.profile-usertitle-name {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px; }\n\n.profile-usertitle-job {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px; }\n\n/* Profile Content */\n\n.profile-content {\n  padding: 20px;\n  background: #faebd7ad;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n\na {\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase; }\n\na:hover {\n  color: #cdd48a; }\n\nli {\n  margin: 0 auto;\n  list-style-type: none;\n  padding: 10px 0px; }\n\ni {\n  color: #6ca0af;\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEIsb0JBQUE7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFHWCw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQW9CckIsb0JBQUE7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVTtFQUNWLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxjQUF5QixFQUFBOztBQUczQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsY0FBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4vKiBQcm9maWxlIHNpZGViYXIgKi9cbi5wcm9maWxlLXNpZGViYXIge1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjNGM1YTYzO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ucHJvZmlsZS11c2VycGljIGltZyB7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZS11c2VydGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wcm9maWxlLXVzZXJ0aXRsZS1uYW1lIHtcbiAgY29sb3I6ICM1YTczOTE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4ucHJvZmlsZS11c2VydGl0bGUtam9iIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1YjliZDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLy8gLnByb2ZpbGUtdXNlcmJ1dHRvbnMge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyB9XG5cbi8vIC5wcm9maWxlLXVzZXJidXR0b25zIC5idG4ge1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICBmb250LXNpemU6IDExcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgIHBhZGRpbmc6IDZweCAxNXB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vIH1cblxuLy8gLnByb2ZpbGUtdXNlcmJ1dHRvbnMgLmJ0bjpsYXN0LWNoaWxkIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4vLyB9XG5cbi8qIFByb2ZpbGUgQ29udGVudCAqL1xuLnByb2ZpbGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWViZDdhZDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgIFxufVxuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjA1LCAyMTIsIDEzOCk7XG59XG5cbmxpIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5pIHtcbiAgY29sb3I6IHJnYigxMDgsIDE2MCwgMTc1KTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");



 //









var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _favotite_favotite_component__WEBPACK_IMPORTED_MODULE_9__["FavotiteComponent"],
                _account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
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

module.exports = "h4 {\n  color: #49817b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2FjY291bnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgY29sb3I6IHJnYig3MywgMTI5LCAxMjMpO1xufVxuIl19 */"

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

module.exports = "<!-- <app-list-card [listProduct]=\"listProduct\">\n</app-list-card> -->\n\n<!-- <div class=\"box\"> -->\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let itemCard of infoFavorite$\">\n    <div class=\"box-part text-center\">\n      <!-- <i class=\"fa fa-instagram fa-3x\" aria-hidden=\"true\"></i> -->\n      <img src=\"{{itemCard.img}}\" class=\"card-img-top\" alt=\"...\">\n      <div id=\"item-card-{{itemCard.id}}\" class=\"fas fa-times\" (click)=\"removeFavorite($event)\"></div>\n      <div class=\"card-body\">\n        <div class=\"title\">\n          <h5>{{itemCard.title | wordLimit:13}}</h5>\n        </div>\n        <div class=\"text\">\n          <span>{{itemCard.price | wordLimit:20}}</span>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <a [routerLink]=\"['/detail-card', itemCard.id]\" routerLinkActive=\"active\">View More</a>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/account/favotite/favotite.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/account/favotite/favotite.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  justify-content: center;\n  clear: both; }\n\n.row > div {\n  margin-bottom: 50px; }\n\n.box-part {\n  box-shadow: 3px 3px 1px 1px rgba(50, 164, 200, 0.21);\n  position: relative; }\n\n.card-body {\n  border: solid 2px #dbdbdb;\n  background-color: #d3d2d7; }\n\n.card-footer {\n  background-color: #4c5a63; }\n\n.card-footer > a {\n  color: #f5a540;\n  cursor: pointer;\n  text-decoration: none; }\n\nimg {\n  width: 100%;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.heart {\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  background-image: url(\"https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png\");\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 2900%;\n  position: absolute;\n  float: center;\n  top: -3%;\n  left: 72%;\n  z-index: 1;\n  width: 80px;\n  height: 80px; }\n\n.col-md-3 {\n  width: 255px; }\n\nh2 {\n  border-left: 2px solid orange;\n  padding-left: 5px;\n  color: #f5a540;\n  clear: both; }\n\nh5 {\n  color: #347d80d1; }\n\n.fas {\n  position: absolute;\n  color: #f5a540;\n  font-size: x-large;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2FjY291bnQvZmF2b3RpdGUvZmF2b3RpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVyxFQUFBOztBQUViO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0RBQW9EO0VBQ3BELGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBb0MsRUFBQTs7QUFFdEM7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCwwRkFBMEY7RUFDMUYseUJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQixzQkFBcUI7RUFFckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQXVCZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZmF2b3RpdGUvZmF2b3RpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNsZWFyOiBib3RoO1xufVxuLnJvdz5kaXYge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uYm94LXBhcnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDFweCAxcHggcmdiYSg1MCwgMTY0LCAyMDAsIDAuMjEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZC1ib2R5IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2RiZGJkYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjEwLCAyMTUpO1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNWE2Mztcbn1cbi5jYXJkLWZvb3Rlcj5hIHtcbiAgY29sb3I6ICNmNWE1NDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVhcnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCAnaHR0cHM6Ly9hYnMudHdpbWcuY29tL2EvMTQ0NjU0MjE5OS9pbWcvdDEvd2ViX2hlYXJ0X2FuaW1hdGlvbi5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6MjkwMCU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogY2VudGVyO1xuICB0b3A6IC0zJTtcbiAgbGVmdDogNzIlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4vLyAuaGVhcnQ6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuLy8gfVxuXG4vLyAuZmF2b3JpdGUge1xuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuLy8gfVxuXG4vLyAuaXNfYW5pbWF0aW5nIHtcbi8vICAgYW5pbWF0aW9uOiBoZWFydC1idXJzdCAuOHMgc3RlcHMoMjgpIDE7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgaGVhcnQtYnVyc3Qge1xuLy8gICBmcm9tIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQ7XG4vLyAgIH1cbi8vICAgdG8geyBcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuLy8gICB9XG4vLyB9XG4uY29sLW1kLTMge1xuICB3aWR0aDogMjU1cHg7XG59XG5cbmgyIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBvcmFuZ2U7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBjb2xvcjogI2Y1YTU0MDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbmg1e1xuICBjb2xvcjogIzM0N2Q4MGQxO1xufVxuXG4uZmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2Y1YTU0MDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICByaWdodDogMDtcbn1cbiAgIl19 */"

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
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/sevices/deactivate-dialog.service */ "./src/app/core/sevices/deactivate-dialog.service.ts");
/* harmony import */ var src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/favorite.service */ "./src/app/core/services/favorite.service.ts");






var FavotiteComponent = /** @class */ (function () {
    function FavotiteComponent(localer, api, dialogService, favorite) {
        this.localer = localer;
        this.api = api;
        this.dialogService = dialogService;
        this.favorite = favorite;
        this.listFavorite = [];
        this.infoFavorite$ = [];
    }
    FavotiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCurrent = this.localer.getSessionStorage('login');
        if (this.localer.getLocalStorage('favorite')) {
            this.listFavorite = JSON.parse(this.localer.getLocalStorage('favorite'));
            this.objInArrFavorite = this.listFavorite.find(function (item) { return item.user === _this.userCurrent; });
            this.listProduct = this.objInArrFavorite.favoriteUser;
            console.log(typeof (this.listProduct), this.listProduct);
        }
        // favorite list
        this.api.getAssets(src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["END_POINT"].newsJson).subscribe(function (data) {
            data.man.forEach(function (item) {
                if (_this.listProduct.find(function (i) { return i === item.id; })) {
                    _this.infoFavorite$.push(item);
                }
            });
            data.women.forEach(function (item) {
                if (_this.listProduct.find(function (i) { return i === item.id; })) {
                    _this.infoFavorite$.push(item);
                }
            });
            data.child.forEach(function (item) {
                if (_this.listProduct.find(function (i) { return i === item.id; })) {
                    _this.infoFavorite$.push(item);
                }
            });
            console.log(_this.infoFavorite$);
        });
    };
    FavotiteComponent.prototype.removeFavorite = function ($event) {
        this.favorite.removeFavorite($event);
        this.infoFavorite$ = this.infoFavorite$.filter(function (item) { return item.id !== Number($event.target.id.substr(10)); });
    };
    FavotiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favotite',
            template: __webpack_require__(/*! ./favotite.component.html */ "./src/app/account/favotite/favotite.component.html"),
            styles: [__webpack_require__(/*! ./favotite.component.scss */ "./src/app/account/favotite/favotite.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__["LocalerService"],
            src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DeactivateDialogService"],
            src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"]])
    ], FavotiteComponent);
    return FavotiteComponent;
}());



/***/ }),

/***/ "./src/app/account/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container emp-profile\">\n  <form [formGroup]=\"formReactive\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-img\">\n          <img\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog\"\n            alt=\"\" />\n          <div class=\"file btn btn-lg btn-primary\">\n            Change Photo\n            <input type=\"file\" name=\"file\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n          <h5>\n            {{lastName | uppercase}}\n          </h5>\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">About</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <input *ngIf=\"edit\" type=\"submit\" class=\"profile-edit-btn\" name=\"btnSave\" value=\"Save\" />\n        <input type=\"button\" class=\"profile-edit-btn\" name=\"btnShowEdit\" value=\"{{edit ? 'Cancle':'Edit'}}\" (click)=\"changeForm($event)\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n      </div>\n      <div class=\"col-md-8\" *ngIf=\"!edit\">\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{firstName}} {{lastName}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Email</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{email}}</p>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n\n      <div class=\"col-md-8\" *ngIf=\"edit\">\n          <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n              <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>First Name</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"text\" value=\"{{firstName}}\" formControlName=\"firstName\" />\n                </div>  \n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Last Name</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"text\" value=\"{{lastName}}\" formControlName=\"lastName\"/>\n                </div>  \n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Email</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"text\" value=\"{{email}}\" formControlName=\"email\" disabled/>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"password\" value=\"{{password}}\" formControlName=\"password\"/>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Confirm Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                  <input class=\"form-control\" type=\"password\" value=\"{{password}}\" formControlName=\"confirmPassword\"/>\n                </div>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/account/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/account/profile/profile.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff; }\n\n.profile-img {\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc; }\n\ninput {\n  margin-bottom: 12px;\n  font-weight: 600;\n  color: #0e62cc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsTUFBTSxFQUFBOztBQUVSO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGdDQUErQixFQUFBOztBQUVqQztFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXAtcHJvZmlsZXtcbiAgcGFkZGluZzogMyU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByb2ZpbGUtaW1ne1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWcgaW1ne1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IC0yMCU7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjEyNTI5Yjg7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4ucHJvZmlsZS1oZWFkIGg1e1xuICBjb2xvcjogIzMzMztcbn1cbi5wcm9maWxlLWhlYWQgaDZ7XG4gIGNvbG9yOiAjMDA2MmNjO1xufVxuLnByb2ZpbGUtZWRpdC1idG57XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAyJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9pbGUtcmF0aW5ne1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODE4MTgyO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5wcm9pbGUtcmF0aW5nIHNwYW57XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFic3tcbiAgbWFyZ2luLWJvdHRvbTo1JTtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMDYyY2M7XG59XG4ucHJvZmlsZS13b3Jre1xuICBwYWRkaW5nOiAxNCU7XG4gIG1hcmdpbi10b3A6IC0xNSU7XG59XG4ucHJvZmlsZS13b3JrIHB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MTgxODI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5wcm9maWxlLXdvcmsgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2ZpbGUtd29yayB1bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wcm9maWxlLXRhYiBsYWJlbHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9maWxlLXRhYiBwe1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwNjJjYztcbn1cbmlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwZTYyY2M7XG59XG4iXX0= */"

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



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map