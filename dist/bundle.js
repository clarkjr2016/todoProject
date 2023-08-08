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

.to-do-item {
  display: flex;
  width: 75%;
  margin: 10px auto;
  border: 1px solid black;
  border-radius: 40px;
  padding: 10px;
  cursor: pointer;
}

.to-do-item :nth-child(2) {
  margin-left: auto;
  margin-right: 10%;
}
`, "",{"version":3,"sources":["webpack://./src/modules/css/mainstyle.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAuC;AACzC;;AAEA;EACE,sCAAsC;EACtC,4CAAgD;AAClD;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB,EAAE,wFAAwF;;AAE1F;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,OAAO;EACP,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,6BAA6B;EAC7B,WAAW;EACX,OAAO;AACT;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,OAAO,EAAE,gFAAgF;EACzF,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB,EAAE,6HAA6H;AAC1J;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,6BAA6B;EAC7B,OAAO;AACT;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB","sourcesContent":["@font-face {\r\n  font-family: \"Roboto-Regular\";\r\n  src: url(\"../fonts/Roboto-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"PlayfairDisplay-Regular\";\r\n  src: url(\"../fonts/PlayfairDisplay-Regular.ttf\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n  font-family: \"Roboto-Regular\";\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n} /* this sets up the main element to be able to take up the full height of the viewport */\r\n\r\nheader {\r\n  background-color: hsl(220, 50%, 50%);\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader p {\r\n  font-size: clamp(1.5rem, 2vw, 2rem);\r\n}\r\n\r\n.to-do-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex: 3;\r\n  height: 100%;\r\n}\r\n\r\n.to-do-items-area {\r\n  height: clamp(500px, 50vh, 800px);\r\n  /* border: 5px solid black; */\r\n  width: 100%;\r\n  flex: 6;\r\n}\r\n\r\n.to-do-icon {\r\n  width: clamp(3rem, 50%, 4rem);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1; /* this will make sure that the main element takes up the remaining space left */\r\n  height: 100dvh;\r\n}\r\n\r\nnav {\r\n  border-right: 5px solid black;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n.projects {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.projects img {\r\n  width: clamp(5rem, 5vw, 7rem);\r\n}\r\n\r\n.projects h2 {\r\n  width: clamp(150px, 5vw, 200px);\r\n  font-size: xx-large;\r\n  text-align: center;\r\n  overflow-wrap: break-word; /*this is to make sure that the text wraps around if it is too long, it also breaks the words in a way that is not too ugly */\r\n}\r\n\r\n.project_input {\r\n  width: 50%;\r\n}\r\n\r\n.prompt_button_container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.header_date_wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 75%;\r\n}\r\n\r\n.header_date_wrapper .project-header {\r\n  font-size: clamp(2rem, 5vw, 3rem);\r\n}\r\n\r\n.header_date_wrapper .date-header {\r\n  font-size: clamp(1rem, 1.25vw, 2rem);\r\n}\r\n\r\n.input-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 75%;\r\n  /* border: 5px solid black; */\r\n  flex: 1;\r\n}\r\n\r\n.input-wrapper input {\r\n  width: 75%;\r\n  height: 25%;\r\n}\r\n\r\n.input-wrapper button {\r\n  width: 10%;\r\n  margin-right: auto;\r\n  height: 25%;\r\n}\r\n\r\n.to-do-item {\r\n  display: flex;\r\n  width: 75%;\r\n  margin: 10px auto;\r\n  border: 1px solid black;\r\n  border-radius: 40px;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.to-do-item :nth-child(2) {\r\n  margin-left: auto;\r\n  margin-right: 10%;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   sideBarObject: () => (/* binding */ sideBarObject),
/* harmony export */   toDoItemArea: () => (/* binding */ toDoItemArea)
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

  toDoAreaItemCollection = []; // toDoItems get pushed here.

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
    const input = this.input; // this selects the input area
    const button = this.getButton(); // get the button element
    button.addEventListener("click", () => {
      const inputValue = this.getInput(); // get the input element
      const toDoItem = new _to_do_items__WEBPACK_IMPORTED_MODULE_1__["default"](inputValue); // this creates the to-do items
      const projects = _index__WEBPACK_IMPORTED_MODULE_2__.sideBarObject.getProjects(); // this selects all the projects located within the sidebar object
      projects.forEach((project) => {
        if (project.isActive == true) {
          project.toDoItems.push(toDoItem);
          toDoItem.project = project.getTitle();
        }
      }); // this pushes the recently created to-do-item into the appropriate "active" project
      this.setInput(""); // this empties the input value area text after the button has been pressed.
      const inputElement = document.createElement("div"); // creates a div element that will store the text and date
      const inputText = document.createElement("p"); //creates a paragraph element for the to--do-item description text
      const inputDate = document.createElement("p"); // creates a paragraph element for the to-do-item date
      inputElement.classList.add("to-do-item");
      inputText.textContent = toDoItem.getDescription(); // sets the text content of the paragraph element to the to-do-item description
      inputDate.textContent = toDoItem.getDate(); // sets the text content of the paragraph element to the to-do-item date
      inputElement.appendChild(inputText); // appends the text to the div element
      inputElement.appendChild(inputDate); // appends the date to the div element
      this.area.appendChild(inputElement); // appends the div element to the to-do-items-area
      _index__WEBPACK_IMPORTED_MODULE_2__.toDoItemArea.toDoAreaItemCollection.push(toDoItem);
      toDoItem.inputElement.push(inputElement);

      inputElement.addEventListener("mouseenter", function () {
        const X = document.createElement("p");
        X.innerText = "X";
        inputElement.appendChild(X);

        X.addEventListener("click", () => {
          _index__WEBPACK_IMPORTED_MODULE_2__.toDoItemArea.area.removeChild(inputElement); // this removes the to-do-item when the X is selected.
        });
      });

      inputElement.addEventListener("mouseleave", function () {
        const childrenElements = inputElement.children; // collects all of the children elements within the inputElement
        const arrayOfChildrenElements = Array.from(childrenElements); // this conversts the above HTML collection into an array
        arrayOfChildrenElements.forEach((child) => {
          if (child.innerText === "X") {
            inputElement.removeChild(child); // Remove the child element when the mouse leaves the parent element
          }
        }); // this loops through all of the elements and if the inner text is just "X" it will remove it.
      });
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
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
        inputElement.classList.add("to-do-item");
        inputText.textContent = toDoItem.getDescription(); // sets the text content of the paragraph element to the to-do-item description
        inputDate.textContent = toDoItem.getDate(); // sets the text content of the paragraph element to the to-do-item date
        inputElement.appendChild(inputText); // appends the text to the div element
        inputElement.appendChild(inputDate); // appends the date to the div element
        this.area.appendChild(inputElement); //
      }
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");



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

      const toDoItemsGeneralCollection = _index__WEBPACK_IMPORTED_MODULE_2__.toDoItemArea.toDoAreaItemCollection; //
      toDoItemsGeneralCollection.forEach((toDo) => {
        if (toDo.project != this.getTitle()) {
          const inputElement = toDo.inputElement;
          inputElement.style.display = "none";
          // I need something here to reference the element tht is created from the to-do-item object so that I can rmeove it.
        }
      });
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
    this.project;
  }

  inputElement = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY3NzL21haW5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY3NzL21haW5zdHlsZS5jc3M/YzY4NSIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy9kYXRlLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9zcmMvbW9kdWxlcy90by1kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0gLyogdGhpcyBzZXRzIHVwIHRoZSBtYWluIGVsZW1lbnQgdG8gYmUgYWJsZSB0byB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNTAlLCA1MCUpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciBwIHtcclxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMnZ3LCAycmVtKTtcclxufVxyXG5cclxuLnRvLWRvLWFyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAzO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRvLWRvLWl0ZW1zLWFyZWEge1xyXG4gIGhlaWdodDogY2xhbXAoNTAwcHgsIDUwdmgsIDgwMHB4KTtcclxuICAvKiBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiA2O1xyXG59XHJcblxyXG4udG8tZG8taWNvbiB7XHJcbiAgd2lkdGg6IGNsYW1wKDNyZW0sIDUwJSwgNHJlbSk7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTsgLyogdGhpcyB3aWxsIG1ha2Ugc3VyZSB0aGF0IHRoZSBtYWluIGVsZW1lbnQgdGFrZXMgdXAgdGhlIHJlbWFpbmluZyBzcGFjZSBsZWZ0ICovXHJcbiAgaGVpZ2h0OiAxMDBkdmg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucHJvamVjdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyBpbWcge1xyXG4gIHdpZHRoOiBjbGFtcCg1cmVtLCA1dncsIDdyZW0pO1xyXG59XHJcblxyXG4ucHJvamVjdHMgaDIge1xyXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgNXZ3LCAyMDBweCk7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgLyp0aGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0ZXh0IHdyYXBzIGFyb3VuZCBpZiBpdCBpcyB0b28gbG9uZywgaXQgYWxzbyBicmVha3MgdGhlIHdvcmRzIGluIGEgd2F5IHRoYXQgaXMgbm90IHRvbyB1Z2x5ICovXHJcbn1cclxuXHJcbi5wcm9qZWN0X2lucHV0IHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ucHJvbXB0X2J1dHRvbl9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyX2RhdGVfd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5oZWFkZXJfZGF0ZV93cmFwcGVyIC5wcm9qZWN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDNyZW0pO1xyXG59XHJcblxyXG4uaGVhZGVyX2RhdGVfd3JhcHBlciAuZGF0ZS1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDc1JTtcclxuICAvKiBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgKi9cclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIgYnV0dG9uIHtcclxuICB3aWR0aDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuLnRvLWRvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG8tZG8taXRlbSA6bnRoLWNoaWxkKDIpIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2Nzcy9tYWluc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLDRDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw0Q0FBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QixFQUFFLHdGQUF3Rjs7QUFFMUY7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPLEVBQUUsZ0ZBQWdGO0VBQ3pGLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBRSw2SEFBNkg7QUFDMUo7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn0gLyogdGhpcyBzZXRzIHVwIHRoZSBtYWluIGVsZW1lbnQgdG8gYmUgYWJsZSB0byB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNTAlLCA1MCUpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAydncsIDJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4OiAzO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8taXRlbXMtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDUwMHB4LCA1MHZoLCA4MDBweCk7XFxyXFxuICAvKiBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWljb24ge1xcclxcbiAgd2lkdGg6IGNsYW1wKDNyZW0sIDUwJSwgNHJlbSk7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7IC8qIHRoaXMgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgbWFpbiBlbGVtZW50IHRha2VzIHVwIHRoZSByZW1haW5pbmcgc3BhY2UgbGVmdCAqL1xcclxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaW1nIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCg1cmVtLCA1dncsIDdyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCA1dncsIDIwMHB4KTtcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyAvKnRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRleHQgd3JhcHMgYXJvdW5kIGlmIGl0IGlzIHRvbyBsb25nLCBpdCBhbHNvIGJyZWFrcyB0aGUgd29yZHMgaW4gYSB3YXkgdGhhdCBpcyBub3QgdG9vIHVnbHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfaW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21wdF9idXR0b25fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2RhdGVfd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9kYXRlX3dyYXBwZXIgLnByb2plY3QtaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9kYXRlX3dyYXBwZXIgLmRhdGUtaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXBwZXIgaW5wdXQge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtd3JhcHBlciBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWl0ZW0gOm50aC1jaGlsZCgyKSB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogMTAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9tb2R1bGVzL2Nzcy9tYWluc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldFRvZGF5c0RhdGUgfSBmcm9tIFwiLi9tb2R1bGVzL2RhdGVcIjtcclxuaW1wb3J0IFRvRG9JdGVtcyBmcm9tIFwiLi9tb2R1bGVzL3RvLWRvLWl0ZW1zLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgUHJvamVjdHMsXHJcbiAgYWRkUHJvamVjdEJ1dHRvbixcclxuICBDcmVhdGVkUHJvamVjdHMsXHJcbn0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0cy5qc1wiO1xyXG5pbXBvcnQgeyBzaWRlQmFyLCBUb0RvQXJlYSB9IGZyb20gXCIuL21vZHVsZXMvVUlcIjtcclxuXHJcbmxldCB0b0RvRGF0ZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaGVhZGVyXCIpOyAvLyBzZWxlY3QgdGhlIGRhdGUgYXJlYVxyXG50b0RvRGF0ZUFyZWEuaW5uZXJUZXh0ID0gZ2V0VG9kYXlzRGF0ZSgpOyAvLyBzZXQgdGhlIGRhdGUgYXJlYSB0byB0aGUgY3VycmVudCBkYXRlXHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZUJhck9iamVjdCA9IG5ldyBzaWRlQmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXJcIikpOyAvLyBzZWxlY3QgdGhlIHNpZGViYXIgYnkgaW5zdGFudGlhdG9uZyBhIGNsYXNzIGFuZCBjYWxsaW5nIHRoZSBnZXRDbGFzc05hbWUgbWV0aG9kIG9uIGl0LlxyXG5cclxuY29uc29sZS5sb2coc2lkZUJhck9iamVjdCk7IC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgc2lkZWJhciBpcyBzZWxlY3RlZFxyXG5cclxuY29uc3QgbXlEYXkgPSBuZXcgUHJvamVjdHMoXCJNeSBEYXlcIiwgXCIuLi9zcmMvcGhvdG9zL2xhcHRvcC5zdmdcIiwgdHJ1ZSk7IC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGNhbGxlZCBNeSBEYXksIHRoaXMgb25lIGlzIHNldCB0byB0cnVlIGZyb20gdGhlIGJlZ2lubmluZyBpbiBjYXNlIGEgdXNlciBkb2Vzbid0IHBpY2sgYW5vdGhlciBwcm9qZWN0XHJcblxyXG5jb25zdCBpbXBvcnRhbnQgPSBuZXcgUHJvamVjdHMoXCJJbXBvcnRhbnRcIiwgXCIuLi9zcmMvcGhvdG9zL3Ryb3BoeS5zdmdcIik7IC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGNhbGxlZCBJbXBvcnRhbnRcclxuXHJcbmNvbnN0IHBsYW5uZWQgPSBuZXcgUHJvamVjdHMoXCJQbGFubmVkXCIsIFwiLi4vc3JjL3Bob3Rvcy9tZW51LnN2Z1wiKTsgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgY2FsbGVkIFBsYW5uZWRcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChteURheSk7IC8vIGFkZCB0aGUgbXlEYXkgcHJvamVjdCB0byB0aGUgc2lkZWJhclxyXG5cclxuc2lkZUJhck9iamVjdC5hZGRQcm9qZWN0KGltcG9ydGFudCk7IC8vIGFkZCB0aGUgaW1wb3J0YW50IHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChwbGFubmVkKTsgLy8gYWRkIHRoZSBwbGFubmVkIHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgcHJvamVjdC5yZW5kZXIoc2lkZUJhck9iamVjdCk7XHJcbn0pOyAvLyBsb29wIHRocm91Z2ggdGhlIHByb2plY3RzIGFuZCBjYWxsIHRoZSBnZXRET01FbGVtZW50IG1ldGhvZCBvbiBlYWNoIHByb2plY3QgdG8gYXBwZW5kIHRoZW0gdG8gdGhlIHNpZGViYXJcclxuXHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBuZXcgYWRkUHJvamVjdEJ1dHRvbihcIkFkZCBQcm9qZWN0XCIsIHNpZGVCYXJPYmplY3QpOyAvLyBjcmVhdGUgYSBuZXcgYnV0dG9uIGNhbGxlZCBBZGQgUHJvamVjdCB3aXRoIHRoZSBzaWRlYmFyT2JqZWN0IGJlaW5nIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxyXG5cclxuYWRkUHJvamVjdEJ0bi5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKSk7IC8vIHJlbmRlciB0aGUgYnV0dG9uIHRvIHRoZSBzaWRlYmFyXHJcblxyXG5jb25zb2xlLmxvZyhhZGRQcm9qZWN0QnRuKTsgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBidXR0b24gaXMgY3JlYXRlZFxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRG9JdGVtQXJlYSA9IG5ldyBUb0RvQXJlYSgpOyAvLyBjcmVhdGUgYSBuZXcgdG8tZG8gYXJlYVxyXG5cclxuY29uc29sZS5sb2codG9Eb0l0ZW1BcmVhLmdldEJ1dHRvbigpKTtcclxuXHJcbnRvRG9JdGVtQXJlYS5yZW5kZXIoKTsgLy8gcmVuZGVyIHRoZSB0by1kbyBhcmVhXHJcbiIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IFRvRG9JdGVtcyBmcm9tIFwiLi90by1kby1pdGVtc1wiO1xyXG5pbXBvcnQgeyBzaWRlQmFyT2JqZWN0IH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vIHRoaXMgaW1wb3J0cyB0aGUgc2lkZUJhck9iamVjdCBmcm9tIHRoZSBpbmRleC5qcyBmaWxlXHJcbmltcG9ydCB7IHRvRG9JdGVtQXJlYSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIHNpZGVCYXIge1xyXG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgLy8gY29uc3RydWN0b3IgdGFrZXMgaW4gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNpZGViYXIgZWxlbWVudCBhcyBhbiBvYmplY3RcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNpZGViYXIgZWxlbWVudFxyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgYW4gZW1wdHkgYXJyYXkgdG8gc3RvcmUgcHJvamVjdHMuXHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc05hbWU7XHJcbiAgfSAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgc2lkZWJhciBlbGVtZW50XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBwcm9qZWN0cyBhcnJheVxyXG4gIH1cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGdldERPTUVsZW1lbnQocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudEltZy5zcmMgPSBwcm9qZWN0LmdldFBpY3R1cmUoKTsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHByb2plY3QgcGljdHVyZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgdGhpcy5nZXRDbGFzc05hbWUoKS5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7IC8vIGFwcGVuZCBkaXYgY29udGFpbmVyIHRvIHNpZGViYXJcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyXHJcbiAgfSAvLyBtZXRob2QgdG8gY3JlYXRlIGEgcHJvamVjdCBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNpZGViYXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvRG9BcmVhIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcclxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkYXRlLWhlYWRlclwiKTtcclxuICAgIHRoaXMuYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8taXRlbXMtYXJlYVwiKTtcclxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpO1xyXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWJ1dHRvblwiKTtcclxuICB9XHJcblxyXG4gIHRvRG9BcmVhSXRlbUNvbGxlY3Rpb24gPSBbXTsgLy8gdG9Eb0l0ZW1zIGdldCBwdXNoZWQgaGVyZS5cclxuXHJcbiAgZ2V0SW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldElucHV0KG5ld0lucHV0VmFsdWUpIHtcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0OyAvLyB0aGlzIHNlbGVjdHMgdGhlIGlucHV0IGFyZWFcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZ2V0QnV0dG9uKCk7IC8vIGdldCB0aGUgYnV0dG9uIGVsZW1lbnRcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5nZXRJbnB1dCgpOyAvLyBnZXQgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW1zKGlucHV0VmFsdWUpOyAvLyB0aGlzIGNyZWF0ZXMgdGhlIHRvLWRvIGl0ZW1zXHJcbiAgICAgIGNvbnN0IHByb2plY3RzID0gc2lkZUJhck9iamVjdC5nZXRQcm9qZWN0cygpOyAvLyB0aGlzIHNlbGVjdHMgYWxsIHRoZSBwcm9qZWN0cyBsb2NhdGVkIHdpdGhpbiB0aGUgc2lkZWJhciBvYmplY3RcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgIHByb2plY3QudG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xyXG4gICAgICAgICAgdG9Eb0l0ZW0ucHJvamVjdCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pOyAvLyB0aGlzIHB1c2hlcyB0aGUgcmVjZW50bHkgY3JlYXRlZCB0by1kby1pdGVtIGludG8gdGhlIGFwcHJvcHJpYXRlIFwiYWN0aXZlXCIgcHJvamVjdFxyXG4gICAgICB0aGlzLnNldElucHV0KFwiXCIpOyAvLyB0aGlzIGVtcHRpZXMgdGhlIGlucHV0IHZhbHVlIGFyZWEgdGV4dCBhZnRlciB0aGUgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWQuXHJcbiAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCB0aGF0IHdpbGwgc3RvcmUgdGhlIHRleHQgYW5kIGRhdGVcclxuICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IC8vY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tLWRvLWl0ZW0gZGVzY3JpcHRpb24gdGV4dFxyXG4gICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgLy8gY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tZG8taXRlbSBkYXRlXHJcbiAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG8tZG8taXRlbVwiKTtcclxuICAgICAgaW5wdXRUZXh0LnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKTsgLy8gc2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBwYXJhZ3JhcGggZWxlbWVudCB0byB0aGUgdG8tZG8taXRlbSBkZXNjcmlwdGlvblxyXG4gICAgICBpbnB1dERhdGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5nZXREYXRlKCk7IC8vIHNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgcGFyYWdyYXBoIGVsZW1lbnQgdG8gdGhlIHRvLWRvLWl0ZW0gZGF0ZVxyXG4gICAgICBpbnB1dEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRUZXh0KTsgLy8gYXBwZW5kcyB0aGUgdGV4dCB0byB0aGUgZGl2IGVsZW1lbnRcclxuICAgICAgaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7IC8vIGFwcGVuZHMgdGhlIGRhdGUgdG8gdGhlIGRpdiBlbGVtZW50XHJcbiAgICAgIHRoaXMuYXJlYS5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpOyAvLyBhcHBlbmRzIHRoZSBkaXYgZWxlbWVudCB0byB0aGUgdG8tZG8taXRlbXMtYXJlYVxyXG4gICAgICB0b0RvSXRlbUFyZWEudG9Eb0FyZWFJdGVtQ29sbGVjdGlvbi5wdXNoKHRvRG9JdGVtKTtcclxuICAgICAgdG9Eb0l0ZW0uaW5wdXRFbGVtZW50LnB1c2goaW5wdXRFbGVtZW50KTtcclxuXHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIFguaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKFgpO1xyXG5cclxuICAgICAgICBYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICB0b0RvSXRlbUFyZWEuYXJlYS5yZW1vdmVDaGlsZChpbnB1dEVsZW1lbnQpOyAvLyB0aGlzIHJlbW92ZXMgdGhlIHRvLWRvLWl0ZW0gd2hlbiB0aGUgWCBpcyBzZWxlY3RlZC5cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuRWxlbWVudHMgPSBpbnB1dEVsZW1lbnQuY2hpbGRyZW47IC8vIGNvbGxlY3RzIGFsbCBvZiB0aGUgY2hpbGRyZW4gZWxlbWVudHMgd2l0aGluIHRoZSBpbnB1dEVsZW1lbnRcclxuICAgICAgICBjb25zdCBhcnJheU9mQ2hpbGRyZW5FbGVtZW50cyA9IEFycmF5LmZyb20oY2hpbGRyZW5FbGVtZW50cyk7IC8vIHRoaXMgY29udmVyc3RzIHRoZSBhYm92ZSBIVE1MIGNvbGxlY3Rpb24gaW50byBhbiBhcnJheVxyXG4gICAgICAgIGFycmF5T2ZDaGlsZHJlbkVsZW1lbnRzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2hpbGQuaW5uZXJUZXh0ID09PSBcIlhcIikge1xyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpOyAvLyBSZW1vdmUgdGhlIGNoaWxkIGVsZW1lbnQgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBwYXJlbnQgZWxlbWVudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAvLyB0aGlzIGxvb3BzIHRocm91Z2ggYWxsIG9mIHRoZSBlbGVtZW50cyBhbmQgaWYgdGhlIGlubmVyIHRleHQgaXMganVzdCBcIlhcIiBpdCB3aWxsIHJlbW92ZSBpdC5cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5nZXRJbnB1dCgpOyAvLyBnZXQgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IG5ldyBUb0RvSXRlbXMoaW5wdXRWYWx1ZSk7IC8vIHRoaXMgY3JlYXRlcyB0aGUgdG8tZG8gaXRlbXNcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXJPYmplY3QuZ2V0UHJvamVjdHMoKTsgLy8gdGhpcyBzZWxlY3RzIGFsbCB0aGUgcHJvamVjdHMgbG9jYXRlZCB3aXRoaW4gdGhlIHNpZGViYXIgb2JqZWN0XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2plY3QuaXNBY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcclxuICAgICAgICAgIH0gLy8gdGhpcyBwdXNoZXMgdGhlIHJlY2VudGx5IGNyZWF0ZWQgdG8tZG8taXRlbSBpbnRvIHRoZSBhcHByb3ByaWF0ZSBcImFjdGl2ZVwiIHByb2plY3RcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldElucHV0KFwiXCIpOyAvLyB0aGlzIGVtcHRpZXMgdGhlIGlucHV0IHZhbHVlIGFyZWEgdGV4dCBhZnRlciB0aGUgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWQuXHJcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50IHRoYXQgd2lsbCBzdG9yZSB0aGUgdGV4dCBhbmQgZGF0ZVxyXG4gICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyAvL2NyZWF0ZXMgYSBwYXJhZ3JhcGggZWxlbWVudCBmb3IgdGhlIHRvLS1kby1pdGVtIGRlc2NyaXB0aW9uIHRleHRcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgLy8gY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tZG8taXRlbSBkYXRlXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0by1kby1pdGVtXCIpO1xyXG4gICAgICAgIGlucHV0VGV4dC50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmdldERlc2NyaXB0aW9uKCk7IC8vIHNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgcGFyYWdyYXBoIGVsZW1lbnQgdG8gdGhlIHRvLWRvLWl0ZW0gZGVzY3JpcHRpb25cclxuICAgICAgICBpbnB1dERhdGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5nZXREYXRlKCk7IC8vIHNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgcGFyYWdyYXBoIGVsZW1lbnQgdG8gdGhlIHRvLWRvLWl0ZW0gZGF0ZVxyXG4gICAgICAgIGlucHV0RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFRleHQpOyAvLyBhcHBlbmRzIHRoZSB0ZXh0IHRvIHRoZSBkaXYgZWxlbWVudFxyXG4gICAgICAgIGlucHV0RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dERhdGUpOyAvLyBhcHBlbmRzIHRoZSBkYXRlIHRvIHRoZSBkaXYgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuYXJlYS5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpOyAvL1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRvZGF5c0RhdGUoKSB7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vIEphbnVhcnkgaXMgMCFcclxuICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIG1tICsgXCIvXCIgKyBkZCArIFwiL1wiICsgeXl5eTtcclxufVxyXG5cclxuY29uc29sZS5sb2coZ2V0VG9kYXlzRGF0ZSgpKTsgLy8gVGhpcyB3aWxsIHByaW50IHRoZSBkYXRlIGluIE1NL0REL1lZWVkgZm9ybWF0XHJcbiIsImltcG9ydCB7IFRvRG9BcmVhIH0gZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0IHsgZ2V0VG9kYXlzRGF0ZSB9IGZyb20gXCIuL2RhdGVcIjtcclxuaW1wb3J0IHsgdG9Eb0l0ZW1BcmVhIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmNvbnN0IHsgc2lkZUJhciB9ID0gcmVxdWlyZShcIi4vVUlcIik7IC8vIGltcG9ydGluZyBzaWRlYmFyIE9iamVjdCBjbGFzc1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgcGljdHVyZSA9IFwiLi4vc3JjL3Bob3Rvcy9tZW51LnN2Z1wiLCBpc0FjdGl2ZSA9IGZhbHNlKSB7XHJcbiAgICAvLyBjb25zdHJ1Y3RvciB0YWtlcyBpbiBhIHRpdGxlIGFuZCBhIHBpY3R1cmUgc3JjXHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3RcclxuICAgIHRoaXMucGljdHVyZSA9IHBpY3R1cmU7IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyB0aGUgcGljdHVyZSBzcmMgb2YgdGhlIHByb2plY3RcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcclxuICB9XHJcblxyXG4gIHRvRG9JdGVtcyA9IFtdOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgYW4gZW1wdHkgYXJyYXkgZm9yIGZ1dHVyZSB0by1kby1pdGVtcyB0byBiZSBwbGFjZWQgaW5cclxuXHJcbiAgZ2V0UGljdHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBpY3R1cmU7IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBwaWN0dXJlIHNyYyBvZiB0aGUgcHJvamVjdFxyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTsgLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0XHJcbiAgfVxyXG4gIGdldFRvRG9JdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvRG9JdGVtczsgLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIHRvIGRvIGl0ZW1zIGFycmF5XHJcbiAgfVxyXG4gIGFkZFRvRG9zKHRvRG8pIHtcclxuICAgIHRoaXMudG9Eb0l0ZW1zLnB1c2godG9Ebyk7IC8vIHB1c2ggYSB0byBkbyB2YWx1ZSBpbnRvIHRoZSBhcHByb3BpYXRlIHByb2plY3QgbGlzdFxyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdFRvU2lkZUJhcihzaWRlQmFyKSB7XHJcbiAgICBzaWRlQmFyLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXRBY3RpdmVTdGF0dXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUFjdGl2ZVN0YXR1c1RvVHJ1ZSgpIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQWN0aXZlU3RhdHVzVG9GYWxzZSgpIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihzaWRlQmFyKSB7XHJcbiAgICBjb25zdCB0b0RvQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tYXJlYVwiKTsgLy8gdGhpcyBzZWxlY3RzIHRoZSB0by1kby1hcmVhIGVsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgbWFuaXB1bGF0ZWRcclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY3JlYXRlIGEgY29udGFpbmVyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAvLyBjcmVhdGUgYW4gaW1hZ2UgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRJbWcuc3JjID0gdGhpcy5nZXRQaWN0dXJlKCk7IC8vIHNldCB0aGUgaW1hZ2Ugc291cmNlIHRvIHRoZSBwcm9qZWN0IHBpY3R1cmVcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5nZXRUaXRsZSgpOyAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byB0aGUgcHJvamVjdCB0aXRsZVxyXG5cclxuICAgIHNpZGVCYXIuZ2V0Q2xhc3NOYW1lKCkuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRDb250YWluZXIpOyAvLyBhcHBlbmQgZGl2IGNvbnRhaW5lciB0byBzaWRlYmFyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRJbWcpOyAvLyBhcHBlbmQgaW1hZ2UgdG8gZGl2IGNvbnRhaW5lclxyXG5cclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50VGl0bGUpOyAvLyBhcHBlbmQgdGl0bGUgdG8gZGl2IGNvbnRhaW5lcjFcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdHMgPSBzaWRlQmFyLmdldFByb2plY3RzKCk7IC8vIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBwcm9qZWN0IGVsZW1lbnRzIGNyZWF0ZWRcclxuXHJcbiAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gZS50YXJnZXQuaW5uZXJUZXh0KSB7XHJcbiAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICAgIH0pOyAvLyB0aGlzIGl0ZXJhdGVzIHRocm91Z2ggZWFjaCBwcm9qZWN0IGFuZCBjb21wYXJlcyB0aGUgdGl0bGUgb2YgdGhlIGNsaWNrZWQgb24gRE9NIEVsZW1lbnQgdG8gdGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0LCB0aGV5IHNob3VsZCBiZSB0aGUgc2FtZSBzbyBpdCBjaGFtaGVzIHRoZSBhY3R2ZSBzdGF0dXMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQgdG8gdHJ1ZSBhbmQgdGhlIHJlc3QgdG8gZmFsc2UuXHJcblxyXG4gICAgICB0b0RvQXJlYS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7IC8vIHRoaXMgYWxsb3dzIGZvciB0aGUgdG8tZG8tYXJlYSB0byBiZSB2aXNpYmxlIHdoZW4gYSBwcm9qZWN0IGlzIGNsaWNrZWRcclxuICAgICAgY29uc3QgdG9Eb0FyZWFQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcclxuICAgICAgbGV0IHRvRG9BcmVhRGF0ZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1oZWFkZXJcIik7XHJcblxyXG4gICAgICB0b0RvQXJlYURhdGVIZWFkZXIuaW5uZXJUZXh0ID0gZ2V0VG9kYXlzRGF0ZSgpO1xyXG5cclxuICAgICAgdG9Eb0FyZWFQcm9qZWN0SGVhZGVyLmlubmVyVGV4dCA9IHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICBjb25zdCB0b0RvSXRlbXNHZW5lcmFsQ29sbGVjdGlvbiA9IHRvRG9JdGVtQXJlYS50b0RvQXJlYUl0ZW1Db2xsZWN0aW9uOyAvL1xyXG4gICAgICB0b0RvSXRlbXNHZW5lcmFsQ29sbGVjdGlvbi5mb3JFYWNoKCh0b0RvKSA9PiB7XHJcbiAgICAgICAgaWYgKHRvRG8ucHJvamVjdCAhPSB0aGlzLmdldFRpdGxlKCkpIHtcclxuICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRvRG8uaW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIC8vIEkgbmVlZCBzb21ldGhpbmcgaGVyZSB0byByZWZlcmVuY2UgdGhlIGVsZW1lbnQgdGh0IGlzIGNyZWF0ZWQgZnJvbSB0aGUgdG8tZG8taXRlbSBvYmplY3Qgc28gdGhhdCBJIGNhbiBybWVvdmUgaXQuXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pOyAvLyB0aGlzIGFsbG93cyBmb3IgdGhlIHByb2plY3MgYXR0cmlidXRlIHRvIGJlIHJlZmVsY3RlZCBpbiB0aGUgdG8tZG8tYXJlYVxyXG5cclxuICAgIC8vIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG4gIH1cclxufSAvLyBDbGFzcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgb3JpZ2luYWwgMyBwcm9qZWN0cyB0aGF0IHdpbGwgYXBwZWFyIG9uIHRoZSBzaWRlYmFyXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZFByb2plY3RzIGV4dGVuZHMgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICBzdXBlcih0aXRsZSk7XHJcbiAgfVxyXG4gIHJlbmRlcihzaWRlQmFyKSB7XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHRvRG9BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1hcmVhXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIHRvLWRvLWFyZWEgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTsgLy8gYWRkIGEgY2xhc3MgdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50SW1nLnNyYyA9IHRoaXMuZ2V0UGljdHVyZSgpOyAvLyBzZXQgdGhlIGltYWdlIHNvdXJjZSB0byB0aGUgcHJvamVjdCBwaWN0dXJlXHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgICBzaWRlQmFyLmdldENsYXNzTmFtZSgpLmNoaWxkcmVuWzJdLmFmdGVyKHByb2plY3RFbGVtZW50Q29udGFpbmVyKTsgLy8gYXBwZW5kIGRpdiBjb250YWluZXIgYWZ0ZXIgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRJbWcpOyAvLyBhcHBlbmQgaW1hZ2UgdG8gZGl2IGNvbnRhaW5lclxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXIuZ2V0UHJvamVjdHMoKTsgLy8gdGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIHByb2plY3QgZWxlbWVudHMgY3JlYXRlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gZS50YXJnZXQuaW5uZXJUZXh0KSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b0RvQXJlYS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7IC8vIHRoaXMgYWxsb3dzIGZvciB0aGUgdG8tZG8tYXJlYSB0byBiZSB2aXNpYmxlIHdoZW4gYSBwcm9qZWN0IGlzIGNsaWNrZWRcclxuICAgICAgICBsZXQgdG9Eb0FyZWFQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTsgLy8gdGhpcyBzZWxlY3RzIHRoZSBwcm9qZWN0IGhlYWRlciBlbGVtZW50IHNvIHRoYXQgaXQgY2FuIGJlIG1hbmlwdWxhdGVkXHJcbiAgICAgICAgbGV0IHRvRG9BcmVhRGF0ZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1oZWFkZXJcIik7IC8vIHRoaXMgc2VsZWN0cyB0aGUgZGF0ZSBoZWFkZXIgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgICAgIHRvRG9BcmVhRGF0ZUhlYWRlci5pbm5lclRleHQgPSBnZXRUb2RheXNEYXRlKCk7IC8vIHRoaXMgc2V0cyB0aGUgZGF0ZSBoZWFkZXIgdG8gdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIHRvRG9BcmVhUHJvamVjdEhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0RWxlbWVudFRpdGxlLnRleHRDb250ZW50OyAvLyB0aGlzIHNldHMgdGhlIHByb2plY3QgaGVhZGVyIHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcbiAgICAgIH0pOyAvLyB0aGlzIGFsbG93cyBmb3IgdGhlIHByb2plY3MgYXR0cmlidXRlIHRvIGJlIHJlZmVsY3RlZCBpbiB0aGUgdG8tZG8tYXJlYVxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IFggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgWC5pbm5lclRleHQgPSBcIlhcIjtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChYKTtcclxuXHJcbiAgICAgICAgWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHRvRG9BcmVhLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiOyAvL3RoaXMgc2V0cyB0aGUgdmlzaWJpbGl0eSB0byBoaWRkZW4gYnV0IGRvZXNuJ3QgYnJpbmcgaXQgYmFjayB3aGVuIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkXHJcbiAgICAgICAgICBzaWRlQmFyLmdldENsYXNzTmFtZSgpLnJlbW92ZUNoaWxkKHByb2plY3RFbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHRoaXMgcHJldmVudHMgdGhlIGVsZW1lbnQgZnJvbSBidWJibGluZyB1cCB0byB0aGUgcGFyZW50IGVsZW1lbnQgYW5kIGFsbG93cyBmb3IgdGhpcyBldmVudCBsaXN0ZW5lciB0byB0cmlnZ2VyIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgcGFyZW50IGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IFggPSBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaDFcIik7IC8vIEFzc3VtaW5nIHRoZSBjaGlsZCBlbGVtZW50IGlzIGEgZGl2LCB5b3UgY2FuIG1vZGlmeSB0aGlzIHNlbGVjdG9yIGJhc2VkIG9uIHlvdXIgY2hpbGQgZWxlbWVudCdzIHR5cGUgb3IgcHJvcGVydGllc1xyXG5cclxuICAgICAgICBpZiAoWCkge1xyXG4gICAgICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoWCk7IC8vIFJlbW92ZSB0aGUgY2hpbGQgZWxlbWVudCB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gLy8gbWV0aG9kIHRvIGNyZWF0ZSBhIHByb2plY3QgZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBzaWRlYmFyXHJcbiAgfVxyXG59IC8vIHRoaXMgY2xhc3MgaXMgdXNlZCB0byBjcmVhdGUgcHJvamVjdHMgdGhhdCBhcmUgY3JlYXRlZCBieSB0aGUgdXNlci4gVGhpcyBpcyBhbiBleHRlbnNpb24gb2YgdGhlIHByb2plY3RzIGNsYXNzXHJcblxyXG5leHBvcnQgY2xhc3MgYWRkUHJvamVjdEJ1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoYnV0dG9uTmFtZSwgc2lkZUJhck9iamVjdCwgc3JjID0gXCIuLi9zcmMvcGhvdG9zL3BsdXMuc3ZnXCIpIHtcclxuICAgIHRoaXMuYnV0dG9uTmFtZSA9IGJ1dHRvbk5hbWU7XHJcbiAgICB0aGlzLnNyYyA9IHNyYzsgLy9cclxuICAgIHRoaXMuc2lkZUJhck9iamVjdCA9IHNpZGVCYXJPYmplY3Q7IC8vIFVwZGF0ZSB0aGlzIGxpbmUgdG8gdGFrZSBpbiB0aGUgc2lkZWJhciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcbiAgfSAvLyBjb25zdHJ1Y3RvciB0YWtlcyBpbiB0aGUgYnV0dG9uIG5hbWUgYXMgYW4gb2JqZWN0XHJcblxyXG4gIHJlbmRlcih0YXJnZXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZGl2IGVsZW1lbnRcclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7IC8vIGFkZCBhIGNsYXNzIHRvIHRoZSBidXR0b24gY29udGFpbmVyIGVsZW1tZW50XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgLy8gY3JlYXRlIGFuIGltYWdlIGVsZW1lbnRcclxuICAgIGFkZEJ1dHRvbkltZy5zcmMgPSB0aGlzLnNyYzsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHNyYyBwcm9wZXJ0eVxyXG5cclxuICAgIGNvbnN0IGFkZEJ1dHRvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyAvLyBjcmVhdGUgYSBoMiBlbGVtZW50XHJcbiAgICBhZGRCdXR0b25UaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuYnV0dG9uTmFtZTsgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIGJ1dHRvbiBuYW1lIHByb3BlcnR5XHJcblxyXG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbkltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBidXR0b24gY29udGFpbmVyXHJcbiAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uVGl0bGUpOyAvLyBhcHBlbmQgdGl0bGUgdG8gYnV0dG9uIGNvbnRhaW5lclxyXG5cclxuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uQ29udGFpbmVyKTsgLy8gYXBwZW5kIGJ1dHRvbiBjb250YWluZXIgdG8gdGFyZ2V0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyB0aGlzIG1haW50YWlucyB0aGUgc2NvcGUgb2YgdGhlIGtleXdvcmQgdGhpcyB0byBiZSB1c2VkIGluIHRoZSBldmVudCBsaXN0ZW5lclxyXG5cclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgLy8gcmVtb3ZlIHRoZSBhZGQgcHJvamVjdCBidXR0b25cclxuXHJcbiAgICAgIGNvbnN0IHByb21wdF9idXR0b25fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvbXB0X2J1dHRvbl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb21wdF9idXR0b25fY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgdGl0bGVQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IC8vIGNyZWF0ZSBhbiBpbnB1dCBlbGVtZW50XHJcbiAgICAgIHRpdGxlUHJvbXB0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpOyAvLyBzZXQgdGhlIHR5cGUgb2YgdGhlIGlucHV0IGVsZW1lbnQgdG8gdGV4dFxyXG4gICAgICB0aXRsZVByb21wdC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgTmFtZVwiKTsgLy8gc2V0IHRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQgZWxlbWVudCB0byBwcm9qZWN0IG5hbWVcclxuICAgICAgdGl0bGVQcm9tcHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RfaW5wdXRcIik7XHJcblxyXG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBjcmVhdGUgYSBidXR0b24gZWxlbWVudFxyXG4gICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIk9rXCI7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBidXR0b24gdG8gc3VibWl0XHJcblxyXG4gICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBjcmVhdGUgYSBidXR0b24gZWxlbWVudFxyXG4gICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiOyAvLyBzZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgYnV0dG9uIHRvIGNhbmNlbFxyXG5cclxuICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnRcclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Db250YWluZXJcIik7IC8vIGFkZCBhIGNsYXNzIHRvIHRoZSBkaXYgZWxlbWVudFxyXG5cclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7IC8vIGFwcGVuZCB0aGUgc3VibWl0IGJ1dHRvbiB0byB0aGUgZGl2IGVsZW1lbnRcclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7IC8vIGFwcGVuZCB0aGUgY2FuY2VsIGJ1dHRvbiB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvbXB0X2J1dHRvbl9jb250YWluZXIpO1xyXG5cclxuICAgICAgcHJvbXB0X2J1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVQcm9tcHQpOyAvLyBhcHBlbmQgdGhlIGlucHV0IGVsZW1lbnQgdG8gdGhlIHRhcmdldCBlbGVtZW50XHJcbiAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7IC8vIGFwcGVuZCB0aGUgYnV0dG9uIGNvbnRhaW5lciB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuXHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2pPYmogPSBuZXcgQ3JlYXRlZFByb2plY3RzKHRpdGxlUHJvbXB0LnZhbHVlKTsgLy8gY3JlYXRlcyBhIG5ldyBvYmplY3Qgd2l0aCB0aXRsZVxyXG5cclxuICAgICAgICBpZiAoIXRpdGxlUHJvbXB0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIG5ld1Byb2pPYmoucmVuZGVyKHRoaXMuc2lkZUJhck9iamVjdCk7XHJcblxyXG4gICAgICAgICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICAgICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aXRsZVByb21wdC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcclxuICAgICAgICAgIHRpdGxlUHJvbXB0LnBsYWNlaG9sZGVyID0gXCJJbnB1dCB2YWx1ZSBjYW5ub3QgYmUgZW1wdHlcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2lkZUJhck9iamVjdC5hZGRQcm9qZWN0KG5ld1Byb2pPYmopOyAvLyB0aGlzIGFkZHMgdGhlIG5ld2x5IGNyZWF0ZWQgb2JqZWN0IHRvIHRoZSBzaWVkZWJhck9iamVjdHMgbGlzdFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgICAgICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7IC8vIHV0aWxpemUgYXJyb3cgZnVuY3Rpb24gdG8gbWFpbnRhaW4gc2NvcGUgb2YgXCJ0aGlzXCIga2V5d29yZFxyXG4gIH0gLy8gbWV0aG9kIHRvIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNpZGViYXJcclxufSAvLyB0aGlzIGNsYXNzIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBhZGQgcHJvamVjdCBidXR0b24gd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0XHJcbiIsImltcG9ydCB7IGdldFRvZGF5c0RhdGUgfSBmcm9tIFwiLi9kYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvSXRlbXMge1xyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBkYXRlID0gZ2V0VG9kYXlzRGF0ZSgpKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IC8vIHRoaXMgaXMgdGhlIHRleHQgb2YgdGhlIHRvLWRvLWl0ZW0gZ2VuZXJhdGVkIGZyb20gdXNlciBpbnB1dFxyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTsgLy8gdGhpcyBpcyB0aGUgZGF0ZSB0aGF0IGlzIGdvaW5nIHRvIGJlIGNyZWF0ZWQgb24gdGhlIHRvLWRvIGxpc3QgYmFzZWQgb2ZmIHRoZSBkYXRlIHRoYXQgaXQgd2FzIGNyZWF0ZWQuXHJcbiAgICB0aGlzLnByb2plY3Q7XHJcbiAgfVxyXG5cclxuICBpbnB1dEVsZW1lbnQgPSBbXTtcclxuXHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcbiAgZ2V0RGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgfVxyXG5cclxuICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBzZXREdWVEYXRlKG5ld0RhdGUpIHtcclxuICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XHJcbiAgfVxyXG4gIG1hcmtDb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=