(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 2817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingAccountOptions", function() { return ExistingAccountOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(760);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1813);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2818);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Brainkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2821);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2825);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2369);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(560);
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

/***/ 2818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1818);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(694);
/* harmony import */ var stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(714);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1814);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1815);
/* harmony import */ var components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2819);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(713);
/* harmony import */ var components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2820);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(772);
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

/***/ 2819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(694);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1814);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1815);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1969);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(772);
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

/***/ 2820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1832);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1967);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1833);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(719);
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

/***/ 2821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrainkeyInputAccept", function() { return BrainkeyInputAccept; });
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1871);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(760);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2822);
/* harmony import */ var stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2823);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1833);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1832);
/* harmony import */ var components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2372);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2824);


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

/***/ 2822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);
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

/***/ 2823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(407);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(541);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2822);
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

/***/ 2824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2200);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2190);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1833);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(540);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(407);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(716);
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

/***/ 2825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(407);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(476);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(694);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(579);
/* harmony import */ var components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2371);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1818);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2818);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1815);
/* harmony import */ var components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2826);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(581);
/* harmony import */ var stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2827);
/* harmony import */ var chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2828);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















__webpack_require__(2830);

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

/***/ 2826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1814);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1969);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
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

/***/ 2827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportKeysStoreWrapped", function() { return ImportKeysStoreWrapped; });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(541);
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

/***/ 2828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(407);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bts_genesiskeys_bloom_url = undefined;
try {
    var url = __webpack_require__(2829);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(414).Buffer))

/***/ }),

/***/ 2829:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bts_genesiskeys_bloom_3cee441.dat";

/***/ }),

/***/ 2830:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctYWNjb3VudC40M2ZmMjliMWUwNjdhMGE4M2YxNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvRXhpc3RpbmdBY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Zvcm1zL015QWNjb3VudHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvQnJhaW5rZXkuanN4Iiwid2VicGFjazovLy9hcHAvYWN0aW9ucy9CcmFpbmtleUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9zdG9yZXMvQnJhaW5rZXlTdG9yZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FjY291bnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0ltcG9ydEtleXMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvQmFsYW5jZUNsYWltQXNzZXRUb3RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9zdG9yZXMvSW1wb3J0S2V5c1N0b3JlLmpzIiwid2VicGFjazovLy9hcHAvbGliL2NoYWluL0dlbmVzaXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9JbXBvcnRLZXlzLnNjc3M/ZWQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgV2FsbGV0TWFuYWdlclN0b3JlIGZyb20gXCJzdG9yZXMvV2FsbGV0TWFuYWdlclN0b3JlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmUgZnJvbSBcIi4vQmFsYW5jZUNsYWltQWN0aXZlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQnJhaW5rZXkgZnJvbSBcIi4vQnJhaW5rZXlcIjtcclxuaW1wb3J0IEltcG9ydEtleXMgZnJvbSBcIi4vSW1wb3J0S2V5c1wiO1xyXG5pbXBvcnQge0JhY2t1cFJlc3RvcmV9IGZyb20gXCIuL0JhY2t1cFwiO1xyXG5pbXBvcnQge2dldFdhbGxldE5hbWV9IGZyb20gXCJicmFuZGluZ1wiO1xyXG5cclxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbV2FsbGV0TWFuYWdlclN0b3JlXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBXYWxsZXRNYW5hZ2VyU3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgICAgICByZXR1cm4ge3dhbGxldH07XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBFeGlzdGluZ0FjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc193YWxsZXQgPSB0aGlzLnByb3BzLndhbGxldC53YWxsZXRfbmFtZXMuY291bnQoKSAhPSAwO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGNlbnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJhY2NvdW50LndlbGNvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNyZWF0ZV93YWxsZXRfYmFja3VwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5zZXR1cF93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhY2t1cFJlc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2ltcG9ydC1iYWNrdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2ltcG9ydC1rZXlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbXBvcnRLZXlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudC9icmFpbmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QnJhaW5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2JhbGFuY2UtY2xhaW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhbGFuY2VDbGFpbUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5FeGlzdGluZ0FjY291bnQgPSBjb25uZWN0KFxyXG4gICAgRXhpc3RpbmdBY2NvdW50LFxyXG4gICAgY29ubmVjdE9iamVjdFxyXG4pO1xyXG5cclxuY2xhc3MgRXhpc3RpbmdBY2NvdW50T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGFzX3dhbGxldCA9IHRoaXMucHJvcHMud2FsbGV0LndhbGxldF9uYW1lcy5jb3VudCgpICE9IDA7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7IWhhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJleGlzdGluZy1hY2NvdW50L2ltcG9ydC1iYWNrdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmltcG9ydF9iYWNrdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJleGlzdGluZy1hY2NvdW50L2ltcG9ydC1rZXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuaW1wb3J0X2J0czFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJleGlzdGluZy1hY2NvdW50L2ltcG9ydC1rZXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgeyFoYXNfd2FsbGV0ID8gbnVsbCA6IDxCYWxhbmNlQ2xhaW1BY3RpdmUgLz59XHJcblxyXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImhlYWRlci5kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIndhbGxldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLndhbGxldHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuRXhpc3RpbmdBY2NvdW50T3B0aW9ucyA9IGNvbm5lY3QoXHJcbiAgICBFeGlzdGluZ0FjY291bnRPcHRpb25zLFxyXG4gICAgY29ubmVjdE9iamVjdFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhpc3RpbmdBY2NvdW50O1xyXG5leHBvcnQge0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgbm90aWZ5IGZyb20gXCJhY3Rpb25zL05vdGlmaWNhdGlvbkFjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFByaXZhdGVLZXlTdG9yZSBmcm9tIFwic3RvcmVzL1ByaXZhdGVLZXlTdG9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudFJlZnNTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRSZWZzU3RvcmVcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9uc1wiO1xyXG5pbXBvcnQgQmFsYW5jZUNsYWltU2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbVNlbGVjdG9yXCI7XHJcbmltcG9ydCBXYWxsZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldEFjdGlvbnNcIjtcclxuaW1wb3J0IE15QWNjb3VudHMgZnJvbSBcImNvbXBvbmVudHMvRm9ybXMvTXlBY2NvdW50c1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCYWxhbmNlQ2xhaW1BY3RpdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGxldCBrZXlzID0gUHJpdmF0ZUtleVN0b3JlLmdldFN0YXRlKCkua2V5cztcclxuICAgICAgICBsZXQga2V5U2VxID0ga2V5cy5rZXlTZXEoKTtcclxuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFB1YmtleXMoa2V5U2VxKTtcclxuICAgICAgICB0aGlzLmV4aXN0aW5nX2tleXMgPSBrZXlTZXE7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XHJcbiAgICAgICAgbGV0IGtleVNlcSA9IGtleXMua2V5U2VxKCk7XHJcbiAgICAgICAgaWYgKCFrZXlTZXEuZXF1YWxzKHRoaXMuZXhpc3Rpbmdfa2V5cykpIHtcclxuICAgICAgICAgICAgdGhpcy5leGlzdGluZ19rZXlzID0ga2V5U2VxO1xyXG4gICAgICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFB1YmtleXMoa2V5U2VxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50X3JlZnMuc2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5ub19iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmxvYWRpbmdfYmFsYW5jZXNcIiAvPiZoZWxsaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmJhbGFuY2VzIHx8ICF0aGlzLnByb3BzLmJhbGFuY2VzLnNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGltcG9ydF9yZWFkeSA9XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfYmFsYW5jZXMuc2l6ZSAmJiB0aGlzLnByb3BzLmNsYWltX2FjY291bnRfbmFtZTtcclxuICAgICAgICBsZXQgY2xhaW1fYmFsYW5jZV9sYWJlbCA9IGltcG9ydF9yZWFkeVxyXG4gICAgICAgICAgICA/IGAgKCR7dGhpcy5wcm9wcy5jbGFpbV9hY2NvdW50X25hbWV9KWBcclxuICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGNlbnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNsYWltX2JhbGFuY2VzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3dZOiBcImhpZGRlbiAhaW1wb3J0YW50XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLWNvbnRlbnQgY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeUFjY291bnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmJhbGFuY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50X3JlZnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1BY2NvdW50Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbVNlbGVjdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBzdWNjZXNzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFpbXBvcnRfcmVhZHlcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xhaW1CYWxhbmNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNsYWltX2JhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGFpbV9iYWxhbmNlX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBjYW5jZWxcIiBvbkNsaWNrPXt0aGlzLm9uQmFjay5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFjayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsYWltQWNjb3VudENoYW5nZShjbGFpbV9hY2NvdW50X25hbWUpIHtcclxuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLmNsYWltQWNjb3VudENoYW5nZShjbGFpbV9hY2NvdW50X25hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xhaW1CYWxhbmNlKCkge1xyXG4gICAgICAgIFdhbGxldEFjdGlvbnMuaW1wb3J0QmFsYW5jZShcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFpbV9hY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfYmFsYW5jZXMsXHJcbiAgICAgICAgICAgIHRydWUgLy9icm9hZGNhc3RcclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNsYWltQmFsYW5jZVwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3I7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IuZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgICBub3RpZnkuZXJyb3IoXCJFcnJvciBjbGFpbWluZyBiYWxhbmNlOiBcIiArIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQmFsYW5jZUNsYWltQWN0aXZlID0gY29ubmVjdChCYWxhbmNlQ2xhaW1BY3RpdmUsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUsIEFjY291bnRSZWZzU3RvcmUsIFByaXZhdGVLZXlTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgbGV0IHByb3BzID0gQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgICAgICBwcm9wcy5hY2NvdW50X3JlZnMgPSBBY2NvdW50UmVmc1N0b3JlLmdldEFjY291bnRSZWZzKCk7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VDbGFpbUFjdGl2ZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5cclxuaW1wb3J0IFByaXZhdGVLZXlTdG9yZSBmcm9tIFwic3RvcmVzL1ByaXZhdGVLZXlTdG9yZVwiO1xyXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZVwiO1xyXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJhbGFuY2VDbGFpbVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jbGFpbV9hY2NvdW50X25hbWUpXHJcbiAgICAgICAgICAgIHRoaXMub25DbGFpbUFjY291bnQoXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNoZWNrZWRcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhbGFuY2VzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldC5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiAvPjtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnsvKiBDIEggRSBDIEsgQiBPIFggKi99PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC51bmNsYWltZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC51bmNsYWltZWRfdmVzdGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5uYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHIsIG5hbWVfYXNzZXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsrK2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmNoZWNrZWQuZ2V0KGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoZWNrYm94LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmJhbGFuY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci51bmNsYWltZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ci51bmNsYWltZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtuYW1lX2Fzc2V0LmdldCgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci52ZXN0aW5nLnVuY2xhaW1lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3IudmVzdGluZy51bmNsYWltZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e25hbWVfYXNzZXQuZ2V0KDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gb2YgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3IudmVzdGluZy50b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtuYW1lX2Fzc2V0LmdldCgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHtuYW1lX2Fzc2V0LmdldCgwKX0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0FycmF5KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGVja2JveChpbmRleCwgYmFsYW5jZXMpIHtcclxuICAgICAgICBsZXQgY2hlY2tlZCA9IHRoaXMucHJvcHMuY2hlY2tlZDtcclxuICAgICAgICBpZiAoY2hlY2tlZC5nZXQoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQgPSBjaGVja2VkLmRlbGV0ZShpbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWQuc2V0KGluZGV4LCBiYWxhbmNlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFNlbGVjdGVkQmFsYW5jZUNsYWltcyhjaGVja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsYWltQWNjb3VudChjbGFpbV9hY2NvdW50X25hbWUsIGNoZWNrZWQpIHtcclxuICAgICAgICAvLyBBIFUgVCBPICBTIEUgTCBFIEMgVCAgQSBDIEMgTyBVIE4gVCBTXHJcbiAgICAgICAgLy8gb25seSBpZiBub3RoaW5nIGlzIHNlbGVjdGVkIChwbGF5IGl0IHNhZmUpXHJcbiAgICAgICAgaWYgKGNoZWNrZWQuc2l6ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMucHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldC5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gay5nZXQoMCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBjbGFpbV9hY2NvdW50X25hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2LnVuY2xhaW1lZCB8fCB2LnZlc3RpbmcudW5jbGFpbWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBjaGVja2VkLnNldChpbmRleCwgdi5iYWxhbmNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY2hlY2tlZC5zaXplKVxyXG4gICAgICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFNlbGVjdGVkQmFsYW5jZUNsYWltcyhjaGVja2VkKTtcclxuICAgIH1cclxufVxyXG5cclxuQmFsYW5jZUNsYWltU2VsZWN0b3IgPSBjb25uZWN0KEJhbGFuY2VDbGFpbVNlbGVjdG9yLCB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICBsZXQgcHJvcHMgPSBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIGxldCB7YmFsYW5jZXMsIGFkZHJlc3NfdG9fcHVia2V5fSA9IHByb3BzO1xyXG4gICAgICAgIGxldCBwcml2YXRlX2tleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xyXG4gICAgICAgIGxldCBncm91cENvdW50TWFwID0gSW1tdXRhYmxlLk1hcCgpLmFzTXV0YWJsZSgpO1xyXG4gICAgICAgIGxldCBncm91cENvdW50ID0gKGdyb3VwLCBkaXN0aW5jdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2V0ID0gZ3JvdXBDb3VudE1hcC5nZXQoZ3JvdXApO1xyXG4gICAgICAgICAgICBpZiAoIXNldCkge1xyXG4gICAgICAgICAgICAgICAgc2V0ID0gSW1tdXRhYmxlLlNldCgpLmFzTXV0YWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBDb3VudE1hcC5zZXQoZ3JvdXAsIHNldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0LmFkZChkaXN0aW5jdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXQuc2l6ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChiYWxhbmNlcylcclxuICAgICAgICAgICAgcHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldCA9IGJhbGFuY2VzXHJcbiAgICAgICAgICAgICAgICAuZ3JvdXBCeSh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBLIEUgWSBTXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHVia2V5ID0gYWRkcmVzc190b19wdWJrZXkuZ2V0KHYub3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleV9vYmplY3QgPSBwcml2YXRlX2tleXMuZ2V0KHB1YmtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1wb3J0ZWQgQWNjb3VudCBOYW1lcyAoanVzdCBhIHZpc3VhbCBhaWQsIGhlbHBzIHRvIGF1dG8gc2VsZWN0IGEgcmVhbCBhY2NvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9rZXlfb2JqZWN0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5X29iamVjdC5pbXBvcnRfYWNjb3VudF9uYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMgPSBwcml2YXRlX2tleV9vYmplY3QuaW1wb3J0X2FjY291bnRfbmFtZXMuam9pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaWduaW5nIGlzIHZlcnkgc2xvdywgZnVydGhlciBkaXZpZGUgdGhlIGdyb3VwcyBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHNpZ25hdHVyZXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2hfbnVtYmVyID0gTWF0aC5jZWlsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cENvdW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tdXRhYmxlLkxpc3QoW25hbWVzLCB2LmJhbGFuY2UuYXNzZXRfaWRdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYub3duZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDYwXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZV9hc3NldF9rZXkgPSBJbW11dGFibGUuTGlzdChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LmJhbGFuY2UuYXNzZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoX251bWJlclxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lX2Fzc2V0X2tleTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGwgPT5cclxuICAgICAgICAgICAgICAgICAgICBsLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHIsIHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFYgQSBMIFUgRSBTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnB1YmxpY19rZXlfc3RyaW5nID0gYWRkcmVzc190b19wdWJrZXkuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYub3duZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmJhbGFuY2VzID0gci5iYWxhbmNlcy5hZGQodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi52ZXN0ZWRfYmFsYW5jZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnZlc3RpbmcudW5jbGFpbWVkICs9IE51bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52ZXN0ZWRfYmFsYW5jZS5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudmVzdGluZy50b3RhbCArPSBOdW1iZXIodi5iYWxhbmNlLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudW5jbGFpbWVkICs9IE51bWJlcih2LmJhbGFuY2UuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNsYWltZWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXN0aW5nOiB7dW5jbGFpbWVkOiAwLCB0b3RhbDogMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlczogSW1tdXRhYmxlLlNldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc29ydEJ5KGsgPT4gayk7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VDbGFpbVNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdCBmcm9tIFwiY29tcG9uZW50cy9Gb3Jtcy9BY2NvdW50U2VsZWN0XCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBNeUFjY291bnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZCxcclxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGFjY291bnRfbmFtZXMgPSB0aGlzLnByb3BzLmFjY291bnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiAhIWFjY291bnQpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoYWNjb3VudCkpXHJcbiAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiBhY2NvdW50LmdldChcIm5hbWVcIikpXHJcbiAgICAgICAgICAgIC5zb3J0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFjY291bnRTZWxlY3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzPXthY2NvdW50X25hbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjb3VudFNlbGVjdChhY2NvdW50X25hbWUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGFjY291bnRfbmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoTXlBY2NvdW50cyk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBCcmFpbmtleUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQnJhaW5rZXlBY3Rpb25zXCI7XHJcbmltcG9ydCBCcmFpbmtleVN0b3JlRmFjdG9yeSBmcm9tIFwic3RvcmVzL0JyYWlua2V5U3RvcmVcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQnJhaW5rZXlJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9XYWxsZXQvQnJhaW5rZXlJbnB1dFwiO1xyXG5pbXBvcnQge3RvUGFpcnN9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQWNjb3VudENhcmQgZnJvbSBcImNvbXBvbmVudHMvRGFzaGJvYXJkL0FjY291bnRDYXJkXCI7XHJcblxyXG5jb25zdCBjb25uZWN0T2JqZWN0ID0ge1xyXG4gICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIFtCcmFpbmtleVN0b3JlRmFjdG9yeS5nZXRJbnN0YW5jZShcIndtY1wiKV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJyYWlua2V5U3RvcmVGYWN0b3J5LmdldEluc3RhbmNlKFwid21jXCIpLmdldFN0YXRlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBCcmFpbmtleSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBCcmFpbmtleVN0b3JlRmFjdG9yeS5jbG9zZUluc3RhbmNlKFwid21jXCIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPEJyYWlua2V5SW5wdXRBY2NlcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCcmFpbmtleSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CcmFpbmtleUlucHV0QWNjZXB0PlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5CcmFpbmtleSA9IGNvbm5lY3QoXHJcbiAgICBCcmFpbmtleSxcclxuICAgIGNvbm5lY3RPYmplY3RcclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgQnJhaW5rZXk7XHJcblxyXG5jbGFzcyBWaWV3QnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzaG9ydF9icm5rZXkgPSB0aGlzLnByb3BzLmJybmtleS5zdWJzdHJpbmcoMCwgMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KClcIiwgdGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KCkpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntzaG9ydF9icm5rZXl9PC9zcGFuPiZoZWxsaXA7XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY2NvdW50X2lkcy5zaXplID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmFpbmtleUFjY291bnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudF9pZHMudG9BcnJheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYWNjb3VudHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5WaWV3QnJhaW5rZXkgPSBjb25uZWN0KFxyXG4gICAgVmlld0JyYWlua2V5LFxyXG4gICAgY29ubmVjdE9iamVjdFxyXG4pO1xyXG5cclxuY2xhc3MgQnJhaW5rZXlBY2NvdW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnRzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCByb3dzID0gdG9QYWlycyh0aGlzLnByb3BzLmFjY291bnRzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4gISFhY2NvdW50WzFdKVxyXG4gICAgICAgICAgICAubWFwKGFjY291bnQgPT4gYWNjb3VudFsxXS5nZXQoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgICAgIC5tYXAobmFtZSA9PiA8QWNjb3VudENhcmQga2V5PXtuYW1lfSBhY2NvdW50PXtuYW1lfSAvPik7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPntyb3dzfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuQnJhaW5rZXlBY2NvdW50cyA9IEJpbmRUb0NoYWluU3RhdGUoQnJhaW5rZXlBY2NvdW50cyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnJhaW5rZXlJbnB1dEFjY2VwdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YnJua2V5OiBcIlwiLCBhY2NlcHQ6IGZhbHNlfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWNjZXB0KSByZXR1cm4gPHNwYW4+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcclxuXHJcbiAgICAgICAgbGV0IHJlYWR5ID0gdGhpcy5zdGF0ZS5icm5rZXkgJiYgdGhpcy5zdGF0ZS5icm5rZXkgIT09IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyYWlua2V5SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25CcmFpbmtleUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIHN1Y2Nlc3NcIiwge2Rpc2FibGVkOiAhcmVhZHl9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjZXB0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmFjY2VwdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CcmFpbmtleUNoYW5nZShicm5rZXkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHticm5rZXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY2VwdCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NlcHQ6IHRydWV9KTtcclxuICAgICAgICBCcmFpbmtleUFjdGlvbnMuc2V0QnJhaW5rZXkodGhpcy5zdGF0ZS5icm5rZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA8ZGl2IG9uQ2xpY2s9e3RoaXMub25Mb29rdXBBY2NvdW50cy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiPkxvb2t1cCBBY2NvdW50czwvZGl2PlxyXG4vLyBvbkxvb2t1cEFjY291bnRzKCkge1xyXG4vL1xyXG4vLyB9XHJcbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgQnJhaW5rZXlBY3Rpb25zIHtcclxuICAgIHNldEJyYWlua2V5KGJybmtleSkge1xyXG4gICAgICAgIHJldHVybiBicm5rZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBCcmFpbmtleUFjdGlvbnNXcmFwcGVkID0gYWx0LmNyZWF0ZUFjdGlvbnMoQnJhaW5rZXlBY3Rpb25zKTtcclxuZXhwb3J0IGRlZmF1bHQgQnJhaW5rZXlBY3Rpb25zV3JhcHBlZDtcclxuIiwiaW1wb3J0IGFsdCBmcm9tIFwiYWx0LWluc3RhbmNlXCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmUsIGtleX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBCYXNlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYXNlU3RvcmVcIjtcclxuaW1wb3J0IEJyYWlua2V5QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CcmFpbmtleUFjdGlvbnNcIjtcclxuXHJcbi8qKiBFYWNoIGluc3RhbmNlIHN1cHBvcnRzIGEgc2luZ2xlIGJyYWlua2V5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFpbmtleVN0b3JlRmFjdG9yeSB7XHJcbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xyXG4gICAgLyoqIFRoaXMgbWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBmb3IgdGhlIHNhbWUgPGI+bmFtZTwvYj4uICBXaGVuIGRvbmUsXHJcbiAgICAgICAgKGNvbXBvbmVudFdpbGxVbm1vdW50KSBtYWtlIHN1cmUgdG8gY2FsbCB0aGlzLmNsb3NlSW5zdGFuY2UoKVxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChuYW1lKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gYWx0LmNyZWF0ZVN0b3JlKEJyYWlua2V5U3RvcmVJbXBsLCBcIkJyYWlua2V5U3RvcmVcIik7XHJcbiAgICAgICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5zZXQobmFtZSwgaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXkgPSBuYW1lICsgXCIgc3Vic2NyaWJlZF9pbnN0YW5jZVwiO1xyXG4gICAgICAgIGlmICghQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChzdWJzY3JpYmVkX2luc3RhbmNlX2tleSkpIHtcclxuICAgICAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2UgPSBpbnN0YW5jZS5jaGFpblN0b3JlVXBkYXRlLmJpbmQoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZShzdWJzY3JpYmVkX2luc3RhbmNlKTtcclxuICAgICAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLnNldChcclxuICAgICAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5LFxyXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlZF9pbnN0YW5jZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xvc2VJbnN0YW5jZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChuYW1lKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGluc3RhbmNlIFwiICsgbmFtZSk7XHJcbiAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5ID0gbmFtZSArIFwiIHN1YnNjcmliZWRfaW5zdGFuY2VcIjtcclxuICAgICAgICB2YXIgc3Vic2NyaWJlZF9pbnN0YW5jZSA9IEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5nZXQoXHJcbiAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZGVsZXRlKHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5KTtcclxuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHN1YnNjcmliZWRfaW5zdGFuY2UpO1xyXG4gICAgICAgIGluc3RhbmNlLmNsZWFyQ2FjaGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIERlcml2ZWQga2V5cyBtYXkgYmUgdW5hc3NpZ25lZCBmcm9tIGFjY291bnRzIHRoZXJlZm9yZSB3ZSBtdXN0IGRlZmluZSBhXHJcbiAgICBmaXhlZCBibG9jayBvZiBkZXJpdmllZCBrZXlzIHRoZW4gbW9uaXRvciB0aGUgZW50aXJlIGJsb2NrLlxyXG4qL1xyXG52YXIgREVSSVZJRURfQlJBSU5LRVlfUE9PTF9TSVpFID0gMTA7XHJcblxyXG5jbGFzcyBCcmFpbmtleVN0b3JlSW1wbCBleHRlbmRzIEJhc2VTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xyXG4gICAgICAgIHRoaXMuYmluZExpc3RlbmVycyh7XHJcbiAgICAgICAgICAgIG9uU2V0QnJhaW5rZXk6IEJyYWlua2V5QWN0aW9ucy5zZXRCcmFpbmtleVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydChcImluU3luY1wiLCBcImNoYWluU3RvcmVVcGRhdGVcIiwgXCJjbGVhckNhY2hlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoYWluU3RvcmVVbnN1YnNjcmliZSgpIHtcclxuICAgIC8vICAgICB0cnl7XHJcbiAgICAvLyAgICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5jaGFpblN0b3JlVXBkYXRlKVxyXG4gICAgLy8gICAgIH1jYXRjaChlMSkge2NvbnNvbGUubG9nKFwidW5zdWIgMSBmYWlsXCIpO1xyXG4gICAgLy8gICAgICAgICB0cnl7XHJcbiAgICAvLyAgICAgICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMuY2hhaW5TdG9yZVVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgLy8gICAgICAgICB9Y2F0Y2goZTIpIHtjb25zb2xlLmxvZyhcInVuc3ViIDEgZmFpbFwiKX1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY2xlYXJDYWNoZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBicm5rZXk6IFwiXCIsXHJcbiAgICAgICAgICAgIGFjY291bnRfaWRzOiBJbW11dGFibGUuU2V0KClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVyaXZlZF9rZXlzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgLy8gQ29tcGFyZWQgd2l0aCBDaGFpblN0b3JlLmFjY291bnRfaWRzX2J5X2tleVxyXG4gICAgICAgIHRoaXMuYWNjb3VudF9pZHNfYnlfa2V5ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogU2F2ZXMgdGhlIGJyYWlua2V5IGFuZCBiZWdpbnMgdGhlIGxvb2t1cCBmb3IgZGVyaXZlZCBhY2NvdW50IHJlZmVybmVjZXMgKi9cclxuICAgIG9uU2V0QnJhaW5rZXkoYnJua2V5KSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJua2V5fSk7XHJcbiAgICAgICAgdGhpcy5kZXJpdmVLZXlzKGJybmtleSk7XHJcbiAgICAgICAgdGhpcy5jaGFpblN0b3JlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEByZXR1cm4gPGI+dHJ1ZTwvYj4gd2hlbiBhbGwgZGVyaXZpZWQgYWNjb3VudCByZWZlcmVuY2VzIGFyZSBlaXRoZXJcclxuICAgICAgICBmb3VuZCBvciBrbm93biBub3QgdG8gZXhpc3QuXHJcbiAgICAqL1xyXG4gICAgaW5TeW5jKCkge1xyXG4gICAgICAgIHRoaXMuZGVyaXZlZF9rZXlzLmZvckVhY2goZGVyaXZlZF9rZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQZW5kaW5nRnJvbUNoYWluKGRlcml2ZWRfa2V5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYWluU3RvcmVVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlcml2ZWRfa2V5cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5hY2NvdW50X2lkc19ieV9rZXkgPT09IENoYWluU3RvcmUuYWNjb3VudF9pZHNfYnlfa2V5KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5hY2NvdW50X2lkc19ieV9rZXkgPSBDaGFpblN0b3JlLmFjY291bnRfaWRzX2J5X2tleTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjY291bnRJZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXJpdmVLZXlzKGJybmtleSA9IHRoaXMuc3RhdGUuYnJua2V5KSB7XHJcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gdGhpcy5kZXJpdmVkX2tleXMubGVuZ3RoOyAvLyBuZXh0IHNlcXVlbmNlIChzdGFydGluZyB3aXRoIDApXHJcbiAgICAgICAgdmFyIHByaXZhdGVfa2V5ID0ga2V5LmdldF9icmFpblByaXZhdGVLZXkoYnJua2V5LCBzZXF1ZW5jZSk7XHJcbiAgICAgICAgdmFyIGRlcml2ZWRfa2V5ID0gZGVyaXZlZEtleVN0cnVjdChwcml2YXRlX2tleSk7XHJcbiAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMucHVzaChkZXJpdmVkX2tleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVyaXZlZF9rZXlzLmxlbmd0aCA8IERFUklWSUVEX0JSQUlOS0VZX1BPT0xfU0laRSlcclxuICAgICAgICAgICAgdGhpcy5kZXJpdmVLZXlzKGJybmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWNjb3VudElkcygpIHtcclxuICAgICAgICB2YXIgbmV3X2FjY291bnRfaWRzID0gSW1tdXRhYmxlLlNldCgpLndpdGhNdXRhdGlvbnMobmV3X2lkcyA9PiB7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVQdWJrZXkgPSBwdWJsaWNfc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFpbl9hY2NvdW50X2lkcyA9IENoYWluU3RvcmUuZ2V0QWNjb3VudFJlZnNPZktleShcclxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNfc3RyaW5nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYWluX2FjY291bnRfaWRzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYWluX2FjY291bnRfaWRzLmZvckVhY2goY2hhaW5fYWNjb3VudF9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19pZHMuYWRkKGNoYWluX2FjY291bnRfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cy5mb3JFYWNoKGRlcml2ZWRfa2V5ID0+XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVQdWJrZXkoZGVyaXZlZF9rZXkucHVibGljX3N0cmluZylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIW5ld19hY2NvdW50X2lkcy5lcXVhbHModGhpcy5zdGF0ZS5hY2NvdW50X2lkcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50X2lkcyA9IG5ld19hY2NvdW50X2lkcztcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9pZHM6IG5ld19hY2NvdW50X2lkc30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVyaXZlZEtleVN0cnVjdChwcml2YXRlX2tleSkge1xyXG4gICAgdmFyIHB1YmxpY19zdHJpbmcgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpLnRvUHVibGljS2V5U3RyaW5nKCk7XHJcbiAgICB2YXIgZGVyaXZlZF9rZXkgPSB7cHJpdmF0ZV9rZXksIHB1YmxpY19zdHJpbmd9O1xyXG4gICAgcmV0dXJuIGRlcml2ZWRfa2V5O1xyXG59XHJcblxyXG52YXIgaXNQZW5kaW5nRnJvbUNoYWluID0gZGVyaXZlZF9rZXkgPT5cclxuICAgIENoYWluU3RvcmUuZ2V0QWNjb3VudFJlZnNPZktleShkZXJpdmVkX2tleS5wdWJsaWNfc3RyaW5nKSA9PT0gdW5kZWZpbmVkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuaW1wb3J0IEFjY291bnRJbWFnZSBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50SW1hZ2VcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLyoqXHJcbiAqICBAYnJpZWYgZGlzcGxheXMgdGhlIHN1bW1hcnkgb2YgYSBnaXZlbiBhY2NvdW50IGluIGEgY29uZGVuY2VkIHZpZXcgKGZvciB0aGUgZGFzaGJvYXJkKVxyXG4gKlxyXG4gKiAgVGhpcyBjYXJkIGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbiAqXHJcbiAqICB7IGFjY291bnQ6ICR7bmFtZV9vcl9pZH0gfVxyXG4gKi9cclxuXHJcbmNsYXNzIEFjY291bnRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBvbkNhcmRDbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hY2NvdW50LyR7bmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBudWxsO1xyXG4gICAgICAgIGxldCBiYWxhbmNlcyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzTXlBY2NvdW50ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICBuYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgICAgIGxldCBhYmFsID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xyXG4gICAgICAgICAgICBpZiAoYWJhbCkge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZXMgPSBhYmFsXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VBbW91bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdCh4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWxhbmNlQW1vdW50LmdldChcImJhbGFuY2VcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXt4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNNeUFjY291bnQgPSBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQodGhpcy5wcm9wcy5hY2NvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBhY2NvdW50LWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhcmRDbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkXCIgKyAoaXNNeUFjY291bnQgPyBcIiBteS1hY2NvdW50XCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e25hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3toZWlnaHQ6IDY0LCB3aWR0aDogNjR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiYWxhbmNlc1wiPntiYWxhbmNlc308L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQWNjb3VudENhcmQgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRDYXJkKTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY2NvdW50Q2FyZCk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IG5vdGlmeSBmcm9tIFwiYWN0aW9ucy9Ob3RpZmljYXRpb25BY3Rpb25zXCI7XHJcbmltcG9ydCB7UHJpdmF0ZUtleSwgQWVzLCBQdWJsaWNLZXksIGhhc2h9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge0NoYWluQ29uZmlnfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcclxuaW1wb3J0IFByaXZhdGVLZXlTdG9yZSBmcm9tIFwic3RvcmVzL1ByaXZhdGVLZXlTdG9yZVwiO1xyXG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XHJcbmltcG9ydCB7V2FsbGV0Q3JlYXRlfSBmcm9tIFwiY29tcG9uZW50cy9XYWxsZXQvV2FsbGV0Q3JlYXRlXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuLi9XYWxsZXQvQmFsYW5jZUNsYWltQWN0aXZlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnNcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFzc2V0VG90YWwgZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFzc2V0VG90YWxcIjtcclxuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuaW1wb3J0IEltcG9ydEtleXNTdG9yZSBmcm9tIFwic3RvcmVzL0ltcG9ydEtleXNTdG9yZVwiO1xyXG5cclxuaW1wb3J0IEdlbmVzaXNGaWx0ZXIgZnJvbSBcImNoYWluL0dlbmVzaXNGaWx0ZXJcIjtcclxuXHJcbnJlcXVpcmUoXCIuL0ltcG9ydEtleXMuc2Nzc1wiKTtcclxuXHJcbmxldCBpbXBvcnRfa2V5c19hc3NlcnRfY2hlY2tpbmcgPSBmYWxzZTtcclxuXHJcbmNvbnN0IEtleUNvdW50ID0gKHtrZXlfY291bnR9KSA9PiB7XHJcbiAgICBpZiAoIWtleV9jb3VudCkgcmV0dXJuIDxzcGFuIC8+O1xyXG4gICAgcmV0dXJuIDxzcGFuPkZvdW5kIHtrZXlfY291bnR9IHByaXZhdGUga2V5czwvc3Bhbj47XHJcbn07XHJcblxyXG5jbGFzcyBJbXBvcnRLZXlzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJCYWxhbmNlQ2xhaW1zID0gdGhpcy5fcmVuZGVyQmFsYW5jZUNsYWltcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgcHJpdmF0ZUtleTogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBfZ2V0SW5pdGlhbFN0YXRlKGtlZXBfZmlsZV9uYW1lID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXlzX3RvX2FjY291bnQ6IHt9LFxyXG4gICAgICAgICAgICBub19maWxlOiB0cnVlLFxyXG4gICAgICAgICAgICBhY2NvdW50X2tleXM6IFtdLFxyXG4gICAgICAgICAgICAvL2JyYWlua2V5OiBudWxsLFxyXG4gICAgICAgICAgICAvL2VuY3J5cHRlZF9icmFpbmtleTogbnVsbCxcclxuICAgICAgICAgICAgcmVzZXRfZmlsZV9uYW1lOiBrZWVwX2ZpbGVfbmFtZVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnJlc2V0X2ZpbGVfbmFtZVxyXG4gICAgICAgICAgICAgICAgOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICByZXNldF9wYXNzd29yZDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW06IG51bGwsXHJcbiAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICBpbXBvcnRlZF9rZXlzX3B1YmxpYzoge30sXHJcbiAgICAgICAgICAgIGtleV90ZXh0X21lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfc3RhdHVzOiBbXSxcclxuICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaW1wb3J0U3VjY2VzczogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KGUsIGtlZXBfZmlsZV9uYW1lKSB7XHJcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoa2VlcF9maWxlX25hbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsICgpID0+IHRoaXMudXBkYXRlT25DaGFuZ2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaWYoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVmcy53aWZJbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLmFkZEJ5UGF0dGVybih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoZSkge1xyXG4gICAgICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRJbml0aWFsU3RhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT25DaGFuZ2UoKSB7XHJcbiAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKFxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1wb3J0QWNjb3VudEtleUNvdW50KGtleXNfdG9fYWNjb3VudCkge1xyXG4gICAgICAgIGxldCBhY2NvdW50X2tleWNvdW50ID0ge307XHJcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGtleXNfdG9fYWNjb3VudClcclxuICAgICAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIG9mIGtleXNfdG9fYWNjb3VudFtrZXldLmFjY291bnRfbmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGFjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXSB8fCAwKSArIDE7XHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmQgPyBhY2NvdW50X2tleWNvdW50IDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWQoZXZ0KSB7XHJcbiAgICAgICAgdGhpcy5yZXNldChudWxsLCB0cnVlKTtcclxuICAgICAgICBsZXQgZmlsZSA9IGV2dC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGV2dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGV2dC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25fY29udGVudHM7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25fY29udGVudHMgPSBKU09OLnBhcnNlKGNvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGNoYW5jZSB0byBlbmNvdW50ZXIgYSBsYXJnZSBmaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB0aGlzIGZvcm1hdCBmaXJzdC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUltcG9ydEtleVVwbG9hZChcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbl9jb250ZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVfc3RhdGVcIiwgdXBkYXRlX3N0YXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVfc3RhdGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlX3N0YXRlLmdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyeSBlbXB0eSBwYXNzd29yZCwgYWxzbyBkaXNwbGF5IFwiRW50ZXIgaW1wb3J0IGZpbGUgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXNzd29yZENoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vREVCVUcgY29uc29sZS5sb2coXCIuLi4gX3BhcnNlSW1wb3J0S2V5VXBsb2FkXCIsZSlcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWpzb25fY29udGVudHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUgKyBcIiBpcyBhbiB1bnJlY29nbml6ZWQgZm9ybWF0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlV2FsbGV0SnNvbihqc29uX2NvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkQnlQYXR0ZXJuKGNvbnRlbnRzKSkgdGhyb3cgZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSBlbXB0eSBwYXNzd29yZCwgYWxzbyBkaXNwbGF5IFwiRW50ZXIgaW1wb3J0IGZpbGUgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi4uLiBJbXBvcnRLZXlzIHVwbG9hZCBlcnJvclwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltcG9ydF9maWxlX21lc3NhZ2U6IG1lc3NhZ2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEJUUyAxLjAgY2xpZW50IHdhbGxldF9leHBvcnRfa2V5cyBmb3JtYXQuICovXHJcbiAgICBfcGFyc2VJbXBvcnRLZXlVcGxvYWQoanNvbl9jb250ZW50cywgZmlsZV9uYW1lLCB1cGRhdGVfc3RhdGUpIHtcclxuICAgICAgICBsZXQgcGFzc3dvcmRfY2hlY2tzdW0sIHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtID0ganNvbl9jb250ZW50cy5wYXNzd29yZF9jaGVja3N1bTtcclxuICAgICAgICAgICAgaWYgKCFwYXNzd29yZF9jaGVja3N1bSlcclxuICAgICAgICAgICAgICAgIHRocm93IGZpbGVfbmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShqc29uX2NvbnRlbnRzLmFjY291bnRfa2V5cykpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlX25hbWUgKyBcIiBpcyBhbiB1bnJlY29nbml6ZWQgZm9ybWF0XCI7XHJcblxyXG4gICAgICAgICAgICB1bmZpbHRlcmVkX2FjY291bnRfa2V5cyA9IGpzb25fY29udGVudHMuYWNjb3VudF9rZXlzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgZS5tZXNzYWdlIHx8IGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCVFMgMS4wIHdhbGxldHMgbWF5IGhhdmUgYSBsb3Qgb2YgZ2VuZXJhdGVkIGJ1dCB1bnVzZWQga2V5cyBvciBzcGVudCBUSVRBTiBhZGRyZXNzZXMgbWFraW5nXHJcbiAgICAgICAgLy8gd2FsbGV0cyBzbyBsYXJnZSBpdCBpcyB3YXMgbm90IHBvc3NpYmxlIHRvIHVzZSB0aGUgSmF2YVNjcmlwdCB3YWxsZXRzIHdpdGggdGhlbS5cclxuXHJcbiAgICAgICAgbGV0IGdlbmVzaXNfZmlsdGVyID0gbmV3IEdlbmVzaXNGaWx0ZXIoKTtcclxuICAgICAgICBpZiAoIWdlbmVzaXNfZmlsdGVyLmlzQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudF9rZXlzOiB1bmZpbHRlcmVkX2FjY291bnRfa2V5cyxcclxuICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtnZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZzogdHJ1ZX0sXHJcbiAgICAgICAgICAgICgpID0+XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpPT5cclxuICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyLmluaXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJfc3RhdHVzID0gdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZGIDwgdmVyc2lvbiA0MSBkb2VzIG5vdCBzdXBwb3J0IHdvcmtlciB0aHJlYWRzIGludGVybmFscyAobGlrZSBibG9iIHVybHMpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IEdlbmVzaXNGaWx0ZXJXb3JrZXIgPSByZXF1aXJlKFwid29ya2VyLWxvYWRlciF3b3JrZXJzL0dlbmVzaXNGaWx0ZXJXb3JrZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgd29ya2VyID0gbmV3IEdlbmVzaXNGaWx0ZXJXb3JrZXJcclxuICAgICAgICAgICAgICAgICAgICAvLyB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhY2NvdW50X2tleXM6IHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBibG9vbV9maWx0ZXI6IGdlbmVzaXNfZmlsdGVyLmJsb29tX2ZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd29ya2VyLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHsgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHsgc3RhdHVzLCBhY2NvdW50X2tleXMgfSA9IGV2ZW50LmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBjYXRjaCggZSApIHsgY29uc29sZS5lcnJvcignR2VuZXNpc0ZpbHRlcldvcmtlcicsIGUpIH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X2tleXMgPSB1bmZpbHRlcmVkX2FjY291bnRfa2V5cztcclxuICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlci5maWx0ZXIoYWNjb3VudF9rZXlzLCBzdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaW1wb3J0IGZpbHRlclwiLCBzdGF0dXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuZXJyb3IgPT09IFwibWlzc2luZ19wdWJsaWNfa2V5c1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW4tcmVsZWFzZWQgZm9ybWF0LCBqdXN0IGZvciB0ZXN0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfa2V5czogdW5maWx0ZXJlZF9hY2NvdW50X2tleXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCB7IGFjY291bnRfa2V5cyB9ID0gZXZlbnQuZGF0YSAvLyBpZiB1c2luZyB3b3JrZXIgdGhyZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfa2V5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9maW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuaW5pdGFsaXppbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZzogc3RhdHVzLmluaXRhbGl6aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmltcG9ydGluZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmFtbWVyIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93biBzdGF0dXNcIiwgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcl9zdGF0dXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3N0YXR1cy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RfYWNjb3VudF9uYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzW2ZpbHRlcl9zdGF0dXMubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjY291bnRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X2FjY291bnRfbmFtZSA9PT0gc3RhdHVzLmFjY291bnRfbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc2FtZSBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3N0YXR1c1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3N0YXR1cy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ldyBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZpbHRlcl9zdGF0dXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7Z2VuZXNpc19maWx0ZXJfc3RhdHVzOiBmaWx0ZXJfc3RhdHVzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLywgMTAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICBCVFMgMS4wIGhvc3RlZCB3YWxsZXQgYmFja3VwICh3YWxsZXQuYml0c2hhcmVzLm9yZykgaXMgc3VwcG9ydGVkLlxyXG5cclxuICAgIEJUUyAxLjAgbmF0aXZlIHdhbGxldHMgc2hvdWxkIHVzZSB3YWxsZXRfZXhwb3J0X2tleXMgaW5zdGVhZCBvZiBhIHdhbGxldCBiYWNrdXAuXHJcblxyXG4gICAgTm90ZSwgIE5hdGl2ZSB3YWxsZXQgYmFja3VwcyB3aWxsIGJlIHJlamVjdGVkLiAgVGhlIGxvZ2ljIGJlbG93IGRvZXMgbm90XHJcbiAgICBjYXB0dXJlIGFzc2lnbmVkIGFjY291bnQgbmFtZXMgKGZvciB1bnJlZ2lzdGVkIGFjY291bnRzKSBhbmQgZG9lcyBub3QgY2FwdHVyZVxyXG4gICAgc2lnbmluZyBrZXlzLiAgVGhlIGhvc3RlZCB3YWxsZXQgaGFzIG9ubHkgcmVnaXN0ZXJlZCBhY2NvdW50cyBhbmQgbm8gc2lnbmluZ1xyXG4gICAga2V5cy5cclxuXHJcbiAgICAqL1xyXG4gICAgX3BhcnNlV2FsbGV0SnNvbihqc29uX2NvbnRlbnRzKSB7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkX2NoZWNrc3VtO1xyXG4gICAgICAgIGxldCBlbmNyeXB0ZWRfYnJhaW5rZXk7XHJcbiAgICAgICAgbGV0IGFkZHJlc3NfdG9fZW5ja2V5cyA9IHt9O1xyXG4gICAgICAgIGxldCBhY2NvdW50X2FkZHJlc3NlcyA9IHt9O1xyXG5cclxuICAgICAgICBsZXQgc2F2ZVB1YmtleUFjY291bnQgPSBmdW5jdGlvbihwdWJrZXksIGFjY291bnRfbmFtZSkge1xyXG4gICAgICAgICAgICAvL3JlcGxhY2UgQlRTIHdpdGggR1BIXHJcbiAgICAgICAgICAgIHB1YmtleSA9IENoYWluQ29uZmlnLmFkZHJlc3NfcHJlZml4ICsgcHVia2V5LnN1YnN0cmluZygzKTtcclxuICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBQdWJsaWNLZXkuZnJvbVB1YmxpY0tleVN0cmluZyhcclxuICAgICAgICAgICAgICAgIHB1YmtleVxyXG4gICAgICAgICAgICApLnRvQWRkcmVzc1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgYWRkcmVzc2VzID0gYWNjb3VudF9hZGRyZXNzZXNbYWNjb3VudF9uYW1lXSB8fCBbXTtcclxuICAgICAgICAgICAgYWRkcmVzcyA9IFwiQlRTXCIgKyBhZGRyZXNzLnN1YnN0cmluZygzKTtcclxuICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBhZGRyZXNzXCIsYWRkcmVzcyxhY2NvdW50X25hbWUpXHJcbiAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICBhY2NvdW50X2FkZHJlc3Nlc1thY2NvdW50X25hbWVdID0gYWRkcmVzc2VzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShqc29uX2NvbnRlbnRzKSkge1xyXG4gICAgICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZygnLi4uIGpzb25fY29udGVudHMnLGpzb25fY29udGVudHMpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHdhbGxldCBmb3JtYXRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBqc29uX2NvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEuYWNjb3VudF9hZGRyZXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhLmVuY3J5cHRlZF9wcml2YXRlX2tleVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBlbGVtZW50LmRhdGEuYWNjb3VudF9hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmNrZXlzID0gYWRkcmVzc190b19lbmNrZXlzW2FkZHJlc3NdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuY2tleXMucHVzaChlbGVtZW50LmRhdGEuZW5jcnlwdGVkX3ByaXZhdGVfa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvL0RFQlVHIGNvbnNvbGUubG9nKFwiLi4uIGFkZHJlc3NcIixhZGRyZXNzLGVuY2tleXMpXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc190b19lbmNrZXlzW2FkZHJlc3NdID0gZW5ja2V5cztcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXCJhY2NvdW50X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IGVsZW1lbnQuZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVQdWJrZXlBY2NvdW50KGVsZW1lbnQuZGF0YS5vd25lcl9rZXksIGFjY291bnRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaGlzdG9yeSBvZiBlbGVtZW50LmRhdGEuYWN0aXZlX2tleV9oaXN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVQdWJrZXlBY2NvdW50KGhpc3RvcnlbMV0sIGFjY291bnRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbmNyeXB0ZWRfYnJhaW5rZXlcIiA9PSBlbGVtZW50LmRhdGEua2V5XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWRfYnJhaW5rZXkgPSBlbGVtZW50LmRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFwibWFzdGVyX2tleV9yZWNvcmRfdHlwZVwiID09IGVsZW1lbnQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgKyBcIiBpbnZhbGlkIG1hc3Rlcl9rZXlfcmVjb3JkIHJlY29yZFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YS5jaGVja3N1bSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGlzIG1pc3NpbmcgbWFzdGVyX2tleV9yZWNvcmQgY2hlY2tzdW1cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0gPSBlbGVtZW50LmRhdGEuY2hlY2tzdW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFlbmNyeXB0ZWRfYnJhaW5rZXkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIlBsZWFzZSB1c2UgYSBCVFMgMS4wIHdhbGxldF9leHBvcnRfa2V5cyBmaWxlIGluc3RlYWRcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGFzc3dvcmRfY2hlY2tzdW0pXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgKyBcIiBpcyBtaXNzaW5nIHBhc3N3b3JkX2NoZWNrc3VtXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVuY2tleXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICsgXCIgZG9lcyBub3QgY29udGFpbiBhbnkgcHJpdmF0ZSBrZXlzXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBlLm1lc3NhZ2UgfHwgZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhY2NvdW50X2tleXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBhY2NvdW50X25hbWUgaW4gYWNjb3VudF9hZGRyZXNzZXMpIHtcclxuICAgICAgICAgICAgbGV0IGVuY3J5cHRlZF9wcml2YXRlX2tleXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYWRkcmVzcyBvZiBhY2NvdW50X2FkZHJlc3Nlc1thY2NvdW50X25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5ja2V5cyA9IGFkZHJlc3NfdG9fZW5ja2V5c1thZGRyZXNzXTtcclxuICAgICAgICAgICAgICAgIGlmICghZW5ja2V5cykgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbmNrZXkgb2YgZW5ja2V5cykgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5wdXNoKGVuY2tleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWNjb3VudF9rZXlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2UgY291bGQgcHJvbXB0IGZvciB0aGlzIGJyYWluIGtleSBpbnN0ZWFkIG9uIGZpcnN0IHVzZS4gIFRoZSB1c2VyXHJcbiAgICAgICAgLy8gbWF5IGFscmVhZHkgaGF2ZSBhIGJyYWlua2V5IGF0IHRoaXMgcG9pbnQgc28gd2l0aCBhIHNpbmdsZSBicmFpbmtleVxyXG4gICAgICAgIC8vIHdhbGxldCB3ZSBjYW4ndCB1c2UgaXQgbm93LlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSxcclxuICAgICAgICAgICAgYWNjb3VudF9rZXlzXHJcbiAgICAgICAgICAgIC8vZW5jcnlwdGVkX2JyYWlua2V5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Bhc3N3b3JkQ2hlY2soZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dCAmJiBcInByZXZlbnREZWZhdWx0XCIgaW4gZXZ0KSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHdOb2RlID0gdGhpcy5yZWZzLnBhc3N3b3JkO1xyXG4gICAgICAgIC8vIGlmKHB3Tm9kZSkgcHdOb2RlLmZvY3VzKClcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBwd05vZGUgPyBwd05vZGUudmFsdWUgOiBcIlwiO1xyXG4gICAgICAgIGxldCBjaGVja3N1bSA9IHRoaXMuc3RhdGUucGFzc3dvcmRfY2hlY2tzdW07XHJcbiAgICAgICAgbGV0IG5ld19jaGVja3N1bSA9IGhhc2guc2hhNTEyKGhhc2guc2hhNTEyKHBhc3N3b3JkKSkudG9TdHJpbmcoXCJoZXhcIik7XHJcbiAgICAgICAgaWYgKGNoZWNrc3VtICE9IG5ld19jaGVja3N1bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBub19maWxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBwYXNzd29yZC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5vX2ZpbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRfcGFzc3dvcmQ6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9wYXNzX21hdGNoXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5fZGVjcnlwdFByaXZhdGVLZXlzKHBhc3N3b3JkKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgsIDI1MClcclxuICAgIH1cclxuXHJcbiAgICBfZGVjcnlwdFByaXZhdGVLZXlzKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkX2FlcyA9IEFlcy5mcm9tU2VlZChwYXNzd29yZCk7XHJcbiAgICAgICAgbGV0IGZvcm1hdF9lcnJvcjFfb25jZSA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgYWNjb3VudCBvZiB0aGlzLnN0YXRlLmFjY291bnRfa2V5cykge1xyXG4gICAgICAgICAgICBpZiAoIWFjY291bnQuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yID0gYEFjY291bnQgJHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmFjY291bnRfbmFtZVxyXG4gICAgICAgICAgICAgICAgfSBtaXNzaW5nIGVuY3J5cHRlZF9wcml2YXRlX2tleXNgO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0X2Vycm9yMV9vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5LmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRfZXJyb3IxX29uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSBhY2NvdW50LmFjY291bnRfbmFtZS50cmltKCk7XHJcbiAgICAgICAgICAgIGxldCBzYW1lX3ByZWZpeF9yZWdleCA9IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgICAgICBcIl5cIiArIENoYWluQ29uZmlnLmFkZHJlc3NfcHJlZml4XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjb3VudC5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5jcnlwdGVkX3ByaXZhdGUgPSBhY2NvdW50LmVuY3J5cHRlZF9wcml2YXRlX2tleXNbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleV9zdHJpbmcgPSBhY2NvdW50LnB1YmxpY19rZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50LnB1YmxpY19rZXlzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsOyAvLyBwZXJmb3JtYW5jZSBnYWluXHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9wbGFpbmhleCA9IHBhc3N3b3JkX2Flcy5kZWNyeXB0SGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWRfcHJpdmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltcG9ydF9rZXlzX2Fzc2VydF9jaGVja2luZyAmJiBwdWJsaWNfa2V5X3N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9rZXkgPSBQcml2YXRlS2V5LmZyb21IZXgocHJpdmF0ZV9wbGFpbmhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWIgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGR5ID0gcHViLnRvQWRkcmVzc1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHViYnkgPSBwdWIudG9QdWJsaWNLZXlTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzX3N0cmluZyA9IGFjY291bnQuYWRkcmVzc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnQuYWRkcmVzc2VzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7IC8vIGFzc2VydCBjaGVja2luZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc19zdHJpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHkuc3Vic3RyaW5nKDMpICE9IGFkZHJlc3Nfc3RyaW5nLnN1YnN0cmluZygzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzIGltcG9ydGVkIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3N0cmluZyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYnV0IGNhbGN1bGF0ZWQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLiBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmJ5LnN1YnN0cmluZygzKSAhPSBwdWJsaWNfa2V5X3N0cmluZy5zdWJzdHJpbmcoMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgKz1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYyBrZXkgaW1wb3J0ZWQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBidXQgY2FsY3VsYXRlZCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHViYnk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgIT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgTWlzcy1tYXRjaCBrZXlcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwdWJsaWNfa2V5X3N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9rZXkgPSBQcml2YXRlS2V5LmZyb21IZXgocHJpdmF0ZV9wbGFpbmhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5ID0gcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKTsgLy8gUyBMIE8gV1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZyA9IHB1YmxpY19rZXkudG9QdWJsaWNLZXlTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhbWVfcHJlZml4X3JlZ2V4LnRlc3QocHVibGljX2tleV9zdHJpbmcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3YXMgY3JlYXRpbmcgYSB1bnJlc3BvbnNpdmUgY2hyb21lIGJyb3dzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBhZnRlciB0aGUgcmVzdWx0cyB3ZXJlIHNob3duLiAgSXQgd2FzIHByb2JhYmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXVzZWQgYnkgZ2FyYmFnZSBjb2xsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluQ29uZmlnLmFkZHJlc3NfcHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZy5zdWJzdHJpbmcoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWNbcHVibGljX2tleV9zdHJpbmddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQge2FjY291bnRfbmFtZXN9ID0gdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnRbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXhcclxuICAgICAgICAgICAgICAgICAgICBdIHx8IHthY2NvdW50X25hbWVzOiBbXX07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IF9uYW1lIG9mIGFjY291bnRfbmFtZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfbmFtZSA9PSBhY2NvdW50X25hbWUpIGR1cCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lcy5wdXNoKGFjY291bnRfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnRbcHJpdmF0ZV9wbGFpbmhleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBlLnN0YWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGUubWVzc2FnZSB8fCBlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeS5lcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEFjY291bnQgJHthY2NvdW50X25hbWV9IGhhZCBhIHByaXZhdGUga2V5IGltcG9ydCBlcnJvcjogYCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2xldCBlbmNfYnJhaW5rZXkgPSB0aGlzLnN0YXRlLmVuY3J5cHRlZF9icmFpbmtleVxyXG4gICAgICAgIC8vaWYoZW5jX2JyYWlua2V5KXtcclxuICAgICAgICAvLyAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgYnJhaW5rZXk6IHBhc3N3b3JkX2Flcy5kZWNyeXB0SGV4VG9UZXh0KGVuY19icmFpbmtleSlcclxuICAgICAgICAvLyAgICB9KVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlT25DaGFuZ2UoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NhdmVJbXBvcnQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XHJcbiAgICAgICAgbGV0IGR1cHMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBwdWJsaWNfa2V5X3N0cmluZyBpbiB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKSB7XHJcbiAgICAgICAgICAgIGlmICgha2V5cy5oYXMocHVibGljX2tleV9zdHJpbmcpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWNbcHVibGljX2tleV9zdHJpbmddO1xyXG4gICAgICAgICAgICBkdXBzW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbm90aWZ5LmVycm9yKFwiVGhpcyB3YWxsZXQgaGFzIGFscmVhZHkgYmVlbiBpbXBvcnRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQga2V5c190b19hY2NvdW50ID0gdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnQ7XHJcbiAgICAgICAgZm9yIChsZXQgcHJpdmF0ZV9wbGFpbmhleCBvZiBPYmplY3Qua2V5cyhrZXlzX3RvX2FjY291bnQpKSB7XHJcbiAgICAgICAgICAgIGxldCB7YWNjb3VudF9uYW1lcywgcHVibGljX2tleV9zdHJpbmd9ID0ga2V5c190b19hY2NvdW50W1xyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBpZiAoZHVwc1twdWJsaWNfa2V5X3N0cmluZ10pXHJcbiAgICAgICAgICAgICAgICBkZWxldGUga2V5c190b19hY2NvdW50W3ByaXZhdGVfcGxhaW5oZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEltcG9ydEtleXNTdG9yZS5pbXBvcnRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHRoZSBsb2FkaW5nIGluZGljYXRvclxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNhdmVJbXBvcnQoKSwgMjAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlSW1wb3J0KCkge1xyXG4gICAgICAgIGxldCBrZXlzX3RvX2FjY291bnQgPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudDtcclxuICAgICAgICBsZXQgcHJpdmF0ZV9rZXlfb2JqcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHByaXZhdGVfcGxhaW5oZXggb2YgT2JqZWN0LmtleXMoa2V5c190b19hY2NvdW50KSkge1xyXG4gICAgICAgICAgICBsZXQge2FjY291bnRfbmFtZXMsIHB1YmxpY19rZXlfc3RyaW5nfSA9IGtleXNfdG9fYWNjb3VudFtcclxuICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXhcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcHJpdmF0ZV9rZXlfb2Jqcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXgsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRfYWNjb3VudF9uYW1lczogYWNjb3VudF9uYW1lcyxcclxuICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgV2FsbGV0RGIuaW1wb3J0S2V5c1dvcmtlcihwcml2YXRlX2tleV9vYmpzKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgSW1wb3J0S2V5c1N0b3JlLmltcG9ydGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1wb3J0X2NvdW50ID0gcHJpdmF0ZV9rZXlfb2Jqcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmltcG9ydF9rZXlfc3VjY2Vzc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpbXBvcnRfY291bnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydFN1Y2Nlc3M6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vbkNhbmNlbCgpIC8vIGJhY2sgdG8gY2xhaW0gYmFsYW5jZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIEltcG9ydEtleXNTdG9yZS5pbXBvcnRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLnRhcmdldC5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICAgICAgICAgIG5vdGlmeS5lcnJvcihgS2V5IGltcG9ydCBlcnJvcjogJHttZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCeVBhdHRlcm4oY29udGVudHMpIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnRzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgIGludmFsaWRfY291bnQgPSAwO1xyXG4gICAgICAgIGxldCB3aWZfcmVnZXggPSAvNVtISktdWzEtOUEtWmEtel17NDl9L2c7XHJcbiAgICAgICAgZm9yIChsZXQgd2lmIG9mIGNvbnRlbnRzLm1hdGNoKHdpZl9yZWdleCkgfHwgW10pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbVdpZih3aWYpOyAvL2NvdWxkIHRocm93IGFuZCBlcnJvclxyXG4gICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfcGxhaW5oZXggPSBwcml2YXRlX2tleS50b0J1ZmZlcigpLnRvU3RyaW5nKFwiaGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHB1YmxpY19rZXkgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXHJcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleV9zdHJpbmcgPSBwdWJsaWNfa2V5LnRvUHVibGljS2V5U3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtwcml2YXRlX3BsYWluaGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGludmFsaWRfY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXlfdGV4dF9tZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiRm91bmQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICghY291bnQgPyBcIlwiIDogY291bnQgKyBcIiB2YWxpZFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgKCFpbnZhbGlkX2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiIGFuZCBcIiArIGludmFsaWRfY291bnQgKyBcIiBpbnZhbGlkXCIpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBrZXlcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGNvdW50ID4gMSB8fCBpbnZhbGlkX2NvdW50ID4gMSA/IFwic1wiIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlT25DaGFuZ2UoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gcmVtb3ZlcyB0aGUgbWVzc2FnZSBvbiB0aGUgbmV4dCByZW5kZXJcclxuICAgICAgICB0aGlzLnN0YXRlLmtleV90ZXh0X21lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2dnbGVJbXBvcnRUeXBlKHR5cGUpIHtcclxuICAgIC8vICAgICBpZiAoIXR5cGUpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRvZ2dsZUltcG9ydFR5cGVcIiwgdHlwZSk7XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgICAgICAgIHByaXZhdGVLZXk6IHR5cGUgPT09IFwicHJpdmF0ZUtleVwiXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgX3JlbmRlckJhbGFuY2VDbGFpbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCYWxhbmNlQ2xhaW1BY3RpdmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMTV9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cHJpdmF0ZUtleX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB7a2V5c190b19hY2NvdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGtleV9jb3VudCA9IE9iamVjdC5rZXlzKGtleXNfdG9fYWNjb3VudCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBhY2NvdW50X2tleWNvdW50ID0gdGhpcy5nZXRJbXBvcnRBY2NvdW50S2V5Q291bnQoa2V5c190b19hY2NvdW50KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHdhbGxldCBwcmlvciB0byB0aGUgaW1wb3J0IGtleXMgKGtlZXBzIGxheW91dCBjbGVhbilcclxuICAgICAgICBpZiAoIVdhbGxldERiLmdldFdhbGxldCgpKVxyXG4gICAgICAgICAgICByZXR1cm4gPFdhbGxldENyZWF0ZSBpbXBvcnRLZXlzPXt0cnVlfSBoaWRlVGl0bGU9e3RydWV9IC8+O1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmltcG9ydGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJjaXJjbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmlsdGVyaW5nID0gdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcmluZztcclxuICAgICAgICBsZXQgd2FzX2ZpbHRlcmVkID1cclxuICAgICAgICAgICAgISF0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9maW5pc2hlZDtcclxuICAgICAgICBsZXQgYWNjb3VudF9yb3dzID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfc3RhdHVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBhY2NvdW50X3Jvd3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3RhdHVzIG9mIHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmNvdW50ICYmIHN0YXR1cy50b3RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfcm93cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtzdGF0dXMuYWNjb3VudF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhdHVzLmFjY291bnRfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyaW5ne1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXR1cy5jb3VudCAvIHN0YXR1cy50b3RhbCkgKiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0dXMuY291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbXBvcnRfcmVhZHkgPSBrZXlfY291bnQgIT09IDA7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkX3BsYWNlaG9sZGVyID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICBcIndhbGxldC5pbXBvcnRfcGFzc3dvcmRcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChpbXBvcnRfcmVhZHkpIHBhc3N3b3JkX3BsYWNlaG9sZGVyID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50X3Jvd3MgJiYgYWNjb3VudF9rZXljb3VudCkge1xyXG4gICAgICAgICAgICBhY2NvdW50X3Jvd3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIGluIGFjY291bnRfa2V5Y291bnQpIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRfcm93cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2FjY291bnRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWNjb3VudF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWNjb3VudF9rZXljb3VudFthY2NvdW50X25hbWVdfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltcG9ydFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogS2V5IGZpbGUgdXBsb2FkICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUua2V5X3RleHRfbWVzc2FnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUua2V5X3RleHRfbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEtleUNvdW50IGtleV9jb3VudD17a2V5X2NvdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7IWltcG9ydF9yZWFkeSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxhIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge2FjY291bnRfcm93cyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWFjY291bnRfcm93cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQubm9fYWNjb3VudHNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFjY291bnQudGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5yZXN0b3JlX2tleV9jb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57YWNjb3VudF9yb3dzfTwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7IWltcG9ydF9yZWFkeSAmJiAhdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpdmF0ZUtleSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25XaWYuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQucGFzdGVfcHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwid2lmSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5fcGFzc3dvcmRDaGVjay5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnRzXzA5X2V4cG9ydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubm9fZmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7ICg8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLnJlc2V0X2ZpbGVfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGxvYWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmltcG9ydF9maWxlX21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5ub19maWxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzZXRfcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9wbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbXBvcnRfcGFzc3dvcmRfbWVzc2FnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYWNvbG9yLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogISF0aGlzLnN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vX2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfaW5pdGFsaXppbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cImNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAge2ltcG9ydF9yZWFkeSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWUoXCJidXR0b24gc3VjY2Vzc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWltcG9ydF9yZWFkeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2F2ZUltcG9ydC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9rZXlzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC51bmNsYWltZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwid2FsbGV0LmNsYWltX2xhdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LnRvdGFsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNsYWltQXNzZXRUb3RhbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbXBvcnRLZXlzID0gY29ubmVjdChcclxuICAgIEltcG9ydEtleXMsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbSW1wb3J0S2V5c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0aW5nOiBJbXBvcnRLZXlzU3RvcmUuZ2V0U3RhdGUoKS5pbXBvcnRpbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRLZXlzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQmFsYW5jZUNsYWltQXNzZXRUb3RhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJhbGFuY2VzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5sb2FkaW5nX2JhbGFuY2VzXCIgLz4maGVsbGlwO1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbF9ieV9hc3NldCA9IHRoaXMucHJvcHMuYmFsYW5jZXNcclxuICAgICAgICAgICAgLmdyb3VwQnkodiA9PiB2LmJhbGFuY2UuYXNzZXRfaWQpXHJcbiAgICAgICAgICAgIC5tYXAobCA9PiBsLnJlZHVjZSgociwgdikgPT4gciArIE51bWJlcih2LmJhbGFuY2UuYW1vdW50KSwgMCkpO1xyXG5cclxuICAgICAgICBpZiAoIXRvdGFsX2J5X2Fzc2V0LnNpemUpIHJldHVybiA8ZGl2Pk5vbmU8L2Rpdj47XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dG90YWxfYnlfYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAubWFwKCh0b3RhbCwgYXNzZXRfaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Fzc2V0X2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b0FycmF5KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJhbGFuY2VDbGFpbUFzc2V0VG90YWxzID0gY29ubmVjdChCYWxhbmNlQ2xhaW1Bc3NldFRvdGFscywge1xyXG4gICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIFtCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZUNsYWltQXNzZXRUb3RhbHM7XHJcbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgQmFzZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFzZVN0b3JlXCI7XHJcblxyXG5jbGFzcyBJbXBvcnRLZXlzU3RvcmUgZXh0ZW5kcyBCYXNlU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0KFwiaW1wb3J0aW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpbXBvcnRpbmc6IGZhbHNlfTtcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRpbmcoaW1wb3J0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1wb3J0aW5nfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgSW1wb3J0S2V5c1N0b3JlV3JhcHBlZCA9IGFsdC5jcmVhdGVTdG9yZShcclxuICAgIEltcG9ydEtleXNTdG9yZSxcclxuICAgIFwiSW1wb3J0S2V5c1N0b3JlXCJcclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0S2V5c1N0b3JlV3JhcHBlZDtcclxuIiwiaW1wb3J0IHtoYXNoLCBrZXl9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxudmFyIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgPSB1bmRlZmluZWQ7XHJcbnRyeSB7XHJcbiAgICB2YXIgdXJsID0gcmVxdWlyZShcImZpbGUtbG9hZGVyP25hbWU9YnRzX2dlbmVzaXNrZXlzX2Jsb29tX1tzaGExOmhhc2g6aGV4OjddLmRhdCFhc3NldHMvYnRzX2dlbmVzaXNrZXlzX2Jsb29tLmRhdFwiKTtcclxuICAgIGlmICh1cmwuaW5kZXhPZihcIjNjZWU0NDFcIikgPT09IC0xKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBoYXNoOiBidHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIpO1xyXG4gICAgYnRzX2dlbmVzaXNrZXlzX2Jsb29tX3VybCA9IHVybDtcclxufSBjYXRjaCAoZSkge1xyXG4gICAgLy8gd2VicGFjayBkZXBsb3ltZW50IGV4Y2VwdGlvbiAobm90IHJ1biB0aW1lKVxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgXCJXQVJOOiBXaWxsIGJlIHVuYWJsZSB0byBmaWx0ZXIgQlRTIDEuMCB3YWxsZXQgaW1wb3J0cywgZGlkIG5vdCBmaW5kIGFzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIsXHJcbiAgICAgICAgZVxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAgICBUaGlzIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gYSBCVFMgMS4wIGV4cG9ydCBmaWxlIHRha2VuIG9uIHRoZVxyXG4gICAgZGlzY29udGludWVkIGNoYWluLiBBbnkgcHVibGljIGtleSBzdHJpbmcgb3IgYWRkcmVzcyAoYWxsIDUgZm9ybWF0cykgY2FycmllZFxyXG4gICAgb3ZlciB0byB0aGUgQlRTIDIuMCBnZW5lc2lzIGJsb2NrIHdpbGwgYmUgaW4gdGhpcyBmaWx0ZXIuXHJcblxyXG4gICAgVGhlaXIgbWF5IGJlIHNvbWUgZmFsc2UgcG9zaXRpdmVzIGJ1dCBubyBmYWxzZSBuZWdhdGl2ZXMuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVzaXNGaWx0ZXIge1xyXG4gICAgLyoqIG9yIGNhbGwgdGhpcy5pbml0ICovXHJcbiAgICBjb25zdHJ1Y3RvcihibG9vbV9idWZmZXIpIHtcclxuICAgICAgICBpZiAoIWJsb29tX2J1ZmZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYmxvb21fYnVmZmVyID0gYmxvb21fYnVmZmVyO1xyXG4gICAgICAgIHRoaXMuYml0c19pbl9maWx0ZXIgPSBibG9vbV9idWZmZXIubGVuZ3RoICogODsgLy8gODM4ODYwOCAodGVzdCBkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBXYXMgYSBibG9vbSBmaWxlIGRlcGxveWVkPyAgVGhpcyBkb2VzIG5vdCB0cnkgdG8gbG9hZCBpdCBmcm9tIHRoZSBzZXJ2ZXIuICovXHJcbiAgICBpc0F2YWlsYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gYnRzX2dlbmVzaXNrZXlzX2Jsb29tX3VybCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZG9uZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmJsb29tX2J1ZmZlcikge1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQXZhaWxhYmxlKCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVzaXMgYmxvb20gZmlsZSB3YXMgbm90IGRlcGxveWVkXCIpO1xyXG5cclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgLy8gZmlyZWZveCA0MCBkaWQgbm90IGFsbG93IHRoZSBibG9iIHVybCBidXQgZmYgNDEuMC4yIGRpZFxyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcclxuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50cyA9IG5ldyBCdWZmZXIoZXZ0LnRhcmdldC5yZXN1bHQsIFwiYmluYXJ5XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRzLmxlbmd0aCAhPT0gMTA0ODU3NilcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBsZW5ndGhcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpdHNfaW5fZmlsdGVyID0gY29udGVudHMubGVuZ3RoICogODsgLy8gODM4ODYwOCAodGVzdCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9vbV9idWZmZXIgPSBjb250ZW50cztcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ4aHIub25lcnJvclwiLCBlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5HZW5lc2lzKHB1YmtleV9vcl9hZGRyZXNzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJsb29tX2J1ZmZlcikgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbCBpbml0KCkgZmlyc3RcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaGFzaGVzID0gMDsgaGFzaGVzIDwgMzsgaGFzaGVzKyspIHtcclxuICAgICAgICAgICAgdmFyIGhleCA9IGhhc2guc2hhMjU2KGhhc2hlcyArIFwiOlwiICsgcHVia2V5X29yX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICB2YXIgYml0X2FkZHJlc3MgPVxyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoaGV4LnNsaWNlKC0zKS50b1N0cmluZyhcImhleFwiKSwgMTYpICVcclxuICAgICAgICAgICAgICAgIHRoaXMuYml0c19pbl9maWx0ZXI7IC8vIDMwOTA1NjRcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJpdF9hZGRyZXNzXCIsIGJpdF9hZGRyZXNzLnRvU3RyaW5nKDE2KSlcclxuICAgICAgICAgICAgdmFyIGJ5dGVfYWRkcmVzcyA9IGJpdF9hZGRyZXNzID4+IDM7IC8vIDM4NjMyMFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiYnl0ZV9hZGRyZXNzXCIsIGJ5dGVfYWRkcmVzcy50b1N0cmluZygxNikpXHJcbiAgICAgICAgICAgIHZhciBtYXNrID0gMSA8PCAoYml0X2FkZHJlc3MgJiA3KTsgLy8gMTZcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIm1hc2tcIiwgbWFzay50b1N0cmluZygxNikpXHJcbiAgICAgICAgICAgIHZhciBieXRlID0gdGhpcy5ibG9vbV9idWZmZXJbYnl0ZV9hZGRyZXNzXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJ5dGVcIiwgYnl0ZS50b1N0cmluZygxNikpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJieXRlICYgbWFza1wiLCBieXRlICYgbWFzaywgKGJ5dGUgJiBtYXNrKSA9PT0gMCwgJ1xcbicpXHJcbiAgICAgICAgICAgIGlmICgoYnl0ZSAmIG1hc2spID09PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihhY2NvdW50X2tleXMsIHN0YXR1cykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0F2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FSTjogTWlzc2luZyBibG9vbSBmaWx0ZXIgZm9yIEJUUyAwLjkueCB3YWxsZXRzXCIpO1xyXG4gICAgICAgICAgICBzdGF0dXMoe2Vycm9yOiBcIm1pc3NpbmdfYmxvb21cIn0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbml0YWxpemluZyA9IHRydWU7XHJcbiAgICAgICAgc3RhdHVzKHtpbml0YWxpemluZ30pO1xyXG4gICAgICAgIHRoaXMuaW5pdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpbml0YWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzKHtpbml0YWxpemluZ30pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1bm5pbmdfY291bnRfcHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBhY2NvdW50X2tleXMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZF9jb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IGFjY291bnRfa2V5c1thXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgayA+PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrLS1cclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ICUgcnVubmluZ19jb3VudF9wcm9ncmVzcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19jb3VudF9wcm9ncmVzcyA9IDQ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXlzLnB1YmxpY19rZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1bi1yZWxlYXNlZCBmb3JtYXQsIGp1c3QgZm9yIHRlc3RpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7ZXJyb3I6IFwibWlzc2luZ19wdWJsaWNfa2V5c1wifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzLnB1YmxpY19rZXlzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoL15HUEgvLnRlc3QoY3VycmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50S2V5ID0gXCJCVFNcIiArIGN1cnJlbnRLZXkuc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoY3VycmVudEtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0ga2V5LmFkZHJlc3NlcyhjdXJyZW50S2V5LCBcIkJUU1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHlfZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhZGRyZXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmluR2VuZXNpcyhhZGRyZXNzZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkeV9mb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHlfZm91bmQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUga2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUga2V5cy5wdWJsaWNfa2V5c1trXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZF9jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0ga2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPj0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgay0tXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2tdKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlzLnB1c2goa2V5cy5wdWJsaWNfa2V5c1trXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IGVuY3J5cHRlZF9wcml2YXRlX2tleXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGNvdW50IC0gcmVtb3ZlZF9jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1YmxpY19rZXlzID0gcHVibGljX2tleXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMoe3N1Y2Nlc3M6IHRydWV9KTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbml0YWxpemluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzKHtpbml0YWxpemluZ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYnRzX2dlbmVzaXNrZXlzX2Jsb29tXzNjZWU0NDEuZGF0XCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBckJBO0FBMkJBO0FBNUJBO0FBbEJBO0FBREE7QUFEQTtBQXNEQTs7OztBQTFEQTtBQUNBO0FBMkRBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBbEJBO0FBc0JBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBVEE7QUEzQkE7QUE2Q0E7Ozs7QUFqREE7QUFDQTtBQWtEQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQURBO0FBU0E7QUFiQTtBQWVBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcENBO0FBeUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUE3SEE7QUFDQTtBQStIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFEQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUZBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekNBO0FBREE7QUFGQTtBQWZBO0FBREE7QUFvRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBbEhBO0FBQ0E7QUFvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBTUE7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFsQkE7QUF5QkE7QUFBQTtBQUNBO0FBQ0E7QUEzRUE7QUFDQTtBQTZFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUExQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTs7OztBQWZBO0FBQ0E7QUFnQkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFrQkE7Ozs7QUF2QkE7QUFDQTtBQXdCQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQVpBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU5BO0FBY0E7QUF6QkE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFDQTtBQWxDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7OztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7OztBQW5DQTtBQUFBO0FBc0NBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQW5GQTtBQUNBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBRkE7QUFKQTtBQWtCQTs7OztBQXZEQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUF1REE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQXZFQTtBQUFBO0FBd0VBO0FBMUVBO0FBNEVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQThDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFVQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFyREE7QUFBQTtBQUNBO0FBdURBO0FBeERBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF5REE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQXpEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeUdBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBb0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFMQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUVBO0FBREE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBSEE7QUFhQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBS0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFGQTtBQWlCQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQVRBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWFBO0FBZEE7QUFKQTtBQXVCQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBbEJBO0FBcUJBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUF0QkE7QUF3QkE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQXpCQTtBQWlDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUxBO0FBT0E7QUFQQTtBQVNBO0FBVkE7QUFuRUE7QUF2QkE7QUF5R0E7QUFFQTtBQTVHQTtBQURBO0FBa0hBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBREE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBREE7QUFTQTtBQWpDQTtBQTFLQTtBQWdOQTs7OztBQTc0QkE7QUFDQTtBQURBO0FBU0E7QUFEQTtBQUNBO0FBQ0E7QUFzNEJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBO0FBQ0E7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBREE7QUFGQTtBQWNBOzs7O0FBOUJBO0FBQ0E7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFiQTtBQUNBO0FBZUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUEzSkE7Ozs7Ozs7O0FDdkJBOzs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==