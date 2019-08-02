(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"./src/app/account/account.module.ts",
		"account-account-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/not-found/not-found.component */ "./src/app/features/not-found/not-found.component.ts");






var routers = [
    {
        path: '',
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"]
    },
    {
        path: '',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
    },
    {
        // path: 'account',
        // component: AccountComponent,
        // lazy load
        path: '',
        loadChildren: './account/account.module#AccountModule'
    },
    {
        path: '**',
        component: _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
    }
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

module.exports = "<header>\n  <app-header></app-header>\n  <ng-container *ngIf=\"router.url == '/'\">\n    <app-slider></app-slider>\n  </ng-container>\n\n  <div class=\"title-page\" *ngIf=\"router.url == '/child'\">\n    <div class=\"inner inner4\">List product children</div>\n  </div>\n\n  <div class=\"title-page\" *ngIf=\"router.url == '/men'\">\n    <div class=\"inner inner4\">List product men</div>\n  </div>\n\n  <div class=\"title-page\" *ngIf=\"router.url == '/women'\">\n    <div class=\"inner inner4\">List product women.</div>\n  </div>\n\n</header>\n\n<main class=\"page-content container\">\n\n  <!-- exercise7: angular attribute direction -->\n  <ng-template>\n    <h4>Attribute Directive</h4>\n    <h5>Pick a hover color</h5>\n    <div>\n      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n      <input type=\"radio\" name=\"colors\" (click)=\"color='green'\">Green\n      <input type=\"radio\" name=\"colors\" (click)=\"color='pink'\">Pink\n      <input type=\"radio\" name=\"colors\" (click)=\"color='purple'\">Purple\n    </div>\n    <button [appHoverItem]=\"color\">konichiwa</button>\n    <button [appHoverItem]=\"color\" defaultColor=\"violet\">sayyounara</button>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n</main>\n\n<!-- Footer -->\n<app-footer></app-footer>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.banner {\n  background-image: url(\"https://js.devexpress.com/Content/ImagesNew/Overview/angular-banner.png\");\n  height: 180px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\nh1 {\n  color: white;\n  padding-top: 55px; }\n\n.container {\n  width: 1240px;\n  margin: 0 auto; }\n\n.page-content {\n  margin-top: 5%;\n  margin-bottom: 10%; }\n\nbutton {\n  margin: 50px;\n  border: 1px solid gray;\n  border-radius: 15px; }\n\n.card-news > div > img {\n  width: 348px;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.title-page {\n  background-image: url('bgr-img-title-page.png');\n  line-height: 300px;\n  padding-left: 162px;\n  font-family: fantasy; }\n\n.inner {\n  display: inline-block;\n  vertical-align: middle;\n  background: #4c5a63;\n  padding: 3px 5px; }\n\n.inner4 {\n  line-height: normal;\n  /* Reset line-height for the child. */\n  background: none;\n  margin: 0 auto;\n  color: #633808;\n  font-size: xx-large; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdHQUFnRztFQUNoRyxhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQVlwQjtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLCtDQUFnRTtFQUNoRSxrQkFBa0I7RUFFbEIsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG1CQUFtQjtFQUFFLHFDQUFBO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBcUI7RUFDckIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9qcy5kZXZleHByZXNzLmNvbS9Db250ZW50L0ltYWdlc05ldy9PdmVydmlldy9hbmd1bGFyLWJhbm5lci5wbmdcIik7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNTVweDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTI0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4vLyAucGFnZS1mb290ZXIge1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBsaW5lLWhlaWdodDogMztcbi8vIH1cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jYXJkLW5ld3M+ZGl2PmltZyB7XG4gIHdpZHRoOiAzNDhweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGl0bGUtcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9iZ3ItaW1nLXRpdGxlLXBhZ2UucG5nJyk7XG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE2MnB4O1xuICBmb250LWZhbWlseTogZmFudGFzeTtcbn1cblxuLmlubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kOnJnYig3NiwgOTAsIDk5KTs7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG5cbi5pbm5lcjQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsOyAvKiBSZXNldCBsaW5lLWhlaWdodCBmb3IgdGhlIGNoaWxkLiAqL1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IHJnYig5OSwgNTYsIDgpO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG5cbi8vIHN3aXBlcntcbi8vICAgaGVpZ2h0OiAyNTBweDtcbi8vICAgd2lkdGg6IDgwJTtcbi8vICAgbWFyZ2luOiBhdXRvO1xuLy8gfVxuXG4vLyAuc3dpcGVyLXNsaWRle1xuLy8gICBpbWd7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgfVxuLy8gfVxuIl19 */"

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
    }
    // config: SwiperOptions = {
    //   autoplay: 3000, // Autoplay option having value in milliseconds
    //   initialSlide: 3, // Slide Index Starting from 0
    //   slidesPerView: 3, // Slides Visible in Single View Default is 1
    //   pagination: '.swiper-pagination', // Pagination Class defined
    //   paginationClickable: true, // Making pagination dots clicable
    //   nextButton: '.swiper-button-next', // Class for next button
    //   prevButton: '.swiper-button-prev', // Class for prev button
    //   spaceBetween: 30 // Space between each Item
    // };
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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");















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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_8__["FeaturesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                // AccountModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                // SwiperModule
            ],
            // providers: [FeaturesModule],
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
/* harmony import */ var _core_services_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/services/cookie.service */ "./src/app/core/services/cookie.service.ts");
/* harmony import */ var _core_services_localer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/services/localer.service */ "./src/app/core/services/localer.service.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");














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
            ],
            providers: [
                _core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _core_services_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
                _core_services_localer_service__WEBPACK_IMPORTED_MODULE_10__["LocalerService"],
                _core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
            ]
        })
    ], AuthModule);
    return AuthModule;
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

module.exports = "div.container {\n  background-color: #717679a6; }\n\nform {\n  padding-bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2F1dGgvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTc2NzlhNjtcbn1cbmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4iXX0= */"

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
            if (valStorage) {
                this.arr = JSON.parse(this.localer.getLocalStorage(key));
                this.check = this.arr.map(function (element) { return element.email; }).includes(value.email);
                if (!this.check) {
                    this.arr.push(value);
                    this.localer.removeLocalStorage(key);
                    this.localer.saveLocalStorage(key, this.arr);
                    this.router.navigate(['/login']);
                }
            }
            else {
                this.localer.saveLocalStorage(key, [value]);
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

module.exports = ".mess {\n  width: 40%;\n  margin: 0 auto; }\n\n.form-login > div {\n  width: 40%;\n  margin-top: 5px; }\n\n.card {\n  background-color: #4c5a63;\n  color: #fff; }\n\n.card-body {\n  background-color: #717679a6; }\n\n.social_icon > span > i {\n  font-size: 30px;\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzcyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvcm0tbG9naW4+ZGl2IHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXRvcDogNXB4OyBcbn1cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNWE2MztcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzY3OWE2OyAgXG59XG4uc29jaWFsX2ljb24+c3Bhbj5pIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */"

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

/***/ "./src/app/core/services/favorite.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/favorite.service.ts ***!
  \***************************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _localer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localer.service */ "./src/app/core/services/localer.service.ts");



var FavoriteService = /** @class */ (function () {
    function FavoriteService(localer) {
        this.localer = localer;
        this.objCartList = { user: '', favoriteUser: [] };
        this.favoriteList = [];
    }
    FavoriteService.prototype.addFavorite = function ($event) {
        var _this = this;
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
                if (confirm('Do you want to give up your favorite?')) {
                    // tslint:disable-next-line:max-line-length
                    this.favoriteList[this.idFavorite].favoriteUser = this.favoriteList[this.idFavorite].favoriteUser.filter(function (item) { return item !== Number($event.target.id.substr(10)); });
                    this.localer.saveLocalStorage('favorite', this.favoriteList);
                    $event.target.classList.remove('favorite');
                }
            }
        }
    };
    FavoriteService.prototype.removeFavorite = function ($event) {
        var _this = this;
        if (confirm('Do you want to give up your favorite?')) {
            if (this.localer.getLocalStorage('favorite')) {
                this.favoriteList = JSON.parse(this.localer.getLocalStorage('favorite'));
            }
            if (this.favoriteList) {
                this.idFavorite = this.favoriteList.findIndex(function (item) { return item.user === _this.localer.getSessionStorage('login'); });
            }
            // tslint:disable-next-line:max-line-length
            this.favoriteList[this.idFavorite].favoriteUser = this.favoriteList[this.idFavorite].favoriteUser.filter(function (item) { return item !== Number($event.target.id.substr(10)); });
            this.localer.saveLocalStorage('favorite', this.favoriteList);
            $event.target.classList.remove('favorite');
        }
    };
    FavoriteService.prototype.checkFavorite = function ($event) {
        var _this = this;
        if (this.localer.getLocalStorage('favorite')) {
            this.favoriteList = JSON.parse(this.localer.getLocalStorage('favorite'));
        }
        if (this.favoriteList) {
            this.idFavorite = this.favoriteList.findIndex(function (item) { return item.user === _this.localer.getSessionStorage('login'); });
        }
        return this.favoriteList[this.idFavorite].favoriteUser.includes(Number($event.target.id.substr(10)));
    };
    FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_localer_service__WEBPACK_IMPORTED_MODULE_2__["LocalerService"]])
    ], FavoriteService);
    return FavoriteService;
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

module.exports = ".btn-localer {\n  text-align: center; }\n\n.btn-localer > button {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2ZlYXR1cmVzL2J0bi1sb2NhbGVyL2J0bi1sb2NhbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYnRuLWxvY2FsZXIvYnRuLWxvY2FsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxvY2FsZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLWxvY2FsZXI+YnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuIl19 */"

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

module.exports = "\n  <!-- Portfolio Item Heading -->\n  <!-- <h1 class=\"my-4\">Page Heading\n    <small>Secondary Text</small>\n  </h1> -->\n\n  <!-- Portfolio Item Row -->\n  <div class=\"row\">\n\n    <div class=\"col-md-8\">\n      <img class=\"img-fluid img-card\" src=\"{{infoCard?.img}}\" alt=\"\">\n    </div>\n\n    <div class=\"col-md-4\">\n      <h3 class=\"my-3\">{{infoCard?.title}}</h3>\n      <p>{{infoCard?.desc}}</p>\n      <h3 class=\"my-3\">Price:</h3>\n      <p>{{infoCard?.price}}</p>\n      <button *ngIf=\"checkLogin\" [attr.disabled]=\"checkFavorite\" class=\"button button-like\" id=\"item-card-{{infoCard?.id}}\" (click)=\"addFavorite($event)\">\n        <i class=\"fa fa-heart\"></i>\n        <span>Add your favorite</span>\n      </button>\n    </div>\n\n  </div>\n  <!-- /.row -->\n\n  <!-- Related Projects Row -->\n  <h3 class=\"my-4\">Related Product</h3>\n\n  <app-list-card namePage=\"\" [listInfoProduct$]=\"relativalCard\" [limit]=4></app-list-card>\n"

/***/ }),

/***/ "./src/app/features/detail-card/detail-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/detail-card/detail-card.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-card {\n  width: 480px;\n  height: 500px; }\n\n.img-related {\n  width: 200px;\n  height: 250px; }\n\na {\n  display: table-row-group; }\n\n.button-like {\n  border: 2px solid #8a8a8a;\n  background-color: transparent;\n  text-decoration: none;\n  padding: 1rem;\n  position: relative;\n  vertical-align: middle;\n  text-align: center;\n  display: inline-block;\n  border-radius: 3rem;\n  color: #8a8a8a;\n  transition: all ease 0.4s; }\n\n.button-like span {\n  margin-left: 0.5rem; }\n\n.button-like .fa,\n.button-like span {\n  transition: all ease 0.4s; }\n\nbutton:disabled,\nbutton[disabled] {\n  color: #cc4b37;\n  border-color: #cc4b37;\n  background-color: transparent;\n  cursor: not-allowed; }\n\n.my-4 {\n  padding-top: 40px;\n  color: #289628; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL2ZlYXR1cmVzL2RldGFpbC1jYXJkL2RldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWY7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUVFLHlCQUF5QixFQUFBOztBQUczQjs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZGV0YWlsLWNhcmQvZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNhcmQge1xuICB3aWR0aDogNDgwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG4uaW1nLXJlbGF0ZWQge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG5hIHtcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xufVxuLy9hZGQgeW91ciBmYXZvcml0ZVxuLmJ1dHRvbi1saWtlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzhhOGE4YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgY29sb3I6ICM4YThhOGE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG59XG5cbi5idXR0b24tbGlrZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmJ1dHRvbi1saWtlIC5mYSxcbi5idXR0b24tbGlrZSBzcGFuIHtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcbn1cblxuYnV0dG9uOmRpc2FibGVkLFxuYnV0dG9uW2Rpc2FibGVkXXtcbiAgY29sb3I6ICNjYzRiMzc7XG4gIGJvcmRlci1jb2xvcjogI2NjNGIzNztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5teS00IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGNvbG9yOiAjMjg5NjI4O1xufVxuIl19 */"

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
/* harmony import */ var src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/favorite.service */ "./src/app/core/services/favorite.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");






var DetailCardComponent = /** @class */ (function () {
    function DetailCardComponent(route, api, authService, favorite) {
        this.route = route;
        this.api = api;
        this.authService = authService;
        this.favorite = favorite;
        this.checkLogin = false;
    }
    DetailCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.paramMap.subscribe(function (params) {
            _this.id = +params.get('id'); // (+) converts string 'id' to a number
            console.log('id product:' + _this.id);
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
        if (this.authService.isLoggedIn()) {
            this.checkLogin = true;
        }
    };
    DetailCardComponent.prototype.addFavorite = function ($event) {
        this.favorite.addFavorite($event);
        this.checkFavorite = this.favorite.checkFavorite($event);
        // disactive button when favorited
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
            src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"]])
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-card/detail-card.component */ "./src/app/features/detail-card/detail-card.component.ts");
/* harmony import */ var _shared_component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/component/list-card/list-card.component */ "./src/app/shared/component/list-card/list-card.component.ts");







var routes = [
    {
        path: '',
        component: _features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"],
        children: [
            {
                path: 'men',
                component: _shared_component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_6__["ListCardComponent"],
            },
            {
                path: 'women',
                component: _shared_component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_6__["ListCardComponent"],
            },
            {
                path: 'child',
                component: _shared_component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_6__["ListCardComponent"],
            },
            {
                path: 'detail-card/:id',
                component: _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_5__["DetailCardComponent"]
            },
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                data: { page: 'home' }
            }
            // ,
            // {
            //   path: '**',
            //   component: NotFoundComponent
            // }
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-card/detail-card.component */ "./src/app/features/detail-card/detail-card.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/features/not-found/not-found.component.ts");










var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _btn_localer_btn_localer_component__WEBPACK_IMPORTED_MODULE_5__["BtnLocalerComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _detail_card_detail_card_component__WEBPACK_IMPORTED_MODULE_7__["DetailCardComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _features_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeaturesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
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

module.exports = "<ng-container *ngTemplateOutlet=\"sliderHome\"></ng-container>\n\n<div class=\"box\">\n  <!-- <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let itemCard of listProduct$\">\n      <ng-container [ngTemplateOutlet]=\"productByCategory\"\n      [ngTemplateOutletContext]=\"{itemCard:itemCard}\">\n      </ng-container>\n    </div>\n  </div> -->\n  <app-list-card namePage=\"Children\" [listInfoProduct$]=\"child\" [limit]=limit></app-list-card>\n  <app-list-card namePage=\"Men\" [listInfoProduct$]=\"man\" [limit]=limit></app-list-card>\n  <app-list-card namePage=\"Women\" [listInfoProduct$]=\"women\" [limit]=limit></app-list-card>\n</div>\n\n<!-- <ng-template #productByCategory let-itemCard=\"itemCard\">\n    <div class=\"box-part text-center\">\n      <img src=\"{{itemCard.img}}\" class=\"card-img-top\" alt=\"...\">\n      <div  *ngIf=\"checkLogin\" id=\"item-card-{{itemCard.id}}\" class=\"heart\" (click)=\"addFavorite($event)\"></div>\n      <div class=\"card-body\">\n        <div class=\"title\">\n          <h4>{{itemCard.title | wordLimit:13}}</h4>\n        </div>\n        <div class=\"text\">\n          <span>{{itemCard.price}}</span>\n          <h5>{{itemCard.desc | wordLimit:20}}</h5>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <a [routerLink]=\"['/detail-card', itemCard.id]\" routerLinkActive=\"active\">View More</a>\n      </div>\n    </div>\n</ng-template> -->\n"

/***/ }),

/***/ "./src/app/features/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/favorite.service */ "./src/app/core/services/favorite.service.ts");





// import { Transform } from 'stream';


var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, authService, localer, router, route, favorite) {
        this.api = api;
        this.authService = authService;
        this.localer = localer;
        this.router = router;
        this.route = route;
        this.favorite = favorite;
        this.products = [];
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
            // tslint:disable-next-line:no-shadowed-variable
            _this.route.data.subscribe(function (item) {
                if (item.page === 'child') {
                    _this.listProduct$ = _this.child;
                    _this.women = [];
                    _this.man = [];
                }
                else if (item.page === 'men') {
                    _this.listProduct$ = _this.man;
                    _this.child = [];
                    _this.women = [];
                }
                else if (item.page === 'women') {
                    _this.listProduct$ = _this.women;
                    _this.man = [];
                    _this.child = [];
                }
                else {
                    _this.listProduct$ = _this.products;
                    _this.limit = 4;
                }
            });
        });
        // if (this.authService.isLoggedIn()) {
        //   this.checkLogin = true;
        // }
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
        $event.target.classList.toggle('is_animating');
        this.favorite.addFavorite($event);
    };
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
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/not-found/not-found.component.html":
/*!*************************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Not found page!</h3>\n"

/***/ }),

/***/ "./src/app/features/not-found/not-found.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/not-found/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.ts ***!
  \***********************************************************/
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
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/features/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/features/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small mdb-color lighten-3 pt-4\">\n  <div class=\"container text-center text-md-left\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">Footer Content</h5>\n        <p>Content Website: sales clothes for everyone. Consist categories: MEN, WOMEN, CHILDREN.</p>\n        <p>Course: Angular Basic for employee's AT.</p>\n      </div>\n      <hr class=\"clearfix w-100 d-md-none\">\n      <div class=\"col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">About</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <p>\n              <a href=\"#!\">PROJECTS</a>\n            </p>\n          </li>\n          <li>\n            <p>\n              <a href=\"#!\">ABOUT US</a>\n            </p>\n          </li>\n          <li>\n            <p>\n              <a href=\"#!\">BLOG</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n      <hr class=\"clearfix w-100 d-md-none\">\n      <div class=\"col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">Address</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <p>\n              <i class=\"fa fa-home mr-3\"></i> DA NANG, MAY 2019, VN</p>\n          </li>\n          <li>\n            <p>\n              <i class=\"fa fa-envelope mr-3\"></i> be.truong@asiantech.vn</p>\n          </li>\n          <li>\n            <p>\n              <i class=\"fa fa-phone mr-3\"></i> + 0123 456 789</p>\n          </li>\n        </ul>\n      </div>\n      <hr class=\"clearfix w-100 d-md-none\">\n      <div class=\"col-md-2 col-lg-2 text-center mx-auto my-4 social-ft\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">Follow Us</h5>\n        <ul>\n          <li>\n            <i class=\"fa fa-facebook-f\"></i>\n          </li>\n          <li>\n            <i class=\"fa fa-twitter\"></i>\n          </li>\n          <li>\n            <i class=\"fa fa-google-plus\"></i>\n          </li>\n          <li>\n            <i class=\"fa fa-dribbble\"></i>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n    <a href=\"https://mdbootstrap.com/education/bootstrap/\"> Trương Thị Bé</a>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: goldenrod; }\n\n.social-ft > ul > li {\n  list-style-type: none;\n  font-size: 24px; }\n\n.page-footer {\n  background-color: #4C5A71;\n  color: white; }\n\n.fa-facebook-f {\n  color: #007bff; }\n\n.fa-twitter {\n  color: #00ccff; }\n\n.fa-google-plus {\n  color: rgba(243, 52, 52, 0.829); }\n\n.fa-dribbble {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFFZDtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUF1QixFQUFBOztBQUV6QjtFQUNFLCtCQUErQixFQUFBOztBQUVqQztFQUNFLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbn1cbi5zb2NpYWwtZnQ+dWw+bGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5wYWdlLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzVBNzE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mYS1mYWNlYm9vay1mIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uZmEtdHdpdHRlciB7XG4gIGNvbG9yOiByZ2IoMCwgMjA0LCAyNTUpO1xufVxuLmZhLWdvb2dsZS1wbHVzIHtcbiAgY29sb3I6IHJnYmEoMjQzLCA1MiwgNTIsIDAuODI5KTtcbn1cbi5mYS1kcmliYmJsZSB7XG4gIGNvbG9yOmJsYWNrO1xufVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/component/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <div class=\"container\">\n    <div class=\"navbar-brand\" href=\"#\">\n      <img id=\"nav-logo\" alt=\"Angular Logo\" src=\"../assets/images/logo.png\">\n      <span>TTBe</span>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/women\" routerLinkActive=\"active\">Woman</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/men\" routerLinkActive=\"active\">Men</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/child\" routerLinkActive=\"active\">Children</a>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!status\" class=\"nav-item nav-left float-right\">\n      <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n    </div>\n    <div *ngIf=\"status\" class=\"nav-item nav-left float-right\">\n      <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">{{status}}</a>\n      <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/component/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-transform: uppercase; }\n\nnav {\n  text-transform: uppercase;\n  background-color: #4c5a63; }\n\n.nav-tabs > li > a {\n  color: black; }\n\n#nav-logo {\n  width: 30px;\n  vertical-align: bottom; }\n\n.float-right {\n  float: right;\n  color: #5dffcd;\n  text-align: center; }\n\n.float-right > a {\n  color: rgba(255, 255, 255, 0.5); }\n\n.float-right > a:hover {\n  color: #fff; }\n\n.container {\n  width: 1240px;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSwrQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxubmF2IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNWE2Mztcbn1cbi5uYXYtdGFicz5saT5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuI25hdi1sb2dvIHtcbiAgd2lkdGg6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uZmxvYXQtcmlnaHR7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM1ZGZmY2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbG9hdC1yaWdodD5hIHtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xufVxuLmZsb2F0LXJpZ2h0PmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTI0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

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

module.exports = "<!-- <div class=\"box\"> -->\n<h2>{{namePage}}</h2>\n<div class=\"row\" >\n  <div class=\"col-md-3\" *ngFor=\"let itemCard of listInfoProduct$\">\n    <div class=\"box-part text-center\">\n      <!-- <i class=\"fa fa-instagram fa-3x\" aria-hidden=\"true\"></i> -->\n      <img src=\"{{itemCard.img}}\" class=\"card-img-top\" alt=\"...\">\n      <div *ngIf=\"login\" id=\"item-card-{{itemCard.id}}\" class=\"heart\" [class.favorite]=\"itemCard.isLike\" (click)=\"addFavorite($event)\"></div>\n      <div class=\"card-body\">\n        <div class=\"title\">\n          <h5>{{itemCard.title | wordLimit:20}}</h5>\n        </div>\n        <div class=\"text\">\n          <span>{{itemCard.price}}</span>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <a [routerLink]=\"['/detail-card', itemCard.id]\"s routerLinkActive=\"active\">View More</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"more\" *ngIf=\"limit && namePage=='Children'\"><a routerLink=\"/child\" routerLinkActive=\"active\">More {{namePage}}</a></div>\n<div class=\"more\" *ngIf=\"limit && namePage=='Men'\"><a routerLink=\"/men\" routerLinkActive=\"active\">More {{namePage}}</a></div>\n<div class=\"more\" *ngIf=\"limit && namePage=='Women'\"><a routerLink=\"/women\" routerLinkActive=\"active\">More {{namePage}}</a></div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/shared/component/list-card/list-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/list-card/list-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  justify-content: center;\n  clear: both; }\n\n.row > div {\n  margin-bottom: 10px; }\n\n.box-part {\n  box-shadow: 3px 3px 1px 1px rgba(50, 164, 200, 0.21); }\n\n.card-body {\n  border: solid 2px #dbdbdb;\n  background-color: #d3d2d7; }\n\n.card-footer {\n  background-color: #4c5a63; }\n\n.card-footer > a {\n  color: #f5a540;\n  cursor: pointer;\n  text-decoration: none; }\n\nimg {\n  width: 100%;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.heart {\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  background-image: url(\"https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png\");\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 2900%;\n  position: absolute;\n  float: center;\n  top: -3%;\n  left: 72%;\n  z-index: 1;\n  width: 80px;\n  height: 80px; }\n\n.heart:hover {\n  background-position: right; }\n\n.favorite {\n  background-position: right; }\n\n.is_animating {\n  -webkit-animation: heart-burst 0.8s steps(28) 1;\n          animation: heart-burst 0.8s steps(28) 1; }\n\n@-webkit-keyframes heart-burst {\n  from {\n    background-position: left; }\n  to {\n    background-position: right; } }\n\n@keyframes heart-burst {\n  from {\n    background-position: left; }\n  to {\n    background-position: right; } }\n\n.col-md-3 {\n  width: 255px; }\n\nh2 {\n  border-left: 2px solid orange;\n  padding-left: 5px;\n  color: #f5a540;\n  clear: both; }\n\nh5 {\n  color: #347d80d1; }\n\n@media screen and (min-width: 768px) {\n  .col-md {\n    flex-basis: 1; } }\n\ndiv.more {\n  float: right;\n  font-size: 20px;\n  cursor: e-resize; }\n\ndiv.more::after {\n  content: '>>';\n  color: #007bff; }\n\ndiv.more > a {\n  text-decoration: none;\n  cursor: e-resize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbGlzdC1jYXJkL2xpc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBRWI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvREFBb0QsRUFBQTs7QUFFdEQ7RUFDRSx5QkFBeUI7RUFDekIseUJBQW9DLEVBQUE7O0FBRXRDO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEZBQTBGO0VBQzFGLHlCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isc0JBQXFCO0VBRXJCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLCtDQUFzQztVQUF0Qyx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRTtJQUNFLHlCQUF3QixFQUFBO0VBRTFCO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLHlCQUF3QixFQUFBO0VBRTFCO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFHN0I7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFHSDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2xpc3QtY2FyZC9saXN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNsZWFyOiBib3RoO1xufVxuLnJvdz5kaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYm94LXBhcnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDFweCAxcHggcmdiYSg1MCwgMTY0LCAyMDAsIDAuMjEpO1xufVxuLmNhcmQtYm9keSB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNkYmRiZGI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMCwgMjE1KTtcbn1cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzVhNjM7XG59XG4uY2FyZC1mb290ZXI+YSB7XG4gIGNvbG9yOiAjZjVhNTQwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlYXJ0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCggJ2h0dHBzOi8vYWJzLnR3aW1nLmNvbS9hLzE0NDY1NDIxOTkvaW1nL3QxL3dlYl9oZWFydF9hbmltYXRpb24ucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOjI5MDAlO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgdG9wOiAtMyU7XG4gIGxlZnQ6IDcyJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmhlYXJ0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtcbn1cblxuLmZhdm9yaXRlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtcbn1cblxuLmlzX2FuaW1hdGluZyB7XG4gIGFuaW1hdGlvbjogaGVhcnQtYnVyc3QgLjhzIHN0ZXBzKDI4KSAxO1xufVxuXG5Aa2V5ZnJhbWVzIGhlYXJ0LWJ1cnN0IHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0O1xuICB9XG4gIHRvIHsgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtcbiAgfVxufVxuLmNvbC1tZC0zIHtcbiAgd2lkdGg6IDI1NXB4O1xufVxuXG5oMiB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgb3JhbmdlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNmNWE1NDA7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5oNXtcbiAgY29sb3I6ICMzNDdkODBkMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1tZCB7XG4gICAgICBmbGV4LWJhc2lzOiAxO1xuICB9XG59XG5cbmRpdi5tb3JlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogZS1yZXNpemU7XHRcbn1cblxuZGl2Lm1vcmU6OmFmdGVyIHtcbiAgY29udGVudDogJz4+JztcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5kaXYubW9yZT5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IGUtcmVzaXplO1x0XG59XG4iXX0= */"

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
/* harmony import */ var src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/favorite.service */ "./src/app/core/services/favorite.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");








var ListCardComponent = /** @class */ (function () {
    // listInfoProduct$: Array<any> =  [];
    function ListCardComponent(authService, api, localer, dialogService, favorite, router) {
        var _this = this;
        this.authService = authService;
        this.api = api;
        this.localer = localer;
        this.dialogService = dialogService;
        this.favorite = favorite;
        this.router = router;
        this.objCartList = { user: '', favoriteUser: [] };
        this.favoriteList = [];
        this.login = false;
        this.listInfoProduct$ = [];
        if (this.listInfoProduct$.length === 0) {
            this.namePage = this.router.url.split(/[/]/)[1];
            this.api.getAssets(_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["END_POINT"].newsJson).subscribe(function (data) {
                if (_this.namePage === 'men') {
                    _this.listInfoProduct$ = data.man;
                    _this.showLiked(_this.listInfoProduct$);
                    _this.namePage = 'Men';
                }
                else if (_this.namePage === 'women') {
                    _this.listInfoProduct$ = data.women;
                    _this.showLiked(_this.listInfoProduct$);
                    _this.namePage = 'Women';
                }
                else if (_this.namePage === 'child') {
                    _this.listInfoProduct$ = data.child;
                    _this.showLiked(_this.listInfoProduct$);
                    _this.namePage = 'Children';
                }
            });
        }
    }
    ListCardComponent.prototype.ngOnChanges = function () {
        if (this.listInfoProduct$ && this.limit) {
            this.listInfoProduct$ = this.listInfoProduct$.splice(0, this.limit);
        }
        this.showLiked(this.listInfoProduct$);
    };
    ListCardComponent.prototype.ngOnInit = function () {
        this.getListIdFavorite();
    };
    ListCardComponent.prototype.addFavorite = function ($event) {
        $event.target.classList.toggle('is_animating');
        this.favorite.addFavorite($event);
    };
    ListCardComponent.prototype.getListIdFavorite = function () {
        // 1.1favorite - check showed heart or check login
        if (this.authService.isLoggedIn()) {
            this.login = true;
            var user_1 = this.localer.getSessionStorage('login');
            // get id
            if (typeof this.localer.getLocalStorage('favorite') === 'string') {
                this.objCartList = JSON.parse(this.localer.getLocalStorage('favorite')).find(function (item) { return item.user === user_1; });
                this.favoriteList = this.objCartList.favoriteUser;
            }
        }
    };
    ListCardComponent.prototype.showLiked = function (listProduct) {
        var _this = this;
        // 1.2favorite - compare
        if (typeof listProduct === 'object') {
            listProduct.forEach(function (item) {
                item.isLike = false;
                if (_this.favoriteList.includes(item.id)) {
                    item.isLike = true;
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListCardComponent.prototype, "listProduct", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListCardComponent.prototype, "namePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListCardComponent.prototype, "listInfoProduct$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListCardComponent.prototype, "limit", void 0);
    ListCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-card',
            template: __webpack_require__(/*! ./list-card.component.html */ "./src/app/shared/component/list-card/list-card.component.html"),
            styles: [__webpack_require__(/*! ./list-card.component.scss */ "./src/app/shared/component/list-card/list-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_3__["LocalerService"],
            src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DeactivateDialogService"],
            src_app_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
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

module.exports = "<!-- <swiper [config]=\"config\">\n    <div class=\"swiper-container\">\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider1.jpeg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider2.png\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider3.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider4.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider5.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider6.jpg\" />\n    </div>\n    <div class=\"swiper-slide\">\n      <img src=\"../assets/images/slider/slider7.jpg\" />\n    </div>\n  </div>\n  <div class=\"swiper-pagination\"></div>\n  <div class=\"swiper-button-next\"></div>\n  <div class=\"swiper-button-prev\"></div>\n  </div>\n</swiper> -->\n\n\n<div class=\"bd-example\">\n  <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"../assets/images/slider/banner1.png\" class=\"d-block w-100 h-25\" alt=\"...\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>First slide label</h5>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../assets/images/slider/banner2.jpg\" class=\"d-block w-100 h-25\" alt=\"...\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>Second slide label</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../assets/images/slider/banner3.jpg\" class=\"d-block w-100 h-25\" alt=\"...\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>Third slide label</h5>\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/component/slider/slider.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/slider/slider.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper {\n  height: 250px;\n  width: 100%; }\n\n.swiper-slide img {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.carousel-item {\n  height: -webkit-fill-available; }\n\n.carousel-caption {\n  font-size: 24px;\n  color: #198f15;\n  text-shadow: 0.5px 0.5px 0 #fff, 1px 1px 0 #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9hbmd1bGFyLXByb2plY3QvYW5ndWxhci10cmFpbmluZy1maW5hbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2I7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxlQUFlO0VBQ2YsY0FBdUI7RUFDdkIsK0NBQStDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVye1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZXtcbiAgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHJnYigyNSwgMTQzLCAyMSk7XG4gIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCAwICNmZmYsIDFweCAxcHggMCAjZmZmO1xufVxuIl19 */"

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
            truncatedText = value.toString().slice(0, length - 3);
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
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/shared/component/footer/footer.component.ts");











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
                _component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_4__["ListCardComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
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
                _component_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_4__["ListCardComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
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

module.exports = __webpack_require__(/*! /Users/mba0296p/training/angular-project/angular-training-final/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map