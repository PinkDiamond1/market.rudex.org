(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 2789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2790);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(steem_js_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1818);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1988);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sanitize__WEBPACK_IMPORTED_MODULE_5__);
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
        sanitize__WEBPACK_IMPORTED_MODULE_5___default()(data, {
            whiteList: [], // empty, means filter out all tags
            stripIgnoreTag: true // filter out all HTML not in the whilelist
        })
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

/***/ 2808:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5lZWZlOTdmNTk3OTUxNzcwN2U5Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpP2ZkNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7YXBpfSBmcm9tIFwic3RlZW0tanMtYXBpXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgc2FuaXRpemUgZnJvbSBcInNhbml0aXplXCI7XHJcblxyXG5jb25zdCBxdWVyeSA9IHt0YWc6IFwiYmxvY2tjaGFpbmVkXCIsIGxpbWl0OiAyMH07XHJcblxyXG5jb25zdCBhbGlnblJpZ2h0ID0ge3RleHRBbGlnbjogXCJyaWdodFwifTtcclxuY29uc3QgYWxpZ25MZWZ0ID0ge3RleHRBbGlnbjogXCJsZWZ0XCJ9O1xyXG5jb25zdCByb3dIZWlnaHQgPSB7aGVpZ2h0OiBcIjJyZW1cIn07XHJcbmNvbnN0IGJvZHlDZWxsID0ge3BhZGRpbmc6IFwiMC41cmVtIDFyZW1cIn07XHJcbmNvbnN0IGhlYWRlckNlbGwgPSB7cGFkZGluZzogXCIwLjg1cmVtIDFyZW1cIn07XHJcblxyXG5jb25zdCBsZWZ0Q2VsbCA9IHsuLi5hbGlnbkxlZnQsIC4uLmJvZHlDZWxsfTtcclxuY29uc3QgcmlnaHRDZWxsID0gey4uLmFsaWduUmlnaHQsIC4uLmJvZHlDZWxsfTtcclxuXHJcbmNvbnN0IGxlZnRDZWxsSGVhZGVyID0gey4uLmFsaWduTGVmdCwgLi4uaGVhZGVyQ2VsbH07XHJcbmNvbnN0IHJpZ2h0Q2VsbEhlYWRlciA9IHsuLi5hbGlnblJpZ2h0LCAuLi5oZWFkZXJDZWxsfTtcclxuXHJcbmNvbnN0IHNlY29uZENvbCA9IHsuLi5sZWZ0Q2VsbCwgd2lkdGg6IFwiMTgwcHhcIn07XHJcblxyXG5jb25zdCBTb21ldGhpbmdXZW50V3JvbmcgPSAoKSA9PiAoXHJcbiAgICA8cD5cclxuICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJuZXdzLmVycm9ycy5mZXRjaFwiIC8+XHJcbiAgICA8L3A+XHJcbik7XHJcblxyXG5jb25zdCBSZXVzYWJsZUxpbmsgPSAoe2RhdGEsIHVybCwgaXNMaW5rID0gZmFsc2V9KSA9PiAoXHJcbiAgICA8YVxyXG4gICAgICAgIGhyZWY9e2BodHRwczovL3N0ZWVtaXQuY29tJHt1cmx9YH1cclxuICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wifX1cclxuICAgICAgICBjbGFzc05hbWU9eyFpc0xpbmsgPyBcInByaW1hcnktdGV4dFwiIDogXCJcIn1cclxuICAgID5cclxuICAgICAgICB7c2FuaXRpemUoZGF0YSwge1xyXG4gICAgICAgICAgICB3aGl0ZUxpc3Q6IFtdLCAvLyBlbXB0eSwgbWVhbnMgZmlsdGVyIG91dCBhbGwgdGFnc1xyXG4gICAgICAgICAgICBzdHJpcElnbm9yZVRhZzogdHJ1ZSAvLyBmaWx0ZXIgb3V0IGFsbCBIVE1MIG5vdCBpbiB0aGUgd2hpbGVsaXN0XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2E+XHJcbik7XHJcblxyXG5jb25zdCBOZXdzVGFibGUgPSAoe2RhdGEsIHdpZHRofSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgZGFzaGJvYXJkLXRhYmxlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjg1cmVtXCJ9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17cmlnaHRDZWxsSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC52b3Rlcy5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGxIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGxIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwibmV3cy5zdWJqZWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGxIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwibmV3cy5hdXRob3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHNpbmdsZU5ld3MsIGl0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGVBdXRob3IgPSBzaW5nbGVOZXdzLnBhcmVudEF1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlTmV3cy5hdXRob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGNvdW50ZXJwYXJ0LmxvY2FsaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzaW5nbGVOZXdzLmNyZWF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbWFydFRpdGxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlTmV3cy50aXRsZS5sZW5ndGggKiA2ID4gd2lkdGggLSA0NTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7c2luZ2xlTmV3cy50aXRsZS5zbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHdpZHRoIC0gNDUwKSAvIDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0uLi5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZU5ld3MudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YCR7c2luZ2xlTmV3cy50aXRsZS5zbGljZSgwLCAxMCl9JHtpdGVyfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtyaWdodENlbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlciArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3NlY29uZENvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldXNhYmxlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtmb3JtYXR0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0Q2VsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldXNhYmxlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtzbWFydFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdENlbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhlQXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyIHN0eWxlPXtyb3dIZWlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17cmlnaHRDZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNsYXNzIE5ld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1dyb25nOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzY3Vzc2lvbnM6IFtdLFxyXG4gICAgICAgICAgICB3aWR0aDogMTIwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zID0gdGhpcy51cGRhdGVEaW1lbnNpb25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcmRlckRpc2N1c3Npb25zID0gdGhpcy5vcmRlckRpc2N1c3Npb25zLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGltZW5zaW9ucygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aDogd2luZG93LmlubmVyV2lkdGh9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcmRlckRpc2N1c3Npb25zKGRpc2N1c3Npb25zKSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJlZERpc2N1c3Npb25zID0gZGlzY3Vzc2lvbnMuc29ydChcclxuICAgICAgICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGIuY3JlYXRlZCkgLSBuZXcgRGF0ZShhLmNyZWF0ZWQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNjdXNzaW9uczogb3JkZXJlZERpc2N1c3Npb25zLCBpc0xvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVEaW1lbnNpb25zKTtcclxuICAgICAgICBhcGkuZ2V0RGlzY3Vzc2lvbnNCeUJsb2cocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKGRpc2N1c3Npb25zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJEaXNjdXNzaW9ucyhkaXNjdXNzaW9ucyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlLCBpc1dyb25nOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpc0xvYWRpbmcsIGlzV3JvbmcsIGRpc2N1c3Npb25zLCB3aWR0aH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1dyb25nICYmIDxTb21ldGhpbmdXZW50V3JvbmcgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkaW5nSW5kaWNhdG9yIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzV3JvbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c1RhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2Rpc2N1c3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBREE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQURBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBcEJBO0FBNEJBO0FBNUNBO0FBOENBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQXhFQTtBQWtGQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTEE7QUFEQTtBQURBO0FBREE7QUFEQTtBQW9CQTs7OztBQWhFQTtBQUNBO0FBa0VBOzs7Ozs7O0FDck1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=