(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 2762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(925);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1051);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Help = function (_React$Component) {
    _inherits(Help, _React$Component);

    function Help() {
        _classCallCheck(this, Help);

        return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).apply(this, arguments));
    }

    _createClass(Help, [{
        key: "render",
        value: function render() {
            var path = Object(lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.match.params).map(function (p) {
                return p[1];
            }).join("/");

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-container page-layout help-content-layout" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block page-layout" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block main-content wrap regular-padding" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block medium-3" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-content help-toc responsive-list" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_2__["default"], { path: "toc" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block medium-9" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-content main-content" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_2__["default"], { path: path || "index" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Help;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ })

}]);
//# sourceMappingURL=help.js.map