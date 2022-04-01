"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_e404_e404_module_ts"],{

/***/ 5285:
/*!**************************************************!*\
  !*** ./src/app/page/e404/e404-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E404PageRoutingModule": () => (/* binding */ E404PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _e404_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e404.page */ 8386);




const routes = [
    {
        path: '',
        component: _e404_page__WEBPACK_IMPORTED_MODULE_0__.E404Page
    }
];
let E404PageRoutingModule = class E404PageRoutingModule {
};
E404PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], E404PageRoutingModule);



/***/ }),

/***/ 7075:
/*!******************************************!*\
  !*** ./src/app/page/e404/e404.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E404PageModule": () => (/* binding */ E404PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _e404_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e404-routing.module */ 5285);
/* harmony import */ var _e404_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e404.page */ 8386);







let E404PageModule = class E404PageModule {
};
E404PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _e404_routing_module__WEBPACK_IMPORTED_MODULE_0__.E404PageRoutingModule
        ],
        declarations: [_e404_page__WEBPACK_IMPORTED_MODULE_1__.E404Page]
    })
], E404PageModule);



/***/ }),

/***/ 8386:
/*!****************************************!*\
  !*** ./src/app/page/e404/e404.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E404Page": () => (/* binding */ E404Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _e404_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e404.page.html?ngResource */ 6221);
/* harmony import */ var _e404_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e404.page.scss?ngResource */ 8612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let E404Page = class E404Page {
    constructor() { }
    ngOnInit() {
    }
};
E404Page.ctorParameters = () => [];
E404Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-e404',
        template: _e404_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_e404_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], E404Page);



/***/ }),

/***/ 8612:
/*!*****************************************************!*\
  !*** ./src/app/page/e404/e404.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlNDA0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6221:
/*!*****************************************************!*\
  !*** ./src/app/page/e404/e404.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- Ícone do menu -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Oooops!</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div>\r\n\r\n    <div class=\"ion-text-center\"><img src=\"assets/e404.jpg\" alt=\"Erro 404\"></div>\r\n    <p>O conteúdo que você está tentando acessar não foi encontrado.</p>\r\n    <p>Use o menu para navegar entre as páginas e seções ou clique no botão abaixo.</p>\r\n    <ion-button size=\"block\" routerLink=\"/\">Tela inicial</ion-button>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_e404_e404_module_ts.js.map