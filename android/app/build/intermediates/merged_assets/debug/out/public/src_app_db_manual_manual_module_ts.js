"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_db_manual_manual_module_ts"],{

/***/ 5185:
/*!****************************************************!*\
  !*** ./src/app/db/manual/manual-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualPageRoutingModule": () => (/* binding */ ManualPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _manual_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual.page */ 6735);




const routes = [
    {
        path: '',
        component: _manual_page__WEBPACK_IMPORTED_MODULE_0__.ManualPage
    }
];
let ManualPageRoutingModule = class ManualPageRoutingModule {
};
ManualPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManualPageRoutingModule);



/***/ }),

/***/ 3810:
/*!********************************************!*\
  !*** ./src/app/db/manual/manual.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualPageModule": () => (/* binding */ ManualPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _manual_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-routing.module */ 5185);
/* harmony import */ var _manual_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual.page */ 6735);







let ManualPageModule = class ManualPageModule {
};
ManualPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _manual_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManualPageRoutingModule
        ],
        declarations: [_manual_page__WEBPACK_IMPORTED_MODULE_1__.ManualPage]
    })
], ManualPageModule);



/***/ }),

/***/ 6735:
/*!******************************************!*\
  !*** ./src/app/db/manual/manual.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualPage": () => (/* binding */ ManualPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _manual_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual.page.html?ngResource */ 6834);
/* harmony import */ var _manual_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual.page.scss?ngResource */ 788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 1866);



/* eslint-disable max-len */

// Importa dependências




let ManualPage = class ManualPage {
    constructor() {
        // Dados a serem armazenados na coleção 'manual'
        this.data = [
            {
                date: '2022-03-16 15:21',
                section: 'users',
                title: 'Cadastrar-se',
                image: 'https://picsum.photos/200',
                intro: 'Como se cadastrar no |------| de forma correta.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-16 15:22',
                section: 'users',
                title: 'Entrar no aplicativo',
                image: 'https://picsum.photos/201',
                intro: 'Como se logar e acessar os recursos exclusivos.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-16 15:23',
                section: 'users',
                title: 'Sair do aplicativo',
                image: 'https://picsum.photos/202',
                intro: 'Como fazer logout do aplicativo de forma segura.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-16 15:24',
                section: 'users',
                title: 'Editar perfil',
                image: 'https://picsum.photos/199',
                intro: 'Como alterar dados do seu perfil de ususário.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-16 15:25',
                section: 'users',
                title: 'Trocar senha',
                image: 'https://picsum.photos/198',
                intro: 'Como trocar a senha e manter sua conta segura.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-16 15:26',
                section: 'users',
                title: 'Lembrar senha',
                image: 'https://picsum.photos/203',
                intro: 'Como voltar a ter acesso ao aplicativo após esquecer a senha.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-17 15:26',
                section: 'docs',
                title: 'Enviando um documento',
                image: 'https://picsum.photos/200',
                intro: 'Cmo enviar documentos novos para a plataforma.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-17 15:27',
                section: 'docs',
                title: 'Documentos suportados',
                image: 'https://picsum.photos/201',
                intro: 'Que tipos de documentos podemos armazenar na plataforma.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-17 15:28',
                section: 'docs',
                title: 'Editando metadados',
                image: 'https://picsum.photos/200',
                intro: 'Como alterar nome e outras informações sobre um documento.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-17 15:29',
                section: 'docs',
                title: 'Baixando documentos',
                image: 'https://picsum.photos/200',
                intro: 'Como acessar, ler e baixar documentos da platafoma.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-17 15:20',
                section: 'docs',
                title: 'Permissões do documento',
                image: 'https://picsum.photos/200',
                intro: 'Como compartilhar documentos com outros usuários.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
            },
            {
                date: '2022-03-17 15:31',
                section: 'docs',
                title: 'Apagando documentos',
                image: 'https://picsum.photos/200',
                intro: 'COmo apagar um documento da plataforma.',
                body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet quibusdam quam sed, voluptatem dolorum qui totam ut quae porro repellendus perferendis eaque et minus iure officiis ipsum. Iure, nesciunt!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facilis. Vitae aliquam neque nesciunt eaque libero quod temporibus doloremque molestias reiciendis consequatur id quis ducimus dolor eos, totam illo ut.</p><div class="img-center"><img src="https://picsum.photos/400/300" alt="Imagem aleatória"><small>Legenda da imagem.</small></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis deserunt ratione autem. Deleniti eum id corrupti, perferendis aut minima voluptatum commodi architecto accusamus tenetur, earum fugiat officia iste!</p><h4>Lista de links:</h4><ul><li><a href="http://catabits.com.br" target="_blank">Blog do fessô</a></li><li><a href="https://github.com/Luferat" target="_blank">GitHub do fessô</a></li></ul><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis provident quod atque ipsum beatae harum mollitia magnam aliquam error voluptatum inventore, earum blanditiis hic voluptatem in odit esse.</p>',
                views: '0',
                status: 'on'
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
                const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.db, 'manual'), {
                    date: el.date,
                    section: el.section,
                    title: el.title,
                    image: el.image,
                    intro: el.intro,
                    body: el.body,
                    views: el.views,
                    status: el.status
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
ManualPage.ctorParameters = () => [];
ManualPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-manual',
        template: _manual_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manual_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManualPage);



/***/ }),

/***/ 788:
/*!*******************************************************!*\
  !*** ./src/app/db/manual/manual.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51YWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6834:
/*!*******************************************************!*\
  !*** ./src/app/db/manual/manual.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>manual</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-button (click)=\"create()\">Salvar dados</ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_db_manual_manual_module_ts.js.map