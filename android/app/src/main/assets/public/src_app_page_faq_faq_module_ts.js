"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_faq_faq_module_ts"],{

/***/ 3086:
/*!************************************************!*\
  !*** ./src/app/page/faq/faq-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 4675);




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ 5546:
/*!****************************************!*\
  !*** ./src/app/page/faq/faq.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageModule": () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 3086);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 4675);







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage]
    })
], FaqPageModule);



/***/ }),

/***/ 4675:
/*!**************************************!*\
  !*** ./src/app/page/faq/faq.page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page.html?ngResource */ 6468);
/* harmony import */ var _faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page.scss?ngResource */ 4168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);





// Importa todas as dependências necessárias

let FaqPage = class FaqPage {
    constructor(
    // Injeta dependências
    afs, alertController) {
        this.afs = afs;
        this.alertController = alertController;
        // Vai armazenar todos os FAQ obtidos para a view
        this.faqs = [];
    }
    ngOnInit() {
        // Conectar ao banco de dados e obtém todos os documentos da coleção 'faq'
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.afs, 'faq')), (faqs) => {
            // Limpa a lista de FAQ para carregar uma nova listagem em caso de atualização.
            this.faq = [];
            // Loop que itera cada faq obtida
            faqs.docs.forEach((doc) => {
                // Armazena dados da faq na variável 'faq'
                this.faq = doc.data();
                // Também armazena o ID do documento em 'faq'
                this.faq.id = doc.id;
                // Adiciona conteúdo de 'faq' em 'faqs' para ser usado na view
                this.faqs.push(this.faq);
            });
        });
    }
    // Caixa de alerta que exibe a FAQ completa ao clicar nela.
    showFaq(alertTitle, alertText) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: alertTitle,
                message: alertText,
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
};
FaqPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
FaqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-faq',
        template: _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqPage);



/***/ }),

/***/ 4168:
/*!***************************************************!*\
  !*** ./src/app/page/faq/faq.page.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6468:
/*!***************************************************!*\
  !*** ./src/app/page/faq/faq.page.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- Ícone do menu -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Questões frequêntes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"ion-text-center ion-margin-bottom\">\r\n    <ion-img src=\"assets/faq01.png\"></ion-img>\r\n  </div>\r\n\r\n  <small>Clique em uma pergunta para exibir a resposta:</small>\r\n\r\n  <!--\r\n    Só exibe a página se existem dados em 'faqs'.\r\n    Lembre-se que esses dados vem do backend na Internet.\r\n  -->\r\n  <ion-list *ngIf=\"faqs\">\r\n\r\n    <!--\r\n      O loop 'ngFor' itera cada item de 'faqs', armazenando em 'faq' e exibindo.\r\n      O conteúdo de <ion-item-divider> será repetido para cada item de 'faqs'.\r\n    -->\r\n    <ion-item *ngFor=\"let faq of faqs\">\r\n      <ion-label text-wrap (click)=\"showFaq(faq.question, faq.response)\"><strong>{{ faq.question }}</strong></ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_faq_faq_module_ts.js.map