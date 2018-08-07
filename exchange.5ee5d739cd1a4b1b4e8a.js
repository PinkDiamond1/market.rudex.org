(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 2361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1266);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(709);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1259);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2337);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1263);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2362);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(894);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(416);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(895);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1267);
/* harmony import */ var components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2457);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2325);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var ExchangeContainer = function (_React$Component) {
    _inherits(ExchangeContainer, _React$Component);

    function ExchangeContainer() {
        _classCallCheck(this, ExchangeContainer);

        return _possibleConstructorReturn(this, (ExchangeContainer.__proto__ || Object.getPrototypeOf(ExchangeContainer)).apply(this, arguments));
    }

    _createClass(ExchangeContainer, [{
        key: "render",
        value: function render() {
            var symbols = this.props.match.params.marketID.toUpperCase().split("_");
            if (symbols[0] === symbols[1]) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], { subtitle: "market_not_found_subtitle" });
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_7___default.a,
                {
                    stores: [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"], stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"]],
                    inject: {
                        locale: function locale() {
                            return stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentLocale;
                        },
                        lockedWalletState: function lockedWalletState() {
                            return stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().locked;
                        },
                        marketLimitOrders: function marketLimitOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketLimitOrders;
                        },
                        marketCallOrders: function marketCallOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketCallOrders;
                        },
                        invertedCalls: function invertedCalls() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().invertedCalls;
                        },
                        marketSettleOrders: function marketSettleOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketSettleOrders;
                        },
                        marketData: function marketData() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketData;
                        },
                        totals: function totals() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().totals;
                        },
                        activeMarketHistory: function activeMarketHistory() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().activeMarketHistory;
                        },
                        bucketSize: function bucketSize() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().bucketSize;
                        },
                        buckets: function buckets() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().buckets;
                        },
                        lowestCallPrice: function lowestCallPrice() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().lowestCallPrice;
                        },
                        feedPrice: function feedPrice() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().feedPrice;
                        },
                        currentAccount: function currentAccount() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount;
                        },
                        myActiveAccounts: function myActiveAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myActiveAccounts;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
                        },
                        settings: function settings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings;
                        },
                        exchange: function exchange() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().exchange;
                        },
                        starredMarkets: function starredMarkets() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
                        },
                        marketDirections: function marketDirections() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().marketDirections;
                        },
                        marketStats: function marketStats() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketStats;
                        },
                        marketReady: function marketReady() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketReady;
                        },
                        backedCoins: function backedCoins() {
                            return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().backedCoins.get("OPEN", []);
                        },
                        bridgeCoins: function bridgeCoins() {
                            return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().bridgeCoins;
                        },
                        miniDepthChart: function miniDepthChart() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("miniDepthChart", true);
                        },
                        viewChat: function viewChat() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("viewChat", true);
                        },

                        dataFeed: function dataFeed() {
                            return new components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__["DataFeed"]();
                        },

                        trackedGroupsConfig: function trackedGroupsConfig() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().trackedGroupsConfig;
                        },
                        currentGroupOrderLimit: function currentGroupOrderLimit() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentGroupLimit;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExchangeSubscriber, {
                    history: this.props.history,
                    location: this.props.location,
                    quoteAsset: symbols[0],
                    baseAsset: symbols[1]
                })
            );
        }
    }]);

    return ExchangeContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var emitter = Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["EmitterInstance"])();
var callListener = void 0,
    limitListener = void 0,
    newCallListener = void 0,
    feedUpdateListener = void 0,
    settleOrderListener = void 0;

var ExchangeSubscriber = function (_React$Component2) {
    _inherits(ExchangeSubscriber, _React$Component2);

    function ExchangeSubscriber(props) {
        _classCallCheck(this, ExchangeSubscriber);

        var _this2 = _possibleConstructorReturn(this, (ExchangeSubscriber.__proto__ || Object.getPrototypeOf(ExchangeSubscriber)).call(this));

        _this2.state = { sub: null };

        _this2._subToMarket = _this2._subToMarket.bind(_this2);
        return _this2;
    }

    _createClass(ExchangeSubscriber, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this3 = this;

            if (this.props.quoteAsset === null || this.props.baseAsset === null) {
                return;
            }
            if (this.props.quoteAsset.toJS && this.props.baseAsset.toJS) {
                this._subToMarket(this.props);
                // this._addMarket(this.props.quoteAsset.get("symbol"), this.props.baseAsset.get("symbol"));
            }

            emitter.on("cancel-order", limitListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].cancelLimitOrderSuccess);
            emitter.on("close-call", callListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].closeCallOrderSuccess);

            emitter.on("call-order-update", newCallListener = function newCallListener(call_order) {
                var coBase = call_order.call_price.base.asset_id;
                var coQuote = call_order.call_price.quote.asset_id;

                var baseId = _this3.props.baseAsset.get("id"),
                    quoteId = _this3.props.quoteAsset.get("id");
                if ((coBase === baseId || coBase === quoteId) && (coQuote === baseId || coQuote === quoteId)) {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].callOrderUpdate(call_order);
                }
            });
            emitter.on("bitasset-update", feedUpdateListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].feedUpdate);
            emitter.on("settle-order-update", settleOrderListener = function settleOrderListener(object) {
                var _market_utils$isMarke = market_utils.isMarketAsset(_this3.props.quoteAsset, _this3.props.baseAsset),
                    isMarketAsset = _market_utils$isMarke.isMarketAsset,
                    marketAsset = _market_utils$isMarke.marketAsset;

                if (isMarketAsset && marketAsset.id === object.balance.asset_id) {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].settleOrderUpdate(marketAsset.id);
                }
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this4 = this;

            if (nextProps.quoteAsset === null || nextProps.baseAsset === null) {
                return;
            }
            /* Prediction markets should only be shown in one direction, if the link goes to the wrong one we flip it */
            if (nextProps.baseAsset && nextProps.baseAsset.getIn(["bitasset", "is_prediction_market"])) {
                this.props.history.push("/market/" + nextProps.baseAsset.get("symbol") + "_" + nextProps.quoteAsset.get("symbol"));
            }

            if (nextProps.quoteAsset && nextProps.baseAsset) {
                if (!this.state.sub) {
                    return this._subToMarket(nextProps);
                }
            }

            if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
                var currentSub = this.state.sub.split("_");
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(function () {
                    _this4._subToMarket(nextProps);
                });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            var _props = this.props,
                quoteAsset = _props.quoteAsset,
                baseAsset = _props.baseAsset;

            if (quoteAsset === null || baseAsset === null) {
                return;
            }

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(quoteAsset.get("id"), baseAsset.get("id"));
            if (emitter) {
                emitter.off("cancel-order", limitListener);
                emitter.off("close-call", callListener);
                emitter.off("call-order-update", newCallListener);
                emitter.off("bitasset-update", feedUpdateListener);
                emitter.off("settle-order-update", settleOrderListener);
            }
        }
    }, {
        key: "_subToMarket",
        value: function _subToMarket(props, newBucketSize, newGroupLimit) {
            var quoteAsset = props.quoteAsset,
                baseAsset = props.baseAsset,
                bucketSize = props.bucketSize,
                currentGroupOrderLimit = props.currentGroupOrderLimit;

            if (newBucketSize) {
                bucketSize = newBucketSize;
            }
            if (newGroupLimit) {
                currentGroupOrderLimit = newGroupLimit;
            }
            if (quoteAsset.get("id") && baseAsset.get("id")) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].subscribeMarket.defer(baseAsset, quoteAsset, bucketSize, currentGroupOrderLimit);
                this.setState({
                    sub: quoteAsset.get("id") + "_" + baseAsset.get("id")
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.quoteAsset === null || this.props.baseAsset === null) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], { subtitle: "market_not_found_subtitle" });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Exchange__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, {
                sub: this.state.sub,
                subToMarket: this._subToMarket
            }));
        }
    }]);

    return ExchangeSubscriber;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ExchangeSubscriber.propTypes = {
    currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAccount.isRequired,
    quoteAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    baseAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired
};
ExchangeSubscriber.defaultProps = {
    currentAccount: "1.2.3",
    coreAsset: "1.3.0"
};


ExchangeSubscriber = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__["default"])(ExchangeSubscriber, {
    show_loader: true
});

/* harmony default export */ __webpack_exports__["default"] = (ExchangeContainer);

/***/ }),

/***/ 2362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1267);
/* harmony import */ var _MyOpenOrders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2363);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2403);
/* harmony import */ var _MarketHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2410);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2412);
/* harmony import */ var _BuySell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2419);
/* harmony import */ var _MarketPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2453);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var _TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2454);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1030);
/* harmony import */ var _DepthHighChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2461);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2464);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(588);
/* harmony import */ var _Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2466);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2364);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(416);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(730);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1265);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(582);
/* harmony import */ var _ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2472);
/* harmony import */ var _ExchangeHeader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2473);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(485);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(581);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(879);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1341);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _Chat_ChatBro__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2476);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(1402);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_32__);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











// import PriceChartD3 from "./PriceChartD3";






















// Highcharts.setOptions({
//     global: {
//         useUTC: false
//     }
// });



var Exchange = function (_React$Component) {
    _inherits(Exchange, _React$Component);

    function Exchange(props) {
        _classCallCheck(this, Exchange);

        var _this = _possibleConstructorReturn(this, (Exchange.__proto__ || Object.getPrototypeOf(Exchange)).call(this));

        _this.EXPIRATIONS = {
            HOUR: {
                title: "1 hour",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "hour").valueOf();
                }
            },
            "12HOURS": {
                title: "12 hours",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(12, "hour").valueOf();
                }
            },
            "24HOURS": {
                title: "24 hours",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "day").valueOf();
                }
            },
            "7DAYS": {
                title: "7 days",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(7, "day").valueOf();
                }
            },
            MONTH: {
                title: "30 days",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(30, "day").valueOf();
                }
            },
            YEAR: {
                title: "1 year",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "year").valueOf();
                }
            },
            SPECIFIC: {
                title: "Specific",
                get: function get(type) {
                    return _this.state.expirationCustomTime[type].valueOf();
                }
            }
        };

        _this.state = _extends({}, _this._initialState(props), {
            expirationType: {
                bid: props.exchange.getIn(["lastExpiration", "bid"]) || "YEAR",
                ask: props.exchange.getIn(["lastExpiration", "ask"]) || "YEAR"
            },
            expirationCustomTime: {
                bid: moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "day"),
                ask: moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "day")
            },
            feeStatus: {}
        });

        _this._getWindowSize = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._getWindowSize.bind(_this), 150);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);

        _this._handleExpirationChange = _this._handleExpirationChange.bind(_this);
        _this._handleCustomExpirationChange = _this._handleCustomExpirationChange.bind(_this);

        _this.psInit = true;
        return _this;
    }

    _createClass(Exchange, [{
        key: "_handleExpirationChange",
        value: function _handleExpirationChange(type, e) {
            var expirationType = _extends({}, this.state.expirationType, _defineProperty({}, type, e.target.value));

            if (e.target.value !== "SPECIFIC") {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].setExchangeLastExpiration(_extends({}, this.props.exchange.has("lastExpiration") && this.props.exchange.get("lastExpiration").toJS() || {}, _defineProperty({}, type, e.target.value)));
            }

            this.setState({
                expirationType: expirationType
            });
        }
    }, {
        key: "_handleCustomExpirationChange",
        value: function _handleCustomExpirationChange(type, time) {
            var expirationCustomTime = _extends({}, this.state.expirationCustomTime, _defineProperty({}, type, time));

            this.setState({
                expirationCustomTime: expirationCustomTime
            });
        }
    }, {
        key: "_initialState",
        value: function _initialState(props) {
            var ws = props.viewSettings;
            var bid = {
                forSaleText: "",
                toReceiveText: "",
                priceText: "",
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.baseAsset.get("id"),
                    precision: props.baseAsset.get("precision")
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.quoteAsset.get("id"),
                    precision: props.quoteAsset.get("precision")
                })
            };
            bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({ base: bid.for_sale, quote: bid.to_receive });
            var ask = {
                forSaleText: "",
                toReceiveText: "",
                priceText: "",
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.quoteAsset.get("id"),
                    precision: props.quoteAsset.get("precision")
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.baseAsset.get("id"),
                    precision: props.baseAsset.get("precision")
                })
            };
            ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({ base: ask.for_sale, quote: ask.to_receive });

            return {
                history: [],
                buySellOpen: ws.get("buySellOpen", true),
                bid: bid,
                ask: ask,
                flipBuySell: ws.get("flipBuySell", false),
                favorite: false,
                showDepthChart: ws.get("showDepthChart", false),
                leftOrderBook: ws.get("leftOrderBook", true),
                buyDiff: false,
                sellDiff: false,
                buySellTop: ws.get("buySellTop", true),
                buyFeeAssetIdx: ws.get("buyFeeAssetIdx", 0),
                sellFeeAssetIdx: ws.get("sellFeeAssetIdx", 0),
                height: window.innerHeight,
                width: window.innerWidth,
                chartHeight: ws.get("chartHeight", 600),
                currentPeriod: ws.get("currentPeriod", 3600 * 24 * 30 * 3) // 3 months
            };
        }
    }, {
        key: "_getLastMarketKey",
        value: function _getLastMarketKey() {
            var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_26__["Apis"].instance().chain_id;
            return "lastMarket" + (chainID ? "_" + chainID.substr(0, 8) : "");
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkFeeStatus();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].getTrackedGroupsConfig();

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting.defer(_defineProperty({}, this._getLastMarketKey(), this.props.quoteAsset.get("symbol") + "_" + this.props.baseAsset.get("symbol")));

            window.addEventListener("resize", this._getWindowSize, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            if (!np.marketReady && !this.props.marketReady) {
                return false;
            }
            var propsChanged = false;
            for (var key in np) {
                if (np.hasOwnProperty(key)) {
                    propsChanged = propsChanged || !common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(np[key], this.props[key]);
                    if (propsChanged) break;
                }
            }
            return propsChanged || !common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this2 = this;

            var assets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [this.props.coreAsset, this.props.baseAsset, this.props.quoteAsset];
            var account = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.currentAccount;

            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_27__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a.get("id"),
                    type: "limit_order_create"
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a.get("id")] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(_this2.state.feeStatus, feeStatus)) {
                    _this2.setState({
                        feeStatus: feeStatus
                    });
                }
            }).catch(function (err) {
                console.log("checkFeeStatusAsync error", err);
                _this2.setState({ feeStatus: {} });
            });
        }
    }, {
        key: "_getWindowSize",
        value: function _getWindowSize() {
            var _window = window,
                innerHeight = _window.innerHeight,
                innerWidth = _window.innerWidth;

            if (innerHeight !== this.state.height || innerWidth !== this.state.width) {
                this.setState({
                    height: innerHeight,
                    width: innerWidth
                });
                var centerContainer = this.refs.center;
                if (centerContainer) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(centerContainer);
                }
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            this._initPsContainer();
            if (!this.props.exchange.get("tutorialShown") && prevProps.coreAsset && prevState.feeStatus) {
                if (!this.tutorialShown) {
                    this.tutorialShown = true;
                    var theme = this.props.settings.get("themes");

                    intro_js__WEBPACK_IMPORTED_MODULE_31___default.a.introJs().setOptions({
                        tooltipClass: theme,
                        highlightClass: theme,
                        showBullets: false,
                        hideNext: true,
                        hidePrev: true,
                        nextLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.next_label"),
                        prevLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.prev_label"),
                        skipLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.skip_label"),
                        doneLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.done_label")
                    }).start();

                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].setExchangeTutorialShown.defer(true);
                }
            }
        }
    }, {
        key: "_initPsContainer",
        value: function _initPsContainer() {
            if (this.refs.center && this.psInit) {
                var centerContainer = this.refs.center;
                if (centerContainer) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(centerContainer);
                    this.psInit = false;
                }
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this._initPsContainer();
            if (nextProps.quoteAsset !== this.props.quoteAsset || nextProps.baseAsset !== this.props.baseAsset || nextProps.currentAccount !== this.props.currentAccount) {
                this._checkFeeStatus([nextProps.coreAsset, nextProps.baseAsset, nextProps.quoteAsset], nextProps.currentAccount);
            }
            if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
                this.setState(this._initialState(nextProps));

                return actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting(_defineProperty({}, this._getLastMarketKey(), nextProps.quoteAsset.get("symbol") + "_" + nextProps.baseAsset.get("symbol")));
            }

            // if (this.props.sub && nextProps.bucketSize !== this.props.bucketSize) {
            //     return this._changeBucketSize(nextProps.bucketSize);
            // }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._getWindowSize);
        }
    }, {
        key: "_getFeeAssets",
        value: function _getFeeAssets(quote, base, coreAsset) {
            var _this3 = this;

            var currentAccount = this.props.currentAccount;
            var feeStatus = this.state.feeStatus;


            function addMissingAsset(target, asset) {
                if (target.indexOf(asset) === -1) {
                    target.push(asset);
                }
            }

            function hasFeePoolBalance(id) {
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var sellAssets = [coreAsset, quote === coreAsset ? base : quote];
            addMissingAsset(sellAssets, quote);
            addMissingAsset(sellAssets, base);
            // let sellFeeAsset;

            var buyAssets = [coreAsset, base === coreAsset ? quote : base];
            addMissingAsset(buyAssets, quote);
            addMissingAsset(buyAssets, base);
            // let buyFeeAsset;

            var balances = {};

            currentAccount.get("balances", []).filter(function (balance, id) {
                return ["1.3.0", quote.get("id"), base.get("id")].indexOf(id) >= 0;
            }).forEach(function (balance, id) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(balance);
                balances[id] = {
                    balance: balanceObject ? parseInt(balanceObject.get("balance"), 10) : 0,
                    fee: _this3._getFee(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getAsset(id))
                };
            });

            function filterAndDefault(assets, balances, idx) {
                var asset = void 0;
                /* Only keep assets for which the user has a balance larger than the fee, and for which the fee pool is valid */
                assets = assets.filter(function (a) {
                    if (!balances[a.get("id")]) {
                        return false;
                    }
                    return hasFeePoolBalance(a.get("id")) && hasBalance(a.get("id"));
                });

                /* If the user has no valid balances, default to core fee */
                if (!assets.length) {
                    asset = coreAsset;
                    assets.push(coreAsset);
                    /* If the user has balances, use the stored idx value unless that asset is no longer available*/
                } else {
                    asset = assets[Math.min(assets.length - 1, idx)];
                }

                return { assets: assets, asset: asset };
            }

            var _filterAndDefault = filterAndDefault(sellAssets, balances, this.state.sellFeeAssetIdx),
                sellFeeAssets = _filterAndDefault.assets,
                sellFeeAsset = _filterAndDefault.asset;

            var _filterAndDefault2 = filterAndDefault(buyAssets, balances, this.state.buyFeeAssetIdx),
                buyFeeAssets = _filterAndDefault2.assets,
                buyFeeAsset = _filterAndDefault2.asset;

            var sellFee = this._getFee(sellFeeAsset);
            var buyFee = this._getFee(buyFeeAsset);

            return {
                sellFeeAsset: sellFeeAsset,
                sellFeeAssets: sellFeeAssets,
                sellFee: sellFee,
                buyFeeAsset: buyFeeAsset,
                buyFeeAssets: buyFeeAssets,
                buyFee: buyFee
            };
        }
    }, {
        key: "_getFee",
        value: function _getFee() {
            var asset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.coreAsset;

            return this.state.feeStatus[asset.get("id")] && this.state.feeStatus[asset.get("id")].fee;
        }
    }, {
        key: "_verifyFee",
        value: function _verifyFee(fee, sell, sellBalance, coreBalance) {
            var coreFee = this._getFee();

            if (fee.asset_id === "1.3.0") {
                if (coreFee.getAmount() <= coreBalance) {
                    return "1.3.0";
                } else {
                    return null;
                }
            } else {
                var sellSum = sell.asset_id === fee.asset_id ? fee.getAmount() + sell.getAmount() : sell.getAmount();
                if (sellSum <= sellBalance) {
                    // Sufficient balance in asset to pay fee
                    return fee.asset_id;
                } else if (coreFee.getAmount() <= coreBalance && fee.asset_id !== "1.3.0") {
                    // Sufficient balance in core asset to pay fee
                    return "1.3.0";
                } else {
                    return null; // Unable to pay fee
                }
            }
        }
    }, {
        key: "_createLimitOrderConfirm",
        value: function _createLimitOrderConfirm(buyAsset, sellAsset, sellBalance, coreBalance, feeAsset, type) {
            var short = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
            var e = arguments[7];

            e.preventDefault();
            var _props$marketData = this.props.marketData,
                highestBid = _props$marketData.highestBid,
                lowestAsk = _props$marketData.lowestAsk;

            var current = this.state[type === "sell" ? "ask" : "bid"];

            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(sellBalance).toJS().balance, 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });

            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());
            if (!feeID) {
                return actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                    message: "Insufficient funds to pay fees",
                    level: "error"
                });
            }

            if (type === "buy" && lowestAsk) {
                var diff = this.state.bid.price.toReal() / lowestAsk.getPrice();
                if (diff > 1.2) {
                    this.refs.buy.show();
                    return this.setState({
                        buyDiff: diff
                    });
                }
            } else if (type === "sell" && highestBid) {
                var _diff = 1 / (this.state.ask.price.toReal() / highestBid.getPrice());
                if (_diff > 1.2) {
                    this.refs.sell.show();
                    return this.setState({
                        sellDiff: _diff
                    });
                }
            }

            var isPredictionMarket = sellAsset.getIn(["bitasset", "is_prediction_market"]);

            if (current.for_sale.gt(sellBalance) && !isPredictionMarket) {
                return actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                    message: "Insufficient funds to place order, you need at least " + current.for_sale.getAmount({ real: true }) + " " + sellAsset.get("symbol"),
                    level: "error"
                });
            }
            //
            if (!(current.for_sale.getAmount() > 0 && current.to_receive.getAmount() > 0)) {
                return actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                    message: "Please enter a valid amount and price",
                    level: "error"
                });
            }
            //
            if (type === "sell" && isPredictionMarket && short) {
                return this._createPredictionShort(feeID);
            }

            this._createLimitOrder(type, feeID);
        }
    }, {
        key: "_createLimitOrder",
        value: function _createLimitOrder(type, feeID) {
            var actionType = type === "sell" ? "ask" : "bid";

            var current = this.state[actionType];

            var expirationTime = null;
            if (this.state.expirationType[actionType] === "SPECIFIC") {
                expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get(actionType);
            } else {
                expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get();
            }

            var order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["LimitOrderCreate"]({
                for_sale: current.for_sale,
                expiration: new Date(expirationTime || false),
                to_receive: current.to_receive,
                seller: this.props.currentAccount.get("id"),
                fee: {
                    asset_id: feeID,
                    amount: 0
                }
            });

            var _market_utils$getMark = common_market_utils__WEBPACK_IMPORTED_MODULE_21__["default"].getMarketName(this.props.baseAsset, this.props.quoteAsset),
                marketName = _market_utils$getMark.marketName,
                first = _market_utils$getMark.first;

            var inverted = this.props.marketDirections.get(marketName);
            var shouldFlip = inverted && first.get("id") !== this.props.baseAsset.get("id") || !inverted && first.get("id") !== this.props.baseAsset.get("id");
            if (shouldFlip) {
                var setting = {};
                setting[marketName] = !inverted;
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeMarketDirection(setting);
            }
            console.log("order:", JSON.stringify(order.toObject()));
            return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].createLimitOrder2(order).then(function (result) {
                if (result.error) {
                    if (result.error.message !== "wallet locked") actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                        message: "Unknown error. Failed to place order for " + current.to_receive.getAmount({ real: true }) + " " + current.to_receive.asset_id,
                        level: "error"
                    });
                }
                // console.log("order success");
            }).catch(function (e) {
                console.log("order failed:", e);
            });
        }
    }, {
        key: "_createPredictionShort",
        value: function _createPredictionShort(feeID) {
            var current = this.state.ask;
            var order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["LimitOrderCreate"]({
                for_sale: current.for_sale,
                to_receive: current.to_receive,
                seller: this.props.currentAccount.get("id"),
                fee: {
                    asset_id: feeID,
                    amount: 0
                }
            });

            Promise.all([Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["FetchChain"])("getAsset", this.props.quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]))]).then(function (assets) {
                var _assets = _slicedToArray(assets, 1),
                    backingAsset = _assets[0];

                var collateral = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    amount: order.amount_for_sale.getAmount(),
                    asset_id: backingAsset.get("id"),
                    precision: backingAsset.get("precision")
                });

                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].createPredictionShort(order, collateral).then(function (result) {
                    if (result.error) {
                        if (result.error.message !== "wallet locked") actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                            message: "Unknown error. Failed to place order for " + buyAssetAmount + " " + buyAsset.symbol,
                            level: "error"
                        });
                    }
                });
            });
        }
    }, {
        key: "_forceBuy",
        value: function _forceBuy(type, feeAsset, sellBalance, coreBalance) {
            var current = this.state[type === "sell" ? "ask" : "bid"];
            // Convert fee to relevant asset fee and check if user has sufficient balance
            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(sellBalance).get("balance"), 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });
            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

            if (feeID) {
                this._createLimitOrder(type, feeID);
            } else {
                console.error("Unable to pay fees, aborting limit order creation");
            }
        }
    }, {
        key: "_forceSell",
        value: function _forceSell(type, feeAsset, sellBalance, coreBalance) {
            var current = this.state[type === "sell" ? "ask" : "bid"];
            // Convert fee to relevant asset fee and check if user has sufficient balance
            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(sellBalance).get("balance"), 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });
            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

            if (feeID) {
                this._createLimitOrder(type, feeID);
            } else {
                console.error("Unable to pay fees, aborting limit order creation");
            }
        }
    }, {
        key: "_cancelLimitOrder",
        value: function _cancelLimitOrder(orderID, e) {
            e.preventDefault();
            var currentAccount = this.props.currentAccount;

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].cancelLimitOrder(currentAccount.get("id"), orderID // order id to cancel
            );
        }

        // _changeBucketSize(size, e) {
        //     if (e) e.preventDefault();
        //     if (size !== this.props.bucketSize) {
        //         MarketsActions.changeBucketSize.defer(size);
        //         let currentSub = this.props.sub.split("_");
        //         MarketsActions.unSubscribeMarket(currentSub[0], currentSub[1]).then(
        //             () => {
        //                 this.props.subToMarket(this.props, size);
        //             }
        //         );
        //     }
        // }

    }, {
        key: "_changeZoomPeriod",
        value: function _changeZoomPeriod(size, e) {
            e.preventDefault();
            if (size !== this.state.currentPeriod) {
                this.setState({
                    currentPeriod: size
                });
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                    currentPeriod: size
                });
            }
        }
    }, {
        key: "_depthChartClick",
        value: function _depthChartClick(base, quote, e) {
            e.preventDefault();
            var _state = this.state,
                bid = _state.bid,
                ask = _state.ask;


            bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: this.state.bid.for_sale,
                quote: this.state.bid.to_receive,
                real: e.xAxis[0].value
            });
            bid.priceText = bid.price.toReal();

            ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: this.state.ask.to_receive,
                quote: this.state.ask.for_sale,
                real: e.xAxis[0].value
            });
            ask.priceText = ask.price.toReal();
            var newState = {
                bid: bid,
                ask: ask,
                depthLine: bid.price.toReal()
            };

            this._setForSale(bid, true) || this._setReceive(bid, true);
            this._setReceive(ask) || this._setForSale(ask);

            this._setPriceText(bid, true);
            this._setPriceText(ask, false);
            // if (bid.for_sale.)
            this.setState(newState);
        }
    }, {
        key: "_flipBuySell",
        value: function _flipBuySell() {
            this.setState({
                flipBuySell: !this.state.flipBuySell
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                flipBuySell: !this.state.flipBuySell
            });
        }
    }, {
        key: "_toggleOpenBuySell",
        value: function _toggleOpenBuySell() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                buySellOpen: !this.state.buySellOpen
            });

            this.setState({ buySellOpen: !this.state.buySellOpen });
        }
    }, {
        key: "_toggleCharts",
        value: function _toggleCharts() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                showDepthChart: !this.state.showDepthChart
            });

            this.setState({ showDepthChart: !this.state.showDepthChart });
        }
    }, {
        key: "_toggleMarketPicker",
        value: function _toggleMarketPicker(asset) {
            var showMarketPicker = !!asset ? true : false;
            this.setState({
                showMarketPicker: showMarketPicker,
                marketPickerAsset: asset
            });
        }
    }, {
        key: "_moveOrderBook",
        value: function _moveOrderBook() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                leftOrderBook: !this.state.leftOrderBook
            });

            this.setState({ leftOrderBook: !this.state.leftOrderBook });
        }
    }, {
        key: "_currentPriceClick",
        value: function _currentPriceClick(type, price) {
            var isBid = type === "bid";
            var current = this.state[type];
            current.price = price[isBid ? "invert" : "clone"]();
            current.priceText = current.price.toReal();
            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }
            this.forceUpdate();
        }
    }, {
        key: "_orderbookClick",
        value: function _orderbookClick(order) {
            var isBid = order.isBid();
            /*
            * Because we are using a bid order to construct an ask and vice versa,
            * totalToReceive becomes forSale, and totalForSale becomes toReceive
            */
            var forSale = order.totalToReceive({ noCache: true });
            // let toReceive = order.totalForSale({noCache: true});
            var toReceive = forSale.times(order.sellPrice());

            var newPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: isBid ? toReceive : forSale,
                quote: isBid ? forSale : toReceive
            });

            var current = this.state[isBid ? "bid" : "ask"];
            current.price = newPrice;
            current.priceText = newPrice.toReal();

            var newState = _defineProperty({}, isBid ? "ask" : "bid", {
                for_sale: forSale,
                forSaleText: forSale.getAmount({ real: true }),
                to_receive: toReceive,
                toReceiveText: toReceive.getAmount({ real: true }),
                price: newPrice,
                priceText: newPrice.toReal()
            });

            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }
            this.setState(newState);
        }
    }, {
        key: "_borrowQuote",
        value: function _borrowQuote() {
            this.refs.borrowQuote.show();
        }
    }, {
        key: "_borrowBase",
        value: function _borrowBase() {
            this.refs.borrowBase.show();
        }
    }, {
        key: "_getSettlementInfo",
        value: function _getSettlementInfo() {
            var _props = this.props,
                lowestCallPrice = _props.lowestCallPrice,
                feedPrice = _props.feedPrice,
                quoteAsset = _props.quoteAsset;


            var showCallLimit = false;
            if (feedPrice) {
                if (feedPrice.inverted) {
                    showCallLimit = lowestCallPrice <= feedPrice.toReal();
                } else {
                    showCallLimit = lowestCallPrice >= feedPrice.toReal();
                }
            }
            return !!(showCallLimit && lowestCallPrice && !quoteAsset.getIn(["bitasset", "is_prediction_market"]));
        }
    }, {
        key: "onChangeFeeAsset",
        value: function onChangeFeeAsset(type, e) {
            e.preventDefault();
            if (type === "buy") {
                this.setState({
                    buyFeeAssetIdx: e.target.value
                });

                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                    buyFeeAssetIdx: e.target.value
                });
            } else {
                this.setState({
                    sellFeeAssetIdx: e.target.value
                });

                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                    sellFeeAssetIdx: e.target.value
                });
            }
        }
    }, {
        key: "onChangeChartHeight",
        value: function onChangeChartHeight(_ref) {
            var value = _ref.value,
                increase = _ref.increase;

            var newHeight = value ? value : this.state.chartHeight + (increase ? 20 : -20);
            this.setState({
                chartHeight: newHeight
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                chartHeight: newHeight
            });
        }
    }, {
        key: "_toggleBuySellPosition",
        value: function _toggleBuySellPosition() {
            this.setState({
                buySellTop: !this.state.buySellTop
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                buySellTop: !this.state.buySellTop
            });
        }
    }, {
        key: "_setReceive",
        value: function _setReceive(state, isBid) {
            if (state.price.isValid() && state.for_sale.hasAmount()) {
                state.to_receive = state.for_sale.times(state.price);
                state.toReceiveText = state.to_receive.getAmount({ real: true }).toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setForSale",
        value: function _setForSale(state, isBid) {
            if (state.price.isValid() && state.to_receive.hasAmount()) {
                state.for_sale = state.to_receive.times(state.price, true);
                state.forSaleText = state.for_sale.getAmount({ real: true }).toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setPrice",
        value: function _setPrice(state) {
            if (state.for_sale.hasAmount() && state.to_receive.hasAmount()) {
                state.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                    base: state.for_sale,
                    quote: state.to_receive
                });
                state.priceText = state.price.toReal().toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setPriceText",
        value: function _setPriceText(state, isBid) {
            var currentBase = state[isBid ? "for_sale" : "to_receive"];
            var currentQuote = state[isBid ? "to_receive" : "for_sale"];
            if (currentBase.hasAmount() && currentQuote.hasAmount()) {
                state.priceText = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                    base: currentBase,
                    quote: currentQuote
                }).toReal().toString();
            }
        }
    }, {
        key: "_onInputPrice",
        value: function _onInputPrice(type, e) {
            var current = this.state[type];
            var isBid = type === "bid";
            current.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: current[isBid ? "for_sale" : "to_receive"],
                quote: current[isBid ? "to_receive" : "for_sale"],
                real: parseFloat(e.target.value) || 0
            });

            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }

            current.priceText = e.target.value;
            this.forceUpdate();
        }
    }, {
        key: "_onInputSell",
        value: function _onInputSell(type, isBid, e) {
            var current = this.state[type];
            // const isBid = type === "bid";
            current.for_sale.setAmount({ real: parseFloat(e.target.value) || 0 });
            if (current.price.isValid()) {
                this._setReceive(current, isBid);
            } else {
                this._setPrice(current);
            }

            current.forSaleText = e.target.value;
            this._setPriceText(current, type === "bid");

            this.forceUpdate();
        }
    }, {
        key: "_onInputReceive",
        value: function _onInputReceive(type, isBid, e) {
            var current = this.state[type];
            // const isBid = type === "bid";
            current.to_receive.setAmount({ real: parseFloat(e.target.value) || 0 });

            if (current.price.isValid()) {
                this._setForSale(current, isBid);
            } else {
                this._setPrice(current);
            }

            current.toReceiveText = e.target.value;
            this._setPriceText(current, type === "bid");
            this.forceUpdate();
        }
    }, {
        key: "isMarketFrozen",
        value: function isMarketFrozen() {
            var _props2 = this.props,
                baseAsset = _props2.baseAsset,
                quoteAsset = _props2.quoteAsset;


            var baseWhiteList = baseAsset.getIn(["options", "whitelist_markets"]).toJS();
            var quoteWhiteList = quoteAsset.getIn(["options", "whitelist_markets"]).toJS();
            var baseBlackList = baseAsset.getIn(["options", "blacklist_markets"]).toJS();
            var quoteBlackList = quoteAsset.getIn(["options", "blacklist_markets"]).toJS();

            if (quoteWhiteList.length && quoteWhiteList.indexOf(baseAsset.get("id")) === -1) {
                return { isFrozen: true, frozenAsset: quoteAsset.get("symbol") };
            }
            if (baseWhiteList.length && baseWhiteList.indexOf(quoteAsset.get("id")) === -1) {
                return { isFrozen: true, frozenAsset: baseAsset.get("symbol") };
            }

            if (quoteBlackList.length && quoteBlackList.indexOf(baseAsset.get("id")) !== -1) {
                return { isFrozen: true, frozenAsset: quoteAsset.get("symbol") };
            }
            if (baseBlackList.length && baseBlackList.indexOf(quoteAsset.get("id")) !== -1) {
                return { isFrozen: true, frozenAsset: baseAsset.get("symbol") };
            }

            return { isFrozen: false };
        }
    }, {
        key: "_toggleChat",
        value: function _toggleChat() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                viewChat: !this.props.viewChat
            });
        }
    }, {
        key: "_toggleMiniChart",
        value: function _toggleMiniChart() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                miniDepthChart: !this.props.miniDepthChart
            });
        }
    }, {
        key: "_onGroupOrderLimitChange",
        value: function _onGroupOrderLimitChange(e) {
            var _this4 = this;

            if (e) e.preventDefault();
            var groupLimit = parseInt(e.target.value);
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeCurrentGroupLimit(groupLimit);
            if (groupLimit !== this.props.currentGroupOrderLimit) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeCurrentGroupLimit(groupLimit);
                var currentSub = this.props.sub.split("_");
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(function () {
                    _this4.props.subToMarket(_this4.props, _this4.props.bucketSize, groupLimit);
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                currentAccount = _props3.currentAccount,
                marketLimitOrders = _props3.marketLimitOrders,
                marketCallOrders = _props3.marketCallOrders,
                marketData = _props3.marketData,
                activeMarketHistory = _props3.activeMarketHistory,
                invertedCalls = _props3.invertedCalls,
                starredMarkets = _props3.starredMarkets,
                quoteAsset = _props3.quoteAsset,
                baseAsset = _props3.baseAsset,
                lowestCallPrice = _props3.lowestCallPrice,
                marketStats = _props3.marketStats,
                marketReady = _props3.marketReady,
                marketSettleOrders = _props3.marketSettleOrders,
                bucketSize = _props3.bucketSize,
                totals = _props3.totals,
                feedPrice = _props3.feedPrice,
                buckets = _props3.buckets,
                coreAsset = _props3.coreAsset,
                trackedGroupsConfig = _props3.trackedGroupsConfig,
                currentGroupOrderLimit = _props3.currentGroupOrderLimit;
            var combinedBids = marketData.combinedBids,
                combinedAsks = marketData.combinedAsks,
                lowestAsk = marketData.lowestAsk,
                highestBid = marketData.highestBid,
                flatBids = marketData.flatBids,
                flatAsks = marketData.flatAsks,
                flatCalls = marketData.flatCalls,
                flatSettles = marketData.flatSettles,
                groupedBids = marketData.groupedBids,
                groupedAsks = marketData.groupedAsks;
            var _state2 = this.state,
                bid = _state2.bid,
                ask = _state2.ask,
                leftOrderBook = _state2.leftOrderBook,
                showDepthChart = _state2.showDepthChart,
                chartHeight = _state2.chartHeight,
                buyDiff = _state2.buyDiff,
                sellDiff = _state2.sellDiff,
                width = _state2.width,
                buySellTop = _state2.buySellTop;

            var _isMarketFrozen = this.isMarketFrozen(),
                isFrozen = _isMarketFrozen.isFrozen,
                frozenAsset = _isMarketFrozen.frozenAsset;

            var base = null,
                quote = null,
                accountBalance = null,
                quoteBalance = null,
                baseBalance = null,
                coreBalance = null,
                quoteSymbol = void 0,
                baseSymbol = void 0,
                showCallLimit = false,
                latest = void 0,
                changeClass = void 0;

            var showVolumeChart = this.props.viewSettings.get("showVolumeChart", true);

            if (quoteAsset.size && baseAsset.size && currentAccount.size) {
                base = baseAsset;
                quote = quoteAsset;
                baseSymbol = base.get("symbol");
                quoteSymbol = quote.get("symbol");

                accountBalance = currentAccount.get("balances").toJS();

                if (accountBalance) {
                    for (var id in accountBalance) {
                        if (id === quote.get("id")) {
                            quoteBalance = accountBalance[id];
                        }
                        if (id === base.get("id")) {
                            baseBalance = accountBalance[id];
                        }
                        if (id === "1.3.0") {
                            coreBalance = accountBalance[id];
                        }
                    }
                }

                showCallLimit = this._getSettlementInfo();
            }

            var quoteIsBitAsset = quoteAsset.get("bitasset_data_id") ? true : false;
            var baseIsBitAsset = baseAsset.get("bitasset_data_id") ? true : false;

            var spread = lowestAsk && highestBid ? lowestAsk.getPrice() - highestBid.getPrice() : 0;

            // Latest price
            if (activeMarketHistory.size) {
                var latest_two = activeMarketHistory.take(2);
                latest = latest_two.first();
                var second_latest = latest_two.last();

                changeClass = latest.getPrice() === second_latest.getPrice() ? "" : latest.getPrice() - second_latest.getPrice() > 0 ? "change-up" : "change-down";
            }

            // Fees
            if (!coreAsset || !Object.keys(this.state.feeStatus).length) {
                return null;
            }

            var _getFeeAssets2 = this._getFeeAssets(quote, base, coreAsset),
                sellFeeAsset = _getFeeAssets2.sellFeeAsset,
                sellFeeAssets = _getFeeAssets2.sellFeeAssets,
                sellFee = _getFeeAssets2.sellFee,
                buyFeeAsset = _getFeeAssets2.buyFeeAsset,
                buyFeeAssets = _getFeeAssets2.buyFeeAssets,
                buyFee = _getFeeAssets2.buyFee;

            // Decimals


            var hasPrediction = base.getIn(["bitasset", "is_prediction_market"]) || quote.getIn(["bitasset", "is_prediction_market"]);

            var description = null;

            if (hasPrediction) {
                description = quoteAsset.getIn(["options", "description"]);
                description = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].parseDescription(description).main;
            }

            var smallScreen = false;
            if (width < 1000) {
                smallScreen = true;
                leftOrderBook = false;
            }

            var orderMultiplier = leftOrderBook ? 2 : 1;
            var minChartHeight = 300;
            var height = Math.max(this.state.height > 1100 ? chartHeight : chartHeight - 125, minChartHeight);

            var expirationType = this.state.expirationType;
            var expirationCustomTime = this.state.expirationCustomTime;

            var buyForm = isFrozen ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_8__["default"], {
                onBorrow: baseIsBitAsset ? this._borrowBase.bind(this) : null,
                currentAccount: currentAccount,
                backedCoin: this.props.backedCoins.find(function (a) {
                    return a.symbol === base.get("symbol");
                }),
                currentBridges: this.props.bridgeCoins.get(base.get("symbol")) || null,
                smallScreen: smallScreen,
                isOpen: this.state.buySellOpen,
                onToggleOpen: this._toggleOpenBuySell.bind(this),
                className: classnames__WEBPACK_IMPORTED_MODULE_20___default()("small-12 no-padding middle-content", leftOrderBook || smallScreen ? "medium-6" : "medium-6 xlarge-4", this.state.flipBuySell ? "order-" + (buySellTop ? 2 : 5 * orderMultiplier) + " sell-form" : "order-" + (buySellTop ? 1 : 4 * orderMultiplier) + " buy-form"),
                type: "bid",
                expirationType: expirationType["bid"],
                expirations: this.EXPIRATIONS,
                expirationCustomTime: expirationCustomTime["bid"],
                onExpirationTypeChange: this._handleExpirationChange.bind(this, "bid"),
                onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "bid"),
                amount: bid.toReceiveText,
                price: bid.priceText,
                total: bid.forSaleText,
                quote: quote,
                base: base,
                amountChange: this._onInputReceive.bind(this, "bid", true),
                priceChange: this._onInputPrice.bind(this, "bid"),
                setPrice: this._currentPriceClick.bind(this),
                totalChange: this._onInputSell.bind(this, "bid", false),
                balance: baseBalance,
                balanceId: base.get("id"),
                onSubmit: this._createLimitOrderConfirm.bind(this, quote, base, baseBalance, coreBalance, buyFeeAsset, "buy"),
                balancePrecision: base.get("precision"),
                quotePrecision: quote.get("precision"),
                totalPrecision: base.get("precision"),
                currentPrice: lowestAsk.getPrice(),
                currentPriceObject: lowestAsk,
                account: currentAccount.get("name"),
                fee: buyFee,
                hasFeeBalance: this.state.feeStatus[buyFee.asset_id].hasBalance,
                feeAssets: buyFeeAssets,
                feeAsset: buyFeeAsset,
                onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "buy"),
                isPredictionMarket: base.getIn(["bitasset", "is_prediction_market"]),
                onFlip: this.state._flipBuySell ? null : this._flipBuySell.bind(this),
                onTogglePosition: !this.state._toggleBuySellPosition ? this._toggleBuySellPosition.bind(this) : null
            });

            var sellForm = isFrozen ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_8__["default"], {
                onBorrow: quoteIsBitAsset ? this._borrowQuote.bind(this) : null,
                currentAccount: currentAccount,
                backedCoin: this.props.backedCoins.find(function (a) {
                    return a.symbol === quote.get("symbol");
                }),
                currentBridges: this.props.bridgeCoins.get(quote.get("symbol")) || null,
                smallScreen: smallScreen,
                isOpen: this.state.buySellOpen,
                onToggleOpen: this._toggleOpenBuySell.bind(this),
                className: classnames__WEBPACK_IMPORTED_MODULE_20___default()("small-12 no-padding middle-content", leftOrderBook || smallScreen ? "medium-6" : "medium-6 xlarge-4", this.state.flipBuySell ? "order-" + (buySellTop ? 1 : 4 * orderMultiplier) + " buy-form" : "order-" + (buySellTop ? 2 : 5 * orderMultiplier) + " sell-form"),
                type: "ask",
                amount: ask.forSaleText,
                price: ask.priceText,
                total: ask.toReceiveText,
                quote: quote,
                base: base,
                expirationType: expirationType["ask"],
                expirations: this.EXPIRATIONS,
                expirationCustomTime: expirationCustomTime["ask"],
                onExpirationTypeChange: this._handleExpirationChange.bind(this, "ask"),
                onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "ask"),
                amountChange: this._onInputSell.bind(this, "ask", false),
                priceChange: this._onInputPrice.bind(this, "ask"),
                setPrice: this._currentPriceClick.bind(this),
                totalChange: this._onInputReceive.bind(this, "ask", true),
                balance: quoteBalance,
                balanceId: quote.get("id"),
                onSubmit: this._createLimitOrderConfirm.bind(this, base, quote, quoteBalance, coreBalance, sellFeeAsset, "sell"),
                balancePrecision: quote.get("precision"),
                quotePrecision: quote.get("precision"),
                totalPrecision: base.get("precision"),
                currentPrice: highestBid.getPrice(),
                currentPriceObject: highestBid,
                account: currentAccount.get("name"),
                fee: sellFee,
                hasFeeBalance: this.state.feeStatus[sellFee.asset_id].hasBalance,
                feeAssets: sellFeeAssets,
                feeAsset: sellFeeAsset,
                onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "sell"),
                isPredictionMarket: quote.getIn(["bitasset", "is_prediction_market"]),
                onFlip: !this.state._flipBuySell ? this._flipBuySell.bind(this) : null,
                onTogglePosition: !this.state._toggleBuySellPosition ? this._toggleBuySellPosition.bind(this) : null
            });

            var orderBook = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OrderBook__WEBPACK_IMPORTED_MODULE_5__["default"], {
                latest: latest && latest.getPrice(),
                changeClass: changeClass,
                orders: marketLimitOrders,
                calls: marketCallOrders,
                invertedCalls: invertedCalls,
                combinedBids: combinedBids,
                combinedAsks: combinedAsks,
                highestBid: highestBid,
                lowestAsk: lowestAsk,
                totalBids: totals.bid,
                totalAsks: totals.ask,
                base: base,
                quote: quote,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                onClick: this._orderbookClick.bind(this),
                horizontal: !leftOrderBook,
                moveOrderBook: this._moveOrderBook.bind(this),
                flipOrderBook: this.props.viewSettings.get("flipOrderBook"),
                marketReady: marketReady,
                wrapperClass: "order-" + (buySellTop ? 3 : 1) + " xlarge-order-" + (buySellTop ? 4 : 1),
                currentAccount: this.props.currentAccount.get("id"),
                handleGroupOrderLimitChange: this._onGroupOrderLimitChange.bind(this),
                trackedGroupsConfig: trackedGroupsConfig,
                currentGroupOrderLimit: currentGroupOrderLimit,
                groupedBids: groupedBids,
                groupedAsks: groupedAsks
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                !this.props.marketReady ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__["default"], null) : null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeHeader__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    account: this.props.currentAccount,
                    quoteAsset: quoteAsset,
                    baseAsset: baseAsset,
                    hasPrediction: hasPrediction,
                    starredMarkets: starredMarkets,
                    lowestAsk: lowestAsk,
                    highestBid: highestBid,
                    lowestCallPrice: lowestCallPrice,
                    showCallLimit: showCallLimit,
                    feedPrice: feedPrice,
                    marketReady: marketReady,
                    latestPrice: latest && latest.getPrice(),
                    showDepthChart: showDepthChart,
                    marketStats: marketStats,
                    onToggleCharts: this._toggleCharts.bind(this),
                    onToggleMarketPicker: this._toggleMarketPicker.bind(this),
                    showVolumeChart: showVolumeChart,
                    chartHeight: chartHeight,
                    onChangeChartHeight: this.onChangeChartHeight.bind(this)
                }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block page-layout market-layout" },
                    !!this.state.showMarketPicker ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketPicker__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
                        marketPickerAsset: this.state.marketPickerAsset,
                        onToggleMarketPicker: this._toggleMarketPicker.bind(this)
                    }, this.props)) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_16__["default"], null),
                    leftOrderBook ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block left-column shrink no-overflow" },
                        orderBook
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            style: { paddingTop: 0 },
                            className: classnames__WEBPACK_IMPORTED_MODULE_20___default()("grid-block main-content vertical no-overflow")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                className: "grid-block vertical no-padding ps-container",
                                id: "CenterContent",
                                ref: "center"
                            },
                            !showDepthChart ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block shrink no-overflow",
                                    id: "market-charts"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    locale: this.props.locale,
                                    dataFeed: this.props.dataFeed,
                                    baseSymbol: baseSymbol,
                                    quoteSymbol: quoteSymbol,
                                    leftOrderBook: leftOrderBook,
                                    marketReady: marketReady,
                                    theme: this.props.settings.get("themes"),
                                    buckets: buckets,
                                    bucketSize: bucketSize,
                                    currentPeriod: this.state.currentPeriod,
                                    chartHeight: this.state.height > 1100 ? chartHeight : chartHeight - 150,
                                    mobile: width < 800
                                })
                            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-block vertical no-padding shrink" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DepthHighChart__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    marketReady: marketReady,
                                    orders: marketLimitOrders,
                                    showCallLimit: showCallLimit,
                                    call_orders: marketCallOrders,
                                    flat_asks: flatAsks,
                                    flat_bids: flatBids,
                                    flat_calls: showCallLimit ? flatCalls : [],
                                    flat_settles: this.props.settings.get("showSettles") && flatSettles,
                                    settles: marketSettleOrders,
                                    invertedCalls: invertedCalls,
                                    totalBids: totals.bid,
                                    totalAsks: totals.ask,
                                    base: base,
                                    quote: quote,
                                    height: this.state.height > 1100 ? chartHeight : chartHeight - 150,
                                    onClick: this._depthChartClick.bind(this, base, quote),
                                    feedPrice: !hasPrediction && feedPrice && feedPrice.toReal(),
                                    spread: spread,
                                    LCP: showCallLimit ? lowestCallPrice : null,
                                    leftOrderBook: leftOrderBook,
                                    hasPrediction: hasPrediction,
                                    noFrame: false,
                                    verticalOrderbook: leftOrderBook,
                                    theme: this.props.settings.get("themes"),
                                    centerRef: this.refs.center
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-block no-overflow wrap shrink" },
                                hasPrediction ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        className: "small-12 no-overflow",
                                        style: {
                                            margin: "0 10px",
                                            lineHeight: "1.2rem"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "p",
                                        null,
                                        description
                                    )
                                ) : null,
                                isFrozen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        className: "error small-12 no-overflow",
                                        style: {
                                            margin: "0 10px",
                                            lineHeight: "1.2rem"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_25___default.a, {
                                        content: "exchange.market_frozen",
                                        asset: frozenAsset,
                                        component: "p"
                                    })
                                ) : null,
                                buyForm,
                                sellForm,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketHistory__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(!smallScreen && !leftOrderBook ? "medium-6 xlarge-4" : "", "no-padding no-overflow middle-content small-12 medium-6 order-5 xlarge-order-3"),
                                    headerStyle: { paddingTop: 0 },
                                    history: activeMarketHistory,
                                    currentAccount: currentAccount,
                                    myHistory: currentAccount.get("history"),
                                    base: base,
                                    quote: quote,
                                    baseSymbol: baseSymbol,
                                    quoteSymbol: quoteSymbol,
                                    marketReady: marketReady
                                }),
                                !leftOrderBook ? orderBook : null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
                                    type: "buy",
                                    ref: "buy",
                                    onForce: this._forceBuy.bind(this, "buy", buyFeeAsset, baseBalance, coreBalance),
                                    diff: buyDiff,
                                    hasOrders: combinedAsks.length > 0
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
                                    type: "sell",
                                    ref: "sell",
                                    onForce: this._forceSell.bind(this, "sell", sellFeeAsset, quoteBalance, coreBalance),
                                    diff: sellDiff,
                                    hasOrders: combinedBids.length > 0
                                }),
                                marketLimitOrders.size > 0 && base && quote ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MyOpenOrders__WEBPACK_IMPORTED_MODULE_4__["MyOpenOrders"], {
                                    smallScreen: this.props.smallScreen,
                                    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(!smallScreen && !leftOrderBook ? "medium-6 xlarge-4" : "", "small-12 medium-6 no-padding align-spaced ps-container middle-content order-" + (buySellTop ? 6 : 6)),
                                    key: "open_orders",
                                    orders: marketLimitOrders,
                                    settleOrders: marketSettleOrders,
                                    currentAccount: currentAccount,
                                    base: base,
                                    quote: quote,
                                    baseSymbol: baseSymbol,
                                    quoteSymbol: quoteSymbol,
                                    activeTab: this.props.viewSettings.get("ordersTab"),
                                    onCancel: this._cancelLimitOrder.bind(this),
                                    flipMyOrders: this.props.viewSettings.get("flipMyOrders"),
                                    feedPrice: this.props.feedPrice
                                }) : null
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "grid-block shrink right-column no-overflow vertical show-for-medium",
                            style: { paddingTop: 0, minWidth: 358, maxWidth: 400 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block no-padding no-margin vertical" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                className: "left-order-book no-padding no-overflow",
                                headerStyle: { paddingTop: 0 },
                                columns: [{ name: "star", index: 1 }, { name: "market", index: 2 }, { name: "vol", index: 3 }, { name: "price", index: 4 }, { name: "change", index: 5 }],
                                findColumns: [{ name: "market", index: 1 }, { name: "issuer", index: 2 }, { name: "vol", index: 3 }, { name: "add", index: 4 }],
                                current: quoteSymbol + "_" + baseSymbol,
                                location: this.props.location,
                                history: this.props.history
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                style: {
                                    padding: !this.props.viewChat ? 0 : "0 0 0 0"
                                },
                                className: "grid-block no-margin vertical shrink"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    onClick: this._toggleChat.bind(this),
                                    className: "exchange-content-header clickable",
                                    style: { textAlign: "left", paddingRight: 10 }
                                },
                                this.props.viewChat ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    "\u25BC"
                                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    "\u25B2"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_25___default.a, { content: "exchange.trollbox" })
                            ),
                            this.props.viewChat ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Chat_ChatBro__WEBPACK_IMPORTED_MODULE_30__["default"], { height: "300px" }) : null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                style: {
                                    padding: !this.props.miniDepthChart ? 0 : "0 0 40px 0"
                                },
                                className: "grid-block no-margin vertical shrink"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    onClick: this._toggleMiniChart.bind(this),
                                    className: "exchange-content-header clickable",
                                    style: { textAlign: "left", paddingRight: 10 }
                                },
                                this.props.miniDepthChart ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    "\u25BC"
                                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    "\u25B2"
                                )
                            ),
                            this.props.miniDepthChart ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DepthHighChart__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                marketReady: marketReady,
                                orders: marketLimitOrders,
                                showCallLimit: showCallLimit,
                                call_orders: marketCallOrders,
                                flat_asks: flatAsks,
                                flat_bids: flatBids,
                                flat_calls: showCallLimit ? flatCalls : [],
                                flat_settles: this.props.settings.get("showSettles") && flatSettles,
                                settles: marketSettleOrders,
                                invertedCalls: invertedCalls,
                                totalBids: totals.bid,
                                totalAsks: totals.ask,
                                base: base,
                                quote: quote,
                                height: 200,
                                onClick: this._depthChartClick.bind(this, base, quote),
                                settlementPrice: !hasPrediction && feedPrice && feedPrice.toReal(),
                                spread: spread,
                                LCP: showCallLimit ? lowestCallPrice : null,
                                leftOrderBook: leftOrderBook,
                                hasPrediction: hasPrediction,
                                noText: true,
                                theme: this.props.settings.get("themes")
                            }) : null
                        )
                    ),
                    quoteIsBitAsset ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        ref: "borrowQuote",
                        modalId: "borrow_modal_quote_" + quoteAsset.get("id"),
                        quote_asset: quoteAsset.get("id"),
                        backing_asset: quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                        account: currentAccount
                    }) : null,
                    baseIsBitAsset ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        ref: "borrowBase",
                        modalId: "borrow_modal_base_" + baseAsset.get("id"),
                        quote_asset: baseAsset.get("id"),
                        backing_asset: baseAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                        account: currentAccount
                    }) : null
                )
            );
        }
    }]);

    return Exchange;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Exchange.propTypes = {
    marketCallOrders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    activeMarketHistory: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    viewSettings: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
Exchange.defaultProps = {
    marketCallOrders: [],
    activeMarketHistory: {},
    viewSettings: {}
};


/* harmony default export */ __webpack_exports__["default"] = (Exchange);

/***/ }),

/***/ 2403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2364);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2400);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2386);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1217);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2404);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_sticky_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(802);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var counterpart = __webpack_require__(571);

var OrderBookRowVertical = function (_React$Component) {
    _inherits(OrderBookRowVertical, _React$Component);

    function OrderBookRowVertical() {
        _classCallCheck(this, OrderBookRowVertical);

        return _possibleConstructorReturn(this, (OrderBookRowVertical.__proto__ || Object.getPrototypeOf(OrderBookRowVertical)).apply(this, arguments));
    }

    _createClass(OrderBookRowVertical, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.order.market_base !== this.props.order.market_base) return false;
            return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                order = _props.order,
                quote = _props.quote,
                base = _props.base,
                final = _props.final;

            var isBid = order.isBid();
            var isCall = order.isCall();
            var integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    onClick: this.props.onClick,
                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("sticky-table-row order-row", { "final-row": final }, { "my-order": order.isMine(this.props.currentAccount) })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell left" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell " + integerClass + " right" },
                    price
                )
            );
        }
    }]);

    return OrderBookRowVertical;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var elemHeight = function elemHeight(elem) {
    return elem.getBoundingClientRect().height;
};

var OrderBookRowHorizontal = function (_React$Component2) {
    _inherits(OrderBookRowHorizontal, _React$Component2);

    function OrderBookRowHorizontal() {
        _classCallCheck(this, OrderBookRowHorizontal);

        return _possibleConstructorReturn(this, (OrderBookRowHorizontal.__proto__ || Object.getPrototypeOf(OrderBookRowHorizontal)).apply(this, arguments));
    }

    _createClass(OrderBookRowHorizontal, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                order = _props2.order,
                quote = _props2.quote,
                base = _props2.base,
                position = _props2.position;

            var isBid = order.isBid();
            var isCall = order.isCall();

            var integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            var amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), quote.get("precision"));
            var value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), base.get("precision"));
            var total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalToReceive().getAmount({ real: true }), base.get("precision"));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                {
                    onClick: this.props.onClick,
                    className: order.isMine(this.props.currentAccount) ? "my-order" : ""
                },
                position === "left" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? value : amount
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? amount : value
                ),
                position === "right" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                )
            );
        }
    }]);

    return OrderBookRowHorizontal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GroupedOrderBookRowVertical = function (_React$Component3) {
    _inherits(GroupedOrderBookRowVertical, _React$Component3);

    function GroupedOrderBookRowVertical() {
        _classCallCheck(this, GroupedOrderBookRowVertical);

        return _possibleConstructorReturn(this, (GroupedOrderBookRowVertical.__proto__ || Object.getPrototypeOf(GroupedOrderBookRowVertical)).apply(this, arguments));
    }

    _createClass(GroupedOrderBookRowVertical, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.order.market_base !== this.props.order.market_base) return false;
            return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                order = _props3.order,
                quote = _props3.quote,
                base = _props3.base,
                final = _props3.final;

            var isBid = order.isBid();
            var integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    onClick: this.props.onClick,
                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("sticky-table-row order-row", {
                        "final-row": final
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell left" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell " + integerClass + " right" },
                    price
                )
            );
        }
    }]);

    return GroupedOrderBookRowVertical;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GroupedOrderBookRowHorizontal = function (_React$Component4) {
    _inherits(GroupedOrderBookRowHorizontal, _React$Component4);

    function GroupedOrderBookRowHorizontal() {
        _classCallCheck(this, GroupedOrderBookRowHorizontal);

        return _possibleConstructorReturn(this, (GroupedOrderBookRowHorizontal.__proto__ || Object.getPrototypeOf(GroupedOrderBookRowHorizontal)).apply(this, arguments));
    }

    _createClass(GroupedOrderBookRowHorizontal, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props4 = this.props,
                order = _props4.order,
                quote = _props4.quote,
                base = _props4.base,
                position = _props4.position;

            var isBid = order.isBid();

            var integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            var amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), quote.get("precision"));
            var value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), base.get("precision"));
            var total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalToReceive().getAmount({ real: true }), base.get("precision"));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { onClick: this.props.onClick },
                position === "left" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? value : amount
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? amount : value
                ),
                position === "right" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                )
            );
        }
    }]);

    return GroupedOrderBookRowHorizontal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GroupOrderLimitSelector = function (_React$Component5) {
    _inherits(GroupOrderLimitSelector, _React$Component5);

    function GroupOrderLimitSelector() {
        _classCallCheck(this, GroupOrderLimitSelector);

        var _this5 = _possibleConstructorReturn(this, (GroupOrderLimitSelector.__proto__ || Object.getPrototypeOf(GroupOrderLimitSelector)).call(this));

        _this5.state = {
            groupLimit: ""
        };
        return _this5;
    }

    _createClass(GroupOrderLimitSelector, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ groupLimit: this.props.currentGroupOrderLimit });
        }
    }, {
        key: "render",
        value: function render() {
            var noGroupsAvailable = this.props.trackedGroupsConfig.length === 0;
            var trackedGroupsOptionsList = this.props.trackedGroupsConfig.map(function (key) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: key, key: key },
                    key / 100 + "%"
                );
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "select",
                {
                    dir: "rtl",
                    value: this.state.groupLimit,
                    onChange: this.props.handleGroupOrderLimitChange,
                    "data-tip": noGroupsAvailable ? counterpart.translate("tooltip.no_groups_available") : null,
                    style: noGroupsAvailable ? { cursor: "not-allowed" } : null
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    content: "exchange.group_order_limit",
                    component: "option",
                    value: "0"
                }),
                trackedGroupsOptionsList
            );
        }
    }]);

    return GroupOrderLimitSelector;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var OrderBook = function (_React$Component6) {
    _inherits(OrderBook, _React$Component6);

    function OrderBook(props) {
        _classCallCheck(this, OrderBook);

        var _this6 = _possibleConstructorReturn(this, (OrderBook.__proto__ || Object.getPrototypeOf(OrderBook)).call(this));

        _this6.queryStickyTable = function (query) {
            return _this6.refs.vertical_sticky_table.table.querySelector(query);
        };

        _this6.verticalScrollBar = function () {
            return _this6.queryStickyTable("#y-scrollbar");
        };

        _this6.toggleSpreadValue = function () {
            _this6.setState({
                displaySpreadAsPercentage: !_this6.state.displaySpreadAsPercentage
            });
        };

        _this6.toggleAutoScroll = function () {
            var newState = { autoScroll: !_this6.state.autoScroll };
            if (newState.autoScroll) _this6.setState(newState, _this6.centerVerticalScrollBar);else _this6.setState(newState);
        };

        _this6.state = {
            flip: props.flipOrderBook,
            showAllBids: false,
            showAllAsks: false,
            rowCount: 20,
            autoScroll: true
        };
        return _this6;
    }

    _createClass(OrderBook, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.marketReady) return false;
            return true;
        }
        //     console.log("calls changed:", !Immutable.is(nextProps.calls, this.props.calls), nextProps.calls && nextProps.calls.toJS(), this.props.calls && this.props.calls.toJS());
        //     const callsChanged = didOrdersChange(nextProps.calls, this.props.calls);
        //     const limitsChanged = didOrdersChange(nextProps.orders, this.props.orders);
        //     console.log("callsChanged:", callsChanged, "limitsChanged", limitsChanged);
        //     return (
        //         !Immutable.is(nextProps.orders, this.props.orders) ||
        //         !Immutable.is(nextProps.calls, this.props.calls) ||
        //         nextProps.horizontal !== this.props.horizontal ||
        //         !utils.are_equal_shallow(nextProps.latest, this.props.latest) ||
        //         nextProps.smallScreen !== this.props.smallScreen ||
        //         nextProps.wrapperClass !== this.props.wrapperClass ||
        //         !utils.are_equal_shallow(nextState, this.state)
        //     );
        // }

    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this7 = this;

            // Change of market or direction
            if (nextProps.base.get("id") !== this.props.base.get("id") || nextProps.quote.get("id") !== this.props.quote.get("id")) {
                if (this.refs.askTransition) {
                    this.refs.askTransition.resetAnimation();
                    if (this.refs.hor_asks) this.refs.hor_asks.scrollTop = 0;
                    if (this.refs.hor_bids) this.refs.hor_bids.scrollTop = 0;
                }

                if (this.refs.bidTransition) {
                    this.refs.bidTransition.resetAnimation();
                }

                if (this.refs.vert_bids) this.refs.vert_bids.scrollTop = 0;

                if (!this.props.horizontal) {
                    this.setState({ autoScroll: true });
                }
            }

            if (!common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps.combinedAsks, this.props.combinedAsks) || !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps.combinedBids, this.props.combinedBids)) {
                this.setState({}, function () {
                    _this7.psUpdate();
                });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.horizontal) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(this.verticalScrollBar());
                this.centerVerticalScrollBar();
            } else {
                var bidsContainer = this.refs.hor_bids;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(bidsContainer);
                var asksContainer = this.refs.hor_asks;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(asksContainer);
            }
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            if (!this.props.horizontal) {
                var scrollableContainer = this.queryStickyTable("#sticky-table-y-wrapper");

                var centerTextContainer = this.refs.center_text;
                var centeringOffset = 21;
                var scrollTo = centerTextContainer.offsetTop - elemHeight(scrollableContainer) / 2 + centeringOffset;

                this.offset = scrollableContainer.scrollTop - scrollTo;
            }
        }
    }, {
        key: "centerVerticalScrollBar",
        value: function centerVerticalScrollBar() {
            if (!this.props.horizontal) {
                var scrollableContainer = this.queryStickyTable("#sticky-table-y-wrapper");
                var centerTextContainer = this.refs.center_text;
                var centeringOffset = 21;
                var offset = !this.state.autoScroll && this.offset ? this.offset : 0;
                var scrollTo = centerTextContainer.offsetTop - elemHeight(scrollableContainer) / 2 + centeringOffset + offset;

                this.setState({ ownScroll: true }, function () {
                    return scrollableContainer.scrollTop = scrollTo;
                });
            }
        }
    }, {
        key: "psUpdate",
        value: function psUpdate() {
            if (!this.props.horizontal) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(this.verticalScrollBar());
                this.centerVerticalScrollBar();
            } else {
                var bidsContainer = this.refs.hor_bids;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(bidsContainer);
                var asksContainer = this.refs.hor_asks;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(asksContainer);
            }
        }
    }, {
        key: "_flipBuySell",
        value: function _flipBuySell() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({
                flipOrderBook: !this.state.flip
            });

            this.setState({ flip: !this.state.flip });
        }
    }, {
        key: "_onToggleShowAll",
        value: function _onToggleShowAll(type) {
            if (type === "asks") {
                this.setState({
                    showAllAsks: !this.state.showAllAsks
                });

                if (this.state.showAllAsks) {
                    this.refs.hor_asks.scrollTop = 0;
                }
            } else {
                this.setState({
                    showAllBids: !this.state.showAllBids
                });

                if (this.state.showAllBids) {
                    this.refs.hor_bids.scrollTop = 0;
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            var _props5 = this.props,
                combinedBids = _props5.combinedBids,
                combinedAsks = _props5.combinedAsks,
                highestBid = _props5.highestBid,
                lowestAsk = _props5.lowestAsk,
                quote = _props5.quote,
                base = _props5.base,
                totalAsks = _props5.totalAsks,
                totalBids = _props5.totalBids,
                quoteSymbol = _props5.quoteSymbol,
                baseSymbol = _props5.baseSymbol,
                horizontal = _props5.horizontal,
                trackedGroupsConfig = _props5.trackedGroupsConfig,
                currentGroupOrderLimit = _props5.currentGroupOrderLimit,
                handleGroupOrderLimitChange = _props5.handleGroupOrderLimitChange,
                groupedBids = _props5.groupedBids,
                groupedAsks = _props5.groupedAsks;
            var _state = this.state,
                showAllAsks = _state.showAllAsks,
                showAllBids = _state.showAllBids,
                rowCount = _state.rowCount,
                displaySpreadAsPercentage = _state.displaySpreadAsPercentage;

            var noOrders = !lowestAsk.sell_price && !highestBid.sell_price;
            var hasAskAndBids = !!(lowestAsk.sell_price && highestBid.sell_price);
            var spread = hasAskAndBids && (displaySpreadAsPercentage ? (100 * (lowestAsk._real_price / highestBid._real_price - 1)).toFixed(2) + "%" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                price: lowestAsk._real_price - highestBid._real_price,
                base: base,
                quote: quote
            }));
            var bidRows = null,
                askRows = null;
            if (base && quote) {
                // limit orders or grouped orders
                if (this.props.currentGroupOrderLimit !== 0) {
                    bidRows = groupedBids.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            position: !_this8.state.flip ? "left" : "right",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this8.props.currentAccount
                        });
                    });

                    var tempAsks = groupedAsks;
                    if (!horizontal) {
                        tempAsks.sort(function (a, b) {
                            return b.getPrice() - a.getPrice();
                        });
                    }
                    askRows = tempAsks.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !_this8.state.flip ? "right" : "left",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this8.props.currentAccount
                        });
                    });
                } else {
                    bidRows = combinedBids.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            position: !_this8.state.flip ? "left" : "right",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this8.props.currentAccount
                        });
                    });

                    var _tempAsks = combinedAsks;
                    _tempAsks.sort(function (a, b) {
                        if (horizontal) {
                            return a.getPrice() - b.getPrice();
                        } else {
                            return b.getPrice() - a.getPrice();
                        }
                    });
                    askRows = _tempAsks.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !_this8.state.flip ? "right" : "left",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this8.props.currentAccount
                        });
                    });
                }
            }

            if (this.props.horizontal) {
                var totalBidsLength = bidRows.length;
                var totalAsksLength = askRows.length;

                if (!showAllBids) {
                    bidRows.splice(rowCount, bidRows.length);
                }

                if (!showAllAsks) {
                    askRows.splice(rowCount, askRows.length);
                }

                var leftHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: "top-header", className: "top-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "header-sub-title",
                                content: "exchange.total"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                " ",
                                "(",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    dataPlace: "top",
                                    name: baseSymbol
                                }),
                                ")"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: baseSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: quoteSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: (this.state.flip ? "ask-total" : "bid-total") + " header-sub-title",
                                content: "exchange.price"
                            })
                        )
                    )
                );

                var rightHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: "top-header", className: "top-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: (!this.state.flip ? "ask-total" : "bid-total") + " header-sub-title",
                                content: "exchange.price"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: quoteSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: baseSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "header-sub-title",
                                content: "exchange.total"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                " ",
                                "(",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    dataPlace: "top",
                                    name: baseSymbol
                                }),
                                ")"
                            )
                        )
                    )
                );

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(this.props.wrapperClass, "grid-block orderbook no-padding small-vertical medium-horizontal align-spaced no-overflow small-12 xlarge-8")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("small-12 medium-6 middle-content", this.state.flip ? "order-1" : "order-2")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "exchange-bordered" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "exchange-content-header ask",
                                    "data-intro": counterpart.translate("walkthrough.sell_orders")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.asks" }),
                                this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { style: { display: "inline-block" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            onClick: this._flipBuySell.bind(this),
                                            style: {
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            },
                                            className: "flip-arrow"
                                        },
                                        " ",
                                        "\u21C6"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            className: "order-book-button-v",
                                            onClick: this.props.moveOrderBook
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            name: "thumb-tack",
                                            title: "icons.thumb_tack",
                                            className: "icon-14px"
                                        })
                                    )
                                ) : null,
                                this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "float-right header-sub-title grouped_order" },
                                    trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupOrderLimitSelector, {
                                        trackedGroupsConfig: trackedGroupsConfig,
                                        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                        currentGroupOrderLimit: currentGroupOrderLimit
                                    }) : null
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { lineHeight: "16px" },
                                        className: "float-right header-sub-title"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.total" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        ": "
                                    ),
                                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(totalAsks, quote.get("precision")),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " ",
                                        "(",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: quoteSymbol }),
                                        ")"
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { style: { paddingRight: "0.6rem" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table order-table table-hover fixed-table text-right" },
                                    !this.state.flip ? rightHeader : leftHeader
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    ref: "hor_asks",
                                    style: {
                                        paddingRight: "0.6rem",
                                        overflow: "hidden",
                                        maxHeight: 210
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    {
                                        style: { paddingBottom: 5 },
                                        className: "table order-table table-hover fixed-table text-right no-overflow"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                        {
                                            ref: "askTransition",
                                            className: "orderbook clickable",
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        askRows
                                    )
                                )
                            ),
                            totalAsksLength > rowCount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "orderbook-showall" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: this._onToggleShowAll.bind(this, "asks")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: showAllAsks ? "exchange.hide" : "exchange.show_asks"
                                    }),
                                    !showAllAsks ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " (",
                                        totalAsksLength,
                                        ")"
                                    ) : null
                                )
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("small-12 medium-6 middle-content", this.state.flip ? "order-2" : "order-1")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "exchange-bordered" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "exchange-content-header bid",
                                    "data-intro": counterpart.translate("walkthrough.buy_orders")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.bids" }),
                                !this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { style: { display: "inline-block" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            onClick: this._flipBuySell.bind(this),
                                            style: {
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            },
                                            className: "flip-arrow"
                                        },
                                        " ",
                                        "\u21C6"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            className: "order-book-button-v",
                                            onClick: this.props.moveOrderBook
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            name: "thumb-tack",
                                            title: "icons.thumb_tack",
                                            className: "icon-14px"
                                        })
                                    )
                                ) : null,
                                !this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "float-right header-sub-title grouped_order" },
                                    trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupOrderLimitSelector, {
                                        trackedGroupsConfig: trackedGroupsConfig,
                                        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                        currentGroupOrderLimit: currentGroupOrderLimit
                                    }) : null
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { lineHeight: "16px" },
                                        className: "float-right header-sub-title"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.total" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        ": "
                                    ),
                                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(totalBids, base.get("precision")),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " ",
                                        "(",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: baseSymbol }),
                                        ")"
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { style: { paddingRight: "0.6rem" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table order-table table-hover fixed-table text-right" },
                                    this.state.flip ? rightHeader : leftHeader
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    ref: "hor_bids",
                                    style: {
                                        paddingRight: "0.6rem",
                                        overflow: "hidden",
                                        maxHeight: 210
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    {
                                        style: { paddingBottom: 5 },
                                        className: "table order-table table-hover fixed-table text-right no-overflow"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                        {
                                            ref: "bidTransition",
                                            className: "orderbook clickable",
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        bidRows
                                    )
                                )
                            ),
                            totalBidsLength > rowCount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "orderbook-showall" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: this._onToggleShowAll.bind(this, "bids")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: showAllBids ? "exchange.hide" : "exchange.show_bids"
                                    }),
                                    !showAllBids ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " (",
                                        totalBidsLength,
                                        ")"
                                    ) : null
                                )
                            ) : null
                        )
                    )
                );
            } else {
                // Vertical orderbook
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "left-order-book no-padding no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "order-table-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_sticky_table__WEBPACK_IMPORTED_MODULE_10__["StickyTable"],
                            {
                                stickyColumnCount: 0,
                                className: "order-table table",
                                ref: "vertical_sticky_table"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "sticky-table-row top-header" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "cell header-cell left" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        { className: "header-sub-title" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: baseSymbol })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "cell header-cell" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        { className: "header-sub-title" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: quoteSymbol })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "cell header-cell right" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        className: "header-sub-title",
                                        content: "exchange.price"
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                {
                                    ref: "askTransition",
                                    className: "transition-container clickable",
                                    component: "div",
                                    transitionName: "newrow"
                                },
                                askRows.length > 0 ? askRows : noOrders || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "sticky-table-row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        {
                                            className: "cell no-orders padtop",
                                            colSpan: "3"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_asks" })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "sticky-table-row", ref: "center_text" },
                                noOrders ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    {
                                        colSpan: 3,
                                        className: "no-orders padtop"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_orders" })
                                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    {
                                        className: "cell center-cell",
                                        colSpan: "3"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "orderbook-latest-price" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "text-center spread" },
                                            !!spread && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "span",
                                                {
                                                    className: "clickable left",
                                                    onClick: this.toggleSpreadValue
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.spread" }),
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    { className: "spread-value" },
                                                    spread
                                                )
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                className: "lock-unlock clickable",
                                                onClick: this.toggleAutoScroll,
                                                name: this.state.autoScroll ? "locked" : "unlocked",
                                                title: this.state.autoScroll ? "icons.locked.enable_auto_scroll" : "icons.unlocked.disable_auto_scroll"
                                            }),
                                            !!this.props.latest && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "span",
                                                { className: "right" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.latest" }),
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        className: this.props.changeClass
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        price: this.props.latest,
                                                        base: this.props.base,
                                                        quote: this.props.quote
                                                    })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                {
                                    ref: "bidTransition",
                                    className: "transition-container clickable",
                                    component: "div",
                                    transitionName: "newrow"
                                },
                                bidRows.length > 0 ? bidRows : noOrders || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "sticky-table-row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        {
                                            className: "cell no-orders",
                                            colSpan: "3"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_bids" })
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "v-align no-padding align-center grid-block footer shrink bottom-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "v-align grid-block align-center",
                                style: { height: "2rem", overflow: "hidden" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                name: "thumb-untack",
                                title: "icons.thumb_untack",
                                className: "icon-14px order-book-button-h",
                                style: { top: "-0.5rem" },
                                onClick: this.props.moveOrderBook
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "v-align grid-block align-center grouped_order" },
                            trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupOrderLimitSelector, {
                                trackedGroupsConfig: trackedGroupsConfig,
                                handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                currentGroupOrderLimit: currentGroupOrderLimit
                            }) : null
                        )
                    )
                );
            }
        }
    }]);

    return OrderBook;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

OrderBook.defaultProps = {
    bids: [],
    asks: [],
    orders: {}
};

OrderBook.propTypes = {
    bids: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    asks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (OrderBook);

/***/ }),

/***/ 2410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2364);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1265);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2400);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(730);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(709);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2386);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1217);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(416);
/* harmony import */ var _Utility_BlockDate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2411);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1382);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(582);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainTypes"].operations;







var MarketHistory = function (_React$Component) {
    _inherits(MarketHistory, _React$Component);

    function MarketHistory(props) {
        _classCallCheck(this, MarketHistory);

        var _this = _possibleConstructorReturn(this, (MarketHistory.__proto__ || Object.getPrototypeOf(MarketHistory)).call(this));

        _this.state = {
            activeTab: props.viewSettings.get("historyTab", "history")
        };
        return _this;
    }

    _createClass(MarketHistory, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!nextProps.marketReady) return false;
            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.history, this.props.history) || nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol || nextProps.className !== this.props.className || nextState.activeTab !== this.state.activeTab || nextProps.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var historyContainer = this.refs.history;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(historyContainer);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var historyContainer = this.refs.history;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(historyContainer);
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].changeViewSetting({
                historyTab: tab
            });
            this.setState({
                activeTab: tab
            });

            // Ensure that focus goes back to top of scrollable container when tab is changed
            var historyNode = this.refs.history;
            historyNode.scrollTop = 0;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(historyNode);

            setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_16___default.a.rebuild, 1000);
        }
    }, {
        key: "render",
        value: function render() {
            var _assets,
                _this2 = this;

            var _props = this.props,
                history = _props.history,
                myHistory = _props.myHistory,
                base = _props.base,
                quote = _props.quote,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol,
                isNullAccount = _props.isNullAccount;
            var activeTab = this.state.activeTab;

            var historyRows = null;

            if (isNullAccount) {
                activeTab = "history";
            }

            var assets = (_assets = {}, _defineProperty(_assets, quote.get("id"), {
                precision: quote.get("precision")
            }), _defineProperty(_assets, base.get("id"), {
                precision: base.get("precision")
            }), _assets);

            if (activeTab === "my_history" && myHistory && myHistory.size) {
                historyRows = myHistory.filter(function (a) {
                    var opType = a.getIn(["op", 0]);
                    return opType === operations.fill_order;
                }).filter(function (a) {
                    var quoteID = quote.get("id");
                    var baseID = base.get("id");
                    var pays = a.getIn(["op", 1, "pays", "asset_id"]);
                    var receives = a.getIn(["op", 1, "receives", "asset_id"]);
                    var hasQuote = quoteID === pays || quoteID === receives;
                    var hasBase = baseID === pays || baseID === receives;
                    return hasQuote && hasBase;
                }).sort(function (a, b) {
                    return b.get("block_num") - a.get("block_num");
                }).map(function (trx) {
                    var fill = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_18__["FillOrder"](trx.toJS(), assets, quote.get("id"));

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: fill.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { className: fill.className },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                price: fill.getPrice(),
                                base: _this2.props.base,
                                quote: _this2.props.quote
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToReceive()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToPay()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BlockDate__WEBPACK_IMPORTED_MODULE_14__["default"], {
                            component: "td",
                            block_number: fill.block,
                            tooltip: true
                        })
                    );
                }).toArray();
            } else if (history && history.size) {
                historyRows = this.props.history.take(100).map(function (fill) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: "history_" + fill.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { className: fill.className },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                price: fill.getPrice(),
                                base: _this2.props.base,
                                quote: _this2.props.quote
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToReceive()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToPay()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { className: "tooltip", "data-tip": fill.time },
                            counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.localize(fill.time, {
                                type: "date",
                                format: browser_locale__WEBPACK_IMPORTED_MODULE_17___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
                            })
                        )
                    );
                }).toArray();
            }

            var hc = "mymarkets-header clickable";
            var historyClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()(hc, { inactive: activeTab === "my_history" });
            var myHistoryClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()(hc, { inactive: activeTab === "history" });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: this.props.className },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "exchange-bordered small-12",
                        style: { height: "auto" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: this.props.headerStyle,
                            className: "grid-block shrink left-orderbook-header bottom-header"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(myHistoryClass, {
                                    disabled: isNullAccount
                                }),
                                onClick: this._changeTab.bind(this, "my_history")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.my_history" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: historyClass,
                                onClick: this._changeTab.bind(this, "history")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.history" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header market-right-padding-only" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                            className: "header-sub-title",
                                            content: "exchange.price"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            { className: "header-sub-title" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                dataPlace: "top",
                                                name: quoteSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            { className: "header-sub-title" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                dataPlace: "top",
                                                name: baseSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                            className: "header-sub-title",
                                            content: "explorer.block.date"
                                        })
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "table-container grid-block market-right-padding-only no-overflow",
                            ref: "history",
                            style: { maxHeight: 210, overflow: "hidden" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__["default"],
                                {
                                    component: "tbody",
                                    transitionName: "newrow"
                                },
                                historyRows
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MarketHistory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketHistory.defaultProps = {
    history: []
};

MarketHistory.propTypes = {
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_10__["connect"])(MarketHistory, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(798);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(799);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1382);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/**
 * @brief displays block's date and time based on block number
 *
 * properties: block - number
 * Note, it doesn't fetch block, just calculates time based on number alone.
 **/

var BlockDate = function (_React$Component) {
    _inherits(BlockDate, _React$Component);

    function BlockDate() {
        _classCallCheck(this, BlockDate);

        return _possibleConstructorReturn(this, (BlockDate.__proto__ || Object.getPrototypeOf(BlockDate)).apply(this, arguments));
    }

    _createClass(BlockDate, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (!this.props.block) actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__["default"].getBlock(this.props.block_number);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.block && !this.props.block) setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild, 1000);
            return np.block !== this.props.block;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                block = _props.block,
                tooltip = _props.tooltip,
                component = _props.component,
                format = _props.format;

            if (!block) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, {
                className: tooltip ? "tooltip" : "",
                "data-tip": tooltip ? block.timestamp : ""
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(block.timestamp, { type: "date", format: format })
            ));
        }
    }]);

    return BlockDate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BlockDate.defaultProps = {
    format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history",
    tooltip: false,
    component: "span"
};


BlockDate = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(BlockDate, {
    listenTo: function listenTo() {
        return [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps(props) {
        return {
            block: stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().blocks.get(props.block_number)
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BlockDate);

/***/ }),

/***/ 2419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1338);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(709);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(895);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2400);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1217);
/* harmony import */ var _Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2420);
/* harmony import */ var _Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2421);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(582);
/* harmony import */ var _ExchangeInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1247);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1030);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2422);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1341);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(802);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var BuySell = function (_React$Component) {
    _inherits(BuySell, _React$Component);

    function BuySell() {
        _classCallCheck(this, BuySell);

        return _possibleConstructorReturn(this, (BuySell.__proto__ || Object.getPrototypeOf(BuySell)).apply(this, arguments));
    }

    _createClass(BuySell, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.amount !== this.props.amount || nextProps.onBorrow !== this.props.onBorrow || nextProps.total !== this.props.total || nextProps.currentPrice !== this.props.currentPrice || nextProps.price !== this.props.price || nextProps.balance !== this.props.balance || nextProps.account !== this.props.account || nextProps.className !== this.props.className || (nextProps.fee && this.props.fee ? nextProps.fee.ne(this.props.fee) : false) || nextProps.isPredictionMarket !== this.props.isPredictionMarket || nextProps.feeAsset !== this.props.feeAsset || nextProps.isOpen !== this.props.isOpen || nextProps.hasFeeBalance !== this.props.hasFeeBalance || nextProps.expirationType !== this.props.expirationType || nextProps.expirationCustomTime !== this.props.expirationCustomTime;
        }
    }, {
        key: "_addBalance",
        value: function _addBalance(balance) {
            if (this.props.type === "bid") {
                this.props.totalChange({
                    target: { value: balance.getAmount({ real: true }).toString() }
                });
            } else {
                this.props.amountChange({
                    target: { value: balance.getAmount({ real: true }).toString() }
                });
            }
        }
    }, {
        key: "_setPrice",
        value: function _setPrice(price) {
            this.props.priceChange({ target: { value: price.toString() } });
        }
    }, {
        key: "_onDeposit",
        value: function _onDeposit(e) {
            e.preventDefault();
            this.refs.deposit_modal.show();
        }
    }, {
        key: "_onBuy",
        value: function _onBuy(e) {
            e.preventDefault();
            this.refs.bridge_modal.show();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                type = _props.type,
                quote = _props.quote,
                base = _props.base,
                amountChange = _props.amountChange,
                fee = _props.fee,
                isPredictionMarket = _props.isPredictionMarket,
                priceChange = _props.priceChange,
                onSubmit = _props.onSubmit,
                balance = _props.balance,
                totalChange = _props.totalChange,
                balancePrecision = _props.balancePrecision,
                currentPrice = _props.currentPrice,
                currentPriceObject = _props.currentPriceObject,
                feeAsset = _props.feeAsset,
                feeAssets = _props.feeAssets,
                hasFeeBalance = _props.hasFeeBalance,
                backedCoin = _props.backedCoin;

            var amount = void 0,
                price = void 0,
                total = void 0;
            var caret = this.props.isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "\u25BC"
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "\u25B2"
            );

            if (this.props.amount) amount = this.props.amount;
            if (this.props.price) price = this.props.price;
            if (this.props.total) total = this.props.total;

            var balanceAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["Asset"]({
                amount: balance ? balance.get("balance") : 0,
                precision: balancePrecision,
                asset_id: this.props.balanceId
            });

            var maxBaseMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["Asset"]({
                amount: base.getIn(["options", "max_market_fee"]),
                asset_id: base.get("asset_id"),
                precision: base.get("precision")
            });
            var maxQuoteMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["Asset"]({
                amount: quote.getIn(["options", "max_market_fee"]),
                asset_id: quote.get("asset_id"),
                precision: quote.get("precision")
            });
            var baseMarketFeePercent = base.getIn(["options", "market_fee_percent"]) / 100 + "%";
            var quoteMarketFeePercent = quote.getIn(["options", "market_fee_percent"]) / 100 + "%";
            var quoteFee = !amount ? 0 : Math.min(maxQuoteMarketFee.getAmount({ real: true }), amount * quote.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxQuoteMarketFee.precision);
            var baseFee = !amount ? 0 : Math.min(maxBaseMarketFee.getAmount({ real: true }), total * base.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxBaseMarketFee.precision);
            var baseFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_16__["default"].getFlagBooleans(base.getIn(["options", "flags"]), base.has("bitasset_data_id"));
            var quoteFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_16__["default"].getFlagBooleans(quote.getIn(["options", "flags"]), quote.has("bitasset_data_id"));

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.base),
                baseName = _utils$replaceName.name,
                basePrefix = _utils$replaceName.prefix;

            var hasMarketFee = baseFlagBooleans["charge_market_fee"] || quoteFlagBooleans["charge_market_fee"];
            var baseMarketFee = baseFlagBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":\xA0",
                    baseMarketFeePercent
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-input" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        disabled: true,
                        type: "text",
                        id: "baseMarketFee",
                        value: baseFee,
                        autoComplete: "off"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { noTip: true, name: base.get("symbol") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                                percent: base.getIn(["options", "market_fee_percent"]) / 100,
                                asset: (basePrefix || "") + baseName
                            }),
                            className: "inline-block tooltip"
                        },
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                            style: { position: "relative", top: 3 },
                            name: "question-circle",
                            title: "icons.question_circle"
                        })
                    )
                )
            ) : hasMarketFee ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: { visibility: "hidden" },
                        className: "grid-block small-3 no-margin no-overflow buy-sell-label"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":"
                )
            ) : null;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.quote),
                quoteName = _utils$replaceName2.name,
                quotePrefix = _utils$replaceName2.prefix;

            var quoteMarketFee = quoteFlagBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":\xA0",
                    quoteMarketFeePercent
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-input" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        disabled: true,
                        type: "text",
                        id: "quoteMarketFee",
                        value: quoteFee,
                        autoComplete: "off"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { noTip: true, name: quote.get("symbol") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                                percent: quote.getIn(["options", "market_fee_percent"]) / 100,
                                asset: (quotePrefix || "") + quoteName
                            }),
                            className: "inline-block tooltip"
                        },
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                            style: { position: "relative", top: 3 },
                            name: "question-circle",
                            title: "icons.question-circle"
                        })
                    )
                )
            ) : hasMarketFee ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: { visibility: "hidden" },
                        className: "grid-block small-3 no-margin no-overflow buy-sell-label"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":"
                )
            ) : null;

            // if (!balanceAmount) {
            //     balanceAmount = 0;
            // }
            var isBid = type === "bid";
            var marketFee = isBid && quoteMarketFee ? quoteMarketFee : !isBid && baseMarketFee ? baseMarketFee : null;
            var hasBalance = isBid ? balanceAmount.getAmount({ real: true }) >= parseFloat(total) : balanceAmount.getAmount({ real: true }) >= parseFloat(amount);

            var buttonText = isPredictionMarket ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.short") : isBid ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.sell");
            var forceSellText = isBid ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.sell");

            var noBalance = isPredictionMarket ? false : !(balanceAmount.getAmount() > 0 && hasBalance);
            var invalidPrice = !(price > 0);
            var invalidAmount = !(amount > 0);

            var disabled = noBalance || invalidPrice || invalidAmount;

            var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()("button buySellButton", type, {
                disabled: disabled
            });
            var balanceSymbol = isBid ? base.get("symbol") : quote.get("symbol");

            var disabledText = invalidPrice ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.invalid_price") : invalidAmount ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.invalid_amount") : noBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.no_balance") : null;

            // Fee asset selection
            if (feeAssets[1] && feeAssets[1].getIn(["options", "core_exchange_rate", "quote", "asset_id"]) === "1.3.0" && feeAssets[1].getIn(["options", "core_exchange_rate", "base", "asset_id"]) === "1.3.0") {
                feeAsset = feeAssets[0];
                feeAssets.splice(1, 1);
            }
            var index = 0;
            var options = feeAssets.map(function (asset) {
                var _utils$replaceName3 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(asset),
                    name = _utils$replaceName3.name,
                    prefix = _utils$replaceName3.prefix;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: asset.get("id"), value: index++ },
                    prefix,
                    name
                );
            });

            // Subtract fee from amount to sell
            var balanceToAdd = void 0;

            if (feeAsset.get("symbol") === balanceSymbol) {
                balanceToAdd = balanceAmount.clone(balanceAmount.getAmount() - fee.getAmount());
            } else {
                balanceToAdd = balanceAmount;
            }

            var _utils$replaceName4 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props[isBid ? "base" : "quote"]),
                name = _utils$replaceName4.name,
                prefix = _utils$replaceName4.prefix;

            var buyBorrowDepositName = (prefix ? prefix : "") + name;

            var translator = __webpack_require__(571);

            var dataIntro = null;

            if (type == "bid") {
                dataIntro = translator.translate("walkthrough.buy_form");
            }

            if (type == "ask") {
                dataIntro = translator.translate("walkthrough.sell_form");
            }

            var expirationsOptionsList = Object.keys(this.props.expirations).map(function (key, i) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: key, key: key },
                    _this2.props.expirations[key].title
                );
            });

            // datepicker puts on the end of body so it's out of theme scope
            // so theme is used on wrapperClassName
            var theme = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().settings.get("themes");

            var minExpirationDate = moment__WEBPACK_IMPORTED_MODULE_18___default()();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: this.props.className },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "exchange-bordered buy-sell-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "exchange-content-header " + type,
                            "data-intro": dataIntro
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                string: "exchange.buysell_formatter",
                                noLink: true,
                                noTip: false,
                                keys: [{
                                    type: "asset",
                                    value: quote.get("symbol"),
                                    arg: "asset"
                                }, {
                                    type: "translate",
                                    value: isPredictionMarket ? "exchange.short" : isBid ? "exchange.buy" : "exchange.sell",
                                    arg: "direction"
                                }]
                            })
                        ),
                        this.props.onFlip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                onClick: this.props.onFlip,
                                style: { cursor: "pointer", fontSize: "1rem" },
                                className: "flip-arrow"
                            },
                            " ",
                            "\u21C6"
                        ) : "null",
                        this.props.onTogglePosition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                onClick: this.props.onTogglePosition,
                                style: { cursor: "pointer", fontSize: "1rem" },
                                className: "flip-arrow"
                            },
                            " ",
                            "\u21C5"
                        ) : "null",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                onClick: this.props.onToggleOpen,
                                className: "float-right clickable hide-for-xlarge",
                                style: { paddingLeft: 10 }
                            },
                            caret
                        ),
                        this.props.currentBridges ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right buy-sell-deposit" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { onClick: this._onBuy.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    string: "exchange.buysell_formatter",
                                    noLink: true,
                                    keys: [{
                                        type: "asset",
                                        value: this.props[isBid ? "base" : "quote"].get("symbol"),
                                        arg: "asset"
                                    }, {
                                        type: "translate",
                                        value: "exchange.buy",
                                        arg: "direction"
                                    }]
                                })
                            )
                        ) : null,
                        this.props.backedCoin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right buy-sell-deposit" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { onClick: this._onDeposit.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    string: "exchange.buysell_formatter",
                                    noLink: true,
                                    keys: [{
                                        type: "asset",
                                        value: this.props[isBid ? "base" : "quote"].get("symbol"),
                                        arg: "asset"
                                    }, {
                                        type: "translate",
                                        value: "exchange.deposit",
                                        arg: "direction"
                                    }]
                                })
                            )
                        ) : null,
                        this.props.onBorrow ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right buy-sell-deposit" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { onClick: this.props.onBorrow },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    string: "exchange.buysell_formatter",
                                    noLink: true,
                                    keys: [{
                                        type: "asset",
                                        value: this.props[isBid ? "base" : "quote"].get("symbol"),
                                        arg: "asset"
                                    }, {
                                        type: "translate",
                                        value: "exchange.borrow",
                                        arg: "direction"
                                    }]
                                })
                            )
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            className: (!this.props.isOpen ? "hide-container " : "") + "order-form",
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block no-padding buy-sell-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.price" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        id: type + "Price",
                                        value: price,
                                        onChange: priceChange,
                                        autoComplete: "off",
                                        placeholder: "0.0"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    }),
                                    "\xA0/\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block no-padding buy-sell-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.amount" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        id: type + "Amount",
                                        value: amount,
                                        onChange: amountChange,
                                        autoComplete: "off",
                                        placeholder: "0.0"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block buy-sell-row bottom-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.total" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        id: type + "Total",
                                        value: total,
                                        onChange: totalChange,
                                        autoComplete: "off",
                                        placeholder: "0.0"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block no-padding buy-sell-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.fee" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        className: !hasFeeBalance ? "no-balance" : "",
                                        disabled: true,
                                        type: "text",
                                        id: type + "Fee",
                                        value: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("transfer.errors.insufficient") : fee.getAmount({ real: true }),
                                        autoComplete: "off"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-block small-4 no-margin no-overflow buy-sell-box",
                                        style: {
                                            paddingLeft: feeAssets.length !== 1 ? 0 : 5
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "select",
                                        {
                                            style: feeAssets.length === 1 ? { background: "none" } : null,
                                            disabled: feeAssets.length === 1,
                                            value: feeAssets.indexOf(this.props.feeAsset),
                                            className: "form-control" + (feeAssets.length !== 1 ? " buysell-select" : ""),
                                            onChange: this.props.onChangeFeeAsset
                                        },
                                        options
                                    )
                                )
                            ),
                            marketFee
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-content clear-fix no-padding" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "float-left" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            { className: "buy-sell-info" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.balance" }),
                                                ":"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                {
                                                    style: {
                                                        paddingLeft: 5,
                                                        textAlign: "right"
                                                    }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        style: {
                                                            borderBottom: "#A09F9F 1px dotted",
                                                            cursor: "pointer"
                                                        },
                                                        onClick: this._addBalance.bind(this, balanceToAdd)
                                                    },
                                                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(balanceAmount.getAmount({ real: true }), balancePrecision),
                                                    " ",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        name: balanceSymbol
                                                    })
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            { className: "buy-sell-info" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                { style: { paddingTop: 5 } },
                                                isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.lowest_ask" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.highest_bid" }),
                                                ":\xA0"
                                            ),
                                            currentPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                {
                                                    style: {
                                                        paddingLeft: 5,
                                                        textAlign: "right",
                                                        paddingTop: 5,
                                                        verticalAlign: "bottom"
                                                    }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        style: {
                                                            borderBottom: "#A09F9F 1px dotted",
                                                            cursor: "pointer"
                                                        },
                                                        onClick: this.props.setPrice.bind(this, type, currentPriceObject.sellPrice())
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                        price: currentPrice,
                                                        quote: quote,
                                                        base: base
                                                    }),
                                                    " ",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        name: base.get("symbol")
                                                    }),
                                                    "/",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        name: quote.get("symbol")
                                                    })
                                                )
                                            ) : null
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            { className: "buy-sell-info" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                { style: { paddingTop: 5 } },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transaction.expiration" }),
                                                ":"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                { className: "expiration-datetime-picker" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "select",
                                                    {
                                                        onChange: this.props.onExpirationTypeChange,
                                                        value: this.props.expirationType
                                                    },
                                                    expirationsOptionsList
                                                ),
                                                this.props.expirationType === "SPECIFIC" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17___default.a, {
                                                    pickerPosition: "bottom center",
                                                    wrapperClassName: theme,
                                                    timePicker: true,
                                                    min: minExpirationDate,
                                                    inputFormat: "Do MMM YYYY hh:mm A",
                                                    value: this.props.expirationCustomTime,
                                                    onChange: this.props.onExpirationCustomChange
                                                }) : null
                                            )
                                        )
                                    )
                                ),
                                disabledText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "float-right",
                                        "data-tip": disabledText,
                                        "data-place": "right"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, true),
                                        value: buttonText
                                    })
                                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "float-right", "data-tip": "" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, true),
                                        value: buttonText
                                    })
                                ),
                                disabledText && isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingRight: 10 },
                                        className: "float-right",
                                        "data-tip": disabledText,
                                        "data-place": "right"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, false),
                                        value: forceSellText
                                    })
                                ) : isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingRight: 10 },
                                        className: "float-right",
                                        "data-tip": ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, false),
                                        value: forceSellText
                                    })
                                ) : null
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
                    ref: "deposit_modal",
                    action: "deposit",
                    fiatModal: false,
                    account: this.props.currentAccount.get("name"),
                    sender: this.props.currentAccount.get("id"),
                    asset: this.props[isBid ? "base" : "quote"].get("id"),
                    modalId: "simple_deposit_modal" + (type === "bid" ? "" : "_ask"),
                    balances: [this.props.balance]
                }, backedCoin)),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    ref: "bridge_modal",
                    action: "deposit",
                    account: this.props.currentAccount.get("name"),
                    sender: this.props.currentAccount.get("id"),
                    asset: this.props.balanceId,
                    modalId: "simple_bridge_modal" + (type === "bid" ? "" : "_ask"),
                    balances: [this.props.balance],
                    bridges: this.props.currentBridges
                })
            );
        }
    }]);

    return BuySell;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BuySell.propTypes = {
    balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainObject,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    amountChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    priceChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onExpirationTypeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onExpirationCustomChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
BuySell.defaultProps = {
    type: "bid"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(BuySell));

/***/ }),

/***/ 2453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1285);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1267);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(744);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1217);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(802);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(416);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(879);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1286);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(567);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1262);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var MarketPickerWrapper = function (_React$Component) {
    _inherits(MarketPickerWrapper, _React$Component);

    function MarketPickerWrapper() {
        _classCallCheck(this, MarketPickerWrapper);

        var _this = _possibleConstructorReturn(this, (MarketPickerWrapper.__proto__ || Object.getPrototypeOf(MarketPickerWrapper)).call(this));

        _this.state = _this.initialState();

        _this.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__["default"].getAssetList.defer, 150);
        return _this;
    }

    _createClass(MarketPickerWrapper, [{
        key: "initialState",
        value: function initialState() {
            return {
                marketsList: "",
                issuersList: "",
                lookupQuote: null,
                allMarkets: "",
                allIssuers: "",
                inputValue: ""
            };
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.marketPickerAsset !== this.props.marketPickerAsset) this.setState(this.initialState());

            if (nextProps.searchAssets !== this.props.searchAssets) this.assetFilter();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.marketPickerAsset !== this.props.marketPickerAsset || np.searchAssets !== this.props.searchAssets || ns.marketsList !== this.state.marketsList || ns.issuersList !== this.state.issuersList || !common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_onSelectIssuer",
        value: function _onSelectIssuer(e) {
            var filterByIssuerName = e.target.value == "0" ? null : e.target.value;
            this.assetFilter(filterByIssuerName);
        }
    }, {
        key: "_onInputName",
        value: function _onInputName(getBackedAssets, e) {
            var _this2 = this;

            var toFind = e.target.value.trim().toUpperCase();
            var isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainValidation"].is_valid_symbol_error(toFind, true);

            /* Don't lookup invalid asset names */
            if (toFind && toFind.length >= 2 && !isValidName) return;

            this.setState({
                inputValue: e.target.value.trim(),
                activeSearch: true,
                allMarkets: "",
                allIssuers: "",
                marketsList: "",
                issuersList: ""
            });

            if (this.state.inputValue !== toFind) {
                this.timer && clearTimeout(this.timer);
            }

            this.timer = setTimeout(function () {
                _this2._lookupAssets(toFind, getBackedAssets);
            }, 1500);
        }
    }, {
        key: "_lookupAssets",
        value: function _lookupAssets(value) {
            var gatewayAssets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!value && value !== "") return;

            var quote = value.toUpperCase();

            this.getAssetList(quote, 10, gatewayAssets);

            this.setState({
                lookupQuote: quote
            });
        }
    }, {
        key: "_changeMarketPickerFilter",
        value: function _changeMarketPickerFilter(value) {
            this.setState({
                marketsList: "",
                issuersList: "",
                lookupQuote: null,
                allMarkets: "",
                allIssuers: "",
                inputValue: "",
                marketPickerTab: value,
                activeSearch: false
            });
        }
    }, {
        key: "_fetchIssuer",
        value: function _fetchIssuer(asset) {
            var issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(asset.issuer, false, false);
            // Issuer may sometimes not resolve at first.
            // A waiter may be required here
            if (!issuer) {
                return;
            } else {
                return issuer;
            }
        }
    }, {
        key: "assetFilter",
        value: function assetFilter() {
            var _this3 = this;

            var filterByIssuerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var _props = this.props,
                searchAssets = _props.searchAssets,
                marketPickerAsset = _props.marketPickerAsset;
            var _state = this.state,
                inputValue = _state.inputValue,
                lookupQuote = _state.lookupQuote,
                marketPickerTab = _state.marketPickerTab;


            this.setState({
                activeSearch: true
            });

            var assetCount = 0;
            var allMarkets = [];
            var allIssuers = [];

            var baseSymbol = this.props.baseAsset.get("symbol");
            var quoteSymbol = this.props.quoteAsset.get("symbol");

            if (searchAssets.size && !!inputValue && inputValue.length > 2) {
                searchAssets.filter(function (a) {
                    try {
                        if (a.options.description) {
                            var description = JSON.parse(a.options.description);
                            if ("visible" in description) {
                                if (!description.visible) return false;
                            }
                        }
                    } catch (e) {}

                    return a.symbol.indexOf(lookupQuote) !== -1;
                }).forEach(function (asset) {
                    if (assetCount > 100) return;
                    assetCount++;

                    var issuer = _this3._fetchIssuer(asset);

                    var base = _this3.props.baseAsset.get("symbol");
                    var marketID = asset.symbol + "_" + base;

                    var isQuoteAsset = quoteSymbol == marketPickerAsset;
                    var includeAsset = isQuoteAsset && asset.symbol != baseSymbol || !isQuoteAsset && asset.symbol != quoteSymbol;

                    if (includeAsset && (!filterByIssuerName || filterByIssuerName == issuer.get("name")) && (marketPickerTab == "search" && asset.symbol.startsWith(inputValue.toUpperCase()) || !marketPickerTab || marketPickerTab == "filter")) {
                        allMarkets.push([marketID, {
                            quote: asset.symbol,
                            base: base,
                            issuer: !issuer ? null : issuer.get("name")
                        }]);
                    }
                    if (includeAsset && issuer && !allIssuers.includes(issuer.get("name"))) allIssuers.push(issuer.get("name"));
                });
            }

            var marketsList = this.state.marketsList;
            var issuersList = this.state.issuersList;

            issuersList = !allIssuers ? null : allIssuers.sort(function (a, b) {
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            }).map(function (issuer) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "option",
                    { key: issuer, value: issuer },
                    issuer
                );
            });

            marketsList = !allMarkets ? null : allMarkets.sort(function (a, b) {
                var aIsKnownGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__["hasGatewayPrefix"])(a[1]["quote"]);
                var bIsKnownGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__["hasGatewayPrefix"])(b[1]["quote"]);

                if (aIsKnownGateway && !bIsKnownGateway) {
                    return -1;
                } else if (bIsKnownGateway && !aIsKnownGateway) {
                    return 1;
                } else if (a[1]["quote"] > b[1]["quote"]) {
                    return 1;
                } else if (a[1]["quote"] < b[1]["quote"]) {
                    return -1;
                } else {
                    return 0;
                }
            }).map(function (market) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "li",
                    { key: market[0] },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__["default"], { name: market[1]["quote"] }),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "span",
                        { style: { float: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
                            {
                                onClick: function onClick() {
                                    _this3.props.onToggleMarketPicker(null), actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].switchMarket();
                                },
                                to: quoteSymbol == marketPickerAsset ? "/market/" + market[1]["quote"] + "_" + baseSymbol : "/market/" + quoteSymbol + "_" + market[1]["quote"]
                            },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.market_picker.use" })
                        )
                    )
                );
            });

            this.setState({
                allMarkets: allMarkets,
                allIssuers: allIssuers,
                marketsList: marketsList,
                issuersList: issuersList,
                activeSearch: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var marketPickerAsset = this.props.marketPickerAsset;
            var _state2 = this.state,
                marketPickerTab = _state2.marketPickerTab,
                inputValue = _state2.inputValue,
                allMarkets = _state2.allMarkets,
                issuersList = _state2.issuersList,
                marketsList = _state2.marketsList;


            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "div",
                { className: "marketPicker" },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "marketPicker__header" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        { className: "marketPicker__filterType" },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                            className: "marketPicker__filterHeader",
                            component: "span",
                            content: "exchange.market_picker.search_mode"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            style: { marginLeft: 5, cursor: "pointer" },
                            className: !this.state.marketPickerTab || this.state.marketPickerTab == "filter" ? "blue-icon" : "",
                            size: "1_5x",
                            onClick: this._changeMarketPickerFilter.bind(this, "filter"),
                            name: "filter",
                            title: "icons.filter"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            style: { marginLeft: 5, cursor: "pointer" },
                            className: this.state.marketPickerTab == "search" ? "blue-icon" : "",
                            size: "1_5x",
                            onClick: this._changeMarketPickerFilter.bind(this, "search"),
                            name: "zoom",
                            title: "icons.zoom"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        className: "marketPicker__title",
                        component: "span",
                        content: "exchange.market_picker.title"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "marketPicker__subHeader" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.market_picker.sub_title" }),
                    "\xA0",
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
                        {
                            to: "/asset/" + marketPickerAsset,
                            style: {
                                cursor: "pointer",
                                color: "lightblue !important"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__["default"], { name: marketPickerAsset }),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            className: "blue-icon",
                            style: { marginLeft: 5 },
                            name: "info-circle-o",
                            title: "icons.info_circle_o"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    {
                        id: "search",
                        style: { display: marketPickerTab == "search" ? "" : "none" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "section",
                            { className: "block-list no-border-bottom" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "header",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                    component: "span",
                                    content: "exchange.market_picker.search_for_asset"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
                                type: "text",
                                value: inputValue,
                                onChange: this._onInputName.bind(this, false),
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default.a.translate("exchange.market_picker.search"),
                                maxLength: "16",
                                tabIndex: 2
                            })
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    {
                        id: "filter",
                        style: {
                            display: !this.state.marketPickerTab || this.state.marketPickerTab == "filter" ? "" : "none"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "section",
                            { className: "block-list no-border-bottom" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "header",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                    component: "span",
                                    content: "exchange.market_picker.find_by_asset"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
                                type: "text",
                                value: inputValue,
                                onChange: this._onInputName.bind(this, true),
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default.a.translate("exchange.market_picker.search"),
                                maxLength: "16",
                                tabIndex: 2
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "section",
                            { className: "block-list no-border-bottom" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "header",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                    component: "span",
                                    content: "exchange.market_picker.filter_by_issuer"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "ul",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "li",
                                    { className: "with-dropdpwn" },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "select",
                                        {
                                            className: "settings-select",
                                            onChange: this._onSelectIssuer.bind(this),
                                            style: { border: 0 }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                            "option",
                                            { key: "0", value: "0" },
                                            counterpart__WEBPACK_IMPORTED_MODULE_12___default.a.translate("exchange.market_picker.show_all"),
                                            " "
                                        ),
                                        issuersList
                                    )
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "section",
                    { className: "block-list no-border-bottom" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        component: "header",
                        content: "exchange.market_picker.results",
                        total_assets: !allMarkets ? 0 : allMarkets.length
                    })
                ),
                this.state.activeSearch && this.state.inputValue.length != 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "three-bounce" })
                ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "results" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "ul",
                        { style: { marginLeft: 0 } },
                        marketsList
                    )
                )
            );
        }
    }]);

    return MarketPickerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var MarketPicker = function (_React$Component2) {
    _inherits(MarketPicker, _React$Component2);

    function MarketPicker() {
        _classCallCheck(this, MarketPicker);

        return _possibleConstructorReturn(this, (MarketPicker.__proto__ || Object.getPrototypeOf(MarketPicker)).apply(this, arguments));
    }

    _createClass(MarketPicker, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MarketPickerWrapper, this.props);
        }
    }]);

    return MarketPicker;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

MarketPicker = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(MarketPicker, {
    listenTo: function listenTo() {
        return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().assets,
            assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().assetsLoading
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (MarketPicker);

/***/ }),

/***/ 2454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2456);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2457);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var TradingView = __webpack_require__(2455);



// import {connect} from "alt-react";
// import MarketsStore from "stores/MarketsStore";

var TradingViewPriceChart = function (_React$Component) {
    _inherits(TradingViewPriceChart, _React$Component);

    function TradingViewPriceChart() {
        _classCallCheck(this, TradingViewPriceChart);

        return _possibleConstructorReturn(this, (TradingViewPriceChart.__proto__ || Object.getPrototypeOf(TradingViewPriceChart)).apply(this, arguments));
    }

    _createClass(TradingViewPriceChart, [{
        key: "loadTradingView",
        value: function loadTradingView(props) {
            var _this2 = this;

            var dataFeed = props.dataFeed;

            var themeColors = assets_colors__WEBPACK_IMPORTED_MODULE_1___default.a[props.theme];

            if (!dataFeed) return;
            if (!!this.tvWidget) return;

            if (false) {}

            dataFeed.update({
                resolutions: props.buckets,
                ticker: props.quoteSymbol + "_" + props.baseSymbol,
                interval: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([props.bucketSize])[0]
            });

            if (false) {}
            if (false) {}
            this.tvWidget = new TradingView.widget({
                fullscreen: false,
                symbol: props.quoteSymbol + "_" + props.baseSymbol,
                interval: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([props.bucketSize])[0],
                library_path: ( false ? undefined : "") + "/charting_library/",
                datafeed: dataFeed,
                container_id: "tv_chart",
                charts_storage_url: "https://saveload.tradingview.com",
                charts_storage_api_version: "1.1",
                client_id: "tradingview.com",
                user_id: "public_user_id",
                autosize: true,
                locale: props.locale,
                timezone: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getTVTimezone"])(),
                toolbar_bg: themeColors.bgColor,
                overrides: {
                    "paneProperties.background": themeColors.bgColor,
                    "paneProperties.horzGridProperties.color": themeColors.axisLineColor,
                    "paneProperties.vertGridProperties.color": themeColors.axisLineColor,
                    "scalesProperties.lineColor": themeColors.axisLineColor,
                    "scalesProperties.textColor": themeColors.textColor
                },
                custom_css_url: props.theme + ".css",
                enabled_features: ["study_templates", "keep_left_toolbar_visible_on_small_screens"],
                disabled_features: ["header_saveload", "symbol_info", "symbol_search_hot_key", "border_around_the_chart", "header_symbol_search", "header_compare"],
                debug: false,
                preset: this.props.mobile ? "mobile" : ""
            });

            this.tvWidget.onChartReady(function () {
                if (false) {}
                if (false) {}
                dataFeed.update({
                    onMarketChange: _this2._setSymbol.bind(_this2)
                });
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (!np.marketReady) return;
            if (!this.props.dataFeed && np.dataFeed) {
                loadTradingView(np);
            }
        }
    }, {
        key: "_setSymbol",
        value: function _setSymbol(ticker) {
            if (this.tvWidget) {
                this.tvWidget.setSymbol(ticker, Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([this.props.bucketSize])[0]);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadTradingView(this.props);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.props.dataFeed.clearSubs();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.chartHeight !== this.props.chartHeight) return true;
            if (!!this.tvWidget) return false;
            if (!np.marketReady) return false;
            return true;
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "small-12" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "exchange-bordered",
                    style: {
                        marginTop: 10,
                        marginBottom: 10,
                        height: this.props.chartHeight + "px"
                    },
                    id: "tv_chart"
                })
            );
        }
    }]);

    return TradingViewPriceChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TradingViewPriceChart);

/***/ }),

/***/ 2455:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,o){var i=n({},t);for(var s in o)"object"!=typeof t[s]||null===t[s]||Array.isArray(t[s])?void 0!==o[s]&&(i[s]=o[s]):i[s]=e(t[s],o[s]);return i}function o(){return"1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)"}function i(t){window.addEventListener("DOMContentLoaded",t,!1)}var n=Object.assign||function(t){for(var e,o=arguments,i=1,n=arguments.length;i<n;i++){e=o[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},a=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(r,t),t.preset){var o=s[t.preset];o?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(o.disabled_features):this._options.disabled_features=o.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(o.enabled_features):this._options.enabled_features=o.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e+"",o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var t=this._getIFrameElement();t.contentWindow.destroyChart(),t.parentNode&&t.parentNode.removeChild(t)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o,i){this._innerAPI().saveChartToServer(t,e,o,i)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype._getIFrameElement=function(){var t=document.getElementById(this._id);if(null===t)throw new Error("There is no such iframe");return t},t.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},t.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var n=function(){i.removeEventListener("load",n,!1),i.contentWindow.widgetReady(function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){o[e].call(t)}i.contentWindow.initializationFinished()})};i.addEventListener("load",n,!1)},t.prototype._render=function(){var t=window;t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(t[this._id].chartContent={json:this._options.saved_data});var e=(this._options.library_path||"")+"static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}(),d=a;window.TradingView=window.TradingView||{},window.TradingView.version=o,t.version=o,t.onready=i,t.widget=d,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ 2456:
/***/ (function(module, exports) {

module.exports = {
    midnightTheme: {
        bidColor: "#50D2C2",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#6BA583",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#191a1f",
        textColor: "#e0e0e0"
    },
    rudexDarkTheme: {
        bidColor: "#50D2C2",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#6BA583",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "#AAAAAA",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#191a1f",
        textColor: "#e0e0e0"
    },
    darkTheme: {
        bidColor: "#6BA583",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#258A14",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#2a2a2a",
        textColor: "#ffffff"
    },
    lightTheme: {
        bidColor: "#258A14",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#EA340B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#528c0a",
        negativeColor: "rgba(225, 66, 74, 1)",
        strokeColor: "#000000",
        primaryText: "#242424",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(255,255,255, 0.9)",
        tooltipColor: "#000",
        tooltipFillColor: "#000",
        //axis
        axisLabelsColor: "#000",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#848484",
        bgColor: "#fff",
        textColor: "#3d3d3d"
    }
};

/***/ }),

/***/ 2457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFeed", function() { return DataFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInfo", function() { return SymbolInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResolutionsFromBuckets", function() { return getResolutionsFromBuckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTVTimezone", function() { return getTVTimezone; });
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1266);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(416);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2458);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1267);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1262);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var SymbolInfo = function SymbolInfo(options) {
    _classCallCheck(this, SymbolInfo);

    this.name = options.ticker;
    this.ticker = options.ticker;

    var quoteGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__["getGatewayName"])(options.quoteAsset);
    var baseGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__["getGatewayName"])(options.baseAsset);
    var currentExchange = quoteGateway === baseGateway ? quoteGateway : quoteGateway && !baseGateway ? quoteGateway : !quoteGateway && baseGateway ? baseGateway : quoteGateway + " / " + baseGateway;

    var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.baseAsset),
        baseSymbol = _utils$replaceName.name,
        basePrefix = _utils$replaceName.prefix;

    var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.quoteAsset),
        quoteSymbol = _utils$replaceName2.name,
        quotePrefix = _utils$replaceName2.prefix;

    this.description = "" + (quotePrefix || "") + quoteSymbol + " / " + (basePrefix || "") + baseSymbol + " " + (!!currentExchange ? "(" + currentExchange + ")" : "");
    this.type = "bitcoin";
    this.session = "24x7";
    this.timezone = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.guess();
    this.data_status = "streaming";
    this.supported_resolutions = options.resolutions;
    this.has_empty_bars = true;
    this.pricescale = Math.pow(10, options.baseAsset.get("precision"));
    this.quoteAsset = options.quoteAsset;
    this.baseAsset = options.baseAsset;
    this.minmov = 1;

    this.has_intraday = this.supported_resolutions.reduce(function (supported, r) {
        return supported || !isNaN(parseInt(r, 10));
    }, false);
    this.intraday_multipliers = this.supported_resolutions.filter(function (r) {
        return !isNaN(parseInt(r, 10));
    });

    this.has_seconds = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("S") !== -1;
    }, false);
    this.seconds_multipliers = this.supported_resolutions.filter(function (r) {
        return r.indexOf("S") !== -1;
    });

    this.has_daily = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("D") !== -1;
    }, false);

    this.has_daily = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("D") !== -1;
    }, false);
};

function getResolutionsFromBuckets(buckets) {
    var resolutions = buckets.map(function (r) {
        var minute = r / 60;
        var day = minute / 60 / 24;
        var week = day / 7;

        if (minute < 1) {
            // below 1 minute we return Seconds
            return r + "S";
        } else if (day < 1 && parseInt(minute, 10) === minute) {
            // below 1 day we return Minutes
            return minute.toString();
        } else if (week < 1) {
            // below 1 week we return Days
            if (day >= 1) {
                if (parseInt(day, 10) === day) {
                    if (day === 1) return "D";
                    return day + "D";
                }
            }
        } else {
            // we return weeks
            if (week >= 1) {
                if (parseInt(week, 10) === week) {
                    return week + "D";
                }
            }
        }

        return null;
    }).filter(function (a) {
        return !!a;
    });

    return resolutions;
}

function getBucketFromResolution(r) {
    if (r === "D") return 24 * 60 * 60;

    if (r.indexOf("W") !== -1) {
        return parseInt(r.replace("D", ""), 10) * 7 * 24 * 60 * 60;
    } else if (r.indexOf("D") !== -1) {
        return parseInt(r.replace("D", ""), 10) * 24 * 60 * 60;
    } else if (r.indexOf("S") !== -1) {
        return parseInt(r.replace("S", ""), 10);
    } else {
        return parseInt(r, 10) * 60;
    }
}

var DataFeed = function () {
    function DataFeed() {
        _classCallCheck(this, DataFeed);
    }

    _createClass(DataFeed, [{
        key: "update",
        value: function update(options) {
            for (var key in options) {
                switch (key) {
                    case "resolutions":
                        this.supported_resolutions = getResolutionsFromBuckets(options.resolutions);
                        break;

                    case "onMarketChange":
                        stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("market_change");
                        stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("market_change", options[key]);
                        break;

                    default:
                        this[key] = options[key];
                }
            }
        }
    }, {
        key: "clearSubs",
        value: function clearSubs() {
            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].clearSubs();
        }
    }, {
        key: "onReady",
        value: function onReady(callback) {
            var _this = this;

            setTimeout(function () {
                callback({
                    exchanges: [{
                        value: "OPEN.",
                        name: "Openledger",
                        desc: "Openledger Gateway"
                    }],
                    symbols_types: [],
                    supported_resolutions: _this.supported_resolutions,
                    supports_marks: false,
                    supports_search: false,
                    supports_time: true
                });
            }, 10);
        }
    }, {
        key: "searchSymbols",
        value: function searchSymbols(userInput, exchange, symbolType, onResultReadyCallback) {
            console.log("searchSymbols", userInput, exchange, symbolType);

            onResultReadyCallback([]);

            /*
            [
                {
                    "symbol": "<short symbol name>",
                    "full_name": "<full symbol name>", // e.g. BTCE:BTCUSD
                    "description": "<symbol description>",
                    "exchange": "<symbol exchange name>",
                    "ticker": "<symbol ticker name, optional>",
                    "type": "stock" // or "futures" or "bitcoin" or "forex" or "index"
                },
                {
                    //    .....
                }
            ]
            */
        }
    }, {
        key: "resolveSymbol",
        value: function resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
            var _this2 = this;

            var _symbolName$split = symbolName.split("_"),
                _symbolName$split2 = _slicedToArray(_symbolName$split, 2),
                quote = _symbolName$split2[0],
                base = _symbolName$split2[1];

            Promise.all([Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAsset", quote), Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAsset", base)]).then(function (assets) {
                var _assets = _slicedToArray(assets, 2),
                    quoteAsset = _assets[0],
                    baseAsset = _assets[1];

                onSymbolResolvedCallback(new SymbolInfo({
                    ticker: symbolName,
                    quoteAsset: quoteAsset,
                    baseAsset: baseAsset,
                    resolutions: _this2.supported_resolutions
                }));
            }).catch(onResolveErrorCallback);
        }
    }, {
        key: "getBars",
        value: function getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
            var _this3 = this;

            from *= 1000;
            to *= 1000;
            var bars = this._getHistory();
            this.latestBar = bars[bars.length - 1];
            bars = bars.filter(function (a) {
                return a.time >= from && a.time <= to;
            });

            if (this.interval !== resolution) {
                if (!firstDataRequest) return;

                var newBucketSize = getBucketFromResolution(resolution);
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeBucketSize(newBucketSize);

                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].unSubscribeMarket(symbolInfo.quoteAsset.get("id"), symbolInfo.baseAsset.get("id")).then(function () {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].subscribeMarket(symbolInfo.baseAsset, symbolInfo.quoteAsset, newBucketSize).then(function () {
                        var bars = _this3._getHistory();
                        _this3.latestBar = bars[bars.length - 1];
                        bars = bars.filter(function (a) {
                            return a.time >= from && a.time <= to;
                        });
                        _this3.interval = resolution;
                        if (!bars.length) return onHistoryCallback(bars, { noData: true });
                        onHistoryCallback(bars);
                    });
                });
            }

            // console.log(
            //     "getBars",
            //     symbolInfo.ticker,
            //     resolution,
            //     "firstDataRequest",
            //     firstDataRequest,
            //     "bars",
            //     bars
            // );
            this.interval = resolution;
            if (!bars.length) return onHistoryCallback(bars, { noData: true });

            onHistoryCallback(bars);
        }
    }, {
        key: "_getHistory",
        value: function _getHistory() {
            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].getState().priceData;
        }
    }, {
        key: "subscribeBars",
        value: function subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
            var _this4 = this;

            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("subscribeBars");
            onResetCacheNeededCallback();
            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("subscribeBars", function () {
                var bars = _this4._getHistory();
                var newBars = bars.filter(function (a) {
                    if (!_this4.latestBar) return true;
                    return a.time > _this4.latestBar.time;
                });
                // console.log("subscribeBars", MarketsStore.getState().activeMarket, "found new bars:", newBars);
                if (newBars.length) {
                    newBars.forEach(function (bar) {
                        onRealtimeCallback(bar);
                    });
                    _this4.latestBar = newBars[newBars.length - 1];
                } else {
                    // Check if latest bar is different
                    var didChange = false;
                    for (var key in _this4.latestBar) {
                        if (_this4.latestBar[key] !== bars[bars.length - 1][key]) {
                            didChange = true;
                        }
                    }
                    if (didChange) {
                        onRealtimeCallback(bars[bars.length - 1]);
                    }
                }
            });
        }
    }, {
        key: "unsubscribeBars",
        value: function unsubscribeBars() {
            /*
            * This is ALWAYS called after subscribeBars for some reason, but
            * sometimes it executes BEFORE the subscribe call in subscribeBars and
            * sometimes AFTER. This causes the callback to be cleared and we stop
            * receiving updates from the MarketStore. Unless we find it causes bugs,
            * it's best to just not use this.
            */
            // MarketsStore.unsubscribe("subscribeBars");
            // this.latestBar = null;
        }
    }, {
        key: "calculateHistoryDepth",
        value: function calculateHistoryDepth(resolution, resolutionBack, intervalBack) {
            return undefined;
        }
    }, {
        key: "getServerTime",
        value: function getServerTime(callback) {
            callback(new Date().getTime() / 1000);
        }
    }]);

    return DataFeed;
}();

var supportedTimeZones = ["America/Argentina/Buenos_Aires", "America/Bogota", "America/Caracas", "America/Chicago", "America/El_Salvador", "America/Los_Angeles", "America/Mexico_City", "America/New_York", "America/Phoenix", "America/Sao_Paulo", "America/Toronto", "America/Vancouver", "Asia/Almaty", "Asia/Ashkhabad", "Asia/Bangkok", "Asia/Dubai", "Asia/Hong_Kong", "Asia/Kathmandu", "Asia/Kolkata", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Tehran", "Asia/Tokyo", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Sydney", "Europe/Athens", "Europe/Berlin", "Europe/Istanbul", "Europe/London", "Europe/Madrid", "Europe/Moscow", "Europe/Paris", "Europe/Warsaw", "Europe/Zurich", "Pacific/Auckland", "Pacific/Chatham", "Pacific/Fakaofo", "Pacific/Honolulu", "US/Mountain"];

function getTVTimezone() {
    var current = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.guess();
    var defaultZone = "Europe/London";

    var isSupported = supportedTimeZones.indexOf(current) !== -1;
    if (isSupported) return current;else {
        /* Try to find a matching timezone from the limited list supported by TradingView */
        var time = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()().toISOString();
        var actual = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(time, current).format();
        for (var i = 0; i < supportedTimeZones.length; i++) {
            var zoneTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(time, supportedTimeZones[i]);
            if (zoneTime.format() === actual) {
                if (false) {}
                // Found a match, return that zone
                return supportedTimeZones[i];
            }
        }
    }
    console.log("No matching timezone found for " + current + ", setting to default value of Europe/London");
    return defaultZone;
}



/***/ }),

/***/ 2461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(590);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2462);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2456);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1217);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(582);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var DepthHighChart = function (_React$Component) {
    _inherits(DepthHighChart, _React$Component);

    function DepthHighChart() {
        _classCallCheck(this, DepthHighChart);

        return _possibleConstructorReturn(this, (DepthHighChart.__proto__ || Object.getPrototypeOf(DepthHighChart)).apply(this, arguments));
    }

    _createClass(DepthHighChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            var settleCheck = isNaN(nextProps.feedPrice) ? false : nextProps.feedPrice !== this.props.feedPrice;
            return Object(common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["didOrdersChange"])(nextProps.orders, this.props.orders) || Object(common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["didOrdersChange"])(nextProps.call_orders, this.props.call_orders) || settleCheck || nextProps.feedPrice !== this.props.feedPrice || nextProps.height !== this.props.height || nextProps.leftOrderBook !== this.props.leftOrderBook || nextProps.LCP !== this.props.LCP || nextProps.showCallLimit !== this.props.showCallLimit || nextProps.hasPrediction !== this.props.hasPrediction || nextProps.feedPrice !== this.props.feedPrice || nextProps.marketReady !== this.props.marketReady;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.reflowChart(500);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.refs.depthChart && nextProps.verticalOrderbook !== this.props.verticalOrderbook) {
                this.reflowChart(100);
            }
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            if (this.props.centerRef) {
                this.tempScroll = this.props.centerRef.scrollTop;
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.props.centerRef) {
                this.props.centerRef.scrollTop = this.tempScroll;
            }
        }
    }, {
        key: "reflowChart",
        value: function reflowChart(timeout) {
            var _this2 = this;

            setTimeout(function () {
                if (_this2.refs.depthChart) {
                    _this2.refs.depthChart.chart.reflow();
                }
            }, timeout);
        }
    }, {
        key: "_getThemeColors",
        value: function _getThemeColors() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return assets_colors__WEBPACK_IMPORTED_MODULE_7___default.a[props.theme];
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                flat_bids = _props.flat_bids,
                flat_asks = _props.flat_asks,
                flat_calls = _props.flat_calls,
                flat_settles = _props.flat_settles,
                totalBids = _props.totalBids,
                totalAsks = _props.totalAsks,
                base = _props.base,
                quote = _props.quote,
                feedPrice = _props.feedPrice;

            var _getThemeColors2 = this._getThemeColors(),
                primaryText = _getThemeColors2.primaryText,
                callColor = _getThemeColors2.callColor,
                settleColor = _getThemeColors2.settleColor,
                settleFillColor = _getThemeColors2.settleFillColor,
                bidColor = _getThemeColors2.bidColor,
                bidFillColor = _getThemeColors2.bidFillColor,
                askColor = _getThemeColors2.askColor,
                askFillColor = _getThemeColors2.askFillColor,
                axisLineColor = _getThemeColors2.axisLineColor;

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(base),
                baseSymbol = _utils$replaceName.name,
                basePrefix = _utils$replaceName.prefix;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(quote),
                quoteSymbol = _utils$replaceName2.name,
                quotePrefix = _utils$replaceName2.prefix;

            baseSymbol = (basePrefix || "") + baseSymbol;
            quoteSymbol = (quotePrefix || "") + quoteSymbol;

            var flatBids = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_bids),
                flatAsks = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_asks),
                flatCalls = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_calls),
                flatSettles = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_settles);

            var config = {
                chart: {
                    type: "area",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [10, 0, 5, 0]
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                dataGrouping: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    useHTML: true,
                    formatter: function formatter() {
                        return "\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" + counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.price") + ":</td>\n\t\t\t\t\t\t\t<td style=\"text-align: right\">" + common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.x, base.get("precision")) + " " + baseSymbol + "/" + quoteSymbol + "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" + counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.quantity") + ":</td>\n\t\t\t\t\t\t\t<td style=\"text-align: right\">" + common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.y, quote.get("precision")) + " " + quoteSymbol + "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t";
                    },
                    style: {
                        color: "#FFFFFF"
                    }
                },
                series: [],
                yAxis: {
                    labels: {
                        enabled: true,
                        style: {
                            color: primaryText
                        },
                        formatter: function formatter() {
                            return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.value, quote.get("precision"));
                        }
                    },
                    opposite: false,
                    title: {
                        text: null,
                        style: {
                            color: "#FFFFFF"
                        }
                    },
                    gridLineWidth: 1,
                    gridLineColor: "rgba(196, 196, 196, 0.30)",
                    gridZIndex: 1,
                    crosshair: {
                        snap: false
                    },
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            color: primaryText
                            // formatter: function() {
                            //     return this.value / power;
                            // }
                        } },
                    ordinal: false,
                    lineColor: "#000000",
                    title: {
                        text: null
                    },
                    plotLines: []
                },
                plotOptions: {
                    area: {
                        animation: false,
                        marker: {
                            enabled: false
                        },
                        series: {
                            enableMouseTracking: false
                        }
                    }
                }
            };

            // Center the charts between bids and asks
            if (flatBids.length > 0 && flatAsks.length > 0) {
                var middleValue = (flatAsks[0][0] + flatBids[flatBids.length - 1][0]) / 2;

                config.xAxis.min = middleValue * 0.4;
                config.xAxis.max = middleValue * 1.6;
                if (config.xAxis.max < flatAsks[0][0]) {
                    config.xAxis.max = flatAsks[0][0] * 1.5;
                }
                if (config.xAxis.min > flatBids[flatBids.length - 1][0]) {
                    config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.5;
                }
                var yMax = 0;
                flatBids.forEach(function (b) {
                    if (b[0] >= config.xAxis.min) {
                        yMax = Math.max(b[1], yMax);
                    }
                });
                flatAsks.forEach(function (a) {
                    if (a[0] <= config.xAxis.max) {
                        yMax = Math.max(a[1], yMax);
                    }
                });
                config.yAxis.max = yMax * 1.15;

                // Adjust y axis label decimals
                var yLabelDecimals = yMax > 10 ? 0 : yMax > 1 ? 2 : 5;
                config.yAxis.labels.formatter = function () {
                    return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.value, yLabelDecimals);
                };
            } else if (flatBids.length && !flatAsks.length) {
                config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.4;
                config.xAxis.max = flatBids[flatBids.length - 1][0] * 1.6;
            } else if (flatAsks.length && !flatBids.length) {
                config.xAxis.min = 0;
                config.xAxis.max = flatAsks[0][0] * 2;
            }

            if (this.props.hasPrediction) {
                config.xAxis.min = -0.05;
                config.xAxis.max = 1.05;
            }

            // Add plotlines if defined
            // if (falsethis.props.plotLine) {
            //	 config.xAxis.plotLines.push({
            //		 color: "red",
            //		 id: "plot_line",
            //		 dashStyle: "longdashdot",
            //		 value: this.props.plotLine * power,
            //		 width: 1,
            //		 zIndex: 5
            //	 });
            // }

            // Market asset
            if (this.props.LCP) {
                config.xAxis.plotLines.push({
                    color: axisLineColor,
                    id: "plot_line",
                    dashStyle: "longdash",
                    value: this.props.LCP,
                    label: {
                        text: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.block.call_limit"),
                        style: {
                            color: primaryText,
                            fontWeight: "bold"
                        }
                    },
                    width: 2,
                    zIndex: 5
                });
            }

            // if (this.props.SQP) {
            //	 config.xAxis.plotLines.push({
            //		 color: "#B6B6B6",
            //		 id: "plot_line",
            //		 dashStyle: "longdash",
            //		 value: this.props.SQP * power,
            //		 label: {
            //			 text: counterpart.translate("exchange.squeeze"),
            //			 style: {
            //				 color: "#DADADA",
            //				 fontWeight: "bold"
            //			 }
            //		 },
            //		 width: 2,
            //		 zIndex: 5
            //	 });
            // }

            if (feedPrice) {
                var settlementColor = base.has("bitasset") ? askColor : bidColor;
                config.xAxis.plotLines.push({
                    color: settlementColor,
                    id: "plot_line",
                    dashStyle: "solid",
                    value: feedPrice,
                    label: {
                        text: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.block.feed_price"),
                        style: {
                            color: primaryText,
                            fontWeight: "bold"
                        }
                    },
                    width: 2,
                    zIndex: 5
                });

                // Add calls if present
                if (flatCalls && flatCalls.length) {
                    config.series.push({
                        name: "Call " + quoteSymbol,
                        data: flatCalls,
                        color: callColor
                    });
                }
            }

            // Add settle orders
            if (feedPrice && flatSettles && flatSettles.length) {
                config.series.push({
                    name: "Settle " + quoteSymbol,
                    data: flatSettles,
                    color: settleColor,
                    fillColor: settleFillColor
                });
            }

            // Push asks and bids
            if (flatBids.length) {
                config.series.push({
                    step: "right",
                    name: "Bid " + quoteSymbol,
                    data: flatBids,
                    color: bidColor,
                    fillColor: bidFillColor
                });
            }

            if (flatAsks.length) {
                config.series.push({
                    step: "left",
                    name: "Ask " + quoteSymbol,
                    data: flatAsks,
                    color: askColor,
                    fillColor: askFillColor
                });
            }

            // Fix the height if defined, else use 400px;
            if (this.props.height) {
                config.chart.height = this.props.height;
            } else {
                config.chart.height = "400px";
            }

            // Add onClick event listener if defined
            if (this.props.onClick) {
                config.chart.events = {
                    click: this.props.onClick.bind(this)
                };
            }

            if (this.props.noFrame) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow no-padding" },
                    !flatBids.length && !flatAsks.length && !flatCalls.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "no-data" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.no_data" })
                    ) : null,
                    this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        { className: "bid-total" },
                        common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalBids, base.get("precision")),
                        " ",
                        baseSymbol
                    ),
                    this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        { className: "ask-total" },
                        common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalAsks, quote.get("precision")),
                        " ",
                        quoteSymbol
                    ),
                    flatBids || flatAsks || flatCalls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_3___default.a, { config: config }) : null
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow no-padding middle-content" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "exchange-bordered", style: { margin: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "exchange-content-header" },
                            this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "bid-total" },
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalBids, base.get("precision")),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], { name: base.get("symbol") })
                            ),
                            this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "ask-total float-right" },
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalAsks, quote.get("precision")),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], { name: quote.get("symbol") })
                            )
                        ),
                        !flatBids.length && !flatAsks.length && !flatCalls.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: "no-data" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.no_data" })
                        ) : null,
                        flatBids || flatAsks || flatCalls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_3___default.a, { ref: "depthChart", config: config }) : null
                    )
                );
            }
        }
    }]);

    return DepthHighChart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

DepthHighChart.defaultProps = {
    flat_bids: [],
    flat_asks: [],
    orders: {},
    noText: false,
    noFrame: true
};

DepthHighChart.propTypes = {
    flat_bids: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    flat_asks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (DepthHighChart);

/***/ }),

/***/ 2466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2467);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var NotifierContainer = function (_React$Component) {
    _inherits(NotifierContainer, _React$Component);

    function NotifierContainer() {
        _classCallCheck(this, NotifierContainer);

        return _possibleConstructorReturn(this, (NotifierContainer.__proto__ || Object.getPrototypeOf(NotifierContainer)).apply(this, arguments));
    }

    _createClass(NotifierContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        account: function account() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentAccount;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notifier__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return NotifierContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NotifierContainer);

/***/ }),

/***/ 2467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2468);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1379);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(895);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(416);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainTypes"].operations;


var ops = Object.keys(operations);

var Notifier = function (_React$Component) {
    _inherits(Notifier, _React$Component);

    function Notifier() {
        _classCallCheck(this, Notifier);

        return _possibleConstructorReturn(this, (Notifier.__proto__ || Object.getPrototypeOf(Notifier)).apply(this, arguments));
    }

    _createClass(Notifier, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.account && nextProps.account.size && this.props.account && this.props.account.get("history")) {
                var ch = this.props.account.get("history") && this.props.account.get("history").first() ? this.props.account.get("history").first().toJS() : null;
                var nh = nextProps.account.get("history") && nextProps.account.get("history").first() ? nextProps.account.get("history").first().toJS() : null;
                if (nh && ch) {
                    // Only trigger notifications for order fills
                    if (ops[nh.op[0]] === "fill_order" && (!ch && nh.id || nh.id !== ch.id)) {
                        react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish("account-notify", "open");
                        setTimeout(function () {
                            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish("account-notify", "close");
                        }, 5000);
                    }
                }
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.account || !this.props.account) return false;
            return !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.account.get("history"), this.props.account.get("history")) || !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.account, this.props.account);
        }
    }, {
        key: "render",
        value: function render() {
            var account = this.props.account;


            if (!account) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            }

            var trx = void 0,
                info = void 0;

            if (this.props.account.get("history") && this.props.account.get("history").size) {
                trx = this.props.account.get("history").first().toJS();
                if (trx) {
                    info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        key: trx.id,
                        op: trx.op,
                        result: trx.result,
                        block: trx.block_num,
                        current: account.get("id"),
                        hideDate: true,
                        hideFee: true
                    });
                }
            }

            if (!trx) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default.a.Static,
                {
                    id: "account-notify",
                    title: null,
                    image: "",
                    wrapperElement: "div"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        info
                    )
                )
            );
        }
    }]);

    return Notifier;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Notifier.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAccount.isRequired
};

Notifier = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(Notifier);

/* harmony default export */ __webpack_exports__["default"] = (Notifier);

/***/ }),

/***/ 2472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ConfirmModal = function (_React$Component) {
    _inherits(ConfirmModal, _React$Component);

    function ConfirmModal() {
        _classCallCheck(this, ConfirmModal);

        return _possibleConstructorReturn(this, (ConfirmModal.__proto__ || Object.getPrototypeOf(ConfirmModal)).apply(this, arguments));
    }

    _createClass(ConfirmModal, [{
        key: "show",
        value: function show() {
            var modalId = "modal_confirm_" + this.props.type;
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(modalId, "open");
        }
    }, {
        key: "_onForce",
        value: function _onForce(value, e) {
            var modalId = "modal_confirm_" + this.props.type;
            e.preventDefault();

            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(modalId, "close");
            if (value) this.props.onForce();
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                type = _props.type,
                diff = _props.diff,
                hasOrders = _props.hasOrders;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                { id: "modal_confirm_" + type, overlay: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { component: "h3", content: "transaction.confirm" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    !hasOrders ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "exchange.confirm_no_orders_" + type
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "exchange.confirm_" + type,
                        diff: common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(diff, 2)
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button-group", style: { paddingTop: "2rem" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            onClick: this._onForce.bind(this, true),
                            className: "button success",
                            type: "submit",
                            value: "Yes"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            onClick: this._onForce.bind(this, false),
                            className: "button info",
                            type: "submit",
                            value: "No"
                        })
                    )
                )
            );
        }
    }]);

    return ConfirmModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmModal);

/***/ }),

/***/ 2473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(802);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1217);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2415);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1267);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(730);
/* harmony import */ var _PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2474);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(416);
/* harmony import */ var _ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2475);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var ExchangeHeader = function (_React$Component) {
    _inherits(ExchangeHeader, _React$Component);

    function ExchangeHeader(props) {
        _classCallCheck(this, ExchangeHeader);

        var _this = _possibleConstructorReturn(this, (ExchangeHeader.__proto__ || Object.getPrototypeOf(ExchangeHeader)).call(this));

        _this.state = {
            volumeShowQuote: true,
            chartHeight: props.chartHeight
        };

        _this.setChartHeight = _this.setChartHeight.bind(_this);
        return _this;
    }

    _createClass(ExchangeHeader, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.marketReady) return false;
            return true;
        }
    }, {
        key: "_addMarket",
        value: function _addMarket(quote, base) {
            var marketID = quote + "_" + base;
            if (!this.props.starredMarkets.has(marketID)) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "changeVolumeBase",
        value: function changeVolumeBase() {
            this.setState({
                volumeShowQuote: !this.state.volumeShowQuote
            });
        }
    }, {
        key: "marketPicker",
        value: function marketPicker(asset) {
            var selectedMarketPickerAsset = this.state.selectedMarketPickerAsset;


            selectedMarketPickerAsset = !!selectedMarketPickerAsset && selectedMarketPickerAsset == asset ? null : asset;

            this.setState({
                selectedMarketPickerAsset: selectedMarketPickerAsset
            });
            this.props.onToggleMarketPicker(selectedMarketPickerAsset);
        }
    }, {
        key: "setChartHeight",
        value: function setChartHeight() {
            this.props.onChangeChartHeight({ value: this.state.chartHeight });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quoteAsset = _props.quoteAsset,
                baseAsset = _props.baseAsset,
                starredMarkets = _props.starredMarkets,
                hasPrediction = _props.hasPrediction,
                feedPrice = _props.feedPrice,
                showCallLimit = _props.showCallLimit,
                lowestCallPrice = _props.lowestCallPrice,
                marketReady = _props.marketReady,
                latestPrice = _props.latestPrice,
                marketStats = _props.marketStats,
                showDepthChart = _props.showDepthChart,
                account = _props.account;


            var baseSymbol = baseAsset.get("symbol");
            var quoteSymbol = quoteAsset.get("symbol");

            // Favorite star
            var marketID = quoteSymbol + "_" + baseSymbol;
            var starClass = starredMarkets.has(marketID) ? "gold-star" : "grey-star";

            // Market stats
            var dayChange = marketStats.get("change");

            var dayChangeClass = parseFloat(dayChange) === 0 ? "" : parseFloat(dayChange) < 0 ? "negative" : "positive";
            var volumeBase = marketStats.get("volumeBase");
            var volumeQuote = marketStats.get("volumeQuote");
            var dayChangeWithSign = dayChange > 0 ? "+" + dayChange : dayChange;

            var volume24h = this.state.volumeShowQuote ? volumeQuote : volumeBase;
            var volume24hAsset = this.state.volumeShowQuote ? quoteAsset : baseAsset;

            var showCollateralRatio = false;

            var quoteId = quoteAsset.get("id");
            var baseId = baseAsset.get("id");

            var lookForBitAsset = quoteId === "1.3.0" ? baseId : baseId === "1.3.0" ? quoteId : null;
            var possibleBitAsset = lookForBitAsset ? bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset(lookForBitAsset) : null;
            var isBitAsset = possibleBitAsset ? !!possibleBitAsset.get("bitasset") : false;
            var collOrderObject = "";
            var settlePrice = null;

            if (isBitAsset) {
                if (account.toJS && account.has("call_orders")) {
                    var call_orders = account.get("call_orders").toJS();

                    for (var i = 0; i < call_orders.length; i++) {
                        var callID = call_orders[i];

                        var position = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getObject(callID);
                        var debtAsset = position.getIn(["call_price", "quote", "asset_id"]);

                        if (debtAsset === lookForBitAsset) {
                            collOrderObject = callID;
                            showCollateralRatio = true;
                            break;
                        }
                    }
                }

                /* Settlment Offset */
                var settleAsset = baseAsset.get("id") == "1.3.0" ? quoteAsset : quoteAsset.get("id") == "1.3.0" ? baseAsset : null;

                if (settleAsset && feedPrice) {
                    var offset_percent = settleAsset.getIn(["bitasset", "options"]).toJS().force_settlement_offset_percent;
                    settlePrice = baseAsset.get("id") == "1.3.0" ? feedPrice.toReal() / (1 + offset_percent / 10000) : feedPrice.toReal() * (1 + offset_percent / 10000);
                }
            }

            var translator = __webpack_require__(571);

            var isQuoteSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == quoteSymbol;
            var isBaseSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == baseSymbol;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block shrink no-padding overflow-visible top-bar" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block overflow-visible" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                replaceNoneToBts: false,
                                maxWidth: 40,
                                name: quoteAsset.get("symbol")
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px" } },
                            !hasPrediction ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: "0 5px",
                                        fontSize: "18px",
                                        marginTop: "1px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.marketPicker.bind(this, quoteSymbol),
                                        className: "underline",
                                        style: {
                                            cursor: "pointer",
                                            color: isQuoteSelected ? "#2196f3" : ""
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: quoteSymbol,
                                        replace: true,
                                        noTip: true
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { style: { padding: "0 5px" } },
                                    "/"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.marketPicker.bind(this, baseSymbol),
                                        className: "underline",
                                        style: {
                                            cursor: "pointer",
                                            color: isBaseSelected ? "#2196f3" : ""
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: baseSymbol,
                                        replace: true,
                                        noTip: true
                                    })
                                )
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { className: "market-symbol" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    quoteSymbol + " : " + baseSymbol
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "label-actions" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                    component: "span",
                                    style: { padding: "5px 0 0 5px" },
                                    className: "stat-text",
                                    content: "exchange.trading_pair"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    {
                                        onClick: function onClick() {
                                            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].switchMarket();
                                        },
                                        to: "/market/" + baseSymbol + "_" + quoteSymbol,
                                        "data-intro": translator.translate("walkthrough.switch_button")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        className: "shuffle",
                                        name: "shuffle",
                                        title: "icons.shuffle"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: function onClick() {
                                            _this2._addMarket(_this2.props.quoteAsset.get("symbol"), _this2.props.baseAsset.get("symbol"));
                                        },
                                        "data-intro": translator.translate("walkthrough.favourite_button")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        className: starClass,
                                        name: "fi-star",
                                        title: "icons.fi_star.market"
                                    })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block vertical",
                            style: { overflow: "visible" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block wrap market-stats-container" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "market-stats stats top-stats" },
                                latestPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    ready: marketReady,
                                    price: latestPrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.latest"
                                }) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: "hide-order-1 stressed-stat daily_change " + dayChangeClass
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "b",
                                            { className: "value" },
                                            marketReady ? dayChangeWithSign : 0
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            " %"
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                        component: "div",
                                        className: "stat-text",
                                        content: "account.hour_24"
                                    })
                                ),
                                volumeBase >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    onClick: this.changeVolumeBase.bind(this),
                                    ready: marketReady,
                                    decimals: 0,
                                    volume: true,
                                    price: volume24h,
                                    className: "hide-order-2 clickable",
                                    base: volume24hAsset,
                                    market: marketID,
                                    content: "exchange.volume_24"
                                }) : null,
                                !hasPrediction && feedPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.feed_price"),
                                    ready: marketReady,
                                    className: "hide-order-3",
                                    price: feedPrice.toReal(),
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.feed_price"
                                }) : null,
                                !hasPrediction && feedPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.settle_price"),
                                    ready: marketReady,
                                    className: "hide-order-4",
                                    price: settlePrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.settle"
                                }) : null,
                                showCollateralRatio ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    object: collOrderObject,
                                    account: account
                                }) : null,
                                lowestCallPrice && showCallLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.call_limit"),
                                    ready: marketReady,
                                    className: "hide-order-5 is-call",
                                    price: lowestCallPrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "explorer.block.call_limit"
                                }) : null,
                                feedPrice && showCallLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.margin_price"),
                                    ready: marketReady,
                                    className: "hide-order-6 is-call",
                                    price: feedPrice.getSqueezePrice({
                                        real: true
                                    }),
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.squeeze"
                                }) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "market-stats stats top-stats" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: "stressed-stat input clickable",
                                        style: { padding: "16px" },
                                        onClick: function onClick() {
                                            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13___default.a.publish("chart_options", "open");
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "exchange.chart_modal" })
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_12__["default"],
                    {
                        id: "chart_options",
                        overlay: true,
                        modalHeader: "exchange.chart_modal",
                        noLogo: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        { className: "block-list no-border-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "header",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "exchange.chart_type" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                { className: "with-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        value: showDepthChart ? "depth_chart" : "price_chart",
                                        className: "settings-select",
                                        onChange: function onChange(e) {
                                            if (showDepthChart && e.target.value === "price_chart" || !showDepthChart && e.target.value === "market_depth") {
                                                _this2.props.onToggleCharts();
                                            }
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "option",
                                        { value: "market_depth" },
                                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("exchange.order_depth")
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "option",
                                        { value: "price_chart" },
                                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("exchange.price_history")
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        { className: "block-list no-border-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "header",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "exchange.chart_height" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    onKeyDown: function onKeyDown(e) {
                                        if (e.keyCode === 13) _this2.setChartHeight();
                                    },
                                    type: "number",
                                    value: this.state.chartHeight,
                                    onChange: function onChange(e) {
                                        return _this2.setState({
                                            chartHeight: e.target.value
                                        });
                                    }
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button no-margin",
                                        onClick: this.setChartHeight
                                    },
                                    "Set"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ExchangeHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeHeader);

/***/ }),

/***/ 2474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1217);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var PriceStatWithLabel = function (_React$Component) {
    _inherits(PriceStatWithLabel, _React$Component);

    function PriceStatWithLabel() {
        _classCallCheck(this, PriceStatWithLabel);

        var _this = _possibleConstructorReturn(this, (PriceStatWithLabel.__proto__ || Object.getPrototypeOf(PriceStatWithLabel)).call(this));

        _this.state = {
            change: null,
            curMarket: null,
            marketChange: false
        };
        return _this;
    }

    _createClass(PriceStatWithLabel, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.volume2 && nextProps.volume2 !== this.props.volume2) {
                return true;
            }
            return nextProps.price !== this.props.price || nextProps.ready !== this.props.ready;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var state = {
                change: 0
            };

            var market = nextProps.market;


            var checkMarketChange = this.state.curMarket !== market;
            var marketChange = this.state.curMarket == null ? false : checkMarketChange;

            state["marketChange"] = marketChange;
            state["curMarket"] = market;
            state["prevAsset"] = this.state.marketAsset;

            if (nextProps.ready && this.props.ready) {
                state["change"] = parseFloat(nextProps.price) - parseFloat(this.props.price);
            }

            this.setState(state);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild();
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                base = _props.base,
                quote = _props.quote,
                price = _props.price,
                content = _props.content,
                ready = _props.ready,
                volume = _props.volume,
                toolTip = _props.toolTip,
                ignoreColorChange = _props.ignoreColorChange;
            var _state = this.state,
                change = _state.change,
                marketChange = _state.marketChange;

            var changeClasses = null;
            if (!marketChange && change && change !== null && ignoreColorChange !== true) {
                changeClasses = change > 0 ? "pulsate green" : "pulsate red";
            }

            var value = !volume ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].price_text(price, quote, base) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_volume(price);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className, changeClasses),
                    onClick: this.props.onClick,
                    "data-place": "bottom",
                    "data-tip": toolTip
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "value stat-primary" },
                        !ready ? 0 : value,
                        "\xA0"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "symbol-text" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], { name: base.get("symbol") })
                    )
                ),
                content ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "stat-text" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: content })
                ) : null
            );
        }
    }]);

    return PriceStatWithLabel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PriceStatWithLabel);

/***/ }),

/***/ 2475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MarginPosition = function (_React$Component) {
    _inherits(MarginPosition, _React$Component);

    function MarginPosition() {
        _classCallCheck(this, MarginPosition);

        return _possibleConstructorReturn(this, (MarginPosition.__proto__ || Object.getPrototypeOf(MarginPosition)).apply(this, arguments));
    }

    _createClass(MarginPosition, [{
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_price(this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]), this.props.collateralAsset, this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]), this.props.debtAsset);
        }
    }, {
        key: "_getCollateralRatio",
        value: function _getCollateralRatio() {
            var co = this.props.object.toJS();
            var c = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.collateral, this.props.collateralAsset);
            var d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);
            return c / (d / this._getFeedPrice());
        }
    }, {
        key: "_getMR",
        value: function _getMR() {
            return this.props.debtAsset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
        }
    }, {
        key: "_getStatusClass",
        value: function _getStatusClass() {
            var cr = this._getCollateralRatio();
            var mr = this._getMR();

            if (isNaN(cr)) return null;
            if (cr < mr) {
                return "danger";
            } else if (cr < mr + 0.5) {
                return "warning";
            } else {
                return "";
            }
        }
    }, {
        key: "_getCRTip",
        value: function _getCRTip() {
            var statusClass = this._getStatusClass();
            var mr = this._getMR();
            if (!statusClass || statusClass === "") return null;

            if (statusClass === "danger") {
                return counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("tooltip.cr_danger", { mr: mr });
            } else if (statusClass === "warning") {
                return counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("tooltip.cr_warning", { mr: mr });
            } else {
                return null;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var object = this.props.object;

            var co = object.toJS();
            var cr = this._getCollateralRatio();
            var d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);

            var statusClass = this._getStatusClass();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className),
                    onClick: this.props.onClick,
                    "data-place": "bottom",
                    "data-tip": this._getCRTip()
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("value stat-primary", statusClass) },
                        common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(cr, 2)
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "stat-text" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.collateral_ratio" })
                )
            );
        }
    }]);

    return MarginPosition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarginPosition.propTypes = {
    debtAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    collateralAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
};

MarginPosition = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(MarginPosition);

var ExchangeHeaderCollateral = function (_React$Component2) {
    _inherits(ExchangeHeaderCollateral, _React$Component2);

    function ExchangeHeaderCollateral() {
        _classCallCheck(this, ExchangeHeaderCollateral);

        return _possibleConstructorReturn(this, (ExchangeHeaderCollateral.__proto__ || Object.getPrototypeOf(ExchangeHeaderCollateral)).apply(this, arguments));
    }

    _createClass(ExchangeHeaderCollateral, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                object = _props.object,
                account = _props.account;


            var debtAsset = object.getIn(["call_price", "quote", "asset_id"]);
            var collateralAsset = object.getIn(["call_price", "base", "asset_id"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarginPosition, _extends({
                debtAsset: debtAsset,
                collateralAsset: collateralAsset,
                account: account
            }, this.props));
        }
    }]);

    return ExchangeHeaderCollateral;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ExchangeHeaderCollateral.propTypes = {
    object: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired
};

ExchangeHeaderCollateral = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(ExchangeHeaderCollateral);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeHeaderCollateral);

/***/ }),

/***/ 2476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 *  Wrapper component for chatbro iframe
 *
 */

var ChatBro = function (_React$Component) {
    _inherits(ChatBro, _React$Component);

    function ChatBro() {
        _classCallCheck(this, ChatBro);

        return _possibleConstructorReturn(this, (ChatBro.__proto__ || Object.getPrototypeOf(ChatBro)).apply(this, arguments));
    }

    _createClass(ChatBro, [{
        key: "render",
        value: function render() {
            var frameHeight = this.props.height || "30%";

            var currentLocale = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings.get("locale");

            var chatUrl = null;
            switch (currentLocale) {
                default:
                    chatUrl = "https://chat.rudex.org/" + currentLocale + "/";
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                style: { height: frameHeight, width: "100%" },
                src: chatUrl,
                sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                style: { height: frameHeight, width: "100%" },
                src: chatUrl,
                sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
            });
        }
    }]);

    return ChatBro;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ChatBro.propTypes = {
    height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (ChatBro);

/***/ })

}]);
//# sourceMappingURL=exchange.js.map