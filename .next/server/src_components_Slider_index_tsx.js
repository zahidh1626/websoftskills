/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_Slider_index_tsx";
exports.ids = ["src_components_Slider_index_tsx"];
exports.modules = {

/***/ "./src/components/Slider/slider.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Slider/slider.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"slide\": \"slider_slide__pvypq\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvc2xpZGVyLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNpbXBsZS1ibG9nLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL3NsaWRlci5tb2R1bGUuc2Nzcz9hZWY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNsaWRlXCI6IFwic2xpZGVyX3NsaWRlX19wdnlwcVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Slider/slider.module.scss\n");

/***/ }),

/***/ "./src/components/Slider/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Slider/index.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"swiper\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"swiper/react\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.module.scss */ \"./src/components/Slider/slider.module.scss\");\n/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);\n([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Import Swiper styles\n\n\n\n\nconst Slider = ({ images , className  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,\n            swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination,\n            swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar,\n            swiper__WEBPACK_IMPORTED_MODULE_1__.A11y\n        ],\n        spaceBetween: 20,\n        slidesPerView: 1,\n        navigation: true,\n        pagination: {\n            clickable: true\n        },\n        loop: true,\n        className: className,\n        draggable: true,\n        children: images.map((each, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slide),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.transformImagePaths)(each),\n                    width: \"100%\",\n                    className: 'block cursor-grab'\n                }, void 0, false, {\n                    fileName: \"/home/coder/websoftskills/src/components/Slider/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 25\n                }, undefined)\n            }, i, false, {\n                fileName: \"/home/coder/websoftskills/src/components/Slider/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 21\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/home/coder/websoftskills/src/components/Slider/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDZDtBQUVsRCxFQUF1QjtBQUNKO0FBQ087QUFFZ0I7QUFDYTtBQUV2RCxLQUFLLENBQUNRLE1BQU0sSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBRUMsU0FBUyxFQUEyQyxDQUFDLEdBQUssQ0FBQztJQUNqRixNQUFNLDZFQUNETixnREFBTTtRQUNITyxPQUFPLEVBQUUsQ0FBQ1g7WUFBQUEsOENBQVU7WUFBRUMsOENBQVU7WUFBRUMsNkNBQVM7WUFBRUMsd0NBQUk7UUFBQSxDQUFDO1FBQ2xEUyxZQUFZLEVBQUUsRUFBRTtRQUNoQkMsYUFBYSxFQUFFLENBQUM7UUFDaEJDLFVBQVU7UUFDVkMsVUFBVSxFQUFFLENBQUM7WUFBQ0MsU0FBUyxFQUFFLElBQUk7UUFBQyxDQUFDO1FBQy9CQyxJQUFJLEVBQUUsSUFBSTtRQUNWUCxTQUFTLEVBQUVBLFNBQVM7UUFDcEJRLFNBQVMsRUFBRSxJQUFJO2tCQUdYVCxNQUFNLENBQUNVLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxDQUFDLCtFQUNkaEIscURBQVc7Z0JBQUNLLFNBQVMsRUFBRUosa0VBQWE7c0dBQ2hDaUIsQ0FBRztvQkFBQ0MsR0FBRyxFQUFFakIsaUVBQW1CLENBQUNhLElBQUk7b0JBQUdLLEtBQUssRUFBQyxDQUFNO29CQUFDZixTQUFTLEVBQUUsQ0FBbUI7Ozs7OztlQUR4Q1csQ0FBQzs7Ozs7Ozs7Ozs7QUFPakUsQ0FBQztBQUVELGlFQUFlYixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2ltcGxlLWJsb2ctdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvaW5kZXgudHN4PzBjYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5IH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9idW5kbGUnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1JbWFnZVBhdGhzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5jb25zdCBTbGlkZXIgPSAoeyBpbWFnZXMsIGNsYXNzTmFtZSB9OiB7IGltYWdlczogc3RyaW5nW10sIGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeV19XG4gICAgICAgICAgICBzcGFjZUJldHdlZW49ezIwfVxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cbiAgICAgICAgICAgIG5hdmlnYXRpb25cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XG4gICAgICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBkcmFnZ2FibGU9e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZXMubWFwKChlYWNoLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGV9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dHJhbnNmb3JtSW1hZ2VQYXRocyhlYWNoKX0gd2lkdGg9XCIxMDAlXCIgY2xhc3NOYW1lPXsnYmxvY2sgY3Vyc29yLWdyYWInfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvU3dpcGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiY2xhc3NlcyIsInRyYW5zZm9ybUltYWdlUGF0aHMiLCJTbGlkZXIiLCJpbWFnZXMiLCJjbGFzc05hbWUiLCJtb2R1bGVzIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsIm5hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibG9vcCIsImRyYWdnYWJsZSIsIm1hcCIsImVhY2giLCJpIiwic2xpZGUiLCJpbWciLCJzcmMiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Slider/index.tsx\n");

/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ })

};
;