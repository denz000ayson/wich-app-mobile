webpackJsonp([0],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_sign_email_sign_email__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_sign_mobile_sign_mobile__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_reset_password_reset_password__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, userService, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.modal = modal;
        this.user = {};
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.userService.getData();
    };
    RegisterPage.prototype.register = function (user) {
        var _this = this;
        this.userService.userRegister.signUpWithEmail(user)
            .then(function (res) {
            _this.navCtrl.setRoot(HomePage);
        })
            .catch(function (err) { console.log(err); });
    };
    RegisterPage.prototype.openSignUpEmail = function () {
        var signUpEmail = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__modal_sign_email_sign_email__["a" /* SignEmail */]);
        signUpEmail.present();
    };
    RegisterPage.prototype.openSignUpMobile = function () {
        var signUpMobile = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__modal_sign_mobile_sign_mobile__["a" /* SignMobile */]);
        signUpMobile.present();
    };
    RegisterPage.prototype.openResetPassword = function () {
        var resetPassword = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__modal_reset_password_reset_password__["a" /* ResetPassword */]);
        resetPassword.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/register.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n    <ion-list>\n      <button class="btn-facebook" ion-button><ion-icon name="logo-facebook"></ion-icon> Sign Up with Facebook</button>\n      <button class="btn-google" ion-button><ion-icon name="logo-google"></ion-icon> Sign Up with Google</button>\n      <ion-item class="or">\n        <hr class="divider">\n      </ion-item>\n      <button class="btn-email" ion-button (click)="openSignUpEmail()"><ion-icon ios="ios-mail" md="md-mail"></ion-icon> Sign Up with Email</button>\n      <button class="btn-register" ion-button (click)="openSignUpMobile()"><ion-icon name="phone-portrait"></ion-icon>Sign Up with Mobile number</button>\n       <button class="btn-register" ion-button (click)="openResetPassword()"><ion-icon name="phone-portrait"></ion-icon>Reset Password</button>\n      <hr>\n      <ion-item class="ask-question">\n        Already have an account? <a href="#">Log in</a>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/fullstack/Documents/angular/wich-app-mobile/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map