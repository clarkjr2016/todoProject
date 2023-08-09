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
      toDoItem.inputElement.push(inputElement); // this pushes the input element that was derived from the objeect into the object's array collection area

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

      const toDoItemsGeneralCollection = _index__WEBPACK_IMPORTED_MODULE_2__.toDoItemArea.toDoAreaItemCollection; //this is a variable for the toDoItem Object property that is storing all of the to-do-item objects whenever they are intially created. They are being created in the UI module.
      toDoItemsGeneralCollection.forEach((toDo) => {
        const mySaviorVariable = document.querySelector(".to-do-items-area"); // selects the to-do-area
        const mySaviorVariableCollection = mySaviorVariable.children; // collects the children which should be the to-do-items as they are generated
        const mySaviorVariableArray = Array.from(mySaviorVariableCollection); // this transforms the collection of those children into an array

        if (toDo.project != this.getTitle()) {
          mySaviorVariableArray.forEach((variable) => {
            if (variable == toDo.inputElement[0]) {
              variable.style.display = "none";
            }
          });

          // I need something here to reference the element tht is created from the to-do-item object so that I can rmeove it.
        } else if (toDo.project == this.getTitle()) {
          mySaviorVariableArray.forEach((variable) => {
            if (variable == toDo.inputElement[0]) {
              variable.style.display = "flex";
            }
          });
        }
      });
    }); // this allows for the projecs attribute to be refelcted in the to-do-area

    // method to create a project element and append it to the sidebar
  }
} // Class used to construct the original 3 projects that will appear on the sidebar

class CreatedProjects extends Projects {
  constructor(title, picture, isActive) {
    super(title, picture, isActive);
  }

  toDoItems = []; // creating a property that is an empty array for future to-do-items to be placed in

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

        const toDoItemsGeneralCollection = _index__WEBPACK_IMPORTED_MODULE_2__.toDoItemArea.toDoAreaItemCollection; //this is a variable for the toDoItem Object property that is storing all of the to-do-item objects whenever they are intially created. They are being created in the UI module.
        toDoItemsGeneralCollection.forEach((toDo) => {
          const mySaviorVariable = document.querySelector(".to-do-items-area"); // selects the to-do-area
          const mySaviorVariableCollection = mySaviorVariable.children; // collects the children which should be the to-do-items as they are generated
          const mySaviorVariableArray = Array.from(mySaviorVariableCollection); // this transforms the collection of those children into an array

          if (toDo.project != this.getTitle()) {
            mySaviorVariableArray.forEach((variable) => {
              if (variable == toDo.inputElement[0]) {
                variable.style.display = "none";
              }
            });

            // I need something here to reference the element tht is created from the to-do-item object so that I can rmeove it.
          } else if (toDo.project == this.getTitle()) {
            mySaviorVariableArray.forEach((variable) => {
              if (variable == toDo.inputElement[0]) {
                variable.style.display = "flex";
              }
            });
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9tb2R1bGVzL2Nzcy9tYWluc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9tb2R1bGVzL2Nzcy9tYWluc3R5bGUuY3NzP2M2ODUiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvdG8tZG8taXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheS1SZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59IC8qIHRoaXMgc2V0cyB1cCB0aGUgbWFpbiBlbGVtZW50IHRvIGJlIGFibGUgdG8gdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0ICovXHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDUwJSwgNTAlKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDJ2dywgMnJlbSk7XHJcbn1cclxuXHJcbi50by1kby1hcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50by1kby1pdGVtcy1hcmVhIHtcclxuICBoZWlnaHQ6IGNsYW1wKDUwMHB4LCA1MHZoLCA4MDBweCk7XHJcbiAgLyogYm9yZGVyOiA1cHggc29saWQgYmxhY2s7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogNjtcclxufVxyXG5cclxuLnRvLWRvLWljb24ge1xyXG4gIHdpZHRoOiBjbGFtcCgzcmVtLCA1MCUsIDRyZW0pO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7IC8qIHRoaXMgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgbWFpbiBlbGVtZW50IHRha2VzIHVwIHRoZSByZW1haW5pbmcgc3BhY2UgbGVmdCAqL1xyXG4gIGhlaWdodDogMTAwZHZoO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4ucHJvamVjdHMgaW1nIHtcclxuICB3aWR0aDogY2xhbXAoNXJlbSwgNXZ3LCA3cmVtKTtcclxufVxyXG5cclxuLnByb2plY3RzIGgyIHtcclxuICB3aWR0aDogY2xhbXAoMTUwcHgsIDV2dywgMjAwcHgpO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qdGhpcyBpcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdGV4dCB3cmFwcyBhcm91bmQgaWYgaXQgaXMgdG9vIGxvbmcsIGl0IGFsc28gYnJlYWtzIHRoZSB3b3JkcyBpbiBhIHdheSB0aGF0IGlzIG5vdCB0b28gdWdseSAqL1xyXG59XHJcblxyXG4ucHJvamVjdF9pbnB1dCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnByb21wdF9idXR0b25fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlcl9kYXRlX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4uaGVhZGVyX2RhdGVfd3JhcHBlciAucHJvamVjdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKTtcclxufVxyXG5cclxuLmhlYWRlcl9kYXRlX3dyYXBwZXIgLmRhdGUtaGVhZGVyIHtcclxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgLyogYm9yZGVyOiA1cHggc29saWQgYmxhY2s7ICovXHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIgaW5wdXQge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbi50by1kby1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvLWRvLWl0ZW0gOm50aC1jaGlsZCgyKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9jc3MvbWFpbnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUE2QjtFQUM3Qiw0Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsNENBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIsRUFBRSx3RkFBd0Y7O0FBRTFGO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTyxFQUFFLGdGQUFnRjtFQUN6RixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUUsNkhBQTZIO0FBQzFKOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1SZWd1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheS1SZWd1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1SZWd1bGFyXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59IC8qIHRoaXMgc2V0cyB1cCB0aGUgbWFpbiBlbGVtZW50IHRvIGJlIGFibGUgdG8gdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0ICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDUwJSwgNTAlKTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMnZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleDogMztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWl0ZW1zLWFyZWEge1xcclxcbiAgaGVpZ2h0OiBjbGFtcCg1MDBweCwgNTB2aCwgODAwcHgpO1xcclxcbiAgLyogYm9yZGVyOiA1cHggc29saWQgYmxhY2s7ICovXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXg6IDY7XFxyXFxufVxcclxcblxcclxcbi50by1kby1pY29uIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzcmVtLCA1MCUsIDRyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxOyAvKiB0aGlzIHdpbGwgbWFrZSBzdXJlIHRoYXQgdGhlIG1haW4gZWxlbWVudCB0YWtlcyB1cCB0aGUgcmVtYWluaW5nIHNwYWNlIGxlZnQgKi9cXHJcXG4gIGhlaWdodDogMTAwZHZoO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGltZyB7XFxyXFxuICB3aWR0aDogY2xhbXAoNXJlbSwgNXZ3LCA3cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgNXZ3LCAyMDBweCk7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgLyp0aGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0ZXh0IHdyYXBzIGFyb3VuZCBpZiBpdCBpcyB0b28gbG9uZywgaXQgYWxzbyBicmVha3MgdGhlIHdvcmRzIGluIGEgd2F5IHRoYXQgaXMgbm90IHRvbyB1Z2x5ICovXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X2lucHV0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9tcHRfYnV0dG9uX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9kYXRlX3dyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfZGF0ZV93cmFwcGVyIC5wcm9qZWN0LWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfZGF0ZV93cmFwcGVyIC5kYXRlLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMnJlbSk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICAvKiBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13cmFwcGVyIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50by1kby1pdGVtIDpudGgtY2hpbGQoMikge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vbW9kdWxlcy9jc3MvbWFpbnN0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRUb2RheXNEYXRlIH0gZnJvbSBcIi4vbW9kdWxlcy9kYXRlXCI7XHJcbmltcG9ydCBUb0RvSXRlbXMgZnJvbSBcIi4vbW9kdWxlcy90by1kby1pdGVtcy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIFByb2plY3RzLFxyXG4gIGFkZFByb2plY3RCdXR0b24sXHJcbiAgQ3JlYXRlZFByb2plY3RzLFxyXG59IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHMuanNcIjtcclxuaW1wb3J0IHsgc2lkZUJhciwgVG9Eb0FyZWEgfSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XHJcblxyXG5sZXQgdG9Eb0RhdGVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWhlYWRlclwiKTsgLy8gc2VsZWN0IHRoZSBkYXRlIGFyZWFcclxudG9Eb0RhdGVBcmVhLmlubmVyVGV4dCA9IGdldFRvZGF5c0RhdGUoKTsgLy8gc2V0IHRoZSBkYXRlIGFyZWEgdG8gdGhlIGN1cnJlbnQgZGF0ZVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGVCYXJPYmplY3QgPSBuZXcgc2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtYmFyXCIpKTsgLy8gc2VsZWN0IHRoZSBzaWRlYmFyIGJ5IGluc3RhbnRpYXRvbmcgYSBjbGFzcyBhbmQgY2FsbGluZyB0aGUgZ2V0Q2xhc3NOYW1lIG1ldGhvZCBvbiBpdC5cclxuXHJcbmNvbnNvbGUubG9nKHNpZGVCYXJPYmplY3QpOyAvLyBjaGVjayB0byBzZWUgaWYgdGhlIHNpZGViYXIgaXMgc2VsZWN0ZWRcclxuXHJcbmNvbnN0IG15RGF5ID0gbmV3IFByb2plY3RzKFwiTXkgRGF5XCIsIFwiLi4vc3JjL3Bob3Rvcy9sYXB0b3Auc3ZnXCIsIHRydWUpOyAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBjYWxsZWQgTXkgRGF5LCB0aGlzIG9uZSBpcyBzZXQgdG8gdHJ1ZSBmcm9tIHRoZSBiZWdpbm5pbmcgaW4gY2FzZSBhIHVzZXIgZG9lc24ndCBwaWNrIGFub3RoZXIgcHJvamVjdFxyXG5cclxuY29uc3QgaW1wb3J0YW50ID0gbmV3IFByb2plY3RzKFwiSW1wb3J0YW50XCIsIFwiLi4vc3JjL3Bob3Rvcy90cm9waHkuc3ZnXCIpOyAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBjYWxsZWQgSW1wb3J0YW50XHJcblxyXG5jb25zdCBwbGFubmVkID0gbmV3IFByb2plY3RzKFwiUGxhbm5lZFwiLCBcIi4uL3NyYy9waG90b3MvbWVudS5zdmdcIik7IC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGNhbGxlZCBQbGFubmVkXHJcblxyXG5zaWRlQmFyT2JqZWN0LmFkZFByb2plY3QobXlEYXkpOyAvLyBhZGQgdGhlIG15RGF5IHByb2plY3QgdG8gdGhlIHNpZGViYXJcclxuXHJcbnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChpbXBvcnRhbnQpOyAvLyBhZGQgdGhlIGltcG9ydGFudCBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyXHJcblxyXG5zaWRlQmFyT2JqZWN0LmFkZFByb2plY3QocGxhbm5lZCk7IC8vIGFkZCB0aGUgcGxhbm5lZCBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyXHJcblxyXG5zaWRlQmFyT2JqZWN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gIHByb2plY3QucmVuZGVyKHNpZGVCYXJPYmplY3QpO1xyXG59KTsgLy8gbG9vcCB0aHJvdWdoIHRoZSBwcm9qZWN0cyBhbmQgY2FsbCB0aGUgZ2V0RE9NRWxlbWVudCBtZXRob2Qgb24gZWFjaCBwcm9qZWN0IHRvIGFwcGVuZCB0aGVtIHRvIHRoZSBzaWRlYmFyXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gbmV3IGFkZFByb2plY3RCdXR0b24oXCJBZGQgUHJvamVjdFwiLCBzaWRlQmFyT2JqZWN0KTsgLy8gY3JlYXRlIGEgbmV3IGJ1dHRvbiBjYWxsZWQgQWRkIFByb2plY3Qgd2l0aCB0aGUgc2lkZWJhck9iamVjdCBiZWluZyBwYXNzZWQgYXMgYW4gYXJndW1lbnRcclxuXHJcbmFkZFByb2plY3RCdG4ucmVuZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXJcIikpOyAvLyByZW5kZXIgdGhlIGJ1dHRvbiB0byB0aGUgc2lkZWJhclxyXG5cclxuY29uc29sZS5sb2coYWRkUHJvamVjdEJ0bik7IC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgYnV0dG9uIGlzIGNyZWF0ZWRcclxuXHJcbmV4cG9ydCBjb25zdCB0b0RvSXRlbUFyZWEgPSBuZXcgVG9Eb0FyZWEoKTsgLy8gY3JlYXRlIGEgbmV3IHRvLWRvIGFyZWFcclxuXHJcbnRvRG9JdGVtQXJlYS5yZW5kZXIoKTsgLy8gcmVuZGVyIHRoZSB0by1kbyBhcmVhXHJcbiIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IFRvRG9JdGVtcyBmcm9tIFwiLi90by1kby1pdGVtc1wiO1xyXG5pbXBvcnQgeyBzaWRlQmFyT2JqZWN0IH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vIHRoaXMgaW1wb3J0cyB0aGUgc2lkZUJhck9iamVjdCBmcm9tIHRoZSBpbmRleC5qcyBmaWxlXHJcbmltcG9ydCB7IHRvRG9JdGVtQXJlYSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIHNpZGVCYXIge1xyXG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgLy8gY29uc3RydWN0b3IgdGFrZXMgaW4gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNpZGViYXIgZWxlbWVudCBhcyBhbiBvYmplY3RcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNpZGViYXIgZWxlbWVudFxyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdOyAvLyBjcmVhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgYW4gZW1wdHkgYXJyYXkgdG8gc3RvcmUgcHJvamVjdHMuXHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc05hbWU7XHJcbiAgfSAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgc2lkZWJhciBlbGVtZW50XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7IC8vIGdldHRlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBwcm9qZWN0cyBhcnJheVxyXG4gIH1cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGdldERPTUVsZW1lbnQocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudEltZy5zcmMgPSBwcm9qZWN0LmdldFBpY3R1cmUoKTsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHByb2plY3QgcGljdHVyZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgdGhpcy5nZXRDbGFzc05hbWUoKS5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7IC8vIGFwcGVuZCBkaXYgY29udGFpbmVyIHRvIHNpZGViYXJcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyXHJcbiAgfSAvLyBtZXRob2QgdG8gY3JlYXRlIGEgcHJvamVjdCBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNpZGViYXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvRG9BcmVhIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcclxuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkYXRlLWhlYWRlclwiKTtcclxuICAgIHRoaXMuYXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8taXRlbXMtYXJlYVwiKTtcclxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpO1xyXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWJ1dHRvblwiKTtcclxuICB9XHJcblxyXG4gIHRvRG9BcmVhSXRlbUNvbGxlY3Rpb24gPSBbXTsgLy8gdG9Eb0l0ZW1zIGdldCBwdXNoZWQgaGVyZS5cclxuXHJcbiAgZ2V0SW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldElucHV0KG5ld0lucHV0VmFsdWUpIHtcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0OyAvLyB0aGlzIHNlbGVjdHMgdGhlIGlucHV0IGFyZWFcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZ2V0QnV0dG9uKCk7IC8vIGdldCB0aGUgYnV0dG9uIGVsZW1lbnRcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5nZXRJbnB1dCgpOyAvLyBnZXQgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW1zKGlucHV0VmFsdWUpOyAvLyB0aGlzIGNyZWF0ZXMgdGhlIHRvLWRvIGl0ZW1zXHJcbiAgICAgIGNvbnN0IHByb2plY3RzID0gc2lkZUJhck9iamVjdC5nZXRQcm9qZWN0cygpOyAvLyB0aGlzIHNlbGVjdHMgYWxsIHRoZSBwcm9qZWN0cyBsb2NhdGVkIHdpdGhpbiB0aGUgc2lkZWJhciBvYmplY3RcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgIHByb2plY3QudG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xyXG4gICAgICAgICAgdG9Eb0l0ZW0ucHJvamVjdCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pOyAvLyB0aGlzIHB1c2hlcyB0aGUgcmVjZW50bHkgY3JlYXRlZCB0by1kby1pdGVtIGludG8gdGhlIGFwcHJvcHJpYXRlIFwiYWN0aXZlXCIgcHJvamVjdFxyXG4gICAgICB0aGlzLnNldElucHV0KFwiXCIpOyAvLyB0aGlzIGVtcHRpZXMgdGhlIGlucHV0IHZhbHVlIGFyZWEgdGV4dCBhZnRlciB0aGUgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWQuXHJcbiAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCB0aGF0IHdpbGwgc3RvcmUgdGhlIHRleHQgYW5kIGRhdGVcclxuICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IC8vY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tLWRvLWl0ZW0gZGVzY3JpcHRpb24gdGV4dFxyXG4gICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgLy8gY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tZG8taXRlbSBkYXRlXHJcbiAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG8tZG8taXRlbVwiKTtcclxuICAgICAgaW5wdXRUZXh0LnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKTsgLy8gc2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBwYXJhZ3JhcGggZWxlbWVudCB0byB0aGUgdG8tZG8taXRlbSBkZXNjcmlwdGlvblxyXG4gICAgICBpbnB1dERhdGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5nZXREYXRlKCk7IC8vIHNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgcGFyYWdyYXBoIGVsZW1lbnQgdG8gdGhlIHRvLWRvLWl0ZW0gZGF0ZVxyXG4gICAgICBpbnB1dEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRUZXh0KTsgLy8gYXBwZW5kcyB0aGUgdGV4dCB0byB0aGUgZGl2IGVsZW1lbnRcclxuICAgICAgaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7IC8vIGFwcGVuZHMgdGhlIGRhdGUgdG8gdGhlIGRpdiBlbGVtZW50XHJcbiAgICAgIHRoaXMuYXJlYS5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpOyAvLyBhcHBlbmRzIHRoZSBkaXYgZWxlbWVudCB0byB0aGUgdG8tZG8taXRlbXMtYXJlYVxyXG4gICAgICB0b0RvSXRlbUFyZWEudG9Eb0FyZWFJdGVtQ29sbGVjdGlvbi5wdXNoKHRvRG9JdGVtKTtcclxuICAgICAgdG9Eb0l0ZW0uaW5wdXRFbGVtZW50LnB1c2goaW5wdXRFbGVtZW50KTsgLy8gdGhpcyBwdXNoZXMgdGhlIGlucHV0IGVsZW1lbnQgdGhhdCB3YXMgZGVyaXZlZCBmcm9tIHRoZSBvYmplZWN0IGludG8gdGhlIG9iamVjdCdzIGFycmF5IGNvbGxlY3Rpb24gYXJlYVxyXG5cclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgWC5pbm5lclRleHQgPSBcIlhcIjtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuYXBwZW5kQ2hpbGQoWCk7XHJcblxyXG4gICAgICAgIFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIHRvRG9JdGVtQXJlYS5hcmVhLnJlbW92ZUNoaWxkKGlucHV0RWxlbWVudCk7IC8vIHRoaXMgcmVtb3ZlcyB0aGUgdG8tZG8taXRlbSB3aGVuIHRoZSBYIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW5FbGVtZW50cyA9IGlucHV0RWxlbWVudC5jaGlsZHJlbjsgLy8gY29sbGVjdHMgYWxsIG9mIHRoZSBjaGlsZHJlbiBlbGVtZW50cyB3aXRoaW4gdGhlIGlucHV0RWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGFycmF5T2ZDaGlsZHJlbkVsZW1lbnRzID0gQXJyYXkuZnJvbShjaGlsZHJlbkVsZW1lbnRzKTsgLy8gdGhpcyBjb252ZXJzdHMgdGhlIGFib3ZlIEhUTUwgY29sbGVjdGlvbiBpbnRvIGFuIGFycmF5XHJcbiAgICAgICAgYXJyYXlPZkNoaWxkcmVuRWxlbWVudHMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgIGlmIChjaGlsZC5pbm5lclRleHQgPT09IFwiWFwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZCk7IC8vIFJlbW92ZSB0aGUgY2hpbGQgZWxlbWVudCB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IC8vIHRoaXMgbG9vcHMgdGhyb3VnaCBhbGwgb2YgdGhlIGVsZW1lbnRzIGFuZCBpZiB0aGUgaW5uZXIgdGV4dCBpcyBqdXN0IFwiWFwiIGl0IHdpbGwgcmVtb3ZlIGl0LlxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmdldElucHV0KCk7IC8vIGdldCB0aGUgaW5wdXQgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IHRvRG9JdGVtID0gbmV3IFRvRG9JdGVtcyhpbnB1dFZhbHVlKTsgLy8gdGhpcyBjcmVhdGVzIHRoZSB0by1kbyBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc2lkZUJhck9iamVjdC5nZXRQcm9qZWN0cygpOyAvLyB0aGlzIHNlbGVjdHMgYWxsIHRoZSBwcm9qZWN0cyBsb2NhdGVkIHdpdGhpbiB0aGUgc2lkZWJhciBvYmplY3RcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QudG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xyXG4gICAgICAgICAgfSAvLyB0aGlzIHB1c2hlcyB0aGUgcmVjZW50bHkgY3JlYXRlZCB0by1kby1pdGVtIGludG8gdGhlIGFwcHJvcHJpYXRlIFwiYWN0aXZlXCIgcHJvamVjdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXQoXCJcIik7IC8vIHRoaXMgZW1wdGllcyB0aGUgaW5wdXQgdmFsdWUgYXJlYSB0ZXh0IGFmdGVyIHRoZSBidXR0b24gaGFzIGJlZW4gcHJlc3NlZC5cclxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgdGhhdCB3aWxsIHN0b3JlIHRoZSB0ZXh0IGFuZCBkYXRlXHJcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IC8vY3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IGZvciB0aGUgdG8tLWRvLWl0ZW0gZGVzY3JpcHRpb24gdGV4dFxyXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyAvLyBjcmVhdGVzIGEgcGFyYWdyYXBoIGVsZW1lbnQgZm9yIHRoZSB0by1kby1pdGVtIGRhdGVcclxuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvLWRvLWl0ZW1cIik7XHJcbiAgICAgICAgaW5wdXRUZXh0LnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKTsgLy8gc2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBwYXJhZ3JhcGggZWxlbWVudCB0byB0aGUgdG8tZG8taXRlbSBkZXNjcmlwdGlvblxyXG4gICAgICAgIGlucHV0RGF0ZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtLmdldERhdGUoKTsgLy8gc2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBwYXJhZ3JhcGggZWxlbWVudCB0byB0aGUgdG8tZG8taXRlbSBkYXRlXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7IC8vIGFwcGVuZHMgdGhlIHRleHQgdG8gdGhlIGRpdiBlbGVtZW50XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7IC8vIGFwcGVuZHMgdGhlIGRhdGUgdG8gdGhlIGRpdiBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5hcmVhLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7IC8vXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy8gSmFudWFyeSBpcyAwIVxyXG4gIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gbW0gKyBcIi9cIiArIGRkICsgXCIvXCIgKyB5eXl5O1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhnZXRUb2RheXNEYXRlKCkpOyAvLyBUaGlzIHdpbGwgcHJpbnQgdGhlIGRhdGUgaW4gTU0vREQvWVlZWSBmb3JtYXRcclxuIiwiaW1wb3J0IHsgVG9Eb0FyZWEgfSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgeyBnZXRUb2RheXNEYXRlIH0gZnJvbSBcIi4vZGF0ZVwiO1xyXG5pbXBvcnQgeyB0b0RvSXRlbUFyZWEgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuY29uc3QgeyBzaWRlQmFyIH0gPSByZXF1aXJlKFwiLi9VSVwiKTsgLy8gaW1wb3J0aW5nIHNpZGViYXIgT2JqZWN0IGNsYXNzXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBwaWN0dXJlID0gXCIuLi9zcmMvcGhvdG9zL21lbnUuc3ZnXCIsIGlzQWN0aXZlID0gZmFsc2UpIHtcclxuICAgIC8vIGNvbnN0cnVjdG9yIHRha2VzIGluIGEgdGl0bGUgYW5kIGEgcGljdHVyZSBzcmNcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdFxyXG4gICAgdGhpcy5waWN0dXJlID0gcGljdHVyZTsgLy8gY3JlYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIHRoZSBwaWN0dXJlIHNyYyBvZiB0aGUgcHJvamVjdFxyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgdG9Eb0l0ZW1zID0gW107IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyBhbiBlbXB0eSBhcnJheSBmb3IgZnV0dXJlIHRvLWRvLWl0ZW1zIHRvIGJlIHBsYWNlZCBpblxyXG5cclxuICBnZXRQaWN0dXJlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGljdHVyZTsgLy8gZ2V0dGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIHBpY3R1cmUgc3JjIG9mIHRoZSBwcm9qZWN0XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlOyAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3RcclxuICB9XHJcbiAgZ2V0VG9Eb0l0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Eb0l0ZW1zOyAvLyBnZXR0ZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgdG8gZG8gaXRlbXMgYXJyYXlcclxuICB9XHJcbiAgYWRkVG9Eb3ModG9Ebykge1xyXG4gICAgdGhpcy50b0RvSXRlbXMucHVzaCh0b0RvKTsgLy8gcHVzaCBhIHRvIGRvIHZhbHVlIGludG8gdGhlIGFwcHJvcGlhdGUgcHJvamVjdCBsaXN0XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0VG9TaWRlQmFyKHNpZGVCYXIpIHtcclxuICAgIHNpZGVCYXIucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZVN0YXR1cygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQWN0aXZlU3RhdHVzVG9UcnVlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBY3RpdmVTdGF0dXNUb0ZhbHNlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHNpZGVCYXIpIHtcclxuICAgIGNvbnN0IHRvRG9BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1hcmVhXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIHRvLWRvLWFyZWEgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICBwcm9qZWN0RWxlbWVudEltZy5zcmMgPSB0aGlzLmdldFBpY3R1cmUoKTsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHByb2plY3QgcGljdHVyZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IC8vIGNyZWF0ZSBhIGgyIGVsZW1lbnRcclxuICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmdldFRpdGxlKCk7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgc2lkZUJhci5nZXRDbGFzc05hbWUoKS5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7IC8vIGFwcGVuZCBkaXYgY29udGFpbmVyIHRvIHNpZGViYXJcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEltZyk7IC8vIGFwcGVuZCBpbWFnZSB0byBkaXYgY29udGFpbmVyXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7IC8vIGFwcGVuZCB0aXRsZSB0byBkaXYgY29udGFpbmVyMVxyXG5cclxuICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXIuZ2V0UHJvamVjdHMoKTsgLy8gdGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIHByb2plY3QgZWxlbWVudHMgY3JlYXRlZFxyXG5cclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBlLnRhcmdldC5pbm5lclRleHQpIHtcclxuICAgICAgICAgIHByb2plY3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgICAgfSk7IC8vIHRoaXMgaXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHByb2plY3QgYW5kIGNvbXBhcmVzIHRoZSB0aXRsZSBvZiB0aGUgY2xpY2tlZCBvbiBET00gRWxlbWVudCB0byB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3QsIHRoZXkgc2hvdWxkIGJlIHRoZSBzYW1lIHNvIGl0IGNoYW1oZXMgdGhlIGFjdHZlIHN0YXR1cyBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudCB0byB0cnVlIGFuZCB0aGUgcmVzdCB0byBmYWxzZS5cclxuXHJcbiAgICAgIHRvRG9BcmVhLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjsgLy8gdGhpcyBhbGxvd3MgZm9yIHRoZSB0by1kby1hcmVhIHRvIGJlIHZpc2libGUgd2hlbiBhIHByb2plY3QgaXMgY2xpY2tlZFxyXG4gICAgICBjb25zdCB0b0RvQXJlYVByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xyXG4gICAgICBsZXQgdG9Eb0FyZWFEYXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWhlYWRlclwiKTtcclxuXHJcbiAgICAgIHRvRG9BcmVhRGF0ZUhlYWRlci5pbm5lclRleHQgPSBnZXRUb2RheXNEYXRlKCk7XHJcblxyXG4gICAgICB0b0RvQXJlYVByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdEVsZW1lbnRUaXRsZS50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgIGNvbnN0IHRvRG9JdGVtc0dlbmVyYWxDb2xsZWN0aW9uID0gdG9Eb0l0ZW1BcmVhLnRvRG9BcmVhSXRlbUNvbGxlY3Rpb247IC8vdGhpcyBpcyBhIHZhcmlhYmxlIGZvciB0aGUgdG9Eb0l0ZW0gT2JqZWN0IHByb3BlcnR5IHRoYXQgaXMgc3RvcmluZyBhbGwgb2YgdGhlIHRvLWRvLWl0ZW0gb2JqZWN0cyB3aGVuZXZlciB0aGV5IGFyZSBpbnRpYWxseSBjcmVhdGVkLiBUaGV5IGFyZSBiZWluZyBjcmVhdGVkIGluIHRoZSBVSSBtb2R1bGUuXHJcbiAgICAgIHRvRG9JdGVtc0dlbmVyYWxDb2xsZWN0aW9uLmZvckVhY2goKHRvRG8pID0+IHtcclxuICAgICAgICBjb25zdCBteVNhdmlvclZhcmlhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1pdGVtcy1hcmVhXCIpOyAvLyBzZWxlY3RzIHRoZSB0by1kby1hcmVhXHJcbiAgICAgICAgY29uc3QgbXlTYXZpb3JWYXJpYWJsZUNvbGxlY3Rpb24gPSBteVNhdmlvclZhcmlhYmxlLmNoaWxkcmVuOyAvLyBjb2xsZWN0cyB0aGUgY2hpbGRyZW4gd2hpY2ggc2hvdWxkIGJlIHRoZSB0by1kby1pdGVtcyBhcyB0aGV5IGFyZSBnZW5lcmF0ZWRcclxuICAgICAgICBjb25zdCBteVNhdmlvclZhcmlhYmxlQXJyYXkgPSBBcnJheS5mcm9tKG15U2F2aW9yVmFyaWFibGVDb2xsZWN0aW9uKTsgLy8gdGhpcyB0cmFuc2Zvcm1zIHRoZSBjb2xsZWN0aW9uIG9mIHRob3NlIGNoaWxkcmVuIGludG8gYW4gYXJyYXlcclxuXHJcbiAgICAgICAgaWYgKHRvRG8ucHJvamVjdCAhPSB0aGlzLmdldFRpdGxlKCkpIHtcclxuICAgICAgICAgIG15U2F2aW9yVmFyaWFibGVBcnJheS5mb3JFYWNoKCh2YXJpYWJsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFyaWFibGUgPT0gdG9Eby5pbnB1dEVsZW1lbnRbMF0pIHtcclxuICAgICAgICAgICAgICB2YXJpYWJsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIEkgbmVlZCBzb21ldGhpbmcgaGVyZSB0byByZWZlcmVuY2UgdGhlIGVsZW1lbnQgdGh0IGlzIGNyZWF0ZWQgZnJvbSB0aGUgdG8tZG8taXRlbSBvYmplY3Qgc28gdGhhdCBJIGNhbiBybWVvdmUgaXQuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0b0RvLnByb2plY3QgPT0gdGhpcy5nZXRUaXRsZSgpKSB7XHJcbiAgICAgICAgICBteVNhdmlvclZhcmlhYmxlQXJyYXkuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlID09IHRvRG8uaW5wdXRFbGVtZW50WzBdKSB7XHJcbiAgICAgICAgICAgICAgdmFyaWFibGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7IC8vIHRoaXMgYWxsb3dzIGZvciB0aGUgcHJvamVjcyBhdHRyaWJ1dGUgdG8gYmUgcmVmZWxjdGVkIGluIHRoZSB0by1kby1hcmVhXHJcblxyXG4gICAgLy8gbWV0aG9kIHRvIGNyZWF0ZSBhIHByb2plY3QgZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBzaWRlYmFyXHJcbiAgfVxyXG59IC8vIENsYXNzIHVzZWQgdG8gY29uc3RydWN0IHRoZSBvcmlnaW5hbCAzIHByb2plY3RzIHRoYXQgd2lsbCBhcHBlYXIgb24gdGhlIHNpZGViYXJcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVkUHJvamVjdHMgZXh0ZW5kcyBQcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHBpY3R1cmUsIGlzQWN0aXZlKSB7XHJcbiAgICBzdXBlcih0aXRsZSwgcGljdHVyZSwgaXNBY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgdG9Eb0l0ZW1zID0gW107IC8vIGNyZWF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyBhbiBlbXB0eSBhcnJheSBmb3IgZnV0dXJlIHRvLWRvLWl0ZW1zIHRvIGJlIHBsYWNlZCBpblxyXG5cclxuICByZW5kZXIoc2lkZUJhcikge1xyXG4gICAge1xyXG4gICAgICBjb25zdCB0b0RvQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tYXJlYVwiKTsgLy8gdGhpcyBzZWxlY3RzIHRoZSB0by1kby1hcmVhIGVsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgbWFuaXB1bGF0ZWRcclxuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjcmVhdGUgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgICBwcm9qZWN0RWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7IC8vIGFkZCBhIGNsYXNzIHRvIHRoZSBkaXYgZWxlbWVudFxyXG5cclxuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAvLyBjcmVhdGUgYW4gaW1hZ2UgZWxlbWVudFxyXG4gICAgICBwcm9qZWN0RWxlbWVudEltZy5zcmMgPSB0aGlzLmdldFBpY3R1cmUoKTsgLy8gc2V0IHRoZSBpbWFnZSBzb3VyY2UgdG8gdGhlIHByb2plY3QgcGljdHVyZVxyXG5cclxuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTsgLy8gY3JlYXRlIGEgaDIgZWxlbWVudFxyXG4gICAgICBwcm9qZWN0RWxlbWVudFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5nZXRUaXRsZSgpOyAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byB0aGUgcHJvamVjdCB0aXRsZVxyXG5cclxuICAgICAgc2lkZUJhci5nZXRDbGFzc05hbWUoKS5jaGlsZHJlblsyXS5hZnRlcihwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7IC8vIGFwcGVuZCBkaXYgY29udGFpbmVyIGFmdGVyIHRoZSBhZGQgcHJvamVjdCBidXR0b25cclxuXHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50SW1nKTsgLy8gYXBwZW5kIGltYWdlIHRvIGRpdiBjb250YWluZXJcclxuXHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50VGl0bGUpOyAvLyBhcHBlbmQgdGl0bGUgdG8gZGl2IGNvbnRhaW5lclxyXG5cclxuICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBzaWRlQmFyLmdldFByb2plY3RzKCk7IC8vIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBwcm9qZWN0IGVsZW1lbnRzIGNyZWF0ZWRcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IGUudGFyZ2V0LmlubmVyVGV4dCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9Eb0FyZWEuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiOyAvLyB0aGlzIGFsbG93cyBmb3IgdGhlIHRvLWRvLWFyZWEgdG8gYmUgdmlzaWJsZSB3aGVuIGEgcHJvamVjdCBpcyBjbGlja2VkXHJcbiAgICAgICAgbGV0IHRvRG9BcmVhUHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXJcIik7IC8vIHRoaXMgc2VsZWN0cyB0aGUgcHJvamVjdCBoZWFkZXIgZWxlbWVudCBzbyB0aGF0IGl0IGNhbiBiZSBtYW5pcHVsYXRlZFxyXG4gICAgICAgIGxldCB0b0RvQXJlYURhdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaGVhZGVyXCIpOyAvLyB0aGlzIHNlbGVjdHMgdGhlIGRhdGUgaGVhZGVyIGVsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgbWFuaXB1bGF0ZWRcclxuICAgICAgICB0b0RvQXJlYURhdGVIZWFkZXIuaW5uZXJUZXh0ID0gZ2V0VG9kYXlzRGF0ZSgpOyAvLyB0aGlzIHNldHMgdGhlIGRhdGUgaGVhZGVyIHRvIHRoZSBjdXJyZW50IGRhdGVcclxuICAgICAgICB0b0RvQXJlYVByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdEVsZW1lbnRUaXRsZS50ZXh0Q29udGVudDsgLy8gdGhpcyBzZXRzIHRoZSBwcm9qZWN0IGhlYWRlciB0byB0aGUgcHJvamVjdCB0aXRsZVxyXG5cclxuICAgICAgICBjb25zdCB0b0RvSXRlbXNHZW5lcmFsQ29sbGVjdGlvbiA9IHRvRG9JdGVtQXJlYS50b0RvQXJlYUl0ZW1Db2xsZWN0aW9uOyAvL3RoaXMgaXMgYSB2YXJpYWJsZSBmb3IgdGhlIHRvRG9JdGVtIE9iamVjdCBwcm9wZXJ0eSB0aGF0IGlzIHN0b3JpbmcgYWxsIG9mIHRoZSB0by1kby1pdGVtIG9iamVjdHMgd2hlbmV2ZXIgdGhleSBhcmUgaW50aWFsbHkgY3JlYXRlZC4gVGhleSBhcmUgYmVpbmcgY3JlYXRlZCBpbiB0aGUgVUkgbW9kdWxlLlxyXG4gICAgICAgIHRvRG9JdGVtc0dlbmVyYWxDb2xsZWN0aW9uLmZvckVhY2goKHRvRG8pID0+IHtcclxuICAgICAgICAgIGNvbnN0IG15U2F2aW9yVmFyaWFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWl0ZW1zLWFyZWFcIik7IC8vIHNlbGVjdHMgdGhlIHRvLWRvLWFyZWFcclxuICAgICAgICAgIGNvbnN0IG15U2F2aW9yVmFyaWFibGVDb2xsZWN0aW9uID0gbXlTYXZpb3JWYXJpYWJsZS5jaGlsZHJlbjsgLy8gY29sbGVjdHMgdGhlIGNoaWxkcmVuIHdoaWNoIHNob3VsZCBiZSB0aGUgdG8tZG8taXRlbXMgYXMgdGhleSBhcmUgZ2VuZXJhdGVkXHJcbiAgICAgICAgICBjb25zdCBteVNhdmlvclZhcmlhYmxlQXJyYXkgPSBBcnJheS5mcm9tKG15U2F2aW9yVmFyaWFibGVDb2xsZWN0aW9uKTsgLy8gdGhpcyB0cmFuc2Zvcm1zIHRoZSBjb2xsZWN0aW9uIG9mIHRob3NlIGNoaWxkcmVuIGludG8gYW4gYXJyYXlcclxuXHJcbiAgICAgICAgICBpZiAodG9Eby5wcm9qZWN0ICE9IHRoaXMuZ2V0VGl0bGUoKSkge1xyXG4gICAgICAgICAgICBteVNhdmlvclZhcmlhYmxlQXJyYXkuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodmFyaWFibGUgPT0gdG9Eby5pbnB1dEVsZW1lbnRbMF0pIHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gSSBuZWVkIHNvbWV0aGluZyBoZXJlIHRvIHJlZmVyZW5jZSB0aGUgZWxlbWVudCB0aHQgaXMgY3JlYXRlZCBmcm9tIHRoZSB0by1kby1pdGVtIG9iamVjdCBzbyB0aGF0IEkgY2FuIHJtZW92ZSBpdC5cclxuICAgICAgICAgIH0gZWxzZSBpZiAodG9Eby5wcm9qZWN0ID09IHRoaXMuZ2V0VGl0bGUoKSkge1xyXG4gICAgICAgICAgICBteVNhdmlvclZhcmlhYmxlQXJyYXkuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodmFyaWFibGUgPT0gdG9Eby5pbnB1dEVsZW1lbnRbMF0pIHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTsgLy8gdGhpcyBhbGxvd3MgZm9yIHRoZSBwcm9qZWNzIGF0dHJpYnV0ZSB0byBiZSByZWZlbGN0ZWQgaW4gdGhlIHRvLWRvLWFyZWFcclxuXHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIFguaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoWCk7XHJcblxyXG4gICAgICAgIFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB0b0RvQXJlYS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjsgLy90aGlzIHNldHMgdGhlIHZpc2liaWxpdHkgdG8gaGlkZGVuIGJ1dCBkb2Vzbid0IGJyaW5nIGl0IGJhY2sgd2hlbiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZFxyXG4gICAgICAgICAgc2lkZUJhci5nZXRDbGFzc05hbWUoKS5yZW1vdmVDaGlsZChwcm9qZWN0RWxlbWVudENvbnRhaW5lcik7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyB0aGlzIHByZXZlbnRzIHRoZSBlbGVtZW50IGZyb20gYnViYmxpbmcgdXAgdG8gdGhlIHBhcmVudCBlbGVtZW50IGFuZCBhbGxvd3MgZm9yIHRoaXMgZXZlbnQgbGlzdGVuZXIgdG8gdHJpZ2dlciB3aXRob3V0IHRyaWdnZXJpbmcgdGhlIHBhcmVudCBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBYID0gcHJvamVjdEVsZW1lbnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcImgxXCIpOyAvLyBBc3N1bWluZyB0aGUgY2hpbGQgZWxlbWVudCBpcyBhIGRpdiwgeW91IGNhbiBtb2RpZnkgdGhpcyBzZWxlY3RvciBiYXNlZCBvbiB5b3VyIGNoaWxkIGVsZW1lbnQncyB0eXBlIG9yIHByb3BlcnRpZXNcclxuXHJcbiAgICAgICAgaWYgKFgpIHtcclxuICAgICAgICAgIHByb2plY3RFbGVtZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKFgpOyAvLyBSZW1vdmUgdGhlIGNoaWxkIGVsZW1lbnQgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBwYXJlbnQgZWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IC8vIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2lkZWJhclxyXG4gIH1cclxufSAvLyB0aGlzIGNsYXNzIGlzIHVzZWQgdG8gY3JlYXRlIHByb2plY3RzIHRoYXQgYXJlIGNyZWF0ZWQgYnkgdGhlIHVzZXIuIFRoaXMgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBwcm9qZWN0cyBjbGFzc1xyXG5cclxuZXhwb3J0IGNsYXNzIGFkZFByb2plY3RCdXR0b24ge1xyXG4gIGNvbnN0cnVjdG9yKGJ1dHRvbk5hbWUsIHNpZGVCYXJPYmplY3QsIHNyYyA9IFwiLi4vc3JjL3Bob3Rvcy9wbHVzLnN2Z1wiKSB7XHJcbiAgICB0aGlzLmJ1dHRvbk5hbWUgPSBidXR0b25OYW1lO1xyXG4gICAgdGhpcy5zcmMgPSBzcmM7IC8vXHJcbiAgICB0aGlzLnNpZGVCYXJPYmplY3QgPSBzaWRlQmFyT2JqZWN0OyAvLyBVcGRhdGUgdGhpcyBsaW5lIHRvIHRha2UgaW4gdGhlIHNpZGViYXIgb2JqZWN0LiBUaGlzIGlzIG5lZWRlZFxyXG4gIH0gLy8gY29uc3RydWN0b3IgdGFrZXMgaW4gdGhlIGJ1dHRvbiBuYW1lIGFzIGFuIG9iamVjdFxyXG5cclxuICByZW5kZXIodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgY29uc3QgYWRkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY3JlYXRlIGEgY29udGFpbmVyIGRpdiBlbGVtZW50XHJcbiAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgYnV0dG9uIGNvbnRhaW5lciBlbGVtbWVudFxyXG5cclxuICAgIGNvbnN0IGFkZEJ1dHRvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XHJcbiAgICBhZGRCdXR0b25JbWcuc3JjID0gdGhpcy5zcmM7IC8vIHNldCB0aGUgaW1hZ2Ugc291cmNlIHRvIHRoZSBzcmMgcHJvcGVydHlcclxuXHJcbiAgICBjb25zdCBhZGRCdXR0b25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTsgLy8gY3JlYXRlIGEgaDIgZWxlbWVudFxyXG4gICAgYWRkQnV0dG9uVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmJ1dHRvbk5hbWU7IC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBidXR0b24gbmFtZSBwcm9wZXJ0eVxyXG5cclxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b25JbWcpOyAvLyBhcHBlbmQgaW1hZ2UgdG8gYnV0dG9uIGNvbnRhaW5lclxyXG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvblRpdGxlKTsgLy8gYXBwZW5kIHRpdGxlIHRvIGJ1dHRvbiBjb250YWluZXJcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGFkZEJ1dHRvbkNvbnRhaW5lcik7IC8vIGFwcGVuZCBidXR0b24gY29udGFpbmVyIHRvIHRhcmdldCBlbGVtZW50XHJcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gdGhpcyBtYWludGFpbnMgdGhlIHNjb3BlIG9mIHRoZSBrZXl3b3JkIHRoaXMgdG8gYmUgdXNlZCBpbiB0aGUgZXZlbnQgbGlzdGVuZXJcclxuXHJcbiAgICBhZGRCdXR0b25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7IC8vIHJlbW92ZSB0aGUgYWRkIHByb2plY3QgYnV0dG9uXHJcblxyXG4gICAgICBjb25zdCBwcm9tcHRfYnV0dG9uX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9tcHRfYnV0dG9uX2NvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyAvLyBjcmVhdGUgYW4gaW5wdXQgZWxlbWVudFxyXG4gICAgICB0aXRsZVByb21wdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTsgLy8gc2V0IHRoZSB0eXBlIG9mIHRoZSBpbnB1dCBlbGVtZW50IHRvIHRleHRcclxuICAgICAgdGl0bGVQcm9tcHQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IE5hbWVcIik7IC8vIHNldCB0aGUgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0IGVsZW1lbnQgdG8gcHJvamVjdCBuYW1lXHJcbiAgICAgIHRpdGxlUHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2lucHV0XCIpO1xyXG5cclxuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgLy8gY3JlYXRlIGEgYnV0dG9uIGVsZW1lbnRcclxuICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJPa1wiOyAvLyBzZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgYnV0dG9uIHRvIHN1Ym1pdFxyXG5cclxuICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgLy8gY3JlYXRlIGEgYnV0dG9uIGVsZW1lbnRcclxuICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjsgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGJ1dHRvbiB0byBjYW5jZWxcclxuXHJcbiAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50XHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQ29udGFpbmVyXCIpOyAvLyBhZGQgYSBjbGFzcyB0byB0aGUgZGl2IGVsZW1lbnRcclxuXHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pOyAvLyBhcHBlbmQgdGhlIHN1Ym1pdCBidXR0b24gdG8gdGhlIGRpdiBlbGVtZW50XHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pOyAvLyBhcHBlbmQgdGhlIGNhbmNlbCBidXR0b24gdG8gdGhlIGRpdiBlbGVtZW50XHJcblxyXG4gICAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHByb21wdF9idXR0b25fY29udGFpbmVyKTtcclxuXHJcbiAgICAgIHByb21wdF9idXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlUHJvbXB0KTsgLy8gYXBwZW5kIHRoZSBpbnB1dCBlbGVtZW50IHRvIHRoZSB0YXJnZXQgZWxlbWVudFxyXG4gICAgICBwcm9tcHRfYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpOyAvLyBhcHBlbmQgdGhlIGJ1dHRvbiBjb250YWluZXIgdG8gdGhlIHRhcmdldCBlbGVtZW50XHJcblxyXG4gICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qT2JqID0gbmV3IENyZWF0ZWRQcm9qZWN0cyh0aXRsZVByb21wdC52YWx1ZSk7IC8vIGNyZWF0ZXMgYSBuZXcgb2JqZWN0IHdpdGggdGl0bGVcclxuXHJcbiAgICAgICAgaWYgKCF0aXRsZVByb21wdC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICBwcm9tcHRfYnV0dG9uX2NvbnRhaW5lci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICBuZXdQcm9qT2JqLnJlbmRlcih0aGlzLnNpZGVCYXJPYmplY3QpO1xyXG5cclxuICAgICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgICAgICAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGl0bGVQcm9tcHQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XHJcbiAgICAgICAgICB0aXRsZVByb21wdC5wbGFjZWhvbGRlciA9IFwiSW5wdXQgdmFsdWUgY2Fubm90IGJlIGVtcHR5XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNpZGVCYXJPYmplY3QuYWRkUHJvamVjdChuZXdQcm9qT2JqKTsgLy8gdGhpcyBhZGRzIHRoZSBuZXdseSBjcmVhdGVkIG9iamVjdCB0byB0aGUgc2llZGViYXJPYmplY3RzIGxpc3RcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBwcm9tcHRfYnV0dG9uX2NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pOyAvLyB1dGlsaXplIGFycm93IGZ1bmN0aW9uIHRvIG1haW50YWluIHNjb3BlIG9mIFwidGhpc1wiIGtleXdvcmRcclxuICB9IC8vIG1ldGhvZCB0byBjcmVhdGUgYSBkaXYgZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBzaWRlYmFyXHJcbn0gLy8gdGhpcyBjbGFzcyBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYWRkIHByb2plY3QgYnV0dG9uIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxyXG4iLCJpbXBvcnQgeyBnZXRUb2RheXNEYXRlIH0gZnJvbSBcIi4vZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0l0ZW1zIHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgZGF0ZSA9IGdldFRvZGF5c0RhdGUoKSkge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyAvLyB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSB0by1kby1pdGVtIGdlbmVyYXRlZCBmcm9tIHVzZXIgaW5wdXRcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7IC8vIHRoaXMgaXMgdGhlIGRhdGUgdGhhdCBpcyBnb2luZyB0byBiZSBjcmVhdGVkIG9uIHRoZSB0by1kbyBsaXN0IGJhc2VkIG9mZiB0aGUgZGF0ZSB0aGF0IGl0IHdhcyBjcmVhdGVkLlxyXG4gICAgdGhpcy5wcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRFbGVtZW50ID0gW107XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG4gIGdldERhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICB9XHJcbiAgc2V0RHVlRGF0ZShuZXdEYXRlKSB7XHJcbiAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xyXG4gIH1cclxuICBtYXJrQ29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9