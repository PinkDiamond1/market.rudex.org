(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 2738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletOptions", function() { return WalletOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActiveWallet", function() { return ChangeActiveWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDelete", function() { return WalletDelete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(741);
/* harmony import */ var actions_BackupActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1387);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(874);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ExistingAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2739);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2747);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2740);
/* harmony import */ var _WalletChangePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2754);
/* harmony import */ var _WalletCreate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2334);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2332);
/* harmony import */ var _BackupBrainkey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2755);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var connectObject = {
    listenTo: function listenTo() {
        return [stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        return stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState();
    }
};

var WalletManager = function (_Component) {
    _inherits(WalletManager, _Component);

    function WalletManager() {
        _classCallCheck(this, WalletManager);

        return _possibleConstructorReturn(this, (WalletManager.__proto__ || Object.getPrototypeOf(WalletManager)).apply(this, arguments));
    }

    _createClass(WalletManager, [{
        key: "getTitle",
        value: function getTitle() {
            switch (this.props.location.pathname) {
                case "/wallet/create":
                    return "wallet.create_wallet";
                    break;

                case "/wallet/backup/create":
                    return "wallet.create_backup";
                    break;

                case "/wallet/backup/restore":
                    return "wallet.restore_backup";
                    break;

                case "/wallet/backup/brainkey":
                    return "wallet.backup_brainkey";
                    break;

                case "/wallet/delete":
                    return "wallet.delete_wallet";
                    break;

                case "/wallet/change-password":
                    return "wallet.change_password";
                    break;

                case "/wallet/import-keys":
                    return "wallet.import_keys";
                    break;

                default:
                    return "wallet.console";
                    break;
            }
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-container", style: { maxWidth: "40rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "page-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                component: "h3",
                                content: this.getTitle()
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet",
                                    component: WalletOptions
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/change",
                                    component: ChangeActiveWallet
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/change-password",
                                    component: _WalletChangePassword__WEBPACK_IMPORTED_MODULE_12__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/import-keys",
                                    component: _ImportKeys__WEBPACK_IMPORTED_MODULE_10__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/brainkey",
                                    component: _ExistingAccount__WEBPACK_IMPORTED_MODULE_9__["ExistingAccountOptions"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/create",
                                    component: _WalletCreate__WEBPACK_IMPORTED_MODULE_13__["WalletCreate"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/delete",
                                    component: WalletDelete
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/backup/restore",
                                    component: _Backup__WEBPACK_IMPORTED_MODULE_14__["BackupRestore"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/backup/create",
                                    component: _Backup__WEBPACK_IMPORTED_MODULE_14__["BackupCreate"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/backup/brainkey",
                                    component: _BackupBrainkey__WEBPACK_IMPORTED_MODULE_15__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/balance-claims",
                                    component: _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__["default"]
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WalletManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletManager = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(WalletManager, connectObject);

var WalletOptions = function (_Component2) {
    _inherits(WalletOptions, _Component2);

    function WalletOptions() {
        _classCallCheck(this, WalletOptions);

        return _possibleConstructorReturn(this, (WalletOptions.__proto__ || Object.getPrototypeOf(WalletOptions)).apply(this, arguments));
    }

    _createClass(WalletOptions, [{
        key: "render",
        value: function render() {
            var has_wallet = !!this.props.current_wallet;
            var has_wallets = this.props.wallet_names.size > 1;
            var current_wallet = this.props.current_wallet ? this.props.current_wallet.toUpperCase() : "";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "card-content" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.active_wallet" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    current_wallet
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                has_wallets ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    { to: "/wallet/change" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "button outline success" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.change_wallet" })
                                    )
                                ) : null
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "card-content" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.import_keys_tool" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { style: { visibility: "hidden" } },
                                    "Dummy"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    { to: "/wallet/import-keys" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "button outline success" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.import_keys" })
                                    )
                                ) : null
                            )
                        )
                    ),
                    has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "card-content" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.balance_claims" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { style: { visibility: "hidden" } },
                                    "Dummy"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    { to: "/wallet/balance-claims" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "button outline success" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.balance_claim_lookup" })
                                    )
                                )
                            )
                        )
                    ) : null
                ),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/backup/create" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.create_backup" })
                    )
                ) : null,
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/backup/brainkey" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.backup_brainkey" })
                    )
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/backup/restore" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.restore_backup" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/create" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.new_wallet" })
                    )
                ),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/delete" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.delete_wallet" })
                    )
                ) : null,
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/change-password" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.change_password" })
                    )
                ) : null
            );
        }
    }]);

    return WalletOptions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletOptions = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(WalletOptions, connectObject);

var ChangeActiveWallet = function (_Component3) {
    _inherits(ChangeActiveWallet, _Component3);

    function ChangeActiveWallet() {
        _classCallCheck(this, ChangeActiveWallet);

        var _this3 = _possibleConstructorReturn(this, (ChangeActiveWallet.__proto__ || Object.getPrototypeOf(ChangeActiveWallet)).call(this));

        _this3.state = {};
        return _this3;
    }

    _createClass(ChangeActiveWallet, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var current_wallet = this.props.current_wallet;
            this.setState({ current_wallet: current_wallet });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.current_wallet !== this.state.current_wallet) {
                this.setState({ current_wallet: np.current_wallet });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var state = stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState();

            var options = [];
            state.wallet_names.forEach(function (wallet_name) {
                options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: wallet_name, value: wallet_name },
                    wallet_name.toLowerCase()
                ));
            });

            var is_dirty = this.state.current_wallet !== this.props.current_wallet;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.active_wallet" }),
                        ":"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { className: "with-dropdown", style: { borderBottom: 0 } },
                            state.wallet_names.count() <= 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        paddingLeft: 10,
                                        lineHeight: "36px",
                                        borderRadius: "3px"
                                    },
                                    className: "settings-input"
                                },
                                this.state.current_wallet
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "settings-select",
                                    value: this.state.current_wallet,
                                    onChange: this.onChange.bind(this)
                                },
                                options
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/create" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.new_wallet" })
                    )
                ),
                is_dirty ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "button outline",
                        onClick: this.onConfirm.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        content: "wallet.change",
                        name: this.state.current_wallet
                    })
                ) : null
            );
        }
    }, {
        key: "onConfirm",
        value: function onConfirm() {
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__["default"].setWallet(this.state.current_wallet);
            actions_BackupActions__WEBPACK_IMPORTED_MODULE_4__["default"].reset();
            // if (window.electron) {
            //     window.location.hash = "";
            //     window.remote.getCurrentWindow().reload();
            // }
            // else window.location.href = "/";
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var current_wallet = event.target.value;
            this.setState({ current_wallet: current_wallet });
        }
    }]);

    return ChangeActiveWallet;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ChangeActiveWallet = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ChangeActiveWallet, connectObject);

var WalletDelete = function (_Component4) {
    _inherits(WalletDelete, _Component4);

    function WalletDelete() {
        _classCallCheck(this, WalletDelete);

        var _this4 = _possibleConstructorReturn(this, (WalletDelete.__proto__ || Object.getPrototypeOf(WalletDelete)).call(this));

        _this4.state = {
            selected_wallet: null,
            confirm: 0
        };
        return _this4;
    }

    _createClass(WalletDelete, [{
        key: "_onCancel",
        value: function _onCancel() {
            this.setState({
                confirm: 0,
                selected_wallet: null
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.confirm === 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: 20 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.delete_confirm_line1" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        component: "p",
                        content: "wallet.delete_confirm_line3"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button outline",
                            onClick: this.onConfirm2.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "wallet.delete_confirm_line4",
                            name: this.state.selected_wallet
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button outline",
                            onClick: this._onCancel.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.cancel" })
                    )
                );
            }

            // this.props.current_wallet
            var placeholder = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
                key: "placeholder",
                value: "",
                disabled: this.props.wallet_names.size > 1
            });
            // if (this.props.wallet_names.size > 1) {
            //     placeholder = <option value="" disabled>{placeholder}</option>;
            // }
            // else {
            //     //When disabled and list_size was 1, chrome was skipping the
            //     //placeholder and selecting the 1st item automatically (not shown)
            //     placeholder = <option value="">{placeholder}</option>;
            // }
            var options = [placeholder];
            options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "option",
                { key: "select_option", value: "" },
                counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("settings.delete_select"),
                "\u2026"
            ));
            this.props.wallet_names.forEach(function (wallet_name) {
                options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: wallet_name, value: wallet_name },
                    wallet_name.toLowerCase()
                ));
            });

            var is_dirty = !!this.state.selected_wallet;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { paddingTop: 20 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.delete_wallet" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { className: "with-dropdown", style: { borderBottom: 0 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "settings-select",
                                    value: this.state.selected_wallet || "",
                                    style: { margin: "0 auto" },
                                    onChange: this.onChange.bind(this)
                                },
                                options
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("button outline", { disabled: !is_dirty }),
                        onClick: this.onConfirm.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        content: this.state.selected_wallet ? "wallet.delete_wallet_name" : "wallet.delete_wallet",
                        name: this.state.selected_wallet
                    })
                )
            );
        }
    }, {
        key: "onConfirm",
        value: function onConfirm() {
            this.setState({ confirm: 1 });
        }
    }, {
        key: "onConfirm2",
        value: function onConfirm2() {
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__["default"].deleteWallet(this.state.selected_wallet);
            this._onCancel();
            // window.history.back()
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var selected_wallet = event.target.value;
            this.setState({ selected_wallet: selected_wallet });
        }
    }]);

    return WalletDelete;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletDelete = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(WalletDelete, connectObject);

/* harmony default export */ __webpack_exports__["default"] = (WalletManager);


/***/ }),

/***/ 2754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(588);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _PasswordConfirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2336);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var WalletChangePassword = function (_Component) {
    _inherits(WalletChangePassword, _Component);

    function WalletChangePassword() {
        _classCallCheck(this, WalletChangePassword);

        var _this = _possibleConstructorReturn(this, (WalletChangePassword.__proto__ || Object.getPrototypeOf(WalletChangePassword)).call(this));

        _this.state = { success: false };
        return _this;
    }

    _createClass(WalletChangePassword, [{
        key: "onAccept",
        value: function onAccept(e) {
            var _this2 = this;

            e.preventDefault();
            var _state = this.state,
                old_password = _state.old_password,
                new_password = _state.new_password;

            stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].changePassword(old_password, new_password, true /*unlock*/).then(function () {
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].success("Password changed");
                _this2.setState({ success: true });
                // window.history.back();
            }).catch(function (error) {
                // Programmer or database error ( validation missed something? )
                // .. translation may be unnecessary
                console.error(error);
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error("Unable to change password: " + error);
            });
        }
    }, {
        key: "onOldPassword",
        value: function onOldPassword(old_password) {
            this.setState({ old_password: old_password });
        }
    }, {
        key: "onNewPassword",
        value: function onNewPassword(new_password) {
            this.setState({ new_password: new_password });
        }
    }, {
        key: "_onCancel",
        value: function _onCancel() {
            this.setState({
                old_password: ""
            });

            this.refs.pwd.cancel();
        }
    }, {
        key: "render",
        value: function render() {
            var ready = !!this.state.new_password;
            var success = this.state.success;


            if (success) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "p", content: "wallet.change_success" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "p", content: "wallet.change_backup" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "/wallet/backup/create" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.create_backup" })
                        )
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    WalletPassword,
                    {
                        ref: "pwd",
                        onValid: this.onOldPassword.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _PasswordConfirm__WEBPACK_IMPORTED_MODULE_6__["default"],
                        {
                            onSubmit: this.onAccept.bind(this),
                            newPassword: true,
                            onValid: this.onNewPassword.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("button outline", {
                                    disabled: !ready
                                }),
                                type: "submit",
                                onClick: this.onAccept.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.accept" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "button outline",
                                onClick: this._onCancel.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.cancel" })
                        )
                    )
                )
            );
        }
    }]);

    return WalletChangePassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WalletChangePassword);

var WalletPassword = function (_Component2) {
    _inherits(WalletPassword, _Component2);

    function WalletPassword() {
        _classCallCheck(this, WalletPassword);

        var _this3 = _possibleConstructorReturn(this, (WalletPassword.__proto__ || Object.getPrototypeOf(WalletPassword)).call(this));

        _this3.state = {
            password: "",
            verified: false
        };
        return _this3;
    }

    _createClass(WalletPassword, [{
        key: "cancel",
        value: function cancel() {
            this.setState({
                verified: false,
                password: ""
            });
        }
    }, {
        key: "onPassword",
        value: function onPassword(e) {
            e.preventDefault();

            var _WalletDb$validatePas = stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].validatePassword(this.state.password, true),
                success = _WalletDb$validatePas.success;

            if (success) {
                this.setState({ verified: true });
                this.props.onValid(this.state.password);
            } else actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error("Invalid Password");
        }
    }, {
        key: "formChange",
        value: function formChange(event) {
            var state = {};
            state[event.target.id] = event.target.value;
            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.verified) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content" },
                    this.props.children
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "form",
                    { onSubmit: this.onPassword.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.existing_password" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("wallet.current_pass"),
                            type: "password",
                            id: "current-password",
                            autoComplete: "current-password",
                            onChange: this.formChange.bind(this),
                            value: this.state.password
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button outline" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.submit" })
                    )
                );
            }
        }
    }]);

    return WalletPassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletPassword.propTypes = {
    onValid: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};

var Reset = function (_Component3) {
    _inherits(Reset, _Component3);

    function Reset() {
        _classCallCheck(this, Reset);

        return _possibleConstructorReturn(this, (Reset.__proto__ || Object.getPrototypeOf(Reset)).apply(this, arguments));
    }

    _createClass(Reset, [{
        key: "render",
        value: function render() {
            var label = this.props.label || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.reset" });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "button outline", onClick: this.onReset.bind(this) },
                label
            );
        }
    }, {
        key: "onReset",
        value: function onReset() {
            window.history.back();
        }
    }]);

    return Reset;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ 2755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1014);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(741);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(416);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var BackupBrainkey = function (_Component) {
    _inherits(BackupBrainkey, _Component);

    function BackupBrainkey() {
        _classCallCheck(this, BackupBrainkey);

        var _this = _possibleConstructorReturn(this, (BackupBrainkey.__proto__ || Object.getPrototypeOf(BackupBrainkey)).call(this));

        _this.state = _this._getInitialState();
        return _this;
    }

    _createClass(BackupBrainkey, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            return {
                password: null,
                brainkey: null,
                invalid_password: false
            };
        }
    }, {
        key: "render",
        value: function render() {
            var content;
            var brainkey_backup_date = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getWallet().brainkey_backup_date;

            var brainkey_backup_time = brainkey_backup_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_backed_up" }),
                ":",
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], { value: brainkey_backup_date })
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                className: "facolor-error",
                component: "p",
                content: "wallet.brainkey_not_backed_up"
            });

            if (this.state.verified) {
                var sha1 = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["hash"].sha1(this.state.brainkey).toString("hex").substring(0, 4);
                content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                this.state.brainkey
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "pre",
                        { className: "no-overflow" },
                        "sha1 hash of the brainkey: ",
                        sha1
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    brainkey_backup_time
                );
            }

            if (!content && this.state.brainkey) {
                var sha1 = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["hash"].sha1(this.state.brainkey).toString("hex").substring(0, 4);
                content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                this.state.brainkey
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { padding: "10px 0" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "pre",
                            { className: "no-overflow" },
                            "sha1 hash of your brainkey: ",
                            sha1
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { padding: "10px 0 20px 0" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_w1" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_w2" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_w3" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button success",
                            onClick: this.onComplete.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.verify" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button cancel",
                            onClick: this.reset.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.cancel" })
                    )
                );
            }

            if (!content) {
                var valid = this.state.password && this.state.password !== "";
                content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.enter_password" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            onSubmit: this.onSubmit.bind(this),
                            className: "name-form",
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "password",
                            id: "password",
                            onChange: this.onPassword.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            this.state.invalid_password ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "error" },
                                "Invalid password"
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.pwd4brainkey" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            brainkey_backup_time,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            { className: "button success" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.show_brainkey" })
                        )
                    )
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow" },
                    content
                )
            );
        }
    }, {
        key: "onComplete",
        value: function onComplete(brnkey) {
            this.setState({ verified: true });
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__["default"].setBrainkeyBackupDate();
        }
    }, {
        key: "reset",
        value: function reset(e) {
            if (e) {
                e.preventDefault();
            }
            this.setState(this._getInitialState());
        }
    }, {
        key: "onBack",
        value: function onBack(e) {
            e.preventDefault();
            window.history.back();
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            e.preventDefault();
            var was_locked = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].isLocked();

            var _WalletDb$validatePas = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].validatePassword(this.state.password, true),
                success = _WalletDb$validatePas.success;

            if (success) {
                var brainkey = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getBrainKey();
                if (was_locked) stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].onLock();
                this.setState({ brainkey: brainkey });
            } else this.setState({ invalid_password: true });
        }
    }, {
        key: "onPassword",
        value: function onPassword(event) {
            this.setState({ password: event.target.value, invalid_password: false });
        }
    }]);

    return BackupBrainkey;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BackupBrainkey);

/***/ })

}]);
//# sourceMappingURL=wallet.js.map