"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_docs_docs_module_ts"],{

/***/ 6457:
/*!**************************************************!*\
  !*** ./src/app/page/docs/docs-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPageRoutingModule": () => (/* binding */ DocsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.page */ 822);




const routes = [
    {
        path: '',
        component: _docs_page__WEBPACK_IMPORTED_MODULE_0__.DocsPage
    }
];
let DocsPageRoutingModule = class DocsPageRoutingModule {
};
DocsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DocsPageRoutingModule);



/***/ }),

/***/ 5888:
/*!******************************************!*\
  !*** ./src/app/page/docs/docs.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPageModule": () => (/* binding */ DocsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _docs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-routing.module */ 6457);
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.page */ 822);







let DocsPageModule = class DocsPageModule {
};
DocsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _docs_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocsPageRoutingModule
        ],
        declarations: [_docs_page__WEBPACK_IMPORTED_MODULE_1__.DocsPage]
    })
], DocsPageModule);



/***/ }),

/***/ 822:
/*!****************************************!*\
  !*** ./src/app/page/docs/docs.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPage": () => (/* binding */ DocsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _docs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.page.html?ngResource */ 7359);
/* harmony import */ var _docs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.page.scss?ngResource */ 1740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);





let DocsPage = class DocsPage {
    constructor(
    // Injeta dependências
    afs) {
        this.afs = afs;
        // Armazena todas as páginas para exibir no HTML
        this.manuals = [];
    }
    ngOnInit() {
        // Conecta ao banco de dados e obtém todos os documentos da coleção 'manual' cujo 'section=user'
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.afs, 'manual'), // Conecta-se à coleção 'manual'
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('section', '==', 'docs'), // Obtem somente os documentos que atendem a este requisito
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('status', '==', 'on'), // Somente se o 'status' for 'on'
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('date', 'desc') // Obtém os documentos ordenados pela data, da mais nova para a mais antiga
        ), (myManual) => {
            // Limpa a lista de manuais para carregar novamente.
            this.manuals = [];
            // Loop que itera cada faq obtida
            myManual.forEach((doc) => {
                // Armazena dados na variável 'faq'
                this.manual = doc.data();
                // Armazena o ID do documento em 'faq'
                this.manual.id = doc.id;
                // Adiciona conteúdo de 'faq' em 'faqs' para ser usado na view
                this.manuals.push(this.manual);
            });
        });
    }
};
DocsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore }
];
DocsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-docs',
        template: _docs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_docs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocsPage);



/***/ }),

/***/ 1740:
/*!*****************************************************!*\
  !*** ./src/app/page/docs/docs.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7359:
/*!*****************************************************!*\
  !*** ./src/app/page/docs/docs.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- Ícone do menu -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Ajuda dos Documentos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-img src=\"assets/users01.png\"></ion-img>\r\n  </div>\r\n  <p>Nesta seção você encontra diversos artigos de ajuda sobre as funcionalidades de gestão de documentos da plataforma.</p>\r\n\r\n  <!-- Exibe esta div somente se existem documentos a serem exibidos -->\r\n  <div *ngIf=\"manuals\">\r\n\r\n    <!--\r\n      Loop principal:\r\n      Obtém cada item de 'manuals[]' e lista dentro do 'ion-card'.\r\n      'routerLink' aponta para a página view que recebe o id do documento a ser visualizado.\r\n     -->\r\n    <div *ngFor=\"let manual of manuals\">\r\n\r\n      <ion-card class=\"ion-text-center ion-no-margin ion-margin-bottom\" routerLink=\"/view/{{ manual.id }}\">\r\n        <!-- ion-img src=\"{{ manual.image}}\"></ -->\r\n        <ion-card-header>\r\n          <ion-card-title>{{ manual.title }}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>{{ manual.intro }}</ion-card-content>\r\n      </ion-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_docs_docs_module_ts.js.map