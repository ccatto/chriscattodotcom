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

/***/ "(app-pages-browser)/./app/components/NavCatto/NavCatto.tsx":
/*!**********************************************!*\
  !*** ./app/components/NavCatto/NavCatto.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Utils_useScreenSize_useScreenSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/useScreenSize/useScreenSize */ \"(app-pages-browser)/./app/components/Utils/useScreenSize/useScreenSize.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React from 'react';\n\n\n\nconst NavCatto = ()=>{\n    _s();\n    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setIsNavOpen(!isNavOpen);\n    };\n    const screenSize = (0,_Utils_useScreenSize_useScreenSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    console.log(\"screenSize.width === \", screenSize.width);\n    //   if (screenSize.width < 800) {\n    //         console.log('asdf');\n    //     setIsNavOpen(false);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"yo Nav Catto\"\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.ChrisCatto.com/\",\n                            className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/Chris-Catto-dot-com.png\",\n                                    width: 226,\n                                    height: 105,\n                                    className: \"hidden md:block\",\n                                    alt: \"Chris Catto .com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"self-center text-2xl font-semibold whitespace-nowrap dark:text-white\",\n                                    children: \"Chris Catto.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClick,\n                            type: \"button\",\n                            className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                            \"aria-controls\": \"navbar-default\",\n                            \"aria-expanded\": \"false\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Open main menu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"w-5 h-5\",\n                                    \"aria-hidden\": \"true\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 17 14\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        stroke: \"currentColor\",\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M1 1h15M1 7h15M1 13h15\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white\",\n                            children: \"above\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"fill-current h-3 w-3 \".concat(isNavOpen ? \"hidden\" : \"block\"),\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"below\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 33\n                        }, undefined),\n                        !isNavOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:block md:w-auto\",\n                            id: \"navbar-default\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500\",\n                                            \"aria-current\": \"page\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Pricing\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(NavCatto, \"dE8QXyG/VlLrPIpacYypz2Uatjk=\", false, function() {\n    return [\n        _Utils_useScreenSize_useScreenSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = NavCatto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavCatto);\nvar _c;\n$RefreshReg$(_c, \"NavCatto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkNhdHRvL05hdkNhdHRvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLDZCQUE2QjtBQUNXO0FBRVQ7QUFDa0M7QUFFakUsTUFBTUksV0FBVzs7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTU0sY0FBYztRQUNkRCxhQUFhLENBQUNEO0lBQ2xCO0lBQ0YsTUFBTUcsYUFBYUwsOEVBQWFBO0lBQ2hDTSxRQUFRQyxHQUFHLENBQUMseUJBQXlCRixXQUFXRyxLQUFLO0lBQ3ZELGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLE1BQU07SUFDSixxQkFDRTs7MEJBQ0ksOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFJQyxXQUFVOzBCQUVYLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFFQyxNQUFLOzRCQUE4QkgsV0FBVTs7OENBQ3BELDhEQUFDWixrREFBS0E7b0NBQ0pnQixLQUFJO29DQUNKUCxPQUFPO29DQUNQUSxRQUFRO29DQUNSTCxXQUFVO29DQUNWTSxLQUFJOzs7Ozs7OENBR0UsOERBQUNDO29DQUFLUCxXQUFVOzhDQUF1RTs7Ozs7Ozs7Ozs7O3NDQUUzRiw4REFBQ1E7NEJBQU9DLFNBQVNoQjs0QkFBYWlCLE1BQUs7NEJBQVNWLFdBQVU7NEJBQTRPVyxpQkFBYzs0QkFBaUJDLGlCQUFjOzs4Q0FDM1UsOERBQUNMO29DQUFLUCxXQUFVOzhDQUFVOzs7Ozs7OENBQzFCLDhEQUFDYTtvQ0FBSWIsV0FBVTtvQ0FBVWMsZUFBWTtvQ0FBT0MsT0FBTTtvQ0FBNkJDLE1BQUs7b0NBQU9DLFNBQVE7OENBQy9GLDRFQUFDQzt3Q0FBS0MsUUFBTzt3Q0FBZUMsa0JBQWU7d0NBQVFDLG1CQUFnQjt3Q0FBUUMsZ0JBQWE7d0NBQUlDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQWV0Ryw4REFBQ3pCOzRCQUFHRSxXQUFVO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDYTs0QkFDR2IsV0FBVyx3QkFBdUQsT0FBL0JULFlBQVksV0FBVzs0QkFDMUQwQixTQUFROzRCQUNSRixPQUFNOzs7Ozs7c0NBRU0sOERBQUNqQjtzQ0FBRzs7Ozs7O3dCQUNuQixDQUFDUCwyQkFDRiw4REFBQ1U7NEJBQUlELFdBQVU7NEJBQTRCd0IsSUFBRztzQ0FDMUMsNEVBQUNDO2dDQUFHekIsV0FBVTs7a0RBQ1YsOERBQUMwQjtrREFDRCw0RUFBQ3hCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVOzRDQUFpSTJCLGdCQUFhO3NEQUFPOzs7Ozs7Ozs7OztrREFFM0ssOERBQUNEO2tEQUNELDRFQUFDeEI7NENBQUVDLE1BQUs7NENBQUlILFdBQVU7c0RBQWtQOzs7Ozs7Ozs7OztrREFFeFEsOERBQUMwQjtrREFDRCw0RUFBQ3hCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7a0RBRXhRLDhEQUFDMEI7a0RBQ0QsNEVBQUN4Qjs0Q0FBRUMsTUFBSzs0Q0FBSUgsV0FBVTtzREFBa1A7Ozs7Ozs7Ozs7O2tEQUV4USw4REFBQzBCO2tEQUNELDRFQUFDeEI7NENBQUVDLE1BQUs7NENBQUlILFdBQVU7c0RBQWtQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdoUztHQWpGTVY7O1FBS2VELDBFQUFhQTs7O0tBTDVCQztBQWtGTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9OYXZDYXR0by9OYXZDYXR0by50c3g/OGQ3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgdXNlU2NyZWVuU2l6ZSBmcm9tICcuLi9VdGlscy91c2VTY3JlZW5TaXplL3VzZVNjcmVlblNpemUnO1xuXG5jb25zdCBOYXZDYXR0byA9ICgpID0+IHtcbiAgY29uc3QgW2lzTmF2T3Blbiwgc2V0SXNOYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTmF2T3BlbighaXNOYXZPcGVuKTtcbiAgICB9O1xuICBjb25zdCBzY3JlZW5TaXplID0gdXNlU2NyZWVuU2l6ZSgpO1xuICBjb25zb2xlLmxvZygnc2NyZWVuU2l6ZS53aWR0aCA9PT0gJywgc2NyZWVuU2l6ZS53aWR0aCk7XG4vLyAgIGlmIChzY3JlZW5TaXplLndpZHRoIDwgODAwKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdhc2RmJyk7XG4vLyAgICAgc2V0SXNOYXZPcGVuKGZhbHNlKTtcbi8vICAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxoMT55byBOYXYgQ2F0dG88L2gxPlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCBmaXhlZCB3LWZ1bGwgei0yMCB0b3AtMCBzdGFydC0wIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICB7LyogPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgZGFyazpiZy1ncmF5LTkwMFwiPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byBwLTRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuQ2hyaXNDYXR0by5jb20vXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHJ0bDpzcGFjZS14LXJldmVyc2VcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvQ2hyaXMtQ2F0dG8tZG90LWNvbS5wbmdcIlxuICAgICAgICAgICAgICB3aWR0aD17MjI2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwNX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCJcbiAgICAgICAgICAgICAgYWx0PVwiQ2hyaXMgQ2F0dG8gLmNvbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2Zsb3diaXRlLmNvbS9kb2NzL2ltYWdlcy9sb2dvLnN2Z1wiIGNsYXNzTmFtZT1cImgtOFwiIGFsdD1cIkNocmlzIENhdHRvIExvZ29cIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5DaHJpcyBDYXR0by5jb208L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIHctMTAgaC0xMCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXItZGVmYXVsdFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTcgMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTEgMWgxNU0xIDdoMTVNMSAxM2gxNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gZGF0YS1jb2xsYXBzZS10b2dnbGU9XCJuYXZiYXItZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIHctMTAgaC0xMCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXItZGVmYXVsdFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTcgMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTEgMWgxNU0xIDdoMTVNMSAxM2gxNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgIHsvKiAke2lzTmF2T3BlbiA/IFwiaGlkZGVuXCIgOiBcImJsb2NrXCJ9ICovfVxuICAgICAgICAgICAgICAgIHsvKiB7aXNOYXZPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgbWQ6YmxvY2sgbWQ6dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUnPkJsYSBCbGFoPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPmFib3ZlPC9oMT5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCBoLTMgdy0zICR7aXNOYXZPcGVuID8gXCJoaWRkZW5cIiA6IFwiYmxvY2tcIn1gfVxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+YmVsb3c8L2gxPlxuICAgICAgICAgICAgICAgIHshaXNOYXZPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDpibG9jayBtZDp3LWF1dG9cIiBpZD1cIm5hdmJhci1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBmbGV4IGZsZXgtY29sIHAtNCBtZDpwLTAgbXQtNCBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbGcgYmctZ3JheS01MCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggcnRsOnNwYWNlLXgtcmV2ZXJzZSBtZDptdC0wIG1kOmJvcmRlci0wIG1kOmJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgbWQ6ZGFyazpiZy1ncmF5LTkwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkIG1kOmJnLXRyYW5zcGFyZW50IG1kOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOnRleHQtYmx1ZS01MDBcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5QcmljaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgPC8+XG5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTmF2Q2F0dG8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwidXNlU2NyZWVuU2l6ZSIsIk5hdkNhdHRvIiwiaXNOYXZPcGVuIiwic2V0SXNOYXZPcGVuIiwiaGFuZGxlQ2xpY2siLCJzY3JlZW5TaXplIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaDEiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsInNyYyIsImhlaWdodCIsImFsdCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCIsImlkIiwidWwiLCJsaSIsImFyaWEtY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavCatto/NavCatto.tsx\n"));

/***/ })

});