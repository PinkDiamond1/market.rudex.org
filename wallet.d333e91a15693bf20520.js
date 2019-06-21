(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 2816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletOptions", function() { return WalletOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActiveWallet", function() { return ChangeActiveWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDelete", function() { return WalletDelete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(760);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var actions_BackupActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2338);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1813);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ExistingAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2817);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2825);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2818);
/* harmony import */ var _WalletChangePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2832);
/* harmony import */ var _WalletCreate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2371);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2369);
/* harmony import */ var _BackupBrainkey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2833);
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

/***/ 2832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(581);
/* harmony import */ var _PasswordConfirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2373);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(719);
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

/***/ 2833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1970);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(581);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(407);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmQzMzNlOTFhMTU2OTNiZjIwNTIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9XYWxsZXRNYW5hZ2VyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L1dhbGxldENoYW5nZVBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhY2t1cEJyYWlua2V5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgV2FsbGV0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBCYWNrdXBBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JhY2t1cEFjdGlvbnNcIjtcclxuaW1wb3J0IFdhbGxldE1hbmFnZXJTdG9yZSBmcm9tIFwic3RvcmVzL1dhbGxldE1hbmFnZXJTdG9yZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtFeGlzdGluZ0FjY291bnRPcHRpb25zfSBmcm9tIFwiLi9FeGlzdGluZ0FjY291bnRcIjtcclxuaW1wb3J0IEltcG9ydEtleXMgZnJvbSBcIi4vSW1wb3J0S2V5c1wiO1xyXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuL0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xyXG5pbXBvcnQgV2FsbGV0Q2hhbmdlUGFzc3dvcmQgZnJvbSBcIi4vV2FsbGV0Q2hhbmdlUGFzc3dvcmRcIjtcclxuaW1wb3J0IHtXYWxsZXRDcmVhdGV9IGZyb20gXCIuL1dhbGxldENyZWF0ZVwiO1xyXG5pbXBvcnQge0JhY2t1cENyZWF0ZSwgQmFja3VwUmVzdG9yZX0gZnJvbSBcIi4vQmFja3VwXCI7XHJcbmltcG9ydCBCYWNrdXBCcmFpbmtleSBmcm9tIFwiLi9CYWNrdXBCcmFpbmtleVwiO1xyXG5cclxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbV2FsbGV0TWFuYWdlclN0b3JlXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4gV2FsbGV0TWFuYWdlclN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBXYWxsZXRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jcmVhdGVfd2FsbGV0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jcmVhdGVfYmFja3VwXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2JhY2t1cC9yZXN0b3JlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQucmVzdG9yZV9iYWNrdXBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvYmFja3VwL2JyYWlua2V5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuYmFja3VwX2JyYWlua2V5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2RlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvY2hhbmdlLXBhc3N3b3JkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY2hhbmdlX3Bhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2ltcG9ydC1rZXlzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuaW1wb3J0X2tleXNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jb25zb2xlXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiNDByZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuZ2V0VGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2NoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hhbmdlQWN0aXZlV2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2NoYW5nZS1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17V2FsbGV0Q2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvaW1wb3J0LWtleXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ltcG9ydEtleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYnJhaW5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXRDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvZGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXREZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFja3VwL3Jlc3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhY2t1cFJlc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFja3VwL2NyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwQ3JlYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2JhY2t1cC9icmFpbmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwQnJhaW5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFsYW5jZS1jbGFpbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhbGFuY2VDbGFpbUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuV2FsbGV0TWFuYWdlciA9IGNvbm5lY3QoXHJcbiAgICBXYWxsZXRNYW5hZ2VyLFxyXG4gICAgY29ubmVjdE9iamVjdFxyXG4pO1xyXG5cclxuY2xhc3MgV2FsbGV0T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGhhc193YWxsZXQgPSAhIXRoaXMucHJvcHMuY3VycmVudF93YWxsZXQ7XHJcbiAgICAgICAgbGV0IGhhc193YWxsZXRzID0gdGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDE7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldFxyXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMuY3VycmVudF93YWxsZXQudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWN0aXZlX3dhbGxldFwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Y3VycmVudF93YWxsZXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc193YWxsZXRzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuaW1wb3J0X2tleXNfdG9vbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkR1bW15PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9pbXBvcnQta2V5c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9rZXlzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIER1bW15XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhbGFuY2UtY2xhaW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYmFsYW5jZV9jbGFpbV9sb29rdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEJhbGFuY2VDbGFpbUJ5QXNzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1zXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWxhbmNlQ2xhaW1CeUFzc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWNrdXAvY3JlYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNyZWF0ZV9iYWNrdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvYmFja3VwL2JyYWlua2V5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhY2t1cF9icmFpbmtleVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWNrdXAvcmVzdG9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQucmVzdG9yZV9iYWNrdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gPGJyIC8+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY3JlYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5uZXdfd2FsbGV0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY2hhbmdlLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNoYW5nZV9wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5XYWxsZXRPcHRpb25zID0gY29ubmVjdChcclxuICAgIFdhbGxldE9wdGlvbnMsXHJcbiAgICBjb25uZWN0T2JqZWN0XHJcbik7XHJcblxyXG5jbGFzcyBDaGFuZ2VBY3RpdmVXYWxsZXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50X3dhbGxldCA9IHRoaXMucHJvcHMuY3VycmVudF93YWxsZXQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF93YWxsZXR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XHJcbiAgICAgICAgaWYgKG5wLmN1cnJlbnRfd2FsbGV0ICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRfd2FsbGV0OiBucC5jdXJyZW50X3dhbGxldH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gV2FsbGV0TWFuYWdlclN0b3JlLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gW107XHJcbiAgICAgICAgc3RhdGUud2FsbGV0X25hbWVzLmZvckVhY2god2FsbGV0X25hbWUgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17d2FsbGV0X25hbWV9IHZhbHVlPXt3YWxsZXRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3dhbGxldF9uYW1lLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlzX2RpcnR5ID0gdGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWN0aXZlX3dhbGxldFwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS53YWxsZXRfbmFtZXMuY291bnQoKSA8PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2NyZWF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5ld193YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIHtpc19kaXJ0eSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbmZpcm0uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuY3VycmVudF93YWxsZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5zZXRXYWxsZXQodGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCk7XHJcbiAgICAgICAgQmFja3VwQWN0aW9ucy5yZXNldCgpO1xyXG4gICAgICAgIC8vIGlmICh3aW5kb3cuZWxlY3Ryb24pIHtcclxuICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICAgIC8vICAgICB3aW5kb3cucmVtb3RlLmdldEN1cnJlbnRXaW5kb3coKS5yZWxvYWQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRfd2FsbGV0fSk7XHJcbiAgICB9XHJcbn1cclxuQ2hhbmdlQWN0aXZlV2FsbGV0ID0gY29ubmVjdChcclxuICAgIENoYW5nZUFjdGl2ZVdhbGxldCxcclxuICAgIGNvbm5lY3RPYmplY3RcclxuKTtcclxuXHJcbmNsYXNzIFdhbGxldERlbGV0ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkX3dhbGxldDogbnVsbCxcclxuICAgICAgICAgICAgY29uZmlybTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb25maXJtOiAwLFxyXG4gICAgICAgICAgICBzZWxlY3RlZF93YWxsZXQ6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29uZmlybSA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZGVsZXRlX2NvbmZpcm1fbGluZTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5kZWxldGVfY29uZmlybV9saW5lM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbmZpcm0yLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV9jb25maXJtX2xpbmU0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuY3VycmVudF93YWxsZXRcclxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSAoXHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLndhbGxldF9uYW1lcy5zaXplID4gMX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLndhbGxldF9uYW1lcy5zaXplID4gMSkge1xyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlciA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD57cGxhY2Vob2xkZXJ9PC9vcHRpb24+O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgLy9XaGVuIGRpc2FibGVkIGFuZCBsaXN0X3NpemUgd2FzIDEsIGNocm9tZSB3YXMgc2tpcHBpbmcgdGhlXHJcbiAgICAgICAgLy8gICAgIC8vcGxhY2Vob2xkZXIgYW5kIHNlbGVjdGluZyB0aGUgMXN0IGl0ZW0gYXV0b21hdGljYWxseSAobm90IHNob3duKVxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlciA9IDxvcHRpb24gdmFsdWU9XCJcIj57cGxhY2Vob2xkZXJ9PC9vcHRpb24+O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IFtwbGFjZWhvbGRlcl07XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT1cInNlbGVjdF9vcHRpb25cIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNldHRpbmdzLmRlbGV0ZV9zZWxlY3RcIil9JmhlbGxpcDtcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnByb3BzLndhbGxldF9uYW1lcy5mb3JFYWNoKHdhbGxldF9uYW1lID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3dhbGxldF9uYW1lfSB2YWx1ZT17d2FsbGV0X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt3YWxsZXRfbmFtZS50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBpc19kaXJ0eSA9ICEhdGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2stbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5kZWxldGVfd2FsbGV0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldCB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjAgYXV0b1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIG91dGxpbmVcIiwge2Rpc2FibGVkOiAhaXNfZGlydHl9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ29uZmlybS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3YWxsZXQuZGVsZXRlX3dhbGxldF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmlybTogMX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybTIoKSB7XHJcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5kZWxldGVXYWxsZXQodGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXQpO1xyXG4gICAgICAgIHRoaXMuX29uQ2FuY2VsKCk7XHJcbiAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuYmFjaygpXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRfd2FsbGV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkX3dhbGxldH0pO1xyXG4gICAgfVxyXG59XHJcbldhbGxldERlbGV0ZSA9IGNvbm5lY3QoXHJcbiAgICBXYWxsZXREZWxldGUsXHJcbiAgICBjb25uZWN0T2JqZWN0XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRNYW5hZ2VyO1xyXG5leHBvcnQge1dhbGxldE9wdGlvbnMsIENoYW5nZUFjdGl2ZVdhbGxldCwgV2FsbGV0RGVsZXRlfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBub3RpZnkgZnJvbSBcImFjdGlvbnMvTm90aWZpY2F0aW9uQWN0aW9uc1wiO1xyXG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuaW1wb3J0IFBhc3N3b3JkQ29uZmlybSBmcm9tIFwiLi9QYXNzd29yZENvbmZpcm1cIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsZXRDaGFuZ2VQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7c3VjY2VzczogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjZXB0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHtvbGRfcGFzc3dvcmQsIG5ld19wYXNzd29yZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFdhbGxldERiLmNoYW5nZVBhc3N3b3JkKG9sZF9wYXNzd29yZCwgbmV3X3Bhc3N3b3JkLCB0cnVlIC8qdW5sb2NrKi8pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zdWNjZXNzKFwiUGFzc3dvcmQgY2hhbmdlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Y2Nlc3M6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFByb2dyYW1tZXIgb3IgZGF0YWJhc2UgZXJyb3IgKCB2YWxpZGF0aW9uIG1pc3NlZCBzb21ldGhpbmc/IClcclxuICAgICAgICAgICAgICAgIC8vIC4uIHRyYW5zbGF0aW9uIG1heSBiZSB1bm5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuZXJyb3IoXCJVbmFibGUgdG8gY2hhbmdlIHBhc3N3b3JkOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PbGRQYXNzd29yZChvbGRfcGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvbGRfcGFzc3dvcmR9KTtcclxuICAgIH1cclxuICAgIG9uTmV3UGFzc3dvcmQobmV3X3Bhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmV3X3Bhc3N3b3JkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBvbGRfcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLnB3ZC5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHJlYWR5ID0gISF0aGlzLnN0YXRlLm5ld19wYXNzd29yZDtcclxuICAgICAgICBsZXQge3N1Y2Nlc3N9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJwXCIgY29udGVudD1cIndhbGxldC5jaGFuZ2Vfc3VjY2Vzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJwXCIgY29udGVudD1cIndhbGxldC5jaGFuZ2VfYmFja3VwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvYmFja3VwL2NyZWF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX2JhY2t1cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8V2FsbGV0UGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJwd2RcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uVmFsaWQ9e3RoaXMub25PbGRQYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWQ9e3RoaXMub25OZXdQYXNzd29yZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBvdXRsaW5lXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXJlYWR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjY2VwdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWNjZXB0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2FuY2VsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Bhc3N3b3JkQ29uZmlybT5cclxuICAgICAgICAgICAgICAgIDwvV2FsbGV0UGFzc3dvcmQ+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBXYWxsZXRQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIG9uVmFsaWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZlcmlmaWVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBhc3N3b3JkKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHtzdWNjZXNzfSA9IFdhbGxldERiLnZhbGlkYXRlUGFzc3dvcmQodGhpcy5zdGF0ZS5wYXNzd29yZCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmVyaWZpZWQ6IHRydWV9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblZhbGlkKHRoaXMuc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICAgIH0gZWxzZSBub3RpZnkuZXJyb3IoXCJJbnZhbGlkIFBhc3N3b3JkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcclxuICAgICAgICBzdGF0ZVtldmVudC50YXJnZXQuaWRdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJpZmllZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uUGFzc3dvcmQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZXhpc3RpbmdfcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGxldC5jdXJyZW50X3Bhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb3JtQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsIHx8IDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5yZXNldFwiIC8+O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCIgb25DbGljaz17dGhpcy5vblJlc2V0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2V0KCkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Zvcm1hdHRlZERhdGV9IGZyb20gXCJyZWFjdC1pbnRsXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IFdhbGxldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0QWN0aW9uc1wiO1xyXG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xyXG5pbXBvcnQge2hhc2h9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwQnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICAgICAgYnJhaW5rZXk6IG51bGwsXHJcbiAgICAgICAgICAgIGludmFsaWRfcGFzc3dvcmQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQ7XHJcbiAgICAgICAgdmFyIGJyYWlua2V5X2JhY2t1cF9kYXRlID0gV2FsbGV0RGIuZ2V0V2FsbGV0KCkuYnJhaW5rZXlfYmFja3VwX2RhdGU7XHJcblxyXG4gICAgICAgIHZhciBicmFpbmtleV9iYWNrdXBfdGltZSA9IGJyYWlua2V5X2JhY2t1cF9kYXRlID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X2JhY2tlZF91cFwiIC8+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWREYXRlIHZhbHVlPXticmFpbmtleV9iYWNrdXBfZGF0ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjb2xvci1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfbm90X2JhY2tlZF91cFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyaWZpZWQpIHtcclxuICAgICAgICAgICAgdmFyIHNoYTEgPSBoYXNoXHJcbiAgICAgICAgICAgICAgICAuc2hhMSh0aGlzLnN0YXRlLmJyYWlua2V5KVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKFwiaGV4XCIpXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDAsIDQpO1xyXG4gICAgICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGhpcy5zdGF0ZS5icmFpbmtleX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYTEgaGFzaCBvZiB0aGUgYnJhaW5rZXk6IHtzaGExfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmFpbmtleV9iYWNrdXBfdGltZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb250ZW50ICYmIHRoaXMuc3RhdGUuYnJhaW5rZXkpIHtcclxuICAgICAgICAgICAgdmFyIHNoYTEgPSBoYXNoXHJcbiAgICAgICAgICAgICAgICAuc2hhMSh0aGlzLnN0YXRlLmJyYWlua2V5KVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKFwiaGV4XCIpXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDAsIDQpO1xyXG4gICAgICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3RoaXMuc3RhdGUuYnJhaW5rZXl9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhMSBoYXNoIG9mIHlvdXIgYnJhaW5rZXk6IHtzaGExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDAgMjBweCAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3cxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV93MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfdzNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbXBsZXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudmVyaWZ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkICYmIHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5lbnRlcl9wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUGFzc3dvcmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbnZhbGlkX3Bhc3N3b3JkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+SW52YWxpZCBwYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5wd2Q0YnJhaW5rZXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmFpbmtleV9iYWNrdXBfdGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnNob3dfYnJhaW5rZXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj57Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBsZXRlKGJybmtleSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZlcmlmaWVkOiB0cnVlfSk7XHJcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5zZXRCcmFpbmtleUJhY2t1cERhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldChlKSB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhY2soZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgd2FzX2xvY2tlZCA9IFdhbGxldERiLmlzTG9ja2VkKCk7XHJcbiAgICAgICAgbGV0IHtzdWNjZXNzfSA9IFdhbGxldERiLnZhbGlkYXRlUGFzc3dvcmQodGhpcy5zdGF0ZS5wYXNzd29yZCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdmFyIGJyYWlua2V5ID0gV2FsbGV0RGIuZ2V0QnJhaW5LZXkoKTtcclxuICAgICAgICAgICAgaWYgKHdhc19sb2NrZWQpIFdhbGxldERiLm9uTG9jaygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHticmFpbmtleX0pO1xyXG4gICAgICAgIH0gZWxzZSB0aGlzLnNldFN0YXRlKHtpbnZhbGlkX3Bhc3N3b3JkOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYXNzd29yZChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUsIGludmFsaWRfcGFzc3dvcmQ6IGZhbHNlfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQWlDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFuREE7QUFEQTtBQVBBO0FBREE7QUFEQTtBQXdFQTs7OztBQS9HQTtBQUNBO0FBZ0hBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVBBO0FBREE7QUFEQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBUEE7QUFEQTtBQURBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFSQTtBQURBO0FBREE7QUF4Q0E7QUFtRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQTdHQTtBQXFIQTs7OztBQTdIQTtBQUNBO0FBOEhBO0FBQ0E7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFSQTtBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFiQTtBQURBO0FBTEE7QUErQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQXZDQTtBQW1EQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWxHQTtBQUNBO0FBbUdBO0FBQ0E7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBbEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQURBO0FBREE7QUFKQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBS0E7QUFOQTtBQUpBO0FBbEJBO0FBaUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBaElBO0FBQ0E7QUFpSUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWRBO0FBSkE7QUFEQTtBQTZCQTs7OztBQXRGQTtBQUNBO0FBREE7QUFDQTtBQXdGQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQXFCQTtBQUNBOzs7O0FBOURBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQStEQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBN0JBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXZCQTtBQUpBO0FBaUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBL0tBO0FBQ0E7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9