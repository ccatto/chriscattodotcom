"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/HomeCatto/HomeCatto.tsx":
/*!************************************************!*\
  !*** ./app/components/HomeCatto/HomeCatto.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CarouselCatto2_CarouselCatto2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CarouselCatto2/CarouselCatto2 */ \"(app-pages-browser)/./app/components/CarouselCatto2/CarouselCatto2.tsx\");\n\n\nconst DATA = [\n    {\n        image: \"/images/Chris-Catto-Sunrise.jpg\"\n    },\n    {\n        image: \"/hero-mobile.png\"\n    },\n    {\n        image: \"/Catto.png\"\n    }\n];\nconst HomeCatto = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-96\",\n            children: [\n                \"Main Text\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"above Carousel \"\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/HomeCatto/HomeCatto.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarouselCatto2_CarouselCatto2__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    data: DATA\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/HomeCatto/HomeCatto.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"below Carousel \"\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/HomeCatto/HomeCatto.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/HomeCatto/HomeCatto.tsx\",\n            lineNumber: 12,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n_c = HomeCatto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeCatto);\nvar _c;\n$RefreshReg$(_c, \"HomeCatto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hvbWVDYXR0by9Ib21lQ2F0dG8udHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFHOEQ7QUFDOUQsTUFBTUMsT0FBTztJQUFDO1FBQUVDLE9BQU87SUFBa0M7SUFDeEQ7UUFBRUEsT0FBTztJQUFtQjtJQUM1QjtRQUFFQSxPQUFPO0lBQWE7Q0FBRTtBQUV6QixNQUFNQyxZQUFZO0lBQ2QscUJBQ0U7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7O2dCQUFPOzhCQVNsQiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFFSiw4REFBQ04sc0VBQWNBO29CQUFDTyxNQUFNTjs7Ozs7OzhCQUN0Qiw4REFBQ087OEJBQUc7Ozs7Ozs7Ozs7Ozs7QUFJaEI7S0FuQklMO0FBb0JKLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hvbWVDYXR0by9Ib21lQ2F0dG8udHN4PzQ0NWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBDYXJvdXNlbENhdHRvIGZyb20gXCIuLi9DYXJvdXNlbENhdHRvL0Nhcm91c2VsQ2F0dG9cIjtcbmltcG9ydCBDYXJvdXNlbFNpbXBsZSBmcm9tIFwiLi4vQ2Fyb3VzZWxTaW1wbGUvQ2Fyb3VzZWxTaW1wbGVcIjtcbmltcG9ydCBDYXJvdXNlbENhdHRvMiBmcm9tIFwiLi4vQ2Fyb3VzZWxDYXR0bzIvQ2Fyb3VzZWxDYXR0bzJcIjtcbmNvbnN0IERBVEEgPSBbeyBpbWFnZTogXCIvaW1hZ2VzL0NocmlzLUNhdHRvLVN1bnJpc2UuanBnXCIgfSxcbiB7IGltYWdlOiBcIi9oZXJvLW1vYmlsZS5wbmdcIiB9LCBcbiB7IGltYWdlOiBcIi9DYXR0by5wbmdcIiB9XVxuXG5jb25zdCBIb21lQ2F0dG8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTk2XCI+XG4gICAgICAgICAgICAgIE1haW4gVGV4dFxuXG4gICAgICAgICAgICAgIHsvKiA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMjAgcm91bmRlZC1mdWxsIHctOTYgaC05NlwiIFxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvQ2hyaXMtQ2F0dG8tU3VucmlzZS5qcGdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszNzR9XG4gICAgICAgICAgICAgICAgYWx0PVwiQ2hyaXMgQ2F0dG8gU3VucmlzZVwiLz4gKi99XG4gICAgICAgICAgICAgIDxoMz5hYm92ZSBDYXJvdXNlbCA8L2gzPlxuICAgICAgICAgICAgICB7LyogPENhcm91c2VsU2ltcGxlLz4gKi99XG4gICAgICAgICAgICAgIDxDYXJvdXNlbENhdHRvMiBkYXRhPXtEQVRBfS8+XG4gICAgICAgICAgICAgIDxoND5iZWxvdyBDYXJvdXNlbCA8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVDYXR0b1xuICAiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDYXR0bzIiLCJEQVRBIiwiaW1hZ2UiLCJIb21lQ2F0dG8iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImRhdGEiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/HomeCatto/HomeCatto.tsx\n"));

/***/ })

});