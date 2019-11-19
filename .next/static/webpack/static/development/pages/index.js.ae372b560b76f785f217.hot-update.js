webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar/CalendarWithState.js":
/*!**************************************************!*\
  !*** ./components/Calendar/CalendarWithState.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_CalendarContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context/CalendarContext */ "./components/Calendar/context/CalendarContext.js");
/* harmony import */ var _calendarFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendarFunctions */ "./components/Calendar/calendarFunctions.js");
/* harmony import */ var _LeftArrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LeftArrow */ "./components/Calendar/LeftArrow.js");
/* harmony import */ var _RightArrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RightArrow */ "./components/Calendar/RightArrow.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Day */ "./components/Calendar/Day.js");
/* harmony import */ var _DayNames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DayNames */ "./components/Calendar/DayNames.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Title */ "./components/Calendar/Title.js");








var _jsxFileName = "/Users/jordanrendall/DevProjects/Github/react-calendar/components/Calendar/CalendarWithState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










var Header = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].article.withConfig({
  displayName: "CalendarWithState__Header",
  componentId: "rf1fs2-0"
})(["grid-column:1/-1;display:grid;grid-template-columns:1fr 4fr 1fr;"]);
var StyledCalendar = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].article.withConfig({
  displayName: "CalendarWithState__StyledCalendar",
  componentId: "rf1fs2-1"
})(["width:75vw;height:70vw;display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(7,1fr);.week{border-top:1px solid black;}.week:last-child{border-bottom:1px solid black;border-bottom-left-radius:5px;border-bottom-right-radius:5px;}border-radius:1rem;box-shadow:0 0 1rem silver;padding:1rem;"]);

var CalendarWithState = function CalendarWithState() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(_context_CalendarContext__WEBPACK_IMPORTED_MODULE_10__["CalendarContext"]);
  var _context$state = context.state,
      month = _context$state.month,
      year = _context$state.year,
      firstDay = _context$state.firstDay,
      lastDay = _context$state.lastDay,
      numberOfDays = _context$state.numberOfDays,
      setState = context.setState;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(true),
      isCalendarLoading = _useState[0],
      setIsCalendarloading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      monthArray = _useState2[0],
      setMonthArray = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var result = Object(_calendarFunctions__WEBPACK_IMPORTED_MODULE_11__["getMonthStructure"])(year, month);
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        firstDay: result.firstDay,
        lastDay: result.lastDay,
        numberOfDays: result.numberOfDays
      });
    });
    var prevMonth = Object(_calendarFunctions__WEBPACK_IMPORTED_MODULE_11__["getPrevMonthDays"])(year, month);

    var monthNumbers = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default()({
      length: result.numberOfDays
    }, function (v, k) {
      return k + 1;
    });

    if (result.firstDay !== 0) {
      for (var i = 0; i < result.firstDay; i++) {
        monthNumbers.unshift(prevMonth - i);
      }
    }

    var j = 1;

    for (var i = 35 - result.numberOfDays - result.firstDay; i > 0; i--) {
      monthNumbers.push(j);
      j++;
    }

    setIsCalendarloading(false);
    setMonthArray(monthNumbers);
  }, [year, month]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "React Calendar"), !isCalendarLoading && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(StyledCalendar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_LeftArrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_Title__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_RightArrow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx(_DayNames__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), monthArray.map(function (day, i) {
    return __jsx(_Day__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: "day-".concat(day, "-").concat(i),
      number: day,
      shaded: i < firstDay || i > numberOfDays + firstDay - 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CalendarWithState);

/***/ })

})
//# sourceMappingURL=index.js.ae372b560b76f785f217.hot-update.js.map