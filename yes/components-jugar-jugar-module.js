(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-jugar-jugar-module"],{

/***/ "LohN":
/*!*********************************************************************************!*\
  !*** ./src/app/components/jugar/contador-inicial/contador-inicial.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContadorInicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContadorInicialComponent", function() { return ContadorInicialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


//import { clearInterval } from 'timers';
class ContadorInicialComponent {
    constructor(router) {
        this.router = router;
        this.contador = 3;
    }
    ngOnInit() {
        this.playContadorInicial();
    }
    ngOnDestroy() {
        clearInterval(this.setInterval);
    }
    playContadorInicial() {
        this.setInterval = setInterval(() => {
            //console.log('hola');
            if (this.contador === 0) {
                this.router.navigate(['/jugar/realizarQuizz']);
            }
            this.contador = this.contador - 1;
        }, 1000);
    }
}
ContadorInicialComponent.ɵfac = function ContadorInicialComponent_Factory(t) { return new (t || ContadorInicialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContadorInicialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContadorInicialComponent, selectors: [["app-contador-inicial"]], decls: 3, vars: 1, consts: [[1, "contenedor"], [1, "animate__animated", "animate__heartBeat", "titulo", "contador"]], template: function ContadorInicialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contador);
    } }, styles: [".contenedor[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n.contador[_ngcontent-%COMP%]{\r\n    font-size: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhZG9yLWluaWNpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNvbnRhZG9yLWluaWNpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFkb3J7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "Mu8P":
/*!*******************************************************************************!*\
  !*** ./src/app/components/jugar/ingresar-nombre/ingresar-nombre.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IngresarNombreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarNombreComponent", function() { return IngresarNombreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_respuesta_quizz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/respuesta-quizz.service */ "bU1o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function IngresarNombreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorText);
} }
class IngresarNombreComponent {
    constructor(_respuestaQuizzService, router) {
        this._respuestaQuizzService = _respuestaQuizzService;
        this.router = router;
        this.nombre = '';
        this.errorText = '';
        this.error = false;
    }
    ngOnInit() {
        this.validarRefresh();
    }
    ingresarNombre() {
        if (this.nombre === '') {
            this.errorMensaje('Ingrese su nombre');
            return;
        }
        console.log(this.nombre);
        this._respuestaQuizzService.nombreParticipante = this.nombre;
        this.router.navigate(['/jugar/iniciarContador']);
    }
    validarRefresh() {
        if (this._respuestaQuizzService.cuestionario === undefined) {
            this.router.navigate(['/']);
        }
    }
    errorMensaje(text) {
        this.errorText = text;
        this.error = true;
        // Mostramos el error por 4 segundos
        setTimeout(() => {
            this.error = false;
        }, 4000);
    }
}
IngresarNombreComponent.ɵfac = function IngresarNombreComponent_Factory(t) { return new (t || IngresarNombreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_respuesta_quizz_service__WEBPACK_IMPORTED_MODULE_1__["RespuestaQuizzService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IngresarNombreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IngresarNombreComponent, selectors: [["app-ingresar-nombre"]], decls: 5, vars: 2, consts: [[1, "contenedor"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "text", "placeholder", "Ingrese su nombre", 1, "form-control", "input-aceptar", "mb-3", 3, "ngModel", "ngModelChange"], [1, "btn-principal", "btn-ingresar", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"]], template: function IngresarNombreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IngresarNombreComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IngresarNombreComponent_Template_input_ngModelChange_2_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IngresarNombreComponent_Template_button_click_3_listener() { return ctx.ingresarNombre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".contenedor[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n.input-aceptar[_ngcontent-%COMP%]{\r\n    width: 230px;\r\n    text-align: center;\r\n    font-family: 'Montserrat', sans-serif;\r\n    height: 3.125rem;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.btn-ingresar[_ngcontent-%COMP%]{\r\n    width: 230px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc2FyLW5vbWJyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJpbmdyZXNhci1ub21icmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaW5wdXQtYWNlcHRhcntcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDMuMTI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uYnRuLWluZ3Jlc2Fye1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "SfX/":
/*!*****************************************************************************!*\
  !*** ./src/app/components/jugar/realizar-quizz/realizar-quizz.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RealizarQuizzComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealizarQuizzComponent", function() { return RealizarQuizzComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_respuesta_quizz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/respuesta-quizz.service */ "bU1o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "q98u");





function RealizarQuizzComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RealizarQuizzComponent_div_1_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RealizarQuizzComponent_div_1_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const respuesta_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.respuestaSeleccionada(respuesta_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const respuesta_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.addClassOption(respuesta_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", respuesta_r3.descripcion, " ");
} }
function RealizarQuizzComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RealizarQuizzComponent_div_1_li_10_Template, 2, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RealizarQuizzComponent_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.siguiente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ACEPTAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.obtenerSegundos());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.obtenerTitulo());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cuestionario.listPreguntas[ctx_r1.indexPregunta].listRespuestas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.opcionSeleccionada == null);
} }
class RealizarQuizzComponent {
    constructor(_respuestaQuizzService, router) {
        this._respuestaQuizzService = _respuestaQuizzService;
        this.router = router;
        this.nombreParticipante = '';
        this.indexPregunta = 0;
        this.segundos = 0;
        this.loading = false;
        this.cantidadCorrectas = 0;
        this.cantidadIncorrectas = 0;
        this.puntosTotales = 0;
        this.listRespuestaUsuario = [];
    }
    ngOnInit() {
        //console.log(this._respuestaQuizzService.cuestionario);
        //console.log(this._respuestaQuizzService.nombreParticipante);
        this.cuestionario = this._respuestaQuizzService.cuestionario;
        this.nombreParticipante = this._respuestaQuizzService.nombreParticipante;
        this.validateRefresh();
        this.iniciarContador();
    }
    ngOnDestroy() {
        clearInterval(this.setInterval);
    }
    validateRefresh() {
        if (this.cuestionario === undefined) {
            this.router.navigate(['/']);
        }
    }
    obtenerSegundos() {
        return this.segundos;
    }
    obtenerTitulo() {
        return this.cuestionario.listPreguntas[this.indexPregunta].titulo;
    }
    iniciarContador() {
        this.segundos = this.cuestionario.listPreguntas[this.indexPregunta].segundos;
        this.setInterval = setInterval(() => {
            if (this.segundos === 0) {
                /* this.indexPregunta++;
                clearInterval(this.setInterval);
                this.iniciarContador(); */
                this.agregarRespuesta();
            }
            this.segundos = this.segundos - 1;
        }, 1000);
    }
    respuestaSeleccionada(respuesta, index) {
        this.opcionSeleccionada = respuesta;
        this.indexSeleccionado = index;
    }
    addClassOption(respuesta) {
        if (respuesta === this.opcionSeleccionada) {
            return 'classSeleccionada';
        }
        else {
            return '';
        }
    }
    siguiente() {
        clearInterval(this.setInterval);
        this.agregarRespuesta();
        this.iniciarContador();
    }
    agregarRespuesta() {
        //Incrementamos contadores(Correcta y incorrecta)
        this.contadorCorrectaIncorrecta();
        // Creamos objeto respuesta y lo agregamos al array
        const respuestaUsuario = {
            titulo: this.cuestionario.listPreguntas[this.indexPregunta].titulo,
            puntosObtenidos: this.obtenemosPuntosPregunta(),
            segundos: this.obtenemosSegundos(),
            indexRespuestaSeleccionada: this.obtenemosIndexSeleccionado(),
            listRespuesta: this.cuestionario.listPreguntas[this.indexPregunta].listRespuestas,
        };
        this.listRespuestaUsuario.push(respuestaUsuario);
        this.opcionSeleccionada = undefined;
        this.indexSeleccionado = undefined;
        //Validamos si es la ultima pregunta
        if (this.cuestionario.listPreguntas.length - 1 === this.indexPregunta) {
            // guardamos kas respuestas en firebase
            this.guardamosRespuestaCuestionario();
            // redirecciomos al proximo coponente
        }
        else {
            this.indexPregunta++;
            this.segundos = this.cuestionario.listPreguntas[this.indexPregunta].segundos;
        }
    }
    obtenemosPuntosPregunta() {
        // si el usuario no selecciono alguna pregunta ...
        if (this.opcionSeleccionada === undefined) {
            return 0;
        }
        const puntosPregunta = this.cuestionario.listPreguntas[this.indexPregunta].puntos;
        //Validamos si la pregunta es correcta
        if (this.opcionSeleccionada.esCorrecta === true) {
            // incrementamos la variable puntosTotales..
            this.puntosTotales = this.puntosTotales + puntosPregunta;
            return puntosPregunta;
        }
        else {
            return 0;
        }
    }
    obtenemosSegundos() {
        //validamos si el usuario no respondio la pregunta
        if (this.opcionSeleccionada === undefined) {
            return 'NO RESPONDIO';
        }
        else {
            const segundosPregunta = this.cuestionario.listPreguntas[this.indexPregunta].segundos;
            const segundosRespondidos = segundosPregunta - this.segundos;
            return segundosRespondidos.toString();
        }
    }
    obtenemosIndexSeleccionado() {
        if (this.opcionSeleccionada === undefined) {
            return '';
        }
        else {
            return this.indexSeleccionado;
        }
    }
    contadorCorrectaIncorrecta() {
        // Validamos si el usuario selecciono pregunta
        if (this.opcionSeleccionada === undefined) {
            this.cantidadIncorrectas++;
            return;
        }
        //Preguntamos si la opcion es INCORRECTA
        if (this.opcionSeleccionada.esCorrecta === false) {
            this.cantidadIncorrectas++;
        }
        else {
            this.cantidadCorrectas++;
        }
    }
    guardamosRespuestaCuestionario() {
        const respuestaCuestionario = {
            idCuestionario: this.cuestionario.id,
            nombreParticipante: this.nombreParticipante,
            fecha: new Date(),
            cantidadPreguntas: this.cuestionario.cantPreguntas,
            cantidadCorrectas: this.cantidadCorrectas,
            cantidadIncorrectas: this.cantidadIncorrectas,
            puntosTotales: this.puntosTotales,
            listRespuestaUsuario: this.listRespuestaUsuario
        };
        //console.log(respuestaCuestionario);
        this.loading = true;
        //Almacenamos la respuesta en firebase
        this._respuestaQuizzService.setRespuestaUsuario(respuestaCuestionario).then(data => {
            console.log(data);
            //console.log(this.listRespuestaUsuario);
            this.router.navigate(['/jugar/respuestaUsuario', data.id]);
        }, error => {
            console.log(error);
            this.router.navigate(['/']);
        });
    }
}
RealizarQuizzComponent.ɵfac = function RealizarQuizzComponent_Factory(t) { return new (t || RealizarQuizzComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_respuesta_quizz_service__WEBPACK_IMPORTED_MODULE_1__["RespuestaQuizzService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RealizarQuizzComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealizarQuizzComponent, selectors: [["app-realizar-quizz"]], decls: 2, vars: 2, consts: [["class", "contenedor", 4, "ngIf"], ["class", "container mt-3", 4, "ngIf"], [1, "contenedor"], [1, "container", "mt-3"], [1, "d-flex", "justify-content-center", "mt-3"], [1, "titulo", "contadorPregunta"], [1, "row", "mt-2"], [1, "text-center"], [1, "titulo"], [1, "col-lg-6", "offset-lg-3"], [1, "list-group", "mt-3"], ["class", "list-group-item animate__animated animate__fadeIn", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-principal", "btn-aceptar", "mt-3", 3, "disabled", "click"], [1, "list-group-item", "animate__animated", "animate__fadeIn", 3, "ngClass", "click"]], template: function RealizarQuizzComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RealizarQuizzComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RealizarQuizzComponent_div_1_Template, 13, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".contadorPregunta[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.classSeleccionada[_ngcontent-%COMP%] {\r\n    background-color: #131d2d;\r\n    color: white;\r\n}\r\n\r\n.btn-aceptar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n\r\n.btn-aceptar[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWxpemFyLXF1aXp6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakIiLCJmaWxlIjoicmVhbGl6YXItcXVpenouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWRvclByZWd1bnRhIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xhc3NTZWxlY2Npb25hZGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQyZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1hY2VwdGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWFjZXB0YXI6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGVuZWRvcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "VJwS":
/*!**********************************************************!*\
  !*** ./src/app/components/jugar/jugar-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: JugarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugarRoutingModule", function() { return JugarRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_respuesta_usuario_respuesta_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/respuesta-usuario/respuesta-usuario.component */ "OhXx");
/* harmony import */ var _contador_inicial_contador_inicial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contador-inicial/contador-inicial.component */ "LohN");
/* harmony import */ var _ingresar_nombre_ingresar_nombre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingresar-nombre/ingresar-nombre.component */ "Mu8P");
/* harmony import */ var _realizar_quizz_realizar_quizz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realizar-quizz/realizar-quizz.component */ "SfX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");


//Componentes





const routes = [
    { path: '', component: _ingresar_nombre_ingresar_nombre_component__WEBPACK_IMPORTED_MODULE_3__["IngresarNombreComponent"] },
    { path: 'iniciarContador', component: _contador_inicial_contador_inicial_component__WEBPACK_IMPORTED_MODULE_2__["ContadorInicialComponent"] },
    { path: 'realizarQuizz', component: _realizar_quizz_realizar_quizz_component__WEBPACK_IMPORTED_MODULE_4__["RealizarQuizzComponent"] },
    { path: 'respuestaUsuario/:id', component: _shared_respuesta_usuario_respuesta_usuario_component__WEBPACK_IMPORTED_MODULE_1__["RespuestaUsuarioComponent"] },
];
class JugarRoutingModule {
}
JugarRoutingModule.ɵfac = function JugarRoutingModule_Factory(t) { return new (t || JugarRoutingModule)(); };
JugarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: JugarRoutingModule });
JugarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](JugarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zm6V":
/*!**************************************************!*\
  !*** ./src/app/components/jugar/jugar.module.ts ***!
  \**************************************************/
/*! exports provided: JugarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugarModule", function() { return JugarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "hGdz");
/* harmony import */ var _jugar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jugar-routing.module */ "VJwS");
/* harmony import */ var _ingresar_nombre_ingresar_nombre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingresar-nombre/ingresar-nombre.component */ "Mu8P");
/* harmony import */ var _contador_inicial_contador_inicial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contador-inicial/contador-inicial.component */ "LohN");
/* harmony import */ var _realizar_quizz_realizar_quizz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./realizar-quizz/realizar-quizz.component */ "SfX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");



// Componentes




class JugarModule {
}
JugarModule.ɵfac = function JugarModule_Factory(t) { return new (t || JugarModule)(); };
JugarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: JugarModule });
JugarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _jugar_routing_module__WEBPACK_IMPORTED_MODULE_2__["JugarRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](JugarModule, { declarations: [_ingresar_nombre_ingresar_nombre_component__WEBPACK_IMPORTED_MODULE_3__["IngresarNombreComponent"],
        _contador_inicial_contador_inicial_component__WEBPACK_IMPORTED_MODULE_4__["ContadorInicialComponent"],
        _realizar_quizz_realizar_quizz_component__WEBPACK_IMPORTED_MODULE_5__["RealizarQuizzComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _jugar_routing_module__WEBPACK_IMPORTED_MODULE_2__["JugarRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-jugar-jugar-module.js.map