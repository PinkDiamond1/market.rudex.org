(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 2739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingAccountOptions", function() { return ExistingAccountOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(874);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2740);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Brainkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2743);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2747);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2332);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(569);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var connectObject = {
    listenTo: function listenTo() {
        return [stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        var wallet = stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState();
        return { wallet: wallet };
    }
};

var ExistingAccount = function (_Component) {
    _inherits(ExistingAccount, _Component);

    function ExistingAccount() {
        _classCallCheck(this, ExistingAccount);

        return _possibleConstructorReturn(this, (ExistingAccount.__proto__ || Object.getPrototypeOf(ExistingAccount)).apply(this, arguments));
    }

    _createClass(ExistingAccount, [{
        key: "render",
        value: function render() {
            var has_wallet = this.props.wallet.wallet_names.count() != 0;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "page-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h1",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    content: "account.welcome",
                                    wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_9__["getWalletName"])()
                                })
                            ),
                            !has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.create_wallet_backup" })
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.setup_wallet" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account",
                                    component: _Backup__WEBPACK_IMPORTED_MODULE_8__["BackupRestore"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/import-backup",
                                    component: ExistingAccountOptions
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/import-keys",
                                    component: _ImportKeys__WEBPACK_IMPORTED_MODULE_7__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/brainkey",
                                    component: _Brainkey__WEBPACK_IMPORTED_MODULE_6__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/balance-claim",
                                    component: _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__["default"]
                                })
                            ),
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return ExistingAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ExistingAccount = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ExistingAccount, connectObject);

var ExistingAccountOptions = function (_Component2) {
    _inherits(ExistingAccountOptions, _Component2);

    function ExistingAccountOptions() {
        _classCallCheck(this, ExistingAccountOptions);

        return _possibleConstructorReturn(this, (ExistingAccountOptions.__proto__ || Object.getPrototypeOf(ExistingAccountOptions)).apply(this, arguments));
    }

    _createClass(ExistingAccountOptions, [{
        key: "render",
        value: function render() {
            var has_wallet = this.props.wallet.wallet_names.count() != 0;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                !has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-backup" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            content: "wallet.import_backup",
                            wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_9__["getWalletName"])()
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-keys" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.import_bts1" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-keys" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.create_wallet" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)
                ) : null,
                !has_wallet ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "dashboard" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                component: "span",
                                content: "header.dashboard"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "wallet" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "settings.wallets" })
                        )
                    )
                ) : null
            );
        }
    }]);

    return ExistingAccountOptions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ExistingAccountOptions = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ExistingAccountOptions, connectObject);

/* harmony default export */ __webpack_exports__["default"] = (ExistingAccount);


/***/ }),

/***/ 2740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(588);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(879);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(702);
/* harmony import */ var stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(742);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(875);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(876);
/* harmony import */ var components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2741);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(741);
/* harmony import */ var components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2742);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_13__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var BalanceClaimActive = function (_Component) {
    _inherits(BalanceClaimActive, _Component);

    function BalanceClaimActive() {
        _classCallCheck(this, BalanceClaimActive);

        return _possibleConstructorReturn(this, (BalanceClaimActive.__proto__ || Object.getPrototypeOf(BalanceClaimActive)).apply(this, arguments));
    }

    _createClass(BalanceClaimActive, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var keySeq = keys.keySeq();
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
            this.existing_keys = keySeq;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var keySeq = keys.keySeq();
            if (!keySeq.equals(this.existing_keys)) {
                this.existing_keys = keySeq;
                actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.account_refs.size) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.no_balance" })
                    )
                );
            }

            if (this.props.loading) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.loading_balances" }),
                        "\u2026"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], { type: "three-bounce" })
                );
            }

            if (!this.props.balances || !this.props.balances.size) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.no_balance" })
                    )
                );
            }

            var import_ready = this.props.selected_balances.size && this.props.claim_account_name;
            var claim_balance_label = import_ready ? " (" + this.props.claim_account_name + ")" : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block center-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        { className: "no-border-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.claim_balances" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-content",
                            style: { overflowY: "hidden !important" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "full-width-content center-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                key: this.props.balances,
                                accounts: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List(this.props.account_refs),
                                onChange: this.onClaimAccountChange.bind(this)
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__["default"], null)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("button success", {
                            disabled: !import_ready
                        }),
                        onClick: this.onClaimBalance.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.claim_balance" }),
                    claim_balance_label
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "button cancel", onClick: this.onBack.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.cancel" })
                )
            );
        }
    }, {
        key: "onBack",
        value: function onBack(e) {
            e.preventDefault();
            window.history.back();
        }
    }, {
        key: "onClaimAccountChange",
        value: function onClaimAccountChange(claim_account_name) {
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].claimAccountChange(claim_account_name);
        }
    }, {
        key: "onClaimBalance",
        value: function onClaimBalance() {
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__["default"].importBalance(this.props.claim_account_name, this.props.selected_balances, true //broadcast
            ).catch(function (error) {
                console.error("claimBalance", error);
                var message = error;
                try {
                    message = error.data.message;
                } catch (e) {}
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_4__["default"].error("Error claiming balance: " + message);
                throw error;
            });
        }
    }]);

    return BalanceClaimActive;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimActive = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimActive, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"], stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps() {
        var props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState();
        props.account_refs = stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAccountRefs();
        return props;
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimActive);

/***/ }),

/***/ 2741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(702);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(875);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(876);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1013);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var BalanceClaimSelector = function (_Component) {
    _inherits(BalanceClaimSelector, _Component);

    function BalanceClaimSelector() {
        _classCallCheck(this, BalanceClaimSelector);

        return _possibleConstructorReturn(this, (BalanceClaimSelector.__proto__ || Object.getPrototypeOf(BalanceClaimSelector)).apply(this, arguments));
    }

    _createClass(BalanceClaimSelector, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.claim_account_name) this.onClaimAccount(nextProps.claim_account_name, nextProps.checked);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.props.balances === undefined || !this.props.total_by_account_asset.size) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

            var index = -1;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.unclaimed" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.unclaimed_vesting" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.name" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        this.props.total_by_account_asset.map(function (r, name_asset) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: ++index },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        checked: !!_this2.props.checked.get(index),
                                        onChange: _this2.onCheckbox.bind(_this2, index, r.balances)
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    r.unclaimed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        color: "info",
                                        amount: r.unclaimed,
                                        asset: name_asset.get(1)
                                    }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    r.vesting.unclaimed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            color: "info",
                                            amount: r.vesting.unclaimed,
                                            hide_asset: true,
                                            asset: name_asset.get(1)
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            " of "
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            color: "info",
                                            amount: r.vesting.total,
                                            asset: name_asset.get(1)
                                        })
                                    ) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    " ",
                                    name_asset.get(0),
                                    " "
                                )
                            );
                        }).toArray()
                    )
                )
            );
        }
    }, {
        key: "onCheckbox",
        value: function onCheckbox(index, balances) {
            var checked = this.props.checked;
            if (checked.get(index)) {
                checked = checked.delete(index);
            } else {
                checked = checked.set(index, balances);
            }

            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
        }
    }, {
        key: "onClaimAccount",
        value: function onClaimAccount(claim_account_name, checked) {
            // A U T O  S E L E C T  A C C O U N T S
            // only if nothing is selected (play it safe)
            if (checked.size) return;
            var index = -1;
            this.props.total_by_account_asset.forEach(function (v, k) {
                index++;
                var name = k.get(0);
                if (name === claim_account_name) {
                    if (v.unclaimed || v.vesting.unclaimed) checked = checked.set(index, v.balances);
                }
            });
            if (checked.size) actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
        }
    }]);

    return BalanceClaimSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimSelector = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimSelector, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        var props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
        var balances = props.balances,
            address_to_pubkey = props.address_to_pubkey;

        var private_keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().keys;
        var groupCountMap = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map().asMutable();
        var groupCount = function groupCount(group, distinct) {
            var set = groupCountMap.get(group);
            if (!set) {
                set = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Set().asMutable();
                groupCountMap.set(group, set);
            }
            set.add(distinct);
            return set.size;
        };
        if (balances) props.total_by_account_asset = balances.groupBy(function (v) {
            // K E Y S
            var names = "";
            var pubkey = address_to_pubkey.get(v.owner);
            var private_key_object = private_keys.get(pubkey);
            // Imported Account Names (just a visual aid, helps to auto select a real account)
            if (private_key_object && private_key_object.import_account_names) names = private_key_object.import_account_names.join(", ");

            // Signing is very slow, further divide the groups based on the number of signatures required
            var batch_number = Math.ceil(groupCount(immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List([names, v.balance.asset_id]), v.owner) / 60);
            var name_asset_key = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List([names, v.balance.asset_id, batch_number]);
            return name_asset_key;
        }).map(function (l) {
            return l.reduce(function (r, v) {
                // V A L U E S
                v.public_key_string = address_to_pubkey.get(v.owner);
                r.balances = r.balances.add(v);
                if (v.vested_balance != undefined) {
                    r.vesting.unclaimed += Number(v.vested_balance.amount);
                    r.vesting.total += Number(v.balance.amount);
                } else {
                    r.unclaimed += Number(v.balance.amount);
                }
                return r;
            }, {
                unclaimed: 0,
                vesting: { unclaimed: 0, total: 0 },
                balances: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Set()
            });
        }).sortBy(function (k) {
            return k;
        });
        return props;
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimSelector);

/***/ }),

/***/ 2742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1011);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MyAccounts = function (_Component) {
    _inherits(MyAccounts, _Component);

    function MyAccounts() {
        _classCallCheck(this, MyAccounts);

        return _possibleConstructorReturn(this, (MyAccounts.__proto__ || Object.getPrototypeOf(MyAccounts)).apply(this, arguments));
    }

    _createClass(MyAccounts, [{
        key: "render",
        value: function render() {
            var account_names = this.props.accounts.filter(function (account) {
                return !!account;
            }).filter(function (account) {
                return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].isMyAccount(account);
            }).map(function (account) {
                return account.get("name");
            }).sort();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onChange: this.onAccountSelect.bind(this),
                    account_names: account_names,
                    center: true
                })
            );
        }
    }, {
        key: "onAccountSelect",
        value: function onAccountSelect(account_name) {
            this.props.onChange(account_name);
        }
    }]);

    return MyAccounts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

MyAccounts.propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MyAccounts));

/***/ }),

/***/ 2743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrainkeyInputAccept", function() { return BrainkeyInputAccept; });
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(925);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2744);
/* harmony import */ var stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2745);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(894);
/* harmony import */ var components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2335);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2746);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var connectObject = {
    listenTo: function listenTo() {
        return [stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance("wmc")];
    },
    getProps: function getProps() {
        return stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance("wmc").getState();
    }
};

var Brainkey = function (_Component) {
    _inherits(Brainkey, _Component);

    function Brainkey() {
        _classCallCheck(this, Brainkey);

        return _possibleConstructorReturn(this, (Brainkey.__proto__ || Object.getPrototypeOf(Brainkey)).apply(this, arguments));
    }

    _createClass(Brainkey, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].closeInstance("wmc");
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "h3",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.brainkey" })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    BrainkeyInputAccept,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ViewBrainkey, null)
                )
            );
        }
    }]);

    return Brainkey;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Brainkey = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(Brainkey, connectObject);
/* harmony default export */ __webpack_exports__["default"] = (Brainkey);

var ViewBrainkey = function (_Component2) {
    _inherits(ViewBrainkey, _Component2);

    function ViewBrainkey() {
        _classCallCheck(this, ViewBrainkey);

        return _possibleConstructorReturn(this, (ViewBrainkey.__proto__ || Object.getPrototypeOf(ViewBrainkey)).apply(this, arguments));
    }

    _createClass(ViewBrainkey, [{
        key: "render",
        value: function render() {
            var short_brnkey = this.props.brnkey.substring(0, 10);
            // console.log("this.props.account_ids.toArray()", this.props.account_ids.toArray())
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "" },
                        short_brnkey
                    ),
                    "\u2026"
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null),
                this.props.account_ids.size ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BrainkeyAccounts, {
                    accounts: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List(this.props.account_ids.toArray())
                }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "h5",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.no_accounts" })
                )
            );
        }
    }]);

    return ViewBrainkey;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ViewBrainkey = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ViewBrainkey, connectObject);

var BrainkeyAccounts = function (_React$Component) {
    _inherits(BrainkeyAccounts, _React$Component);

    function BrainkeyAccounts() {
        _classCallCheck(this, BrainkeyAccounts);

        return _possibleConstructorReturn(this, (BrainkeyAccounts.__proto__ || Object.getPrototypeOf(BrainkeyAccounts)).apply(this, arguments));
    }

    _createClass(BrainkeyAccounts, [{
        key: "render",
        value: function render() {
            var rows = Object(lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.accounts).filter(function (account) {
                return !!account[1];
            }).map(function (account) {
                return account[1].get("name");
            }).sort().map(function (name) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__["default"], { key: name, account: name });
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                rows
            );
        }
    }]);

    return BrainkeyAccounts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BrainkeyAccounts.propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccountsList.isRequired
};

BrainkeyAccounts = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(BrainkeyAccounts);

var BrainkeyInputAccept = function (_Component3) {
    _inherits(BrainkeyInputAccept, _Component3);

    function BrainkeyInputAccept() {
        _classCallCheck(this, BrainkeyInputAccept);

        var _this4 = _possibleConstructorReturn(this, (BrainkeyInputAccept.__proto__ || Object.getPrototypeOf(BrainkeyInputAccept)).call(this));

        _this4.state = { brnkey: "", accept: false };
        return _this4;
    }

    _createClass(BrainkeyInputAccept, [{
        key: "render",
        value: function render() {
            if (this.state.accept) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                this.props.children
            );

            var ready = this.state.brnkey && this.state.brnkey !== "";
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                { className: "grid-container" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        onChange: this.onBrainkeyChange.bind(this)
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("button success", { disabled: !ready }),
                        onClick: this.onAccept.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.accept" })
                )
            );
        }
    }, {
        key: "onBrainkeyChange",
        value: function onBrainkeyChange(brnkey) {
            this.setState({ brnkey: brnkey });
        }
    }, {
        key: "onAccept",
        value: function onAccept() {
            this.setState({ accept: true });
            actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__["default"].setBrainkey(this.state.brnkey);
        }
    }]);

    return BrainkeyInputAccept;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

// <div onClick={this.onLookupAccounts.bind(this)} className="button success">Lookup Accounts</div>
// onLookupAccounts() {
//
// }

/***/ }),

/***/ 2744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(551);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BrainkeyActions = function () {
    function BrainkeyActions() {
        _classCallCheck(this, BrainkeyActions);
    }

    _createClass(BrainkeyActions, [{
        key: "setBrainkey",
        value: function setBrainkey(brnkey) {
            return brnkey;
        }
    }]);

    return BrainkeyActions;
}();

var BrainkeyActionsWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(BrainkeyActions);
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyActionsWrapped);

/***/ }),

/***/ 2745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(551);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(550);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2744);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







/** Each instance supports a single brainkey. */

var BrainkeyStoreFactory = function () {
    function BrainkeyStoreFactory() {
        _classCallCheck(this, BrainkeyStoreFactory);
    }

    _createClass(BrainkeyStoreFactory, null, [{
        key: "getInstance",

        /** This may be called multiple times for the same <b>name</b>.  When done,
            (componentWillUnmount) make sure to call this.closeInstance()
        */
        value: function getInstance(name) {
            var instance = BrainkeyStoreFactory.instances.get(name);
            if (!instance) {
                instance = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(BrainkeyStoreImpl, "BrainkeyStore");
                BrainkeyStoreFactory.instances.set(name, instance);
            }
            var subscribed_instance_key = name + " subscribed_instance";
            if (!BrainkeyStoreFactory.instances.get(subscribed_instance_key)) {
                var subscribed_instance = instance.chainStoreUpdate.bind(instance);
                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(subscribed_instance);
                BrainkeyStoreFactory.instances.set(subscribed_instance_key, subscribed_instance);
            }
            return instance;
        }
    }, {
        key: "closeInstance",
        value: function closeInstance(name) {
            var instance = BrainkeyStoreFactory.instances.get(name);
            if (!instance) throw new Error("unknown instance " + name);
            var subscribed_instance_key = name + " subscribed_instance";
            var subscribed_instance = BrainkeyStoreFactory.instances.get(subscribed_instance_key);
            BrainkeyStoreFactory.instances.delete(subscribed_instance_key);
            bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(subscribed_instance);
            instance.clearCache();
        }
    }]);

    return BrainkeyStoreFactory;
}();

/** Derived keys may be unassigned from accounts therefore we must define a
    fixed block of derivied keys then monitor the entire block.
*/


BrainkeyStoreFactory.instances = new Map();
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyStoreFactory);
var DERIVIED_BRAINKEY_POOL_SIZE = 10;

var BrainkeyStoreImpl = function (_BaseStore) {
    _inherits(BrainkeyStoreImpl, _BaseStore);

    function BrainkeyStoreImpl() {
        _classCallCheck(this, BrainkeyStoreImpl);

        var _this = _possibleConstructorReturn(this, (BrainkeyStoreImpl.__proto__ || Object.getPrototypeOf(BrainkeyStoreImpl)).call(this));

        _this.clearCache();
        _this.bindListeners({
            onSetBrainkey: actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__["default"].setBrainkey
        });
        _this._export("inSync", "chainStoreUpdate", "clearCache");
        return _this;
    }

    // chainStoreUnsubscribe() {
    //     try{
    //         ChainStore.unsubscribe(this.chainStoreUpdate)
    //     }catch(e1) {console.log("unsub 1 fail");
    //         try{
    //             ChainStore.unsubscribe(this.chainStoreUpdate.bind(this))
    //         }catch(e2) {console.log("unsub 1 fail")}
    //     }
    // }

    _createClass(BrainkeyStoreImpl, [{
        key: "clearCache",
        value: function clearCache() {
            this.state = {
                brnkey: "",
                account_ids: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set()
            };
            this.derived_keys = new Array();
            // Compared with ChainStore.account_ids_by_key
            this.account_ids_by_key = null;
        }

        /** Saves the brainkey and begins the lookup for derived account referneces */

    }, {
        key: "onSetBrainkey",
        value: function onSetBrainkey(brnkey) {
            this.clearCache();
            this.setState({ brnkey: brnkey });
            this.deriveKeys(brnkey);
            this.chainStoreUpdate();
        }

        /** @return <b>true</b> when all derivied account references are either
            found or known not to exist.
        */

    }, {
        key: "inSync",
        value: function inSync() {
            this.derived_keys.forEach(function (derived_key) {
                if (isPendingFromChain(derived_key)) return false;
            });
            return true;
        }
    }, {
        key: "chainStoreUpdate",
        value: function chainStoreUpdate() {
            if (!this.derived_keys.length) return;
            if (this.account_ids_by_key === bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].account_ids_by_key) return;
            this.account_ids_by_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].account_ids_by_key;
            this.updateAccountIds();
        }
    }, {
        key: "deriveKeys",
        value: function deriveKeys() {
            var brnkey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.brnkey;

            var sequence = this.derived_keys.length; // next sequence (starting with 0)
            var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["key"].get_brainPrivateKey(brnkey, sequence);
            var derived_key = derivedKeyStruct(private_key);
            this.derived_keys.push(derived_key);
            if (this.derived_keys.length < DERIVIED_BRAINKEY_POOL_SIZE) this.deriveKeys(brnkey);
        }
    }, {
        key: "updateAccountIds",
        value: function updateAccountIds() {
            var _this2 = this;

            var new_account_ids = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set().withMutations(function (new_ids) {
                var updatePubkey = function updatePubkey(public_string) {
                    var chain_account_ids = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAccountRefsOfKey(public_string);
                    if (chain_account_ids) chain_account_ids.forEach(function (chain_account_id) {
                        new_ids.add(chain_account_id);
                    });
                };
                _this2.derived_keys.forEach(function (derived_key) {
                    return updatePubkey(derived_key.public_string);
                });
            });
            if (!new_account_ids.equals(this.state.account_ids)) {
                this.state.account_ids = new_account_ids;
                this.setState({ account_ids: new_account_ids });
            }
        }
    }]);

    return BrainkeyStoreImpl;
}(stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__["default"]);

function derivedKeyStruct(private_key) {
    var public_string = private_key.toPublicKey().toPublicKeyString();
    var derived_key = { private_key: private_key, public_string: public_string };
    return derived_key;
}

var isPendingFromChain = function isPendingFromChain(derived_key) {
    return bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAccountRefsOfKey(derived_key.public_string) === undefined;
};

/***/ }),

/***/ 2746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1232);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1222);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(416);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(744);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 *  @brief displays the summary of a given account in a condenced view (for the dashboard)
 *
 *  This card has the following properties:
 *
 *  { account: ${name_or_id} }
 */

var AccountCard = function (_React$Component) {
    _inherits(AccountCard, _React$Component);

    function AccountCard() {
        _classCallCheck(this, AccountCard);

        return _possibleConstructorReturn(this, (AccountCard.__proto__ || Object.getPrototypeOf(AccountCard)).apply(this, arguments));
    }

    _createClass(AccountCard, [{
        key: "onCardClick",
        value: function onCardClick(e) {
            e.preventDefault();
            var name = this.props.account.get("name");
            this.props.history.push("/account/" + name);
        }
    }, {
        key: "render",
        value: function render() {
            var name = null;
            var balances = null;
            var isMyAccount = false;
            if (this.props.account) {
                name = this.props.account.get("name");
                var abal = this.props.account.get("balances");
                if (abal) {
                    balances = abal.map(function (x) {
                        var balanceAmount = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(x);
                        if (!balanceAmount.get("balance")) {
                            return null;
                        }
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { key: x },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__["default"], { balance: x })
                        );
                    }).toArray();
                }
                isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].isMyAccount(this.props.account);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content account-card",
                    onClick: this.onCardClick.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card" + (isMyAccount ? " my-account" : "") },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        { className: "text-center" },
                        name
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-content clearfix" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                account: name,
                                size: { height: 64, width: 64 }
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "balances" },
                            balances
                        )
                    )
                )
            );
        }
    }]);

    return AccountCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountCard.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

AccountCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AccountCard);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(AccountCard));

/***/ }),

/***/ 2747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(588);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(416);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(485);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(702);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(587);
/* harmony import */ var components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2334);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(879);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2740);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(876);
/* harmony import */ var components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2748);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(589);
/* harmony import */ var stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2749);
/* harmony import */ var chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2750);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















__webpack_require__(2752);

var import_keys_assert_checking = false;

var KeyCount = function KeyCount(_ref) {
    var key_count = _ref.key_count;

    if (!key_count) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "span",
        null,
        "Found ",
        key_count,
        " private keys"
    );
};

var ImportKeys = function (_Component) {
    _inherits(ImportKeys, _Component);

    function ImportKeys() {
        _classCallCheck(this, ImportKeys);

        var _this = _possibleConstructorReturn(this, (ImportKeys.__proto__ || Object.getPrototypeOf(ImportKeys)).call(this));

        _this.state = _this._getInitialState();

        _this._renderBalanceClaims = _this._renderBalanceClaims.bind(_this);
        return _this;
    }

    _createClass(ImportKeys, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            var keep_file_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return {
                keys_to_account: {},
                no_file: true,
                account_keys: [],
                //brainkey: null,
                //encrypted_brainkey: null,
                reset_file_name: keep_file_name ? this.state.reset_file_name : Date.now(),
                reset_password: Date.now(),
                password_checksum: null,
                import_file_message: null,
                import_password_message: null,
                imported_keys_public: {},
                key_text_message: null,
                genesis_filtering: false,
                genesis_filter_status: [],
                genesis_filter_finished: undefined,
                importSuccess: false
            };
        }
    }, {
        key: "reset",
        value: function reset(e, keep_file_name) {
            var _this2 = this;

            if (e) e.preventDefault();
            var state = this._getInitialState(keep_file_name);
            this.setState(state, function () {
                return _this2.updateOnChange();
            });
        }
    }, {
        key: "onWif",
        value: function onWif(event) {
            event.preventDefault();
            var value = this.refs.wifInput.value;
            this.addByPattern(value);
        }
    }, {
        key: "onCancel",
        value: function onCancel(e) {
            if (e) e.preventDefault();
            this.setState(this._getInitialState());
        }
    }, {
        key: "updateOnChange",
        value: function updateOnChange() {
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__["default"].setPubkeys(Object.keys(this.state.imported_keys_public));
        }
    }, {
        key: "getImportAccountKeyCount",
        value: function getImportAccountKeyCount(keys_to_account) {
            var account_keycount = {};
            var found = false;
            for (var key in keys_to_account) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = keys_to_account[key].account_names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var account_name = _step.value;

                        account_keycount[account_name] = (account_keycount[account_name] || 0) + 1;
                        found = true;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }return found ? account_keycount : null;
        }
    }, {
        key: "upload",
        value: function upload(evt) {
            var _this3 = this;

            this.reset(null, true);
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                var contents = evt.target.result;
                try {
                    var json_contents = void 0;
                    try {
                        json_contents = JSON.parse(contents);
                        // This is the only chance to encounter a large file,
                        // try this format first.
                        _this3._parseImportKeyUpload(json_contents, file.name, function (update_state) {
                            // console.log("update_state", update_state)
                            _this3.setState(update_state, function () {
                                if (update_state.genesis_filter_finished) {
                                    // try empty password, also display "Enter import file password"
                                    _this3._passwordCheck();
                                }
                            });
                        });
                    } catch (e) {
                        //DEBUG console.log("... _parseImportKeyUpload",e)
                        try {
                            if (!json_contents) file.name + " is an unrecognized format";
                            _this3._parseWalletJson(json_contents);
                        } catch (ee) {
                            if (!_this3.addByPattern(contents)) throw ee;
                        }
                        // try empty password, also display "Enter import file password"
                        _this3._passwordCheck();
                    }
                } catch (message) {
                    console.error("... ImportKeys upload error", message);
                    _this3.setState({ import_file_message: message });
                }
            };
            reader.readAsText(file);
        }

        /** BTS 1.0 client wallet_export_keys format. */

    }, {
        key: "_parseImportKeyUpload",
        value: function _parseImportKeyUpload(json_contents, file_name, update_state) {
            var _this4 = this;

            var password_checksum = void 0,
                unfiltered_account_keys = void 0;
            try {
                password_checksum = json_contents.password_checksum;
                if (!password_checksum) throw file_name + " is an unrecognized format";

                if (!Array.isArray(json_contents.account_keys)) throw file_name + " is an unrecognized format";

                unfiltered_account_keys = json_contents.account_keys;
            } catch (e) {
                throw e.message || e;
            }

            // BTS 1.0 wallets may have a lot of generated but unused keys or spent TITAN addresses making
            // wallets so large it is was not possible to use the JavaScript wallets with them.

            var genesis_filter = new chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_17__["default"]();
            if (!genesis_filter.isAvailable()) {
                update_state({
                    password_checksum: password_checksum,
                    account_keys: unfiltered_account_keys,
                    genesis_filter_finished: true,
                    genesis_filtering: false
                });
                return;
            }
            this.setState({ genesis_filter_initalizing: true }, function () {
                return (
                    // setTimeout(()=>
                    genesis_filter.init(function () {
                        var filter_status = _this4.state.genesis_filter_status;

                        // FF < version 41 does not support worker threads internals (like blob urls)
                        // let GenesisFilterWorker = require("worker-loader!workers/GenesisFilterWorker")
                        // let worker = new GenesisFilterWorker
                        // worker.postMessage({
                        //     account_keys: unfiltered_account_keys,
                        //     bloom_filter: genesis_filter.bloom_filter
                        // })
                        // worker.onmessage = event => { try {
                        //     let { status, account_keys } = event.data
                        //     // ...
                        // } catch( e ) { console.error('GenesisFilterWorker', e) }}

                        var account_keys = unfiltered_account_keys;
                        genesis_filter.filter(account_keys, function (status) {
                            //console.log("import filter", status)
                            if (status.error === "missing_public_keys") {
                                console.error("un-released format, just for testing");
                                update_state({
                                    password_checksum: password_checksum,
                                    account_keys: unfiltered_account_keys,
                                    genesis_filter_finished: true,
                                    genesis_filtering: false
                                });
                                return;
                            }
                            if (status.success) {
                                // let { account_keys } = event.data // if using worker thread
                                update_state({
                                    password_checksum: password_checksum,
                                    account_keys: account_keys,
                                    genesis_filter_finished: true,
                                    genesis_filtering: false
                                });
                                return;
                            }
                            if (status.initalizing !== undefined) {
                                update_state({
                                    genesis_filter_initalizing: status.initalizing,
                                    genesis_filtering: true
                                });
                                return;
                            }
                            if (status.importing === undefined) {
                                // programmer error
                                console.error("unknown status", status);
                                return;
                            }
                            if (!filter_status.length)
                                // first account
                                filter_status.push(status);else {
                                var last_account_name = filter_status[filter_status.length - 1].account_name;
                                if (last_account_name === status.account_name)
                                    // update same account
                                    filter_status[filter_status.length - 1] = status;
                                    // new account
                                else filter_status.push(status);
                            }
                            update_state({ genesis_filter_status: filter_status });
                        });
                    })
                );
            }
            //, 100)
            );
        }

        /**
        BTS 1.0 hosted wallet backup (wallet.bitshares.org) is supported.
         BTS 1.0 native wallets should use wallet_export_keys instead of a wallet backup.
         Note,  Native wallet backups will be rejected.  The logic below does not
        capture assigned account names (for unregisted accounts) and does not capture
        signing keys.  The hosted wallet has only registered accounts and no signing
        keys.
         */

    }, {
        key: "_parseWalletJson",
        value: function _parseWalletJson(json_contents) {
            var password_checksum = void 0;
            var encrypted_brainkey = void 0;
            var address_to_enckeys = {};
            var account_addresses = {};

            var savePubkeyAccount = function savePubkeyAccount(pubkey, account_name) {
                //replace BTS with GPH
                pubkey = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix + pubkey.substring(3);
                var address = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["PublicKey"].fromPublicKeyString(pubkey).toAddressString();
                var addresses = account_addresses[account_name] || [];
                address = "BTS" + address.substring(3);
                //DEBUG console.log("... address",address,account_name)
                addresses.push(address);
                account_addresses[account_name] = addresses;
            };

            try {
                if (!Array.isArray(json_contents)) {
                    //DEBUG console.log('... json_contents',json_contents)
                    throw new Error("Invalid wallet format");
                }
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = json_contents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var element = _step2.value;

                        if ("key_record_type" == element.type && element.data.account_address && element.data.encrypted_private_key) {
                            var address = element.data.account_address;
                            var _enckeys = address_to_enckeys[address] || [];
                            _enckeys.push(element.data.encrypted_private_key);
                            //DEBUG console.log("... address",address,enckeys)
                            address_to_enckeys[address] = _enckeys;
                            continue;
                        }

                        if ("account_record_type" == element.type) {
                            var account_name = element.data.name;
                            savePubkeyAccount(element.data.owner_key, account_name);
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = element.data.active_key_history[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var history = _step3.value;

                                    savePubkeyAccount(history[1], account_name);
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }

                            continue;
                        }

                        if ("property_record_type" == element.type && "encrypted_brainkey" == element.data.key) {
                            encrypted_brainkey = element.data.value;
                            continue;
                        }

                        if ("master_key_record_type" == element.type) {
                            if (!element.data) throw file.name + " invalid master_key_record record";

                            if (!element.data.checksum) throw file.name + " is missing master_key_record checksum";

                            password_checksum = element.data.checksum;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (!encrypted_brainkey) throw "Please use a BTS 1.0 wallet_export_keys file instead";

                if (!password_checksum) throw file.name + " is missing password_checksum";

                if (!enckeys.length) throw file.name + " does not contain any private keys";
            } catch (e) {
                throw e.message || e;
            }

            var account_keys = [];
            for (var _account_name in account_addresses) {
                var encrypted_private_keys = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = account_addresses[_account_name][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _address = _step4.value;

                        var _enckeys2 = address_to_enckeys[_address];
                        if (!_enckeys2) continue;
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = _enckeys2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var enckey = _step5.value;
                                encrypted_private_keys.push(enckey);
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                account_keys.push({
                    account_name: _account_name,
                    encrypted_private_keys: encrypted_private_keys
                });
            }
            // We could prompt for this brain key instead on first use.  The user
            // may already have a brainkey at this point so with a single brainkey
            // wallet we can't use it now.
            this.setState({
                password_checksum: password_checksum,
                account_keys: account_keys
                //encrypted_brainkey
            });
        }
    }, {
        key: "_passwordCheck",
        value: function _passwordCheck(evt) {
            var _this5 = this;

            if (evt && "preventDefault" in evt) {
                evt.preventDefault();
            }
            var pwNode = this.refs.password;
            // if(pwNode) pwNode.focus()
            var password = pwNode ? pwNode.value : "";
            var checksum = this.state.password_checksum;
            var new_checksum = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["hash"].sha512(bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["hash"].sha512(password)).toString("hex");
            if (checksum != new_checksum) {
                return this.setState({
                    no_file: false,
                    import_password_message: password.length ? "Incorrect password" : null
                });
            }
            this.setState({
                no_file: false,
                reset_password: Date.now(),
                import_password_message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_pass_match")
            }, function () {
                return _this5._decryptPrivateKeys(password);
            });
            // setTimeout(, 250)
        }
    }, {
        key: "_decryptPrivateKeys",
        value: function _decryptPrivateKeys(password) {
            var _this6 = this;

            var password_aes = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["Aes"].fromSeed(password);
            var format_error1_once = true;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.state.account_keys[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var account = _step6.value;

                    if (!account.encrypted_private_keys) {
                        var error = "Account " + account.account_name + " missing encrypted_private_keys";
                        console.error(error);
                        if (format_error1_once) {
                            actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error(error);
                            format_error1_once = false;
                        }
                        continue;
                    }
                    var account_name = account.account_name.trim();
                    var same_prefix_regex = new RegExp("^" + bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix);
                    for (var i = 0; i < account.encrypted_private_keys.length; i++) {
                        var encrypted_private = account.encrypted_private_keys[i];
                        var public_key_string = account.public_keys ? account.public_keys[i] : null; // performance gain

                        try {
                            var private_plainhex = password_aes.decryptHex(encrypted_private);
                            if (import_keys_assert_checking && public_key_string) {
                                var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["PrivateKey"].fromHex(private_plainhex);
                                var pub = private_key.toPublicKey(); // S L O W
                                var addy = pub.toAddressString();
                                var pubby = pub.toPublicKeyString();
                                var _error = "";

                                var address_string = account.addresses ? account.addresses[i] : null; // assert checking

                                if (address_string && addy.substring(3) != address_string.substring(3)) _error = "address imported " + address_string + " but calculated " + addy + ". ";

                                if (pubby.substring(3) != public_key_string.substring(3)) _error += "public key imported " + public_key_string + " but calculated " + pubby;

                                if (_error != "") console.log("ERROR Miss-match key", _error);
                            }

                            if (!public_key_string) {
                                var _private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["PrivateKey"].fromHex(private_plainhex);
                                var public_key = _private_key.toPublicKey(); // S L O W
                                public_key_string = public_key.toPublicKeyString();
                            } else {
                                if (!same_prefix_regex.test(public_key_string))
                                    // This was creating a unresponsive chrome browser
                                    // but after the results were shown.  It was probably
                                    // caused by garbage collection.
                                    public_key_string = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix + public_key_string.substring(3);
                            }
                            this.state.imported_keys_public[public_key_string] = true;

                            var _ref2 = this.state.keys_to_account[private_plainhex] || { account_names: [] },
                                account_names = _ref2.account_names;

                            var dup = false;
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = account_names[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var _name = _step7.value;

                                    if (_name == account_name) dup = true;
                                }
                            } catch (err) {
                                _didIteratorError7 = true;
                                _iteratorError7 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                        _iterator7.return();
                                    }
                                } finally {
                                    if (_didIteratorError7) {
                                        throw _iteratorError7;
                                    }
                                }
                            }

                            if (dup) continue;
                            account_names.push(account_name);
                            this.state.keys_to_account[private_plainhex] = {
                                account_names: account_names,
                                public_key_string: public_key_string
                            };
                        } catch (e) {
                            console.log(e, e.stack);
                            var message = e.message || e;
                            actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error("Account " + account_name + " had a private key import error: " + message);
                        }
                    }
                }
                //let enc_brainkey = this.state.encrypted_brainkey
                //if(enc_brainkey){
                //    this.setState({
                //        brainkey: password_aes.decryptHexToText(enc_brainkey)
                //    })
                //}
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            this.setState({
                import_file_message: null,
                import_password_message: null,
                password_checksum: null
            }, function () {
                return _this6.updateOnChange();
            });
        }
    }, {
        key: "_saveImport",
        value: function _saveImport(e) {
            var _this7 = this;

            e.preventDefault();
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var dups = {};
            for (var public_key_string in this.state.imported_keys_public) {
                if (!keys.has(public_key_string)) continue;
                delete this.state.imported_keys_public[public_key_string];
                dups[public_key_string] = true;
            }
            if (Object.keys(this.state.imported_keys_public).length === 0) {
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error("This wallet has already been imported");
                return;
            }
            var keys_to_account = this.state.keys_to_account;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = Object.keys(keys_to_account)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var private_plainhex = _step8.value;
                    var _keys_to_account$priv = keys_to_account[private_plainhex],
                        account_names = _keys_to_account$priv.account_names,
                        _public_key_string = _keys_to_account$priv.public_key_string;

                    if (dups[_public_key_string]) delete keys_to_account[private_plainhex];
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__["default"].unlock().then(function () {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(true);
                // show the loading indicator
                setTimeout(function () {
                    return _this7.saveImport();
                }, 200);
            }).catch(function () {});
        }
    }, {
        key: "saveImport",
        value: function saveImport() {
            var _this8 = this;

            var keys_to_account = this.state.keys_to_account;
            var private_key_objs = [];
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = Object.keys(keys_to_account)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var private_plainhex = _step9.value;
                    var _keys_to_account$priv2 = keys_to_account[private_plainhex],
                        account_names = _keys_to_account$priv2.account_names,
                        public_key_string = _keys_to_account$priv2.public_key_string;

                    private_key_objs.push({
                        private_plainhex: private_plainhex,
                        import_account_names: account_names,
                        public_key_string: public_key_string
                    });
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            this.reset();
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].importKeysWorker(private_key_objs).then(function (result) {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
                var import_count = private_key_objs.length;

                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].success(counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_key_success", {
                    count: import_count
                }));
                _this8.setState({
                    importSuccess: true
                });
                // this.onCancel() // back to claim balances
            }).catch(function (error) {
                console.log("error:", error);
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
                var message = error;
                try {
                    message = error.target.error.message;
                } catch (e) {}
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error("Key import error: " + message);
            });
        }
    }, {
        key: "addByPattern",
        value: function addByPattern(contents) {
            var _this9 = this;

            if (!contents) return false;

            var count = 0,
                invalid_count = 0;
            var wif_regex = /5[HJK][1-9A-Za-z]{49}/g;
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = (contents.match(wif_regex) || [])[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var wif = _step10.value;

                    try {
                        var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["PrivateKey"].fromWif(wif); //could throw and error
                        var private_plainhex = private_key.toBuffer().toString("hex");
                        var public_key = private_key.toPublicKey(); // S L O W
                        var public_key_string = public_key.toPublicKeyString();
                        this.state.imported_keys_public[public_key_string] = true;
                        this.state.keys_to_account[private_plainhex] = {
                            account_names: [],
                            public_key_string: public_key_string
                        };
                        count++;
                    } catch (e) {
                        invalid_count++;
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            this.setState({
                key_text_message: "Found " + (!count ? "" : count + " valid") + (!invalid_count ? "" : " and " + invalid_count + " invalid") + " key" + (count > 1 || invalid_count > 1 ? "s" : "") + "."
            }, function () {
                return _this9.updateOnChange();
            });
            // removes the message on the next render
            this.state.key_text_message = null;
            return count;
        }

        // toggleImportType(type) {
        //     if (!type) {
        //         return;
        //     }
        //     console.log("toggleImportType", type);
        //     this.setState({
        //         privateKey: type === "privateKey"
        //     });
        // }

    }, {
        key: "_renderBalanceClaims",
        value: function _renderBalanceClaims() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: 15 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button success",
                            onClick: this.onCancel.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.done" })
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this10 = this;

            var privateKey = this.props.privateKey;
            var keys_to_account = this.state.keys_to_account;

            var key_count = Object.keys(keys_to_account).length;
            var account_keycount = this.getImportAccountKeyCount(keys_to_account);

            // Create wallet prior to the import keys (keeps layout clean)
            if (!stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].getWallet()) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__["WalletCreate"], { importKeys: true, hideTitle: true });
            if (this.props.importing) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "circle" })
                    )
                );
            }

            var filtering = this.state.genesis_filtering;
            var was_filtered = !!this.state.genesis_filter_status.length && this.state.genesis_filter_finished;
            var account_rows = null;

            if (this.state.genesis_filter_status.length) {
                account_rows = [];
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = this.state.genesis_filter_status[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var status = _step11.value;

                        if (status.count && status.total) {
                            account_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: status.account_name },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    status.account_name
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    filtering ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "Filtering",
                                        " ",
                                        Math.round(status.count / status.total * 100),
                                        " ",
                                        "%",
                                        " "
                                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        status.count
                                    )
                                )
                            ));
                        }
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }
            }

            var import_ready = key_count !== 0;
            var password_placeholder = counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_password");

            if (import_ready) password_placeholder = "";

            if (!account_rows && account_keycount) {
                account_rows = [];
                for (var account_name in account_keycount) {
                    account_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: account_name },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            account_name
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            account_keycount[account_name]
                        )
                    ));
                }
            }

            var cancelButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "button success", onClick: this.onCancel.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.cancel" })
            );

            var tabIndex = 1;

            if (this.state.importSuccess) {
                return this._renderBalanceClaims();
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { padding: "10px 0" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.state.key_text_message ? this.state.key_text_message : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KeyCount, { key_count: key_count })
                    ),
                    !import_ready ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        " ",
                        "(",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this.reset.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.reset" })
                        ),
                        ")"
                    )
                ),
                account_rows ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    !account_rows.length ? counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.no_accounts") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "explorer.account.title" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "settings.restore_key_count" })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tbody",
                                null,
                                account_rows
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    )
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                !import_ready && !this.state.genesis_filter_initalizing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            privateKey ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "form",
                                { onSubmit: this.onWif.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
                                    component: "label",
                                    content: "wallet.paste_private"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    ref: "wifInput",
                                    type: "password",
                                    id: "wif",
                                    tabIndex: tabIndex++
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        type: "submit"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.submit" })
                                ),
                                cancelButton
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "form",
                                {
                                    onSubmit: this._passwordCheck.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.bts_09_export" }),
                                    this.state.no_file ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "\xA0 (",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "a",
                                            {
                                                onClick: this.reset.bind(this)
                                            },
                                            "Reset"
                                        ),
                                        ")"
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "file",
                                    id: "file_input",
                                    accept: ".json",
                                    style: {
                                        border: "solid",
                                        marginBottom: 15
                                    },
                                    key: this.state.reset_file_name,
                                    onChange: this.upload.bind(this)
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    this.state.import_file_message
                                ),
                                !this.state.no_file ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "password",
                                        ref: "password",
                                        key: this.state.reset_password,
                                        placeholder: password_placeholder,
                                        onChange: function onChange() {
                                            if (_this10.state.import_password_message && _this10.state.import_password_message.length) {
                                                _this10.setState({
                                                    import_password_message: null
                                                });
                                            }
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "facolor-error" },
                                        this.state.import_password_message
                                    )
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "button-group" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "button",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button", {
                                                disabled: !!this.state.no_file
                                            }),
                                            type: "submit"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.submit" })
                                    ),
                                    cancelButton
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    )
                ) : null,
                this.state.genesis_filter_initalizing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "circle" })
                    )
                ) : null,
                import_ready ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button success", {
                                        disabled: !import_ready
                                    }),
                                    onClick: this._saveImport.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.import_keys" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button secondary",
                                    onClick: this.reset.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.cancel" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.unclaimed" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { component: "p", content: "wallet.claim_later" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
                                component: "label",
                                content: "wallet.totals"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__["default"], null)
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                ) : null
            );
        }
    }]);

    return ImportKeys;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ImportKeys.defaultProps = {
    privateKey: true
};


ImportKeys = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(ImportKeys, {
    listenTo: function listenTo() {
        return [stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
    },
    getProps: function getProps() {
        return {
            importing: stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().importing
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (ImportKeys);

/***/ }),

/***/ 2748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(875);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1013);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BalanceClaimAssetTotals = function (_Component) {
    _inherits(BalanceClaimAssetTotals, _Component);

    function BalanceClaimAssetTotals() {
        _classCallCheck(this, BalanceClaimAssetTotals);

        return _possibleConstructorReturn(this, (BalanceClaimAssetTotals.__proto__ || Object.getPrototypeOf(BalanceClaimAssetTotals)).apply(this, arguments));
    }

    _createClass(BalanceClaimAssetTotals, [{
        key: "render",
        value: function render() {
            if (this.props.balances === undefined) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "wallet.loading_balances" }),
                "\u2026"
            );

            var total_by_asset = this.props.balances.groupBy(function (v) {
                return v.balance.asset_id;
            }).map(function (l) {
                return l.reduce(function (r, v) {
                    return r + Number(v.balance.amount);
                }, 0);
            });

            if (!total_by_asset.size) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                "None"
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                total_by_asset.map(function (total, asset_id) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { key: asset_id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            color: "info",
                            amount: total,
                            asset: asset_id
                        })
                    );
                }).toArray()
            );
        }
    }]);

    return BalanceClaimAssetTotals;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimAssetTotals = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimAssetTotals, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState();
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimAssetTotals);

/***/ }),

/***/ 2749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportKeysStoreWrapped", function() { return ImportKeysStoreWrapped; });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(551);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(550);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ImportKeysStore = function (_BaseStore) {
    _inherits(ImportKeysStore, _BaseStore);

    function ImportKeysStore() {
        _classCallCheck(this, ImportKeysStore);

        var _this = _possibleConstructorReturn(this, (ImportKeysStore.__proto__ || Object.getPrototypeOf(ImportKeysStore)).call(this));

        _this.state = _this._getInitialState();
        _this._export("importing");
        return _this;
    }

    _createClass(ImportKeysStore, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            return { importing: false };
        }
    }, {
        key: "importing",
        value: function importing(_importing) {
            this.setState({ importing: _importing });
        }
    }]);

    return ImportKeysStore;
}(stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__["default"]);

var ImportKeysStoreWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(ImportKeysStore, "ImportKeysStore");
/* harmony default export */ __webpack_exports__["default"] = (ImportKeysStoreWrapped);

/***/ }),

/***/ 2750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bts_genesiskeys_bloom_url = undefined;
try {
    var url = __webpack_require__(2751);
    if (url.indexOf("3cee441") === -1) throw new Error("Incorrect hash: bts_genesiskeys_bloom.dat");
    bts_genesiskeys_bloom_url = url;
} catch (e) {
    // webpack deployment exception (not run time)
    console.log("WARN: Will be unable to filter BTS 1.0 wallet imports, did not find assets/bts_genesiskeys_bloom.dat", e);
}

/**
    This should only be applied to a BTS 1.0 export file taken on the
    discontinued chain. Any public key string or address (all 5 formats) carried
    over to the BTS 2.0 genesis block will be in this filter.

    Their may be some false positives but no false negatives.
*/

var GenesisFilter = function () {
    /** or call this.init */
    function GenesisFilter(bloom_buffer) {
        _classCallCheck(this, GenesisFilter);

        if (!bloom_buffer) return;
        this.bloom_buffer = bloom_buffer;
        this.bits_in_filter = bloom_buffer.length * 8; // 8388608 (test data)
    }

    /** Was a bloom file deployed?  This does not try to load it from the server. */


    _createClass(GenesisFilter, [{
        key: "isAvailable",
        value: function isAvailable() {
            return bts_genesiskeys_bloom_url !== undefined;
        }
    }, {
        key: "init",
        value: function init(done) {
            var _this = this;

            if (this.bloom_buffer) {
                done();
                return;
            }
            if (!this.isAvailable()) throw new Error("Genesis bloom file was not deployed");

            var xhr = new XMLHttpRequest();
            // firefox 40 did not allow the blob url but ff 41.0.2 did
            xhr.responseType = "blob";
            xhr.onload = function () {
                if (xhr.status === 404) return;
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var contents = new Buffer(evt.target.result, "binary");
                    if (contents.length !== 1048576) throw new Error("Wrong length");
                    _this.bits_in_filter = contents.length * 8; // 8388608 (test data)
                    _this.bloom_buffer = contents;
                    done();
                };
                reader.readAsBinaryString(xhr.response);
            };
            xhr.onerror = function () {
                console.error("xhr.onerror", e);
            };
            xhr.open("GET", bts_genesiskeys_bloom_url);
            xhr.send();
        }
    }, {
        key: "inGenesis",
        value: function inGenesis(pubkey_or_address) {
            if (!this.bloom_buffer) throw new Error("Call init() first");
            for (var hashes = 0; hashes < 3; hashes++) {
                var hex = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["hash"].sha256(hashes + ":" + pubkey_or_address);
                var bit_address = parseInt(hex.slice(-3).toString("hex"), 16) % this.bits_in_filter; // 3090564
                // console.error("bit_address", bit_address.toString(16))
                var byte_address = bit_address >> 3; // 386320
                // console.error("byte_address", byte_address.toString(16))
                var mask = 1 << (bit_address & 7); // 16
                // console.error("mask", mask.toString(16))
                var byte = this.bloom_buffer[byte_address];
                // console.error("byte", byte.toString(16))
                // console.error("byte & mask", byte & mask, (byte & mask) === 0, '\n')
                if ((byte & mask) === 0) return false;
            }
            return true;
        }
    }, {
        key: "filter",
        value: function filter(account_keys, status) {
            var _this2 = this;

            if (!this.isAvailable()) {
                console.log("WARN: Missing bloom filter for BTS 0.9.x wallets");
                status({ error: "missing_bloom" });
                return;
            }
            var initalizing = true;
            status({ initalizing: initalizing });
            this.init(function () {
                try {
                    initalizing = false;
                    status({ initalizing: initalizing });
                    var running_count_progress = 1;
                    for (var a = 0; a < account_keys.length; a++) {
                        var removed_count = 0,
                            count = 0;
                        var keys = account_keys[a];
                        var total = keys.encrypted_private_keys.length;
                        status({
                            importing: true,
                            account_name: keys.account_name,
                            count: count,
                            total: total
                        });
                        for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                            count++;
                            if (count % running_count_progress === 0) {
                                running_count_progress = 47;
                                status({
                                    importing: true,
                                    account_name: keys.account_name,
                                    count: count,
                                    total: total
                                });
                            }
                            if (!keys.public_keys) {
                                // un-released format, just for testing
                                status({ error: "missing_public_keys" });
                                return;
                            }
                            var currentKey = keys.public_keys[k];
                            if (/^GPH/.test(currentKey)) currentKey = "BTS" + currentKey.substring(3);
                            if (_this2.inGenesis(currentKey)) continue;
                            var addresses = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["key"].addresses(currentKey, "BTS");
                            var addy_found = false;
                            for (var i = 0; i < addresses.length; i++) {
                                if (_this2.inGenesis(addresses[i])) {
                                    addy_found = true;
                                    break;
                                }
                            }
                            if (addy_found) continue;
                            delete keys.encrypted_private_keys[k];
                            delete keys.public_keys[k];
                            removed_count++;
                        }
                        var encrypted_private_keys = [],
                            public_keys = [];
                        for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                            if (!keys.encrypted_private_keys[k]) continue;
                            encrypted_private_keys.push(keys.encrypted_private_keys[k]);
                            public_keys.push(keys.public_keys[k]);
                        }
                        keys.encrypted_private_keys = encrypted_private_keys;
                        status({
                            importing: false,
                            account_name: keys.account_name,
                            count: count - removed_count,
                            total: total
                        });
                        keys.public_keys = public_keys;
                    }
                    status({ success: true });
                } finally {
                    if (initalizing) {
                        initalizing = false;
                        status({ initalizing: initalizing });
                    }
                }
            });
        }
    }]);

    return GenesisFilter;
}();

/* harmony default export */ __webpack_exports__["default"] = (GenesisFilter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2751:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bts_genesiskeys_bloom_3cee441.dat";

/***/ }),

/***/ 2752:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=existing-account.js.map