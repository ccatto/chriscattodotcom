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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// CarouselCatto2.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CarouselCatto2 = (param)=>{\n    let { data } = param;\n    _s();\n    // State and Ref initialization\n    const [currentImg, setCurrentImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [carouselSize, setCarouselSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: 0,\n        height: 0\n    });\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let totalSlides = data.length; // Total slides\n    console.log(\"totalSlides === \", totalSlides);\n    console.log(\"currentImg ===\", currentImg);\n    const clickHandler = ()=>{\n        // let three = 2;\n        return (event)=>{\n            setCurrentImg(2);\n            event.preventDefault();\n        };\n    };\n    let clickNext = ()=>{\n        console.log(\"inside clickNext\");\n        console.log(\"currentImg ===\", currentImg);\n        if (currentImg + 1 === totalSlides) {\n            console.log(\"inside AT END\");\n        } else {\n            console.log(\"not at end yet\");\n        }\n        return setCurrentImg((prev)=>prev + 1);\n    // prev => prev + 1;\n    };\n    // useEffect to get the initial carousel size\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let elem = carouselRef.current;\n        let { width, height } = elem.getBoundingClientRect();\n        if (carouselRef.current) {\n            setCarouselSize({\n                width,\n                height\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-80 h-60 rounded-md overflow-hidden relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: carouselRef,\n                    style: {\n                        left: -currentImg * carouselSize.width\n                    },\n                    className: \"w-full h-full absolute flex transition-all duration-300\",\n                    children: data.map((v, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative shrink-0 w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"pointer-events-none\",\n                                alt: \"carousel-image-\".concat(i),\n                                fill: true,\n                                src: v.image || \"/hero-desktop.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentImg === 0,\n                        onClick: ()=>setCurrentImg((prev)=>prev - 1),\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === 0 && \"opacity-50\"),\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentImg === data.length - 1,\n                        // getNextImageNumber();\n                        onClick: clickHandler(),\n                        // onClick={() => setCurrentImg(prev => prev + 1)}\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === data.length - 1 && \"opacity-50\"),\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CarouselCatto2, \"va3vNN/X46KTbBQd0nwy9IiOvkE=\");\n_c = CarouselCatto2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselCatto2);\nvar _c;\n$RefreshReg$(_c, \"CarouselCatto2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Nhcm91c2VsQ2F0dG8yL0Nhcm91c2VsQ2F0dG8yLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFCQUFxQjs7O0FBRVM7QUFDNEI7QUFFMUQsTUFBTUssaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUk3Qjs7SUFDRywrQkFBK0I7SUFDL0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLE9BQU87UUFBR0MsUUFBUTtJQUFFO0lBQ3ZFLE1BQU1DLGNBQWNWLDZDQUFNQSxDQUFDO0lBQzNCLElBQUlXLGNBQWNSLEtBQUtTLE1BQU0sRUFBRSxlQUFlO0lBQzlDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CSDtJQUNoQ0UsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlY7SUFDOUIsTUFBTVcsZUFBZTtRQUNqQixpQkFBaUI7UUFDakIsT0FBTyxDQUFDQztZQUNOWCxjQUFjO1lBQ2RXLE1BQU1DLGNBQWM7UUFDdEI7SUFDRjtJQUVGLElBQUlDLFlBQVk7UUFDWkwsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JWO1FBQzlCLElBQUlBLGFBQWEsTUFBTU8sYUFBYztZQUNqQ0UsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLE9BQU87WUFDSEQsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0EsT0FBT1QsY0FBY2MsQ0FBQUEsT0FBUUEsT0FBTztJQUNwQyxvQkFBb0I7SUFDeEI7SUFDQSw2Q0FBNkM7SUFDN0NwQixnREFBU0EsQ0FBQztRQUNOLElBQUlxQixPQUFPVixZQUFZVyxPQUFPO1FBQzlCLElBQUksRUFBRWIsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR1csS0FBS0UscUJBQXFCO1FBQ2xELElBQUlaLFlBQVlXLE9BQU8sRUFBRTtZQUNyQmQsZ0JBQWdCO2dCQUNaQztnQkFDQUM7WUFDSjtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNjOzswQkFFRyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBRVgsNEVBQUNEO29CQUNHRSxLQUFLZjtvQkFDTGdCLE9BQU87d0JBQ0hDLE1BQU0sQ0FBQ3ZCLGFBQWFFLGFBQWFFLEtBQUs7b0JBQzFDO29CQUNBZ0IsV0FBVTs4QkFFVHJCLEtBQUt5QixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ1YsOERBQUNQOzRCQUFZQyxXQUFVO3NDQUNuQiw0RUFBQzNCLGtEQUFLQTtnQ0FDRjJCLFdBQVU7Z0NBQ1ZPLEtBQUssa0JBQW9CLE9BQUZEO2dDQUN2QkUsSUFBSTtnQ0FDSkMsS0FBS0osRUFBRUssS0FBSyxJQUFJOzs7Ozs7MkJBTGRKOzs7Ozs7Ozs7Ozs7Ozs7MEJBYXRCLDhEQUFDUDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNXO3dCQUNHQyxVQUFVaEMsZUFBZTt3QkFDekJpQyxTQUFTLElBQU1oQyxjQUFjYyxDQUFBQSxPQUFRQSxPQUFPO3dCQUM1Q0ssV0FBVyw4QkFBK0QsT0FBakNwQixlQUFlLEtBQUs7a0NBRTVEOzs7Ozs7a0NBRUwsOERBQUMrQjt3QkFDR0MsVUFBVWhDLGVBQWVELEtBQUtTLE1BQU0sR0FBRzt3QkFDdkMsd0JBQXdCO3dCQUN4QnlCLFNBQVN0Qjt3QkFDVCxrREFBa0Q7d0JBQ2xEUyxXQUFXLDhCQUE2RSxPQUEvQ3BCLGVBQWVELEtBQUtTLE1BQU0sR0FBRyxLQUFLO2tDQUUxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBekZNVjtLQUFBQTtBQTJGTiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9DYXJvdXNlbENhdHRvMi9DYXJvdXNlbENhdHRvMi50c3g/NGUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDYXJvdXNlbENhdHRvMi50c3hcblwidXNlIGNsaWVudFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ2Fyb3VzZWxDYXR0bzIgPSAoeyBkYXRhIH06IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGltYWdlOiBzdHJpbmdcbiAgICB9W11cbn0pID0+IHtcbiAgICAvLyBTdGF0ZSBhbmQgUmVmIGluaXRpYWxpemF0aW9uXG4gICAgY29uc3QgW2N1cnJlbnRJbWcsIHNldEN1cnJlbnRJbWddID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbY2Fyb3VzZWxTaXplLCBzZXRDYXJvdXNlbFNpemVdID0gdXNlU3RhdGUoeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pXG4gICAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYobnVsbClcbiAgICBsZXQgdG90YWxTbGlkZXMgPSBkYXRhLmxlbmd0aDsgLy8gVG90YWwgc2xpZGVzXG4gICAgY29uc29sZS5sb2coJ3RvdGFsU2xpZGVzID09PSAnLCB0b3RhbFNsaWRlcyk7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnRJbWcgPT09JywgY3VycmVudEltZyk7XG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAvLyBsZXQgdGhyZWUgPSAyO1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudEltZygyKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICBsZXQgY2xpY2tOZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIGNsaWNrTmV4dCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudEltZyA9PT0nLCBjdXJyZW50SW1nKTtcbiAgICAgICAgaWYgKGN1cnJlbnRJbWcgKyAxID09PSB0b3RhbFNsaWRlcyApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgQVQgRU5EJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGF0IGVuZCB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0Q3VycmVudEltZyhwcmV2ID0+IHByZXYgKyAxKVxuICAgICAgICAvLyBwcmV2ID0+IHByZXYgKyAxO1xuICAgIH1cbiAgICAvLyB1c2VFZmZlY3QgdG8gZ2V0IHRoZSBpbml0aWFsIGNhcm91c2VsIHNpemVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbSA9IGNhcm91c2VsUmVmLmN1cnJlbnQgYXMgdW5rbm93biBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRDYXJvdXNlbFNpemUoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogQ2Fyb3VzZWwgY29udGFpbmVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctODAgaC02MCByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgey8qIEltYWdlIGNvbnRhaW5lciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxSZWZ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtY3VycmVudEltZyAqIGNhcm91c2VsU2l6ZS53aWR0aFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgZmxleCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnPlxuICAgICAgICAgICAgICAgICAgICB7LyogTWFwIHRocm91Z2ggZGF0YSB0byByZW5kZXIgaW1hZ2VzICovfVxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J3JlbGF0aXZlIHNocmluay0wIHctZnVsbCBoLWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BvaW50ZXItZXZlbnRzLW5vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcm91c2VsLWltYWdlLSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17di5pbWFnZSB8fCBcIi9oZXJvLWRlc2t0b3AucG5nXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBidXR0b25zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXQtMyc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudEltZyA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEltZyhwcmV2ID0+IHByZXYgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIHB4LTQgcHktMiBmb250LWJvbGQgJHtjdXJyZW50SW1nID09PSAwICYmICdvcGFjaXR5LTUwJ31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1wiPFwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRJbWcgPT09IGRhdGEubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0TmV4dEltYWdlTnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcigpfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW1nKHByZXYgPT4gcHJldiArIDEpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgcHgtNCBweS0yIGZvbnQtYm9sZCAke2N1cnJlbnRJbWcgPT09IGRhdGEubGVuZ3RoIC0gMSAmJiAnb3BhY2l0eS01MCd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcIj5cIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsQ2F0dG8yXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2Fyb3VzZWxDYXR0bzIiLCJkYXRhIiwiY3VycmVudEltZyIsInNldEN1cnJlbnRJbWciLCJjYXJvdXNlbFNpemUiLCJzZXRDYXJvdXNlbFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImNhcm91c2VsUmVmIiwidG90YWxTbGlkZXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrTmV4dCIsInByZXYiLCJlbGVtIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInN0eWxlIiwibGVmdCIsIm1hcCIsInYiLCJpIiwiYWx0IiwiZmlsbCIsInNyYyIsImltYWdlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CarouselCatto2/CarouselCatto2.tsx\n"));

/***/ })

});