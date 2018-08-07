(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 2363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRow", function() { return OrderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpenOrders", function() { return MyOpenOrders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(744);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2364);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2385);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2400);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2386);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(730);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1217);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(802);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(416);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(582);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2401);
/* harmony import */ var _Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2402);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1334);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_19__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var leftAlign = { textAlign: "left" };


var TableHeader = function (_React$Component) {
    _inherits(TableHeader, _React$Component);

    function TableHeader() {
        _classCallCheck(this, TableHeader);

        return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
    }

    _createClass(TableHeader, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol,
                dashboard = _props.dashboard,
                isMyAccount = _props.isMyAccount;


            return !dashboard ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: this.props.leftAlign ? "left" : "" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            className: "header-sub-title",
                            content: "exchange.price"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: this.props.leftAlign ? { textAlign: "left" } : null
                        },
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: quoteSymbol })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: this.props.leftAlign ? { textAlign: "left" } : null
                        },
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: baseSymbol })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: this.props.leftAlign ? "left" : "" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            className: "header-sub-title",
                            content: "transaction.expiration"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { width: "6%" } })
                )
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "transaction.order_id" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign, colSpan: "4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.description" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.price" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.price_market" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.value" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.trade" })
                    ),
                    isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { id: "cancelAllOrders", style: { cursor: "pointer" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.cancel" })
                    ) : null
                )
            );
        }
    }]);

    return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TableHeader.defaultProps = {
    quoteSymbol: null,
    baseSymbol: null
};

var OrderRow = function (_React$Component2) {
    _inherits(OrderRow, _React$Component2);

    function OrderRow() {
        _classCallCheck(this, OrderRow);

        return _possibleConstructorReturn(this, (OrderRow.__proto__ || Object.getPrototypeOf(OrderRow)).apply(this, arguments));
    }

    _createClass(OrderRow, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.order.for_sale !== this.props.order.for_sale || nextProps.order.id !== this.props.order.id || nextProps.quote !== this.props.quote || nextProps.base !== this.props.base || nextProps.order.market_base !== this.props.order.market_base;
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                base = _props2.base,
                quote = _props2.quote,
                order = _props2.order,
                showSymbols = _props2.showSymbols,
                dashboard = _props2.dashboard,
                isMyAccount = _props2.isMyAccount,
                settings = _props2.settings;

            var isBid = order.isBid();
            var isCall = order.isCall();
            var tdClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var priceSymbol = showSymbols ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                " " + base.get("symbol") + "/" + quote.get("symbol")
            ) : null;
            var valueSymbol = showSymbols ? " " + base.get("symbol") : null;
            var amountSymbol = showSymbols ? " " + quote.get("symbol") : null;
            var preferredUnit = settings ? settings.get("unit") : "1.3.0";
            var quoteColor = !isBid ? "value negative" : "value positive";
            var baseColor = isBid ? "value negative" : "value positive";

            return !dashboard ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: order.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: tdClass, style: { paddingLeft: 10 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        price: order.getPrice(),
                        base: base,
                        quote: quote
                    }),
                    priceSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[!isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision")),
                    " ",
                    amountSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[!isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision")),
                    " ",
                    valueSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        style: { width: "25%", textAlign: "right" },
                        className: "tooltip",
                        "data-tip": order.expiration.toLocaleString()
                    },
                    isCall ? null : counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.localize(new Date(order.expiration), {
                        type: "date",
                        format: "short_custom"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "text-center", style: { width: "6%" } },
                    isCall ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            style: { marginRight: 0 },
                            className: "order-cancel",
                            onClick: this.props.onCancel
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
                            name: "cross-circle",
                            title: "icons.cross_circle.cancel_order",
                            className: "icon-14px"
                        })
                    )
                )
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: order.id, className: "clickable" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: leftAlign },
                    "#",
                    order.id.substring(4)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { colSpan: "4", style: leftAlign, onClick: this.props.onFlip },
                    isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                        content: "exchange.buy_description",
                        baseAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"), false),
                        quoteAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"), false),
                        baseName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: quoteColor,
                            name: quote.get("symbol")
                        }),
                        quoteName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: baseColor,
                            name: base.get("symbol")
                        })
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                        content: "exchange.sell_description",
                        baseAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"), false),
                        quoteAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"), false),
                        baseName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: quoteColor,
                            name: quote.get("symbol")
                        }),
                        quoteName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: baseColor,
                            name: base.get("symbol")
                        })
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: leftAlign, onClick: this.props.onFlip },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_18__["default"], {
                        base_amount: order.sellPrice().base.amount,
                        base_asset: order.sellPrice().base.asset_id,
                        quote_amount: order.sellPrice().quote.amount,
                        quote_asset: order.sellPrice().quote.asset_id,
                        force_direction: base.get("symbol"),
                        hide_symbols: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: leftAlign, onClick: this.props.onFlip },
                    isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_17__["MarketPrice"], {
                        base: base.get("id"),
                        quote: quote.get("id"),
                        force_direction: base.get("symbol"),
                        hide_symbols: true,
                        hide_asset: true
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_17__["MarketPrice"], {
                        base: base.get("id"),
                        quote: quote.get("id"),
                        force_direction: base.get("symbol"),
                        hide_symbols: true,
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" }, onClick: this.props.onFlip },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_16__["EquivalentValueComponent"], {
                        hide_asset: true,
                        amount: order.amountForSale().getAmount(),
                        fromAsset: order.amountForSale().asset_id,
                        noDecimals: true,
                        toAsset: preferredUnit
                    }),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: preferredUnit })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                        {
                            to: "/market/" + quote.get("symbol") + "_" + base.get("symbol")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
                            name: "trade",
                            title: "icons.trade.trade",
                            className: "icon-14px"
                        })
                    )
                ),
                isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "text-center", style: { padding: "2px 5px" } },
                    isCall ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: { marginRight: 0 },
                            className: "order-cancel"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            className: "orderCancel",
                            onChange: this.props.onCheckCancel
                        })
                    )
                ) : null
            );
        }
    }]);

    return OrderRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

OrderRow.defaultProps = {
    showSymbols: false
};

var MyOpenOrders = function (_React$Component3) {
    _inherits(MyOpenOrders, _React$Component3);

    function MyOpenOrders(props) {
        _classCallCheck(this, MyOpenOrders);

        var _this3 = _possibleConstructorReturn(this, (MyOpenOrders.__proto__ || Object.getPrototypeOf(MyOpenOrders)).call(this));

        _this3.state = {
            activeTab: props.activeTab
        };
        _this3._getOrders = _this3._getOrders.bind(_this3);
        return _this3;
    }

    _createClass(MyOpenOrders, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var contentContainer = this.refs.container;
            if (contentContainer) perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.initialize(contentContainer);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var contentContainer = this.refs.container;
            if (contentContainer) perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.update(contentContainer);
        }
    }, {
        key: "_getOrders",
        value: function _getOrders() {
            var _assets;

            var _props3 = this.props,
                currentAccount = _props3.currentAccount,
                base = _props3.base,
                quote = _props3.quote,
                feedPrice = _props3.feedPrice;

            var orders = currentAccount.get("orders"),
                call_orders = currentAccount.get("call_orders");
            var baseID = base.get("id"),
                quoteID = quote.get("id");
            var assets = (_assets = {}, _defineProperty(_assets, base.get("id"), { precision: base.get("precision") }), _defineProperty(_assets, quote.get("id"), { precision: quote.get("precision") }), _assets);
            var limitOrders = orders.toArray().map(function (order) {
                var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getObject(order);
                if (!o) return null;
                var sellBase = o.getIn(["sell_price", "base", "asset_id"]),
                    sellQuote = o.getIn(["sell_price", "quote", "asset_id"]);
                if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                    return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["LimitOrder"](o.toJS(), assets, quote.get("id"));
                }
            }).filter(function (a) {
                return !!a;
            });

            var callOrders = call_orders.toArray().map(function (order) {
                try {
                    var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getObject(order);
                    if (!o) return null;
                    var sellBase = o.getIn(["call_price", "base", "asset_id"]),
                        sellQuote = o.getIn(["call_price", "quote", "asset_id"]);
                    if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                        return feedPrice ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["CallOrder"](o.toJS(), assets, quote.get("id"), feedPrice) : null;
                    }
                } catch (e) {
                    return null;
                }
            }).filter(function (a) {
                return !!a;
            }).filter(function (a) {
                try {
                    return a.isMarginCalled();
                } catch (err) {
                    return false;
                }
            });
            return limitOrders.concat(callOrders);
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                ordersTab: tab
            });
            this.setState({
                activeTab: tab
            });

            // Ensure that focus goes back to top of scrollable container when tab is changed
            var contentContainer = this.refs.container;
            contentContainer.scrollTop = 0;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.update(contentContainer);

            setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_19___default.a.rebuild, 1000);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props4 = this.props,
                base = _props4.base,
                quote = _props4.quote,
                quoteSymbol = _props4.quoteSymbol,
                baseSymbol = _props4.baseSymbol,
                settleOrders = _props4.settleOrders;
            var activeTab = this.state.activeTab;


            if (!base || !quote) return null;

            var contentContainer = void 0;

            // Is asset a BitAsset with Settlements
            var baseIsBitAsset = base.get("bitasset_data_id") && settleOrders.size > 0 ? true : false;
            var quoteIsBitAsset = quote.get("bitasset_data_id") && settleOrders.size > 0 ? true : false;

            // Default Tab
            if (!activeTab || !baseIsBitAsset && !quoteIsBitAsset) {
                activeTab = "my_orders";
            }

            {
                /* Users Open Orders Tab (default) */
            }
            if (activeTab == "my_orders") {
                var orders = this._getOrders();
                var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "center" }, colSpan: "5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.no_orders" })
                    )
                );

                var bids = orders.filter(function (a) {
                    return a.isBid();
                }).sort(function (a, b) {
                    return b.getPrice() - a.getPrice();
                }).map(function (order) {
                    var price = order.getPrice();
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderRow, {
                        price: price,
                        key: order.id,
                        order: order,
                        base: base,
                        quote: quote,
                        onCancel: _this4.props.onCancel.bind(_this4, order.id)
                    });
                });

                var asks = orders.filter(function (a) {
                    return !a.isBid();
                }).sort(function (a, b) {
                    return a.getPrice() - b.getPrice();
                }).map(function (order) {
                    var price = order.getPrice();
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderRow, {
                        price: price,
                        key: order.id,
                        order: order,
                        base: base,
                        quote: quote,
                        onCancel: _this4.props.onCancel.bind(_this4, order.id)
                    });
                });

                var rows = [];

                if (asks.length) {
                    rows = rows.concat(asks);
                }

                if (bids.length) {
                    rows = rows.concat(bids);
                }

                rows.sort(function (a, b) {
                    return a.props.price - b.props.price;
                });

                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { component: "tbody", transitionName: "newrow" },
                    rows.length ? rows : emptyRow
                );
            }

            {
                /* Open Settle Orders */
            }

            if (activeTab && activeTab == "open_settlement") {
                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    key: "settle_orders",
                    orders: settleOrders,
                    base: base,
                    quote: quote,
                    baseSymbol: baseSymbol,
                    quoteSymbol: quoteSymbol
                });
            }

            var hc = "mymarkets-header clickable";
            var myOrdersClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()(hc, { inactive: activeTab !== "my_orders" });
            var openSettlementClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()(hc, {
                inactive: activeTab !== "open_settlement"
            });
            var myOrdersWidth = baseIsBitAsset || quoteIsBitAsset ? "50%" : "100%";
            var openSettlementWidth = baseIsBitAsset || quoteIsBitAsset ? "inherit" : "none";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    style: { marginBottom: "15px" },
                    key: "open_orders",
                    className: this.props.className
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "exchange-bordered small-12",
                        style: { height: "auto", minHeight: 266 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: { width: myOrdersWidth },
                                className: myOrdersClass,
                                onClick: this._changeTab.bind(this, "my_orders")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.my_orders" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: { display: openSettlementWidth },
                                className: openSettlementClass,
                                onClick: this._changeTab.bind(this, "open_settlement")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.settle_orders" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header market-right-padding-only" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            activeTab == "my_orders" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeader, {
                                rightAlign: true,
                                type: "sell",
                                baseSymbol: baseSymbol,
                                quoteSymbol: quoteSymbol
                            }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                dataPlace: "top",
                                                name: baseSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
                            ref: "container",
                            style: { overflow: "hidden", maxHeight: 200 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            contentContainer
                        )
                    )
                )
            );
        }
    }]);

    return MyOpenOrders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MyOpenOrders.defaultProps = {
    base: {},
    quote: {},
    orders: {},
    quoteSymbol: "",
    baseSymbol: ""
};

MyOpenOrders.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quoteSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    baseSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};



/***/ }),

/***/ 2385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1217);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1382);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2386);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TableHeader = function (_React$Component) {
    _inherits(TableHeader, _React$Component);

    function TableHeader() {
        _classCallCheck(this, TableHeader);

        return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
    }

    _createClass(TableHeader, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: baseSymbol }),
                            "/",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                name: quoteSymbol
                            }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.amount" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        quoteSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: quoteSymbol }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transaction.settlement_date" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                style: { visibility: "hidden" },
                                className: "header-sub-title"
                            },
                            "d"
                        )
                    )
                )
            );
        }
    }]);

    return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TableHeader.defaultProps = {
    quoteSymbol: null,
    baseSymbol: null
};

var SettleOrderRow = function (_React$Component2) {
    _inherits(SettleOrderRow, _React$Component2);

    function SettleOrderRow() {
        _classCallCheck(this, SettleOrderRow);

        return _possibleConstructorReturn(this, (SettleOrderRow.__proto__ || Object.getPrototypeOf(SettleOrderRow)).apply(this, arguments));
    }

    _createClass(SettleOrderRow, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                base = _props2.base,
                quote = _props2.quote,
                order = _props2.order,
                showSymbols = _props2.showSymbols;


            var price = base.get("id") == "1.3.0" ? order.getPrice() / (1 + order.offset_percent / 10000) : order.getPrice() * (1 + order.offset_percent / 10000);
            var amountSymbol = showSymbols ? " " + quote.get("symbol") : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { style: { paddingRight: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right", width: "25%" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(price, quote.get("precision")),
                    " ",
                    amountSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right", width: "25%" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right", width: "25%" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        style: { textAlign: "right", width: "25%" },
                        className: "tooltip",
                        "data-tip": new Date(order.settlement_date)
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.localize(new Date(order.settlement_date), {
                        type: "date",
                        format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
                    })
                )
            );
        }
    }]);

    return SettleOrderRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SettleOrderRow.defaultProps = {
    showSymbols: false,
    invert: false
};

var OpenSettleOrders = function (_React$Component3) {
    _inherits(OpenSettleOrders, _React$Component3);

    function OpenSettleOrders() {
        _classCallCheck(this, OpenSettleOrders);

        return _possibleConstructorReturn(this, (OpenSettleOrders.__proto__ || Object.getPrototypeOf(OpenSettleOrders)).apply(this, arguments));
    }

    _createClass(OpenSettleOrders, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.currentAccount !== this.props.currentAccount || nextProps.orders !== this.props.orders;
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                orders = _props3.orders,
                base = _props3.base,
                quote = _props3.quote;


            var activeOrders = null;

            if (orders.size > 0 && base && quote) {
                var index = 0;

                activeOrders = orders.sort(function (a, b) {
                    return a.isBefore(b) ? -1 : 1;
                }).map(function (order) {
                    return Date.now() < order.settlement_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettleOrderRow, {
                        key: index++,
                        order: order,
                        base: base,
                        quote: quote
                    }) : null;
                }).toArray();
            } else {
                return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__["default"],
                { component: "tbody", transitionName: "newrow" },
                activeOrders
            );
        }
    }]);

    return OpenSettleOrders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

OpenSettleOrders.defaultProps = {
    base: {},
    quote: {},
    orders: {},
    quoteSymbol: "",
    baseSymbol: ""
};

OpenSettleOrders.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quoteSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    baseSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSettleOrders);

/***/ }),

/***/ 2400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PriceText = function (_React$Component) {
    _inherits(PriceText, _React$Component);

    function PriceText() {
        _classCallCheck(this, PriceText);

        return _possibleConstructorReturn(this, (PriceText.__proto__ || Object.getPrototypeOf(PriceText)).apply(this, arguments));
    }

    _createClass(PriceText, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                price = _props.price,
                preFormattedPrice = _props.preFormattedPrice,
                quote = _props.quote,
                base = _props.base;

            if (!price && !preFormattedPrice) return null;
            var formattedPrice = !!preFormattedPrice ? preFormattedPrice : common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].price_to_text(price, quote, base);

            if (formattedPrice.full >= 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.trailing
                    ) : null
                );
            } else if (formattedPrice.full >= 0.1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.trailing
                    ) : null
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.trailing
                    ) : null
                );
            }
        }
    }]);

    return PriceText;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PriceText);

/***/ }),

/***/ 2402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPrice", function() { return MarketPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStats", function() { return MarketStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1218);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1266);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var _FormattedPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1334);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1265);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var MarketStats = function (_React$Component) {
    _inherits(MarketStats, _React$Component);

    function MarketStats(props) {
        _classCallCheck(this, MarketStats);

        var _this = _possibleConstructorReturn(this, (MarketStats.__proto__ || Object.getPrototypeOf(MarketStats)).call(this));

        _this.statsInterval = null;

        var _marketUtils$getMarke = common_market_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketName(props.base, props.quote),
            marketName = _marketUtils$getMarke.marketName;

        _this.state = {
            marketName: marketName
        };
        return _this;
    }

    _createClass(MarketStats, [{
        key: "_checkStats",
        value: function _checkStats() {
            var newStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { close: {} };
            var oldStats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { close: {} };

            return newStats.volumeBase !== oldStats.volumeBase || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(newStats.close && newStats.close.base, oldStats.close && oldStats.close.base) || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(newStats.close && newStats.close.quote, oldStats.close && oldStats.close.quote);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return this._checkStats(np.allMarketStats.get(this.state.marketName), this.props.allMarketStats.get(this.state.marketName)) || np.base.get("id") !== this.props.base.get("id") || np.quote.get("id") !== this.props.quote.get("id");
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.statsInterval) this.statsInterval();
        }
    }]);

    return MarketStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MarketPriceInner = function (_MarketStats) {
    _inherits(MarketPriceInner, _MarketStats);

    function MarketPriceInner(props) {
        _classCallCheck(this, MarketPriceInner);

        return _possibleConstructorReturn(this, (MarketPriceInner.__proto__ || Object.getPrototypeOf(MarketPriceInner)).call(this, props));
    }

    _createClass(MarketPriceInner, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return _get(MarketPriceInner.prototype.__proto__ || Object.getPrototypeOf(MarketPriceInner.prototype), "shouldComponentUpdate", this).call(this, np);
        }
    }, {
        key: "render",
        value: function render() {
            var allMarketStats = this.props.allMarketStats;
            var marketName = this.state.marketName;

            var marketStats = allMarketStats.get(marketName);
            var price = marketStats && marketStats.price ? marketStats.price : null;
            // if (!price && marketStatsInverted && marketStatsInverted.price) {
            //     price = marketStatsInverted.price.invert();
            // }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("", this.props.className) },
                price ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    base_amount: price.base.amount,
                    base_asset: price.base.asset_id,
                    quote_amount: price.quote.amount,
                    quote_asset: price.quote.asset_id,
                    force_direction: this.props.force_direction,
                    hide_symbols: this.props.hide_symbols
                }) : "n/a"
            );
        }
    }]);

    return MarketPriceInner;
}(MarketStats);

MarketPriceInner = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(MarketPriceInner, {
    propNames: ["quote", "base"]
});

var MarketPrice = function (_React$Component2) {
    _inherits(MarketPrice, _React$Component2);

    function MarketPrice() {
        _classCallCheck(this, MarketPrice);

        return _possibleConstructorReturn(this, (MarketPrice.__proto__ || Object.getPrototypeOf(MarketPrice)).apply(this, arguments));
    }

    _createClass(MarketPrice, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketPriceInner, this.props);
        }
    }]);

    return MarketPrice;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketPrice = Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(MarketPrice, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        return {
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().allMarketStats
        };
    }
});



/***/ }),

/***/ 2420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(582);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(894);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(565);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1234);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1237);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(802);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(879);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(581);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1217);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(416);
/* harmony import */ var _Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1247);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(735);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(569);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
























// import DepositFiatOpenLedger from "components/DepositWithdraw/openledger/DepositFiatOpenLedger";
// import WithdrawFiatOpenLedger from "components/DepositWithdraw/openledger/WithdrawFiatOpenLedger";

var DepositWithdrawContent = function (_DecimalChecker) {
    _inherits(DepositWithdrawContent, _DecimalChecker);

    function DepositWithdrawContent(props) {
        _classCallCheck(this, DepositWithdrawContent);

        var _this = _possibleConstructorReturn(this, (DepositWithdrawContent.__proto__ || Object.getPrototypeOf(DepositWithdrawContent)).call(this));

        _this.state = {
            toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.walletType),
            withdrawValue: "",
            amountError: null,
            symbol: props.asset.get("symbol"),
            to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                asset_id: props.asset.get("id"),
                precision: props.asset.get("precision")
            }),
            fee_asset_id: "1.3.0",
            feeStatus: {},
            loading: false,
            emptyAddressDeposit: false
        };

        _this._validateAddress(_this.state.toAddress, props);

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);
        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._getCurrentBalance = _this._getCurrentBalance.bind(_this);
        _this._getFee = _this._getFee.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);
        return _this;
    }

    _createClass(DepositWithdrawContent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getDepositAddress();

            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.asset && this.props.asset && np.asset.get("id") !== this.props.asset.get("id")) {
                this.setState({
                    to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                        asset_id: np.asset.get("id"),
                        precision: np.asset.get("precision")
                    }),
                    gateFee: np.asset.get("gateFee"),
                    intermediateAccount: np.asset.get("intermediateAccount"),
                    symbol: np.asset.get("symbol"),
                    memo: "",
                    withdrawValue: "",
                    receive_address: null,
                    toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(np.walletType)
                }, this._getDepositAddress);
            }
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress() {
            if (!this.props.backingCoinType) return;

            var receive_address = Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["getDepositAddress"])({
                coin: "open." + this.props.backingCoinType.toLowerCase(),
                account: this.props.account,
                stateCallback: this.addDepositAddress
            });

            if (!receive_address) {
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["requestDepositAddress"])(this._getDepositObject());
            } else {
                this.setState({
                    receive_address: receive_address
                });
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            return {
                inputCoinType: this.props.backingCoinType.toLowerCase(),
                outputCoinType: this.props.symbol.toLowerCase(),
                outputAddress: this.props.sender.get("name"),
                stateCallback: this.addDepositAddress
            };
        }
    }, {
        key: "requestDepositAddressLoad",
        value: function requestDepositAddressLoad() {
            this.setState({
                loading: true,
                emptyAddressDeposit: false
            });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["requestDepositAddress"])(this._getDepositObject());
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            if (receive_address.error) {
                receive_address.error.message === "no_address" ? this.setState({ emptyAddressDeposit: true }) : this.setState({ emptyAddressDeposit: false });
            }

            this.setState({
                receive_address: receive_address,
                loading: false
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a.rebuild();
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            e.preventDefault();
            if (this.state.to_withdraw.getAmount() === 0) {
                return this.setState({
                    amountError: "transfer.errors.pos"
                });
            }

            if (!this.props.intermediateAccount) return;

            var fee = this._getFee();
            var gateFee = this._getGateFee();

            var sendAmount = this.state.to_withdraw.clone();

            var balanceAmount = sendAmount.clone(this._getCurrentBalance().get("balance"));

            sendAmount.plus(gateFee);

            /* Insufficient balance */
            if (balanceAmount.lt(sendAmount)) {
                // Send the originally entered amount
                sendAmount = this.state.to_withdraw.clone();
            }

            actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.sender.get("id"), this.props.intermediateAccount, this.state.to_withdraw.getAmount(), this.state.to_withdraw.asset_id, this.props.backingCoinType.toLowerCase() + ":" + this.state.toAddress + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, fee.asset_id);
        }
    }, {
        key: "_updateAmount",
        value: function _updateAmount() {
            var feeAmount = this._getFee();
            var currentBalance = this._getCurrentBalance();

            var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                amount: currentBalance ? currentBalance.get("balance") : 0,
                asset_id: this.props.asset.get("id"),
                precision: this.props.asset.get("precision")
            });

            // Subtract the fee if it is using the same asset
            if (total.asset_id === feeAmount.asset_id) {
                total.minus(feeAmount);
            }

            this.state.to_withdraw.setAmount({ sats: total.getAmount() });
            this.setState({
                withdrawValue: total.getAmount({ real: true }),
                amountError: null
            }, this._checkBalance);
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this2 = this;

            var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.sender;

            if (!account) return;

            var assets = ["1.3.0", this.state.to_withdraw.asset_id];
            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_16__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this2.props.backingCoinType.toLowerCase() + ":" + _this2.state.toAddress + (_this2.state.memo ? ":" + _this2.state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(_this2.state.feeStatus, feeStatus)) {
                    _this2.setState({
                        feeStatus: feeStatus
                    });
                }
                _this2._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this3 = this;

            var fee_asset_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.fee_asset_id;

            if (!this.props.sender) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_16__["checkFeeStatusAsync"])({
                accountID: this.props.sender.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: this.props.backingCoinType.toLowerCase() + ":" + this.state.toAddress + (this.state.memo ? ":" + this.state.memo : "")
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                _this3.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this3._checkFeeStatus);
            });
        }
    }, {
        key: "_getCurrentBalance",
        value: function _getCurrentBalance() {
            var _this4 = this;

            return this.props.balances.find(function (b) {
                return b && b.get("asset_type") === _this4.props.asset.get("id");
            });
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                to_withdraw = _state.to_withdraw;
            var asset = this.props.asset;

            var balance = this._getCurrentBalance();
            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_16__["checkBalance"])(to_withdraw.getAmount({ real: true }), asset, this._getFee(), balance, this._getGateFee());
            if (hasBalance === null) return;
            if (this.state.balanceError !== !hasBalance) this.setState({ balanceError: !hasBalance });

            return hasBalance;
        }
    }, {
        key: "_getFee",
        value: function _getFee() {
            var defaultFee = {
                getAmount: function getAmount() {
                    return 0;
                },
                asset_id: this.state.fee_asset_id
            };

            if (!this.state.feeStatus || !this.state.feeAmount) return defaultFee;

            var coreStatus = this.state.feeStatus["1.3.0"];
            var withdrawAssetStatus = this.state.feeStatus[this.state.to_withdraw.asset_id];
            // Use core asset to pay the fees if present and balance is sufficient since it's cheapest
            if (coreStatus && coreStatus.hasBalance) return coreStatus.fee;
            // Use same asset as withdraw if not
            if (coreStatus && !coreStatus.hasBalance && withdrawAssetStatus && withdrawAssetStatus.hasBalance) {
                return withdrawAssetStatus.fee;
            }
            return coreStatus ? coreStatus.fee : defaultFee;
        }
    }, {
        key: "_onInputAmount",
        value: function _onInputAmount(e) {
            try {
                this.state.to_withdraw.setAmount({
                    real: parseFloat(e.target.value || 0)
                });
                this.setState({
                    withdrawValue: e.target.value,
                    amountError: null
                }, this._checkBalance);
            } catch (err) {
                console.error("err:", err);
            }
        }
    }, {
        key: "_onInputTo",
        value: function _onInputTo(e) {
            var toAddress = e.target.value.trim();

            this.setState({
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: toAddress,
                validAddress: null,
                toAddress: toAddress
            });

            this._validateAddress(toAddress);
        }
    }, {
        key: "_onMemoChanged",
        value: function _onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(address) {
            var _this5 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["validateAddress"])({
                url: api_apiConfig__WEBPACK_IMPORTED_MODULE_20__["openledgerAPIs"].BASE,
                walletType: props.walletType,
                newAddress: address
            }).then(function (isValid) {
                if (_this5.state.toAddress === address) {
                    _this5.setState({
                        withdraw_address_check_in_progress: false,
                        validAddress: !!isValid
                    });
                }
            }).catch(function (err) {
                console.error("Error when validating address:", err);
            });
        }
    }, {
        key: "_openRegistrarSite",
        value: function _openRegistrarSite(e) {
            e.preventDefault();
            var newWnd = window.open(SettingsStore.site_registr, "_blank");
            newWnd.opener = null;
        }
    }, {
        key: "_getGateFee",
        value: function _getGateFee() {
            var _props = this.props,
                gateFee = _props.gateFee,
                asset = _props.asset;

            return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                real: parseFloat(gateFee ? gateFee.replace(",", "") : 0),
                asset_id: asset.get("id"),
                precision: asset.get("precision")
            });
        }
    }, {
        key: "_renderWithdraw",
        value: function _renderWithdraw() {
            var amountError = this.state.amountError;

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName.name;

            var tabIndex = 1;
            var supportsMemos = this.props.supportsMemos;

            // if(this.props.fiatModal){
            //     if(~this.props.fiatModal.indexOf('canFiatWith')){
            //         return (<WithdrawFiatOpenLedger
            //             account={this.props.account}
            //             issuer_account="openledger-fiat"
            //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
            //             receive_asset={this.props.asset.get("symbol")}
            //             rpc_url={SettingsStore.rpc_url}
            //         />);
            //     }else{
            //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
            //     }
            // }

            var currentFee = this._getFee();
            var gateFee = this._getGateFee();
            var feeStatus = this.state.feeStatus[currentFee.asset_id];
            var feeAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getAsset(currentFee.asset_id);

            var disableSubmit = feeStatus && !feeStatus.hasBalance || this.state.balanceError || !this.state.toAddress || !this.state.withdrawValue;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "gateway.withdraw_funds",
                        asset: assetName,
                        wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_21__["getWalletName"])()
                    })
                ),
                this._renderCurrentBalance(),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("modal.withdraw.amount")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            tabIndex: tabIndex++,
                            type: "number",
                            min: "0",
                            onKeyPress: this.onKeyPress.bind(this),
                            value: this.state.withdrawValue,
                            onChange: this._onInputAmount.bind(this)
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
                                    assetName
                                )
                            )
                        )
                    ),
                    amountError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: amountError })
                    ) : null,
                    this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.errors.insufficient" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("transfer.fee")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "text",
                            disabled: true,
                            value: currentFee.getAmount({ real: true })
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
                                    feeAsset ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        name: feeAsset.get("symbol")
                                    }) : null
                                )
                            )
                        )
                    ),
                    feeStatus && !feeStatus.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.errors.insufficient" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.fee")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "text",
                            disabled: true,
                            value: gateFee.getAmount({ real: true })
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
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        name: this.props.asset.get("symbol")
                                    })
                                )
                            )
                        )
                    ),
                    feeStatus && !feeStatus.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.errors.insufficient" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("modal.withdraw.address")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.withdraw_placeholder", { asset: assetName }),
                            tabIndex: tabIndex++,
                            type: "text",
                            value: this.state.toAddress,
                            onChange: this._onInputTo.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        "data-place": "right",
                                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.withdraw_address", { asset: assetName })
                                    },
                                    "?"
                                )
                            )
                        )
                    ),
                    !this.state.validAddress && this.state.toAddress ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            content: "gateway.valid_address",
                            coin_type: assetName
                        })
                    ) : null
                ),
                supportsMemos ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("transfer.memo")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                            rows: "3",
                            value: this.state.memo,
                            tabIndex: tabIndex++,
                            onChange: this._onMemoChanged.bind(this)
                        })
                    ),
                    !this.state.validAddress && this.state.toAddress ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            content: "gateway.valid_address",
                            coin_type: assetName
                        })
                    ) : null
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "button-group SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "button",
                        {
                            tabIndex: tabIndex++,
                            className: "button" + (disableSubmit ? " disabled" : ""),
                            onClick: this.onSubmit.bind(this),
                            type: "submit"
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.withdraw_now" })
                    )
                )
            );
        }
    }, {
        key: "_renderDeposit",
        value: function _renderDeposit() {
            var _state2 = this.state,
                receive_address = _state2.receive_address,
                loading = _state2.loading,
                emptyAddressDeposit = _state2.emptyAddressDeposit;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName2.name;

            var hasMemo = receive_address && "memo" in receive_address && receive_address.memo;
            var addressValue = receive_address && receive_address.address || "";
            var tabIndex = 1;

            // if(this.props.fiatModal){
            //     if(~this.props.fiatModal.indexOf('canFiatDep')){
            //         return (<DepositFiatOpenLedger
            //             account={this.props.account}
            //             issuer_account="openledger-fiat"
            //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
            //             receive_asset={this.props.asset.get("symbol")}
            //             rpc_url={SettingsStore.rpc_url}
            //         />);
            //     }else{
            //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
            //     }
            // }
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: !addressValue ? "no-overflow" : "" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        unsafe: true,
                        content: "gateway.add_funds",
                        account: this.props.sender.get("name"),
                        wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_21__["getWalletName"])()
                    })
                ),
                this._renderCurrentBalance(),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            style: { marginBottom: 10 },
                            "data-place": "right",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.deposit_tip", {
                                asset: assetName
                            })
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "help-tooltip",
                            content: "gateway.deposit_to",
                            asset: assetName
                        }),
                        ":",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "fz_12 left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.deposit_notice_delay" })
                        )
                    ),
                    !addressValue ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], { type: "three-bounce" }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        emptyAddressDeposit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.please_generate_address" }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: "inline-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                readOnly: true,
                                type: "text",
                                value: addressValue
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__["default"], { text: addressValue }),
                            " "
                        )
                    ),
                    hasMemo ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: "inline-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                readOnly: true,
                                type: "text",
                                value: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("transfer.memo") + ": " + receive_address.memo
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__["default"], { text: receive_address.memo })
                        )
                    ) : null,
                    receive_address && receive_address.error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        receive_address.error.message
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "button-group SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "button",
                        {
                            tabIndex: tabIndex++,
                            className: "button spinner-button-circle",
                            onClick: this.requestDepositAddressLoad.bind(this),
                            type: "submit"
                        },
                        loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], { type: "circle" }) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.generate_new" })
                    )
                )
            );
        }
    }, {
        key: "_renderCurrentBalance",
        value: function _renderCurrentBalance() {
            var _utils$replaceName3 = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName3.name;

            var isDeposit = this.props.action === "deposit";

            var currentBalance = this._getCurrentBalance();

            var asset = currentBalance ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                asset_id: currentBalance.get("asset_type"),
                precision: this.props.asset.get("precision"),
                amount: currentBalance.get("balance")
            }) : null;

            // TEMP //
            // asset = new Asset({
            //     asset_id: this.props.asset.get("id"),
            //     precision: this.props.asset.get("precision"),
            //     amount: 65654645
            // });

            var applyBalanceButton = isDeposit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                {
                    style: { border: "2px solid black", borderLeft: "none" },
                    className: "form-label"
                },
                assetName
            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "button",
                {
                    "data-place": "right",
                    "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.withdraw_full"),
                    className: "button",
                    style: { border: "2px solid black", borderLeft: "none" },
                    onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], { name: "clippy", title: "icons.clippy.withdraw_full" })
            );

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    className: "SimpleTrade__withdraw-row",
                    style: { fontSize: "1rem" }
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "label",
                    { style: { fontSize: "1rem" } },
                    counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.balance_asset", {
                        asset: assetName
                    }),
                    ":",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "inline-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            disabled: true,
                            style: {
                                color: "black",
                                border: "2px solid black",
                                padding: 10,
                                width: "100%"
                            },
                            value: !asset ? 0 : asset.getAmount({ real: true })
                        }),
                        applyBalanceButton
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                asset = _props2.asset,
                action = _props2.action;

            var isDeposit = action === "deposit";

            if (!asset) {
                return null;
            }

            var _utils$replaceName4 = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(asset),
                assetName = _utils$replaceName4.name;

            var content = this.props.isDown ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    className: "txtlabel cancel",
                    content: "gateway.unavailable_OPEN",
                    component: "p"
                })
            ) : !this.props.isAvailable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    className: "txtlabel cancel",
                    content: "gateway.unavailable",
                    component: "p"
                })
            ) : isDeposit ? this._renderDeposit() : this._renderWithdraw();

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "SimpleTrade__modal" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "Modal__header" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "h3",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            content: isDeposit ? "gateway.deposit" : "modal.withdraw.submit"
                        }),
                        " ",
                        assetName
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "Modal__divider" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "grid-block vertical no-overflow",
                        style: {
                            zIndex: 1002,
                            paddingLeft: "2rem",
                            paddingRight: "2rem",
                            paddingTop: "1rem"
                        }
                    },
                    content
                )
            );
        }
    }]);

    return DepositWithdrawContent;
}(_Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_19__["DecimalChecker"]);

DepositWithdrawContent.propTypes = {
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAsset.isRequired,
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAsset.isRequired
};
DepositWithdrawContent.defaultProps = {
    coreAsset: "1.3.0",
    globalObject: "2.0.0"
};

DepositWithdrawContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(DepositWithdrawContent);

var SimpleDepositWithdrawModal = function (_React$Component) {
    _inherits(SimpleDepositWithdrawModal, _React$Component);

    function SimpleDepositWithdrawModal() {
        _classCallCheck(this, SimpleDepositWithdrawModal);

        var _this6 = _possibleConstructorReturn(this, (SimpleDepositWithdrawModal.__proto__ || Object.getPrototypeOf(SimpleDepositWithdrawModal)).call(this));

        _this6.state = { open: false };
        return _this6;
    }

    _createClass(SimpleDepositWithdrawModal, [{
        key: "show",
        value: function show() {
            var _this7 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(_this7.props.modalId, "open");
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ open: false });
        }
    }, {
        key: "render",
        value: function render() {
            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                    className: "test",
                    onClose: this.onClose.bind(this),
                    overlay: true,
                    id: this.props.modalId
                },
                this.state.open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DepositWithdrawContent, _extends({}, this.props, {
                    open: this.state.open
                })) : null
            );
        }
    }]);

    return SimpleDepositWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleDepositWithdrawModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(582);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(895);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1234);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1236);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1237);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(802);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(879);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(735);
/* harmony import */ var _Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1220);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(709);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(730);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1248);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_20__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























// import DepositFiatOpenLedger from "components/DepositWithdraw/openledger/DepositFiatOpenLedger";
// import WithdrawFiatOpenLedger from "components/DepositWithdraw/openledger/WithdrawFiatOpenLedger";

var SimpleDepositBlocktradesBridge = function (_React$Component) {
    _inherits(SimpleDepositBlocktradesBridge, _React$Component);

    function SimpleDepositBlocktradesBridge(props) {
        _classCallCheck(this, SimpleDepositBlocktradesBridge);

        var _this = _possibleConstructorReturn(this, (SimpleDepositBlocktradesBridge.__proto__ || Object.getPrototypeOf(SimpleDepositBlocktradesBridge)).call(this));

        _this.state = {
            toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(props.walletType),
            withdrawValue: "",
            amountError: null,
            inputAmount: 0,
            receiveLoading: false,
            limitLoading: true,
            apiError: false
        };

        _this._validateAddress(_this.state.toAddress, props);

        _this.deposit_address_cache = new common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_11__["default"]();
        return _this;
    }

    _createClass(SimpleDepositBlocktradesBridge, [{
        key: "onClose",
        value: function onClose() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getDepositAddress();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._getDepositLimit();
            this._estimateOutput();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.inputCoinType !== this.props.inputCoinType || np.outputCoinType !== this.props.outputCoinType) {
                this._getDepositLimit(np);
                this._estimateOutput(np);
                this._getDepositAddress(np);
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.inputCoinType !== this.props.inputCoinType || np.outputCoinType !== this.props.outputCoinType || np.sender !== this.props.sender || np.asset !== this.props.asset || np.isAvailable !== this.props.isAvailable || np.isDown !== this.props.isDown || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_getDepositLimit",
        value: function _getDepositLimit() {
            var _this2 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.setState({ limitLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["getDepositLimit"])(props.inputCoinType, props.outputCoinType).then(function (res) {
                _this2.setState({
                    depositLimit: res.depositLimit,
                    limitLoading: false
                });
            }).catch(function (err) {
                console.log("deposit limit error:", err);
                _this2.setState({
                    depositLimit: null,
                    limitLoading: false
                });
            });
        }
    }, {
        key: "_onAmountChange",
        value: function _onAmountChange(value, e) {
            var regexp_numeral = new RegExp(/[[:digit:]]/);
            var target = e.target;

            // Ensure input is valid
            if (!regexp_numeral.test(target.value)) {
                target.value = target.value.replace(/[^0-9.]/g, "");
            }

            // Catch initial decimal input
            if (target.value.charAt(0) == ".") {
                target.value = "0.";
            }

            // Catch double decimal and remove if invalid
            if (target.value.charAt(target.value.length) != target.value.search(".")) {
                target.value.substr(1);
            }

            target.value = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(target.value, 8);

            switch (value) {
                case "input":
                    this.setState({ inputAmount: target.value }, this._estimateOutput.bind(this));
                    break;

                case "output":
                    this.setState({ outputAmount: target.value }, this._estimateInput.bind(this));
                    break;
            }
        }
    }, {
        key: "_estimateOutput",
        value: function _estimateOutput() {
            var _this3 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.setState({ receiveAmount: 0, sendAmount: this.state.inputAmount });
            if (!this.state.inputAmount) {
                return;
            }

            this.setState({ receiveLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["estimateOutput"])(this.state.inputAmount, props.inputCoinType, props.outputCoinType).then(function (res) {
                _this3.setState({
                    inputAmount: res.inputAmount,
                    receiveAmount: res.outputAmount,
                    receiveLoading: false
                });
            }).catch(function (err) {
                console.log("receive amount err:", err);
                _this3.setState({ receiveLoading: false, apiError: true });
            });
        }
    }, {
        key: "_estimateInput",
        value: function _estimateInput() {
            var _this4 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.setState({ receiveAmount: this.state.outputAmount, sendAmount: 0 });
            if (!this.state.outputAmount) {
                return;
            }

            this.setState({ receiveLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["estimateInput"])(this.state.outputAmount, props.inputCoinType, props.outputCoinType).then(function (res) {
                _this4.setState({
                    inputAmount: res.inputAmount,
                    sendAmount: common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(res.inputAmount, 8),
                    receiveLoading: false
                });
            }).catch(function (err) {
                console.log("send amount err:", err);
                _this4.setState({ receiveLoading: false, apiError: true });
            });
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            if (!props.inputCoinType) return;
            var receive_address = void 0;

            /* Always generate new address/memo for increased security */
            /*let account_name = props.sender.get("name");
            let receive_address = this.deposit_address_cache.getCachedInputAddress(
                "blocktrades",
                account_name,
                props.inputCoinType.toLowerCase(),
                props.outputCoinType.toLowerCase()
            );*/
            if (!receive_address) {
                this.setState({ receive_address: null });
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["requestDepositAddress"])(this._getDepositObject(props));
            } else {
                this.setState({
                    receive_address: receive_address
                });
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            var _this5 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return {
                inputCoinType: props.inputCoinType.toLowerCase(),
                outputCoinType: props.outputCoinType.toLowerCase(),
                outputAddress: props.sender.get("name"),
                url: api_apiConfig__WEBPACK_IMPORTED_MODULE_15__["blockTradesAPIs"].BASE,
                stateCallback: function stateCallback(receive_address) {
                    _this5.addDepositAddress(props.inputCoinType.toLowerCase(), props.outputCoinType.toLowerCase(), props.sender.get("name"), receive_address);
                }
            };
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(input_coin_type, output_coin_type, account, receive_address) {
            this.deposit_address_cache.cacheInputAddress("blocktrades", account, input_coin_type, output_coin_type, receive_address.address, receive_address.memo);
            this.setState({
                receive_address: receive_address
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_8___default.a.rebuild();
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(address) {
            var _this6 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["validateAddress"])({ walletType: props.walletType, newAddress: address }).then(function (isValid) {
                if (_this6.state.toAddress === address) {
                    _this6.setState({
                        withdraw_address_check_in_progress: false,
                        validAddress: isValid
                    });
                }
            }).catch(function (err) {
                console.error("Error when validating address:", err);
            });
        }
    }, {
        key: "_openRegistrarSite",
        value: function _openRegistrarSite(e) {
            e.preventDefault();
            var newWnd = window.open(stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"].site_registr, "_blank");
            newWnd.opener = null;
        }
    }, {
        key: "_onDropDownSelect",
        value: function _onDropDownSelect(e) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({ preferredBridge: e });
        }
    }, {
        key: "onBlockTradesContact",
        value: function onBlockTradesContact() {
            console.log("Open New Tab");
            var win = window.open("https://www.blocktrades.us/contact", "_blank");
            win.focus();
        }
    }, {
        key: "_renderDeposit",
        value: function _renderDeposit() {
            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName.name,
                prefix = _utils$replaceName.prefix;

            var _state = this.state,
                receive_address = _state.receive_address,
                apiError = _state.apiError;

            var hasMemo = receive_address && "memo" in receive_address && receive_address.memo;
            var addressValue = receive_address && receive_address.address || "";
            var QR = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "QR", style: { textAlign: "center" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_20___default.a, { size: 140, value: addressValue })
            );

            var bridgeAssets = Object.keys(this.props.bridges.toJS());

            var inputName = this.props.inputCoinType.toUpperCase();
            var receiveName = (prefix ? prefix : "") + assetName;

            var price = (this.state.receiveAmount / this.state.inputAmount).toFixed(4);
            var priceSuffix = receiveName + "/" + inputName;

            var aboveLimit = this.state.inputAmount > parseFloat(this.state.depositLimit) || this.state.sendAmount > parseFloat(this.state.depositLimit);
            var aboveLimitStyle = aboveLimit ? { border: "1px solid #a94442" } : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "modal__body" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "container-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.buy.asset" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            disabled: true,
                            type: "text",
                            defaultValue: receiveName
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "container-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.buy.bridge" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.bridge_TRADE"),
                                className: "inline-block tooltip",
                                onClick: this.onBlockTradesContact.bind(this)
                            },
                            "\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                style: { position: "relative", top: 0 },
                                name: "question-circle",
                                title: "icons.question_circle"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            disabled: true,
                            type: "text",
                            defaultValue: "BLOCKTRADES"
                        }),
                        " "
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: !apiError ? { display: "" } : { display: "none" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row double-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingRight: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "left-label" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.send" })
                                    ),
                                    aboveLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: "error-msg inline-block tooltip",
                                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.over_limit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.over_limit" }),
                                        "\xA0",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                            name: "question-circle",
                                            title: "icons.question_circle"
                                        })
                                    ) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: aboveLimitStyle,
                                        type: "text",
                                        value: this.state.sendAmount,
                                        onInput: this._onAmountChange.bind(this, "input")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "form-label select floating-dropdown" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                            entries: bridgeAssets,
                                            values: bridgeAssets.reduce(function (map, a) {
                                                if (a) map[a] = a;
                                                return map;
                                            }, {}),
                                            singleEntry: bridgeAssets[0],
                                            value: this.props.preferredBridge || bridgeAssets[0],
                                            onChange: this._onDropDownSelect,
                                            upperCase: true
                                        })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingLeft: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.deposit_limit" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        disabled: true,
                                        type: "number",
                                        value: this.state.depositLimit && parseFloat(this.state.depositLimit).toFixed(4) || 0
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "input-right-symbol" },
                                        inputName
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row double-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingRight: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.receive" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: aboveLimitStyle,
                                        type: "text",
                                        value: this.state.receiveAmount,
                                        onInput: this._onAmountChange.bind(this, "output")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "input-right-symbol" },
                                        receiveName
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingLeft: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "left-label" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" }),
                                        "\xA0\xA0",
                                        this.state.receiveLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "footer.loading" }) : ""
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        disabled: true,
                                        type: "number",
                                        value: aboveLimit ? 0 : price
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "input-right-symbol" },
                                        priceSuffix
                                    )
                                )
                            )
                        )
                    ),
                    !addressValue ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { textAlign: "center" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], { type: "three-bounce" })
                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row" },
                        hasMemo ? null : QR,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "copyIcon" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    text: addressValue,
                                    className: "copyIcon"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "div",
                                    style: {
                                        fontSize: "0.8rem",
                                        fontWeight: "bold",
                                        paddingBottom: "0.3rem"
                                    },
                                    content: "gateway.purchase_notice",
                                    inputAsset: inputName,
                                    outputAsset: receiveName
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "modal__highlight" },
                                    addressValue
                                )
                            )
                        ),
                        hasMemo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "grid-block",
                                style: { marginTop: "10px" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "copyIcon" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    text: receive_address.memo,
                                    className: "copyIcon"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    unsafe: true,
                                    content: "gateway.purchase_notice_memo",
                                    component: "div",
                                    style: {
                                        fontSize: "0.8rem",
                                        fontWeight: "bold",
                                        paddingBottom: "0.3rem"
                                    }
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "modal__highlight" },
                                    receive_address.memo
                                )
                            )
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button primary hollow",
                                    onClick: this.onClose.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.close" })
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: apiError ? { display: "" } : { display: "none" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row double-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "txtlabel cancel",
                            content: "gateway.unavailable_TRADE",
                            component: "h3"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: "button primary hollow",
                                onClick: this.onClose.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.close" })
                        )
                    )
                )
            );
        }
    }, {
        key: "_renderCurrentBalance",
        value: function _renderCurrentBalance() {
            var _this7 = this;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName2.name;

            var isDeposit = this.props.action === "deposit";

            var currentBalance = this.props.balances.find(function (b) {
                return b && b.get("asset_type") === _this7.props.asset.get("id");
            });

            var asset = currentBalance ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_4__["Asset"]({
                asset_id: currentBalance.get("asset_type"),
                precision: this.props.asset.get("precision"),
                amount: currentBalance.get("balance")
            }) : null;

            var applyBalanceButton = isDeposit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    style: { border: "2px solid black", borderLeft: "none" },
                    className: "form-label"
                },
                assetName
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "button",
                {
                    "data-place": "right",
                    "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.withdraw_full"),
                    className: "button",
                    style: { border: "2px solid black", borderLeft: "none" },
                    onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], { name: "clippy", title: "icons.clippy.withdraw_full" })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "SimpleTrade__withdraw-row",
                    style: { fontSize: "1rem" }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { style: { fontSize: "1rem" } },
                    counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("gateway.balance_asset", {
                        asset: assetName
                    }),
                    ":",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "inline-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            disabled: true,
                            style: {
                                color: "black",
                                border: "2px solid black",
                                padding: 10,
                                width: "100%"
                            },
                            value: !asset ? 0 : asset.getAmount({ real: true })
                        }),
                        applyBalanceButton
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            if (!asset) {
                return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical no-overflow" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "modal__header" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "p", content: "modal.buy.title" })
                ),
                this.props.isDown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable_TRADE",
                        component: "p"
                    })
                ) : !this.props.isAvailable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable",
                        component: "p"
                    })
                ) : this._renderDeposit()
            );
        }
    }]);

    return SimpleDepositBlocktradesBridge;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SimpleDepositBlocktradesBridge.propTypes = {
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAsset.isRequired
};

SimpleDepositBlocktradesBridge = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(SimpleDepositBlocktradesBridge);

var StoreWrapper = function (_React$Component2) {
    _inherits(StoreWrapper, _React$Component2);

    function StoreWrapper() {
        _classCallCheck(this, StoreWrapper);

        return _possibleConstructorReturn(this, (StoreWrapper.__proto__ || Object.getPrototypeOf(StoreWrapper)).apply(this, arguments));
    }

    _createClass(StoreWrapper, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                preferredBridge = _props.preferredBridge,
                others = _objectWithoutProperties(_props, ["preferredBridge"]);

            var currentBridge = this.props.bridges.get(this.props.preferredBridge);
            if (!currentBridge) {
                currentBridge = this.props.bridges.first();
                preferredBridge = currentBridge.inputCoinType;
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SimpleDepositBlocktradesBridge, _extends({}, others, {
                preferredBridge: preferredBridge
            }, currentBridge.toJS()));
        }
    }]);

    return StoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

StoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_17__["connect"])(StoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"]];
    },
    getProps: function getProps() {
        return {
            preferredBridge: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().viewSettings.get("preferredBridge", "btc")
        };
    }
});

var SimpleDepositBlocktradesBridgeModal = function (_React$Component3) {
    _inherits(SimpleDepositBlocktradesBridgeModal, _React$Component3);

    function SimpleDepositBlocktradesBridgeModal() {
        _classCallCheck(this, SimpleDepositBlocktradesBridgeModal);

        var _this9 = _possibleConstructorReturn(this, (SimpleDepositBlocktradesBridgeModal.__proto__ || Object.getPrototypeOf(SimpleDepositBlocktradesBridgeModal)).call(this));

        _this9.state = {
            open: false
        };
        return _this9;
    }

    _createClass(SimpleDepositBlocktradesBridgeModal, [{
        key: "show",
        value: function show() {
            var _this10 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_this10.props.modalId, "open");
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ open: false });
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.bridges) return null;

            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    id: this.props.modalId,
                    onClose: this.onClose.bind(this),
                    noCloseBtn: true,
                    overlay: true
                },
                this.state.open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StoreWrapper, _extends({}, this.props, { open: this.state.open })) : null
            );
        }
    }]);

    return SimpleDepositBlocktradesBridgeModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleDepositBlocktradesBridgeModal);

/***/ }),

/***/ 2464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2465);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(737);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(865);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(863);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(895);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1013);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1012);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1232);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(585);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(589);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1334);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1051);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(416);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(802);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

























/**
 *  Given an account and an asset id, render a modal allowing modification of a margin position for that asset
 *
 *  Expected Properties:
 *     quote_asset:  asset id, must be a bitasset
 *     account: full_account object for the account to use
 *
 */

var BorrowModalContent = function (_React$Component) {
    _inherits(BorrowModalContent, _React$Component);

    function BorrowModalContent(props) {
        _classCallCheck(this, BorrowModalContent);

        var _this = _possibleConstructorReturn(this, (BorrowModalContent.__proto__ || Object.getPrototypeOf(BorrowModalContent)).call(this));

        _this.state = _this._initialState(props);
        return _this;
    }

    _createClass(BorrowModalContent, [{
        key: "_initialState",
        value: function _initialState(props) {
            var currentPosition = props ? this._getCurrentPosition(props) : {};

            if (currentPosition.collateral) {
                var debt = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_amount(currentPosition.debt, props.quote_asset);
                var collateral = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_amount(currentPosition.collateral, props.backing_asset);

                var target_collateral_ratio = !isNaN(currentPosition.target_collateral_ratio) ? currentPosition.target_collateral_ratio / 100 : 0;

                return {
                    short_amount: debt ? debt.toString() : null,
                    collateral: collateral ? collateral.toString() : null,
                    collateral_ratio: this._getCollateralRatio(debt, collateral),
                    target_collateral_ratio: target_collateral_ratio,
                    errors: this._getInitialErrors(),
                    isValid: false,
                    useTargetCollateral: target_collateral_ratio > 0 ? true : false,
                    original_position: {
                        debt: debt,
                        collateral: collateral,
                        target_collateral_ratio: target_collateral_ratio
                    }
                };
            } else {
                return {
                    short_amount: 0,
                    collateral: 0,
                    collateral_ratio: this._getInitialCollateralRatio(props),
                    target_collateral_ratio: 0,
                    errors: this._getInitialErrors(),
                    isValid: false,
                    useTargetCollateral: false,
                    original_position: {
                        debt: 0,
                        collateral: 0
                    }
                };
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var newState = this._initialState(this.props);

            this.setState(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(nextState, this.state) || !immutable__WEBPACK_IMPORTED_MODULE_19___default.a.is(nextProps.quote_asset, this.props.quote_asset) || !nextProps.backing_asset.get("symbol") === this.props.backing_asset.get("symbol") || !immutable__WEBPACK_IMPORTED_MODULE_19___default.a.is(nextProps.account, this.props.account) || !immutable__WEBPACK_IMPORTED_MODULE_19___default.a.is(nextProps.call_orders, this.props.call_orders);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _state = this.state,
                short_amount = _state.short_amount,
                collateral = _state.collateral,
                collateral_ratio = _state.collateral_ratio;


            if (nextProps.account !== this.props.account || nextProps.hasCallOrders !== this.props.hasCallOrders || nextProps.quote_asset.get("id") !== this.props.quote_asset.get("id")) {
                var newState = this._initialState(nextProps);

                var revalidate = false;
                if (short_amount || collateral || collateral_ratio) {
                    newState.short_amount = short_amount;
                    newState.collateral = collateral;
                    newState.collateral_ratio = collateral_ratio;
                    revalidate = true;
                }

                this.setState(newState);

                if (revalidate) {
                    this._validateFields(newState);
                }
            }
        }
    }, {
        key: "_getInitialErrors",
        value: function _getInitialErrors() {
            return {
                collateral_balance: null,
                ratio_too_high: null
            };
        }
    }, {
        key: "_getMaintenanceRatio",
        value: function _getMaintenanceRatio() {
            return this.props.quote_asset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
        }
    }, {
        key: "confirmClicked",
        value: function confirmClicked(e) {
            e.preventDefault();
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "toggleLockedCR",
        value: function toggleLockedCR(e) {
            e.preventDefault();
            this.setState({ lockedCR: !this.state.lockedCR ? true : false });
        }
    }, {
        key: "_onBorrowChange",
        value: function _onBorrowChange(e) {
            var feed_price = this._getFeedPrice();
            var amount = e.amount.replace(/,/g, "");
            var newState = {
                short_amount: amount,
                collateral: (this.state.collateral_ratio * (amount / feed_price)).toFixed(this.props.backing_asset.get("precision")),
                collateral_ratio: this.state.collateral_ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_onCollateralChange",
        value: function _onCollateralChange(e) {
            var amount = e.amount.replace(/,/g, "");

            var feed_price = this._getFeedPrice();
            var collateralRatio = amount / (this.state.short_amount / feed_price);

            var newState = this._isPredictionMarket(this.props) ? {
                short_amount: amount,
                collateral: amount,
                collateral_ratio: 1
            } : {
                short_amount: this.state.short_amount,
                collateral: amount,
                collateral_ratio: Object(lodash_es_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(collateralRatio) ? collateralRatio : this._getInitialCollateralRatio(this.props)
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_onTargetRatioChange",
        value: function _onTargetRatioChange(e) {
            var target = e.target;

            // Ensure input is valid
            var regexp_numeral = new RegExp(/[[:digit:]]/);
            if (!regexp_numeral.test(target.value)) {
                target.value = target.value.replace(/[^0-9.]/g, "");
            }

            var ratio = target.value;

            this.setState({
                target_collateral_ratio: ratio
            });
        }
    }, {
        key: "_onRatioChange",
        value: function _onRatioChange(e) {
            var feed_price = this._getFeedPrice();
            var target = e.target;

            // Ensure input is valid
            var regexp_numeral = new RegExp(/[[:digit:]]/);
            if (!regexp_numeral.test(target.value)) {
                target.value = target.value.replace(/[^0-9.]/g, "");
            }

            var ratio = target.value;
            var short_amount = void 0;
            var collateral = void 0;

            if (this.state.lockedCR) {
                short_amount = (this.state.collateral * feed_price / ratio).toFixed(this.props.backing_asset.get("precision"));
                collateral = this.state.collateral;
            } else {
                short_amount = this.state.short_amount;
                collateral = (this.state.short_amount / feed_price * ratio).toFixed(this.props.backing_asset.get("precision"));
            }

            var newState = {
                short_amount: short_amount,
                collateral: collateral,
                collateral_ratio: ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_maximizeCollateral",
        value: function _maximizeCollateral() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
            var initialCollateral = 0;

            if (currentPosition.collateral) {
                initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_amount(currentPosition.collateral, this.props.backing_asset);
            }

            // Make sure we don't go over the maximum collateral ratio
            var maximizedCollateral = Math.floor(Math.min(this.props.backing_balance.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(this.props.backing_asset) + initialCollateral - 10, this.state.short_amount / this._getFeedPrice() * 1000.0));

            this._onCollateralChange(new Object({ amount: maximizedCollateral.toString() }));
        }
    }, {
        key: "_maximizeDebt",
        value: function _maximizeDebt() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
            var initialCollateral = 0;

            if (currentPosition.collateral) {
                initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_amount(currentPosition.collateral, this.props.backing_asset);
            }

            var maximumCollateral = this.props.backing_balance.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(this.props.backing_asset) + initialCollateral - 10;
            var short_amount = maximumCollateral / this.state.collateral_ratio * this._getFeedPrice();

            var newState = {
                short_amount: short_amount,
                collateral: maximumCollateral,
                collateral_ratio: this.state.collateral_ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_payDebt",
        value: function _payDebt() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : { debt: 0 };

            if (currentPosition.debt <= 0) {
                return;
            }

            var short_amount = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_amount(Math.max(currentPosition.debt - this.props.bitasset_balance.get("balance"), 0), this.props.quote_asset);

            this._onBorrowChange({
                amount: short_amount.toString()
            });
        }
    }, {
        key: "_setUpdatedPosition",
        value: function _setUpdatedPosition(newState) {
            this.setState({
                newPosition: parseFloat(newState.short_amount) / parseFloat(newState.collateral)
            });
        }
    }, {
        key: "_validateFields",
        value: function _validateFields(newState) {
            var errors = this._getInitialErrors();
            var original_position = this.state.original_position;

            var backing_balance = !this.props.backing_balance ? { balance: 0 } : this.props.backing_balance.toJS();

            var maintenanceRatio = this._getMaintenanceRatio();
            var originalCR = this._getCollateralRatio(original_position.debt, original_position.collateral);
            var isOriginalBelowMCR = original_position.collateral > 0 && originalCR < maintenanceRatio;

            if (parseFloat(newState.collateral) - original_position.collateral > common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_amount(backing_balance.balance, this.props.backing_asset.toJS())) {
                errors.collateral_balance = counterpart__WEBPACK_IMPORTED_MODULE_17___default.a.translate("borrow.errors.collateral");
            }

            // let sqp = this.props.quote_asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;

            if (isOriginalBelowMCR && newState.short_amount > original_position.debt) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_17___default.a.translate("borrow.errors.increased_debt_on_margin_call");
            } else if (isOriginalBelowMCR && parseFloat(newState.collateral_ratio) <= parseFloat(originalCR)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_17___default.a.translate("borrow.errors.below_ratio_mcr_update", { ocr: originalCR.toFixed(4) });
            } else if (!isOriginalBelowMCR && parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_17___default.a.translate("borrow.errors.below", { mr: maintenanceRatio });
            } else if (parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio + 0.5)) {
                errors.close_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_17___default.a.translate("borrow.errors.close", { mr: maintenanceRatio });
            }

            this.setState({ errors: errors });
        }
    }, {
        key: "_onSubmit",
        value: function _onSubmit(e) {
            e.preventDefault();

            var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(this.props.quote_asset.get("precision"));
            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(this.props.backing_asset.get("precision"));
            var currentPosition = this._getCurrentPosition(this.props);

            var isTCR = typeof this.state.target_collateral_ratio !== "undefined" && this.state.target_collateral_ratio > 0 && this.state.useTargetCollateral ? true : false;

            var extensionsProp = false;

            if (isTCR) {
                extensionsProp = {
                    target_collateral_ratio: parseInt(this.state.target_collateral_ratio * 100, 10)
                };
            }

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_14__["default"].new_transaction();
            if (extensionsProp) {
                tr.add_type_operation("call_order_update", {
                    fee: {
                        amount: 0,
                        asset_id: 0
                    },
                    funding_account: this.props.account.get("id"),
                    delta_collateral: {
                        amount: parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10),
                        asset_id: this.props.backing_asset.get("id")
                    },
                    delta_debt: {
                        amount: parseInt(this.state.short_amount * quotePrecision - currentPosition.debt, 10),
                        asset_id: this.props.quote_asset.get("id")
                    },
                    extensions: extensionsProp
                });
            } else {
                tr.add_type_operation("call_order_update", {
                    fee: {
                        amount: 0,
                        asset_id: 0
                    },
                    funding_account: this.props.account.get("id"),
                    delta_collateral: {
                        amount: parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10),
                        asset_id: this.props.backing_asset.get("id")
                    },
                    delta_debt: {
                        amount: parseInt(this.state.short_amount * quotePrecision - currentPosition.debt, 10),
                        asset_id: this.props.quote_asset.get("id")
                    }
                });
            }
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].process_transaction(tr, null, true).catch(function (err) {
                // console.log("unlock failed:", err);
            });

            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "_getCurrentPosition",
        value: function _getCurrentPosition(props) {
            var currentPosition = {
                collateral: null,
                debt: null
            };

            if (props && props.hasCallOrders && props.call_orders) {
                currentPosition = props.call_orders.filter(function (a) {
                    return !!a;
                }).find(function (a) {
                    return a.getIn(["call_price", "quote", "asset_id"]) === props.quote_asset.get("id");
                });

                currentPosition = !!currentPosition ? currentPosition.toJS() : {
                    collateral: null,
                    debt: null
                };
            }
            return currentPosition;
        }
    }, {
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            if (this._isPredictionMarket(this.props)) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_price(this.props.quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]), this.props.backing_asset, this.props.quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]), this.props.quote_asset);
        }
    }, {
        key: "_getInitialCollateralRatio",
        value: function _getInitialCollateralRatio(props) {
            return this._isPredictionMarket(props) ? 1 : 0;
        }
    }, {
        key: "_getCollateralRatio",
        value: function _getCollateralRatio(debt, collateral) {
            return collateral / (debt / this._getFeedPrice());
        }
    }, {
        key: "_isPredictionMarket",
        value: function _isPredictionMarket(props) {
            return props.quote_asset.getIn(["bitasset", "is_prediction_market"]);
        }
    }, {
        key: "_setUseTargetCollateral",
        value: function _setUseTargetCollateral() {
            this.setState({
                useTargetCollateral: !this.state.useTargetCollateral
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quote_asset = _props.quote_asset,
                bitasset_balance = _props.bitasset_balance,
                backing_asset = _props.backing_asset,
                backing_balance = _props.backing_balance;
            var _state2 = this.state,
                short_amount = _state2.short_amount,
                collateral = _state2.collateral,
                collateral_ratio = _state2.collateral_ratio,
                target_collateral_ratio = _state2.target_collateral_ratio,
                errors = _state2.errors,
                original_position = _state2.original_position;

            var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(this.props.quote_asset.get("precision"));
            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(this.props.backing_asset.get("precision"));

            if (!collateral_ratio || isNaN(collateral_ratio) || !(collateral_ratio > 0.0 && collateral_ratio < 1000.0)) collateral_ratio = 0;
            bitasset_balance = !bitasset_balance ? { balance: 0, id: null } : bitasset_balance.toJS();
            backing_balance = !backing_balance ? { balance: 0, id: null } : backing_balance.toJS();

            var collateralClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()("form-group", {
                "has-error": errors.collateral_balance
            });
            var collateralRatioClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()("form-group", { "has-error": errors.below_maintenance }, { "has-warning": errors.close_maintenance });

            // Dynamically update user's remaining collateral
            var currentPosition = this._getCurrentPosition(this.props);
            var backingBalance = backing_balance.id ? bitsharesjs__WEBPACK_IMPORTED_MODULE_20__["ChainStore"].getObject(backing_balance.id) : null;
            var backingAmount = backingBalance ? backingBalance.get("balance") : 0;
            var collateralChange = parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10);
            var remainingBalance = backingAmount - collateralChange;

            var bitAssetBalanceText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { component: "span", content: "transfer.available" }),
                    ":",
                    " ",
                    bitasset_balance.id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_13__["default"], { balance: bitasset_balance.id }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        amount: 0,
                        asset: quote_asset.get("id")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "a",
                    { onClick: this._payDebt.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.pay_max_debt" })
                ),
                "|",
                collateral_ratio != 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "a",
                    { onClick: this._maximizeDebt.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.use_max" })
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    {
                        className: "disabled-link",
                        "data-place": "left",
                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_17___default.a.translate("borrow.maximize_debt_set_ratio_slider")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.use_max" })
                )
            );
            var backingBalanceText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { component: "span", content: "transfer.available" }),
                    ":",
                    " ",
                    backing_balance.id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        amount: remainingBalance,
                        asset: backing_asset.get("id")
                    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        amount: 0,
                        asset: backing_asset.get("id")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "a",
                    { onClick: this._maximizeCollateral.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.use_max" })
                )
            );

            var updateTargetCollateral = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "label",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.target_collateral_ratio" }),
                    "\xA0\xA0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            className: "tooltip",
                            "data-html": true,
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_17___default.a.translate("tooltip.target_collateral_ratio")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_21__["default"], {
                            name: "question-circle",
                            title: "icons.question_circle"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { style: { marginBottom: "1em" } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        type: "checkbox",
                        onClick: this._setUseTargetCollateral.bind(this),
                        checked: this.state.useTargetCollateral ? "checked=checked" : ""
                    }),
                    "\xA0\xA0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.enable_target_collateral_ratio" })
                ),
                this.state.useTargetCollateral ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        value: isNaN(target_collateral_ratio) ? "0" : target_collateral_ratio,
                        onChange: this._onTargetRatioChange.bind(this),
                        type: "text",
                        style: {
                            float: "right",
                            marginTop: -10,
                            width: "12%"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        style: { width: "85%" },
                        min: "0",
                        max: "6",
                        step: "0.01",
                        onChange: this._onTargetRatioChange.bind(this),
                        value: isNaN(target_collateral_ratio) ? "0" : target_collateral_ratio,
                        type: "range"
                    })
                ) : null
            );

            var feed_price = this._getFeedPrice();

            var maintenanceRatio = this._getMaintenanceRatio();

            var squeezeRatio = this.props.quote_asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;

            var isPredictionMarket = this._isPredictionMarket(this.props);

            var isOriginalBelowMCR = original_position.collateral > 0 && this._getCollateralRatio(original_position.debt, original_position.collateral) < maintenanceRatio;

            if (!isPredictionMarket && isNaN(feed_price)) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "form",
                        {
                            className: "grid-container text-center no-overflow",
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "h3",
                            content: "borrow.no_valid",
                            asset_symbol: quote_asset.get("symbol")
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-content button-group text-center no-overflow" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5___default.a,
                            { close: this.props.modalId },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: " button warning" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "account.perm.cancel" })
                            )
                        )
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "form",
                    {
                        className: "grid-container small-10 small-offset-1 no-overflow",
                        noValidate: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        component: "h3",
                        content: "borrow.title",
                        asset_symbol: quote_asset.get("symbol")
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { textAlign: "left" } },
                        this.props.hide_help ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
                            path: "components/" + (isPredictionMarket ? "BorrowModalPrediction" : "BorrowModal"),
                            debt: quote_asset.get("symbol"),
                            collateral: backing_asset.get("symbol"),
                            borrower: this.props.account.get("name"),
                            mr: maintenanceRatio
                        }),
                        isOriginalBelowMCR ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "h6",
                            className: "has-warning",
                            content: "borrow.errors.below_info"
                        }) : null,
                        !isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                style: {
                                    paddingTop: "1rem",
                                    paddingBottom: "1rem"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "borrow-price-feeds" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { className: "borrow-price-label" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "transaction.feed_price" }),
                                    ":\xA0"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    noPopOver: true,
                                    quote_amount: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]),
                                    quote_asset: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "asset_id"]),
                                    base_asset: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "asset_id"]),
                                    base_amount: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"])
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "borrow-price-final " + (errors.below_maintenance ? "has-error" : errors.close_maintenance ? "has-warning" : "")
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { className: "borrow-price-label" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.your_price" }),
                                    ":\xA0"
                                ),
                                this.state.newPosition ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    noPopOver: true,
                                    quote_amount: maintenanceRatio * this.state.short_amount * quotePrecision,
                                    quote_asset: quote_asset.get("id"),
                                    base_asset: backing_asset.get("id"),
                                    base_amount: this.state.collateral * backingPrecision
                                }) : null
                            )
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { position: "absolute", left: 20 } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_21__["default"], {
                                    onClick: this.toggleLockedCR.bind(this),
                                    name: !this.state.lockedCR ? "locked" : "unlocked",
                                    size: "1_5x",
                                    style: { position: "relative", top: -10 }
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                label: "transaction.borrow_amount",
                                amount: short_amount.toString(),
                                onChange: this._onBorrowChange.bind(this),
                                asset: quote_asset.get("id"),
                                assets: [quote_asset.get("id")],
                                display_balance: bitAssetBalanceText,
                                placeholder: "0.0",
                                tabIndex: 1
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: collateralClass },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { position: "absolute", left: 20 } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_21__["default"], {
                                    onClick: this.toggleLockedCR.bind(this),
                                    name: this.state.lockedCR ? "locked" : "unlocked",
                                    size: "1_5x",
                                    style: { position: "relative", top: -10 }
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                label: "transaction.collateral",
                                amount: collateral.toString(),
                                onChange: this._onCollateralChange.bind(this),
                                asset: backing_asset.get("id"),
                                assets: [backing_asset.get("id")],
                                display_balance: backingBalanceText,
                                placeholder: "0.0",
                                tabIndex: 1
                            }),
                            errors.collateral_balance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "float-left",
                                    style: {
                                        paddingTop: 5
                                    }
                                },
                                errors.collateral_balance
                            ) : null
                        ),
                        !isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: collateralRatioClass,
                                    style: { marginBottom: "3.5rem" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                    component: "label",
                                    content: "borrow.coll_ratio"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                        value: collateral_ratio == 0 ? "" : collateral_ratio,
                                        onChange: this._onRatioChange.bind(this),
                                        type: "text",
                                        style: {
                                            width: "12%",
                                            float: "right",
                                            marginTop: -10
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                        style: { width: "85%" },
                                        min: "0",
                                        max: "6",
                                        step: "0.01",
                                        onChange: this._onRatioChange.bind(this),
                                        value: collateral_ratio,
                                        type: "range"
                                    })
                                ),
                                errors.below_maintenance || errors.close_maintenance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        style: {
                                            height: "1em",
                                            maxWidth: "85%"
                                        },
                                        className: "float-left"
                                    },
                                    errors.below_maintenance,
                                    errors.close_maintenance
                                ) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "form-group",
                                    style: { marginBottom: "3.5rem" }
                                },
                                updateTargetCollateral
                            )
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "no-padding grid-content button-group no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    onClick: this._onSubmit.bind(this),
                                    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()("button")
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.adjust" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    onClick: function onClick(e) {
                                        e.preventDefault();
                                        _this2.setState(_this2._initialState(_this2.props));
                                    },
                                    className: "button hollow primary"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.reset" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BorrowModalContent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BorrowModalContent.propTypes = {
    quote_asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAsset.isRequired,
    bitasset_balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject,
    backing_asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAsset.isRequired,
    backing_balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject,
    call_orders: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObjectsList,
    hasCallOrders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

BorrowModalContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(BorrowModalContent);

/* This wrapper class appears to be necessary because the decorator eats the show method from refs */

var ModalWrapper = function (_React$Component2) {
    _inherits(ModalWrapper, _React$Component2);

    function ModalWrapper() {
        _classCallCheck(this, ModalWrapper);

        var _this3 = _possibleConstructorReturn(this, (ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call(this));

        _this3.state = {
            smallScreen: false,
            open: false
        };
        return _this3;
    }

    _createClass(ModalWrapper, [{
        key: "show",
        value: function show() {
            var _this4 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default.a.publish(_this4.props.modalId, "open");
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ open: false });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                smallScreen: window.innerHeight <= 800
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                quote_asset = _props2.quote_asset,
                backing_asset = _props2.backing_asset,
                account = _props2.account;

            var accountBalance = account.get("balances").toJS();
            var coreBalance = void 0,
                bitAssetBalance = void 0;

            if (accountBalance) {
                for (var id in accountBalance) {
                    if (id === backing_asset) {
                        coreBalance = accountBalance[id];
                    }

                    if (id === quote_asset) {
                        bitAssetBalance = accountBalance[id];
                    }
                }
            }

            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _BaseModal__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                    id: this.props.modalId,
                    overlay: true,
                    onClose: this.onClose.bind(this),
                    ref: this.props.modalId
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BorrowModalContent, {
                        quote_asset: quote_asset,
                        call_orders: account.get("call_orders", Object(immutable__WEBPACK_IMPORTED_MODULE_19__["List"])()).toList(),
                        hasCallOrders: account.get("call_orders") && account.get("call_orders").size > 0,
                        modalId: this.props.modalId,
                        bitasset_balance: bitAssetBalance,
                        backing_balance: coreBalance,
                        backing_asset: backing_asset,
                        hide_help: this.state.smallScreen,
                        account: account
                    })
                )
            );
        }
    }]);

    return ModalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalWrapper);

/***/ })

}]);
//# sourceMappingURL=account~exchange.js.map