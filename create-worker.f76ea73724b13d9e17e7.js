(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 2772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var api_ApplicationApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(588);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var CreateWorker = function (_React$Component) {
    _inherits(CreateWorker, _React$Component);

    function CreateWorker() {
        _classCallCheck(this, CreateWorker);

        var _this = _possibleConstructorReturn(this, (CreateWorker.__proto__ || Object.getPrototypeOf(CreateWorker)).call(this));

        _this.state = {
            title: null,
            start: new Date(),
            end: null,
            pay: null,
            url: "http://",
            vesting: 7
        };
        return _this;
    }

    _createClass(CreateWorker, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.currentAccount !== this.props.currentAccount, !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            api_ApplicationApi__WEBPACK_IMPORTED_MODULE_2__["default"].createWorker(this.state, this.props.currentAccount).catch(function (error) {
                console.log("error", error);
                var error_msg = error.message && error.message.length && error.message.length > 0 ? error.message.split("stack")[0] : "unknown error";

                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_5__["default"].addNotification({
                    message: "Failed to create worker: " + error_msg,
                    level: "error",
                    autoDismiss: 10
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log("state:", this.state);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block", style: { paddingTop: 20 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content large-9 large-offset-3 small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        content: "explorer.workers.create",
                        component: "h3"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        { style: { maxWidth: 800 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.create_text_1",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.create_text_2",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.title" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                onChange: function onChange(e) {
                                    _this2.setState({ title: e.target.value });
                                },
                                type: "text"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.name_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    width: "50%",
                                    paddingRight: "2.5%",
                                    display: "inline-block"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "account.votes.start" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    onChange: function onChange(e) {
                                        _this2.setState({
                                            start: new Date(e.target.value)
                                        });
                                    },
                                    type: "date"
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    width: "50%",
                                    paddingLeft: "2.5%",
                                    display: "inline-block"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "account.votes.end" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    onChange: function onChange(e) {
                                        _this2.setState({
                                            end: new Date(e.target.value)
                                        });
                                    },
                                    type: "date"
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.date_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.daily_pay" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                onChange: function onChange(e) {
                                    _this2.setState({ pay: e.target.value });
                                },
                                type: "number"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.pay_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.website" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                onChange: function onChange(e) {
                                    _this2.setState({ url: e.target.value });
                                },
                                type: "text"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.url_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.vesting_pay" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                defaultValue: this.state.vesting,
                                onChange: function onChange(e) {
                                    _this2.setState({
                                        vesting: parseInt(e.target.value)
                                    });
                                },
                                type: "number"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.vesting_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "button-group",
                                onClick: this.onSubmit.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "button", type: "submit" },
                                "Publish"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CreateWorker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateWorker = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(CreateWorker, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().currentAccount
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=create-worker.js.map