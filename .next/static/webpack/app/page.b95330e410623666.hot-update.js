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

/***/ "(app-pages-browser)/./app/components/CarouselCatto2/CarouselCatto2.tsx":
/*!**********************************************************!*\
  !*** ./app/components/CarouselCatto2/CarouselCatto2.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// CarouselCatto2.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CarouselCatto2 = (param)=>{\n    let { data } = param;\n    _s();\n    // State and Ref initialization\n    const [currentImg, setCurrentImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [carouselSize, setCarouselSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: 0,\n        height: 0\n    });\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let totalSlides = data.length; // Total slides\n    console.log(\"totalSlides === \", totalSlides);\n    console.log(\"\");\n    // useEffect to get the initial carousel size\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let elem = carouselRef.current;\n        let { width, height } = elem.getBoundingClientRect();\n        if (carouselRef.current) {\n            setCarouselSize({\n                width,\n                height\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-80 h-60 rounded-md overflow-hidden relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: carouselRef,\n                    style: {\n                        left: -currentImg * carouselSize.width\n                    },\n                    className: \"w-full h-full absolute flex transition-all duration-300\",\n                    children: data.map((v, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative shrink-0 w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"pointer-events-none\",\n                                alt: \"carousel-image-\".concat(i),\n                                fill: true,\n                                src: v.image || \"/hero-desktop.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentImg === 0,\n                        onClick: ()=>setCurrentImg((prev)=>prev - 1),\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === 0 && \"opacity-50\"),\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentImg === data.length - 1,\n                        onClick: ()=>setCurrentImg((prev)=>prev + 1),\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === data.length - 1 && \"opacity-50\"),\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CarouselCatto2, \"va3vNN/X46KTbBQd0nwy9IiOvkE=\");\n_c = CarouselCatto2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselCatto2);\nvar _c;\n$RefreshReg$(_c, \"CarouselCatto2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Nhcm91c2VsQ2F0dG8yL0Nhcm91c2VsQ2F0dG8yLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFCQUFxQjs7O0FBRVM7QUFDNEI7QUFFMUQsTUFBTUssaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUk3Qjs7SUFDRywrQkFBK0I7SUFDL0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLE9BQU87UUFBR0MsUUFBUTtJQUFFO0lBQ3ZFLE1BQU1DLGNBQWNWLDZDQUFNQSxDQUFDO0lBQzNCLElBQUlXLGNBQWNSLEtBQUtTLE1BQU0sRUFBRSxlQUFlO0lBQzlDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CSDtJQUNoQ0UsUUFBUUMsR0FBRyxDQUFDO0lBQ1osNkNBQTZDO0lBQzdDZixnREFBU0EsQ0FBQztRQUNOLElBQUlnQixPQUFPTCxZQUFZTSxPQUFPO1FBQzlCLElBQUksRUFBRVIsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR00sS0FBS0UscUJBQXFCO1FBQ2xELElBQUlQLFlBQVlNLE9BQU8sRUFBRTtZQUNyQlQsZ0JBQWdCO2dCQUNaQztnQkFDQUM7WUFDSjtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNTOzswQkFFRyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBRVgsNEVBQUNEO29CQUNHRSxLQUFLVjtvQkFDTFcsT0FBTzt3QkFDSEMsTUFBTSxDQUFDbEIsYUFBYUUsYUFBYUUsS0FBSztvQkFDMUM7b0JBQ0FXLFdBQVU7OEJBRVRoQixLQUFLb0IsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNWLDhEQUFDUDs0QkFBWUMsV0FBVTtzQ0FDbkIsNEVBQUN0QixrREFBS0E7Z0NBQ0ZzQixXQUFVO2dDQUNWTyxLQUFLLGtCQUFvQixPQUFGRDtnQ0FDdkJFLElBQUk7Z0NBQ0pDLEtBQUtKLEVBQUVLLEtBQUssSUFBSTs7Ozs7OzJCQUxkSjs7Ozs7Ozs7Ozs7Ozs7OzBCQWF0Qiw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVzt3QkFDR0MsVUFBVTNCLGVBQWU7d0JBQ3pCNEIsU0FBUyxJQUFNM0IsY0FBYzRCLENBQUFBLE9BQVFBLE9BQU87d0JBQzVDZCxXQUFXLDhCQUErRCxPQUFqQ2YsZUFBZSxLQUFLO2tDQUU1RDs7Ozs7O2tDQUVMLDhEQUFDMEI7d0JBQ0dDLFVBQVUzQixlQUFlRCxLQUFLUyxNQUFNLEdBQUc7d0JBQ3ZDb0IsU0FBUyxJQUFNM0IsY0FBYzRCLENBQUFBLE9BQVFBLE9BQU87d0JBQzVDZCxXQUFXLDhCQUE2RSxPQUEvQ2YsZUFBZUQsS0FBS1MsTUFBTSxHQUFHLEtBQUs7a0NBRTFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0FwRU1WO0tBQUFBO0FBc0VOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Nhcm91c2VsQ2F0dG8yL0Nhcm91c2VsQ2F0dG8yLnRzeD80ZTE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENhcm91c2VsQ2F0dG8yLnRzeFxuXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDYXJvdXNlbENhdHRvMiA9ICh7IGRhdGEgfToge1xuICAgIGRhdGE6IHtcbiAgICAgICAgaW1hZ2U6IHN0cmluZ1xuICAgIH1bXVxufSkgPT4ge1xuICAgIC8vIFN0YXRlIGFuZCBSZWYgaW5pdGlhbGl6YXRpb25cbiAgICBjb25zdCBbY3VycmVudEltZywgc2V0Q3VycmVudEltZ10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtjYXJvdXNlbFNpemUsIHNldENhcm91c2VsU2l6ZV0gPSB1c2VTdGF0ZSh7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSlcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZihudWxsKVxuICAgIGxldCB0b3RhbFNsaWRlcyA9IGRhdGEubGVuZ3RoOyAvLyBUb3RhbCBzbGlkZXNcbiAgICBjb25zb2xlLmxvZygndG90YWxTbGlkZXMgPT09ICcsIHRvdGFsU2xpZGVzKTtcbiAgICBjb25zb2xlLmxvZygnJylcbiAgICAvLyB1c2VFZmZlY3QgdG8gZ2V0IHRoZSBpbml0aWFsIGNhcm91c2VsIHNpemVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbSA9IGNhcm91c2VsUmVmLmN1cnJlbnQgYXMgdW5rbm93biBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRDYXJvdXNlbFNpemUoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogQ2Fyb3VzZWwgY29udGFpbmVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctODAgaC02MCByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgey8qIEltYWdlIGNvbnRhaW5lciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxSZWZ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtY3VycmVudEltZyAqIGNhcm91c2VsU2l6ZS53aWR0aFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgZmxleCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnPlxuICAgICAgICAgICAgICAgICAgICB7LyogTWFwIHRocm91Z2ggZGF0YSB0byByZW5kZXIgaW1hZ2VzICovfVxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J3JlbGF0aXZlIHNocmluay0wIHctZnVsbCBoLWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BvaW50ZXItZXZlbnRzLW5vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcm91c2VsLWltYWdlLSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17di5pbWFnZSB8fCBcIi9oZXJvLWRlc2t0b3AucG5nXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBidXR0b25zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXQtMyc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudEltZyA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEltZyhwcmV2ID0+IHByZXYgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIHB4LTQgcHktMiBmb250LWJvbGQgJHtjdXJyZW50SW1nID09PSAwICYmICdvcGFjaXR5LTUwJ31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1wiPFwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRJbWcgPT09IGRhdGEubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEltZyhwcmV2ID0+IHByZXYgKyAxKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIHB4LTQgcHktMiBmb250LWJvbGQgJHtjdXJyZW50SW1nID09PSBkYXRhLmxlbmd0aCAtIDEgJiYgJ29wYWNpdHktNTAnfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XCI+XCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbENhdHRvMlxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsQ2F0dG8yIiwiZGF0YSIsImN1cnJlbnRJbWciLCJzZXRDdXJyZW50SW1nIiwiY2Fyb3VzZWxTaXplIiwic2V0Q2Fyb3VzZWxTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJvdXNlbFJlZiIsInRvdGFsU2xpZGVzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImVsZW0iLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiLCJsZWZ0IiwibWFwIiwidiIsImkiLCJhbHQiLCJmaWxsIiwic3JjIiwiaW1hZ2UiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJwcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CarouselCatto2/CarouselCatto2.tsx\n"));

/***/ })

});