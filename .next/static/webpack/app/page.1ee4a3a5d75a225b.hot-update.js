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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../.nvm/versions/node/v20.9.0/lib/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// CarouselCatto2.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CarouselCatto2 = (param)=>{\n    let { data } = param;\n    _s();\n    // State and Ref initialization\n    const [currentImg, setCurrentImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [carouselSize, setCarouselSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: 0,\n        height: 0\n    });\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let totalSlides = data.length; // Total slides\n    console.log(\"totalSlides === \", totalSlides);\n    console.log(\"currentImg ===\", currentImg);\n    const clickNextHandler = ()=>{\n        return (event)=>{\n            if (currentImg + 1 === totalSlides) {\n                console.log(\"inside AT END\");\n                setCurrentImg(0);\n            } else {\n                console.log(\"not at end yet\");\n                setCurrentImg(currentImg + 1);\n            }\n            event.preventDefault();\n        };\n    };\n    const clickPreviousHandler = ()=>{\n        return (event)=>{\n            console.log(\"inside PREVIOUS CLICK\");\n            if (currentImg === 0) {\n                console.log(\"inside AT beginning\");\n                setCurrentImg(totalSlides - 1);\n            } else {\n                console.log(\"not at end yet\");\n                setCurrentImg(currentImg - 1);\n            }\n            event.preventDefault();\n        };\n    };\n    // useEffect to get the initial carousel size\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let elem = carouselRef.current;\n        let { width, height } = elem.getBoundingClientRect();\n        if (carouselRef.current) {\n            setCarouselSize({\n                width,\n                height\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"indicators-carousel\",\n                className: \"relative w-full\",\n                \"data-carousel\": \"static\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: carouselRef,\n                    style: {\n                        left: -currentImg * carouselSize.width\n                    },\n                    className: \"w-full h-full absolute flex transition-all duration-300\",\n                    children: data.map((v, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative shrink-0 w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"pointer-events-none\",\n                                alt: \"carousel-image-\".concat(i),\n                                fill: true,\n                                src: v.image || \"/hero-desktop.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        // disabled={currentImg === 0}\n                        onClick: clickPreviousHandler(),\n                        // onClick={() => setCurrentImg(prev => prev - 1)}\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === 0 && \"opacity-50\"),\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        // disabled={currentImg === data.length - 1}\n                        // getNextImageNumber();\n                        onClick: clickNextHandler(),\n                        // onClick={() => setCurrentImg(prev => prev + 1)}\n                        className: \"border px-4 py-2 font-bold \".concat(currentImg === data.length - 1 && \"opacity-50\"),\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chriscatto/Documents/GitK8/chriscattodotcom/app/components/CarouselCatto2/CarouselCatto2.tsx\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CarouselCatto2, \"va3vNN/X46KTbBQd0nwy9IiOvkE=\");\n_c = CarouselCatto2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselCatto2);\nvar _c;\n$RefreshReg$(_c, \"CarouselCatto2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Nhcm91c2VsQ2F0dG8yL0Nhcm91c2VsQ2F0dG8yLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFCQUFxQjs7O0FBRVM7QUFDNEI7QUFFMUQsTUFBTUssaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUk3Qjs7SUFDRywrQkFBK0I7SUFDL0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLE9BQU87UUFBR0MsUUFBUTtJQUFFO0lBQ3ZFLE1BQU1DLGNBQWNWLDZDQUFNQSxDQUFDO0lBQzNCLElBQUlXLGNBQWNSLEtBQUtTLE1BQU0sRUFBRSxlQUFlO0lBQzlDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CSDtJQUNoQ0UsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlY7SUFDOUIsTUFBTVcsbUJBQW1CO1FBQ3JCLE9BQU8sQ0FBQ0M7WUFDSixJQUFJWixhQUFhLE1BQU1PLGFBQWM7Z0JBQ2pDRSxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pULGNBQWM7WUFDbEIsT0FBTztnQkFDSFEsUUFBUUMsR0FBRyxDQUFDO2dCQUNaVCxjQUFjRCxhQUFhO1lBQy9CO1lBQ0ZZLE1BQU1DLGNBQWM7UUFDdEI7SUFDSjtJQUNBLE1BQU1DLHVCQUF1QjtRQUN6QixPQUFPLENBQUNGO1lBQ0pILFFBQVFDLEdBQUcsQ0FBQztZQUNaLElBQUlWLGVBQWUsR0FBSTtnQkFDbkJTLFFBQVFDLEdBQUcsQ0FBQztnQkFDWlQsY0FBY00sY0FBYztZQUNoQyxPQUFPO2dCQUNIRSxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pULGNBQWNELGFBQWE7WUFDL0I7WUFDRlksTUFBTUMsY0FBYztRQUN0QjtJQUNGO0lBQ0YsNkNBQTZDO0lBQzdDbEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJb0IsT0FBT1QsWUFBWVUsT0FBTztRQUM5QixJQUFJLEVBQUVaLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdVLEtBQUtFLHFCQUFxQjtRQUNsRCxJQUFJWCxZQUFZVSxPQUFPLEVBQUU7WUFDckJiLGdCQUFnQjtnQkFDWkM7Z0JBQ0FDO1lBQ0o7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDYTs7MEJBRUcsOERBQUNBO2dCQUFJQyxJQUFHO2dCQUFzQkMsV0FBVTtnQkFBa0JDLGlCQUFjOzBCQUdwRSw0RUFBQ0g7b0JBQ0dJLEtBQUtoQjtvQkFDTGlCLE9BQU87d0JBQ0hDLE1BQU0sQ0FBQ3hCLGFBQWFFLGFBQWFFLEtBQUs7b0JBQzFDO29CQUNBZ0IsV0FBVTs4QkFFVHJCLEtBQUswQixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ1YsOERBQUNUOzRCQUFZRSxXQUFVO3NDQUNuQiw0RUFBQzNCLGtEQUFLQTtnQ0FDRjJCLFdBQVU7Z0NBQ1ZRLEtBQUssa0JBQW9CLE9BQUZEO2dDQUN2QkUsSUFBSTtnQ0FDSkMsS0FBS0osRUFBRUssS0FBSyxJQUFJOzs7Ozs7MkJBTGRKOzs7Ozs7Ozs7Ozs7Ozs7MEJBYXRCLDhEQUFDVDtnQkFBSUUsV0FBVTs7a0NBQ1gsOERBQUNZO3dCQUNHLDhCQUE4Qjt3QkFDOUJDLFNBQVNuQjt3QkFDVCxrREFBa0Q7d0JBQ2xETSxXQUFXLDhCQUErRCxPQUFqQ3BCLGVBQWUsS0FBSztrQ0FFNUQ7Ozs7OztrQ0FFTCw4REFBQ2dDO3dCQUNHLDRDQUE0Qzt3QkFDNUMsd0JBQXdCO3dCQUN4QkMsU0FBU3RCO3dCQUNULGtEQUFrRDt3QkFDbERTLFdBQVcsOEJBQTZFLE9BQS9DcEIsZUFBZUQsS0FBS1MsTUFBTSxHQUFHLEtBQUs7a0NBRTFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0FqR01WO0tBQUFBO0FBbUdOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Nhcm91c2VsQ2F0dG8yL0Nhcm91c2VsQ2F0dG8yLnRzeD80ZTE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENhcm91c2VsQ2F0dG8yLnRzeFxuXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDYXJvdXNlbENhdHRvMiA9ICh7IGRhdGEgfToge1xuICAgIGRhdGE6IHtcbiAgICAgICAgaW1hZ2U6IHN0cmluZ1xuICAgIH1bXVxufSkgPT4ge1xuICAgIC8vIFN0YXRlIGFuZCBSZWYgaW5pdGlhbGl6YXRpb25cbiAgICBjb25zdCBbY3VycmVudEltZywgc2V0Q3VycmVudEltZ10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtjYXJvdXNlbFNpemUsIHNldENhcm91c2VsU2l6ZV0gPSB1c2VTdGF0ZSh7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSlcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZihudWxsKVxuICAgIGxldCB0b3RhbFNsaWRlcyA9IGRhdGEubGVuZ3RoOyAvLyBUb3RhbCBzbGlkZXNcbiAgICBjb25zb2xlLmxvZygndG90YWxTbGlkZXMgPT09ICcsIHRvdGFsU2xpZGVzKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudEltZyA9PT0nLCBjdXJyZW50SW1nKTtcbiAgICBjb25zdCBjbGlja05leHRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEltZyArIDEgPT09IHRvdGFsU2xpZGVzICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgQVQgRU5EJyk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEltZygwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBhdCBlbmQgeWV0Jyk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEltZyhjdXJyZW50SW1nICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjbGlja1ByZXZpb3VzSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBQUkVWSU9VUyBDTElDSycpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbWcgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBBVCBiZWdpbm5pbmcnKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1nKHRvdGFsU2xpZGVzIC0gMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgYXQgZW5kIHlldCcpO1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbWcoY3VycmVudEltZyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAvLyB1c2VFZmZlY3QgdG8gZ2V0IHRoZSBpbml0aWFsIGNhcm91c2VsIHNpemVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbSA9IGNhcm91c2VsUmVmLmN1cnJlbnQgYXMgdW5rbm93biBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRDYXJvdXNlbFNpemUoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogQ2Fyb3VzZWwgY29udGFpbmVyICovfVxuICAgICAgICAgICAgPGRpdiBpZD1cImluZGljYXRvcnMtY2Fyb3VzZWxcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIiBkYXRhLWNhcm91c2VsPVwic3RhdGljXCI+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3ctODAgaC02MCByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSc+ICovfVxuICAgICAgICAgICAgICAgIHsvKiBJbWFnZSBjb250YWluZXIgKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9e2Nhcm91c2VsUmVmfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLWN1cnJlbnRJbWcgKiBjYXJvdXNlbFNpemUud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGFic29sdXRlIGZsZXggdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJz5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1hcCB0aHJvdWdoIGRhdGEgdG8gcmVuZGVyIGltYWdlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPSdyZWxhdGl2ZSBzaHJpbmstMCB3LWZ1bGwgaC1mdWxsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwb2ludGVyLWV2ZW50cy1ub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BjYXJvdXNlbC1pbWFnZS0ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3YuaW1hZ2UgfHwgXCIvaGVyby1kZXNrdG9wLnBuZ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gYnV0dG9ucyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LTMnPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9e2N1cnJlbnRJbWcgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrUHJldmlvdXNIYW5kbGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRJbWcocHJldiA9PiBwcmV2IC0gMSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBweC00IHB5LTIgZm9udC1ib2xkICR7Y3VycmVudEltZyA9PT0gMCAmJiAnb3BhY2l0eS01MCd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcIjxcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXtjdXJyZW50SW1nID09PSBkYXRhLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldE5leHRJbWFnZU51bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja05leHRIYW5kbGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRJbWcocHJldiA9PiBwcmV2ICsgMSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBweC00IHB5LTIgZm9udC1ib2xkICR7Y3VycmVudEltZyA9PT0gZGF0YS5sZW5ndGggLSAxICYmICdvcGFjaXR5LTUwJ31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1wiPlwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxDYXR0bzJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDYXJvdXNlbENhdHRvMiIsImRhdGEiLCJjdXJyZW50SW1nIiwic2V0Q3VycmVudEltZyIsImNhcm91c2VsU2l6ZSIsInNldENhcm91c2VsU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2Fyb3VzZWxSZWYiLCJ0b3RhbFNsaWRlcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjbGlja05leHRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrUHJldmlvdXNIYW5kbGVyIiwiZWxlbSIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImRhdGEtY2Fyb3VzZWwiLCJyZWYiLCJzdHlsZSIsImxlZnQiLCJtYXAiLCJ2IiwiaSIsImFsdCIsImZpbGwiLCJzcmMiLCJpbWFnZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CarouselCatto2/CarouselCatto2.tsx\n"));

/***/ })

});