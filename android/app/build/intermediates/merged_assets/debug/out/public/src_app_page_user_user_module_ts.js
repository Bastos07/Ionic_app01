"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_user_user_module_ts"],{

/***/ 6562:
/*!**************************************************!*\
  !*** ./src/app/page/user/user-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 9927);




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 5358:
/*!******************************************!*\
  !*** ./src/app/page/user/user.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 6562);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page */ 9927);







let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage]
    })
], UserPageModule);



/***/ }),

/***/ 9927:
/*!****************************************!*\
  !*** ./src/app/page/user/user.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page.html?ngResource */ 116);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 5752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);




// Importa todas as dependências necessárias

let UserPage = class UserPage {
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
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('section', '==', 'users'), // Obtem somente os documentos que atendem a este requisito
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
UserPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore }
];
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user',
        template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPage);



/***/ }),

/***/ 5752:
/*!*****************************************************!*\
  !*** ./src/app/page/user/user.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-card ion-img {\n  width: 100%;\n  max-width: 400px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQgaW9uLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 116:
/*!*****************************************************!*\
  !*** ./src/app/page/user/user.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- Ícone do menu -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Ajuda dos Usuários</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-img src=\"assets/users01.png\"></ion-img>\r\n  </div>\r\n  <p>Nesta seção você encontra diversos artigos de ajuda sobre as funcionalidades de gestão de usuários da plataforma.</p>\r\n\r\n  <!-- Exibe esta div somente se existem documentos a serem exibidos -->\r\n  <div *ngIf=\"manuals\">\r\n\r\n    <!--\r\n      Loop principal:\r\n      Obtém cada item de 'manuals[]' e lista dentro do 'ion-card'.\r\n      'routerLink' aponta para a página view que recebe o id do documento a ser visualizado.\r\n     -->\r\n    <div *ngFor=\"let manual of manuals\">\r\n\r\n      <ion-card class=\"ion-text-center ion-no-margin ion-margin-bottom\" routerLink=\"/view/{{ manual.id }}\">\r\n        <!-- ion-img src=\"{{ manual.image}}\"></ -->\r\n        <ion-card-header>\r\n          <ion-card-title>{{ manual.title }}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>{{ manual.intro }}</ion-card-content>\r\n      </ion-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_user_user_module_ts.js.map