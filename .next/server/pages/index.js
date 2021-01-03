module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cardelement.js":
/*!***********************************!*\
  !*** ./components/cardelement.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cardelement; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/stefano/Desktop/nextjsapp/components/cardelement.js\";\n\nfunction Cardelement() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"col-md-6\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        children: \"Card Title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Subtitle, {\n        className: \"mb-2 text-muted\",\n        children: \"Card Subtitle\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        children: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Link, {\n        href: \"#\",\n        children: \"Card Link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Link, {\n        href: \"#\",\n        children: \"Another Link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRlbGVtZW50LmpzP2NlNmMiXSwibmFtZXMiOlsiQ2FyZGVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFHZSxTQUFTQSxXQUFULEdBQXVCO0FBQ2xDLHNCQUNJLHFFQUFDLG9EQUFEO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUEsMkJBQ0EscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsOEJBQ0UscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxvREFBRCxDQUFNLFFBQU47QUFBZSxpQkFBUyxFQUFDLGlCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFPRSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxZQUFJLEVBQUMsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFXLFlBQUksRUFBQyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJkZWxlbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT5DYXJkIFRpdGxlPC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPkNhcmQgU3VidGl0bGU8L0NhcmQuU3VidGl0bGU+XG4gICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXG4gICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXG4gICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgICAgPENhcmQuTGluayBocmVmPVwiI1wiPkNhcmQgTGluazwvQ2FyZC5MaW5rPlxuICAgICAgICAgIDxDYXJkLkxpbmsgaHJlZj1cIiNcIj5Bbm90aGVyIExpbms8L0NhcmQuTGluaz5cbiAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICA8L0NhcmQ+XG5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cardelement.js\n");

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/stefano/Desktop/nextjsapp/components/footer.js\";\nfunction Footer(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n    className: \"text-center\",\n    children: [\"Powered by \", props.name]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcz82ODgzIl0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2UsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDbEMsc0JBQ0k7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBQSw4QkFDZ0JBLEtBQUssQ0FBQ0MsSUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBQb3dlcmVkIGJ5IHtwcm9wcy5uYW1lfVxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ }),

/***/ "./components/grid.js":
/*!****************************!*\
  !*** ./components/grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Grid; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cardelement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardelement */ \"./components/cardelement.js\");\n\nvar _jsxFileName = \"/Users/stefano/Desktop/nextjsapp/components/grid.js\";\n\n\nfunction Grid() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_cardelement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_cardelement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_cardelement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_cardelement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQuanM/MmFkMCJdLCJuYW1lcyI6WyJHcmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUMzQixzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDJCQUNFLHFFQUFDLG1EQUFEO0FBQUEsOEJBQ0UscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ncmlkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCBDYXJkZWxlbWVudCBmcm9tICcuL2NhcmRlbGVtZW50J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENhcmRlbGVtZW50PjwvQ2FyZGVsZW1lbnQ+XG4gICAgICAgICAgICA8Q2FyZGVsZW1lbnQ+PC9DYXJkZWxlbWVudD5cbiAgICAgICAgICAgIDxDYXJkZWxlbWVudD48L0NhcmRlbGVtZW50PlxuICAgICAgICAgICAgPENhcmRlbGVtZW50PjwvQ2FyZGVsZW1lbnQ+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/grid.js\n");

/***/ }),

/***/ "./components/navbarmenu.js":
/*!**********************************!*\
  !*** ./components/navbarmenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavbarMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/stefano/Desktop/nextjsapp/components/navbarmenu.js\";\n\nfunction NavbarMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    expand: \"lg\",\n    fixed: \"top\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n      href: \"#home\",\n      children: \"NEXTJS Test\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Toggle, {\n      \"aria-controls\": \"basic-navbar-nav\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Collapse, {\n      id: \"basic-navbar-nav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n        className: \"mr-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          href: \"#home\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          href: \"#link\",\n          children: \"Link\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"], {\n          title: \"Dropdown\",\n          id: \"basic-nav-dropdown\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.1\",\n            children: \"Action\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.2\",\n            children: \"Another action\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.3\",\n            children: \"Something\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Divider, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.4\",\n            children: \"Separated link\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhcm1lbnUuanM/NTkwNSJdLCJuYW1lcyI6WyJOYXZiYXJNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR2UsU0FBU0EsVUFBVCxHQUFzQjtBQUNqQyxzQkFDSSxxRUFBQyxzREFBRDtBQUFRLE1BQUUsRUFBQyxNQUFYO0FBQWtCLFdBQU8sRUFBQyxNQUExQjtBQUFpQyxVQUFNLEVBQUMsSUFBeEM7QUFBNkMsU0FBSyxFQUFDLEtBQW5EO0FBQUEsNEJBQ0EscUVBQUMsc0RBQUQsQ0FBUSxLQUFSO0FBQWMsVUFBSSxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQSxxRUFBQyxzREFBRCxDQUFRLE1BQVI7QUFBZSx1QkFBYztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQSxxRUFBQyxzREFBRCxDQUFRLFFBQVI7QUFBaUIsUUFBRSxFQUFDLGtCQUFwQjtBQUFBLDZCQUNFLHFFQUFDLG1EQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0UscUVBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsY0FBSSxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxjQUFJLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLDJEQUFEO0FBQWEsZUFBSyxFQUFDLFVBQW5CO0FBQThCLFlBQUUsRUFBQyxvQkFBakM7QUFBQSxrQ0FDRSxxRUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsZ0JBQUksRUFBQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixnQkFBSSxFQUFDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0UscUVBQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLGdCQUFJLEVBQUMsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRSxxRUFBQywyREFBRCxDQUFhLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFLHFFQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixnQkFBSSxFQUFDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkgiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhcm1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyTWVudSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiPk5FWFRKUyBUZXN0PC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5MaW5rPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIkRyb3Bkb3duXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4xXCI+QWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjJcIj5Bbm90aGVyIGFjdGlvbjwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4zXCI+U29tZXRoaW5nPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIj5TZXBhcmF0ZWQgbGluazwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbarmenu.js\n");

/***/ }),

/***/ "./components/title.js":
/*!*****************************!*\
  !*** ./components/title.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageTitle; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/stefano/Desktop/nextjsapp/components/title.js\";\n\nfunction PageTitle() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Jumbotron\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Hello, world!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        variant: \"primary\",\n        children: \"Learn more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 13\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RpdGxlLmpzPzQ3ZTMiXSwibmFtZXMiOlsiUGFnZVRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR2UsU0FBU0EsU0FBVCxHQUFxQjtBQUNoQyxzQkFDUSxxRUFBQyx5REFBRDtBQUFBLDRCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBTUE7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQVlIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90aXRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEp1bWJvdHJvbiwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VUaXRsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEp1bWJvdHJvbj5cbiAgICAgICAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBzaW1wbGUgaGVybyB1bml0LCBhIHNpbXBsZSBqdW1ib3Ryb24tc3R5bGUgY29tcG9uZW50IGZvciBjYWxsaW5nXG4gICAgICAgICAgICAgICAgZXh0cmEgYXR0ZW50aW9uIHRvIGZlYXR1cmVkIGNvbnRlbnQgb3IgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+TGVhcm4gbW9yZTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/title.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbarmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbarmenu */ \"./components/navbarmenu.js\");\n/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/grid */ \"./components/grid.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/title */ \"./components/title.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n\nvar _jsxFileName = \"/Users/stefano/Desktop/nextjsapp/pages/index.js\";\n // Bootstrap Components\n\n // Custom Components\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    fluid: true,\n    className: \"nopad\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"NextJS App Test\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_navbarmenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      name: \"Stefex\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFLHFFQUFDLHlEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRSxxRUFBQywwREFBRDtBQUFRLFVBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBCb290c3RyYXAgQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG4vLyBDdXN0b20gQ29tcG9uZW50c1xuaW1wb3J0IE5hdmJhck1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXJtZW51J1xuaW1wb3J0IEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9ncmlkJ1xuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3RpdGxlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwibm9wYWRcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dEpTIEFwcCBUZXN0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG5cbiAgICAgIDxOYXZiYXJNZW51PjwvTmF2YmFyTWVudT5cbiAgICAgIDxQYWdlVGl0bGU+PC9QYWdlVGl0bGU+XG4gICAgICA8R3JpZD48L0dyaWQ+XG4gICAgICA8Rm9vdGVyIG5hbWU9XCJTdGVmZXhcIj48L0Zvb3Rlcj5cbiAgICAgICAgXG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });