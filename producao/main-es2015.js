(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imagem-fundo\">\n\n  <nav class=\"navbar navbar-fixed-top\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-right\">\n\n        <div id=\"navbar-menu\">\n          <ul class=\"heroes\">\n            <li>\n              <a routerLink=\"/atividades\">\n                <span class=\"badge\">01</span>\n                <span class=\"name\">Atividades</span>\n              </a>\n            </li>\n\n            <li>\n              <a routerLink=\"/moedas\">\n                <span class=\"badge\">02</span>\n                <span class=\"name\">Moedas</span>\n              </a>\n            </li>\n\n            <li>\n              <a routerLink=\"/recompensas\">\n                <span class=\"badge\">03</span>\n                <span class=\"name\">Recompensas</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n\n\n\n\n  <router-outlet></router-outlet>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/atividades/atividades.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/atividades/atividades.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- formgroup of atividadeForm -->\n<form [formGroup]=\"atividadeForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                <label for=\"nome\">Nome da atividade</label>\n                <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n            </div>\n        </div>\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"quantidadeMoedas\">Quantidade de moedas</label>\n                <input type=\"number\" class=\"form-control\" id=\"quantidadeMoedas\" formControlName=\"quantidadeMoedas\">\n            </div>\n        </div>\n        <!-- dropdown if moedas -->\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"moeda\">Moeda</label>\n                <select class=\"form-control\" id=\"moeda\" formControlName=\"moeda\">\n                    <option *ngFor=\"let moeda of moedas\" [ngValue]=\"moeda\">{{moeda.nome}}</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <div class=\"col-md-12 pull-right\" style=\"margin-top:25px;\">\n                <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n            </div>\n        </div>\n    </div>\n    <br />\n\n\n</form>\n\n<!-- list of atividade   -->\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\"> Atividades </h4>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\" text-primary\">\n                            <th>\n                                Nome\n                            </th>\n                            <th>\n                                Quantidade de moedas\n                            </th>\n                            <th>\n                                Ações\n                            </th>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let atividade of atividades\">\n                                <td>\n                                    {{ atividade.nome }}\n                                </td>\n                                <td>\n                                    {{ atividade.quantidadeMoedas }}\n                                </td>\n                                <td>\n                                    <button class=\"btn btn-primary\" (click)=\"editAtividade(atividade)\">Editar</button>\n                                    <button class=\"btn btn-danger\" (click)=\"deleteAtividade(atividade)\">Excluir</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/moedas/moedas.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/moedas/moedas.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"moedaTrocaForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"nome\">Nome da moeda</label>\n                    <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"form-group\">\n                    <label for=\"sigla\">Sigla</label>\n                    <input type=\"text\" class=\"form-control\" id=\"sigla\" formControlName=\"sigla\">\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"form-group\">\n                    <label for=\"valor\">Valor em Minutos</label>\n                    <input type=\"number\" class=\"form-control\" id=\"valor\" formControlName=\"valor\">\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"form-group\" style=\"margin-top:25px;\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</form>\n<br />\n<!-- list of moedas -->\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\"> Moedas </h4>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\" text-primary\">\n                            <th>\n                                Nome\n                            </th>\n                            <th>\n                                Sigla\n                            </th>\n                            <th>\n                                Minutos\n                            </th>\n                            <th>\n                                Ações\n                            </th>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let moeda of moedas\">\n                                <td>\n                                    {{moeda.nome}}\n                                </td>\n                                <td>\n                                    {{moeda.sigla}}\n                                </td>\n                                <td>\n                                    {{moeda.valor}}\n                                </td>\n                                <td>\n                                    <button class=\"btn btn-primary\" (click)=\"editMoeda(moeda)\">Editar</button>\n                                    <button class=\"btn btn-danger\" (click)=\"deleteMoeda(moeda)\">Excluir</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recompensa/recompensa.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recompensa/recompensa.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- formgroup of recompensaForm -->\n<form [formGroup]=\"recompensaForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n\n        <!-- dropdown if atividades -->\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"atividade\">Atividade</label>\n                <select class=\"form-control\" id=\"atividade\" formControlName=\"atividade\"\n                    (change)=\"selectAtividade($event)\">\n                    <option *ngFor=\"let atividade of atividades\" [ngValue]=\"atividade\">{{atividade.nome}}\n                    </option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"data\">Realizada em:</label>\n                <input type=\"date\" class=\"form-control\" id=\"data\" formControlName=\"data\">\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"tempoTotal\">Tempo Total</label>\n                <input type=\"number\" class=\"form-control\" readonly id=\"tempoTotal\" formControlName=\"tempoTotal\">\n            </div>\n        </div>\n        <!-- checkbox utilizada -->\n        <div class=\"col-md-2\">\n            <div class=\"form-check\" style=\"margin-top:25px;\">\n                <label for=\"utilizada\">Utilizada</label>\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"utilizada\" formControlName=\"utilizada\">\n            </div>\n        </div>\n\n\n        <div class=\"col-md-2\">\n            <div class=\"col-md-12 pull-right\" style=\"margin-top:25px;\">\n                <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n            </div>\n        </div>\n    </div>\n</form>\n\n<br />\n\n<!-- list of recompensas -->\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\"> Recompensas </h4>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\" text-primary\">\n                            <th>\n                                Atividade\n                            </th>\n                            <th>\n                                Data\n                            </th>\n                            <th>\n                                Tempo Total\n                            </th>\n                            <th>\n                                Recompensa\n                            </th>\n                            <th>\n                                Utilizada\n                            </th>\n                            <th>\n                                Data Utilização\n                            </th>\n                            <th>\n                                Ações\n                            </th>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let recompensa of recompensas\">\n                                <td>\n                                    {{recompensa.atividade.nome}}\n                                </td>\n                                <td>\n                                    {{recompensa.data}}\n                                </td>\n                                <td>\n                                    {{recompensa.tempoTotal}}\n                                </td>\n                                <td>\n                                    {{recompensa.atividade.moeda.nome}}\n                                </td>\n                                <td>\n                                    {{recompensa.utilizada}}\n                                </td>\n                                <td>\n                                    {{recompensa.dataUtilizacao}}\n                                </td>\n                                <td>\n                                    <button type=\"button\" class=\"btn btn-primary\"\n                                        (click)=\"edit(recompensa)\">Editar</button>\n                                    <button type=\"button\" class=\"btn btn-danger\"\n                                        (click)=\"delete(recompensa)\">Excluir</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-bar/top-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-bar/top-bar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_atividades_atividades_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/atividades/atividades.component */ "./src/app/pages/atividades/atividades.component.ts");
/* harmony import */ var _pages_moedas_moedas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/moedas/moedas.component */ "./src/app/pages/moedas/moedas.component.ts");
/* harmony import */ var _pages_recompensa_recompensa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/recompensa/recompensa.component */ "./src/app/pages/recompensa/recompensa.component.ts");






const routes = [
    { path: 'atividades', component: _pages_atividades_atividades_component__WEBPACK_IMPORTED_MODULE_3__["AtividadesComponent"] },
    { path: 'recompensas', component: _pages_recompensa_recompensa_component__WEBPACK_IMPORTED_MODULE_5__["RecompensaComponent"] },
    { path: 'moedas', component: _pages_moedas_moedas_component__WEBPACK_IMPORTED_MODULE_4__["MoedasComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" /* imagem-fundo assets*/\r\n .imagem-fundo {\r\n     position: absolute;\r\n     top: 0;\r\n     left: 0;\r\n     bottom: 0;\r\n     right: 0;\r\n     background-size: cover;\r\n     background-position: center;\r\n     background-image: url('moedas_fortune.jpg');\r\n }\r\n /* HeroesComponent's private CSS styles */\r\n .heroes {\r\n     margin: 0 0 2em 0;\r\n     list-style-type: none;\r\n     padding: 0;\r\n     width: 15em;\r\n }\r\n .heroes li {\r\n     display: flex;\r\n }\r\n .heroes a {\r\n     flex: 1;\r\n     cursor: pointer;\r\n     position: relative;\r\n     left: 0;\r\n     background-color: #EEE;\r\n     margin: .5em;\r\n     padding: 0;\r\n     border-radius: 4px;\r\n     display: flex;\r\n     align-items: stretch;\r\n     height: 1.8em;\r\n }\r\n .heroes a:hover {\r\n     color: #2c3a41;\r\n     background-color: #e6e6e6;\r\n     left: .1em;\r\n }\r\n .heroes a:active {\r\n     background-color: #525252;\r\n     color: #fafafa;\r\n }\r\n .heroes a.selected {\r\n     background-color: black;\r\n     color: white;\r\n }\r\n .heroes a.selected:hover {\r\n     background-color: #505050;\r\n     color: white;\r\n }\r\n .heroes a.selected:active {\r\n     background-color: black;\r\n     color: white;\r\n }\r\n .heroes .badge {\r\n     display: inline-block;\r\n     font-size: small;\r\n     color: white;\r\n     padding: 0.8em 0.7em 0 0.7em;\r\n     background-color: #405061;\r\n     line-height: 1em;\r\n     margin-right: .8em;\r\n     border-radius: 4px 0 0 4px;\r\n }\r\n .heroes .name {\r\n     align-self: center;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUMsdUJBQXVCO0NBQ3ZCO0tBQ0ksa0JBQWtCO0tBQ2xCLE1BQU07S0FDTixPQUFPO0tBQ1AsU0FBUztLQUNULFFBQVE7S0FDUixzQkFBc0I7S0FDdEIsMkJBQTJCO0tBQzNCLDJDQUF1RDtDQUMzRDtDQUVBLHlDQUF5QztDQUN6QztLQUNJLGlCQUFpQjtLQUNqQixxQkFBcUI7S0FDckIsVUFBVTtLQUNWLFdBQVc7Q0FDZjtDQUVBO0tBQ0ksYUFBYTtDQUNqQjtDQUVBO0tBQ0ksT0FBTztLQUNQLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsT0FBTztLQUNQLHNCQUFzQjtLQUN0QixZQUFZO0tBQ1osVUFBVTtLQUNWLGtCQUFrQjtLQUNsQixhQUFhO0tBQ2Isb0JBQW9CO0tBQ3BCLGFBQWE7Q0FDakI7Q0FFQTtLQUNJLGNBQWM7S0FDZCx5QkFBeUI7S0FDekIsVUFBVTtDQUNkO0NBRUE7S0FDSSx5QkFBeUI7S0FDekIsY0FBYztDQUNsQjtDQUVBO0tBQ0ksdUJBQXVCO0tBQ3ZCLFlBQVk7Q0FDaEI7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixZQUFZO0NBQ2hCO0NBRUE7S0FDSSx1QkFBdUI7S0FDdkIsWUFBWTtDQUNoQjtDQUVBO0tBQ0kscUJBQXFCO0tBQ3JCLGdCQUFnQjtLQUNoQixZQUFZO0tBQ1osNEJBQTRCO0tBQzVCLHlCQUF5QjtLQUN6QixnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCLDBCQUEwQjtDQUM5QjtDQUVBO0tBQ0ksa0JBQWtCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogaW1hZ2VtLWZ1bmRvIGFzc2V0cyovXHJcbiAuaW1hZ2VtLWZ1bmRvIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiAwO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgYm90dG9tOiAwO1xyXG4gICAgIHJpZ2h0OiAwO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL21vZWRhc19mb3J0dW5lLmpwZyk7XHJcbiB9XHJcblxyXG4gLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbiAuaGVyb2VzIHtcclxuICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICB3aWR0aDogMTVlbTtcclxuIH1cclxuXHJcbiAuaGVyb2VzIGxpIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG5cclxuIC5oZXJvZXMgYSB7XHJcbiAgICAgZmxleDogMTtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgICBtYXJnaW46IC41ZW07XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gfVxyXG5cclxuIC5oZXJvZXMgYTpob3ZlciB7XHJcbiAgICAgY29sb3I6ICMyYzNhNDE7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgICBsZWZ0OiAuMWVtO1xyXG4gfVxyXG5cclxuIC5oZXJvZXMgYTphY3RpdmUge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XHJcbiAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiB9XHJcblxyXG4gLmhlcm9lcyBhLnNlbGVjdGVkIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcblxyXG4gLmhlcm9lcyBhLnNlbGVjdGVkOmhvdmVyIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDUwO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuIH1cclxuXHJcbiAuaGVyb2VzIGEuc2VsZWN0ZWQ6YWN0aXZlIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcblxyXG4gLmhlcm9lcyAuYmFkZ2Uge1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDUwNjE7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiB9XHJcblxyXG4gLmhlcm9lcyAubmFtZSB7XHJcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_moeda_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/moeda-provider */ "./src/app/providers/moeda-provider.ts");
/* harmony import */ var _models_moeda_troca__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/moeda-troca */ "./src/app/models/moeda-troca.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AppComponent = class AppComponent {
    constructor(modedaProvider) {
        this.modedaProvider = modedaProvider;
        this.title = 'MoedaDeTroca';
        this.moedas = [];
        this.moeda = new _models_moeda_troca__WEBPACK_IMPORTED_MODULE_3__["MoedaTroca"]();
        //create form input MoedaDeTroca
        this.moedaTrocaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Nome', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            sigla: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Sigla', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Valor', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            data: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Data', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ngOnInit() {
        this.moedas = this.modedaProvider.getMoedas();
    }
};
AppComponent.ctorParameters = () => [
    { type: _providers_moeda_provider__WEBPACK_IMPORTED_MODULE_2__["MoedaProvider"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _providers_moeda_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/moeda-provider */ "./src/app/providers/moeda-provider.ts");
/* harmony import */ var _pages_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/top-bar/top-bar.component */ "./src/app/pages/top-bar/top-bar.component.ts");
/* harmony import */ var _pages_atividades_atividades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/atividades/atividades.component */ "./src/app/pages/atividades/atividades.component.ts");
/* harmony import */ var _pages_recompensa_recompensa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/recompensa/recompensa.component */ "./src/app/pages/recompensa/recompensa.component.ts");
/* harmony import */ var _pages_moedas_moedas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/moedas/moedas.component */ "./src/app/pages/moedas/moedas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"],
            _pages_atividades_atividades_component__WEBPACK_IMPORTED_MODULE_7__["AtividadesComponent"],
            _pages_recompensa_recompensa_component__WEBPACK_IMPORTED_MODULE_8__["RecompensaComponent"],
            _pages_moedas_moedas_component__WEBPACK_IMPORTED_MODULE_9__["MoedasComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ],
        providers: [
            _providers_moeda_provider__WEBPACK_IMPORTED_MODULE_5__["MoedaProvider"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/moeda-troca.ts":
/*!***************************************!*\
  !*** ./src/app/models/moeda-troca.ts ***!
  \***************************************/
/*! exports provided: MoedaTroca */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoedaTroca", function() { return MoedaTroca; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//create class moeda-troca
class MoedaTroca {
}


/***/ }),

/***/ "./src/app/pages/atividades/atividades.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/atividades/atividades.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMvYXRpdmlkYWRlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/atividades/atividades.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/atividades/atividades.component.ts ***!
  \**********************************************************/
/*! exports provided: AtividadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesComponent", function() { return AtividadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_providers_atividade_troca_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/atividade-troca.provider */ "./src/app/providers/atividade-troca.provider.ts");
/* harmony import */ var src_app_providers_moeda_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/moeda-provider */ "./src/app/providers/moeda-provider.ts");





let AtividadesComponent = class AtividadesComponent {
    constructor(atividadeProvider, moedatrocaProvider) {
        this.atividadeProvider = atividadeProvider;
        this.moedatrocaProvider = moedatrocaProvider;
        this.atividades = [];
        this.moedas = [];
        //FormGroup of atividadeForm
        this.atividadeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Nome', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantidadeMoedas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('quantidadeMoedas', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            moeda: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Moeda', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.moedas = this.moedatrocaProvider.getMoedas();
        this.atividades = this.atividadeProvider.getAtividades();
    }
    //get form controls
    get f() {
        return this.atividadeForm.controls;
    }
    //resetValue
    resetValue() {
        this.atividadeForm.reset({ nome: '', quantidadeMoedas: '' });
    }
    //onSubmit
    onSubmit() {
        if (this.atividadeForm.status === 'VALID') {
            console.log(this.atividadeForm.value);
            this.atividadeProvider.addAtividade(this.atividadeForm.value);
            this.atividades = this.atividadeProvider.getAtividades();
            this.resetValue();
        }
    }
    //setValue
    setValue(nome, quantidadeMoedas) {
        this.atividadeForm.setValue({ nome: nome, quantidadeMoedas: quantidadeMoedas });
    }
    //deleteAtividade
    deleteAtividade(atividade) {
        this.atividadeProvider.removeAtividade(atividade);
        this.atividades = this.atividadeProvider.getAtividades();
    }
    //editAtividade
    editAtividade(atividade) {
        this.setValue(atividade.nome, atividade.quantidadeMoedas);
    }
};
AtividadesComponent.ctorParameters = () => [
    { type: src_app_providers_atividade_troca_provider__WEBPACK_IMPORTED_MODULE_3__["AtividadeTrocaProvider"] },
    { type: src_app_providers_moeda_provider__WEBPACK_IMPORTED_MODULE_4__["MoedaProvider"] }
];
AtividadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-atividades',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./atividades.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/atividades/atividades.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./atividades.component.css */ "./src/app/pages/atividades/atividades.component.css")).default]
    })
], AtividadesComponent);



/***/ }),

/***/ "./src/app/pages/moedas/moedas.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/moedas/moedas.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZWRhcy9tb2VkYXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/moedas/moedas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/moedas/moedas.component.ts ***!
  \**************************************************/
/*! exports provided: MoedasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoedasComponent", function() { return MoedasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_providers_moeda_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/moeda-provider */ "./src/app/providers/moeda-provider.ts");




let MoedasComponent = class MoedasComponent {
    constructor(moedaProvider) {
        this.moedaProvider = moedaProvider;
        this.moedas = [];
        this.moedaTrocaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Nome', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sigla: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Sigla', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Valor', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.moedas = this.moedaProvider.getMoedas();
    }
    get f() {
        return this.moedaTrocaForm.controls;
    }
    onSubmit() {
        if (this.moedaTrocaForm.status === 'VALID') {
            console.log(this.moedaTrocaForm.value);
            this.moedaProvider.addMoeda(this.moedaTrocaForm.value);
            this.moedas = this.moedaProvider.getMoedas();
            this.resetValue();
        }
    }
    setValue(nome, sigla, valor, data) {
        this.moedaTrocaForm.setValue({ nome: nome, sigla: sigla, valor: valor, data: data });
    }
    resetValue() {
        this.moedaTrocaForm.reset({ nome: '', sigla: '', valor: '', data: '' });
    }
    deleteMoeda(moeda) {
        this.moedaProvider.removeMoeda(moeda);
        this.moedas = this.moedaProvider.getMoedas();
    }
    editMoeda(moeda) {
        this.setValue(moeda.nome, moeda.sigla, moeda.valor, moeda.data);
    }
};
MoedasComponent.ctorParameters = () => [
    { type: src_app_providers_moeda_provider__WEBPACK_IMPORTED_MODULE_3__["MoedaProvider"] }
];
MoedasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moedas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./moedas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/moedas/moedas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./moedas.component.css */ "./src/app/pages/moedas/moedas.component.css")).default]
    })
], MoedasComponent);



/***/ }),

/***/ "./src/app/pages/recompensa/recompensa.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/recompensa/recompensa.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29tcGVuc2EvcmVjb21wZW5zYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/recompensa/recompensa.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/recompensa/recompensa.component.ts ***!
  \**********************************************************/
/*! exports provided: RecompensaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecompensaComponent", function() { return RecompensaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_providers_atividade_troca_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/atividade-troca.provider */ "./src/app/providers/atividade-troca.provider.ts");
/* harmony import */ var src_app_providers_recompensa_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/recompensa.provider */ "./src/app/providers/recompensa.provider.ts");





let RecompensaComponent = class RecompensaComponent {
    constructor(recompesaProvider, atividadeProvider) {
        this.recompesaProvider = recompesaProvider;
        this.atividadeProvider = atividadeProvider;
        this.recompensas = [];
        this.atividades = [];
        this.recompensaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            atividade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Atividade', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            data: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Data', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempoTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('TempoTotal', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            utilizada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Utilizada', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
        this.recompensas = this.recompesaProvider.getRecompensas();
        this.atividades = this.atividadeProvider.getAtividades();
    }
    //setvalue 
    setValue(atividade, data, tempoTotal, utilizada, dataUtilizacao) {
        this.recompensaForm.setValue({ atividade: atividade, data: data, tempoTotal: tempoTotal, utilizada: utilizada, dataUtilizacao: dataUtilizacao });
    }
    //resetvalue
    resetValue() {
        this.recompensaForm.reset({ atividade: '', data: '', tempoTotal: '', utilizada: '', dataUtilizacao: '' });
    }
    //get form
    get f() {
        return this.recompensaForm.controls;
    }
    //onSubmit
    onSubmit() {
        if (this.recompensaForm.status === 'VALID') {
            console.log(this.recompensaForm.value);
            this.recompesaProvider.addRecompensa(this.recompensaForm.value);
            this.recompensas = this.recompesaProvider.getRecompensas();
            this.resetValue();
        }
    }
    //deleteRecompensa
    delete(recompensa) {
        this.recompesaProvider.removeRecompensa(recompensa);
        this.recompensas = this.recompesaProvider.getRecompensas();
    }
    //editrecompensa
    edit(recompensa) {
        this.setValue(recompensa.atividade, recompensa.data, recompensa.tempoTotal, recompensa.utilizada, recompensa.dataUtilizacao);
    }
    //selectAtividade
    selectAtividade(event) {
        let id = parseInt(event.target.value.split(':')[0]);
        this.atividade = this.atividades[id];
        let tempoTotal = this.atividade.quantidadeMoedas * this.atividade.moeda.valor;
        this.setValue(this.atividade, null, tempoTotal, false, null);
    }
};
RecompensaComponent.ctorParameters = () => [
    { type: src_app_providers_recompensa_provider__WEBPACK_IMPORTED_MODULE_4__["RecompensaProvider"] },
    { type: src_app_providers_atividade_troca_provider__WEBPACK_IMPORTED_MODULE_3__["AtividadeTrocaProvider"] }
];
RecompensaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recompensa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recompensa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recompensa/recompensa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recompensa.component.css */ "./src/app/pages/recompensa/recompensa.component.css")).default]
    })
], RecompensaComponent);



/***/ }),

/***/ "./src/app/pages/top-bar/top-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/top-bar/top-bar.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/top-bar/top-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/top-bar/top-bar.component.ts ***!
  \****************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopBarComponent = class TopBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-bar/top-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-bar.component.css */ "./src/app/pages/top-bar/top-bar.component.css")).default]
    })
], TopBarComponent);



/***/ }),

/***/ "./src/app/providers/atividade-troca.provider.ts":
/*!*******************************************************!*\
  !*** ./src/app/providers/atividade-troca.provider.ts ***!
  \*******************************************************/
/*! exports provided: AtividadeTrocaProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadeTrocaProvider", function() { return AtividadeTrocaProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/providers/local-storage.service.ts");



let AtividadeTrocaProvider = class AtividadeTrocaProvider {
    constructor() {
        this.atividades = [];
        this.storage = new _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]();
        this.atividades = this.storage.get('atividades') || [];
    }
    getAtividades() {
        return this.atividades;
    }
    addAtividade(atividade) {
        this.atividades.push(atividade);
        this.storage.set('atividades', this.atividades);
    }
    removeAtividade(atividade) {
        const index = this.atividades.indexOf(atividade);
        if (index > -1) {
            this.atividades.splice(index, 1);
            this.storage.set('atividades', this.atividades);
        }
    }
};
AtividadeTrocaProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AtividadeTrocaProvider);



/***/ }),

/***/ "./src/app/providers/local-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/local-storage.service.ts ***!
  \****************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    constructor() {
        this.storage = window.localStorage;
    }
    set(key, value) {
        if (this.storage) {
            this.storage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
    get(key) {
        if (this.storage) {
            return JSON.parse(this.storage.getItem(key));
        }
        return null;
    }
    remove(key) {
        if (this.storage) {
            this.storage.removeItem(key);
            return true;
        }
        return false;
    }
    clear() {
        if (this.storage) {
            this.storage.clear();
            return true;
        }
        return false;
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/providers/moeda-provider.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/moeda-provider.ts ***!
  \*********************************************/
/*! exports provided: MoedaProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoedaProvider", function() { return MoedaProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/providers/local-storage.service.ts");



let MoedaProvider = class MoedaProvider {
    constructor() {
        this.moedas = [];
        this.storage = new _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]();
        this.moedas = this.storage.get('moedas') || [];
    }
    getMoedas() {
        return this.moedas;
    }
    addMoeda(moeda) {
        this.moedas.push(moeda);
        this.storage.set('moedas', this.moedas);
    }
    removeMoeda(moeda) {
        const index = this.moedas.indexOf(moeda);
        if (index > -1) {
            this.moedas.splice(index, 1);
            this.storage.set('moedas', this.moedas);
        }
    }
    updateMoeda(moeda) {
        const index = this.moedas.indexOf(moeda);
        if (index > -1) {
            this.moedas[index] = moeda;
            this.storage.set('moedas', this.moedas);
        }
    }
};
MoedaProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MoedaProvider);



/***/ }),

/***/ "./src/app/providers/recompensa.provider.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/recompensa.provider.ts ***!
  \**************************************************/
/*! exports provided: RecompensaProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecompensaProvider", function() { return RecompensaProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/providers/local-storage.service.ts");

//create provider RecompensaProvider


let RecompensaProvider = class RecompensaProvider {
    constructor() {
        this.recompensas = [];
        this.storage = new _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]();
        this.recompensas = this.storage.get('recompensas') || [];
    }
    getRecompensas() {
        return this.recompensas;
    }
    addRecompensa(recompensa) {
        this.recompensas.push(recompensa);
        this.storage.set('recompensas', this.recompensas);
    }
    removeRecompensa(recompensa) {
        const index = this.recompensas.indexOf(recompensa);
        if (index > -1) {
            this.recompensas.splice(index, 1);
            this.storage.set('recompensas', this.recompensas);
        }
    }
    updateRecompensa(recompensa) {
        const index = this.recompensas.indexOf(recompensa);
        if (index > -1) {
            this.recompensas[index] = recompensa;
            this.storage.set('recompensas', this.recompensas);
        }
    }
};
RecompensaProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecompensaProvider);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\00-PROJETOS\ANGULAR\MoedaDeTroca\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map