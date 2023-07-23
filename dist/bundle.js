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
  width: clamp(150px, 5vw, 200px);
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
`, "",{"version":3,"sources":["webpack://./src/modules/css/mainstyle.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAuC;AACzC;;AAEA;EACE,sCAAsC;EACtC,4CAAgD;AAClD;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB,EAAE,wFAAwF;;AAE1F;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,OAAO;EACP,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,6BAA6B;EAC7B,WAAW;EACX,OAAO;AACT;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,OAAO,EAAE,gFAAgF;EACzF,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB,EAAE,6HAA6H;AAC1J;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,6BAA6B;EAC7B,OAAO;AACT;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,WAAW;AACb","sourcesContent":["@font-face {\r\n  font-family: \"Roboto-Regular\";\r\n  src: url(\"../fonts/Roboto-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"PlayfairDisplay-Regular\";\r\n  src: url(\"../fonts/PlayfairDisplay-Regular.ttf\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n  font-family: \"Roboto-Regular\";\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n} /* this sets up the main element to be able to take up the full height of the viewport */\r\n\r\nheader {\r\n  background-color: hsl(220, 50%, 50%);\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader p {\r\n  font-size: clamp(1.5rem, 2vw, 2rem);\r\n}\r\n\r\n.to-do-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex: 3;\r\n  height: 100%;\r\n}\r\n\r\n.to-do-items-area {\r\n  height: clamp(500px, 50vh, 800px);\r\n  /* border: 5px solid black; */\r\n  width: 100%;\r\n  flex: 6;\r\n}\r\n\r\n.to-do-icon {\r\n  width: clamp(3rem, 50%, 4rem);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1; /* this will make sure that the main element takes up the remaining space left */\r\n  height: 100dvh;\r\n}\r\n\r\nnav {\r\n  border-right: 5px solid black;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n.projects {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.projects img {\r\n  width: clamp(150px, 5vw, 200px);\r\n}\r\n\r\n.projects h2 {\r\n  width: clamp(150px, 5vw, 200px);\r\n  font-size: xx-large;\r\n  text-align: center;\r\n  overflow-wrap: break-word; /*this is to make sure that the text wraps around if it is too long, it also breaks the words in a way that is not too ugly */\r\n}\r\n\r\n.project_input {\r\n  width: 50%;\r\n}\r\n\r\n.prompt_button_container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.header_date_wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 75%;\r\n}\r\n\r\n.header_date_wrapper .project-header {\r\n  font-size: clamp(2rem, 5vw, 3rem);\r\n}\r\n\r\n.header_date_wrapper .date-header {\r\n  font-size: clamp(1rem, 1.25vw, 2rem);\r\n}\r\n\r\n.input-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 75%;\r\n  /* border: 5px solid black; */\r\n  flex: 1;\r\n}\r\n\r\n.input-wrapper input {\r\n  width: 75%;\r\n  height: 25%;\r\n}\r\n\r\n.input-wrapper button {\r\n  width: 10%;\r\n  margin-right: auto;\r\n  height: 25%;\r\n}\r\n"],"sourceRoot":""}]);
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

  getButton() {
    return this.button;
  }

  render() {
    const button = this.getButton(); // get the button element
    button.addEventListener("click", () => {
      const inputValue = this.getInput(); // get the input element
      console.log(inputValue);
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
  constructor(title, picture = "../src/photos/menu.svg") {
    // constructor takes in a title and a picture src
    this.title = title; // creating a property that is the title of the project
    this.picture = picture; // creating a property that is the picture src of the project
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

    projectElementContainer.addEventListener("click", () => {
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

      projectElementContainer.addEventListener("click", () => {
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_css_mainstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/css/mainstyle.css */ "./src/modules/css/mainstyle.css");
/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/date */ "./src/modules/date.js");
/* harmony import */ var _modules_to_do_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/to-do-items.js */ "./src/modules/to-do-items.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");






let toDoDateArea = document.querySelector(".date-header"); // select the date area
toDoDateArea.innerText = (0,_modules_date__WEBPACK_IMPORTED_MODULE_1__.getTodaysDate)(); // set the date area to the current date

const sideBarObject = new _modules_UI__WEBPACK_IMPORTED_MODULE_4__.sideBar(document.querySelector(".side-bar")); // select the sidebar by instantiatong a class and calling the getClassName method on it.

console.log(sideBarObject); // check to see if the sidebar is selected

const myDay = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__.Projects("My Day", "../src/photos/laptop.svg"); // create a new project called My Day

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

const toDoItemArea = new _modules_UI__WEBPACK_IMPORTED_MODULE_4__.ToDoArea();

console.log(toDoItemArea.getButton());

toDoItemArea.render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ1U7QUFDRTtBQUtsQjtBQUNrQjtBQUNqRDtBQUNBLDJEQUEyRDtBQUMzRCx5QkFBeUIsNERBQWEsSUFBSTtBQUMxQztBQUNBLDBCQUEwQixnREFBTyx1Q0FBdUM7QUFDeEU7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxrQkFBa0IsMERBQVEsd0NBQXdDO0FBQ2xFO0FBQ0Esc0JBQXNCLDBEQUFRLDJDQUEyQztBQUN6RTtBQUNBLG9CQUFvQiwwREFBUSx1Q0FBdUM7QUFDbkU7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHO0FBQ0o7QUFDQSwwQkFBMEIsa0VBQWdCLGdDQUFnQztBQUMxRTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHlCQUF5QixpREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY3NzL21haW5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY3NzL21haW5zdHlsZS5jc3M/YzY4NSIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9kYXRlLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy90by1kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJQbGF5ZmFpckRpc3BsYXktUmVndWxhclwiO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSAvKiB0aGlzIHNldHMgdXAgdGhlIG1haW4gZWxlbWVudCB0byBiZSBhYmxlIHRvIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAqL1xyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA1MCUsIDUwJSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIHAge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAydncsIDJyZW0pO1xyXG59XHJcblxyXG4udG8tZG8tYXJlYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udG8tZG8taXRlbXMtYXJlYSB7XHJcbiAgaGVpZ2h0OiBjbGFtcCg1MDBweCwgNTB2aCwgODAwcHgpO1xyXG4gIC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDY7XHJcbn1cclxuXHJcbi50by1kby1pY29uIHtcclxuICB3aWR0aDogY2xhbXAoM3JlbSwgNTAlLCA0cmVtKTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxOyAvKiB0aGlzIHdpbGwgbWFrZSBzdXJlIHRoYXQgdGhlIG1haW4gZWxlbWVudCB0YWtlcyB1cCB0aGUgcmVtYWluaW5nIHNwYWNlIGxlZnQgKi9cclxuICBoZWlnaHQ6IDEwMGR2aDtcclxufVxyXG5cclxubmF2IHtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnByb2plY3RzIGltZyB7XHJcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA1dncsIDIwMHB4KTtcclxufVxyXG5cclxuLnByb2plY3RzIGgyIHtcclxuICB3aWR0aDogY2xhbXAoMTUwcHgsIDV2dywgMjAwcHgpO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qdGhpcyBpcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdGV4dCB3cmFwcyBhcm91bmQgaWYgaXQgaXMgdG9vIGxvbmcsIGl0IGFsc28gYnJlYWtzIHRoZSB3b3JkcyBpbiBhIHdheSB0aGF0IGlzIG5vdCB0b28gdWdseSAqL1xyXG59XHJcblxyXG4ucHJvamVjdF9pbnB1dCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnByb21wdF9idXR0b25fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlcl9kYXRlX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4uaGVhZGVyX2RhdGVfd3JhcHBlciAucHJvamVjdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKTtcclxufVxyXG5cclxuLmhlYWRlcl9kYXRlX3dyYXBwZXIgLmRhdGUtaGVhZGVyIHtcclxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgLyogYm9yZGVyOiA1cHggc29saWQgYmxhY2s7ICovXHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIgaW5wdXQge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9jc3MvbWFpbnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUE2QjtFQUM3Qiw0Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsNENBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIsRUFBRSx3RkFBd0Y7O0FBRTFGO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTyxFQUFFLGdGQUFnRjtFQUN6RixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUUsNkhBQTZIO0FBQzFKOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tUmVndWxhclxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpckRpc3BsYXktUmVndWxhclxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tUmVndWxhclxcXCI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufSAvKiB0aGlzIHNldHMgdXAgdGhlIG1haW4gZWxlbWVudCB0byBiZSBhYmxlIHRvIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA1MCUsIDUwJSk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHAge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDJ2dywgMnJlbSk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDM7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1pdGVtcy1hcmVhIHtcXHJcXG4gIGhlaWdodDogY2xhbXAoNTAwcHgsIDUwdmgsIDgwMHB4KTtcXHJcXG4gIC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4OiA2O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8taWNvbiB7XFxyXFxuICB3aWR0aDogY2xhbXAoM3JlbSwgNTAlLCA0cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTsgLyogdGhpcyB3aWxsIG1ha2Ugc3VyZSB0aGF0IHRoZSBtYWluIGVsZW1lbnQgdGFrZXMgdXAgdGhlIHJlbWFpbmluZyBzcGFjZSBsZWZ0ICovXFxyXFxuICBoZWlnaHQ6IDEwMGR2aDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBpbWcge1xcclxcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA1dncsIDIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgNXZ3LCAyMDBweCk7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgLyp0aGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0ZXh0IHdyYXBzIGFyb3VuZCBpZiBpdCBpcyB0b28gbG9uZywgaXQgYWxzbyBicmVha3MgdGhlIHdvcmRzIGluIGEgd2F5IHRoYXQgaXMgbm90IHRvbyB1Z2x5ICovXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X2lucHV0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9tcHRfYnV0dG9uX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9kYXRlX3dyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfZGF0ZV93cmFwcGVyIC5wcm9qZWN0LWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfZGF0ZV93cmFwcGVyIC5kYXRlLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICAvKiBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13cmFwcGVyIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IFRvRG9JdGVtcyBmcm9tIFwiLi90by1kby1pdGVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIHNpZGVCYXIge1xyXG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgLy8gY29uc3RydWN0b3IgdGFrZXMgaW4gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNpZGViYXIgZWxlbWVudCBhcyBhbiBvYmplY3RcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNpZGViYXIgZWxlbWVudFxyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgYW4gZW1wdHkgYXJyYXkgdG8gc3RvcmUgcHJvamVjdHMuXHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc05hbWU7XHJcbiAgfSAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgc2lkZWJhciBlbGVtZW50XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBwcm9qZWN0cyBhcnJheVxyXG4gIH1cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGdldERPTUVsZW1lbnQocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudEltZy5zcmMgPSBwcm9qZWN0LmdldFBpY3R1cmUoKTsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHByb2plY3QgcGljdHVyZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgdGhpcy5nZXRDbGFzc05hbWUoKS5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7IC8vIGFwcGVuZCBkaXYgY29udGFpbmVyIHRvIHNpZGViYXJcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyXHJcbiAgfSAvLyBtZXRob2QgdG8gY3JlYXRlIGEgcHJvamVjdCBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNpZGViYXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvRG9BcmVhIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcclxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkYXRlLWhlYWRlclwiKTtcclxuICAgIHRoaXMuYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8taXRlbXMtYXJlYVwiKTtcclxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpO1xyXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWJ1dHRvblwiKTtcclxuICB9XHJcblxyXG4gIGdldElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5idXR0b247XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmdldEJ1dHRvbigpOyAvLyBnZXQgdGhlIGJ1dHRvbiBlbGVtZW50XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuZ2V0SW5wdXQoKTsgLy8gZ2V0IHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRUb2RheXNEYXRlKCkge1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvLyBKYW51YXJ5IGlzIDAhXHJcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHJldHVybiBtbSArIFwiL1wiICsgZGQgKyBcIi9cIiArIHl5eXk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGdldFRvZGF5c0RhdGUoKSk7IC8vIFRoaXMgd2lsbCBwcmludCB0aGUgZGF0ZSBpbiBNTS9ERC9ZWVlZIGZvcm1hdFxyXG4iLCJpbXBvcnQgeyBUb0RvQXJlYSB9IGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCB7IGdldFRvZGF5c0RhdGUgfSBmcm9tIFwiLi9kYXRlXCI7XHJcblxyXG5jb25zdCB7IHNpZGVCYXIgfSA9IHJlcXVpcmUoXCIuL1VJXCIpOyAvLyBpbXBvcnRpbmcgc2lkZWJhciBPYmplY3QgY2xhc3NcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHBpY3R1cmUgPSBcIi4uL3NyYy9waG90b3MvbWVudS5zdmdcIikge1xyXG4gICAgLy8gY29uc3RydWN0b3IgdGFrZXMgaW4gYSB0aXRsZSBhbmQgYSBwaWN0dXJlIHNyY1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0XHJcbiAgICB0aGlzLnBpY3R1cmUgPSBwaWN0dXJlOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgdGhlIHBpY3R1cmUgc3JjIG9mIHRoZSBwcm9qZWN0XHJcbiAgfVxyXG5cclxuICB0b0RvSXRlbXMgPSBbXTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIGFuIGVtcHR5IGFycmF5IGZvciBmdXR1cmUgdG8tZG8taXRlbXMgdG8gYmUgcGxhY2VkIGluXHJcblxyXG4gIGdldFBpY3R1cmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5waWN0dXJlOyAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgcGljdHVyZSBzcmMgb2YgdGhlIHByb2plY3RcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdFxyXG4gIH1cclxuICBnZXRUb0RvSXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0RvSXRlbXM7IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSB0byBkbyBpdGVtcyBhcnJheVxyXG4gIH1cclxuICBhZGRUb0Rvcyh0b0RvKSB7XHJcbiAgICB0aGlzLnRvRG9JdGVtcy5wdXNoKHRvRG8pOyAvLyBwdXNoIGEgdG8gZG8gdmFsdWUgaW50byB0aGUgYXBwcm9waWF0ZSBwcm9qZWN0IGxpc3RcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3RUb1NpZGVCYXIoc2lkZUJhcikge1xyXG4gICAgc2lkZUJhci5wdXNoKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHNpZGVCYXIpIHtcclxuICAgIGNvbnN0IHRvRG9BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1hcmVhXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIHRvLWRvLWFyZWEgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudEltZy5zcmMgPSB0aGlzLmdldFBpY3R1cmUoKTsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHByb2plY3QgcGljdHVyZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgc2lkZUJhci5nZXRDbGFzc05hbWUoKS5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7IC8vIGFwcGVuZCBkaXYgY29udGFpbmVyIHRvIHNpZGViYXJcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyMVxyXG5cclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRvRG9BcmVhLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjsgLy8gdGhpcyBhbGxvd3MgZm9yIHRoZSB0by1kby1hcmVhIHRvIGJlIHZpc2libGUgd2hlbiBhIHByb2plY3QgaXMgY2xpY2tlZFxyXG4gICAgICBjb25zdCB0b0RvQXJlYVByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xyXG4gICAgICBsZXQgdG9Eb0FyZWFEYXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWhlYWRlclwiKTtcclxuXHJcbiAgICAgIHRvRG9BcmVhRGF0ZUhlYWRlci5pbm5lclRleHQgPSBnZXRUb2RheXNEYXRlKCk7XHJcblxyXG4gICAgICB0b0RvQXJlYVByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdEVsZW1lbnRUaXRsZS50ZXh0Q29udGVudDtcclxuICAgIH0pOyAvLyB0aGlzIGFsbG93cyBmb3IgdGhlIHByb2plY3MgYXR0cmlidXRlIHRvIGJlIHJlZmVsY3RlZCBpbiB0aGUgdG8tZG8tYXJlYVxyXG5cclxuICAgIC8vIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG4gIH1cclxufSAvLyBDbGFzcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgb3JpZ2luYWwgMyBwcm9qZWN0cyB0aGF0IHdpbGwgYXBwZWFyIG9uIHRoZSBzaWRlYmFyXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZFByb2plY3RzIGV4dGVuZHMgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICBzdXBlcih0aXRsZSk7XHJcbiAgfVxyXG4gIHJlbmRlcihzaWRlQmFyKSB7XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRvRG9BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1hcmVhXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIHRvLWRvLWFyZWEgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50SW1nLnNyYyA9IHRoaXMuZ2V0UGljdHVyZSgpOyAvLyBzZXQgdGhlIGltYWdlIHNvdXJjZSB0byB0aGUgcHJvamVjdCBwaWN0dXJlXHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgICBzaWRlQmFyLmdldENsYXNzTmFtZSgpLmNoaWxkcmVuWzJdLmFmdGVyKHByb2plY3RFbGVtZW50Q29udGFpbmVyKTsgLy8gYXBwZW5kIGRpdiBjb250YWluZXIgYWZ0ZXIgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRJbWcpOyAvLyBhcHBlbmQgaW1hZ2UgdG8gZGl2IGNvbnRhaW5lclxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRvRG9BcmVhLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjsgLy8gdGhpcyBhbGxvd3MgZm9yIHRoZSB0by1kby1hcmVhIHRvIGJlIHZpc2libGUgd2hlbiBhIHByb2plY3QgaXMgY2xpY2tlZFxyXG4gICAgICAgIGxldCB0b0RvQXJlYVByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIHByb2plY3QgaGVhZGVyIGVsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgbWFuaXB1bGF0ZWRcclxuICAgICAgICBsZXQgdG9Eb0FyZWFEYXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWhlYWRlclwiKTsgLy8gdGhpcyBzZWxlY3RzIHRoZSBkYXRlIGhlYWRlciBlbGVtZW50IHNvIHRoYXQgaXQgY2FuIGJlIG1hbmlwdWxhdGVkXHJcbiAgICAgICAgdG9Eb0FyZWFEYXRlSGVhZGVyLmlubmVyVGV4dCA9IGdldFRvZGF5c0RhdGUoKTsgLy8gdGhpcyBzZXRzIHRoZSBkYXRlIGhlYWRlciB0byB0aGUgY3VycmVudCBkYXRlXHJcbiAgICAgICAgdG9Eb0FyZWFQcm9qZWN0SGVhZGVyLmlubmVyVGV4dCA9IHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQ7IC8vIHRoaXMgc2V0cyB0aGUgcHJvamVjdCBoZWFkZXIgdG8gdGhlIHByb2plY3QgdGl0bGVcclxuICAgICAgfSk7IC8vIHRoaXMgYWxsb3dzIGZvciB0aGUgcHJvamVjcyBhdHRyaWJ1dGUgdG8gYmUgcmVmZWxjdGVkIGluIHRoZSB0by1kby1hcmVhXHJcblxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBYLmlubmVyVGV4dCA9IFwiWFwiO1xyXG4gICAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKFgpO1xyXG5cclxuICAgICAgICBYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdG9Eb0FyZWEuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7IC8vdGhpcyBzZXRzIHRoZSB2aXNpYmlsaXR5IHRvIGhpZGRlbiBidXQgZG9lc24ndCBicmluZyBpdCBiYWNrIHdoZW4gYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWRcclxuICAgICAgICAgIHNpZGVCYXIuZ2V0Q2xhc3NOYW1lKCkucmVtb3ZlQ2hpbGQocHJvamVjdEVsZW1lbnRDb250YWluZXIpO1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gdGhpcyBwcmV2ZW50cyB0aGUgZWxlbWVudCBmcm9tIGJ1YmJsaW5nIHVwIHRvIHRoZSBwYXJlbnQgZWxlbWVudCBhbmQgYWxsb3dzIGZvciB0aGlzIGV2ZW50IGxpc3RlbmVyIHRvIHRyaWdnZXIgd2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBwYXJlbnQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgWCA9IHByb2plY3RFbGVtZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTsgLy8gQXNzdW1pbmcgdGhlIGNoaWxkIGVsZW1lbnQgaXMgYSBkaXYsIHlvdSBjYW4gbW9kaWZ5IHRoaXMgc2VsZWN0b3IgYmFzZWQgb24geW91ciBjaGlsZCBlbGVtZW50J3MgdHlwZSBvciBwcm9wZXJ0aWVzXHJcblxyXG4gICAgICAgIGlmIChYKSB7XHJcbiAgICAgICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5yZW1vdmVDaGlsZChYKTsgLy8gUmVtb3ZlIHRoZSBjaGlsZCBlbGVtZW50IHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgcGFyZW50IGVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSAvLyBtZXRob2QgdG8gY3JlYXRlIGEgcHJvamVjdCBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNpZGViYXJcclxuICB9XHJcbn0gLy8gdGhpcyBjbGFzcyBpcyB1c2VkIHRvIGNyZWF0ZSBwcm9qZWN0cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IHRoZSB1c2VyLiBUaGlzIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgcHJvamVjdHMgY2xhc3NcclxuXHJcbmV4cG9ydCBjbGFzcyBhZGRQcm9qZWN0QnV0dG9uIHtcclxuICBjb25zdHJ1Y3RvcihidXR0b25OYW1lLCBzaWRlQmFyT2JqZWN0LCBzcmMgPSBcIi4uL3NyYy9waG90b3MvcGx1cy5zdmdcIikge1xyXG4gICAgdGhpcy5idXR0b25OYW1lID0gYnV0dG9uTmFtZTtcclxuICAgIHRoaXMuc3JjID0gc3JjOyAvL1xyXG4gICAgdGhpcy5zaWRlQmFyT2JqZWN0ID0gc2lkZUJhck9iamVjdDsgLy8gVXBkYXRlIHRoaXMgbGluZSB0byB0YWtlIGluIHRoZSBzaWRlYmFyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuICB9IC8vIGNvbnN0cnVjdG9yIHRha2VzIGluIHRoZSBidXR0b24gbmFtZSBhcyBhbiBvYmplY3RcclxuXHJcbiAgcmVuZGVyKHRhcmdldEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBkaXYgZWxlbWVudFxyXG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGJ1dHRvbiBjb250YWluZXIgZWxlbW1lbnRcclxuXHJcbiAgICBjb25zdCBhZGRCdXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAvLyBjcmVhdGUgYW4gaW1hZ2UgZWxlbWVudFxyXG4gICAgYWRkQnV0dG9uSW1nLnNyYyA9IHRoaXMuc3JjOyAvLyBzZXQgdGhlIGltYWdlIHNvdXJjZSB0byB0aGUgc3JjIHByb3BlcnR5XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgIGFkZEJ1dHRvblRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5idXR0b25OYW1lOyAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byB0aGUgYnV0dG9uIG5hbWUgcHJvcGVydHlcclxuXHJcbiAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uSW1nKTsgLy8gYXBwZW5kIGltYWdlIHRvIGJ1dHRvbiBjb250YWluZXJcclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b25UaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBidXR0b24gY29udGFpbmVyXHJcblxyXG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChhZGRCdXR0b25Db250YWluZXIpOyAvLyBhcHBlbmQgYnV0dG9uIGNvbnRhaW5lciB0byB0YXJnZXQgZWxlbWVudFxyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIHRoaXMgbWFpbnRhaW5zIHRoZSBzY29wZSBvZiB0aGUga2V5d29yZCB0aGlzIHRvIGJlIHVzZWQgaW4gdGhlIGV2ZW50IGxpc3RlbmVyXHJcblxyXG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpOyAvLyByZW1vdmUgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG5cclxuICAgICAgY29uc3QgcHJvbXB0X2J1dHRvbl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9tcHRfYnV0dG9uX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvbXB0X2J1dHRvbl9jb250YWluZXJcIik7XHJcblxyXG4gICAgICBjb25zdCB0aXRsZVByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgLy8gY3JlYXRlIGFuIGlucHV0IGVsZW1lbnRcclxuICAgICAgdGl0bGVQcm9tcHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7IC8vIHNldCB0aGUgdHlwZSBvZiB0aGUgaW5wdXQgZWxlbWVudCB0byB0ZXh0XHJcbiAgICAgIHRpdGxlUHJvbXB0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJvamVjdCBOYW1lXCIpOyAvLyBzZXQgdGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dCBlbGVtZW50IHRvIHByb2plY3QgbmFtZVxyXG4gICAgICB0aXRsZVByb21wdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9pbnB1dFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IC8vIGNyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT2tcIjsgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGJ1dHRvbiB0byBzdWJtaXRcclxuXHJcbiAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IC8vIGNyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50XHJcbiAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBidXR0b24gdG8gY2FuY2VsXHJcblxyXG4gICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudFxyXG4gICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkNvbnRhaW5lclwiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTsgLy8gYXBwZW5kIHRoZSBzdWJtaXQgYnV0dG9uIHRvIHRoZSBkaXYgZWxlbWVudFxyXG4gICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTsgLy8gYXBwZW5kIHRoZSBjYW5jZWwgYnV0dG9uIHRvIHRoZSBkaXYgZWxlbWVudFxyXG5cclxuICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9tcHRfYnV0dG9uX2NvbnRhaW5lcik7XHJcblxyXG4gICAgICBwcm9tcHRfYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVByb21wdCk7IC8vIGFwcGVuZCB0aGUgaW5wdXQgZWxlbWVudCB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgcHJvbXB0X2J1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTsgLy8gYXBwZW5kIHRoZSBidXR0b24gY29udGFpbmVyIHRvIHRoZSB0YXJnZXQgZWxlbWVudFxyXG5cclxuICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvak9iaiA9IG5ldyBDcmVhdGVkUHJvamVjdHModGl0bGVQcm9tcHQudmFsdWUpOyAvLyBjcmVhdGVzIGEgbmV3IG9iamVjdCB3aXRoIHRpdGxlXHJcblxyXG4gICAgICAgIGlmICghdGl0bGVQcm9tcHQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgcHJvbXB0X2J1dHRvbl9jb250YWluZXIucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgbmV3UHJvak9iai5yZW5kZXIodGhpcy5zaWRlQmFyT2JqZWN0KTtcclxuXHJcbiAgICAgICAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gICAgICAgICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRpdGxlUHJvbXB0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xyXG4gICAgICAgICAgdGl0bGVQcm9tcHQucGxhY2Vob2xkZXIgPSBcIklucHV0IHZhbHVlIGNhbm5vdCBiZSBlbXB0eVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBwcm9tcHRfYnV0dG9uX2NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pOyAvLyB1dGlsaXplIGFycm93IGZ1bmN0aW9uIHRvIG1haW50YWluIHNjb3BlIG9mIFwidGhpc1wiIGtleXdvcmRcclxuICB9IC8vIG1ldGhvZCB0byBjcmVhdGUgYSBkaXYgZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBzaWRlYmFyXHJcbn0gLy8gdGhpcyBjbGFzcyBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYWRkIHByb2plY3QgYnV0dG9uIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvSXRlbXMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG4gIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuICBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xyXG4gIH0gLy8gbWV0aG9kIHRvIGJlIGFibGUgdG8gY2hhbmdlIHRoZSB0by1kbyB0aXRsZVxyXG4gIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgfVxyXG4gIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICB9XHJcbiAgbWFya0NvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21vZHVsZXMvY3NzL21haW5zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgZ2V0VG9kYXlzRGF0ZSB9IGZyb20gXCIuL21vZHVsZXMvZGF0ZVwiO1xyXG5pbXBvcnQgVG9Eb0l0ZW1zIGZyb20gXCIuL21vZHVsZXMvdG8tZG8taXRlbXMuanNcIjtcclxuaW1wb3J0IHtcclxuICBQcm9qZWN0cyxcclxuICBhZGRQcm9qZWN0QnV0dG9uLFxyXG4gIENyZWF0ZWRQcm9qZWN0cyxcclxufSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RzLmpzXCI7XHJcbmltcG9ydCB7IHNpZGVCYXIsIFRvRG9BcmVhIH0gZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xyXG5cclxubGV0IHRvRG9EYXRlQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1oZWFkZXJcIik7IC8vIHNlbGVjdCB0aGUgZGF0ZSBhcmVhXHJcbnRvRG9EYXRlQXJlYS5pbm5lclRleHQgPSBnZXRUb2RheXNEYXRlKCk7IC8vIHNldCB0aGUgZGF0ZSBhcmVhIHRvIHRoZSBjdXJyZW50IGRhdGVcclxuXHJcbmNvbnN0IHNpZGVCYXJPYmplY3QgPSBuZXcgc2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtYmFyXCIpKTsgLy8gc2VsZWN0IHRoZSBzaWRlYmFyIGJ5IGluc3RhbnRpYXRvbmcgYSBjbGFzcyBhbmQgY2FsbGluZyB0aGUgZ2V0Q2xhc3NOYW1lIG1ldGhvZCBvbiBpdC5cclxuXHJcbmNvbnNvbGUubG9nKHNpZGVCYXJPYmplY3QpOyAvLyBjaGVjayB0byBzZWUgaWYgdGhlIHNpZGViYXIgaXMgc2VsZWN0ZWRcclxuXHJcbmNvbnN0IG15RGF5ID0gbmV3IFByb2plY3RzKFwiTXkgRGF5XCIsIFwiLi4vc3JjL3Bob3Rvcy9sYXB0b3Auc3ZnXCIpOyAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBjYWxsZWQgTXkgRGF5XHJcblxyXG5jb25zdCBpbXBvcnRhbnQgPSBuZXcgUHJvamVjdHMoXCJJbXBvcnRhbnRcIiwgXCIuLi9zcmMvcGhvdG9zL3Ryb3BoeS5zdmdcIik7IC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGNhbGxlZCBJbXBvcnRhbnRcclxuXHJcbmNvbnN0IHBsYW5uZWQgPSBuZXcgUHJvamVjdHMoXCJQbGFubmVkXCIsIFwiLi4vc3JjL3Bob3Rvcy9tZW51LnN2Z1wiKTsgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgY2FsbGVkIFBsYW5uZWRcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChteURheSk7IC8vIGFkZCB0aGUgbXlEYXkgcHJvamVjdCB0byB0aGUgc2lkZWJhclxyXG5cclxuc2lkZUJhck9iamVjdC5hZGRQcm9qZWN0KGltcG9ydGFudCk7IC8vIGFkZCB0aGUgaW1wb3J0YW50IHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChwbGFubmVkKTsgLy8gYWRkIHRoZSBwbGFubmVkIHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgcHJvamVjdC5yZW5kZXIoc2lkZUJhck9iamVjdCk7XHJcbn0pOyAvLyBsb29wIHRocm91Z2ggdGhlIHByb2plY3RzIGFuZCBjYWxsIHRoZSBnZXRET01FbGVtZW50IG1ldGhvZCBvbiBlYWNoIHByb2plY3QgdG8gYXBwZW5kIHRoZW0gdG8gdGhlIHNpZGViYXJcclxuXHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBuZXcgYWRkUHJvamVjdEJ1dHRvbihcIkFkZCBQcm9qZWN0XCIsIHNpZGVCYXJPYmplY3QpOyAvLyBjcmVhdGUgYSBuZXcgYnV0dG9uIGNhbGxlZCBBZGQgUHJvamVjdCB3aXRoIHRoZSBzaWRlYmFyT2JqZWN0IGJlaW5nIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxyXG5cclxuYWRkUHJvamVjdEJ0bi5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKSk7IC8vIHJlbmRlciB0aGUgYnV0dG9uIHRvIHRoZSBzaWRlYmFyXHJcblxyXG5jb25zb2xlLmxvZyhhZGRQcm9qZWN0QnRuKTsgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBidXR0b24gaXMgY3JlYXRlZFxyXG5cclxuY29uc3QgdG9Eb0l0ZW1BcmVhID0gbmV3IFRvRG9BcmVhKCk7XHJcblxyXG5jb25zb2xlLmxvZyh0b0RvSXRlbUFyZWEuZ2V0QnV0dG9uKCkpO1xyXG5cclxudG9Eb0l0ZW1BcmVhLnJlbmRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=