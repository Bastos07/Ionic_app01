"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_db_faq_faq_module_ts"],{

/***/ 5528:
/*!**********************************************!*\
  !*** ./src/app/db/faq/faq-routing.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 5599);




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

/***/ 4326:
/*!**************************************!*\
  !*** ./src/app/db/faq/faq.module.ts ***!
  \**************************************/
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
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 5528);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 5599);







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

/***/ 5599:
/*!************************************!*\
  !*** ./src/app/db/faq/faq.page.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page.html?ngResource */ 1404);
/* harmony import */ var _faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page.scss?ngResource */ 4947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 1866);




// Importa dependências




let FaqPage = class FaqPage {
    constructor() {
        // Dados a serem armazenados na coleção 'faq'
        this.data = [
            {
                question: 'Por que este aplicativo é tão feio?',
                response: 'Porque o fessô enxerga muito mal.'
            },
            {
                question: 'Por que este aplicativo não é verde?',
                response: 'Porque o fessô enxerga somente o azul.'
            },
            {
                question: 'Por que este aplicativo não faz nada?',
                response: 'Porque ainda estamos fazendo.'
            },
            {
                question: 'Por que este aplicativo não funciona?',
                response: 'Porque não serve para nada mesmo.'
            },
            {
                question: 'Como cadastrar um novo documento?',
                response: 'Faça upload usando alguma ferramenta.'
            },
            {
                question: 'Como alterar o nome do documento?',
                response: 'Acesse a função que faz isso.'
            }
        ];
        // Conexão com Firebase. Observe o uso da chave de 'environment'
        this.app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase);
        // Conexão com Firestore
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();
    }
    ngOnInit() { }
    /**
     * Função que salva os dados 'data' no banco de dados.
     * Esta função é executada pelo 'click' no botão da view.
     */
    create() {
        // Itera 'data'
        this.data.forEach((el) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Tentar armazenar cada documento (addDoc()) na coleção 'manual' (collection())
            try {
                const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.db, 'faq'), {
                    question: el.question,
                    response: el.response
                });
                // Se deu certo, exibe o ID do documento no console
                console.log('Documento adicionado com o ID: ', docRef.id);
                // Se de errado...
            }
            catch (e) {
                // Exibe mensagem de eror no console.
                console.error('Erro ao adicionar documento: ', e);
            }
        }));
    }
};
FaqPage.ctorParameters = () => [];
FaqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-faq',
        template: _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqPage);



/***/ }),

/***/ 4947:
/*!*************************************************!*\
  !*** ./src/app/db/faq/faq.page.scss?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1404:
/*!*************************************************!*\
  !*** ./src/app/db/faq/faq.page.html?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>faq</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-button (click)=\"create()\">Salvar dados</ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_db_faq_faq_module_ts.js.map