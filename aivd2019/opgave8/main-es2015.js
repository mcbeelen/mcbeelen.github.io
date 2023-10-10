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
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutAlign=\"center\">\n    <div class=\"content\">\n        <h2>AIVD Enveloppen tournooi</h2>\n        <tournament-overview></tournament-overview>\n        <tournament-entry></tournament-entry>\n    </div>\n  \n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <div class=\"content\">\n        <h3>Import / Export</h3>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <div fxFlex=\"auto\">\n                <bulk-input></bulk-input>\n            </div>\n            <div fxFlex=\"auto\">\n                <raw-data></raw-data>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/submission/entry/entry.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/submission/entry/entry.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>entry works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/bulk-input/bulk-input.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/bulk-input/bulk-input.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n\n    <mat-card-title>Import</mat-card-title>\n    <mat-card-content>\n        <p><em>Paste a copied block of JSON and click on Add All</em></p>\n        <textarea [(ngModel)]=\"jsonInput\" rows=\"10\" cols=\"60\"></textarea>\n\n    </mat-card-content>\n\n    <mat-card-actions>\n        <button (click)=\"addAll()\">Add All</button>\n    </mat-card-actions>\n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/entry/entry.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/entry/entry.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-title>\n        Additional player\n    </mat-card-title>\n    <mat-card-content>\n        <form>\n            <table>\n                <thead>\n                    <tr>\n                        <td>1</td>\n                        <td>2</td>\n                        <td>3</td>\n                        <td>4</td>\n                        <td>5</td>\n            \n                        <td>6</td>\n                        <td>7</td>\n                        <td>8</td>\n                        <td>9</td>\n                        <td>10</td>\n                        <td>Total</td>\n                        <td>Remaining</td>\n                        <td>&nbsp;</td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n            \n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"first\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"second\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"third\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"fourth\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"fifth\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                       \n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"sixth\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"seventh\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"eighth\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"nineth\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td><input type=\"number\" class=\"form-control\" [formControl]=\"tenth\" required (keyup)=\"updateTotal()\" size=\"3\" maxlength=\"3\"></td>\n                        <td>{{total}}</td>\n                        <td>{{remaining}}</td>\n                        <td><button (click)=\"addPlayer()\"  [disabled]=\"!isValid\">Add Player</button></td>\n            \n                    </tr>\n                </tbody>\n            </table>\n            \n            </form>\n    </mat-card-content>\n</mat-card>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/overview/overview.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/overview/overview.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-title>\n        Scoreboard\n    </mat-card-title>\n    <mat-card-content>\n        </mat-card-content>\n\n<table *ngIf=\"tournament.players\">\n    <thead>\n        <td>Rank</td>\n        <td>Distribution</td>\n        <td>Points</td>\n    </thead>\n    <tr *ngFor=\"let player of tournament.players ; index as i\">\n        <td>{{ i +1 }}</td>\n        <td> {{player.submission.points[0]}}, {{player.submission.points[1]}},\n            {{player.submission.points[2]}}, {{player.submission.points[3]}},\n            {{player.submission.points[4]}}, {{player.submission.points[5]}},\n            {{player.submission.points[6]}}, {{player.submission.points[7]}},\n            {{player.submission.points[8]}}, {{player.submission.points[9]}}</td>\n        <td>{{tournament.scores.get(player.id)}}</td>\n\n    </tr>\n</table>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/raw-data/raw-data.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/raw-data/raw-data.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n\n    <mat-card-title>Export (Raw Data (for Copy-Paste))</mat-card-title>\n    <mat-card-content>\n        <p><em>\n            After adding additional players, copy the JSON to reuse.<br />\n            You can share it via <a href=\"https://www.pastiebin.com/\" target=\"_blank\">Pastiebin</a></em><br />\n            \n        </p>\n        <hr/>\n\n        <code>\n        [<br />\n        <span *ngFor=\"let player of tournament.players;  last as isLast\">\n        {{ '{' }} \"points\": [\n        {{player.submission.points[0]}},{{player.submission.points[1]}},{{player.submission.points[2]}},{{player.submission.points[3]}},{{player.submission.points[4]}},{{player.submission.points[5]}},{{player.submission.points[6]}},{{player.submission.points[7]}},{{player.submission.points[8]}},{{player.submission.points[9]}}\n        ]}<span *ngIf=\"!isLast\" >,</span>\n        <br /></span>\n            ]\n        </code>\n    </mat-card-content>\n\n</mat-card>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.content {\r\n    width: 60em;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDYwZW07XHJcbn1cclxuXHJcbiJdfQ== */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'aivd-y2019-o8-enveloppe';
    }
};
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _submission_entry_entry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submission/entry/entry */ "./src/app/submission/entry/entry.ts");
/* harmony import */ var _tournament_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tournament/overview/overview.component */ "./src/app/tournament/overview/overview.component.ts");
/* harmony import */ var _tournament_entry_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tournament/entry/entry.component */ "./src/app/tournament/entry/entry.component.ts");
/* harmony import */ var _tournament_raw_data_raw_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tournament/raw-data/raw-data.component */ "./src/app/tournament/raw-data/raw-data.component.ts");
/* harmony import */ var _tournament_bulk_input_bulk_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tournament/bulk-input/bulk-input.component */ "./src/app/tournament/bulk-input/bulk-input.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _submission_entry_entry__WEBPACK_IMPORTED_MODULE_8__["Entry"],
            _tournament_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__["OverviewComponent"],
            _tournament_entry_entry_component__WEBPACK_IMPORTED_MODULE_10__["EntryComponent"],
            _tournament_raw_data_raw_data_component__WEBPACK_IMPORTED_MODULE_11__["RawDataComponent"],
            _tournament_bulk_input_bulk_input_component__WEBPACK_IMPORTED_MODULE_12__["BulkInputComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game/game.ts":
/*!******************************!*\
  !*** ./src/app/game/game.ts ***!
  \******************************/
/*! exports provided: Game, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Game {
    constructor(first, second) {
        this.results = [];
        this.pointsByFirst = 0;
        this.pointsBySecond = 0;
        this.first = first;
        this.second = second;
        for (let i = 0; i < 10; i++) {
            if (first.submission.points[i] > second.submission.points[i]) {
                this.results.push(Result.FIRST);
                this.pointsByFirst += (i + 1);
            }
            if (first.submission.points[i] == second.submission.points[i]) {
                this.results.push(Result.DRAW);
            }
            if (first.submission.points[i] < second.submission.points[i]) {
                this.results.push(Result.SECOND);
                this.pointsBySecond += (i + 1);
            }
        }
    }
}
var Result;
(function (Result) {
    Result[Result["FIRST"] = 0] = "FIRST";
    Result[Result["DRAW"] = 1] = "DRAW";
    Result[Result["SECOND"] = 2] = "SECOND";
})(Result || (Result = {}));


/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: registerPlayer, buildPlayer, defaultPlayer, DEFAULT_PLAYER_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPlayer", function() { return registerPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPlayer", function() { return buildPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPlayer", function() { return defaultPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PLAYER_ID", function() { return DEFAULT_PLAYER_ID; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _submission_submission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submission/submission */ "./src/app/submission/submission.ts");



function registerPlayer(submission) {
    return buildPlayer(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"](), submission);
}
function buildPlayer(idForPlayer, submission) {
    return {
        'id': idForPlayer,
        'submission': submission
    };
}
function defaultPlayer() {
    return buildPlayer(DEFAULT_PLAYER_ID, Object(_submission_submission__WEBPACK_IMPORTED_MODULE_2__["buildSubmission"])(10, 10, 10, 10, 10, 10, 10, 10, 10, 10));
}
const DEFAULT_PLAYER_ID = '10x10';


/***/ }),

/***/ "./src/app/submission/entry/entry.ts":
/*!*******************************************!*\
  !*** ./src/app/submission/entry/entry.ts ***!
  \*******************************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Entry = class Entry {
    constructor() { }
    ngOnInit() {
    }
};
Entry = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entry.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/submission/entry/entry.html")).default
    })
], Entry);



/***/ }),

/***/ "./src/app/submission/submission.ts":
/*!******************************************!*\
  !*** ./src/app/submission/submission.ts ***!
  \******************************************/
/*! exports provided: Submission, buildSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submission", function() { return Submission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSubmission", function() { return buildSubmission; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Submission {
    constructor(first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth) {
        this.points = [];
        this.points.push(first);
        this.points.push(second);
        this.points.push(third);
        this.points.push(fourth);
        this.points.push(fifth);
        this.points.push(sixth);
        this.points.push(seventh);
        this.points.push(eighth);
        this.points.push(nineth);
        this.points.push(tenth);
    }
    isComplete() {
        return 100 == this.sum();
    }
    ;
    sum() {
        return this.points.reduce((sum, current) => sum + current, 0);
    }
}
function buildSubmission(first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth) {
    return new Submission(first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth);
}


/***/ }),

/***/ "./src/app/tournament/bulk-input/bulk-input.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tournament/bulk-input/bulk-input.component.ts ***!
  \***************************************************************/
/*! exports provided: BulkInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkInputComponent", function() { return BulkInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tournament.service */ "./src/app/tournament/tournament.service.ts");
/* harmony import */ var src_app_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/player */ "./src/app/player.ts");




let BulkInputComponent = class BulkInputComponent {
    constructor(tournamentService) {
        this.jsonInput = "[{ \"points\": [ 1,2,3,4,5,6,7,8,9,55 ]}]";
        this.tournamentService = tournamentService;
    }
    addAll() {
        let bulkInput = JSON.parse(this.jsonInput);
        bulkInput.forEach(submission => this.tournamentService.addPlayer(Object(src_app_player__WEBPACK_IMPORTED_MODULE_3__["registerPlayer"])(submission)));
    }
};
BulkInputComponent.ctorParameters = () => [
    { type: _tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"] }
];
BulkInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bulk-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bulk-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/bulk-input/bulk-input.component.html")).default
    })
], BulkInputComponent);



/***/ }),

/***/ "./src/app/tournament/entry/entry.component.css":
/*!******************************************************!*\
  !*** ./src/app/tournament/entry/entry.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    width: 3em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cm5hbWVudC9lbnRyeS9lbnRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdG91cm5hbWVudC9lbnRyeS9lbnRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgd2lkdGg6IDNlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tournament/entry/entry.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/tournament/entry/entry.component.ts ***!
  \*****************************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tournament.service */ "./src/app/tournament/tournament.service.ts");
/* harmony import */ var src_app_submission_submission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/submission/submission */ "./src/app/submission/submission.ts");
/* harmony import */ var src_app_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/player */ "./src/app/player.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let EntryComponent = class EntryComponent {
    constructor(tournamentService) {
        this.first = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.second = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.third = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.fourth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.fifth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.sixth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.seventh = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.eighth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.nineth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.tenth = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        this.total = 0;
        this.remaining = 100;
        this.isValid = false;
        this.tournamentService = tournamentService;
    }
    addPlayer() {
        let additionalPlayer = Object(src_app_player__WEBPACK_IMPORTED_MODULE_4__["registerPlayer"])(this.submissionFromForm());
        this.tournamentService.addPlayer(additionalPlayer);
        this.resetForm();
    }
    resetForm() {
        this.first.setValue(0);
        this.second.setValue(0);
        this.third.setValue(0);
        this.fourth.setValue(0);
        this.fifth.setValue(0);
        this.sixth.setValue(0);
        this.seventh.setValue(0);
        this.eighth.setValue(0);
        this.nineth.setValue(0);
        this.tenth.setValue(0);
        this.updateTotal();
    }
    updateTotal() {
        let submission = this.submissionFromForm();
        this.total = submission.sum();
        this.remaining = 100 - this.total;
        this.isValid = submission.isComplete();
    }
    submissionFromForm() {
        return Object(src_app_submission_submission__WEBPACK_IMPORTED_MODULE_3__["buildSubmission"])(this.first.value, this.second.value, this.third.value, this.fourth.value, this.fifth.value, this.sixth.value, this.seventh.value, this.eighth.value, this.nineth.value, this.tenth.value);
    }
};
EntryComponent.ctorParameters = () => [
    { type: _tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"] }
];
EntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tournament-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/entry/entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entry.component.css */ "./src/app/tournament/entry/entry.component.css")).default]
    })
], EntryComponent);



/***/ }),

/***/ "./src/app/tournament/overview/overview.component.css":
/*!************************************************************!*\
  !*** ./src/app/tournament/overview/overview.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 40em;\r\n}\r\n\r\nthead {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cm5hbWVudC9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdG91cm5hbWVudC9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDQwZW07XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/tournament/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tournament/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tournament.service */ "./src/app/tournament/tournament.service.ts");



let OverviewComponent = class OverviewComponent {
    constructor(tournamentService) {
        this.tournamentService = tournamentService;
    }
    ngOnInit() {
        this.tournament = this.tournamentService.getTournament();
    }
};
OverviewComponent.ctorParameters = () => [
    { type: _tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"] }
];
OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tournament-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/overview/overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./overview.component.css */ "./src/app/tournament/overview/overview.component.css")).default]
    })
], OverviewComponent);



/***/ }),

/***/ "./src/app/tournament/raw-data/raw-data.component.css":
/*!************************************************************!*\
  !*** ./src/app/tournament/raw-data/raw-data.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card-content {\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\ncode {\r\n    width: 20em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cm5hbWVudC9yYXctZGF0YS9yYXctZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdG91cm5hbWVudC9yYXctZGF0YS9yYXctZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuY29kZSB7XHJcbiAgICB3aWR0aDogMjBlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tournament/raw-data/raw-data.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tournament/raw-data/raw-data.component.ts ***!
  \***********************************************************/
/*! exports provided: RawDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawDataComponent", function() { return RawDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tournament.service */ "./src/app/tournament/tournament.service.ts");



let RawDataComponent = class RawDataComponent {
    constructor(tournamentService) {
        this.tournamentService = tournamentService;
    }
    ngOnInit() {
        this.tournament = this.tournamentService.getTournament();
    }
};
RawDataComponent.ctorParameters = () => [
    { type: _tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"] }
];
RawDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'raw-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raw-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tournament/raw-data/raw-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raw-data.component.css */ "./src/app/tournament/raw-data/raw-data.component.css")).default]
    })
], RawDataComponent);



/***/ }),

/***/ "./src/app/tournament/tournament.service.ts":
/*!**************************************************!*\
  !*** ./src/app/tournament/tournament.service.ts ***!
  \**************************************************/
/*! exports provided: TournamentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentService", function() { return TournamentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tournament__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tournament */ "./src/app/tournament/tournament.ts");



let TournamentService = class TournamentService {
    constructor() {
        this.tournament = new _tournament__WEBPACK_IMPORTED_MODULE_2__["Tournament"]();
    }
    getTournament() {
        return this.tournament;
    }
    addPlayer(additionalPlayer) {
        this.tournament.addPlayer(additionalPlayer);
    }
};
TournamentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TournamentService);



/***/ }),

/***/ "./src/app/tournament/tournament.ts":
/*!******************************************!*\
  !*** ./src/app/tournament/tournament.ts ***!
  \******************************************/
/*! exports provided: Tournament */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tournament", function() { return Tournament; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/game */ "./src/app/game/game.ts");



class Tournament {
    constructor() {
        this.players = [];
        this.scores = new Map();
        let initialPlayer = Object(_player__WEBPACK_IMPORTED_MODULE_1__["defaultPlayer"])();
        this.players.push(initialPlayer);
        this.scores.set(initialPlayer.id, 0);
    }
    addPlayer(additionalPlayer) {
        let scoreForAdditionalPLayer = 0;
        this.players.forEach(player => {
            let game = new _game_game__WEBPACK_IMPORTED_MODULE_2__["Game"](player, additionalPlayer);
            this.scores.set(player.id, this.scores.get(player.id) + game.pointsByFirst);
            scoreForAdditionalPLayer += game.pointsBySecond;
        });
        this.players.push(additionalPlayer);
        this.scores.set(additionalPlayer.id, scoreForAdditionalPLayer);
        this.players = this.players.sort((p1, p2) => {
            let scoreOfPlayerOne = this.scores.get(p1.id);
            let scoreOfPlayerTwo = this.scores.get(p2.id);
            return scoreOfPlayerTwo - scoreOfPlayerOne;
        });
    }
}


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

module.exports = __webpack_require__(/*! C:\projects\net\mcbeelen\aivd-y2019-o8-enveloppe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);