"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-previous@1.0.1_@types+react@18.3.3_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-previous@1.0.1_@types+react@18.3.3_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-previous/dist/index.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-previous/dist/index.mjs ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePrevious: () => (/* binding */ $010c2913dbd2fe3d$export$5cae361ad82dce8b)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\nfunction $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({\n        value: value,\n        previous: value\n    }); // We compare values before making an update to ensure that\n    // a change has been made. This ensures the previous value is\n    // persisted correctly between renders.\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{\n        if (ref.current.value !== value) {\n            ref.current.previous = ref.current.value;\n            ref.current.value = value;\n        }\n        return ref.current.previous;\n    }, [\n        value\n    ]);\n}\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1wcmV2aW91c0AxLjAuMV9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1wcmV2aW91cy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5RTs7O0FBR3pFO0FBQ0EsZ0JBQWdCLDZDQUFhO0FBQzdCO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBO0FBQ0EsV0FBVyw4Q0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7QUFLa0U7QUFDbEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1wcmV2aW91c0AxLjAuMV9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1wcmV2aW91cy9kaXN0L2luZGV4Lm1qcz8wYjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmIGFzICQ4THZ2SyR1c2VSZWYsIHVzZU1lbW8gYXMgJDhMdnZLJHVzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xuXG5cbmZ1bmN0aW9uICQwMTBjMjkxM2RiZDJmZTNkJGV4cG9ydCQ1Y2FlMzYxYWQ4MmRjZThiKHZhbHVlKSB7XG4gICAgY29uc3QgcmVmID0gJDhMdnZLJHVzZVJlZih7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgcHJldmlvdXM6IHZhbHVlXG4gICAgfSk7IC8vIFdlIGNvbXBhcmUgdmFsdWVzIGJlZm9yZSBtYWtpbmcgYW4gdXBkYXRlIHRvIGVuc3VyZSB0aGF0XG4gICAgLy8gYSBjaGFuZ2UgaGFzIGJlZW4gbWFkZS4gVGhpcyBlbnN1cmVzIHRoZSBwcmV2aW91cyB2YWx1ZSBpc1xuICAgIC8vIHBlcnNpc3RlZCBjb3JyZWN0bHkgYmV0d2VlbiByZW5kZXJzLlxuICAgIHJldHVybiAkOEx2dkskdXNlTWVtbygoKT0+e1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZWYuY3VycmVudC5wcmV2aW91cyA9IHJlZi5jdXJyZW50LnZhbHVlO1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQucHJldmlvdXM7XG4gICAgfSwgW1xuICAgICAgICB2YWx1ZVxuICAgIF0pO1xufVxuXG5cblxuXG5leHBvcnQgeyQwMTBjMjkxM2RiZDJmZTNkJGV4cG9ydCQ1Y2FlMzYxYWQ4MmRjZThiIGFzIHVzZVByZXZpb3VzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-previous/dist/index.mjs\n");

/***/ })

};
;