webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts"
	],
	"app/user/user.module": [
		"../../../../../src/app/user/user.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_moment__ = __webpack_require__("../../../../ngx-moment/esm5/ngx-moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__error__ = __webpack_require__("../../../../../src/app/error/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_13__core__["a" /* AppLayoutComponent */], __WEBPACK_IMPORTED_MODULE_13__core__["b" /* AuthLayoutComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase, 'meuponto'),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15__error__["b" /* ErrorModule */],
                __WEBPACK_IMPORTED_MODULE_16__shared__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__("../../../../../src/app/error/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__("../../../../../src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__core__["a" /* AppLayoutComponent */],
        children: [{
                path: 'user',
                loadChildren: 'app/user/user.module#UserModule'
            }]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__core__["b" /* AuthLayoutComponent */],
        children: [{
                path: '',
                loadChildren: 'app/auth/auth.module#AuthModule'
            }]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__error__["a" /* Error404Component */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.abortNavigate = function (next) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__auth__["b" /* URL */].LOGIN], {
            queryParams: {
                next: next
            }
        });
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.isAuthenticated().map(function (isAuthenticated) {
            if (isAuthenticated) {
                return true;
            }
            _this.abortNavigate(state.url);
            return false;
        });
        // return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-container\">\r\n\t<div class=\"auth-wrapper\">\r\n\t\t<div class=\"left-content\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\n.auth-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  background: #f5f7fa; }\n.auth-wrapper {\n  -webkit-box-shadow: 0 0px 30px 0px #00000017;\n          box-shadow: 0 0px 30px 0px #00000017;\n  color: #666;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden; }\n.auth-wrapper * {\n    -webkit-transition: all ease .2s;\n    transition: all ease .2s; }\n@media (min-width: 427px) {\n    .auth-wrapper {\n      width: 400px;\n      margin: 0 auto;\n      left: 0;\n      right: 0; } }\n@media (min-width: 769px) and (min-height: 720px) {\n    .auth-wrapper {\n      max-width: 1000px;\n      width: 90%;\n      min-width: 750px;\n      height: 700px;\n      margin-top: 5%;\n      background-image: url(/assets/images/bg.jpg);\n      background-size: contain;\n      background-position: right; } }\n.auth-wrapper .left-content {\n    padding: 20px;\n    background: white;\n    height: 100%;\n    overflow: auto; }\n@media (min-width: 769px) and (min-height: 720px) {\n      .auth-wrapper .left-content {\n        width: 350px; } }\n.auth-wrapper .left-content img {\n      width: 150px;\n      margin: 0 auto;\n      display: block;\n      margin-top: 10px;\n      opacity: .8; }\n@media (min-width: 427px) {\n        .auth-wrapper .left-content img {\n          width: 200px;\n          margin-top: 40px; } }\n.auth-wrapper .left-content .welcome {\n      text-align: center;\n      margin: 20px 0;\n      font-weight: 100;\n      color: #666;\n      padding: 0 30px; }\n@media (min-width: 427px) {\n        .auth-wrapper .left-content .welcome {\n          margin: 30px 0;\n          padding: 0 50px; } }\n.auth-wrapper .left-content .welcome h1 {\n        font-size: 20px;\n        display: block;\n        margin-bottom: 10px;\n        padding-bottom: 10px;\n        border-bottom: 1px dashed #dadada; }\n.auth-wrapper .left-content .welcome p {\n        margin-bottom: 0;\n        font-size: 13px;\n        line-height: 20px; }\n.auth-wrapper .left-content .welcome a {\n        display: block;\n        color: #F3005B;\n        font-weight: bold; }\n.auth-wrapper .left-content form {\n      padding: 0 20px; }\n.auth-wrapper .left-content .links {\n      font-size: 14px;\n      text-align: center;\n      color: #666; }\nauth-wrapper {\n  -webkit-box-shadow: 0 0px 30px 0px #00000017;\n          box-shadow: 0 0px 30px 0px #00000017;\n  color: #666;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden; }\nauth-wrapper * {\n    -webkit-transition: all ease .2s;\n    transition: all ease .2s; }\n@media (min-width: 427px) {\n    auth-wrapper {\n      width: 400px;\n      margin: 0 auto;\n      left: 0;\n      right: 0; } }\n@media (min-width: 769px) and (min-height: 720px) {\n    auth-wrapper {\n      max-width: 1000px;\n      width: 90%;\n      min-width: 750px;\n      height: 700px;\n      margin-top: 5%;\n      background-image: url(/assets/images/bg.jpg);\n      background-size: contain;\n      background-position: right; } }\nauth-wrapper .left-content {\n    padding: 20px;\n    background: white;\n    height: 100%; }\n@media (min-width: 769px) and (min-height: 720px) {\n      auth-wrapper .left-content {\n        width: 350px; } }\nauth-wrapper .left-content img {\n      width: 200px;\n      margin: 0 auto;\n      display: block;\n      margin-top: 40px;\n      opacity: .8; }\nauth-wrapper .left-content .welcome {\n      text-align: center;\n      margin: 30px 0;\n      font-weight: 100;\n      color: #666;\n      padding: 0 50px; }\nauth-wrapper .left-content .welcome h1 {\n        font-size: 20px;\n        display: block;\n        margin-bottom: 20px;\n        padding-bottom: 20px;\n        border-bottom: 1px dashed #dadada; }\nauth-wrapper .left-content .welcome p {\n        margin-bottom: 0;\n        font-size: 13px;\n        line-height: 20px; }\nauth-wrapper .left-content .welcome a {\n        display: block;\n        color: #F3005B;\n        font-weight: bold; }\nauth-wrapper .left-content form {\n      padding: 0 20px; }\nauth-wrapper .left-content .links {\n      font-size: 14px;\n      text-align: center;\n      color: #666; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__request_passowrd_request_passowrd_component__ = __webpack_require__("../../../../../src/app/auth/request-passowrd/request-passowrd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recovery_passowrd_recovery_passowrd_component__ = __webpack_require__("../../../../../src/app/auth/recovery-passowrd/recovery-passowrd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */], __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_8__request_passowrd_request_passowrd_component__["a" /* RequestPassowrdComponent */], __WEBPACK_IMPORTED_MODULE_9__recovery_passowrd_recovery_passowrd_component__["a" /* RecoveryPassowrdComponent */]
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            declarations: [COMPONENTS],
            providers: [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_passowrd_request_passowrd_component__ = __webpack_require__("../../../../../src/app/auth/request-passowrd/request-passowrd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recovery_passowrd_recovery_passowrd_component__ = __webpack_require__("../../../../../src/app/auth/recovery-passowrd/recovery-passowrd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */] },
            { path: 'cadastrar', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
            { path: 'request-password', component: __WEBPACK_IMPORTED_MODULE_5__request_passowrd_request_passowrd_component__["a" /* RequestPassowrdComponent */] },
            { path: 'recovery-password', component: __WEBPACK_IMPORTED_MODULE_6__recovery_passowrd_recovery_passowrd_component__["a" /* RecoveryPassowrdComponent */] }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL;
(function (URL) {
    URL["LOGIN"] = "login";
})(URL || (URL = {}));
var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this._authState = null;
        this._authState = this._firebaseAuth.authState;
    }
    AuthService.prototype.getCurrentUser = function () {
        return this._authState.map(function (user) {
            if (user) {
                return user.toJSON();
            }
            return null;
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.getCurrentUser().map(function (userDetails) {
            return !!userDetails;
        });
    };
    AuthService.prototype.signin = function (email, password) {
        return this._firebaseAuth.auth
            .signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password));
    };
    AuthService.prototype.requestPassword = function (email) {
        return this._firebaseAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut().then(function () {
            _this.router.navigate([URL.LOGIN]);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "../../../../../src/app/auth/recovery-passowrd/recovery-passowrd.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  recovery-passowrd works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/recovery-passowrd/recovery-passowrd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/recovery-passowrd/recovery-passowrd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPassowrdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecoveryPassowrdComponent = /** @class */ (function () {
    function RecoveryPassowrdComponent() {
    }
    RecoveryPassowrdComponent.prototype.ngOnInit = function () {
    };
    RecoveryPassowrdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-recovery-passowrd',
            template: __webpack_require__("../../../../../src/app/auth/recovery-passowrd/recovery-passowrd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/recovery-passowrd/recovery-passowrd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RecoveryPassowrdComponent);
    return RecoveryPassowrdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/request-passowrd/request-passowrd.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"./assets/images/logo.png\" alt=\"\">\r\n<div class=\"welcome\">\r\n  <h1>Recuperar senha</h1>\r\n  <p>Digite seu email e nós iremos enviar um email com as instruções.</p>\r\n</div>\r\n\r\n<form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label class=\"sr-only\" for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group text-center\"><p class=\"alert\" *ngIf=\"error\">{{error}}</p>\r\n    <button type=\"submit\" class=\"btn btn-primary\" [ngClass]=\"{'loading': loading}\" (click)=\"requestPassword()\" [disabled]=\"formCtrl.form.invalid\">\r\n      Recuperar senha\r\n    </button>\r\n  </div>\r\n</form>\r\n<div class=\"links\">\r\n  <p><a href=\"javascript:;\" routerLink=\"../login\">Voltar para o login</a></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/request-passowrd/request-passowrd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/request-passowrd/request-passowrd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPassowrdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestPassowrdComponent = /** @class */ (function () {
    function RequestPassowrdComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.error = '';
        this.loading = false;
    }
    RequestPassowrdComponent.prototype.ngOnInit = function () { };
    RequestPassowrdComponent.prototype.requestPassword = function () {
        var _this = this;
        this.loading = true;
        this.authService.requestPassword(this.email)
            .then(function () {
            _this.router.navigate(['']);
        })
            .catch(function (error) {
            _this.loading = false;
            console.log(error);
            switch (error.code) {
                case 'auth/invalid-email':
                    _this.error = 'Você precisa colocar um email válido. ex: email@email.com';
                    break;
                default:
                    _this.error = error.message;
                    break;
            }
        });
    };
    RequestPassowrdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-request-passowrd',
            template: __webpack_require__("../../../../../src/app/auth/request-passowrd/request-passowrd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/request-passowrd/request-passowrd.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RequestPassowrdComponent);
    return RequestPassowrdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"./assets/images/logo.png\" alt=\"\">\r\n<div class=\"welcome\">\r\n  <h1>Olá!</h1>\r\n  <p>Acesse o sistema com seu email</p>\r\n  <p>Caso ainda não possua cadastro, <a href=\"javascript:;\" routerLink=\"../cadastrar\">clique aqui.</a></p>\r\n</div>\r\n<form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"seu-email@email.com\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Senha</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <a class=\"forgot-password\" routerLink=\"../request-password\" href=\"#\">Esqueceu a senha?</a>\r\n  </div>\r\n\r\n  <div class=\"form-group text-center\">\r\n    <p class=\"alert\" *ngIf=\"error\">{{error}}</p>\r\n    <button type=\"submit\" class=\"btn btn-primary\" [ngClass]=\"{'loading': loading}\" (click)=\"signIn()\" [disabled]=\"formCtrl.form.invalid\">\r\n      Acessar\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\nimg {\n  width: 200px;\n  margin: 0 auto;\n  display: block;\n  margin-top: 40px;\n  opacity: .8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.error = '';
        this.loading = false;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.signIn = function () {
        var _this = this;
        this.loading = true;
        this.authService.signin(this.email, this.password)
            .then(function () {
            _this.router.navigate(['']);
        })
            .catch(function (error) {
            _this.loading = false;
            console.log(error);
            switch (error.code) {
                case 'auth/wrong-password':
                    _this.error = 'Ops! O email ou a senha que você digitou estão incorretos.';
                    break;
                case 'auth/invalid-email':
                    _this.error = 'Você precisa colocar um email válido. ex: email@email.com';
                    break;
                default:
                    _this.error = error.message;
                    break;
            }
        });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"sign-content\">\r\n  <img src=\"./assets/images/logo.png\" alt=\"\">\r\n  <div class=\"welcome\">\r\n    <h1>Criando uma conta!</h1>\r\n    <p>Para você ter acesso ao <strong>meuPonto</strong> é bem simples. Você só precisa preencher os campos abaixo.</p>\r\n  </div>\r\n\r\n  <form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label class=\"sr-only\" for=\"name\">Qual seu nome?</label>\r\n      <input type=\"name\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Seu nome\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"sr-only\" for=\"email\">Qual seu email?</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"sr-only\" for=\"password\">Escolha uma senha</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Sua senha\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"sr-only\" for=\"password2\">Confirme a senha</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password2\" name=\"password2\" placeholder=\"Confirme a senha\"\r\n        required>\r\n    </div>\r\n\r\n    <div class=\"form-group text-center\">\r\n        <p class=\"alert\" *ngIf=\"error\">{{error}}</p>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [ngClass]=\"{'loading': loading}\" (click)=\"signUp()\" [disabled]=\"formCtrl.form.invalid\">\r\n        Criar conta\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"links\">\r\n    <!-- <small class=\"form-text\">Or connect with:</small>\r\n    <div class=\"socials\">\r\n      <a href=\"https://github.com/akveo/nebular\" target=\"_blank\" class=\"socicon-github with-icon\"></a>\r\n      <a href=\"https://www.facebook.com/akveo/\" target=\"_blank\" class=\"socicon-facebook with-icon\"></a>\r\n      <a href=\"https://twitter.com/akveo_inc\" target=\"_blank\" class=\"socicon-twitter with-icon\"></a>\r\n    </div> -->\r\n\r\n    <p>Caso já possua uma conta, <a href=\"javascript:;\" routerLink=\"../login\">clique aqui.</a></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.error = '';
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.loading = true;
        this.authService.signup(this.email, this.password).subscribe(function (user) {
            _this.router.navigate(['']);
        }, function (error) {
            _this.loading = false;
            console.log(error);
            switch (error.code) {
                case 'auth/email-already-in-use':
                    _this.error = 'Ops! Este email já possui conta no meuPonto.';
                    break;
                case 'auth/invalid-email':
                    _this.error = 'Você precisa colocar um email válido. ex: email@email.com';
                    break;
                default:
                    _this.error = error.message;
                    break;
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/app/app-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main-content\">\r\n  <div class=\"left-content\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n\r\n  <div class=\"right-content\">\r\n    <div class=\"today\">\r\n      <app-day-entry [entry]=\"todayEntry\" [today]=\"true\"></app-day-entry>\r\n    </div>\r\n\r\n    <app-seasons\r\n      [initialDate]=\"initialDate\"\r\n      (whenSelected)=\"seasonSelected($event);\"\r\n      ></app-seasons>\r\n\r\n    <div class=\"story\">\r\n      <div class=\"summary\"></div>\r\n      <div class=\"entries\">\r\n        <app-day-entry *ngFor=\"let entry of entries | async\"\r\n          [entry]=\"toObservable(entry)\"></app-day-entry>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/app/app-layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\nmain {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n.left-content {\n  width: 400px;\n  height: 100%;\n  overflow: auto;\n  background: #09031b;\n  color: #FFF;\n  overflow: auto;\n  padding: 30px 50px;\n  font-size: 13px; }\n.left-content * {\n    -webkit-transition: all ease .2s;\n    transition: all ease .2s; }\n.right-content {\n  position: absolute;\n  width: calc(100% - 400px);\n  left: 400px;\n  top: 0;\n  overflow: auto;\n  height: 100%; }\n.right-content * {\n    -webkit-transition: all ease .2s;\n    transition: all ease .2s; }\n.right-content .seasons {\n    background: #f5f5f5;\n    font-size: 0;\n    text-align: center; }\n.right-content .seasons .season {\n      display: inline-block;\n      width: 200px;\n      text-align: center;\n      color: #666;\n      font-weight: 100;\n      font-size: 15px;\n      border-right: 1px solid #e4e4e4;\n      cursor: pointer; }\n.right-content .seasons .season.season--selected {\n        background: #F3005B;\n        color: #FFF;\n        width: 220px; }\n.right-content .seasons .season.season--positive i {\n        color: #26e473; }\n.right-content .seasons .season.season--negative i {\n        color: #ad0000; }\n.right-content .seasons .season .season-name {\n        font-family: \"Oswald\", sans-serif;\n        font-weight: 400;\n        font-size: 25px;\n        padding-bottom: 5px;\n        padding-top: 15px; }\n.right-content .seasons .season .season-name i {\n          font-size: 10px;\n          vertical-align: middle;\n          margin-right: 10px; }\n.right-content .seasons .season .season-period {\n        padding-bottom: 25px; }\n.right-content .seasons .season .season-period p {\n          font-style: italic;\n          margin-bottom: 0; }\n.right-content .story .entries {\n    width: 900px;\n    margin: 20px auto; }\n.right-content .story .entries .day-entries {\n      display: block;\n      padding: 20px 70px 30px 10px;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border-bottom: 1px solid #e4e4e4;\n      width: auto; }\n.today .day-entries {\n  -webkit-box-shadow: 0 2px 12px 0 #00000021;\n          box-shadow: 0 2px 12px 0 #00000021; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/app/app-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.initialDate = this.userService.date;
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
        this.todayEntry$ = this.userService.todayEntry();
        this.entries$ = this.userService.entries();
    };
    AppLayoutComponent.prototype.ngOnDestroy = function () {
        console.log('destroy: app layout');
    };
    AppLayoutComponent.prototype.seasonSelected = function (season) {
        this.season = season;
    };
    AppLayoutComponent.prototype.toObservable = function (data) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(data);
    };
    AppLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-app-layout',
            template: __webpack_require__("../../../../../src/app/core/app/app-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/app/app-layout.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-auth-layout',
            template: '<router-outlet></router-outlet>'
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_layout_component__ = __webpack_require__("../../../../../src/app/core/app/app-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_app_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/core/auth/auth-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_auth_layout_component__["a"]; });




/***/ }),

/***/ "../../../../../src/app/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error404_error404_component__ = __webpack_require__("../../../../../src/app/error/error404/error404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__error404_error404_component__["a" /* Error404Component */]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "../../../../../src/app/error/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\r\n<p>Not found!</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/error/error404/error404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error404/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-error404',
            template: __webpack_require__("../../../../../src/app/error/error404/error404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error/error404/error404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/error/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_module__ = __webpack_require__("../../../../../src/app/error/error.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__error_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error404_error404_component__ = __webpack_require__("../../../../../src/app/error/error404/error404.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__error404_error404_component__["a"]; });




/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/shared/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/card/card.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/day-entry/day-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"day-entries\">\r\n  <a href=\"javascript:;\" class=\"day-options dropdown\" (click)=\"showDayOptionsDropdown = !showDayOptionsDropdown\">\r\n    <i class=\"fas fa-ellipsis-v\"></i>\r\n    <div class=\"dropdown-menu\" [ngClass]=\"{'show': showDayOptionsDropdown }\">\r\n      <div class=\"dropdown-menu-item\">Feriado</div>\r\n      <div class=\"dropdown-menu-item\">Adicionar Observação</div>\r\n    </div>\r\n  </a>\r\n  <div class=\"day-info\">\r\n    <p class=\"day-info-title\">\r\n      {{ isToday() ? 'Hoje' : (entry | async)?.date | date:'dd MMMM, yyyy' }}\r\n    </p>\r\n    <p class=\"day-info-date\">\r\n      <i class=\"far fa-calendar-alt\"></i>\r\n      {{ (entry | async)?.date | date:'EEEE'}}\r\n    </p>\r\n    <span class=\"day-info-type label\" *ngIf=\"isHoliday() || isWeekend()\">\r\n      {{ isHoliday() ? 'Feriado' : 'Descanso' }}\r\n    </span>\r\n  </div>\r\n  <app-timeline [entry]=\"entry\"></app-timeline>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/day-entry/day-entry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\n.day-entries {\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 30px;\n  position: relative; }\n.day-entries .day-options {\n    display: inline-block;\n    padding: 20px 15px;\n    vertical-align: text-bottom;\n    margin-left: 15px;\n    color: #F3005B; }\n.day-entries .day-info {\n    display: inline-block;\n    padding-right: 10px;\n    padding-left: 10px; }\n.day-entries .day-info i {\n      margin-right: 5px; }\n.day-entries .day-info .day-info-title {\n      font-family: \"Oswald\", sans-serif;\n      font-size: 30px;\n      margin-bottom: 0; }\n.day-entries .day-info .day-info-title i {\n        font-size: 14px;\n        cursor: pointer;\n        vertical-align: middle; }\n.day-entries .day-info .day-info-date {\n      font-size: 12px;\n      margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/day-entry/day-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DayEntryComponent = /** @class */ (function () {
    function DayEntryComponent() {
        this.showDayOptionsDropdown = false;
    }
    DayEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.entry) {
            this.entry.subscribe(function (data) {
                _this._entry = data;
                _this._entry.dateEntry = new Date(data.date.toString().replace(/-/g, '/'));
            });
        }
    };
    DayEntryComponent.prototype.ngOnDestroy = function () {
        console.log('destroy: day entry');
    };
    DayEntryComponent.prototype.isToday = function () {
        var date = new Date();
        var dateCompare = date.toISOString().match(/\d{4}-\d{2}-\d{2}/).join('-');
        return !!this.today || (this._entry && this._entry.date === dateCompare);
    };
    DayEntryComponent.prototype.isHoliday = function () {
        return this._entry && this._entry.feriado;
    };
    DayEntryComponent.prototype.isWeekend = function () {
        return (this._entry &&
            (this._entry.dateEntry.getDay() === 0 ||
                this._entry.dateEntry.getDay() === 6));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DayEntryComponent.prototype, "today", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], DayEntryComponent.prototype, "entry", void 0);
    DayEntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-day-entry',
            template: __webpack_require__("../../../../../src/app/shared/day-entry/day-entry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/day-entry/day-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DayEntryComponent);
    return DayEntryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n\r\n  <!-- Logo Container -->\r\n  <div class=\"logo-container\">\r\n    <span>CREDUC</span> - Admin\r\n  </div>\r\n\r\n  <!-- Summary Container -->\r\n  <div class=\"summary-container\"></div>\r\n\r\n  <!-- Tools Container -->\r\n  <div class=\"tools-container\">\r\n    <!-- User Tool -->\r\n    <app-user-toolbar></app-user-toolbar>\r\n\r\n    <!-- Notification Tool -->\r\n    <div class=\"notification-container\"></div>\r\n  </div>\r\n\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  position: fixed;\n  width: 100%;\n  padding: 20px;\n  color: #2a2a2a;\n  background: #fff;\n  -webkit-box-shadow: 0 2px 12px 0 #dfe3eb;\n          box-shadow: 0 2px 12px 0 #dfe3eb; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/seasons/season-item/season-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"season\"\r\n  [class.season--selected]=\"isSelected()\"\r\n  [class.season--positive]=\"isPositive()\"\r\n  [class.season--negative]=\"isNegative()\">\r\n  <div class=\"season-name\">\r\n    <i class=\"fas fa-circle\"></i>\r\n    {{ season.date | date: 'MMMM' }}\r\n  </div>\r\n  <div class=\"season-period\">\r\n    <p>\r\n      {{ (season.period.startIn | date: 'dd-MMM') | lowercase }} ...\r\n      {{ (season.period.endIn | date: 'dd-MMM') | lowercase }}\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/seasons/season-item/season-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\n.season {\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n  color: #666;\n  font-weight: 100;\n  font-size: 15px;\n  border-right: 1px solid #e4e4e4;\n  cursor: pointer; }\n.season:hover {\n    background: rgba(0, 0, 0, 0.05); }\n.season.season--selected {\n    background: #F3005B;\n    color: #FFF;\n    width: 220px;\n    -webkit-box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3); }\n.season.season--positive i {\n    color: #26e473; }\n.season.season--negative i {\n    color: #ad0000; }\n.season .season-name {\n    font-family: \"Oswald\", sans-serif;\n    font-weight: 400;\n    font-size: 25px;\n    padding-bottom: 5px;\n    padding-top: 15px; }\n.season .season-name i {\n      font-size: 10px;\n      vertical-align: middle;\n      margin-right: 10px; }\n.season .season-period {\n    padding-bottom: 25px; }\n.season .season-period p {\n      font-style: italic;\n      margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/seasons/season-item/season-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeasonItemComponent = /** @class */ (function () {
    function SeasonItemComponent() {
    }
    SeasonItemComponent.prototype.ngOnInit = function () { };
    SeasonItemComponent.prototype.ngOnDestroy = function () {
        console.log('destroy: season item');
        this.season = null;
    };
    SeasonItemComponent.prototype.isSelected = function () {
        return this.season && this.season.selected;
    };
    SeasonItemComponent.prototype.isPositive = function () {
        return !true;
    };
    SeasonItemComponent.prototype.isNegative = function () {
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SeasonItemComponent.prototype, "season", void 0);
    SeasonItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-season-item',
            template: __webpack_require__("../../../../../src/app/shared/seasons/season-item/season-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/seasons/season-item/season-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SeasonItemComponent);
    return SeasonItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/seasons/season.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonPeriodDate; });
var SeasonPeriodDate;
(function (SeasonPeriodDate) {
    SeasonPeriodDate[SeasonPeriodDate["start"] = 16] = "start";
    SeasonPeriodDate[SeasonPeriodDate["end"] = 15] = "end";
})(SeasonPeriodDate || (SeasonPeriodDate = {}));


/***/ }),

/***/ "../../../../../src/app/shared/seasons/season.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__season_interface__ = __webpack_require__("../../../../../src/app/shared/seasons/season.interface.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SeasonService = /** @class */ (function () {
    function SeasonService(db, auth) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this._authUser = null;
        this.seasons = [];
        this.auth.getCurrentUser().subscribe(function (user) {
            if (user) {
                _this._authUser = user;
                _this.entries$ = _this.db.list("/users/" + user.uid + "/registros");
                _this.entries$.valueChanges().subscribe(function (data) {
                    _this.entries = data;
                    _this.loadSeasons();
                });
            }
        });
    }
    SeasonService.prototype.getAll = function () {
        return this.seasons;
    };
    SeasonService.prototype.getAllObservables = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            observer.next(_this.seasons);
            observer.complete();
        });
    };
    SeasonService.prototype.loadSeasons = function () {
        var _this = this;
        var date = new Date();
        this.entries.forEach(function (entry) {
            entry.dateEntry = new Date(entry.date.replace(/-/g, '/'));
            var _month = entry.dateEntry.getMonth() + 1;
            var month = _month < 10 ? "0" + _month : _month;
            entry.datePrefix = entry.dateEntry.getFullYear() + "-" + month;
            var hasEntry = !!_this.seasons.filter(function (season) {
                return season.datePrefix === entry.datePrefix;
            }).length;
            if (!hasEntry) {
                var season = _this.createSeason(entry);
                _this.seasons.push(season);
            }
        });
    };
    SeasonService.prototype.createSeason = function (entry, period) {
        var seasonPeriod = period ? period : this.createSeasonPeriod(entry.dateEntry);
        var season = {
            date: new Date(entry.dateEntry.getUTCFullYear(), entry.dateEntry.getMonth(), 1),
            datePrefix: entry.datePrefix,
            period: seasonPeriod
        };
        return season;
    };
    SeasonService.prototype.createSeasonPeriod = function (dateRef) {
        var seasonPeriod = {
            startIn: new Date(dateRef.getFullYear(), dateRef.getMonth(), __WEBPACK_IMPORTED_MODULE_4__season_interface__["a" /* SeasonPeriodDate */].start),
            endIn: new Date(dateRef.getFullYear(), dateRef.getMonth() + 1, __WEBPACK_IMPORTED_MODULE_4__season_interface__["a" /* SeasonPeriodDate */].end)
        };
        return seasonPeriod;
    };
    SeasonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], SeasonService);
    return SeasonService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/seasons/seasons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"seasons\">\r\n  <app-season-item *ngFor=\"let season of seasons\"\r\n    [season]=\"season\"\r\n    (click)=\"handleClick(season)\"\r\n    ></app-season-item>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/seasons/seasons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\n.seasons {\n  background: #f5f5f5;\n  font-size: 0;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/seasons/seasons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__season_service__ = __webpack_require__("../../../../../src/app/shared/seasons/season.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeasonsComponent = /** @class */ (function () {
    function SeasonsComponent(seasonService) {
        var _this = this;
        this.seasonService = seasonService;
        this.whenSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.seasons = [];
        this.seasonService.getAllObservables().subscribe(function (seasons) {
            _this.seasons = seasons;
        });
    }
    SeasonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.seasons = this.seasonService.getAll();
        this.seasonService.getAllObservables().subscribe(function (seasons) {
            _this.seasons = seasons;
            console.log(_this.initialDate);
            if (_this.initialDate) {
                var season = _this.seasons.filter(function (s) {
                    console.log(s.datePrefix);
                    return s.datePrefix === _this.initialDate;
                });
                if (season && season.length > 0) {
                    console.log(season);
                    _this.whenSelected.emit(season);
                }
            }
        });
    };
    SeasonsComponent.prototype.ngOnDestroy = function () {
        console.log('destroy: sesons');
    };
    SeasonsComponent.prototype.handleClick = function (season) {
        console.log('season item has been clicked!');
        this.whenSelected.emit(season);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SeasonsComponent.prototype, "initialDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SeasonsComponent.prototype, "whenSelected", void 0);
    SeasonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-seasons',
            template: __webpack_require__("../../../../../src/app/shared/seasons/seasons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/seasons/seasons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__season_service__["a" /* SeasonService */]])
    ], SeasonsComponent);
    return SeasonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card_component__ = __webpack_require__("../../../../../src/app/shared/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("../../../../../src/app/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/shared/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__day_entry_day_entry_component__ = __webpack_require__("../../../../../src/app/shared/day-entry/day-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__timeline_timespot_timespot_component__ = __webpack_require__("../../../../../src/app/shared/timeline/timespot/timespot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__seasons_season_service__ = __webpack_require__("../../../../../src/app/shared/seasons/season.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__seasons_seasons_component__ = __webpack_require__("../../../../../src/app/shared/seasons/seasons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__seasons_season_item_season_item_component__ = __webpack_require__("../../../../../src/app/shared/seasons/season-item/season-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_4__card_card_component__["a" /* CardComponent */],
    __WEBPACK_IMPORTED_MODULE_7__day_entry_day_entry_component__["a" /* DayEntryComponent */], __WEBPACK_IMPORTED_MODULE_10__seasons_seasons_component__["a" /* SeasonsComponent */], __WEBPACK_IMPORTED_MODULE_11__seasons_season_item_season_item_component__["a" /* SeasonItemComponent */],
    __WEBPACK_IMPORTED_MODULE_6__timeline_timeline_component__["a" /* TimelineComponent */], __WEBPACK_IMPORTED_MODULE_8__timeline_timespot_timespot_component__["a" /* TimespotComponent */]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__user__["a" /* UserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__seasons_season_service__["a" /* SeasonService */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            declarations: [COMPONENTS],
            exports: [COMPONENTS]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"daily-summary\">\r\n  <app-user-toolbar></app-user-toolbar>\r\n  <div class=\"timer-register\">\r\n    <input type=\"text\" class=\"form-control\" name=\"time-register\" id=\"time-register\" placeholder=\"00:00\">\r\n    <span class=\"tip\">Pressione ENTER para salvar</span>\r\n  </div>\r\n  <div class=\"timer-feedback\">\r\n    <p><strong>Olá Charles,</strong> {{welcomeMsg}}</p>\r\n  </div>\r\n  <div class=\"timer-label\">\r\n    <span class=\"timer-label-title\">Horas trabalhadas</span>\r\n    <span class=\"timer-label-content\">10:20</span>\r\n  </div>\r\n  <div class=\"timer-label\">\r\n    <span class=\"timer-label-title\">Saída sugerida</span>\r\n    <span class=\"timer-label-content\">18:16</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\n.daily-summary .timer-register {\n  padding: 20px 0;\n  text-align: center; }\n.daily-summary .timer-register .form-control {\n    text-align: center;\n    font-size: 40px;\n    width: 120px;\n    border: none;\n    border-bottom: 2px solid #F3005B;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    margin: 0 auto;\n    padding: 5px 10px;\n    height: 60px;\n    font-family: \"Oswald\", sans-serif;\n    background: #09031b;\n    color: #FFF; }\n.daily-summary .timer-register .form-control:focus {\n      height: 70px; }\n.daily-summary .timer-register .tip {\n    padding: 5px 10px;\n    display: inline-block;\n    color: #F3005B;\n    font-size: 10px;\n    letter-spacing: 1px;\n    border-radius: 5px;\n    margin: 5px 0;\n    font-weight: 100; }\n.daily-summary .timer-feedback {\n  font-size: 15px;\n  padding: 20px 0 10px;\n  margin-bottom: 15px;\n  color: #726b86;\n  border-bottom: 2px dashed #1d1531; }\n.daily-summary .timer-feedback strong {\n    display: block;\n    font-size: 20px; }\n.daily-summary .timer-label {\n  width: 100%;\n  margin-bottom: 20px;\n  display: inline-block;\n  color: #726b86; }\n.daily-summary .timer-label .timer-label-title {\n    display: block;\n    font-size: 15px;\n    color: #726b86;\n    font-weight: bold; }\n.daily-summary .timer-label .timer-label-content {\n    font-size: 30px;\n    font-family: \"Oswald\", sans-serif;\n    letter-spacing: 1px;\n    display: inline-block;\n    font-weight: 100;\n    color: #22d2dc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService) {
        this.userService = userService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.todayEntry().subscribe(function (entry) {
            console.log(entry.pontos);
            if (entry.pontos.length > 0) {
                _this.welcomeMsg = 'um ótimo dia de trabalho pra você.';
            }
            else {
                _this.welcomeMsg = 'você ainda não registrou ponto hoje.';
            }
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        console.log('destroy: sidebar');
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline\">\r\n  <app-timespot [spot]=\"spot\" [entry]=\"entry\" *ngFor=\"let spot of (entry|async)?.pontos\"></app-timespot>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/timeline/timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\n.timeline {\n  display: inline-block;\n  position: relative;\n  margin: 40px 0 0;\n  padding-left: 40px;\n  padding-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], TimelineComponent.prototype, "entry", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/shared/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/timeline/timespot/timespot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline-spot\">\r\n  <span class=\"timeline-spot-title\"><i class=\"far fa-clock\"></i> {{spot}}</span>\r\n  <!-- <span class=\"timeline-spot-subtitle\"></span> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/timeline/timespot/timespot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\napp-timespot {\n  display: inline-block;\n  margin-left: 80px; }\napp-timespot:first-of-type {\n    margin-left: 0; }\napp-timespot:first-of-type:before {\n      display: none; }\napp-timespot:before {\n    content: '';\n    height: 2px;\n    background: #eaeaea;\n    position: absolute;\n    top: 0;\n    width: 120px;\n    margin-left: -100px; }\napp-timespot:after {\n    content: '';\n    width: 15px;\n    height: 15px;\n    border: 2px solid #f99bbe;\n    background: #FFF;\n    position: absolute;\n    border-radius: 50px;\n    top: -7px;\n    z-index: 1;\n    margin-left: 20px; }\napp-timespot .timeline-spot-title {\n    display: inline-block;\n    font-family: \"Oswald\", sans-serif;\n    font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/timeline/timespot/timespot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimespotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimespotComponent = /** @class */ (function () {
    function TimespotComponent() {
    }
    TimespotComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], TimespotComponent.prototype, "entry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TimespotComponent.prototype, "spot", void 0);
    TimespotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-timespot',
            template: __webpack_require__("../../../../../src/app/shared/timeline/timespot/timespot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/timeline/timespot/timespot.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], TimespotComponent);
    return TimespotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_module__["UserModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__ = __webpack_require__("../../../../../src/app/user/profile/profile.component.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user\">\r\n    <div class=\"user-pic\"></div>\r\n    <div class=\"user-name dropdown\" (click)=\"showUserDropdown = !showUserDropdown\">\r\n        {{ (user | async)?.displayName || (user | async)?.email }}\r\n      <i class=\"fas fa-chevron-down\"></i>\r\n      <div class=\"dropdown-menu\" [ngClass]=\"{'show': showUserDropdown }\">\r\n        <a class=\"dropdown-menu-item\" routerLink=\"/user/profile\" href=\"#\">Minha conta</a>\r\n        <div class=\"dropdown-menu-item\" (click)=\"logout()\">Sair</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,700|Ubuntu:300,400,500,700\");\n.user {\n  text-align: center; }\n.user .user-pic {\n    width: 100px;\n    height: 100px;\n    background: #d6d6d6;\n    border-radius: 50px;\n    margin: 0 auto;\n    background-image: url(/assets/images/me.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    border: 2px solid #F3005B; }\n.user .user-name {\n    font-weight: 100;\n    font-size: 14px;\n    padding: 10px;\n    display: inline-block;\n    cursor: pointer; }\n.user .user-name i {\n      font-size: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(authService) {
        this.authService = authService;
        this.showUserDropdown = false;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getCurrentUser();
    };
    ToolbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user-toolbar',
            template: __webpack_require__("../../../../../src/app/user/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("../../../../../src/app/user/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'profile' },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */] }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/user/toolbar/toolbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [__WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__["a" /* ToolbarComponent */]];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__user_routing_module__["a" /* UserRoutingModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]],
            declarations: [COMPONENTS],
            exports: [COMPONENTS]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(db, auth) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.endpoint = '/users';
        this._authUser = null;
        this._date = new Date();
        if (!this._authUser || !this._user) {
            this.auth.getCurrentUser().subscribe(function (user) {
                if (user) {
                    _this._authUser = user;
                    _this._user = _this.db.object(_this.endpoint + "/" + _this._authUser.uid);
                    _this.user = _this._user.valueChanges();
                }
            });
        }
    }
    Object.defineProperty(UserService.prototype, "date", {
        get: function () {
            var day = this._date.getDate();
            var year = this._date.getFullYear();
            var _month = this._date.getMonth() + 1;
            var month = _month < 10 ? "0" + _month : _month;
            return year + "-" + month + "-" + day;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.currentUser = function () {
        return this._user.valueChanges();
    };
    UserService.prototype.authenticatedUser = function () {
        return this._authUser;
    };
    UserService.prototype.entries = function () {
        return this.db
            .list(this.endpoint + "/" + this._authUser.uid + "/registros")
            .valueChanges()
            .map(function (data) {
            data.sort(function (a, b) {
                return a < b ? -1 : 1;
            });
            return data;
        });
    };
    UserService.prototype.todayEntry = function () {
        var _this = this;
        var todayEntry$ = this.db
            .list(this.endpoint + "/" + this._authUser.uid + "/registros", function (ref) {
            return ref.orderByChild('date').equalTo(_this.date);
        })
            .valueChanges();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            todayEntry$.subscribe(function (data) {
                if (!data || data.length < 1) {
                    // must create a today entry
                    __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of();
                    return;
                }
                var entry = data[0];
                entry.dateEntry = new Date(entry.date.replace(/-/g, '/'));
                var _month = entry.dateEntry.getMonth() + 1;
                var month = _month < 10 ? "0" + _month : _month;
                entry.datePrefix = entry.dateEntry.getFullYear() + "-" + month;
                observer.next(entry);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyAG7SiJpRPyCuNKOnC3MWh3bsxrjF3MkX8',
        authDomain: 'meuponto-22c8a.firebaseapp.com',
        databaseURL: 'https://meuponto-22c8a.firebaseio.com',
        projectId: 'meuponto-22c8a',
        storageBucket: 'meuponto-22c8a.appspot.com',
        messagingSenderId: '453391659544'
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map