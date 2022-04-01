"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_home_home_module_ts"],{

/***/ 7520:
/*!**************************************************!*\
  !*** ./src/app/page/home/home-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8261);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2040:
/*!******************************************!*\
  !*** ./src/app/page/home/home.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 7520);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 8261);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 8261:
/*!****************************************!*\
  !*** ./src/app/page/home/home.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 7572);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9841:
/*!*****************************************************!*\
  !*** ./src/app/page/home/home.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".app-name {\n  background-color: steelblue;\n  color: yellow;\n  margin: 0;\n  -webkit-text-stroke: 1px black;\n  font-size: 2rem;\n  font-weight: bold;\n  border: 1px dotted #494949;\n  border-radius: 0 0 0.3rem 0.3rem;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 0.8rem;\n  background: linear-gradient(#5a94c4, #193c58);\n  color: yellow;\n  margin: 0.25rem;\n  padding: 0.5rem;\n  width: 33%;\n  border-radius: 0.3rem;\n}\n\n.grid-item:first-child {\n  margin-left: 0;\n}\n\n.grid-item:last-child {\n  margin-right: 0;\n}\n\n.grid-item ion-icon {\n  font-size: 3rem;\n  margin-bottom: 0.3rem;\n}\n\nion-slides {\n  border-radius: 0.3rem 0.3rem 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1uYW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICBtYXJnaW46IDA7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgcmdiKDczLCA3MywgNzMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjNyZW0gMC4zcmVtO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig5MCwgMTQ4LCAxOTYpLCByZ2IoMjUsIDYwLCA4OCkpO1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgbWFyZ2luOiAwLjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogMzMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxufVxyXG5cclxuLmdyaWQtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW0gMC4zcmVtIDAgMDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7572:
/*!*****************************************************!*\
  !*** ./src/app/page/home/home.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- Ícone do menu -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Apresentação</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <!--\r\n    *******************************\r\n    * Conteúdo estátivo da página *\r\n    *******************************\r\n  -->\r\n\r\n  <!--\r\n    Ionic slideshow.\r\n    Ref.: https://ionicframework.com/docs/v3/api/components/slides/Slides/\r\n    Importante! Tente deixar todas as imagens com as mesmas dimensões.\r\n  -->\r\n  <ion-slides [options]=\"{ autoplay: { delay: 2000 } }\">\r\n    <ion-slide><img src=\"assets/screens01.jpg\" alt=\"Telas do aplicativo\"> </ion-slide>\r\n    <ion-slide><img src=\"assets/screens02.jpg\" alt=\"Telas do aplicativo\"> </ion-slide>\r\n    <ion-slide><img src=\"assets/screens03.jpg\" alt=\"Telas do aplicativo\"> </ion-slide>\r\n  </ion-slides>\r\n\r\n  <h3 class=\"ion-text-center app-name ion-padding ion-no-margin\">My&bull;Docs&bull;App</h3>\r\n  <p>O melhor aplicativo de gestão de alguma coisa do mercado.</p>\r\n  <p>Com ele você pode:</p>\r\n  <ul>\r\n    <li>Fazer alguma coisa;</li>\r\n    <li>Fazer várias coisas;</li>\r\n    <li>Não fazer nada;</li>\r\n    <li>Fazer de tudo, um pouco;</li>\r\n    <li>E... Muito mais...</li>\r\n  </ul>\r\n\r\n  <h4><strong>O que você deseja?</strong></h4>\r\n\r\n  <!--\r\n    Ionic Grid.\r\n    Ref.: https://ionicframework.com/docs/api/grid\r\n  -->\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <ion-col class=\"grid-item\" routerLink=\"/usuarios\">\r\n        <ion-icon ios=\"people-outline\" md=\"people-sharp\"></ion-icon>\r\n        <span>Gestão de usuários</span>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"grid-item\" routerLink=\"/documentos\">\r\n        <ion-icon ios=\"documents-outline\" md=\"documents-sharp\"></ion-icon>\r\n        <span>Gestão de documentos</span>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"grid-item\" routerLink=\"/faq\">\r\n        <ion-icon ios=\"help-circle-outline\" md=\"help-circle-sharp\"></ion-icon>\r\n        <span>Questões frequentes</span>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_home_home_module_ts.js.map