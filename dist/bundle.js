/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/css/mainstyle.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/css/mainstyle.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
  padding: 5px;
  display: flex;
  align-items: center;
}

header p {
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.to-do-area {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 3;
  height: 100%;
}

.to-do-items-area {
  height: clamp(500px, 50vh, 800px);
  /* border: 5px solid black; */
  width: 100%;
  flex: 6;
}

.to-do-icon {
  width: clamp(3rem, 50%, 4rem);
}

main {
  display: flex;
  flex: 1; /* this will make sure that the main element takes up the remaining space left */
  height: 100dvh;
}

nav {
  border-right: 5px solid black;
  display: inline-flex;
  flex-direction: column;
  flex: 1;
}

.projects {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-evenly;
}

.projects img {
  width: clamp(5rem, 5vw, 7rem);
}

.projects h2 {
  width: clamp(150px, 5vw, 200px);
  font-size: xx-large;
  text-align: center;
  overflow-wrap: break-word; /*this is to make sure that the text wraps around if it is too long, it also breaks the words in a way that is not too ugly */
}

.project_input {
  width: 50%;
}

.prompt_button_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hidden {
  display: none;
}

.header_date_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
}

.header_date_wrapper .project-header {
  font-size: clamp(2rem, 5vw, 3rem);
}

.header_date_wrapper .date-header {
  font-size: clamp(1rem, 1.25vw, 2rem);
}

.input-wrapper {
  display: flex;
  justify-content: center;
  width: 75%;
  /* border: 5px solid black; */
  flex: 1;
}

.input-wrapper input {
  width: 75%;
  height: 25%;
}

.input-wrapper button {
  width: 10%;
  margin-right: auto;
  height: 25%;
}
`, "",{"version":3,"sources":["webpack://./src/modules/css/mainstyle.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAuC;AACzC;;AAEA;EACE,sCAAsC;EACtC,4CAAgD;AAClD;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB,EAAE,wFAAwF;;AAE1F;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,OAAO;EACP,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,6BAA6B;EAC7B,WAAW;EACX,OAAO;AACT;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,OAAO,EAAE,gFAAgF;EACzF,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB,EAAE,6HAA6H;AAC1J;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,6BAA6B;EAC7B,OAAO;AACT;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,WAAW;AACb","sourcesContent":["@font-face {\r\n  font-family: \"Roboto-Regular\";\r\n  src: url(\"../fonts/Roboto-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"PlayfairDisplay-Regular\";\r\n  src: url(\"../fonts/PlayfairDisplay-Regular.ttf\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n  font-family: \"Roboto-Regular\";\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n} /* this sets up the main element to be able to take up the full height of the viewport */\r\n\r\nheader {\r\n  background-color: hsl(220, 50%, 50%);\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader p {\r\n  font-size: clamp(1.5rem, 2vw, 2rem);\r\n}\r\n\r\n.to-do-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex: 3;\r\n  height: 100%;\r\n}\r\n\r\n.to-do-items-area {\r\n  height: clamp(500px, 50vh, 800px);\r\n  /* border: 5px solid black; */\r\n  width: 100%;\r\n  flex: 6;\r\n}\r\n\r\n.to-do-icon {\r\n  width: clamp(3rem, 50%, 4rem);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1; /* this will make sure that the main element takes up the remaining space left */\r\n  height: 100dvh;\r\n}\r\n\r\nnav {\r\n  border-right: 5px solid black;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n.projects {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.projects img {\r\n  width: clamp(5rem, 5vw, 7rem);\r\n}\r\n\r\n.projects h2 {\r\n  width: clamp(150px, 5vw, 200px);\r\n  font-size: xx-large;\r\n  text-align: center;\r\n  overflow-wrap: break-word; /*this is to make sure that the text wraps around if it is too long, it also breaks the words in a way that is not too ugly */\r\n}\r\n\r\n.project_input {\r\n  width: 50%;\r\n}\r\n\r\n.prompt_button_container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.header_date_wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 75%;\r\n}\r\n\r\n.header_date_wrapper .project-header {\r\n  font-size: clamp(2rem, 5vw, 3rem);\r\n}\r\n\r\n.header_date_wrapper .date-header {\r\n  font-size: clamp(1rem, 1.25vw, 2rem);\r\n}\r\n\r\n.input-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 75%;\r\n  /* border: 5px solid black; */\r\n  flex: 1;\r\n}\r\n\r\n.input-wrapper input {\r\n  width: 75%;\r\n  height: 25%;\r\n}\r\n\r\n.input-wrapper button {\r\n  width: 10%;\r\n  margin-right: auto;\r\n  height: 25%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sideBarObject: () => (/* binding */ sideBarObject)
/* harmony export */ });
/* harmony import */ var _modules_css_mainstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/css/mainstyle.css */ "./src/modules/css/mainstyle.css");
/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/date */ "./src/modules/date.js");
/* harmony import */ var _modules_to_do_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/to-do-items.js */ "./src/modules/to-do-items.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");






let toDoDateArea = document.querySelector(".date-header"); // select the date area
toDoDateArea.innerText = (0,_modules_date__WEBPACK_IMPORTED_MODULE_1__.getTodaysDate)(); // set the date area to the current date

const sideBarObject = new _modules_UI__WEBPACK_IMPORTED_MODULE_4__.sideBar(document.querySelector(".side-bar")); // select the sidebar by instantiatong a class and calling the getClassName method on it.

console.log(sideBarObject); // check to see if the sidebar is selected

const myDay = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__.Projects("My Day", "../src/photos/laptop.svg", true); // create a new project called My Day, this one is set to true from the beginning in case a user doesn't pick another project

const important = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__.Projects("Important", "../src/photos/trophy.svg"); // create a new project called Important

const planned = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__.Projects("Planned", "../src/photos/menu.svg"); // create a new project called Planned

sideBarObject.addProject(myDay); // add the myDay project to the sidebar

sideBarObject.addProject(important); // add the important project to the sidebar

sideBarObject.addProject(planned); // add the planned project to the sidebar

sideBarObject.getProjects().forEach((project) => {
  project.render(sideBarObject);
}); // loop through the projects and call the getDOMElement method on each project to append them to the sidebar

const addProjectBtn = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__.addProjectButton("Add Project", sideBarObject); // create a new button called Add Project with the sidebarObject being passed as an argument

addProjectBtn.render(document.querySelector(".side-bar")); // render the button to the sidebar

console.log(addProjectBtn); // check to see if the button is created

const toDoItemArea = new _modules_UI__WEBPACK_IMPORTED_MODULE_4__.ToDoArea(); // create a new to-do area

console.log(toDoItemArea.getButton());

toDoItemArea.render(); // render the to-do area


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDoArea: () => (/* binding */ ToDoArea),
/* harmony export */   sideBar: () => (/* binding */ sideBar)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");
/* harmony import */ var _to_do_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do-items */ "./src/modules/to-do-items.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");


 // this imports the sideBarObject from the index.js file

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
  constructor() {
    this.header = document.querySelector(".project-header");
    this.date = document.querySelector("date-header");
    this.area = document.querySelector(".to-do-items-area");
    this.input = document.querySelector(".input");
    this.button = document.querySelector(".to-do-button");
  }

  getInput() {
    return this.input.value;
  }

  setInput(newInputValue) {
    this.input.value = newInputValue;
  }

  getButton() {
    return this.button;
  }

  render() {
    const button = this.getButton(); // get the button element
    button.addEventListener("click", () => {
      const inputValue = this.getInput(); // get the input element
      const toDoItem = new _to_do_items__WEBPACK_IMPORTED_MODULE_1__["default"](inputValue); // this creates the to-do items
      const projects = _index__WEBPACK_IMPORTED_MODULE_2__.sideBarObject.getProjects(); // this selects all the projects located within the sidebar object
      projects.forEach((project) => {
        if (project.isActive == true) {
          project.toDoItems.push(toDoItem);
        } // this pushes the recently created to-do-item into the appropriate "active" project
      });
      this.setInput(""); // this empties the input value area text after the button has been pressed.
      const inputElement = document.createElement("div"); // creates a div element that will store the text and date
      const inputText = document.createElement("p"); //creates a paragraph element for the to--do-item description text
      const inputDate = document.createElement("p"); // creates a paragraph element for the to-do-item date
      inputText.textContent = toDoItem.getDescription(); // sets the text content of the paragraph element to the to-do-item description
      inputDate.textContent = toDoItem.getDate(); // sets the text content of the paragraph element to the to-do-item date
      inputElement.appendChild(inputText); // appends the text to the div element
      inputElement.appendChild(inputDate); // appends the date to the div element
      this.area.appendChild(inputElement); // appends the div element to the to-do-items-area
    });
  }
}


/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodaysDate: () => (/* binding */ getTodaysDate)
/* harmony export */ });
function getTodaysDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
}

console.log(getTodaysDate()); // This will print the date in MM/DD/YYYY format


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatedProjects: () => (/* binding */ CreatedProjects),
/* harmony export */   Projects: () => (/* binding */ Projects),
/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/modules/date.js");



const { sideBar } = __webpack_require__(/*! ./UI */ "./src/modules/UI.js"); // importing sidebar Object class

class Projects {
  constructor(title, picture = "../src/photos/menu.svg", isActive = false) {
    // constructor takes in a title and a picture src
    this.title = title; // creating a property that is the title of the project
    this.picture = picture; // creating a property that is the picture src of the project
    this.isActive = isActive;
  }

  toDoItems = []; // creating a property that is an empty array for future to-do-items to be placed in

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

  getActiveStatus() {
    return this.isActive;
  }

  changeActiveStatusToTrue() {
    this.isActive = true;
  }

  changeActiveStatusToFalse() {
    this.isActive = false;
  }

  render(sideBar) {
    const toDoArea = document.querySelector(".to-do-area"); // this selects the to-do-area element so that it can be manipulated
    const projectElementContainer = document.createElement("div"); // create a container element
    projectElementContainer.classList.add("projects"); // add a class to the div element

    const projectElementImg = document.createElement("img"); // create an image element
    projectElementImg.src = this.getPicture(); // set the image source to the project picture

    const projectElementTitle = document.createElement("h2"); // create a h2 element
    projectElementTitle.textContent = this.getTitle(); // set the text content to the project title

    sideBar.getClassName().appendChild(projectElementContainer); // append div container to sidebar

    projectElementContainer.appendChild(projectElementImg); // append image to div container

    projectElementContainer.appendChild(projectElementTitle); // append title to div container1

    projectElementContainer.addEventListener("click", (e) => {
      const projects = sideBar.getProjects(); // this is a collection of the project elements created

      projects.forEach((project) => {
        if (project.title === e.target.innerText) {
          project.isActive = true;
        } else {
          project.isActive = false;
        }
        console.log(projects);
      }); // this iterates through each project and compares the title of the clicked on DOM Element to the title of the project, they should be the same so it chamhes the actve status of the selected element to true and the rest to false.

      toDoArea.style.visibility = "visible"; // this allows for the to-do-area to be visible when a project is clicked
      const toDoAreaProjectHeader = document.querySelector(".project-header");
      let toDoAreaDateHeader = document.querySelector(".date-header");

      toDoAreaDateHeader.innerText = (0,_date__WEBPACK_IMPORTED_MODULE_1__.getTodaysDate)();

      toDoAreaProjectHeader.innerText = projectElementTitle.textContent;
    }); // this allows for the projecs attribute to be refelcted in the to-do-area

    // method to create a project element and append it to the sidebar
  }
} // Class used to construct the original 3 projects that will appear on the sidebar

class CreatedProjects extends Projects {
  constructor(title) {
    super(title);
  }
  render(sideBar) {
    {
      const toDoArea = document.querySelector(".to-do-area"); // this selects the to-do-area element so that it can be manipulated
      const projectElementContainer = document.createElement("div"); // create a container element
      projectElementContainer.classList.add("projects"); // add a class to the div element

      const projectElementImg = document.createElement("img"); // create an image element
      projectElementImg.src = this.getPicture(); // set the image source to the project picture

      const projectElementTitle = document.createElement("h2"); // create a h2 element
      projectElementTitle.textContent = this.getTitle(); // set the text content to the project title

      sideBar.getClassName().children[2].after(projectElementContainer); // append div container after the add project button

      projectElementContainer.appendChild(projectElementImg); // append image to div container

      projectElementContainer.appendChild(projectElementTitle); // append title to div container

      projectElementContainer.addEventListener("click", (e) => {
        const projects = sideBar.getProjects(); // this is a collection of the project elements created
        console.log(e);

        projects.forEach((project) => {
          if (project.title === e.target.innerText) {
            project.isActive = true;
          } else {
            project.isActive = false;
          }
          console.log(projects);
        });

        toDoArea.style.visibility = "visible"; // this allows for the to-do-area to be visible when a project is clicked
        let toDoAreaProjectHeader = document.querySelector(".project-header"); // this selects the project header element so that it can be manipulated
        let toDoAreaDateHeader = document.querySelector(".date-header"); // this selects the date header element so that it can be manipulated
        toDoAreaDateHeader.innerText = (0,_date__WEBPACK_IMPORTED_MODULE_1__.getTodaysDate)(); // this sets the date header to the current date
        toDoAreaProjectHeader.innerText = projectElementTitle.textContent; // this sets the project header to the project title
      }); // this allows for the projecs attribute to be refelcted in the to-do-area

      projectElementContainer.addEventListener("mouseenter", function () {
        const X = document.createElement("h1");
        X.innerText = "X";
        projectElementContainer.appendChild(X);

        X.addEventListener("click", function (e) {
          toDoArea.style.visibility = "hidden"; //this sets the visibility to hidden but doesn't bring it back when another project is clicked
          sideBar.getClassName().removeChild(projectElementContainer);
          e.stopPropagation(); // this prevents the element from bubbling up to the parent element and allows for this event listener to trigger without triggering the parent event listener
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
} // this class is used to create projects that are created by the user. This is an extension of the projects class

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

    addButtonContainer.addEventListener("click", () => {
      addButtonContainer.classList.add("hidden"); // remove the add project button

      const prompt_button_container = document.createElement("div");
      prompt_button_container.classList.add("prompt_button_container");

      const titlePrompt = document.createElement("input"); // create an input element
      titlePrompt.setAttribute("type", "text"); // set the type of the input element to text
      titlePrompt.setAttribute("placeholder", "Project Name"); // set the placeholder of the input element to project name
      titlePrompt.classList.add("project_input");

      const submitButton = document.createElement("button"); // create a button element
      submitButton.textContent = "Ok"; // set the text content of the button to submit

      const cancelButton = document.createElement("button"); // create a button element
      cancelButton.textContent = "Cancel"; // set the text content of the button to cancel

      const buttonContainer = document.createElement("div"); // create a div element
      buttonContainer.classList.add("buttonContainer"); // add a class to the div element

      buttonContainer.appendChild(submitButton); // append the submit button to the div element
      buttonContainer.appendChild(cancelButton); // append the cancel button to the div element

      targetElement.appendChild(prompt_button_container);

      prompt_button_container.appendChild(titlePrompt); // append the input element to the target element
      prompt_button_container.appendChild(buttonContainer); // append the button container to the target element

      submitButton.addEventListener("click", () => {
        const newProjObj = new CreatedProjects(titlePrompt.value); // creates a new object with title

        if (!titlePrompt.value == "") {
          prompt_button_container.remove();

          newProjObj.render(this.sideBarObject);

          addButtonContainer.classList.add("projects");
          addButtonContainer.classList.remove("hidden");
        } else {
          titlePrompt.style.border = "1px solid red";
          titlePrompt.placeholder = "Input value cannot be empty";
        }

        this.sideBarObject.addProject(newProjObj); // this adds the newly created object to the siedebarObjects list
      });

      cancelButton.addEventListener("click", () => {
        prompt_button_container.remove();
        addButtonContainer.classList.add("projects");
        addButtonContainer.classList.remove("hidden");
      });
    }); // utilize arrow function to maintain scope of "this" keyword
  } // method to create a div element and append it to the sidebar
} // this class is used to create the add project button which allows the user to create a new project


/***/ }),

/***/ "./src/modules/to-do-items.js":
/*!************************************!*\
  !*** ./src/modules/to-do-items.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoItems)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/modules/date.js");


class ToDoItems {
  constructor(description, date = (0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodaysDate)()) {
    this.description = description; // this is the text of the to-do-item generated from user input
    this.date = date; // this is the date that is going to be created on the to-do list based off the date that it was created.
  }

  getDescription() {
    return this.description;
  }
  getDate() {
    return this.date;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDueDate(newDate) {
    this.date = newDate;
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

module.exports = __webpack_require__.p + "27705d9c43e8c36b1abd.ttf";

/***/ }),

/***/ "./src/modules/fonts/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/modules/fonts/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9jc3MvbWFpbnN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9jc3MvbWFpbnN0eWxlLmNzcz9jNjg1Iiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9tb2R1bGVzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9tb2R1bGVzL3RvLWRvLWl0ZW1zLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJQbGF5ZmFpckRpc3BsYXktUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSAvKiB0aGlzIHNldHMgdXAgdGhlIG1haW4gZWxlbWVudCB0byBiZSBhYmxlIHRvIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAqL1xyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA1MCUsIDUwJSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIHAge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAydncsIDJyZW0pO1xyXG59XHJcblxyXG4udG8tZG8tYXJlYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udG8tZG8taXRlbXMtYXJlYSB7XHJcbiAgaGVpZ2h0OiBjbGFtcCg1MDBweCwgNTB2aCwgODAwcHgpO1xyXG4gIC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDY7XHJcbn1cclxuXHJcbi50by1kby1pY29uIHtcclxuICB3aWR0aDogY2xhbXAoM3JlbSwgNTAlLCA0cmVtKTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxOyAvKiB0aGlzIHdpbGwgbWFrZSBzdXJlIHRoYXQgdGhlIG1haW4gZWxlbWVudCB0YWtlcyB1cCB0aGUgcmVtYWluaW5nIHNwYWNlIGxlZnQgKi9cclxuICBoZWlnaHQ6IDEwMGR2aDtcclxufVxyXG5cclxubmF2IHtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnByb2plY3RzIGltZyB7XHJcbiAgd2lkdGg6IGNsYW1wKDVyZW0sIDV2dywgN3JlbSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyBoMiB7XHJcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA1dncsIDIwMHB4KTtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyAvKnRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRleHQgd3JhcHMgYXJvdW5kIGlmIGl0IGlzIHRvbyBsb25nLCBpdCBhbHNvIGJyZWFrcyB0aGUgd29yZHMgaW4gYSB3YXkgdGhhdCBpcyBub3QgdG9vIHVnbHkgKi9cclxufVxyXG5cclxuLnByb2plY3RfaW5wdXQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9tcHRfYnV0dG9uX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXJfZGF0ZV93cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLmhlYWRlcl9kYXRlX3dyYXBwZXIgLnByb2plY3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XHJcbn1cclxuXHJcbi5oZWFkZXJfZGF0ZV93cmFwcGVyIC5kYXRlLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDJyZW0pO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNzUlO1xyXG4gIC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIGlucHV0IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogMjUlO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciBidXR0b24ge1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGhlaWdodDogMjUlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvY3NzL21haW5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDRDQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCLEVBQUUsd0ZBQXdGOztBQUUxRjtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU8sRUFBRSxnRkFBZ0Y7RUFDekYsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFFLDZIQUE2SDtBQUMxSjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn0gLyogdGhpcyBzZXRzIHVwIHRoZSBtYWluIGVsZW1lbnQgdG8gYmUgYWJsZSB0byB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNTAlLCA1MCUpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAydncsIDJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4OiAzO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8taXRlbXMtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDUwMHB4LCA1MHZoLCA4MDBweCk7XFxyXFxuICAvKiBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWljb24ge1xcclxcbiAgd2lkdGg6IGNsYW1wKDNyZW0sIDUwJSwgNHJlbSk7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7IC8qIHRoaXMgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgbWFpbiBlbGVtZW50IHRha2VzIHVwIHRoZSByZW1haW5pbmcgc3BhY2UgbGVmdCAqL1xcclxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaW1nIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCg1cmVtLCA1dncsIDdyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA1dncsIDIwMHB4KTtcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyAvKnRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRleHQgd3JhcHMgYXJvdW5kIGlmIGl0IGlzIHRvbyBsb25nLCBpdCBhbHNvIGJyZWFrcyB0aGUgd29yZHMgaW4gYSB3YXkgdGhhdCBpcyBub3QgdG9vIHVnbHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfaW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21wdF9idXR0b25fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2RhdGVfd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9kYXRlX3dyYXBwZXIgLnByb2plY3QtaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9kYXRlX3dyYXBwZXIgLmRhdGUtaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXBwZXIgaW5wdXQge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtd3JhcHBlciBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9tb2R1bGVzL2Nzcy9tYWluc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldFRvZGF5c0RhdGUgfSBmcm9tIFwiLi9tb2R1bGVzL2RhdGVcIjtcclxuaW1wb3J0IFRvRG9JdGVtcyBmcm9tIFwiLi9tb2R1bGVzL3RvLWRvLWl0ZW1zLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgUHJvamVjdHMsXHJcbiAgYWRkUHJvamVjdEJ1dHRvbixcclxuICBDcmVhdGVkUHJvamVjdHMsXHJcbn0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0cy5qc1wiO1xyXG5pbXBvcnQgeyBzaWRlQmFyLCBUb0RvQXJlYSB9IGZyb20gXCIuL21vZHVsZXMvVUlcIjtcclxuXHJcbmxldCB0b0RvRGF0ZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaGVhZGVyXCIpOyAvLyBzZWxlY3QgdGhlIGRhdGUgYXJlYVxyXG50b0RvRGF0ZUFyZWEuaW5uZXJUZXh0ID0gZ2V0VG9kYXlzRGF0ZSgpOyAvLyBzZXQgdGhlIGRhdGUgYXJlYSB0byB0aGUgY3VycmVudCBkYXRlXHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZUJhck9iamVjdCA9IG5ldyBzaWRlQmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXJcIikpOyAvLyBzZWxlY3QgdGhlIHNpZGViYXIgYnkgaW5zdGFudGlhdG9uZyBhIGNsYXNzIGFuZCBjYWxsaW5nIHRoZSBnZXRDbGFzc05hbWUgbWV0aG9kIG9uIGl0LlxyXG5cclxuY29uc29sZS5sb2coc2lkZUJhck9iamVjdCk7IC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgc2lkZWJhciBpcyBzZWxlY3RlZFxyXG5cclxuY29uc3QgbXlEYXkgPSBuZXcgUHJvamVjdHMoXCJNeSBEYXlcIiwgXCIuLi9zcmMvcGhvdG9zL2xhcHRvcC5zdmdcIiwgdHJ1ZSk7IC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGNhbGxlZCBNeSBEYXksIHRoaXMgb25lIGlzIHNldCB0byB0cnVlIGZyb20gdGhlIGJlZ2lubmluZyBpbiBjYXNlIGEgdXNlciBkb2Vzbid0IHBpY2sgYW5vdGhlciBwcm9qZWN0XHJcblxyXG5jb25zdCBpbXBvcnRhbnQgPSBuZXcgUHJvamVjdHMoXCJJbXBvcnRhbnRcIiwgXCIuLi9zcmMvcGhvdG9zL3Ryb3BoeS5zdmdcIik7IC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGNhbGxlZCBJbXBvcnRhbnRcclxuXHJcbmNvbnN0IHBsYW5uZWQgPSBuZXcgUHJvamVjdHMoXCJQbGFubmVkXCIsIFwiLi4vc3JjL3Bob3Rvcy9tZW51LnN2Z1wiKTsgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgY2FsbGVkIFBsYW5uZWRcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChteURheSk7IC8vIGFkZCB0aGUgbXlEYXkgcHJvamVjdCB0byB0aGUgc2lkZWJhclxyXG5cclxuc2lkZUJhck9iamVjdC5hZGRQcm9qZWN0KGltcG9ydGFudCk7IC8vIGFkZCB0aGUgaW1wb3J0YW50IHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChwbGFubmVkKTsgLy8gYWRkIHRoZSBwbGFubmVkIHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgcHJvamVjdC5yZW5kZXIoc2lkZUJhck9iamVjdCk7XHJcbn0pOyAvLyBsb29wIHRocm91Z2ggdGhlIHByb2plY3RzIGFuZCBjYWxsIHRoZSBnZXRET01FbGVtZW50IG1ldGhvZCBvbiBlYWNoIHByb2plY3QgdG8gYXBwZW5kIHRoZW0gdG8gdGhlIHNpZGViYXJcclxuXHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBuZXcgYWRkUHJvamVjdEJ1dHRvbihcIkFkZCBQcm9qZWN0XCIsIHNpZGVCYXJPYmplY3QpOyAvLyBjcmVhdGUgYSBuZXcgYnV0dG9uIGNhbGxlZCBBZGQgUHJvamVjdCB3aXRoIHRoZSBzaWRlYmFyT2JqZWN0IGJlaW5nIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxyXG5cclxuYWRkUHJvamVjdEJ0bi5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKSk7IC8vIHJlbmRlciB0aGUgYnV0dG9uIHRvIHRoZSBzaWRlYmFyXHJcblxyXG5jb25zb2xlLmxvZyhhZGRQcm9qZWN0QnRuKTsgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBidXR0b24gaXMgY3JlYXRlZFxyXG5cclxuY29uc3QgdG9Eb0l0ZW1BcmVhID0gbmV3IFRvRG9BcmVhKCk7IC8vIGNyZWF0ZSBhIG5ldyB0by1kbyBhcmVhXHJcblxyXG5jb25zb2xlLmxvZyh0b0RvSXRlbUFyZWEuZ2V0QnV0dG9uKCkpO1xyXG5cclxudG9Eb0l0ZW1BcmVhLnJlbmRlcigpOyAvLyByZW5kZXIgdGhlIHRvLWRvIGFyZWFcclxuIiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgVG9Eb0l0ZW1zIGZyb20gXCIuL3RvLWRvLWl0ZW1zXCI7XHJcbmltcG9ydCB7IHNpZGVCYXJPYmplY3QgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8gdGhpcyBpbXBvcnRzIHRoZSBzaWRlQmFyT2JqZWN0IGZyb20gdGhlIGluZGV4LmpzIGZpbGVcclxuXHJcbmV4cG9ydCBjbGFzcyBzaWRlQmFyIHtcclxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcclxuICAgIC8vIGNvbnN0cnVjdG9yIHRha2VzIGluIHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzaWRlYmFyIGVsZW1lbnQgYXMgYW4gb2JqZWN0XHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzaWRlYmFyIGVsZW1lbnRcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIGFuIGVtcHR5IGFycmF5IHRvIHN0b3JlIHByb2plY3RzLlxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lO1xyXG4gIH0gLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNpZGViYXIgZWxlbWVudFxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzOyAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgcHJvamVjdHMgYXJyYXlcclxuICB9XHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBnZXRET01FbGVtZW50KHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY3JlYXRlIGEgY29udGFpbmVyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAvLyBjcmVhdGUgYW4gaW1hZ2UgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRJbWcuc3JjID0gcHJvamVjdC5nZXRQaWN0dXJlKCk7IC8vIHNldCB0aGUgaW1hZ2Ugc291cmNlIHRvIHRoZSBwcm9qZWN0IHBpY3R1cmVcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpOyAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byB0aGUgcHJvamVjdCB0aXRsZVxyXG5cclxuICAgIHRoaXMuZ2V0Q2xhc3NOYW1lKCkuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRDb250YWluZXIpOyAvLyBhcHBlbmQgZGl2IGNvbnRhaW5lciB0byBzaWRlYmFyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRJbWcpOyAvLyBhcHBlbmQgaW1hZ2UgdG8gZGl2IGNvbnRhaW5lclxyXG5cclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50VGl0bGUpOyAvLyBhcHBlbmQgdGl0bGUgdG8gZGl2IGNvbnRhaW5lclxyXG4gIH0gLy8gbWV0aG9kIHRvIGNyZWF0ZSBhIHByb2plY3QgZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBzaWRlYmFyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb0RvQXJlYSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXJcIik7XHJcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGF0ZS1oZWFkZXJcIik7XHJcbiAgICB0aGlzLmFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWl0ZW1zLWFyZWFcIik7XHJcbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKTtcclxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1idXR0b25cIik7XHJcbiAgfVxyXG5cclxuICBnZXRJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXQobmV3SW5wdXRWYWx1ZSkge1xyXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IG5ld0lucHV0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5idXR0b247XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmdldEJ1dHRvbigpOyAvLyBnZXQgdGhlIGJ1dHRvbiBlbGVtZW50XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuZ2V0SW5wdXQoKTsgLy8gZ2V0IHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICAgIGNvbnN0IHRvRG9JdGVtID0gbmV3IFRvRG9JdGVtcyhpbnB1dFZhbHVlKTsgLy8gdGhpcyBjcmVhdGVzIHRoZSB0by1kbyBpdGVtc1xyXG4gICAgICBjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXJPYmplY3QuZ2V0UHJvamVjdHMoKTsgLy8gdGhpcyBzZWxlY3RzIGFsbCB0aGUgcHJvamVjdHMgbG9jYXRlZCB3aXRoaW4gdGhlIHNpZGViYXIgb2JqZWN0XHJcbiAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBwcm9qZWN0LnRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcclxuICAgICAgICB9IC8vIHRoaXMgcHVzaGVzIHRoZSByZWNlbnRseSBjcmVhdGVkIHRvLWRvLWl0ZW0gaW50byB0aGUgYXBwcm9wcmlhdGUgXCJhY3RpdmVcIiBwcm9qZWN0XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldElucHV0KFwiXCIpOyAvLyB0aGlzIGVtcHRpZXMgdGhlIGlucHV0IHZhbHVlIGFyZWEgdGV4dCBhZnRlciB0aGUgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWQuXHJcbiAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCB0aGF0IHdpbGwgc3RvcmUgdGhlIHRleHQgYW5kIGRhdGVcclxuICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IC8vY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tLWRvLWl0ZW0gZGVzY3JpcHRpb24gdGV4dFxyXG4gICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgLy8gY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tZG8taXRlbSBkYXRlXHJcbiAgICAgIGlucHV0VGV4dC50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmdldERlc2NyaXB0aW9uKCk7IC8vIHNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgcGFyYWdyYXBoIGVsZW1lbnQgdG8gdGhlIHRvLWRvLWl0ZW0gZGVzY3JpcHRpb25cclxuICAgICAgaW5wdXREYXRlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZ2V0RGF0ZSgpOyAvLyBzZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHBhcmFncmFwaCBlbGVtZW50IHRvIHRoZSB0by1kby1pdGVtIGRhdGVcclxuICAgICAgaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7IC8vIGFwcGVuZHMgdGhlIHRleHQgdG8gdGhlIGRpdiBlbGVtZW50XHJcbiAgICAgIGlucHV0RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dERhdGUpOyAvLyBhcHBlbmRzIHRoZSBkYXRlIHRvIHRoZSBkaXYgZWxlbWVudFxyXG4gICAgICB0aGlzLmFyZWEuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTsgLy8gYXBwZW5kcyB0aGUgZGl2IGVsZW1lbnQgdG8gdGhlIHRvLWRvLWl0ZW1zLWFyZWFcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy8gSmFudWFyeSBpcyAwIVxyXG4gIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gbW0gKyBcIi9cIiArIGRkICsgXCIvXCIgKyB5eXl5O1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhnZXRUb2RheXNEYXRlKCkpOyAvLyBUaGlzIHdpbGwgcHJpbnQgdGhlIGRhdGUgaW4gTU0vREQvWVlZWSBmb3JtYXRcclxuIiwiaW1wb3J0IHsgVG9Eb0FyZWEgfSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgeyBnZXRUb2RheXNEYXRlIH0gZnJvbSBcIi4vZGF0ZVwiO1xyXG5cclxuY29uc3QgeyBzaWRlQmFyIH0gPSByZXF1aXJlKFwiLi9VSVwiKTsgLy8gaW1wb3J0aW5nIHNpZGViYXIgT2JqZWN0IGNsYXNzXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBwaWN0dXJlID0gXCIuLi9zcmMvcGhvdG9zL21lbnUuc3ZnXCIsIGlzQWN0aXZlID0gZmFsc2UpIHtcclxuICAgIC8vIGNvbnN0cnVjdG9yIHRha2VzIGluIGEgdGl0bGUgYW5kIGEgcGljdHVyZSBzcmNcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdFxyXG4gICAgdGhpcy5waWN0dXJlID0gcGljdHVyZTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIHRoZSBwaWN0dXJlIHNyYyBvZiB0aGUgcHJvamVjdFxyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgdG9Eb0l0ZW1zID0gW107IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyBhbiBlbXB0eSBhcnJheSBmb3IgZnV0dXJlIHRvLWRvLWl0ZW1zIHRvIGJlIHBsYWNlZCBpblxyXG5cclxuICBnZXRQaWN0dXJlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGljdHVyZTsgLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIHBpY3R1cmUgc3JjIG9mIHRoZSBwcm9qZWN0XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlOyAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3RcclxuICB9XHJcbiAgZ2V0VG9Eb0l0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Eb0l0ZW1zOyAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgdG8gZG8gaXRlbXMgYXJyYXlcclxuICB9XHJcbiAgYWRkVG9Eb3ModG9Ebykge1xyXG4gICAgdGhpcy50b0RvSXRlbXMucHVzaCh0b0RvKTsgLy8gcHVzaCBhIHRvIGRvIHZhbHVlIGludG8gdGhlIGFwcHJvcGlhdGUgcHJvamVjdCBsaXN0XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0VG9TaWRlQmFyKHNpZGVCYXIpIHtcclxuICAgIHNpZGVCYXIucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZVN0YXR1cygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQWN0aXZlU3RhdHVzVG9UcnVlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBY3RpdmVTdGF0dXNUb0ZhbHNlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHNpZGVCYXIpIHtcclxuICAgIGNvbnN0IHRvRG9BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1hcmVhXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIHRvLWRvLWFyZWEgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudEltZy5zcmMgPSB0aGlzLmdldFBpY3R1cmUoKTsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHByb2plY3QgcGljdHVyZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgc2lkZUJhci5nZXRDbGFzc05hbWUoKS5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7IC8vIGFwcGVuZCBkaXYgY29udGFpbmVyIHRvIHNpZGViYXJcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyMVxyXG5cclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXIuZ2V0UHJvamVjdHMoKTsgLy8gdGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIHByb2plY3QgZWxlbWVudHMgY3JlYXRlZFxyXG5cclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBlLnRhcmdldC5pbm5lclRleHQpIHtcclxuICAgICAgICAgIHByb2plY3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgICAgfSk7IC8vIHRoaXMgaXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHByb2plY3QgYW5kIGNvbXBhcmVzIHRoZSB0aXRsZSBvZiB0aGUgY2xpY2tlZCBvbiBET00gRWxlbWVudCB0byB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3QsIHRoZXkgc2hvdWxkIGJlIHRoZSBzYW1lIHNvIGl0IGNoYW1oZXMgdGhlIGFjdHZlIHN0YXR1cyBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudCB0byB0cnVlIGFuZCB0aGUgcmVzdCB0byBmYWxzZS5cclxuXHJcbiAgICAgIHRvRG9BcmVhLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjsgLy8gdGhpcyBhbGxvd3MgZm9yIHRoZSB0by1kby1hcmVhIHRvIGJlIHZpc2libGUgd2hlbiBhIHByb2plY3QgaXMgY2xpY2tlZFxyXG4gICAgICBjb25zdCB0b0RvQXJlYVByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xyXG4gICAgICBsZXQgdG9Eb0FyZWFEYXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWhlYWRlclwiKTtcclxuXHJcbiAgICAgIHRvRG9BcmVhRGF0ZUhlYWRlci5pbm5lclRleHQgPSBnZXRUb2RheXNEYXRlKCk7XHJcblxyXG4gICAgICB0b0RvQXJlYVByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdEVsZW1lbnRUaXRsZS50ZXh0Q29udGVudDtcclxuICAgIH0pOyAvLyB0aGlzIGFsbG93cyBmb3IgdGhlIHByb2plY3MgYXR0cmlidXRlIHRvIGJlIHJlZmVsY3RlZCBpbiB0aGUgdG8tZG8tYXJlYVxyXG5cclxuICAgIC8vIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG4gIH1cclxufSAvLyBDbGFzcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgb3JpZ2luYWwgMyBwcm9qZWN0cyB0aGF0IHdpbGwgYXBwZWFyIG9uIHRoZSBzaWRlYmFyXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZFByb2plY3RzIGV4dGVuZHMgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICBzdXBlcih0aXRsZSk7XHJcbiAgfVxyXG4gIHJlbmRlcihzaWRlQmFyKSB7XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRvRG9BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1hcmVhXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIHRvLWRvLWFyZWEgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50SW1nLnNyYyA9IHRoaXMuZ2V0UGljdHVyZSgpOyAvLyBzZXQgdGhlIGltYWdlIHNvdXJjZSB0byB0aGUgcHJvamVjdCBwaWN0dXJlXHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgICBzaWRlQmFyLmdldENsYXNzTmFtZSgpLmNoaWxkcmVuWzJdLmFmdGVyKHByb2plY3RFbGVtZW50Q29udGFpbmVyKTsgLy8gYXBwZW5kIGRpdiBjb250YWluZXIgYWZ0ZXIgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRJbWcpOyAvLyBhcHBlbmQgaW1hZ2UgdG8gZGl2IGNvbnRhaW5lclxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXIuZ2V0UHJvamVjdHMoKTsgLy8gdGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIHByb2plY3QgZWxlbWVudHMgY3JlYXRlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gZS50YXJnZXQuaW5uZXJUZXh0KSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b0RvQXJlYS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7IC8vIHRoaXMgYWxsb3dzIGZvciB0aGUgdG8tZG8tYXJlYSB0byBiZSB2aXNpYmxlIHdoZW4gYSBwcm9qZWN0IGlzIGNsaWNrZWRcclxuICAgICAgICBsZXQgdG9Eb0FyZWFQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTsgLy8gdGhpcyBzZWxlY3RzIHRoZSBwcm9qZWN0IGhlYWRlciBlbGVtZW50IHNvIHRoYXQgaXQgY2FuIGJlIG1hbmlwdWxhdGVkXHJcbiAgICAgICAgbGV0IHRvRG9BcmVhRGF0ZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1oZWFkZXJcIik7IC8vIHRoaXMgc2VsZWN0cyB0aGUgZGF0ZSBoZWFkZXIgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgICAgIHRvRG9BcmVhRGF0ZUhlYWRlci5pbm5lclRleHQgPSBnZXRUb2RheXNEYXRlKCk7IC8vIHRoaXMgc2V0cyB0aGUgZGF0ZSBoZWFkZXIgdG8gdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIHRvRG9BcmVhUHJvamVjdEhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0RWxlbWVudFRpdGxlLnRleHRDb250ZW50OyAvLyB0aGlzIHNldHMgdGhlIHByb2plY3QgaGVhZGVyIHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcbiAgICAgIH0pOyAvLyB0aGlzIGFsbG93cyBmb3IgdGhlIHByb2plY3MgYXR0cmlidXRlIHRvIGJlIHJlZmVsY3RlZCBpbiB0aGUgdG8tZG8tYXJlYVxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IFggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgWC5pbm5lclRleHQgPSBcIlhcIjtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChYKTtcclxuXHJcbiAgICAgICAgWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHRvRG9BcmVhLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiOyAvL3RoaXMgc2V0cyB0aGUgdmlzaWJpbGl0eSB0byBoaWRkZW4gYnV0IGRvZXNuJ3QgYnJpbmcgaXQgYmFjayB3aGVuIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkXHJcbiAgICAgICAgICBzaWRlQmFyLmdldENsYXNzTmFtZSgpLnJlbW92ZUNoaWxkKHByb2plY3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHRoaXMgcHJldmVudHMgdGhlIGVsZW1lbnQgZnJvbSBidWJibGluZyB1cCB0byB0aGUgcGFyZW50IGVsZW1lbnQgYW5kIGFsbG93cyBmb3IgdGhpcyBldmVudCBsaXN0ZW5lciB0byB0cmlnZ2VyIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgcGFyZW50IGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IFggPSBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaDFcIik7IC8vIEFzc3VtaW5nIHRoZSBjaGlsZCBlbGVtZW50IGlzIGEgZGl2LCB5b3UgY2FuIG1vZGlmeSB0aGlzIHNlbGVjdG9yIGJhc2VkIG9uIHlvdXIgY2hpbGQgZWxlbWVudCdzIHR5cGUgb3IgcHJvcGVydGllc1xyXG5cclxuICAgICAgICBpZiAoWCkge1xyXG4gICAgICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoWCk7IC8vIFJlbW92ZSB0aGUgY2hpbGQgZWxlbWVudCB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gLy8gbWV0aG9kIHRvIGNyZWF0ZSBhIHByb2plY3QgZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBzaWRlYmFyXHJcbiAgfVxyXG59IC8vIHRoaXMgY2xhc3MgaXMgdXNlZCB0byBjcmVhdGUgcHJvamVjdHMgdGhhdCBhcmUgY3JlYXRlZCBieSB0aGUgdXNlci4gVGhpcyBpcyBhbiBleHRlbnNpb24gb2YgdGhlIHByb2plY3RzIGNsYXNzXHJcblxyXG5leHBvcnQgY2xhc3MgYWRkUHJvamVjdEJ1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoYnV0dG9uTmFtZSwgc2lkZUJhck9iamVjdCwgc3JjID0gXCIuLi9zcmMvcGhvdG9zL3BsdXMuc3ZnXCIpIHtcclxuICAgIHRoaXMuYnV0dG9uTmFtZSA9IGJ1dHRvbk5hbWU7XHJcbiAgICB0aGlzLnNyYyA9IHNyYzsgLy9cclxuICAgIHRoaXMuc2lkZUJhck9iamVjdCA9IHNpZGVCYXJPYmplY3Q7IC8vIFVwZGF0ZSB0aGlzIGxpbmUgdG8gdGFrZSBpbiB0aGUgc2lkZWJhciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcbiAgfSAvLyBjb25zdHJ1Y3RvciB0YWtlcyBpbiB0aGUgYnV0dG9uIG5hbWUgYXMgYW4gb2JqZWN0XHJcblxyXG4gIHJlbmRlcih0YXJnZXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZGl2IGVsZW1lbnRcclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7IC8vIGFkZCBhIGNsYXNzIHRvIHRoZSBidXR0b24gY29udGFpbmVyIGVsZW1tZW50XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgLy8gY3JlYXRlIGFuIGltYWdlIGVsZW1lbnRcclxuICAgIGFkZEJ1dHRvbkltZy5zcmMgPSB0aGlzLnNyYzsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHNyYyBwcm9wZXJ0eVxyXG5cclxuICAgIGNvbnN0IGFkZEJ1dHRvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICBhZGRCdXR0b25UaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuYnV0dG9uTmFtZTsgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIGJ1dHRvbiBuYW1lIHByb3BlcnR5XHJcblxyXG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbkltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBidXR0b24gY29udGFpbmVyXHJcbiAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uVGl0bGUpOyAvLyBhcHBlbmQgdGl0bGUgdG8gYnV0dG9uIGNvbnRhaW5lclxyXG5cclxuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uQ29udGFpbmVyKTsgLy8gYXBwZW5kIGJ1dHRvbiBjb250YWluZXIgdG8gdGFyZ2V0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyB0aGlzIG1haW50YWlucyB0aGUgc2NvcGUgb2YgdGhlIGtleXdvcmQgdGhpcyB0byBiZSB1c2VkIGluIHRoZSBldmVudCBsaXN0ZW5lclxyXG5cclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgLy8gcmVtb3ZlIHRoZSBhZGQgcHJvamVjdCBidXR0b25cclxuXHJcbiAgICAgIGNvbnN0IHByb21wdF9idXR0b25fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvbXB0X2J1dHRvbl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb21wdF9idXR0b25fY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgdGl0bGVQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IC8vIGNyZWF0ZSBhbiBpbnB1dCBlbGVtZW50XHJcbiAgICAgIHRpdGxlUHJvbXB0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpOyAvLyBzZXQgdGhlIHR5cGUgb2YgdGhlIGlucHV0IGVsZW1lbnQgdG8gdGV4dFxyXG4gICAgICB0aXRsZVByb21wdC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgTmFtZVwiKTsgLy8gc2V0IHRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQgZWxlbWVudCB0byBwcm9qZWN0IG5hbWVcclxuICAgICAgdGl0bGVQcm9tcHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RfaW5wdXRcIik7XHJcblxyXG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBjcmVhdGUgYSBidXR0b24gZWxlbWVudFxyXG4gICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIk9rXCI7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBidXR0b24gdG8gc3VibWl0XHJcblxyXG4gICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBjcmVhdGUgYSBidXR0b24gZWxlbWVudFxyXG4gICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiOyAvLyBzZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgYnV0dG9uIHRvIGNhbmNlbFxyXG5cclxuICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnRcclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Db250YWluZXJcIik7IC8vIGFkZCBhIGNsYXNzIHRvIHRoZSBkaXYgZWxlbWVudFxyXG5cclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7IC8vIGFwcGVuZCB0aGUgc3VibWl0IGJ1dHRvbiB0byB0aGUgZGl2IGVsZW1lbnRcclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7IC8vIGFwcGVuZCB0aGUgY2FuY2VsIGJ1dHRvbiB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvbXB0X2J1dHRvbl9jb250YWluZXIpO1xyXG5cclxuICAgICAgcHJvbXB0X2J1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVQcm9tcHQpOyAvLyBhcHBlbmQgdGhlIGlucHV0IGVsZW1lbnQgdG8gdGhlIHRhcmdldCBlbGVtZW50XHJcbiAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7IC8vIGFwcGVuZCB0aGUgYnV0dG9uIGNvbnRhaW5lciB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuXHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2pPYmogPSBuZXcgQ3JlYXRlZFByb2plY3RzKHRpdGxlUHJvbXB0LnZhbHVlKTsgLy8gY3JlYXRlcyBhIG5ldyBvYmplY3Qgd2l0aCB0aXRsZVxyXG5cclxuICAgICAgICBpZiAoIXRpdGxlUHJvbXB0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIG5ld1Byb2pPYmoucmVuZGVyKHRoaXMuc2lkZUJhck9iamVjdCk7XHJcblxyXG4gICAgICAgICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICAgICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aXRsZVByb21wdC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcclxuICAgICAgICAgIHRpdGxlUHJvbXB0LnBsYWNlaG9sZGVyID0gXCJJbnB1dCB2YWx1ZSBjYW5ub3QgYmUgZW1wdHlcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2lkZUJhck9iamVjdC5hZGRQcm9qZWN0KG5ld1Byb2pPYmopOyAvLyB0aGlzIGFkZHMgdGhlIG5ld2x5IGNyZWF0ZWQgb2JqZWN0IHRvIHRoZSBzaWVkZWJhck9iamVjdHMgbGlzdFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgICAgICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7IC8vIHV0aWxpemUgYXJyb3cgZnVuY3Rpb24gdG8gbWFpbnRhaW4gc2NvcGUgb2YgXCJ0aGlzXCIga2V5d29yZFxyXG4gIH0gLy8gbWV0aG9kIHRvIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNpZGViYXJcclxufSAvLyB0aGlzIGNsYXNzIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBhZGQgcHJvamVjdCBidXR0b24gd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0XHJcbiIsImltcG9ydCB7IGdldFRvZGF5c0RhdGUgfSBmcm9tIFwiLi9kYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvSXRlbXMge1xyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBkYXRlID0gZ2V0VG9kYXlzRGF0ZSgpKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IC8vIHRoaXMgaXMgdGhlIHRleHQgb2YgdGhlIHRvLWRvLWl0ZW0gZ2VuZXJhdGVkIGZyb20gdXNlciBpbnB1dFxyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTsgLy8gdGhpcyBpcyB0aGUgZGF0ZSB0aGF0IGlzIGdvaW5nIHRvIGJlIGNyZWF0ZWQgb24gdGhlIHRvLWRvIGxpc3QgYmFzZWQgb2ZmIHRoZSBkYXRlIHRoYXQgaXQgd2FzIGNyZWF0ZWQuXHJcbiAgfVxyXG5cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBnZXREYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgfVxyXG4gIHNldER1ZURhdGUobmV3RGF0ZSkge1xyXG4gICAgdGhpcy5kYXRlID0gbmV3RGF0ZTtcclxuICB9XHJcbiAgbWFya0NvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==