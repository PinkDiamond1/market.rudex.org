(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 2415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1218);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AssetImage = function (_React$Component) {
    _inherits(AssetImage, _React$Component);

    function AssetImage(props) {
        _classCallCheck(this, AssetImage);

        var _this = _possibleConstructorReturn(this, (AssetImage.__proto__ || Object.getPrototypeOf(AssetImage)).call(this, props));

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(AssetImage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "" + "asset-symbols/bts.png";else this.refs[imgName.toLowerCase()].remove();
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                //return imgName.length === 2 ? imgName[1] : imgName[0];
            }

            var imgName = getImageName(asset);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                ref: imgName.toLowerCase(),
                className: "column-hide-small",
                onError: this._onError.bind(this, imgName),
                style: { maxWidth: this.props.maxWidth, marginRight: 5 },
                src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
            });
        }
    }]);

    return AssetImage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetImage.propTypes = {
    replaceNoneToBts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
AssetImage.defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
};


AssetImage = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);

var AssetImageWrapper = function (_React$Component2) {
    _inherits(AssetImageWrapper, _React$Component2);

    function AssetImageWrapper() {
        _classCallCheck(this, AssetImageWrapper);

        return _possibleConstructorReturn(this, (AssetImageWrapper.__proto__ || Object.getPrototypeOf(AssetImageWrapper)).apply(this, arguments));
    }

    _createClass(AssetImageWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetImage, _extends({}, this.props, { asset: this.props.name }));
        }
    }]);

    return AssetImageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetImageWrapper);

/***/ }),

/***/ 2546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1262);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _DepositWithdraw_BlockTradesGateway__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2547);
/* harmony import */ var _DepositWithdraw_openledger_OpenLedgerFiatDepositWithdrawal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2551);
/* harmony import */ var _DepositWithdraw_openledger_OpenLedgerFiatTransactionHistory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2554);
/* harmony import */ var _DepositWithdraw_blocktrades_BlockTradesBridgeDepositRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2555);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1051);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(549);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(730);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(735);
/* harmony import */ var _DepositWithdraw_BitKapital__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2556);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2557);
/* harmony import */ var _DepositWithdraw_rudex_RuDexFiatDepositWithdrawal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2566);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1259);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1222);
/* harmony import */ var _DepositWithdraw_gdex_GdexGateway__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2567);
/* harmony import */ var _DepositWithdraw_winex_WinexGateway__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2707);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



























var AccountDepositWithdraw = function (_React$Component) {
    _inherits(AccountDepositWithdraw, _React$Component);

    function AccountDepositWithdraw(props) {
        _classCallCheck(this, AccountDepositWithdraw);

        var _this = _possibleConstructorReturn(this, (AccountDepositWithdraw.__proto__ || Object.getPrototypeOf(AccountDepositWithdraw)).call(this));

        _this.state = {
            olService: props.viewSettings.get("olService", "gateway"),
            rudexService: props.viewSettings.get("rudexService", "gateway"),
            btService: props.viewSettings.get("btService", "bridge"),
            metaService: props.viewSettings.get("metaService", "bridge"),
            activeService: props.viewSettings.get("activeService", 0),
            olNotice1Informed: false
        };
        return _this;
    }

    _createClass(AccountDepositWithdraw, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.account !== this.props.account || nextProps.servicesDown !== this.props.servicesDown || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.blockTradesBackedCoins, this.props.blockTradesBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.openLedgerBackedCoins, this.props.openLedgerBackedCoins) || nextState.olService !== this.state.olService || nextState.rudexService !== this.state.rudexService || nextState.btService !== this.state.btService || nextState.metaService !== this.state.metaService || nextState.activeService !== this.state.activeService || nextState.olNotice1Informed !== this.state.olNotice1Informed;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            common_account_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFinalFeeAsset(this.props.account, "transfer");
        }
    }, {
        key: "toggleOLService",
        value: function toggleOLService(service) {
            this.setState({
                olService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
                olService: service
            });
        }
    }, {
        key: "toggleRuDEXService",
        value: function toggleRuDEXService(service) {
            this.setState({
                rudexService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
                rudexService: service
            });
        }
    }, {
        key: "toggleBTService",
        value: function toggleBTService(service) {
            this.setState({
                btService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
                btService: service
            });
        }
    }, {
        key: "onolNotice1Informed",
        value: function onolNotice1Informed() {
            this.setState({
                olNotice1Informed: !this.state.olNotice1Informed
            });
        }
    }, {
        key: "toggleMetaService",
        value: function toggleMetaService(service) {
            this.setState({
                metaService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
                metaService: service
            });
        }
    }, {
        key: "onSetService",
        value: function onSetService(e) {
            //let index = this.state.services.indexOf(e.target.value);
            this.setState({
                activeService: parseInt(e.target.value)
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
                activeService: parseInt(e.target.value)
            });
        }
    }, {
        key: "renderServices",
        value: function renderServices(openLedgerGatewayCoins, rudexGatewayCoins) {
            //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
            var serList = [];
            var account = this.props.account;
            var _state = this.state,
                olService = _state.olService,
                btService = _state.btService,
                rudexService = _state.rudexService,
                olNotice1Informed = _state.olNotice1Informed;


            serList.push({
                name: "RuDEX (RUDEX.X)",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "service-selector",
                            style: { marginBottom: "2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "button-group segmented no-margin" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    onClick: this.toggleRuDEXService.bind(this, "gateway"),
                                    className: rudexService === "gateway" ? "is-active" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.gateway" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    onClick: this.toggleRuDEXService.bind(this, "fiat"),
                                    className: rudexService === "fiat" ? "is-active" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "a",
                                    content: "gateway.fiat"
                                })
                            )
                        )
                    ),
                    rudexService === "gateway" && rudexGatewayCoins.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_18__["default"], {
                        account: account,
                        coins: rudexGatewayCoins
                    }) : null,
                    rudexService === "fiat" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_rudex_RuDexFiatDepositWithdrawal__WEBPACK_IMPORTED_MODULE_19__["default"], { account: account })
                    ) : null
                )
            });

            serList.push({
                name: "Openledger (OPEN.X)",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "service-selector",
                            style: { marginBottom: "2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "button-group segmented no-margin" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    onClick: this.toggleOLService.bind(this, "gateway"),
                                    className: olService === "gateway" ? "is-active" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.gateway" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    onClick: this.toggleOLService.bind(this, "fiat"),
                                    className: olService === "fiat" ? "is-active" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "a",
                                    content: "gateway.fiat"
                                })
                            )
                        )
                    ),
                    olService === "gateway" && openLedgerGatewayCoins.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                style: {
                                    color: "darkred",
                                    marginBottom: "1em",
                                    display: "block"
                                },
                                component: "h5",
                                content: "gateway.rudex.openledger_notice1"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    href: "https://blog.openledger.info/2017/12/18/openledger-official-web-sites-get-updates-by-the-first",
                                    target: "_blank"
                                },
                                "https://blog.openledger.info/2017/12/18/openledger-official-web-sites-get-updates-by-the-first"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "checkbox",
                                    defaultChecked: this.state.olNotice1Informed,
                                    onChange: this.onolNotice1Informed.bind(this)
                                }),
                                " ",
                                "-",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.rudex.openledger_notice1_informed" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        olNotice1Informed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_BlockTradesGateway__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            account: account,
                            coins: openLedgerGatewayCoins,
                            provider: "openledger"
                        }) : null
                    ) : null,
                    olService === "fiat" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { paddingBottom: 15 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                component: "h5",
                                content: "gateway.fiat_text",
                                unsafe: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_openledger_OpenLedgerFiatDepositWithdrawal__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            rpc_url: api_apiConfig__WEBPACK_IMPORTED_MODULE_16__["settingsAPIs"].RPC_URL,
                            account: account,
                            issuer_account: "openledger-fiat"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_openledger_OpenLedgerFiatTransactionHistory__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            rpc_url: api_apiConfig__WEBPACK_IMPORTED_MODULE_16__["settingsAPIs"].RPC_URL,
                            account: account
                        })
                    ) : null
                )
            });

            serList.push({
                name: "BlockTrades",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "service-selector",
                                style: { marginBottom: "2rem" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "button-group segmented no-margin" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        onClick: this.toggleBTService.bind(this, "bridge"),
                                        className: btService === "bridge" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.bridge" })
                                    )
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_blocktrades_BlockTradesBridgeDepositRequest__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            gateway: "blocktrades",
                            issuer_account: "blocktrades",
                            account: account,
                            initial_deposit_input_coin_type: "btc",
                            initial_deposit_output_coin_type: "bts",
                            initial_deposit_estimated_input_amount: "1.0",
                            initial_withdraw_input_coin_type: "bts",
                            initial_withdraw_output_coin_type: "btc",
                            initial_withdraw_estimated_input_amount: "100000",
                            initial_conversion_input_coin_type: "bts",
                            initial_conversion_output_coin_type: "bitbtc",
                            initial_conversion_estimated_input_amount: "1000"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "content-block" })
                )
            });

            serList.push({
                name: "BitKapital",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_BitKapital__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    viewSettings: this.props.viewSettings,
                    account: account
                })
            });

            serList.push({
                name: "GDEX",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_gdex_GdexGateway__WEBPACK_IMPORTED_MODULE_22__["default"], { account: account, provider: "gdex" })
                )
            });

            serList.push({
                name: "Winex",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_winex_WinexGateway__WEBPACK_IMPORTED_MODULE_23__["default"], { account: account, provider: "Winex" })
                )
            });

            return serList;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                servicesDown = _props.servicesDown;
            var activeService = this.state.activeService;


            var openLedgerGatewayCoins = this.props.openLedgerBackedCoins.map(function (coin) {
                return coin;
            }).sort(function (a, b) {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

            var rudexGatewayCoins = this.props.rudexBackedCoins.map(function (coin) {
                return coin;
            }).sort(function (a, b) {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

            var services = this.renderServices(openLedgerGatewayCoins, rudexGatewayCoins);

            var options = services.map(function (services_obj, index) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: index, value: index },
                    services_obj.name
                );
            });

            var serviceNames = ["RUDEX", "Winex", "GDEX", "OPEN", "TRADE", "BITKAPITAL"];
            var currentServiceName = serviceNames[activeService];
            var currentServiceDown = servicesDown.get(currentServiceName);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: this.props.contained ? "grid-content" : "grid-container"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: this.props.contained ? "" : "grid-content",
                        style: { paddingTop: "2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.title", component: "h2" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block vertical medium-horizontal no-margin no-padding" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "medium-6 show-for-medium" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                path: "components/DepositWithdraw",
                                section: "deposit-short"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "medium-5 medium-offset-1" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                account: account.get("name"),
                                path: "components/DepositWithdraw",
                                section: "receive"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical medium-horizontal no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "medium-6 small-order-2 medium-order-1" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "label",
                                    className: "left-label",
                                    content: "gateway.service"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        onChange: this.onSetService.bind(this),
                                        className: "bts-select",
                                        value: activeService
                                    },
                                    options
                                ),
                                currentServiceDown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    style: {
                                        color: "red",
                                        marginBottom: "1em",
                                        display: "block"
                                    },
                                    content: "gateway.unavailable_" + currentServiceName
                                }) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "medium-5 medium-offset-1 small-order-1 medium-order-2",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "label",
                                    className: "left-label",
                                    content: "gateway.your_account"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_21__["default"], {
                                        size: { height: 40, width: 40 },
                                        account: account.get("name"),
                                        custom_image: null
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "text",
                                        value: account.get("name"),
                                        placeholder: null,
                                        disabled: true,
                                        onChange: function onChange() {},
                                        onKeyDown: function onKeyDown() {},
                                        tabIndex: 1
                                    })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-content no-padding",
                            style: { paddingTop: 15 }
                        },
                        currentServiceDown ? null : activeService && services[activeService] ? services[activeService].template : services[0].template
                    )
                )
            );
        }
    }]);

    return AccountDepositWithdraw;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountDepositWithdraw.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount.isRequired,
    contained: prop_types__WEBPACK_IMPORTED_MODULE_24___default.a.bool
};
AccountDepositWithdraw.defaultProps = {
    contained: false
};

AccountDepositWithdraw = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(AccountDepositWithdraw);

var DepositStoreWrapper = function (_React$Component2) {
    _inherits(DepositStoreWrapper, _React$Component2);

    function DepositStoreWrapper() {
        _classCallCheck(this, DepositStoreWrapper);

        return _possibleConstructorReturn(this, (DepositStoreWrapper.__proto__ || Object.getPrototypeOf(DepositStoreWrapper)).apply(this, arguments));
    }

    _createClass(DepositStoreWrapper, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__["updateGatewayBackers"])();
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountDepositWithdraw, this.props);
        }
    }]);

    return DepositStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(DepositStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_13__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_14__["default"], stores_GatewayStore__WEBPACK_IMPORTED_MODULE_20__["default"]];
    },
    getProps: function getProps() {
        return {
            account: stores_AccountStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().currentAccount,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().viewSettings,
            openLedgerBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().backedCoins.get("OPEN", []),
            rudexBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().backedCoins.get("RUDEX", []),
            blockTradesBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().backedCoins.get("TRADE", []),
            winexBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().backedCoins.get("WIN", []),
            servicesDown: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().down || {}
        };
    }
}));

/***/ }),

/***/ 2547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DepositWithdraw_blocktrades_BlockTradesGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2548);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2517);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(879);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var BlockTradesGateway = function (_React$Component) {
    _inherits(BlockTradesGateway, _React$Component);

    function BlockTradesGateway(props) {
        _classCallCheck(this, BlockTradesGateway);

        var _this = _possibleConstructorReturn(this, (BlockTradesGateway.__proto__ || Object.getPrototypeOf(BlockTradesGateway)).call(this));

        var action = props.viewSettings.get(props.provider + "Action", "deposit");
        _this.state = {
            activeCoin: _this._getActiveCoin(props, { action: action }),
            action: action
        };
        return _this;
    }

    _createClass(BlockTradesGateway, [{
        key: "_getActiveCoin",
        value: function _getActiveCoin(props, state) {
            var cachedCoin = props.viewSettings.get("activeCoin_" + props.provider + "_" + state.action, null);
            var firstTimeCoin = null;
            if (props.provider == "blocktrades" && state.action == "deposit") {
                firstTimeCoin = "BTC";
            }
            if (props.provider == "openledger" && state.action == "deposit") {
                firstTimeCoin = "BTC";
            }
            if (props.provider == "blocktrades" && state.action == "withdraw") {
                firstTimeCoin = "TRADE.BTC";
            }
            if (props.provider == "openledger" && state.action == "withdraw") {
                firstTimeCoin = "OPEN.BTC";
            }
            var activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;
            return activeCoin;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.provider !== this.props.provider) {
                this.setState({
                    activeCoin: this._getActiveCoin(nextProps, this.state.action)
                });
            }
        }

        // shouldComponentUpdate(nextProps, nextState) {
        //     if (nextState.action !== this.state.action) {
        //         this.setState({
        //             activeCoin: this._getActiveCoin(nextProps, nextState)
        //         });
        //     }

        //     return true;
        // }

    }, {
        key: "onSelectCoin",
        value: function onSelectCoin(e) {
            this.setState({
                activeCoin: e.target.value
            });

            var setting = {};
            setting["activeCoin_" + this.props.provider + "_" + this.state.action] = e.target.value;
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(setting);
        }
    }, {
        key: "changeAction",
        value: function changeAction(type) {
            var activeCoin = this._getActiveCoin(this.props, { action: type });

            this.setState({
                action: type,
                activeCoin: activeCoin
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(_defineProperty({}, this.props.provider + "Action", type));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                coins = _props.coins,
                account = _props.account,
                provider = _props.provider;
            var _state = this.state,
                activeCoin = _state.activeCoin,
                action = _state.action;

            if (!coins.length) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], null);
            }

            var filteredCoins = coins.filter(function (a) {
                if (!a || !a.symbol) {
                    return false;
                } else {
                    return action === "deposit" ? a.depositAllowed : a.withdrawalAllowed;
                }
            });

            var coinOptions = filteredCoins.map(function (coin) {
                var option = action === "deposit" ? coin.backingCoinType.toUpperCase() : coin.symbol;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: option, key: coin.symbol },
                    option
                );
            }).filter(function (a) {
                return a !== null;
            });

            var coin = filteredCoins.filter(function (coin) {
                return action === "deposit" ? coin.backingCoinType.toUpperCase() === activeCoin : coin.symbol === activeCoin;
            })[0];

            if (!coin) coin = filteredCoins[0];

            var issuers = {
                blocktrades: {
                    name: "blocktrades",
                    id: "1.2.32567",
                    support: "support@blocktrades.us"
                },
                openledger: {
                    name: coin.intermediateAccount,
                    id: "1.2.96397",
                    support: "https://openledger.io"
                }
            };

            var issuer = issuers[provider];

            var isDeposit = this.state.action === "deposit";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-margin vertical medium-horizontal no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                {
                                    style: { minHeight: "2rem" },
                                    className: "left-label"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.choose_" + action
                                }),
                                ":",
                                " "
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "external-coin-types bts-select",
                                    onChange: this.onSelectCoin.bind(this),
                                    value: activeCoin
                                },
                                coinOptions
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-6 medium-offset-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                                style: { minHeight: "2rem" },
                                className: "left-label"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.gateway_text" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { paddingBottom: 15 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "button-group segmented no-margin" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "deposit" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "deposit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.deposit" })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "withdraw" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "withdraw")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw" })
                                    )
                                )
                            )
                        )
                    )
                ),
                !coin ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_blocktrades_BlockTradesGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            key: provider + "." + coin.symbol,
                            gateway: provider,
                            issuer_account: issuer.name,
                            account: account,
                            deposit_asset: coin.backingCoinType.toUpperCase(),
                            deposit_asset_name: coin.name,
                            deposit_coin_type: coin.backingCoinType.toLowerCase(),
                            deposit_account: coin.depositAccount,
                            deposit_wallet_type: coin.walletType,
                            gateFee: coin.gateFee,
                            receive_asset: coin.symbol,
                            receive_coin_type: coin.symbol.toLowerCase(),
                            supports_output_memos: coin.supportsMemos,
                            isAvailable: coin.isAvailable,
                            action: this.state.action
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Support"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.support_block" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    href: (issuer.support.indexOf("@") === -1 ? "" : "mailto:") + issuer.support,
                                    rel: "noopener noreferrer"
                                },
                                issuer.support
                            )
                        )
                    ),
                    coin && coin.symbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__["TransactionWrapper"],
                        {
                            asset: coin.symbol,
                            fromAccount: isDeposit ? issuer.id : this.props.account.get("id"),
                            to: isDeposit ? this.props.account.get("id") : issuer.id
                        },
                        function (_ref) {
                            var asset = _ref.asset,
                                to = _ref.to,
                                fromAccount = _ref.fromAccount;

                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__["RecentTransactions"], {
                                accountsList: immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List([_this2.props.account.get("id")]),
                                limit: 10,
                                compactView: true,
                                fullHeight: true,
                                filter: "transfer",
                                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.recent_" + _this2.state.action
                                }),
                                customFilter: {
                                    fields: ["to", "from", "asset_id"],
                                    values: {
                                        to: to.get("id"),
                                        from: fromAccount.get("id"),
                                        asset_id: asset.get("id")
                                    }
                                }
                            });
                        }
                    ) : null
                )
            );
        }
    }]);

    return BlockTradesGateway;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(BlockTradesGateway, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var _WithdrawModalBlocktrades__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2549);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2550);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1217);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1332);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1234);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(735);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(879);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var BlockTradesGatewayDepositRequest = function (_React$Component) {
    _inherits(BlockTradesGatewayDepositRequest, _React$Component);

    function BlockTradesGatewayDepositRequest(props) {
        _classCallCheck(this, BlockTradesGatewayDepositRequest);

        var _this = _possibleConstructorReturn(this, (BlockTradesGatewayDepositRequest.__proto__ || Object.getPrototypeOf(BlockTradesGatewayDepositRequest)).call(this, props));

        var urls = {
            blocktrades: api_apiConfig__WEBPACK_IMPORTED_MODULE_12__["blockTradesAPIs"].BASE,
            openledger: api_apiConfig__WEBPACK_IMPORTED_MODULE_12__["openledgerAPIs"].BASE
        };

        _this.state = {
            receive_address: null,
            url: props.url || urls[props.gateway],
            loading: false,
            emptyAddressDeposit: false
        };

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this._copy = _this._copy.bind(_this);
        document.addEventListener("copy", _this._copy);
        return _this;
    }

    _createClass(BlockTradesGatewayDepositRequest, [{
        key: "_copy",
        value: function _copy(e) {
            try {
                if (this.state.clipboardText) e.clipboardData.setData("text/plain", this.state.clipboardText);else e.clipboardData.setData("text/plain", counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("gateway.use_copy_button").toUpperCase());
                e.preventDefault();
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            return {
                inputCoinType: this.props.deposit_coin_type,
                outputCoinType: this.props.receive_coin_type,
                outputAddress: this.props.account.get("name"),
                url: this.state.url,
                stateCallback: this.addDepositAddress
            };
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_11__["getDepositAddress"])({
                coin: this.props.receive_coin_type,
                account: this.props.account.get("name"),
                stateCallback: this.addDepositAddress
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("copy", this._copy);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.account !== this.props.account) {
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_11__["getDepositAddress"])({
                    coin: np.receive_coin_type,
                    account: np.account.get("name"),
                    stateCallback: this.addDepositAddress
                });
            }
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            if (receive_address.error) {
                receive_address.error.message === "no_address" ? this.setState({ emptyAddressDeposit: true }) : this.setState({ emptyAddressDeposit: false });
            }

            this.setState({ receive_address: receive_address });
            this.setState({
                loading: false
            });
            this.setState({ receive_address: receive_address });
        }
    }, {
        key: "requestDepositAddressLoad",
        value: function requestDepositAddressLoad() {
            this.setState({
                loading: true,
                emptyAddressDeposit: false
            });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_11__["requestDepositAddress"])(this._getDepositObject());
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            // console.log( "this.props.issuer: ", this.props.issuer_account.toJS() )
            // console.log( "this.receive_asset.issuer: ", this.props.receive_asset.toJS() )
            return "withdraw_asset_" + this.props.issuer_account.get("name") + "_" + this.props.receive_asset.get("symbol");
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default.a.publish(this.getWithdrawModalId(), "open");
        }
    }, {
        key: "toClipboard",
        value: function toClipboard(clipboardText) {
            try {
                this.setState({ clipboardText: clipboardText }, function () {
                    document.execCommand("copy");
                });
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var isDeposit = this.props.action === "deposit";
            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], null);
            if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return emptyRow;

            var account_balances_object = this.props.account.get("balances");

            var gateFee = this.props.gateFee;


            var balance = "0 " + this.props.receive_asset.get("symbol");
            if (this.props.deprecated_in_favor_of) {
                var has_nonzero_balance = false;
                var balance_object_id = account_balances_object.get(this.props.receive_asset.get("id"));
                if (balance_object_id) {
                    var balance_object = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(balance_object_id);
                    if (balance_object) {
                        var _balance = balance_object.get("balance");
                        if (_balance != 0) has_nonzero_balance = true;
                    }
                }
                if (!has_nonzero_balance) return emptyRow;
            }

            // let account_balances = account_balances_object.toJS();
            // let asset_types = Object.keys(account_balances);
            // if (asset_types.length > 0) {
            //     let current_asset_id = this.props.receive_asset.get("id");
            //     if( current_asset_id )
            //     {
            //         balance = (<span><Translate component="span" content="transfer.available"/>: <BalanceComponent balance={account_balances[current_asset_id]}/></span>);
            //     }
            // }

            var receive_address = this.state.receive_address;
            var emptyAddressDeposit = this.state.emptyAddressDeposit;

            var indicatorButtonAddr = this.state.loading;

            if (!receive_address) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { margin: "3rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], { type: "three-bounce" })
                );
            }

            var withdraw_modal_id = this.getWithdrawModalId();
            var deposit_address_fragment = null;
            var deposit_memo = null;
            // if (this.props.deprecated_in_favor_of)
            // {
            //     deposit_address_fragment = <span>please use {this.props.deprecated_in_favor_of.get("symbol")} instead. <span data-tip={this.props.deprecated_message} data-place="right" data-html={true}><Icon name="question-circle" title="icons.question_circle" /></span><ReactTooltip /></span>;
            // }
            // else
            // {
            var clipboardText = "";
            var memoText = void 0;
            if (this.props.deposit_account) {
                deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    this.props.deposit_account
                );
                clipboardText = this.props.receive_coin_type + ":" + this.props.account.get("name");
                deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    clipboardText
                );
                var withdraw_memo_prefix = this.props.deposit_coin_type + ":";
            } else {
                if (receive_address.memo) {
                    // This is a client that uses a deposit memo (like ethereum), we need to display both the address and the memo they need to send
                    memoText = receive_address.memo;
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                    deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.memo
                    );
                } else {
                    // This is a client that uses unique deposit addresses to select the output
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                }
                var withdraw_memo_prefix = "";
            }

            if (!this.props.isAvailable || isDeposit && !this.props.deposit_account && !receive_address || receive_address && receive_address.address === "unknown") {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable",
                        component: "h4"
                    })
                );
            }

            if (isDeposit) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_deposit"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.your_account"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                account: this.props.account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.deposit_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "fz_12 left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.deposit_notice_delay" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            emptyAddressDeposit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.please_generate_address" }) : deposit_address_fragment,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                deposit_memo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    "memo: ",
                                    deposit_memo
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button-group",
                                    style: { paddingTop: 10 }
                                },
                                deposit_address_fragment ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.toClipboard.bind(this, clipboardText)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.copy_address" })
                                ) : null,
                                memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.toClipboard.bind(this, memoText)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.copy_memo" })
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button spinner-button-circle",
                                        onClick: this.requestDepositAddressLoad.bind(this)
                                    },
                                    indicatorButtonAddr ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], { type: "circle" }) : null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.generate_new" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                className: "has-error fz_14",
                                component: "p",
                                content: "gateway.min_deposit_warning_amount",
                                minDeposit: this.props.gateFee * 2,
                                coin: this.props.deposit_asset
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                className: "has-error fz_14",
                                component: "p",
                                content: "gateway.min_deposit_warning_asset",
                                minDeposit: this.props.gateFee * 2,
                                coin: this.props.deposit_asset
                            })
                        )
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_withdraw"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.withdraw_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group", style: { paddingTop: 20 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button success",
                                    style: { fontSize: "1.3rem" },
                                    onClick: this.onWithdraw.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.withdraw_now" }),
                                " "
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_6__["default"],
                        { id: withdraw_modal_id, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WithdrawModalBlocktrades__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                account: this.props.account.get("name"),
                                issuer: this.props.issuer_account.get("name"),
                                asset: this.props.receive_asset.get("symbol"),
                                url: this.state.url,
                                output_coin_name: this.props.deposit_asset_name,
                                gateFee: gateFee,
                                output_coin_symbol: this.props.deposit_asset,
                                output_coin_type: this.props.deposit_coin_type,
                                output_wallet_type: this.props.deposit_wallet_type,
                                output_supports_memos: this.props.supports_output_memos,
                                memo_prefix: withdraw_memo_prefix,
                                modal_id: withdraw_modal_id,
                                balance: this.props.account.get("balances").toJS()[this.props.receive_asset.get("id")]
                            })
                        )
                    )
                );
            }
        }
    }]);

    return BlockTradesGatewayDepositRequest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BlockTradesGatewayDepositRequest.propTypes = {
    url: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    deposit_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    deposit_asset_name: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    deposit_account: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    receive_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    deposit_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_message: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    action: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
    supports_output_memos: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.bool.isRequired
};
BlockTradesGatewayDepositRequest.defaultProps = {
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockTradesGatewayDepositRequest));

/***/ }),

/***/ 2549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1232);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1012);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(565);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1234);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(416);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(866);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(581);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(582);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var WithdrawModalBlocktrades = function (_React$Component) {
    _inherits(WithdrawModalBlocktrades, _React$Component);

    function WithdrawModalBlocktrades(props) {
        _classCallCheck(this, WithdrawModalBlocktrades);

        var _this = _possibleConstructorReturn(this, (WithdrawModalBlocktrades.__proto__ || Object.getPrototypeOf(WithdrawModalBlocktrades)).call(this, props));

        _this.state = {
            withdraw_amount: _this.props.amount_to_withdraw,
            withdraw_address: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_wallet_type),
            withdraw_address_check_in_progress: true,
            withdraw_address_is_valid: null,
            options_is_valid: false,
            confirmation_is_valid: false,
            withdraw_address_selected: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_wallet_type),
            memo: "",
            withdraw_address_first: true,
            empty_withdraw_value: false,
            from_account: props.account,
            fee_asset_id: "1.3.0",
            feeStatus: {}
        };

        _this._validateAddress(_this.state.withdraw_address, props);

        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);
        return _this;
    }

    _createClass(WithdrawModalBlocktrades, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.unMounted = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            var _this2 = this;

            if (np.account !== this.state.from_account && np.account !== this.props.account) {
                this.setState({
                    from_account: np.account,
                    feeStatus: {},
                    fee_asset_id: "1.3.0",
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus();
                });
            }
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this3 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var fee_asset_id = state.fee_asset_id,
                from_account = state.from_account;

            var _getAvailableAssets2 = this._getAvailableAssets(state),
                fee_asset_types = _getAvailableAssets2.fee_asset_types;

            if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
                fee_asset_id = fee_asset_types[0];
            }

            if (!from_account) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                accountID: from_account.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: this.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                if (_this3.unMounted) return;

                _this3.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this3._checkBalance);
            });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this4 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

            var account = state.from_account;
            if (!account) return;

            var _getAvailableAssets3 = this._getAvailableAssets(state),
                assets = _getAvailableAssets3.fee_asset_types;
            // const assets = ["1.3.0", this.props.asset.get("id")];


            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this4.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(state.feeStatus, feeStatus)) {
                    _this4.setState({
                        feeStatus: feeStatus
                    });
                }
                _this4._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "onWithdrawAmountChange",
        value: function onWithdrawAmountChange(_ref2) {
            var amount = _ref2.amount;

            this.setState({
                withdraw_amount: amount,
                empty_withdraw_value: amount !== undefined && !parseFloat(amount)
            }, this._checkBalance);
        }
    }, {
        key: "onSelectChanged",
        value: function onSelectChanged(index) {
            var new_withdraw_address = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type)[index];
            common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: new_withdraw_address
            });

            this.setState({
                withdraw_address_selected: new_withdraw_address,
                options_is_valid: false,
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "onWithdrawAddressChanged",
        value: function onWithdrawAddressChanged(e) {
            var new_withdraw_address = e.target.value.trim();

            this.setState({
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: new_withdraw_address,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(new_withdraw_address) {
            var _this5 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["validateAddress"])({
                url: props.url,
                walletType: props.output_wallet_type,
                newAddress: new_withdraw_address
            }).then(function (isValid) {
                if (_this5.state.withdraw_address === new_withdraw_address) {
                    _this5.setState({
                        withdraw_address_check_in_progress: false,
                        withdraw_address_is_valid: isValid
                    });
                }
            });
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                withdraw_amount = _state.withdraw_amount;
            var _props = this.props,
                asset = _props.asset,
                balance = _props.balance;

            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkBalance"])(withdraw_amount, asset, feeAmount, balance);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
            return hasBalance;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length && this.state.withdraw_amount !== null) {
                if (!this.state.withdraw_address_is_valid) {
                    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "open");
                } else if (parseFloat(this.state.withdraw_amount) > 0) {
                    if (!common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                        var withdrawals = [];
                        withdrawals.push(this.state.withdraw_address);
                        common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                            wallet: this.props.output_wallet_type,
                            addresses: withdrawals
                        });
                    } else {
                        var _withdrawals = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
                        if (_withdrawals.indexOf(this.state.withdraw_address) == -1) {
                            _withdrawals.push(this.state.withdraw_address);
                            common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                                wallet: this.props.output_wallet_type,
                                addresses: _withdrawals
                            });
                        }
                    }
                    common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                        wallet: this.props.output_wallet_type,
                        address: this.state.withdraw_address
                    });
                    var asset = this.props.asset;

                    var feeAmount = this.state.feeAmount;


                    var amount = parseFloat(String.prototype.replace.call(this.state.withdraw_amount, /,/g, ""));
                    var gateFee = typeof this.props.gateFee != "undefined" ? parseFloat(String.prototype.replace.call(this.props.gateFee, /,/g, "")) : 0.0;

                    var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                        asset_id: asset.get("id"),
                        precision: asset.get("precision"),
                        real: amount
                    });

                    var balanceAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                        asset_id: asset.get("id"),
                        precision: asset.get("precision"),
                        real: 0
                    });

                    if (typeof this.props.balance != "undefined") {
                        balanceAmount = sendAmount.clone(this.props.balance.get("balance"));
                    }

                    var gateFeeAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                        asset_id: asset.get("id"),
                        precision: asset.get("precision"),
                        real: gateFee
                    });

                    sendAmount.plus(gateFeeAmount);

                    /* Insufficient balance */
                    if (balanceAmount.lt(sendAmount)) {
                        sendAmount = balanceAmount;
                    }

                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : "1.3.0");

                    this.setState({
                        empty_withdraw_value: false
                    });
                } else {
                    this.setState({
                        empty_withdraw_value: true
                    });
                }
            }
        }
    }, {
        key: "onSubmitConfirmation",
        value: function onSubmitConfirmation() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "close");

            if (!common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                var withdrawals = [];
                withdrawals.push(this.state.withdraw_address);
                common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                    wallet: this.props.output_wallet_type,
                    addresses: withdrawals
                });
            } else {
                var _withdrawals2 = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
                if (_withdrawals2.indexOf(this.state.withdraw_address) == -1) {
                    _withdrawals2.push(this.state.withdraw_address);
                    common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                        wallet: this.props.output_wallet_type,
                        addresses: _withdrawals2
                    });
                }
            }
            common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: this.state.withdraw_address
            });
            var asset = this.props.asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(asset.get("precision"));
            var amount = String.prototype.replace.call(this.state.withdraw_amount, /,/g, "");

            var feeAmount = this.state.feeAmount;


            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : "1.3.0");
        }
    }, {
        key: "onDropDownList",
        value: function onDropDownList() {
            if (common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                if (this.state.options_is_valid === false) {
                    this.setState({ options_is_valid: true });
                    this.setState({ withdraw_address_first: false });
                }

                if (this.state.options_is_valid === true) {
                    this.setState({ options_is_valid: false });
                }
            }
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "confirmation";
        }
    }, {
        key: "onAccountBalance",
        value: function onAccountBalance() {
            var feeAmount = this.state.feeAmount;

            if (Object.keys(this.props.account.get("balances").toJS()).includes(this.props.asset.get("id"))) {
                var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                    amount: this.props.balance.get("balance"),
                    asset_id: this.props.asset.get("id"),
                    precision: this.props.asset.get("precision")
                });

                // Subtract the fee if it is using the same asset
                if (total.asset_id === feeAmount.asset_id) {
                    total.minus(feeAmount);
                }

                this.setState({
                    withdraw_amount: total.getAmount({ real: true }),
                    empty_withdraw_value: false
                }, this._checkBalance);
            }
        }
    }, {
        key: "setNestedRef",
        value: function setNestedRef(ref) {
            this.nestedRef = ref;
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(_ref3) {
            var asset = _ref3.asset;

            this.setState({
                fee_asset_id: asset.get("id")
            }, this._updateFee);
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account,
                feeStatus = state.feeStatus;

            function hasFeePoolBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var fee_asset_types = [];
            if (!(from_account && from_account.get("balances"))) {
                return { fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sortID);
            for (var key in account_balances) {
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(key);
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }

                if (asset) {
                    // Remove any assets that do not have valid core exchange rates
                    var priceIsValid = false,
                        p = void 0;
                    try {
                        p = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Price"]({
                            base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "base"]).toJS()),
                            quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "quote"]).toJS())
                        });
                        priceIsValid = p.isValid();
                    } catch (err) {
                        priceIsValid = false;
                    }

                    if (asset.get("id") !== "1.3.0" && !priceIsValid) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }

            fee_asset_types = fee_asset_types.filter(function (a) {
                return hasFeePoolBalance(a) && hasBalance(a);
            });

            return { fee_asset_types: fee_asset_types };
        }
    }, {
        key: "render",
        value: function render() {
            var _state2 = this.state,
                withdraw_address_selected = _state2.withdraw_address_selected,
                memo = _state2.memo;

            var storedAddress = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
            var balance = null;

            var account_balances = this.props.account.get("balances").toJS();
            var asset_types = Object.keys(account_balances);

            var withdrawModalId = this.getWithdrawModalId();
            var invalid_address_message = null;
            var options = null;
            var confirmation = null;

            if (this.state.options_is_valid) {
                options = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: !storedAddress.length ? "blocktrades-disabled-options" : "blocktrades-options"
                    },
                    storedAddress.map(function (name, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                key: index,
                                onClick: this.onSelectChanged.bind(this, index)
                            },
                            name
                        );
                    }, this)
                );
            }

            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length) {
                if (!this.state.withdraw_address_is_valid) {
                    invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            content: "gateway.valid_address",
                            coin_type: this.props.output_coin_type
                        })
                    );
                    confirmation = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default.a,
                        { id: withdrawModalId, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: withdrawModalId },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "a",
                                { href: "#", className: "close-button" },
                                "\xD7"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.title" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onSubmitConfirmation.bind(this),
                                value: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("modal.confirmation.accept")
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                                { close: withdrawModalId },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "a",
                                    { className: "secondary button" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.cancel" })
                                )
                            )
                        )
                    );
                }
                // if (this.state.withdraw_address_is_valid)
                //   invalid_address_message = <Icon name="checkmark-circle" title="icons.checkmark_circle.operation_succeed" className="success" />;
                // else
                //   invalid_address_message = <Icon name="cross-circle" title="icons.cross_circle.operation_failed" className="alert" />;
            }

            var tabIndex = 1;
            var withdraw_memo = null;

            if (this.props.output_supports_memos) {
                withdraw_memo = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transfer.memo" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                        rows: "3",
                        value: memo,
                        tabIndex: tabIndex++,
                        onChange: this.onMemoChanged.bind(this)
                    })
                );
            }

            // Estimate fee VARIABLES

            var _getAvailableAssets4 = this._getAvailableAssets(),
                fee_asset_types = _getAvailableAssets4.fee_asset_types;

            if (asset_types.length > 0) {
                var current_asset_id = this.props.asset.get("id");
                if (current_asset_id) {
                    var current = account_balances[current_asset_id];
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        "\xA0:\xA0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: "set-cursor",
                                onClick: this.onAccountBalance.bind(this)
                            },
                            current ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                balance: account_balances[current_asset_id]
                            }) : 0
                        )
                    );
                } else balance = "No funds";
            } else {
                balance = "No funds";
            }

            var disableSubmit = this.state.error || this.state.balanceError || !this.state.withdraw_amount;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-container" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "h3",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "gateway.withdraw_coin",
                                coin: this.props.output_coin_name,
                                symbol: this.props.output_coin_symbol
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            label: "modal.withdraw.amount",
                            amount: this.state.withdraw_amount,
                            asset: this.props.asset.get("id"),
                            assets: [this.props.asset.get("id")],
                            placeholder: "0.0",
                            onChange: this.onWithdrawAmountChange.bind(this),
                            display_balance: balance
                        }),
                        this.state.empty_withdraw_value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.valid" })
                        ) : null,
                        this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.insufficient" })
                        ) : null
                    ),
                    this.state.feeAmount ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block gate_fee" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            refCallback: this.setNestedRef.bind(this),
                            label: "transfer.fee",
                            disabled: true,
                            amount: this.state.feeAmount.getAmount({
                                real: true
                            }),
                            onChange: this.onFeeChanged.bind(this),
                            asset: this.state.feeAmount.asset_id,
                            assets: fee_asset_types,
                            tabIndex: tabIndex++
                        }),
                        !this.state.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noFeeBalance" })
                        ) : null,
                        !this.state.hasPoolBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noPoolBalance" })
                        ) : null
                    ) : null,
                    this.props.gateFee ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "amount-selector right-selector",
                            style: { paddingBottom: 20 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.fee" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "text",
                                disabled: true,
                                value: this.props.gateFee
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "form-label select floating-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "dropdown-wrapper inactive" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        this.props.output_coin_symbol
                                    )
                                )
                            )
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "modal.withdraw.address"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-select-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                    type: "text",
                                    value: withdraw_address_selected,
                                    tabIndex: "4",
                                    onChange: this.onWithdrawAddressChanged.bind(this),
                                    autoComplete: "off"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { onClick: this.onDropDownList.bind(this) },
                                    "\u25BC"
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-position-options" },
                            options
                        ),
                        invalid_address_message
                    ),
                    withdraw_memo,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "button-group" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                onClick: this.onSubmit.bind(this),
                                className: "button" + (disableSubmit ? " disabled" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.withdraw.submit" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: this.props.modal_id },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "button" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.cancel" })
                            )
                        )
                    ),
                    confirmation
                )
            );
        }
    }]);

    return WithdrawModalBlocktrades;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WithdrawModalBlocktrades.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    issuer: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired,
    output_coin_name: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    output_coin_symbol: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    output_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    output_supports_memos: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool.isRequired,
    amount_to_withdraw: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(WithdrawModalBlocktrades));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1217);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1232);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 *  Given a balance_object, displays it in a pretty way
 *
 *  Expects one property, 'balance' which should be a balance_object id
 */

var AccountBalance = function (_React$Component) {
    _inherits(AccountBalance, _React$Component);

    function AccountBalance() {
        _classCallCheck(this, AccountBalance);

        return _possibleConstructorReturn(this, (AccountBalance.__proto__ || Object.getPrototypeOf(AccountBalance)).apply(this, arguments));
    }

    _createClass(AccountBalance, [{
        key: "render",
        value: function render() {
            var asset_id = this.props.asset.get("id");
            var balance_id = this.props.account.getIn(["balances", asset_id]);

            if (balance_id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                balance: balance_id,
                replace: this.props.replace
            });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "0\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    name: this.props.asset.get("symbol"),
                    replace: this.props.replace
                })
            );
        }
    }]);

    return AccountBalance;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountBalance.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
};
AccountBalance.defaultProps = {
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AccountBalance));

/***/ }),

/***/ 2551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2550);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1232);
/* harmony import */ var _DepositFiatOpenLedger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2552);
/* harmony import */ var _WithdrawFiatOpenLedger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2553);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var OpenLedgerFiatDepositWithdrawCurrency = function (_React$Component) {
    _inherits(OpenLedgerFiatDepositWithdrawCurrency, _React$Component);

    function OpenLedgerFiatDepositWithdrawCurrency(props) {
        _classCallCheck(this, OpenLedgerFiatDepositWithdrawCurrency);

        var _this = _possibleConstructorReturn(this, (OpenLedgerFiatDepositWithdrawCurrency.__proto__ || Object.getPrototypeOf(OpenLedgerFiatDepositWithdrawCurrency)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(OpenLedgerFiatDepositWithdrawCurrency, [{
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "withdraw_fiat_openledger_" + this.props.receive_asset.get("symbol");
        }
    }, {
        key: "getDepositModalId",
        value: function getDepositModalId() {
            return "deposit_fiat_openledger_" + this.props.receive_asset.get("symbol");
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default.a.publish(this.getWithdrawModalId(), "open");
        }
    }, {
        key: "onDeposit",
        value: function onDeposit() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default.a.publish(this.getDepositModalId(), "open");
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { style: { display: "none" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)
            );

            var wallet = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getWallet();
            var account_balances_object = this.props.account.get("balances");

            var balance = "0 " + this.props.receive_asset.get("symbol");

            var account_balances = account_balances_object.toJS();
            var asset_types = Object.keys(account_balances);
            if (asset_types.length > 0) {
                var current_asset_id = this.props.receive_asset.get("id");
                if (current_asset_id) balance = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        component: "span",
                        content: "transfer.available"
                    }),
                    ":",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        balance: account_balances[current_asset_id]
                    })
                );
            }

            var deposit_modal_id = this.getDepositModalId();
            var withdraw_modal_id = this.getWithdrawModalId();

            var deposit_fragment = null;
            if (this.props.deposit_allowed) {
                deposit_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.onDeposit.bind(this)
                        },
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.deposit" }),
                        " "
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_5__["default"],
                        { id: deposit_modal_id, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6___default.a,
                            { close: deposit_modal_id },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { href: "#", className: "close-button" },
                                "\xD7"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositFiatOpenLedger__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                account: this.props.account.get("name"),
                                issuer_account: this.props.issuer_account.get("name"),
                                receive_asset: this.props.receive_asset.get("symbol"),
                                rpc_url: this.props.rpc_url,
                                deposit_asset: this.props.deposit_asset,
                                modal_id: deposit_modal_id
                            })
                        )
                    )
                );
            } else deposit_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "td",
                null,
                "Click",
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    {
                        href: "https://openledger.info/v/",
                        rel: "noopener noreferrer",
                        target: "_blank"
                    },
                    "here"
                ),
                " ",
                "to register for deposits of ",
                this.props.deposit_asset
            );

            var withdraw_fragment = null;
            if (this.props.withdraw_allowed) {
                withdraw_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.onWithdraw.bind(this)
                        },
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.withdraw" }),
                        " "
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_5__["default"],
                        { id: withdraw_modal_id, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6___default.a,
                            { close: withdraw_modal_id },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { href: "#", className: "close-button" },
                                "\xD7"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WithdrawFiatOpenLedger__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                account: this.props.account.get("name"),
                                issuer_account: this.props.issuer_account.get("name"),
                                receive_asset: this.props.receive_asset.get("symbol"),
                                rpc_url: this.props.rpc_url,
                                deposit_asset: this.props.deposit_asset,
                                modal_id: withdraw_modal_id
                            })
                        )
                    )
                );
            } else withdraw_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "td",
                null,
                "Click",
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    {
                        href: "https://openledger.info/v/",
                        rel: "noopener noreferrer",
                        target: "_blank"
                    },
                    "here"
                ),
                " ",
                "to register for withdrawals of ",
                this.props.deposit_asset
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    this.props.deposit_asset
                ),
                deposit_fragment,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        account: this.props.account.get("name"),
                        asset: this.props.receive_asset.get("symbol")
                    })
                ),
                withdraw_fragment
            );
        }
    }]);

    return OpenLedgerFiatDepositWithdrawCurrency;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // OpenLedgerFiatDepositWithdrawCurrency


OpenLedgerFiatDepositWithdrawCurrency.propTypes = {
    url: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    deposit_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    deposit_asset_name: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    deposit_account: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    receive_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset,
    deposit_allowed: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
    withdraw_allowed: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool
};
OpenLedgerFiatDepositWithdrawCurrency = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(OpenLedgerFiatDepositWithdrawCurrency);

var OpenLedgerFiatDepositWithdrawal = function (_React$Component2) {
    _inherits(OpenLedgerFiatDepositWithdrawal, _React$Component2);

    function OpenLedgerFiatDepositWithdrawal(props) {
        _classCallCheck(this, OpenLedgerFiatDepositWithdrawal);

        var _this2 = _possibleConstructorReturn(this, (OpenLedgerFiatDepositWithdrawal.__proto__ || Object.getPrototypeOf(OpenLedgerFiatDepositWithdrawal)).call(this, props));

        _this2.state = {
            allowedFiatCurrencies: {
                deposit: [],
                withdraw: []
            }
        };

        // get approval status from openledger
        var json_rpc_request = {
            jsonrpc: "2.0",
            id: 1,
            method: "isValidatedForFiat",
            params: { bitsharesAccountName: _this2.props.account.get("name") }
        };
        var is_validated_promise = fetch(_this2.props.rpc_url, {
            method: "POST",
            headers: new Headers({
                Accept: "application/json",
                "content-type": "application/x-www-form-urlencoded"
            }),
            body: "rq=" + encodeURIComponent(JSON.stringify(json_rpc_request))
        }).then(function (response) {
            return response.json();
        });

        is_validated_promise.then(function (json_response) {
            if ("result" in json_response) _this2.setState({
                allowedFiatCurrencies: json_response.result
            });
        }).catch(function (error) {
            _this2.setState({
                allowedFiatCurrencies: {
                    deposit: [],
                    withdraw: []
                }
            });
        });
        return _this2;
    }

    _createClass(OpenLedgerFiatDepositWithdrawal, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.update_timer);
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.account || !this.props.issuer_account) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

            /*         <table className="table">
                            <thead>
                            <tr>
                                <th><Translate content="gateway.symbol" /></th>
                                <th><Translate content="gateway.deposit_address" /></th>
                                <th><Translate content="gateway.balance" /></th>
                                <th><Translate content="gateway.withdraw" /></th>
                            </tr>
                            </thead>
                            <tbody>
                                <OpenLedgerFiatDepositWithdrawCurrency
                                    rpc_url={this.props.rpc_url}
                                    account={this.props.account}
                                    issuer_account={this.props.issuer_account}
                                    deposit_asset="USD"
                                    receive_asset="OPEN.USD"
                                    deposit_allowed={this.state.allowedFiatCurrencies.deposit.indexOf("USD") > -1}
                                    withdraw_allowed={this.state.allowedFiatCurrencies.withdraw.indexOf("USD") > -1}/>
                                <OpenLedgerFiatDepositWithdrawCurrency
                                    rpc_url={this.props.rpc_url}
                                    account={this.props.account}
                                    issuer_account={this.props.issuer_account}
                                    deposit_asset="EUR"
                                    receive_asset="OPEN.EUR"
                                    deposit_allowed={this.state.allowedFiatCurrencies.deposit.indexOf("EUR") > -1}
                                    withdraw_allowed={this.state.allowedFiatCurrencies.withdraw.indexOf("EUR") > -1}/>
                                <OpenLedgerFiatDepositWithdrawCurrency
                                    rpc_url={this.props.rpc_url}
                                    account={this.props.account}
                                    issuer_account={this.props.issuer_account}
                                    deposit_asset="CNY"
                                    receive_asset="OPEN.CNY"
                                    deposit_allowed={this.state.allowedFiatCurrencies.deposit.indexOf("CNY") > -1}
                                    withdraw_allowed={this.state.allowedFiatCurrencies.withdraw.indexOf("CNY") > -1}/>
                            </tbody>
                        </table>;*/
        }
    }]);

    return OpenLedgerFiatDepositWithdrawal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // OpenLedgerFiatDepositWithdrawal


OpenLedgerFiatDepositWithdrawal.propTypes = {
    rpc_url: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount
};
OpenLedgerFiatDepositWithdrawal = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(OpenLedgerFiatDepositWithdrawal);

/* harmony default export */ __webpack_exports__["default"] = (OpenLedgerFiatDepositWithdrawal);

/***/ }),

/***/ 2552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1012);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var DepositFiatOpenLedger = function (_React$Component) {
    _inherits(DepositFiatOpenLedger, _React$Component);

    function DepositFiatOpenLedger(props) {
        _classCallCheck(this, DepositFiatOpenLedger);

        var _this = _possibleConstructorReturn(this, (DepositFiatOpenLedger.__proto__ || Object.getPrototypeOf(DepositFiatOpenLedger)).call(this, props));

        _this.state = {
            deposit_amount: null,
            deposit_info: null,
            deposit_error: null
        };
        return _this;
    }

    _createClass(DepositFiatOpenLedger, [{
        key: "onDepositAmountChange",
        value: function onDepositAmountChange(_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            this.setState({ deposit_amount: amount });
        }
    }, {
        key: "onSubmitDeposit",
        value: function onSubmitDeposit() {
            var _this2 = this;

            var asset = this.props.receive_asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].get_asset_precision(asset.get("precision"));
            var amount = this.state.deposit_amount.replace(/,/g, "");
            console.log("deposit_amount: ", amount);

            var json_rpc_request = {
                jsonrpc: "2.0",
                method: "getDepositAccount",
                params: {
                    bitsharesAccountName: this.props.account.get("name"),
                    currency: this.props.deposit_asset,
                    amount: amount
                },
                id: 1
            };

            var is_deposit_approved_promise = fetch(this.props.rpc_url, {
                method: "POST",
                headers: new Headers({
                    Accept: "application/json",
                    "content-type": "application/x-www-form-urlencoded"
                }),
                body: "rq=" + encodeURIComponent(JSON.stringify(json_rpc_request))
            }).then(function (response) {
                return response.json();
            });

            is_deposit_approved_promise.then(function (json_response) {
                if ("result" in json_response) _this2.setState({ deposit_info: json_response.result });else if ("error" in json_reponse && "message" in json_response.error) _this2.setState({ deposit_error: json_response.error.message });else _this2.setState({
                    deposit_error: "Unable to approve deposit, please contact OpenLedger or try again later"
                });
            }).catch(function (error) {
                _this2.setState({
                    deposit_error: "Unable to approve deposit, please contact OpenLedger or try again later"
                });
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            // reset the state so the next time the dialog is launched, it doesn't show the old data
            this.setState({
                deposit_amount: null,
                deposit_info: null,
                deposit_error: null
            });
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6___default.a.publish(this.props.modal_id, "close");
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.deposit_error) {
                // then we've failed to approve them
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "form",
                    { className: "grid-block vertical full-width-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                "Deposit Error"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                this.state.deposit_error
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onClose.bind(this),
                                value: "Close"
                            })
                        )
                    )
                );
            } else if (this.state.deposit_info) {
                // then they've been approved for deposit
                if ("link" in this.state.deposit_info) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "form",
                    { className: "grid-block vertical full-width-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                "Deposit Information"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                "Click",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        href: this.state.deposit_info.link,
                                        rel: "noopener noreferrer",
                                        target: "_blank"
                                    },
                                    "here"
                                ),
                                " ",
                                "for deposit instructions"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onClose.bind(this),
                                value: "Close"
                            })
                        )
                    )
                );

                // old dead code for displaying all returned fields as text
                var table_lines = [];
                for (var key in this.state.deposit_info) {
                    if (this.state.deposit_info.hasOwnProperty(key)) table_lines.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            key
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            this.state.deposit_info[key]
                        )
                    ));
                }return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "form",
                    { className: "grid-block vertical full-width-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                "Deposit Information"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    table_lines
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onClose.bind(this),
                                value: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("account.perm.cancel")
                            })
                        )
                    )
                );
            } else {
                // they haven't clicked deposit, ask them how much they're depositing
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "form",
                    { className: "grid-block vertical full-width-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                "Deposit ",
                                this.props.deposit_asset
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                label: "modal.deposit.amount",
                                amount: this.state.deposit_amount,
                                asset: this.props.receive_asset.get("id"),
                                assets: [this.props.receive_asset.get("id")],
                                placeholder: "0.0",
                                onChange: this.onDepositAmountChange.bind(this),
                                display_balance: null
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onSubmitDeposit.bind(this),
                                value: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("modal.deposit.submit")
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "submit",
                                className: " button",
                                onClick: this.onClose.bind(this),
                                value: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("account.perm.cancel")
                            })
                        )
                    )
                );
            }
        }
    }]);

    return DepositFiatOpenLedger;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DepositFiatOpenLedger.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount.isRequired,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount.isRequired,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    rpc_url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(DepositFiatOpenLedger));

/***/ }),

/***/ 2553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1232);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1012);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(565);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var WithdrawFiatOpenLedger = function (_React$Component) {
    _inherits(WithdrawFiatOpenLedger, _React$Component);

    function WithdrawFiatOpenLedger(props) {
        _classCallCheck(this, WithdrawFiatOpenLedger);

        var _this = _possibleConstructorReturn(this, (WithdrawFiatOpenLedger.__proto__ || Object.getPrototypeOf(WithdrawFiatOpenLedger)).call(this, props));

        _this.state = {
            withdraw_amount: null
        };
        return _this;
    }

    _createClass(WithdrawFiatOpenLedger, [{
        key: "onWithdrawAmountChange",
        value: function onWithdrawAmountChange(_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            this.setState({ withdraw_amount: amount });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var _this2 = this;

            var asset = this.props.receive_asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(asset.get("precision"));
            var amount = this.state.withdraw_amount.replace(/,/g, "");

            var json_rpc_request = {
                jsonrpc: "2.0",
                method: "getMemoForFiatWithdrawal",
                params: {
                    bitsharesAccountName: this.props.account.get("name"),
                    currency: this.props.deposit_asset,
                    amount: amount
                },
                id: 1
            };
            var is_withdrawal_approved_promise = fetch(this.props.rpc_url, {
                method: "POST",
                headers: new Headers({
                    Accept: "application/json",
                    "content-type": "application/x-www-form-urlencoded"
                }),
                body: "rq=" + encodeURIComponent(JSON.stringify(json_rpc_request))
            }).then(function (response) {
                return response.json();
            });

            is_withdrawal_approved_promise.then(function (json_response) {
                if ("result" in json_response) actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(_this2.props.account.get("id"), _this2.props.issuer_account.get("id"), parseInt(amount * precision, 10), asset.get("id"), json_response.result);else if ("error" in json_response && "message" in json_response.error) throw json_repsonse.error.message;else throw "Unable to approve withdrawal, please contact OpenLedger or try again later";
            }).catch(function (error) {
                alert(error);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var balance = null;
            // console.log( "account: ", this.props.account.toJS() );
            var account_balances = this.props.account.get("balances").toJS();
            // console.log( "balances: ", account_balances );
            var asset_types = Object.keys(account_balances);

            if (asset_types.length > 0) {
                var current_asset_id = this.props.receive_asset.get("id");
                if (current_asset_id) balance = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "span",
                        content: "transfer.available"
                    }),
                    ":",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        balance: account_balances[current_asset_id]
                    })
                );else balance = "No funds";
            } else {
                balance = "No funds";
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "h3",
                            null,
                            "Withdraw ",
                            this.props.deposit_asset
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            label: "modal.withdraw.amount",
                            amount: this.state.withdraw_amount,
                            asset: this.props.receive_asset.get("id"),
                            assets: [this.props.receive_asset.get("id")],
                            placeholder: "0.0",
                            onChange: this.onWithdrawAmountChange.bind(this),
                            display_balance: balance
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "submit",
                            className: "button",
                            onClick: this.onSubmit.bind(this),
                            value: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("modal.withdraw.submit")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_1___default.a,
                            { close: this.props.modal_id },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "button" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.cancel" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WithdrawFiatOpenLedger;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WithdrawFiatOpenLedger.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    rpc_url: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WithdrawFiatOpenLedger));

/***/ }),

/***/ 2554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var OpenLedgerFiatTransactionHistory = function (_React$Component) {
    _inherits(OpenLedgerFiatTransactionHistory, _React$Component);

    function OpenLedgerFiatTransactionHistory(props) {
        _classCallCheck(this, OpenLedgerFiatTransactionHistory);

        var _this = _possibleConstructorReturn(this, (OpenLedgerFiatTransactionHistory.__proto__ || Object.getPrototypeOf(OpenLedgerFiatTransactionHistory)).call(this, props));

        _this.state = {
            current_status: "never_loaded",
            withdrawals: null,
            deposits: null,
            error: null
        };
        return _this;
    }

    _createClass(OpenLedgerFiatTransactionHistory, [{
        key: "onShowOpenLedgerTransactionHistory",
        value: function onShowOpenLedgerTransactionHistory() {
            var _this2 = this;

            var json_rpc_request = {
                jsonrpc: "2.0",
                method: "getRequestsList",
                params: {
                    bitsharesAccountName: this.props.account.get("name")
                },
                id: 1
            };
            var get_transaction_history_promise = fetch(this.props.rpc_url, {
                method: "POST",
                headers: new Headers({
                    Accept: "application/json",
                    "content-type": "application/x-www-form-urlencoded"
                }),
                body: "rq=" + encodeURIComponent(JSON.stringify(json_rpc_request))
            }).then(function (response) {
                return response.json();
            });

            get_transaction_history_promise.then(function (json_response) {
                if ("result" in json_response) {
                    _this2.setState({
                        current_status: "loaded",
                        withdrawals: json_response.result.withdrawals,
                        deposits: json_response.result.deposits,
                        error: null
                    });
                } else if ("error" in json_response && "message" in json_response.error) throw json_repsonse.error.message;else throw "Unexpected response";
            }).catch(function (error) {
                _this2.setState({
                    current_status: "error",
                    withdrawals: null,
                    deposits: null,
                    error: "Error getting transaction history: " + error
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.account) return null;

            var openledger_withdrawal_history_fragment = null;
            if (this.state.current_status === "loaded") {
                var openledger_withdrawal_history_rows = [];
                if (this.state.withdrawals.length) {
                    for (var i = 0; i < this.state.withdrawals.length; ++i) {
                        openledger_withdrawal_history_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.state.withdrawals[i].amount,
                                " ",
                                this.state.withdrawals[i].currency
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.state.withdrawals[i].status
                            )
                        ));
                    }openledger_withdrawal_history_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.withdraw_amount" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.status" })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            openledger_withdrawal_history_rows
                        )
                    );
                } else openledger_withdrawal_history_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    component: "p",
                    content: "openledger.withdraw_none"
                });
            }

            var openledger_deposit_history_fragment = null;
            if (this.state.current_status === "loaded") {
                if (this.state.deposits.length) {
                    var openledger_deposit_history_rows = [];
                    for (var i = 0; i < this.state.deposits.length; ++i) {
                        openledger_deposit_history_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.state.deposits[i].amount,
                                " ",
                                this.state.deposits[i].currency
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        href: this.state.deposits[i].link,
                                        rel: "noopener noreferrer",
                                        target: "_blank"
                                    },
                                    "link"
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.state.deposits[i].status
                            )
                        ));
                    }openledger_deposit_history_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.deposit_amount" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.deposit_details" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.status" })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            openledger_deposit_history_rows
                        )
                    );
                } else openledger_deposit_history_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    component: "p",
                    content: "openledger.deposit_none"
                });
            }

            var openledger_transaction_history_fragment = null;

            if (this.state.current_status === "error") openledger_transaction_history_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "content-block" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button outline",
                        onClick: this.onShowOpenLedgerTransactionHistory.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.retry" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    this.state.error
                )
            );else if (this.state.current_status === "loading") openledger_transaction_history_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "content-block" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button outline",
                        onClick: this.onShowOpenLedgerTransactionHistory.bind(this),
                        disabled: "true"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.show_transaction_history" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "p", content: "openledger.loading" })
            );else {
                var button_label = this.state.current_status === "never_loaded" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.show_transaction_history" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "openledger.refresh_transaction_history" });
                openledger_transaction_history_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        component: "h4",
                        content: "openledger.header_transaction_history"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.onShowOpenLedgerTransactionHistory.bind(this)
                        },
                        button_label
                    ),
                    openledger_withdrawal_history_fragment,
                    openledger_deposit_history_fragment
                );
            }

            return openledger_transaction_history_fragment;
        }
    }]);

    return OpenLedgerFiatTransactionHistory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // OpenLedgerFiatTransactionHistory

OpenLedgerFiatTransactionHistory.propTypes = {
    rpc_url: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount
};
/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(OpenLedgerFiatTransactionHistory));

/***/ }),

/***/ 2555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2550);
/* harmony import */ var _WithdrawModalBlocktrades__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2549);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1236);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(565);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1231);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(735);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(581);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(582);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(416);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1234);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var ButtonConversion = function (_React$Component) {
    _inherits(ButtonConversion, _React$Component);

    function ButtonConversion(props) {
        _classCallCheck(this, ButtonConversion);

        var _this = _possibleConstructorReturn(this, (ButtonConversion.__proto__ || Object.getPrototypeOf(ButtonConversion)).call(this, props));

        _this.state = {
            error: null,
            conversion_memo: null,

            // Fee estimation
            feeStatus: {}
        };

        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 150);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);
        _this._checkBalance = _this._checkBalance.bind(_this);
        return _this;
    }

    _createClass(ButtonConversion, [{
        key: "_getFeeID",
        value: function _getFeeID() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            var balance = this._getCurrentBalance(props);
            var balances = props.account.get("balances");
            var feeID = balances.has("1.3.0") ? "1.3.0" : balance ? balance.get("asset_type") : "1.3.0";
            return feeID;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.unMounted = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (!np.amount.equals(this.props.amount) || np.account_id !== this.props.account_id) {
                this._updateFee();
            }
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this2 = this;

            var feeID = this._getFeeID();
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_17__["getConversionJson"])(this.props).then(function (json) {
                Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkFeeStatusAsync"])({
                    accountID: _this2.props.account_id,
                    feeID: feeID,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: json.inputMemo
                    }
                }).then(function (_ref) {
                    var fee = _ref.fee,
                        hasBalance = _ref.hasBalance,
                        hasPoolBalance = _ref.hasPoolBalance;

                    if (_this2.unMounted) return;

                    _this2.setState({
                        feeAmount: fee,
                        hasBalance: hasBalance,
                        hasPoolBalance: hasPoolBalance,
                        error: !hasBalance || !hasPoolBalance
                    }, _this2._checkFeeStatus);
                });
            });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this3 = this;

            var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.account;

            if (!account) return;

            var assets = Object.keys(this.props.account.get("balances").toJS());
            if (!assets.length) assets = ["1.3.0"];
            var feeStatus = {};
            var p = [];
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_17__["getConversionJson"])(this.props).then(function (json) {
                assets.forEach(function (a) {
                    p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkFeeStatusAsync"])({
                        accountID: account.get("id"),
                        feeID: a,
                        options: ["price_per_kbyte"],
                        data: {
                            type: "memo",
                            content: json.inputMemo
                        }
                    }));
                });
                Promise.all(p).then(function (status) {
                    if (_this3.unMounted) return;

                    assets.forEach(function (a, idx) {
                        feeStatus[a] = status[idx];
                    });

                    if (!common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(_this3.state.feeStatus, feeStatus)) {
                        _this3.setState({
                            feeStatus: feeStatus
                        });
                    }
                    _this3._checkBalance();
                }).catch(function (err) {
                    console.error(err);
                });
            });
        }
    }, {
        key: "_getCurrentBalance",
        value: function _getCurrentBalance() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return props.balance;
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var feeAmount = this.state.feeAmount;
            var _props = this.props,
                asset = _props.asset,
                amount = _props.amount;

            var balance = this._getCurrentBalance();
            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkBalance"])(amount.getAmount({ real: true }), asset, feeAmount, balance);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
            return hasBalance;
        }
    }, {
        key: "onTrxIncluded",
        value: function onTrxIncluded(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                // this.setState(Transfer.getInitialState());
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].reset();
            } else if (confirm_store_state.closed) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].reset();
            }
        }
    }, {
        key: "onConvert",
        value: function onConvert() {
            var _this4 = this;

            var _props2 = this.props,
                input_coin_type = _props2.input_coin_type,
                output_coin_type = _props2.output_coin_type,
                amount = _props2.amount;
            var balanceError = this.state.balanceError;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_17__["getConversionJson"])(this.props).then(function (json) {
                if (json.inputCoinType != input_coin_type || json.outputCoinType != output_coin_type) {
                    throw new Error("unexpected reply from initiate-trade");
                }
                if (input_coin_type == json.inputCoinType && output_coin_type == json.outputCoinType && !balanceError) {
                    _this4.setState({ conversion_memo: json.inputMemo });
                    _this4.setState({ error: null });
                    // let precision = utils.get_asset_precision(this.props.asset.get("precision"));
                    // let amount = this.props.amount.replace( /,/g, "" );

                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_11__["default"].transfer(_this4.props.account_id, "1.2.32567", amount.getAmount(), _this4.props.asset.get("id"), json.inputMemo ? new Buffer(json.inputMemo, "utf-8") : "", null, _this4._getFeeID()).then(function () {
                        stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(_this4.onTrxIncluded);
                        stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].listen(_this4.onTrxIncluded);
                    }).catch(function (e) {
                        var msg = e.message ? e.message.split("\n")[1] : null;
                        console.log("error: ", e, msg);
                        _this4.setState({ error: msg });
                    });
                }
            }).catch(function () {
                _this4.setState({ conversion_memo: null });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var button_class = "button disabled";
            if (Object.keys(this.props.account_balances.toJS()).includes(this.props.asset.get("id"))) {
                if (!this.state.balanceError && this.state.hasBalance && this.props.amount.getAmount() > 0) {
                    button_class = "button";
                }
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "button",
                    {
                        className: button_class,
                        onClick: this.onConvert.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "" }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.convert_now" })
                ),
                this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { style: { paddingTop: 15 }, className: "has-error" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.insufficient" })
                ) : null
            );
        }
    }]);

    return ButtonConversion;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

ButtonConversion.propTypes = {
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject,
    input_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    account_name: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    account_id: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired
};


ButtonConversion = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(ButtonConversion);

var ButtonConversionContainer = function (_React$Component2) {
    _inherits(ButtonConversionContainer, _React$Component2);

    function ButtonConversionContainer() {
        _classCallCheck(this, ButtonConversionContainer);

        return _possibleConstructorReturn(this, (ButtonConversionContainer.__proto__ || Object.getPrototypeOf(ButtonConversionContainer)).apply(this, arguments));
    }

    _createClass(ButtonConversionContainer, [{
        key: "render",
        value: function render() {
            var conversion_button = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonConversion, {
                asset: this.props.asset,
                account: this.props.account,
                input_coin_type: this.props.input_coin_type,
                output_coin_type: this.props.output_coin_type,
                account_name: this.props.account_name,
                amount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                    real: this.props.amount,
                    asset_id: this.props.asset.get("id"),
                    precision: this.props.asset.get("precision")
                }),
                account_id: this.props.account_id,
                account_balances: this.props.account_balances,
                url: this.props.url,
                balance: this.props.account.get("balances").toJS()[this.props.asset.get("id")]
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                conversion_button
            );
        }
    }]);

    return ButtonConversionContainer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

ButtonConversionContainer.propTypes = {
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    input_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    account_name: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    account_id: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired
};


ButtonConversionContainer = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(ButtonConversionContainer);

var ButtonWithdraw = function (_React$Component3) {
    _inherits(ButtonWithdraw, _React$Component3);

    function ButtonWithdraw() {
        _classCallCheck(this, ButtonWithdraw);

        return _possibleConstructorReturn(this, (ButtonWithdraw.__proto__ || Object.getPrototypeOf(ButtonWithdraw)).apply(this, arguments));
    }

    _createClass(ButtonWithdraw, [{
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "withdraw_asset_" + this.props.gateway + "_bridge";
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6___default.a.publish(this.getWithdrawModalId(), "open");
        }
    }, {
        key: "render",
        value: function render() {
            var withdraw_modal_id = this.getWithdrawModalId();

            var button_class = "button disabled";
            if (Object.keys(this.props.account.get("balances").toJS()).includes(this.props.asset.get("id"))) {
                if (!(this.props.amount_to_withdraw.indexOf(" ") >= 0) && !isNaN(this.props.amount_to_withdraw) && this.props.amount_to_withdraw > 0 && this.props.amount_to_withdraw <= this.props.balance.toJS().balance / common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(this.props.asset.get("precision"))) {
                    button_class = "button";
                }
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "button",
                        {
                            className: button_class,
                            onClick: this.onWithdraw.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "" }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw_now" }),
                        " "
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_5__["default"],
                    { id: withdraw_modal_id, overlay: true },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WithdrawModalBlocktrades__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            key: "" + this.props.key,
                            account: this.props.account.get("name"),
                            issuer: this.props.issuer,
                            asset: this.props.asset.get("id"),
                            output_coin_name: this.props.output_coin_name,
                            output_coin_symbol: this.props.output_coin_symbol,
                            output_coin_type: this.props.output_coin_type,
                            output_supports_memos: this.props.output_supports_memos,
                            amount_to_withdraw: this.props.amount_to_withdraw,
                            modal_id: withdraw_modal_id,
                            url: this.props.url,
                            output_wallet_type: this.props.output_wallet_type,
                            balance: this.props.account.get("balances").toJS()[this.props.asset.get("id")]
                        })
                    )
                )
            );
        }
    }]);

    return ButtonWithdraw;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

ButtonWithdraw.propTypes = {
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject,
    url: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired
};


ButtonWithdraw = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(ButtonWithdraw);

var ButtonWithdrawContainer = function (_React$Component4) {
    _inherits(ButtonWithdrawContainer, _React$Component4);

    function ButtonWithdrawContainer() {
        _classCallCheck(this, ButtonWithdrawContainer);

        return _possibleConstructorReturn(this, (ButtonWithdrawContainer.__proto__ || Object.getPrototypeOf(ButtonWithdrawContainer)).apply(this, arguments));
    }

    _createClass(ButtonWithdrawContainer, [{
        key: "render",
        value: function render() {
            var withdraw_button = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWithdraw, {
                key: this.props.key,
                account: this.props.account,
                issuer: this.props.issuer,
                asset: this.props.asset,
                output_coin_name: this.props.output_coin_name,
                output_coin_symbol: this.props.output_coin_symbol,
                output_coin_type: this.props.output_coin_type,
                output_supports_memos: this.props.output_supports_memos,
                amount_to_withdraw: this.props.amount_to_withdraw,
                url: this.props.url,
                gateway: this.props.gateway,
                output_wallet_type: this.props.output_wallet_type,
                balance: this.props.account.get("balances").toJS()[this.props.asset.get("id")]
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                withdraw_button
            );
        }
    }]);

    return ButtonWithdrawContainer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

ButtonWithdrawContainer.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string.isRequired
};


ButtonWithdrawContainer = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(ButtonWithdrawContainer);

var BlockTradesBridgeDepositRequest = function (_React$Component5) {
    _inherits(BlockTradesBridgeDepositRequest, _React$Component5);

    function BlockTradesBridgeDepositRequest(props) {
        _classCallCheck(this, BlockTradesBridgeDepositRequest);

        var _this8 = _possibleConstructorReturn(this, (BlockTradesBridgeDepositRequest.__proto__ || Object.getPrototypeOf(BlockTradesBridgeDepositRequest)).call(this, props));

        _this8.refresh_interval = 2 * 60 * 1000; // update deposit limit/estimates every two minutes

        _this8.deposit_address_cache = new common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_9__["default"]();

        _this8.coin_info_request_states = {
            request_in_progress: 0,
            request_complete: 1,
            request_failed: 2
        };

        _this8.estimation_directions = {
            output_from_input: 0,
            input_from_output: 1
        };

        _this8.state = {
            coin_symbol: "btc",
            key_for_withdrawal_dialog: "btc",
            supports_output_memos: "",
            url: api_apiConfig__WEBPACK_IMPORTED_MODULE_13__["blockTradesAPIs"].BASE,
            error: null,

            // things that get displayed for deposits
            deposit_input_coin_type: null,
            deposit_output_coin_type: null,
            input_address_and_memo: null,
            deposit_estimated_input_amount: _this8.props.initial_deposit_estimated_input_amount || "1.0",
            deposit_estimated_output_amount: null,
            deposit_limit: null,
            deposit_error: null,
            failed_calculate_deposit: null,

            // things that get displayed for withdrawals
            withdraw_input_coin_type: null,
            withdraw_output_coin_type: null,
            withdraw_estimated_input_amount: _this8.props.initial_withdraw_estimated_input_amount || "1.0",
            withdraw_estimated_output_amount: null,
            withdraw_limit: null,
            withdraw_error: null,
            failed_calculate_withdraw: null,

            // things that get displayed for conversions
            conversion_input_coin_type: null,
            conversion_output_coin_type: null,
            conversion_estimated_input_amount: _this8.props.initial_conversion_estimated_input_amount || "1.0",
            conversion_estimated_output_amount: null,
            conversion_limit: null,
            conversion_error: null,
            failed_calculate_conversion: null,

            // input address-related
            coin_info_request_state: _this8.coin_info_request_states.request_in_progress,
            input_address_requests_in_progress: {},

            // estimate-related
            deposit_estimate_direction: _this8.estimation_directions.output_from_input,

            // deposit limit-related
            deposit_limit_cache: {},
            deposit_limit_requests_in_progress: {},

            // generic data from BlockTrades
            coins_by_type: null,
            allowed_mappings_for_deposit: null,
            allowed_mappings_for_withdraw: null,
            allowed_mappings_for_conversion: null,
            conversion_memo: null,

            // announcements data
            announcements: []
        };
        return _this8;
    }

    _createClass(BlockTradesBridgeDepositRequest, [{
        key: "urlConnection",
        value: function urlConnection(checkUrl, state_coin_info) {
            var _this9 = this;

            this.setState({
                url: checkUrl
            });

            var announcements_url = checkUrl + "/announcements/enabled/trade";
            var announcements_promise = fetch(announcements_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });

            Promise.resolve(announcements_promise).then(function (result) {
                result.sort(function (a, b) {
                    if (a.priority < b.priority) return -1;
                    if (a.priority > b.priority) return 1;
                    return 0;
                });

                _this9.setState({
                    announcements: result
                });
            }).catch(function (error) {
                _this9.setState({
                    announcements: []
                });
            });

            // get basic data from blocktrades
            var coin_types_url = checkUrl + "/coins";
            var coin_types_promise = fetch(coin_types_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });

            var wallet_types_url = checkUrl + "/wallets";
            var wallet_types_promise = fetch(wallet_types_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });

            var trading_pairs_url = checkUrl + "/trading-pairs";
            var trading_pairs_promise = fetch(trading_pairs_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });

            var active_wallets_url = checkUrl + "/active-wallets";
            var active_wallets_promise = fetch(active_wallets_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });

            Promise.all([coin_types_promise, wallet_types_promise, trading_pairs_promise, active_wallets_promise]).then(function (json_responses) {
                var _json_responses = _slicedToArray(json_responses, 4),
                    coin_types = _json_responses[0],
                    wallet_types_reply = _json_responses[1],
                    trading_pairs = _json_responses[2],
                    active_wallets = _json_responses[3];

                // get quick access to coins by their types


                var coins_by_type = {};
                coin_types.forEach(function (coin_type) {
                    return coins_by_type[coin_type.coinType] = coin_type;
                });

                // determine which mappings we will display for deposits and withdrawals
                var allowed_mappings_for_deposit = {}; // all non-bts to bts
                var allowed_mappings_for_withdraw = {}; // all bts to non-bts
                var allowed_mappings_for_conversion = {}; // all bts to bts
                trading_pairs.forEach(function (pair) {
                    var input_coin_info = coins_by_type[pair.inputCoinType];
                    var output_coin_info = coins_by_type[pair.outputCoinType];

                    // filter out pairs where one asset is a backed asset and the other is a backing asset,
                    // those pairs rightly belong under the gateway section, not under the bridge section.
                    if (input_coin_info.backingCoinType != pair.outputCoinType && output_coin_info.backingCoinType != pair.inputCoinType && input_coin_info.restricted == false && output_coin_info.restricted == false) {
                        // filter out mappings where one of the wallets is offline
                        if (active_wallets.indexOf(input_coin_info.walletType) != -1 && active_wallets.indexOf(output_coin_info.walletType) != -1) {
                            if (input_coin_info.walletType != "bitshares2" && output_coin_info.walletType == "bitshares2") {
                                allowed_mappings_for_deposit[pair.inputCoinType] = allowed_mappings_for_deposit[pair.inputCoinType] || [];
                                allowed_mappings_for_deposit[pair.inputCoinType].push(pair.outputCoinType);
                            } else if (input_coin_info.walletType == "bitshares2" && output_coin_info.walletType != "bitshares2") {
                                allowed_mappings_for_withdraw[pair.inputCoinType] = allowed_mappings_for_withdraw[pair.inputCoinType] || [];
                                allowed_mappings_for_withdraw[pair.inputCoinType].push(pair.outputCoinType);
                            } else if (input_coin_info.walletType == "bitshares2" && output_coin_info.walletType == "bitshares2") {
                                allowed_mappings_for_conversion[pair.inputCoinType] = allowed_mappings_for_conversion[pair.inputCoinType] || [];
                                allowed_mappings_for_conversion[pair.inputCoinType].push(pair.outputCoinType);
                            }
                        }
                    }
                });

                // we can now set the input and output coin types
                var deposit_input_coin_type = null;
                var deposit_output_coin_type = null;
                var allowed_deposit_coin_types = Object.keys(allowed_mappings_for_deposit);
                allowed_deposit_coin_types.forEach(function (deposit_coin_type) {
                    allowed_mappings_for_deposit[deposit_coin_type].sort();
                });

                if (allowed_deposit_coin_types.length) {
                    if (_this9.props.initial_deposit_input_coin_type && _this9.props.initial_deposit_input_coin_type in allowed_mappings_for_deposit) deposit_input_coin_type = _this9.props.initial_deposit_input_coin_type;else deposit_input_coin_type = allowed_deposit_coin_types[0];
                    var output_coin_types_for_this_input = allowed_mappings_for_deposit[deposit_input_coin_type];
                    if (_this9.props.initial_deposit_output_coin_type && output_coin_types_for_this_input.indexOf(_this9.props.initial_deposit_output_coin_type) != -1) deposit_output_coin_type = _this9.props.initial_deposit_output_coin_type;else deposit_output_coin_type = output_coin_types_for_this_input[0];
                }

                var withdraw_input_coin_type = null;
                var withdraw_output_coin_type = null;
                var conversion_input_coin_type = null;
                var conversion_output_coin_type = null;
                var allowed_withdraw_coin_types = Object.keys(allowed_mappings_for_withdraw);
                allowed_withdraw_coin_types.forEach(function (withdraw_coin_type) {
                    allowed_mappings_for_withdraw[withdraw_coin_type].sort();
                });

                if (allowed_withdraw_coin_types.length) {
                    if (_this9.props.initial_withdraw_input_coin_type && _this9.props.initial_withdraw_input_coin_type in allowed_mappings_for_withdraw) withdraw_input_coin_type = _this9.props.initial_withdraw_input_coin_type;else withdraw_input_coin_type = allowed_withdraw_coin_types[0];
                    var _output_coin_types_for_this_input = allowed_mappings_for_withdraw[withdraw_input_coin_type];
                    if (_this9.props.initial_withdraw_output_coin_type && _output_coin_types_for_this_input.indexOf(_this9.props.initial_withdraw_output_coin_type) != -1) withdraw_output_coin_type = _this9.props.initial_withdraw_output_coin_type;else withdraw_output_coin_type = _output_coin_types_for_this_input[0];
                }

                var allowed_conversion_coin_types = Object.keys(allowed_mappings_for_conversion);
                allowed_conversion_coin_types.forEach(function (conversion_coin_type) {
                    allowed_mappings_for_conversion[conversion_coin_type].sort();
                });

                if (allowed_conversion_coin_types.length) {
                    if (_this9.props.initial_conversion_input_coin_type && _this9.props.initial_conversion_input_coin_type in allowed_mappings_for_conversion) conversion_input_coin_type = _this9.props.initial_conversion_input_coin_type;else conversion_input_coin_type = allowed_conversion_coin_types[0];
                    var _output_coin_types_for_this_input2 = allowed_mappings_for_conversion[conversion_input_coin_type];
                    if (_this9.props.initial_conversion_output_coin_type && _output_coin_types_for_this_input2.indexOf(_this9.props.initial_conversion_output_coin_type) != -1) conversion_output_coin_type = _this9.props.initial_conversion_output_coin_type;else conversion_output_coin_type = _output_coin_types_for_this_input2[0];
                }

                var input_address_and_memo = _this9.getCachedOrGeneratedInputAddress(deposit_input_coin_type, deposit_output_coin_type);

                var deposit_limit = _this9.getCachedOrFreshDepositLimit("deposit", deposit_input_coin_type, deposit_output_coin_type);
                var deposit_estimated_output_amount = _this9.getAndUpdateOutputEstimate("deposit", deposit_input_coin_type, deposit_output_coin_type, _this9.state.deposit_estimated_input_amount);

                var withdraw_estimated_output_amount = _this9.getAndUpdateOutputEstimate("withdraw", withdraw_input_coin_type, withdraw_output_coin_type, _this9.state.withdraw_estimated_input_amount);
                var withdraw_limit = _this9.getCachedOrFreshDepositLimit("withdraw", withdraw_input_coin_type, withdraw_output_coin_type);

                var conversion_estimated_output_amount = _this9.getAndUpdateOutputEstimate("conversion", conversion_input_coin_type, conversion_output_coin_type, _this9.state.conversion_estimated_input_amount);
                var conversion_limit = _this9.getCachedOrFreshDepositLimit("conversion", conversion_input_coin_type, conversion_output_coin_type);

                if (_this9.unMounted) return;

                _this9.setState({
                    coin_info_request_state: _this9.coin_info_request_states.request_complete,
                    coins_by_type: coins_by_type,
                    allowed_mappings_for_deposit: allowed_mappings_for_deposit,
                    allowed_mappings_for_withdraw: allowed_mappings_for_withdraw,
                    allowed_mappings_for_conversion: allowed_mappings_for_conversion,
                    deposit_input_coin_type: deposit_input_coin_type,
                    deposit_output_coin_type: deposit_output_coin_type,
                    input_address_and_memo: input_address_and_memo,
                    deposit_limit: deposit_limit,
                    deposit_estimated_output_amount: deposit_estimated_output_amount,
                    deposit_estimate_direction: _this9.estimation_directions.output_from_input,
                    withdraw_input_coin_type: withdraw_input_coin_type,
                    withdraw_output_coin_type: withdraw_output_coin_type,
                    withdraw_limit: withdraw_limit,
                    withdraw_estimated_output_amount: withdraw_estimated_output_amount,
                    conversion_input_coin_type: conversion_input_coin_type,
                    conversion_output_coin_type: conversion_output_coin_type,
                    conversion_limit: conversion_limit,
                    conversion_estimated_output_amount: conversion_estimated_output_amount,
                    withdraw_estimate_direction: _this9.estimation_directions.output_from_input,
                    conversion_estimate_direction: _this9.estimation_directions.output_from_input,
                    supports_output_memos: coins_by_type["btc"].supportsOutputMemos
                });
            }).catch(function (error) {
                _this9.setState({
                    coin_info_request_state: state_coin_info,
                    coins_by_type: null,
                    allowed_mappings_for_deposit: null,
                    allowed_mappings_for_withdraw: null,
                    allowed_mappings_for_conversion: null
                });
            });
        }

        // functions for periodically updating our deposit limit and estimates

    }, {
        key: "updateEstimates",
        value: function updateEstimates() {
            if (this.state.deposit_input_coin_type && this.state.deposit_output_coin_type) {
                // input address won't usually need refreshing unless there was an error
                // generating it last time around
                var new_input_address_and_memo = this.getCachedOrGeneratedInputAddress(this.state.deposit_input_coin_type, this.state.deposit_output_coin_type);

                var new_deposit_limit = this.getCachedOrFreshDepositLimit("deposit", this.state.deposit_input_coin_type, this.state.deposit_output_coin_type);
                var new_deposit_estimated_input_amount = this.state.deposit_estimated_input_amount;
                var new_deposit_estimated_output_amount = this.state.deposit_estimated_output_amount;

                if (this.state.deposit_estimate_direction == this.estimation_directions.output_from_input) new_deposit_estimated_output_amount = this.getAndUpdateOutputEstimate("deposit", this.state.deposit_input_coin_type, this.state.deposit_output_coin_type, new_deposit_estimated_input_amount);else new_deposit_estimated_input_amount = this.getAndUpdateInputEstimate("deposit", this.state.deposit_input_coin_type, this.state.deposit_output_coin_type, new_deposit_estimated_output_amount);

                var new_withdraw_limit = this.getCachedOrFreshDepositLimit("withdraw", this.state.withdraw_input_coin_type, this.state.withdraw_output_coin_type);
                var new_withdraw_estimated_input_amount = this.state.withdraw_estimated_input_amount;
                var new_withdraw_estimated_output_amount = this.state.withdraw_estimated_output_amount;

                if (this.state.withdraw_estimate_direction == this.estimation_directions.output_from_input) new_withdraw_estimated_output_amount = this.getAndUpdateOutputEstimate("withdraw", this.state.withdraw_input_coin_type, this.state.withdraw_output_coin_type, new_withdraw_estimated_input_amount);else new_withdraw_estimated_input_amount = this.getAndUpdateinputEstimate("withdraw", this.state.withdraw_input_coin_type, this.state.withdraw_output_coin_type, new_withdraw_estimated_output_amount);

                var new_conversion_limit = this.getCachedOrFreshDepositLimit("conversion", this.state.conversion_input_coin_type, this.state.conversion_output_coin_type);
                var new_conversion_estimated_input_amount = this.state.conversion_estimated_input_amount;
                var new_conversion_estimated_output_amount = this.state.conversion_estimated_output_amount;

                if (this.state.conversion_estimate_direction == this.estimation_directions.output_from_input) new_conversion_estimated_output_amount = this.getAndUpdateOutputEstimate("conversion", this.state.conversion_input_coin_type, this.state.conversion_output_coin_type, new_conversion_estimated_input_amount);else new_conversion_estimated_input_amount = this.getAndUpdateinputEstimate("conversion", this.state.conversion_input_coin_type, this.state.conversion_output_coin_type, new_conversion_estimated_output_amount);

                this.setState({
                    input_address_and_memo: new_input_address_and_memo,
                    deposit_limit: new_deposit_limit,
                    deposit_estimated_input_amount: new_deposit_estimated_input_amount,
                    deposit_estimated_output_amount: new_deposit_estimated_output_amount,
                    withdraw_limit: new_withdraw_limit,
                    withdraw_estimated_input_amount: new_withdraw_estimated_input_amount,
                    withdraw_estimated_output_amount: new_withdraw_estimated_output_amount,
                    conversion_limit: new_conversion_limit,
                    conversion_estimated_input_amount: new_conversion_estimated_input_amount,
                    conversion_estimated_output_amount: new_conversion_estimated_output_amount,
                    key_for_withdrawal_dialog: new_withdraw_estimated_input_amount
                });
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this10 = this;

            // check api.blocktrades.us/v2
            var checkUrl = this.state.url;
            this.urlConnection(checkUrl, 0);
            var coin_types_promisecheck = fetch(checkUrl + "/coins", {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });
            var trading_pairs_promisecheck = fetch(checkUrl + "/trading-pairs", {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });
            var active_wallets_promisecheck = fetch(checkUrl + "/active-wallets", {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });
            Promise.all([coin_types_promisecheck, trading_pairs_promisecheck, active_wallets_promisecheck]).then(function (json_responses) {
                var _json_responses2 = _slicedToArray(json_responses, 3),
                    coin_types = _json_responses2[0],
                    trading_pairs = _json_responses2[1],
                    active_wallets = _json_responses2[2];

                var coins_by_type = {};
                coin_types.forEach(function (coin_type) {
                    return coins_by_type[coin_type.coinType] = coin_type;
                });
                trading_pairs.forEach(function (pair) {
                    var input_coin_info = coins_by_type[pair.inputCoinType];
                    var output_coin_info = coins_by_type[pair.outputCoinType];
                    if (input_coin_info.backingCoinType != pair.outputCoinType && output_coin_info.backingCoinType != pair.inputCoinType) {
                        if (active_wallets.indexOf(input_coin_info.walletType) != -1 && active_wallets.indexOf(output_coin_info.walletType) != -1) {}
                    }
                });
            }).catch(function (error) {
                _this10.urlConnection("https://api.blocktrades.info/v2", 2);
                _this10.setState({
                    coin_info_request_state: 0,
                    coins_by_type: null,
                    allowed_mappings_for_deposit: null,
                    allowed_mappings_for_withdraw: null,
                    allowed_mappings_for_conversion: null
                });
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.update_timer = setInterval(this.updateEstimates.bind(this), this.refresh_interval);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.update_timer);
            this.unMounted = true;
        }

        // functions for managing input addresses

    }, {
        key: "getCachedInputAddress",
        value: function getCachedInputAddress(input_coin_type, output_coin_type, memo) {
            var account_name = this.props.account.get("name");
            return this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, input_coin_type, output_coin_type);
        }
    }, {
        key: "cacheInputAddress",
        value: function cacheInputAddress(input_coin_type, output_coin_type, address, memo) {
            var account_name = this.props.account.get("name");
            this.deposit_address_cache.cacheInputAddress(this.props.gateway, account_name, input_coin_type, output_coin_type, address, memo);
        }
    }, {
        key: "getCachedOrGeneratedInputAddress",
        value: function getCachedOrGeneratedInputAddress(input_coin_type, output_coin_type) {
            var _this11 = this;

            // if we already have an address, just return it
            var cached_input_address_and_memo = this.getCachedInputAddress(input_coin_type, output_coin_type);
            if (cached_input_address_and_memo) return cached_input_address_and_memo;

            // if we've already asked for this address, return null, it will trigger a refresh when it completes
            this.state.input_address_requests_in_progress[input_coin_type] = this.state.input_address_requests_in_progress[input_coin_type] || {};
            if (this.state.input_address_requests_in_progress[input_coin_type][output_coin_type]) return null;

            // else, no active request for this mapping, kick one off
            var body = JSON.stringify({
                inputCoinType: input_coin_type,
                outputCoinType: output_coin_type,
                outputAddress: this.props.account.get("name")
            });

            this.state.input_address_requests_in_progress[input_coin_type][output_coin_type] = true;

            fetch(this.state.url + "/simple-api/initiate-trade", {
                method: "post",
                headers: new Headers({
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }),
                body: body
            }).then(function (reply) {
                reply.json().then(function (json) {
                    console.assert(json.inputCoinType == input_coin_type, "unexpected reply from initiate-trade");
                    console.assert(json.outputCoinType == output_coin_type, "unexpected reply from initiate-trade");
                    if (json.inputCoinType != input_coin_type || json.outputCoinType != output_coin_type) throw Error("unexpected reply from initiate-trade");
                    _this11.cacheInputAddress(json.inputCoinType, json.outputCoinType, json.inputAddress, json.inputMemo);
                    delete _this11.state.input_address_requests_in_progress[input_coin_type][output_coin_type];
                    if (_this11.state.deposit_input_coin_type == json.inputCoinType && _this11.state.deposit_output_coin_type == json.outputCoinType) _this11.setState({
                        input_address_and_memo: {
                            address: json.inputAddress,
                            memo: json.inputMemo
                        }
                    });
                }, function (error) {
                    delete _this11.state.input_address_requests_in_progress[input_coin_type][output_coin_type];
                    if (_this11.state.deposit_input_coin_type == input_coin_type && _this11.state.deposit_output_coin_type == output_coin_type) _this11.setState({
                        input_address_and_memo: {
                            address: "error generating address",
                            memo: null
                        }
                    });
                });
            }, function (error) {
                delete _this11.state.input_address_requests_in_progress[input_coin_type][output_coin_type];
                if (_this11.state.deposit_input_coin_type == input_coin_type && _this11.state.deposit_output_coin_type == output_coin_type) _this11.setState({
                    input_address_and_memo: {
                        address: "error generating address",
                        memo: null
                    }
                });
            });
            return null;
        }

        // functions for managing deposit limits

    }, {
        key: "getCachedDepositLimit",
        value: function getCachedDepositLimit(input_coin_type, output_coin_type) {
            this.state.deposit_limit_cache[input_coin_type] = this.state.deposit_limit_cache[input_coin_type] || {};
            if (this.state.deposit_limit_cache[input_coin_type][output_coin_type]) {
                var deposit_limit_record = this.state.deposit_limit_cache[input_coin_type][output_coin_type];
                var cache_age = new Date() - deposit_limit_record.timestamp;
                if (cache_age < this.refresh_interval) return deposit_limit_record;
                delete this.state.deposit_limit_cache[input_coin_type][output_coin_type];
            }
            return null;
        }
    }, {
        key: "cacheDepositLimit",
        value: function cacheDepositLimit(input_coin_type, output_coin_type, deposit_limit_record) {
            deposit_limit_record.timestamp = new Date();
            this.state.deposit_limit_cache[input_coin_type] = this.state.deposit_limit_cache[input_coin_type] || {};
            this.state.deposit_limit_cache[input_coin_type][output_coin_type] = deposit_limit_record;
        }
    }, {
        key: "getCachedOrFreshDepositLimit",
        value: function getCachedOrFreshDepositLimit(deposit_withdraw_or_convert, input_coin_type, output_coin_type) {
            var _this12 = this;

            var deposit_limit_record = this.getCachedDepositLimit(input_coin_type, output_coin_type);
            if (deposit_limit_record) return deposit_limit_record;

            this.state.deposit_limit_requests_in_progress[input_coin_type] = this.state.input_address_requests_in_progress[input_coin_type] || {};
            this.state.deposit_limit_requests_in_progress[input_coin_type][output_coin_type] = true;

            var deposit_limit_url = this.state.url + "/deposit-limits?inputCoinType=" + encodeURIComponent(input_coin_type) + "&outputCoinType=" + encodeURIComponent(output_coin_type);
            var deposit_limit_promise = fetch(deposit_limit_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });
            deposit_limit_promise.then(function (reply) {
                if (_this12.unMounted) return;
                console.assert(reply.inputCoinType == input_coin_type && reply.outputCoinType == output_coin_type, "unexpected reply from deposit-limits");
                if (reply.inputCoinType != input_coin_type || reply.outputCoinType != output_coin_type) throw Error("unexpected reply from deposit-limits");
                var new_deposit_limit_record = {
                    timestamp: new Date(),
                    limit: reply.depositLimit
                };
                _this12.cacheDepositLimit(input_coin_type, output_coin_type, new_deposit_limit_record);
                delete _this12.state.deposit_limit_requests_in_progress[input_coin_type][output_coin_type];
                if (_this12.state[deposit_withdraw_or_convert + "_input_coin_type"] == input_coin_type && _this12.state[deposit_withdraw_or_convert + "_output_coin_type"] == output_coin_type) _this12.setState(_defineProperty({}, deposit_withdraw_or_convert + "_limit", new_deposit_limit_record));
            }, function (error) {
                delete _this12.state.deposit_limit_requests_in_progress[input_coin_type][output_coin_type];
            });
            return null;
        }
    }, {
        key: "getAndUpdateOutputEstimate",
        value: function getAndUpdateOutputEstimate(deposit_withdraw_or_convert, input_coin_type, output_coin_type, input_amount) {
            var _this13 = this;

            if (this.unMounted) return;
            if (deposit_withdraw_or_convert == "deposit") {
                this.setState({ failed_calculate_deposit: null });
            }
            if (deposit_withdraw_or_convert == "withdraw") {
                this.setState({ failed_calculate_withdraw: null });
            }
            if (deposit_withdraw_or_convert == "conversion") {
                this.setState({ failed_calculate_conversion: null });
            }

            var estimate_output_url = this.state.url + "/estimate-output-amount?inputAmount=" + encodeURIComponent(input_amount) + "&inputCoinType=" + encodeURIComponent(input_coin_type) + "&outputCoinType=" + encodeURIComponent(output_coin_type);
            var estimate_output_promise = fetch(estimate_output_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });
            estimate_output_promise.then(function (reply) {
                if (_this13.unMounted) return;
                // console.log("Reply: ", reply);
                if (reply.error) {
                    if (_this13.state[deposit_withdraw_or_convert + "_input_coin_type"] == input_coin_type && _this13.state[deposit_withdraw_or_convert + "_output_coin_type"] == output_coin_type && _this13.state[deposit_withdraw_or_convert + "_estimated_input_amount"] == input_amount && _this13.state[deposit_withdraw_or_convert + "_estimate_direction"] == _this13.estimation_directions.output_from_input) {
                        var user_message = reply.error.message;

                        if (deposit_withdraw_or_convert == "deposit") {
                            _this13.setState({
                                failed_calculate_deposit: "Failed to calculate"
                            });
                        }
                        if (deposit_withdraw_or_convert == "withdraw") {
                            _this13.setState({
                                failed_calculate_withdraw: "Failed to calculate"
                            });
                        }
                        if (deposit_withdraw_or_convert == "conversion") {
                            _this13.setState({
                                failed_calculate_conversion: "Failed to calculate"
                            });
                        }

                        var expected_prefix = "Internal Server Error: ";
                        if (user_message.startsWith(expected_prefix)) user_message = user_message.substr(expected_prefix.length);

                        _this13.setState(_defineProperty({}, deposit_withdraw_or_convert + "_error", user_message));
                    }
                } else {
                    var _this13$setState2;

                    console.assert(reply.inputCoinType == input_coin_type && reply.outputCoinType == output_coin_type && reply.inputAmount == input_amount, "unexpected reply from estimate-output-amount");
                    if (reply.inputCoinType != input_coin_type || reply.outputCoinType != output_coin_type || reply.inputAmount != input_amount) throw Error("unexpected reply from estimate-output-amount");
                    if (_this13.state[deposit_withdraw_or_convert + "_input_coin_type"] == input_coin_type && _this13.state[deposit_withdraw_or_convert + "_output_coin_type"] == output_coin_type && _this13.state[deposit_withdraw_or_convert + "_estimated_input_amount"] == input_amount && _this13.state[deposit_withdraw_or_convert + "_estimate_direction"] == _this13.estimation_directions.output_from_input) _this13.setState((_this13$setState2 = {}, _defineProperty(_this13$setState2, deposit_withdraw_or_convert + "_estimated_output_amount", reply.outputAmount), _defineProperty(_this13$setState2, deposit_withdraw_or_convert + "_error", null), _this13$setState2));
                }
            }, function (error) {});

            return null;
        }
    }, {
        key: "getAndUpdateInputEstimate",
        value: function getAndUpdateInputEstimate(deposit_withdraw_or_convert, input_coin_type, output_coin_type, output_amount) {
            var _this14 = this;

            if (this.unMounted) return;
            if (deposit_withdraw_or_convert == "deposit") {
                this.setState({ failed_calculate_deposit: null });
            }
            if (deposit_withdraw_or_convert == "withdraw") {
                this.setState({ failed_calculate_withdraw: null });
            }
            if (deposit_withdraw_or_convert == "conversion") {
                this.setState({ failed_calculate_conversion: null });
            }

            var estimate_input_url = this.state.url + "/estimate-input-amount?outputAmount=" + encodeURIComponent(output_amount) + "&inputCoinType=" + encodeURIComponent(input_coin_type) + "&outputCoinType=" + encodeURIComponent(output_coin_type);
            var estimate_input_promise = fetch(estimate_input_url, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (response) {
                return response.json();
            });
            estimate_input_promise.then(function (reply) {
                var _this14$setState;

                if (_this14.unMounted) return;

                console.assert(reply.inputCoinType == input_coin_type && reply.outputCoinType == output_coin_type && reply.outputAmount == output_amount, "unexpected reply from estimate-input-amount");
                if (reply.inputCoinType != input_coin_type || reply.outputCoinType != output_coin_type || reply.outputAmount != output_amount) {
                    if (deposit_withdraw_or_convert == "deposit") {
                        _this14.setState({
                            failed_calculate_deposit: "Failed to calculate"
                        });
                    }
                    if (deposit_withdraw_or_convert == "withdraw") {
                        _this14.setState({
                            failed_calculate_withdraw: "Failed to calculate"
                        });
                    }
                    if (deposit_withdraw_or_convert == "conversion") {
                        _this14.setState({
                            failed_calculate_conversion: "Failed to calculate"
                        });
                    }
                }

                if (_this14.state[deposit_withdraw_or_convert + "_input_coin_type"] == input_coin_type && _this14.state[deposit_withdraw_or_convert + "_output_coin_type"] == output_coin_type && _this14.state[deposit_withdraw_or_convert + "_estimated_output_amount"] == output_amount && _this14.state[deposit_withdraw_or_convert + "_estimate_direction"] == _this14.estimation_directions.input_from_output) _this14.setState((_this14$setState = {}, _defineProperty(_this14$setState, deposit_withdraw_or_convert + "_estimated_input_amount", reply.inputAmount), _defineProperty(_this14$setState, "key_for_withdrawal_dialog", reply.inputAmount), _this14$setState));
            }, function (error) {});

            return null;
        }
    }, {
        key: "onInputAmountChanged",
        value: function onInputAmountChanged(deposit_withdraw_or_convert, event) {
            var _setState;

            var new_estimated_input_amount = event.target.value;
            if (new_estimated_input_amount == "") {
                new_estimated_input_amount = "0";
            }

            var new_estimated_output_amount = this.getAndUpdateOutputEstimate(deposit_withdraw_or_convert, this.state[deposit_withdraw_or_convert + "_input_coin_type"], this.state[deposit_withdraw_or_convert + "_output_coin_type"], new_estimated_input_amount);

            this.setState((_setState = {}, _defineProperty(_setState, deposit_withdraw_or_convert + "_estimated_input_amount", new_estimated_input_amount), _defineProperty(_setState, deposit_withdraw_or_convert + "_estimated_output_amount", new_estimated_output_amount), _defineProperty(_setState, deposit_withdraw_or_convert + "_estimate_direction", this.estimation_directions.output_from_input), _defineProperty(_setState, "key_for_withdrawal_dialog", new_estimated_input_amount), _setState));
        }
    }, {
        key: "onOutputAmountChanged",
        value: function onOutputAmountChanged(deposit_withdraw_or_convert, event) {
            var _setState2;

            var new_estimated_output_amount = event.target.value;
            if (new_estimated_output_amount == "") {
                new_estimated_output_amount = "0";
            }

            var new_estimated_input_amount = this.getAndUpdateInputEstimate(deposit_withdraw_or_convert, this.state[deposit_withdraw_or_convert + "_input_coin_type"], this.state[deposit_withdraw_or_convert + "_output_coin_type"], new_estimated_output_amount);

            this.setState((_setState2 = {}, _defineProperty(_setState2, deposit_withdraw_or_convert + "_estimated_output_amount", new_estimated_output_amount), _defineProperty(_setState2, deposit_withdraw_or_convert + "_estimated_input_amount", new_estimated_input_amount), _defineProperty(_setState2, deposit_withdraw_or_convert + "_estimate_direction", this.estimation_directions.input_from_output), _setState2));
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "withdraw_asset_" + this.props.gateway + "_bridge";
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_6___default.a.publish(this.getWithdrawModalId(), "open");
        }
    }, {
        key: "onInputCoinTypeChanged",
        value: function onInputCoinTypeChanged(deposit_withdraw_or_convert, event) {
            var _this15 = this,
                _setState3;

            var estimated_input_output_amount = null;
            var estimated_input_output_amount_state = "_estimated_output_amount";
            var new_input_coin_type = event.target.value;
            var possible_output_coin_types = this.state["allowed_mappings_for_" + deposit_withdraw_or_convert][new_input_coin_type];
            var new_output_coin_type = possible_output_coin_types[0];
            if (possible_output_coin_types.indexOf(this.state[deposit_withdraw_or_convert + "_output_coin_type"]) != -1) new_output_coin_type = this.state[deposit_withdraw_or_convert + "_output_coin_type"];

            var new_input_address_and_memo = this.state.input_address_and_memo;
            if (deposit_withdraw_or_convert == "deposit") new_input_address_and_memo = this.getCachedOrGeneratedInputAddress(new_input_coin_type, new_output_coin_type);
            var new_deposit_limit = this.getCachedOrFreshDepositLimit(deposit_withdraw_or_convert, new_input_coin_type, new_output_coin_type);

            if (!this.state[deposit_withdraw_or_convert + "_estimated_input_amount"]) {
                estimated_input_output_amount = this.getAndUpdateInputEstimate(deposit_withdraw_or_convert, new_input_coin_type, new_output_coin_type, this.state[deposit_withdraw_or_convert + "_estimated_output_amount"]);
                estimated_input_output_amount_state = "_estimated_input_amount";
            } else {
                estimated_input_output_amount = this.getAndUpdateOutputEstimate(deposit_withdraw_or_convert, new_input_coin_type, new_output_coin_type, this.state[deposit_withdraw_or_convert + "_estimated_input_amount"]);
            }

            if (deposit_withdraw_or_convert == "withdraw") {
                possible_output_coin_types.forEach(function (allowed_withdraw_output_coin_type) {
                    if (new_output_coin_type === allowed_withdraw_output_coin_type) {
                        _this15.setState({
                            coin_symbol: new_input_coin_type + "input",
                            supports_output_memos: _this15.state.coins_by_type[allowed_withdraw_output_coin_type].supportsOutputMemos
                        });
                    }
                });
            }

            this.setState((_setState3 = {}, _defineProperty(_setState3, deposit_withdraw_or_convert + "_input_coin_type", new_input_coin_type), _defineProperty(_setState3, deposit_withdraw_or_convert + "_output_coin_type", new_output_coin_type), _defineProperty(_setState3, "input_address_and_memo", new_input_address_and_memo), _defineProperty(_setState3, deposit_withdraw_or_convert + "_limit", new_deposit_limit), _defineProperty(_setState3, deposit_withdraw_or_convert + estimated_input_output_amount_state, estimated_input_output_amount), _defineProperty(_setState3, deposit_withdraw_or_convert + "_estimate_direction", this.estimation_directions.output_from_input), _setState3));
        }
    }, {
        key: "onOutputCoinTypeChanged",
        value: function onOutputCoinTypeChanged(deposit_withdraw_or_convert, event) {
            var _this16 = this,
                _setState4;

            var estimated_input_output_amount = null;
            var estimated_input_output_amount_state = "_estimated_output_amount";
            var new_output_coin_type = event.target.value;
            var withdraw_output_coin_types = this.state.allowed_mappings_for_withdraw[this.state.withdraw_input_coin_type];

            if (deposit_withdraw_or_convert == "withdraw") {
                withdraw_output_coin_types.forEach(function (allowed_withdraw_output_coin_type) {
                    if (new_output_coin_type === allowed_withdraw_output_coin_type) {
                        _this16.setState({
                            coin_symbol: new_output_coin_type + "output",
                            supports_output_memos: _this16.state.coins_by_type[allowed_withdraw_output_coin_type].supportsOutputMemos,
                            key_for_withdrawal_dialog: new_output_coin_type
                        });
                    }
                });
            }

            var new_input_address_and_memo = this.state.input_address_and_memo;
            if (deposit_withdraw_or_convert == "deposit") new_input_address_and_memo = this.getCachedOrGeneratedInputAddress(this.state[deposit_withdraw_or_convert + "_input_coin_type"], new_output_coin_type);
            var new_deposit_limit = this.getCachedOrFreshDepositLimit(deposit_withdraw_or_convert, this.state[deposit_withdraw_or_convert + "_input_coin_type"], new_output_coin_type);

            if (!this.state[deposit_withdraw_or_convert + "_estimated_input_amount"]) {
                estimated_input_output_amount = this.getAndUpdateInputEstimate(deposit_withdraw_or_convert, this.state[deposit_withdraw_or_convert + "_input_coin_type"], new_output_coin_type, this.state[deposit_withdraw_or_convert + "_estimated_output_amount"]);
                estimated_input_output_amount_state = "_estimated_input_amount";
            } else {
                estimated_input_output_amount = this.getAndUpdateOutputEstimate(deposit_withdraw_or_convert, this.state[deposit_withdraw_or_convert + "_input_coin_type"], new_output_coin_type, this.state[deposit_withdraw_or_convert + "_estimated_input_amount"]);
            }

            this.setState((_setState4 = {}, _defineProperty(_setState4, deposit_withdraw_or_convert + "_output_coin_type", new_output_coin_type), _defineProperty(_setState4, "input_address_and_memo", new_input_address_and_memo), _defineProperty(_setState4, deposit_withdraw_or_convert + "_limit", new_deposit_limit), _defineProperty(_setState4, deposit_withdraw_or_convert + estimated_input_output_amount_state, estimated_input_output_amount), _defineProperty(_setState4, deposit_withdraw_or_convert + "_estimate_direction", this.estimation_directions.output_from_input), _setState4));
        }
    }, {
        key: "render",
        value: function render() {
            var _this17 = this;

            if (!this.props.account || !this.props.issuer_account || !this.props.gateway) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

            var announcements = void 0,
                deposit_body = void 0,
                deposit_header = void 0,
                withdraw_body = void 0,
                withdraw_header = void 0,
                conversion_body = void 0,
                conversion_header = void 0,
                withdraw_modal_id = void 0,
                conversion_modal_id = void 0;

            if (this.state.coin_info_request_state == this.coin_info_request_states.request_failed) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        null,
                        "Error connecting to blocktrades.us, please try again later"
                    )
                );
            } else if (this.state.coin_info_request_state == this.coin_info_request_states.never_requested || this.state.coin_info_request_state == this.coin_info_request_states.request_in_progress) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        null,
                        "Retrieving current trade data from blocktrades.us"
                    )
                );
            } else {
                // depending on what wallets are online, we might support deposits, withdrawals, conversions, all, or neither at any given time.
                var deposit_table = null;
                var withdraw_table = null;
                var amount_to_withdraw = null;

                var calcTextDeposit = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.calc" });
                if (this.state.failed_calculate_deposit != null) {
                    calcTextDeposit = this.state.failed_calculate_deposit;
                }
                var calcTextWithdraw = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.calc" });
                if (this.state.failed_calculate_withdraw != null) {
                    calcTextWithdraw = this.state.failed_calculate_withdraw;
                }
                var calcTextConversion = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.calc" });
                if (this.state.failed_calculate_conversion != null) {
                    calcTextConversion = this.state.failed_calculate_conversion;
                }

                if (Object.getOwnPropertyNames(this.state.allowed_mappings_for_deposit).length > 0) {
                    // deposit
                    var deposit_input_coin_type_options = [];
                    Object.keys(this.state.allowed_mappings_for_deposit).sort().forEach(function (allowed_deposit_input_coin_type) {
                        deposit_input_coin_type_options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "option",
                            {
                                key: allowed_deposit_input_coin_type,
                                value: allowed_deposit_input_coin_type || ""
                            },
                            _this17.state.coins_by_type[allowed_deposit_input_coin_type].symbol
                        ));
                    });
                    var deposit_input_coin_type_select = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "select",
                        {
                            style: { width: "11rem" },
                            className: "external-coin-types",
                            value: this.state.deposit_input_coin_type || "",
                            onChange: this.onInputCoinTypeChanged.bind(this, "deposit")
                        },
                        deposit_input_coin_type_options
                    );

                    var deposit_output_coin_type_options = [];
                    var deposit_output_coin_types = this.state.allowed_mappings_for_deposit[this.state.deposit_input_coin_type];
                    deposit_output_coin_types.forEach(function (allowed_deposit_output_coin_type) {
                        deposit_output_coin_type_options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "option",
                            {
                                key: allowed_deposit_output_coin_type,
                                value: allowed_deposit_output_coin_type || ""
                            },
                            _this17.state.coins_by_type[allowed_deposit_output_coin_type].walletSymbol
                        ));
                    });
                    var deposit_output_coin_type_select = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "select",
                        {
                            style: { width: "11rem" },
                            className: "native-coin-types",
                            value: this.state.deposit_output_coin_type || "",
                            onChange: this.onOutputCoinTypeChanged.bind(this, "deposit")
                        },
                        deposit_output_coin_type_options
                    );

                    var input_address_and_memo = this.state.input_address_and_memo ? this.state.input_address_and_memo : { address: "unknown", memo: null };

                    var estimated_input_amount_text = this.state.deposit_estimated_input_amount;
                    var estimated_output_amount_text = this.state.deposit_estimated_output_amount;

                    var deposit_input_amount_edit_box = estimated_input_amount_text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        style: { width: "11rem" },
                        type: "text",
                        value: estimated_input_amount_text || "",
                        onChange: this.onInputAmountChanged.bind(this, "deposit")
                    }) : calcTextDeposit;
                    var deposit_output_amount_edit_box = estimated_output_amount_text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        style: { width: "11rem" },
                        type: "text",
                        value: estimated_output_amount_text || "",
                        onChange: this.onOutputAmountChanged.bind(this, "deposit")
                    }) : calcTextDeposit;

                    var deposit_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        "updating"
                    );
                    if (this.state.deposit_limit) {
                        if (this.state.deposit_limit.limit) deposit_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-bridge" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "deposit-limit" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.limit",
                                    amount: common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].format_number(this.state.deposit_limit.limit, 8),
                                    symbol: this.state.coins_by_type[this.state.deposit_input_coin_type].walletSymbol
                                })
                            )
                        );else deposit_limit_element = null;
                        //else
                        //    deposit_limit_element = <span>no limit</span>;
                    }

                    var deposit_error_element = null;
                    if (this.state.deposit_error) deposit_error_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        this.state.deposit_error
                    );

                    deposit_header = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.deposit" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.balance" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.deposit_to",
                                    asset: this.state.deposit_input_coin_type
                                })
                            )
                        )
                    );

                    var deposit_address_and_memo_element = null;
                    if (input_address_and_memo.memo) deposit_address_and_memo_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        unsafe: true,
                        content: "gateway.address_with_memo",
                        address: input_address_and_memo.address,
                        memo: input_address_and_memo.memo
                    });else deposit_address_and_memo_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        input_address_and_memo.address
                    );
                    //<span><span className="blocktrades-with-memo">with memo</span> {input_address_and_memo.memo}</span>;

                    deposit_body = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "blocktrades-bridge" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            deposit_input_coin_type_select
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            deposit_input_amount_edit_box
                                        )
                                    ),
                                    "\u2192",
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            deposit_output_coin_type_select
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            deposit_output_amount_edit_box
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        deposit_error_element
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    account: this.props.account.get("name"),
                                    asset: this.state.coins_by_type[this.state.deposit_output_coin_type].walletSymbol
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                deposit_address_and_memo_element,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                                deposit_limit_element
                            )
                        )
                    );
                }

                if (Object.getOwnPropertyNames(this.state.allowed_mappings_for_withdraw).length > 0) {
                    withdraw_modal_id = this.getWithdrawModalId();
                    var withdraw_asset_symbol = this.state.coins_by_type[this.state.withdraw_input_coin_type].symbol;

                    // withdrawal

                    amount_to_withdraw = this.state.withdraw_estimated_input_amount;

                    var withdraw_input_coin_type_options = [];
                    Object.keys(this.state.allowed_mappings_for_withdraw).sort().forEach(function (allowed_withdraw_input_coin_type) {
                        withdraw_input_coin_type_options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "option",
                            {
                                key: allowed_withdraw_input_coin_type,
                                value: allowed_withdraw_input_coin_type
                            },
                            _this17.state.coins_by_type[allowed_withdraw_input_coin_type].walletSymbol
                        ));
                    });
                    var withdraw_input_coin_type_select = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "select",
                        {
                            style: { width: "11rem" },
                            className: "native-coin-types",
                            value: this.state.withdraw_input_coin_type,
                            onChange: this.onInputCoinTypeChanged.bind(this, "withdraw")
                        },
                        withdraw_input_coin_type_options
                    );

                    var withdraw_output_coin_type_options = [];
                    var withdraw_output_coin_types = this.state.allowed_mappings_for_withdraw[this.state.withdraw_input_coin_type];
                    withdraw_output_coin_types.forEach(function (allowed_withdraw_output_coin_type) {
                        withdraw_output_coin_type_options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "option",
                            {
                                key: allowed_withdraw_output_coin_type,
                                value: allowed_withdraw_output_coin_type
                            },
                            _this17.state.coins_by_type[allowed_withdraw_output_coin_type].symbol
                        ));
                    });
                    var withdraw_output_coin_type_select = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "select",
                        {
                            style: { width: "11rem" },
                            className: "external-coin-types",
                            value: this.state.withdraw_output_coin_type,
                            onChange: this.onOutputCoinTypeChanged.bind(this, "withdraw")
                        },
                        withdraw_output_coin_type_options
                    );

                    var _estimated_input_amount_text = this.state.withdraw_estimated_input_amount;

                    var withdraw_input_amount_edit_box = _estimated_input_amount_text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        style: { width: "11rem" },
                        type: "text",
                        value: _estimated_input_amount_text || "",
                        onChange: this.onInputAmountChanged.bind(this, "withdraw")
                    }) : calcTextWithdraw;

                    var _estimated_output_amount_text = this.state.withdraw_estimated_output_amount;

                    var withdraw_output_amount_edit_box = _estimated_output_amount_text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        style: { width: "11rem" },
                        type: "text",
                        value: _estimated_output_amount_text || "",
                        onChange: this.onOutputAmountChanged.bind(this, "withdraw")
                    }) : calcTextWithdraw;

                    var withdraw_button = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWithdrawContainer, {
                        key: this.state.key_for_withdrawal_dialog,
                        account: this.props.account.get("name"),
                        issuer: this.props.issuer_account.get("name"),
                        asset: this.state.coins_by_type[this.state.withdraw_input_coin_type].walletSymbol,
                        output_coin_name: this.state.coins_by_type[this.state.withdraw_output_coin_type].name,
                        output_coin_symbol: this.state.coins_by_type[this.state.withdraw_output_coin_type].symbol,
                        output_coin_type: this.state.withdraw_output_coin_type,
                        output_supports_memos: this.state.supports_output_memos,
                        amount_to_withdraw: amount_to_withdraw,
                        url: this.state.url,
                        gateway: this.props.gateway,
                        output_wallet_type: this.state.coins_by_type[this.state.withdraw_output_coin_type].walletType
                    });

                    var withdraw_error_element = null;
                    if (this.state.withdraw_error) withdraw_error_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        this.state.withdraw_error
                    );

                    var withdraw_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        "..."
                    );
                    if (this.state.withdraw_limit) {
                        if (this.state.withdraw_limit.limit) withdraw_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-bridge" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "deposit-limit" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.limit",
                                    amount: common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].format_number(this.state.withdraw_limit.limit, 8),
                                    symbol: this.state.coins_by_type[this.state.withdraw_input_coin_type].walletSymbol
                                })
                            )
                        );else withdraw_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-bridge" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "deposit-limit" },
                                "no limit"
                            )
                        );
                    }

                    withdraw_header = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.balance" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null)
                        )
                    );

                    withdraw_body = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "blocktrades-bridge" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            withdraw_input_coin_type_select
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            withdraw_input_amount_edit_box
                                        )
                                    ),
                                    "\u2192",
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            withdraw_output_coin_type_select
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            withdraw_output_amount_edit_box
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        withdraw_error_element
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    account: this.props.account.get("name"),
                                    asset: this.state.coins_by_type[this.state.withdraw_input_coin_type].walletSymbol
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                withdraw_button,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                                withdraw_limit_element
                            )
                        )
                    );
                }

                if (Object.getOwnPropertyNames(this.state.allowed_mappings_for_conversion).length > 0) {
                    // conversion
                    var conversion_input_coin_type_options = [];
                    Object.keys(this.state.allowed_mappings_for_conversion).sort().forEach(function (allowed_conversion_input_coin_type) {
                        conversion_input_coin_type_options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "option",
                            {
                                key: allowed_conversion_input_coin_type,
                                value: allowed_conversion_input_coin_type
                            },
                            _this17.state.coins_by_type[allowed_conversion_input_coin_type].walletSymbol
                        ));
                    });
                    var conversion_input_coin_type_select = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "select",
                        {
                            style: { width: "11rem" },
                            className: "native-coin-types",
                            value: this.state.conversion_input_coin_type,
                            onChange: this.onInputCoinTypeChanged.bind(this, "conversion")
                        },
                        conversion_input_coin_type_options
                    );

                    var conversion_output_coin_type_options = [];
                    var conversion_output_coin_types = this.state.allowed_mappings_for_conversion[this.state.conversion_input_coin_type];
                    conversion_output_coin_types.forEach(function (allowed_conversion_output_coin_type) {
                        conversion_output_coin_type_options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "option",
                            {
                                key: allowed_conversion_output_coin_type,
                                value: allowed_conversion_output_coin_type
                            },
                            _this17.state.coins_by_type[allowed_conversion_output_coin_type].symbol
                        ));
                    });
                    var conversion_output_coin_type_select = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "select",
                        {
                            style: { width: "11rem" },
                            className: "external-coin-types",
                            value: this.state.conversion_output_coin_type,
                            onChange: this.onOutputCoinTypeChanged.bind(this, "conversion")
                        },
                        conversion_output_coin_type_options
                    );

                    var _estimated_input_amount_text2 = this.state.conversion_estimated_input_amount;

                    var conversion_input_amount_edit_box = _estimated_input_amount_text2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        style: { width: "11rem" },
                        type: "text",
                        value: _estimated_input_amount_text2 || "",
                        onChange: this.onInputAmountChanged.bind(this, "conversion")
                    }) : calcTextConversion;

                    var _estimated_output_amount_text2 = this.state.conversion_estimated_output_amount;

                    var conversion_output_amount_edit_box = _estimated_output_amount_text2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        style: { width: "11rem" },
                        type: "text",
                        value: _estimated_output_amount_text2 || "",
                        onChange: this.onOutputAmountChanged.bind(this, "conversion")
                    }) : calcTextConversion;

                    var conversion_button = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonConversionContainer, {
                        asset: this.state.coins_by_type[this.state.conversion_input_coin_type].walletSymbol,
                        account: this.props.account,
                        input_coin_type: this.state.conversion_input_coin_type,
                        output_coin_type: this.state.conversion_output_coin_type,
                        account_name: this.props.account.get("name"),
                        amount: this.state.conversion_estimated_input_amount,
                        account_id: this.props.account.get("id"),
                        account_balances: this.props.account.get("balances"),
                        url: this.state.url
                    });

                    var conversion_error_element = null;
                    if (this.state.conversion_error) conversion_error_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        this.state.conversion_error
                    );

                    var conversion_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        "..."
                    );
                    if (this.state.conversion_limit) {
                        if (this.state.conversion_limit.limit) conversion_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-bridge" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "deposit-limit" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.limit",
                                    amount: common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].format_number(this.state.conversion_limit.limit, 8),
                                    symbol: this.state.coins_by_type[this.state.conversion_input_coin_type].walletSymbol
                                })
                            )
                        );else conversion_limit_element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-bridge" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "deposit-limit" },
                                "no limit"
                            )
                        );
                    }

                    conversion_header = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.convert" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.balance" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null)
                        )
                    );

                    conversion_body = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "blocktrades-bridge" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            conversion_input_coin_type_select
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            conversion_input_amount_edit_box
                                        )
                                    ),
                                    "\u2192",
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "inline-block" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            conversion_output_coin_type_select
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            null,
                                            conversion_output_amount_edit_box
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        conversion_error_element
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    account: this.props.account.get("name"),
                                    asset: this.state.coins_by_type[this.state.conversion_input_coin_type].walletSymbol
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "td",
                                null,
                                conversion_button,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                                conversion_limit_element
                            )
                        )
                    );
                }

                if (this.state.announcements.length > 0) {
                    announcements = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "blocktrades-announcements-container" },
                        this.state.announcements.map(function (data, index) {
                            var add_color = "txtann info";

                            if (data.status === 10) {
                                add_color = "txtann error";
                            } else if (data.status === 20) {
                                add_color = "txtann warning";
                            } else if (data.status === 30) {
                                add_color = "txtann success";
                            } else if (data.status === 40) {
                                add_color = "txtann info";
                            }

                            if (data.format === 1) {
                                data.message.replace(/\r\n|\r|\n/g, "<br />");
                            }

                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "blocktrades-announcements " + add_color,
                                    key: index
                                },
                                data.message
                            );
                        }, this)
                    );
                }

                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { paddingBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h5",
                            content: "gateway.bridge_text"
                        })
                    ),
                    announcements,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "table",
                        { className: "table" },
                        deposit_header,
                        deposit_body,
                        withdraw_header,
                        withdraw_body,
                        conversion_header,
                        conversion_body
                    )
                );
            }
        }
    }]);

    return BlockTradesBridgeDepositRequest;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // BlockTradesBridgeDepositRequest

BlockTradesBridgeDepositRequest.propTypes = {
    url: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    initial_deposit_input_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_deposit_output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_deposit_estimated_input_amount: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_withdraw_input_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_withdraw_output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_withdraw_estimated_input_amount: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_conversion_input_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_conversion_output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,
    initial_conversion_estimated_input_amount: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockTradesBridgeDepositRequest));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1231);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(565);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(730);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2550);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(567);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(709);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var BitKapital = function (_React$Component) {
    _inherits(BitKapital, _React$Component);

    function BitKapital(props) {
        _classCallCheck(this, BitKapital);

        var _this = _possibleConstructorReturn(this, (BitKapital.__proto__ || Object.getPrototypeOf(BitKapital)).call(this));

        _this.state = {
            action: props.viewSettings.get("bktAction", "deposit"),
            min: 50,
            max: 100000
        };
        return _this;
    }

    _createClass(BitKapital, [{
        key: "_renderDeposits",
        value: function _renderDeposits() {
            //       return <iframe
            //           style={{width: "100%", border: 0, minHeight: 800}}
            //           src={"https://bitkapital.com/kapital.html?u=" + this.props.account.get("name") + `&theme=${SettingsStore.getState().settings.get("themes")}`}
            //       >
            //       </iframe>;

            // interim maintenance tout per issue #341
            return;
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { width: "100%", border: 0, minHeight: 600 } },
                "Onarim / Under Maintenance"
            );
        }
    }, {
        key: "_renderWithdrawals",
        value: function _renderWithdrawals() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { onSubmit: this._onSubmit.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { padding: "20px 0" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.balance" }),
                    ": \xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: {
                                fontWeight: "bold",
                                color: "#4A90E2",
                                textAlign: "right"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            account: this.props.account.get("name"),
                            asset: this.props.asset.get("symbol")
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.quantity" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        ref: "amount",
                        required: true,
                        id: "amount",
                        type: "number",
                        min: this.state.min,
                        max: this.state.max
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.iban" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { ref: "iban", required: true, id: "iban", type: "text" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    { className: "button", type: "submit" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.withdraw_now" })
                )
            );
        }
    }, {
        key: "changeAction",
        value: function changeAction(action) {
            this.setState({
                action: action
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting({
                bktAction: action
            });
        }
    }, {
        key: "_onSubmit",
        value: function _onSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var _state = this.state,
                min = _state.min,
                max = _state.max;
            var _props = this.props,
                asset = _props.asset,
                account = _props.account,
                bitKapital = _props.bitKapital;


            var amount = parseInt(this.refs.amount.value, 10);
            var iban = this.refs.iban.value;
            console.log("amount:", amount, "iban:", iban);

            var precision = common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].get_asset_precision(asset.get("precision"));

            if (amount < min || amount > max) {
                return;
            }

            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].transfer(account.get("id"), // from user
            bitKapital.get("id"), // to bitkapital account
            parseInt(amount * precision, 10), // amount in full precision
            asset.get("id"), // bitkapital asset id
            new Buffer("BOZDURMA - " + iban.toUpperCase(), "utf-8"), // memo
            null, // propose set to false
            asset.get("id") // Pay fee with KAPITAL
            ).then(function () {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_5__["default"].unlisten(_this2.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_5__["default"].listen(_this2.onTrxIncluded);
            });
        }
    }, {
        key: "onTrxIncluded",
        value: function onTrxIncluded(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                // this.setState(Transfer.getInitialState());
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_5__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_5__["default"].reset();
            } else if (confirm_store_state.closed) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_5__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_5__["default"].reset();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                jianjolly = _props2.jianjolly,
                onay = _props2.onay,
                account = _props2.account;
            var action = this.state.action;
            // console.log("jianjolly:", jianjolly.toJS(), "asset:", asset.toJS());

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "BitKapital" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: { marginRight: 10 },
                                onClick: this.changeAction.bind(this, "deposit"),
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("button", action === "deposit" ? "active" : "outline")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.deposit" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                onClick: this.changeAction.bind(this, "withdraw"),
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("button", action === "withdraw" ? "active" : "outline")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.withdraw" })
                        )
                    ),
                    action === "deposit" ? this._renderDeposits() : this._renderWithdrawals()
                )
            );
        }
    }]);

    return BitKapital;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BitKapital.propTypes = {
    jianjolly: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount.isRequired,
    onay: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount.isRequired,
    bitKapital: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired
};
BitKapital.defaultProps = {
    jianjolly: "1.2.126253", // "jianjolly-0",
    bitKapital: "1.2.130090",
    onay: "1.2.139289", // bitkapital dedicated whitelist management account
    asset: "KAPITAL"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(BitKapital));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2415);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2517);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(879);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2562);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2564);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var RuDexGateway = function (_React$Component) {
    _inherits(RuDexGateway, _React$Component);

    function RuDexGateway(props) {
        _classCallCheck(this, RuDexGateway);

        var _this = _possibleConstructorReturn(this, (RuDexGateway.__proto__ || Object.getPrototypeOf(RuDexGateway)).call(this));

        var action = props.viewSettings.get("rudexAction", "deposit");
        _this.state = {
            activeCoin: _this._getActiveCoin(props, { action: action }),
            action: action
        };
        return _this;
    }

    _createClass(RuDexGateway, [{
        key: "_findCoinByName",
        value: function _findCoinByName(props, name) {
            for (var i = 0; i < props.coins.length; i++) {
                var coin = props.coins[i];
                if (coin.backingCoin.toUpperCase() === name) return coin;
            }
            return props.coins[0];
        }
    }, {
        key: "_findCoinBySymbol",
        value: function _findCoinBySymbol(props, name) {
            for (var i = 0; i < props.coins.length; i++) {
                var coin = props.coins[i];
                if (coin.symbol.toUpperCase() === name) return coin;
            }
            return null;
        }
    }, {
        key: "_getActiveCoin",
        value: function _getActiveCoin(props, state) {
            var cachedCoin = props.viewSettings.get("activeCoin_rudex", null);
            var firstTimeCoin = "PPY";
            var activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;

            if (state.action === "withdraw") {
                activeCoin = this._findCoinByName(props, activeCoin).symbol;
            }

            return activeCoin;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.provider !== this.props.provider) {
                this.setState({
                    activeCoin: this._getActiveCoin(nextProps, this.state.action)
                });
            }
        }

        // onSelectCoin(e) {
        //     this.setState({
        //         activeCoin: e.target.value
        //     });
        //
        //     let setting = {};
        //     let coinName = e.target.value;
        //     if (this.state.action === "withdraw") {
        //         coinName = this._findCoinBySymbol(this.props, coinName).backingCoin;
        //     }
        //     setting["activeCoin_rudex"] = coinName;
        //     SettingsActions.changeViewSetting(setting);
        // }

    }, {
        key: "onSelectCoin",
        value: function onSelectCoin(e) {
            this.setState({
                activeCoin: e.value
            });

            var setting = {};
            var coinName = e.value;
            if (this.state.action === "withdraw") {
                coinName = this._findCoinBySymbol(this.props, coinName).backingCoin;
            }
            setting["activeCoin_rudex"] = coinName;
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(setting);
        }
    }, {
        key: "changeAction",
        value: function changeAction(type) {
            var activeCoin = this._getActiveCoin(this.props, { action: type });

            this.setState({
                action: type,
                activeCoin: activeCoin
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(_defineProperty({}, "rudexAction", type));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                coins = _props.coins,
                account = _props.account;
            var _state = this.state,
                activeCoin = _state.activeCoin,
                action = _state.action;


            if (!coins.length) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], null);
            }

            var filteredCoins = coins.filter(function (a) {
                if (!a || !a.symbol) {
                    return false;
                } else {
                    return action === "deposit" ? a.depositAllowed : a.withdrawalAllowed;
                }
            });

            var coinOptions = filteredCoins.map(function (coin) {
                var option = action === "deposit" ? coin.backingCoin.toUpperCase() : coin.symbol;
                // return (
                //     <option value={option} key={coin.symbol}>
                //         {option.replace("RUDEX.", "")}
                //     </option>

                // Work around to get symbol name
                var name = option.replace("RUDEX.", "");
                var prefix = name === "PPY" ? "" : "RUDEX.";

                return {
                    value: option,
                    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            replaceNoneToBts: false,
                            maxWidth: 20,
                            name: prefix + name
                        }),
                        option.replace("RUDEX.", "")
                    )
                };
            }).filter(function (a) {
                return a !== null;
            });

            var coin = filteredCoins.filter(function (coin) {
                return action === "deposit" ? coin.backingCoin.toUpperCase() === activeCoin : coin.symbol === activeCoin;
            })[0];

            if (!coin) coin = filteredCoins[0];

            var isDeposit = this.state.action === "deposit";

            var supportUrl = "https://rudex.freshdesk.com";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-margin vertical medium-horizontal no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                {
                                    style: { minHeight: "2rem" },
                                    className: "left-label"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.choose_" + action
                                }),
                                ":",
                                " "
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_11__["default"]
                            //className="external-coin-types bts-select"
                            //onChange={this.onSelectCoin.bind(this)}
                            , { onChange: this.onSelectCoin.bind(this),
                                clearable: false,
                                searchable: false,
                                value: activeCoin,
                                options: coinOptions
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-6 medium-offset-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                                style: { minHeight: "2rem" },
                                className: "left-label"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.gateway_text" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { paddingBottom: 15 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "button-group segmented no-margin" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "deposit" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "deposit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.deposit" })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "withdraw" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "withdraw")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw" })
                                    )
                                )
                            )
                        )
                    )
                ),
                !coin ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            key: "" + coin.symbol,
                            gateway: coin.gatewayWallet,
                            issuer_account: coin.issuer,
                            account: account,
                            deposit_asset: coin.backingCoin.toUpperCase(),
                            deposit_asset_name: coin.name,
                            deposit_coin_type: coin.backingCoin.toLowerCase(),
                            deposit_account: coin.gatewayWallet,
                            deposit_wallet_type: coin.walletType,
                            receive_asset: coin.symbol,
                            receive_coin_type: coin.symbol.toLowerCase(),
                            supports_output_memos: coin.memoSupport,
                            min_amount: coin.minAmount,
                            withdraw_fee: coin.withdrawFee,
                            deposit_fee: coin.depositFee,
                            asset_precision: coin.precision,
                            action: this.state.action
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Support"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.rudex.support_block" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    href: supportUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                },
                                supportUrl
                            )
                        )
                    ),
                    coin && coin.symbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__["TransactionWrapper"],
                        {
                            asset: coin.symbol,
                            fromAccount: isDeposit ? coin.issuerId : this.props.account.get("id"),
                            to: isDeposit ? this.props.account.get("id") : coin.issuerId
                        },
                        function (_ref) {
                            var asset = _ref.asset,
                                to = _ref.to,
                                fromAccount = _ref.fromAccount;

                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__["RecentTransactions"], {
                                accountsList: immutable__WEBPACK_IMPORTED_MODULE_8___default.a.List([_this2.props.account.get("id")]),
                                limit: 10,
                                compactView: true,
                                fullHeight: true,
                                filter: "transfer",
                                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.recent_" + _this2.state.action
                                }),
                                customFilter: {
                                    fields: ["to", "from", "asset_id"],
                                    values: {
                                        to: to.get("id"),
                                        from: fromAccount.get("id"),
                                        asset_id: asset.get("id")
                                    }
                                }
                            });
                        }
                    ) : null
                )
            );
        }
    }]);

    return RuDexGateway;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(RuDexGateway, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2559);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(866);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2550);
/* harmony import */ var lib_common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2561);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2560);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1217);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1332);
/* harmony import */ var lib_common_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var RuDexGatewayDepositRequest = function (_React$Component) {
    _inherits(RuDexGatewayDepositRequest, _React$Component);

    function RuDexGatewayDepositRequest(props) {
        _classCallCheck(this, RuDexGatewayDepositRequest);

        var _this = _possibleConstructorReturn(this, (RuDexGatewayDepositRequest.__proto__ || Object.getPrototypeOf(RuDexGatewayDepositRequest)).call(this, props));

        _this.deposit_address_cache = new lib_common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_10__["default"]();

        _this.state = {
            account_name: null,
            receive_address: null
        };

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this._copy = _this._copy.bind(_this);
        document.addEventListener("copy", _this._copy);
        return _this;
    }

    _createClass(RuDexGatewayDepositRequest, [{
        key: "_copy",
        value: function _copy(e) {
            try {
                if (this.state.clipboardText) e.clipboardData.setData("text/plain", this.state.clipboardText);else e.clipboardData.setData("text/plain", counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("gateway.use_copy_button").toUpperCase());
                e.preventDefault();
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            return {
                walletType: this.props.deposit_wallet_type,
                inputCoinType: this.props.deposit_coin_type,
                outputCoinType: this.props.receive_coin_type,
                outputAddress: this.props.account.get("name"),
                stateCallback: this.addDepositAddress
            };
        }

        // componentWillMount() {
        //     let account_name = this.props.account.get("name");
        //
        //     // let receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
        // }

    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("copy", this._copy);
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            var account_name = this.props.account.get("name");
            // this.deposit_address_cache.cacheInputAddress(
            //     this.props.gateway,
            //     account_name,
            //     this.props.deposit_coin_type,
            //     this.props.receive_coin_type,
            //     receive_address.address,
            //     receive_address.memo
            // );
            this.setState({ account_name: account_name });
            this.setState({ receive_address: receive_address });
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            // console.log( "this.props.issuer: ", this.props.issuer_account.toJS() )
            // console.log( "this.receive_asset.issuer: ", this.props.receive_asset.toJS() )
            return "withdraw_asset_" + this.props.issuer_account.get("name") + "_" + this.props.receive_asset.get("symbol");
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8___default.a.publish(this.getWithdrawModalId(), "open");
        }
    }, {
        key: "toClipboard",
        value: function toClipboard(clipboardText) {
            try {
                this.setState({ clipboardText: clipboardText }, function () {
                    document.execCommand("copy");
                });
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: "none", minHeight: 150 } });
            if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return emptyRow;

            var account_balances_object = this.props.account.get("balances");

            // let balance = "0 " + this.props.receive_asset.get("symbol");
            if (this.props.deprecated_in_favor_of) {
                var has_nonzero_balance = false;
                var balance_object_id = account_balances_object.get(this.props.receive_asset.get("id"));
                if (balance_object_id) {
                    var balance_object = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(balance_object_id);
                    if (balance_object) {
                        var balance = balance_object.get("balance");
                        if (balance != 0) has_nonzero_balance = true;
                    }
                }
                if (!has_nonzero_balance) return emptyRow;
            }

            var receive_address = null;
            var prev_account_name = this.state.account_name;
            if (prev_account_name === this.props.account.get("name")) receive_address = this.state.receive_address;

            if (!receive_address) {
                var account_name = this.props.account.get("name");
                // receive_address = this.deposit_address_cache.getCachedInputAddress(
                //     this.props.gateway,
                //     account_name,
                //     this.props.deposit_coin_type,
                //     this.props.receive_coin_type
                // );
            }

            if (!receive_address) {
                Object(lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_11__["requestDepositAddress"])(this._getDepositObject());
                return emptyRow;
            }

            var withdraw_modal_id = this.getWithdrawModalId();
            var deposit_address_fragment = null;
            var deposit_memo = null;
            // if (this.props.deprecated_in_favor_of)
            // {
            //     deposit_address_fragment = <span>please use {this.props.deprecated_in_favor_of.get("symbol")} instead. <span data-tip={this.props.deprecated_message} data-place="right" data-html={true}><Icon name="question-circle" title="icons.question_circle" /></span><ReactTooltip /></span>;
            // }
            // else
            // {
            var clipboardText = "";
            var memoText = void 0;
            if (this.props.deposit_account) {
                deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    this.props.deposit_account
                );
                clipboardText = this.props.deposit_account;
                memoText = "dex:" + this.props.account.get("name");
                deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    memoText
                );
                var withdraw_memo_prefix = this.props.deposit_coin_type + ":";
            } else {
                if (receive_address.memo) {
                    // This is a client that uses a deposit memo (like ethereum), we need to display both the address and the memo they need to send
                    memoText = receive_address.memo;
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                    deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.memo
                    );
                } else {
                    // This is a client that uses unique deposit addresses to select the output
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                }
                var withdraw_memo_prefix = "";
            }

            var minDeposit = lib_common_utils__WEBPACK_IMPORTED_MODULE_14__["default"].format_number(this.props.min_amount / lib_common_utils__WEBPACK_IMPORTED_MODULE_14__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false);

            if (this.props.action === "deposit") {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "rudex__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_deposit"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.your_account"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                account: this.props.account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.deposit_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "b",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "gateway.rudex.min_amount",
                                    minAmount: minDeposit,
                                    symbol: this.props.deposit_coin_type
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px 0", fontSize: "1.1rem" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                                style: {
                                                    textTransform: "uppercase"
                                                },
                                                content: "gateway.address"
                                            }),
                                            ":",
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "b",
                                                null,
                                                deposit_address_fragment
                                            )
                                        )
                                    ),
                                    deposit_memo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                                style: {
                                                    textTransform: "uppercase"
                                                },
                                                content: "gateway.memo"
                                            }),
                                            ": ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "b",
                                                null,
                                                deposit_memo
                                            )
                                        )
                                    ) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button-group",
                                    style: { paddingTop: 10 }
                                },
                                deposit_address_fragment ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.toClipboard.bind(this, clipboardText)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.copy_address" })
                                ) : null,
                                memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.toClipboard.bind(this, memoText)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.copy_memo" })
                                ) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                className: "has-error fz_14",
                                component: "p",
                                content: "gateway.min_deposit_warning_amount",
                                minDeposit: minDeposit,
                                coin: this.props.deposit_asset
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                className: "has-error fz_14",
                                component: "p",
                                content: "gateway.min_deposit_warning_asset",
                                minDeposit: minDeposit,
                                coin: this.props.deposit_asset
                            })
                        )
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "rudex__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_withdraw"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.withdraw_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group", style: { paddingTop: 20 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button success",
                                    style: { fontSize: "1.3rem" },
                                    onClick: this.onWithdraw.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.withdraw_now" }),
                                " "
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_6___default.a,
                        { id: withdraw_modal_id, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_7___default.a,
                            { close: withdraw_modal_id },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { href: "#", className: "close-button" },
                                "\xD7"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                account: this.props.account.get("name"),
                                issuer: this.props.issuer_account.get("name"),
                                asset: this.props.receive_asset.get("symbol"),
                                output_coin_name: this.props.deposit_asset_name,
                                output_coin_symbol: this.props.deposit_asset,
                                output_coin_type: this.props.deposit_coin_type,
                                output_wallet_type: this.props.deposit_wallet_type,
                                output_supports_memos: this.props.supports_output_memos,
                                memo_prefix: withdraw_memo_prefix,
                                modal_id: withdraw_modal_id,
                                min_amount: this.props.min_amount,
                                withdraw_fee: this.props.withdraw_fee,
                                asset_precision: this.props.asset_precision,
                                balance: this.props.account.get("balances").toJS()[this.props.receive_asset.get("id")]
                            })
                        )
                    )
                );
            }
        }
    }]);

    return RuDexGatewayDepositRequest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RuDexGatewayDepositRequest.propTypes = {
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_asset_name: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_account: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    receive_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_message: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    action: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    supports_output_memos: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool.isRequired,
    min_amount: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number,
    deposit_fee: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number,
    withdraw_fee: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number,
    asset_precision: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RuDexGatewayDepositRequest, {
    keep_updating: true
}));

/***/ }),

/***/ 2559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1232);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1012);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(565);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2560);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(416);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(866);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(581);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(582);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var RuDexWithdrawModal = function (_React$Component) {
    _inherits(RuDexWithdrawModal, _React$Component);

    function RuDexWithdrawModal(props) {
        _classCallCheck(this, RuDexWithdrawModal);

        var _this = _possibleConstructorReturn(this, (RuDexWithdrawModal.__proto__ || Object.getPrototypeOf(RuDexWithdrawModal)).call(this, props));

        _this.state = {
            withdraw_amount: _this.props.amount_to_withdraw,
            withdraw_address: common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_wallet_type),
            withdraw_address_check_in_progress: true,
            withdraw_address_is_valid: null,
            options_is_valid: false,
            confirmation_is_valid: false,
            withdraw_address_selected: common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_wallet_type),
            memo: "",
            withdraw_address_first: true,
            empty_withdraw_value: false,
            from_account: props.account,
            fee_asset_id: "1.3.0",
            feeStatus: {}
        };

        _this._validateAddress(_this.state.withdraw_address, props);

        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._checkMinAmount = _this._checkMinAmount.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);
        return _this;
    }

    _createClass(RuDexWithdrawModal, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.unMounted = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            var _this2 = this;

            if (np.account !== this.state.from_account && np.account !== this.props.account) {
                this.setState({
                    from_account: np.account,
                    feeStatus: {},
                    fee_asset_id: "1.3.0",
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus();
                });
            }
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this3 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var fee_asset_id = state.fee_asset_id,
                from_account = state.from_account;

            var _getAvailableAssets2 = this._getAvailableAssets(state),
                fee_asset_types = _getAvailableAssets2.fee_asset_types;

            if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
                fee_asset_id = fee_asset_types[0];
            }

            if (!from_account) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                accountID: from_account.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: this.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                if (_this3.unMounted) return;

                _this3.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this3._checkBalance);
            });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this4 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

            var account = state.from_account;
            if (!account) return;

            var _getAvailableAssets3 = this._getAvailableAssets(state),
                assets = _getAvailableAssets3.fee_asset_types;
            // const assets = ["1.3.0", this.props.asset.get("id")];


            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this4.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(state.feeStatus, feeStatus)) {
                    _this4.setState({
                        feeStatus: feeStatus
                    });
                }
                _this4._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "onWithdrawAmountChange",
        value: function onWithdrawAmountChange(_ref2) {
            var amount = _ref2.amount;

            this.setState({
                withdraw_amount: amount,
                empty_withdraw_value: amount !== undefined && !parseFloat(amount)
            }, function () {
                this._checkBalance;
                this._checkMinAmount();
            });
        }
    }, {
        key: "onSelectChanged",
        value: function onSelectChanged(index) {
            var new_withdraw_address = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type)[index];
            common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: new_withdraw_address
            });

            this.setState({
                withdraw_address_selected: new_withdraw_address,
                options_is_valid: false,
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "onWithdrawAddressChanged",
        value: function onWithdrawAddressChanged(e) {
            var new_withdraw_address = e.target.value.trim();

            this.setState({
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: new_withdraw_address,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(new_withdraw_address) {
            var _this5 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["validateAddress"])({
                url: props.url,
                walletType: props.output_wallet_type,
                newAddress: new_withdraw_address
            }).then(function (isValid) {
                if (_this5.state.withdraw_address === new_withdraw_address) {
                    _this5.setState({
                        withdraw_address_check_in_progress: false,
                        withdraw_address_is_valid: isValid
                    });
                }
            });
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                withdraw_amount = _state.withdraw_amount;
            var _props = this.props,
                asset = _props.asset,
                balance = _props.balance;

            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkBalance"])(withdraw_amount, asset, feeAmount, balance);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
            return hasBalance;
        }
    }, {
        key: "_checkMinAmount",
        value: function _checkMinAmount() {
            var withdraw_amount = this.state.withdraw_amount;


            if (withdraw_amount === null) return;
            var lessThanMinimum = withdraw_amount < this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.asset_precision);
            console.log("X", withdraw_amount, this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.asset_precision));
            this.setState({ minAmountError: lessThanMinimum });
            return lessThanMinimum;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length && this.state.withdraw_amount !== null) {
                if (!this.state.withdraw_address_is_valid) {
                    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "open");
                } else if (parseFloat(this.state.withdraw_amount) > 0) {
                    if (!common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                        var withdrawals = [];
                        withdrawals.push(this.state.withdraw_address);
                        common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                            wallet: this.props.output_wallet_type,
                            addresses: withdrawals
                        });
                    } else {
                        var _withdrawals = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
                        if (_withdrawals.indexOf(this.state.withdraw_address) == -1) {
                            _withdrawals.push(this.state.withdraw_address);
                            common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                                wallet: this.props.output_wallet_type,
                                addresses: _withdrawals
                            });
                        }
                    }
                    common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                        wallet: this.props.output_wallet_type,
                        address: this.state.withdraw_address
                    });
                    var asset = this.props.asset;

                    var feeAmount = this.state.feeAmount;


                    var amount = parseFloat(String.prototype.replace.call(this.state.withdraw_amount, /,/g, ""));
                    var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                        asset_id: asset.get("id"),
                        precision: asset.get("precision"),
                        real: amount
                    });

                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : "1.3.0");

                    this.setState({
                        empty_withdraw_value: false
                    });
                } else {
                    this.setState({
                        empty_withdraw_value: true
                    });
                }
            }
        }
    }, {
        key: "onSubmitConfirmation",
        value: function onSubmitConfirmation() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "close");

            if (!common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                var withdrawals = [];
                withdrawals.push(this.state.withdraw_address);
                common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                    wallet: this.props.output_wallet_type,
                    addresses: withdrawals
                });
            } else {
                var _withdrawals2 = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
                if (_withdrawals2.indexOf(this.state.withdraw_address) == -1) {
                    _withdrawals2.push(this.state.withdraw_address);
                    common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                        wallet: this.props.output_wallet_type,
                        addresses: _withdrawals2
                    });
                }
            }
            common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: this.state.withdraw_address
            });
            var asset = this.props.asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(asset.get("precision"));
            var amount = String.prototype.replace.call(this.state.withdraw_amount, /,/g, "");

            var feeAmount = this.state.feeAmount;


            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : "1.3.0");
        }
    }, {
        key: "onDropDownList",
        value: function onDropDownList() {
            if (common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                if (this.state.options_is_valid === false) {
                    this.setState({ options_is_valid: true });
                    this.setState({ withdraw_address_first: false });
                }

                if (this.state.options_is_valid === true) {
                    this.setState({ options_is_valid: false });
                }
            }
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "confirmation";
        }
    }, {
        key: "onAccountBalance",
        value: function onAccountBalance() {
            var feeAmount = this.state.feeAmount;

            if (Object.keys(this.props.account.get("balances").toJS()).includes(this.props.asset.get("id"))) {
                var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                    amount: this.props.balance.get("balance"),
                    asset_id: this.props.asset.get("id"),
                    precision: this.props.asset.get("precision")
                });

                // Subtract the fee if it is using the same asset
                if (total.asset_id === feeAmount.asset_id) {
                    total.minus(feeAmount);
                }

                this.setState({
                    withdraw_amount: total.getAmount({ real: true }),
                    empty_withdraw_value: false
                }, this._checkBalance);
            }
        }
    }, {
        key: "setNestedRef",
        value: function setNestedRef(ref) {
            this.nestedRef = ref;
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(_ref3) {
            var asset = _ref3.asset;

            this.setState({
                fee_asset_id: asset.get("id")
            }, this._updateFee);
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account,
                feeStatus = state.feeStatus;

            function hasFeePoolBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var fee_asset_types = [];
            if (!(from_account && from_account.get("balances"))) {
                return { fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sortID);
            for (var key in account_balances) {
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(key);
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }

                if (asset) {
                    // Remove any assets that do not have valid core exchange rates
                    var priceIsValid = false,
                        p = void 0;
                    try {
                        p = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Price"]({
                            base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "base"]).toJS()),
                            quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "quote"]).toJS())
                        });
                        priceIsValid = p.isValid();
                    } catch (err) {
                        priceIsValid = false;
                    }

                    if (asset.get("id") !== "1.3.0" && !priceIsValid) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }

            fee_asset_types = fee_asset_types.filter(function (a) {
                return hasFeePoolBalance(a) && hasBalance(a);
            });

            return { fee_asset_types: fee_asset_types };
        }
    }, {
        key: "render",
        value: function render() {
            var _state2 = this.state,
                withdraw_address_selected = _state2.withdraw_address_selected,
                memo = _state2.memo;

            var storedAddress = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
            var balance = null;

            var account_balances = this.props.account.get("balances").toJS();
            var asset_types = Object.keys(account_balances);

            var withdrawModalId = this.getWithdrawModalId();
            var invalid_address_message = null;
            var options = null;
            var confirmation = null;

            if (this.state.options_is_valid) {
                options = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: !storedAddress.length ? "rudex-disabled-options" : "rudex-options"
                    },
                    storedAddress.map(function (name, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                key: index,
                                onClick: this.onSelectChanged.bind(this, index)
                            },
                            name
                        );
                    }, this)
                );
            }

            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length) {
                if (!this.state.withdraw_address_is_valid) {
                    invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            content: "gateway.valid_address",
                            coin_type: this.props.output_coin_type
                        })
                    );
                    confirmation = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default.a,
                        { id: withdrawModalId, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: withdrawModalId },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "a",
                                { href: "#", className: "close-button" },
                                "\xD7"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.title" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onSubmitConfirmation.bind(this),
                                value: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("modal.confirmation.accept")
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                                { close: withdrawModalId },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "a",
                                    { className: "secondary button" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.cancel" })
                                )
                            )
                        )
                    );
                }
                // if (this.state.withdraw_address_is_valid)
                //   invalid_address_message = <Icon name="checkmark-circle" title="icons.checkmark_circle.operation_succeed" className="success" />;
                // else
                //   invalid_address_message = <Icon name="cross-circle" title="icons.cross_circle.operation_failed" className="alert" />;
            }

            var tabIndex = 1;
            var withdraw_memo = null;

            if (this.props.output_supports_memos) {
                withdraw_memo = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transfer.memo" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                        rows: "3",
                        value: memo,
                        tabIndex: tabIndex++,
                        onChange: this.onMemoChanged.bind(this)
                    })
                );
            }

            // Estimate fee VARIABLES

            var _getAvailableAssets4 = this._getAvailableAssets(),
                fee_asset_types = _getAvailableAssets4.fee_asset_types;

            if (asset_types.length > 0) {
                var current_asset_id = this.props.asset.get("id");
                if (current_asset_id) {
                    var current = account_balances[current_asset_id];
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        "\xA0:\xA0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: "set-cursor",
                                onClick: this.onAccountBalance.bind(this)
                            },
                            current ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                balance: account_balances[current_asset_id]
                            }) : 0
                        )
                    );
                } else balance = "No funds";
            } else {
                balance = "No funds";
            }

            var minDeposit = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false);
            var gateFee = this.props.withdraw_fee ? common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(this.props.withdraw_fee / common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false) : null;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-container" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "h3",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "gateway.withdraw_coin",
                                coin: this.props.output_coin_name,
                                symbol: this.props.output_coin_symbol
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            label: "modal.withdraw.amount",
                            amount: this.state.withdraw_amount,
                            asset: this.props.asset.get("id"),
                            assets: [this.props.asset.get("id")],
                            placeholder: "0.0",
                            onChange: this.onWithdrawAmountChange.bind(this),
                            display_balance: balance
                        }),
                        this.state.empty_withdraw_value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.valid" })
                        ) : null,
                        this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.insufficient" })
                        ) : null,
                        this.state.minAmountError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.rudex.min_amount_error" })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            { className: "no-margin", style: { paddingTop: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "b",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    content: "gateway.rudex.min_amount",
                                    minAmount: minDeposit,
                                    symbol: this.props.output_coin_symbol
                                })
                            )
                        )
                    ),
                    this.state.feeAmount ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block gate_fee" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            refCallback: this.setNestedRef.bind(this),
                            label: "transfer.fee",
                            disabled: true,
                            amount: this.state.feeAmount.getAmount({
                                real: true
                            }),
                            onChange: this.onFeeChanged.bind(this),
                            asset: this.state.feeAmount.asset_id,
                            assets: fee_asset_types,
                            tabIndex: tabIndex++
                        }),
                        !this.state.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noFeeBalance" })
                        ) : null,
                        !this.state.hasPoolBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noPoolBalance" })
                        ) : null
                    ) : null,
                    gateFee ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "amount-selector right-selector",
                            style: { paddingBottom: 20 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.fee" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "text", disabled: true, value: gateFee }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "form-label select floating-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "dropdown-wrapper inactive" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        this.props.output_coin_symbol
                                    )
                                )
                            )
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "modal.withdraw.address"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "rudex-select-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                    type: "text",
                                    value: withdraw_address_selected,
                                    tabIndex: "4",
                                    onChange: this.onWithdrawAddressChanged.bind(this),
                                    autoComplete: "off"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { onClick: this.onDropDownList.bind(this) },
                                    "\u25BC"
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "rudex-position-options" },
                            options
                        ),
                        invalid_address_message
                    ),
                    withdraw_memo,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "button-group" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                onClick: this.onSubmit.bind(this),
                                className: "button" + (this.state.error || this.state.balanceError || this.state.minAmountError ? " disabled" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.withdraw.submit" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: this.props.modal_id },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "button" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.cancel" })
                            )
                        )
                    ),
                    confirmation
                )
            );
        }
    }]);

    return RuDexWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

RuDexWithdrawModal.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    issuer: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired,
    output_coin_name: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    output_coin_symbol: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    output_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    output_supports_memos: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool.isRequired,
    amount_to_withdraw: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject,
    min_amount: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,
    withdraw_fee: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(RuDexWithdrawModal, { keep_updating: true }));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCoinList", function() { return fetchCoinList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(735);


var rudexStorage = new _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"]("");

function fetchCoinList() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].COINS_LIST;

    return fetch(url, { method: "post" }).then(function (reply) {
        return reply.json().then(function (result) {
            return result;
        });
    }).catch(function (err) {
        console.log("error fetching rudex list of coins", err, url);
    });
}

function requestDepositAddress(_ref) {
    var walletType = _ref.walletType,
        inputCoinType = _ref.inputCoinType,
        outputCoinType = _ref.outputCoinType,
        outputAddress = _ref.outputAddress,
        _ref$url = _ref.url,
        url = _ref$url === undefined ? api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].BASE : _ref$url,
        stateCallback = _ref.stateCallback;

    var body = {
        inputCoinType: inputCoinType,
        outputCoinType: outputCoinType,
        outputAddress: outputAddress
    };

    var body_string = JSON.stringify(body);

    fetch(url + ("/wallets/" + walletType + "/new-deposit-address"), {
        method: "post",
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json"
        }),
        body: body_string
    }).then(function (reply) {
        reply.json().then(function (json) {
            // console.log( "reply: ", json )
            var address = {
                address: json.inputAddress || "unknown",
                memo: json.inputMemo,
                error: json.error || null
            };
            if (stateCallback) stateCallback(address);
        }, function (error) {
            // console.log( "error: ",error  );
            if (stateCallback) stateCallback({ address: "unknown", memo: null });
        });
    }, function (error) {
        // console.log( "error: ",error  );
        if (stateCallback) stateCallback({ address: "unknown", memo: null });
    }).catch(function (err) {
        console.log("fetch error:", err);
    });
}

function validateAddress(_ref2) {
    var _ref2$url = _ref2.url,
        url = _ref2$url === undefined ? api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].BASE : _ref2$url,
        walletType = _ref2.walletType,
        newAddress = _ref2.newAddress;

    if (!newAddress) return new Promise(function (res) {
        return res();
    });
    return fetch(url + "/wallets/" + walletType + "/check-address", {
        method: "post",
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({ address: newAddress })
    }).then(function (reply) {
        return reply.json().then(function (json) {
            return json.isValid;
        });
    }).catch(function (err) {
        console.log("validate error:", err);
    });
}

function hasWithdrawalAddress(wallet) {
    return rudexStorage.has("history_address_" + wallet);
}

function setWithdrawalAddresses(_ref3) {
    var wallet = _ref3.wallet,
        addresses = _ref3.addresses;

    rudexStorage.set("history_address_" + wallet, addresses);
}

function getWithdrawalAddresses(wallet) {
    return rudexStorage.get("history_address_" + wallet, []);
}

function setLastWithdrawalAddress(_ref4) {
    var wallet = _ref4.wallet,
        address = _ref4.address;

    rudexStorage.set("history_address_last_" + wallet, address);
}

function getLastWithdrawalAddress(wallet) {
    return rudexStorage.get("history_address_last_" + wallet, "");
}

var WithdrawAddresses = {
    has: hasWithdrawalAddress,
    set: setWithdrawalAddresses,
    get: getWithdrawalAddresses,
    setLast: setLastWithdrawalAddress,
    getLast: getLastWithdrawalAddress
};

/***/ }),

/***/ 2561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(589);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RuDexDepositAddressCache = function () {
    function RuDexDepositAddressCache() {
        _classCallCheck(this, RuDexDepositAddressCache);

        // increment this to force generating new addresses for all mappings
        this.current_rudex_address_cache_version_string = "1";
    }

    _createClass(RuDexDepositAddressCache, [{
        key: "getIndexForDepositKeyInExchange",
        value: function getIndexForDepositKeyInExchange(account_name, input_coin_type, output_coin_type) {
            var args = [this.current_rudex_address_cache_version_string, account_name, input_coin_type, output_coin_type];
            return args.reduce(function (previous, current) {
                return previous.concat("[", current, "]");
            }, "");
        }

        // returns {"address": address, "memo": memo}, with a null memo if not applicable

    }, {
        key: "getCachedInputAddress",
        value: function getCachedInputAddress(exchange_name, account_name, input_coin_type, output_coin_type) {
            var wallet = stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__["default"].getWallet();
            if (!wallet) return null;
            wallet.deposit_keys = wallet.deposit_keys || {};
            wallet.deposit_keys[exchange_name] = wallet.deposit_keys[exchange_name] || {};
            var index = this.getIndexForDepositKeyInExchange(account_name, input_coin_type, output_coin_type);
            wallet.deposit_keys[exchange_name][index] = wallet.deposit_keys[exchange_name][index] || [];

            var number_of_keys = wallet.deposit_keys[exchange_name][index].length;
            if (number_of_keys) return wallet.deposit_keys[exchange_name][index][number_of_keys - 1];
            return null;
        }
    }, {
        key: "cacheInputAddress",
        value: function cacheInputAddress(exchange_name, account_name, input_coin_type, output_coin_type, address, memo) {
            var wallet = stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__["default"].getWallet();
            if (!wallet) return null;
            wallet.deposit_keys = wallet.deposit_keys || {};
            wallet.deposit_keys[exchange_name] = wallet.deposit_keys[exchange_name] || {};
            var index = this.getIndexForDepositKeyInExchange(account_name, input_coin_type, output_coin_type);
            wallet.deposit_keys[exchange_name][index] = wallet.deposit_keys[exchange_name][index] || [];
            wallet.deposit_keys[exchange_name][index].push({
                address: address,
                memo: memo
            });
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__["default"]._updateWallet();
        }
    }]);

    return RuDexDepositAddressCache;
}(); // RuDexDepositAddressCache

/* harmony default export */ __webpack_exports__["default"] = (RuDexDepositAddressCache);

/***/ }),

/***/ 2566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2550);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1232);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var mrktCashLogo = "" + "images/partner-mrktcash.png";

var RuDexFiatDepositWithdrawal = function (_React$Component) {
    _inherits(RuDexFiatDepositWithdrawal, _React$Component);

    function RuDexFiatDepositWithdrawal(props) {
        _classCallCheck(this, RuDexFiatDepositWithdrawal);

        var _this = _possibleConstructorReturn(this, (RuDexFiatDepositWithdrawal.__proto__ || Object.getPrototypeOf(RuDexFiatDepositWithdrawal)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RuDexFiatDepositWithdrawal, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "render",
        value: function render() {
            if (!this.props.account) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

            var markCashLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                {
                    style: { padding: "12px 1.75rem" },
                    href: "https://mrkt.cash/?r=102",
                    target: "_blank"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { style: { margin: 0, height: 80 }, src: mrktCashLogo })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h1",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.partners.mrktcash.title" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h3",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.partners.mrktcash.description" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    markCashLink
                )
            );
        }
    }]);

    return RuDexFiatDepositWithdrawal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // RuDexFiatDepositWithdrawal


RuDexFiatDepositWithdrawal.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount
};
RuDexFiatDepositWithdrawal = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(RuDexFiatDepositWithdrawal);

/* harmony default export */ __webpack_exports__["default"] = (RuDexFiatDepositWithdrawal);

/***/ }),

/***/ 2567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2568);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(879);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GdexGatewayInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2569);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(730);
/* harmony import */ var _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2570);
/* harmony import */ var _GdexHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2572);
/* harmony import */ var _GdexAgreementModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2573);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_12__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var NodeRSA = __webpack_require__(2574);
var gdexPublicKey = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCH+QtHPKcWxdL25xL4pCuu16tKh6yPx/TFnd/8\n" + "cSt2TC+sPuYsD0h/sy4VKNxhBb7F7U/TLXjMxNcSfPVPjPM3X2LvOlmU9LOEcJGrmlmOOiyO/kws\n" + "yKKOhR4UyZ1NghhfHjuyDBj6V8fCL+xBZTJWsh/X61Z0wLCwOzXcQCsNJwIDAQAB\n" + "-----END PUBLIC KEY-----");

var GdexGateway = function (_React$Component) {
    _inherits(GdexGateway, _React$Component);

    function GdexGateway(props) {
        _classCallCheck(this, GdexGateway);

        var _this2 = _possibleConstructorReturn(this, (GdexGateway.__proto__ || Object.getPrototypeOf(GdexGateway)).call(this));

        var action = props.viewSettings.get(props.provider + "Action", "deposit");

        _this2.state = {
            coins: null,
            activeCoinInfo: _this2._getActiveCoinInfo(props, { action: action }),
            action: action,
            down: false,
            isAvailable: true,
            user_info: null,
            isAgree: false,
            agreeChecked: true,
            agreeNotice: false,
            locale: props.viewSettings.get("locale"),
            intermediate: null,
            memo_rule: null
        };
        _this2.user_info_cache = new _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_8__["default"]();
        return _this2;
    }

    _createClass(GdexGateway, [{
        key: "_getActiveCoinInfo",
        value: function _getActiveCoinInfo(props, state) {
            var cachedCoinName = props.viewSettings.get("activeCoin_" + props.provider + "_" + state.action, null);
            var cachedCoinId = props.viewSettings.get("activeCoinId_" + props.provider, null);
            var firstTimeCoinName = null;
            if (state.action == "deposit") {
                firstTimeCoinName = "BTC";
            } else {
                firstTimeCoinName = "GDEX.BTC";
            }
            var firstTimeCoinId = 1002;
            var activeCoinName = cachedCoinName ? cachedCoinName : firstTimeCoinName;
            var activeCoinId = cachedCoinId ? cachedCoinId : firstTimeCoinId;
            this._getWithdrawRule(activeCoinId);
            return { name: activeCoinName, id: activeCoinId };
        }
    }, {
        key: "_transformCoin",
        value: function _transformCoin(data) {
            var result = [];
            try {
                data.filter(function (asset) {
                    return asset.status != 0;
                }).forEach(function (asset) {
                    var coin = {};
                    if (asset.type == 1) {
                        // inner asset
                        coin.innerAssetId = asset.assetId;
                        coin.innerAssetName = asset.assetName;
                        coin.innerSymbol = asset.assetSymbol;
                        coin.outerAssetId = asset.relationId;
                        coin.outerAssetName = asset.relationSymbol;
                        coin.outerSymbol = asset.relationSymbol;
                        coin.status = asset.withdrawStatus;
                        coin.gateFee = asset.withdrawFees;
                        coin.needMemo = asset.needMemo;
                        coin.minTransactionAmount = asset.minWithdrawAmount;
                        coin.type = asset.type;
                        coin.relationPrecision = asset.relationPrecision;
                    } else if (asset.type == 2) {
                        // outer asset
                        coin.innerAssetId = asset.relationId;
                        coin.innerAssetName = asset.relationSymbol;
                        coin.innerSymbol = asset.relationSymbol;
                        coin.outerAssetId = asset.assetId;
                        coin.outerAssetName = asset.assetName;
                        coin.outerSymbol = asset.assetSymbol;
                        coin.status = asset.depositStatus;
                        coin.gateFee = asset.depositFees;
                        coin.needMemo = asset.needMemo;
                        coin.minTransactionAmount = asset.minDepositAmount;
                        coin.type = asset.type;
                        coin.relationPrecision = asset.relationPrecision;
                    } else {
                        coin = null;
                    }
                    if (coin) result.push(coin);
                });
            } catch (err) {
                console.log("Transform coin failed: ", err);
            }
            return result;
        }
    }, {
        key: "_getUserInfo",
        value: function _getUserInfo() {
            var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var isAgree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!userName) userName = this.props.account.get("name");
            if (!isAgree) isAgree = this.state.isAgree;
            //User must agree to the agreement
            if (!isAgree) return;

            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["fetchUserInfo"])({ userAccount: userName, isAgree: isAgree });
            var _this = this;
            result.then(function (res) {
                var user = res.user;
                _this.setState({
                    isAgree: true,
                    user_info: { user_id: user.uid, status: user.status }
                });
                if (user.status == 0 && user.agreeAgreement) {
                    _this.user_info_cache.cacheUserInfo(userName, user.uid, user.status);
                } else {
                    _this.user_info_cache.delUserInfo(userName);
                }
            });
            result.catch(function (err) {
                console.log("Exception in fetching user info: " + err);
            });
        }
    }, {
        key: "_getCoins",
        value: function _getCoins() {
            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["fetchAssets"])({ userAccount: this.props.account.get("name") });

            var _this = this;
            result.then(function (data) {
                var trans_data = _this._transformCoin(data.assets);
                _this.setState({ isAvailable: true, coins: trans_data });
            }, function (errMsg) {
                console.log("fail" + errMsg);
            });
            result.catch(function (err) {
                console.log(err);
                _this.setState({ isAvailable: false });
            });
        }
    }, {
        key: "_checkIsAgree",
        value: function _checkIsAgree() {
            var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!userName) userName = this.props.account.get("name");
            var user_info = this.user_info_cache.getUserInfo(userName);
            if (user_info) {
                this.setState({ user_info: user_info, isAgree: true });
                return;
            }
            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["userAgreement"])({ userAccount: userName });
            var _this = this;
            result.then(function (data) {
                if (data.agree) {
                    _this.setState({ isAgree: true });
                    _this._getUserInfo(userName, true);
                } else {
                    _this.setState({ isAgree: false });
                }
            }, function (errMsg) {
                console.log("fail" + errMsg);
            });
            result.catch(function (err) {
                console.log(err);
                _this.setState({ isAvailable: false });
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkIsAgree();
            this._getCoins();
        }
    }, {
        key: "_getWithdrawAssetId",
        value: function _getWithdrawAssetId(assetName) {
            var assetType = 1;
            var assetSymbol = "innerSymbol";
            if (this.state.action == "deposit") {
                assetType = 2;
                assetSymbol = "outerSymbol";
            }
            var assetId = this.state.coins.filter(function (coin) {
                return coin.type == assetType && coin[assetSymbol] == assetName;
            })[0].innerAssetId;
            return assetId;
        }
    }, {
        key: "onSelectCoin",
        value: function onSelectCoin(e) {
            var activeCoinInfo = this.state.activeCoinInfo;
            activeCoinInfo.name = e.target.value;
            var assetId = this._getWithdrawAssetId(e.target.value);
            activeCoinInfo.id = assetId;
            this.setState({
                activeCoinInfo: activeCoinInfo
            });
            this._getWithdrawRule(assetId);
            var setting = {};
            setting["activeCoin_" + this.props.provider + "_" + this.state.action] = e.target.value;
            setting["activeCoinId_" + this.props.provider] = assetId;
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting(setting);
        }
    }, {
        key: "_getWithdrawRule",
        value: function _getWithdrawRule(assetId) {
            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["fetchWithdrawRule"])({ assetId: assetId });
            var _this = this;
            result.then(function (data) {
                var intermediate = gdexPublicKey.decryptPublic(data.transferToAccount, "utf-8");
                _this.setState({
                    intermediate: intermediate,
                    memo_rule: data.memoRule
                });
            }, function (errMsg) {
                console.log("fail" + errMsg);
                _this.setState({ intermediate: null });
            });
            result.catch(function (err) {
                console.log(err);
                _this.setState({ intermediate: null });
            });
        }
    }, {
        key: "changeAction",
        value: function changeAction(type) {
            var activeCoinInfo = this._getActiveCoinInfo(this.props, {
                action: type
            });
            this.setState({
                action: type,
                activeCoinInfo: activeCoinInfo
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting(_defineProperty({}, this.props.provider + "Action", type));
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.account != nextProps.account) {
                this._checkIsAgree(nextProps.account.get("name"));
            }
        }
    }, {
        key: "_updateCheck",
        value: function _updateCheck() {
            this.setState({ agreeChecked: !this.state.agreeChecked });
            this.setState({ agreeNotice: false });
        }
    }, {
        key: "_showUserAgreement",
        value: function _showUserAgreement() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_12___default.a.publish("gdex_agreement", "open");
        }
    }, {
        key: "_registerUser",
        value: function _registerUser() {
            if (this.state.agreeChecked) {
                this._getUserInfo(null, true);
            } else {
                this.setState({ agreeNotice: true });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var account = this.props.account;
            var _state = this.state,
                coins = _state.coins,
                activeCoinInfo = _state.activeCoinInfo,
                action = _state.action,
                isAvailable = _state.isAvailable,
                user_info = _state.user_info,
                isAgree = _state.isAgree,
                agreeChecked = _state.agreeChecked,
                agreeNotice = _state.agreeNotice,
                intermediate = _state.intermediate,
                memo_rule = _state.memo_rule;

            var issuer = {
                ticket: "https://support.gdex.io/",
                qq: "602573197",
                telgram: "https://t.me/GDEXer"
            };
            var supportContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.support_gdex" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "Help:",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            href: issuer.ticket,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        issuer.ticket
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "QQ:",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            target: "_blank",
                            href: "//shang.qq.com/wpa/qunwpa?idkey=5d192c325146762cf5a9256038fed9faef4fcace21a36882854354dd1d599f11",
                            rel: "noopener noreferrer"
                        },
                        issuer.qq
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "Telegram:",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            href: issuer.telgram,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        issuer.telgram
                    )
                )
            );
            if (!isAgree) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            style: { marginRight: "10px" },
                            checked: agreeChecked,
                            onChange: this._updateCheck.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "txtlabel",
                            content: "gateway.agreement.hint"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this._showUserAgreement.bind(this) },
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                className: "txtlabel",
                                content: "gateway.agreement.name"
                            })
                        )
                    ),
                    agreeNotice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "txtlabel",
                            content: "gateway.agreement.notice"
                        })
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "buttonGroup" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                style: { marginTop: "20px" },
                                onClick: this._registerUser.bind(this),
                                className: " button"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                className: "txtlabel",
                                content: "gateway.agreement.register"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_11__["default"],
                        { id: "gdex_agreement", overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexAgreementModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                locale: this.props.settings.get("locale", "en")
                            })
                        )
                    ),
                    supportContent
                );
            }
            if (!coins && isAvailable) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], null);
            }
            if (!isAvailable) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable",
                        component: "h4"
                    })
                );
            }

            var assetSymbol = null;
            var assetId = null;
            var actionType = null;
            if (action == "deposit") {
                assetId = "outerAssetId";
                assetSymbol = "outerSymbol";
                actionType = 2;
            } else {
                assetId = "innerAssetId";
                assetSymbol = "innerSymbol";
                actionType = 1;
            }
            coins = coins.filter(function (coin) {
                return coin.type == actionType;
            });
            var coinOptions = coins.map(function (coin) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: coin[assetSymbol], key: coin[assetSymbol] },
                    coin[assetSymbol]
                );
            }).filter(function (a) {
                return a !== null;
            });

            var coin = coins.filter(function (coin) {
                return coin[assetSymbol] == activeCoinInfo.name;
            })[0];

            var infos = null;
            if (!coin || coin.status != 0) {
                infos = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "left-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.asset_unavailable",
                        asset: activeCoinInfo.name,
                        component: "h4"
                    })
                );
            } else if (!user_info) {
                infos = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "left-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.user_unavailable",
                        component: "h4"
                    })
                );
            } else if (user_info.status != 0) {
                infos = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "left-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.frozen",
                        account: account.get("name"),
                        component: "h4"
                    })
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-margin vertical medium-horizontal no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                {
                                    style: { minHeight: "2rem" },
                                    className: "left-label"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    content: "gateway.choose_" + action
                                }),
                                ":",
                                " "
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "external-coin-types bts-select",
                                    onChange: this.onSelectCoin.bind(this),
                                    value: activeCoinInfo.name
                                },
                                coinOptions
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-6 medium-offset-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                                style: { minHeight: "2rem" },
                                className: "left-label"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.gateway_text" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { paddingBottom: 15 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "button-group segmented no-margin" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "deposit" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "deposit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.deposit" })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "withdraw" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "withdraw")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.withdraw" })
                                    )
                                )
                            )
                        )
                    )
                ),
                infos ? infos : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexGatewayInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            account: account,
                            coin: coin,
                            issuer_account: intermediate,
                            user_id: user_info.user_id,
                            action: this.state.action,
                            gateway: "gdex",
                            btsCoin: coin.innerSymbol,
                            memo_rule: memo_rule
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexHistory__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        userId: user_info.user_id,
                        userAccount: account.get("name"),
                        assetId: coin[assetId],
                        assetName: coin[assetSymbol],
                        compactView: true,
                        fullHeight: true,
                        recordType: action == "deposit" ? 1 : 2,
                        filter: "transfer",
                        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            content: "gateway.recent_" + this.state.action
                        })
                    })
                ),
                supportContent
            );
        }
    }]);

    return GdexGateway;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_5__["connect"])(GdexGateway, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().viewSettings,
            settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().settings
        };
    }
}));

/***/ }),

/***/ 2568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWithdrawRule", function() { return fetchWithdrawRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAgreement", function() { return userAgreement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAssets", function() { return fetchAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfo", function() { return fetchUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionRecordList", function() { return getTransactionRecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepositRecordList", function() { return getDepositRecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWithdrawRecordList", function() { return getWithdrawRecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(735);



var gdexStorage = new _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"]("");

var assetsRequest = {};
var REQUEST_TIMEOUT = 10000;

function fetchWithdrawRule(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].WITHDRAW_RULE, timeout);
}

function userAgreement(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].USER_AGREEMENT, timeout);
}

function fetchAssets(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    if (!reqBody.requestType) reqBody.requestType = 0;
    if (!reqBody.assetType) reqBody.assetType = 0;
    if (!reqBody.version) reqBody.version = "1.1";
    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].ASSET_LIST, timeout);
}

//"userAccount"
function fetchUserInfo(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].GET_USER_INFO, timeout);
}

function validateAddress(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    if (!reqBody.address) return new Promise(function (res) {
        return res();
    });
    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].CHECK_WITHDRAY_ADDRESS, timeout);
}

function requestDepositAddress(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].GET_DEPOSIT_ADDRESS, timeout);
}

function getTransactionRecordList(reqBody, type) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    if (type == 1) return getDepositRecordList(reqBody, timeout);else if (type == 2) return getWithdrawRecordList(reqBody, timeout);else return new Promise(function (res) {
        return res();
    });
}

function getDepositRecordList(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].DEPOSIT_RECORD_LIST, timeout);
}

function getWithdrawRecordList(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].WITHDRAW_RECORD_LIST, timeout);
}

function requestSimple(reqBody, reqUrl) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    if (timeout == -1) {
        return requestWithTimeout(reqBody, reqUrl, REQUEST_TIMEOUT);
    } else if (timeout == 0) {
        return requestWithoutTimeout(reqBody, reqUrl);
    } else {
        return requestWithTimeout(reqBody, reqUrl, timeout);
    }
}

function requestWithTimeout(reqBody, reqUrl, timeout) {
    if (!reqBody.requestChannel) reqBody.requestChannel = 0;
    if (!reqBody.version) reqBody.version = "1.0";
    if (!reqBody.timestamp) reqBody.timestamp = new Date().getTime();
    if (!reqBody.outerChannel) reqBody.outerChannel = "Bitshares";
    var body_string = JSON.stringify(reqBody);
    if (assetsRequest[body_string]) return;
    assetsRequest[body_string] = true;
    return Promise.race([new Promise(function (resolve, reject) {
        fetch(reqUrl, {
            method: "post",
            headers: new Headers({
                Accept: "application/json",
                "Content-Type": "application/json"
            }),
            body: body_string
            // mode: "no-cors"
        }).then(function (reply) {
            reply.json().then(function (json) {
                delete assetsRequest[body_string];
                if (json.code !== 0) {
                    console.log(json);
                    reject({ code: json.code, message: json.message });
                }
                resolve(json.data);
            }).catch(function (err) {
                delete assetsRequest[body_string];
                reject({ code: -1, message: err.message });
            });
        });
    }), new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject({ code: -2, message: "Request timeout." });
        }, timeout);
    })]);
}

function requestWithoutTimeout(reqBody, reqUrl) {
    if (!reqBody.requestChannel) reqBody.requestChannel = 0;
    if (!reqBody.version) reqBody.version = "1.0";
    if (!reqBody.timestamp) reqBody.timestamp = new Date().getTime();
    if (!reqBody.outerChannel) reqBody.outerChannel = "Bitshares";
    var body_string = JSON.stringify(reqBody);
    if (assetsRequest[body_string]) return;
    assetsRequest[body_string] = true;
    new Promise(function (resolve, reject) {
        fetch(reqUrl, {
            method: "post",
            headers: new Headers({
                Accept: "application/json",
                "Content-Type": "application/json"
            }),
            body: body_string
        }).then(function (reply) {
            reply.json().then(function (json) {
                delete assetsRequest[body_string];
                if (json.code !== 0) {
                    console.log(json);
                    reject({ code: json.code, message: json.message });
                }
                resolve(json.data);
            }).catch(function (err) {
                delete assetsRequest[body_string];
                reject({ code: -1, message: err.message });
            });
        });
    });
}

function hasWithdrawalAddress(wallet) {
    return gdexStorage.has("gdex_history_address_" + wallet);
}

function setWithdrawalAddresses(_ref) {
    var wallet = _ref.wallet,
        addresses = _ref.addresses;

    gdexStorage.set("gdex_history_address_" + wallet, addresses);
}

function getWithdrawalAddresses(wallet) {
    return gdexStorage.get("gdex_history_address_" + wallet, []);
}

function setLastWithdrawalAddress(_ref2) {
    var wallet = _ref2.wallet,
        address = _ref2.address;

    gdexStorage.set("gdex_history_address_last_" + wallet, address);
}

function getLastWithdrawalAddress(wallet) {
    return gdexStorage.get("gdex_history_address_last_" + wallet, "");
}

var WithdrawAddresses = {
    has: hasWithdrawalAddress,
    set: setWithdrawalAddresses,
    get: getWithdrawalAddresses,
    setLast: setLastWithdrawalAddress,
    getLast: getLastWithdrawalAddress
};

/***/ }),

/***/ 2569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(895);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1217);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1332);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2550);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(865);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2570);
/* harmony import */ var _lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2568);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1248);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _GdexWithdrawModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var GdexGatewayInfo = function (_React$Component) {
    _inherits(GdexGatewayInfo, _React$Component);

    function GdexGatewayInfo() {
        _classCallCheck(this, GdexGatewayInfo);

        var _this2 = _possibleConstructorReturn(this, (GdexGatewayInfo.__proto__ || Object.getPrototypeOf(GdexGatewayInfo)).call(this));

        _this2.state = {
            receive_address: null,
            isAvailable: true,
            qrcode: ""
        };
        _this2.deposit_address_cache = new _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_9__["default"]();
        _this2._copy = _this2._copy.bind(_this2);
        document.addEventListener("copy", _this2._copy);
        return _this2;
    }

    _createClass(GdexGatewayInfo, [{
        key: "getDepositAddress",
        value: function getDepositAddress() {
            this._getDepositAddress(this.props.user_id, this.props.account.get("name"), this.props.coin, this.props.action);
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress(user_id, user_name, coin, action) {
            // The coin can only support withdraw sometime, no need to call get deposit address
            if (action != "deposit") return;

            var cached_receive_address = this.deposit_address_cache.getCachedInputAddress(user_name, coin.outerSymbol, coin.innerSymbol);
            if (cached_receive_address && cached_receive_address != this.state.receive_address) {
                this.setState({ receive_address: cached_receive_address });
                return;
            }
            // Get address from server side
            var _this = this;
            Object(_lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["requestDepositAddress"])({
                btsAssetId: coin.innerAssetId,
                outAssetId: coin.outerAssetId,
                uid: user_id,
                userAccount: user_name
            }).then(function (data) {
                if (data.address && data.address.address) {
                    var receive_address = {
                        address: data.address.address,
                        memo: data.address.memo
                    };
                    _this.deposit_address_cache.cacheInputAddress(user_name, coin.outerSymbol, coin.innerSymbol, receive_address.address, receive_address.memo);
                    _this.setState({ receive_address: receive_address });
                } else {
                    _this.setState({ receive_address: null });
                }
            }).catch(function (err) {
                _this.setState({ receive_address: null });
                console.log(err);
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getDepositAddress();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.user_id !== this.props.user_id || np.action !== this.props.action || np.coin != this.props.coin) {
                this._getDepositAddress(np.user_id, np.account.get("name"), np.coin, np.action);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("copy", this._copy);
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "withdraw_asset_" + this.props.issuer_account.get("name") + "_" + this.props.coin.innerSymbol;
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8___default.a.publish(this.getWithdrawModalId(), "open");
        }
    }, {
        key: "onShowQrcode",
        value: function onShowQrcode(text) {
            this.setState({ qrcode: text }, function () {
                return react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_8___default.a.publish("qrcode", "open");
            });
        }
    }, {
        key: "_copy",
        value: function _copy(e) {
            try {
                if (this.state.clipboardText) e.clipboardData.setData("text/plain", this.state.clipboardText);else e.clipboardData.setData("text/plain", counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("gateway.use_copy_button").toUpperCase());
                e.preventDefault();
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "toClipboard",
        value: function toClipboard(clipboardText) {
            try {
                this.setState({ clipboardText: clipboardText }, function () {
                    document.execCommand("copy");
                });
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: "none", minHeight: 150 } });
            if (!this.props.account || !this.props.issuer_account || !this.props.coin) return emptyRow;
            var _props = this.props,
                coin = _props.coin,
                btsCoin = _props.btsCoin;
            // asset is not loaded

            if (!btsCoin) return emptyRow;
            var receive_address = this.state.receive_address;
            var qrcode = this.state.qrcode;
            var withdraw_modal_id = this.getWithdrawModalId();
            var deposit_address_fragment = null;
            var clipboardText = "";
            var memoText = "";
            var deposit_memo_fragment = null;

            var withdraw_memo_prefix = coin.outerSymbol + ":";
            if (this.props.action === "deposit") {
                if (receive_address) {
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                    clipboardText = receive_address.address;
                    if (receive_address.memo) {
                        deposit_memo_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            receive_address.memo
                        );
                        memoText = receive_address.memo;
                    }
                }
                withdraw_memo_prefix = "";
            }
            var balance = null;
            var account_balances_object = this.props.account.get("balances");

            if (account_balances_object) balance = account_balances_object.toJS()[btsCoin.get("id")];

            if (this.props.action === "deposit") {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h4",
                            content: "gateway.deposit_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_deposit"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            coin.outerSymbol
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                name: coin.innerSymbol,
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            component: "td",
                                            content: "gateway.your_account"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                account: this.props.account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: coin.innerSymbol,
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h4",
                            content: "gateway.deposit_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.deposit_to",
                                asset: coin.outerSymbol
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { color: "red" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.deposit_warning",
                                asset: coin.outerSymbol
                            })
                        ),
                        memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { color: "red" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.deposit_warning_memo",
                                asset: coin.outerSymbol
                            })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.address" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            deposit_address_fragment
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    style: { width: "125px" },
                                                    className: "button",
                                                    onClick: this.toClipboard.bind(this, clipboardText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.copy_address" })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    className: "button",
                                                    onClick: this.onShowQrcode.bind(this, clipboardText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "modal.qrcode.label" })
                                            )
                                        )
                                    ),
                                    memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.memo" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            memoText
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    style: { width: "125px" },
                                                    className: "button",
                                                    onClick: this.toClipboard.bind(this, memoText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.copy_memo" })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    className: "button",
                                                    onClick: this.onShowQrcode.bind(this, memoText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "modal.qrcode.label" })
                                            )
                                        )
                                    ) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_6__["default"],
                                { id: "qrcode", overlay: true },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DepositQrCodeModal, { text: qrcode })
                            )
                        )
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_withdraw"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                name: coin.innerSymbol,
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            coin.outerSymbol
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: coin.innerSymbol,
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.withdraw_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group", style: { paddingTop: 20 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button success",
                                    style: { fontSize: "1.3rem" },
                                    onClick: this.onWithdraw.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw_now" }),
                                " "
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_6__["default"],
                        { id: withdraw_modal_id, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexWithdrawModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                account: this.props.account.get("name"),
                                issuer: this.props.issuer_account.get("name"),
                                asset: coin.innerSymbol,
                                output_coin_name: coin.outerAssetName,
                                gateFee: coin.gateFee,
                                output_coin_id: coin.outerAssetId,
                                output_coin_symbol: coin.outerSymbol,
                                output_supports_memos: coin.needMemo == 1,
                                minWithdrawAmount: coin.minTransactionAmount,
                                output_coin_precision: coin.relationPrecision,
                                memo_prefix: withdraw_memo_prefix,
                                memo_rule: this.props.memo_rule,
                                modal_id: withdraw_modal_id,
                                balance: balance
                            })
                        )
                    )
                );
            }
        }
    }]);

    return GdexGatewayInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

GdexGatewayInfo.propTypes = {
    // inner_asset_name:               PropTypes.string,
    // outer_asset_name:           PropTypes.string,
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount,
    issuer_account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount,
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    btsCoin: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAsset,
    memo_rule: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string
};
GdexGatewayInfo.defaultProps = {
    autosubscribe: false
};

var DepositQrCodeModal = function (_React$Component2) {
    _inherits(DepositQrCodeModal, _React$Component2);

    function DepositQrCodeModal(props) {
        _classCallCheck(this, DepositQrCodeModal);

        return _possibleConstructorReturn(this, (DepositQrCodeModal.__proto__ || Object.getPrototypeOf(DepositQrCodeModal)).call(this, props));
    }

    _createClass(DepositQrCodeModal, [{
        key: "render",
        value: function render() {
            var text = this.props.text;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "small-12", style: { textAlign: "center" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_11___default.a, { size: 200, value: text }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    null,
                    text
                )
            );
        }
    }]);

    return DepositQrCodeModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_1__["default"])(GdexGatewayInfo));

/***/ }),

/***/ 2570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var session = new common_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"]("__gdex__user_");

var GdexCache = function () {
    function GdexCache() {
        _classCallCheck(this, GdexCache);

        this.current_gdex_address_cache_version_string = "1";
        this.day = 86400;
    }

    _createClass(GdexCache, [{
        key: "getUserInfo",
        value: function getUserInfo(user_account) {
            var user_info = session.get(user_account, null);
            if (!user_info) return null;
            var cur_time = Math.floor(new Date().getTime() / 1000);
            // User info expire time set to 1 day
            if (Math.abs(user_info.ctime - cur_time) > this.day) {
                session.remove(user_account);
                return null;
            }
            return user_info;
        }
    }, {
        key: "cacheUserInfo",
        value: function cacheUserInfo(user_account, user_id, status) {
            var user_info = session.get(user_account, {});
            if (user_info != {}) {
                user_info = {
                    user_id: user_id,
                    status: status,
                    ctime: Math.floor(new Date().getTime() / 1000)
                };
                session.set(user_account, user_info);
            }
        }
    }, {
        key: "delUserInfo",
        value: function delUserInfo(user_account) {
            if (session.has(user_account)) session.del(user_account);
        }
    }, {
        key: "getIndexForDepositKey",
        value: function getIndexForDepositKey(account_name, input_coin_type, output_coin_type) {
            var args = [this.current_gdex_address_cache_version_string, account_name, input_coin_type, output_coin_type];
            return args.reduce(function (previous, current) {
                return previous.concat("[", current, "]");
            }, "");
        }
    }, {
        key: "getCachedInputAddress",
        value: function getCachedInputAddress(account_name, input_coin_type, output_coin_type) {
            var index = this.getIndexForDepositKey(account_name, input_coin_type, output_coin_type);
            var deposit_keys = session.get("deposit_keys", {});
            var result = deposit_keys[index] || null;
            if (!result) return;
            if (result.address) {
                // cache deposit address for 1 week
                var cur_time = Math.floor(new Date().getTime() / 1000);
                if (Math.abs(result.ctime - cur_time) > this.day) {
                    this.clearInputAddress(account_name, input_coin_type, output_coin_type);
                    return null;
                }
                return result;
            }
            return null;
        }
    }, {
        key: "cacheInputAddress",
        value: function cacheInputAddress(account_name, input_coin_type, output_coin_type, address, memo) {
            var index = this.getIndexForDepositKey(account_name, input_coin_type, output_coin_type);
            var deposit_keys = session.get("deposit_keys", {});
            deposit_keys[index] = {
                address: address,
                memo: memo,
                ctime: Math.floor(new Date().getTime() / 1000)
            };
            session.set("deposit_keys", deposit_keys);
        }
    }, {
        key: "clearInputAddress",
        value: function clearInputAddress(account_name, input_coin_type, output_coin_type) {
            var index = this.getIndexForDepositKey(account_name, input_coin_type, output_coin_type);
            var deposit_keys = session.get("deposit_keys", null);
            if (!deposit_keys) return;
            if (!deposit_keys[index]) {
                // Deposit key is empty, no need to clear
                return;
            }
            deposit_keys[index] = { address: null, memo: null, ctime: null };
            session.set("deposit_keys", deposit_keys);
        }
    }]);

    return GdexCache;
}();

/* harmony default export */ __webpack_exports__["default"] = (GdexCache);

/***/ }),

/***/ 2571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1232);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1012);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(565);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2568);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(416);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(866);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(581);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(582);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var GdexWithdrawModal = function (_React$Component) {
    _inherits(GdexWithdrawModal, _React$Component);

    function GdexWithdrawModal(props) {
        _classCallCheck(this, GdexWithdrawModal);

        var _this = _possibleConstructorReturn(this, (GdexWithdrawModal.__proto__ || Object.getPrototypeOf(GdexWithdrawModal)).call(this, props));

        _this.state = {
            withdraw_amount: _this.props.amount_to_withdraw,
            withdraw_address: common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_coin_name),
            withdraw_address_check_in_progress: true,
            withdraw_address_is_valid: null,
            options_is_valid: false,
            withdraw_address_selected: common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_coin_name),
            memo: "",
            withdraw_address_first: true,
            empty_withdraw_value: false,
            below_minumum_withdraw_value: false,
            precision_error: false,
            memo_error: false,
            memo_length_error: false,
            from_account: props.account,
            fee_asset_id: "1.3.0",
            feeStatus: {},
            withdraw_address_error_code: null,
            withdraw_address_error_message: null
        };

        _this._validateAddress(_this.state.withdraw_address, props);

        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);
        return _this;
    }

    _createClass(GdexWithdrawModal, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.unMounted = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            var _this2 = this;

            if (np.output_coin_name != this.props.output_coin_name) {
                this.setState({
                    withdraw_address: common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(np.output_coin_name),
                    withdraw_address_selected: common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(np.output_coin_name)
                });
            }
            if (np.account !== this.state.from_account && np.account !== this.props.account) {
                this.setState({
                    from_account: np.account,
                    feeStatus: {},
                    fee_asset_id: "1.3.0",
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus();
                });
            }
        }
    }, {
        key: "_assembleMemo",
        value: function _assembleMemo() {
            var _this3 = this;

            var memo_rule = this.props.memo_rule;
            var memo_message = "";
            try {
                if (memo_rule) {
                    memo_rule.split(";").forEach(function (item) {
                        switch (item[0]) {
                            case "C":
                                memo_message += item.slice(2);
                                break;
                            case "D":
                                memo_message += _this3.state.withdraw_address;
                                break;
                            case "B":
                                memo_message += item.slice(2);
                                break;
                            case "S":
                                memo_message += _this3.state.memo;
                                break;
                        }
                    });
                    if (memo_message.length > 100) {
                        this.setState({ memo_length_error: true });
                        return null;
                    } else {
                        this.setState({ memo_length_error: false });
                    }
                    this.setState({ memo_error: false });
                    return memo_message;
                }
            } catch (err) {
                console.log(err);
            }
            this.setState({ memo_error: true });
            return null;
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this4 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var fee_asset_id = state.fee_asset_id,
                from_account = state.from_account;

            var _getAvailableAssets2 = this._getAvailableAssets(state),
                fee_asset_types = _getAvailableAssets2.fee_asset_types;

            if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
                fee_asset_id = fee_asset_types[0];
            }

            if (!from_account) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                accountID: from_account.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: this._assembleMemo()
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                if (_this4.unMounted) return;

                _this4.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this4._checkBalance);
            });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this5 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

            var account = state.from_account;
            if (!account) return;

            var _getAvailableAssets3 = this._getAvailableAssets(state),
                assets = _getAvailableAssets3.fee_asset_types;
            // const assets = ["1.3.0", this.props.asset.get("id")];


            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this5.props.output_coin_name + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(state.feeStatus, feeStatus)) {
                    _this5.setState({
                        feeStatus: feeStatus
                    });
                }
                _this5._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "onWithdrawAmountChange",
        value: function onWithdrawAmountChange(_ref2) {
            var amount = _ref2.amount;

            this.setState({
                withdraw_amount: amount,
                empty_withdraw_value: amount !== undefined && !parseFloat(amount)
            }, this._checkBalance);
        }
    }, {
        key: "onSelectChanged",
        value: function onSelectChanged(index) {
            var new_withdraw_address = common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_coin_symbol)[index];
            common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_coin_symbol,
                address: new_withdraw_address
            });

            this.setState({
                withdraw_address_selected: new_withdraw_address,
                options_is_valid: false,
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "onWithdrawAddressChanged",
        value: function onWithdrawAddressChanged(e) {
            var new_withdraw_address = e.target.value.trim();

            this.setState({
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: new_withdraw_address,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(new_withdraw_address) {
            var _this6 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["validateAddress"])({
                assetId: props.output_coin_id,
                assetName: props.output_coin_name,
                address: new_withdraw_address
            }).then(function (data) {
                _this6.setState({
                    withdraw_address_check_in_progress: false,
                    withdraw_address_is_valid: data.valid,
                    withdraw_address_error_code: null,
                    withdraw_address_error_message: null
                });
            }).catch(function (err) {
                var message = err.message;
                var code = err.code;
                if (code < 0) message = "System error: please try again later";
                _this6.setState({
                    withdraw_address_check_in_progress: false,
                    withdraw_address_is_valid: null,
                    withdraw_address_error_code: err.code,
                    withdraw_address_error_message: message
                });
            });
        }
    }, {
        key: "_checkPrecision",
        value: function _checkPrecision() {
            var withdraw_amount = this.state.withdraw_amount;
            var output_coin_precision = this.props.output_coin_precision;

            if (output_coin_precision === "undefined") return;
            if (typeof withdraw_amount !== "string") withdraw_amount = withdraw_amount.toString();
            withdraw_amount = withdraw_amount.trim();
            if (withdraw_amount.indexOf(".") === -1) {
                this.setState({ precision_error: false });
                return;
            }
            if (withdraw_amount.length - withdraw_amount.indexOf(".") - 1 > output_coin_precision) {
                this.setState({ precision_error: true });
            } else {
                this.setState({ precision_error: false });
            }
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                withdraw_amount = _state.withdraw_amount;
            var _props = this.props,
                asset = _props.asset,
                balance = _props.balance,
                minWithdrawAmount = _props.minWithdrawAmount;

            if (!balance) {
                // does not own any asset
                this.setState({ balanceError: true });
                return;
            }
            if (!feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkBalance"])(withdraw_amount, asset, feeAmount, balance);
            // balance is zero
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });

            if (typeof withdraw_amount === "string") withdraw_amount = parseFloat(String.prototype.replace.call(withdraw_amount, /,/g, ""));
            if (typeof minWithdrawAmount === "string") minWithdrawAmount = parseFloat(String.prototype.replace.call(minWithdrawAmount, /,/g, ""));
            if (withdraw_amount < minWithdrawAmount) {
                this.setState({ below_minumum_withdraw_value: true });
                return;
            } else {
                this.setState({ below_minumum_withdraw_value: false });
            }
            this._checkPrecision();
            return hasBalance;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length && this.state.withdraw_amount !== null) {
                if (!this.state.withdraw_address_is_valid) {
                    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "open");
                } else if (parseFloat(this.state.withdraw_amount) > 0) {
                    if (!common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_coin_symbol)) {
                        var withdrawals = [];
                        withdrawals.push(this.state.withdraw_address);
                        common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                            wallet: this.props.output_coin_symbol,
                            addresses: withdrawals
                        });
                    } else {
                        var _withdrawals = common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_coin_symbol);
                        if (_withdrawals.indexOf(this.state.withdraw_address) == -1) {
                            _withdrawals.push(this.state.withdraw_address);
                            common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                                wallet: this.props.output_coin_symbol,
                                addresses: _withdrawals
                            });
                        }
                    }
                    common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                        wallet: this.props.output_coin_symbol,
                        address: this.state.withdraw_address
                    });
                    var asset = this.props.asset;

                    var feeAmount = this.state.feeAmount;


                    var amount = parseFloat(String.prototype.replace.call(this.state.withdraw_amount, /,/g, ""));

                    var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                        asset_id: asset.get("id"),
                        precision: asset.get("precision"),
                        real: amount
                    });
                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this._assembleMemo(), null, feeAmount ? feeAmount.asset_id : "1.3.0");

                    this.setState({
                        empty_withdraw_value: false
                    });
                } else {
                    this.setState({
                        empty_withdraw_value: true
                    });
                }
            }
        }
    }, {
        key: "onSubmitConfirmation",
        value: function onSubmitConfirmation() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "close");

            if (!common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_coin_symbol)) {
                var withdrawals = [];
                withdrawals.push(this.state.withdraw_address);
                common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                    wallet: this.props.output_coin_symbol,
                    addresses: withdrawals
                });
            } else {
                var _withdrawals2 = common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_coin_symbol);
                if (_withdrawals2.indexOf(this.state.withdraw_address) == -1) {
                    _withdrawals2.push(this.state.withdraw_address);
                    common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                        wallet: this.props.output_coin_symbol,
                        addresses: _withdrawals2
                    });
                }
            }
            common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_coin_symbol,
                address: this.state.withdraw_address
            });
            var asset = this.props.asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(asset.get("precision"));
            var amount = String.prototype.replace.call(this.state.withdraw_amount, /,/g, "");

            var feeAmount = this.state.feeAmount;


            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this._assembleMemo(), null, feeAmount ? feeAmount.asset_id : "1.3.0");
        }
    }, {
        key: "onDropDownList",
        value: function onDropDownList() {
            if (common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_coin_symbol)) {
                if (this.state.options_is_valid === false) {
                    this.setState({ options_is_valid: true });
                    this.setState({ withdraw_address_first: false });
                }

                if (this.state.options_is_valid === true) {
                    this.setState({ options_is_valid: false });
                }
            }
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "confirmation";
        }
    }, {
        key: "onAccountBalance",
        value: function onAccountBalance() {
            var feeAmount = this.state.feeAmount;

            if (Object.keys(this.props.account.get("balances").toJS()).includes(this.props.asset.get("id"))) {
                var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                    amount: this.props.balance.get("balance"),
                    asset_id: this.props.asset.get("id"),
                    precision: this.props.asset.get("precision")
                });

                // Subtract the fee if it is using the same asset
                if (total.asset_id === feeAmount.asset_id) {
                    total.minus(feeAmount);
                }

                this.setState({
                    withdraw_amount: total.getAmount({ real: true }),
                    empty_withdraw_value: false
                }, this._checkBalance);
            }
        }
    }, {
        key: "setNestedRef",
        value: function setNestedRef(ref) {
            this.nestedRef = ref;
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(_ref3) {
            var asset = _ref3.asset;

            this.setState({
                fee_asset_id: asset.get("id")
            }, this._updateFee);
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account,
                feeStatus = state.feeStatus;

            function hasFeePoolBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var fee_asset_types = [];
            if (!(from_account && from_account.get("balances"))) {
                return { fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sortID);
            for (var key in account_balances) {
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(key);
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }

                if (asset) {
                    // Remove any assets that do not have valid core exchange rates
                    var priceIsValid = false,
                        p = void 0;
                    try {
                        p = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Price"]({
                            base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "base"]).toJS()),
                            quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "quote"]).toJS())
                        });
                        priceIsValid = p.isValid();
                    } catch (err) {
                        priceIsValid = false;
                    }

                    if (asset.get("id") !== "1.3.0" && !priceIsValid) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }

            fee_asset_types = fee_asset_types.filter(function (a) {
                return hasFeePoolBalance(a) && hasBalance(a);
            });

            return { fee_asset_types: fee_asset_types };
        }
    }, {
        key: "render",
        value: function render() {
            var _state2 = this.state,
                withdraw_address_selected = _state2.withdraw_address_selected,
                memo = _state2.memo;

            var storedAddress = common_gdexMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_coin_symbol);
            var balance = null;

            var account_balances = this.props.account.get("balances").toJS();
            var asset_types = Object.keys(account_balances);

            var withdrawModalId = this.getWithdrawModalId();
            var invalid_address_message = null;
            var options = null;
            var confirmation = null;

            if (this.state.options_is_valid) {
                options = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: !storedAddress.length ? "blocktrades-disabled-options" : "blocktrades-options"
                    },
                    storedAddress.map(function (name, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                key: index,
                                onClick: this.onSelectChanged.bind(this, index)
                            },
                            name
                        );
                    }, this)
                );
            }

            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length) {
                if (!this.state.withdraw_address_is_valid) {
                    if (this.state.withdraw_address_error_code) {
                        invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "has-error", style: { paddingTop: 10 } },
                            this.state.withdraw_address_error_code,
                            ":",
                            " ",
                            this.state.withdraw_address_error_message
                        );
                    } else {
                        invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "has-error", style: { paddingTop: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "gateway.valid_address",
                                coin_type: this.props.output_coin_name
                            })
                        );
                    }

                    confirmation = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default.a,
                        { id: withdrawModalId, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: withdrawModalId },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "a",
                                { href: "#", className: "close-button" },
                                "\xD7"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.title" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onSubmitConfirmation.bind(this),
                                value: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("modal.confirmation.accept")
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                                { close: withdrawModalId },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "a",
                                    { className: "secondary button" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.cancel" })
                                )
                            )
                        )
                    );
                }
            }

            var tabIndex = 1;
            var withdraw_memo = null;

            if (this.props.output_supports_memos) {
                withdraw_memo = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transfer.memo" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                        rows: "3",
                        value: memo,
                        tabIndex: tabIndex++,
                        onChange: this.onMemoChanged.bind(this)
                    }),
                    this.state.memo_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.memo_error" })
                    ) : null,
                    this.state.memo_length_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.memo_length_error" })
                    ) : null
                );
            }

            // Estimate fee VARIABLES

            var _getAvailableAssets4 = this._getAvailableAssets(),
                fee_asset_types = _getAvailableAssets4.fee_asset_types;

            if (asset_types.length > 0) {
                var current_asset_id = this.props.asset.get("id");
                if (current_asset_id) {
                    var current = account_balances[current_asset_id];
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        "\xA0:\xA0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: "set-cursor",
                                onClick: this.onAccountBalance.bind(this)
                            },
                            current ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                balance: account_balances[current_asset_id]
                            }) : 0
                        )
                    );
                } else balance = "No funds";
            } else {
                balance = "No funds";
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-container" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "h3",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "gateway.withdraw_coin",
                                coin: this.props.output_coin_symbol,
                                symbol: this.props.output_coin_name
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            label: "modal.withdraw.amount",
                            amount: this.state.withdraw_amount,
                            asset: this.props.asset.get("id"),
                            assets: [this.props.asset.get("id")],
                            placeholder: "0.0",
                            onChange: this.onWithdrawAmountChange.bind(this),
                            display_balance: balance
                        }),
                        this.state.empty_withdraw_value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.valid" })
                        ) : null,
                        this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.insufficient" })
                        ) : null,
                        this.state.below_minumum_withdraw_value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "transfer.errors.minimum_amount",
                                amount: this.props.minWithdrawAmount,
                                symbol: this.props.asset.get("symbol")
                            })
                        ) : null,
                        this.state.precision_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "transfer.errors.precision",
                                precision: this.props.output_coin_precision
                            })
                        ) : null
                    ),
                    this.state.feeAmount ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block gate_fee" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            refCallback: this.setNestedRef.bind(this),
                            label: "transfer.fee",
                            disabled: true,
                            amount: this.state.feeAmount.getAmount({
                                real: true
                            }),
                            onChange: this.onFeeChanged.bind(this),
                            asset: this.state.feeAmount.asset_id,
                            assets: fee_asset_types,
                            tabIndex: tabIndex++
                        }),
                        !this.state.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noFeeBalance" })
                        ) : null,
                        !this.state.hasPoolBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noPoolBalance" })
                        ) : null
                    ) : null,
                    this.props.gateFee ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "amount-selector right-selector",
                            style: { paddingBottom: 20 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.fee" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "text",
                                disabled: true,
                                value: this.props.gateFee
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "form-label select floating-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "dropdown-wrapper inactive" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        this.props.output_coin_symbol
                                    )
                                )
                            )
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "modal.withdraw.address"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-select-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                    type: "text",
                                    value: withdraw_address_selected,
                                    tabIndex: "4",
                                    onChange: this.onWithdrawAddressChanged.bind(this),
                                    autoComplete: "off"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { onClick: this.onDropDownList.bind(this) },
                                    "\u25BC"
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-position-options" },
                            options
                        ),
                        invalid_address_message
                    ),
                    withdraw_memo,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "button-group" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                onClick: this.onSubmit.bind(this),
                                className: "button" + (this.state.below_minumum_withdraw_value || this.state.memo_error || this.state.memo_length_error || this.state.error || this.state.balanceError || this.state.precision_error ? " disabled" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.withdraw.submit" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: this.props.modal_id },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "button" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.cancel" })
                            )
                        )
                    ),
                    confirmation
                )
            );
        }
    }]);

    return GdexWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

GdexWithdrawModal.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    issuer: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired,
    memo_rule: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject,
    output_supports_memos: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(GdexWithdrawModal));

/***/ }),

/***/ 2572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
/* harmony import */ var _lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2568);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var DEPOSIT_STATUS = {
    1: "confirming",
    2: "waiting",
    3: "transfering",
    4: "success",
    5: "fail"
};
var WITHDRAW_STATUS = {
    1: "confirming",
    2: "auditing",
    3: "audited",
    4: "refused",
    5: "transfering",
    6: "success",
    7: "fail"
};

var GdexHistory = function (_React$Component) {
    _inherits(GdexHistory, _React$Component);

    function GdexHistory(props) {
        _classCallCheck(this, GdexHistory);

        var _this2 = _possibleConstructorReturn(this, (GdexHistory.__proto__ || Object.getPrototypeOf(GdexHistory)).call(this));

        _this2.state = {
            headerHeight: 85,
            pageNum: 0,
            totalNum: 0,
            nextPageEnabled: false,
            allData: {},
            historyStatusType: props.recordType == 1 ? "deposit_history_status" : "withdraw_history_status",
            historyStatusValue: props.recordType == 1 ? DEPOSIT_STATUS : WITHDRAW_STATUS
        };
        return _this2;
    }

    _createClass(GdexHistory, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getTransactionHistory();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.recordType != nextProps.recordType || this.props.assetId != nextProps.assetId || this.props.assetName != nextProps.assetName || this.props.userId != nextProps.userId || this.props.userAccount != nextProps.userAccount) {
                this._getTransactionHistory(nextProps.userId, nextProps.assetId, nextProps.assetName, nextProps.recordType, nextProps.userAccount, true);
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(this.props.userId, nextProps.userId)) {
                return true;
            }
            if (this.state.allData != nextState.allData) {
                return true;
            }
            if (this.state.pageNum != nextState.pageNum) return true;
            return false;
        }
    }, {
        key: "_getTransactionHistory",
        value: function _getTransactionHistory(userId, assetId, assetName, recordType, userAccount) {
            var force = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

            var pageSize = this.props.pageSize;
            var _state = this.state,
                pageNum = _state.pageNum,
                allData = _state.allData,
                historyStatusValue = _state.historyStatusValue,
                historyStatusType = _state.historyStatusType;

            if (force == true) {
                pageNum = 1;
                allData = {};
                historyStatusType = recordType == 1 ? "deposit_history_status" : "withdraw_history_status";
                historyStatusValue = recordType == 1 ? DEPOSIT_STATUS : WITHDRAW_STATUS;
            } else {
                pageNum += 1;
            }

            var _this = this;
            Object(_lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_4__["getTransactionRecordList"])({
                uid: userId,
                assetId: assetId,
                pageNum: pageNum,
                pageSize: pageSize,
                userAccount: userAccount
            }, recordType).then(function (res) {
                if (res.records) {
                    res.records.forEach(function (item) {
                        allData[item.txid] = {
                            txid: item.txid,
                            amount: item.amount,
                            time: item.ctime,
                            unixtime: Date.parse(item.ctime),
                            status: ["gateway", historyStatusType, historyStatusValue[item.status]].join("."),
                            failReason: item.failReason,
                            assetName: assetName
                        };
                    });

                    _this.setState({
                        totalNum: res.total,
                        nextPageEnabled: res.total > pageNum * pageSize,
                        allData: allData,
                        pageNum: pageNum,
                        historyStatusType: historyStatusType,
                        historyStatusValue: historyStatusValue
                    });
                }
            }).catch(function () {
                _this.setState({
                    totalNum: 0,
                    nextPageEnabled: false,
                    allData: {},
                    pageNum: 0
                });
            });
        }
    }, {
        key: "getTransactionHistory",
        value: function getTransactionHistory() {
            var _props = this.props,
                userId = _props.userId,
                assetId = _props.assetId,
                assetName = _props.assetName,
                recordType = _props.recordType,
                userAccount = _props.userAccount;

            this._getTransactionHistory(userId, assetId, assetName, recordType, userAccount, false);
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                assetName = _props2.assetName,
                compactView = _props2.compactView,
                style = _props2.style,
                maxHeight = _props2.maxHeight;
            var _state2 = this.state,
                headerHeight = _state2.headerHeight,
                allData = _state2.allData;


            var history = [];
            Object.keys(allData).forEach(function (item) {
                history.push(allData[item]);
            });
            history.sort(function (a, b) {
                return b.unixtime - a.unixtime;
            });
            style = style ? style : {};
            style.width = "100%";
            style.height = "100%";

            if (allData.length == 0) {}
            var display_history = history.length ? history.map(function (o) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: o.txid },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "left" },
                            className: "left-td column-hide-tiny"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: o.status })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: {
                                padding: "8px 5px",
                                textAlign: "left",
                                fontSize: 14
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            content: "gateway.transaction_history_info",
                            amount: o.amount,
                            assetName: assetName,
                            txid: o.txid
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        o.time
                    )
                );
            }) : [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: "no_recent" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { colSpan: compactView ? "2" : "3" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "operation.no_recent" })
                )
            )];
            display_history.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: "total-value", key: "total_value" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-tiny" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "center" } },
                    "\xA0",
                    this.state.nextPageEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { onClick: this.getTransactionHistory.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "chevron-down",
                            title: "icons.chevron_down.transactions",
                            className: "icon-14px"
                        })
                    ) : null
                )
            ));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "recent-transactions no-overflow", style: style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "generic-bordered-box" },
                    this.props.dashboard ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { ref: "header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "block-content-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                this.props.title ? this.props.title : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.recent" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "box-content grid-block no-margin",
                            style: !this.props.fullHeight ? {
                                maxHeight: maxHeight - headerHeight
                            } : null,
                            ref: "transactions"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            {
                                className: "table" + (compactView ? " compact" : "") + (this.props.dashboard ? " dashboard-table" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    { key: "history_header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.status" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.info" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.time" })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tbody",
                                null,
                                display_history
                            )
                        )
                    )
                )
            );
        }
    }]);

    return GdexHistory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

GdexHistory.propTypes = {
    compactView: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
    maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
    userId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    assetId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    assetName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    recordType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    userAccount: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
GdexHistory.defaultProps = {
    maxHeight: 500,
    fullHeight: false,
    pageSize: 10
};


/* harmony default export */ __webpack_exports__["default"] = (GdexHistory);

/***/ }),

/***/ 2573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2364);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var GdexAgreementModal = function (_React$Component) {
    _inherits(GdexAgreementModal, _React$Component);

    function GdexAgreementModal(props) {
        _classCallCheck(this, GdexAgreementModal);

        var _this = _possibleConstructorReturn(this, (GdexAgreementModal.__proto__ || Object.getPrototypeOf(GdexAgreementModal)).call(this));

        _this.state = {
            locale: props.settings.get("locale", "en")
        };
        return _this;
    }

    _createClass(GdexAgreementModal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // console.log(this.refs);
            if (this.refs.agreement) {
                var item = this.refs.agreement;
                // console.log(item);
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(item);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            // console.log(this.refs);
            if (this.refs.agreement) {
                var item = this.refs.agreement;
                // console.log(item);
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(item);
            }
        }
    }, {
        key: "_getAgreement",
        value: function _getAgreement(locale) {
            switch (locale) {
                case "zh":
                case "cn":
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "container",
                            ref: "agreement",
                            style: {
                                height: "500px",
                                overflow: "auto",
                                position: "relative"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "h2",
                            { style: { textAlign: "center" } },
                            "\u7528\u6237\u670D\u52A1\u534F\u8BAE"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "OBSIDIAN TECHNOLOGY CO. PTE. LTD. \u662F\u4E00\u5BB6\u6839\u636E\u65B0\u52A0\u5761\u5171\u548C\u56FD\u6CD5\u5F8B\u6210\u7ACB\u7684\u516C\u53F8\uFF0CGDEX\u662F\u7531\u8BE5\u516C\u53F8\u8FD0\u8425\u7684\u6BD4\u7279\u80A1\u7F51\u5173(\u4EE5\u4E0B\u79F0\u201CGDEX\u201D\u6216\u201C\u672C\u7F51\u5173\u201D)\uFF0C\u4E3B\u8BBF\u95EE\u5165\u53E3\u4E3Ahttps://www.gdex.io\uFF0CGDEX\u662F\u4E00\u4E2A\u5728\u6BD4\u7279\u80A1\u5E73\u53F0\u4E3A\u7528\u6237\u63D0\u4F9B\u6570\u5B57\u8D44\u4EA7\u5145\u63D0\u670D\u52A1\uFF08\u4EE5\u4E0B\u79F0\u201C\u8BE5\u670D\u52A1\u201D\u6216\u201C\u670D\u52A1\u201D\uFF09\u7684\u5E73\u53F0\u3002\u4E3A\u4E86\u672C\u534F\u8BAE\u8868\u8FF0\u4E4B\u65B9\u4FBF\uFF0C\u516C\u53F8\u548C\u8BE5\u7F51\u5173\u5728\u672C\u534F\u8BAE\u4E2D\u5408\u79F0\u4F7F\u7528\u201C\u6211\u4EEC\u201D\u6216\u5176\u4ED6\u7B2C\u4E00\u4EBA\u79F0\u79F0\u547C\u3002\u4F7F\u7528\u8BE5\u670D\u52A1\u7684\u81EA\u7136\u4EBA\u6216\u5176\u4ED6\u4E3B\u4F53\u5747\u4E3A\u672C\u7F51\u5173\u7684\u7528\u6237\uFF0C\u672C\u534F\u8BAE\u4E3A\u8868\u8FF0\u4E4B\u4FBF\u5229\uFF0C\u4EE5\u4E0B\u4F7F\u7528\u201C\u60A8\u201D\u6216\u5176\u4ED6\u7B2C\u4E8C\u4EBA\u79F0\u3002\u6211\u4EEC\u548C\u60A8\u5728\u672C\u534F\u8BAE\u4E2D\u5408\u79F0\u4E3A\u201C\u53CC\u65B9\u201D\uFF0C\u6211\u4EEC\u6216\u60A8\u5355\u79F0\u4E3A\u201C\u4E00\u65B9\u201D\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u91CD\u8981\u63D0\u793A\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u5728\u6B64\u7279\u522B\u63D0\u9192\u60A8\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1. \u6570\u5B57\u8D44\u4EA7\u672C\u8EAB\u4E0D\u7531\u4EFB\u4F55\u91D1\u878D\u673A\u6784\u6216\u516C\u53F8\u6216\u672C\u7F51\u5173\u53D1\u884C\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "2. \u6570\u5B57\u8D44\u4EA7\u5E02\u573A\u662F\u5168\u65B0\u7684\u3001\u672A\u7ECF\u786E\u8BA4\u7684\uFF0C\u800C\u4E14\u53EF\u80FD\u4E0D\u4F1A\u589E\u957F\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3. \u6570\u5B57\u8D44\u4EA7\u4E3B\u8981\u7531\u6295\u673A\u8005\u5927\u91CF\u4F7F\u7528\uFF0C\u96F6\u552E\u548C\u5546\u4E1A\u5E02\u573A\u4F7F\u7528\u76F8\u5BF9\u8F83\u5C11\uFF0C\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u5B58\u5728\u6781\u9AD8\u98CE\u9669\uFF0C\u5176\u5168\u5929\u4E0D\u95F4\u65AD\u4EA4\u6613\uFF0C\u6CA1\u6709\u6DA8\u8DCC\u9650\u5236\uFF0C\u4EF7\u683C\u5BB9\u6613\u53D7\u5E84\u5BB6\u3001\u5168\u7403\u653F\u5E9C\u653F\u7B56\u7684\u5F71\u54CD\u800C\u5927\u5E45\u6CE2\u52A8\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "4. \u56E0\u5404\u56FD\u6CD5\u5F8B\u3001\u6CD5\u89C4\u548C\u89C4\u8303\u6027\u6587\u4EF6\u7684\u5236\u5B9A\u6216\u8005\u4FEE\u6539\uFF0C\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u968F\u65F6\u53EF\u80FD\u88AB\u6682\u505C\u6216\u88AB\u7981\u6B62\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u6709\u6781\u9AD8\u98CE\u9669\uFF0C\u5E76\u4E0D\u9002\u5408\u7EDD\u5927\u90E8\u5206\u4EBA\u58EB\u3002\u60A8\u4E86\u89E3\u548C\u7406\u89E3\u6B64\u6295\u8D44\u6709\u53EF\u80FD\u5BFC\u81F4\u90E8\u5206\u635F\u5931\u6216\u5168\u90E8\u635F\u5931\uFF0C\u6240\u4EE5\u60A8\u5E94\u8BE5\u4EE5\u80FD\u627F\u53D7\u7684\u635F\u5931\u7A0B\u5EA6\u6765\u51B3\u5B9A\u6295\u8D44\u7684\u91D1\u989D\u3002\u60A8\u4E86\u89E3\u548C\u7406\u89E3\u6570\u5B57\u8D44\u4EA7\u4F1A\u4EA7\u751F\u884D\u751F\u98CE\u9669\uFF0C\u6240\u4EE5\u5982\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u5EFA\u8BAE\u5148\u5BFB\u6C42\u7406\u8D22\u987E\u95EE\u7684\u534F\u52A9\u3002\u6B64\u5916\uFF0C\u9664\u4E86\u4E0A\u8FF0\u63D0\u53CA\u8FC7\u7684\u98CE\u9669\u4EE5\u5916\uFF0C\u8FD8\u4F1A\u6709\u672A\u80FD\u9884\u6D4B\u7684\u98CE\u9669\u5B58\u5728\u3002\u60A8\u5E94\u614E\u91CD\u8003\u8651\u5E76\u7528\u6E05\u6670\u7684\u5224\u65AD\u80FD\u529B\u53BB\u8BC4\u4F30\u81EA\u5DF1\u7684\u8D22\u653F\u72B6\u51B5\u53CA\u4E0A\u8FF0\u5404\u9879\u98CE\u9669\u800C\u4F5C\u51FA\u4EFB\u4F55\u4E70\u5356\u6570\u5B57\u8D44\u4EA7\u7684\u51B3\u5B9A\uFF0C\u5E76\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u5168\u90E8\u635F\u5931\uFF0C\u6211\u4EEC\u5BF9\u6B64\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u656C\u544A\u60A8\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "1.\u60A8\u4E86\u89E3\u6BD4\u7279\u80A1\u662F\u57FA\u4E8E\u533A\u5757\u94FE\u7684\u53BB\u4E2D\u5FC3\u5316\u4EA4\u6613\u5E73\u53F0\uFF0C\u5176\u57FA\u7840\u8D26\u53F7\u670D\u52A1\u548C\u4EA4\u6613\u64AE\u5408\u670D\u52A1\u90FD\u7531\u6BD4\u7279\u80A1\u5E73\u53F0\u63D0\u4F9B\u3002\u4EA6\u6709\u5176\u5B83\u673A\u6784\u6216\u4E2A\u4EBA\u5728\u6BD4\u7279\u80A1\u5E73\u53F0\u4E0A\u53D1\u884C\u8D44\u4EA7\u53CA\uFF0F\u6216\u63D0\u4F9B\u670D\u52A1\u3002\u60A8\u4E86\u89E3\u672C\u7F51\u5173\u4EC5\u4F5C\u4E3A\u60A8\u5411\u6BD4\u7279\u80A1\u5E73\u53F0\u5145\u63D0\u6570\u5B57\u8D44\u4EA7\u7684\u5DE5\u5177\u3002\u672C\u7F51\u5173\u53EA\u5BF9\u81EA\u8EAB\u53D1\u884C\u7684\u4EA4\u6613\u4EE3\u5E01\u8D44\u4EA7\uFF08\u540D\u79F0\u4EE5GDEX.\u4E3A\u524D\u7F00\uFF09\u8D1F\u8D23\uFF0C\u4E0D\u5BF9\u6BD4\u7279\u80A1\u4E0A\u5176\u5B83\u673A\u6784\u6216\u4E2A\u4EBA\u53D1\u884C\u7684\u8D44\u4EA7\u8D1F\u8D23\uFF0C\u672C\u7F51\u5173\u4E0D\u53C2\u4E0E\u60A8\u7684\u4EFB\u4F55\u4EA4\u6613\uFF0C\u60A8\u5E94\u81EA\u884C\u8C28\u614E\u5224\u65AD\u786E\u5B9A\u76F8\u5173\u6570\u5B57\u8D44\u4EA7\u53CA/\u6216\u4FE1\u606F\u7684\u771F\u5B9E\u6027\u3001\u5408\u6CD5\u6027\u548C\u6709\u6548\u6027\uFF0C\u5E76\u81EA\u884C\u627F\u62C5\u56E0\u6B64\u4EA7\u751F\u7684\u8D23\u4EFB\u4E0E\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "2. \u6BD4\u7279\u80A1\u53BB\u4E2D\u5FC3\u5316\u4EA4\u6613\u7CFB\u7EDF\u5B58\u6709\u98CE\u9669\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8F6F\u4EF6\uFF0C\u786C\u4EF6\u548C\u4E92\u8054\u7F51\u94FE\u7ED3\u7684\u5931\u8D25\uFF0C\u7528\u6237\u8D26\u6237\u7CFB\u7EDF\u7684\u5B89\u5168\u98CE\u9669\u7B49\u3002\u7531\u4E8E\u6211\u4EEC\u4E0D\u80FD\u63A7\u5236\u4E92\u8054\u7F51\u4EE5\u53CA\u6BD4\u7279\u80A1\u5E73\u53F0\u7684\u53EF\u9760\u6027\u548C\u53EF\u7528\u6027\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u5BF9\u4E0A\u8FF0\u98CE\u9669\u9020\u6210\u7684\u7528\u6237\u635F\u5931\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3. \u7981\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u4ECE\u4E8B\u6D17\u94B1\u3001\u8D70\u79C1\u3001\u5546\u4E1A\u8D3F\u8D42\u7B49\u4E00\u5207\u975E\u6CD5\u4EA4\u6613\u6D3B\u52A8\uFF0C\u82E5\u53D1\u73B0\u6B64\u7C7B\u4E8B\u4EF6\uFF0C\u672C\u7F51\u5173\u5C06\u91C7\u53D6\u5404\u79CD\u53EF\u4F7F\u7528\u4E4B\u624B\u6BB5\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E2D\u6B62\u63D0\u4F9B\u670D\u52A1\uFF0C\u901A\u77E5\u76F8\u5173\u6743\u529B\u673A\u5173\u7B49\uFF0C\u6211\u4EEC\u4E0D\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u6240\u6709\u8D23\u4EFB\u5E76\u4FDD\u7559\u5411\u76F8\u5173\u4EBA\u58EB\u8FFD\u7A76\u8D23\u4EFB\u7684\u6743\u5229\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E00\u3001\u603B\u5219"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.1 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u4E4B\u524D\uFF0C\u5E94\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\uFF0C\u5982\u6709\u4E0D\u7406\u89E3\u4E4B\u5904\u6216\u5176\u4ED6\u5FC5\u8981\uFF0C\u8BF7\u54A8\u8BE2\u4E13\u4E1A\u5F8B\u5E08\u3002\u5982\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u53CA/\u6216\u968F\u65F6\u5BF9\u5176\u7684\u4FEE\u6539\uFF0C\u8BF7\u60A8\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u3002\u4F7F\u7528\u672C\u7F51\u5173\u7684\u4EFB\u4F55\u670D\u52A1\u5373\u8868\u793A\u60A8\u5DF2\u4E86\u89E3\u5E76\u5B8C\u5168\u540C\u610F\u672C\u534F\u8BAE\u5404\u9879\u5185\u5BB9\uFF0C\u5305\u62EC\u672C\u7F51\u5173\u5BF9\u672C\u534F\u8BAE\u968F\u65F6\u6240\u505A\u7684\u4EFB\u4F55\u4FEE\u6539\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2 \u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u548C\u529F\u80FD\uFF0C\u60A8\u5C06\u88AB\u89C6\u4E3A\u5DF2\u9605\u8BFB\uFF0C\u7406\u89E3\u5E76\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 1.2.1 \u63A5\u53D7\u672C\u534F\u8BAE\u6240\u6709\u6761\u6B3E\u53CA\u6761\u4EF6\u7684\u7EA6\u675F\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.2 \u60A8\u786E\u8BA4\u60A8\u5DF2\u5E74\u6EE121\u5468\u5C81\u6216\u6839\u636E\u4E0D\u540C\u7684\u53EF\u9002\u7528\u7684\u6CD5\u5F8B\u89C4\u5B9A\u7684\u5177\u6709\u53EF\u8BA2\u7ACB\u5408\u540C\u7684\u6CD5\u5B9A\u5E74\u9F84\uFF0C\u5E76\u6709\u5145\u5206\u7684\u80FD\u529B\u63A5\u53D7\u8FD9\u4E9B\u6761\u6B3E\uFF0C\u5E76\u8BA2\u7ACB\u4EA4\u6613\uFF0C\u4F7F\u7528\u672C\u7F51\u5173\u8FDB\u884C\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.3 \u60A8\u4FDD\u8BC1\u4EA4\u6613\u4E2D\u6D89\u53CA\u5230\u7684\u5C5E\u4E8E\u60A8\u7684\u6570\u5B57\u8D44\u4EA7\u5747\u4E3A\u5408\u6CD5\u53D6\u5F97\u5E76\u6240\u6709\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.4 \u60A8\u540C\u610F\u60A8\u4E3A\u60A8\u81EA\u8EAB\u7684\u4EA4\u6613\u6216\u975E\u4EA4\u6613\u884C\u4E3A\u627F\u62C5\u5168\u90E8\u8D23\u4EFB\u548C\u4EFB\u4F55\u6536\u76CA\u6216\u4E8F\u635F\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.5 \u60A8\u540C\u610F\u9075\u5B88\u4EFB\u4F55\u6709\u5173\u6CD5\u5F8B\u7684\u89C4\u5B9A\uFF0C\u5C31\u7A0E\u52A1\u76EE\u7684\u800C\u8A00\uFF0C\u5305\u62EC\u62A5\u544A\u4EFB\u4F55\u4EA4\u6613\u5229\u6DA6\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.6 \u672C\u534F\u8BAE\u53EA\u662F\u5C31\u60A8\u4E0E\u6211\u4EEC\u4E4B\u95F4\u8FBE\u6210\u7684\u6743\u5229\u4E49\u52A1\u5173\u7CFB\u8FDB\u884C\u7EA6\u675F\uFF0C\u800C\u5E76\u4E0D\u6D89\u53CA\u672C\u7F51\u5173\u7528\u6237\u4E4B\u95F4\u6216\u5176\u4ED6\u7F51\u5173\u548C\u60A8\u4E4B\u95F4\u56E0\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u800C\u4EA7\u751F\u7684\u6CD5\u5F8B\u5173\u7CFB\u53CA\u6CD5\u5F8B\u7EA0\u7EB7\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E8C\u3001\u534F\u8BAE\u4FEE\u8BA2"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u4FDD\u7559\u4E0D\u65F6\u4FEE\u8BA2\u672C\u534F\u8BAE\u3001\u5E76\u4EE5\u516C\u793A\u7684\u65B9\u5F0F\u8FDB\u884C\u516C\u544A\u3001\u4E0D\u518D\u5355\u72EC\u901A\u77E5\u60A8\u7684\u6743\u5229\uFF0C\u53D8\u66F4\u540E\u7684\u534F\u8BAE\u4F1A\u5728\u672C\u534F\u8BAE\u9996\u9875\u6807\u6CE8\u53D8\u66F4\u65F6\u95F4\uFF0C\u4E00\u7ECF\u5728\u516C\u5E03\uFF0C\u7ACB\u5373\u81EA\u52A8\u751F\u6548\u3002\u60A8\u5E94\u4E0D\u65F6\u6D4F\u89C8\u53CA\u5173\u6CE8\u672C\u534F\u8BAE\u7684\u66F4\u65B0\u53D8\u66F4\u65F6\u95F4\u53CA\u66F4\u65B0\u5185\u5BB9\uFF0C\u5982\u60A8\u4E0D\u540C\u610F\u76F8\u5173\u53D8\u66F4\uFF0C\u5E94\u5F53\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\uFF1B\u60A8\u7EE7\u7EED\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\uFF0C\u5373\u8868\u793A\u60A8\u63A5\u53D7\u5E76\u540C\u610F\u7ECF\u4FEE\u8BA2\u7684\u534F\u8BAE\u7684\u7EA6\u675F\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E09\u3001\u670D\u52A1"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u672C\u7F51\u5173\u53EA\u4E3A\u60A8\u63D0\u4F9B\u5411\u6BD4\u7279\u80A1\u5E73\u53F0\u51B2\u5165\u548C\u63D0\u53D6\u6570\u5B57\u8D44\u4EA7\u7684\u670D\u52A1\uFF0C\u672C\u7F51\u5173\u5E76\u4E0D\u4F5C\u4E3A\u4E70\u5BB6\u6216\u5356\u5BB6\u53C2\u4E0E\u4E70\u5356\u6570\u5B57\u8D44\u4EA7\u884C\u4E3A\u672C\u8EAB\uFF1B\u672C\u7F51\u5173\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u56FD\u5BB6\u6CD5\u5B9A\u8D27\u5E01\u5145\u5165\u548C\u63D0\u53D6\u7684\u76F8\u5173\u670D\u52A1\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 3.1 \u670D\u52A1\u5185\u5BB9"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.1.1 \u60A8\u6709\u6743\u901A\u8FC7\u672C\u7F51\u5173\u5411\u6BD4\u7279\u80A1\u5E73\u53F0\u51B2\u5165\u6216\u63D0\u53D6\u6570\u5B57\u8D44\u4EA7\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 3.1.2 \u672C\u7F51\u5173\u627F\u8BFA\u4E3A\u60A8\u63D0\u4F9B\u7684\u5176\u4ED6\u670D\u52A1\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 3.2.\u670D\u52A1\u89C4\u5219"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " \u60A8\u627F\u8BFA\u9075\u5B88\u4E0B\u5217\u672C\u7F51\u5173\u670D\u52A1\u89C4\u5219\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.1 \u60A8\u5E94\u5F53\u9075\u5B88\u6CD5\u5F8B\u6CD5\u89C4\u3001\u89C4\u7AE0\u3001\u53CA\u653F\u7B56\u8981\u6C42\u7684\u89C4\u5B9A\uFF0C\u4FDD\u8BC1\u8D26\u6237\u4E2D\u6240\u6709\u6570\u5B57\u8D44\u4EA7\u6765\u6E90\u7684\u5408\u6CD5\u6027\uFF0C\u4E0D\u5F97\u5728\u672C\u7F51\u5173\u6216\u5229\u7528\u672C\u7F51\u5173\u670D\u52A1\u4ECE\u4E8B\u975E\u6CD5\u6216\u5176\u4ED6\u635F\u5BB3\u672C\u7F51\u5173\u6216\u7B2C\u4E09\u65B9\u6743\u76CA\u7684\u6D3B\u52A8\uFF0C\u5982\u53D1\u9001\u6216\u63A5\u6536\u4EFB\u4F55\u8FDD\u6CD5\u3001\u8FDD\u89C4\u3001\u4FB5\u72AF\u4ED6\u4EBA\u6743\u76CA\u7684\u4FE1\u606F\uFF0C\u53D1\u9001\u6216\u63A5\u6536\u4F20\u9500\u6750\u6599\u6216\u5B58\u5728\u5176\u4ED6\u5371\u5BB3\u7684\u4FE1\u606F\u6216\u8A00\u8BBA\uFF0C\u672A\u7ECF\u672C\u7F51\u5173\u6388\u6743\u4F7F\u7528\u6216\u4F2A\u9020\u672C\u7F51\u5173\u7535\u5B50\u90AE\u4EF6\u9898\u5934\u4FE1\u606F\u7B49\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.2 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u4E4B\u524D\u5E94\u5145\u5206\u4E86\u89E3\u6BD4\u7279\u80A1\u8D26\u53F7\u7684\u4F7F\u7528\u5E38\u8BC6\uFF0C\u505A\u597D\u76F8\u5E94\u8D26\u53F7\u7684\u5907\u4EFD\u53CA\u5BC6\u7801\u4FDD\u5B58\u5DE5\u4F5C\uFF0C\u5BF9\u4E8E\u6BD4\u7279\u80A1\u8D26\u6237\u5B89\u5168\u95EE\u9898\u9020\u6210\u7684\u635F\u5931\uFF0C\u672C\u7F51\u5173\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.3 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u8FC7\u7A0B\u4E2D\uFF0C\u6240\u4EA7\u751F\u7684\u5E94\u7EB3\u7A0E\u8D4B\uFF0C\u4EE5\u53CA\u4E00\u5207\u786C\u4EF6\u3001\u8F6F\u4EF6\u3001\u670D\u52A1\u53CA\u5176\u5B83\u65B9\u9762\u7684\u8D39\u7528\uFF0C\u5747\u7531\u60A8\u72EC\u81EA\u627F\u62C5\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.4 \u60A8\u5E94\u5F53\u9075\u5B88\u672C\u7F51\u5173\u4E0D\u65F6\u53D1\u5E03\u548C\u66F4\u65B0\u7684\u672C\u534F\u8BAE\u4EE5\u53CA\u5176\u4ED6\u670D\u52A1\u6761\u6B3E\u548C\u64CD\u4F5C\u89C4\u5219\uFF0C\u6709\u6743\u968F\u65F6\u7EC8\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u56DB\u3001\u672C\u7F51\u5173\u7684\u6743\u5229\u548C\u4E49\u52A1"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "4.1 \u672C\u7F51\u5173\u6709\u6743\u5728\u53D1\u73B0\u672C\u7F51\u5173\u4E0A\u663E\u793A\u7684\u4EFB\u4F55\u4FE1\u606F\u5B58\u5728\u660E\u663E\u9519\u8BEF\u65F6\uFF0C\u5BF9\u4FE1\u606F\u4E88\u4EE5\u66F4\u6B63\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "4.2 \u672C\u7F51\u5173\u4FDD\u7559\u968F\u65F6\u4FEE\u6539\u3001\u4E2D\u6B62\u6216\u7EC8\u6B62\u672C\u7F51\u5173\u670D\u52A1\u7684\u6743\u5229\uFF0C\u672C\u7F51\u5173\u884C\u4F7F\u4FEE\u6539\u6216\u4E2D\u6B62\u670D\u52A1\u7684\u6743\u5229\u4E0D\u9700\u4E8B\u5148\u544A\u77E5\u60A8\uFF1B\u672C\u7F51\u5173\u7EC8\u6B62\u672C\u7F51\u5173\u4E00\u9879\u6216\u591A\u9879\u670D\u52A1\u7684\uFF0C\u7EC8\u6B62\u81EA\u672C\u7F51\u5173\u5728\u7F51\u5173\u4E0A\u53D1\u5E03\u7EC8\u6B62\u516C\u544A\u4E4B\u65E5\u751F\u6548\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "4.3 \u672C\u7F51\u5173\u5E94\u5F53\u91C7\u53D6\u5FC5\u8981\u7684\u6280\u672F\u624B\u6BB5\u548C\u7BA1\u7406\u63AA\u65BD\u4FDD\u969C\u672C\u7F51\u5173\u7684\u6B63\u5E38\u8FD0\u884C\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E94\u3001\u8D54\u507F"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "5.1 \u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5BF9\u60A8\u7684\u76F4\u63A5\u635F\u5BB3\u7684\u8D54\u507F\u8D23\u4EFB\u5747\u4E0D\u4F1A\u8D85\u8FC7\u60A8\u4ECE\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u4EA7\u751F\u7684\u4E3A\u671F\u4E09\uFF08 3\uFF09\u4E2A\u6708\u7684\u603B\u8D39\u7528\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u516D\u3001\u5BFB\u6C42\u7981\u4EE4\u6551\u6D4E\u7684\u6743\u5229"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u548C\u60A8\u5747\u627F\u8BA4\u666E\u901A\u6CD5\u5BF9\u8FDD\u7EA6\u6216\u53EF\u80FD\u8FDD\u7EA6\u60C5\u51B5\u7684\u6551\u6D4E\u63AA\u65BD\u662F\u53EF\u80FD\u662F\u4E0D\u8DB3\u4EE5\u5F25\u8865\u6211\u4EEC\u906D\u53D7\u7684\u5168\u90E8\u635F\u5931\u7684\uFF0C\u6545\u975E\u8FDD\u7EA6\u65B9\u6709\u6743\u5728\u8FDD\u7EA6\u6216\u53EF\u80FD\u8FDD\u7EA6\u60C5\u51B5\u4E0B\u5BFB\u6C42\u7981\u4EE4\u6551\u6D4E\u4EE5\u53CA\u666E\u901A\u6CD5\u6216\u8861\u5E73\u6CD5\u5141\u8BB8\u7684\u5176\u4ED6\u6240\u6709\u7684\u8865\u6551\u63AA\u65BD\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E03\u3001\u8D23\u4EFB\u9650\u5236\u4E0E\u514D\u8D23"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.1 \u60A8\u4E86\u89E3\u5E76\u540C\u610F\uFF0C\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5C31\u4EE5\u4E0B\u5404\u4E8B\u9879\u627F\u62C5\u8D23\u4EFB\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.1 \u6536\u5165\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.2 \u4EA4\u6613\u5229\u6DA6\u6216\u5408\u540C\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.3 \u4E1A\u52A1\u4E2D\u65AD"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.4 \u9884\u671F\u53EF\u8282\u7701\u7684\u8D27\u5E01\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.5 \u4FE1\u606F\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.6 \u673A\u4F1A\u3001\u5546\u8A89\u6216\u58F0\u8A89\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.7 \u6570\u636E\u7684\u635F\u574F\u6216\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.8 \u8D2D\u4E70\u66FF\u4EE3\u4EA7\u54C1\u6216\u670D\u52A1\u7684\u6210\u672C\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.1.9 \u4EFB\u4F55\u7531\u4E8E\u4FB5\u6743\uFF08\u5305\u62EC\u8FC7\u5931\uFF09\u3001\u8FDD\u7EA6\u6216\u5176\u4ED6\u4EFB\u4F55\u539F\u56E0\u4EA7\u751F\u7684\u95F4\u63A5\u7684\u3001\u7279\u6B8A\u7684\u6216\u9644\u5E26\u6027\u7684\u635F\u5931\u6216\u635F\u5BB3\uFF0C\u4E0D\u8BBA\u8FD9\u79CD\u635F\u5931\u6216\u635F\u5BB3\u662F\u5426\u53EF\u4EE5\u4E3A\u6211\u4EEC\u5408\u7406\u9884\u89C1\uFF1B\u4E0D\u8BBA\u6211\u4EEC\u662F\u5426\u4E8B\u5148\u88AB\u544A\u77E5\u5B58\u5728\u6B64\u79CD\u635F \u5931\u6216\u635F\u5BB3\u7684\u53EF\u80FD\u6027\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2 \u60A8\u4E86\u89E3\u5E76\u540C\u610F\uFF0C\u6211\u4EEC\u4E0D\u5BF9\u56E0\u4E0B\u8FF0\u4EFB\u4E00\u60C5\u51B5\u800C\u5BFC\u81F4\u60A8\u7684\u4EFB\u4F55\u635F\u5BB3\u8D54\u507F\u627F\u62C5\u8D23\u4EFB\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.1 \u6211\u4EEC\u6709\u5408\u7406\u7684\u7406\u7531\u8BA4\u4E3A\u60A8\u7684\u5177\u4F53\u4EA4\u6613\u4E8B\u9879\u53EF\u80FD\u5B58\u5728\u91CD\u5927\u8FDD\u6CD5\u6216\u8FDD\u7EA6\u60C5\u5F62\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.2 \u6211\u4EEC\u6709\u5408\u7406\u7684\u7406\u7531\u8BA4\u4E3A\u60A8\u5728\u672C\u7F51\u5173\u7684\u884C\u4E3A\u6D89\u5ACC\u8FDD\u6CD5\u6216\u4E0D\u5F53\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.3 \u901A\u8FC7\u672C\u7F51\u5173\u670D\u52A1\u8D2D\u4E70\u6216\u83B7\u53D6\u4EFB\u4F55\u6570\u636E\u3001\u4FE1\u606F\u6216\u8FDB\u884C\u4EA4\u6613\u7B49\u884C\u4E3A\u6216\u66FF\u4EE3\u884C\u4E3A\u4EA7\u751F\u7684\u8D39\u7528\u53CA\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.2.4 \u60A8\u5BF9\u672C\u7F51\u5173\u670D\u52A1\u7684\u8BEF\u89E3\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.5 \u4EFB\u4F55\u975E\u56E0\u6211\u4EEC\u7684\u539F\u56E0\u800C\u5F15\u8D77\u7684\u4E0E\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u6709\u5173\u7684\u5176\u5B83\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.3 \u6211\u4EEC\u5BF9\u7531\u4E8E\u4FE1\u606F\u7F51\u7EDC\u8BBE\u5907\u7EF4\u62A4\u3001\u4FE1\u606F\u7F51\u7EDC\u8FDE\u63A5\u6545\u969C\u3001\u7535\u8111\u3001\u901A\u8BAF\u6216\u5176\u4ED6\u7CFB\u7EDF\u7684\u6545\u969C\u3001\u7535\u529B\u6545\u969C\u3001\u5929\u6C14\u539F\u56E0\u3001\u610F\u5916\u4E8B\u6545\u3001\u7F62\u5DE5\u3001\u52B3\u52A8\u4E89\u8BAE\u3001\u66B4\u4E71\u3001\u8D77\u4E49\u3001\u9A9A\u4E71\u3001\u751F\u4EA7\u529B\u6216\u751F\u4EA7\u8D44\u6599\u4E0D\u8DB3\u3001\u706B\u707E\u3001\u6D2A\u6C34\u3001\u98CE\u66B4\u3001\u7206\u70B8\u3001\u6218\u4E89\u3001\u94F6\u884C\u6216\u5176\u4ED6\u5408\u4F5C\u65B9\u539F\u56E0\u3001\u6570\u5B57\u8D44\u4EA7\u5E02\u573A\u5D29\u6E83\u3001\u653F\u5E9C\u884C\u4E3A\u3001 \u53F8\u6CD5\u6216\u884C\u653F\u673A\u5173\u7684\u547D\u4EE4\u3001\u5176\u4ED6\u4E0D\u5728\u6211\u4EEC\u53EF\u63A7\u8303\u56F4\u5185\u6216\u6211\u4EEC\u65E0\u80FD\u529B\u63A7\u5236\u7684\u884C\u4E3A\u6216\u7B2C\u4E09\u65B9\u7684\u539F\u56E0\u800C\u9020\u6210\u7684\u4E0D\u80FD\u670D\u52A1\u6216\u5EF6\u8FDF\u670D\u52A1\uFF0C\u4EE5\u53CA\u9020\u6210\u7684\u60A8\u7684\u635F\u5931\uFF0C\u6211\u4EEC\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.4 \u6211\u4EEC\u4E0D\u80FD\u4FDD\u8BC1\u672C\u7F51\u5173\u5305\u542B\u7684\u5168\u90E8\u4FE1\u606F\u3001\u7A0B\u5E8F\u3001\u6587\u672C\u7B49\u5B8C\u5168\u5B89\u5168\uFF0C\u4E0D\u53D7\u4EFB\u4F55\u75C5\u6BD2\u3001\u6728\u9A6C\u7B49\u6076\u610F\u7A0B\u5E8F\u7684\u5E72\u6270\u548C\u7834\u574F\uFF0C\u6545\u60A8\u767B\u9646\u3001\u4F7F\u7528\u672C\u7F51\u5173\u4EFB\u4F55\u670D\u52A1\u6216\u4E0B\u8F7D\u53CA\u4F7F\u7528\u8BE5\u4E0B\u8F7D\u7684\u4EFB\u4F55\u7A0B\u5E8F\u3001\u4FE1\u606F\u3001\u6570\u636E\u7B49\u5747\u662F\u60A8\u4E2A\u4EBA\u7684\u51B3\u5B9A\u5E76\u81EA\u884C\u627F\u62C5\u98CE\u9669\u53CA\u53EF\u80FD\u4EA7\u751F\u7684\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.5 \u6211\u4EEC\u5BF9\u672C\u7F51\u5173\u4E2D\u94FE\u63A5\u7684\u4EFB\u4F55\u7B2C\u4E09\u65B9\u7F51\u5173\u7684\u4EFB\u4F55\u4FE1\u606F\u3001\u4EA7\u54C1\u53CA\u4E1A\u52A1\u53CA\u5176\u4ED6\u4EFB\u4F55\u5F62\u5F0F\u7684\u4E0D\u5C5E\u4E8E\u6211\u4EEC\u7684\u4E3B\u4F53\u7684\u5185\u5BB9\u7B49\u4E0D\u505A\u4EFB\u4F55\u4FDD\u8BC1\u548C\u627F\u8BFA\uFF0C\u60A8\u5982\u679C\u4F7F\u7528\u7B2C\u4E09\u65B9\u7F51\u5173\u63D0\u4F9B\u7684\u4EFB\u4F55\u670D\u52A1\u3001\u4FE1\u606F\u53CA\u4EA7\u54C1\u7B49\u5747\u4E3A\u60A8\u4E2A\u4EBA\u51B3\u5B9A\u4E14\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u4E00\u5207\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.6 \u6211\u4EEC\u5BF9\u4E8E\u60A8\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u4E0D\u505A\u4EFB\u4F55\u660E\u793A\u6216\u6697\u793A\u7684\u4FDD\u8BC1\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u672C\u7F51\u5173\u63D0\u4F9B\u670D\u52A1\u7684\u9002\u7528\u6027\u3001\u6CA1\u6709\u9519\u8BEF\u6216\u758F\u6F0F\u3001\u6301\u7EED\u6027\u3001\u51C6\u786E\u6027\u3001\u53EF\u9760\u6027\u3001\u9002\u7528\u4E8E\u67D0\u4E00\u7279\u5B9A\u7528\u9014\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u4E0D\u5BF9\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u6240\u6D89\u53CA\u7684\u6280\u672F\u53CA\u4FE1\u606F\u7684\u6709\u6548\u6027\u3001\u51C6\u786E\u6027\u3001\u6B63\u786E\u6027\u3001\u53EF\u9760\u6027\u3001\u8D28\u91CF\u3001\u7A33\u5B9A\u3001\u5B8C\u6574\u548C\u53CA\u65F6\u6027\u4F5C\u51FA\u4EFB\u4F55\u627F\u8BFA\u548C\u4FDD\u8BC1\u3002\u662F\u5426\u767B\u9646\u6216\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u662F\u60A8\u4E2A\u4EBA\u7684\u51B3\u5B9A\u4E14\u81EA\u884C\u627F\u62C5\u98CE\u9669\u53CA\u53EF\u80FD\u4EA7\u751F\u7684\u635F\u5931\u3002\u6211\u4EEC\u5BF9\u4E8E\u6570\u5B57\u8D44\u4EA7\u7684\u5E02\u573A\u3001\u4EF7\u503C\u53CA\u4EF7\u683C\u7B49\u4E0D\u505A\u4EFB\u4F55\u660E\u793A\u6216\u6697\u793A\u7684\u4FDD\u8BC1\uFF0C\u60A8\u7406\u89E3\u5E76\u4E86\u89E3\u6570\u5B57\u8D44\u4EA7\u5E02\u573A\u662F\u4E0D\u7A33\u5B9A\u7684\uFF0C\u4EF7\u683C\u548C\u4EF7\u503C\u968F\u65F6\u4F1A\u5927\u5E45\u6CE2\u52A8\u6216\u5D29\u76D8\uFF0C\u4EA4\u6613\u6570\u5B57\u8D44\u4EA7\u662F\u60A8\u4E2A\u4EBA\u7684\u81EA\u7531\u9009\u62E9\u53CA\u51B3\u5B9A\u4E14\u81EA\u884C\u627F\u62C5\u98CE\u9669\u53CA\u53EF\u80FD\u4EA7\u751F\u7684\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.7 \u672C\u534F\u8BAE\u4E2D\u89C4\u5B9A\u7684\u6211\u4EEC\u7684\u4FDD\u8BC1\u548C\u627F\u8BFA\u662F\u7531\u6211\u4EEC\u5C31\u672C\u534F\u8BAE\u548C\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u7684\u552F\u4E00\u4FDD\u8BC1\u548C\u9648\u8FF0\uFF0C\u5E76\u53D6\u4EE3\u4EFB\u4F55\u5176\u4ED6\u9014\u5F84\u548C\u65B9\u5F0F\u4EA7\u751F\u7684\u4FDD\u8BC1\u548C\u627F\u8BFA\uFF0C\u65E0\u8BBA\u662F\u4E66\u9762\u7684\u6216\u53E3\u5934\u7684\uFF0C\u660E\u793A\u7684\u6216\u6697\u793A\u7684\u3002\u6240\u6709\u8FD9\u4E9B\u4FDD\u8BC1\u548C\u9648\u8FF0\u4EC5\u4EC5\u4EE3\u8868\u6211\u4EEC\u81EA\u8EAB\u7684\u627F\u8BFA\u548C\u4FDD\u8BC1\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4EFB\u4F55\u7B2C\u4E09\u65B9\u9075\u5B88\u672C\u534F\u8BAE\u4E2D\u7684\u4FDD\u8BC1\u548C\u627F\u8BFA\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.8 \u6211\u4EEC\u5E76\u4E0D\u653E\u5F03\u672C\u534F\u8BAE\u4E2D\u672A\u63D0\u53CA\u7684\u5728\u6CD5\u5F8B\u9002\u7528\u7684\u6700\u5927\u8303\u56F4\u5185\u6211\u4EEC\u4EAB\u6709\u7684\u9650\u5236\u3001\u514D\u9664\u6216\u62B5\u9500\u6211\u4EEC\u635F\u5BB3\u8D54\u507F\u8D23\u4EFB\u7684\u4EFB\u4F55\u6743\u5229\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.9 \u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u5373\u8868\u793A\u8BA4\u53EF\u6211\u4EEC\u6309\u7167\u672C\u534F\u8BAE\u4E2D\u89C4\u5B9A\u7684\u89C4\u5219\u8FDB\u884C\u7684\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u4EA7\u751F\u7684\u4EFB\u4F55\u98CE\u9669\u5747\u7531\u60A8\u627F\u62C5\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u516B\u3001\u77E5\u8BC6\u4EA7\u6743"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.1 \u672C\u7F51\u5173\u6240\u5305\u542B\u7684\u5168\u90E8\u667A\u529B\u6210\u679C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7F51\u5173\u6807\u5FD7\u3001\u6570\u636E\u5E93\u3001\u7F51\u5173\u8BBE\u8BA1\u3001\u6587\u5B57\u548C\u56FE\u8868\u3001\u8F6F\u4EF6\u3001\u7167\u7247\u3001\u5F55\u50CF\u3001\u97F3\u4E50\u3001\u58F0\u97F3\u53CA\u5176\u524D\u8FF0\u7EC4\u5408\uFF0C\u8F6F\u4EF6\u7F16\u8BD1\u3001\u76F8\u5173\u6E90\u4EE3\u7801\u548C\u8F6F\u4EF6 (\u5305\u62EC\u5C0F\u5E94\u7528\u7A0B\u5E8F\u548C\u811A\u672C) \u7684\u77E5\u8BC6\u4EA7\u6743\u6743\u5229\u5747\u5F52\u672C\u7F51\u5173\u6240\u6709\u3002\u60A8\u4E0D\u5F97\u4E3A\u5546\u4E1A\u76EE\u7684\u590D\u5236\u3001\u66F4\u6539\u3001\u62F7\u8D1D\u3001\u53D1\u9001\u6216\u4F7F\u7528\u524D\u8FF0\u4EFB\u4F55\u6750\u6599\u6216\u5185\u5BB9\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.2 \u672C\u7F51\u5173\u540D\u79F0\u4E2D\u5305\u542B\u7684\u6240\u6709\u6743\u5229 (\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5546\u8A89\u548C\u5546\u6807\u3001\u6807\u5FD7) \u5747\u5F52\u516C\u53F8\u6240\u6709\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.3 \u60A8\u63A5\u53D7\u672C\u534F\u8BAE\u5373\u89C6\u4E3A\u60A8\u4E3B\u52A8\u5C06\u5176\u5728\u672C\u7F51\u5173\u53D1\u8868\u7684\u4EFB\u4F55\u5F62\u5F0F\u7684\u4FE1\u606F\u7684\u8457\u4F5C\u6743\uFF0C \u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u590D\u5236\u6743\u3001\u53D1\u884C\u6743\u3001\u51FA\u79DF\u6743\u3001\u5C55\u89C8\u6743\u3001\u8868\u6F14\u6743\u3001\u653E\u6620\u6743\u3001\u5E7F\u64AD\u6743\u3001\u4FE1\u606F\u7F51\u7EDC\u4F20\u64AD\u6743\u3001\u6444\u5236\u6743\u3001\u6539\u7F16\u6743\u3001\u7FFB\u8BD1\u6743\u3001\u6C47\u7F16\u6743 \u4EE5\u53CA\u5E94\u5F53\u7531\u8457\u4F5C\u6743\u4EBA\u4EAB\u6709\u7684\u5176\u4ED6\u53EF\u8F6C\u8BA9\u6743\u5229\u65E0\u507F\u72EC\u5BB6\u8F6C\u8BA9\u7ED9\u672C\u7F51\u5173\u6240\u6709\uFF0C\u672C\u7F51\u5173\u6709\u6743\u5229\u5C31\u4EFB\u4F55\u4E3B\u4F53\u4FB5\u6743\u5355\u72EC\u63D0\u8D77\u8BC9\u8BBC\u5E76\u83B7\u5F97\u5168\u90E8\u8D54\u507F\u3002 \u672C\u534F\u8BAE\u6548\u529B\u53CA\u4E8E\u60A8\u5728\u672C\u7F51\u5173\u53D1\u5E03\u7684\u4EFB\u4F55\u53D7\u8457\u4F5C\u6743\u6CD5\u4FDD\u62A4\u7684\u4F5C\u54C1\u5185\u5BB9\uFF0C \u65E0\u8BBA\u8BE5\u5185\u5BB9\u5F62\u6210\u4E8E\u672C\u534F\u8BAE\u7B7E\u8BA2\u524D\u8FD8\u662F\u672C\u534F\u8BAE\u7B7E\u8BA2\u540E\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.4 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u8FC7\u7A0B\u4E2D\u4E0D\u5F97\u975E\u6CD5\u4F7F\u7528\u6216\u5904\u5206\u672C\u7F51\u5173\u6216\u4ED6\u4EBA\u7684\u77E5\u8BC6\u4EA7\u6743\u6743\u5229\u3002\u60A8\u4E0D\u5F97\u5C06\u5DF2\u53D1\u8868\u4E8E\u672C\u7F51\u5173\u7684\u4FE1\u606F\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u53D1\u5E03\u6216\u6388\u6743\u5176\u5B83\u7F51\u5173\uFF08\u53CA\u5A92\u4F53\uFF09\u4F7F\u7528\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.5 \u60A8\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u4EFB\u4F55\u670D\u52A1\u5747\u4E0D\u89C6\u4E3A\u6211\u4EEC\u5411\u60A8\u8F6C\u8BA9\u4EFB\u4F55\u77E5\u8BC6\u4EA7\u6743\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E5D\u3001\u53EF\u5206\u5272\u6027"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5982\u672C\u534F\u8BAE\u4E2D\u7684\u4EFB\u4F55\u6761\u6B3E\u88AB\u4EFB\u4F55\u6709\u7BA1\u8F96\u6743\u7684\u6CD5\u9662\u8BA4\u5B9A\u4E3A\u4E0D\u53EF\u6267\u884C\u7684\uFF0C\u65E0\u6548\u7684\u6216\u975E\u6CD5\u7684\uFF0C\u5E76\u4E0D\u5F71\u54CD\u672C\u534F\u8BAE\u7684\u5176\u4F59\u6761\u6B3E\u7684\u6548\u529B\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u3001\u975E\u4EE3\u7406\u5173\u7CFB"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u672C\u534F\u8BAE\u4E2D\u7684\u4EFB\u4F55\u89C4\u5B9A\u5747\u4E0D\u53EF\u88AB\u8BA4\u4E3A\u521B\u9020\u4E86\u3001\u6697\u793A\u4E86\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\u5C06\u6211\u4EEC\u89C6\u4E3A\u60A8\u7684\u4EE3\u7406\u4EBA\u3001\u53D7\u6258\u4EBA\u6216\u5176\u4ED6\u4EE3\u8868\u4EBA\uFF0C\u672C\u534F\u8BAE\u6709\u5176\u4ED6\u89C4\u5B9A\u7684\u9664\u5916\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u4E00\u3001\u5F03\u6743"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u6216\u60A8\u4EFB\u4F55\u4E00\u65B9\u5BF9\u8FFD\u7A76\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u8FDD\u7EA6\u8D23\u4EFB\u6216\u5176\u4ED6\u8D23\u4EFB\u7684\u5F03\u6743\u5E76\u4E0D\u80FD\u8BA4\u5B9A\u6216\u89E3\u91CA\u4E3A\u5BF9\u5176\u4ED6\u8FDD\u7EA6\u8D23\u4EFB\u7684\u5F03\u6743\uFF1B\u672A\u884C\u4F7F\u4EFB\u4F55\u6743\u5229\u6216\u6551\u6D4E\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u88AB\u89E3\u91CA\u4E3A\u5BF9\u8BE5\u7B49\u6743\u5229\u6216\u6551\u6D4E\u7684\u653E\u5F03\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u4E8C\u3001\u6807\u9898"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6240\u6709\u6807\u9898\u4EC5\u4F9B\u534F\u8BAE\u8868\u8FF0\u65B9\u4FBF\uFF0C\u5E76\u4E0D\u7528\u4E8E\u6269\u5927\u6216\u9650\u5236\u8BE5\u534F\u8BAE\u6761\u6B3E\u7684\u5185\u5BB9\u6216\u8303\u56F4\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u4E09\u3001\u9002\u7528\u6CD5\u5F8B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u672C\u534F\u8BAE\u5168\u90E8\u5185\u5BB9\u5747\u4E3A\u6839\u636E\u65B0\u52A0\u5761\u5171\u548C\u56FD\u6CD5\u5F8B\u8BA2\u7ACB\u7684\u5408\u540C\uFF0C\u5176\u6210\u7ACB\u3001\u89E3\u91CA\u3001\u5185\u5BB9\u53CA\u6267\u884C\u5747\u9002\u7528\u65B0\u52A0\u5761\u5171\u548C\u56FD\u76F8\u5173\u6CD5\u5F8B\u89C4\u5B9A\uFF1B\u4EFB\u4F55\u56E0\u6216\u4E0E\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u670D\u52A1\u6709\u5173\u800C\u4EA7\u751F\u7684\u7D22\u8D54\u6216\u8BC9\u8BBC\uFF0C\u90FD\u5E94\u4F9D\u7167\u65B0\u52A0\u5761\u5171\u548C\u56FD\u7684\u6CD5\u5F8B\u8FDB\u884C\u7BA1\u8F96\u5E76\u52A0\u4EE5\u89E3\u91CA\u548C\u6267\u884C\u3002\u4E3A\u907F\u514D\u7591\u4E49\uFF0C\u8FD9\u4E00\u6761\u6B3E\u660E\u786E\u9002\u7528\u4E8E\u4EFB\u4F55\u9488\u5BF9\u6211\u4EEC\u7684\u4FB5\u6743\u7D22\u8D54\u3002\u4EFB\u4F55\u9488\u5BF9\u6211\u4EEC\u6216\u8005\u662F\u548C\u6211\u4EEC\u6709\u5173\u7684\u7D22\u8D54\u6216\u8BC9\u8BBC\u7684\u7BA1\u8F96\u6CD5\u9662\u6216\u8BC9\u8BBC\u5730\u5747\u5728\u65B0\u52A0\u5761\u5171\u548C\u56FD\u3002\u60A8\u65E0\u6761\u4EF6\u5730\u83B7\u5F97\u5728\u65B0\u52A0\u5761\u5171\u548C\u56FD\u6CD5\u9662\u8FDB\u884C\u8BC9\u8BBC\u548C\u4E0A\u8BC9\u7684\u6392\u4ED6\u6027\u7684\u7BA1\u8F96\u6743\u3002\u60A8\u4E5F\u65E0\u6761\u4EF6\u5730\u540C\u610F\u4E0E\u672C\u534F\u8BAE\u6B3E\u6709\u5173\u7684\u4E89\u8BAE\u6216\u95EE\u9898\u6216\u4EA7\u751F\u7684\u4EFB\u4F55\u7D22\u8D54\u8BF7\u6C42\u548C\u8BC9\u8BBC\u7684\u53D1\u751F\u5730\u6216\u6CD5\u9662\u5747\u6392\u4ED6\u6027\u5F97\u5728\u65B0\u52A0\u5761\u5171\u548C\u56FD\u3002\u4E0D\u65B9\u4FBF\u6CD5\u9662\u7684\u539F\u5219\u4E0D\u9002\u7528\u4E8E\u6839\u636E\u672C\u670D\u52A1\u6761\u6B3E\u7684\u9009\u62E9\u7684\u6CD5\u9662\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u56DB\u3001\u534F\u8BAE\u7684\u751F\u6548\u548C\u89E3\u91CA"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "14.1 \u672C\u534F\u8BAE\u4E8E\u60A8\u70B9\u51FB\u672C\u7F51\u5173\u6CE8\u518C\u9875\u9762\u7684\u540C\u610F\u6CE8\u518C\u5E76\u5B8C\u6210\u6CE8\u518C\u7A0B\u5E8F\u3001\u83B7\u5F97\u672C\u7F51\u5173\u8D26\u53F7\u548C\u5BC6\u7801\u65F6\u751F\u6548\uFF0C\u5BF9\u672C\u7F51\u5173\u548C\u60A8\u5747\u5177\u6709\u7EA6\u675F\u529B\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "14.2 \u672C\u534F\u8BAE\u7684\u6700\u7EC8\u89E3\u91CA\u6743\u5F52\u672C\u7F51\u5173\u6240\u6709\u3002"
                        )
                    );
                    break;
                default:
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "container",
                            ref: "agreement",
                            style: {
                                height: "500px",
                                overflow: "auto",
                                position: "relative"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "h2",
                            { style: { textAlign: "center" } },
                            "Service Agreement"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "OBSIDIAN TECHNOLOGY CO. PTE. LTD. (hereinafter referred to as the 'Company') is a company incorporated under the laws in Singapore Republic, GDEX (hereinafter referred to as 'GDEX' or 'the Gateway') is a cryptocurrency gateway to Bitshares which is operated by the company. The main access point for GDEX is https://gdex.io, GDEX is a gateway that provide cryptocurrency deposit and withdraw service (hereinafter referred to as 'the Service') to/from Bitshares. For the convenience of wording in this Agreement, the Company and the Gateway are referred to as 'We' or other applicable forms of first person pronouns in this Agreement. All natural persons or other subjects who use the Service shall be users of the Gateway. For the convenience of wording in this Agreement, the users are referred to as 'You' or any other applicable forms of the second-person pronouns. For the convenience of wording in this Agreement, you and us are collectively referred to as 'both parties', and individually as 'one party'."
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "Important reminder:"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "We hereby remind you that:"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "1. The digital assets themselves are not offered by any financial institution, corporation or the Gateway;"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "2. The digital asset market is new and unconfirmed, and will not necessarily expand;"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "3. Digital assets are primarily used by speculators, and are used relatively less on retail and commercial markets; digital asset transactions are highly risky, due to the fact that they are traded throughout 24-hour a day without limits on the rise or fall in price, and market makers and global government policies may cause major fluctuations in their prices;"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "4. Digital asset transactions may be suspended or prohibited at any time due to the enactment or modification of national laws, regulations and regulatory documents. Digital assets trading is highly risky and therefore not suitable for the vast majority of people. You acknowledge and understand that investment in digital assets may result in partial or total loss of your investment and therefore you are advised to decide the amount of your investment on the basis of your loss-bearing capacity. You acknowledge and understand that digital assets may generate derivative risks. Therefore, if you have any doubt, you are advised to seek assistance from a financial adviser first. Furthermore, aside from the above-mentioned risks, there may also be unpredictable risks. Therefore, you are advised to carefully consider and use clear judgment to assess your financial position and the abovementioned risks before making any decisions on buying and selling digital assets; any and all losses arising therefrom will be borne by you and we shall not be held liable in any manner whatsoever."
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "5. You understand that Bitshares is a decentralized exchange based on blockchain, the basic account service and the trade processing service are provided by Bitshares, there are also other institutions or single persons that issue assets and/or provide service on Bitshares. You understand that the Gateway is only used for you to deposit/withdraw cryptocurrency to/from Bitshares. The Gateway only undertake the due obligations for the availability of own issued assets (with 'GDEX.' as prefix of the name), do not undertake the due obligations for the account service and the trade processing service provided by Bitshares, do not undertake the due obligations for availability of the assets issued by other institutions or single persons.",
                            " "
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "6. There are risk in both Internet and Bitshares, include but not limit to failure for software, hardware to connect to Internet, security risk for Bitshares accounting system. As the availability and reliability of Internet and Bitshares are not under our control, we do not undertake obligations for the loss caused by the risks mentioned above."
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "7.it is prohibited to use the Gateway for money laundering, smuggling, bribery\uFF0Cif any user are found relevant to these actions, the Gateway will take various actions, include but not limited to terminating the Service to the user, informing relevant authority."
                        )
                    );
            }
        }
    }, {
        key: "render",
        value: function render() {
            var locale = this.props.locale;

            var msg = this._getAgreement(locale);
            return msg;
        }
    }]);

    return GdexAgreementModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

GdexAgreementModal.propTypes = {
    locale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(GdexAgreementModal, {
    listenTo: function listenTo() {
        return [_stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            settings: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().settings
        };
    }
}));

/***/ }),

/***/ 2619:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2622:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1234);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var components_DepositWithdraw_winex_WinexRecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2708);
/* harmony import */ var components_DepositWithdraw_winex_WinexGatewayRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2709);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(879);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(735);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var WinexGateway = function (_React$Component) {
    _inherits(WinexGateway, _React$Component);

    function WinexGateway(props) {
        _classCallCheck(this, WinexGateway);

        var _this = _possibleConstructorReturn(this, (WinexGateway.__proto__ || Object.getPrototypeOf(WinexGateway)).call(this));

        var action = props.viewSettings.get(props.provider + "Action", "deposit");
        _this.state = {
            coins: [],
            activeCoin: _this._getActiveCoin(props, { action: action }),
            action: action
        };
        return _this;
    }

    _createClass(WinexGateway, [{
        key: "_getActiveCoin",
        value: function _getActiveCoin(props, state) {
            var cachedCoin = props.viewSettings.get("activeCoin_Winex_" + state.action, null);
            var firstTimeCoin = null;
            if (state.action == "deposit") {
                firstTimeCoin = "HSR";
            }
            if (state.action == "withdraw") {
                firstTimeCoin = "WIN.HSR";
            }
            var activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;
            return activeCoin;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getCoins();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.provider !== this.props.provider || nextProps.action !== this.props.action) {
                this.setState({
                    activeCoin: this._getActiveCoin(nextProps, this.state.action)
                });
            }
        }

        // shouldComponentUpdate(nextProps, nextState) {
        //     if (nextState.action !== this.state.action) {
        //         this.setState({
        //             activeCoin: this._getActiveCoin(nextProps, nextState)
        //         });
        //     }

        //     return true;
        // }

    }, {
        key: "onSelectCoin",
        value: function onSelectCoin(e) {
            this.setState({
                activeCoin: e.target.value
            });

            var setting = {};
            setting["activeCoin_" + this.props.provider + "_" + this.state.action] = e.target.value;
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(setting);
        }
    }, {
        key: "changeAction",
        value: function changeAction(type) {
            var activeCoin = this._getActiveCoin(this.props, { action: type });

            this.setState({
                action: type,
                activeCoin: activeCoin
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(_defineProperty({}, this.props.provider + "Action", type));
        }
    }, {
        key: "_getCoins",
        value: function _getCoins() {
            var _this2 = this;

            Promise.all([Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_1__["fetchCoins"])(api_apiConfig__WEBPACK_IMPORTED_MODULE_9__["widechainAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_9__["widechainAPIs"].COINS_LIST), Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_1__["fetchTradingPairs"])(api_apiConfig__WEBPACK_IMPORTED_MODULE_9__["widechainAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_9__["widechainAPIs"].TRADING_PAIRS), Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_1__["getActiveWallets"])(api_apiConfig__WEBPACK_IMPORTED_MODULE_9__["widechainAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_9__["widechainAPIs"].ACTIVE_WALLETS)]).then(function (result) {
                var _result = _slicedToArray(result, 3),
                    coins = _result[0],
                    tradingPairs = _result[1],
                    wallets = _result[2];

                var backedCoins = _this2._getBackedCoins({
                    allCoins: coins,
                    tradingPairs: tradingPairs
                }).filter(function (a) {
                    return !!a.walletType;
                });
                backedCoins.forEach(function (a) {
                    a.isAvailable = wallets.indexOf(a.walletType) !== -1;
                });
                _this2.setState({ coins: backedCoins });
            });
        }
    }, {
        key: "_getBackedCoins",
        value: function _getBackedCoins(_ref) {
            var allCoins = _ref.allCoins,
                tradingPairs = _ref.tradingPairs;

            var coins_by_type = {};
            allCoins.forEach(function (coin_type) {
                return coins_by_type[coin_type.coinType] = coin_type;
            });

            var allowed_outputs_by_input = {};
            tradingPairs.forEach(function (pair) {
                if (!allowed_outputs_by_input[pair.inputCoinType]) allowed_outputs_by_input[pair.inputCoinType] = {};
                allowed_outputs_by_input[pair.inputCoinType][pair.outputCoinType] = true;
            });
            var blocktradesBackedCoins = [];
            allCoins.forEach(function (coin_type) {
                if (coin_type.backingCoinType && coins_by_type[coin_type.backingCoinType]) {
                    var isDepositAllowed = allowed_outputs_by_input[coin_type.backingCoinType] && allowed_outputs_by_input[coin_type.backingCoinType][coin_type.coinType];
                    var isWithdrawalAllowed = allowed_outputs_by_input[coin_type.coinType] && allowed_outputs_by_input[coin_type.coinType][coin_type.backingCoinType];
                    blocktradesBackedCoins.push({
                        name: coins_by_type[coin_type.backingCoinType].name,
                        intermediateAccount: coins_by_type[coin_type.backingCoinType].intermediateAccount,
                        gateFee: coins_by_type[coin_type.backingCoinType].gateFee,
                        walletType: coins_by_type[coin_type.backingCoinType].walletType,
                        backingCoinType: coins_by_type[coin_type.backingCoinType].walletSymbol,
                        symbol: coin_type.walletSymbol,
                        supportsMemos: coins_by_type[coin_type.backingCoinType].supportsOutputMemos,
                        depositAllowed: isDepositAllowed,
                        withdrawalAllowed: isWithdrawalAllowed,
                        minWithdrawAmount: coins_by_type[coin_type.backingCoinType].minAmount,
                        maxWithdrawAmount: coins_by_type[coin_type.backingCoinType].maxAmount,
                        feeType: coins_by_type[coin_type.backingCoinType].gateFeeType
                    });
                }
            });
            return blocktradesBackedCoins;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                provider = _props.provider;
            var _state = this.state,
                activeCoin = _state.activeCoin,
                action = _state.action,
                coins = _state.coins;

            if (!coins.length) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null);
            }

            var filteredCoins = coins.filter(function (a) {
                if (!a || !a.symbol) {
                    return false;
                } else {
                    return action === "deposit" ? a.depositAllowed : a.withdrawalAllowed;
                }
            });

            var coinOptions = filteredCoins.map(function (coin) {
                var option = action === "deposit" ? coin.backingCoinType.toUpperCase() : coin.symbol;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: option, key: coin.symbol },
                    option
                );
            }).filter(function (a) {
                return a !== null;
            });

            var coin = filteredCoins.filter(function (coin) {
                return action === "deposit" ? coin.backingCoinType.toUpperCase() === activeCoin : coin.symbol === activeCoin;
            })[0];

            if (!coin) coin = filteredCoins[0];
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-margin vertical medium-horizontal no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                {
                                    style: { minHeight: "2rem" },
                                    className: "left-label"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.choose_" + action
                                }),
                                ":",
                                " "
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "external-coin-types bts-select",
                                    onChange: this.onSelectCoin.bind(this),
                                    value: activeCoin
                                },
                                coinOptions
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-6 medium-offset-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                                style: { minHeight: "2rem" },
                                className: "left-label"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.gateway_text" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { paddingBottom: 15 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "button-group segmented no-margin" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: this.state.action === "deposit" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "deposit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.deposit" })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: this.state.action === "withdraw" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "withdraw")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw" })
                                    )
                                )
                            )
                        )
                    )
                ),
                !coin ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DepositWithdraw_winex_WinexGatewayRequest__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            key: provider + "." + coin.symbol,
                            gateway: provider,
                            issuer_account: coin.intermediateAccount,
                            account: account,
                            deposit_asset: coin.backingCoinType.toUpperCase(),
                            deposit_asset_name: coin.name,
                            deposit_coin_type: coin.backingCoinType.toLowerCase(),
                            deposit_account: coin.depositAccount,
                            deposit_wallet_type: coin.walletType,
                            gateFee: coin.gateFee,
                            receive_asset: coin.symbol,
                            receive_coin_type: coin.symbol.toLowerCase(),
                            supports_output_memos: coin.supportsMemos,
                            isAvailable: coin.isAvailable,
                            min_withdraw_amount: coin.minWithdrawAmount,
                            max_withdraw_amount: coin.maxWithdrawAmount,
                            fee_type: coin.feeType,
                            action: this.state.action
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DepositWithdraw_winex_WinexRecentTransactions__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        account: account.get("name"),
                        action: this.state.action
                    })
                )
            );
        }
    }]);

    return WinexGateway;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(WinexGateway, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(735);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var WinexRecentTransactions = function (_React$Component) {
    _inherits(WinexRecentTransactions, _React$Component);

    function WinexRecentTransactions(props) {
        _classCallCheck(this, WinexRecentTransactions);

        var _this = _possibleConstructorReturn(this, (WinexRecentTransactions.__proto__ || Object.getPrototypeOf(WinexRecentTransactions)).call(this));

        _this.state = {
            trans_history: []
        };
        return _this;
    }

    _createClass(WinexRecentTransactions, [{
        key: "_history",
        value: function _history(account, action) {
            var _this2 = this;

            var url = "";
            if (action === "deposit") {
                url = api_apiConfig__WEBPACK_IMPORTED_MODULE_3__["widechainAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_3__["widechainAPIs"].DEPOSIT_HISTORY + "?account=" + account;
            } else {
                url = api_apiConfig__WEBPACK_IMPORTED_MODULE_3__["widechainAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_3__["widechainAPIs"].WITHDRAW_HISTORY + "?account=" + account;
            }

            var head = {
                method: "GET",
                headers: new Headers({ Accept: "application/json" }),
                mode: "cors",
                cache: "default"
            };

            fetch(url, head).then(function (res) {
                if (res.ok) {
                    return res.json();
                } else {
                    {
                        this.LogError(res);
                    }
                }
            }).then(function (json) {
                return json;
            }).then(function (datas) {
                return datas;
            }).then(function (e) {
                _this2.setState({
                    trans_history: e
                });
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            var _props = this.props,
                account = _props.account,
                action = _props.action;

            this._history(account, action);
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextProps.action !== this.props.action) {
                this._history(nextProps.account, nextProps.action);
                return true;
            }
            return false;
        }
    }, {
        key: "LogError",
        value: function LogError(res) {
            console.error("服务器繁忙,请稍后重试; \r\nCode:" + res.status);
        }
    }, {
        key: "render",
        value: function render() {
            var trans_history = this.state.trans_history;


            var account_record = [];
            trans_history.forEach(function (record, i) {
                account_record.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: i },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "blocktrades-bridge" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "inline-block" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    record.status
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            record.amount + record.inputCoinType
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    href: "https://www.cryptofresh.com/tx/" + record.txid,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                },
                                record.txid
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        record.createDate
                    )
                ));
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "block-content-header" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.props.action ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            content: "gateway.recent_" + this.props.action
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.recent" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        account_record.length <= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { key: "no_recent" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { colSpan: "2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "operation.no_recent" })
                            )
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                "\u72B6\u6001"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                this.props.action === "deposit" ? "充值数量" : "提现数量"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                "\u6D41\u6C34\u53F7"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                "\u521B\u5EFA\u65F6\u95F4"
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        account_record
                    )
                )
            );
        }
    }]);

    return WinexRecentTransactions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WinexRecentTransactions.propTypes = {
    account: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    action: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(WinexRecentTransactions));

/***/ }),

/***/ 2709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var components_DepositWithdraw_winex_WinexWithdrawModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2710);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2550);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1236);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1217);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1332);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1234);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(735);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(879);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1248);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var WinexGatewayRequest = function (_React$Component) {
    _inherits(WinexGatewayRequest, _React$Component);

    function WinexGatewayRequest(props) {
        _classCallCheck(this, WinexGatewayRequest);

        var _this = _possibleConstructorReturn(this, (WinexGatewayRequest.__proto__ || Object.getPrototypeOf(WinexGatewayRequest)).call(this, props));

        _this.deposit_address_cache = new common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_9__["default"]();

        var urls = {
            Winex: api_apiConfig__WEBPACK_IMPORTED_MODULE_13__["widechainAPIs"].BASE
        };

        _this.state = {
            receive_address: {},
            url: props.url || urls[props.gateway]
        };

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this._copy = _this._copy.bind(_this);
        document.addEventListener("copy", _this._copy);
        return _this;
    }

    _createClass(WinexGatewayRequest, [{
        key: "_copy",
        value: function _copy(e) {
            try {
                e.clipboardData.setData("text/plain", this.state.clipboardText);
                e.preventDefault();
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return {
                inputCoinType: props.deposit_coin_type,
                outputCoinType: props.receive_coin_type,
                outputAddress: props.account.get("name"),
                url: this.state.url,
                stateCallback: this.addDepositAddress
            };
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            // let account_name = this.props.account.get("name");
            // let receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
            // if(!receive_address){
            //     receive_address.address = "unknown";
            // }
            // let receive_address = {address:"",memo:""}
            // this.setState({receive_address});
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            /* When switching accounts, reset the receive_address so a new one
            gets fetched/generated for the new account */
            if (np.account !== this.props.account) {
                this.setState({ receive_address: {} });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("copy", this._copy);
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            var account_name = this.props.account.get("name");
            this.deposit_address_cache.cacheInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type, receive_address.address, receive_address.memo);
            this.setState({ receive_address: receive_address });
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            // console.log( "this.props.issuer: ", this.props.issuer_account.toJS() )
            // console.log( "this.receive_asset.issuer: ", this.props.receive_asset.toJS() )
            return "withdraw_asset_" + this.props.issuer_account.get("name") + "_" + this.props.receive_asset.get("symbol");
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_7___default.a.publish(this.getWithdrawModalId(), "open");
        }
    }, {
        key: "toClipboard",
        value: function toClipboard(clipboardText) {
            try {
                this.setState({ clipboardText: clipboardText }, function () {
                    document.execCommand("copy");
                });
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var isDeposit = this.props.action === "deposit";
            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: "none", minHeight: 150 } });
            if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return emptyRow;

            var account_balances_object = this.props.account.get("balances");

            var gateFee = this.props.gateFee;


            var balance = "0 " + this.props.receive_asset.get("symbol");
            if (this.props.deprecated_in_favor_of) {
                var has_nonzero_balance = false;
                var balance_object_id = account_balances_object.get(this.props.receive_asset.get("id"));
                if (balance_object_id) {
                    var balance_object = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(balance_object_id);
                    if (balance_object) {
                        var _balance = balance_object.get("balance");
                        if (_balance != 0) has_nonzero_balance = true;
                    }
                }
                if (!has_nonzero_balance) return emptyRow;
            }

            // let account_balances = account_balances_object.toJS();
            // let asset_types = Object.keys(account_balances);
            // if (asset_types.length > 0) {
            //     let current_asset_id = this.props.receive_asset.get("id");
            //     if( current_asset_id )
            //     {
            //         balance = (<span><Translate component="span" content="transfer.available"/>: <BalanceComponent balance={account_balances[current_asset_id]}/></span>);
            //     }
            // }

            var receive_address = this.state.receive_address;
            if (!Object.keys(receive_address).length) {
                var account_name = this.props.account.get("name");
                receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
            }

            if (!receive_address) {
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["requestDepositAddress"])(this._getDepositObject());
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { margin: "3rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], { type: "three-bounce" })
                );
            }

            var withdraw_modal_id = this.getWithdrawModalId();
            var deposit_address_fragment = null;
            var deposit_memo = null;
            // if (this.props.deprecated_in_favor_of)
            // {
            //     deposit_address_fragment = <span>please use {this.props.deprecated_in_favor_of.get("symbol")} instead. <span data-tip={this.props.deprecated_message} data-place="right" data-html={true}><Icon name="question-circle" title="icons.question_circle" /></span><ReactTooltip /></span>;
            // }
            // else
            // {
            var clipboardText = "";
            var memoText = void 0;
            if (this.props.deposit_account) {
                deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    this.props.deposit_account
                );
                clipboardText = this.props.receive_coin_type + ":" + this.props.account.get("name");
                deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    clipboardText
                );
                var withdraw_memo_prefix = this.props.deposit_coin_type + ":";
            } else {
                if (receive_address.memo) {
                    // This is a client that uses a deposit memo (like ethereum), we need to display both the address and the memo they need to send
                    memoText = receive_address.memo;
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                    deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.memo
                    );
                } else {
                    // This is a client that uses unique deposit addresses to select the output
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                }
                var withdraw_memo_prefix = "";
            }

            if (!this.props.isAvailable || isDeposit && !this.props.deposit_account && !this.state.receive_address) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable",
                        component: "h4"
                    })
                );
            }

            var issuer = {
                name: "Winex",
                qq: "623556771",
                support: "support@winex.pro"
            };
            var support_block = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "left-label" },
                    "Support"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "winex.gateway.support_block" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "Mail\uFF1A"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            href: (issuer.support.indexOf("@") === -1 ? "" : "mailto:") + issuer.support,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        issuer.support
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "QQ\u7FA4\uFF1A"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            target: "_blank",
                            href: "//shang.qq.com/wpa/qunwpa?idkey=5346c21c6da5f4990daf9b178e2c71a160e0d4cfd2bbb7bbae21eea80f44a11f",
                            rel: "noopener noreferrer"
                        },
                        "623556771"
                    )
                )
            );
            if (isDeposit) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_deposit"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.your_account"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                account: this.props.account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        ),
                        support_block
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.deposit_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                { style: { color: "red" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "winex.gateway.deposit_warning",
                                    asset: this.props.deposit_asset
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    padding: "10px 0",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            !receive_address.address || receive_address.address === "unknown" ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_15___default.a, {
                                                size: 120,
                                                value: receive_address.address
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            !receive_address.address || receive_address.address === "unknown" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "winex.gateway.click_getaddress" }) : receive_address.address
                                        )
                                    ),
                                    deposit_memo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            "memo: ",
                                            deposit_memo
                                        )
                                    ) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button-group",
                                    style: { paddingTop: 10 }
                                },
                                deposit_address_fragment ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.toClipboard.bind(this, clipboardText)
                                    },
                                    "Copy address"
                                ) : null,
                                memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.toClipboard.bind(this, memoText)
                                    },
                                    "Copy memo"
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["requestDepositAddress"].bind(null, this._getDepositObject())
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "winex.gateway.get_deposit_address" })
                                )
                            )
                        )
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_withdraw"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.withdraw_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group", style: { paddingTop: 20 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button success",
                                    style: { fontSize: "1.3rem" },
                                    onClick: this.onWithdraw.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.withdraw_now" }),
                                " "
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_6__["default"],
                        { id: withdraw_modal_id, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DepositWithdraw_winex_WinexWithdrawModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                account: this.props.account.get("name"),
                                issuer: this.props.issuer_account.get("name"),
                                asset: this.props.receive_asset.get("symbol"),
                                url: this.state.url,
                                output_coin_name: this.props.deposit_asset_name,
                                gateFee: gateFee,
                                output_coin_symbol: this.props.deposit_asset,
                                output_coin_type: this.props.deposit_coin_type,
                                output_wallet_type: this.props.deposit_wallet_type,
                                output_supports_memos: this.props.supports_output_memos,
                                min_withdraw_amount: this.props.min_withdraw_amount,
                                max_withdraw_amount: this.props.max_withdraw_amount,
                                fee_type: this.props.fee_type,
                                memo_prefix: withdraw_memo_prefix,
                                modal_id: withdraw_modal_id,
                                balance: this.props.account.get("balances").toJS()[this.props.receive_asset.get("id")]
                            })
                        )
                    ),
                    support_block
                );
            }
        }
    }]);

    return WinexGatewayRequest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

WinexGatewayRequest.propTypes = {
    url: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_asset_name: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_account: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    receive_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    deposit_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_message: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    action: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    supports_output_memos: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool.isRequired,
    min_withdraw_amount: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.any,
    max_withdraw_amount: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.any,
    fee_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string
};
WinexGatewayRequest.defaultProps = {
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WinexGatewayRequest));

/***/ }),

/***/ 2710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1232);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1012);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(565);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1234);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(416);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(866);
/* harmony import */ var react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(581);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(582);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var WinexWithdrawModal = function (_React$Component) {
    _inherits(WinexWithdrawModal, _React$Component);

    function WinexWithdrawModal(props) {
        _classCallCheck(this, WinexWithdrawModal);

        var _this = _possibleConstructorReturn(this, (WinexWithdrawModal.__proto__ || Object.getPrototypeOf(WinexWithdrawModal)).call(this, props));

        _this.state = {
            withdraw_amount: _this.props.amount_to_withdraw,
            withdraw_address: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_wallet_type),
            withdraw_address_check_in_progress: true,
            withdraw_address_is_valid: null,
            options_is_valid: false,
            confirmation_is_valid: false,
            withdraw_address_selected: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.output_wallet_type),
            memo: "",
            withdraw_address_first: true,
            empty_withdraw_value: false,
            from_account: props.account,
            fee_asset_id: "1.3.0",
            feeStatus: {}
        };

        _this._validateAddress(_this.state.withdraw_address, props);

        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);
        return _this;
    }

    _createClass(WinexWithdrawModal, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.unMounted = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            var _this2 = this;

            if (np.account !== this.state.from_account && np.account !== this.props.account) {
                this.setState({
                    from_account: np.account,
                    feeStatus: {},
                    fee_asset_id: "1.3.0",
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus();
                });
            }
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this3 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var fee_asset_id = state.fee_asset_id,
                from_account = state.from_account;

            var _getAvailableAssets2 = this._getAvailableAssets(state),
                fee_asset_types = _getAvailableAssets2.fee_asset_types;

            if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
                fee_asset_id = fee_asset_types[0];
            }

            if (!from_account) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                accountID: from_account.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: this.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                if (_this3.unMounted) return;

                _this3.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this3._checkBalance);
            });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this4 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

            var account = state.from_account;
            if (!account) return;

            var _getAvailableAssets3 = this._getAvailableAssets(state),
                assets = _getAvailableAssets3.fee_asset_types;
            // const assets = ["1.3.0", this.props.asset.get("id")];


            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this4.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(state.feeStatus, feeStatus)) {
                    _this4.setState({
                        feeStatus: feeStatus
                    });
                }
                _this4._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "onWithdrawAmountChange",
        value: function onWithdrawAmountChange(_ref2) {
            var amount = _ref2.amount;

            this.setState({
                withdraw_amount: amount,
                empty_withdraw_value: amount !== undefined && !parseFloat(amount)
            }, this._checkWithdrawAmount(amount), this._validMinAmount(amount), this._calFinalNumber(amount));
        }
    }, {
        key: "onSelectChanged",
        value: function onSelectChanged(index) {
            var new_withdraw_address = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type)[index];
            common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: new_withdraw_address
            });

            this.setState({
                withdraw_address_selected: new_withdraw_address,
                options_is_valid: false,
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "onWithdrawAddressChanged",
        value: function onWithdrawAddressChanged(e) {
            var new_withdraw_address = e.target.value.trim();

            this.setState({
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: new_withdraw_address,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(new_withdraw_address) {
            var _this5 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["validateAddress"])({
                url: props.url,
                walletType: props.output_wallet_type,
                newAddress: new_withdraw_address
            }).then(function (isValid) {
                if (_this5.state.withdraw_address === new_withdraw_address) {
                    _this5.setState({
                        withdraw_address_check_in_progress: false,
                        withdraw_address_is_valid: isValid
                    });
                }
            });
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                withdraw_amount = _state.withdraw_amount;
            var _props = this.props,
                asset = _props.asset,
                balance = _props.balance;

            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkBalance"])(withdraw_amount, asset, feeAmount, balance);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
            return hasBalance;
        }
    }, {
        key: "_checkWithdrawAmount",
        value: function _checkWithdrawAmount(withdraw_amount) {
            var feeAmount = this.state.feeAmount;
            var _props2 = this.props,
                asset = _props2.asset,
                balance = _props2.balance;

            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_15__["checkBalance"])(withdraw_amount, asset, feeAmount, balance);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
            return hasBalance;
        }
    }, {
        key: "_validMinAmount",
        value: function _validMinAmount(withdraw_amount) {
            var min_withdraw_amount = this.props.min_withdraw_amount;

            var flag = false;
            if (parseFloat(withdraw_amount) < min_withdraw_amount) {
                flag = true;
            }
            this.setState({ minWithdrawError: flag });
            return flag;
        }
    }, {
        key: "_calFinalNumber",
        value: function _calFinalNumber(withdraw_amount) {
            if (!withdraw_amount) {
                withdraw_amount = "0";
            }
            var _props3 = this.props,
                fee_type = _props3.fee_type,
                gateFee = _props3.gateFee;


            var amount = parseFloat(withdraw_amount);
            var drawGatefee = parseFloat(gateFee);
            if (fee_type === "1") {
                this.setState({
                    finalNumber: (amount - amount * drawGatefee).toFixed(8)
                });
            } else {
                this.setState({ finalNumber: (amount - drawGatefee).toFixed(8) });
            }
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length && this.state.withdraw_amount !== null) {
                if (!this.state.withdraw_address_is_valid) {
                    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "open");
                } else if (parseFloat(this.state.withdraw_amount) > 0) {
                    if (!common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                        var withdrawals = [];
                        withdrawals.push(this.state.withdraw_address);
                        common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                            wallet: this.props.output_wallet_type,
                            addresses: withdrawals
                        });
                    } else {
                        var _withdrawals = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
                        if (_withdrawals.indexOf(this.state.withdraw_address) == -1) {
                            _withdrawals.push(this.state.withdraw_address);
                            common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                                wallet: this.props.output_wallet_type,
                                addresses: _withdrawals
                            });
                        }
                    }
                    common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                        wallet: this.props.output_wallet_type,
                        address: this.state.withdraw_address
                    });
                    var asset = this.props.asset;

                    var feeAmount = this.state.feeAmount;


                    var amount = parseFloat(String.prototype.replace.call(this.state.withdraw_amount, /,/g, ""));
                    var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                        asset_id: asset.get("id"),
                        precision: asset.get("precision"),
                        real: amount
                    });

                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : "1.3.0");

                    this.setState({
                        empty_withdraw_value: false
                    });
                } else {
                    this.setState({
                        empty_withdraw_value: true
                    });
                }
            }
        }
    }, {
        key: "onSubmitConfirmation",
        value: function onSubmitConfirmation() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_11___default.a.publish(this.getWithdrawModalId(), "close");

            if (!common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                var withdrawals = [];
                withdrawals.push(this.state.withdraw_address);
                common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                    wallet: this.props.output_wallet_type,
                    addresses: withdrawals
                });
            } else {
                var _withdrawals2 = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
                if (_withdrawals2.indexOf(this.state.withdraw_address) == -1) {
                    _withdrawals2.push(this.state.withdraw_address);
                    common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].set({
                        wallet: this.props.output_wallet_type,
                        addresses: _withdrawals2
                    });
                }
            }
            common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: this.state.withdraw_address
            });
            var asset = this.props.asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(asset.get("precision"));
            var amount = String.prototype.replace.call(this.state.withdraw_amount, /,/g, "");

            var feeAmount = this.state.feeAmount;


            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : "1.3.0");
        }
    }, {
        key: "onDropDownList",
        value: function onDropDownList() {
            if (common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                if (this.state.options_is_valid === false) {
                    this.setState({ options_is_valid: true });
                    this.setState({ withdraw_address_first: false });
                }

                if (this.state.options_is_valid === true) {
                    this.setState({ options_is_valid: false });
                }
            }
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "confirmation";
        }
    }, {
        key: "onAccountBalance",
        value: function onAccountBalance() {
            var feeAmount = this.state.feeAmount;

            if (Object.keys(this.props.account.get("balances").toJS()).includes(this.props.asset.get("id"))) {
                var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"]({
                    amount: this.props.balance.get("balance"),
                    asset_id: this.props.asset.get("id"),
                    precision: this.props.asset.get("precision")
                });

                // Subtract the fee if it is using the same asset
                if (total.asset_id === feeAmount.asset_id) {
                    total.minus(feeAmount);
                }

                this.setState({
                    withdraw_amount: total.getAmount({ real: true }),
                    empty_withdraw_value: false
                }, this._checkBalance);
            }
        }
    }, {
        key: "setNestedRef",
        value: function setNestedRef(ref) {
            this.nestedRef = ref;
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(_ref3) {
            var asset = _ref3.asset;

            this.setState({
                fee_asset_id: asset.get("id")
            }, this._updateFee);
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account,
                feeStatus = state.feeStatus;

            function hasFeePoolBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var fee_asset_types = [];
            if (!(from_account && from_account.get("balances"))) {
                return { fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sortID);
            for (var key in account_balances) {
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(key);
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }

                if (asset) {
                    var priceIsValid = false,
                        p = void 0;
                    try {
                        p = new Price({
                            base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "base"]).toJS()),
                            quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["Asset"](asset.getIn(["options", "core_exchange_rate", "quote"]).toJS())
                        });
                        priceIsValid = p.isValid();
                    } catch (err) {
                        priceIsValid = false;
                    }

                    if (asset.get("id") !== "1.3.0" && !priceIsValid) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }

            fee_asset_types = fee_asset_types.filter(function (a) {
                return hasFeePoolBalance(a) && hasBalance(a);
            });

            return { fee_asset_types: fee_asset_types };
        }
    }, {
        key: "render",
        value: function render() {
            var _state2 = this.state,
                withdraw_address_selected = _state2.withdraw_address_selected,
                memo = _state2.memo;

            var storedAddress = common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].get(this.props.output_wallet_type);
            var balance = null;

            var account_balances = this.props.account.get("balances").toJS();
            var asset_types = Object.keys(account_balances);

            var withdrawModalId = this.getWithdrawModalId();
            var invalid_address_message = null;
            var options = null;
            var confirmation = null;

            if (this.state.options_is_valid) {
                options = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: !storedAddress.length ? "blocktrades-disabled-options" : "blocktrades-options"
                    },
                    storedAddress.map(function (name, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                key: index,
                                onClick: this.onSelectChanged.bind(this, index)
                            },
                            name
                        );
                    }, this)
                );
            }

            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length) {
                if (!this.state.withdraw_address_is_valid) {
                    invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            content: "gateway.valid_address",
                            coin_type: this.props.output_coin_type
                        })
                    );
                    confirmation = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_foundation_apps_src_modal__WEBPACK_IMPORTED_MODULE_14___default.a,
                        { id: withdrawModalId, overlay: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: withdrawModalId },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "a",
                                { href: "#", className: "close-button" },
                                "\xD7"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.title" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "submit",
                                className: "button",
                                onClick: this.onSubmitConfirmation.bind(this),
                                value: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("modal.confirmation.accept")
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                                { close: withdrawModalId },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "a",
                                    { className: "secondary button" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.confirmation.cancel" })
                                )
                            )
                        )
                    );
                }
                // if (this.state.withdraw_address_is_valid)
                //   invalid_address_message = <Icon name="checkmark-circle" title="icons.checkmark_circle.operation_succeed" className="success" />;
                // else
                //   invalid_address_message = <Icon name="cross-circle" title="icons.cross_circle.operation_failed" className="alert" />;
            }

            var tabIndex = 1;
            var withdraw_memo = null;

            if (this.props.output_supports_memos) {
                withdraw_memo = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transfer.memo" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                        rows: "3",
                        value: memo,
                        tabIndex: tabIndex++,
                        onChange: this.onMemoChanged.bind(this)
                    })
                );
            }

            // Estimate fee VARIABLES

            var _getAvailableAssets4 = this._getAvailableAssets(),
                fee_asset_types = _getAvailableAssets4.fee_asset_types;

            if (asset_types.length > 0) {
                var current_asset_id = this.props.asset.get("id");
                if (current_asset_id) {
                    var current = account_balances[current_asset_id];
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        "\xA0:\xA0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: "set-cursor",
                                onClick: this.onAccountBalance.bind(this)
                            },
                            current ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                balance: account_balances[current_asset_id]
                            }) : 0
                        )
                    );
                } else balance = "No funds";
            } else {
                balance = "No funds";
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "form",
                { className: "grid-block vertical full-width-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-container" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "h3",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "gateway.withdraw_coin",
                                coin: this.props.output_coin_name,
                                symbol: this.props.output_coin_symbol
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            label: "modal.withdraw.amount",
                            amount: this.state.withdraw_amount,
                            asset: this.props.asset.get("id"),
                            assets: [this.props.asset.get("id")],
                            placeholder: "0.0",
                            onChange: this.onWithdrawAmountChange.bind(this),
                            display_balance: balance
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "winex.withdraw.winAmount",
                                min_amount: this.props.min_withdraw_amount,
                                asset: this.props.asset.get("symbol")
                            })
                        ),
                        this.state.empty_withdraw_value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.valid" })
                        ) : null,
                        this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.insufficient" })
                        ) : null,
                        this.state.minWithdrawError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "winex.transfer.errors.minWithdraw",
                                min_amount: this.props.min_withdraw_amount + this.props.asset.get("symbol")
                            })
                        ) : null
                    ),
                    this.state.feeAmount ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block gate_fee" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            refCallback: this.setNestedRef.bind(this),
                            label: "transfer.fee",
                            disabled: true,
                            amount: this.state.feeAmount.getAmount({
                                real: true
                            }),
                            onChange: this.onFeeChanged.bind(this),
                            asset: this.state.feeAmount.asset_id,
                            assets: fee_asset_types,
                            tabIndex: tabIndex++
                        }),
                        !this.state.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noFeeBalance" })
                        ) : null,
                        !this.state.hasPoolBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noPoolBalance" })
                        ) : null
                    ) : null,
                    this.props.gateFee ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "amount-selector right-selector",
                            style: { paddingBottom: 20 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.fee" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "text",
                                disabled: true,
                                value: this.props.gateFee * 100
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "form-label select floating-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "dropdown-wrapper inactive" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        this.props.fee_type === "1" ? "%" : this.props.output_coin_symbol
                                    )
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "winex.withdraw.finalNumber",
                                final_number: this.state.finalNumber
                            })
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "modal.withdraw.address"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-select-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                    type: "text",
                                    value: withdraw_address_selected,
                                    tabIndex: "4",
                                    onChange: this.onWithdrawAddressChanged.bind(this),
                                    autoComplete: "off"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { onClick: this.onDropDownList.bind(this) },
                                    "\u25BC"
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "blocktrades-position-options" },
                            options
                        ),
                        invalid_address_message
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "button-group" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                onClick: this.onSubmit.bind(this),
                                className: "button" + (this.state.error || this.state.balanceError || this.state.minWithdrawError ? " disabled" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.withdraw.submit" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { close: this.props.modal_id },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "button" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.perm.cancel" })
                            )
                        )
                    ),
                    confirmation
                )
            );
        }
    }]);

    return WinexWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WinexWithdrawModal.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    issuer: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired,
    output_coin_name: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    output_coin_symbol: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    output_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    output_supports_memos: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool.isRequired,
    amount_to_withdraw: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    min_withdraw_amount: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    max_withdraw_amount: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.any,
    fee_type: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(WinexWithdrawModal));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ })

}]);
//# sourceMappingURL=deposit-withdraw.js.map