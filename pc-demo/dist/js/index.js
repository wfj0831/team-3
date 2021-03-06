"use strict";

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,

        /******/
        enumerable: true,

        /******/
        get: getter
        /******/

      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", {
    value: true
  });
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(1);
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_1__content__ = __webpack_require__(2);

  window.onload = function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__header__["a"
    /* default */
    ])();
    Object(__WEBPACK_IMPORTED_MODULE_1__content__["a"
    /* default */
    ])();
  };
  /***/

},
/* 1 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony default export */

  __webpack_exports__["a"] = function () {
    //获取元素
    var arrow = document.querySelector('#head .headMain>.arrow');
    var liNodes = document.querySelectorAll('#head .headMain>nav>.list>li');
    var firstLiNode = liNodes[0];
    var upNodes = document.querySelectorAll('#head .headMain nav .list li .up');
    var firstupNode = upNodes[0];
    var head = document.querySelector('#head');
    var content = document.querySelector('#content');
    var cliNodes = document.querySelectorAll('#content .list > li');
    var cList = document.querySelector("#content .list"); //初始化小尖角的位置  

    arrow.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'; //移动小尖角的位置

    var _loop = function _loop(i) {
      liNodes[i].addEventListener('click', function () {
        arrow.style.left = liNodes[i].offsetLeft + liNodes[i].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';

        for (var _i2 = 0; _i2 < upNodes.length; _i2++) {
          upNodes[_i2].style.width = "";
        }

        upNodes[i].style.width = "100%";
      });
    };

    for (var i = 0; i < liNodes.length; i++) {
      _loop(i);
    } //内容区 因为与头部有交互 放一块


    function contentBind() {
      content.style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';

      for (var _i = 0; _i < cliNodes.length; _i++) {
        cliNodes[_i].style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
      }
    }

    contentBind();
  };
  /***/

},
/* 2 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony default export */

  __webpack_exports__["a"] = function () {//获取元素
  };
  /***/

}
/******/
]);
