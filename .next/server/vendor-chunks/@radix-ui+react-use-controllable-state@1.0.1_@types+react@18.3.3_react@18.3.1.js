"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.3_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.3_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useControllableState: () => (/* binding */ $71cd76cc60e0454e$export$6f32135080cb4c3)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\");\n\n\n\n\n\nfunction $71cd76cc60e0454e$export$6f32135080cb4c3({ prop: prop , defaultProp: defaultProp , onChange: onChange = ()=>{}  }) {\n    const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({\n        defaultProp: defaultProp,\n        onChange: onChange\n    });\n    const isControlled = prop !== undefined;\n    const value1 = isControlled ? prop : uncontrolledProp;\n    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue)=>{\n        if (isControlled) {\n            const setter = nextValue;\n            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;\n            if (value !== prop) handleChange(value);\n        } else setUncontrolledProp(nextValue);\n    }, [\n        isControlled,\n        prop,\n        setUncontrolledProp,\n        handleChange\n    ]);\n    return [\n        value1,\n        setValue\n    ];\n}\nfunction $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp: defaultProp , onChange: onChange  }) {\n    const uncontrolledState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp);\n    const [value] = uncontrolledState;\n    const prevValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);\n    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (prevValueRef.current !== value) {\n            handleChange(value);\n            prevValueRef.current = value;\n        }\n    }, [\n        value,\n        prevValueRef,\n        handleChange\n    ]);\n    return uncontrolledState;\n}\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjMuM19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtY29udHJvbGxhYmxlLXN0YXRlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2STtBQUNwRDs7OztBQUl6RixvREFBb0Qsc0VBQXNFO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLGdGQUFxQjtBQUM5QyxxQkFBcUIsa0RBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnREFBZ0Q7QUFDdEcsOEJBQThCLCtDQUFlO0FBQzdDO0FBQ0EseUJBQXlCLDZDQUFhO0FBQ3RDLHlCQUF5QixnRkFBcUI7QUFDOUMsSUFBSSxnREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUswRTtBQUMxRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZUAxLjAuMV9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGUvZGlzdC9pbmRleC5tanM/NjQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrIGFzICRiblB3OSR1c2VDYWxsYmFjaywgdXNlU3RhdGUgYXMgJGJuUHc5JHVzZVN0YXRlLCB1c2VSZWYgYXMgJGJuUHc5JHVzZVJlZiwgdXNlRWZmZWN0IGFzICRiblB3OSR1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VDYWxsYmFja1JlZiBhcyAkYm5QdzkkdXNlQ2FsbGJhY2tSZWZ9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZlwiO1xuXG5cblxuZnVuY3Rpb24gJDcxY2Q3NmNjNjBlMDQ1NGUkZXhwb3J0JDZmMzIxMzUwODBjYjRjMyh7IHByb3A6IHByb3AgLCBkZWZhdWx0UHJvcDogZGVmYXVsdFByb3AgLCBvbkNoYW5nZTogb25DaGFuZ2UgPSAoKT0+e30gIH0pIHtcbiAgICBjb25zdCBbdW5jb250cm9sbGVkUHJvcCwgc2V0VW5jb250cm9sbGVkUHJvcF0gPSAkNzFjZDc2Y2M2MGUwNDU0ZSR2YXIkdXNlVW5jb250cm9sbGVkU3RhdGUoe1xuICAgICAgICBkZWZhdWx0UHJvcDogZGVmYXVsdFByb3AsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZVxuICAgIH0pO1xuICAgIGNvbnN0IGlzQ29udHJvbGxlZCA9IHByb3AgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCB2YWx1ZTEgPSBpc0NvbnRyb2xsZWQgPyBwcm9wIDogdW5jb250cm9sbGVkUHJvcDtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAkYm5QdzkkdXNlQ2FsbGJhY2tSZWYob25DaGFuZ2UpO1xuICAgIGNvbnN0IHNldFZhbHVlID0gJGJuUHc5JHVzZUNhbGxiYWNrKChuZXh0VmFsdWUpPT57XG4gICAgICAgIGlmIChpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNldHRlciA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG5leHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHNldHRlcihwcm9wKSA6IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcHJvcCkgaGFuZGxlQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHNldFVuY29udHJvbGxlZFByb3AobmV4dFZhbHVlKTtcbiAgICB9LCBbXG4gICAgICAgIGlzQ29udHJvbGxlZCxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgc2V0VW5jb250cm9sbGVkUHJvcCxcbiAgICAgICAgaGFuZGxlQ2hhbmdlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdmFsdWUxLFxuICAgICAgICBzZXRWYWx1ZVxuICAgIF07XG59XG5mdW5jdGlvbiAkNzFjZDc2Y2M2MGUwNDU0ZSR2YXIkdXNlVW5jb250cm9sbGVkU3RhdGUoeyBkZWZhdWx0UHJvcDogZGVmYXVsdFByb3AgLCBvbkNoYW5nZTogb25DaGFuZ2UgIH0pIHtcbiAgICBjb25zdCB1bmNvbnRyb2xsZWRTdGF0ZSA9ICRiblB3OSR1c2VTdGF0ZShkZWZhdWx0UHJvcCk7XG4gICAgY29uc3QgW3ZhbHVlXSA9IHVuY29udHJvbGxlZFN0YXRlO1xuICAgIGNvbnN0IHByZXZWYWx1ZVJlZiA9ICRiblB3OSR1c2VSZWYodmFsdWUpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICRiblB3OSR1c2VDYWxsYmFja1JlZihvbkNoYW5nZSk7XG4gICAgJGJuUHc5JHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAocHJldlZhbHVlUmVmLmN1cnJlbnQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgcHJldlZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHByZXZWYWx1ZVJlZixcbiAgICAgICAgaGFuZGxlQ2hhbmdlXG4gICAgXSk7XG4gICAgcmV0dXJuIHVuY29udHJvbGxlZFN0YXRlO1xufVxuXG5cblxuXG5leHBvcnQgeyQ3MWNkNzZjYzYwZTA0NTRlJGV4cG9ydCQ2ZjMyMTM1MDgwY2I0YzMgYXMgdXNlQ29udHJvbGxhYmxlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs\n");

/***/ })

};
;