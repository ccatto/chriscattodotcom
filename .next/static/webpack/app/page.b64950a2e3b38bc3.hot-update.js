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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// CarouselCatto2.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CarouselCatto2 = (param)=>{\n    let { data } = param;\n    _s();\n    // State and Ref initialization\n    const [currentImg, setCurrentImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [carouselSize, setCarouselSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: 0,\n        height: 0\n    });\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let totalSlides = data.length; // Total slides\n    console.log(\"totalSlides === \", totalSlides);\n    console.log(\"currentImg ===\", currentImg);\n    const clickNextHandler = ()=>{\n        return (event)=>{\n            if (currentImg + 1 === totalSlides) {\n                console.log(\"inside AT END\");\n                setCurrentImg(0);\n            } else {\n                console.log(\"not at end yet\");\n                setCurrentImg(currentImg + 1);\n            }\n            event.preventDefault();\n        };\n    };\n    const clickPreviousHandler = ()=>{\n        return (event)=>{\n            if (currentImg + 1 === totalSlides) {\n                console.log(\"inside AT END\");\n                setCurrentImg(0);\n            } else {\n                console.log(\"not at end yet\");\n                setCurrentImg(currentImg - 1);\n            }\n            event.preventDefault();\n        };\n    };\n    // useEffect to get the initial carousel size\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let elem = carouselRef.current;\n        let { width, height } = elem.getBoundingClientRect();\n        if (carouselRef.current) {\n            setCarouselSize({\n                width,\n                height\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-80 h-60 rounded-md overflow-hidden relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: carouselRef,\n                    style: {\n                        left: -currentImg * carouselSize.width\n                    },\n                    className: \"w-full h-full absolute flex transition-all duration-300\",\n                    children: data.map((v, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative shrink-0 w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"pointer-events-none\",\n                                alt: \"carousel-image-\".concat(i),\n                                fill: true,\n                                src: v.image || \"/hero-desktop.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        // disabled={currentImg === 0}\n                        onClick: ()=>setCurrentImg((prev)=>prev - 1),\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === 0 && \"opacity-50\"),\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        // disabled={currentImg === data.length - 1}\n                        // getNextImageNumber();\n                        onClick: clickNextHandler(),\n                        // onClick={() => setCurrentImg(prev => prev + 1)}\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === data.length - 1 && \"opacity-50\"),\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CarouselCatto2, \"va3vNN/X46KTbBQd0nwy9IiOvkE=\");\n_c = CarouselCatto2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselCatto2);\nvar _c;\n$RefreshReg$(_c, \"CarouselCatto2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Nhcm91c2VsQ2F0dG8yL0Nhcm91c2VsQ2F0dG8yLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFCQUFxQjs7O0FBRVM7QUFDNEI7QUFFMUQsTUFBTUssaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUk3Qjs7SUFDRywrQkFBK0I7SUFDL0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLE9BQU87UUFBR0MsUUFBUTtJQUFFO0lBQ3ZFLE1BQU1DLGNBQWNWLDZDQUFNQSxDQUFDO0lBQzNCLElBQUlXLGNBQWNSLEtBQUtTLE1BQU0sRUFBRSxlQUFlO0lBQzlDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CSDtJQUNoQ0UsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlY7SUFDOUIsTUFBTVcsbUJBQW1CO1FBQ3JCLE9BQU8sQ0FBQ0M7WUFDSixJQUFJWixhQUFhLE1BQU1PLGFBQWM7Z0JBQ2pDRSxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pULGNBQWM7WUFDbEIsT0FBTztnQkFDSFEsUUFBUUMsR0FBRyxDQUFDO2dCQUNaVCxjQUFjRCxhQUFhO1lBQy9CO1lBQ0ZZLE1BQU1DLGNBQWM7UUFDdEI7SUFDSjtJQUNBLE1BQU1DLHVCQUF1QjtRQUN6QixPQUFPLENBQUNGO1lBQ0osSUFBSVosYUFBYSxNQUFNTyxhQUFjO2dCQUNqQ0UsUUFBUUMsR0FBRyxDQUFDO2dCQUNaVCxjQUFjO1lBQ2xCLE9BQU87Z0JBQ0hRLFFBQVFDLEdBQUcsQ0FBQztnQkFDWlQsY0FBY0QsYUFBYTtZQUMvQjtZQUNGWSxNQUFNQyxjQUFjO1FBQ3RCO0lBQ0Y7SUFDRiw2Q0FBNkM7SUFDN0NsQixnREFBU0EsQ0FBQztRQUNOLElBQUlvQixPQUFPVCxZQUFZVSxPQUFPO1FBQzlCLElBQUksRUFBRVosS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR1UsS0FBS0UscUJBQXFCO1FBQ2xELElBQUlYLFlBQVlVLE9BQU8sRUFBRTtZQUNyQmIsZ0JBQWdCO2dCQUNaQztnQkFDQUM7WUFDSjtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNhOzswQkFFRyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBRVgsNEVBQUNEO29CQUNHRSxLQUFLZDtvQkFDTGUsT0FBTzt3QkFDSEMsTUFBTSxDQUFDdEIsYUFBYUUsYUFBYUUsS0FBSztvQkFDMUM7b0JBQ0FlLFdBQVU7OEJBRVRwQixLQUFLd0IsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNWLDhEQUFDUDs0QkFBWUMsV0FBVTtzQ0FDbkIsNEVBQUMxQixrREFBS0E7Z0NBQ0YwQixXQUFVO2dDQUNWTyxLQUFLLGtCQUFvQixPQUFGRDtnQ0FDdkJFLElBQUk7Z0NBQ0pDLEtBQUtKLEVBQUVLLEtBQUssSUFBSTs7Ozs7OzJCQUxkSjs7Ozs7Ozs7Ozs7Ozs7OzBCQWF0Qiw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVzt3QkFDRyw4QkFBOEI7d0JBQzlCQyxTQUFTLElBQU05QixjQUFjK0IsQ0FBQUEsT0FBUUEsT0FBTzt3QkFDNUNiLFdBQVcsOEJBQStELE9BQWpDbkIsZUFBZSxLQUFLO2tDQUU1RDs7Ozs7O2tDQUVMLDhEQUFDOEI7d0JBQ0csNENBQTRDO3dCQUM1Qyx3QkFBd0I7d0JBQ3hCQyxTQUFTcEI7d0JBQ1Qsa0RBQWtEO3dCQUNsRFEsV0FBVyw4QkFBNkUsT0FBL0NuQixlQUFlRCxLQUFLUyxNQUFNLEdBQUcsS0FBSztrQ0FFMUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQTlGTVY7S0FBQUE7QUFnR04sK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ2Fyb3VzZWxDYXR0bzIvQ2Fyb3VzZWxDYXR0bzIudHN4PzRlMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2Fyb3VzZWxDYXR0bzIudHN4XG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENhcm91c2VsQ2F0dG8yID0gKHsgZGF0YSB9OiB7XG4gICAgZGF0YToge1xuICAgICAgICBpbWFnZTogc3RyaW5nXG4gICAgfVtdXG59KSA9PiB7XG4gICAgLy8gU3RhdGUgYW5kIFJlZiBpbml0aWFsaXphdGlvblxuICAgIGNvbnN0IFtjdXJyZW50SW1nLCBzZXRDdXJyZW50SW1nXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2Nhcm91c2VsU2l6ZSwgc2V0Q2Fyb3VzZWxTaXplXSA9IHVzZVN0YXRlKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KVxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKG51bGwpXG4gICAgbGV0IHRvdGFsU2xpZGVzID0gZGF0YS5sZW5ndGg7IC8vIFRvdGFsIHNsaWRlc1xuICAgIGNvbnNvbGUubG9nKCd0b3RhbFNsaWRlcyA9PT0gJywgdG90YWxTbGlkZXMpO1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50SW1nID09PScsIGN1cnJlbnRJbWcpO1xuICAgIGNvbnN0IGNsaWNrTmV4dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW1nICsgMSA9PT0gdG90YWxTbGlkZXMgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBBVCBFTkQnKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1nKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGF0IGVuZCB5ZXQnKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1nKGN1cnJlbnRJbWcgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNsaWNrUHJldmlvdXNIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEltZyArIDEgPT09IHRvdGFsU2xpZGVzICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgQVQgRU5EJyk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEltZygwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBhdCBlbmQgeWV0Jyk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEltZyhjdXJyZW50SW1nIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIC8vIHVzZUVmZmVjdCB0byBnZXQgdGhlIGluaXRpYWwgY2Fyb3VzZWwgc2l6ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtID0gY2Fyb3VzZWxSZWYuY3VycmVudCBhcyB1bmtub3duIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHNldENhcm91c2VsU2l6ZSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKiBDYXJvdXNlbCBjb250YWluZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy04MCBoLTYwIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICB7LyogSW1hZ2UgY29udGFpbmVyICovfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjYXJvdXNlbFJlZn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC1jdXJyZW50SW1nICogY2Fyb3VzZWxTaXplLndpZHRoXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSBmbGV4IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBNYXAgdGhyb3VnaCBkYXRhIHRvIHJlbmRlciBpbWFnZXMgKi99XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT0ncmVsYXRpdmUgc2hyaW5rLTAgdy1mdWxsIGgtZnVsbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9pbnRlci1ldmVudHMtbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgY2Fyb3VzZWwtaW1hZ2UtJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt2LmltYWdlIHx8IFwiL2hlcm8tZGVza3RvcC5wbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXtjdXJyZW50SW1nID09PSAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW1nKHByZXYgPT4gcHJldiAtIDEpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgcHgtNCBweS0yIGZvbnQtYm9sZCAke2N1cnJlbnRJbWcgPT09IDAgJiYgJ29wYWNpdHktNTAnfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XCI8XCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17Y3VycmVudEltZyA9PT0gZGF0YS5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgICAgICAvLyBnZXROZXh0SW1hZ2VOdW1iZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tOZXh0SGFuZGxlcigpfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW1nKHByZXYgPT4gcHJldiArIDEpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgcHgtNCBweS0yIGZvbnQtYm9sZCAke2N1cnJlbnRJbWcgPT09IGRhdGEubGVuZ3RoIC0gMSAmJiAnb3BhY2l0eS01MCd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcIj5cIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsQ2F0dG8yXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2Fyb3VzZWxDYXR0bzIiLCJkYXRhIiwiY3VycmVudEltZyIsInNldEN1cnJlbnRJbWciLCJjYXJvdXNlbFNpemUiLCJzZXRDYXJvdXNlbFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImNhcm91c2VsUmVmIiwidG90YWxTbGlkZXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tOZXh0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGlja1ByZXZpb3VzSGFuZGxlciIsImVsZW0iLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiLCJsZWZ0IiwibWFwIiwidiIsImkiLCJhbHQiLCJmaWxsIiwic3JjIiwiaW1hZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CarouselCatto2/CarouselCatto2.tsx\n"));

/***/ })

});