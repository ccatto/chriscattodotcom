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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Utils_useScreenSize_useScreenSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/useScreenSize/useScreenSize */ \"(app-pages-browser)/./app/components/Utils/useScreenSize/useScreenSize.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React from 'react';\n\n\n\nconst NavCatto = ()=>{\n    _s();\n    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setIsNavOpen(!isNavOpen);\n    };\n    const screenSize = (0,_Utils_useScreenSize_useScreenSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    console.log(\"screenSize.width === \", screenSize.width);\n    //   if (screenSize.width < 800) {\n    //         console.log('asdf');\n    //     setIsNavOpen(false);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"yo Nav Catto\"\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.ChrisCatto.com/\",\n                            className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/Chris-Catto-dot-com.png\",\n                                    width: 226,\n                                    height: 105,\n                                    className: \"hidden md:block\",\n                                    alt: \"Chris Catto .com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"self-center text-2xl font-semibold whitespace-nowrap dark:text-white\",\n                                    children: \"Chris Catto.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClick,\n                            type: \"button\",\n                            className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                            \"aria-controls\": \"navbar-default\",\n                            \"aria-expanded\": \"false\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Open main menu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"w-5 h-5\",\n                                    \"aria-hidden\": \"true\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 17 14\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        stroke: \"currentColor\",\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M1 1h15M1 7h15M1 13h15\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white\",\n                            children: \"above\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" \".concat(isNavOpen ? \"hidden\" : \"block\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-white\",\n                                children: \"inside\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"fill-current h-3 w-3 \".concat(isNavOpen ? \"hidden\" : \"block\"),\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white\",\n                            children: \"below\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 33\n                        }, undefined),\n                        !isNavOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:block md:w-auto\",\n                            id: \"navbar-default\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500\",\n                                            \"aria-current\": \"page\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Pricing\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/NavCatto/NavCatto.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(NavCatto, \"dE8QXyG/VlLrPIpacYypz2Uatjk=\", false, function() {\n    return [\n        _Utils_useScreenSize_useScreenSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = NavCatto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavCatto);\nvar _c;\n$RefreshReg$(_c, \"NavCatto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkNhdHRvL05hdkNhdHRvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLDZCQUE2QjtBQUNXO0FBRVQ7QUFDa0M7QUFFakUsTUFBTUksV0FBVzs7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTU0sY0FBYztRQUNkRCxhQUFhLENBQUNEO0lBQ2xCO0lBQ0YsTUFBTUcsYUFBYUwsOEVBQWFBO0lBQ2hDTSxRQUFRQyxHQUFHLENBQUMseUJBQXlCRixXQUFXRyxLQUFLO0lBQ3ZELGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLE1BQU07SUFDSixxQkFDRTs7MEJBQ0ksOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFJQyxXQUFVOzBCQUVYLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFFQyxNQUFLOzRCQUE4QkgsV0FBVTs7OENBQ3BELDhEQUFDWixrREFBS0E7b0NBQ0pnQixLQUFJO29DQUNKUCxPQUFPO29DQUNQUSxRQUFRO29DQUNSTCxXQUFVO29DQUNWTSxLQUFJOzs7Ozs7OENBR0UsOERBQUNDO29DQUFLUCxXQUFVOzhDQUF1RTs7Ozs7Ozs7Ozs7O3NDQUUzRiw4REFBQ1E7NEJBQU9DLFNBQVNoQjs0QkFBYWlCLE1BQUs7NEJBQVNWLFdBQVU7NEJBQTRPVyxpQkFBYzs0QkFBaUJDLGlCQUFjOzs4Q0FDM1UsOERBQUNMO29DQUFLUCxXQUFVOzhDQUFVOzs7Ozs7OENBQzFCLDhEQUFDYTtvQ0FBSWIsV0FBVTtvQ0FBVWMsZUFBWTtvQ0FBT0MsT0FBTTtvQ0FBNkJDLE1BQUs7b0NBQU9DLFNBQVE7OENBQy9GLDRFQUFDQzt3Q0FBS0MsUUFBTzt3Q0FBZUMsa0JBQWU7d0NBQVFDLG1CQUFnQjt3Q0FBUUMsZ0JBQWE7d0NBQUlDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQWV0Ryw4REFBQ3pCOzRCQUFHRSxXQUFVO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDQzs0QkFBSUQsV0FBVyxJQUFtQyxPQUEvQlQsWUFBWSxXQUFXO3NDQUN2Qyw0RUFBQ087Z0NBQUdFLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7O3NDQUcvQiw4REFBQ2E7NEJBQ0diLFdBQVcsd0JBQXVELE9BQS9CVCxZQUFZLFdBQVc7NEJBQzFEMEIsU0FBUTs0QkFDUkYsT0FBTTs7Ozs7O3NDQUVNLDhEQUFDakI7NEJBQUdFLFdBQVU7c0NBQWE7Ozs7Ozt3QkFDMUMsQ0FBQ1QsMkJBQ0YsOERBQUNVOzRCQUFJRCxXQUFVOzRCQUE0QndCLElBQUc7c0NBQzFDLDRFQUFDQztnQ0FBR3pCLFdBQVU7O2tEQUNWLDhEQUFDMEI7a0RBQ0QsNEVBQUN4Qjs0Q0FBRUMsTUFBSzs0Q0FBSUgsV0FBVTs0Q0FBaUkyQixnQkFBYTtzREFBTzs7Ozs7Ozs7Ozs7a0RBRTNLLDhEQUFDRDtrREFDRCw0RUFBQ3hCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7a0RBRXhRLDhEQUFDMEI7a0RBQ0QsNEVBQUN4Qjs0Q0FBRUMsTUFBSzs0Q0FBSUgsV0FBVTtzREFBa1A7Ozs7Ozs7Ozs7O2tEQUV4USw4REFBQzBCO2tEQUNELDRFQUFDeEI7NENBQUVDLE1BQUs7NENBQUlILFdBQVU7c0RBQWtQOzs7Ozs7Ozs7OztrREFFeFEsOERBQUMwQjtrREFDRCw0RUFBQ3hCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaFM7R0FyRk1WOztRQUtlRCwwRUFBYUE7OztLQUw1QkM7QUFzRk4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2Q2F0dG8vTmF2Q2F0dG8udHN4PzhkNzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHVzZVNjcmVlblNpemUgZnJvbSAnLi4vVXRpbHMvdXNlU2NyZWVuU2l6ZS91c2VTY3JlZW5TaXplJztcblxuY29uc3QgTmF2Q2F0dG8gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc05hdk9wZW4sIHNldElzTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRJc05hdk9wZW4oIWlzTmF2T3Blbik7XG4gICAgfTtcbiAgY29uc3Qgc2NyZWVuU2l6ZSA9IHVzZVNjcmVlblNpemUoKTtcbiAgY29uc29sZS5sb2coJ3NjcmVlblNpemUud2lkdGggPT09ICcsIHNjcmVlblNpemUud2lkdGgpO1xuLy8gICBpZiAoc2NyZWVuU2l6ZS53aWR0aCA8IDgwMCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnYXNkZicpO1xuLy8gICAgIHNldElzTmF2T3BlbihmYWxzZSk7XG4vLyAgIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8aDE+eW8gTmF2IENhdHRvPC9oMT5cblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS05MDAgZml4ZWQgdy1mdWxsIHotMjAgdG9wLTAgc3RhcnQtMCBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS02MDBcIj5cbiAgICAgICAgey8qIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIGRhcms6YmctZ3JheS05MDBcIj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gcC00XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LkNocmlzQ2F0dG8uY29tL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBydGw6c3BhY2UteC1yZXZlcnNlXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL0NocmlzLUNhdHRvLWRvdC1jb20ucG5nXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezIyNn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxMDV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgICAgIGFsdD1cIkNocmlzIENhdHRvIC5jb21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9mbG93Yml0ZS5jb20vZG9jcy9pbWFnZXMvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJoLThcIiBhbHQ9XCJDaHJpcyBDYXR0byBMb2dvXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+Q2hyaXMgQ2F0dG8uY29tPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiB3LTEwIGgtMTAganVzdGlmeS1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyLWRlZmF1bHRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDE3IDE0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xIDFoMTVNMSA3aDE1TTEgMTNoMTVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGRhdGEtY29sbGFwc2UtdG9nZ2xlPVwibmF2YmFyLWRlZmF1bHRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiB3LTEwIGgtMTAganVzdGlmeS1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyLWRlZmF1bHRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDE3IDE0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xIDFoMTVNMSA3aDE1TTEgMTNoMTVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICB7LyogJHtpc05hdk9wZW4gPyBcImhpZGRlblwiIDogXCJibG9ja1wifSAqL31cbiAgICAgICAgICAgICAgICB7Lyoge2lzTmF2T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIG1kOmJsb2NrIG1kOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5CbGEgQmxhaDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5hYm92ZTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHtpc05hdk9wZW4gPyBcImhpZGRlblwiIDogXCJibG9ja1wifWB9PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPmluc2lkZTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxoMSBjbGFzc05hbWU9e2BmaWxsLWN1cnJlbnQgIGgtMyB3LTMgJHtpc05hdk9wZW4gPyBcImhpZGRlblwiIDogXCJibG9ja1wifWB9PllPIEhFUkUgPGgxPiAqL31cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbGwtY3VycmVudCBoLTMgdy0zICR7aXNOYXZPcGVuID8gXCJoaWRkZW5cIiA6IFwiYmxvY2tcIn1gfVxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPmJlbG93PC9oMT5cbiAgICAgICAgICAgICAgICB7IWlzTmF2T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6YmxvY2sgbWQ6dy1hdXRvXCIgaWQ9XCJuYXZiYXItZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZmxleCBmbGV4LWNvbCBwLTQgbWQ6cC0wIG10LTQgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLWxnIGJnLWdyYXktNTAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04IHJ0bDpzcGFjZS14LXJldmVyc2UgbWQ6bXQtMCBtZDpib3JkZXItMCBtZDpiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIG1kOmRhcms6YmctZ3JheS05MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgcm91bmRlZCBtZDpiZy10cmFuc3BhcmVudCBtZDp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazp0ZXh0LWJsdWUtNTAwXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5TZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+UHJpY2luZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgIDwvPlxuXG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE5hdkNhdHRvIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZVNjcmVlblNpemUiLCJOYXZDYXR0byIsImlzTmF2T3BlbiIsInNldElzTmF2T3BlbiIsImhhbmRsZUNsaWNrIiwic2NyZWVuU2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImgxIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJzcmMiLCJoZWlnaHQiLCJhbHQiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsInN2ZyIsImFyaWEtaGlkZGVuIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJzdHJva2UiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsInN0cm9rZS13aWR0aCIsImQiLCJpZCIsInVsIiwibGkiLCJhcmlhLWN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavCatto/NavCatto.tsx\n"));

/***/ })

});