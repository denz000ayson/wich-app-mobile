webpackJsonp([3],{

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, storage, userService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.userService = userService;
        this.user = {};
        this.profile = {};
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.storage.get('user_id').then(function (user_id) {
            // this.userService.fetchUser.viewUser(user_id).then(user => {
            // 	console.log(user);
            // })
            // .catch(err => {
            // 	console.log(err);
            // })
            // }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/register/modal/sign-email/sign-email.module": [
		862,
		2
	],
	"../pages/register/modal/sign-mobile/sign-mobile.module": [
		863,
		1
	],
	"../pages/register/register.module": [
		864,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 317;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, userService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.storage = storage;
        this.user = {};
    }
    LoginPage.prototype.login = function (user) {
        var _this = this;
        this.userService.userLogin.signInWithEmail(user).then(function (user) {
            var user_id = {};
            user_id = user;
            _this.storage.set('user_id', user_id.uid);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.loginWithFaceBook = function () {
        console.log('test');
        this.userService.userLogin.signInWithFaceBook().then(function (user) {
            console.log(user);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/login/login.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n    <ion-list>\n      <ion-item>\n        <ion-icon name="mail" item-left></ion-icon>\n        <ion-input type="text" value="" placeholder="Email Address" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="key" item-left></ion-icon>\n        <ion-input class="rounded" type="password" value="" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n\n      <button class="btn-login" ion-button color="secondary" (click)="login(user)">Login</button>\n      <button class="btn-facebook" ion-button><ion-icon name="logo-facebook" (click)="loginWithFaceBook()"></ion-icon> Continue with Facebook</button>\n      <button class="btn-google" ion-button><ion-icon ios="ios-mail" md="md-mail"></ion-icon> Continue with Google</button>\n      <button class="btn-register" ion-button color="secondary" (click)="register()">or create an account..</button>\n    </ion-list>\n  </div>\n</ion-content>\n\n<!-- <ion-content>\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n<<<<<<< HEAD\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n  <button ion-button (click)="login()">Login</button>\n=======\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n  <button ion-button (click)="login(user)">Login</button>\n>>>>>>> 9a71b9854a39fc6e8e42612c047523bb22d466e4\n  <button ion-button (click)="register()">Register</button>\n</ion-content> -->\n`/*ion-inline-end:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignEmail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignEmail = (function () {
    function SignEmail(navCtrl, navParams, userService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.viewCtrl = viewCtrl;
        this.user = {};
    }
    SignEmail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignEmailPage');
    };
    SignEmail.prototype.register = function (user) {
        var _this = this;
        this.userService.userRegister.signUpWithEmail(user)
            .then(function (res) {
            _this.viewCtrl.dismiss();
            // this.navCtrl.push(HomePage);
        })
            .catch(function (err) { console.log(err); });
    };
    SignEmail.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SignEmail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-email',template:/*ion-inline-start:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/modal/sign-email/sign-email.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()"><ion-icon name="close" item-right></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="container">\n    <ion-list>\n      <ion-item class="section-sign-up">\n        Sign up with <a href="">Facebook</a>, <a href="">Google</a> or <a href="">mobile number</a>\n      </ion-item>\n\n      <ion-item class="or">\n        <hr class="divider">\n      </ion-item>\n\n      <ion-item class="form-holder">\n        <ion-input placeholder="Name" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n\n      <ion-item class="form-holder">\n        <ion-input placeholder="Email Address" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n\n      <ion-item class="form-holder">\n        <ion-input placeholder="Phone" [(ngModel)]="user.phone"></ion-input>\n      </ion-item>\n\n      <ion-item class="form-holder">\n        <ion-input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" [(ngModel)]="user.password"></ion-input>\n        <!-- <ion-label item-right>Show</ion-label> -->\n      </ion-item>\n\n      <button class="btn-sign-up" ion-button name="button" (click)="register(user)">Sign Up</button>\n\n\n      <hr>\n      <ion-item class="ask-question">\n        Already have an account? <a href="#">Log in</a>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/modal/sign-email/sign-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SignEmail);
    return SignEmail;
}());

//# sourceMappingURL=sign-email.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignMobile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignMobile = (function () {
    function SignMobile(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SignMobile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignMobilePage');
    };
    SignMobile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SignMobile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-mobile',template:/*ion-inline-start:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/modal/sign-mobile/sign-mobile.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()"><ion-icon name="close" item-right></ion-icon></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <ion-list>\n      <ion-item class="section-sign-up">\n        Sign up with <a href="">Facebook</a>, <a href="">Google</a> or <a href="">mobile number</a>\n      </ion-item>\n\n      <ion-item class="or">\n        <hr class="divider">\n      </ion-item>\n\n      <ion-item class="section-label">\n        Enter your mobile number\n      </ion-item>\n\n      <ion-item class="section-enter-number">\n        <ion-input type="text" value="" placeholder="Mobile number"></ion-input>\n      </ion-item>\n\n      <button class="btn-sign-up" ion-button name="button">Sign Up</button>\n\n      <hr>\n      <ion-item class="ask-question">\n        Already have an account? <a href="#">Log in</a>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/modal/sign-mobile/sign-mobile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SignMobile);
    return SignMobile;
}());

//# sourceMappingURL=sign-mobile.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPassword = (function () {
    function ResetPassword(viewCtrl, userService) {
        this.viewCtrl = viewCtrl;
        this.userService = userService;
    }
    ResetPassword.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ResetPassword.prototype.resetPassword = function (email) {
        var _this = this;
        this.userService.fetchUser.resetPassword(email).then(function (user) {
            _this.viewCtrl.dismiss();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ResetPassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/modal/reset-password/reset-password.html"*/`<ion-header>\n  <ion-navbar>\n  <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n          <ion-icon name="close" item-right></ion-icon>\n      </button>\n  </ion-buttons>\n</ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="container">\n    <ion-list>\n      <ion-item>\n        <ion-icon name="mail" item-left></ion-icon>\n        <ion-input type="email" value="" placeholder="Email Address" [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <button class="btn-login" ion-button color="secondary" (click)="resetPassword(email)">Reset Password</button>\n    </ion-list>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/modal/reset-password/reset-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], ResetPassword);
    return ResetPassword;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(459);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_config__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_modal_sign_email_sign_email__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_modal_sign_mobile_sign_mobile__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_modal_reset_password_reset_password__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_user_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules










//Pages



//Modals



//Providers

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                //Modals
                __WEBPACK_IMPORTED_MODULE_13__pages_register_modal_sign_email_sign_email__["a" /* SignEmail */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_modal_sign_mobile_sign_mobile__["a" /* SignMobile */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_modal_reset_password_reset_password__["a" /* ResetPassword */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/register/modal/sign-email/sign-email.module#SignEmailPageModule', name: 'SignEmail', segment: 'sign-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/modal/sign-mobile/sign-mobile.module#SignMobilePageModule', name: 'SignMobile', segment: 'sign-mobile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__shared_config__["a" /* CONFIG_FIREBASE */]),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                //Modals
                __WEBPACK_IMPORTED_MODULE_13__pages_register_modal_sign_email_sign_email__["a" /* SignEmail */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_modal_sign_mobile_sign_mobile__["a" /* SignMobile */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_modal_reset_password_reset_password__["a" /* ResetPassword */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__services_user_user_service__["a" /* UserService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG_FIREBASE; });
var CONFIG_FIREBASE = {
    apiKey: "AIzaSyBeuYKqRwAlduf-A7D1frg_uajVR63JCIA",
    authDomain: "wichappdb.firebaseapp.com",
    databaseURL: "https://wichappdb.firebaseio.com",
    projectId: "wichappdb",
    storageBucket: "wichappdb.appspot.com",
    messagingSenderId: "224792191909"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//we use main firebase plugin for facebook login

var UserService = (function () {
    function UserService(firebaseAuth, firebaseList) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.firebaseList = firebaseList;
        this.user = {};
        this.userRegister = {
            signUpWithEmail: function (userForm) {
                return new Promise(function (resolve, reject) {
                    _this.firebaseAuth.auth.createUserWithEmailAndPassword(userForm.email, userForm.password).then(function (userDb) {
                        _this.firebaseList.object("profiles/" + userDb.uid).set(userForm).then(function (profile) {
                            resolve(userDb);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            },
        };
        this.userLogin = {
            signInWithEmail: function (userAuth) {
                return new Promise(function (resolve, reject) {
                    _this.firebaseAuth.auth.signInWithEmailAndPassword(userAuth.email, userAuth.password).then(function (userDb) {
                        resolve(userDb);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            },
            signInWithFaceBook: function () {
                return new Promise(function (resolve, reject) {
                    var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider();
                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provider).then(function () {
                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
                            resolve(result);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            }
        };
        this.fetchUser = {
            viewUser: function (user_id) {
                // console.log(user_id)
                return new Promise(function (resolve, reject) {
                    _this.firebaseList.database.ref("profiles/" + user_id).on('value', function (profile) {
                        resolve(profile.val());
                    }, function (err) {
                        reject(err);
                    });
                });
            },
            resetPassword: function (email) {
                return new Promise(function (resolve, reject) {
                    _this.firebaseAuth.auth.sendPasswordResetEmail(email).then(function (user) {
                        resolve(user);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            } // reset password
        };
    }
    UserService.prototype.getData = function () {
        this.userList = this.firebaseList.list('profiles');
        return this.userList;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fullstack/Documents/angular/wich-app-mobile/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/home/fullstack/Documents/angular/wich-app-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[454]);
//# sourceMappingURL=main.js.map