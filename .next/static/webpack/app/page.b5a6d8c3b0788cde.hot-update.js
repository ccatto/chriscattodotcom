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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// CarouselCatto2.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CarouselCatto2 = (param)=>{\n    let { data } = param;\n    _s();\n    // State and Ref initialization\n    const [currentImg, setCurrentImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [carouselSize, setCarouselSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: 0,\n        height: 0\n    });\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let totalSlides = data.length; // Total slides\n    console.log(\"totalSlides === \", totalSlides);\n    console.log(\"currentImg ===\", currentImg);\n    let clickNext = ()=>{\n        console.log(\"inside clickNext\");\n        console.log(\"currentImg ===\", currentImg);\n        if (currentImg + 1 === totalSlides) {\n            console.log(\"inside AT END\");\n        }\n    // prev => prev + 1;\n    };\n    // useEffect to get the initial carousel size\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let elem = carouselRef.current;\n        let { width, height } = elem.getBoundingClientRect();\n        if (carouselRef.current) {\n            setCarouselSize({\n                width,\n                height\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-80 h-60 rounded-md overflow-hidden relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: carouselRef,\n                    style: {\n                        left: -currentImg * carouselSize.width\n                    },\n                    className: \"w-full h-full absolute flex transition-all duration-300\",\n                    children: data.map((v, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative shrink-0 w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"pointer-events-none\",\n                                alt: \"carousel-image-\".concat(i),\n                                fill: true,\n                                src: v.image || \"/hero-desktop.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentImg === 0,\n                        onClick: ()=>setCurrentImg((prev)=>prev - 1),\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === 0 && \"opacity-50\"),\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentImg === data.length - 1,\n                        // getNextImageNumber();\n                        onClick: ()=>setCurrentImg((prev)=>prev + 1),\n                        // onClick={() => setCurrentImg(prev => prev + 1)}\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === data.length - 1 && \"opacity-50\"),\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CarouselCatto2, \"va3vNN/X46KTbBQd0nwy9IiOvkE=\");\n_c = CarouselCatto2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselCatto2);\nvar _c;\n$RefreshReg$(_c, \"CarouselCatto2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Nhcm91c2VsQ2F0dG8yL0Nhcm91c2VsQ2F0dG8yLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFCQUFxQjs7O0FBRVM7QUFDNEI7QUFFMUQsTUFBTUssaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUk3Qjs7SUFDRywrQkFBK0I7SUFDL0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLE9BQU87UUFBR0MsUUFBUTtJQUFFO0lBQ3ZFLE1BQU1DLGNBQWNWLDZDQUFNQSxDQUFDO0lBQzNCLElBQUlXLGNBQWNSLEtBQUtTLE1BQU0sRUFBRSxlQUFlO0lBQzlDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CSDtJQUNoQ0UsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlY7SUFDOUIsSUFBSVcsWUFBWTtRQUNaRixRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlY7UUFDOUIsSUFBSUEsYUFBYSxNQUFNTyxhQUFjO1lBQ2pDRSxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDQSxvQkFBb0I7SUFDeEI7SUFDQSw2Q0FBNkM7SUFDN0NmLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWlCLE9BQU9OLFlBQVlPLE9BQU87UUFDOUIsSUFBSSxFQUFFVCxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHTyxLQUFLRSxxQkFBcUI7UUFDbEQsSUFBSVIsWUFBWU8sT0FBTyxFQUFFO1lBQ3JCVixnQkFBZ0I7Z0JBQ1pDO2dCQUNBQztZQUNKO1FBQ0o7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1U7OzBCQUVHLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFFWCw0RUFBQ0Q7b0JBQ0dFLEtBQUtYO29CQUNMWSxPQUFPO3dCQUNIQyxNQUFNLENBQUNuQixhQUFhRSxhQUFhRSxLQUFLO29CQUMxQztvQkFDQVksV0FBVTs4QkFFVGpCLEtBQUtxQixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ1YsOERBQUNQOzRCQUFZQyxXQUFVO3NDQUNuQiw0RUFBQ3ZCLGtEQUFLQTtnQ0FDRnVCLFdBQVU7Z0NBQ1ZPLEtBQUssa0JBQW9CLE9BQUZEO2dDQUN2QkUsSUFBSTtnQ0FDSkMsS0FBS0osRUFBRUssS0FBSyxJQUFJOzs7Ozs7MkJBTGRKOzs7Ozs7Ozs7Ozs7Ozs7MEJBYXRCLDhEQUFDUDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNXO3dCQUNHQyxVQUFVNUIsZUFBZTt3QkFDekI2QixTQUFTLElBQU01QixjQUFjNkIsQ0FBQUEsT0FBUUEsT0FBTzt3QkFDNUNkLFdBQVcsOEJBQStELE9BQWpDaEIsZUFBZSxLQUFLO2tDQUU1RDs7Ozs7O2tDQUVMLDhEQUFDMkI7d0JBQ0dDLFVBQVU1QixlQUFlRCxLQUFLUyxNQUFNLEdBQUc7d0JBQ3ZDLHdCQUF3Qjt3QkFDeEJxQixTQUFTLElBQU01QixjQUFjNkIsQ0FBQUEsT0FBUUEsT0FBTzt3QkFDNUMsa0RBQWtEO3dCQUNsRGQsV0FBVyw4QkFBNkUsT0FBL0NoQixlQUFlRCxLQUFLUyxNQUFNLEdBQUcsS0FBSztrQ0FFMUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQTlFTVY7S0FBQUE7QUFnRk4sK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ2Fyb3VzZWxDYXR0bzIvQ2Fyb3VzZWxDYXR0bzIudHN4PzRlMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2Fyb3VzZWxDYXR0bzIudHN4XG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENhcm91c2VsQ2F0dG8yID0gKHsgZGF0YSB9OiB7XG4gICAgZGF0YToge1xuICAgICAgICBpbWFnZTogc3RyaW5nXG4gICAgfVtdXG59KSA9PiB7XG4gICAgLy8gU3RhdGUgYW5kIFJlZiBpbml0aWFsaXphdGlvblxuICAgIGNvbnN0IFtjdXJyZW50SW1nLCBzZXRDdXJyZW50SW1nXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2Nhcm91c2VsU2l6ZSwgc2V0Q2Fyb3VzZWxTaXplXSA9IHVzZVN0YXRlKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KVxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKG51bGwpXG4gICAgbGV0IHRvdGFsU2xpZGVzID0gZGF0YS5sZW5ndGg7IC8vIFRvdGFsIHNsaWRlc1xuICAgIGNvbnNvbGUubG9nKCd0b3RhbFNsaWRlcyA9PT0gJywgdG90YWxTbGlkZXMpO1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50SW1nID09PScsIGN1cnJlbnRJbWcpO1xuICAgIGxldCBjbGlja05leHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgY2xpY2tOZXh0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50SW1nID09PScsIGN1cnJlbnRJbWcpO1xuICAgICAgICBpZiAoY3VycmVudEltZyArIDEgPT09IHRvdGFsU2xpZGVzICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBBVCBFTkQnKVxuICAgICAgICB9XG4gICAgICAgIC8vIHByZXYgPT4gcHJldiArIDE7XG4gICAgfVxuICAgIC8vIHVzZUVmZmVjdCB0byBnZXQgdGhlIGluaXRpYWwgY2Fyb3VzZWwgc2l6ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtID0gY2Fyb3VzZWxSZWYuY3VycmVudCBhcyB1bmtub3duIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHNldENhcm91c2VsU2l6ZSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKiBDYXJvdXNlbCBjb250YWluZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy04MCBoLTYwIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICB7LyogSW1hZ2UgY29udGFpbmVyICovfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjYXJvdXNlbFJlZn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC1jdXJyZW50SW1nICogY2Fyb3VzZWxTaXplLndpZHRoXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSBmbGV4IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBNYXAgdGhyb3VnaCBkYXRhIHRvIHJlbmRlciBpbWFnZXMgKi99XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT0ncmVsYXRpdmUgc2hyaW5rLTAgdy1mdWxsIGgtZnVsbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9pbnRlci1ldmVudHMtbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgY2Fyb3VzZWwtaW1hZ2UtJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt2LmltYWdlIHx8IFwiL2hlcm8tZGVza3RvcC5wbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50SW1nID09PSAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW1nKHByZXYgPT4gcHJldiAtIDEpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgcHgtNCBweS0yIGZvbnQtYm9sZCAke2N1cnJlbnRJbWcgPT09IDAgJiYgJ29wYWNpdHktNTAnfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XCI8XCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudEltZyA9PT0gZGF0YS5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgICAgICAvLyBnZXROZXh0SW1hZ2VOdW1iZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEltZyhwcmV2ID0+IHByZXYgKyAxKX1cbiAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEltZyhwcmV2ID0+IHByZXYgKyAxKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIHB4LTQgcHktMiBmb250LWJvbGQgJHtjdXJyZW50SW1nID09PSBkYXRhLmxlbmd0aCAtIDEgJiYgJ29wYWNpdHktNTAnfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XCI+XCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbENhdHRvMlxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsQ2F0dG8yIiwiZGF0YSIsImN1cnJlbnRJbWciLCJzZXRDdXJyZW50SW1nIiwiY2Fyb3VzZWxTaXplIiwic2V0Q2Fyb3VzZWxTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJvdXNlbFJlZiIsInRvdGFsU2xpZGVzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNsaWNrTmV4dCIsImVsZW0iLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiLCJsZWZ0IiwibWFwIiwidiIsImkiLCJhbHQiLCJmaWxsIiwic3JjIiwiaW1hZ2UiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJwcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CarouselCatto2/CarouselCatto2.tsx\n"));

/***/ })

});