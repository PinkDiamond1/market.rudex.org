(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 2398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2235);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(540);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2217);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2374);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2232);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1820);
/* harmony import */ var _Exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2399);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1832);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(407);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1833);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2236);
/* harmony import */ var components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2495);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2362);
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
                alt_container__WEBPACK_IMPORTED_MODULE_7__["default"],
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

/***/ 2399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2236);
/* harmony import */ var _MyOpenOrders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2400);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2441);
/* harmony import */ var _MarketHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2448);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2450);
/* harmony import */ var _BuySell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2457);
/* harmony import */ var _MarketPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2491);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(558);
/* harmony import */ var _TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2492);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1986);
/* harmony import */ var _DepthHighChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2499);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2502);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(580);
/* harmony import */ var _Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2504);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2401);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(407);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(702);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2234);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(573);
/* harmony import */ var _ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2510);
/* harmony import */ var _ExchangeHeader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2511);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(476);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(572);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1818);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1066);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _Chat_ChatBro__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2514);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2352);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(837);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33__);


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
                hidePanel: false,
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
        key: "_togglePanel",
        value: function _togglePanel() {
            this.setState({
                hidePanel: !this.state.hidePanel
            });
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
                buySellTop = _state2.buySellTop,
                hidePanel = _state2.hidePanel;

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

            var isPanelActive = !hidePanel && !smallScreen ? true : false;
            var verticalPanelToggle = !smallScreen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    className: "clickable",
                    style: { width: "auto", paddingTop: "calc(50vh - 120px)" },
                    onClick: this._togglePanel.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33__["Icon"], { type: hidePanel ? "caret-left" : "caret-right" })
            ) : null;

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
                            className: "grid-block shrink right-column no-overflow",
                            style: { maxWidth: 450 }
                        },
                        verticalPanelToggle,
                        !isPanelActive ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                style: { minWidth: 358 },
                                className: "grid-block shrink right-column no-overflow vertical no-padding"
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
                                        style: {
                                            textAlign: "left",
                                            paddingRight: 10
                                        }
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
                                        style: {
                                            textAlign: "left",
                                            paddingRight: 10
                                        }
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

/***/ 2441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2401);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(702);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2438);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2424);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2185);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2442);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_sticky_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(774);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var counterpart = __webpack_require__(562);

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

/***/ 2448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2401);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2234);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2438);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(702);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(701);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(760);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2424);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2185);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(407);
/* harmony import */ var _Utility_BlockDate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2449);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2238);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2423);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(573);
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

/***/ 2449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(760);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(770);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2238);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2423);
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
            if (!this.props.blockHeader) actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__["default"].getHeader.defer(this.props.block_number);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.blockHeader && !this.props.blockHeader) setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild, 1000);
            return np.blockHeader !== this.props.blockHeader;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                blockHeader = _props.blockHeader,
                tooltip = _props.tooltip,
                component = _props.component,
                format = _props.format;

            if (!blockHeader) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, {
                className: tooltip ? "tooltip" : "",
                "data-tip": tooltip ? blockHeader.timestamp : ""
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(blockHeader.timestamp, {
                    type: "date",
                    format: format
                })
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
            blockHeader: stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().blockHeaders.get(props.block_number)
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BlockDate);

/***/ }),

/***/ 2457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2310);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(701);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1833);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2438);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2185);
/* harmony import */ var _Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2458);
/* harmony import */ var _Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2459);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(573);
/* harmony import */ var _ExchangeInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2215);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1986);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2460);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1066);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(774);
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

            var translator = __webpack_require__(562);

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

/***/ 2491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2257);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2236);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(716);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2185);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(774);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(407);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1818);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2258);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(558);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2220);


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

            this.setState({
                inputValue: e.target.value.trim(),
                activeSearch: true,
                allMarkets: "",
                allIssuers: "",
                marketsList: "",
                issuersList: ""
            });

            /* Don't lookup invalid asset names */
            if (!isValidName) {
                this.setState({
                    activeSearch: false
                });
                return;
            }

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
                activeSearch: false,
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

/***/ 2492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2494);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2495);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var TradingView = __webpack_require__(2493);



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

            var disabled_features = ["header_saveload", "symbol_info", "symbol_search_hot_key", "border_around_the_chart", "header_symbol_search", "header_compare"];
            if (this.props.mobile) {
                disabled_features.push("chart_scroll");
                disabled_features.push("chart_zoom");
            }

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
                disabled_features: disabled_features,
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

/***/ 2493:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,o){var i=n({},t);for(var s in o)"object"!=typeof t[s]||null===t[s]||Array.isArray(t[s])?void 0!==o[s]&&(i[s]=o[s]):i[s]=e(t[s],o[s]);return i}function o(){return"1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)"}function i(t){window.addEventListener("DOMContentLoaded",t,!1)}var n=Object.assign||function(t){for(var e,o=arguments,i=1,n=arguments.length;i<n;i++){e=o[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},a=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(r,t),t.preset){var o=s[t.preset];o?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(o.disabled_features):this._options.disabled_features=o.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(o.enabled_features):this._options.enabled_features=o.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e+"",o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var t=this._getIFrameElement();t.contentWindow.destroyChart(),t.parentNode&&t.parentNode.removeChild(t)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o,i){this._innerAPI().saveChartToServer(t,e,o,i)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype._getIFrameElement=function(){var t=document.getElementById(this._id);if(null===t)throw new Error("There is no such iframe");return t},t.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},t.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var n=function(){i.removeEventListener("load",n,!1),i.contentWindow.widgetReady(function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){o[e].call(t)}i.contentWindow.initializationFinished()})};i.addEventListener("load",n,!1)},t.prototype._render=function(){var t=window;t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(t[this._id].chartContent={json:this._options.saved_data});var e=(this._options.library_path||"")+"static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}(),d=a;window.TradingView=window.TradingView||{},window.TradingView.version=o,t.version=o,t.onready=i,t.widget=d,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ 2494:
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

/***/ 2495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFeed", function() { return DataFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInfo", function() { return SymbolInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResolutionsFromBuckets", function() { return getResolutionsFromBuckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTVTimezone", function() { return getTVTimezone; });
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2235);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(407);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2496);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2236);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2220);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(558);
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

/***/ 2499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(582);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2500);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(558);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2494);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2185);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(573);


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

/***/ 2504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1820);
/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2505);
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
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ 2505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2506);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2331);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1833);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(407);
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

/***/ 2510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1959);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
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

/***/ 2511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(774);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2185);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2453);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2236);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(702);
/* harmony import */ var _PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2512);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(407);
/* harmony import */ var _ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2513);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1959);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(709);
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

            var translator = __webpack_require__(562);

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
                                        className: "stressed-stat input clickable hide-order-0",
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

/***/ 2512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2185);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(558);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2238);
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

/***/ 2513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(558);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1833);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
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

/***/ 2514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UuMWNjN2NiNGFjMDFkODhiYTkzNWQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvRXhjaGFuZ2VDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL09yZGVyQm9vay5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldEhpc3RvcnkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Jsb2NrRGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0J1eVNlbGwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRQaWNrZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9UcmFkaW5nVmlld1ByaWNlQ2hhcnQuanN4Iiwid2VicGFjazovLy8uL2NoYXJ0aW5nX2xpYnJhcnkvY2hhcnRpbmdfbGlicmFyeS5taW4uanMiLCJ3ZWJwYWNrOi8vL2FwcC9hc3NldHMvY29sb3JzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS90cmFkaW5nVmlld0NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0RlcHRoSGlnaENoYXJ0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTm90aWZpZXIvTm90aWZpZXJDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Ob3RpZmllci9Ob3RpZmllci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0NvbmZpcm1PcmRlck1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvRXhjaGFuZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9QcmljZVN0YXRXaXRoTGFiZWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZUhlYWRlckNvbGxhdGVyYWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9DaGF0L0NoYXRCcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBHYXRld2F5U3RvcmUgZnJvbSBcInN0b3Jlcy9HYXRld2F5U3RvcmVcIjtcclxuaW1wb3J0IEludGxTdG9yZSBmcm9tIFwic3RvcmVzL0ludGxTdG9yZVwiO1xyXG5pbXBvcnQgV2FsbGV0VW5sb2NrU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRVbmxvY2tTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBFeGNoYW5nZSBmcm9tIFwiLi9FeGNoYW5nZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCB7RW1pdHRlckluc3RhbmNlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcclxuaW1wb3J0IHtEYXRhRmVlZH0gZnJvbSBcImNvbXBvbmVudHMvRXhjaGFuZ2UvdHJhZGluZ1ZpZXdDbGFzc2VzXCI7XHJcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuLi9QYWdlNDA0L1BhZ2U0MDRcIjtcclxuXHJcbmNsYXNzIEV4Y2hhbmdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgc3ltYm9scyA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcmtldElELnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgIGlmIChzeW1ib2xzWzBdID09PSBzeW1ib2xzWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8UGFnZTQwNCBzdWJ0aXRsZT1cIm1hcmtldF9ub3RfZm91bmRfc3VidGl0bGVcIiAvPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgTWFya2V0c1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZSxcclxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIFdhbGxldFVubG9ja1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIEludGxTdG9yZVxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGluamVjdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogKCkgPT4gSW50bFN0b3JlLmdldFN0YXRlKCkuY3VycmVudExvY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NrZWRXYWxsZXRTdGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gV2FsbGV0VW5sb2NrU3RvcmUuZ2V0U3RhdGUoKS5sb2NrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRMaW1pdE9yZGVyczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0TGltaXRPcmRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRDYWxsT3JkZXJzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRDYWxsT3JkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRDYWxsczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuaW52ZXJ0ZWRDYWxscztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFNldHRsZU9yZGVyczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0U2V0dGxlT3JkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0RGF0YTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0RGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkudG90YWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0SGlzdG9yeTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWN0aXZlTWFya2V0SGlzdG9yeTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldFNpemU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmJ1Y2tldFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBidWNrZXRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5idWNrZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5sb3dlc3RDYWxsUHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2U6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmZlZWRQcmljZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15QWN0aXZlQWNjb3VudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2U6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5leGNoYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXREaXJlY3Rpb25zOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkubWFya2V0RGlyZWN0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRTdGF0cztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRSZWFkeTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9QRU5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VDb2luczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYnJpZGdlQ29pbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5pRGVwdGhDaGFydDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbmlEZXB0aENoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Q2hhdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdDaGF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZlZWQ6ICgpID0+IG5ldyBEYXRhRmVlZCgpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFja2VkR3JvdXBzQ29uZmlnOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS50cmFja2VkR3JvdXBzQ29uZmlnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuY3VycmVudEdyb3VwTGltaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEV4Y2hhbmdlU3Vic2NyaWJlclxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0PXtzeW1ib2xzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldD17c3ltYm9sc1sxXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBlbWl0dGVyID0gRW1pdHRlckluc3RhbmNlKCk7XHJcbmxldCBjYWxsTGlzdGVuZXIsXHJcbiAgICBsaW1pdExpc3RlbmVyLFxyXG4gICAgbmV3Q2FsbExpc3RlbmVyLFxyXG4gICAgZmVlZFVwZGF0ZUxpc3RlbmVyLFxyXG4gICAgc2V0dGxlT3JkZXJMaXN0ZW5lcjtcclxuXHJcbmNsYXNzIEV4Y2hhbmdlU3Vic2NyaWJlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGN1cnJlbnRBY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIHF1b3RlQXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGJhc2VBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY29yZUFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGN1cnJlbnRBY2NvdW50OiBcIjEuMi4zXCIsXHJcbiAgICAgICAgY29yZUFzc2V0OiBcIjEuMy4wXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7c3ViOiBudWxsfTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQgPSB0aGlzLl9zdWJUb01hcmtldC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5xdW90ZUFzc2V0ID09PSBudWxsIHx8IHRoaXMucHJvcHMuYmFzZUFzc2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucXVvdGVBc3NldC50b0pTICYmIHRoaXMucHJvcHMuYmFzZUFzc2V0LnRvSlMpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQodGhpcy5wcm9wcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2FkZE1hcmtldCh0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpLCB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW1pdHRlci5vbihcclxuICAgICAgICAgICAgXCJjYW5jZWwtb3JkZXJcIixcclxuICAgICAgICAgICAgKGxpbWl0TGlzdGVuZXIgPSBNYXJrZXRzQWN0aW9ucy5jYW5jZWxMaW1pdE9yZGVyU3VjY2VzcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGVtaXR0ZXIub24oXHJcbiAgICAgICAgICAgIFwiY2xvc2UtY2FsbFwiLFxyXG4gICAgICAgICAgICAoY2FsbExpc3RlbmVyID0gTWFya2V0c0FjdGlvbnMuY2xvc2VDYWxsT3JkZXJTdWNjZXNzKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGVtaXR0ZXIub24oXHJcbiAgICAgICAgICAgIFwiY2FsbC1vcmRlci11cGRhdGVcIixcclxuICAgICAgICAgICAgKG5ld0NhbGxMaXN0ZW5lciA9IGNhbGxfb3JkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHthc3NldF9pZDogY29CYXNlfSA9IGNhbGxfb3JkZXIuY2FsbF9wcmljZS5iYXNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHthc3NldF9pZDogY29RdW90ZX0gPSBjYWxsX29yZGVyLmNhbGxfcHJpY2UucXVvdGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFzZUlkID0gdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVJZCA9IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJpZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAoY29CYXNlID09PSBiYXNlSWQgfHwgY29CYXNlID09PSBxdW90ZUlkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChjb1F1b3RlID09PSBiYXNlSWQgfHwgY29RdW90ZSA9PT0gcXVvdGVJZClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNhbGxPcmRlclVwZGF0ZShjYWxsX29yZGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGVtaXR0ZXIub24oXHJcbiAgICAgICAgICAgIFwiYml0YXNzZXQtdXBkYXRlXCIsXHJcbiAgICAgICAgICAgIChmZWVkVXBkYXRlTGlzdGVuZXIgPSBNYXJrZXRzQWN0aW9ucy5mZWVkVXBkYXRlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZW1pdHRlci5vbihcclxuICAgICAgICAgICAgXCJzZXR0bGUtb3JkZXItdXBkYXRlXCIsXHJcbiAgICAgICAgICAgIChzZXR0bGVPcmRlckxpc3RlbmVyID0gb2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB7aXNNYXJrZXRBc3NldCwgbWFya2V0QXNzZXR9ID0gbWFya2V0X3V0aWxzLmlzTWFya2V0QXNzZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZUFzc2V0XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBpc01hcmtldEFzc2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0QXNzZXQuaWQgPT09IG9iamVjdC5iYWxhbmNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5zZXR0bGVPcmRlclVwZGF0ZShtYXJrZXRBc3NldC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMucXVvdGVBc3NldCA9PT0gbnVsbCB8fCBuZXh0UHJvcHMuYmFzZUFzc2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogUHJlZGljdGlvbiBtYXJrZXRzIHNob3VsZCBvbmx5IGJlIHNob3duIGluIG9uZSBkaXJlY3Rpb24sIGlmIHRoZSBsaW5rIGdvZXMgdG8gdGhlIHdyb25nIG9uZSB3ZSBmbGlwIGl0ICovXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFzZUFzc2V0ICYmXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlQXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXHJcbiAgICAgICAgICAgICAgICBgL21hcmtldC8ke25leHRQcm9wcy5iYXNlQXNzZXQuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcclxuICAgICAgICAgICAgICAgICl9XyR7bmV4dFByb3BzLnF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXh0UHJvcHMucXVvdGVBc3NldCAmJiBuZXh0UHJvcHMuYmFzZUFzc2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJUb01hcmtldChuZXh0UHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSAhPT1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIikgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdWIgPSB0aGlzLnN0YXRlLnN1Yi5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnVuU3Vic2NyaWJlTWFya2V0KGN1cnJlbnRTdWJbMF0sIGN1cnJlbnRTdWJbMV0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQobmV4dFByb3BzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHtxdW90ZUFzc2V0LCBiYXNlQXNzZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAocXVvdGVBc3NldCA9PT0gbnVsbCB8fCBiYXNlQXNzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoXHJcbiAgICAgICAgICAgIHF1b3RlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIGJhc2VBc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgZW1pdHRlci5vZmYoXCJjYW5jZWwtb3JkZXJcIiwgbGltaXRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKFwiY2xvc2UtY2FsbFwiLCBjYWxsTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBlbWl0dGVyLm9mZihcImNhbGwtb3JkZXItdXBkYXRlXCIsIG5ld0NhbGxMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKFwiYml0YXNzZXQtdXBkYXRlXCIsIGZlZWRVcGRhdGVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKFwic2V0dGxlLW9yZGVyLXVwZGF0ZVwiLCBzZXR0bGVPcmRlckxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3N1YlRvTWFya2V0KHByb3BzLCBuZXdCdWNrZXRTaXplLCBuZXdHcm91cExpbWl0KSB7XHJcbiAgICAgICAgbGV0IHtxdW90ZUFzc2V0LCBiYXNlQXNzZXQsIGJ1Y2tldFNpemUsIGN1cnJlbnRHcm91cE9yZGVyTGltaXR9ID0gcHJvcHM7XHJcbiAgICAgICAgaWYgKG5ld0J1Y2tldFNpemUpIHtcclxuICAgICAgICAgICAgYnVja2V0U2l6ZSA9IG5ld0J1Y2tldFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdHcm91cExpbWl0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQgPSBuZXdHcm91cExpbWl0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVvdGVBc3NldC5nZXQoXCJpZFwiKSAmJiBiYXNlQXNzZXQuZ2V0KFwiaWRcIikpIHtcclxuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuc3Vic2NyaWJlTWFya2V0LmRlZmVyKFxyXG4gICAgICAgICAgICAgICAgYmFzZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldCxcclxuICAgICAgICAgICAgICAgIGJ1Y2tldFNpemUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3ViOiBgJHtxdW90ZUFzc2V0LmdldChcImlkXCIpfV8ke2Jhc2VBc3NldC5nZXQoXCJpZFwiKX1gXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucXVvdGVBc3NldCA9PT0gbnVsbCB8fCB0aGlzLnByb3BzLmJhc2VBc3NldCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwibWFya2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RXhjaGFuZ2VcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgc3ViPXt0aGlzLnN0YXRlLnN1Yn1cclxuICAgICAgICAgICAgICAgIHN1YlRvTWFya2V0PXt0aGlzLl9zdWJUb01hcmtldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5FeGNoYW5nZVN1YnNjcmliZXIgPSBCaW5kVG9DaGFpblN0YXRlKEV4Y2hhbmdlU3Vic2NyaWJlciwge1xyXG4gICAgc2hvd19sb2FkZXI6IHRydWVcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZUNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5pbXBvcnQge015T3Blbk9yZGVyc30gZnJvbSBcIi4vTXlPcGVuT3JkZXJzXCI7XHJcbmltcG9ydCBPcmRlckJvb2sgZnJvbSBcIi4vT3JkZXJCb29rXCI7XHJcbmltcG9ydCBNYXJrZXRIaXN0b3J5IGZyb20gXCIuL01hcmtldEhpc3RvcnlcIjtcclxuaW1wb3J0IE15TWFya2V0cyBmcm9tIFwiLi9NeU1hcmtldHNcIjtcclxuaW1wb3J0IEJ1eVNlbGwgZnJvbSBcIi4vQnV5U2VsbFwiO1xyXG5pbXBvcnQgTWFya2V0UGlja2VyIGZyb20gXCIuL01hcmtldFBpY2tlclwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG4vLyBpbXBvcnQgUHJpY2VDaGFydEQzIGZyb20gXCIuL1ByaWNlQ2hhcnREM1wiO1xyXG5pbXBvcnQgVHJhZGluZ1ZpZXdQcmljZUNoYXJ0IGZyb20gXCIuL1RyYWRpbmdWaWV3UHJpY2VDaGFydFwiO1xyXG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XHJcbmltcG9ydCBEZXB0aEhpZ2hDaGFydCBmcm9tIFwiLi9EZXB0aEhpZ2hDaGFydFwiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBCb3Jyb3dNb2RhbCBmcm9tIFwiLi4vTW9kYWwvQm9ycm93TW9kYWxcIjtcclxuaW1wb3J0IG5vdGlmeSBmcm9tIFwiYWN0aW9ucy9Ob3RpZmljYXRpb25BY3Rpb25zXCI7XHJcbmltcG9ydCBBY2NvdW50Tm90aWZpY2F0aW9ucyBmcm9tIFwiLi4vTm90aWZpZXIvTm90aWZpZXJDb250YWluZXJcIjtcclxuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBtYXJrZXRfdXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcclxuaW1wb3J0IHtBc3NldCwgUHJpY2UsIExpbWl0T3JkZXJDcmVhdGV9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgQ29uZmlybU9yZGVyTW9kYWwgZnJvbSBcIi4vQ29uZmlybU9yZGVyTW9kYWxcIjtcclxuaW1wb3J0IEV4Y2hhbmdlSGVhZGVyIGZyb20gXCIuL0V4Y2hhbmdlSGVhZGVyXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcclxuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IENoYXRCcm8gZnJvbSBcIi4uL0NoYXQvQ2hhdEJyb1wiO1xyXG5cclxuLy8gSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcclxuLy8gICAgIGdsb2JhbDoge1xyXG4vLyAgICAgICAgIHVzZVVUQzogZmFsc2VcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcbmltcG9ydCBndWlkZSBmcm9tIFwiaW50cm8uanNcIjtcclxuaW1wb3J0IHRyYW5zbGF0b3IgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7SWNvbiBhcyBBbnRJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5jbGFzcyBFeGNoYW5nZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIG1hcmtldENhbGxPcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgICBhY3RpdmVNYXJrZXRIaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgdmlld1NldHRpbmdzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBtYXJrZXRDYWxsT3JkZXJzOiBbXSxcclxuICAgICAgICBhY3RpdmVNYXJrZXRIaXN0b3J5OiB7fSxcclxuICAgICAgICB2aWV3U2V0dGluZ3M6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLl9pbml0aWFsU3RhdGUocHJvcHMpLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uVHlwZToge1xyXG4gICAgICAgICAgICAgICAgYmlkOiBwcm9wcy5leGNoYW5nZS5nZXRJbihbXCJsYXN0RXhwaXJhdGlvblwiLCBcImJpZFwiXSkgfHwgXCJZRUFSXCIsXHJcbiAgICAgICAgICAgICAgICBhc2s6IHByb3BzLmV4Y2hhbmdlLmdldEluKFtcImxhc3RFeHBpcmF0aW9uXCIsIFwiYXNrXCJdKSB8fCBcIllFQVJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uQ3VzdG9tVGltZToge1xyXG4gICAgICAgICAgICAgICAgYmlkOiBtb21lbnQoKS5hZGQoMSwgXCJkYXlcIiksXHJcbiAgICAgICAgICAgICAgICBhc2s6IG1vbWVudCgpLmFkZCgxLCBcImRheVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ2V0V2luZG93U2l6ZSA9IGRlYm91bmNlKHRoaXMuX2dldFdpbmRvd1NpemUuYmluZCh0aGlzKSwgMTUwKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cyA9IHRoaXMuX2NoZWNrRmVlU3RhdHVzLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUV4cGlyYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ3VzdG9tRXhwaXJhdGlvbkNoYW5nZSA9IHRoaXMuX2hhbmRsZUN1c3RvbUV4cGlyYXRpb25DaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucHNJbml0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXhwaXJhdGlvbkNoYW5nZSh0eXBlLCBlKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyYXRpb25UeXBlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlLFxyXG4gICAgICAgICAgICBbdHlwZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBcIlNQRUNJRklDXCIpIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldEV4Y2hhbmdlTGFzdEV4cGlyYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgLi4uKCh0aGlzLnByb3BzLmV4Y2hhbmdlLmhhcyhcImxhc3RFeHBpcmF0aW9uXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5leGNoYW5nZS5nZXQoXCJsYXN0RXhwaXJhdGlvblwiKS50b0pTKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAge30pLFxyXG4gICAgICAgICAgICAgICAgW3R5cGVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBleHBpcmF0aW9uVHlwZTogZXhwaXJhdGlvblR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlQ3VzdG9tRXhwaXJhdGlvbkNoYW5nZSh0eXBlLCB0aW1lKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyYXRpb25DdXN0b21UaW1lID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmV4cGlyYXRpb25DdXN0b21UaW1lLFxyXG4gICAgICAgICAgICBbdHlwZV06IHRpbWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXhwaXJhdGlvbkN1c3RvbVRpbWU6IGV4cGlyYXRpb25DdXN0b21UaW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgRVhQSVJBVElPTlMgPSB7XHJcbiAgICAgICAgSE9VUjoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCIxIGhvdXJcIixcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgbW9tZW50KClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkKDEsIFwiaG91clwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiMTJIT1VSU1wiOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIjEyIGhvdXJzXCIsXHJcbiAgICAgICAgICAgIGdldDogKCkgPT5cclxuICAgICAgICAgICAgICAgIG1vbWVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgxMiwgXCJob3VyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlT2YoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIyNEhPVVJTXCI6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiMjQgaG91cnNcIixcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgbW9tZW50KClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkKDEsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlT2YoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCI3REFZU1wiOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIjcgZGF5c1wiLFxyXG4gICAgICAgICAgICBnZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICBtb21lbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGQoNywgXCJkYXlcIilcclxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBNT05USDoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCIzMCBkYXlzXCIsXHJcbiAgICAgICAgICAgIGdldDogKCkgPT5cclxuICAgICAgICAgICAgICAgIG1vbWVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgzMCwgXCJkYXlcIilcclxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBZRUFSOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIjEgeWVhclwiLFxyXG4gICAgICAgICAgICBnZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICBtb21lbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGQoMSwgXCJ5ZWFyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlT2YoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU1BFQ0lGSUM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3BlY2lmaWNcIixcclxuICAgICAgICAgICAgZ2V0OiB0eXBlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmV4cGlyYXRpb25DdXN0b21UaW1lW3R5cGVdLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX2luaXRpYWxTdGF0ZShwcm9wcykge1xyXG4gICAgICAgIGxldCB3cyA9IHByb3BzLnZpZXdTZXR0aW5ncztcclxuICAgICAgICBsZXQgYmlkID0ge1xyXG4gICAgICAgICAgICBmb3JTYWxlVGV4dDogXCJcIixcclxuICAgICAgICAgICAgdG9SZWNlaXZlVGV4dDogXCJcIixcclxuICAgICAgICAgICAgcHJpY2VUZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogcHJvcHMucXVvdGVBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJpZC5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYmlkLmZvcl9zYWxlLCBxdW90ZTogYmlkLnRvX3JlY2VpdmV9KTtcclxuICAgICAgICBsZXQgYXNrID0ge1xyXG4gICAgICAgICAgICBmb3JTYWxlVGV4dDogXCJcIixcclxuICAgICAgICAgICAgdG9SZWNlaXZlVGV4dDogXCJcIixcclxuICAgICAgICAgICAgcHJpY2VUZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5xdW90ZUFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5xdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFzay5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYXNrLmZvcl9zYWxlLCBxdW90ZTogYXNrLnRvX3JlY2VpdmV9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGlzdG9yeTogW10sXHJcbiAgICAgICAgICAgIGJ1eVNlbGxPcGVuOiB3cy5nZXQoXCJidXlTZWxsT3BlblwiLCB0cnVlKSxcclxuICAgICAgICAgICAgYmlkLFxyXG4gICAgICAgICAgICBhc2ssXHJcbiAgICAgICAgICAgIGZsaXBCdXlTZWxsOiB3cy5nZXQoXCJmbGlwQnV5U2VsbFwiLCBmYWxzZSksXHJcbiAgICAgICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0RlcHRoQ2hhcnQ6IHdzLmdldChcInNob3dEZXB0aENoYXJ0XCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgbGVmdE9yZGVyQm9vazogd3MuZ2V0KFwibGVmdE9yZGVyQm9va1wiLCB0cnVlKSxcclxuICAgICAgICAgICAgYnV5RGlmZjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGxEaWZmOiBmYWxzZSxcclxuICAgICAgICAgICAgYnV5U2VsbFRvcDogd3MuZ2V0KFwiYnV5U2VsbFRvcFwiLCB0cnVlKSxcclxuICAgICAgICAgICAgYnV5RmVlQXNzZXRJZHg6IHdzLmdldChcImJ1eUZlZUFzc2V0SWR4XCIsIDApLFxyXG4gICAgICAgICAgICBzZWxsRmVlQXNzZXRJZHg6IHdzLmdldChcInNlbGxGZWVBc3NldElkeFwiLCAwKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgaGlkZVBhbmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgY2hhcnRIZWlnaHQ6IHdzLmdldChcImNoYXJ0SGVpZ2h0XCIsIDYwMCksXHJcbiAgICAgICAgICAgIGN1cnJlbnRQZXJpb2Q6IHdzLmdldChcImN1cnJlbnRQZXJpb2RcIiwgMzYwMCAqIDI0ICogMzAgKiAzKSAvLyAzIG1vbnRoc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX2dldExhc3RNYXJrZXRLZXkoKSB7XHJcbiAgICAgICAgY29uc3QgY2hhaW5JRCA9IEFwaXMuaW5zdGFuY2UoKS5jaGFpbl9pZDtcclxuICAgICAgICByZXR1cm4gYGxhc3RNYXJrZXQke2NoYWluSUQgPyBcIl9cIiArIGNoYWluSUQuc3Vic3RyKDAsIDgpIDogXCJcIn1gO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIE1hcmtldHNBY3Rpb25zLmdldFRyYWNrZWRHcm91cHNDb25maWcoKTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nLmRlZmVyKHtcclxuICAgICAgICAgICAgW3RoaXMuX2dldExhc3RNYXJrZXRLZXkoKV06XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpICtcclxuICAgICAgICAgICAgICAgIFwiX1wiICtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9nZXRXaW5kb3dTaXplLCB7XHJcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xyXG4gICAgICAgIGlmICghbnAubWFya2V0UmVhZHkgJiYgIXRoaXMucHJvcHMubWFya2V0UmVhZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHJvcHNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG5wKSB7XHJcbiAgICAgICAgICAgIGlmIChucC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wc0NoYW5nZWQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzQ2hhbmdlZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucFtrZXldLCB0aGlzLnByb3BzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzQ2hhbmdlZCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb3BzQ2hhbmdlZCB8fCAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0ZlZVN0YXR1cyhcclxuICAgICAgICBhc3NldHMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29yZUFzc2V0LFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhY2NvdW50ID0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGZlZVN0YXR1cyA9IHt9O1xyXG4gICAgICAgIGxldCBwID0gW107XHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgIHAucHVzaChcclxuICAgICAgICAgICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBmZWVJRDogYS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxpbWl0X29yZGVyX2NyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHApXHJcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHMuZm9yRWFjaCgoYSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzW2EuZ2V0KFwiaWRcIildID0gc3RhdHVzW2lkeF07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3codGhpcy5zdGF0ZS5mZWVTdGF0dXMsIGZlZVN0YXR1cykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja0ZlZVN0YXR1c0FzeW5jIGVycm9yXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmZWVTdGF0dXM6IHt9fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRXaW5kb3dTaXplKCkge1xyXG4gICAgICAgIGxldCB7aW5uZXJIZWlnaHQsIGlubmVyV2lkdGh9ID0gd2luZG93O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgaW5uZXJIZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIGlubmVyV2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGlubmVyV2lkdGhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBjZW50ZXJDb250YWluZXIgPSB0aGlzLnJlZnMuY2VudGVyO1xyXG4gICAgICAgICAgICBpZiAoY2VudGVyQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBQcy51cGRhdGUoY2VudGVyQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9pbml0UHNDb250YWluZXIoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmV4Y2hhbmdlLmdldChcInR1dG9yaWFsU2hvd25cIikgJiZcclxuICAgICAgICAgICAgcHJldlByb3BzLmNvcmVBc3NldCAmJlxyXG4gICAgICAgICAgICBwcmV2U3RhdGUuZmVlU3RhdHVzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50dXRvcmlhbFNob3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1dG9yaWFsU2hvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLnByb3BzLnNldHRpbmdzLmdldChcInRoZW1lc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBndWlkZVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRyb0pzKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDbGFzczogdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodENsYXNzOiB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0J1bGxldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlTmV4dDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVByZXY6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRMYWJlbDogdHJhbnNsYXRvci50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLm5leHRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2TGFiZWw6IHRyYW5zbGF0b3IudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5wcmV2X2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcExhYmVsOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guc2tpcF9sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmVMYWJlbDogdHJhbnNsYXRvci50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLmRvbmVfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuc2V0RXhjaGFuZ2VUdXRvcmlhbFNob3duLmRlZmVyKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0UHNDb250YWluZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVmcy5jZW50ZXIgJiYgdGhpcy5wc0luaXQpIHtcclxuICAgICAgICAgICAgbGV0IGNlbnRlckNvbnRhaW5lciA9IHRoaXMucmVmcy5jZW50ZXI7XHJcbiAgICAgICAgICAgIGlmIChjZW50ZXJDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIFBzLmluaXRpYWxpemUoY2VudGVyQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHNJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICB0aGlzLl9pbml0UHNDb250YWluZXIoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0ICE9PSB0aGlzLnByb3BzLnF1b3RlQXNzZXQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldCAhPT0gdGhpcy5wcm9wcy5iYXNlQXNzZXQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRBY2NvdW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jb3JlQXNzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVBc3NldFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50QWNjb3VudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSAhPT1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIikgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9pbml0aWFsU3RhdGUobmV4dFByb3BzKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgIFt0aGlzLl9nZXRMYXN0TWFya2V0S2V5KCldOlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuc3ViICYmIG5leHRQcm9wcy5idWNrZXRTaXplICE9PSB0aGlzLnByb3BzLmJ1Y2tldFNpemUpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZUJ1Y2tldFNpemUobmV4dFByb3BzLmJ1Y2tldFNpemUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9nZXRXaW5kb3dTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RmVlQXNzZXRzKHF1b3RlLCBiYXNlLCBjb3JlQXNzZXQpIHtcclxuICAgICAgICBsZXQge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2ZlZVN0YXR1c30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRNaXNzaW5nQXNzZXQodGFyZ2V0LCBhc3NldCkge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmluZGV4T2YoYXNzZXQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goYXNzZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYXNGZWVQb29sQmFsYW5jZShpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VsbEFzc2V0cyA9IFtjb3JlQXNzZXQsIHF1b3RlID09PSBjb3JlQXNzZXQgPyBiYXNlIDogcXVvdGVdO1xyXG4gICAgICAgIGFkZE1pc3NpbmdBc3NldChzZWxsQXNzZXRzLCBxdW90ZSk7XHJcbiAgICAgICAgYWRkTWlzc2luZ0Fzc2V0KHNlbGxBc3NldHMsIGJhc2UpO1xyXG4gICAgICAgIC8vIGxldCBzZWxsRmVlQXNzZXQ7XHJcblxyXG4gICAgICAgIGxldCBidXlBc3NldHMgPSBbY29yZUFzc2V0LCBiYXNlID09PSBjb3JlQXNzZXQgPyBxdW90ZSA6IGJhc2VdO1xyXG4gICAgICAgIGFkZE1pc3NpbmdBc3NldChidXlBc3NldHMsIHF1b3RlKTtcclxuICAgICAgICBhZGRNaXNzaW5nQXNzZXQoYnV5QXNzZXRzLCBiYXNlKTtcclxuICAgICAgICAvLyBsZXQgYnV5RmVlQXNzZXQ7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlcyA9IHt9O1xyXG5cclxuICAgICAgICBjdXJyZW50QWNjb3VudFxyXG4gICAgICAgICAgICAuZ2V0KFwiYmFsYW5jZXNcIiwgW10pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGJhbGFuY2UsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFtcIjEuMy4wXCIsIHF1b3RlLmdldChcImlkXCIpLCBiYXNlLmdldChcImlkXCIpXS5pbmRleE9mKGlkKSA+PSAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoYmFsYW5jZSwgaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlc1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogYmFsYW5jZU9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBmZWU6IHRoaXMuX2dldEZlZShDaGFpblN0b3JlLmdldEFzc2V0KGlkKSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJBbmREZWZhdWx0KGFzc2V0cywgYmFsYW5jZXMsIGlkeCkge1xyXG4gICAgICAgICAgICBsZXQgYXNzZXQ7XHJcbiAgICAgICAgICAgIC8qIE9ubHkga2VlcCBhc3NldHMgZm9yIHdoaWNoIHRoZSB1c2VyIGhhcyBhIGJhbGFuY2UgbGFyZ2VyIHRoYW4gdGhlIGZlZSwgYW5kIGZvciB3aGljaCB0aGUgZmVlIHBvb2wgaXMgdmFsaWQgKi9cclxuICAgICAgICAgICAgYXNzZXRzID0gYXNzZXRzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZXNbYS5nZXQoXCJpZFwiKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0ZlZVBvb2xCYWxhbmNlKGEuZ2V0KFwiaWRcIikpICYmIGhhc0JhbGFuY2UoYS5nZXQoXCJpZFwiKSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyogSWYgdGhlIHVzZXIgaGFzIG5vIHZhbGlkIGJhbGFuY2VzLCBkZWZhdWx0IHRvIGNvcmUgZmVlICovXHJcbiAgICAgICAgICAgIGlmICghYXNzZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBjb3JlQXNzZXQ7XHJcbiAgICAgICAgICAgICAgICBhc3NldHMucHVzaChjb3JlQXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgLyogSWYgdGhlIHVzZXIgaGFzIGJhbGFuY2VzLCB1c2UgdGhlIHN0b3JlZCBpZHggdmFsdWUgdW5sZXNzIHRoYXQgYXNzZXQgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSovXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldCA9IGFzc2V0c1tNYXRoLm1pbihhc3NldHMubGVuZ3RoIC0gMSwgaWR4KV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7YXNzZXRzLCBhc3NldH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQge2Fzc2V0czogc2VsbEZlZUFzc2V0cywgYXNzZXQ6IHNlbGxGZWVBc3NldH0gPSBmaWx0ZXJBbmREZWZhdWx0KFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRzLFxyXG4gICAgICAgICAgICBiYWxhbmNlcyxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxsRmVlQXNzZXRJZHhcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCB7YXNzZXRzOiBidXlGZWVBc3NldHMsIGFzc2V0OiBidXlGZWVBc3NldH0gPSBmaWx0ZXJBbmREZWZhdWx0KFxyXG4gICAgICAgICAgICBidXlBc3NldHMsXHJcbiAgICAgICAgICAgIGJhbGFuY2VzLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJ1eUZlZUFzc2V0SWR4XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGxGZWUgPSB0aGlzLl9nZXRGZWUoc2VsbEZlZUFzc2V0KTtcclxuICAgICAgICBsZXQgYnV5RmVlID0gdGhpcy5fZ2V0RmVlKGJ1eUZlZUFzc2V0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsbEZlZUFzc2V0LFxyXG4gICAgICAgICAgICBzZWxsRmVlQXNzZXRzLFxyXG4gICAgICAgICAgICBzZWxsRmVlLFxyXG4gICAgICAgICAgICBidXlGZWVBc3NldCxcclxuICAgICAgICAgICAgYnV5RmVlQXNzZXRzLFxyXG4gICAgICAgICAgICBidXlGZWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRGZWUoYXNzZXQgPSB0aGlzLnByb3BzLmNvcmVBc3NldCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmVlU3RhdHVzW2Fzc2V0LmdldChcImlkXCIpXSAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZlZVN0YXR1c1thc3NldC5nZXQoXCJpZFwiKV0uZmVlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfdmVyaWZ5RmVlKGZlZSwgc2VsbCwgc2VsbEJhbGFuY2UsIGNvcmVCYWxhbmNlKSB7XHJcbiAgICAgICAgbGV0IGNvcmVGZWUgPSB0aGlzLl9nZXRGZWUoKTtcclxuXHJcbiAgICAgICAgaWYgKGZlZS5hc3NldF9pZCA9PT0gXCIxLjMuMFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3JlRmVlLmdldEFtb3VudCgpIDw9IGNvcmVCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLjMuMFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc2VsbFN1bSA9XHJcbiAgICAgICAgICAgICAgICBzZWxsLmFzc2V0X2lkID09PSBmZWUuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICA/IGZlZS5nZXRBbW91bnQoKSArIHNlbGwuZ2V0QW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGwuZ2V0QW1vdW50KCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxsU3VtIDw9IHNlbGxCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdWZmaWNpZW50IGJhbGFuY2UgaW4gYXNzZXQgdG8gcGF5IGZlZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlZS5hc3NldF9pZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIGNvcmVGZWUuZ2V0QW1vdW50KCkgPD0gY29yZUJhbGFuY2UgJiZcclxuICAgICAgICAgICAgICAgIGZlZS5hc3NldF9pZCAhPT0gXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VmZmljaWVudCBiYWxhbmNlIGluIGNvcmUgYXNzZXQgdG8gcGF5IGZlZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS4zLjBcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBVbmFibGUgdG8gcGF5IGZlZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVMaW1pdE9yZGVyQ29uZmlybShcclxuICAgICAgICBidXlBc3NldCxcclxuICAgICAgICBzZWxsQXNzZXQsXHJcbiAgICAgICAgc2VsbEJhbGFuY2UsXHJcbiAgICAgICAgY29yZUJhbGFuY2UsXHJcbiAgICAgICAgZmVlQXNzZXQsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBzaG9ydCA9IHRydWUsXHJcbiAgICAgICAgZVxyXG4gICAgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7aGlnaGVzdEJpZCwgbG93ZXN0QXNrfSA9IHRoaXMucHJvcHMubWFya2V0RGF0YTtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIl07XHJcblxyXG4gICAgICAgIHNlbGxCYWxhbmNlID0gY3VycmVudC5mb3Jfc2FsZS5jbG9uZShcclxuICAgICAgICAgICAgc2VsbEJhbGFuY2VcclxuICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoQ2hhaW5TdG9yZS5nZXRPYmplY3Qoc2VsbEJhbGFuY2UpLnRvSlMoKS5iYWxhbmNlLCAxMClcclxuICAgICAgICAgICAgICAgIDogMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29yZUJhbGFuY2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGNvcmVCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlKS50b0pTKCkuYmFsYW5jZSwgMTApXHJcbiAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZlZSA9IHRoaXMuX2dldEZlZShmZWVBc3NldCk7XHJcbiAgICAgICAgbGV0IGZlZUlEID0gdGhpcy5fdmVyaWZ5RmVlKFxyXG4gICAgICAgICAgICBmZWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQuZm9yX3NhbGUsXHJcbiAgICAgICAgICAgIHNlbGxCYWxhbmNlLmdldEFtb3VudCgpLFxyXG4gICAgICAgICAgICBjb3JlQmFsYW5jZS5nZXRBbW91bnQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCFmZWVJRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluc3VmZmljaWVudCBmdW5kcyB0byBwYXkgZmVlc1wiLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImJ1eVwiICYmIGxvd2VzdEFzaykge1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRoaXMuc3RhdGUuYmlkLnByaWNlLnRvUmVhbCgpIC8gbG93ZXN0QXNrLmdldFByaWNlKCk7XHJcbiAgICAgICAgICAgIGlmIChkaWZmID4gMS4yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMuYnV5LnNob3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBidXlEaWZmOiBkaWZmXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzZWxsXCIgJiYgaGlnaGVzdEJpZCkge1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9XHJcbiAgICAgICAgICAgICAgICAxIC8gKHRoaXMuc3RhdGUuYXNrLnByaWNlLnRvUmVhbCgpIC8gaGlnaGVzdEJpZC5nZXRQcmljZSgpKTtcclxuICAgICAgICAgICAgaWYgKGRpZmYgPiAxLjIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5zZWxsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxsRGlmZjogZGlmZlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpc1ByZWRpY3Rpb25NYXJrZXQgPSBzZWxsQXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIlxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudC5mb3Jfc2FsZS5ndChzZWxsQmFsYW5jZSkgJiYgIWlzUHJlZGljdGlvbk1hcmtldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5zdWZmaWNpZW50IGZ1bmRzIHRvIHBsYWNlIG9yZGVyLCB5b3UgbmVlZCBhdCBsZWFzdCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5mb3Jfc2FsZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldC5nZXQoXCJzeW1ib2xcIiksXHJcbiAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuZm9yX3NhbGUuZ2V0QW1vdW50KCkgPiAwICYmXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnRvX3JlY2VpdmUuZ2V0QW1vdW50KCkgPiAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vdGlmeS5hZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBhbW91bnQgYW5kIHByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcInNlbGxcIiAmJiBpc1ByZWRpY3Rpb25NYXJrZXQgJiYgc2hvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVByZWRpY3Rpb25TaG9ydChmZWVJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVMaW1pdE9yZGVyKHR5cGUsIGZlZUlEKTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlTGltaXRPcmRlcih0eXBlLCBmZWVJRCkge1xyXG4gICAgICAgIGxldCBhY3Rpb25UeXBlID0gdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIjtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlW2FjdGlvblR5cGVdO1xyXG5cclxuICAgICAgICBsZXQgZXhwaXJhdGlvblRpbWUgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlW2FjdGlvblR5cGVdID09PSBcIlNQRUNJRklDXCIpIHtcclxuICAgICAgICAgICAgZXhwaXJhdGlvblRpbWUgPSB0aGlzLkVYUElSQVRJT05TW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5leHBpcmF0aW9uVHlwZVthY3Rpb25UeXBlXVxyXG4gICAgICAgICAgICBdLmdldChhY3Rpb25UeXBlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleHBpcmF0aW9uVGltZSA9IHRoaXMuRVhQSVJBVElPTlNbXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlW2FjdGlvblR5cGVdXHJcbiAgICAgICAgICAgIF0uZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcmRlciA9IG5ldyBMaW1pdE9yZGVyQ3JlYXRlKHtcclxuICAgICAgICAgICAgZm9yX3NhbGU6IGN1cnJlbnQuZm9yX3NhbGUsXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb246IG5ldyBEYXRlKGV4cGlyYXRpb25UaW1lIHx8IGZhbHNlKSxcclxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogY3VycmVudC50b19yZWNlaXZlLFxyXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIGZlZToge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGZlZUlELFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7bWFya2V0TmFtZSwgZmlyc3R9ID0gbWFya2V0X3V0aWxzLmdldE1hcmtldE5hbWUoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZUFzc2V0LFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGludmVydGVkID0gdGhpcy5wcm9wcy5tYXJrZXREaXJlY3Rpb25zLmdldChtYXJrZXROYW1lKTtcclxuICAgICAgICBjb25zdCBzaG91bGRGbGlwID1cclxuICAgICAgICAgICAgKGludmVydGVkICYmIGZpcnN0LmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSkgfHxcclxuICAgICAgICAgICAgKCFpbnZlcnRlZCAmJiBmaXJzdC5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIikpO1xyXG4gICAgICAgIGlmIChzaG91bGRGbGlwKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXR0aW5nID0ge307XHJcbiAgICAgICAgICAgIHNldHRpbmdbbWFya2V0TmFtZV0gPSAhaW52ZXJ0ZWQ7XHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VNYXJrZXREaXJlY3Rpb24oc2V0dGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXI6XCIsIEpTT04uc3RyaW5naWZ5KG9yZGVyLnRvT2JqZWN0KCkpKTtcclxuICAgICAgICByZXR1cm4gTWFya2V0c0FjdGlvbnMuY3JlYXRlTGltaXRPcmRlcjIob3JkZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5tZXNzYWdlICE9PSBcIndhbGxldCBsb2NrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5rbm93biBlcnJvci4gRmFpbGVkIHRvIHBsYWNlIG9yZGVyIGZvciBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC50b19yZWNlaXZlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC50b19yZWNlaXZlLmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3JkZXIgc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcmRlciBmYWlsZWQ6XCIsIGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlUHJlZGljdGlvblNob3J0KGZlZUlEKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLmFzaztcclxuICAgICAgICBjb25zdCBvcmRlciA9IG5ldyBMaW1pdE9yZGVyQ3JlYXRlKHtcclxuICAgICAgICAgICAgZm9yX3NhbGU6IGN1cnJlbnQuZm9yX3NhbGUsXHJcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IGN1cnJlbnQudG9fcmVjZWl2ZSxcclxuICAgICAgICAgICAgc2VsbGVyOiB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBmZWVJRCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgRmV0Y2hDaGFpbihcclxuICAgICAgICAgICAgICAgIFwiZ2V0QXNzZXRcIixcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXSkudGhlbihhc3NldHMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgW2JhY2tpbmdBc3NldF0gPSBhc3NldHM7XHJcbiAgICAgICAgICAgIGxldCBjb2xsYXRlcmFsID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogb3JkZXIuYW1vdW50X2Zvcl9zYWxlLmdldEFtb3VudCgpLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYmFja2luZ0Fzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNyZWF0ZVByZWRpY3Rpb25TaG9ydChvcmRlciwgY29sbGF0ZXJhbCkudGhlbihcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLm1lc3NhZ2UgIT09IFwid2FsbGV0IGxvY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmtub3duIGVycm9yLiBGYWlsZWQgdG8gcGxhY2Ugb3JkZXIgZm9yIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QXNzZXRBbW91bnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUFzc2V0LnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2ZvcmNlQnV5KHR5cGUsIGZlZUFzc2V0LCBzZWxsQmFsYW5jZSwgY29yZUJhbGFuY2UpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIl07XHJcbiAgICAgICAgLy8gQ29udmVydCBmZWUgdG8gcmVsZXZhbnQgYXNzZXQgZmVlIGFuZCBjaGVjayBpZiB1c2VyIGhhcyBzdWZmaWNpZW50IGJhbGFuY2VcclxuICAgICAgICBzZWxsQmFsYW5jZSA9IGN1cnJlbnQuZm9yX3NhbGUuY2xvbmUoXHJcbiAgICAgICAgICAgIHNlbGxCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KHNlbGxCYWxhbmNlKS5nZXQoXCJiYWxhbmNlXCIpLCAxMClcclxuICAgICAgICAgICAgICAgIDogMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29yZUJhbGFuY2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGNvcmVCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlKS50b0pTKCkuYmFsYW5jZSwgMTApXHJcbiAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmVlID0gdGhpcy5fZ2V0RmVlKGZlZUFzc2V0KTtcclxuICAgICAgICBsZXQgZmVlSUQgPSB0aGlzLl92ZXJpZnlGZWUoXHJcbiAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgY3VycmVudC5mb3Jfc2FsZSxcclxuICAgICAgICAgICAgc2VsbEJhbGFuY2UuZ2V0QW1vdW50KCksXHJcbiAgICAgICAgICAgIGNvcmVCYWxhbmNlLmdldEFtb3VudCgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGZlZUlEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUxpbWl0T3JkZXIodHlwZSwgZmVlSUQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gcGF5IGZlZXMsIGFib3J0aW5nIGxpbWl0IG9yZGVyIGNyZWF0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZm9yY2VTZWxsKHR5cGUsIGZlZUFzc2V0LCBzZWxsQmFsYW5jZSwgY29yZUJhbGFuY2UpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIl07XHJcbiAgICAgICAgLy8gQ29udmVydCBmZWUgdG8gcmVsZXZhbnQgYXNzZXQgZmVlIGFuZCBjaGVjayBpZiB1c2VyIGhhcyBzdWZmaWNpZW50IGJhbGFuY2VcclxuICAgICAgICBzZWxsQmFsYW5jZSA9IGN1cnJlbnQuZm9yX3NhbGUuY2xvbmUoXHJcbiAgICAgICAgICAgIHNlbGxCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KHNlbGxCYWxhbmNlKS5nZXQoXCJiYWxhbmNlXCIpLCAxMClcclxuICAgICAgICAgICAgICAgIDogMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29yZUJhbGFuY2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGNvcmVCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlKS50b0pTKCkuYmFsYW5jZSwgMTApXHJcbiAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmVlID0gdGhpcy5fZ2V0RmVlKGZlZUFzc2V0KTtcclxuICAgICAgICBsZXQgZmVlSUQgPSB0aGlzLl92ZXJpZnlGZWUoXHJcbiAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgY3VycmVudC5mb3Jfc2FsZSxcclxuICAgICAgICAgICAgc2VsbEJhbGFuY2UuZ2V0QW1vdW50KCksXHJcbiAgICAgICAgICAgIGNvcmVCYWxhbmNlLmdldEFtb3VudCgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGZlZUlEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUxpbWl0T3JkZXIodHlwZSwgZmVlSUQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gcGF5IGZlZXMsIGFib3J0aW5nIGxpbWl0IG9yZGVyIGNyZWF0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2FuY2VsTGltaXRPcmRlcihvcmRlcklELCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBNYXJrZXRzQWN0aW9ucy5jYW5jZWxMaW1pdE9yZGVyKFxyXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgb3JkZXJJRCAvLyBvcmRlciBpZCB0byBjYW5jZWxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIF9jaGFuZ2VCdWNrZXRTaXplKHNpemUsIGUpIHtcclxuICAgIC8vICAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGlmIChzaXplICE9PSB0aGlzLnByb3BzLmJ1Y2tldFNpemUpIHtcclxuICAgIC8vICAgICAgICAgTWFya2V0c0FjdGlvbnMuY2hhbmdlQnVja2V0U2l6ZS5kZWZlcihzaXplKTtcclxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRTdWIgPSB0aGlzLnByb3BzLnN1Yi5zcGxpdChcIl9cIik7XHJcbiAgICAvLyAgICAgICAgIE1hcmtldHNBY3Rpb25zLnVuU3Vic2NyaWJlTWFya2V0KGN1cnJlbnRTdWJbMF0sIGN1cnJlbnRTdWJbMV0pLnRoZW4oXHJcbiAgICAvLyAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJUb01hcmtldCh0aGlzLnByb3BzLCBzaXplKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgX2NoYW5nZVpvb21QZXJpb2Qoc2l6ZSwgZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoc2l6ZSAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50UGVyaW9kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBlcmlvZDogc2l6ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQZXJpb2Q6IHNpemVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9kZXB0aENoYXJ0Q2xpY2soYmFzZSwgcXVvdGUsIGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHtiaWQsIGFza30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBiaWQucHJpY2UgPSBuZXcgUHJpY2Uoe1xyXG4gICAgICAgICAgICBiYXNlOiB0aGlzLnN0YXRlLmJpZC5mb3Jfc2FsZSxcclxuICAgICAgICAgICAgcXVvdGU6IHRoaXMuc3RhdGUuYmlkLnRvX3JlY2VpdmUsXHJcbiAgICAgICAgICAgIHJlYWw6IGUueEF4aXNbMF0udmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBiaWQucHJpY2VUZXh0ID0gYmlkLnByaWNlLnRvUmVhbCgpO1xyXG5cclxuICAgICAgICBhc2sucHJpY2UgPSBuZXcgUHJpY2Uoe1xyXG4gICAgICAgICAgICBiYXNlOiB0aGlzLnN0YXRlLmFzay50b19yZWNlaXZlLFxyXG4gICAgICAgICAgICBxdW90ZTogdGhpcy5zdGF0ZS5hc2suZm9yX3NhbGUsXHJcbiAgICAgICAgICAgIHJlYWw6IGUueEF4aXNbMF0udmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc2sucHJpY2VUZXh0ID0gYXNrLnByaWNlLnRvUmVhbCgpO1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgYmlkLFxyXG4gICAgICAgICAgICBhc2ssXHJcbiAgICAgICAgICAgIGRlcHRoTGluZTogYmlkLnByaWNlLnRvUmVhbCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShiaWQsIHRydWUpIHx8IHRoaXMuX3NldFJlY2VpdmUoYmlkLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGFzaykgfHwgdGhpcy5fc2V0Rm9yU2FsZShhc2spO1xyXG5cclxuICAgICAgICB0aGlzLl9zZXRQcmljZVRleHQoYmlkLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9zZXRQcmljZVRleHQoYXNrLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gaWYgKGJpZC5mb3Jfc2FsZS4pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZVBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBoaWRlUGFuZWw6ICF0aGlzLnN0YXRlLmhpZGVQYW5lbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9mbGlwQnV5U2VsbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmxpcEJ1eVNlbGw6ICF0aGlzLnN0YXRlLmZsaXBCdXlTZWxsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGZsaXBCdXlTZWxsOiAhdGhpcy5zdGF0ZS5mbGlwQnV5U2VsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVPcGVuQnV5U2VsbCgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBidXlTZWxsT3BlbjogIXRoaXMuc3RhdGUuYnV5U2VsbE9wZW5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnV5U2VsbE9wZW46ICF0aGlzLnN0YXRlLmJ1eVNlbGxPcGVufSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZUNoYXJ0cygpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBzaG93RGVwdGhDaGFydDogIXRoaXMuc3RhdGUuc2hvd0RlcHRoQ2hhcnRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0RlcHRoQ2hhcnQ6ICF0aGlzLnN0YXRlLnNob3dEZXB0aENoYXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZU1hcmtldFBpY2tlcihhc3NldCkge1xyXG4gICAgICAgIGxldCBzaG93TWFya2V0UGlja2VyID0gISFhc3NldCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd01hcmtldFBpY2tlcixcclxuICAgICAgICAgICAgbWFya2V0UGlja2VyQXNzZXQ6IGFzc2V0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX21vdmVPcmRlckJvb2soKSB7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgbGVmdE9yZGVyQm9vazogIXRoaXMuc3RhdGUubGVmdE9yZGVyQm9va1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0T3JkZXJCb29rOiAhdGhpcy5zdGF0ZS5sZWZ0T3JkZXJCb29rfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2N1cnJlbnRQcmljZUNsaWNrKHR5cGUsIHByaWNlKSB7XHJcbiAgICAgICAgY29uc3QgaXNCaWQgPSB0eXBlID09PSBcImJpZFwiO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZVt0eXBlXTtcclxuICAgICAgICBjdXJyZW50LnByaWNlID0gcHJpY2VbaXNCaWQgPyBcImludmVydFwiIDogXCJjbG9uZVwiXSgpO1xyXG4gICAgICAgIGN1cnJlbnQucHJpY2VUZXh0ID0gY3VycmVudC5wcmljZS50b1JlYWwoKTtcclxuICAgICAgICBpZiAoaXNCaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRGb3JTYWxlKGN1cnJlbnQsIGlzQmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vcmRlcmJvb2tDbGljayhvcmRlcikge1xyXG4gICAgICAgIGNvbnN0IGlzQmlkID0gb3JkZXIuaXNCaWQoKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICogQmVjYXVzZSB3ZSBhcmUgdXNpbmcgYSBiaWQgb3JkZXIgdG8gY29uc3RydWN0IGFuIGFzayBhbmQgdmljZSB2ZXJzYSxcclxuICAgICAgICAqIHRvdGFsVG9SZWNlaXZlIGJlY29tZXMgZm9yU2FsZSwgYW5kIHRvdGFsRm9yU2FsZSBiZWNvbWVzIHRvUmVjZWl2ZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IGZvclNhbGUgPSBvcmRlci50b3RhbFRvUmVjZWl2ZSh7bm9DYWNoZTogdHJ1ZX0pO1xyXG4gICAgICAgIC8vIGxldCB0b1JlY2VpdmUgPSBvcmRlci50b3RhbEZvclNhbGUoe25vQ2FjaGU6IHRydWV9KTtcclxuICAgICAgICBsZXQgdG9SZWNlaXZlID0gZm9yU2FsZS50aW1lcyhvcmRlci5zZWxsUHJpY2UoKSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdQcmljZSA9IG5ldyBQcmljZSh7XHJcbiAgICAgICAgICAgIGJhc2U6IGlzQmlkID8gdG9SZWNlaXZlIDogZm9yU2FsZSxcclxuICAgICAgICAgICAgcXVvdGU6IGlzQmlkID8gZm9yU2FsZSA6IHRvUmVjZWl2ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbaXNCaWQgPyBcImJpZFwiIDogXCJhc2tcIl07XHJcbiAgICAgICAgY3VycmVudC5wcmljZSA9IG5ld1ByaWNlO1xyXG4gICAgICAgIGN1cnJlbnQucHJpY2VUZXh0ID0gbmV3UHJpY2UudG9SZWFsKCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLy8gSWYgaXNCaWQgaXMgdHJ1ZSwgbmV3U3RhdGUgZGVmaW5lcyBhIG5ldyBhc2sgb3JkZXIgYW5kIHZpY2UgdmVyc2FcclxuICAgICAgICAgICAgW2lzQmlkID8gXCJhc2tcIiA6IFwiYmlkXCJdOiB7XHJcbiAgICAgICAgICAgICAgICBmb3Jfc2FsZTogZm9yU2FsZSxcclxuICAgICAgICAgICAgICAgIGZvclNhbGVUZXh0OiBmb3JTYWxlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgdG9fcmVjZWl2ZTogdG9SZWNlaXZlLFxyXG4gICAgICAgICAgICAgICAgdG9SZWNlaXZlVGV4dDogdG9SZWNlaXZlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IG5ld1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VUZXh0OiBuZXdQcmljZS50b1JlYWwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlzQmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvclNhbGUoY3VycmVudCwgaXNCaWQpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9ib3Jyb3dRdW90ZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnMuYm9ycm93UXVvdGUuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9ib3Jyb3dCYXNlKCkge1xyXG4gICAgICAgIHRoaXMucmVmcy5ib3Jyb3dCYXNlLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U2V0dGxlbWVudEluZm8oKSB7XHJcbiAgICAgICAgbGV0IHtsb3dlc3RDYWxsUHJpY2UsIGZlZWRQcmljZSwgcXVvdGVBc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgc2hvd0NhbGxMaW1pdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChmZWVkUHJpY2UpIHtcclxuICAgICAgICAgICAgaWYgKGZlZWRQcmljZS5pbnZlcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCA9IGxvd2VzdENhbGxQcmljZSA8PSBmZWVkUHJpY2UudG9SZWFsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0ID0gbG93ZXN0Q2FsbFByaWNlID49IGZlZWRQcmljZS50b1JlYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gISEoXHJcbiAgICAgICAgICAgIHNob3dDYWxsTGltaXQgJiZcclxuICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlICYmXHJcbiAgICAgICAgICAgICFxdW90ZUFzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUZlZUFzc2V0KHR5cGUsIGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYnV5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBidXlGZWVBc3NldElkeDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgYnV5RmVlQXNzZXRJZHg6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsbEZlZUFzc2V0SWR4OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICBzZWxsRmVlQXNzZXRJZHg6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUNoYXJ0SGVpZ2h0KHt2YWx1ZSwgaW5jcmVhc2V9KSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gdmFsdWVcclxuICAgICAgICAgICAgPyB2YWx1ZVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUuY2hhcnRIZWlnaHQgKyAoaW5jcmVhc2UgPyAyMCA6IC0yMCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNoYXJ0SGVpZ2h0OiBuZXdIZWlnaHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgY2hhcnRIZWlnaHQ6IG5ld0hlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVCdXlTZWxsUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJ1eVNlbGxUb3A6ICF0aGlzLnN0YXRlLmJ1eVNlbGxUb3BcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgYnV5U2VsbFRvcDogIXRoaXMuc3RhdGUuYnV5U2VsbFRvcFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRSZWNlaXZlKHN0YXRlLCBpc0JpZCkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5wcmljZS5pc1ZhbGlkKCkgJiYgc3RhdGUuZm9yX3NhbGUuaGFzQW1vdW50KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUudG9fcmVjZWl2ZSA9IHN0YXRlLmZvcl9zYWxlLnRpbWVzKHN0YXRlLnByaWNlKTtcclxuICAgICAgICAgICAgc3RhdGUudG9SZWNlaXZlVGV4dCA9IHN0YXRlLnRvX3JlY2VpdmVcclxuICAgICAgICAgICAgICAgIC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEZvclNhbGUoc3RhdGUsIGlzQmlkKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLnByaWNlLmlzVmFsaWQoKSAmJiBzdGF0ZS50b19yZWNlaXZlLmhhc0Ftb3VudCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmZvcl9zYWxlID0gc3RhdGUudG9fcmVjZWl2ZS50aW1lcyhzdGF0ZS5wcmljZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmZvclNhbGVUZXh0ID0gc3RhdGUuZm9yX3NhbGVcclxuICAgICAgICAgICAgICAgIC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldFByaWNlKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmZvcl9zYWxlLmhhc0Ftb3VudCgpICYmIHN0YXRlLnRvX3JlY2VpdmUuaGFzQW1vdW50KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUucHJpY2UgPSBuZXcgUHJpY2Uoe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogc3RhdGUuZm9yX3NhbGUsXHJcbiAgICAgICAgICAgICAgICBxdW90ZTogc3RhdGUudG9fcmVjZWl2ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RhdGUucHJpY2VUZXh0ID0gc3RhdGUucHJpY2UudG9SZWFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0UHJpY2VUZXh0KHN0YXRlLCBpc0JpZCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCYXNlID0gc3RhdGVbaXNCaWQgPyBcImZvcl9zYWxlXCIgOiBcInRvX3JlY2VpdmVcIl07XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1b3RlID0gc3RhdGVbaXNCaWQgPyBcInRvX3JlY2VpdmVcIiA6IFwiZm9yX3NhbGVcIl07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCYXNlLmhhc0Ftb3VudCgpICYmIGN1cnJlbnRRdW90ZS5oYXNBbW91bnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5wcmljZVRleHQgPSBuZXcgUHJpY2Uoe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogY3VycmVudEJhc2UsXHJcbiAgICAgICAgICAgICAgICBxdW90ZTogY3VycmVudFF1b3RlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG9SZWFsKClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25JbnB1dFByaWNlKHR5cGUsIGUpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZV07XHJcbiAgICAgICAgY29uc3QgaXNCaWQgPSB0eXBlID09PSBcImJpZFwiO1xyXG4gICAgICAgIGN1cnJlbnQucHJpY2UgPSBuZXcgUHJpY2Uoe1xyXG4gICAgICAgICAgICBiYXNlOiBjdXJyZW50W2lzQmlkID8gXCJmb3Jfc2FsZVwiIDogXCJ0b19yZWNlaXZlXCJdLFxyXG4gICAgICAgICAgICBxdW90ZTogY3VycmVudFtpc0JpZCA/IFwidG9fcmVjZWl2ZVwiIDogXCJmb3Jfc2FsZVwiXSxcclxuICAgICAgICAgICAgcmVhbDogcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfHwgMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaXNCaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRGb3JTYWxlKGN1cnJlbnQsIGlzQmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnQucHJpY2VUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbklucHV0U2VsbCh0eXBlLCBpc0JpZCwgZSkge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZVt0eXBlXTtcclxuICAgICAgICAvLyBjb25zdCBpc0JpZCA9IHR5cGUgPT09IFwiYmlkXCI7XHJcbiAgICAgICAgY3VycmVudC5mb3Jfc2FsZS5zZXRBbW91bnQoe3JlYWw6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpIHx8IDB9KTtcclxuICAgICAgICBpZiAoY3VycmVudC5wcmljZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0UmVjZWl2ZShjdXJyZW50LCBpc0JpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0UHJpY2UoY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50LmZvclNhbGVUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5fc2V0UHJpY2VUZXh0KGN1cnJlbnQsIHR5cGUgPT09IFwiYmlkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uSW5wdXRSZWNlaXZlKHR5cGUsIGlzQmlkLCBlKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlW3R5cGVdO1xyXG4gICAgICAgIC8vIGNvbnN0IGlzQmlkID0gdHlwZSA9PT0gXCJiaWRcIjtcclxuICAgICAgICBjdXJyZW50LnRvX3JlY2VpdmUuc2V0QW1vdW50KHtyZWFsOiBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSB8fCAwfSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50LnByaWNlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb3JTYWxlKGN1cnJlbnQsIGlzQmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRQcmljZShjdXJyZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnQudG9SZWNlaXZlVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3NldFByaWNlVGV4dChjdXJyZW50LCB0eXBlID09PSBcImJpZFwiKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYXJrZXRGcm96ZW4oKSB7XHJcbiAgICAgICAgbGV0IHtiYXNlQXNzZXQsIHF1b3RlQXNzZXR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGJhc2VXaGl0ZUxpc3QgPSBiYXNlQXNzZXRcclxuICAgICAgICAgICAgLmdldEluKFtcIm9wdGlvbnNcIiwgXCJ3aGl0ZWxpc3RfbWFya2V0c1wiXSlcclxuICAgICAgICAgICAgLnRvSlMoKTtcclxuICAgICAgICBsZXQgcXVvdGVXaGl0ZUxpc3QgPSBxdW90ZUFzc2V0XHJcbiAgICAgICAgICAgIC5nZXRJbihbXCJvcHRpb25zXCIsIFwid2hpdGVsaXN0X21hcmtldHNcIl0pXHJcbiAgICAgICAgICAgIC50b0pTKCk7XHJcbiAgICAgICAgbGV0IGJhc2VCbGFja0xpc3QgPSBiYXNlQXNzZXRcclxuICAgICAgICAgICAgLmdldEluKFtcIm9wdGlvbnNcIiwgXCJibGFja2xpc3RfbWFya2V0c1wiXSlcclxuICAgICAgICAgICAgLnRvSlMoKTtcclxuICAgICAgICBsZXQgcXVvdGVCbGFja0xpc3QgPSBxdW90ZUFzc2V0XHJcbiAgICAgICAgICAgIC5nZXRJbihbXCJvcHRpb25zXCIsIFwiYmxhY2tsaXN0X21hcmtldHNcIl0pXHJcbiAgICAgICAgICAgIC50b0pTKCk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcXVvdGVXaGl0ZUxpc3QubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIHF1b3RlV2hpdGVMaXN0LmluZGV4T2YoYmFzZUFzc2V0LmdldChcImlkXCIpKSA9PT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtpc0Zyb3plbjogdHJ1ZSwgZnJvemVuQXNzZXQ6IHF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBiYXNlV2hpdGVMaXN0Lmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBiYXNlV2hpdGVMaXN0LmluZGV4T2YocXVvdGVBc3NldC5nZXQoXCJpZFwiKSkgPT09IC0xXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7aXNGcm96ZW46IHRydWUsIGZyb3plbkFzc2V0OiBiYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcXVvdGVCbGFja0xpc3QubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIHF1b3RlQmxhY2tMaXN0LmluZGV4T2YoYmFzZUFzc2V0LmdldChcImlkXCIpKSAhPT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtpc0Zyb3plbjogdHJ1ZSwgZnJvemVuQXNzZXQ6IHF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBiYXNlQmxhY2tMaXN0Lmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBiYXNlQmxhY2tMaXN0LmluZGV4T2YocXVvdGVBc3NldC5nZXQoXCJpZFwiKSkgIT09IC0xXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7aXNGcm96ZW46IHRydWUsIGZyb3plbkFzc2V0OiBiYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7aXNGcm96ZW46IGZhbHNlfTtcclxuICAgIH1cclxuXHJcbiAgICBfdG9nZ2xlQ2hhdCgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICB2aWV3Q2hhdDogIXRoaXMucHJvcHMudmlld0NoYXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdG9nZ2xlTWluaUNoYXJ0KCkge1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIG1pbmlEZXB0aENoYXJ0OiAhdGhpcy5wcm9wcy5taW5pRGVwdGhDaGFydFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkdyb3VwT3JkZXJMaW1pdENoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZ3JvdXBMaW1pdCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBNYXJrZXRzQWN0aW9ucy5jaGFuZ2VDdXJyZW50R3JvdXBMaW1pdChncm91cExpbWl0KTtcclxuICAgICAgICBpZiAoZ3JvdXBMaW1pdCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50R3JvdXBPcmRlckxpbWl0KSB7XHJcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNoYW5nZUN1cnJlbnRHcm91cExpbWl0KGdyb3VwTGltaXQpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFN1YiA9IHRoaXMucHJvcHMuc3ViLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoY3VycmVudFN1YlswXSwgY3VycmVudFN1YlsxXSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1YlRvTWFya2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJ1Y2tldFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTGltaXRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgICAgIG1hcmtldExpbWl0T3JkZXJzLFxyXG4gICAgICAgICAgICBtYXJrZXRDYWxsT3JkZXJzLFxyXG4gICAgICAgICAgICBtYXJrZXREYXRhLFxyXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRIaXN0b3J5LFxyXG4gICAgICAgICAgICBpbnZlcnRlZENhbGxzLFxyXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0cyxcclxuICAgICAgICAgICAgcXVvdGVBc3NldCxcclxuICAgICAgICAgICAgYmFzZUFzc2V0LFxyXG4gICAgICAgICAgICBsb3dlc3RDYWxsUHJpY2UsXHJcbiAgICAgICAgICAgIG1hcmtldFN0YXRzLFxyXG4gICAgICAgICAgICBtYXJrZXRSZWFkeSxcclxuICAgICAgICAgICAgbWFya2V0U2V0dGxlT3JkZXJzLFxyXG4gICAgICAgICAgICBidWNrZXRTaXplLFxyXG4gICAgICAgICAgICB0b3RhbHMsXHJcbiAgICAgICAgICAgIGZlZWRQcmljZSxcclxuICAgICAgICAgICAgYnVja2V0cyxcclxuICAgICAgICAgICAgY29yZUFzc2V0LFxyXG4gICAgICAgICAgICB0cmFja2VkR3JvdXBzQ29uZmlnLFxyXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICBjb21iaW5lZEFza3MsXHJcbiAgICAgICAgICAgIGxvd2VzdEFzayxcclxuICAgICAgICAgICAgaGlnaGVzdEJpZCxcclxuICAgICAgICAgICAgZmxhdEJpZHMsXHJcbiAgICAgICAgICAgIGZsYXRBc2tzLFxyXG4gICAgICAgICAgICBmbGF0Q2FsbHMsXHJcbiAgICAgICAgICAgIGZsYXRTZXR0bGVzLFxyXG4gICAgICAgICAgICBncm91cGVkQmlkcyxcclxuICAgICAgICAgICAgZ3JvdXBlZEFza3NcclxuICAgICAgICB9ID0gbWFya2V0RGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgYmlkLFxyXG4gICAgICAgICAgICBhc2ssXHJcbiAgICAgICAgICAgIGxlZnRPcmRlckJvb2ssXHJcbiAgICAgICAgICAgIHNob3dEZXB0aENoYXJ0LFxyXG4gICAgICAgICAgICBjaGFydEhlaWdodCxcclxuICAgICAgICAgICAgYnV5RGlmZixcclxuICAgICAgICAgICAgc2VsbERpZmYsXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBidXlTZWxsVG9wLFxyXG4gICAgICAgICAgICBoaWRlUGFuZWxcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7aXNGcm96ZW4sIGZyb3plbkFzc2V0fSA9IHRoaXMuaXNNYXJrZXRGcm96ZW4oKTtcclxuXHJcbiAgICAgICAgbGV0IGJhc2UgPSBudWxsLFxyXG4gICAgICAgICAgICBxdW90ZSA9IG51bGwsXHJcbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlID0gbnVsbCxcclxuICAgICAgICAgICAgcXVvdGVCYWxhbmNlID0gbnVsbCxcclxuICAgICAgICAgICAgYmFzZUJhbGFuY2UgPSBudWxsLFxyXG4gICAgICAgICAgICBjb3JlQmFsYW5jZSA9IG51bGwsXHJcbiAgICAgICAgICAgIHF1b3RlU3ltYm9sLFxyXG4gICAgICAgICAgICBiYXNlU3ltYm9sLFxyXG4gICAgICAgICAgICBzaG93Q2FsbExpbWl0ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGxhdGVzdCxcclxuICAgICAgICAgICAgY2hhbmdlQ2xhc3M7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dWb2x1bWVDaGFydCA9IHRoaXMucHJvcHMudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgXCJzaG93Vm9sdW1lQ2hhcnRcIixcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChxdW90ZUFzc2V0LnNpemUgJiYgYmFzZUFzc2V0LnNpemUgJiYgY3VycmVudEFjY291bnQuc2l6ZSkge1xyXG4gICAgICAgICAgICBiYXNlID0gYmFzZUFzc2V0O1xyXG4gICAgICAgICAgICBxdW90ZSA9IHF1b3RlQXNzZXQ7XHJcbiAgICAgICAgICAgIGJhc2VTeW1ib2wgPSBiYXNlLmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICAgICAgcXVvdGVTeW1ib2wgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIik7XHJcblxyXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZSA9IGN1cnJlbnRBY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY2NvdW50QmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gYWNjb3VudEJhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT09IHF1b3RlLmdldChcImlkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09PSBiYXNlLmdldChcImlkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VCYWxhbmNlID0gYWNjb3VudEJhbGFuY2VbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT09IFwiMS4zLjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlQmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNob3dDYWxsTGltaXQgPSB0aGlzLl9nZXRTZXR0bGVtZW50SW5mbygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHF1b3RlSXNCaXRBc3NldCA9IHF1b3RlQXNzZXQuZ2V0KFwiYml0YXNzZXRfZGF0YV9pZFwiKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgYmFzZUlzQml0QXNzZXQgPSBiYXNlQXNzZXQuZ2V0KFwiYml0YXNzZXRfZGF0YV9pZFwiKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHNwcmVhZCA9XHJcbiAgICAgICAgICAgIGxvd2VzdEFzayAmJiBoaWdoZXN0QmlkXHJcbiAgICAgICAgICAgICAgICA/IGxvd2VzdEFzay5nZXRQcmljZSgpIC0gaGlnaGVzdEJpZC5nZXRQcmljZSgpXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcblxyXG4gICAgICAgIC8vIExhdGVzdCBwcmljZVxyXG4gICAgICAgIGlmIChhY3RpdmVNYXJrZXRIaXN0b3J5LnNpemUpIHtcclxuICAgICAgICAgICAgbGV0IGxhdGVzdF90d28gPSBhY3RpdmVNYXJrZXRIaXN0b3J5LnRha2UoMik7XHJcbiAgICAgICAgICAgIGxhdGVzdCA9IGxhdGVzdF90d28uZmlyc3QoKTtcclxuICAgICAgICAgICAgbGV0IHNlY29uZF9sYXRlc3QgPSBsYXRlc3RfdHdvLmxhc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZUNsYXNzID1cclxuICAgICAgICAgICAgICAgIGxhdGVzdC5nZXRQcmljZSgpID09PSBzZWNvbmRfbGF0ZXN0LmdldFByaWNlKClcclxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICA6IGxhdGVzdC5nZXRQcmljZSgpIC0gc2Vjb25kX2xhdGVzdC5nZXRQcmljZSgpID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNoYW5nZS1kb3duXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGZWVzXHJcbiAgICAgICAgaWYgKCFjb3JlQXNzZXQgfHwgIU9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZmVlU3RhdHVzKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBzZWxsRmVlQXNzZXQsXHJcbiAgICAgICAgICAgIHNlbGxGZWVBc3NldHMsXHJcbiAgICAgICAgICAgIHNlbGxGZWUsXHJcbiAgICAgICAgICAgIGJ1eUZlZUFzc2V0LFxyXG4gICAgICAgICAgICBidXlGZWVBc3NldHMsXHJcbiAgICAgICAgICAgIGJ1eUZlZVxyXG4gICAgICAgIH0gPSB0aGlzLl9nZXRGZWVBc3NldHMocXVvdGUsIGJhc2UsIGNvcmVBc3NldCk7XHJcblxyXG4gICAgICAgIC8vIERlY2ltYWxzXHJcbiAgICAgICAgbGV0IGhhc1ByZWRpY3Rpb24gPVxyXG4gICAgICAgICAgICBiYXNlLmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pIHx8XHJcbiAgICAgICAgICAgIHF1b3RlLmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pO1xyXG5cclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaGFzUHJlZGljdGlvbikge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHF1b3RlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcImRlc2NyaXB0aW9uXCJdKTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pLm1haW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc21hbGxTY3JlZW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAod2lkdGggPCAxMDAwKSB7XHJcbiAgICAgICAgICAgIHNtYWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGVmdE9yZGVyQm9vayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9yZGVyTXVsdGlwbGllciA9IGxlZnRPcmRlckJvb2sgPyAyIDogMTtcclxuICAgICAgICBjb25zdCBtaW5DaGFydEhlaWdodCA9IDMwMDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPiAxMTAwID8gY2hhcnRIZWlnaHQgOiBjaGFydEhlaWdodCAtIDEyNSxcclxuICAgICAgICAgICAgbWluQ2hhcnRIZWlnaHRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgZXhwaXJhdGlvblR5cGUgPSB0aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlO1xyXG4gICAgICAgIGxldCBleHBpcmF0aW9uQ3VzdG9tVGltZSA9IHRoaXMuc3RhdGUuZXhwaXJhdGlvbkN1c3RvbVRpbWU7XHJcblxyXG4gICAgICAgIGxldCBpc1BhbmVsQWN0aXZlID0gIWhpZGVQYW5lbCAmJiAhc21hbGxTY3JlZW4gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IHZlcnRpY2FsUGFuZWxUb2dnbGUgPSAhc21hbGxTY3JlZW4gPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcImF1dG9cIiwgcGFkZGluZ1RvcDogXCJjYWxjKDUwdmggLSAxMjBweClcIn19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVQYW5lbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPXtoaWRlUGFuZWwgPyBcImNhcmV0LWxlZnRcIiA6IFwiY2FyZXQtcmlnaHRcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGxldCBidXlGb3JtID0gaXNGcm96ZW4gPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8QnV5U2VsbFxyXG4gICAgICAgICAgICAgICAgb25Cb3Jyb3c9e2Jhc2VJc0JpdEFzc2V0ID8gdGhpcy5fYm9ycm93QmFzZS5iaW5kKHRoaXMpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgIGJhY2tlZENvaW49e3RoaXMucHJvcHMuYmFja2VkQ29pbnMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICBhID0+IGEuc3ltYm9sID09PSBiYXNlLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRCcmlkZ2VzPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJyaWRnZUNvaW5zLmdldChiYXNlLmdldChcInN5bWJvbFwiKSkgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21hbGxTY3JlZW49e3NtYWxsU2NyZWVufVxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmJ1eVNlbGxPcGVufVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVPcGVuPXt0aGlzLl90b2dnbGVPcGVuQnV5U2VsbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzbWFsbC0xMiBuby1wYWRkaW5nIG1pZGRsZS1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdE9yZGVyQm9vayB8fCBzbWFsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibWVkaXVtLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwibWVkaXVtLTYgeGxhcmdlLTRcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZsaXBCdXlTZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYG9yZGVyLSR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eVNlbGxUb3AgPyAyIDogNSAqIG9yZGVyTXVsdGlwbGllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gc2VsbC1mb3JtYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBvcmRlci0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlTZWxsVG9wID8gMSA6IDQgKiBvcmRlck11bHRpcGxpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGJ1eS1mb3JtYFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJiaWRcIlxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblR5cGU9e2V4cGlyYXRpb25UeXBlW1wiYmlkXCJdfVxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbnM9e3RoaXMuRVhQSVJBVElPTlN9XHJcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uQ3VzdG9tVGltZT17ZXhwaXJhdGlvbkN1c3RvbVRpbWVbXCJiaWRcIl19XHJcbiAgICAgICAgICAgICAgICBvbkV4cGlyYXRpb25UeXBlQ2hhbmdlPXt0aGlzLl9oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBcImJpZFwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgb25FeHBpcmF0aW9uQ3VzdG9tQ2hhbmdlPXt0aGlzLl9oYW5kbGVDdXN0b21FeHBpcmF0aW9uQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBcImJpZFwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgYW1vdW50PXtiaWQudG9SZWNlaXZlVGV4dH1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtiaWQucHJpY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgdG90YWw9e2JpZC5mb3JTYWxlVGV4dH1cclxuICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICBhbW91bnRDaGFuZ2U9e3RoaXMuX29uSW5wdXRSZWNlaXZlLmJpbmQodGhpcywgXCJiaWRcIiwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBwcmljZUNoYW5nZT17dGhpcy5fb25JbnB1dFByaWNlLmJpbmQodGhpcywgXCJiaWRcIil9XHJcbiAgICAgICAgICAgICAgICBzZXRQcmljZT17dGhpcy5fY3VycmVudFByaWNlQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIHRvdGFsQ2hhbmdlPXt0aGlzLl9vbklucHV0U2VsbC5iaW5kKHRoaXMsIFwiYmlkXCIsIGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGJhbGFuY2U9e2Jhc2VCYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZUlkPXtiYXNlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbWl0T3JkZXJDb25maXJtLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcmVCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1eUZlZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYnV5XCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlUHJlY2lzaW9uPXtiYXNlLmdldChcInByZWNpc2lvblwiKX1cclxuICAgICAgICAgICAgICAgIHF1b3RlUHJlY2lzaW9uPXtxdW90ZS5nZXQoXCJwcmVjaXNpb25cIil9XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByZWNpc2lvbj17YmFzZS5nZXQoXCJwcmVjaXNpb25cIil9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2U9e2xvd2VzdEFzay5nZXRQcmljZSgpfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlT2JqZWN0PXtsb3dlc3RBc2t9XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50PXtjdXJyZW50QWNjb3VudC5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgZmVlPXtidXlGZWV9XHJcbiAgICAgICAgICAgICAgICBoYXNGZWVCYWxhbmNlPXt0aGlzLnN0YXRlLmZlZVN0YXR1c1tidXlGZWUuYXNzZXRfaWRdLmhhc0JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICBmZWVBc3NldHM9e2J1eUZlZUFzc2V0c31cclxuICAgICAgICAgICAgICAgIGZlZUFzc2V0PXtidXlGZWVBc3NldH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRmVlQXNzZXQ9e3RoaXMub25DaGFuZ2VGZWVBc3NldC5iaW5kKHRoaXMsIFwiYnV5XCIpfVxyXG4gICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0PXtiYXNlLmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXHJcbiAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgIG9uRmxpcD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5fZmxpcEJ1eVNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZmxpcEJ1eVNlbGwuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVQb3NpdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuX3RvZ2dsZUJ1eVNlbGxQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3RvZ2dsZUJ1eVNlbGxQb3NpdGlvbi5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBzZWxsRm9ybSA9IGlzRnJvemVuID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPEJ1eVNlbGxcclxuICAgICAgICAgICAgICAgIG9uQm9ycm93PXtxdW90ZUlzQml0QXNzZXQgPyB0aGlzLl9ib3Jyb3dRdW90ZS5iaW5kKHRoaXMpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgIGJhY2tlZENvaW49e3RoaXMucHJvcHMuYmFja2VkQ29pbnMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICBhID0+IGEuc3ltYm9sID09PSBxdW90ZS5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJpZGdlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5icmlkZ2VDb2lucy5nZXQocXVvdGUuZ2V0KFwic3ltYm9sXCIpKSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbWFsbFNjcmVlbj17c21hbGxTY3JlZW59XHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuYnV5U2VsbE9wZW59XHJcbiAgICAgICAgICAgICAgICBvblRvZ2dsZU9wZW49e3RoaXMuX3RvZ2dsZU9wZW5CdXlTZWxsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBcInNtYWxsLTEyIG5vLXBhZGRpbmcgbWlkZGxlLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0T3JkZXJCb29rIHx8IHNtYWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtZWRpdW0tNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtZWRpdW0tNiB4bGFyZ2UtNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmxpcEJ1eVNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgb3JkZXItJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDEgOiA0ICogb3JkZXJNdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBidXktZm9ybWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgb3JkZXItJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDIgOiA1ICogb3JkZXJNdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBzZWxsLWZvcm1gXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImFza1wiXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2Fzay5mb3JTYWxlVGV4dH1cclxuICAgICAgICAgICAgICAgIHByaWNlPXthc2sucHJpY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgdG90YWw9e2Fzay50b1JlY2VpdmVUZXh0fVxyXG4gICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxyXG4gICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UeXBlPXtleHBpcmF0aW9uVHlwZVtcImFza1wiXX1cclxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25zPXt0aGlzLkVYUElSQVRJT05TfVxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbkN1c3RvbVRpbWU9e2V4cGlyYXRpb25DdXN0b21UaW1lW1wiYXNrXCJdfVxyXG4gICAgICAgICAgICAgICAgb25FeHBpcmF0aW9uVHlwZUNoYW5nZT17dGhpcy5faGFuZGxlRXhwaXJhdGlvbkNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhc2tcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIG9uRXhwaXJhdGlvbkN1c3RvbUNoYW5nZT17dGhpcy5faGFuZGxlQ3VzdG9tRXhwaXJhdGlvbkNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhc2tcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGFtb3VudENoYW5nZT17dGhpcy5fb25JbnB1dFNlbGwuYmluZCh0aGlzLCBcImFza1wiLCBmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBwcmljZUNoYW5nZT17dGhpcy5fb25JbnB1dFByaWNlLmJpbmQodGhpcywgXCJhc2tcIil9XHJcbiAgICAgICAgICAgICAgICBzZXRQcmljZT17dGhpcy5fY3VycmVudFByaWNlQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIHRvdGFsQ2hhbmdlPXt0aGlzLl9vbklucHV0UmVjZWl2ZS5iaW5kKHRoaXMsIFwiYXNrXCIsIHRydWUpfVxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZT17cXVvdGVCYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZUlkPXtxdW90ZS5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLl9jcmVhdGVMaW1pdE9yZGVyQ29uZmlybS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZUJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEZlZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VsbFwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZVByZWNpc2lvbj17cXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgcXVvdGVQcmVjaXNpb249e3F1b3RlLmdldChcInByZWNpc2lvblwiKX1cclxuICAgICAgICAgICAgICAgIHRvdGFsUHJlY2lzaW9uPXtiYXNlLmdldChcInByZWNpc2lvblwiKX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZT17aGlnaGVzdEJpZC5nZXRQcmljZSgpfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlT2JqZWN0PXtoaWdoZXN0QmlkfVxyXG4gICAgICAgICAgICAgICAgYWNjb3VudD17Y3VycmVudEFjY291bnQuZ2V0KFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgIGZlZT17c2VsbEZlZX1cclxuICAgICAgICAgICAgICAgIGhhc0ZlZUJhbGFuY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmVlU3RhdHVzW3NlbGxGZWUuYXNzZXRfaWRdLmhhc0JhbGFuY2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZlZUFzc2V0cz17c2VsbEZlZUFzc2V0c31cclxuICAgICAgICAgICAgICAgIGZlZUFzc2V0PXtzZWxsRmVlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZUZlZUFzc2V0PXt0aGlzLm9uQ2hhbmdlRmVlQXNzZXQuYmluZCh0aGlzLCBcInNlbGxcIil9XHJcbiAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQ9e3F1b3RlLmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXHJcbiAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgIG9uRmxpcD17XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuX2ZsaXBCdXlTZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZmxpcEJ1eVNlbGwuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlUG9zaXRpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLl90b2dnbGVCdXlTZWxsUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl90b2dnbGVCdXlTZWxsUG9zaXRpb24uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgb3JkZXJCb29rID0gKFxyXG4gICAgICAgICAgICA8T3JkZXJCb29rXHJcbiAgICAgICAgICAgICAgICBsYXRlc3Q9e2xhdGVzdCAmJiBsYXRlc3QuZ2V0UHJpY2UoKX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUNsYXNzPXtjaGFuZ2VDbGFzc31cclxuICAgICAgICAgICAgICAgIG9yZGVycz17bWFya2V0TGltaXRPcmRlcnN9XHJcbiAgICAgICAgICAgICAgICBjYWxscz17bWFya2V0Q2FsbE9yZGVyc31cclxuICAgICAgICAgICAgICAgIGludmVydGVkQ2FsbHM9e2ludmVydGVkQ2FsbHN9XHJcbiAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHM9e2NvbWJpbmVkQmlkc31cclxuICAgICAgICAgICAgICAgIGNvbWJpbmVkQXNrcz17Y29tYmluZWRBc2tzfVxyXG4gICAgICAgICAgICAgICAgaGlnaGVzdEJpZD17aGlnaGVzdEJpZH1cclxuICAgICAgICAgICAgICAgIGxvd2VzdEFzaz17bG93ZXN0QXNrfVxyXG4gICAgICAgICAgICAgICAgdG90YWxCaWRzPXt0b3RhbHMuYmlkfVxyXG4gICAgICAgICAgICAgICAgdG90YWxBc2tzPXt0b3RhbHMuYXNrfVxyXG4gICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgIGJhc2VTeW1ib2w9e2Jhc2VTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbD17cXVvdGVTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vcmRlcmJvb2tDbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbD17IWxlZnRPcmRlckJvb2t9XHJcbiAgICAgICAgICAgICAgICBtb3ZlT3JkZXJCb29rPXt0aGlzLl9tb3ZlT3JkZXJCb29rLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBmbGlwT3JkZXJCb29rPXt0aGlzLnByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJmbGlwT3JkZXJCb29rXCIpfVxyXG4gICAgICAgICAgICAgICAgbWFya2V0UmVhZHk9e21hcmtldFJlYWR5fVxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPXtgb3JkZXItJHtidXlTZWxsVG9wID8gMyA6IDF9IHhsYXJnZS1vcmRlci0ke1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1eVNlbGxUb3AgPyA0IDogMVxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZT17dGhpcy5fb25Hcm91cE9yZGVyTGltaXRDaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZz17dHJhY2tlZEdyb3Vwc0NvbmZpZ31cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e2N1cnJlbnRHcm91cE9yZGVyTGltaXR9XHJcbiAgICAgICAgICAgICAgICBncm91cGVkQmlkcz17Z3JvdXBlZEJpZHN9XHJcbiAgICAgICAgICAgICAgICBncm91cGVkQXNrcz17Z3JvdXBlZEFza3N9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMubWFya2V0UmVhZHkgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8RXhjaGFuZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3F1b3RlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0PXtiYXNlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUHJlZGljdGlvbj17aGFzUHJlZGljdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17c3RhcnJlZE1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0QXNrPXtsb3dlc3RBc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdEJpZD17aGlnaGVzdEJpZH1cclxuICAgICAgICAgICAgICAgICAgICBsb3dlc3RDYWxsUHJpY2U9e2xvd2VzdENhbGxQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0PXtzaG93Q2FsbExpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZT17ZmVlZFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5PXttYXJrZXRSZWFkeX1cclxuICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmljZT17bGF0ZXN0ICYmIGxhdGVzdC5nZXRQcmljZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZXB0aENoYXJ0PXtzaG93RGVwdGhDaGFydH1cclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cz17bWFya2V0U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVDaGFydHM9e3RoaXMuX3RvZ2dsZUNoYXJ0cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWFya2V0UGlja2VyPXt0aGlzLl90b2dnbGVNYXJrZXRQaWNrZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93Vm9sdW1lQ2hhcnQ9e3Nob3dWb2x1bWVDaGFydH1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydEhlaWdodD17Y2hhcnRIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGFydEhlaWdodD17dGhpcy5vbkNoYW5nZUNoYXJ0SGVpZ2h0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dCBtYXJrZXQtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyEhdGhpcy5zdGF0ZS5zaG93TWFya2V0UGlja2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0UGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRQaWNrZXJBc3NldD17dGhpcy5zdGF0ZS5tYXJrZXRQaWNrZXJBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWFya2V0UGlja2VyPXt0aGlzLl90b2dnbGVNYXJrZXRQaWNrZXIuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnROb3RpZmljYXRpb25zIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1haW4gdmVydGljYWwgYmxvY2sgd2l0aCBjb250ZW50ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTGVmdCBDb2x1bW4gLSBPcGVuIE9yZGVycyAqL31cclxuICAgICAgICAgICAgICAgICAgICB7bGVmdE9yZGVyQm9vayA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGxlZnQtY29sdW1uIHNocmluayBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyQm9va31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDZW50ZXIgQ29sdW1uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tcGFkZGluZyBwcy1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDZW50ZXJDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2hvd0RlcHRoQ2hhcnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBuby1vdmVyZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWFya2V0LWNoYXJ0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJpY2UgaGlzdG9yeSBjaGFydCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYWRpbmdWaWV3UHJpY2VDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGZWVkPXt0aGlzLnByb3BzLmRhdGFGZWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRPcmRlckJvb2s9e2xlZnRPcmRlckJvb2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRSZWFkeT17bWFya2V0UmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGVtZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldHM9e2J1Y2tldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXRTaXplPXtidWNrZXRTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBlcmlvZD17dGhpcy5zdGF0ZS5jdXJyZW50UGVyaW9kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRIZWlnaHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID4gMTEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXJ0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhcnRIZWlnaHQgLSAxNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZT17d2lkdGggPCA4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1wYWRkaW5nIHNocmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVwdGhIaWdoQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5PXttYXJrZXRSZWFkeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycz17bWFya2V0TGltaXRPcmRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0PXtzaG93Q2FsbExpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbF9vcmRlcnM9e21hcmtldENhbGxPcmRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0X2Fza3M9e2ZsYXRBc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9iaWRzPXtmbGF0Qmlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfY2FsbHM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYWxsTGltaXQgPyBmbGF0Q2FsbHMgOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9zZXR0bGVzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93U2V0dGxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJiBmbGF0U2V0dGxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlcz17bWFya2V0U2V0dGxlT3JkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRDYWxscz17aW52ZXJ0ZWRDYWxsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQmlkcz17dG90YWxzLmJpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXNrcz17dG90YWxzLmFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID4gMTEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXJ0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhcnRIZWlnaHQgLSAxNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2RlcHRoQ2hhcnRDbGljay5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhc1ByZWRpY3Rpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UudG9SZWFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcmVhZD17c3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTENQPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbG93ZXN0Q2FsbFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdE9yZGVyQm9vaz17bGVmdE9yZGVyQm9va31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByZWRpY3Rpb249e2hhc1ByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0ZyYW1lPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT3JkZXJib29rPXtsZWZ0T3JkZXJCb29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlbWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJSZWY9e3RoaXMucmVmcy5jZW50ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1vdmVyZmxvdyB3cmFwIHNocmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNQcmVkaWN0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbC0xMiBuby1vdmVyZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuMnJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRnJvemVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvciBzbWFsbC0xMiBuby1vdmVyZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuMnJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9mcm96ZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtmcm96ZW5Bc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxsRm9ybX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldEhpc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc21hbGxTY3JlZW4gJiYgIWxlZnRPcmRlckJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWVkaXVtLTYgeGxhcmdlLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tcGFkZGluZyBuby1vdmVyZmxvdyBtaWRkbGUtY29udGVudCBzbWFsbC0xMiBtZWRpdW0tNiBvcmRlci01IHhsYXJnZS1vcmRlci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU9e3twYWRkaW5nVG9wOiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17YWN0aXZlTWFya2V0SGlzdG9yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUhpc3Rvcnk9e2N1cnJlbnRBY2NvdW50LmdldChcImhpc3RvcnlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2w9e3F1b3RlU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRSZWFkeT17bWFya2V0UmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFsZWZ0T3JkZXJCb29rID8gb3JkZXJCb29rIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpcm1PcmRlck1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJidXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvcmNlPXt0aGlzLl9mb3JjZUJ1eS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlGZWVBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZj17YnV5RGlmZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3JkZXJzPXtjb21iaW5lZEFza3MubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29uZmlybU9yZGVyTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJzZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JjZT17dGhpcy5fZm9yY2VTZWxsLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxsRmVlQXNzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmPXtzZWxsRGlmZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3JkZXJzPXtjb21iaW5lZEJpZHMubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0TGltaXRPcmRlcnMuc2l6ZSA+IDAgJiYgYmFzZSAmJiBxdW90ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15T3Blbk9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxTY3JlZW49e3RoaXMucHJvcHMuc21hbGxTY3JlZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc21hbGxTY3JlZW4gJiYgIWxlZnRPcmRlckJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1lZGl1bS02IHhsYXJnZS00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzbWFsbC0xMiBtZWRpdW0tNiBuby1wYWRkaW5nIGFsaWduLXNwYWNlZCBwcy1jb250YWluZXIgbWlkZGxlLWNvbnRlbnQgb3JkZXItJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDYgOiA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJvcGVuX29yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM9e21hcmtldExpbWl0T3JkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlT3JkZXJzPXttYXJrZXRTZXR0bGVPcmRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17Y3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYj17dGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JkZXJzVGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5fY2FuY2VsTGltaXRPcmRlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGlwTXlPcmRlcnM9e3RoaXMucHJvcHMudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsaXBNeU9yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlPXt0aGlzLnByb3BzLmZlZWRQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVuZCBDZW50ZXJDb250ZW50ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgTWFpbiBDb250ZW50IENvbHVtbiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFJpZ2h0IENvbHVtbiAtIE1hcmtldCBIaXN0b3J5ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgcmlnaHQtY29sdW1uIG5vLW92ZXJmbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNDUwfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2ZXJ0aWNhbFBhbmVsVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUGFuZWxBY3RpdmUgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluV2lkdGg6IDM1OH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgcmlnaHQtY29sdW1uIG5vLW92ZXJmbG93IHZlcnRpY2FsIG5vLXBhZGRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNYXJrZXQgSGlzdG9yeSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW4gdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15TWFya2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1vcmRlci1ib29rIG5vLXBhZGRpbmcgbm8tb3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU9e3twYWRkaW5nVG9wOiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJzdGFyXCIsIGluZGV4OiAxfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJtYXJrZXRcIiwgaW5kZXg6IDJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcInZvbFwiLCBpbmRleDogM30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicHJpY2VcIiwgaW5kZXg6IDR9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImNoYW5nZVwiLCBpbmRleDogNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kQ29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIm1hcmtldFwiLCBpbmRleDogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiaXNzdWVyXCIsIGluZGV4OiAyfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJ2b2xcIiwgaW5kZXg6IDN9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImFkZFwiLCBpbmRleDogNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtgJHtxdW90ZVN5bWJvbH1fJHtiYXNlU3ltYm9sfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogIXRoaXMucHJvcHMudmlld0NoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMCAwIDAgMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIHNocmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVDaGF0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlciBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpZXdDaGF0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjOTY2MDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjOTY1MDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudHJvbGxib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpZXdDaGF0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRCcm8gaGVpZ2h0PXtcIjMwMHB4XCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTWluaSBEZXB0aCBDaGFydCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAhdGhpcy5wcm9wcy5taW5pRGVwdGhDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDAgNDBweCAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1tYXJnaW4gdmVydGljYWwgc2hyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZU1pbmlDaGFydC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlciBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1pbmlEZXB0aENoYXJ0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjOTY2MDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjOTY1MDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWluaURlcHRoQ2hhcnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVwdGhIaWdoQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRSZWFkeT17bWFya2V0UmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzPXttYXJrZXRMaW1pdE9yZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0PXtzaG93Q2FsbExpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxfb3JkZXJzPXttYXJrZXRDYWxsT3JkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfYXNrcz17ZmxhdEFza3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9iaWRzPXtmbGF0Qmlkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0X2NhbGxzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCA/IGZsYXRDYWxscyA6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfc2V0dGxlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93U2V0dGxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiYgZmxhdFNldHRsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlcz17bWFya2V0U2V0dGxlT3JkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkQ2FsbHM9e2ludmVydGVkQ2FsbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCaWRzPXt0b3RhbHMuYmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXNrcz17dG90YWxzLmFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9kZXB0aENoYXJ0Q2xpY2suYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZW1lbnRQcmljZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYXNQcmVkaWN0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UudG9SZWFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByZWFkPXtzcHJlYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTENQPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBsb3dlc3RDYWxsUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0T3JkZXJCb29rPXtsZWZ0T3JkZXJCb29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByZWRpY3Rpb249e2hhc1ByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UZXh0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGVtZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cXVvdGVJc0JpdEFzc2V0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9ycm93TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJvcnJvd1F1b3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9ycm93X21vZGFsX3F1b3RlX1wiICsgcXVvdGVBc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlQXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNraW5nX2Fzc2V0PXtxdW90ZUFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17Y3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAge2Jhc2VJc0JpdEFzc2V0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9ycm93TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJvcnJvd0Jhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD17XCJib3Jyb3dfbW9kYWxfYmFzZV9cIiArIGJhc2VBc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtiYXNlQXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNraW5nX2Fzc2V0PXtiYXNlQXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtjdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFNlY29uZCBWZXJ0aWNhbCBCbG9jayAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJpY2VUZXh0IGZyb20gXCIuLi9VdGlsaXR5L1ByaWNlVGV4dFwiO1xyXG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IHtTdGlja3lUYWJsZX0gZnJvbSBcInJlYWN0LXN0aWNreS10YWJsZVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmNvbnN0IGNvdW50ZXJwYXJ0ID0gcmVxdWlyZShcImNvdW50ZXJwYXJ0XCIpO1xyXG5cclxuY2xhc3MgT3JkZXJCb29rUm93VmVydGljYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XHJcbiAgICAgICAgaWYgKG5wLm9yZGVyLm1hcmtldF9iYXNlICE9PSB0aGlzLnByb3BzLm9yZGVyLm1hcmtldF9iYXNlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbnAub3JkZXIubmUodGhpcy5wcm9wcy5vcmRlcikgfHxcclxuICAgICAgICAgICAgbnAuaW5kZXggIT09IHRoaXMucHJvcHMuaW5kZXggfHxcclxuICAgICAgICAgICAgbnAuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge29yZGVyLCBxdW90ZSwgYmFzZSwgZmluYWx9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpc0JpZCA9IG9yZGVyLmlzQmlkKCk7XHJcbiAgICAgICAgY29uc3QgaXNDYWxsID0gb3JkZXIuaXNDYWxsKCk7XHJcbiAgICAgICAgbGV0IGludGVnZXJDbGFzcyA9IGlzQ2FsbFxyXG4gICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5Q2FsbFwiXHJcbiAgICAgICAgICAgIDogaXNCaWRcclxuICAgICAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlCaWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPSAoXHJcbiAgICAgICAgICAgIDxQcmljZVRleHQgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9IHF1b3RlPXtxdW90ZX0gYmFzZT17YmFzZX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBcInN0aWNreS10YWJsZS1yb3cgb3JkZXItcm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1wiZmluYWwtcm93XCI6IGZpbmFsfSxcclxuICAgICAgICAgICAgICAgICAgICB7XCJteS1vcmRlclwiOiBvcmRlci5pc01pbmUodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRGb3JTYWxlXCIgOiBcImFtb3VudFRvUmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYW1vdW50VG9SZWNlaXZlXCIgOiBcImFtb3VudEZvclNhbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCAke2ludGVnZXJDbGFzc30gcmlnaHRgfT57cHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGVsZW1IZWlnaHQgPSBlbGVtID0+IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG5cclxuY2xhc3MgT3JkZXJCb29rUm93SG9yaXpvbnRhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBucC5vcmRlci5uZSh0aGlzLnByb3BzLm9yZGVyKSB8fFxyXG4gICAgICAgICAgICBucC5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fFxyXG4gICAgICAgICAgICBucC5pbmRleCAhPT0gdGhpcy5wcm9wcy5pbmRleCB8fFxyXG4gICAgICAgICAgICBucC5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7b3JkZXIsIHF1b3RlLCBiYXNlLCBwb3NpdGlvbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGlzQmlkID0gb3JkZXIuaXNCaWQoKTtcclxuICAgICAgICBjb25zdCBpc0NhbGwgPSBvcmRlci5pc0NhbGwoKTtcclxuXHJcbiAgICAgICAgbGV0IGludGVnZXJDbGFzcyA9IGlzQ2FsbFxyXG4gICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5Q2FsbFwiXHJcbiAgICAgICAgICAgIDogaXNCaWRcclxuICAgICAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlCaWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPSAoXHJcbiAgICAgICAgICAgIDxQcmljZVRleHQgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9IHF1b3RlPXtxdW90ZX0gYmFzZT17YmFzZX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSBpc0JpZFxyXG4gICAgICAgICAgICA/IHV0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyLmFtb3VudFRvUmVjZWl2ZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGlzQmlkXHJcbiAgICAgICAgICAgID8gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRUb1JlY2VpdmUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IGlzQmlkXHJcbiAgICAgICAgICAgID8gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgb3JkZXIudG90YWxGb3JTYWxlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IHV0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyLnRvdGFsVG9SZWNlaXZlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLmlzTWluZSh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSA/IFwibXktb3JkZXJcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Bvc2l0aW9uID09PSBcImxlZnRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiBcIjI1JVwifX0gY2xhc3NOYW1lPXtpbnRlZ2VyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Bvc2l0aW9uID09PSBcImxlZnRcIiA/IHZhbHVlIDogYW1vdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Bvc2l0aW9uID09PSBcImxlZnRcIiA/IGFtb3VudCA6IHZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7cG9zaXRpb24gPT09IFwicmlnaHRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiBcIjI1JVwifX0gY2xhc3NOYW1lPXtpbnRlZ2VyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR3JvdXBlZE9yZGVyQm9va1Jvd1ZlcnRpY2FsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xyXG4gICAgICAgIGlmIChucC5vcmRlci5tYXJrZXRfYmFzZSAhPT0gdGhpcy5wcm9wcy5vcmRlci5tYXJrZXRfYmFzZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5wLm9yZGVyLm5lKHRoaXMucHJvcHMub3JkZXIpIHx8XHJcbiAgICAgICAgICAgIG5wLmluZGV4ICE9PSB0aGlzLnByb3BzLmluZGV4IHx8XHJcbiAgICAgICAgICAgIG5wLmN1cnJlbnRBY2NvdW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtvcmRlciwgcXVvdGUsIGJhc2UsIGZpbmFsfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaXNCaWQgPSBvcmRlci5pc0JpZCgpO1xyXG4gICAgICAgIGxldCBpbnRlZ2VyQ2xhc3MgPSBpc0JpZCA/IFwib3JkZXJIaXN0b3J5QmlkXCIgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPSAoXHJcbiAgICAgICAgICAgIDxQcmljZVRleHQgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9IHF1b3RlPXtxdW90ZX0gYmFzZT17YmFzZX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInN0aWNreS10YWJsZS1yb3cgb3JkZXItcm93XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZpbmFsLXJvd1wiOiBmaW5hbFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjZWxsICR7aW50ZWdlckNsYXNzfSByaWdodGB9PntwcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR3JvdXBlZE9yZGVyQm9va1Jvd0hvcml6b250YWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbnAub3JkZXIubmUodGhpcy5wcm9wcy5vcmRlcikgfHxcclxuICAgICAgICAgICAgbnAucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb24gfHxcclxuICAgICAgICAgICAgbnAuaW5kZXggIT09IHRoaXMucHJvcHMuaW5kZXggfHxcclxuICAgICAgICAgICAgbnAuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge29yZGVyLCBxdW90ZSwgYmFzZSwgcG9zaXRpb259ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpc0JpZCA9IG9yZGVyLmlzQmlkKCk7XHJcblxyXG4gICAgICAgIGxldCBpbnRlZ2VyQ2xhc3MgPSBpc0JpZCA/IFwib3JkZXJIaXN0b3J5QmlkXCIgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPSAoXHJcbiAgICAgICAgICAgIDxQcmljZVRleHQgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9IHF1b3RlPXtxdW90ZX0gYmFzZT17YmFzZX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSBpc0JpZFxyXG4gICAgICAgICAgICA/IHV0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyLmFtb3VudFRvUmVjZWl2ZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGlzQmlkXHJcbiAgICAgICAgICAgID8gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRUb1JlY2VpdmUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IGlzQmlkXHJcbiAgICAgICAgICAgID8gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgb3JkZXIudG90YWxGb3JTYWxlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IHV0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyLnRvdGFsVG9SZWNlaXZlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cG9zaXRpb24gPT09IFwibGVmdFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCJ9fSBjbGFzc05hbWU9e2ludGVnZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDx0ZD57cG9zaXRpb24gPT09IFwibGVmdFwiID8gdmFsdWUgOiBhbW91bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57cG9zaXRpb24gPT09IFwibGVmdFwiID8gYW1vdW50IDogdmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIHtwb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCJ9fSBjbGFzc05hbWU9e2ludGVnZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHcm91cE9yZGVyTGltaXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGdyb3VwTGltaXQ6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z3JvdXBMaW1pdDogdGhpcy5wcm9wcy5jdXJyZW50R3JvdXBPcmRlckxpbWl0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IG5vR3JvdXBzQXZhaWxhYmxlID0gdGhpcy5wcm9wcy50cmFja2VkR3JvdXBzQ29uZmlnLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICBjb25zdCB0cmFja2VkR3JvdXBzT3B0aW9uc0xpc3QgPSB0aGlzLnByb3BzLnRyYWNrZWRHcm91cHNDb25maWcubWFwKFxyXG4gICAgICAgICAgICBrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17a2V5fSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake2tleSAvIDEwMH0lYH1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgZGlyPVwicnRsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdyb3VwTGltaXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRpcD17XHJcbiAgICAgICAgICAgICAgICAgICAgbm9Hcm91cHNBdmFpbGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm5vX2dyb3Vwc19hdmFpbGFibGVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17bm9Hcm91cHNBdmFpbGFibGUgPyB7Y3Vyc29yOiBcIm5vdC1hbGxvd2VkXCJ9IDogbnVsbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5ncm91cF9vcmRlcl9saW1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwib3B0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0cmFja2VkR3JvdXBzT3B0aW9uc0xpc3R9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE9yZGVyQm9vayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmxpcDogcHJvcHMuZmxpcE9yZGVyQm9vayxcclxuICAgICAgICAgICAgc2hvd0FsbEJpZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93QWxsQXNrczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJvd0NvdW50OiAyMCxcclxuICAgICAgICAgICAgYXV0b1Njcm9sbDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldFJlYWR5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjYWxscyBjaGFuZ2VkOlwiLCAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5jYWxscywgdGhpcy5wcm9wcy5jYWxscyksIG5leHRQcm9wcy5jYWxscyAmJiBuZXh0UHJvcHMuY2FsbHMudG9KUygpLCB0aGlzLnByb3BzLmNhbGxzICYmIHRoaXMucHJvcHMuY2FsbHMudG9KUygpKTtcclxuICAgIC8vICAgICBjb25zdCBjYWxsc0NoYW5nZWQgPSBkaWRPcmRlcnNDaGFuZ2UobmV4dFByb3BzLmNhbGxzLCB0aGlzLnByb3BzLmNhbGxzKTtcclxuICAgIC8vICAgICBjb25zdCBsaW1pdHNDaGFuZ2VkID0gZGlkT3JkZXJzQ2hhbmdlKG5leHRQcm9wcy5vcmRlcnMsIHRoaXMucHJvcHMub3JkZXJzKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNhbGxzQ2hhbmdlZDpcIiwgY2FsbHNDaGFuZ2VkLCBcImxpbWl0c0NoYW5nZWRcIiwgbGltaXRzQ2hhbmdlZCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIChcclxuICAgIC8vICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMub3JkZXJzLCB0aGlzLnByb3BzLm9yZGVycykgfHxcclxuICAgIC8vICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuY2FsbHMsIHRoaXMucHJvcHMuY2FsbHMpIHx8XHJcbiAgICAvLyAgICAgICAgIG5leHRQcm9wcy5ob3Jpem9udGFsICE9PSB0aGlzLnByb3BzLmhvcml6b250YWwgfHxcclxuICAgIC8vICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcy5sYXRlc3QsIHRoaXMucHJvcHMubGF0ZXN0KSB8fFxyXG4gICAgLy8gICAgICAgICBuZXh0UHJvcHMuc21hbGxTY3JlZW4gIT09IHRoaXMucHJvcHMuc21hbGxTY3JlZW4gfHxcclxuICAgIC8vICAgICAgICAgbmV4dFByb3BzLndyYXBwZXJDbGFzcyAhPT0gdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3MgfHxcclxuICAgIC8vICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgLy8gQ2hhbmdlIG9mIG1hcmtldCBvciBkaXJlY3Rpb25cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIikgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuYXNrVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmFza1RyYW5zaXRpb24ucmVzZXRBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuaG9yX2Fza3MpIHRoaXMucmVmcy5ob3JfYXNrcy5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5ob3JfYmlkcykgdGhpcy5yZWZzLmhvcl9iaWRzLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuYmlkVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmJpZFRyYW5zaXRpb24ucmVzZXRBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy52ZXJ0X2JpZHMpIHRoaXMucmVmcy52ZXJ0X2JpZHMuc2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthdXRvU2Nyb2xsOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNvbWJpbmVkQXNrcyxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tYmluZWRBc2tzXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNvbWJpbmVkQmlkcyxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tYmluZWRCaWRzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wc1VwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnlTdGlja3lUYWJsZSA9IHF1ZXJ5ID0+XHJcbiAgICAgICAgdGhpcy5yZWZzLnZlcnRpY2FsX3N0aWNreV90YWJsZS50YWJsZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuXHJcbiAgICB2ZXJ0aWNhbFNjcm9sbEJhciA9ICgpID0+IHRoaXMucXVlcnlTdGlja3lUYWJsZShcIiN5LXNjcm9sbGJhclwiKTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICBQcy5pbml0aWFsaXplKHRoaXMudmVydGljYWxTY3JvbGxCYXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVmVydGljYWxTY3JvbGxCYXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmlkc0NvbnRhaW5lciA9IHRoaXMucmVmcy5ob3JfYmlkcztcclxuICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShiaWRzQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgbGV0IGFza3NDb250YWluZXIgPSB0aGlzLnJlZnMuaG9yX2Fza3M7XHJcbiAgICAgICAgICAgIFBzLmluaXRpYWxpemUoYXNrc0NvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IHRoaXMucXVlcnlTdGlja3lUYWJsZShcclxuICAgICAgICAgICAgICAgIFwiI3N0aWNreS10YWJsZS15LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2VudGVyVGV4dENvbnRhaW5lciA9IHRoaXMucmVmcy5jZW50ZXJfdGV4dDtcclxuICAgICAgICAgICAgY29uc3QgY2VudGVyaW5nT2Zmc2V0ID0gMjE7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvID1cclxuICAgICAgICAgICAgICAgIGNlbnRlclRleHRDb250YWluZXIub2Zmc2V0VG9wIC1cclxuICAgICAgICAgICAgICAgIGVsZW1IZWlnaHQoc2Nyb2xsYWJsZUNvbnRhaW5lcikgLyAyICtcclxuICAgICAgICAgICAgICAgIGNlbnRlcmluZ09mZnNldDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gc2Nyb2xsYWJsZUNvbnRhaW5lci5zY3JvbGxUb3AgLSBzY3JvbGxUbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2VudGVyVmVydGljYWxTY3JvbGxCYXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IHRoaXMucXVlcnlTdGlja3lUYWJsZShcclxuICAgICAgICAgICAgICAgIFwiI3N0aWNreS10YWJsZS15LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBjZW50ZXJUZXh0Q29udGFpbmVyID0gdGhpcy5yZWZzLmNlbnRlcl90ZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBjZW50ZXJpbmdPZmZzZXQgPSAyMTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID1cclxuICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmF1dG9TY3JvbGwgJiYgdGhpcy5vZmZzZXQgPyB0aGlzLm9mZnNldCA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvID1cclxuICAgICAgICAgICAgICAgIGNlbnRlclRleHRDb250YWluZXIub2Zmc2V0VG9wIC1cclxuICAgICAgICAgICAgICAgIGVsZW1IZWlnaHQoc2Nyb2xsYWJsZUNvbnRhaW5lcikgLyAyICtcclxuICAgICAgICAgICAgICAgIGNlbnRlcmluZ09mZnNldCArXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge293blNjcm9sbDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoc2Nyb2xsYWJsZUNvbnRhaW5lci5zY3JvbGxUb3AgPSBzY3JvbGxUbylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHNVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgUHMudXBkYXRlKHRoaXMudmVydGljYWxTY3JvbGxCYXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVmVydGljYWxTY3JvbGxCYXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmlkc0NvbnRhaW5lciA9IHRoaXMucmVmcy5ob3JfYmlkcztcclxuICAgICAgICAgICAgUHMudXBkYXRlKGJpZHNDb250YWluZXIpO1xyXG4gICAgICAgICAgICBsZXQgYXNrc0NvbnRhaW5lciA9IHRoaXMucmVmcy5ob3JfYXNrcztcclxuICAgICAgICAgICAgUHMudXBkYXRlKGFza3NDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZmxpcEJ1eVNlbGwoKSB7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgZmxpcE9yZGVyQm9vazogIXRoaXMuc3RhdGUuZmxpcFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmbGlwOiAhdGhpcy5zdGF0ZS5mbGlwfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG9nZ2xlU2hvd0FsbCh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYXNrc1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsbEFza3M6ICF0aGlzLnN0YXRlLnNob3dBbGxBc2tzXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsbEFza3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5ob3JfYXNrcy5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxsQmlkczogIXRoaXMuc3RhdGUuc2hvd0FsbEJpZHNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxsQmlkcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmhvcl9iaWRzLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU3ByZWFkVmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRpc3BsYXlTcHJlYWRBc1BlcmNlbnRhZ2U6ICF0aGlzLnN0YXRlLmRpc3BsYXlTcHJlYWRBc1BlcmNlbnRhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdG9nZ2xlQXV0b1Njcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHthdXRvU2Nyb2xsOiAhdGhpcy5zdGF0ZS5hdXRvU2Nyb2xsfTtcclxuICAgICAgICBpZiAobmV3U3RhdGUuYXV0b1Njcm9sbClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSwgdGhpcy5jZW50ZXJWZXJ0aWNhbFNjcm9sbEJhcik7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcclxuICAgICAgICAgICAgY29tYmluZWRBc2tzLFxyXG4gICAgICAgICAgICBoaWdoZXN0QmlkLFxyXG4gICAgICAgICAgICBsb3dlc3RBc2ssXHJcbiAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICB0b3RhbEFza3MsXHJcbiAgICAgICAgICAgIHRvdGFsQmlkcyxcclxuICAgICAgICAgICAgcXVvdGVTeW1ib2wsXHJcbiAgICAgICAgICAgIGJhc2VTeW1ib2wsXHJcbiAgICAgICAgICAgIGhvcml6b250YWwsXHJcbiAgICAgICAgICAgIHRyYWNrZWRHcm91cHNDb25maWcsXHJcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQsXHJcbiAgICAgICAgICAgIGhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZSxcclxuICAgICAgICAgICAgZ3JvdXBlZEJpZHMsXHJcbiAgICAgICAgICAgIGdyb3VwZWRBc2tzXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgc2hvd0FsbEFza3MsXHJcbiAgICAgICAgICAgIHNob3dBbGxCaWRzLFxyXG4gICAgICAgICAgICByb3dDb3VudCxcclxuICAgICAgICAgICAgZGlzcGxheVNwcmVhZEFzUGVyY2VudGFnZVxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG5vT3JkZXJzID0gIWxvd2VzdEFzay5zZWxsX3ByaWNlICYmICFoaWdoZXN0QmlkLnNlbGxfcHJpY2U7XHJcbiAgICAgICAgY29uc3QgaGFzQXNrQW5kQmlkcyA9ICEhKGxvd2VzdEFzay5zZWxsX3ByaWNlICYmIGhpZ2hlc3RCaWQuc2VsbF9wcmljZSk7XHJcbiAgICAgICAgY29uc3Qgc3ByZWFkID1cclxuICAgICAgICAgICAgaGFzQXNrQW5kQmlkcyAmJlxyXG4gICAgICAgICAgICAoZGlzcGxheVNwcmVhZEFzUGVyY2VudGFnZSA/IChcclxuICAgICAgICAgICAgICAgIGAkeyhcclxuICAgICAgICAgICAgICAgICAgICAxMDAgKlxyXG4gICAgICAgICAgICAgICAgICAgIChsb3dlc3RBc2suX3JlYWxfcHJpY2UgLyBoaWdoZXN0QmlkLl9yZWFsX3ByaWNlIC0gMSlcclxuICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKX0lYFxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPFByaWNlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtsb3dlc3RBc2suX3JlYWxfcHJpY2UgLSBoaWdoZXN0QmlkLl9yZWFsX3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgbGV0IGJpZFJvd3MgPSBudWxsLFxyXG4gICAgICAgICAgICBhc2tSb3dzID0gbnVsbDtcclxuICAgICAgICBpZiAoYmFzZSAmJiBxdW90ZSkge1xyXG4gICAgICAgICAgICAvLyBsaW1pdCBvcmRlcnMgb3IgZ3JvdXBlZCBvcmRlcnNcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEdyb3VwT3JkZXJMaW1pdCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYmlkUm93cyA9IGdyb3VwZWRCaWRzLm1hcCgob3JkZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvcml6b250YWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cGVkT3JkZXJCb29rUm93SG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXRQcmljZSgpICsgKG9yZGVyLmlzQmlkKCkgPyBcIl9iaWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249eyF0aGlzLnN0YXRlLmZsaXAgPyBcImxlZnRcIiA6IFwicmlnaHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cGVkT3JkZXJCb29rUm93VmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArIChvcmRlci5pc0JpZCgpID8gXCJfYmlkXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcEFza3MgPSBncm91cGVkQXNrcztcclxuICAgICAgICAgICAgICAgIGlmICghaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBBc2tzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuZ2V0UHJpY2UoKSAtIGEuZ2V0UHJpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFza1Jvd3MgPSB0ZW1wQXNrcy5tYXAoKG9yZGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBlZE9yZGVyQm9va1Jvd0hvcml6b250YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArIChvcmRlci5pc0JpZCgpID8gXCJfYmlkXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e29yZGVyLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17IXRoaXMuc3RhdGUuZmxpcCA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwZWRPcmRlckJvb2tSb3dWZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXRQcmljZSgpICsgKG9yZGVyLmlzQmlkKCkgPyBcIl9iaWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17b3JkZXIudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsPXswID09PSBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJpZFJvd3MgPSBjb21iaW5lZEJpZHMubWFwKChvcmRlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyQm9va1Jvd0hvcml6b250YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9yZGVyLmlzQ2FsbCgpID8gXCJfY2FsbFwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGljay5iaW5kKHRoaXMsIG9yZGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17IXRoaXMuc3RhdGUuZmxpcCA/IFwibGVmdFwiIDogXCJyaWdodFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyQm9va1Jvd1ZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldFByaWNlKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcmRlci5pc0NhbGwoKSA/IFwiX2NhbGxcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQXNrcyA9IGNvbWJpbmVkQXNrcztcclxuICAgICAgICAgICAgICAgIHRlbXBBc2tzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5nZXRQcmljZSgpIC0gYi5nZXRQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmdldFByaWNlKCkgLSBhLmdldFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhc2tSb3dzID0gdGVtcEFza3MubWFwKChvcmRlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyQm9va1Jvd0hvcml6b250YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9yZGVyLmlzQ2FsbCgpID8gXCJfY2FsbFwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGljay5iaW5kKHRoaXMsIG9yZGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtvcmRlci50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249eyF0aGlzLnN0YXRlLmZsaXAgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlckJvb2tSb3dWZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXRQcmljZSgpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3JkZXIuaXNDYWxsKCkgPyBcIl9jYWxsXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e29yZGVyLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbD17MCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgbGV0IHRvdGFsQmlkc0xlbmd0aCA9IGJpZFJvd3MubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgdG90YWxBc2tzTGVuZ3RoID0gYXNrUm93cy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNob3dBbGxCaWRzKSB7XHJcbiAgICAgICAgICAgICAgICBiaWRSb3dzLnNwbGljZShyb3dDb3VudCwgYmlkUm93cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNob3dBbGxBc2tzKSB7XHJcbiAgICAgICAgICAgICAgICBhc2tSb3dzLnNwbGljZShyb3dDb3VudCwgYXNrUm93cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdEhlYWRlciA9IChcclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwidG9wLWhlYWRlclwiIGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS50b3RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlU3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZVN5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZsaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhc2stdG90YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJpZC10b3RhbFwiKSArIFwiIGhlYWRlci1zdWItdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByaWdodEhlYWRlciA9IChcclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwidG9wLWhlYWRlclwiIGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5mbGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXNrLXRvdGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiaWQtdG90YWxcIikgKyBcIiBoZWFkZXItc3ViLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlU3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlU3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnRvdGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2VTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JpZC1ibG9jayBvcmRlcmJvb2sgbm8tcGFkZGluZyBzbWFsbC12ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBhbGlnbi1zcGFjZWQgbm8tb3ZlcmZsb3cgc21hbGwtMTIgeGxhcmdlLThcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNtYWxsLTEyIG1lZGl1bS02IG1pZGRsZS1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZsaXAgPyBcIm9yZGVyLTFcIiA6IFwib3JkZXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtY29udGVudC1oZWFkZXIgYXNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guc2VsbF9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYXNrc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmxpcCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZmxpcEJ1eVNlbGwuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlwLWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1ib29rLWJ1dHRvbi12XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm1vdmVPcmRlckJvb2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRodW1iLXRhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnRodW1iX3RhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZsaXAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaGVhZGVyLXN1Yi10aXRsZSBncm91cGVkX29yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhY2tlZEdyb3Vwc0NvbmZpZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBPcmRlckxpbWl0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja2VkR3JvdXBzQ29uZmlnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bGluZUhlaWdodDogXCIxNnB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBoZWFkZXItc3ViLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnRvdGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxBc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBc3NldE5hbWUgbmFtZT17cXVvdGVTeW1ib2x9IC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiMC42cmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGFibGUtaG92ZXIgZml4ZWQtdGFibGUgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuZmxpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByaWdodEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZWZ0SGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJob3JfYXNrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjAuNnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBvcmRlci10YWJsZSB0YWJsZS1ob3ZlciBmaXhlZC10YWJsZSB0ZXh0LXJpZ2h0IG5vLW92ZXJmbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYXNrVHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcmJvb2sgY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fza1Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsQXNrc0xlbmd0aCA+IHJvd0NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJib29rLXNob3dhbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uVG9nZ2xlU2hvd0FsbC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsbEFza3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJleGNoYW5nZS5oaWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJleGNoYW5nZS5zaG93X2Fza3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNob3dBbGxBc2tzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAoe3RvdGFsQXNrc0xlbmd0aH0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNtYWxsLTEyIG1lZGl1bS02IG1pZGRsZS1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZsaXAgPyBcIm9yZGVyLTJcIiA6IFwib3JkZXItMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtY29udGVudC1oZWFkZXIgYmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guYnV5X29yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iaWRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuZmxpcCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZmxpcEJ1eVNlbGwuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlwLWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1ib29rLWJ1dHRvbi12XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm1vdmVPcmRlckJvb2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRodW1iLXRhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnRodW1iX3RhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5mbGlwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGhlYWRlci1zdWItdGl0bGUgZ3JvdXBlZF9vcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrZWRHcm91cHNDb25maWcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwT3JkZXJMaW1pdFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrZWRHcm91cHNDb25maWc9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMTZweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS50b3RhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQmlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBc3NldE5hbWUgbmFtZT17YmFzZVN5bWJvbH0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIwLjZyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBvcmRlci10YWJsZSB0YWJsZS1ob3ZlciBmaXhlZC10YWJsZSB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZsaXAgPyByaWdodEhlYWRlciA6IGxlZnRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImhvcl9iaWRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMC42cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogNX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRhYmxlLWhvdmVyIGZpeGVkLXRhYmxlIHRleHQtcmlnaHQgbm8tb3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJiaWRUcmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyYm9vayBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmlkUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxCaWRzTGVuZ3RoID4gcm93Q291bnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcmJvb2stc2hvd2FsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Ub2dnbGVTaG93QWxsLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxsQmlkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4Y2hhbmdlLmhpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImV4Y2hhbmdlLnNob3dfYmlkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2hvd0FsbEJpZHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICh7dG90YWxCaWRzTGVuZ3RofSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVmVydGljYWwgb3JkZXJib29rXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtb3JkZXItYm9vayBuby1wYWRkaW5nIG5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci10YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGlja3lDb2x1bW5Db3VudD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlIHRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInZlcnRpY2FsX3N0aWNreV90YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LXRhYmxlLXJvdyB0b3AtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIGhlYWRlci1jZWxsIGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtiYXNlU3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIGhlYWRlci1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17cXVvdGVTeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgaGVhZGVyLWNlbGwgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJhc2tUcmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWNvbnRhaW5lciBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc2tSb3dzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc2tSb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbm9PcmRlcnMgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10YWJsZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbGwgbm8tb3JkZXJzIHBhZHRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm5vX2Fza3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10YWJsZS1yb3dcIiByZWY9XCJjZW50ZXJfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub09yZGVycyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tb3JkZXJzIHBhZHRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm5vX29yZGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZWxsIGNlbnRlci1jZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcmJvb2stbGF0ZXN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzcHJlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhc3ByZWFkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIGxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9nZ2xlU3ByZWFkVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc3ByZWFkXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ByZWFkLXZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzcHJlYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9jay11bmxvY2sgY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0b1Njcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdXRvU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsb2NrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidW5sb2NrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXV0b1Njcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbnMubG9ja2VkLmVuYWJsZV9hdXRvX3Njcm9sbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpY29ucy51bmxvY2tlZC5kaXNhYmxlX2F1dG9fc2Nyb2xsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdGhpcy5wcm9wcy5sYXRlc3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5sYXRlc3RcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VDbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGF0ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJiaWRUcmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWNvbnRhaW5lciBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaWRSb3dzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiaWRSb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbm9PcmRlcnMgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10YWJsZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbGwgbm8tb3JkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uubm9fYmlkc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGlja3lUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtYWxpZ24gbm8tcGFkZGluZyBhbGlnbi1jZW50ZXIgZ3JpZC1ibG9jayBmb290ZXIgc2hyaW5rIGJvdHRvbS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidi1hbGlnbiBncmlkLWJsb2NrIGFsaWduLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogXCIycmVtXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGh1bWItdW50YWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnRodW1iX3VudGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4IG9yZGVyLWJvb2stYnV0dG9uLWhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dG9wOiBcIi0wLjVyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5tb3ZlT3JkZXJCb29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1hbGlnbiBncmlkLWJsb2NrIGFsaWduLWNlbnRlciBncm91cGVkX29yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhY2tlZEdyb3Vwc0NvbmZpZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBPcmRlckxpbWl0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZz17dHJhY2tlZEdyb3Vwc0NvbmZpZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuT3JkZXJCb29rLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGJpZHM6IFtdLFxyXG4gICAgYXNrczogW10sXHJcbiAgICBvcmRlcnM6IHt9XHJcbn07XHJcblxyXG5PcmRlckJvb2sucHJvcFR5cGVzID0ge1xyXG4gICAgYmlkczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBhc2tzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIG9yZGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckJvb2s7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBtYXJrZXRfdXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcclxuaW1wb3J0IFByaWNlVGV4dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZVRleHRcIjtcclxuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQge0NoYWluVHlwZXMgYXMgZ3JhcGhlbmVDaGFpblR5cGVzfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xyXG5pbXBvcnQgQmxvY2tEYXRlIGZyb20gXCIuLi9VdGlsaXR5L0Jsb2NrRGF0ZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcclxuaW1wb3J0IGdldExvY2FsZSBmcm9tIFwiYnJvd3Nlci1sb2NhbGVcIjtcclxuaW1wb3J0IHtGaWxsT3JkZXJ9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5cclxuY2xhc3MgTWFya2V0SGlzdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiaGlzdG9yeVRhYlwiLCBcImhpc3RvcnlcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldFJlYWR5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuaGlzdG9yeSwgdGhpcy5wcm9wcy5oaXN0b3J5KSB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFzZVN5bWJvbCAhPT0gdGhpcy5wcm9wcy5iYXNlU3ltYm9sIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZVN5bWJvbCAhPT0gdGhpcy5wcm9wcy5xdW90ZVN5bWJvbCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuY2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmNsYXNzTmFtZSB8fFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUuYWN0aXZlVGFiICE9PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYiB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBoaXN0b3J5Q29udGFpbmVyID0gdGhpcy5yZWZzLmhpc3Rvcnk7XHJcbiAgICAgICAgUHMuaW5pdGlhbGl6ZShoaXN0b3J5Q29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuaGlzdG9yeTtcclxuICAgICAgICBQcy51cGRhdGUoaGlzdG9yeUNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoYW5nZVRhYih0YWIpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBoaXN0b3J5VGFiOiB0YWJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgZm9jdXMgZ29lcyBiYWNrIHRvIHRvcCBvZiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRhYiBpcyBjaGFuZ2VkXHJcbiAgICAgICAgbGV0IGhpc3RvcnlOb2RlID0gdGhpcy5yZWZzLmhpc3Rvcnk7XHJcbiAgICAgICAgaGlzdG9yeU5vZGUuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBQcy51cGRhdGUoaGlzdG9yeU5vZGUpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KFJlYWN0VG9vbHRpcC5yZWJ1aWxkLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgaGlzdG9yeSxcclxuICAgICAgICAgICAgbXlIaXN0b3J5LFxyXG4gICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgYmFzZVN5bWJvbCxcclxuICAgICAgICAgICAgcXVvdGVTeW1ib2wsXHJcbiAgICAgICAgICAgIGlzTnVsbEFjY291bnRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge2FjdGl2ZVRhYn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBoaXN0b3J5Um93cyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc051bGxBY2NvdW50KSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9IFwiaGlzdG9yeVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge1xyXG4gICAgICAgICAgICBbcXVvdGUuZ2V0KFwiaWRcIildOiB7XHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYmFzZS5nZXQoXCJpZFwiKV06IHtcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVUYWIgPT09IFwibXlfaGlzdG9yeVwiICYmIChteUhpc3RvcnkgJiYgbXlIaXN0b3J5LnNpemUpKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlSb3dzID0gbXlIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcFR5cGUgPSBhLmdldEluKFtcIm9wXCIsIDBdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BUeXBlID09PSBvcGVyYXRpb25zLmZpbGxfb3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVJRCA9IHF1b3RlLmdldChcImlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlSUQgPSBiYXNlLmdldChcImlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXlzID0gYS5nZXRJbihbXCJvcFwiLCAxLCBcInBheXNcIiwgXCJhc3NldF9pZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY2VpdmVzID0gYS5nZXRJbihbXCJvcFwiLCAxLCBcInJlY2VpdmVzXCIsIFwiYXNzZXRfaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNRdW90ZSA9IHF1b3RlSUQgPT09IHBheXMgfHwgcXVvdGVJRCA9PT0gcmVjZWl2ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0Jhc2UgPSBiYXNlSUQgPT09IHBheXMgfHwgYmFzZUlEID09PSByZWNlaXZlcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFzUXVvdGUgJiYgaGFzQmFzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmdldChcImJsb2NrX251bVwiKSAtIGEuZ2V0KFwiYmxvY2tfbnVtXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAodHJ4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsbCA9IG5ldyBGaWxsT3JkZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeC50b0pTKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtmaWxsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2ZpbGwuY2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtmaWxsLmdldFByaWNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e3RoaXMucHJvcHMuYmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3RoaXMucHJvcHMucXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZpbGwuYW1vdW50VG9SZWNlaXZlKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmlsbC5hbW91bnRUb1BheSgpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX251bWJlcj17ZmlsbC5ibG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhpc3RvcnkgJiYgaGlzdG9yeS5zaXplKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlSb3dzID0gdGhpcy5wcm9wcy5oaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAudGFrZSgxMDApXHJcbiAgICAgICAgICAgICAgICAubWFwKGZpbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiaGlzdG9yeV9cIiArIGZpbGwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17ZmlsbC5jbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2ZpbGwuZ2V0UHJpY2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17dGhpcy5wcm9wcy5iYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17dGhpcy5wcm9wcy5xdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmlsbC5hbW91bnRUb1JlY2VpdmUoKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmaWxsLmFtb3VudFRvUGF5KCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0b29sdGlwXCIgZGF0YS10aXA9e2ZpbGwudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LmxvY2FsaXplKGZpbGwudGltZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TG9jYWxlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKFwiZW4tdXNcIikgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1hcmtldF9oaXN0b3J5X3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibWFya2V0X2hpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGMgPSBcIm15bWFya2V0cy1oZWFkZXIgY2xpY2thYmxlXCI7XHJcbiAgICAgICAgbGV0IGhpc3RvcnlDbGFzcyA9IGNuYW1lcyhoYywge2luYWN0aXZlOiBhY3RpdmVUYWIgPT09IFwibXlfaGlzdG9yeVwifSk7XHJcbiAgICAgICAgbGV0IG15SGlzdG9yeUNsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6IGFjdGl2ZVRhYiA9PT0gXCJoaXN0b3J5XCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1ib3JkZXJlZCBzbWFsbC0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IFwiYXV0b1wifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgYm90dG9tLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhteUhpc3RvcnlDbGFzcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc051bGxBY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwibXlfaGlzdG9yeVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubXlfaGlzdG9yeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hpc3RvcnlDbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwiaGlzdG9yeVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuaGlzdG9yeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgbGVmdC1vcmRlcmJvb2staGVhZGVyIG1hcmtldC1yaWdodC1wYWRkaW5nLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRleHQtcmlnaHQgZml4ZWQtdGFibGUgbWFya2V0LXJpZ2h0LXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGVTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YmFzZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lciBncmlkLWJsb2NrIG1hcmtldC1yaWdodC1wYWRkaW5nLW9ubHkgbm8tb3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJoaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6IDIxMCwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRleHQtcmlnaHQgZml4ZWQtdGFibGUgbWFya2V0LXJpZ2h0LXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hpc3RvcnlSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NYXJrZXRIaXN0b3J5LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhpc3Rvcnk6IFtdXHJcbn07XHJcblxyXG5NYXJrZXRIaXN0b3J5LnByb3BUeXBlcyA9IHtcclxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIE1hcmtldEhpc3RvcnksXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQmxvY2tjaGFpblN0b3JlIGZyb20gXCJzdG9yZXMvQmxvY2tjaGFpblN0b3JlXCI7XHJcbmltcG9ydCBCbG9ja2NoYWluQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CbG9ja2NoYWluQWN0aW9uc1wiO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XHJcbmltcG9ydCBnZXRMb2NhbGUgZnJvbSBcImJyb3dzZXItbG9jYWxlXCI7XHJcblxyXG4vKipcclxuICogQGJyaWVmIGRpc3BsYXlzIGJsb2NrJ3MgZGF0ZSBhbmQgdGltZSBiYXNlZCBvbiBibG9jayBudW1iZXJcclxuICpcclxuICogcHJvcGVydGllczogYmxvY2sgLSBudW1iZXJcclxuICogTm90ZSwgaXQgZG9lc24ndCBmZXRjaCBibG9jaywganVzdCBjYWxjdWxhdGVzIHRpbWUgYmFzZWQgb24gbnVtYmVyIGFsb25lLlxyXG4gKiovXHJcblxyXG5jbGFzcyBCbG9ja0RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBmb3JtYXQ6XHJcbiAgICAgICAgICAgIGdldExvY2FsZSgpXHJcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgLmluZGV4T2YoXCJlbi11c1wiKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgID8gXCJtYXJrZXRfaGlzdG9yeV91c1wiXHJcbiAgICAgICAgICAgICAgICA6IFwibWFya2V0X2hpc3RvcnlcIixcclxuICAgICAgICB0b29sdGlwOiBmYWxzZSxcclxuICAgICAgICBjb21wb25lbnQ6IFwic3BhblwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmxvY2tIZWFkZXIpXHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5BY3Rpb25zLmdldEhlYWRlci5kZWZlcih0aGlzLnByb3BzLmJsb2NrX251bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XHJcbiAgICAgICAgaWYgKG5wLmJsb2NrSGVhZGVyICYmICF0aGlzLnByb3BzLmJsb2NrSGVhZGVyKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFJlYWN0VG9vbHRpcC5yZWJ1aWxkLCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gbnAuYmxvY2tIZWFkZXIgIT09IHRoaXMucHJvcHMuYmxvY2tIZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtibG9ja0hlYWRlciwgdG9vbHRpcCwgY29tcG9uZW50LCBmb3JtYXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoIWJsb2NrSGVhZGVyKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQpO1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdG9vbHRpcCA/IFwidG9vbHRpcFwiIDogXCJcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YS10aXBcIjogdG9vbHRpcCA/IGJsb2NrSGVhZGVyLnRpbWVzdGFtcCA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQubG9jYWxpemUoYmxvY2tIZWFkZXIudGltZXN0YW1wLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJsb2NrRGF0ZSA9IGNvbm5lY3QoXHJcbiAgICBCbG9ja0RhdGUsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQmxvY2tjaGFpblN0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBibG9ja0hlYWRlcjogQmxvY2tjaGFpblN0b3JlLmdldFN0YXRlKCkuYmxvY2tIZWFkZXJzLmdldChcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5ibG9ja19udW1iZXJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja0RhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgUHJpY2VUZXh0IGZyb20gXCIuLi9VdGlsaXR5L1ByaWNlVGV4dFwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgU2ltcGxlRGVwb3NpdFdpdGhkcmF3IGZyb20gXCIuLi9EYXNoYm9hcmQvU2ltcGxlRGVwb3NpdFdpdGhkcmF3XCI7XHJcbmltcG9ydCBTaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UgZnJvbSBcIi4uL0Rhc2hib2FyZC9TaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2VcIjtcclxuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCBFeGNoYW5nZUlucHV0IGZyb20gXCIuL0V4Y2hhbmdlSW5wdXRcIjtcclxuaW1wb3J0IGFzc2V0VXRpbHMgZnJvbSBcImNvbW1vbi9hc3NldF91dGlsc1wiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlcjIvc3JjL1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5cclxuY2xhc3MgQnV5U2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGJhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXHJcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhbW91bnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgcHJpY2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25FeHBpcmF0aW9uVHlwZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBvbkV4cGlyYXRpb25DdXN0b21DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICB0eXBlOiBcImJpZFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuYW1vdW50ICE9PSB0aGlzLnByb3BzLmFtb3VudCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMub25Cb3Jyb3cgIT09IHRoaXMucHJvcHMub25Cb3Jyb3cgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnRvdGFsICE9PSB0aGlzLnByb3BzLnRvdGFsIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50UHJpY2UgIT09IHRoaXMucHJvcHMuY3VycmVudFByaWNlIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmljZSAhPT0gdGhpcy5wcm9wcy5wcmljZSB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFsYW5jZSAhPT0gdGhpcy5wcm9wcy5iYWxhbmNlIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5jbGFzc05hbWUgfHxcclxuICAgICAgICAgICAgKG5leHRQcm9wcy5mZWUgJiYgdGhpcy5wcm9wcy5mZWVcclxuICAgICAgICAgICAgICAgID8gbmV4dFByb3BzLmZlZS5uZSh0aGlzLnByb3BzLmZlZSlcclxuICAgICAgICAgICAgICAgIDogZmFsc2UpIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5pc1ByZWRpY3Rpb25NYXJrZXQgIT09IHRoaXMucHJvcHMuaXNQcmVkaWN0aW9uTWFya2V0IHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5mZWVBc3NldCAhPT0gdGhpcy5wcm9wcy5mZWVBc3NldCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuaXNPcGVuICE9PSB0aGlzLnByb3BzLmlzT3BlbiB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuaGFzRmVlQmFsYW5jZSAhPT0gdGhpcy5wcm9wcy5oYXNGZWVCYWxhbmNlIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5leHBpcmF0aW9uVHlwZSAhPT0gdGhpcy5wcm9wcy5leHBpcmF0aW9uVHlwZSB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuZXhwaXJhdGlvbkN1c3RvbVRpbWUgIT09IHRoaXMucHJvcHMuZXhwaXJhdGlvbkN1c3RvbVRpbWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9hZGRCYWxhbmNlKGJhbGFuY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImJpZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG90YWxDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7dmFsdWU6IGJhbGFuY2UuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hbW91bnRDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7dmFsdWU6IGJhbGFuY2UuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXRQcmljZShwcmljZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMucHJpY2VDaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiBwcmljZS50b1N0cmluZygpfX0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRlcG9zaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnJlZnMuZGVwb3NpdF9tb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQnV5KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5yZWZzLmJyaWRnZV9tb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICBhbW91bnRDaGFuZ2UsXHJcbiAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0LFxyXG4gICAgICAgICAgICBwcmljZUNoYW5nZSxcclxuICAgICAgICAgICAgb25TdWJtaXQsXHJcbiAgICAgICAgICAgIGJhbGFuY2UsXHJcbiAgICAgICAgICAgIHRvdGFsQ2hhbmdlLFxyXG4gICAgICAgICAgICBiYWxhbmNlUHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50UHJpY2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcmljZU9iamVjdCxcclxuICAgICAgICAgICAgZmVlQXNzZXQsXHJcbiAgICAgICAgICAgIGZlZUFzc2V0cyxcclxuICAgICAgICAgICAgaGFzRmVlQmFsYW5jZSxcclxuICAgICAgICAgICAgYmFja2VkQ29pblxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBhbW91bnQsIHByaWNlLCB0b3RhbDtcclxuICAgICAgICBsZXQgY2FyZXQgPSB0aGlzLnByb3BzLmlzT3BlbiA/IChcclxuICAgICAgICAgICAgPHNwYW4+JiM5NjYwOzwvc3Bhbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj4mIzk2NTA7PC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFtb3VudCkgYW1vdW50ID0gdGhpcy5wcm9wcy5hbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJpY2UpIHByaWNlID0gdGhpcy5wcm9wcy5wcmljZTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50b3RhbCkgdG90YWwgPSB0aGlzLnByb3BzLnRvdGFsO1xyXG5cclxuICAgICAgICBsZXQgYmFsYW5jZUFtb3VudCA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogYmFsYW5jZSA/IGJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSA6IDAsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogYmFsYW5jZVByZWNpc2lvbixcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYmFsYW5jZUlkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heEJhc2VNYXJrZXRGZWUgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGJhc2UuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1heF9tYXJrZXRfZmVlXCJdKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IGJhc2UuZ2V0KFwiYXNzZXRfaWRcIiksXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtYXhRdW90ZU1hcmtldEZlZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogcXVvdGUuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1heF9tYXJrZXRfZmVlXCJdKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHF1b3RlLmdldChcImFzc2V0X2lkXCIpLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGJhc2VNYXJrZXRGZWVQZXJjZW50ID1cclxuICAgICAgICAgICAgYmFzZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvIDEwMCArIFwiJVwiO1xyXG4gICAgICAgIGNvbnN0IHF1b3RlTWFya2V0RmVlUGVyY2VudCA9XHJcbiAgICAgICAgICAgIHF1b3RlLmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC8gMTAwICsgXCIlXCI7XHJcbiAgICAgICAgY29uc3QgcXVvdGVGZWUgPSAhYW1vdW50XHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICBtYXhRdW90ZU1hcmtldEZlZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgYW1vdW50ICpcclxuICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC9cclxuICAgICAgICAgICAgICAgICAgICAgIDEwMDAwXHJcbiAgICAgICAgICAgICAgKS50b0ZpeGVkKG1heFF1b3RlTWFya2V0RmVlLnByZWNpc2lvbik7XHJcbiAgICAgICAgY29uc3QgYmFzZUZlZSA9ICFhbW91bnRcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgIG1heEJhc2VNYXJrZXRGZWUuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsICogYmFzZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvIDEwMDAwXHJcbiAgICAgICAgICAgICAgKS50b0ZpeGVkKG1heEJhc2VNYXJrZXRGZWUucHJlY2lzaW9uKTtcclxuICAgICAgICBjb25zdCBiYXNlRmxhZ0Jvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoXHJcbiAgICAgICAgICAgIGJhc2UuZ2V0SW4oW1wib3B0aW9uc1wiLCBcImZsYWdzXCJdKSxcclxuICAgICAgICAgICAgYmFzZS5oYXMoXCJiaXRhc3NldF9kYXRhX2lkXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBxdW90ZUZsYWdCb29sZWFucyA9IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxyXG4gICAgICAgICAgICBxdW90ZS5nZXRJbihbXCJvcHRpb25zXCIsIFwiZmxhZ3NcIl0pLFxyXG4gICAgICAgICAgICBxdW90ZS5oYXMoXCJiaXRhc3NldF9kYXRhX2lkXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qge25hbWU6IGJhc2VOYW1lLCBwcmVmaXg6IGJhc2VQcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgaGFzTWFya2V0RmVlID1cclxuICAgICAgICAgICAgYmFzZUZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdIHx8XHJcbiAgICAgICAgICAgIHF1b3RlRmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl07XHJcbiAgICAgICAgdmFyIGJhc2VNYXJrZXRGZWUgPSBiYXNlRmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz46Jm5ic3A7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlTWFya2V0RmVlUGVyY2VudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlTWFya2V0RmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jhc2VGZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbm9UaXAgbmFtZT17YmFzZS5nZXQoXCJzeW1ib2xcIil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAubWFya2V0X2ZlZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiAoYmFzZVByZWZpeCB8fCBcIlwiKSArIGJhc2VOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBoYXNNYXJrZXRGZWUgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz46XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHtuYW1lOiBxdW90ZU5hbWUsIHByZWZpeDogcXVvdGVQcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBxdW90ZU1hcmtldEZlZSA9IHF1b3RlRmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz46Jm5ic3A7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZU1hcmtldEZlZVBlcmNlbnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC00IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVNYXJrZXRGZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVvdGVGZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbm9UaXAgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm1hcmtldF9mZWVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IChxdW90ZVByZWZpeCB8fCBcIlwiKSArIHF1b3RlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7PEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5xdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogaGFzTWFya2V0RmVlID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBidXktc2VsbC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMyBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZVwiIC8+OlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBpZiAoIWJhbGFuY2VBbW91bnQpIHtcclxuICAgICAgICAvLyAgICAgYmFsYW5jZUFtb3VudCA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnN0IGlzQmlkID0gdHlwZSA9PT0gXCJiaWRcIjtcclxuICAgICAgICBsZXQgbWFya2V0RmVlID1cclxuICAgICAgICAgICAgaXNCaWQgJiYgcXVvdGVNYXJrZXRGZWVcclxuICAgICAgICAgICAgICAgID8gcXVvdGVNYXJrZXRGZWVcclxuICAgICAgICAgICAgICAgIDogIWlzQmlkICYmIGJhc2VNYXJrZXRGZWVcclxuICAgICAgICAgICAgICAgICAgICA/IGJhc2VNYXJrZXRGZWVcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgbGV0IGhhc0JhbGFuY2UgPSBpc0JpZFxyXG4gICAgICAgICAgICA/IGJhbGFuY2VBbW91bnQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkgPj0gcGFyc2VGbG9hdCh0b3RhbClcclxuICAgICAgICAgICAgOiBiYWxhbmNlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pID49IHBhcnNlRmxvYXQoYW1vdW50KTtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvblRleHQgPSBpc1ByZWRpY3Rpb25NYXJrZXRcclxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5zaG9ydFwiKVxyXG4gICAgICAgICAgICA6IGlzQmlkXHJcbiAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmJ1eVwiKVxyXG4gICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5zZWxsXCIpO1xyXG4gICAgICAgIGxldCBmb3JjZVNlbGxUZXh0ID0gaXNCaWRcclxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5idXlcIilcclxuICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5zZWxsXCIpO1xyXG5cclxuICAgICAgICBsZXQgbm9CYWxhbmNlID0gaXNQcmVkaWN0aW9uTWFya2V0XHJcbiAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgOiAhKGJhbGFuY2VBbW91bnQuZ2V0QW1vdW50KCkgPiAwICYmIGhhc0JhbGFuY2UpO1xyXG4gICAgICAgIGxldCBpbnZhbGlkUHJpY2UgPSAhKHByaWNlID4gMCk7XHJcbiAgICAgICAgbGV0IGludmFsaWRBbW91bnQgPSAhKGFtb3VudCA+IDApO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZWQgPSBub0JhbGFuY2UgfHwgaW52YWxpZFByaWNlIHx8IGludmFsaWRBbW91bnQ7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25DbGFzcyA9IGNsYXNzTmFtZXMoXCJidXR0b24gYnV5U2VsbEJ1dHRvblwiLCB0eXBlLCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBiYWxhbmNlU3ltYm9sID0gaXNCaWQgPyBiYXNlLmdldChcInN5bWJvbFwiKSA6IHF1b3RlLmdldChcInN5bWJvbFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVkVGV4dCA9IGludmFsaWRQcmljZVxyXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmludmFsaWRfcHJpY2VcIilcclxuICAgICAgICAgICAgOiBpbnZhbGlkQW1vdW50XHJcbiAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmludmFsaWRfYW1vdW50XCIpXHJcbiAgICAgICAgICAgICAgICA6IG5vQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uubm9fYmFsYW5jZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gRmVlIGFzc2V0IHNlbGVjdGlvblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZmVlQXNzZXRzWzFdICYmXHJcbiAgICAgICAgICAgIGZlZUFzc2V0c1sxXS5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInF1b3RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgXSkgPT09IFwiMS4zLjBcIiAmJlxyXG4gICAgICAgICAgICBmZWVBc3NldHNbMV0uZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJiYXNlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgXSkgPT09IFwiMS4zLjBcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBmZWVBc3NldCA9IGZlZUFzc2V0c1swXTtcclxuICAgICAgICAgICAgZmVlQXNzZXRzLnNwbGljZSgxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGZlZUFzc2V0cy5tYXAoYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICBsZXQge25hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShhc3NldCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YXNzZXQuZ2V0KFwiaWRcIil9IHZhbHVlPXtpbmRleCsrfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJlZml4fVxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnRyYWN0IGZlZSBmcm9tIGFtb3VudCB0byBzZWxsXHJcbiAgICAgICAgbGV0IGJhbGFuY2VUb0FkZDtcclxuXHJcbiAgICAgICAgaWYgKGZlZUFzc2V0LmdldChcInN5bWJvbFwiKSA9PT0gYmFsYW5jZVN5bWJvbCkge1xyXG4gICAgICAgICAgICBiYWxhbmNlVG9BZGQgPSBiYWxhbmNlQW1vdW50LmNsb25lKFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZUFtb3VudC5nZXRBbW91bnQoKSAtIGZlZS5nZXRBbW91bnQoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhbGFuY2VUb0FkZCA9IGJhbGFuY2VBbW91bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQge25hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShcclxuICAgICAgICAgICAgdGhpcy5wcm9wc1tpc0JpZCA/IFwiYmFzZVwiIDogXCJxdW90ZVwiXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGJ1eUJvcnJvd0RlcG9zaXROYW1lID0gKHByZWZpeCA/IHByZWZpeCA6IFwiXCIpICsgbmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRvciA9IHJlcXVpcmUoXCJjb3VudGVycGFydFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFJbnRybyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09IFwiYmlkXCIpIHtcclxuICAgICAgICAgICAgZGF0YUludHJvID0gdHJhbnNsYXRvci50cmFuc2xhdGUoXCJ3YWxrdGhyb3VnaC5idXlfZm9ybVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09IFwiYXNrXCIpIHtcclxuICAgICAgICAgICAgZGF0YUludHJvID0gdHJhbnNsYXRvci50cmFuc2xhdGUoXCJ3YWxrdGhyb3VnaC5zZWxsX2Zvcm1cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uc09wdGlvbnNMaXN0ID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5leHBpcmF0aW9ucykubWFwKFxyXG4gICAgICAgICAgICAoa2V5LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtrZXl9IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5leHBpcmF0aW9uc1trZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBkYXRlcGlja2VyIHB1dHMgb24gdGhlIGVuZCBvZiBib2R5IHNvIGl0J3Mgb3V0IG9mIHRoZW1lIHNjb3BlXHJcbiAgICAgICAgLy8gc28gdGhlbWUgaXMgdXNlZCBvbiB3cmFwcGVyQ2xhc3NOYW1lXHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwidGhlbWVzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5FeHBpcmF0aW9uRGF0ZSA9IG1vbWVudCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZS1ib3JkZXJlZCBidXktc2VsbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJleGNoYW5nZS1jb250ZW50LWhlYWRlciBcIiArIHR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e2RhdGFJbnRyb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImV4Y2hhbmdlLmJ1eXNlbGxfZm9ybWF0dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcXVvdGUuZ2V0KFwic3ltYm9sXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0cmFuc2xhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpc1ByZWRpY3Rpb25NYXJrZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhjaGFuZ2Uuc2hvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNCaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4Y2hhbmdlLmJ1eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJleGNoYW5nZS5zZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGlyZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj57YnV0dG9uVGV4dH0gPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9IC8+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25GbGlwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCIsIGZvbnRTaXplOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxpcC1hcnJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODY0NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9uVG9nZ2xlUG9zaXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Ub2dnbGVQb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCIsIGZvbnRTaXplOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxpcC1hcnJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODY0NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVG9nZ2xlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBjbGlja2FibGUgaGlkZS1mb3IteGxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY3VycmVudEJyaWRnZXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGJ1eS1zZWxsLWRlcG9zaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9vbkJ1eS5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2UuYnV5c2VsbF9mb3JtYXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImJhc2VcIiA6IFwicXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmdldChcInN5bWJvbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0cmFuc2xhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZXhjaGFuZ2UuYnV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkaXJlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5iYWNrZWRDb2luID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBidXktc2VsbC1kZXBvc2l0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fb25EZXBvc2l0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5idXlzZWxsX2Zvcm1hdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHNbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYmFzZVwiIDogXCJxdW90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZ2V0KFwic3ltYm9sXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJleGNoYW5nZS5kZXBvc2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkaXJlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbkJvcnJvdyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgYnV5LXNlbGwtZGVwb3NpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Cb3Jyb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5idXlzZWxsX2Zvcm1hdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHNbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYmFzZVwiIDogXCJxdW90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZ2V0KFwic3ltYm9sXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJleGNoYW5nZS5ib3Jyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRpcmVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuaXNPcGVuID8gXCJoaWRlLWNvbnRhaW5lciBcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JkZXItZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93IG5vLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC01IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhjaGFuZ2VJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3R5cGV9UHJpY2VgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ByaWNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hbW91bnRcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNSBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHt0eXBlfUFtb3VudGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Ftb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgYnV5LXNlbGwtcm93IGJvdHRvbS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMyBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudG90YWxcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNSBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHt0eXBlfVRvdGFsYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b3RhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5mZWVcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNSBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYXNGZWVCYWxhbmNlID8gXCJuby1iYWxhbmNlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3R5cGV9RmVlYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGFzRmVlQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmVlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFzc2V0cy5sZW5ndGggIT09IDEgPyAwIDogNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFzc2V0cy5sZW5ndGggPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7YmFja2dyb3VuZDogXCJub25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZlZUFzc2V0cy5sZW5ndGggPT09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmVlQXNzZXRzLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZWVBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2xcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZlZUFzc2V0cy5sZW5ndGggIT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiBidXlzZWxsLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlRmVlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRGZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgY2xlYXItZml4IG5vLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYnV5LXNlbGwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYmFsYW5jZVwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2FkZEJhbGFuY2UuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VUb0FkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZUFtb3VudC5nZXRBbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWFsOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZVByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YmFsYW5jZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYnV5LXNlbGwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3BhZGRpbmdUb3A6IDV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQmlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubG93ZXN0X2Fza1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5oaWdoZXN0X2JpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9OiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnNldFByaWNlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZU9iamVjdC5zZWxsUHJpY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17Y3VycmVudFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPi88QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYnV5LXNlbGwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3BhZGRpbmdUb3A6IDV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uZXhwaXJhdGlvblwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImV4cGlyYXRpb24tZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbkV4cGlyYXRpb25UeXBlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhwaXJhdGlvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4cGlyYXRpb25zT3B0aW9uc0xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5leHBpcmF0aW9uVHlwZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTUEVDSUZJQ1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXJQb3NpdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tIGNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9e3RoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVQaWNrZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXttaW5FeHBpcmF0aW9uRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZvcm1hdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRG8gTU1NIFlZWVkgaGg6bW0gQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGlyYXRpb25DdXN0b21UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uRXhwaXJhdGlvbkN1c3RvbUNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCVVkvU0VMTCBidXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVkVGV4dCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2Rpc2FibGVkVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0LmJpbmQodGhpcywgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCIgZGF0YS10aXA9e1wiXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCB0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTSE9SVCBidXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVkVGV4dCAmJiBpc1ByZWRpY3Rpb25NYXJrZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17ZGlzYWJsZWRUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCBmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZvcmNlU2VsbFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXNQcmVkaWN0aW9uTWFya2V0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0LmJpbmQodGhpcywgZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JjZVNlbGxUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2ltcGxlRGVwb3NpdFdpdGhkcmF3XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiZGVwb3NpdF9tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiZGVwb3NpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlhdE1vZGFsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzW2lzQmlkID8gXCJiYXNlXCIgOiBcInF1b3RlXCJdLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbXBsZV9kZXBvc2l0X21vZGFsXCIgKyAodHlwZSA9PT0gXCJiaWRcIiA/IFwiXCIgOiBcIl9hc2tcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1t0aGlzLnByb3BzLmJhbGFuY2VdfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5iYWNrZWRDb2lufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQnJpZGdlIG1vZGFsICovfVxyXG4gICAgICAgICAgICAgICAgPFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImJyaWRnZV9tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiZGVwb3NpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcj17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5iYWxhbmNlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlX2JyaWRnZV9tb2RhbFwiICsgKHR5cGUgPT09IFwiYmlkXCIgPyBcIlwiIDogXCJfYXNrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzPXtbdGhpcy5wcm9wcy5iYWxhbmNlXX1cclxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VzPXt0aGlzLnByb3BzLmN1cnJlbnRCcmlkZ2VzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShCdXlTZWxsKTtcclxuIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCB7Q2hhaW5WYWxpZGF0aW9ufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQge2hhc0dhdGV3YXlQcmVmaXh9IGZyb20gXCJjb21tb24vZ2F0ZXdheVV0aWxzXCI7XHJcblxyXG5jbGFzcyBNYXJrZXRQaWNrZXJXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1hcmtldHNMaXN0OiBcIlwiLFxyXG4gICAgICAgICAgICBpc3N1ZXJzTGlzdDogXCJcIixcclxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IG51bGwsXHJcbiAgICAgICAgICAgIGFsbE1hcmtldHM6IFwiXCIsXHJcbiAgICAgICAgICAgIGFsbElzc3VlcnM6IFwiXCIsXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5tYXJrZXRQaWNrZXJBc3NldCAhPT0gdGhpcy5wcm9wcy5tYXJrZXRQaWNrZXJBc3NldClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSgpKTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5zZWFyY2hBc3NldHMgIT09IHRoaXMucHJvcHMuc2VhcmNoQXNzZXRzKVxyXG4gICAgICAgICAgICB0aGlzLmFzc2V0RmlsdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5wLm1hcmtldFBpY2tlckFzc2V0ICE9PSB0aGlzLnByb3BzLm1hcmtldFBpY2tlckFzc2V0IHx8XHJcbiAgICAgICAgICAgIG5wLnNlYXJjaEFzc2V0cyAhPT0gdGhpcy5wcm9wcy5zZWFyY2hBc3NldHMgfHxcclxuICAgICAgICAgICAgbnMubWFya2V0c0xpc3QgIT09IHRoaXMuc3RhdGUubWFya2V0c0xpc3QgfHxcclxuICAgICAgICAgICAgbnMuaXNzdWVyc0xpc3QgIT09IHRoaXMuc3RhdGUuaXNzdWVyc0xpc3QgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5zLCB0aGlzLnN0YXRlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uU2VsZWN0SXNzdWVyKGUpIHtcclxuICAgICAgICBsZXQgZmlsdGVyQnlJc3N1ZXJOYW1lID0gZS50YXJnZXQudmFsdWUgPT0gXCIwXCIgPyBudWxsIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hc3NldEZpbHRlcihmaWx0ZXJCeUlzc3Vlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbklucHV0TmFtZShnZXRCYWNrZWRBc3NldHMsIGUpIHtcclxuICAgICAgICBsZXQgdG9GaW5kID0gZS50YXJnZXQudmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IGlzVmFsaWROYW1lID0gIUNoYWluVmFsaWRhdGlvbi5pc192YWxpZF9zeW1ib2xfZXJyb3IodG9GaW5kLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IGUudGFyZ2V0LnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGxNYXJrZXRzOiBcIlwiLFxyXG4gICAgICAgICAgICBhbGxJc3N1ZXJzOiBcIlwiLFxyXG4gICAgICAgICAgICBtYXJrZXRzTGlzdDogXCJcIixcclxuICAgICAgICAgICAgaXNzdWVyc0xpc3Q6IFwiXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyogRG9uJ3QgbG9va3VwIGludmFsaWQgYXNzZXQgbmFtZXMgKi9cclxuICAgICAgICBpZiAoIWlzVmFsaWROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gdG9GaW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb29rdXBBc3NldHModG9GaW5kLCBnZXRCYWNrZWRBc3NldHMpO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb29rdXBBc3NldHModmFsdWUsIGdhdGV3YXlBc3NldHMgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHF1b3RlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QocXVvdGUsIDEwLCBnYXRld2F5QXNzZXRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlOiBxdW90ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGFuZ2VNYXJrZXRQaWNrZXJGaWx0ZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWFya2V0c0xpc3Q6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzc3VlcnNMaXN0OiBcIlwiLFxyXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcclxuICAgICAgICAgICAgYWxsTWFya2V0czogXCJcIixcclxuICAgICAgICAgICAgYWxsSXNzdWVyczogXCJcIixcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgbWFya2V0UGlja2VyVGFiOiB2YWx1ZSxcclxuICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9mZXRjaElzc3Vlcihhc3NldCkge1xyXG4gICAgICAgIGxldCBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChhc3NldC5pc3N1ZXIsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gSXNzdWVyIG1heSBzb21ldGltZXMgbm90IHJlc29sdmUgYXQgZmlyc3QuXHJcbiAgICAgICAgLy8gQSB3YWl0ZXIgbWF5IGJlIHJlcXVpcmVkIGhlcmVcclxuICAgICAgICBpZiAoIWlzc3Vlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzc3VlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXNzZXRGaWx0ZXIoZmlsdGVyQnlJc3N1ZXJOYW1lID0gbnVsbCkge1xyXG4gICAgICAgIGxldCB7c2VhcmNoQXNzZXRzLCBtYXJrZXRQaWNrZXJBc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQge2lucHV0VmFsdWUsIGxvb2t1cFF1b3RlLCBtYXJrZXRQaWNrZXJUYWJ9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYXNzZXRDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGFsbE1hcmtldHMgPSBbXTtcclxuICAgICAgICBsZXQgYWxsSXNzdWVycyA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYmFzZVN5bWJvbCA9IHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICBsZXQgcXVvdGVTeW1ib2wgPSB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoQXNzZXRzLnNpemUgJiYgISFpbnB1dFZhbHVlICYmIGlucHV0VmFsdWUubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBzZWFyY2hBc3NldHNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEub3B0aW9ucy5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShhLm9wdGlvbnMuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidmlzaWJsZVwiIGluIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXNjcmlwdGlvbi52aXNpYmxlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRDb3VudCA+IDEwMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0Q291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzc3VlciA9IHRoaXMuX2ZldGNoSXNzdWVyKGFzc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2UgPSB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNRdW90ZUFzc2V0ID0gcXVvdGVTeW1ib2wgPT0gbWFya2V0UGlja2VyQXNzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluY2x1ZGVBc3NldCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpc1F1b3RlQXNzZXQgJiYgYXNzZXQuc3ltYm9sICE9IGJhc2VTeW1ib2wpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICghaXNRdW90ZUFzc2V0ICYmIGFzc2V0LnN5bWJvbCAhPSBxdW90ZVN5bWJvbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFzc2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICghZmlsdGVyQnlJc3N1ZXJOYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUlzc3Vlck5hbWUgPT0gaXNzdWVyLmdldChcIm5hbWVcIikpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgobWFya2V0UGlja2VyVGFiID09IFwic2VhcmNoXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbC5zdGFydHNXaXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICghbWFya2V0UGlja2VyVGFiIHx8IG1hcmtldFBpY2tlclRhYiA9PSBcImZpbHRlclwiKSlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBhc3NldC5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXI6ICFpc3N1ZXIgPyBudWxsIDogaXNzdWVyLmdldChcIm5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFzc2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhYWxsSXNzdWVycy5pbmNsdWRlcyhpc3N1ZXIuZ2V0KFwibmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbElzc3VlcnMucHVzaChpc3N1ZXIuZ2V0KFwibmFtZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXJrZXRzTGlzdCA9IHRoaXMuc3RhdGUubWFya2V0c0xpc3Q7XHJcbiAgICAgICAgbGV0IGlzc3VlcnNMaXN0ID0gdGhpcy5zdGF0ZS5pc3N1ZXJzTGlzdDtcclxuXHJcbiAgICAgICAgaXNzdWVyc0xpc3QgPSAhYWxsSXNzdWVyc1xyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiBhbGxJc3N1ZXJzXHJcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYSA+IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAubWFwKGlzc3VlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpc3N1ZXJ9IHZhbHVlPXtpc3N1ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNzdWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcmtldHNMaXN0ID0gIWFsbE1hcmtldHNcclxuICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgIDogYWxsTWFya2V0c1xyXG4gICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgoYVsxXVtcInF1b3RlXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBiSXNLbm93bkdhdGV3YXkgPSBoYXNHYXRld2F5UHJlZml4KGJbMV1bXCJxdW90ZVwiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGFJc0tub3duR2F0ZXdheSAmJiAhYklzS25vd25HYXRld2F5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiSXNLbm93bkdhdGV3YXkgJiYgIWFJc0tub3duR2F0ZXdheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWzFdW1wicXVvdGVcIl0gPiBiWzFdW1wicXVvdGVcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVsxXVtcInF1b3RlXCJdIDwgYlsxXVtcInF1b3RlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttYXJrZXRbMF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldFsxXVtcInF1b3RlXCJdfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZU1hcmtldFBpY2tlcihudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN3aXRjaE1hcmtldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbCA9PSBtYXJrZXRQaWNrZXJBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgL21hcmtldC8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0WzFdW1wicXVvdGVcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV8ke2Jhc2VTeW1ib2x9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgL21hcmtldC8ke3F1b3RlU3ltYm9sfV8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0WzFdW1wicXVvdGVcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci51c2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWxsTWFya2V0cyxcclxuICAgICAgICAgICAgYWxsSXNzdWVycyxcclxuICAgICAgICAgICAgbWFya2V0c0xpc3QsXHJcbiAgICAgICAgICAgIGlzc3VlcnNMaXN0LFxyXG4gICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7bWFya2V0UGlja2VyQXNzZXR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgbWFya2V0UGlja2VyVGFiLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICAgICAgICBhbGxNYXJrZXRzLFxyXG4gICAgICAgICAgICBpc3N1ZXJzTGlzdCxcclxuICAgICAgICAgICAgbWFya2V0c0xpc3RcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZXRQaWNrZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0UGlja2VyX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtldFBpY2tlcl9fZmlsdGVyVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZXRQaWNrZXJfX2ZpbHRlckhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRfcGlja2VyLnNlYXJjaF9tb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNSwgY3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWFya2V0UGlja2VyVGFiID09IFwiZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWUtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjFfNXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlTWFya2V0UGlja2VyRmlsdGVyLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUsIGN1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiA9PSBcInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibHVlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxXzV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZU1hcmtldFBpY2tlckZpbHRlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ6b29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuem9vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZXRQaWNrZXJfX3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRfcGlja2VyLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtldFBpY2tlcl9fc3ViSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zdWJfdGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2Fzc2V0LyR7bWFya2V0UGlja2VyQXNzZXR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaWdodGJsdWUgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldFBpY2tlckFzc2V0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmx1ZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5mby1jaXJjbGUtb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmluZm9fY2lyY2xlX29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogbWFya2V0UGlja2VyVGFiID09IFwic2VhcmNoXCIgPyBcIlwiIDogXCJub25lXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zZWFyY2hfZm9yX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXROYW1lLmJpbmQodGhpcywgZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5tYXJrZXRQaWNrZXJUYWIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWFya2V0UGlja2VyVGFiID09IFwiZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9jay1saXN0IG5vLWJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIuZmluZF9ieV9hc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0TmFtZS5iaW5kKHRoaXMsIHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5maWx0ZXJfYnlfaXNzdWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRwd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3Mtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblNlbGVjdElzc3Vlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PVwiMFwiIHZhbHVlPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zaG93X2FsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc3N1ZXJzTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2stbGlzdCBuby1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5yZXN1bHRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfYXNzZXRzPXshYWxsTWFya2V0cyA/IDAgOiBhbGxNYXJrZXRzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlU2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0VmFsdWUubGVuZ3RoICE9IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT57bWFya2V0c0xpc3R9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1hcmtldFBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRQaWNrZXJXcmFwcGVyIHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgIH1cclxufVxyXG5cclxuTWFya2V0UGlja2VyID0gY29ubmVjdChcclxuICAgIE1hcmtldFBpY2tlcixcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtBc3NldFN0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQXNzZXRzOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRzTG9hZGluZzogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0c0xvYWRpbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRQaWNrZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgVHJhZGluZ1ZpZXcgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2hhcnRpbmdfbGlicmFyeS9jaGFydGluZ19saWJyYXJ5Lm1pbi5qc1wiKTtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiYXNzZXRzL2NvbG9yc1wiO1xyXG5pbXBvcnQge2dldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMsIGdldFRWVGltZXpvbmV9IGZyb20gXCIuL3RyYWRpbmdWaWV3Q2xhc3Nlc1wiO1xyXG5cclxuLy8gaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbi8vIGltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWRpbmdWaWV3UHJpY2VDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBsb2FkVHJhZGluZ1ZpZXcocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7ZGF0YUZlZWR9ID0gcHJvcHM7XHJcbiAgICAgICAgbGV0IHRoZW1lQ29sb3JzID0gY29sb3JzW3Byb3BzLnRoZW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhRmVlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghIXRoaXMudHZXaWRnZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKF9fREVWX18pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50UmVzb2x1dGlvblwiLFxyXG4gICAgICAgICAgICAgICAgZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cyhbcHJvcHMuYnVja2V0U2l6ZV0pWzBdLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1ib2xcIixcclxuICAgICAgICAgICAgICAgIHByb3BzLnF1b3RlU3ltYm9sICsgXCJfXCIgKyBwcm9wcy5iYXNlU3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lem9uZTpcIixcclxuICAgICAgICAgICAgICAgIGdldFRWVGltZXpvbmUoKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICBkYXRhRmVlZC51cGRhdGUoe1xyXG4gICAgICAgICAgICByZXNvbHV0aW9uczogcHJvcHMuYnVja2V0cyxcclxuICAgICAgICAgICAgdGlja2VyOiBwcm9wcy5xdW90ZVN5bWJvbCArIFwiX1wiICsgcHJvcHMuYmFzZVN5bWJvbCxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IGdldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMoW3Byb3BzLmJ1Y2tldFNpemVdKVswXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoX19ERVZfXykgY29uc29sZS5sb2coXCIqKiogTG9hZCBDaGFydCAqKipcIik7XHJcbiAgICAgICAgaWYgKF9fREVWX18pIGNvbnNvbGUudGltZShcIioqKiBDaGFydCBsb2FkIHRpbWU6IFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVkX2ZlYXR1cmVzID0gW1xyXG4gICAgICAgICAgICBcImhlYWRlcl9zYXZlbG9hZFwiLFxyXG4gICAgICAgICAgICBcInN5bWJvbF9pbmZvXCIsXHJcbiAgICAgICAgICAgIFwic3ltYm9sX3NlYXJjaF9ob3Rfa2V5XCIsXHJcbiAgICAgICAgICAgIFwiYm9yZGVyX2Fyb3VuZF90aGVfY2hhcnRcIixcclxuICAgICAgICAgICAgXCJoZWFkZXJfc3ltYm9sX3NlYXJjaFwiLFxyXG4gICAgICAgICAgICBcImhlYWRlcl9jb21wYXJlXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vYmlsZSkge1xyXG4gICAgICAgICAgICBkaXNhYmxlZF9mZWF0dXJlcy5wdXNoKFwiY2hhcnRfc2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICBkaXNhYmxlZF9mZWF0dXJlcy5wdXNoKFwiY2hhcnRfem9vbVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHZXaWRnZXQgPSBuZXcgVHJhZGluZ1ZpZXcud2lkZ2V0KHtcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHN5bWJvbDogcHJvcHMucXVvdGVTeW1ib2wgKyBcIl9cIiArIHByb3BzLmJhc2VTeW1ib2wsXHJcbiAgICAgICAgICAgIGludGVydmFsOiBnZXRSZXNvbHV0aW9uc0Zyb21CdWNrZXRzKFtwcm9wcy5idWNrZXRTaXplXSlbMF0sXHJcbiAgICAgICAgICAgIGxpYnJhcnlfcGF0aDogYCR7XHJcbiAgICAgICAgICAgICAgICBfX0VMRUNUUk9OX18gPyBfX0JBU0VfVVJMX18gOiBcIlwiXHJcbiAgICAgICAgICAgIH0vY2hhcnRpbmdfbGlicmFyeS9gLFxyXG4gICAgICAgICAgICBkYXRhZmVlZDogZGF0YUZlZWQsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcl9pZDogXCJ0dl9jaGFydFwiLFxyXG4gICAgICAgICAgICBjaGFydHNfc3RvcmFnZV91cmw6IFwiaHR0cHM6Ly9zYXZlbG9hZC50cmFkaW5ndmlldy5jb21cIixcclxuICAgICAgICAgICAgY2hhcnRzX3N0b3JhZ2VfYXBpX3ZlcnNpb246IFwiMS4xXCIsXHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogXCJ0cmFkaW5ndmlldy5jb21cIixcclxuICAgICAgICAgICAgdXNlcl9pZDogXCJwdWJsaWNfdXNlcl9pZFwiLFxyXG4gICAgICAgICAgICBhdXRvc2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9jYWxlOiBwcm9wcy5sb2NhbGUsXHJcbiAgICAgICAgICAgIHRpbWV6b25lOiBnZXRUVlRpbWV6b25lKCksXHJcbiAgICAgICAgICAgIHRvb2xiYXJfYmc6IHRoZW1lQ29sb3JzLmJnQ29sb3IsXHJcbiAgICAgICAgICAgIG92ZXJyaWRlczoge1xyXG4gICAgICAgICAgICAgICAgXCJwYW5lUHJvcGVydGllcy5iYWNrZ3JvdW5kXCI6IHRoZW1lQ29sb3JzLmJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBcInBhbmVQcm9wZXJ0aWVzLmhvcnpHcmlkUHJvcGVydGllcy5jb2xvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lQ29sb3JzLmF4aXNMaW5lQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBcInBhbmVQcm9wZXJ0aWVzLnZlcnRHcmlkUHJvcGVydGllcy5jb2xvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lQ29sb3JzLmF4aXNMaW5lQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBcInNjYWxlc1Byb3BlcnRpZXMubGluZUNvbG9yXCI6IHRoZW1lQ29sb3JzLmF4aXNMaW5lQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBcInNjYWxlc1Byb3BlcnRpZXMudGV4dENvbG9yXCI6IHRoZW1lQ29sb3JzLnRleHRDb2xvclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXN0b21fY3NzX3VybDogcHJvcHMudGhlbWUgKyBcIi5jc3NcIixcclxuICAgICAgICAgICAgZW5hYmxlZF9mZWF0dXJlczogW1xyXG4gICAgICAgICAgICAgICAgXCJzdHVkeV90ZW1wbGF0ZXNcIixcclxuICAgICAgICAgICAgICAgIFwia2VlcF9sZWZ0X3Rvb2xiYXJfdmlzaWJsZV9vbl9zbWFsbF9zY3JlZW5zXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlzYWJsZWRfZmVhdHVyZXM6IGRpc2FibGVkX2ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZXNldDogdGhpcy5wcm9wcy5tb2JpbGUgPyBcIm1vYmlsZVwiIDogXCJcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnR2V2lkZ2V0Lm9uQ2hhcnRSZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfX0RFVl9fKSBjb25zb2xlLmxvZyhcIioqKiBDaGFydCBSZWFkeSAqKipcIik7XHJcbiAgICAgICAgICAgIGlmIChfX0RFVl9fKSBjb25zb2xlLnRpbWVFbmQoXCIqKiogQ2hhcnQgbG9hZCB0aW1lOiBcIik7XHJcbiAgICAgICAgICAgIGRhdGFGZWVkLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvbk1hcmtldENoYW5nZTogdGhpcy5fc2V0U3ltYm9sLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xyXG4gICAgICAgIGlmICghbnAubWFya2V0UmVhZHkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZGF0YUZlZWQgJiYgbnAuZGF0YUZlZWQpIHtcclxuICAgICAgICAgICAgbG9hZFRyYWRpbmdWaWV3KG5wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NldFN5bWJvbCh0aWNrZXIpIHtcclxuICAgICAgICBpZiAodGhpcy50dldpZGdldCkge1xyXG4gICAgICAgICAgICB0aGlzLnR2V2lkZ2V0LnNldFN5bWJvbChcclxuICAgICAgICAgICAgICAgIHRpY2tlcixcclxuICAgICAgICAgICAgICAgIGdldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMoW3RoaXMucHJvcHMuYnVja2V0U2l6ZV0pWzBdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubG9hZFRyYWRpbmdWaWV3KHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGF0YUZlZWQuY2xlYXJTdWJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XHJcbiAgICAgICAgaWYgKG5wLmNoYXJ0SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmNoYXJ0SGVpZ2h0KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoISF0aGlzLnR2V2lkZ2V0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFucC5tYXJrZXRSZWFkeSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtYm9yZGVyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5jaGFydEhlaWdodCArIFwicHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0dl9jaGFydFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP2UoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLGUpOmUodC5UcmFkaW5nVmlldz10LlRyYWRpbmdWaWV3fHx7fSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG8pe3ZhciBpPW4oe30sdCk7Zm9yKHZhciBzIGluIG8pXCJvYmplY3RcIiE9dHlwZW9mIHRbc118fG51bGw9PT10W3NdfHxBcnJheS5pc0FycmF5KHRbc10pP3ZvaWQgMCE9PW9bc10mJihpW3NdPW9bc10pOmlbc109ZSh0W3NdLG9bc10pO3JldHVybiBpfWZ1bmN0aW9uIG8oKXtyZXR1cm5cIjEuMTIgKGludGVybmFsIGlkIDYzMGI3MDRhIEAgMjAxOC0wNi0wNiAwMjoxNjoxMS4zMDU1MDkpXCJ9ZnVuY3Rpb24gaSh0KXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIix0LCExKX12YXIgbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUsbz1hcmd1bWVudHMsaT0xLG49YXJndW1lbnRzLmxlbmd0aDtpPG47aSsrKXtlPW9baV07Zm9yKHZhciBzIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscykmJih0W3NdPWVbc10pfXJldHVybiB0fSxzPXttb2JpbGU6e2Rpc2FibGVkX2ZlYXR1cmVzOltcImxlZnRfdG9vbGJhclwiLFwiaGVhZGVyX3dpZGdldFwiLFwidGltZWZyYW1lc190b29sYmFyXCIsXCJlZGl0X2J1dHRvbnNfaW5fbGVnZW5kXCIsXCJjb250ZXh0X21lbnVzXCIsXCJjb250cm9sX2JhclwiLFwiYm9yZGVyX2Fyb3VuZF90aGVfY2hhcnRcIl0sZW5hYmxlZF9mZWF0dXJlczpbXX19LHI9e3dpZHRoOjgwMCxoZWlnaHQ6NTAwLHN5bWJvbDpcIkFBXCIsaW50ZXJ2YWw6XCJEXCIsdGltZXpvbmU6XCJVVENcIixjb250YWluZXJfaWQ6XCJcIixsaWJyYXJ5X3BhdGg6XCJcIixsb2NhbGU6XCJlblwiLHdpZGdldGJhcjp7ZGV0YWlsczohMSx3YXRjaGxpc3Q6ITEsd2F0Y2hsaXN0X3NldHRpbmdzOntkZWZhdWx0X3N5bWJvbHM6W119fSxvdmVycmlkZXM6e1wibWFpblNlcmllc1Byb3BlcnRpZXMuc2hvd0NvdW50ZG93blwiOiExfSxzdHVkaWVzX292ZXJyaWRlczp7fSxicm9rZXJDb25maWc6e2NvbmZpZ0ZsYWdzOnt9fSxmdWxsc2NyZWVuOiExLGF1dG9zaXplOiExLGRpc2FibGVkX2ZlYXR1cmVzOltdLGVuYWJsZWRfZmVhdHVyZXM6W10sZGVidWc6ITEsbG9nbzp7fSx0aW1lX2ZyYW1lczpbe3RleHQ6XCI1eVwiLHJlc29sdXRpb246XCJXXCJ9LHt0ZXh0OlwiMXlcIixyZXNvbHV0aW9uOlwiV1wifSx7dGV4dDpcIjZtXCIscmVzb2x1dGlvbjpcIjEyMFwifSx7dGV4dDpcIjNtXCIscmVzb2x1dGlvbjpcIjYwXCJ9LHt0ZXh0OlwiMW1cIixyZXNvbHV0aW9uOlwiMzBcIn0se3RleHQ6XCI1ZFwiLHJlc29sdXRpb246XCI1XCJ9LHt0ZXh0OlwiMWRcIixyZXNvbHV0aW9uOlwiMVwifV0sY2xpZW50X2lkOlwiMFwiLHVzZXJfaWQ6XCIwXCIsY2hhcnRzX3N0b3JhZ2VfYXBpX3ZlcnNpb246XCIxLjBcIixmYXZvcml0ZXM6e2ludGVydmFsczpbXSxjaGFydFR5cGVzOltdfX0sYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7aWYodGhpcy5faWQ9XCJ0cmFkaW5ndmlld19cIisoMTA0ODU3NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpLHRoaXMuX3JlYWR5PSExLHRoaXMuX3JlYWR5SGFuZGxlcnM9W10sdGhpcy5fb25XaW5kb3dSZXNpemU9dGhpcy5fYXV0b1Jlc2l6ZUNoYXJ0LmJpbmQodGhpcyksIXQuZGF0YWZlZWQpdGhyb3cgbmV3IEVycm9yKFwiRGF0YWZlZWQgaXMgbm90IGRlZmluZWRcIik7aWYodGhpcy5fb3B0aW9ucz1lKHIsdCksdC5wcmVzZXQpe3ZhciBvPXNbdC5wcmVzZXRdO28/KHZvaWQgMCE9PXRoaXMuX29wdGlvbnMuZGlzYWJsZWRfZmVhdHVyZXM/dGhpcy5fb3B0aW9ucy5kaXNhYmxlZF9mZWF0dXJlcz10aGlzLl9vcHRpb25zLmRpc2FibGVkX2ZlYXR1cmVzLmNvbmNhdChvLmRpc2FibGVkX2ZlYXR1cmVzKTp0aGlzLl9vcHRpb25zLmRpc2FibGVkX2ZlYXR1cmVzPW8uZGlzYWJsZWRfZmVhdHVyZXMsdm9pZCAwIT09dGhpcy5fb3B0aW9ucy5lbmFibGVkX2ZlYXR1cmVzP3RoaXMuX29wdGlvbnMuZW5hYmxlZF9mZWF0dXJlcz10aGlzLl9vcHRpb25zLmVuYWJsZWRfZmVhdHVyZXMuY29uY2F0KG8uZW5hYmxlZF9mZWF0dXJlcyk6dGhpcy5fb3B0aW9ucy5lbmFibGVkX2ZlYXR1cmVzPW8uZW5hYmxlZF9mZWF0dXJlcyk6Y29uc29sZS53YXJuKFwiVW5rbm93biBwcmVzZXQ6IGBcIit0LnByZXNldCtcImBcIil9dGhpcy5fY3JlYXRlKCl9cmV0dXJuIHQucHJvdG90eXBlLm9uQ2hhcnRSZWFkeT1mdW5jdGlvbih0KXt0aGlzLl9yZWFkeT90LmNhbGwodGhpcyk6dGhpcy5fcmVhZHlIYW5kbGVycy5wdXNoKHQpfSx0LnByb3RvdHlwZS5vbkdyYXllZE9iamVjdENsaWNrZWQ9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5vbkdyYXllZE9iamVjdENsaWNrZWQodCl9LHQucHJvdG90eXBlLm9uU2hvcnRjdXQ9ZnVuY3Rpb24odCxlKXt0aGlzLl9pbm5lcldpbmRvdygpLmNyZWF0ZVNob3J0Y3V0QWN0aW9uKHQsZSl9LHQucHJvdG90eXBlLnN1YnNjcmliZT1mdW5jdGlvbih0LGUpe3RoaXMuX2lubmVyQVBJKCkuc3Vic2NyaWJlKHQsZSl9LHQucHJvdG90eXBlLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHQsZSl7dGhpcy5faW5uZXJBUEkoKS51bnN1YnNjcmliZSh0LGUpfSx0LnByb3RvdHlwZS5jaGFydD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5jaGFydCh0KX0sdC5wcm90b3R5cGUuc2V0TGFuZ3VhZ2U9ZnVuY3Rpb24odCl7dGhpcy5yZW1vdmUoKSx0aGlzLl9vcHRpb25zLmxvY2FsZT10LHRoaXMuX2NyZWF0ZSgpfSx0LnByb3RvdHlwZS5zZXRTeW1ib2w9ZnVuY3Rpb24odCxlLG8pe3RoaXMuX2lubmVyQVBJKCkuY2hhbmdlU3ltYm9sKHQsZStcIlwiLG8pfSx0LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX29uV2luZG93UmVzaXplKSx0aGlzLl9yZWFkeUhhbmRsZXJzLnNwbGljZSgwLHRoaXMuX3JlYWR5SGFuZGxlcnMubGVuZ3RoKSxkZWxldGUgd2luZG93W3RoaXMuX2lkXTt2YXIgdD10aGlzLl9nZXRJRnJhbWVFbGVtZW50KCk7dC5jb250ZW50V2luZG93LmRlc3Ryb3lDaGFydCgpLHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSx0LnByb3RvdHlwZS5jbG9zZVBvcHVwc0FuZERpYWxvZ3M9ZnVuY3Rpb24oKXt0aGlzLl9pbm5lckFQSSgpLmNsb3NlUG9wdXBzQW5kRGlhbG9ncygpfSx0LnByb3RvdHlwZS5zZWxlY3RMaW5lVG9vbD1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLnNlbGVjdExpbmVUb29sKHQpfSx0LnByb3RvdHlwZS5zZWxlY3RlZExpbmVUb29sPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkuc2VsZWN0ZWRMaW5lVG9vbCgpfSx0LnByb3RvdHlwZS5zYXZlPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkuc2F2ZUNoYXJ0KHQpfSx0LnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKHQsZSl7dGhpcy5faW5uZXJBUEkoKS5sb2FkQ2hhcnQoe2pzb246dCxleHRlbmRlZERhdGE6ZX0pfSx0LnByb3RvdHlwZS5nZXRTYXZlZENoYXJ0cz1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLmdldFNhdmVkQ2hhcnRzKHQpfSx0LnByb3RvdHlwZS5sb2FkQ2hhcnRGcm9tU2VydmVyPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkubG9hZENoYXJ0RnJvbVNlcnZlcih0KX0sdC5wcm90b3R5cGUuc2F2ZUNoYXJ0VG9TZXJ2ZXI9ZnVuY3Rpb24odCxlLG8saSl7dGhpcy5faW5uZXJBUEkoKS5zYXZlQ2hhcnRUb1NlcnZlcih0LGUsbyxpKX0sdC5wcm90b3R5cGUucmVtb3ZlQ2hhcnRGcm9tU2VydmVyPWZ1bmN0aW9uKHQsZSl7dGhpcy5faW5uZXJBUEkoKS5yZW1vdmVDaGFydEZyb21TZXJ2ZXIodCxlKX0sdC5wcm90b3R5cGUub25Db250ZXh0TWVudT1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLm9uQ29udGV4dE1lbnUodCl9LHQucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW5uZXJXaW5kb3coKS5jcmVhdGVCdXR0b24odCl9LHQucHJvdG90eXBlLnNob3dOb3RpY2VEaWFsb2c9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5zaG93Tm90aWNlRGlhbG9nKHQpfSx0LnByb3RvdHlwZS5zaG93Q29uZmlybURpYWxvZz1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLnNob3dDb25maXJtRGlhbG9nKHQpfSx0LnByb3RvdHlwZS5zaG93TG9hZENoYXJ0RGlhbG9nPWZ1bmN0aW9uKCl7dGhpcy5faW5uZXJBUEkoKS5zaG93TG9hZENoYXJ0RGlhbG9nKCl9LHQucHJvdG90eXBlLnNob3dTYXZlQXNDaGFydERpYWxvZz1mdW5jdGlvbigpe3RoaXMuX2lubmVyQVBJKCkuc2hvd1NhdmVBc0NoYXJ0RGlhbG9nKCl9LHQucHJvdG90eXBlLnN5bWJvbEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkuZ2V0U3ltYm9sSW50ZXJ2YWwoKX0sdC5wcm90b3R5cGUubWFpblNlcmllc1ByaWNlRm9ybWF0dGVyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkubWFpblNlcmllc1ByaWNlRm9ybWF0dGVyKCl9LHQucHJvdG90eXBlLmdldEludGVydmFscz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLmdldEludGVydmFscygpfSx0LnByb3RvdHlwZS5nZXRTdHVkaWVzTGlzdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLmdldFN0dWRpZXNMaXN0KCl9LHQucHJvdG90eXBlLmFkZEN1c3RvbUNTU0ZpbGU9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJXaW5kb3coKS5hZGRDdXN0b21DU1NGaWxlKHQpfSx0LnByb3RvdHlwZS5hcHBseU92ZXJyaWRlcz1mdW5jdGlvbih0KXt0aGlzLl9vcHRpb25zPWUodGhpcy5fb3B0aW9ucyx7b3ZlcnJpZGVzOnR9KSx0aGlzLl9pbm5lcldpbmRvdygpLmFwcGx5T3ZlcnJpZGVzKHQpfSx0LnByb3RvdHlwZS5hcHBseVN0dWRpZXNPdmVycmlkZXM9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJXaW5kb3coKS5hcHBseVN0dWRpZXNPdmVycmlkZXModCl9LHQucHJvdG90eXBlLndhdGNoTGlzdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLndhdGNobGlzdCgpfSx0LnByb3RvdHlwZS5hY3RpdmVDaGFydD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLmFjdGl2ZUNoYXJ0KCl9LHQucHJvdG90eXBlLmNoYXJ0c0NvdW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkuY2hhcnRzQ291bnQoKX0sdC5wcm90b3R5cGUubGF5b3V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkubGF5b3V0KCl9LHQucHJvdG90eXBlLnNldExheW91dD1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLnNldExheW91dCh0KX0sdC5wcm90b3R5cGUuX2dldElGcmFtZUVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9pZCk7aWYobnVsbD09PXQpdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gc3VjaCBpZnJhbWVcIik7cmV0dXJuIHR9LHQucHJvdG90eXBlLl9pbm5lckFQST1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9nZXRJRnJhbWVFbGVtZW50KCkuY29udGVudFdpbmRvdy50cmFkaW5nVmlld0FwaX0sdC5wcm90b3R5cGUuX2lubmVyV2luZG93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2dldElGcmFtZUVsZW1lbnQoKS5jb250ZW50V2luZG93fSx0LnByb3RvdHlwZS5fYXV0b1Jlc2l6ZUNoYXJ0PWZ1bmN0aW9uKCl7dGhpcy5fb3B0aW9ucy5mdWxsc2NyZWVuJiYodGhpcy5fZ2V0SUZyYW1lRWxlbWVudCgpLnN0eWxlLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQrXCJweFwiKX0sdC5wcm90b3R5cGUuX2NyZWF0ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLl9yZW5kZXIoKSxvPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX29wdGlvbnMuY29udGFpbmVyX2lkKTtpZihudWxsPT09byl0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBzdWNoIGVsZW1lbnQgLSAjXCIrdGhpcy5fb3B0aW9ucy5jb250YWluZXJfaWQpO28uaW5uZXJIVE1MPWU7dmFyIGk9dGhpcy5fZ2V0SUZyYW1lRWxlbWVudCgpOyh0aGlzLl9vcHRpb25zLmF1dG9zaXplfHx0aGlzLl9vcHRpb25zLmZ1bGxzY3JlZW4pJiYoaS5zdHlsZS53aWR0aD1cIjEwMCVcIix0aGlzLl9vcHRpb25zLmZ1bGxzY3JlZW58fChpLnN0eWxlLmhlaWdodD1cIjEwMCVcIikpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fb25XaW5kb3dSZXNpemUpLHRoaXMuX29uV2luZG93UmVzaXplKCk7dmFyIG49ZnVuY3Rpb24oKXtpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbiwhMSksaS5jb250ZW50V2luZG93LndpZGdldFJlYWR5KGZ1bmN0aW9uKCl7dC5fcmVhZHk9ITA7Zm9yKHZhciBlPTAsbz10Ll9yZWFkeUhhbmRsZXJzO2U8by5sZW5ndGg7ZSsrKXtvW2VdLmNhbGwodCl9aS5jb250ZW50V2luZG93LmluaXRpYWxpemF0aW9uRmluaXNoZWQoKX0pfTtpLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbiwhMSl9LHQucHJvdG90eXBlLl9yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgdD13aW5kb3c7dFt0aGlzLl9pZF09e2RhdGFmZWVkOnRoaXMuX29wdGlvbnMuZGF0YWZlZWQsY3VzdG9tRm9ybWF0dGVyczp0aGlzLl9vcHRpb25zLmN1c3RvbUZvcm1hdHRlcnMsYnJva2VyRmFjdG9yeTp0aGlzLl9vcHRpb25zLmJyb2tlckZhY3Rvcnksb3ZlcnJpZGVzOnRoaXMuX29wdGlvbnMub3ZlcnJpZGVzLHN0dWRpZXNPdmVycmlkZXM6dGhpcy5fb3B0aW9ucy5zdHVkaWVzX292ZXJyaWRlcyxkaXNhYmxlZEZlYXR1cmVzOnRoaXMuX29wdGlvbnMuZGlzYWJsZWRfZmVhdHVyZXMsZW5hYmxlZEZlYXR1cmVzOnRoaXMuX29wdGlvbnMuZW5hYmxlZF9mZWF0dXJlcyxicm9rZXJDb25maWc6dGhpcy5fb3B0aW9ucy5icm9rZXJDb25maWcscmVzdENvbmZpZzp0aGlzLl9vcHRpb25zLnJlc3RDb25maWcsZmF2b3JpdGVzOnRoaXMuX29wdGlvbnMuZmF2b3JpdGVzLGxvZ286dGhpcy5fb3B0aW9ucy5sb2dvLG51bWVyaWNfZm9ybWF0dGluZzp0aGlzLl9vcHRpb25zLm51bWVyaWNfZm9ybWF0dGluZyxyc3NfbmV3c19mZWVkOnRoaXMuX29wdGlvbnMucnNzX25ld3NfZmVlZCxuZXdzUHJvdmlkZXI6dGhpcy5fb3B0aW9ucy5uZXdzX3Byb3ZpZGVyLGxvYWRMYXN0Q2hhcnQ6dGhpcy5fb3B0aW9ucy5sb2FkX2xhc3RfY2hhcnQsc2F2ZUxvYWRBZGFwdGVyOnRoaXMuX29wdGlvbnMuc2F2ZV9sb2FkX2FkYXB0ZXIsbG9hZGluZ19zY3JlZW46dGhpcy5fb3B0aW9ucy5sb2FkaW5nX3NjcmVlbixzZXR0aW5nc0FkYXB0ZXI6dGhpcy5fb3B0aW9ucy5zZXR0aW5nc19hZGFwdGVyfSx0aGlzLl9vcHRpb25zLnNhdmVkX2RhdGEmJih0W3RoaXMuX2lkXS5jaGFydENvbnRlbnQ9e2pzb246dGhpcy5fb3B0aW9ucy5zYXZlZF9kYXRhfSk7dmFyIGU9KHRoaXMuX29wdGlvbnMubGlicmFyeV9wYXRofHxcIlwiKStcInN0YXRpYy90di1jaGFydC42MzBiNzA0YTJiOWQwZWFmMTU5My5odG1sI2xvY2Fsc2VydmVyPTEmc3ltYm9sPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLnN5bWJvbCkrXCImaW50ZXJ2YWw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMuaW50ZXJ2YWwpKyh0aGlzLl9vcHRpb25zLnRpbWVmcmFtZT9cIiZ0aW1lZnJhbWU9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMudGltZWZyYW1lKTpcIlwiKSsodGhpcy5fb3B0aW9ucy50b29sYmFyX2JnP1wiJnRvb2xiYXJiZz1cIit0aGlzLl9vcHRpb25zLnRvb2xiYXJfYmcucmVwbGFjZShcIiNcIixcIlwiKTpcIlwiKSsodGhpcy5fb3B0aW9ucy5zdHVkaWVzX2FjY2Vzcz9cIiZzdHVkaWVzQWNjZXNzPVwiK2VuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGlzLl9vcHRpb25zLnN0dWRpZXNfYWNjZXNzKSk6XCJcIikrXCImd2lkZ2V0YmFyPVwiK2VuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGlzLl9vcHRpb25zLndpZGdldGJhcikpKyh0aGlzLl9vcHRpb25zLmRyYXdpbmdzX2FjY2Vzcz9cIiZkcmF3aW5nc0FjY2Vzcz1cIitlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy5fb3B0aW9ucy5kcmF3aW5nc19hY2Nlc3MpKTpcIlwiKStcIiZ0aW1lRnJhbWVzPVwiK2VuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGlzLl9vcHRpb25zLnRpbWVfZnJhbWVzKSkrXCImbG9jYWxlPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLmxvY2FsZSkrXCImdWlkPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9pZCkrXCImY2xpZW50SWQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh0aGlzLl9vcHRpb25zLmNsaWVudF9pZCkpK1wiJnVzZXJJZD1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHRoaXMuX29wdGlvbnMudXNlcl9pZCkpKyh0aGlzLl9vcHRpb25zLmNoYXJ0c19zdG9yYWdlX3VybD9cIiZjaGFydHNTdG9yYWdlVXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLmNoYXJ0c19zdG9yYWdlX3VybCk6XCJcIikrKHRoaXMuX29wdGlvbnMuY2hhcnRzX3N0b3JhZ2VfYXBpX3ZlcnNpb24/XCImY2hhcnRzU3RvcmFnZVZlcj1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5jaGFydHNfc3RvcmFnZV9hcGlfdmVyc2lvbik6XCJcIikrKHRoaXMuX29wdGlvbnMuaW5kaWNhdG9yc19maWxlX25hbWU/XCImaW5kaWNhdG9yc0ZpbGU9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMuaW5kaWNhdG9yc19maWxlX25hbWUpOlwiXCIpKyh0aGlzLl9vcHRpb25zLmN1c3RvbV9jc3NfdXJsP1wiJmN1c3RvbUNTUz1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5jdXN0b21fY3NzX3VybCk6XCJcIikrKHRoaXMuX29wdGlvbnMuYXV0b19zYXZlX2RlbGF5P1wiJmF1dG9TYXZlRGVsYXk9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh0aGlzLl9vcHRpb25zLmF1dG9fc2F2ZV9kZWxheSkpOlwiXCIpK1wiJmRlYnVnPVwiK3RoaXMuX29wdGlvbnMuZGVidWcrKHRoaXMuX29wdGlvbnMuc25hcHNob3RfdXJsP1wiJnNuYXBzaG90VXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLnNuYXBzaG90X3VybCk6XCJcIikrKHRoaXMuX29wdGlvbnMudGltZXpvbmU/XCImdGltZXpvbmU9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMudGltZXpvbmUpOlwiXCIpKyh0aGlzLl9vcHRpb25zLnN0dWR5X2NvdW50X2xpbWl0P1wiJnN0dWR5Q291bnRMaW1pdD1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHRoaXMuX29wdGlvbnMuc3R1ZHlfY291bnRfbGltaXQpKTpcIlwiKSsodGhpcy5fb3B0aW9ucy5zeW1ib2xfc2VhcmNoX3JlcXVlc3RfZGVsYXk/XCImc3NyZXFkZWxheT1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHRoaXMuX29wdGlvbnMuc3ltYm9sX3NlYXJjaF9yZXF1ZXN0X2RlbGF5KSk6XCJcIik7cmV0dXJuJzxpZnJhbWUgaWQ9XCInK3RoaXMuX2lkKydcIiBuYW1lPVwiJyt0aGlzLl9pZCsnXCIgIHNyYz1cIicrZSsnXCInKyh0aGlzLl9vcHRpb25zLmF1dG9zaXplfHx0aGlzLl9vcHRpb25zLmZ1bGxzY3JlZW4/XCJcIjonIHdpZHRoPVwiJyt0aGlzLl9vcHRpb25zLndpZHRoKydcIiBoZWlnaHQ9XCInK3RoaXMuX29wdGlvbnMuaGVpZ2h0KydcIicpKycgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgc2Nyb2xsaW5nPVwibm9cIiBhbGxvd2Z1bGxzY3JlZW4gc3R5bGU9XCJkaXNwbGF5OmJsb2NrO1wiPjwvaWZyYW1lPid9LHR9KCksZD1hO3dpbmRvdy5UcmFkaW5nVmlldz13aW5kb3cuVHJhZGluZ1ZpZXd8fHt9LHdpbmRvdy5UcmFkaW5nVmlldy52ZXJzaW9uPW8sdC52ZXJzaW9uPW8sdC5vbnJlYWR5PWksdC53aWRnZXQ9ZCxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIG1pZG5pZ2h0VGhlbWU6IHtcclxuICAgICAgICBiaWRDb2xvcjogXCIjNTBEMkMyXCIsXHJcbiAgICAgICAgYmlkRmlsbENvbG9yOiBcInJnYmEoODAsIDIxMCwgMTk0LCAwLjUpXCIsXHJcbiAgICAgICAgYXNrQ29sb3I6IFwiI0UzNzQ1QlwiLFxyXG4gICAgICAgIGFza0ZpbGxDb2xvcjogXCJyZ2JhKDIyNywgMTE2LCA5MSwgMC41KVwiLFxyXG4gICAgICAgIGNhbGxDb2xvcjogXCIjQkJCRjJCXCIsXHJcbiAgICAgICAgc2V0dGxlQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAxKVwiLFxyXG4gICAgICAgIHNldHRsZUZpbGxDb2xvcjogXCJyZ2JhKDEyNSwgMTM0LCAyMTQsIDAuNSlcIixcclxuICAgICAgICBwb3NpdGl2ZUNvbG9yOiBcIiM2QkE1ODNcIixcclxuICAgICAgICBuZWdhdGl2ZUNvbG9yOiBcIiNEQjAwMDBcIixcclxuICAgICAgICBzdHJva2VDb2xvcjogXCIjRkZGRjAwXCIsXHJcbiAgICAgICAgcHJpbWFyeVRleHQ6IFwiI2UwZTBlMFwiLFxyXG4gICAgICAgIHZvbHVtZUNvbG9yOiBcIiM4NDg0ODRcIixcclxuXHJcbiAgICAgICAgLy90b29sdGlwXHJcbiAgICAgICAgdG9vbHRpcEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIixcclxuICAgICAgICB0b29sdGlwQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIHRvb2x0aXBGaWxsQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIC8vYXhpc1xyXG4gICAgICAgIGF4aXNMYWJlbHNDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgYXhpc0xpbmVDb2xvcjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMylcIixcclxuICAgICAgICBpbmRpY2F0b3JMaW5lQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgIGJnQ29sb3I6IFwiIzE5MWExZlwiLFxyXG4gICAgICAgIHRleHRDb2xvcjogXCIjZTBlMGUwXCJcclxuICAgIH0sXHJcbiAgICBydWRleERhcmtUaGVtZToge1xyXG4gICAgICAgIGJpZENvbG9yOiBcIiM1MEQyQzJcIixcclxuICAgICAgICBiaWRGaWxsQ29sb3I6IFwicmdiYSg4MCwgMjEwLCAxOTQsIDAuNSlcIixcclxuICAgICAgICBhc2tDb2xvcjogXCIjRTM3NDVCXCIsXHJcbiAgICAgICAgYXNrRmlsbENvbG9yOiBcInJnYmEoMjI3LCAxMTYsIDkxLCAwLjUpXCIsXHJcbiAgICAgICAgY2FsbENvbG9yOiBcIiNCQkJGMkJcIixcclxuICAgICAgICBzZXR0bGVDb2xvcjogXCJyZ2JhKDEyNSwgMTM0LCAyMTQsIDEpXCIsXHJcbiAgICAgICAgc2V0dGxlRmlsbENvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMC41KVwiLFxyXG4gICAgICAgIHBvc2l0aXZlQ29sb3I6IFwiIzZCQTU4M1wiLFxyXG4gICAgICAgIG5lZ2F0aXZlQ29sb3I6IFwiI0RCMDAwMFwiLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yOiBcIiNGRkZGMDBcIixcclxuICAgICAgICBwcmltYXJ5VGV4dDogXCIjZTBlMGUwXCIsXHJcbiAgICAgICAgdm9sdW1lQ29sb3I6IFwiIzg0ODQ4NFwiLFxyXG5cclxuICAgICAgICAvL3Rvb2x0aXBcclxuICAgICAgICB0b29sdGlwQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC40KVwiLFxyXG4gICAgICAgIHRvb2x0aXBDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgdG9vbHRpcEZpbGxDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgLy9heGlzXHJcbiAgICAgICAgYXhpc0xhYmVsc0NvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBheGlzTGluZUNvbG9yOiBcIiNBQUFBQUFcIixcclxuICAgICAgICBpbmRpY2F0b3JMaW5lQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgIGJnQ29sb3I6IFwiIzE5MWExZlwiLFxyXG4gICAgICAgIHRleHRDb2xvcjogXCIjZTBlMGUwXCJcclxuICAgIH0sXHJcbiAgICBkYXJrVGhlbWU6IHtcclxuICAgICAgICBiaWRDb2xvcjogXCIjNkJBNTgzXCIsXHJcbiAgICAgICAgYmlkRmlsbENvbG9yOiBcInJnYmEoODAsIDIxMCwgMTk0LCAwLjUpXCIsXHJcbiAgICAgICAgYXNrQ29sb3I6IFwiI0UzNzQ1QlwiLFxyXG4gICAgICAgIGFza0ZpbGxDb2xvcjogXCJyZ2JhKDIyNywgMTE2LCA5MSwgMC41KVwiLFxyXG4gICAgICAgIGNhbGxDb2xvcjogXCIjQkJCRjJCXCIsXHJcbiAgICAgICAgc2V0dGxlQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAxKVwiLFxyXG4gICAgICAgIHNldHRsZUZpbGxDb2xvcjogXCJyZ2JhKDEyNSwgMTM0LCAyMTQsIDAuNSlcIixcclxuICAgICAgICBwb3NpdGl2ZUNvbG9yOiBcIiMyNThBMTRcIixcclxuICAgICAgICBuZWdhdGl2ZUNvbG9yOiBcIiNEQjAwMDBcIixcclxuICAgICAgICBzdHJva2VDb2xvcjogXCIjRkZGRjAwXCIsXHJcbiAgICAgICAgcHJpbWFyeVRleHQ6IFwiI2UwZTBlMFwiLFxyXG4gICAgICAgIHZvbHVtZUNvbG9yOiBcIiM4NDg0ODRcIixcclxuXHJcbiAgICAgICAgLy90b29sdGlwXHJcbiAgICAgICAgdG9vbHRpcEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIixcclxuICAgICAgICB0b29sdGlwQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIHRvb2x0aXBGaWxsQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIC8vYXhpc1xyXG4gICAgICAgIGF4aXNMYWJlbHNDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgYXhpc0xpbmVDb2xvcjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMylcIixcclxuICAgICAgICBpbmRpY2F0b3JMaW5lQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgIGJnQ29sb3I6IFwiIzJhMmEyYVwiLFxyXG4gICAgICAgIHRleHRDb2xvcjogXCIjZmZmZmZmXCJcclxuICAgIH0sXHJcbiAgICBsaWdodFRoZW1lOiB7XHJcbiAgICAgICAgYmlkQ29sb3I6IFwiIzI1OEExNFwiLFxyXG4gICAgICAgIGJpZEZpbGxDb2xvcjogXCJyZ2JhKDgwLCAyMTAsIDE5NCwgMC41KVwiLFxyXG4gICAgICAgIGFza0NvbG9yOiBcIiNFQTM0MEJcIixcclxuICAgICAgICBhc2tGaWxsQ29sb3I6IFwicmdiYSgyMjcsIDExNiwgOTEsIDAuNSlcIixcclxuICAgICAgICBjYWxsQ29sb3I6IFwiI0JCQkYyQlwiLFxyXG4gICAgICAgIHNldHRsZUNvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMSlcIixcclxuICAgICAgICBzZXR0bGVGaWxsQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAwLjUpXCIsXHJcbiAgICAgICAgcG9zaXRpdmVDb2xvcjogXCIjNTI4YzBhXCIsXHJcbiAgICAgICAgbmVnYXRpdmVDb2xvcjogXCJyZ2JhKDIyNSwgNjYsIDc0LCAxKVwiLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBwcmltYXJ5VGV4dDogXCIjMjQyNDI0XCIsXHJcbiAgICAgICAgdm9sdW1lQ29sb3I6IFwiIzg0ODQ4NFwiLFxyXG5cclxuICAgICAgICAvL3Rvb2x0aXBcclxuICAgICAgICB0b29sdGlwQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsIDAuOSlcIixcclxuICAgICAgICB0b29sdGlwQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgIHRvb2x0aXBGaWxsQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgIC8vYXhpc1xyXG4gICAgICAgIGF4aXNMYWJlbHNDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgYXhpc0xpbmVDb2xvcjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMylcIixcclxuICAgICAgICBpbmRpY2F0b3JMaW5lQ29sb3I6IFwiIzg0ODQ4NFwiLFxyXG4gICAgICAgIGJnQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIHRleHRDb2xvcjogXCIjM2QzZDNkXCJcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQge0ZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtdGltZXpvbmVcIjtcclxuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XHJcbmltcG9ydCB7Z2V0R2F0ZXdheU5hbWV9IGZyb20gXCJjb21tb24vZ2F0ZXdheVV0aWxzXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTeW1ib2xJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLnRpY2tlcjtcclxuICAgICAgICB0aGlzLnRpY2tlciA9IG9wdGlvbnMudGlja2VyO1xyXG5cclxuICAgICAgICBjb25zdCBxdW90ZUdhdGV3YXkgPSBnZXRHYXRld2F5TmFtZShvcHRpb25zLnF1b3RlQXNzZXQpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VHYXRld2F5ID0gZ2V0R2F0ZXdheU5hbWUob3B0aW9ucy5iYXNlQXNzZXQpO1xyXG4gICAgICAgIGxldCBjdXJyZW50RXhjaGFuZ2UgPVxyXG4gICAgICAgICAgICBxdW90ZUdhdGV3YXkgPT09IGJhc2VHYXRld2F5XHJcbiAgICAgICAgICAgICAgICA/IHF1b3RlR2F0ZXdheVxyXG4gICAgICAgICAgICAgICAgOiBxdW90ZUdhdGV3YXkgJiYgIWJhc2VHYXRld2F5XHJcbiAgICAgICAgICAgICAgICAgICAgPyBxdW90ZUdhdGV3YXlcclxuICAgICAgICAgICAgICAgICAgICA6ICFxdW90ZUdhdGV3YXkgJiYgYmFzZUdhdGV3YXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBiYXNlR2F0ZXdheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke3F1b3RlR2F0ZXdheX0gLyAke2Jhc2VHYXRld2F5fWA7XHJcblxyXG4gICAgICAgIGxldCB7bmFtZTogYmFzZVN5bWJvbCwgcHJlZml4OiBiYXNlUHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxyXG4gICAgICAgICAgICBvcHRpb25zLmJhc2VBc3NldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHtuYW1lOiBxdW90ZVN5bWJvbCwgcHJlZml4OiBxdW90ZVByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShcclxuICAgICAgICAgICAgb3B0aW9ucy5xdW90ZUFzc2V0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGAke3F1b3RlUHJlZml4IHx8IFwiXCJ9JHtxdW90ZVN5bWJvbH0gLyAke2Jhc2VQcmVmaXggfHxcclxuICAgICAgICAgICAgXCJcIn0ke2Jhc2VTeW1ib2x9ICR7XHJcbiAgICAgICAgICAgICEhY3VycmVudEV4Y2hhbmdlID8gYCgke2N1cnJlbnRFeGNoYW5nZX0pYCA6IFwiXCJcclxuICAgICAgICB9YDtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcImJpdGNvaW5cIjtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSBcIjI0eDdcIjtcclxuICAgICAgICB0aGlzLnRpbWV6b25lID0gbW9tZW50LnR6Lmd1ZXNzKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhX3N0YXR1cyA9IFwic3RyZWFtaW5nXCI7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMgPSBvcHRpb25zLnJlc29sdXRpb25zO1xyXG4gICAgICAgIHRoaXMuaGFzX2VtcHR5X2JhcnMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJpY2VzY2FsZSA9IE1hdGgucG93KDEwLCBvcHRpb25zLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIikpO1xyXG4gICAgICAgIHRoaXMucXVvdGVBc3NldCA9IG9wdGlvbnMucXVvdGVBc3NldDtcclxuICAgICAgICB0aGlzLmJhc2VBc3NldCA9IG9wdGlvbnMuYmFzZUFzc2V0O1xyXG4gICAgICAgIHRoaXMubWlubW92ID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5oYXNfaW50cmFkYXkgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChzdXBwb3J0ZWQsIHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWQgfHwgIWlzTmFOKHBhcnNlSW50KHIsIDEwKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmludHJhZGF5X211bHRpcGxpZXJzID0gdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMuZmlsdGVyKHIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlSW50KHIsIDEwKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFzX3NlY29uZHMgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5yZWR1Y2UoKHN1cHBvcnRlZCwgcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkIHx8IHIuaW5kZXhPZihcIlNcIikgIT09IC0xO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNlY29uZHNfbXVsdGlwbGllcnMgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5maWx0ZXIociA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByLmluZGV4T2YoXCJTXCIpICE9PSAtMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5oYXNfZGFpbHkgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5yZWR1Y2UoKHN1cHBvcnRlZCwgcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkIHx8IHIuaW5kZXhPZihcIkRcIikgIT09IC0xO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYXNfZGFpbHkgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5yZWR1Y2UoKHN1cHBvcnRlZCwgcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkIHx8IHIuaW5kZXhPZihcIkRcIikgIT09IC0xO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cyhidWNrZXRzKSB7XHJcbiAgICBsZXQgcmVzb2x1dGlvbnMgPSBidWNrZXRzXHJcbiAgICAgICAgLm1hcChyID0+IHtcclxuICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IHIgLyA2MDtcclxuICAgICAgICAgICAgbGV0IGRheSA9IG1pbnV0ZSAvIDYwIC8gMjQ7XHJcbiAgICAgICAgICAgIGxldCB3ZWVrID0gZGF5IC8gNztcclxuXHJcbiAgICAgICAgICAgIGlmIChtaW51dGUgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBiZWxvdyAxIG1pbnV0ZSB3ZSByZXR1cm4gU2Vjb25kc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIgKyBcIlNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXkgPCAxICYmIHBhcnNlSW50KG1pbnV0ZSwgMTApID09PSBtaW51dGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGJlbG93IDEgZGF5IHdlIHJldHVybiBNaW51dGVzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWludXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2VlayA8IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGJlbG93IDEgd2VlayB3ZSByZXR1cm4gRGF5c1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRheSwgMTApID09PSBkYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA9PT0gMSkgcmV0dXJuIFwiRFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5ICsgXCJEXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgcmV0dXJuIHdlZWtzXHJcbiAgICAgICAgICAgICAgICBpZiAod2VlayA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHdlZWssIDEwKSA9PT0gd2Vlaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2VlayArIFwiRFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKGEgPT4gISFhKTtcclxuXHJcbiAgICByZXR1cm4gcmVzb2x1dGlvbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ1Y2tldEZyb21SZXNvbHV0aW9uKHIpIHtcclxuICAgIGlmIChyID09PSBcIkRcIikgcmV0dXJuIDI0ICogNjAgKiA2MDtcclxuXHJcbiAgICBpZiAoci5pbmRleE9mKFwiV1wiKSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoci5yZXBsYWNlKFwiRFwiLCBcIlwiKSwgMTApICogNyAqIDI0ICogNjAgKiA2MDtcclxuICAgIH0gZWxzZSBpZiAoci5pbmRleE9mKFwiRFwiKSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoci5yZXBsYWNlKFwiRFwiLCBcIlwiKSwgMTApICogMjQgKiA2MCAqIDYwO1xyXG4gICAgfSBlbHNlIGlmIChyLmluZGV4T2YoXCJTXCIpICE9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChyLnJlcGxhY2UoXCJTXCIsIFwiXCIpLCAxMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChyLCAxMCkgKiA2MDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF0YUZlZWQge1xyXG4gICAgdXBkYXRlKG9wdGlvbnMpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlc29sdXRpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMgPSBnZXRSZXNvbHV0aW9uc0Zyb21CdWNrZXRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc29sdXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25NYXJrZXRDaGFuZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBNYXJrZXRzU3RvcmUudW5zdWJzY3JpYmUoXCJtYXJrZXRfY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNTdG9yZS5zdWJzY3JpYmUoXCJtYXJrZXRfY2hhbmdlXCIsIG9wdGlvbnNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTdWJzKCkge1xyXG4gICAgICAgIE1hcmtldHNTdG9yZS5jbGVhclN1YnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIGV4Y2hhbmdlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiT1BFTi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcGVubGVkZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiT3BlbmxlZGdlciBHYXRld2F5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgc3ltYm9sc190eXBlczogW10sXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRfcmVzb2x1dGlvbnM6IHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNfbWFya3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNfc2VhcmNoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRzX3RpbWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFN5bWJvbHModXNlcklucHV0LCBleGNoYW5nZSwgc3ltYm9sVHlwZSwgb25SZXN1bHRSZWFkeUNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hTeW1ib2xzXCIsIHVzZXJJbnB1dCwgZXhjaGFuZ2UsIHN5bWJvbFR5cGUpO1xyXG5cclxuICAgICAgICBvblJlc3VsdFJlYWR5Q2FsbGJhY2soW10pO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJzeW1ib2xcIjogXCI8c2hvcnQgc3ltYm9sIG5hbWU+XCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1bGxfbmFtZVwiOiBcIjxmdWxsIHN5bWJvbCBuYW1lPlwiLCAvLyBlLmcuIEJUQ0U6QlRDVVNEXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiPHN5bWJvbCBkZXNjcmlwdGlvbj5cIixcclxuICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2VcIjogXCI8c3ltYm9sIGV4Y2hhbmdlIG5hbWU+XCIsXHJcbiAgICAgICAgICAgICAgICBcInRpY2tlclwiOiBcIjxzeW1ib2wgdGlja2VyIG5hbWUsIG9wdGlvbmFsPlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RvY2tcIiAvLyBvciBcImZ1dHVyZXNcIiBvciBcImJpdGNvaW5cIiBvciBcImZvcmV4XCIgb3IgXCJpbmRleFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIC4uLi4uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgKi9cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlU3ltYm9sKFxyXG4gICAgICAgIHN5bWJvbE5hbWUsXHJcbiAgICAgICAgb25TeW1ib2xSZXNvbHZlZENhbGxiYWNrLFxyXG4gICAgICAgIG9uUmVzb2x2ZUVycm9yQ2FsbGJhY2tcclxuICAgICkge1xyXG4gICAgICAgIGxldCBbcXVvdGUsIGJhc2VdID0gc3ltYm9sTmFtZS5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBGZXRjaENoYWluKFwiZ2V0QXNzZXRcIiwgcXVvdGUpLFxyXG4gICAgICAgICAgICBGZXRjaENoYWluKFwiZ2V0QXNzZXRcIiwgYmFzZSlcclxuICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbihhc3NldHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtxdW90ZUFzc2V0LCBiYXNlQXNzZXRdID0gYXNzZXRzO1xyXG4gICAgICAgICAgICAgICAgb25TeW1ib2xSZXNvbHZlZENhbGxiYWNrKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTeW1ib2xJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyOiBzeW1ib2xOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25zOiB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2gob25SZXNvbHZlRXJyb3JDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFycyhcclxuICAgICAgICBzeW1ib2xJbmZvLFxyXG4gICAgICAgIHJlc29sdXRpb24sXHJcbiAgICAgICAgZnJvbSxcclxuICAgICAgICB0byxcclxuICAgICAgICBvbkhpc3RvcnlDYWxsYmFjayxcclxuICAgICAgICBvbkVycm9yQ2FsbGJhY2ssXHJcbiAgICAgICAgZmlyc3REYXRhUmVxdWVzdFxyXG4gICAgKSB7XHJcbiAgICAgICAgZnJvbSAqPSAxMDAwO1xyXG4gICAgICAgIHRvICo9IDEwMDA7XHJcbiAgICAgICAgbGV0IGJhcnMgPSB0aGlzLl9nZXRIaXN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5sYXRlc3RCYXIgPSBiYXJzW2JhcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgYmFycyA9IGJhcnMuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS50aW1lID49IGZyb20gJiYgYS50aW1lIDw9IHRvO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCAhPT0gcmVzb2x1dGlvbikge1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0RGF0YVJlcXVlc3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdCdWNrZXRTaXplID0gZ2V0QnVja2V0RnJvbVJlc29sdXRpb24ocmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNoYW5nZUJ1Y2tldFNpemUobmV3QnVja2V0U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoXHJcbiAgICAgICAgICAgICAgICBzeW1ib2xJbmZvLnF1b3RlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBzeW1ib2xJbmZvLmJhc2VBc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuc3Vic2NyaWJlTWFya2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEluZm8uYmFzZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEluZm8ucXVvdGVBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBuZXdCdWNrZXRTaXplXHJcbiAgICAgICAgICAgICAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXJzID0gdGhpcy5fZ2V0SGlzdG9yeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0QmFyID0gYmFyc1tiYXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhcnMgPSBiYXJzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudGltZSA+PSBmcm9tICYmIGEudGltZSA8PSB0bztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gcmVzb2x1dGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJhcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25IaXN0b3J5Q2FsbGJhY2soYmFycywge25vRGF0YTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlzdG9yeUNhbGxiYWNrKGJhcnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXHJcbiAgICAgICAgLy8gICAgIFwiZ2V0QmFyc1wiLFxyXG4gICAgICAgIC8vICAgICBzeW1ib2xJbmZvLnRpY2tlcixcclxuICAgICAgICAvLyAgICAgcmVzb2x1dGlvbixcclxuICAgICAgICAvLyAgICAgXCJmaXJzdERhdGFSZXF1ZXN0XCIsXHJcbiAgICAgICAgLy8gICAgIGZpcnN0RGF0YVJlcXVlc3QsXHJcbiAgICAgICAgLy8gICAgIFwiYmFyc1wiLFxyXG4gICAgICAgIC8vICAgICBiYXJzXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gcmVzb2x1dGlvbjtcclxuICAgICAgICBpZiAoIWJhcnMubGVuZ3RoKSByZXR1cm4gb25IaXN0b3J5Q2FsbGJhY2soYmFycywge25vRGF0YTogdHJ1ZX0pO1xyXG5cclxuICAgICAgICBvbkhpc3RvcnlDYWxsYmFjayhiYXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SGlzdG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkucHJpY2VEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZUJhcnMoXHJcbiAgICAgICAgc3ltYm9sSW5mbyxcclxuICAgICAgICByZXNvbHV0aW9uLFxyXG4gICAgICAgIG9uUmVhbHRpbWVDYWxsYmFjayxcclxuICAgICAgICBzdWJzY3JpYmVyVUlELFxyXG4gICAgICAgIG9uUmVzZXRDYWNoZU5lZWRlZENhbGxiYWNrXHJcbiAgICApIHtcclxuICAgICAgICBNYXJrZXRzU3RvcmUudW5zdWJzY3JpYmUoXCJzdWJzY3JpYmVCYXJzXCIpO1xyXG4gICAgICAgIG9uUmVzZXRDYWNoZU5lZWRlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgTWFya2V0c1N0b3JlLnN1YnNjcmliZShcInN1YnNjcmliZUJhcnNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYmFycyA9IHRoaXMuX2dldEhpc3RvcnkoKTtcclxuICAgICAgICAgICAgbGV0IG5ld0JhcnMgPSBiYXJzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sYXRlc3RCYXIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEudGltZSA+IHRoaXMubGF0ZXN0QmFyLnRpbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1YnNjcmliZUJhcnNcIiwgTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWN0aXZlTWFya2V0LCBcImZvdW5kIG5ldyBiYXJzOlwiLCBuZXdCYXJzKTtcclxuICAgICAgICAgICAgaWYgKG5ld0JhcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdCYXJzLmZvckVhY2goYmFyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblJlYWx0aW1lQ2FsbGJhY2soYmFyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RCYXIgPSBuZXdCYXJzW25ld0JhcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBsYXRlc3QgYmFyIGlzIGRpZmZlcmVudFxyXG4gICAgICAgICAgICAgICAgbGV0IGRpZENoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMubGF0ZXN0QmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGF0ZXN0QmFyW2tleV0gIT09IGJhcnNbYmFycy5sZW5ndGggLSAxXVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZENoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpZENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVhbHRpbWVDYWxsYmFjayhiYXJzW2JhcnMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmVCYXJzKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBUaGlzIGlzIEFMV0FZUyBjYWxsZWQgYWZ0ZXIgc3Vic2NyaWJlQmFycyBmb3Igc29tZSByZWFzb24sIGJ1dFxyXG4gICAgICAgICogc29tZXRpbWVzIGl0IGV4ZWN1dGVzIEJFRk9SRSB0aGUgc3Vic2NyaWJlIGNhbGwgaW4gc3Vic2NyaWJlQmFycyBhbmRcclxuICAgICAgICAqIHNvbWV0aW1lcyBBRlRFUi4gVGhpcyBjYXVzZXMgdGhlIGNhbGxiYWNrIHRvIGJlIGNsZWFyZWQgYW5kIHdlIHN0b3BcclxuICAgICAgICAqIHJlY2VpdmluZyB1cGRhdGVzIGZyb20gdGhlIE1hcmtldFN0b3JlLiBVbmxlc3Mgd2UgZmluZCBpdCBjYXVzZXMgYnVncyxcclxuICAgICAgICAqIGl0J3MgYmVzdCB0byBqdXN0IG5vdCB1c2UgdGhpcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vIE1hcmtldHNTdG9yZS51bnN1YnNjcmliZShcInN1YnNjcmliZUJhcnNcIik7XHJcbiAgICAgICAgLy8gdGhpcy5sYXRlc3RCYXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUhpc3RvcnlEZXB0aChyZXNvbHV0aW9uLCByZXNvbHV0aW9uQmFjaywgaW50ZXJ2YWxCYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2ZXJUaW1lKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3VwcG9ydGVkVGltZVpvbmVzID0gW1xyXG4gICAgXCJBbWVyaWNhL0FyZ2VudGluYS9CdWVub3NfQWlyZXNcIixcclxuICAgIFwiQW1lcmljYS9Cb2dvdGFcIixcclxuICAgIFwiQW1lcmljYS9DYXJhY2FzXCIsXHJcbiAgICBcIkFtZXJpY2EvQ2hpY2Fnb1wiLFxyXG4gICAgXCJBbWVyaWNhL0VsX1NhbHZhZG9yXCIsXHJcbiAgICBcIkFtZXJpY2EvTG9zX0FuZ2VsZXNcIixcclxuICAgIFwiQW1lcmljYS9NZXhpY29fQ2l0eVwiLFxyXG4gICAgXCJBbWVyaWNhL05ld19Zb3JrXCIsXHJcbiAgICBcIkFtZXJpY2EvUGhvZW5peFwiLFxyXG4gICAgXCJBbWVyaWNhL1Nhb19QYXVsb1wiLFxyXG4gICAgXCJBbWVyaWNhL1Rvcm9udG9cIixcclxuICAgIFwiQW1lcmljYS9WYW5jb3V2ZXJcIixcclxuICAgIFwiQXNpYS9BbG1hdHlcIixcclxuICAgIFwiQXNpYS9Bc2hraGFiYWRcIixcclxuICAgIFwiQXNpYS9CYW5na29rXCIsXHJcbiAgICBcIkFzaWEvRHViYWlcIixcclxuICAgIFwiQXNpYS9Ib25nX0tvbmdcIixcclxuICAgIFwiQXNpYS9LYXRobWFuZHVcIixcclxuICAgIFwiQXNpYS9Lb2xrYXRhXCIsXHJcbiAgICBcIkFzaWEvU2VvdWxcIixcclxuICAgIFwiQXNpYS9TaGFuZ2hhaVwiLFxyXG4gICAgXCJBc2lhL1NpbmdhcG9yZVwiLFxyXG4gICAgXCJBc2lhL1RhaXBlaVwiLFxyXG4gICAgXCJBc2lhL1RlaHJhblwiLFxyXG4gICAgXCJBc2lhL1Rva3lvXCIsXHJcbiAgICBcIkF1c3RyYWxpYS9BQ1RcIixcclxuICAgIFwiQXVzdHJhbGlhL0FkZWxhaWRlXCIsXHJcbiAgICBcIkF1c3RyYWxpYS9CcmlzYmFuZVwiLFxyXG4gICAgXCJBdXN0cmFsaWEvU3lkbmV5XCIsXHJcbiAgICBcIkV1cm9wZS9BdGhlbnNcIixcclxuICAgIFwiRXVyb3BlL0JlcmxpblwiLFxyXG4gICAgXCJFdXJvcGUvSXN0YW5idWxcIixcclxuICAgIFwiRXVyb3BlL0xvbmRvblwiLFxyXG4gICAgXCJFdXJvcGUvTWFkcmlkXCIsXHJcbiAgICBcIkV1cm9wZS9Nb3Njb3dcIixcclxuICAgIFwiRXVyb3BlL1BhcmlzXCIsXHJcbiAgICBcIkV1cm9wZS9XYXJzYXdcIixcclxuICAgIFwiRXVyb3BlL1p1cmljaFwiLFxyXG4gICAgXCJQYWNpZmljL0F1Y2tsYW5kXCIsXHJcbiAgICBcIlBhY2lmaWMvQ2hhdGhhbVwiLFxyXG4gICAgXCJQYWNpZmljL0Zha2FvZm9cIixcclxuICAgIFwiUGFjaWZpYy9Ib25vbHVsdVwiLFxyXG4gICAgXCJVUy9Nb3VudGFpblwiXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRUVlRpbWV6b25lKCkge1xyXG4gICAgY29uc3QgY3VycmVudCA9IG1vbWVudC50ei5ndWVzcygpO1xyXG4gICAgY29uc3QgZGVmYXVsdFpvbmUgPSBcIkV1cm9wZS9Mb25kb25cIjtcclxuXHJcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBzdXBwb3J0ZWRUaW1lWm9uZXMuaW5kZXhPZihjdXJyZW50KSAhPT0gLTE7XHJcbiAgICBpZiAoaXNTdXBwb3J0ZWQpIHJldHVybiBjdXJyZW50O1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLyogVHJ5IHRvIGZpbmQgYSBtYXRjaGluZyB0aW1lem9uZSBmcm9tIHRoZSBsaW1pdGVkIGxpc3Qgc3VwcG9ydGVkIGJ5IFRyYWRpbmdWaWV3ICovXHJcbiAgICAgICAgY29uc3QgdGltZSA9IG1vbWVudCgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gbW9tZW50LnR6KHRpbWUsIGN1cnJlbnQpLmZvcm1hdCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VwcG9ydGVkVGltZVpvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB6b25lVGltZSA9IG1vbWVudC50eih0aW1lLCBzdXBwb3J0ZWRUaW1lWm9uZXNbaV0pO1xyXG4gICAgICAgICAgICBpZiAoem9uZVRpbWUuZm9ybWF0KCkgPT09IGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9fREVWX18pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBGb3VuZCBhIG1hdGNoIGZvciAke2N1cnJlbnR9IHRpbWV6b25lLCB1c2luZyAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkVGltZVpvbmVzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vIEZvdW5kIGEgbWF0Y2gsIHJldHVybiB0aGF0IHpvbmVcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRUaW1lWm9uZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgTm8gbWF0Y2hpbmcgdGltZXpvbmUgZm91bmQgZm9yICR7Y3VycmVudH0sIHNldHRpbmcgdG8gZGVmYXVsdCB2YWx1ZSBvZiBFdXJvcGUvTG9uZG9uYFxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWZhdWx0Wm9uZTtcclxufVxyXG5cclxuZXhwb3J0IHtEYXRhRmVlZCwgU3ltYm9sSW5mbywgZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cywgZ2V0VFZUaW1lem9uZX07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3RIaWdoY2hhcnQgZnJvbSBcInJlYWN0LWhpZ2hjaGFydHNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge2Nsb25lRGVlcH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy9jb2xvcnNcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IHtkaWRPcmRlcnNDaGFuZ2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5cclxuY2xhc3MgRGVwdGhIaWdoQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICAgIGxldCBzZXR0bGVDaGVjayA9IGlzTmFOKG5leHRQcm9wcy5mZWVkUHJpY2UpXHJcbiAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgOiBuZXh0UHJvcHMuZmVlZFByaWNlICE9PSB0aGlzLnByb3BzLmZlZWRQcmljZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBkaWRPcmRlcnNDaGFuZ2UobmV4dFByb3BzLm9yZGVycywgdGhpcy5wcm9wcy5vcmRlcnMpIHx8XHJcbiAgICAgICAgICAgIGRpZE9yZGVyc0NoYW5nZShuZXh0UHJvcHMuY2FsbF9vcmRlcnMsIHRoaXMucHJvcHMuY2FsbF9vcmRlcnMpIHx8XHJcbiAgICAgICAgICAgIHNldHRsZUNoZWNrIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5mZWVkUHJpY2UgIT09IHRoaXMucHJvcHMuZmVlZFByaWNlIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5sZWZ0T3JkZXJCb29rICE9PSB0aGlzLnByb3BzLmxlZnRPcmRlckJvb2sgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLkxDUCAhPT0gdGhpcy5wcm9wcy5MQ1AgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnNob3dDYWxsTGltaXQgIT09IHRoaXMucHJvcHMuc2hvd0NhbGxMaW1pdCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuaGFzUHJlZGljdGlvbiAhPT0gdGhpcy5wcm9wcy5oYXNQcmVkaWN0aW9uIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5mZWVkUHJpY2UgIT09IHRoaXMucHJvcHMuZmVlZFByaWNlIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5tYXJrZXRSZWFkeSAhPT0gdGhpcy5wcm9wcy5tYXJrZXRSZWFkeVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZsb3dDaGFydCg1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnJlZnMuZGVwdGhDaGFydCAmJlxyXG4gICAgICAgICAgICBuZXh0UHJvcHMudmVydGljYWxPcmRlcmJvb2sgIT09IHRoaXMucHJvcHMudmVydGljYWxPcmRlcmJvb2tcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZsb3dDaGFydCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNlbnRlclJlZikge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBTY3JvbGwgPSB0aGlzLnByb3BzLmNlbnRlclJlZi5zY3JvbGxUb3A7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jZW50ZXJSZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jZW50ZXJSZWYuc2Nyb2xsVG9wID0gdGhpcy50ZW1wU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZsb3dDaGFydCh0aW1lb3V0KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuZGVwdGhDaGFydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmRlcHRoQ2hhcnQuY2hhcnQucmVmbG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VGhlbWVDb2xvcnMocHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yc1twcm9wcy50aGVtZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZsYXRfYmlkcyxcclxuICAgICAgICAgICAgZmxhdF9hc2tzLFxyXG4gICAgICAgICAgICBmbGF0X2NhbGxzLFxyXG4gICAgICAgICAgICBmbGF0X3NldHRsZXMsXHJcbiAgICAgICAgICAgIHRvdGFsQmlkcyxcclxuICAgICAgICAgICAgdG90YWxBc2tzLFxyXG4gICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgZmVlZFByaWNlXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcHJpbWFyeVRleHQsXHJcbiAgICAgICAgICAgIGNhbGxDb2xvcixcclxuICAgICAgICAgICAgc2V0dGxlQ29sb3IsXHJcbiAgICAgICAgICAgIHNldHRsZUZpbGxDb2xvcixcclxuICAgICAgICAgICAgYmlkQ29sb3IsXHJcbiAgICAgICAgICAgIGJpZEZpbGxDb2xvcixcclxuICAgICAgICAgICAgYXNrQ29sb3IsXHJcbiAgICAgICAgICAgIGFza0ZpbGxDb2xvcixcclxuICAgICAgICAgICAgYXhpc0xpbmVDb2xvclxyXG4gICAgICAgIH0gPSB0aGlzLl9nZXRUaGVtZUNvbG9ycygpO1xyXG5cclxuICAgICAgICBsZXQge25hbWU6IGJhc2VTeW1ib2wsIHByZWZpeDogYmFzZVByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShiYXNlKTtcclxuICAgICAgICBsZXQge25hbWU6IHF1b3RlU3ltYm9sLCBwcmVmaXg6IHF1b3RlUHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKHF1b3RlKTtcclxuICAgICAgICBiYXNlU3ltYm9sID0gKGJhc2VQcmVmaXggfHwgXCJcIikgKyBiYXNlU3ltYm9sO1xyXG4gICAgICAgIHF1b3RlU3ltYm9sID0gKHF1b3RlUHJlZml4IHx8IFwiXCIpICsgcXVvdGVTeW1ib2w7XHJcblxyXG4gICAgICAgIGxldCBmbGF0QmlkcyA9IGNsb25lRGVlcChmbGF0X2JpZHMpLFxyXG4gICAgICAgICAgICBmbGF0QXNrcyA9IGNsb25lRGVlcChmbGF0X2Fza3MpLFxyXG4gICAgICAgICAgICBmbGF0Q2FsbHMgPSBjbG9uZURlZXAoZmxhdF9jYWxscyksXHJcbiAgICAgICAgICAgIGZsYXRTZXR0bGVzID0gY2xvbmVEZWVwKGZsYXRfc2V0dGxlcyk7XHJcblxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFyZWFcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMCwgMCwgMClcIixcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IFsxMCwgMCwgNSwgMF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YUdyb3VwaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC43NSlcIixcclxuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXHJcblx0XHRcdFx0XHQ8dGFibGU+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+JHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5wcmljZVwiKX06PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPiR7dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICR7YmFzZVN5bWJvbH0vJHtxdW90ZVN5bWJvbH08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPiR7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVhbnRpdHlcIil9OjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj4ke3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gJHtxdW90ZVN5bWJvbH08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdGA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXSxcclxuICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByaW1hcnlUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3Bwb3NpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmlkTGluZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVDb2xvcjogXCJyZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMzApXCIsXHJcbiAgICAgICAgICAgICAgICBncmlkWkluZGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc25hcDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2VJbmRpY2F0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByaW1hcnlUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLnZhbHVlIC8gcG93ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9yZGluYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbGluZUNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsb3RMaW5lczogW11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGFyZWE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZU1vdXNlVHJhY2tpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2VudGVyIHRoZSBjaGFydHMgYmV0d2VlbiBiaWRzIGFuZCBhc2tzXHJcbiAgICAgICAgaWYgKGZsYXRCaWRzLmxlbmd0aCA+IDAgJiYgZmxhdEFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbWlkZGxlVmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgKGZsYXRBc2tzWzBdWzBdICsgZmxhdEJpZHNbZmxhdEJpZHMubGVuZ3RoIC0gMV1bMF0pIC8gMjtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5taW4gPSBtaWRkbGVWYWx1ZSAqIDAuNDtcclxuICAgICAgICAgICAgY29uZmlnLnhBeGlzLm1heCA9IG1pZGRsZVZhbHVlICogMS42O1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnhBeGlzLm1heCA8IGZsYXRBc2tzWzBdWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcueEF4aXMubWF4ID0gZmxhdEFza3NbMF1bMF0gKiAxLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy54QXhpcy5taW4gPiBmbGF0Qmlkc1tmbGF0Qmlkcy5sZW5ndGggLSAxXVswXSkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnhBeGlzLm1pbiA9IGZsYXRCaWRzW2ZsYXRCaWRzLmxlbmd0aCAtIDFdWzBdICogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB5TWF4ID0gMDtcclxuICAgICAgICAgICAgZmxhdEJpZHMuZm9yRWFjaChiID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChiWzBdID49IGNvbmZpZy54QXhpcy5taW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB5TWF4ID0gTWF0aC5tYXgoYlsxXSwgeU1heCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmbGF0QXNrcy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFbMF0gPD0gY29uZmlnLnhBeGlzLm1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHlNYXggPSBNYXRoLm1heChhWzFdLCB5TWF4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbmZpZy55QXhpcy5tYXggPSB5TWF4ICogMS4xNTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkanVzdCB5IGF4aXMgbGFiZWwgZGVjaW1hbHNcclxuICAgICAgICAgICAgbGV0IHlMYWJlbERlY2ltYWxzID0geU1heCA+IDEwID8gMCA6IHlNYXggPiAxID8gMiA6IDU7XHJcbiAgICAgICAgICAgIGNvbmZpZy55QXhpcy5sYWJlbHMuZm9ybWF0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0X251bWJlcih0aGlzLnZhbHVlLCB5TGFiZWxEZWNpbWFscyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChmbGF0Qmlkcy5sZW5ndGggJiYgIWZsYXRBc2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25maWcueEF4aXMubWluID0gZmxhdEJpZHNbZmxhdEJpZHMubGVuZ3RoIC0gMV1bMF0gKiAwLjQ7XHJcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5tYXggPSBmbGF0Qmlkc1tmbGF0Qmlkcy5sZW5ndGggLSAxXVswXSAqIDEuNjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZsYXRBc2tzLmxlbmd0aCAmJiAhZmxhdEJpZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5taW4gPSAwO1xyXG4gICAgICAgICAgICBjb25maWcueEF4aXMubWF4ID0gZmxhdEFza3NbMF1bMF0gKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFzUHJlZGljdGlvbikge1xyXG4gICAgICAgICAgICBjb25maWcueEF4aXMubWluID0gLTAuMDU7XHJcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5tYXggPSAxLjA1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIHBsb3RsaW5lcyBpZiBkZWZpbmVkXHJcbiAgICAgICAgLy8gaWYgKGZhbHNldGhpcy5wcm9wcy5wbG90TGluZSkge1xyXG4gICAgICAgIC8vXHQgY29uZmlnLnhBeGlzLnBsb3RMaW5lcy5wdXNoKHtcclxuICAgICAgICAvL1x0XHQgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgLy9cdFx0IGlkOiBcInBsb3RfbGluZVwiLFxyXG4gICAgICAgIC8vXHRcdCBkYXNoU3R5bGU6IFwibG9uZ2Rhc2hkb3RcIixcclxuICAgICAgICAvL1x0XHQgdmFsdWU6IHRoaXMucHJvcHMucGxvdExpbmUgKiBwb3dlcixcclxuICAgICAgICAvL1x0XHQgd2lkdGg6IDEsXHJcbiAgICAgICAgLy9cdFx0IHpJbmRleDogNVxyXG4gICAgICAgIC8vXHQgfSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBNYXJrZXQgYXNzZXRcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5MQ1ApIHtcclxuICAgICAgICAgICAgY29uZmlnLnhBeGlzLnBsb3RMaW5lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBheGlzTGluZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgaWQ6IFwicGxvdF9saW5lXCIsXHJcbiAgICAgICAgICAgICAgICBkYXNoU3R5bGU6IFwibG9uZ2Rhc2hcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLkxDUCxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYmxvY2suY2FsbF9saW1pdFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJpbWFyeVRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiA1XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuU1FQKSB7XHJcbiAgICAgICAgLy9cdCBjb25maWcueEF4aXMucGxvdExpbmVzLnB1c2goe1xyXG4gICAgICAgIC8vXHRcdCBjb2xvcjogXCIjQjZCNkI2XCIsXHJcbiAgICAgICAgLy9cdFx0IGlkOiBcInBsb3RfbGluZVwiLFxyXG4gICAgICAgIC8vXHRcdCBkYXNoU3R5bGU6IFwibG9uZ2Rhc2hcIixcclxuICAgICAgICAvL1x0XHQgdmFsdWU6IHRoaXMucHJvcHMuU1FQICogcG93ZXIsXHJcbiAgICAgICAgLy9cdFx0IGxhYmVsOiB7XHJcbiAgICAgICAgLy9cdFx0XHQgdGV4dDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uuc3F1ZWV6ZVwiKSxcclxuICAgICAgICAvL1x0XHRcdCBzdHlsZToge1xyXG4gICAgICAgIC8vXHRcdFx0XHQgY29sb3I6IFwiI0RBREFEQVwiLFxyXG4gICAgICAgIC8vXHRcdFx0XHQgZm9udFdlaWdodDogXCJib2xkXCJcclxuICAgICAgICAvL1x0XHRcdCB9XHJcbiAgICAgICAgLy9cdFx0IH0sXHJcbiAgICAgICAgLy9cdFx0IHdpZHRoOiAyLFxyXG4gICAgICAgIC8vXHRcdCB6SW5kZXg6IDVcclxuICAgICAgICAvL1x0IH0pO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKGZlZWRQcmljZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0bGVtZW50Q29sb3IgPSBiYXNlLmhhcyhcImJpdGFzc2V0XCIpID8gYXNrQ29sb3IgOiBiaWRDb2xvcjtcclxuICAgICAgICAgICAgY29uZmlnLnhBeGlzLnBsb3RMaW5lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBzZXR0bGVtZW50Q29sb3IsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJwbG90X2xpbmVcIixcclxuICAgICAgICAgICAgICAgIGRhc2hTdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZlZWRQcmljZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYmxvY2suZmVlZF9wcmljZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJpbWFyeVRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiA1XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGNhbGxzIGlmIHByZXNlbnRcclxuICAgICAgICAgICAgaWYgKGZsYXRDYWxscyAmJiBmbGF0Q2FsbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuc2VyaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBDYWxsICR7cXVvdGVTeW1ib2x9YCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmbGF0Q2FsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNhbGxDb2xvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBzZXR0bGUgb3JkZXJzXHJcbiAgICAgICAgaWYgKGZlZWRQcmljZSAmJiAoZmxhdFNldHRsZXMgJiYgZmxhdFNldHRsZXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICBjb25maWcuc2VyaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYFNldHRsZSAke3F1b3RlU3ltYm9sfWAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmbGF0U2V0dGxlcyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBzZXR0bGVDb2xvcixcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogc2V0dGxlRmlsbENvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHVzaCBhc2tzIGFuZCBiaWRzXHJcbiAgICAgICAgaWYgKGZsYXRCaWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25maWcuc2VyaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3RlcDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogYEJpZCAke3F1b3RlU3ltYm9sfWAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmbGF0QmlkcyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBiaWRDb2xvcixcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogYmlkRmlsbENvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZsYXRBc2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25maWcuc2VyaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3RlcDogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBgQXNrICR7cXVvdGVTeW1ib2x9YCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZsYXRBc2tzLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFza0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiBhc2tGaWxsQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaXggdGhlIGhlaWdodCBpZiBkZWZpbmVkLCBlbHNlIHVzZSA0MDBweDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgY29uZmlnLmNoYXJ0LmhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5jaGFydC5oZWlnaHQgPSBcIjQwMHB4XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgb25DbGljayBldmVudCBsaXN0ZW5lciBpZiBkZWZpbmVkXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xyXG4gICAgICAgICAgICBjb25maWcuY2hhcnQuZXZlbnRzID0ge1xyXG4gICAgICAgICAgICAgICAgY2xpY2s6IHRoaXMucHJvcHMub25DbGljay5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ub0ZyYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBuby1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFmbGF0Qmlkcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAhZmxhdEFza3MubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWZsYXRDYWxscy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm5vX2RhdGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9UZXh0ID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmlkLXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vVGV4dCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFzay10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxBc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGVTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtmbGF0QmlkcyB8fCBmbGF0QXNrcyB8fCBmbGF0Q2FsbHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEhpZ2hjaGFydCBjb25maWc9e2NvbmZpZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBuby1wYWRkaW5nIG1pZGRsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZS1ib3JkZXJlZFwiIHN0eWxlPXt7bWFyZ2luOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub1RleHQgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQmlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub1RleHQgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzay10b3RhbCBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshZmxhdEJpZHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFmbGF0QXNrcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWZsYXRDYWxscy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uubm9fZGF0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmxhdEJpZHMgfHwgZmxhdEFza3MgfHwgZmxhdENhbGxzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0SGlnaGNoYXJ0IHJlZj1cImRlcHRoQ2hhcnRcIiBjb25maWc9e2NvbmZpZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkRlcHRoSGlnaENoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZsYXRfYmlkczogW10sXHJcbiAgICBmbGF0X2Fza3M6IFtdLFxyXG4gICAgb3JkZXJzOiB7fSxcclxuICAgIG5vVGV4dDogZmFsc2UsXHJcbiAgICBub0ZyYW1lOiB0cnVlXHJcbn07XHJcblxyXG5EZXB0aEhpZ2hDaGFydC5wcm9wVHlwZXMgPSB7XHJcbiAgICBmbGF0X2JpZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZmxhdF9hc2tzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIG9yZGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXB0aEhpZ2hDaGFydDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcclxuaW1wb3J0IE5vdGlmaWVyIGZyb20gXCIuL05vdGlmaWVyXCI7XHJcblxyXG5jbGFzcyBOb3RpZmllckNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQWNjb3VudFN0b3JlXX1cclxuICAgICAgICAgICAgICAgIGluamVjdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmllciAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmllckNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL25vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgWmZBcGkgZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvZm91bmRhdGlvbi1hcGlcIjtcclxuaW1wb3J0IE9wZXJhdGlvbiBmcm9tIFwiLi4vQmxvY2tjaGFpbi9PcGVyYXRpb25cIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQge0NoYWluVHlwZXMgYXMgR3JhcGhDaGFpblR5cGVzfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxubGV0IHtvcGVyYXRpb25zfSA9IEdyYXBoQ2hhaW5UeXBlcztcclxuXHJcbmxldCBvcHMgPSBPYmplY3Qua2V5cyhvcGVyYXRpb25zKTtcclxuXHJcbmNsYXNzIE5vdGlmaWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgJiZcclxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQuc2l6ZSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImhpc3RvcnlcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IGNoID1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKS5maXJzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiaGlzdG9yeVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IG5oID1cclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50LmdldChcImhpc3RvcnlcIikgJiZcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50LmdldChcImhpc3RvcnlcIikuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gbmV4dFByb3BzLmFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiaGlzdG9yeVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5oICYmIGNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHRyaWdnZXIgbm90aWZpY2F0aW9ucyBmb3Igb3JkZXIgZmlsbHNcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBvcHNbbmgub3BbMF1dID09PSBcImZpbGxfb3JkZXJcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICgoIWNoICYmIG5oLmlkKSB8fCBuaC5pZCAhPT0gY2guaWQpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBaZkFwaS5wdWJsaXNoKFwiYWNjb3VudC1ub3RpZnlcIiwgXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2goXCJhY2NvdW50LW5vdGlmeVwiLCBcImNsb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZiAoIW5leHRQcm9wcy5hY2NvdW50IHx8ICF0aGlzLnByb3BzLmFjY291bnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpXHJcbiAgICAgICAgICAgICkgfHwgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuYWNjb3VudCwgdGhpcy5wcm9wcy5hY2NvdW50KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7YWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJ4LCBpbmZvO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpLnNpemVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdHJ4ID0gdGhpcy5wcm9wcy5hY2NvdW50XHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwiaGlzdG9yeVwiKVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgIC50b0pTKCk7XHJcbiAgICAgICAgICAgIGlmICh0cngpIHtcclxuICAgICAgICAgICAgICAgIGluZm8gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3A9e3RyeC5vcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0cngucmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jaz17dHJ4LmJsb2NrX251bX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17YWNjb3VudC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURhdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGZWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdHJ4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbi5TdGF0aWNcclxuICAgICAgICAgICAgICAgIGlkPVwiYWNjb3VudC1ub3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e251bGx9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT1cIlwiXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyRWxlbWVudD1cImRpdlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT57aW5mb308L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9Ob3RpZmljYXRpb24uU3RhdGljPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuTm90aWZpZXIgPSBCaW5kVG9DaGFpblN0YXRlKE5vdGlmaWVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xyXG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuLi9Nb2RhbC9CYXNlTW9kYWxcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgbGV0IG1vZGFsSWQgPSBcIm1vZGFsX2NvbmZpcm1fXCIgKyB0aGlzLnByb3BzLnR5cGU7XHJcbiAgICAgICAgWmZBcGkucHVibGlzaChtb2RhbElkLCBcIm9wZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRm9yY2UodmFsdWUsIGUpIHtcclxuICAgICAgICBsZXQgbW9kYWxJZCA9IFwibW9kYWxfY29uZmlybV9cIiArIHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIFpmQXBpLnB1Ymxpc2gobW9kYWxJZCwgXCJjbG9zZVwiKTtcclxuICAgICAgICBpZiAodmFsdWUpIHRoaXMucHJvcHMub25Gb3JjZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3R5cGUsIGRpZmYsIGhhc09yZGVyc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QmFzZU1vZGFsIGlkPXtcIm1vZGFsX2NvbmZpcm1fXCIgKyB0eXBlfSBvdmVybGF5PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwiaDNcIiBjb250ZW50PVwidHJhbnNhY3Rpb24uY29uZmlybVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IWhhc09yZGVycyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJleGNoYW5nZS5jb25maXJtX25vX29yZGVyc19cIiArIHR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJleGNoYW5nZS5jb25maXJtX1wiICsgdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmY9e3V0aWxzLmZvcm1hdF9udW1iZXIoZGlmZiwgMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIycmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkZvcmNlLmJpbmQodGhpcywgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkZvcmNlLmJpbmQodGhpcywgZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Jhc2VNb2RhbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcclxuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBQcmljZVN0YXRXaXRoTGFiZWwgZnJvbSBcIi4vUHJpY2VTdGF0V2l0aExhYmVsXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgRXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsIGZyb20gXCIuL0V4Y2hhbmdlSGVhZGVyQ29sbGF0ZXJhbFwiO1xyXG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuLi9Nb2RhbC9CYXNlTW9kYWxcIjtcclxuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGNoYW5nZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZvbHVtZVNob3dRdW90ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hhcnRIZWlnaHQ6IHByb3BzLmNoYXJ0SGVpZ2h0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFydEhlaWdodCA9IHRoaXMuc2V0Q2hhcnRIZWlnaHQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKCFuZXh0UHJvcHMubWFya2V0UmVhZHkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfYWRkTWFya2V0KHF1b3RlLCBiYXNlKSB7XHJcbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy5oYXMobWFya2V0SUQpKSB7XHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5hZGRTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMucmVtb3ZlU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVZvbHVtZUJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZvbHVtZVNob3dRdW90ZTogIXRoaXMuc3RhdGUudm9sdW1lU2hvd1F1b3RlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya2V0UGlja2VyKGFzc2V0KSB7XHJcbiAgICAgICAgbGV0IHtzZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgPVxyXG4gICAgICAgICAgICAhIXNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgJiYgc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCA9PSBhc3NldFxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IGFzc2V0O1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Ub2dnbGVNYXJrZXRQaWNrZXIoc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhcnRIZWlnaHQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZUNoYXJ0SGVpZ2h0KHt2YWx1ZTogdGhpcy5zdGF0ZS5jaGFydEhlaWdodH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHF1b3RlQXNzZXQsXHJcbiAgICAgICAgICAgIGJhc2VBc3NldCxcclxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHMsXHJcbiAgICAgICAgICAgIGhhc1ByZWRpY3Rpb24sXHJcbiAgICAgICAgICAgIGZlZWRQcmljZSxcclxuICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCxcclxuICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlLFxyXG4gICAgICAgICAgICBtYXJrZXRSZWFkeSxcclxuICAgICAgICAgICAgbGF0ZXN0UHJpY2UsXHJcbiAgICAgICAgICAgIG1hcmtldFN0YXRzLFxyXG4gICAgICAgICAgICBzaG93RGVwdGhDaGFydCxcclxuICAgICAgICAgICAgYWNjb3VudFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlU3ltYm9sID0gYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICBjb25zdCBxdW90ZVN5bWJvbCA9IHF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG5cclxuICAgICAgICAvLyBGYXZvcml0ZSBzdGFyXHJcbiAgICAgICAgY29uc3QgbWFya2V0SUQgPSBgJHtxdW90ZVN5bWJvbH1fJHtiYXNlU3ltYm9sfWA7XHJcbiAgICAgICAgY29uc3Qgc3RhckNsYXNzID0gc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxyXG4gICAgICAgICAgICA/IFwiZ29sZC1zdGFyXCJcclxuICAgICAgICAgICAgOiBcImdyZXktc3RhclwiO1xyXG5cclxuICAgICAgICAvLyBNYXJrZXQgc3RhdHNcclxuICAgICAgICBjb25zdCBkYXlDaGFuZ2UgPSBtYXJrZXRTdGF0cy5nZXQoXCJjaGFuZ2VcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheUNoYW5nZUNsYXNzID1cclxuICAgICAgICAgICAgcGFyc2VGbG9hdChkYXlDaGFuZ2UpID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdChkYXlDaGFuZ2UpIDwgMFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJuZWdhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcInBvc2l0aXZlXCI7XHJcbiAgICAgICAgY29uc3Qgdm9sdW1lQmFzZSA9IG1hcmtldFN0YXRzLmdldChcInZvbHVtZUJhc2VcIik7XHJcbiAgICAgICAgY29uc3Qgdm9sdW1lUXVvdGUgPSBtYXJrZXRTdGF0cy5nZXQoXCJ2b2x1bWVRdW90ZVwiKTtcclxuICAgICAgICBjb25zdCBkYXlDaGFuZ2VXaXRoU2lnbiA9IGRheUNoYW5nZSA+IDAgPyBcIitcIiArIGRheUNoYW5nZSA6IGRheUNoYW5nZTtcclxuXHJcbiAgICAgICAgY29uc3Qgdm9sdW1lMjRoID0gdGhpcy5zdGF0ZS52b2x1bWVTaG93UXVvdGUgPyB2b2x1bWVRdW90ZSA6IHZvbHVtZUJhc2U7XHJcbiAgICAgICAgY29uc3Qgdm9sdW1lMjRoQXNzZXQgPSB0aGlzLnN0YXRlLnZvbHVtZVNob3dRdW90ZVxyXG4gICAgICAgICAgICA/IHF1b3RlQXNzZXRcclxuICAgICAgICAgICAgOiBiYXNlQXNzZXQ7XHJcblxyXG4gICAgICAgIGxldCBzaG93Q29sbGF0ZXJhbFJhdGlvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHF1b3RlSWQgPSBxdW90ZUFzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VJZCA9IGJhc2VBc3NldC5nZXQoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9va0ZvckJpdEFzc2V0ID1cclxuICAgICAgICAgICAgcXVvdGVJZCA9PT0gXCIxLjMuMFwiID8gYmFzZUlkIDogYmFzZUlkID09PSBcIjEuMy4wXCIgPyBxdW90ZUlkIDogbnVsbDtcclxuICAgICAgICBjb25zdCBwb3NzaWJsZUJpdEFzc2V0ID0gbG9va0ZvckJpdEFzc2V0XHJcbiAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRBc3NldChsb29rRm9yQml0QXNzZXQpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBjb25zdCBpc0JpdEFzc2V0ID0gcG9zc2libGVCaXRBc3NldFxyXG4gICAgICAgICAgICA/ICEhcG9zc2libGVCaXRBc3NldC5nZXQoXCJiaXRhc3NldFwiKVxyXG4gICAgICAgICAgICA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb2xsT3JkZXJPYmplY3QgPSBcIlwiO1xyXG4gICAgICAgIGxldCBzZXR0bGVQcmljZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc0JpdEFzc2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChhY2NvdW50LnRvSlMgJiYgYWNjb3VudC5oYXMoXCJjYWxsX29yZGVyc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbF9vcmRlcnMgPSBhY2NvdW50LmdldChcImNhbGxfb3JkZXJzXCIpLnRvSlMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxfb3JkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxJRCA9IGNhbGxfb3JkZXJzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBDaGFpblN0b3JlLmdldE9iamVjdChjYWxsSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWJ0QXNzZXQgPSBwb3NpdGlvbi5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbF9wcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVidEFzc2V0ID09PSBsb29rRm9yQml0QXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbE9yZGVyT2JqZWN0ID0gY2FsbElEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29sbGF0ZXJhbFJhdGlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBTZXR0bG1lbnQgT2Zmc2V0ICovXHJcbiAgICAgICAgICAgIGxldCBzZXR0bGVBc3NldCA9XHJcbiAgICAgICAgICAgICAgICBiYXNlQXNzZXQuZ2V0KFwiaWRcIikgPT0gXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBxdW90ZUFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgOiBxdW90ZUFzc2V0LmdldChcImlkXCIpID09IFwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGJhc2VBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGxlQXNzZXQgJiYgZmVlZFByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0X3BlcmNlbnQgPSBzZXR0bGVBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXCJiaXRhc3NldFwiLCBcIm9wdGlvbnNcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvSlMoKS5mb3JjZV9zZXR0bGVtZW50X29mZnNldF9wZXJjZW50O1xyXG4gICAgICAgICAgICAgICAgc2V0dGxlUHJpY2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldC5nZXQoXCJpZFwiKSA9PSBcIjEuMy4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmZWVkUHJpY2UudG9SZWFsKCkgLyAoMSArIG9mZnNldF9wZXJjZW50IC8gMTAwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmVlZFByaWNlLnRvUmVhbCgpICogKDEgKyBvZmZzZXRfcGVyY2VudCAvIDEwMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRvciA9IHJlcXVpcmUoXCJjb3VudGVycGFydFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGlzUXVvdGVTZWxlY3RlZCA9XHJcbiAgICAgICAgICAgICEhdGhpcy5zdGF0ZS5zZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCA9PSBxdW90ZVN5bWJvbDtcclxuICAgICAgICBsZXQgaXNCYXNlU2VsZWN0ZWQgPVxyXG4gICAgICAgICAgICAhIXRoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgPT0gYmFzZVN5bWJvbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBuby1wYWRkaW5nIG92ZXJmbG93LXZpc2libGUgdG9wLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG92ZXJmbG93LXZpc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhhc1ByZWRpY3Rpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5tYXJrZXRQaWNrZXIuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNRdW90ZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjMjE5NmYzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGVTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmc6IFwiMCA1cHhcIn19Pi88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm1hcmtldFBpY2tlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQmFzZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjMjE5NmYzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YmFzZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1hcmtldC1zeW1ib2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtxdW90ZVN5bWJvbH0gOiAke2Jhc2VTeW1ib2x9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCI1cHggMCAwIDVweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnRyYWRpbmdfcGFpclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5zd2l0Y2hNYXJrZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7YmFzZVN5bWJvbH1fJHtxdW90ZVN5bWJvbH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guc3dpdGNoX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2h1ZmZsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2h1ZmZsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnNodWZmbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkTWFya2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guZmF2b3VyaXRlX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIubWFya2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB3cmFwIG1hcmtldC1zdGF0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXJrZXQtc3RhdHMgc3RhdHMgdG9wLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhdGVzdFByaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTdGF0V2l0aExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDb2xvckNoYW5nZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtsYXRlc3RQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0PXttYXJrZXRJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5sYXRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1vcmRlci0xIHN0cmVzc2VkLXN0YXQgZGFpbHlfY2hhbmdlIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUNoYW5nZUNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0UmVhZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXlDaGFuZ2VXaXRoU2lnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gJTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJhY2NvdW50LmhvdXJfMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2b2x1bWVCYXNlID49IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVN0YXRXaXRoTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbG9yQ2hhbmdlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VWb2x1bWVCYXNlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ZvbHVtZTI0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGUtb3JkZXItMiBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17dm9sdW1lMjRoQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQ9e21hcmtldElEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnZvbHVtZV8yNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoYXNQcmVkaWN0aW9uICYmIGZlZWRQcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlU3RhdFdpdGhMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2U9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sVGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLmZlZWRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGUtb3JkZXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17ZmVlZFByaWNlLnRvUmVhbCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQ9e21hcmtldElEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLmZlZWRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaGFzUHJlZGljdGlvbiAmJiBmZWVkUHJpY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVN0YXRXaXRoTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbG9yQ2hhbmdlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbFRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5zZXR0bGVfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGUtb3JkZXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17c2V0dGxlUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGVBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2VBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0NvbGxhdGVyYWxSYXRpbyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlSGVhZGVyQ29sbGF0ZXJhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0PXtjb2xsT3JkZXJPYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb3dlc3RDYWxsUHJpY2UgJiYgc2hvd0NhbGxMaW1pdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlU3RhdFdpdGhMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbFRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5jYWxsX2xpbWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeT17bWFya2V0UmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLW9yZGVyLTUgaXMtY2FsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17bG93ZXN0Q2FsbFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQ9e21hcmtldElEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmNhbGxfbGltaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlZFByaWNlICYmIHNob3dDYWxsTGltaXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVN0YXRXaXRoTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xUaXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAubWFyZ2luX3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeT17bWFya2V0UmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLW9yZGVyLTYgaXMtY2FsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17ZmVlZFByaWNlLmdldFNxdWVlemVQcmljZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGVBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2VBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2Uuc3F1ZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1hcmtldC1zdGF0cyBzdGF0cyB0b3Atc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RyZXNzZWQtc3RhdCBpbnB1dCBjbGlja2FibGUgaGlkZS1vcmRlci0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjE2cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2goXCJjaGFydF9vcHRpb25zXCIsIFwib3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYXJ0X21vZGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QmFzZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaGFydF9vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyPVwiZXhjaGFuZ2UuY2hhcnRfbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5vTG9nb1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhcnRfdHlwZVwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEZXB0aENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImRlcHRoX2NoYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicHJpY2VfY2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2hvd0RlcHRoQ2hhcnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaWNlX2NoYXJ0XCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFzaG93RGVwdGhDaGFydCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFya2V0X2RlcHRoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlQ2hhcnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFya2V0X2RlcHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2Uub3JkZXJfZGVwdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZV9jaGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnByaWNlX2hpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9jay1saXN0IG5vLWJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYXJ0X2hlaWdodFwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENoYXJ0SGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaGFydEhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SGVpZ2h0OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gbm8tbWFyZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZXRDaGFydEhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQmFzZU1vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaWNlU3RhdFdpdGhMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNoYW5nZTogbnVsbCxcclxuICAgICAgICAgICAgY3VyTWFya2V0OiBudWxsLFxyXG4gICAgICAgICAgICBtYXJrZXRDaGFuZ2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy52b2x1bWUyICYmIG5leHRQcm9wcy52b2x1bWUyICE9PSB0aGlzLnByb3BzLnZvbHVtZTIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmljZSAhPT0gdGhpcy5wcm9wcy5wcmljZSB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMucmVhZHkgIT09IHRoaXMucHJvcHMucmVhZHlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICBjaGFuZ2U6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQge21hcmtldH0gPSBuZXh0UHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBjaGVja01hcmtldENoYW5nZSA9IHRoaXMuc3RhdGUuY3VyTWFya2V0ICE9PSBtYXJrZXQ7XHJcbiAgICAgICAgbGV0IG1hcmtldENoYW5nZSA9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VyTWFya2V0ID09IG51bGwgPyBmYWxzZSA6IGNoZWNrTWFya2V0Q2hhbmdlO1xyXG5cclxuICAgICAgICBzdGF0ZVtcIm1hcmtldENoYW5nZVwiXSA9IG1hcmtldENoYW5nZTtcclxuICAgICAgICBzdGF0ZVtcImN1ck1hcmtldFwiXSA9IG1hcmtldDtcclxuICAgICAgICBzdGF0ZVtcInByZXZBc3NldFwiXSA9IHRoaXMuc3RhdGUubWFya2V0QXNzZXQ7XHJcblxyXG4gICAgICAgIGlmIChuZXh0UHJvcHMucmVhZHkgJiYgdGhpcy5wcm9wcy5yZWFkeSkge1xyXG4gICAgICAgICAgICBzdGF0ZVtcImNoYW5nZVwiXSA9XHJcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KG5leHRQcm9wcy5wcmljZSkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMucHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgIFJlYWN0VG9vbHRpcC5yZWJ1aWxkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgcmVhZHksXHJcbiAgICAgICAgICAgIHZvbHVtZSxcclxuICAgICAgICAgICAgdG9vbFRpcCxcclxuICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2VcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge2NoYW5nZSwgbWFya2V0Q2hhbmdlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGNoYW5nZUNsYXNzZXMgPSBudWxsO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIW1hcmtldENoYW5nZSAmJlxyXG4gICAgICAgICAgICBjaGFuZ2UgJiZcclxuICAgICAgICAgICAgY2hhbmdlICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIGlnbm9yZUNvbG9yQ2hhbmdlICE9PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUNsYXNzZXMgPSBjaGFuZ2UgPiAwID8gXCJwdWxzYXRlIGdyZWVuXCIgOiBcInB1bHNhdGUgcmVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSAhdm9sdW1lXHJcbiAgICAgICAgICAgID8gdXRpbHMucHJpY2VfdGV4dChwcmljZSwgcXVvdGUsIGJhc2UpXHJcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X3ZvbHVtZShwcmljZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJlc3NlZC1zdGF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10aXA9e3Rvb2xUaXB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlIHN0YXQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXJlYWR5ID8gMCA6IHZhbHVlfSZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzeW1ib2wtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1hcmdpblBvc2l0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgZGVidEFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb2xsYXRlcmFsQXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgMSAvXHJcbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmljZShcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVidEFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbGxhdGVyYWxBc3NldCxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVidEFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVidEFzc2V0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDb2xsYXRlcmFsUmF0aW8oKSB7XHJcbiAgICAgICAgY29uc3QgY28gPSB0aGlzLnByb3BzLm9iamVjdC50b0pTKCk7XHJcbiAgICAgICAgY29uc3QgYyA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoXHJcbiAgICAgICAgICAgIGNvLmNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29sbGF0ZXJhbEFzc2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChjby5kZWJ0LCB0aGlzLnByb3BzLmRlYnRBc3NldCk7XHJcbiAgICAgICAgcmV0dXJuIGMgLyAoZCAvIHRoaXMuX2dldEZlZWRQcmljZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TVIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWJ0QXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcclxuICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXHJcbiAgICAgICAgICAgIF0pIC8gMTAwMFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFN0YXR1c0NsYXNzKCkge1xyXG4gICAgICAgIGxldCBjciA9IHRoaXMuX2dldENvbGxhdGVyYWxSYXRpbygpO1xyXG4gICAgICAgIGNvbnN0IG1yID0gdGhpcy5fZ2V0TVIoKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTmFOKGNyKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKGNyIDwgbXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZGFuZ2VyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjciA8IG1yICsgMC41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIndhcm5pbmdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldENSVGlwKCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gdGhpcy5fZ2V0U3RhdHVzQ2xhc3MoKTtcclxuICAgICAgICBjb25zdCBtciA9IHRoaXMuX2dldE1SKCk7XHJcbiAgICAgICAgaWYgKCFzdGF0dXNDbGFzcyB8fCBzdGF0dXNDbGFzcyA9PT0gXCJcIikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmIChzdGF0dXNDbGFzcyA9PT0gXCJkYW5nZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5jcl9kYW5nZXJcIiwge21yfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDbGFzcyA9PT0gXCJ3YXJuaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuY3Jfd2FybmluZ1wiLCB7bXJ9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7b2JqZWN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY28gPSBvYmplY3QudG9KUygpO1xyXG4gICAgICAgIGNvbnN0IGNyID0gdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKCk7XHJcbiAgICAgICAgY29uc3QgZCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoY28uZGVidCwgdGhpcy5wcm9wcy5kZWJ0QXNzZXQpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGF0dXNDbGFzcyA9IHRoaXMuX2dldFN0YXR1c0NsYXNzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJzdHJlc3NlZC1zdGF0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10aXA9e3RoaXMuX2dldENSVGlwKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y25hbWVzKFwidmFsdWUgc3RhdC1wcmltYXJ5XCIsIHN0YXR1c0NsYXNzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKGNyLCAyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5jb2xsYXRlcmFsX3JhdGlvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuTWFyZ2luUG9zaXRpb24gPSBCaW5kVG9DaGFpblN0YXRlKE1hcmdpblBvc2l0aW9uKTtcclxuXHJcbmNsYXNzIEV4Y2hhbmdlSGVhZGVyQ29sbGF0ZXJhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIG9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge29iamVjdCwgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgZGVidEFzc2V0ID0gb2JqZWN0LmdldEluKFtcImNhbGxfcHJpY2VcIiwgXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdKTtcclxuICAgICAgICBsZXQgY29sbGF0ZXJhbEFzc2V0ID0gb2JqZWN0LmdldEluKFtcImNhbGxfcHJpY2VcIiwgXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWFyZ2luUG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGRlYnRBc3NldD17ZGVidEFzc2V0fVxyXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbEFzc2V0PXtjb2xsYXRlcmFsQXNzZXR9XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5FeGNoYW5nZUhlYWRlckNvbGxhdGVyYWwgPSBCaW5kVG9DaGFpblN0YXRlKEV4Y2hhbmdlSGVhZGVyQ29sbGF0ZXJhbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZUhlYWRlckNvbGxhdGVyYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiAgV3JhcHBlciBjb21wb25lbnQgZm9yIGNoYXRicm8gaWZyYW1lXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBDaGF0QnJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgZnJhbWVIZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjMwJVwiO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudExvY2FsZSA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXCJsb2NhbGVcIik7XHJcblxyXG4gICAgICAgIGxldCBjaGF0VXJsID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRMb2NhbGUpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNoYXRVcmwgPSBgaHR0cHM6Ly9jaGF0LnJ1ZGV4Lm9yZy8ke2N1cnJlbnRMb2NhbGV9L2A7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBmcmFtZUhlaWdodCwgd2lkdGg6IFwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y2hhdFVybH1cclxuICAgICAgICAgICAgICAgIHNhbmRib3g9XCJhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1mb3JtcyBhbGxvdy1zY3JpcHRzIGFsbG93LXBvcHVwc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IGZyYW1lSGVpZ2h0LCB3aWR0aDogXCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjaGF0VXJsfVxyXG4gICAgICAgICAgICAgICAgc2FuZGJveD1cImFsbG93LXNhbWUtb3JpZ2luIGFsbG93LWZvcm1zIGFsbG93LXNjcmlwdHMgYWxsb3ctcG9wdXBzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5DaGF0QnJvLnByb3BUeXBlcyA9IHtcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJybztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlGQTtBQVJBO0FBeUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXpHQTtBQWlIQTs7OztBQXhIQTtBQUNBO0FBMEhBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7OztBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBSEE7QUFNQTs7OztBQW5LQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBNEpBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFhQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUEwREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBM0NBO0FBQ0E7QUF4REE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUF2QkE7QUF3QkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7OztBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBZkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQVFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQ0E7QUE2QkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQUNBO0FBU0E7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFrREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdJQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQTdFQTtBQUNBO0FBb0ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBL0VBO0FBQ0E7QUFzRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUEvQkE7QUFDQTtBQWtDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFRQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBbEJBO0FBTEE7QUEyQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFqREE7QUFEQTtBQXVEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBa0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFYQTtBQWNBO0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQTNCQTtBQWhGQTtBQXhGQTtBQU5BO0FBbU5BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQU1BO0FBQ0E7QUFDQTtBQWxCQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBYkE7QUFnQkE7QUF4QkE7QUE4QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBekJBO0FBMURBO0FBTkE7QUE0SUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBWEE7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFUQTtBQXBZQTtBQXhCQTtBQTRhQTs7OztBQWg3REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQTA2REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCQTtBQTJCQTs7OztBQW5EQTtBQUNBO0FBcURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBU0E7QUFTQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFsQkE7QUF3QkE7Ozs7QUE3RUE7QUFDQTtBQStFQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF0QkE7QUF5QkE7Ozs7QUE1Q0E7QUFDQTtBQThDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBU0E7QUFTQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFiQTtBQW1CQTs7OztBQW5FQTtBQUNBO0FBcUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBaEJBO0FBbUJBOzs7O0FBMUNBO0FBQ0E7QUE0Q0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXFFQTtBQUFBO0FBQ0E7QUF0RUE7QUF3RUE7QUFBQTtBQUNBO0FBekVBO0FBc0tBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUExS0E7QUE0S0E7QUFDQTtBQUdBO0FBQ0E7QUEvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBZUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBY0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFlQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWdCQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUFBO0FBTEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQURBO0FBeEJBO0FBREE7QUFDQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUFBO0FBTEE7QUFyQkE7QUFEQTtBQUNBO0FBc0NBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFYQTtBQWFBO0FBYkE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFqQkE7QUE2QkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFQQTtBQUZBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQVZBO0FBdERBO0FBc0VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUpBO0FBVEE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFEQTtBQXRHQTtBQU5BO0FBbUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVhBO0FBYUE7QUFiQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQWpCQTtBQTZCQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQVBBO0FBRkE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUFBO0FBVkE7QUF0REE7QUFzRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBSkE7QUFUQTtBQXVCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkQTtBQURBO0FBcEdBO0FBTkE7QUF6SUE7QUEyUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVhBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBREE7QUFUQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBVkE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBSUE7QUFJQTtBQVRBO0FBTkE7QUFGQTtBQWhDQTtBQURBO0FBSkE7QUFUQTtBQTRFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBVEE7QUF0SEE7QUFEQTtBQTRJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUZBO0FBYkE7QUE3SUE7QUEwS0E7QUFDQTs7OztBQXY0QkE7QUFDQTtBQXk0QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVkE7QUFpQkE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBVkE7QUF1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFaQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQXZCQTtBQURBO0FBREE7QUFEQTtBQW9DQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFEQTtBQUxBO0FBM0RBO0FBREE7QUE2RUE7Ozs7QUF2T0E7QUFDQTtBQXlPQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTs7OztBQXZDQTtBQUNBO0FBREE7QUFFQTtBQU1BO0FBQ0E7QUFSQTtBQUNBO0FBQ0E7QUF1Q0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7QUFDQTtBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFtQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBRUE7QUFRQTtBQU1BO0FBSUE7QUFDQTtBQXRFQTtBQUFBO0FBQUE7QUFDQTtBQTRFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQVBBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFGQTtBQWZBO0FBbUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFEQTtBQUNBO0FBckhBO0FBQUE7QUFBQTtBQUNBO0FBZ0lBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQVBBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFGQTtBQWZBO0FBbUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBblFBO0FBQUE7QUFBQTtBQUNBO0FBc1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUtBO0FBUEE7QUFWQTtBQURBO0FBd0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUFBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFYQTtBQURBO0FBREE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBWEE7QUFEQTtBQURBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVhBO0FBREE7QUFEQTtBQTlHQTtBQXVJQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFiQTtBQTBCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWJBO0FBcUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBYkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFkQTtBQURBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQU1BO0FBaEJBO0FBa0JBO0FBbEJBO0FBUEE7QUF2QkE7QUFxREE7QUExSEE7QUE0SEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUhBO0FBS0E7QUFOQTtBQVdBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFqQkE7QUFOQTtBQUpBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQU5BO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBakJBO0FBcUJBO0FBQ0E7QUFEQTtBQXJCQTtBQVJBO0FBVEE7QUFnREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBVUE7QUFWQTtBQVlBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFkQTtBQWZBO0FBSkE7QUFuRkE7QUFEQTtBQWlJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTEE7QUFjQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU5BO0FBZUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQTdLQTtBQURBO0FBbklBO0FBeElBO0FBMmNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBVkE7QUEzZEE7QUF5ZUE7Ozs7QUE1MEJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQVlBO0FBREE7QUFDQTtBQUNBO0FBazBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3AyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUxBO0FBZUE7QUFmQTtBQURBO0FBSEE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFiQTtBQXRCQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBdkNBO0FBNkNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVJBO0FBSEE7QUFtQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVBBO0FBREE7QUFKQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFQQTtBQURBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUtBO0FBWkE7QUFEQTtBQURBO0FBUEE7QUFEQTtBQTlCQTtBQTJEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQW5LQTtBQXlLQTs7OztBQTFiQTtBQUNBO0FBNGJBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25lQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBakNBO0FBQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQURBO0FBWUE7Ozs7QUFsSUE7QUFDQTtBQURBOzs7Ozs7O0FDUkE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUE1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7OztBQUdBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTs7O0FBR0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFhQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBREE7QUF4QkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSUE7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBMUJBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFMQTtBQURBO0FBdEdBO0FBQ0E7QUFrSEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBYkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQVFBO0FBMUJBO0FBK0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQVhBO0FBb0JBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQTVCQTtBQURBO0FBbUNBO0FBQ0E7Ozs7QUE1YkE7QUFDQTtBQThiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQVJBO0FBV0E7Ozs7QUFkQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFNQTtBQVFBO0FBUUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFOQTtBQVdBOzs7O0FBckdBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQXFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUEE7QUFYQTtBQUZBO0FBOEJBOzs7O0FBaERBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQVJBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUEzQkE7QUFnREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVhBO0FBdkJBO0FBdkRBO0FBUkE7QUEyR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBZEE7QUFxQkE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBY0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBdEdBO0FBc0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUEE7QUFEQTtBQXZIQTtBQUpBO0FBNUdBO0FBc1BBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXpCQTtBQURBO0FBREE7QUFKQTtBQXdDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBZEE7QUFEQTtBQUpBO0FBOUNBO0FBdlBBO0FBb1VBOzs7O0FBcGVBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBbkJBO0FBeUJBOzs7O0FBbkdBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXFCQTs7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFYQTtBQWdCQTs7OztBQTNHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQTJHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BOzs7O0FBbkJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUE1QkE7QUFDQTtBQThCQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=