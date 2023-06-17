/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/css/mainstyle.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/css/mainstyle.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ "./src/modules/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/PlayfairDisplay-Regular.ttf */ "./src/modules/fonts/PlayfairDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Roboto-Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: "PlayfairDisplay-Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
  font-family: "Roboto-Regular";
}

body {
  display: flex;
  flex-direction: column;
} /* this sets up the main element to be able to take up the full height of the viewport */

header {
  background-color: hsl(220, 50%, 50%);
  padding: 1rem;
  display: flex;
  align-items: center;
}

header p {
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.to-do-icon {
  width: clamp(3rem, 50%, 4rem);
}

main {
  display: flex;
  flex: 1; /* this will make sure that the main element takes up the remaining space left */
}

nav {
  border: 5px solid black;
  display: inline-flex;
  flex-direction: column;
  flex: 1;
}

.projects {
  display: flex;
  align-items: center;
  margin: 1rem;
  justify-content: space-evenly;
}

.projects img {
  width: clamp(5rem, 5vw, 6rem);
}

section {
  flex: 3;
  border: 5px solid red;
}
`, "",{"version":3,"sources":["webpack://./src/modules/css/mainstyle.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAuC;AACzC;;AAEA;EACE,sCAAsC;EACtC,4CAAgD;AAClD;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB,EAAE,wFAAwF;;AAE1F;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,OAAO,EAAE,gFAAgF;AAC3F;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;EACpB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,OAAO;EACP,qBAAqB;AACvB","sourcesContent":["@font-face {\r\n  font-family: \"Roboto-Regular\";\r\n  src: url(\"../fonts/Roboto-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"PlayfairDisplay-Regular\";\r\n  src: url(\"../fonts/PlayfairDisplay-Regular.ttf\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n  font-family: \"Roboto-Regular\";\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n} /* this sets up the main element to be able to take up the full height of the viewport */\r\n\r\nheader {\r\n  background-color: hsl(220, 50%, 50%);\r\n  padding: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader p {\r\n  font-size: clamp(1.5rem, 2vw, 2rem);\r\n}\r\n\r\n.to-do-icon {\r\n  width: clamp(3rem, 50%, 4rem);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1; /* this will make sure that the main element takes up the remaining space left */\r\n}\r\n\r\nnav {\r\n  border: 5px solid black;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n.projects {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 1rem;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.projects img {\r\n  width: clamp(5rem, 5vw, 6rem);\r\n}\r\n\r\nsection {\r\n  flex: 3;\r\n  border: 5px solid red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/css/mainstyle.css":
/*!***************************************!*\
  !*** ./src/modules/css/mainstyle.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainstyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./mainstyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/css/mainstyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mainstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((module) => {

class sideBar {
  constructor(className) {
    // constructor takes in the class name of the sidebar element as an object
    this.className = className; // creating a property that is the class name of the sidebar element
    this.projects = []; // creating a property that is an empty array to store projects.
  }

  getClassName() {
    return this.className;
  } // getter method to return the class name of the sidebar element

  getProjects() {
    return this.projects; // getter method to return the projects array
  }
  addProject(project) {
    this.projects.push(project);
  }

  getDOMElement(project) {
    const projectElementContainer = document.createElement("div"); // create a container element
    projectElementContainer.classList.add("projects"); // add a class to the div element

    const projectElementImg = document.createElement("img"); // create an image element
    projectElementImg.src = project.getPicture(); // set the image source to the project picture

    const projectElementTitle = document.createElement("h2"); // create a h2 element
    projectElementTitle.textContent = project.getTitle(); // set the text content to the project title

    this.getClassName().appendChild(projectElementContainer); // append div container to sidebar

    projectElementContainer.appendChild(projectElementImg); // append image to div container

    projectElementContainer.appendChild(projectElementTitle); // append title to div container
  } // method to create a project element and append it to the sidebar
}

class ToDoArea {
  constructor(className) {
    this.className = className;
  }
}

module.exports = {
  sideBar,
  ToDoArea,
};


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { sideBar } = __webpack_require__(/*! ./UI */ "./src/modules/UI.js"); // importing sidebar Object class

class Projects {
  constructor(title, picture = "../src/photos/menu.svg") {
    // constructor takes in a title and a picture src
    this.title = title; // creating a property that is the title of the project
    this.picture = picture; // creating a property that is the picture src of the project
  }

  toDoItems = []; // creating a property that is an empty array.

  getPicture() {
    return this.picture; // getter method to return the picture src of the project
  }

  getTitle() {
    return this.title; // getter method to return the title of the project
  }
  getToDoItems() {
    return this.toDoItems; // getter method to return the to do items array
  }
  addToDos(toDo) {
    this.toDoItems.push(toDo); // push a to do value into the appropiate project list
  }

  addProjectToSideBar(sideBar) {
    sideBar.push(this);
  }

  render(sideBar) {
    {
      const projectElementContainer = document.createElement("div"); // create a container element
      projectElementContainer.classList.add("projects"); // add a class to the div element

      const projectElementImg = document.createElement("img"); // create an image element
      projectElementImg.src = this.getPicture(); // set the image source to the project picture

      const projectElementTitle = document.createElement("h2"); // create a h2 element
      projectElementTitle.textContent = this.getTitle(); // set the text content to the project title

      sideBar.getClassName().appendChild(projectElementContainer); // append div container to sidebar

      projectElementContainer.appendChild(projectElementImg); // append image to div container

      projectElementContainer.appendChild(projectElementTitle); // append title to div container
    } // method to create a project element and append it to the sidebar
  }
}

class CreatedProjects extends Projects {
  constructor(title) {
    super(title);
  }
  render(sideBar) {
    {
      const projectElementContainer = document.createElement("div"); // create a container element
      projectElementContainer.classList.add("projects"); // add a class to the div element

      const projectElementImg = document.createElement("img"); // create an image element
      projectElementImg.src = this.getPicture(); // set the image source to the project picture

      const projectElementTitle = document.createElement("h2"); // create a h2 element
      projectElementTitle.textContent = this.getTitle(); // set the text content to the project title

      sideBar.getClassName().children[2].after(projectElementContainer); // append div container after the add project button

      projectElementContainer.appendChild(projectElementImg); // append image to div container

      projectElementContainer.appendChild(projectElementTitle); // append title to div container

      projectElementContainer.addEventListener("mouseenter", function () {
        const X = document.createElement("h1");
        X.innerText = "X";
        projectElementContainer.appendChild(X);

        X.addEventListener("click", function () {
          sideBar.getClassName().removeChild(projectElementContainer);
        });
      });

      projectElementContainer.addEventListener("mouseleave", function () {
        const X = projectElementContainer.querySelector("h1"); // Assuming the child element is a div, you can modify this selector based on your child element's type or properties

        if (X) {
          projectElementContainer.removeChild(X); // Remove the child element when the mouse leaves the parent element
        }
      });
    } // method to create a project element and append it to the sidebar
  }
}

class addProjectButton {
  constructor(buttonName, sideBarObject, src = "../src/photos/plus.svg") {
    this.buttonName = buttonName;
    this.src = src; //
    this.sideBarObject = sideBarObject; // Update this line to take in the sidebar object. This is needed
  } // constructor takes in the button name as an object

  render(targetElement) {
    const addButtonContainer = document.createElement("div"); // create a container div element
    addButtonContainer.classList.add("projects"); // add a class to the button container elemment

    const addButtonImg = document.createElement("img"); // create an image element
    addButtonImg.src = this.src; // set the image source to the src property

    const addButtonTitle = document.createElement("h2"); // create a h2 element
    addButtonTitle.textContent = this.buttonName; // set the text content to the button name property

    addButtonContainer.appendChild(addButtonImg); // append image to button container
    addButtonContainer.appendChild(addButtonTitle); // append title to button container

    targetElement.appendChild(addButtonContainer); // append button container to target element
    const self = this; // this maintains the scope of the keyword this to be used in the event listener

    addButtonContainer.addEventListener("click", function addProject() {
      const namePrompt = prompt(
        "What would you like the name of this project to be?"
      );
      const newProjObj = new CreatedProjects(namePrompt);
      newProjObj.render(self.sideBarObject);
    });
  } // method to create a div element and append it to the sidebar
}

module.exports = {
  addProjectButton,
  Projects,
  CreatedProjects,
};


/***/ }),

/***/ "./src/modules/to-do-items.js":
/*!************************************!*\
  !*** ./src/modules/to-do-items.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoItems)
/* harmony export */ });
class ToDoItems {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }
  setTitle(newTitle) {
    this.title = newTitle;
  } // method to be able to change the to-do title
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
  markComplete() {
    this.isComplete = true;
  }
}


/***/ }),

/***/ "./src/modules/fonts/PlayfairDisplay-Regular.ttf":
/*!*******************************************************!*\
  !*** ./src/modules/fonts/PlayfairDisplay-Regular.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "27705d9c43e8c36b1abd.ttf";

/***/ }),

/***/ "./src/modules/fonts/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/modules/fonts/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_css_mainstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/css/mainstyle.css */ "./src/modules/css/mainstyle.css");
/* harmony import */ var _modules_to_do_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/to-do-items.js */ "./src/modules/to-do-items.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_projects_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_UI__WEBPACK_IMPORTED_MODULE_3__);





const sideBarObject = new _modules_UI__WEBPACK_IMPORTED_MODULE_3__.sideBar(document.querySelector(".side-bar")); // select the sidebar by instantiatong a class and calling the getClassName method on it.

console.log(sideBarObject); // check to see if the sidebar is selected

const myDay = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__.Projects("My Day", "../src/photos/laptop.svg"); // create a new project called My Day

const important = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__.Projects("Important", "../src/photos/trophy.svg"); // create a new project called Important

const planned = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__.Projects("Planned", "../src/photos/menu.svg"); // create a new project called Planned

sideBarObject.addProject(myDay); // add the myDay project to the sidebar

sideBarObject.addProject(important); // add the important project to the sidebar

sideBarObject.addProject(planned); // add the planned project to the sidebar

sideBarObject.getProjects().forEach((project) => {
  project.render(sideBarObject);
}); // loop through the projects and call the getDOMElement method on each project to append them to the sidebar

const addProjectBtn = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__.addProjectButton("Add Project", sideBarObject); // create a new button called Add Project with the sidebarObject being passed as an argument

addProjectBtn.render(document.querySelector(".side-bar")); // render the button to the sidebar

console.log(addProjectBtn); // check to see if the button is created

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQztBQUNZO0FBS2xCO0FBQ2tCO0FBQ2pEO0FBQ0EsMEJBQTBCLGdEQUFPLHVDQUF1QztBQUN4RTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLGtCQUFrQiwwREFBUSx3Q0FBd0M7QUFDbEU7QUFDQSxzQkFBc0IsMERBQVEsMkNBQTJDO0FBQ3pFO0FBQ0Esb0JBQW9CLDBEQUFRLHVDQUF1QztBQUNuRTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLHFDQUFxQztBQUNyQztBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUc7QUFDSjtBQUNBLDBCQUEwQixrRUFBZ0IsZ0NBQWdDO0FBQzFFO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0EsNEJBQTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9jc3MvbWFpbnN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9jc3MvbWFpbnN0eWxlLmNzcz9jNjg1Iiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvdG8tZG8taXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0gLyogdGhpcyBzZXRzIHVwIHRoZSBtYWluIGVsZW1lbnQgdG8gYmUgYWJsZSB0byB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNTAlLCA1MCUpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDJ2dywgMnJlbSk7XHJcbn1cclxuXHJcbi50by1kby1pY29uIHtcclxuICB3aWR0aDogY2xhbXAoM3JlbSwgNTAlLCA0cmVtKTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxOyAvKiB0aGlzIHdpbGwgbWFrZSBzdXJlIHRoYXQgdGhlIG1haW4gZWxlbWVudCB0YWtlcyB1cCB0aGUgcmVtYWluaW5nIHNwYWNlIGxlZnQgKi9cclxufVxyXG5cclxubmF2IHtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnByb2plY3RzIGltZyB7XHJcbiAgd2lkdGg6IGNsYW1wKDVyZW0sIDV2dywgNnJlbSk7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGZsZXg6IDM7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvY3NzL21haW5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDRDQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCLEVBQUUsd0ZBQXdGOztBQUUxRjtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPLEVBQUUsZ0ZBQWdGO0FBQzNGOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsT0FBTztFQUNQLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn0gLyogdGhpcyBzZXRzIHVwIHRoZSBtYWluIGVsZW1lbnQgdG8gYmUgYWJsZSB0byB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNTAlLCA1MCUpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMnZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWljb24ge1xcclxcbiAgd2lkdGg6IGNsYW1wKDNyZW0sIDUwJSwgNHJlbSk7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7IC8qIHRoaXMgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgbWFpbiBlbGVtZW50IHRha2VzIHVwIHRoZSByZW1haW5pbmcgc3BhY2UgbGVmdCAqL1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGltZyB7XFxyXFxuICB3aWR0aDogY2xhbXAoNXJlbSwgNXZ3LCA2cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBmbGV4OiAzO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3Mgc2lkZUJhciB7XHJcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XHJcbiAgICAvLyBjb25zdHJ1Y3RvciB0YWtlcyBpbiB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgc2lkZWJhciBlbGVtZW50IGFzIGFuIG9iamVjdFxyXG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgc2lkZWJhciBlbGVtZW50XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyBhbiBlbXB0eSBhcnJheSB0byBzdG9yZSBwcm9qZWN0cy5cclxuICB9XHJcblxyXG4gIGdldENsYXNzTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZTtcclxuICB9IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzaWRlYmFyIGVsZW1lbnRcclxuXHJcbiAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0czsgLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIHByb2plY3RzIGFycmF5XHJcbiAgfVxyXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RE9NRWxlbWVudChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7IC8vIGFkZCBhIGNsYXNzIHRvIHRoZSBkaXYgZWxlbWVudFxyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgLy8gY3JlYXRlIGFuIGltYWdlIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50SW1nLnNyYyA9IHByb2plY3QuZ2V0UGljdHVyZSgpOyAvLyBzZXQgdGhlIGltYWdlIHNvdXJjZSB0byB0aGUgcHJvamVjdCBwaWN0dXJlXHJcblxyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTsgLy8gY3JlYXRlIGEgaDIgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTsgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIHByb2plY3QgdGl0bGVcclxuXHJcbiAgICB0aGlzLmdldENsYXNzTmFtZSgpLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50Q29udGFpbmVyKTsgLy8gYXBwZW5kIGRpdiBjb250YWluZXIgdG8gc2lkZWJhclxyXG5cclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50SW1nKTsgLy8gYXBwZW5kIGltYWdlIHRvIGRpdiBjb250YWluZXJcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudFRpdGxlKTsgLy8gYXBwZW5kIHRpdGxlIHRvIGRpdiBjb250YWluZXJcclxuICB9IC8vIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG59XHJcblxyXG5jbGFzcyBUb0RvQXJlYSB7XHJcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHNpZGVCYXIsXHJcbiAgVG9Eb0FyZWEsXHJcbn07XHJcbiIsImNvbnN0IHsgc2lkZUJhciB9ID0gcmVxdWlyZShcIi4vVUlcIik7IC8vIGltcG9ydGluZyBzaWRlYmFyIE9iamVjdCBjbGFzc1xyXG5cclxuY2xhc3MgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBwaWN0dXJlID0gXCIuLi9zcmMvcGhvdG9zL21lbnUuc3ZnXCIpIHtcclxuICAgIC8vIGNvbnN0cnVjdG9yIHRha2VzIGluIGEgdGl0bGUgYW5kIGEgcGljdHVyZSBzcmNcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdFxyXG4gICAgdGhpcy5waWN0dXJlID0gcGljdHVyZTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIHRoZSBwaWN0dXJlIHNyYyBvZiB0aGUgcHJvamVjdFxyXG4gIH1cclxuXHJcbiAgdG9Eb0l0ZW1zID0gW107IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyBhbiBlbXB0eSBhcnJheS5cclxuXHJcbiAgZ2V0UGljdHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBpY3R1cmU7IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBwaWN0dXJlIHNyYyBvZiB0aGUgcHJvamVjdFxyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTsgLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0XHJcbiAgfVxyXG4gIGdldFRvRG9JdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvRG9JdGVtczsgLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIHRvIGRvIGl0ZW1zIGFycmF5XHJcbiAgfVxyXG4gIGFkZFRvRG9zKHRvRG8pIHtcclxuICAgIHRoaXMudG9Eb0l0ZW1zLnB1c2godG9Ebyk7IC8vIHB1c2ggYSB0byBkbyB2YWx1ZSBpbnRvIHRoZSBhcHByb3BpYXRlIHByb2plY3QgbGlzdFxyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdFRvU2lkZUJhcihzaWRlQmFyKSB7XHJcbiAgICBzaWRlQmFyLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc2lkZUJhcikge1xyXG4gICAge1xyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50SW1nLnNyYyA9IHRoaXMuZ2V0UGljdHVyZSgpOyAvLyBzZXQgdGhlIGltYWdlIHNvdXJjZSB0byB0aGUgcHJvamVjdCBwaWN0dXJlXHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgICBzaWRlQmFyLmdldENsYXNzTmFtZSgpLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50Q29udGFpbmVyKTsgLy8gYXBwZW5kIGRpdiBjb250YWluZXIgdG8gc2lkZWJhclxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRJbWcpOyAvLyBhcHBlbmQgaW1hZ2UgdG8gZGl2IGNvbnRhaW5lclxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyXHJcbiAgICB9IC8vIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQ3JlYXRlZFByb2plY3RzIGV4dGVuZHMgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICBzdXBlcih0aXRsZSk7XHJcbiAgfVxyXG4gIHJlbmRlcihzaWRlQmFyKSB7XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY3JlYXRlIGEgY29udGFpbmVyIGVsZW1lbnRcclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgLy8gY3JlYXRlIGFuIGltYWdlIGVsZW1lbnRcclxuICAgICAgcHJvamVjdEVsZW1lbnRJbWcuc3JjID0gdGhpcy5nZXRQaWN0dXJlKCk7IC8vIHNldCB0aGUgaW1hZ2Ugc291cmNlIHRvIHRoZSBwcm9qZWN0IHBpY3R1cmVcclxuXHJcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgICAgcHJvamVjdEVsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuZ2V0VGl0bGUoKTsgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIHByb2plY3QgdGl0bGVcclxuXHJcbiAgICAgIHNpZGVCYXIuZ2V0Q2xhc3NOYW1lKCkuY2hpbGRyZW5bMl0uYWZ0ZXIocHJvamVjdEVsZW1lbnRDb250YWluZXIpOyAvLyBhcHBlbmQgZGl2IGNvbnRhaW5lciBhZnRlciB0aGUgYWRkIHByb2plY3QgYnV0dG9uXHJcblxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudFRpdGxlKTsgLy8gYXBwZW5kIHRpdGxlIHRvIGRpdiBjb250YWluZXJcclxuXHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIFguaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoWCk7XHJcblxyXG4gICAgICAgIFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNpZGVCYXIuZ2V0Q2xhc3NOYW1lKCkucmVtb3ZlQ2hpbGQocHJvamVjdEVsZW1lbnRDb250YWluZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBYID0gcHJvamVjdEVsZW1lbnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcImgxXCIpOyAvLyBBc3N1bWluZyB0aGUgY2hpbGQgZWxlbWVudCBpcyBhIGRpdiwgeW91IGNhbiBtb2RpZnkgdGhpcyBzZWxlY3RvciBiYXNlZCBvbiB5b3VyIGNoaWxkIGVsZW1lbnQncyB0eXBlIG9yIHByb3BlcnRpZXNcclxuXHJcbiAgICAgICAgaWYgKFgpIHtcclxuICAgICAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKFgpOyAvLyBSZW1vdmUgdGhlIGNoaWxkIGVsZW1lbnQgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBwYXJlbnQgZWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IC8vIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgYWRkUHJvamVjdEJ1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoYnV0dG9uTmFtZSwgc2lkZUJhck9iamVjdCwgc3JjID0gXCIuLi9zcmMvcGhvdG9zL3BsdXMuc3ZnXCIpIHtcclxuICAgIHRoaXMuYnV0dG9uTmFtZSA9IGJ1dHRvbk5hbWU7XHJcbiAgICB0aGlzLnNyYyA9IHNyYzsgLy9cclxuICAgIHRoaXMuc2lkZUJhck9iamVjdCA9IHNpZGVCYXJPYmplY3Q7IC8vIFVwZGF0ZSB0aGlzIGxpbmUgdG8gdGFrZSBpbiB0aGUgc2lkZWJhciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcbiAgfSAvLyBjb25zdHJ1Y3RvciB0YWtlcyBpbiB0aGUgYnV0dG9uIG5hbWUgYXMgYW4gb2JqZWN0XHJcblxyXG4gIHJlbmRlcih0YXJnZXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZGl2IGVsZW1lbnRcclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7IC8vIGFkZCBhIGNsYXNzIHRvIHRoZSBidXR0b24gY29udGFpbmVyIGVsZW1tZW50XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgLy8gY3JlYXRlIGFuIGltYWdlIGVsZW1lbnRcclxuICAgIGFkZEJ1dHRvbkltZy5zcmMgPSB0aGlzLnNyYzsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHNyYyBwcm9wZXJ0eVxyXG5cclxuICAgIGNvbnN0IGFkZEJ1dHRvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICBhZGRCdXR0b25UaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuYnV0dG9uTmFtZTsgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIGJ1dHRvbiBuYW1lIHByb3BlcnR5XHJcblxyXG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbkltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBidXR0b24gY29udGFpbmVyXHJcbiAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uVGl0bGUpOyAvLyBhcHBlbmQgdGl0bGUgdG8gYnV0dG9uIGNvbnRhaW5lclxyXG5cclxuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uQ29udGFpbmVyKTsgLy8gYXBwZW5kIGJ1dHRvbiBjb250YWluZXIgdG8gdGFyZ2V0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyB0aGlzIG1haW50YWlucyB0aGUgc2NvcGUgb2YgdGhlIGtleXdvcmQgdGhpcyB0byBiZSB1c2VkIGluIHRoZSBldmVudCBsaXN0ZW5lclxyXG5cclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgICAgY29uc3QgbmFtZVByb21wdCA9IHByb21wdChcclxuICAgICAgICBcIldoYXQgd291bGQgeW91IGxpa2UgdGhlIG5hbWUgb2YgdGhpcyBwcm9qZWN0IHRvIGJlP1wiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG5ld1Byb2pPYmogPSBuZXcgQ3JlYXRlZFByb2plY3RzKG5hbWVQcm9tcHQpO1xyXG4gICAgICBuZXdQcm9qT2JqLnJlbmRlcihzZWxmLnNpZGVCYXJPYmplY3QpO1xyXG4gICAgfSk7XHJcbiAgfSAvLyBtZXRob2QgdG8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBhZGRQcm9qZWN0QnV0dG9uLFxyXG4gIFByb2plY3RzLFxyXG4gIENyZWF0ZWRQcm9qZWN0cyxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0l0ZW1zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcclxuICB9IC8vIG1ldGhvZCB0byBiZSBhYmxlIHRvIGNoYW5nZSB0aGUgdG8tZG8gdGl0bGVcclxuICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgfVxyXG4gIG1hcmtDb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9tb2R1bGVzL2Nzcy9tYWluc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBUb0RvSXRlbXMgZnJvbSBcIi4vbW9kdWxlcy90by1kby1pdGVtcy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIFByb2plY3RzLFxyXG4gIGFkZFByb2plY3RCdXR0b24sXHJcbiAgQ3JlYXRlZFByb2plY3RzLFxyXG59IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHMuanNcIjtcclxuaW1wb3J0IHsgc2lkZUJhciwgVG9Eb0FyZWEgfSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XHJcblxyXG5jb25zdCBzaWRlQmFyT2JqZWN0ID0gbmV3IHNpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKSk7IC8vIHNlbGVjdCB0aGUgc2lkZWJhciBieSBpbnN0YW50aWF0b25nIGEgY2xhc3MgYW5kIGNhbGxpbmcgdGhlIGdldENsYXNzTmFtZSBtZXRob2Qgb24gaXQuXHJcblxyXG5jb25zb2xlLmxvZyhzaWRlQmFyT2JqZWN0KTsgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBzaWRlYmFyIGlzIHNlbGVjdGVkXHJcblxyXG5jb25zdCBteURheSA9IG5ldyBQcm9qZWN0cyhcIk15IERheVwiLCBcIi4uL3NyYy9waG90b3MvbGFwdG9wLnN2Z1wiKTsgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgY2FsbGVkIE15IERheVxyXG5cclxuY29uc3QgaW1wb3J0YW50ID0gbmV3IFByb2plY3RzKFwiSW1wb3J0YW50XCIsIFwiLi4vc3JjL3Bob3Rvcy90cm9waHkuc3ZnXCIpOyAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBjYWxsZWQgSW1wb3J0YW50XHJcblxyXG5jb25zdCBwbGFubmVkID0gbmV3IFByb2plY3RzKFwiUGxhbm5lZFwiLCBcIi4uL3NyYy9waG90b3MvbWVudS5zdmdcIik7IC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGNhbGxlZCBQbGFubmVkXHJcblxyXG5zaWRlQmFyT2JqZWN0LmFkZFByb2plY3QobXlEYXkpOyAvLyBhZGQgdGhlIG15RGF5IHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChpbXBvcnRhbnQpOyAvLyBhZGQgdGhlIGltcG9ydGFudCBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyXHJcblxyXG5zaWRlQmFyT2JqZWN0LmFkZFByb2plY3QocGxhbm5lZCk7IC8vIGFkZCB0aGUgcGxhbm5lZCBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyXHJcblxyXG5zaWRlQmFyT2JqZWN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gIHByb2plY3QucmVuZGVyKHNpZGVCYXJPYmplY3QpO1xyXG59KTsgLy8gbG9vcCB0aHJvdWdoIHRoZSBwcm9qZWN0cyBhbmQgY2FsbCB0aGUgZ2V0RE9NRWxlbWVudCBtZXRob2Qgb24gZWFjaCBwcm9qZWN0IHRvIGFwcGVuZCB0aGVtIHRvIHRoZSBzaWRlYmFyXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gbmV3IGFkZFByb2plY3RCdXR0b24oXCJBZGQgUHJvamVjdFwiLCBzaWRlQmFyT2JqZWN0KTsgLy8gY3JlYXRlIGEgbmV3IGJ1dHRvbiBjYWxsZWQgQWRkIFByb2plY3Qgd2l0aCB0aGUgc2lkZWJhck9iamVjdCBiZWluZyBwYXNzZWQgYXMgYW4gYXJndW1lbnRcclxuXHJcbmFkZFByb2plY3RCdG4ucmVuZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXJcIikpOyAvLyByZW5kZXIgdGhlIGJ1dHRvbiB0byB0aGUgc2lkZWJhclxyXG5cclxuY29uc29sZS5sb2coYWRkUHJvamVjdEJ0bik7IC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgYnV0dG9uIGlzIGNyZWF0ZWRcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9