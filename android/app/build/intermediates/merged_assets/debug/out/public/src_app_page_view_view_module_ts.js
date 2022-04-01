"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_view_view_module_ts"],{

/***/ 5878:
/*!**************************************************!*\
  !*** ./src/app/page/view/view-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageRoutingModule": () => (/* binding */ ViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page */ 232);




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ 8021:
/*!******************************************!*\
  !*** ./src/app/page/view/view.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageModule": () => (/* binding */ ViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-routing.module */ 5878);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page */ 232);







let ViewPageModule = class ViewPageModule {
};
ViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_1__.ViewPage]
    })
], ViewPageModule);



/***/ }),

/***/ 232:
/*!****************************************!*\
  !*** ./src/app/page/view/view.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPage": () => (/* binding */ ViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page.html?ngResource */ 9925);
/* harmony import */ var _view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page.scss?ngResource */ 3024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/date.service */ 2963);




// Importa dependências





let ViewPage = class ViewPage {
    constructor(
    // Injeta dependências
    afs, activatedRoute, route, alertController, fb, date) {
        this.afs = afs;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.alertController = alertController;
        this.fb = fb;
        this.date = date;
        this.comments = [];
    }
    // 'ngOnInit()' deve ser 'async' por causa do 'await' usado logo abaixo!
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Cria formulário de comentários
            this.createForm();
            // Obtém o ID do artigo a ser exibido, da rota (URL)
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            // Obtém o artigo inteiro à partir do ID deste
            const myArt = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.afs, 'manual', this.id));
            // Se o artigo foi encontrado...
            if (myArt.exists()) {
                // Armazena o artigo em 'art'
                this.art = myArt.data();
                // Incrementa 'views' do artigo
                (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.afs, 'manual', this.id), {
                    views: (parseInt(this.art.views, 10) + 1).toString()
                });
                // Conecta ao banco de dados e obtém todos os comentários deste artigo
                (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.afs, 'comment'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('article', '==', this.id), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('status', '==', 'on'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)('date', 'desc')), (myComments) => {
                    // Limpa a lista de comentários para carregar novamente.
                    this.comments = [];
                    // Loop que itera cada faq obtida
                    myComments.forEach((myDoc) => {
                        // Armazena dados na variável 'faq'
                        const myComment = myDoc.data();
                        // Adiciona conteúdo de 'faq' em 'faqs' para ser usado na view
                        this.comments.push(myComment);
                    });
                });
                // Se não foi encontrado...
            }
            else {
                // Volta para a lista de artigos
                this.route.navigate(['/usuarios']);
            }
        });
    }
    // Função que exibe caixa de alerta
    presentAlert(alertHeader, alertMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: alertHeader,
                message: alertMessage,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            // Limpar campos do formulário
                            this.commentForm.markAsPristine();
                            // Preenche campos 'name' e 'email' com os valores atuais
                            this.commentForm.reset({
                                name: this.commentForm.value.name,
                                email: this.commentForm.value.email
                            });
                            return true;
                        }
                    }]
            });
            yield alert.present();
        });
    }
    // Função que cria o formulário
    createForm() {
        this.commentForm = this.fb.group({
            name: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3) // Pelo menos 3 caracteres
                ]
            ],
            email: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email // Deve ser um endereço de e-mail
                ]
            ],
            comment: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5) // Pelo menos 5 caracteres
                ]
            ]
        });
    }
    // Processa envio do formulário
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Se o formulário tem erros ao enviar...
            if (this.commentForm.invalid) {
                // Exibe caixa de alerta
                this.presentAlert('Ooooops!', 'Preencha todos os campos antes de enviar seus comentários...');
                // Se formulário está ok...
            }
            else {
                this.commentData = this.commentForm.value;
                this.commentData.date = this.date.brNow();
                this.commentData.status = 'on';
                this.commentData.article = this.id;
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.afs, 'comment'), this.commentData)
                    .then(() => {
                    const firstName = this.commentForm.value.name.split(' ')[0];
                    this.presentAlert(`Olá ${firstName}!`, 'Seu comentário foi enviado com sucesso.<br><br>Obrigado...');
                })
                    .catch(() => {
                    this.presentAlert('Ooooops!', 'Ocorreu um erro ao enviar seu comentário.<br><br>Por favor, tente mais tarde...');
                });
            }
        });
    }
};
ViewPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService }
];
ViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view',
        template: _view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewPage);



/***/ }),

/***/ 3024:
/*!*****************************************************!*\
  !*** ./src/app/page/view/view.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".date-time {\n  display: block;\n  text-align: right;\n}\n\nion-img {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlLXRpbWUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9925:
/*!*****************************************************!*\
  !*** ./src/app/page/view/view.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- Ícone para voltar -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/usuarios\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Artigo completo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" *ngIf=\"art\">\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-img src=\"{{ art.image }}\"></ion-img>\r\n  </div>\r\n\r\n  <h2 class=\"ion-text-center\">{{ art.title }}</h2>\r\n  <small class=\"date-time\">{{ art.date | date :'d/m/Y' }} às {{ art.date | date :'H:mm'}}.</small>\r\n  <div [innerHTML]=\"art.body\"></div>\r\n\r\n  <ion-button class=\"ion-margin-top\" routerLink=\"/usuarios\">\r\n    <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\r\n    Voltar\r\n  </ion-button>\r\n\r\n  <ion-item-divider class=\"ion-margin-bottom\"></ion-item-divider>\r\n\r\n  <h3>Comente</h3>\r\n\r\n  <form [formGroup]=\"commentForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nome:</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\r\n\r\n        <ion-text color=\"danger\" *ngIf=\"commentForm.controls.name.dirty && commentForm.controls.name.errors\">\r\n          <small *ngIf=\"commentForm.controls.name.errors?.required\">Preencha este campo.</small>\r\n          <small *ngIf=\"commentForm.controls.name.errors?.minlength\">Pelo menos 3 caracteres.</small>\r\n        </ion-text>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">E-mail:</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\r\n\r\n        <ion-text color=\"danger\" *ngIf=\"commentForm.controls.email.dirty && commentForm.controls.name.errors\">\r\n          <small *ngIf=\"commentForm.controls.email.errors?.required\">Preencha este campo.</small>\r\n          <small *ngIf=\"commentForm.controls.email.errors?.email\">Deve ser um e-mail.</small>\r\n        </ion-text>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Comentário:</ion-label>\r\n        <ion-textarea formControlName=\"comment\" required autoGrow></ion-textarea>\r\n\r\n        <ion-text color=\"danger\" *ngIf=\"commentForm.controls.comment.dirty && commentForm.controls.name.errors\">\r\n          <small *ngIf=\"commentForm.controls.comment.errors?.required\">Preencha este campo.</small>\r\n          <small *ngIf=\"commentForm.controls.comment.errors?.minlength\">Pelo menos 5 caracteres.</small>\r\n        </ion-text>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-button type=\"submit\" size=\"default\" color=\"primary\" [disabled]=\"commentForm.invalid\">Enviar</ion-button>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n  </form>\r\n\r\n    <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\r\n\r\n  <h3>Comentários</h3>\r\n\r\n  <div *ngIf=\"comments\">\r\n\r\n    <ion-card *ngFor=\"let comment of comments\" class=\"ion-no-margin ion-margin-top\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Por {{ comment.name }} em {{ comment.date | date :'d/m/Y' }}.</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>{{ comment.comment }}</ion-card-content>\r\n    </ion-card>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_view_view_module_ts.js.map