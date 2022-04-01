"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_contacts_contacts_module_ts"],{

/***/ 5327:
/*!**********************************************************!*\
  !*** ./src/app/page/contacts/contacts-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageRoutingModule": () => (/* binding */ ContactsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page */ 4665);




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_0__.ContactsPage
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ 3903:
/*!**************************************************!*\
  !*** ./src/app/page/contacts/contacts.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageModule": () => (/* binding */ ContactsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 5327);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page */ 4665);







let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_1__.ContactsPage]
    })
], ContactsPageModule);



/***/ }),

/***/ 4665:
/*!************************************************!*\
  !*** ./src/app/page/contacts/contacts.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPage": () => (/* binding */ ContactsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page.html?ngResource */ 3475);
/* harmony import */ var _contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page.scss?ngResource */ 6964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/date.service */ 2963);




// Importa dependências
 // Classes do Reactive forms
 // Roteamento
 // Caixa de alerta do Ionic
 // Firestore


let ContactsPage = class ContactsPage {
    constructor(
    // Injeta dependências
    fb, // Objeto do formulário
    alertController, // Objeto da caixa de alerta
    router, // Objeto que faz redirecionamento de rota
    afs, date) {
        this.fb = fb;
        this.alertController = alertController;
        this.router = router;
        this.afs = afs;
        this.date = date;
    }
    ngOnInit() {
        // Cria formulário
        this.createForm();
    }
    // Função que cria o formulário
    createForm() {
        this.contactForm = this.fb.group({
            name: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3) // Pelo menos 3 caracteres
                ]
            ],
            email: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email // Deve ser um endereço de e-mail
                ]
            ],
            subject: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5) // Pelo menos 5 caracteres
                ]
            ],
            message: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5) // Pelo menos 5 caracteres
                ]
            ]
        });
    }
    // Processa envio do formulário
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Se o formulário tem erros ao enviar...
            if (this.contactForm.invalid) {
                // Exibe caixa de alerta
                this.presentAlert('Ooooops!', 'Preencha todos os campos antes de enviar...', false);
                // Se formulário está ok...
            }
            else {
                // Formata os campos do documento do Firebase Firestore
                this.contactData = this.contactForm.value; // Dados do formulário
                this.contactData.date = this.date.brNow(); // Data atual já formatada
                this.contactData.status = 'recebido'; // Status do contato
                // Armazena documento na coleção 'contact' do Firestore
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.afs, 'contact'), this.contactData)
                    // Se deu certo...
                    .then(() => {
                    // Extrai primeiro nome do remetente
                    const firstName = this.contactForm.value.name.split(' ')[0];
                    // Exibe caixa de alerta
                    this.presentAlert(`Olá ${firstName}!`, 'Seu contato foi enviado com sucesso.<br><br>Obrigado...', true // Força recirecionamento
                    );
                })
                    // Se deu errado...
                    .catch(() => {
                    // Exibe caixa de alerta
                    this.presentAlert('Ooooops!', 'ocorreu um erro ao enviar seu contato.<br><br>Por favor, tente mais tarde...', false);
                });
            }
        });
    }
    // Função que exibe caixa de alerta
    presentAlert(alertHeader, alertMessage, alertRedirect) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: alertHeader,
                message: alertMessage,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            // Se solicitou redirecionamento...
                            if (alertRedirect) {
                                // Limpar campos do formulário
                                this.contactForm.markAsPristine();
                                // Preenche campos 'name' e 'email' com os valores atuais
                                this.contactForm.reset({
                                    name: this.contactForm.value.name,
                                    email: this.contactForm.value.email
                                });
                                // Redireciona para a página inicial
                                this.router.navigate(['/inicio']);
                                // Se não solicitou redirecionamento...
                            }
                            else {
                                // Somente fecha o alert
                                return true;
                            }
                        }
                    }]
            });
            yield alert.present();
        });
    }
    goSocial(social) {
        let url = '';
        switch (social) {
            case 'github':
                url = 'https://github.com/Luferat';
                break;
        }
    }
};
ContactsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Firestore },
    { type: _services_date_service__WEBPACK_IMPORTED_MODULE_3__.DateService }
];
ContactsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-contacts',
        template: _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactsPage);



/***/ }),

/***/ 6964:
/*!*************************************************************!*\
  !*** ./src/app/page/contacts/contacts.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "div ion-icon {\n  font-size: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJjb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogOHJlbTtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 3475:
/*!*************************************************************!*\
  !*** ./src/app/page/contacts/contacts.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- Ícone do menu -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Faça contato</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-icon name=\"chatbubbles\" color=\"warning\"></ion-icon>\r\n  </div>\r\n\r\n  <p>Preencha todos os campos para enviar um contato para a equipe do aplicativo.</p>\r\n\r\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nome:</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\r\n\r\n        <ion-text color=\"danger\" *ngIf=\"contactForm.controls.name.dirty && contactForm.controls.name.errors\">\r\n          <span *ngIf=\"contactForm.controls.name.errors?.required\">Preencha este campo.</span>\r\n          <span *ngIf=\"contactForm.controls.name.errors?.minlength\">Pelo menos 3 caracteres.</span>\r\n        </ion-text>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">E-mail:</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\r\n\r\n        <ion-text color=\"danger\" *ngIf=\"contactForm.controls.email.dirty && contactForm.controls.email.errors\">\r\n          <span *ngIf=\"contactForm.controls.email.errors?.required\">Preencha este campo.</span>\r\n          <span *ngIf=\"contactForm.controls.email.errors?.email\">Deve ser um e-mail.</span>\r\n        </ion-text>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Assunto:</ion-label>\r\n        <ion-input type=\"subject\" formControlName=\"subject\" required></ion-input>\r\n\r\n        <ion-text color=\"danger\" *ngIf=\"contactForm.controls.subject.dirty && contactForm.controls.subject.errors\">\r\n          <span *ngIf=\"contactForm.controls.subject.errors?.required\">Preencha este campo.</span>\r\n          <span *ngIf=\"contactForm.controls.subject.errors?.minlength\">Pelo menos 5 caracteres.</span>\r\n        </ion-text>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Mensagem:</ion-label>\r\n        <ion-textarea formControlName=\"message\" required autoGrow></ion-textarea>\r\n\r\n        <ion-text color=\"danger\" *ngIf=\"contactForm.controls.message.dirty && contactForm.controls.message.errors\">\r\n          <span *ngIf=\"contactForm.controls.message.errors?.required\">Preencha este campo.</span>\r\n          <span *ngIf=\"contactForm.controls.message.errors?.minlength\">Pelo menos 5 caracteres.</span>\r\n        </ion-text>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-button type=\"submit\" size=\"default\" color=\"primary\" [disabled]=\"contactForm.invalid\">Enviar</ion-button>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_contacts_contacts_module_ts.js.map