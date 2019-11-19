webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar/Title.js":
/*!**************************************!*\
  !*** ./components/Calendar/Title.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CalendarContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/CalendarContext */ "./components/Calendar/context/CalendarContext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/jordanrendall/DevProjects/Github/react-calendar/components/Calendar/Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Title__StyledTitle",
  componentId: "sc-17son1j-0"
})(["text-align:center;"]);
var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December'];
var Title = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function () {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_CalendarContext__WEBPACK_IMPORTED_MODULE_1__["CalendarContext"]),
      _useContext$state = _useContext.state,
      month = _useContext$state.month,
      year = _useContext$state.year;

  return __jsx(StyledTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, Months[month], " ", year);
});
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=index.js.e8ef25d50f3377affce1.hot-update.js.map