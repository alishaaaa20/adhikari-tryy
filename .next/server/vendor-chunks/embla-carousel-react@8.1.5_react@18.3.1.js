"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-react@8.1.5_react@18.3.1";
exports.ids = ["vendor-chunks/embla-carousel-react@8.1.5_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/embla-carousel-react@8.1.5_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/embla-carousel-react@8.1.5_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useEmblaCarousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! embla-carousel-reactive-utils */ \"(ssr)/./node_modules/.pnpm/embla-carousel-reactive-utils@8.1.5_embla-carousel@8.1.5/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js\");\n/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ \"(ssr)/./node_modules/.pnpm/embla-carousel@8.1.5/node_modules/embla-carousel/esm/embla-carousel.esm.js\");\n\n\n\n\nfunction useEmblaCarousel(options = {}, plugins = []) {\n  const storedOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options);\n  const storedPlugins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(plugins);\n  const [emblaApi, setEmblaApi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const reInit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);\n  }, [emblaApi]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() && viewport) {\n      embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].globalOptions = useEmblaCarousel.globalOptions;\n      const newEmblaApi = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(viewport, storedOptions.current, storedPlugins.current);\n      setEmblaApi(newEmblaApi);\n      return () => newEmblaApi.destroy();\n    } else {\n      setEmblaApi(undefined);\n    }\n  }, [viewport, setEmblaApi]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.areOptionsEqual)(storedOptions.current, options)) return;\n    storedOptions.current = options;\n    reInit();\n  }, [options, reInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.arePluginsEqual)(storedPlugins.current, plugins)) return;\n    storedPlugins.current = plugins;\n    reInit();\n  }, [plugins, reInit]);\n  return [setViewport, emblaApi];\n}\nuseEmblaCarousel.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-react.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZW1ibGEtY2Fyb3VzZWwtcmVhY3RAOC4xLjVfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbC1yZWFjdC9lc20vZW1ibGEtY2Fyb3VzZWwtcmVhY3QuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFDMkI7QUFDakQ7O0FBRTNDLHNDQUFzQztBQUN0Qyx3QkFBd0IsNkNBQU07QUFDOUIsd0JBQXdCLDZDQUFNO0FBQzlCLGtDQUFrQywrQ0FBUTtBQUMxQyxrQ0FBa0MsK0NBQVE7QUFDMUMsaUJBQWlCLGtEQUFXO0FBQzVCO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWCxRQUFRLHdFQUFTO0FBQ2pCLE1BQU0sc0RBQWE7QUFDbkIsMEJBQTBCLDBEQUFhO0FBQ3ZDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1gsUUFBUSw4RUFBZTtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWCxRQUFRLDhFQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUV1QztBQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9lbWJsYS1jYXJvdXNlbC1yZWFjdEA4LjEuNV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL2VtYmxhLWNhcm91c2VsLXJlYWN0L2VzbS9lbWJsYS1jYXJvdXNlbC1yZWFjdC5lc20uanM/ZGVmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2FuVXNlRE9NLCBhcmVPcHRpb25zRXF1YWwsIGFyZVBsdWdpbnNFcXVhbCB9IGZyb20gJ2VtYmxhLWNhcm91c2VsLXJlYWN0aXZlLXV0aWxzJztcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsJztcblxuZnVuY3Rpb24gdXNlRW1ibGFDYXJvdXNlbChvcHRpb25zID0ge30sIHBsdWdpbnMgPSBbXSkge1xuICBjb25zdCBzdG9yZWRPcHRpb25zID0gdXNlUmVmKG9wdGlvbnMpO1xuICBjb25zdCBzdG9yZWRQbHVnaW5zID0gdXNlUmVmKHBsdWdpbnMpO1xuICBjb25zdCBbZW1ibGFBcGksIHNldEVtYmxhQXBpXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgcmVJbml0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChlbWJsYUFwaSkgZW1ibGFBcGkucmVJbml0KHN0b3JlZE9wdGlvbnMuY3VycmVudCwgc3RvcmVkUGx1Z2lucy5jdXJyZW50KTtcbiAgfSwgW2VtYmxhQXBpXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhblVzZURPTSgpICYmIHZpZXdwb3J0KSB7XG4gICAgICBFbWJsYUNhcm91c2VsLmdsb2JhbE9wdGlvbnMgPSB1c2VFbWJsYUNhcm91c2VsLmdsb2JhbE9wdGlvbnM7XG4gICAgICBjb25zdCBuZXdFbWJsYUFwaSA9IEVtYmxhQ2Fyb3VzZWwodmlld3BvcnQsIHN0b3JlZE9wdGlvbnMuY3VycmVudCwgc3RvcmVkUGx1Z2lucy5jdXJyZW50KTtcbiAgICAgIHNldEVtYmxhQXBpKG5ld0VtYmxhQXBpKTtcbiAgICAgIHJldHVybiAoKSA9PiBuZXdFbWJsYUFwaS5kZXN0cm95KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVtYmxhQXBpKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9LCBbdmlld3BvcnQsIHNldEVtYmxhQXBpXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFyZU9wdGlvbnNFcXVhbChzdG9yZWRPcHRpb25zLmN1cnJlbnQsIG9wdGlvbnMpKSByZXR1cm47XG4gICAgc3RvcmVkT3B0aW9ucy5jdXJyZW50ID0gb3B0aW9ucztcbiAgICByZUluaXQoKTtcbiAgfSwgW29wdGlvbnMsIHJlSW5pdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcmVQbHVnaW5zRXF1YWwoc3RvcmVkUGx1Z2lucy5jdXJyZW50LCBwbHVnaW5zKSkgcmV0dXJuO1xuICAgIHN0b3JlZFBsdWdpbnMuY3VycmVudCA9IHBsdWdpbnM7XG4gICAgcmVJbml0KCk7XG4gIH0sIFtwbHVnaW5zLCByZUluaXRdKTtcbiAgcmV0dXJuIFtzZXRWaWV3cG9ydCwgZW1ibGFBcGldO1xufVxudXNlRW1ibGFDYXJvdXNlbC5nbG9iYWxPcHRpb25zID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgeyB1c2VFbWJsYUNhcm91c2VsIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmxhLWNhcm91c2VsLXJlYWN0LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/embla-carousel-react@8.1.5_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js\n");

/***/ })

};
;