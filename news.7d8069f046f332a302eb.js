(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 2711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2712);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(steem_js_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(879);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var query = { tag: "blockchained", limit: 20 };

var alignRight = { textAlign: "right" };
var alignLeft = { textAlign: "left" };
var rowHeight = { height: "2rem" };
var bodyCell = { padding: "0.5rem 1rem" };
var headerCell = { padding: "0.85rem 1rem" };

var leftCell = _extends({}, alignLeft, bodyCell);
var rightCell = _extends({}, alignRight, bodyCell);

var leftCellHeader = _extends({}, alignLeft, headerCell);
var rightCellHeader = _extends({}, alignRight, headerCell);

var secondCol = _extends({}, leftCell, { width: "180px" });

var SomethingWentWrong = function SomethingWentWrong() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "p",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "news.errors.fetch" })
    );
};

var ReusableLink = function ReusableLink(_ref) {
    var data = _ref.data,
        url = _ref.url,
        _ref$isLink = _ref.isLink,
        isLink = _ref$isLink === undefined ? false : _ref$isLink;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "a",
        {
            href: "https://steemit.com" + url,
            rel: "noreferrer noopener",
            target: "_blank",
            style: { display: "block" },
            className: !isLink ? "primary-text" : ""
        },
        data
    );
};

var NewsTable = function NewsTable(_ref2) {
    var data = _ref2.data,
        width = _ref2.width;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "table",
        {
            className: "table table-hover dashboard-table",
            style: { fontSize: "0.85rem" }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "thead",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: rightCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        component: "span",
                        content: "account.votes.line"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        component: "span",
                        content: "explorer.block.date"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "news.subject" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "news.author" })
                )
            )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "tbody",
            null,
            data.map(function (singleNews, iter) {
                var theAuthor = singleNews.parentAuthor ? singleNews.parentAuthor : singleNews.author;
                var formattedDate = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(new Date(singleNews.created));
                var smartTitle = singleNews.title.length * 6 > width - 450 ? singleNews.title.slice(0, Math.floor(width - 450) / 6) + "..." : singleNews.title;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: "" + singleNews.title.slice(0, 10) + iter },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: rightCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: iter + 1,
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: secondCol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: formattedDate,
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: smartTitle,
                            url: singleNews.url,
                            isLink: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: theAuthor,
                            url: singleNews.url
                        })
                    )
                );
            })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "thead",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { style: rowHeight },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: rightCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell })
            )
        )
    );
};

var News = function (_React$Component) {
    _inherits(News, _React$Component);

    function News(props) {
        _classCallCheck(this, News);

        var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

        _this.state = {
            isLoading: true,
            isWrong: false,
            discussions: [],
            width: 1200
        };
        _this.updateDimensions = _this.updateDimensions.bind(_this);
        _this.orderDiscussions = _this.orderDiscussions.bind(_this);
        return _this;
    }

    _createClass(News, [{
        key: "updateDimensions",
        value: function updateDimensions() {
            this.setState({ width: window.innerWidth });
        }
    }, {
        key: "orderDiscussions",
        value: function orderDiscussions(discussions) {
            var orderedDiscussions = discussions.sort(function (a, b) {
                return new Date(b.created) - new Date(a.created);
            });
            this.setState({ discussions: orderedDiscussions, isLoading: false });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.updateDimensions();
            window.addEventListener("resize", this.updateDimensions);
            steem_js_api__WEBPACK_IMPORTED_MODULE_2__["api"].getDiscussionsByBlog(query).then(function (discussions) {
                _this2.orderDiscussions(discussions);
            }).catch(function () {
                _this2.setState({ isLoading: false, isWrong: true });
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions);
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                isLoading = _state.isLoading,
                isWrong = _state.isWrong,
                discussions = _state.discussions,
                width = _state.width;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "account-tabs" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "tab-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block vertical" },
                                isWrong && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SomethingWentWrong, null),
                                isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null,
                                !isWrong && !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsTable, {
                                    width: width,
                                    data: discussions
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return News;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ 2730:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=news.js.map