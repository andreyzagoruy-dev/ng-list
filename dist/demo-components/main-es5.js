function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-products-main></app-products-main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-list/product-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-list/product-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"products\">\n  <ul class=\"products__list products__list--favourites\">\n    <ng-container\n      *ngFor=\"let product of productsAll\"\n    >\n      <li\n        *ngIf=\"product.Favourite\"\n        class=\"products__item\"\n      >\n        <app-product [product] = \"product\" ></app-product>\n      </li>\n    </ng-container>\n  </ul>\n  <ul class=\"products__list\">\n    <ng-container\n      *ngFor=\"let product of products\"\n    >\n      <li\n        *ngIf=\"!product.Favourite\"\n        class=\"products__item\"\n      >\n        <app-product [product] = \"product\" ></app-product>\n      </li>\n    </ng-container>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product\">\n  <div class=\"product__info\">\n    <img\n      class=\"product__image\"\n      src=\"{{product.img}}\"\n      alt=\"product.Title\"\n    >\n    <h2 class=\"product__title\">{{product.Title}}</h2>\n    <p class=\"product__description\">{{product.Description}}</p>\n    <a class=\"product__link\" href=\"{{product.Url}}\">Go to product page</a>\n  </div>\n  <div class=\"product__sidebar\">\n    <button\n      class=\"product__favourite-button button\"\n      (click)=\"toggleFavourite(product)\"\n    >\n      {{product.Favourite ? 'Remove from' : 'Add to'}} favourites\n    </button>\n    <div class=\"product__rating\">Rating: {{product.Rating}}</div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-main/products-main.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-main/products-main.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductsMainProductsMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"products-main\">\n  <div class=\"products-main__header\">\n    <div class=\"products-main__search\">\n      <label>\n        Search:\n        <input\n          class=\"products-main__search-field\"\n          type=\"text\"\n          #searchInput\n          (input)=\"search(searchInput)\"\n        />\n      </label>\n    </div>\n    <button\n      class=\"products-main__sort button\"\n      (click)=\"toggleSort('Rating')\"\n      [ngClass]=\"sortDirection > 0 ? 'products-main__sort--desc' : 'products-main__sort--asc'\"\n    >\n      Sort\n    </button>\n  </div>\n  <app-product-list\n    [products] = \"filteredProducts\"\n    [productsAll] = \"products\"\n  ></app-product-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.button {\n  padding: 0 1rem;\n  height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXl6YWdvcnV5L1dvcmsvbmctaXRlbXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_products_main_products_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/products-main/products-main.component */
    "./src/app/components/products-main/products-main.component.ts");
    /* harmony import */


    var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/product-list/product-list.component */
    "./src/app/components/product-list/product-list.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./src/app/components/product/product.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_products_main_products_main_component__WEBPACK_IMPORTED_MODULE_4__["ProductsMainComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/product-list/product-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/product-list/product-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductListProductListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".products__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXl6YWdvcnV5L1dvcmsvbmctaXRlbXMvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cyB7fVxuXG4ucHJvZHVjdHNfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiIsIi5wcm9kdWN0c19fbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/product-list/product-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/product-list/product-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppComponentsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductListComponent = function ProductListComponent() {
      _classCallCheck(this, ProductListComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductListComponent.prototype, "products", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductListComponent.prototype, "productsAll", void 0);
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-list/product-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.scss */
      "./src/app/components/product-list/product-list.component.scss")).default]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/components/product/product.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/product/product.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product {\n  border-bottom: 1px solid #DEDEDE;\n  padding: 1rem 0;\n  display: -webkit-box;\n  display: flex;\n}\n\n.product__sidebar {\n  margin-left: auto;\n  text-align: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.product__image {\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.product__description {\n  margin: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXl6YWdvcnV5L1dvcmsvbmctaXRlbXMvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERURFREU7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2R1Y3RfX3NpZGViYXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2R1Y3RfX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDoyMDBweDtcbn1cblxuLnByb2R1Y3RfX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4iLCIucHJvZHVjdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREVERURFO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9kdWN0X19zaWRlYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9kdWN0X19pbWFnZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ucHJvZHVjdF9fZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDFyZW0gMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/product/product.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/product/product.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);
      }

      _createClass(ProductComponent, [{
        key: "toggleFavourite",
        value: function toggleFavourite(product) {
          product.Favourite = !product.Favourite;
        }
      }]);

      return ProductComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductComponent.prototype, "product", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.scss */
      "./src/app/components/product/product.component.scss")).default]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/components/products-main/products-main.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/products-main/products-main.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductsMainProductsMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.products-main {\n  padding: 0 2rem;\n}\n.products-main__header {\n  background-color: #F1F1F1;\n  height: 3rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: -2rem;\n  margin-right: -2rem;\n  padding: 0 2rem;\n}\n.products-main__search {\n  display: inline-block;\n}\n.products-main__search-field {\n  height: 1.5rem;\n}\n.products-main__sort {\n  margin-left: 1rem;\n}\n.products-main__sort--desc::after {\n  content: \"↑\";\n}\n.products-main__sort--asc::after {\n  content: \"↓\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy1tYWluL3Byb2R1Y3RzLW1haW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5kcmV5emFnb3J1eS9Xb3JrL25nLWl0ZW1zL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy1tYWluL3Byb2R1Y3RzLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURFRjtBQ0NBO0VBQ0UscUJBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtBREVGO0FDQ0E7RUFDRSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7QURFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMtbWFpbi9wcm9kdWN0cy1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2R1Y3RzLW1haW4ge1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbi5wcm9kdWN0cy1tYWluX19oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMnJlbTtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG4ucHJvZHVjdHMtbWFpbl9fc2VhcmNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvZHVjdHMtbWFpbl9fc2VhcmNoLWZpZWxkIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5wcm9kdWN0cy1tYWluX19zb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wcm9kdWN0cy1tYWluX19zb3J0LS1kZXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oaRXCI7XG59XG5cbi5wcm9kdWN0cy1tYWluX19zb3J0LS1hc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCLihpNcIjtcbn0iLCIucHJvZHVjdHMtbWFpbiB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuLnByb2R1Y3RzLW1haW5fX2hlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGhlaWdodDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xuICBtYXJnaW4tcmlnaHQ6IC0ycmVtO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbi5wcm9kdWN0cy1tYWluX19zZWFyY2gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9kdWN0cy1tYWluX19zZWFyY2gtZmllbGQge1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnByb2R1Y3RzLW1haW5fX3NvcnQge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnByb2R1Y3RzLW1haW5fX3NvcnQtLWRlc2M6OmFmdGVyIHtcbiAgY29udGVudDogJ1xcMjE5MSc7XG59XG5cbi5wcm9kdWN0cy1tYWluX19zb3J0LS1hc2M6OmFmdGVyIHtcbiAgY29udGVudDogJ1xcMjE5Myc7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/products-main/products-main.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/products-main/products-main.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductsMainComponent */

  /***/
  function srcAppComponentsProductsMainProductsMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsMainComponent", function () {
      return ProductsMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _constants_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../constants/products */
    "./src/app/constants/products.ts");

    var ProductsMainComponent =
    /*#__PURE__*/
    function () {
      function ProductsMainComponent() {
        _classCallCheck(this, ProductsMainComponent);

        this.products = _constants_products__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.filteredProducts = _constants_products__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.sortDirection = -1;
      }

      _createClass(ProductsMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.toggleSort('Rating');
        }
      }, {
        key: "toggleSort",
        value: function toggleSort(field) {
          var _this = this;

          this.filteredProducts = this.filteredProducts.sort(function (a, b) {
            return a[field] > b[field] ? 1 * _this.sortDirection : b[field] > a[field] ? -1 * _this.sortDirection : 0;
          });
          this.sortDirection *= -1;
        }
      }, {
        key: "search",
        value: function search(inputEl) {
          var value = inputEl.value;
          this.filteredProducts = this.products.filter(function (product) {
            return product.Title.toLowerCase().match(value.toLowerCase());
          });
        }
      }]);

      return ProductsMainComponent;
    }();

    ProductsMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-main/products-main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products-main.component.scss */
      "./src/app/components/products-main/products-main.component.scss")).default]
    })], ProductsMainComponent);
    /***/
  },

  /***/
  "./src/app/constants/products.ts":
  /*!***************************************!*\
    !*** ./src/app/constants/products.ts ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppConstantsProductsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony default export */


    __webpack_exports__["default"] = [{
      Id: 'jenlooper-cactus',
      Maker: '@jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg',
      Url: 'https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393',
      Title: 'The Quantified Cactus: An Easy Plant Soil Moisture Sensor',
      Description: 'This project is a good learning project to get comfortable with soldering and programming an Arduino.',
      Rating: 3.5
    }, {
      Id: 'jenlooper-light',
      Maker: 'jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg',
      Url: 'https://www.hackster.io/agent-hawking-1/book-light-dee7e4',
      Title: 'A beautiful switch-on book light',
      Description: 'Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.',
      Rating: 4.4
    }, {
      Id: 'jenlooper-lightshow',
      Maker: '@jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png',
      Url: 'https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db',
      Title: 'Bling your Laptop with an Internet-Connected Light Show',
      Description: 'Create a web-connected light-strip API controllable from your website, using the Particle.io.',
      Rating: 4.7
    }, {
      Id: 'jenlooper-survival',
      Maker: 'jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg',
      Url: 'https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb',
      Title: 'Create a Compact Survival Kit with LED Track Lighting',
      Description: 'Use an Altoids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster',
      Rating: 3.9
    }, {
      Id: 'sailorhg-bubblesortpic',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png',
      Url: 'https://twitter.com/sailorhg/status/1090107740049952770',
      Title: 'Bubblesort Visualization',
      Description: "Visualization of sailor scouts sorted by bubblesort algorithm by their planet's distance from the sun",
      Rating: 5
    }, {
      Id: 'sailorhg-corsage',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png',
      Url: 'https://twitter.com/sailorhg/status/1090113666911891456',
      Title: 'Light-up Corsage',
      Description: 'Light-up corsage I made with my summer intern.',
      Rating: 4.4
    }, {
      Id: 'sailorhg-kit',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png',
      Url: 'https://twitter.com/sailorhg/status/1090122822007963648',
      Title: 'Pastel hardware kit',
      Description: 'Pastel hardware kits complete with custom manufactured pastel alligator clips.',
      Rating: 3.7
    }, {
      Id: 'sailorhg-led',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg',
      Url: 'https://twitter.com/sailorhg/status/1090117277540745216',
      Title: 'Heart-shaped LED',
      Description: 'custom molded heart shaped LED with sprinkles.',
      Rating: 5
    }, {
      Id: 'selinazawacki-soi-shirt',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png',
      Url: 'https://www.instagram.com/p/BNvESj-j8PI/',
      Title: 'Black Sweatshirt',
      Description: 'Black sweatshirt hoody with the Sick of the Internet logo.',
      Rating: 4.8
    }, {
      Id: 'selinazawacki-soi-pins',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567059-142c1c80-aa33-11e9-939b-2ecf4492786d.png',
      Url: 'https://www.instagram.com/p/BNm6hZzDoEF/',
      Title: 'Sick of the Internet Pins',
      Description: 'Still some time to enter the pin/sticker giveaway! ',
      Rating: 3.3
    }, {
      Id: 'vogueandcode-hipster-dev-bro',
      Maker: 'vogueandcode',
      img: 'https://user-images.githubusercontent.com/41929050/61567061-14c4b300-aa33-11e9-9fee-63ff2c0c9823.png',
      Url: 'https://www.vogueandcode.com/shop/hipster-dev-bro',
      Title: 'Hipster Dev',
      Description: 'Hipster Dev is busy coding away while styled in a camo jacket and orange beanie.',
      Rating: 4.1
    }, {
      Id: 'vogueandcode-pretty-girls-code-tee',
      Maker: 'vogueandcode',
      img: 'https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png',
      Url: 'https://www.vogueandcode.com/shop/pretty-girls-code-tee',
      Title: 'Pretty Girls Code Tee',
      Description: "Everyone\u2019s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.",
      Rating: 4.3
    }, {
      Id: 'vogueandcode-ruby-sis-2',
      Maker: 'vogueandcode',
      img: 'https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png',
      Url: 'https://www.vogueandcode.com/shop/ruby-sis-2',
      Title: 'Ruby Sis',
      Description: 'Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!',
      Rating: 4
    }, {
      Id: 'selinazawacki-moon',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png',
      Url: 'https://www.instagram.com/p/BFktVYPinKQ/',
      Title: 'Holographic Dark Moon Necklace',
      Description: "Not sure if I'll be making more, get it while I have it in the store.",
      Rating: 4.1
    }, {
      Id: 'selinazawacki-shirt',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png',
      Url: 'https://www.instagram.com/p/BEXlpiZCnJ3',
      Title: 'Floppy Crop',
      Description: 'Used up the Diskette fabric today to make 2 of these crops.',
      Rating: 3.6
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/andreyzagoruy/Work/ng-items/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map