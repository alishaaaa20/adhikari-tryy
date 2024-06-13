"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@floating-ui+react-dom@2.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@floating-ui+react-dom@2.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@floating-ui+react-dom@2.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@floating-ui+react-dom@2.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrow: () => (/* binding */ arrow),\n/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),\n/* harmony export */   autoUpdate: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoUpdate),\n/* harmony export */   computePosition: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition),\n/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),\n/* harmony export */   flip: () => (/* binding */ flip),\n/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors),\n/* harmony export */   hide: () => (/* binding */ hide),\n/* harmony export */   inline: () => (/* binding */ inline),\n/* harmony export */   limitShift: () => (/* binding */ limitShift),\n/* harmony export */   offset: () => (/* binding */ offset),\n/* harmony export */   platform: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.platform),\n/* harmony export */   shift: () => (/* binding */ shift),\n/* harmony export */   size: () => (/* binding */ size),\n/* harmony export */   useFloating: () => (/* binding */ useFloating)\n/* harmony export */ });\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/./node_modules/.pnpm/@floating-ui+dom@1.6.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs\");\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.2.2/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n\n\n\n\n\n\nvar index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;\n\n// Fork of `fast-deep-equal` that only does the comparisons we need and compares\n// functions\nfunction deepEqual(a, b) {\n  if (a === b) {\n    return true;\n  }\n  if (typeof a !== typeof b) {\n    return false;\n  }\n  if (typeof a === 'function' && a.toString() === b.toString()) {\n    return true;\n  }\n  let length;\n  let i;\n  let keys;\n  if (a && b && typeof a === 'object') {\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length !== b.length) return false;\n      for (i = length; i-- !== 0;) {\n        if (!deepEqual(a[i], b[i])) {\n          return false;\n        }\n      }\n      return true;\n    }\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) {\n      return false;\n    }\n    for (i = length; i-- !== 0;) {\n      if (!{}.hasOwnProperty.call(b, keys[i])) {\n        return false;\n      }\n    }\n    for (i = length; i-- !== 0;) {\n      const key = keys[i];\n      if (key === '_owner' && a.$$typeof) {\n        continue;\n      }\n      if (!deepEqual(a[key], b[key])) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return a !== a && b !== b;\n}\n\nfunction getDPR(element) {\n  if (typeof window === 'undefined') {\n    return 1;\n  }\n  const win = element.ownerDocument.defaultView || window;\n  return win.devicePixelRatio || 1;\n}\n\nfunction roundByDPR(element, value) {\n  const dpr = getDPR(element);\n  return Math.round(value * dpr) / dpr;\n}\n\nfunction useLatestRef(value) {\n  const ref = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value);\n  index(() => {\n    ref.current = value;\n  });\n  return ref;\n}\n\n/**\n * Provides data to position a floating element.\n * @see https://floating-ui.com/docs/useFloating\n */\nfunction useFloating(options) {\n  if (options === void 0) {\n    options = {};\n  }\n  const {\n    placement = 'bottom',\n    strategy = 'absolute',\n    middleware = [],\n    platform,\n    elements: {\n      reference: externalReference,\n      floating: externalFloating\n    } = {},\n    transform = true,\n    whileElementsMounted,\n    open\n  } = options;\n  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2__.useState({\n    x: 0,\n    y: 0,\n    strategy,\n    placement,\n    middlewareData: {},\n    isPositioned: false\n  });\n  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_2__.useState(middleware);\n  if (!deepEqual(latestMiddleware, middleware)) {\n    setLatestMiddleware(middleware);\n  }\n  const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  const setReference = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {\n    if (node !== referenceRef.current) {\n      referenceRef.current = node;\n      _setReference(node);\n    }\n  }, []);\n  const setFloating = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {\n    if (node !== floatingRef.current) {\n      floatingRef.current = node;\n      _setFloating(node);\n    }\n  }, []);\n  const referenceEl = externalReference || _reference;\n  const floatingEl = externalFloating || _floating;\n  const referenceRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);\n  const floatingRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);\n  const dataRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(data);\n  const hasWhileElementsMounted = whileElementsMounted != null;\n  const whileElementsMountedRef = useLatestRef(whileElementsMounted);\n  const platformRef = useLatestRef(platform);\n  const update = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {\n    if (!referenceRef.current || !floatingRef.current) {\n      return;\n    }\n    const config = {\n      placement,\n      strategy,\n      middleware: latestMiddleware\n    };\n    if (platformRef.current) {\n      config.platform = platformRef.current;\n    }\n    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition)(referenceRef.current, floatingRef.current, config).then(data => {\n      const fullData = {\n        ...data,\n        isPositioned: true\n      };\n      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {\n        dataRef.current = fullData;\n        react_dom__WEBPACK_IMPORTED_MODULE_3__.flushSync(() => {\n          setData(fullData);\n        });\n      }\n    });\n  }, [latestMiddleware, placement, strategy, platformRef]);\n  index(() => {\n    if (open === false && dataRef.current.isPositioned) {\n      dataRef.current.isPositioned = false;\n      setData(data => ({\n        ...data,\n        isPositioned: false\n      }));\n    }\n  }, [open]);\n  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);\n  index(() => {\n    isMountedRef.current = true;\n    return () => {\n      isMountedRef.current = false;\n    };\n  }, []);\n  index(() => {\n    if (referenceEl) referenceRef.current = referenceEl;\n    if (floatingEl) floatingRef.current = floatingEl;\n    if (referenceEl && floatingEl) {\n      if (whileElementsMountedRef.current) {\n        return whileElementsMountedRef.current(referenceEl, floatingEl, update);\n      }\n      update();\n    }\n  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);\n  const refs = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    reference: referenceRef,\n    floating: floatingRef,\n    setReference,\n    setFloating\n  }), [setReference, setFloating]);\n  const elements = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    reference: referenceEl,\n    floating: floatingEl\n  }), [referenceEl, floatingEl]);\n  const floatingStyles = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {\n    const initialStyles = {\n      position: strategy,\n      left: 0,\n      top: 0\n    };\n    if (!elements.floating) {\n      return initialStyles;\n    }\n    const x = roundByDPR(elements.floating, data.x);\n    const y = roundByDPR(elements.floating, data.y);\n    if (transform) {\n      return {\n        ...initialStyles,\n        transform: \"translate(\" + x + \"px, \" + y + \"px)\",\n        ...(getDPR(elements.floating) >= 1.5 && {\n          willChange: 'transform'\n        })\n      };\n    }\n    return {\n      position: strategy,\n      left: x,\n      top: y\n    };\n  }, [strategy, transform, elements.floating, data.x, data.y]);\n  return react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    ...data,\n    update,\n    refs,\n    elements,\n    floatingStyles\n  }), [data, update, refs, elements, floatingStyles]);\n}\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */\nconst arrow$1 = options => {\n  function isRef(value) {\n    return {}.hasOwnProperty.call(value, 'current');\n  }\n  return {\n    name: 'arrow',\n    options,\n    fn(state) {\n      const {\n        element,\n        padding\n      } = typeof options === 'function' ? options(state) : options;\n      if (element && isRef(element)) {\n        if (element.current != null) {\n          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n            element: element.current,\n            padding\n          }).fn(state);\n        }\n        return {};\n      }\n      if (element) {\n        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n          element,\n          padding\n        }).fn(state);\n      }\n      return {};\n    }\n  };\n};\n\n/**\n * Modifies the placement by translating the floating element along the\n * specified axes.\n * A number (shorthand for `mainAxis` or distance), or an axes configuration\n * object may be passed.\n * @see https://floating-ui.com/docs/offset\n */\nconst offset = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by shifting it in order to\n * keep it in view when it will overflow the clipping boundary.\n * @see https://floating-ui.com/docs/shift\n */\nconst shift = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift)(options),\n  options: [options, deps]\n});\n/**\n * Built-in `limiter` that will stop `shift()` at a certain point.\n */\nconst limitShift = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by flipping the `placement`\n * in order to keep it in view when the preferred placement(s) will overflow the\n * clipping boundary. Alternative to `autoPlacement`.\n * @see https://floating-ui.com/docs/flip\n */\nconst flip = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data that allows you to change the size of the floating element —\n * for instance, prevent it from overflowing the clipping boundary or match the\n * width of the reference element.\n * @see https://floating-ui.com/docs/size\n */\nconst size = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by choosing the placement\n * that has the most space available automatically, without needing to specify a\n * preferred placement. Alternative to `flip`.\n * @see https://floating-ui.com/docs/autoPlacement\n */\nconst autoPlacement = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data to hide the floating element in applicable situations, such as\n * when it is not in the same clipping context as the reference element.\n * @see https://floating-ui.com/docs/hide\n */\nconst hide = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides improved positioning for inline reference elements that can span\n * over multiple lines, such as hyperlinks or range selections.\n * @see https://floating-ui.com/docs/inline\n */\nconst inline = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */\nconst arrow = (options, deps) => ({\n  ...arrow$1(options),\n  options: [options, deps]\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3JlYWN0LWRvbUAyLjEuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMV9fcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvcmVhY3QtZG9tL2Rpc3QvZmxvYXRpbmctdWkucmVhY3QtZG9tLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZPO0FBQzlIO0FBQ2hGO0FBQ29CO0FBQ2I7O0FBRXRDLDhDQUE4QyxrREFBZSxHQUFHLDRDQUFTOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx5Q0FBWTtBQUMxQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMEJBQTBCLDJDQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsR0FBRztBQUNILGtEQUFrRCwyQ0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkNBQWM7QUFDcEQsb0NBQW9DLDJDQUFjO0FBQ2xELHVCQUF1Qiw4Q0FBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDhDQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLHlDQUFZO0FBQ25DLHNCQUFzQix5Q0FBWTtBQUNsQyxrQkFBa0IseUNBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFrQjtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNILHVCQUF1Qix5Q0FBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxlQUFlLDBDQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQiwwQ0FBYTtBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QiwwQ0FBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLDBDQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxpQkFBaUIsdURBQU87QUFDeEI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQU87QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHdEQUFRO0FBQ2I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdURBQU87QUFDWjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNERBQVk7QUFDakI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBTTtBQUNYO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQU07QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLCtEQUFlO0FBQ3BCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFNO0FBQ1g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssd0RBQVE7QUFDYjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFaUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3JlYWN0LWRvbUAyLjEuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMV9fcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvcmVhY3QtZG9tL2Rpc3QvZmxvYXRpbmctdWkucmVhY3QtZG9tLm1qcz9iOTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVQb3NpdGlvbiwgYXJyb3cgYXMgYXJyb3ckMiwgb2Zmc2V0IGFzIG9mZnNldCQxLCBzaGlmdCBhcyBzaGlmdCQxLCBsaW1pdFNoaWZ0IGFzIGxpbWl0U2hpZnQkMSwgZmxpcCBhcyBmbGlwJDEsIHNpemUgYXMgc2l6ZSQxLCBhdXRvUGxhY2VtZW50IGFzIGF1dG9QbGFjZW1lbnQkMSwgaGlkZSBhcyBoaWRlJDEsIGlubGluZSBhcyBpbmxpbmUkMSB9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuZXhwb3J0IHsgYXV0b1VwZGF0ZSwgY29tcHV0ZVBvc2l0aW9uLCBkZXRlY3RPdmVyZmxvdywgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMsIHBsYXRmb3JtIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbnZhciBpbmRleCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5cbi8vIEZvcmsgb2YgYGZhc3QtZGVlcC1lcXVhbGAgdGhhdCBvbmx5IGRvZXMgdGhlIGNvbXBhcmlzb25zIHdlIG5lZWQgYW5kIGNvbXBhcmVzXG4vLyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgbGVuZ3RoO1xuICBsZXQgaTtcbiAgbGV0IGtleXM7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICBpZiAoIWRlZXBFcXVhbChhW2ldLCBiW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBpZiAoIXt9Lmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoa2V5ID09PSAnX293bmVyJyAmJiBhLiQkdHlwZW9mKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cblxuZnVuY3Rpb24gZ2V0RFBSKGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgY29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgcmV0dXJuIHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG59XG5cbmZ1bmN0aW9uIHJvdW5kQnlEUFIoZWxlbWVudCwgdmFsdWUpIHtcbiAgY29uc3QgZHByID0gZ2V0RFBSKGVsZW1lbnQpO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIGRwcikgLyBkcHI7XG59XG5cbmZ1bmN0aW9uIHVzZUxhdGVzdFJlZih2YWx1ZSkge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYodmFsdWUpO1xuICBpbmRleCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWY7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhIGZsb2F0aW5nIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvdXNlRmxvYXRpbmdcbiAqL1xuZnVuY3Rpb24gdXNlRmxvYXRpbmcob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbWlkZGxld2FyZSA9IFtdLFxuICAgIHBsYXRmb3JtLFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICByZWZlcmVuY2U6IGV4dGVybmFsUmVmZXJlbmNlLFxuICAgICAgZmxvYXRpbmc6IGV4dGVybmFsRmxvYXRpbmdcbiAgICB9ID0ge30sXG4gICAgdHJhbnNmb3JtID0gdHJ1ZSxcbiAgICB3aGlsZUVsZW1lbnRzTW91bnRlZCxcbiAgICBvcGVuXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHN0cmF0ZWd5LFxuICAgIHBsYWNlbWVudCxcbiAgICBtaWRkbGV3YXJlRGF0YToge30sXG4gICAgaXNQb3NpdGlvbmVkOiBmYWxzZVxuICB9KTtcbiAgY29uc3QgW2xhdGVzdE1pZGRsZXdhcmUsIHNldExhdGVzdE1pZGRsZXdhcmVdID0gUmVhY3QudXNlU3RhdGUobWlkZGxld2FyZSk7XG4gIGlmICghZGVlcEVxdWFsKGxhdGVzdE1pZGRsZXdhcmUsIG1pZGRsZXdhcmUpKSB7XG4gICAgc2V0TGF0ZXN0TWlkZGxld2FyZShtaWRkbGV3YXJlKTtcbiAgfVxuICBjb25zdCBbX3JlZmVyZW5jZSwgX3NldFJlZmVyZW5jZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW19mbG9hdGluZywgX3NldEZsb2F0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBzZXRSZWZlcmVuY2UgPSBSZWFjdC51c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICBpZiAobm9kZSAhPT0gcmVmZXJlbmNlUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZmVyZW5jZVJlZi5jdXJyZW50ID0gbm9kZTtcbiAgICAgIF9zZXRSZWZlcmVuY2Uobm9kZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IHNldEZsb2F0aW5nID0gUmVhY3QudXNlQ2FsbGJhY2sobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IGZsb2F0aW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgIGZsb2F0aW5nUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgX3NldEZsb2F0aW5nKG5vZGUpO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCByZWZlcmVuY2VFbCA9IGV4dGVybmFsUmVmZXJlbmNlIHx8IF9yZWZlcmVuY2U7XG4gIGNvbnN0IGZsb2F0aW5nRWwgPSBleHRlcm5hbEZsb2F0aW5nIHx8IF9mbG9hdGluZztcbiAgY29uc3QgcmVmZXJlbmNlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBmbG9hdGluZ1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgZGF0YVJlZiA9IFJlYWN0LnVzZVJlZihkYXRhKTtcbiAgY29uc3QgaGFzV2hpbGVFbGVtZW50c01vdW50ZWQgPSB3aGlsZUVsZW1lbnRzTW91bnRlZCAhPSBudWxsO1xuICBjb25zdCB3aGlsZUVsZW1lbnRzTW91bnRlZFJlZiA9IHVzZUxhdGVzdFJlZih3aGlsZUVsZW1lbnRzTW91bnRlZCk7XG4gIGNvbnN0IHBsYXRmb3JtUmVmID0gdXNlTGF0ZXN0UmVmKHBsYXRmb3JtKTtcbiAgY29uc3QgdXBkYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghcmVmZXJlbmNlUmVmLmN1cnJlbnQgfHwgIWZsb2F0aW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtaWRkbGV3YXJlOiBsYXRlc3RNaWRkbGV3YXJlXG4gICAgfTtcbiAgICBpZiAocGxhdGZvcm1SZWYuY3VycmVudCkge1xuICAgICAgY29uZmlnLnBsYXRmb3JtID0gcGxhdGZvcm1SZWYuY3VycmVudDtcbiAgICB9XG4gICAgY29tcHV0ZVBvc2l0aW9uKHJlZmVyZW5jZVJlZi5jdXJyZW50LCBmbG9hdGluZ1JlZi5jdXJyZW50LCBjb25maWcpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaXNQb3NpdGlvbmVkOiB0cnVlXG4gICAgICB9O1xuICAgICAgaWYgKGlzTW91bnRlZFJlZi5jdXJyZW50ICYmICFkZWVwRXF1YWwoZGF0YVJlZi5jdXJyZW50LCBmdWxsRGF0YSkpIHtcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0gZnVsbERhdGE7XG4gICAgICAgIFJlYWN0RE9NLmZsdXNoU3luYygoKSA9PiB7XG4gICAgICAgICAgc2V0RGF0YShmdWxsRGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbbGF0ZXN0TWlkZGxld2FyZSwgcGxhY2VtZW50LCBzdHJhdGVneSwgcGxhdGZvcm1SZWZdKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIGlmIChvcGVuID09PSBmYWxzZSAmJiBkYXRhUmVmLmN1cnJlbnQuaXNQb3NpdGlvbmVkKSB7XG4gICAgICBkYXRhUmVmLmN1cnJlbnQuaXNQb3NpdGlvbmVkID0gZmFsc2U7XG4gICAgICBzZXREYXRhKGRhdGEgPT4gKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaXNQb3NpdGlvbmVkOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwgW29wZW5dKTtcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIGluZGV4KCgpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlRWwpIHJlZmVyZW5jZVJlZi5jdXJyZW50ID0gcmVmZXJlbmNlRWw7XG4gICAgaWYgKGZsb2F0aW5nRWwpIGZsb2F0aW5nUmVmLmN1cnJlbnQgPSBmbG9hdGluZ0VsO1xuICAgIGlmIChyZWZlcmVuY2VFbCAmJiBmbG9hdGluZ0VsKSB7XG4gICAgICBpZiAod2hpbGVFbGVtZW50c01vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICByZXR1cm4gd2hpbGVFbGVtZW50c01vdW50ZWRSZWYuY3VycmVudChyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgdXBkYXRlKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSwgW3JlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB1cGRhdGUsIHdoaWxlRWxlbWVudHNNb3VudGVkUmVmLCBoYXNXaGlsZUVsZW1lbnRzTW91bnRlZF0pO1xuICBjb25zdCByZWZzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlUmVmLFxuICAgIGZsb2F0aW5nOiBmbG9hdGluZ1JlZixcbiAgICBzZXRSZWZlcmVuY2UsXG4gICAgc2V0RmxvYXRpbmdcbiAgfSksIFtzZXRSZWZlcmVuY2UsIHNldEZsb2F0aW5nXSk7XG4gIGNvbnN0IGVsZW1lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlRWwsXG4gICAgZmxvYXRpbmc6IGZsb2F0aW5nRWxcbiAgfSksIFtyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbF0pO1xuICBjb25zdCBmbG9hdGluZ1N0eWxlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwXG4gICAgfTtcbiAgICBpZiAoIWVsZW1lbnRzLmZsb2F0aW5nKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0eWxlcztcbiAgICB9XG4gICAgY29uc3QgeCA9IHJvdW5kQnlEUFIoZWxlbWVudHMuZmxvYXRpbmcsIGRhdGEueCk7XG4gICAgY29uc3QgeSA9IHJvdW5kQnlEUFIoZWxlbWVudHMuZmxvYXRpbmcsIGRhdGEueSk7XG4gICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0eWxlcyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiLFxuICAgICAgICAuLi4oZ2V0RFBSKGVsZW1lbnRzLmZsb2F0aW5nKSA+PSAxLjUgJiYge1xuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHN0cmF0ZWd5LFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeVxuICAgIH07XG4gIH0sIFtzdHJhdGVneSwgdHJhbnNmb3JtLCBlbGVtZW50cy5mbG9hdGluZywgZGF0YS54LCBkYXRhLnldKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICAuLi5kYXRhLFxuICAgIHVwZGF0ZSxcbiAgICByZWZzLFxuICAgIGVsZW1lbnRzLFxuICAgIGZsb2F0aW5nU3R5bGVzXG4gIH0pLCBbZGF0YSwgdXBkYXRlLCByZWZzLCBlbGVtZW50cywgZmxvYXRpbmdTdHlsZXNdKTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIHBvc2l0aW9uIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgc28gdGhhdCBpdFxuICogYXBwZWFycyBjZW50ZXJlZCB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBUaGlzIHdyYXBzIHRoZSBjb3JlIGBhcnJvd2AgbWlkZGxld2FyZSB0byBhbGxvdyBSZWFjdCByZWZzIGFzIHRoZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2Fycm93XG4gKi9cbmNvbnN0IGFycm93JDEgPSBvcHRpb25zID0+IHtcbiAgZnVuY3Rpb24gaXNSZWYodmFsdWUpIHtcbiAgICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2N1cnJlbnQnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdhcnJvdycsXG4gICAgb3B0aW9ucyxcbiAgICBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBwYWRkaW5nXG4gICAgICB9ID0gdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zKHN0YXRlKSA6IG9wdGlvbnM7XG4gICAgICBpZiAoZWxlbWVudCAmJiBpc1JlZihlbGVtZW50KSkge1xuICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYXJyb3ckMih7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LmN1cnJlbnQsXG4gICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgfSkuZm4oc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBhcnJvdyQyKHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgfSkuZm4oc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHBsYWNlbWVudCBieSB0cmFuc2xhdGluZyB0aGUgZmxvYXRpbmcgZWxlbWVudCBhbG9uZyB0aGVcbiAqIHNwZWNpZmllZCBheGVzLlxuICogQSBudW1iZXIgKHNob3J0aGFuZCBmb3IgYG1haW5BeGlzYCBvciBkaXN0YW5jZSksIG9yIGFuIGF4ZXMgY29uZmlndXJhdGlvblxuICogb2JqZWN0IG1heSBiZSBwYXNzZWQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvb2Zmc2V0XG4gKi9cbmNvbnN0IG9mZnNldCA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5vZmZzZXQkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgc2hpZnRpbmcgaXQgaW4gb3JkZXIgdG9cbiAqIGtlZXAgaXQgaW4gdmlldyB3aGVuIGl0IHdpbGwgb3ZlcmZsb3cgdGhlIGNsaXBwaW5nIGJvdW5kYXJ5LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3NoaWZ0XG4gKi9cbmNvbnN0IHNoaWZ0ID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLnNoaWZ0JDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG4vKipcbiAqIEJ1aWx0LWluIGBsaW1pdGVyYCB0aGF0IHdpbGwgc3RvcCBgc2hpZnQoKWAgYXQgYSBjZXJ0YWluIHBvaW50LlxuICovXG5jb25zdCBsaW1pdFNoaWZ0ID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLmxpbWl0U2hpZnQkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgZmxpcHBpbmcgdGhlIGBwbGFjZW1lbnRgXG4gKiBpbiBvcmRlciB0byBrZWVwIGl0IGluIHZpZXcgd2hlbiB0aGUgcHJlZmVycmVkIHBsYWNlbWVudChzKSB3aWxsIG92ZXJmbG93IHRoZVxuICogY2xpcHBpbmcgYm91bmRhcnkuIEFsdGVybmF0aXZlIHRvIGBhdXRvUGxhY2VtZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9mbGlwXG4gKi9cbmNvbnN0IGZsaXAgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4uZmxpcCQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdGhhdCBhbGxvd3MgeW91IHRvIGNoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCDigJRcbiAqIGZvciBpbnN0YW5jZSwgcHJldmVudCBpdCBmcm9tIG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyBib3VuZGFyeSBvciBtYXRjaCB0aGVcbiAqIHdpZHRoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9zaXplXG4gKi9cbmNvbnN0IHNpemUgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4uc2l6ZSQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBjaG9vc2luZyB0aGUgcGxhY2VtZW50XG4gKiB0aGF0IGhhcyB0aGUgbW9zdCBzcGFjZSBhdmFpbGFibGUgYXV0b21hdGljYWxseSwgd2l0aG91dCBuZWVkaW5nIHRvIHNwZWNpZnkgYVxuICogcHJlZmVycmVkIHBsYWNlbWVudC4gQWx0ZXJuYXRpdmUgdG8gYGZsaXBgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9QbGFjZW1lbnRcbiAqL1xuY29uc3QgYXV0b1BsYWNlbWVudCA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5hdXRvUGxhY2VtZW50JDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBoaWRlIHRoZSBmbG9hdGluZyBlbGVtZW50IGluIGFwcGxpY2FibGUgc2l0dWF0aW9ucywgc3VjaCBhc1xuICogd2hlbiBpdCBpcyBub3QgaW4gdGhlIHNhbWUgY2xpcHBpbmcgY29udGV4dCBhcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvaGlkZVxuICovXG5jb25zdCBoaWRlID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLmhpZGUkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBQcm92aWRlcyBpbXByb3ZlZCBwb3NpdGlvbmluZyBmb3IgaW5saW5lIHJlZmVyZW5jZSBlbGVtZW50cyB0aGF0IGNhbiBzcGFuXG4gKiBvdmVyIG11bHRpcGxlIGxpbmVzLCBzdWNoIGFzIGh5cGVybGlua3Mgb3IgcmFuZ2Ugc2VsZWN0aW9ucy5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9pbmxpbmVcbiAqL1xuY29uc3QgaW5saW5lID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLmlubGluZSQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gcG9zaXRpb24gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBzbyB0aGF0IGl0XG4gKiBhcHBlYXJzIGNlbnRlcmVkIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIFRoaXMgd3JhcHMgdGhlIGNvcmUgYGFycm93YCBtaWRkbGV3YXJlIHRvIGFsbG93IFJlYWN0IHJlZnMgYXMgdGhlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXJyb3dcbiAqL1xuY29uc3QgYXJyb3cgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4uYXJyb3ckMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuZXhwb3J0IHsgYXJyb3csIGF1dG9QbGFjZW1lbnQsIGZsaXAsIGhpZGUsIGlubGluZSwgbGltaXRTaGlmdCwgb2Zmc2V0LCBzaGlmdCwgc2l6ZSwgdXNlRmxvYXRpbmcgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@floating-ui+react-dom@2.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs\n");

/***/ })

};
;