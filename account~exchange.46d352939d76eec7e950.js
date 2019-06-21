(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 2400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRow", function() { return OrderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpenOrders", function() { return MyOpenOrders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(716);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2401);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2422);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2438);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2424);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(702);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2185);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(774);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(407);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(573);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2439);
/* harmony import */ var _Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2440);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2306);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2238);
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
                "tr",
                null,
                isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { id: "cancelAllOrders", style: { cursor: "pointer" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.cancel" })
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.trade" })
                ),
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
                isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "text-center" },
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
                ) : null,
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
                )
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

/***/ 2422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2185);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2423);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2424);
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

/***/ 2438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(558);
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

/***/ 2440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPrice", function() { return MarketPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStats", function() { return MarketStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2186);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2235);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(760);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(558);
/* harmony import */ var _FormattedPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2306);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2234);
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

/***/ 2458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1959);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(558);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1833);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1832);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(556);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2238);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2202);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2205);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(774);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1818);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(572);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2185);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(407);
/* harmony import */ var _Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2215);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(707);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(560);


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(414).Buffer))

/***/ }),

/***/ 2459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(709);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1959);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(558);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1833);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1832);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2238);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2202);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2204);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2205);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(774);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1818);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(707);
/* harmony import */ var _Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2188);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(760);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(701);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(702);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2222);
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

/***/ 2502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(709);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1959);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1965);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1832);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2238);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1833);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1969);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(558);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1968);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2200);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(577);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(581);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2306);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2016);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(407);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(774);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(837);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__);


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
                var debt = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.debt, props.quote_asset);
                var collateral = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.collateral, props.backing_asset);

                var target_collateral_ratio = !isNaN(currentPosition.target_collateral_ratio) ? currentPosition.target_collateral_ratio / 1000 : 0;

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
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_8___default.a.rebuild();
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
            return !common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].are_equal_shallow(nextState, this.state) || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.quote_asset, this.props.quote_asset) || !nextProps.backing_asset.get("symbol") === this.props.backing_asset.get("symbol") || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.account, this.props.account) || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.call_orders, this.props.call_orders);
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
                initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.collateral, this.props.backing_asset);
            }

            // Make sure we don't go over the maximum collateral ratio
            var maximizedCollateral = Math.floor(Math.min(this.props.backing_balance.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset) + initialCollateral - 10, this.state.short_amount / this._getFeedPrice() * 1000.0));

            this._onCollateralChange(new Object({ amount: maximizedCollateral.toString() }));
        }
    }, {
        key: "_maximizeDebt",
        value: function _maximizeDebt() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
            var initialCollateral = 0;

            if (currentPosition.collateral) {
                initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.collateral, this.props.backing_asset);
            }

            var maximumCollateral = this.props.backing_balance.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset) + initialCollateral - 10;
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

            var short_amount = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(Math.max(currentPosition.debt - this.props.bitasset_balance.get("balance"), 0), this.props.quote_asset);

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

            if (parseFloat(newState.collateral) - original_position.collateral > common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(backing_balance.balance, this.props.backing_asset.toJS())) {
                errors.collateral_balance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.collateral");
            }

            // let sqp = this.props.quote_asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;

            if (isOriginalBelowMCR && newState.short_amount > original_position.debt) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.increased_debt_on_margin_call");
            } else if (isOriginalBelowMCR && parseFloat(newState.collateral_ratio) <= parseFloat(originalCR)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.below_ratio_mcr_update", { ocr: originalCR.toFixed(4) });
            } else if (!isOriginalBelowMCR && parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.below", { mr: maintenanceRatio });
            } else if (parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio + 0.5)) {
                errors.close_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.close", { mr: maintenanceRatio });
            }

            this.setState({ errors: errors });
        }
    }, {
        key: "_onSubmit",
        value: function _onSubmit(e) {
            e.preventDefault();

            var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.quote_asset.get("precision"));
            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset.get("precision"));
            var currentPosition = this._getCurrentPosition(this.props);

            var isTCR = typeof this.state.target_collateral_ratio !== "undefined" && this.state.target_collateral_ratio > 0 && this.state.useTargetCollateral ? true : false;

            var extensionsProp = false;

            if (isTCR) {
                extensionsProp = {
                    target_collateral_ratio: parseInt(this.state.target_collateral_ratio * 1000, 10)
                };
            }

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_15__["default"].new_transaction();
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
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__["default"].process_transaction(tr, null, true).catch(function (err) {
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

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_price(this.props.quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]), this.props.backing_asset, this.props.quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]), this.props.quote_asset);
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
                original_position = _state2.original_position,
                useTargetCollateral = _state2.useTargetCollateral;

            var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.quote_asset.get("precision"));
            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset.get("precision"));

            if (!collateral_ratio || isNaN(collateral_ratio) || !(collateral_ratio > 0.0 && collateral_ratio < 1000.0)) collateral_ratio = 0;
            bitasset_balance = !bitasset_balance ? { balance: 0, id: null } : bitasset_balance.toJS();
            backing_balance = !backing_balance ? { balance: 0, id: null } : backing_balance.toJS();

            var collateralClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("form-group", {
                "has-error": errors.collateral_balance
            });
            var collateralRatioClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("form-group", { "has-error": errors.below_maintenance }, { "has-warning": errors.close_maintenance });

            // Dynamically update user's remaining collateral
            var currentPosition = this._getCurrentPosition(this.props);
            var backingBalance = backing_balance.id ? bitsharesjs__WEBPACK_IMPORTED_MODULE_21__["ChainStore"].getObject(backing_balance.id) : null;
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
                    bitasset_balance.id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_14__["default"], { balance: bitasset_balance.id }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.maximize_debt_set_ratio_slider")
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
                    backing_balance.id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        amount: remainingBalance,
                        asset: backing_asset.get("id")
                    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                        this.props.hide_help ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
                                this.state.newPosition ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                    onClick: this.toggleLockedCR.bind(this),
                                    name: !this.state.lockedCR ? "locked" : "unlocked",
                                    size: "1_5x",
                                    style: { position: "relative", top: -10 }
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                    onClick: this.toggleLockedCR.bind(this),
                                    name: this.state.lockedCR ? "locked" : "unlocked",
                                    size: "1_5x",
                                    style: { position: "relative", top: -10 }
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
                                                "data-place": "top",
                                                "data-html": true,
                                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("tooltip.target_collateral_ratio")
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                                name: "question-circle",
                                                title: "icons.question_circle"
                                            })
                                        )
                                    ),
                                    useTargetCollateral ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    marginBottom: "1em"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Checkbox"],
                                                {
                                                    onClick: this._setUseTargetCollateral.bind(this),
                                                    checked: true
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.enable_target_collateral_ratio" })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
                                        )
                                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { style: { marginBottom: "1em" } },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Checkbox"],
                                            {
                                                onClick: this._setUseTargetCollateral.bind(this)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.enable_target_collateral_ratio" })
                                        )
                                    )
                                )
                            )
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "no-padding grid-content button-group no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    onClick: this._onSubmit.bind(this),
                                    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()("button")
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

BorrowModalContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(BorrowModalContent);

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
                        call_orders: account.get("call_orders", Object(immutable__WEBPACK_IMPORTED_MODULE_20__["List"])()).toList(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZS40NmQzNTI5MzlkNzZlZWM3ZTk1MC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NeU9wZW5PcmRlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9PcGVuU2V0dGxlT3JkZXJzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QcmljZVRleHQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L01hcmtldFByaWNlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL1NpbXBsZURlcG9zaXRXaXRoZHJhdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9TaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Nb2RhbC9Cb3Jyb3dNb2RhbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XHJcbmltcG9ydCBPcGVuU2V0dGxlT3JkZXJzIGZyb20gXCIuL09wZW5TZXR0bGVPcmRlcnNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUHJpY2VUZXh0IGZyb20gXCIuLi9VdGlsaXR5L1ByaWNlVGV4dFwiO1xyXG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7TGltaXRPcmRlciwgQ2FsbE9yZGVyfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IHtFcXVpdmFsZW50VmFsdWVDb21wb25lbnR9IGZyb20gXCIuLi9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01hcmtldFByaWNlfSBmcm9tIFwiLi4vVXRpbGl0eS9NYXJrZXRQcmljZVwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcclxuY29uc3QgbGVmdEFsaWduID0ge3RleHRBbGlnbjogXCJsZWZ0XCJ9O1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XHJcblxyXG5jbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtiYXNlU3ltYm9sLCBxdW90ZVN5bWJvbCwgZGFzaGJvYXJkLCBpc015QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gIWRhc2hib2FyZCA/IChcclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogdGhpcy5wcm9wcy5sZWZ0QWxpZ24gPyBcImxlZnRcIiA6IFwiXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGVmdEFsaWduID8ge3RleHRBbGlnbjogXCJsZWZ0XCJ9IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFzZVN5bWJvbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlU3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxlZnRBbGlnbiA/IHt0ZXh0QWxpZ246IFwibGVmdFwifSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2wgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlU3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogdGhpcy5wcm9wcy5sZWZ0QWxpZ24gPyBcImxlZnRcIiA6IFwiXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uZXhwaXJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogXCI2JVwifX0gLz5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAge2lzTXlBY2NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBpZD1cImNhbmNlbEFsbE9yZGVyc1wiIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50cmFkZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLm9yZGVyX2lkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbn0gY29sU3Bhbj1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5kZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VfbWFya2V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuVGFibGVIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcXVvdGVTeW1ib2w6IG51bGwsXHJcbiAgICBiYXNlU3ltYm9sOiBudWxsXHJcbn07XHJcblxyXG5jbGFzcyBPcmRlclJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV4dFByb3BzLm9yZGVyLmZvcl9zYWxlICE9PSB0aGlzLnByb3BzLm9yZGVyLmZvcl9zYWxlIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5vcmRlci5pZCAhPT0gdGhpcy5wcm9wcy5vcmRlci5pZCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGUgIT09IHRoaXMucHJvcHMucXVvdGUgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2UgIT09IHRoaXMucHJvcHMuYmFzZSB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMub3JkZXIubWFya2V0X2Jhc2UgIT09IHRoaXMucHJvcHMub3JkZXIubWFya2V0X2Jhc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgIHNob3dTeW1ib2xzLFxyXG4gICAgICAgICAgICBkYXNoYm9hcmQsXHJcbiAgICAgICAgICAgIGlzTXlBY2NvdW50LFxyXG4gICAgICAgICAgICBzZXR0aW5nc1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGlzQmlkID0gb3JkZXIuaXNCaWQoKTtcclxuICAgICAgICBjb25zdCBpc0NhbGwgPSBvcmRlci5pc0NhbGwoKTtcclxuICAgICAgICBsZXQgdGRDbGFzcyA9IGlzQ2FsbFxyXG4gICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5Q2FsbFwiXHJcbiAgICAgICAgICAgIDogaXNCaWRcclxuICAgICAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlCaWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2VTeW1ib2wgPSBzaG93U3ltYm9scyA/IChcclxuICAgICAgICAgICAgPHNwYW4+e2AgJHtiYXNlLmdldChcInN5bWJvbFwiKX0vJHtxdW90ZS5nZXQoXCJzeW1ib2xcIil9YH08L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgICAgbGV0IHZhbHVlU3ltYm9sID0gc2hvd1N5bWJvbHMgPyBcIiBcIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpIDogbnVsbDtcclxuICAgICAgICBsZXQgYW1vdW50U3ltYm9sID0gc2hvd1N5bWJvbHMgPyBcIiBcIiArIHF1b3RlLmdldChcInN5bWJvbFwiKSA6IG51bGw7XHJcbiAgICAgICAgbGV0IHByZWZlcnJlZFVuaXQgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmdldChcInVuaXRcIikgOiBcIjEuMy4wXCI7XHJcbiAgICAgICAgbGV0IHF1b3RlQ29sb3IgPSAhaXNCaWQgPyBcInZhbHVlIG5lZ2F0aXZlXCIgOiBcInZhbHVlIHBvc2l0aXZlXCI7XHJcbiAgICAgICAgbGV0IGJhc2VDb2xvciA9IGlzQmlkID8gXCJ2YWx1ZSBuZWdhdGl2ZVwiIDogXCJ2YWx1ZSBwb3NpdGl2ZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gIWRhc2hib2FyZCA/IChcclxuICAgICAgICAgICAgPHRyIGtleT17b3JkZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dGRDbGFzc30gc3R5bGU9e3twYWRkaW5nTGVmdDogMTB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtvcmRlci5nZXRQcmljZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJpY2VTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0JpZCA/IFwiYW1vdW50Rm9yU2FsZVwiIDogXCJhbW91bnRUb1JlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHthbW91bnRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0JpZCA/IFwiYW1vdW50VG9SZWNlaXZlXCIgOiBcImFtb3VudEZvclNhbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCIsIHRleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17b3JkZXIuZXhwaXJhdGlvbi50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0NhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQubG9jYWxpemUobmV3IERhdGUob3JkZXIuZXhwaXJhdGlvbiksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJzaG9ydF9jdXN0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6IFwiNiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0NhbGwgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1jYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3Jvc3MtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmNyb3NzX2NpcmNsZS5jYW5jZWxfb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHRyIGtleT17b3JkZXIuaWR9IGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAge2lzTXlBY2NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNDYWxsID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJDYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoZWNrQ2FuY2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke3F1b3RlLmdldChcInN5bWJvbFwiKX1fJHtiYXNlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnRyYWRlLnRyYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdEFsaWdufT4je29yZGVyLmlkLnN1YnN0cmluZyg0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI0XCIgc3R5bGU9e2xlZnRBbGlnbn0gb25DbGljaz17dGhpcy5wcm9wcy5vbkZsaXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0JpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLmJ1eV9kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldD17dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZU5hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M9e3F1b3RlQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzPXtiYXNlQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnNlbGxfZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYW1vdW50VG9SZWNlaXZlXCIgOiBcImFtb3VudEZvclNhbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRGb3JTYWxlXCIgOiBcImFtb3VudFRvUmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzPXtxdW90ZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17YmFzZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0QWxpZ259IG9uQ2xpY2s9e3RoaXMucHJvcHMub25GbGlwfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e29yZGVyLnNlbGxQcmljZSgpLmJhc2UuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtvcmRlci5zZWxsUHJpY2UoKS5iYXNlLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e29yZGVyLnNlbGxQcmljZSgpLnF1b3RlLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e29yZGVyLnNlbGxQcmljZSgpLnF1b3RlLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHNcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdEFsaWdufSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQmlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2UuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtiYXNlLmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9sc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17b3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9e29yZGVyLmFtb3VudEZvclNhbGUoKS5hc3NldF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9EZWNpbWFscz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Bc3NldD17cHJlZmVycmVkVW5pdH1cclxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3ByZWZlcnJlZFVuaXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk9yZGVyUm93LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNob3dTeW1ib2xzOiBmYWxzZVxyXG59O1xyXG5cclxuY2xhc3MgTXlPcGVuT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLmFjdGl2ZVRhYlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZ2V0T3JkZXJzID0gdGhpcy5fZ2V0T3JkZXJzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSB0aGlzLnJlZnMuY29udGFpbmVyO1xyXG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyKSBQcy5pbml0aWFsaXplKGNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IHRoaXMucmVmcy5jb250YWluZXI7XHJcbiAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXIpIFBzLnVwZGF0ZShjb250ZW50Q29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0T3JkZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudCwgYmFzZSwgcXVvdGUsIGZlZWRQcmljZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IG9yZGVycyA9IGN1cnJlbnRBY2NvdW50LmdldChcIm9yZGVyc1wiKSxcclxuICAgICAgICAgICAgY2FsbF9vcmRlcnMgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKTtcclxuICAgICAgICBjb25zdCBiYXNlSUQgPSBiYXNlLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBxdW90ZUlEID0gcXVvdGUuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge1xyXG4gICAgICAgICAgICBbYmFzZS5nZXQoXCJpZFwiKV06IHtwcmVjaXNpb246IGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpfSxcclxuICAgICAgICAgICAgW3F1b3RlLmdldChcImlkXCIpXToge3ByZWNpc2lvbjogcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGxpbWl0T3JkZXJzID0gb3JkZXJzXHJcbiAgICAgICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAgICAgLm1hcChvcmRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbyA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KG9yZGVyKTtcclxuICAgICAgICAgICAgICAgIGlmICghbykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsbEJhc2UgPSBvLmdldEluKFtcInNlbGxfcHJpY2VcIiwgXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxRdW90ZSA9IG8uZ2V0SW4oW1wic2VsbF9wcmljZVwiLCBcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxsQmFzZSA9PT0gYmFzZUlEICYmIHNlbGxRdW90ZSA9PT0gcXVvdGVJRCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoc2VsbEJhc2UgPT09IHF1b3RlSUQgJiYgc2VsbFF1b3RlID09PSBiYXNlSUQpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpbWl0T3JkZXIoby50b0pTKCksIGFzc2V0cywgcXVvdGUuZ2V0KFwiaWRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKTtcclxuXHJcbiAgICAgICAgbGV0IGNhbGxPcmRlcnMgPSBjYWxsX29yZGVyc1xyXG4gICAgICAgICAgICAudG9BcnJheSgpXHJcbiAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbyA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KG9yZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW8pIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxsQmFzZSA9IG8uZ2V0SW4oW1wiY2FsbF9wcmljZVwiLCBcImJhc2VcIiwgXCJhc3NldF9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxRdW90ZSA9IG8uZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsX3ByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsbEJhc2UgPT09IGJhc2VJRCAmJiBzZWxsUXVvdGUgPT09IHF1b3RlSUQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxsQmFzZSA9PT0gcXVvdGVJRCAmJiBzZWxsUXVvdGUgPT09IGJhc2VJRClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZlZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgQ2FsbE9yZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby50b0pTKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pc01hcmdpbkNhbGxlZCgpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGltaXRPcmRlcnMuY29uY2F0KGNhbGxPcmRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGFuZ2VUYWIodGFiKSB7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgb3JkZXJzVGFiOiB0YWJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgZm9jdXMgZ29lcyBiYWNrIHRvIHRvcCBvZiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRhYiBpcyBjaGFuZ2VkXHJcbiAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSB0aGlzLnJlZnMuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBQcy51cGRhdGUoY29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoUmVhY3RUb29sdGlwLnJlYnVpbGQsIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlLCBxdW90ZVN5bWJvbCwgYmFzZVN5bWJvbCwgc2V0dGxlT3JkZXJzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHthY3RpdmVUYWJ9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCFiYXNlIHx8ICFxdW90ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyO1xyXG5cclxuICAgICAgICAvLyBJcyBhc3NldCBhIEJpdEFzc2V0IHdpdGggU2V0dGxlbWVudHNcclxuICAgICAgICBsZXQgYmFzZUlzQml0QXNzZXQgPVxyXG4gICAgICAgICAgICBiYXNlLmdldChcImJpdGFzc2V0X2RhdGFfaWRcIikgJiYgc2V0dGxlT3JkZXJzLnNpemUgPiAwXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IHF1b3RlSXNCaXRBc3NldCA9XHJcbiAgICAgICAgICAgIHF1b3RlLmdldChcImJpdGFzc2V0X2RhdGFfaWRcIikgJiYgc2V0dGxlT3JkZXJzLnNpemUgPiAwXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIERlZmF1bHQgVGFiXHJcbiAgICAgICAgaWYgKCFhY3RpdmVUYWIgfHwgKCFiYXNlSXNCaXRBc3NldCAmJiAhcXVvdGVJc0JpdEFzc2V0KSkge1xyXG4gICAgICAgICAgICBhY3RpdmVUYWIgPSBcIm15X29yZGVyc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvKiBVc2VycyBPcGVuIE9yZGVycyBUYWIgKGRlZmF1bHQpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3RpdmVUYWIgPT0gXCJteV9vcmRlcnNcIikge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlcnMgPSB0aGlzLl9nZXRPcmRlcnMoKTtcclxuICAgICAgICAgICAgbGV0IGVtcHR5Um93ID0gKFxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19IGNvbFNwYW49XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQubm9fb3JkZXJzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBiaWRzID0gb3JkZXJzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlzQmlkKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5nZXRQcmljZSgpIC0gYS5nZXRQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmljZSA9IG9yZGVyLmdldFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLm9uQ2FuY2VsLmJpbmQodGhpcywgb3JkZXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhc2tzID0gb3JkZXJzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhYS5pc0JpZCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0UHJpY2UoKSAtIGIuZ2V0UHJpY2UoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKG9yZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBvcmRlci5nZXRQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlclJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcmRlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5vbkNhbmNlbC5iaW5kKHRoaXMsIG9yZGVyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFza3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzID0gcm93cy5jb25jYXQoYXNrcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiaWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcm93cyA9IHJvd3MuY29uY2F0KGJpZHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByb3dzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLnByb3BzLnByaWNlIC0gYi5wcm9wcy5wcmljZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyID0gKFxyXG4gICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyIGNvbXBvbmVudD1cInRib2R5XCIgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cm93cy5sZW5ndGggPyByb3dzIDogZW1wdHlSb3d9XHJcbiAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvKiBPcGVuIFNldHRsZSBPcmRlcnMgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVUYWIgJiYgYWN0aXZlVGFiID09IFwib3Blbl9zZXR0bGVtZW50XCIpIHtcclxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lciA9IChcclxuICAgICAgICAgICAgICAgIDxPcGVuU2V0dGxlT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwic2V0dGxlX29yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJzPXtzZXR0bGVPcmRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbD17cXVvdGVTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhjID0gXCJteW1hcmtldHMtaGVhZGVyIGNsaWNrYWJsZVwiO1xyXG4gICAgICAgIGxldCBteU9yZGVyc0NsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6IGFjdGl2ZVRhYiAhPT0gXCJteV9vcmRlcnNcIn0pO1xyXG4gICAgICAgIGxldCBvcGVuU2V0dGxlbWVudENsYXNzID0gY25hbWVzKGhjLCB7XHJcbiAgICAgICAgICAgIGluYWN0aXZlOiBhY3RpdmVUYWIgIT09IFwib3Blbl9zZXR0bGVtZW50XCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgbXlPcmRlcnNXaWR0aCA9IGJhc2VJc0JpdEFzc2V0IHx8IHF1b3RlSXNCaXRBc3NldCA/IFwiNTAlXCIgOiBcIjEwMCVcIjtcclxuICAgICAgICBsZXQgb3BlblNldHRsZW1lbnRXaWR0aCA9XHJcbiAgICAgICAgICAgIGJhc2VJc0JpdEFzc2V0IHx8IHF1b3RlSXNCaXRBc3NldCA/IFwiaW5oZXJpdFwiIDogXCJub25lXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjE1cHhcIn19XHJcbiAgICAgICAgICAgICAgICBrZXk9XCJvcGVuX29yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtYm9yZGVyZWQgc21hbGwtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBcImF1dG9cIiwgbWluSGVpZ2h0OiAyNjZ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgbGVmdC1vcmRlcmJvb2staGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IG15T3JkZXJzV2lkdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtteU9yZGVyc0NsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcywgXCJteV9vcmRlcnNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm15X29yZGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IG9wZW5TZXR0bGVtZW50V2lkdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuU2V0dGxlbWVudENsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZW5fc2V0dGxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zZXR0bGVfb3JkZXJzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgbWFya2V0LXJpZ2h0LXBhZGRpbmctb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGV4dC1yaWdodCBmaXhlZC10YWJsZSBtYXJrZXQtcmlnaHQtcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PSBcIm15X29yZGVyc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodEFsaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2w9e3F1b3RlU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGVTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lciBncmlkLWJsb2NrIG1hcmtldC1yaWdodC1wYWRkaW5nLW9ubHkgbm8tb3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93OiBcImhpZGRlblwiLCBtYXhIZWlnaHQ6IDIwMH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGV4dC1yaWdodCBmaXhlZC10YWJsZSBtYXJrZXQtcmlnaHQtcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTXlPcGVuT3JkZXJzLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGJhc2U6IHt9LFxyXG4gICAgcXVvdGU6IHt9LFxyXG4gICAgb3JkZXJzOiB7fSxcclxuICAgIHF1b3RlU3ltYm9sOiBcIlwiLFxyXG4gICAgYmFzZVN5bWJvbDogXCJcIlxyXG59O1xyXG5cclxuTXlPcGVuT3JkZXJzLnByb3BUeXBlcyA9IHtcclxuICAgIGJhc2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHF1b3RlU3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBiYXNlU3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCB7T3JkZXJSb3csIFRhYmxlSGVhZGVyLCBNeU9wZW5PcmRlcnN9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBnZXRMb2NhbGUgZnJvbSBcImJyb3dzZXItbG9jYWxlXCI7XHJcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xyXG5cclxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7YmFzZVN5bWJvbCwgcXVvdGVTeW1ib2x9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlU3ltYm9sID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lIG5hbWU9e2Jhc2VTeW1ib2x9IC8+LzxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGVTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZVN5bWJvbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEFzc2V0TmFtZSBuYW1lPXtxdW90ZVN5bWJvbH0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uc2V0dGxlbWVudF9kYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblRhYmxlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHF1b3RlU3ltYm9sOiBudWxsLFxyXG4gICAgYmFzZVN5bWJvbDogbnVsbFxyXG59O1xyXG5cclxuY2xhc3MgU2V0dGxlT3JkZXJSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7YmFzZSwgcXVvdGUsIG9yZGVyLCBzaG93U3ltYm9sc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPVxyXG4gICAgICAgICAgICBiYXNlLmdldChcImlkXCIpID09IFwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgPyBvcmRlci5nZXRQcmljZSgpIC8gKDEgKyBvcmRlci5vZmZzZXRfcGVyY2VudCAvIDEwMDAwKVxyXG4gICAgICAgICAgICAgICAgOiBvcmRlci5nZXRQcmljZSgpICogKDEgKyBvcmRlci5vZmZzZXRfcGVyY2VudCAvIDEwMDAwKTtcclxuICAgICAgICBsZXQgYW1vdW50U3ltYm9sID0gc2hvd1N5bWJvbHMgPyBcIiBcIiArIHF1b3RlLmdldChcInN5bWJvbFwiKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBzdHlsZT17e3BhZGRpbmdSaWdodDogNX19PlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjI1JVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIocHJpY2UsIHF1b3RlLmdldChcInByZWNpc2lvblwiKSl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHthbW91bnRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjI1JVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW9yZGVyLmlzQmlkKCkgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB3aWR0aDogXCIyNSVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFvcmRlci5pc0JpZCgpID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjI1JVwifX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17bmV3IERhdGUob3JkZXIuc2V0dGxlbWVudF9kYXRlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQubG9jYWxpemUobmV3IERhdGUob3JkZXIuc2V0dGxlbWVudF9kYXRlKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TG9jYWxlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKFwiZW4tdXNcIikgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1hcmtldF9oaXN0b3J5X3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibWFya2V0X2hpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5TZXR0bGVPcmRlclJvdy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzaG93U3ltYm9sczogZmFsc2UsXHJcbiAgICBpbnZlcnQ6IGZhbHNlXHJcbn07XHJcblxyXG5jbGFzcyBPcGVuU2V0dGxlT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLm9yZGVycyAhPT0gdGhpcy5wcm9wcy5vcmRlcnNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge29yZGVycywgYmFzZSwgcXVvdGV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZU9yZGVycyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChvcmRlcnMuc2l6ZSA+IDAgJiYgYmFzZSAmJiBxdW90ZSkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICAgYWN0aXZlT3JkZXJzID0gb3JkZXJzXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlzQmVmb3JlKGIpID8gLTEgOiAxO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpIDwgb3JkZXIuc2V0dGxlbWVudF9kYXRlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGxlT3JkZXJSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlciBjb21wb25lbnQ9XCJ0Ym9keVwiIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCI+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlT3JkZXJzfVxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk9wZW5TZXR0bGVPcmRlcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYmFzZToge30sXHJcbiAgICBxdW90ZToge30sXHJcbiAgICBvcmRlcnM6IHt9LFxyXG4gICAgcXVvdGVTeW1ib2w6IFwiXCIsXHJcbiAgICBiYXNlU3ltYm9sOiBcIlwiXHJcbn07XHJcblxyXG5PcGVuU2V0dGxlT3JkZXJzLnByb3BUeXBlcyA9IHtcclxuICAgIGJhc2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHF1b3RlU3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBiYXNlU3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5TZXR0bGVPcmRlcnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuXHJcbmNsYXNzIFByaWNlVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtwcmljZSwgcHJlRm9ybWF0dGVkUHJpY2UsIHF1b3RlLCBiYXNlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKCFwcmljZSAmJiAhcHJlRm9ybWF0dGVkUHJpY2UpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWRQcmljZSA9ICEhcHJlRm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgPyBwcmVGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICA6IHV0aWxzLnByaWNlX3RvX3RleHQocHJpY2UsIHF1b3RlLCBiYXNlKTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1hdHRlZFByaWNlLmZ1bGwgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtaW50ZWdlclwiPntmb3JtYXR0ZWRQcmljZS5pbnR9Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1pbnRlZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdHRlZFByaWNlLmZ1bGwgPj0gMC4xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+e2Zvcm1hdHRlZFByaWNlLmludH0uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWludGVnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWRlY2ltYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS50cmFpbGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+e2Zvcm1hdHRlZFByaWNlLmludH0uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWRlY2ltYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWludGVnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS50cmFpbGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VUZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuL0Zvcm1hdHRlZFByaWNlXCI7XHJcbmltcG9ydCBtYXJrZXRVdGlscyBmcm9tIFwiY29tbW9uL21hcmtldF91dGlsc1wiO1xyXG5cclxuY2xhc3MgTWFya2V0U3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHttYXJrZXROYW1lfSA9IG1hcmtldFV0aWxzLmdldE1hcmtldE5hbWUocHJvcHMuYmFzZSwgcHJvcHMucXVvdGUpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1hcmtldE5hbWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja1N0YXRzKG5ld1N0YXRzID0ge2Nsb3NlOiB7fX0sIG9sZFN0YXRzID0ge2Nsb3NlOiB7fX0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXdTdGF0cy52b2x1bWVCYXNlICE9PSBvbGRTdGF0cy52b2x1bWVCYXNlIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRzLmNsb3NlICYmIG5ld1N0YXRzLmNsb3NlLmJhc2UsXHJcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5iYXNlXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdHMuY2xvc2UgJiYgbmV3U3RhdHMuY2xvc2UucXVvdGUsXHJcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5xdW90ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1N0YXRzKFxyXG4gICAgICAgICAgICAgICAgbnAuYWxsTWFya2V0U3RhdHMuZ2V0KHRoaXMuc3RhdGUubWFya2V0TmFtZSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbE1hcmtldFN0YXRzLmdldCh0aGlzLnN0YXRlLm1hcmtldE5hbWUpXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgbnAuYmFzZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlLmdldChcImlkXCIpIHx8XHJcbiAgICAgICAgICAgIG5wLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0c0ludGVydmFsKSB0aGlzLnN0YXRzSW50ZXJ2YWwoKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWFya2V0UHJpY2VJbm5lciBleHRlbmRzIE1hcmtldFN0YXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobnApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2FsbE1hcmtldFN0YXRzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge21hcmtldE5hbWV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBtYXJrZXRTdGF0cyA9IGFsbE1hcmtldFN0YXRzLmdldChtYXJrZXROYW1lKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSBtYXJrZXRTdGF0cyAmJiBtYXJrZXRTdGF0cy5wcmljZSA/IG1hcmtldFN0YXRzLnByaWNlIDogbnVsbDtcclxuICAgICAgICAvLyBpZiAoIXByaWNlICYmIG1hcmtldFN0YXRzSW52ZXJ0ZWQgJiYgbWFya2V0U3RhdHNJbnZlcnRlZC5wcmljZSkge1xyXG4gICAgICAgIC8vICAgICBwcmljZSA9IG1hcmtldFN0YXRzSW52ZXJ0ZWQucHJpY2UuaW52ZXJ0KCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NuYW1lcyhcIlwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICAgICAge3ByaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17cHJpY2UuYmFzZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3ByaWNlLmJhc2UuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cHJpY2UucXVvdGUuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cHJpY2UucXVvdGUuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17dGhpcy5wcm9wcy5mb3JjZV9kaXJlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9scz17dGhpcy5wcm9wcy5oaWRlX3N5bWJvbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk1hcmtldFByaWNlSW5uZXIgPSBBc3NldFdyYXBwZXIoTWFya2V0UHJpY2VJbm5lciwge1xyXG4gICAgcHJvcE5hbWVzOiBbXCJxdW90ZVwiLCBcImJhc2VcIl1cclxufSk7XHJcblxyXG5jbGFzcyBNYXJrZXRQcmljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRQcmljZUlubmVyIHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgIH1cclxufVxyXG5cclxuTWFya2V0UHJpY2UgPSBjb25uZWN0KFxyXG4gICAgTWFya2V0UHJpY2UsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWxsTWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IHtNYXJrZXRQcmljZSwgTWFya2V0U3RhdHN9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xyXG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuLi9Nb2RhbC9CYXNlTW9kYWxcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtcclxuICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyxcclxuICAgIHZhbGlkYXRlQWRkcmVzcyxcclxuICAgIFdpdGhkcmF3QWRkcmVzc2VzLFxyXG4gICAgZ2V0RGVwb3NpdEFkZHJlc3NcclxufSBmcm9tIFwiY29tbW9uL2dhdGV3YXlNZXRob2RzXCI7XHJcbmltcG9ydCBDb3B5QnV0dG9uIGZyb20gXCIuLi9VdGlsaXR5L0NvcHlCdXR0b25cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQge2NoZWNrRmVlU3RhdHVzQXN5bmMsIGNoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQge0RlY2ltYWxDaGVja2VyfSBmcm9tIFwiLi4vRXhjaGFuZ2UvRXhjaGFuZ2VJbnB1dFwiO1xyXG5pbXBvcnQge29wZW5sZWRnZXJBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xyXG5pbXBvcnQge2dldFdhbGxldE5hbWV9IGZyb20gXCJicmFuZGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0IERlcG9zaXRGaWF0T3BlbkxlZGdlciBmcm9tIFwiY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9EZXBvc2l0RmlhdE9wZW5MZWRnZXJcIjtcclxuLy8gaW1wb3J0IFdpdGhkcmF3RmlhdE9wZW5MZWRnZXIgZnJvbSBcImNvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvV2l0aGRyYXdGaWF0T3BlbkxlZGdlclwiO1xyXG5cclxuY2xhc3MgRGVwb3NpdFdpdGhkcmF3Q29udGVudCBleHRlbmRzIERlY2ltYWxDaGVja2VyIHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgc2VuZGVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb3JlQXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBjb3JlQXNzZXQ6IFwiMS4zLjBcIixcclxuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9BZGRyZXNzOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KHByb3BzLndhbGxldFR5cGUpLFxyXG4gICAgICAgICAgICB3aXRoZHJhd1ZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBhbW91bnRFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgc3ltYm9sOiBwcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIiksXHJcbiAgICAgICAgICAgIHRvX3dpdGhkcmF3OiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLmFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZDogXCIxLjMuMFwiLFxyXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZW1wdHlBZGRyZXNzRGVwb3NpdDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModGhpcy5zdGF0ZS50b0FkZHJlc3MsIHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGREZXBvc2l0QWRkcmVzcyA9IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cyA9IHRoaXMuX2NoZWNrRmVlU3RhdHVzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZ2V0Q3VycmVudEJhbGFuY2UgPSB0aGlzLl9nZXRDdXJyZW50QmFsYW5jZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2dldEZlZSA9IHRoaXMuX2dldEZlZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUZlZSA9IGRlYm91bmNlKHRoaXMuX3VwZGF0ZUZlZS5iaW5kKHRoaXMpLCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzcygpO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5wLmFzc2V0ICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgJiZcclxuICAgICAgICAgICAgbnAuYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b193aXRoZHJhdzogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IG5wLmFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IG5wLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhdGVGZWU6IG5wLmFzc2V0LmdldChcImdhdGVGZWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlQWNjb3VudDogbnAuYXNzZXQuZ2V0KFwiaW50ZXJtZWRpYXRlQWNjb3VudFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IG5wLmFzc2V0LmdldChcInN5bWJvbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBtZW1vOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvQWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChucC53YWxsZXRUeXBlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldERlcG9zaXRBZGRyZXNzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXREZXBvc2l0QWRkcmVzcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmFja2luZ0NvaW5UeXBlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSBnZXREZXBvc2l0QWRkcmVzcyh7XHJcbiAgICAgICAgICAgIGNvaW46IGBvcGVuLiR7dGhpcy5wcm9wcy5iYWNraW5nQ29pblR5cGUudG9Mb3dlckNhc2UoKX1gLFxyXG4gICAgICAgICAgICBhY2NvdW50OiB0aGlzLnByb3BzLmFjY291bnQsXHJcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcclxuICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlX2FkZHJlc3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXREZXBvc2l0T2JqZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IHRoaXMucHJvcHMuYmFja2luZ0NvaW5UeXBlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiB0aGlzLnByb3BzLnN5bWJvbC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiB0aGlzLnByb3BzLnNlbmRlci5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiB0aGlzLmFkZERlcG9zaXRBZGRyZXNzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3NMb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBlbXB0eUFkZHJlc3NEZXBvc2l0OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERlcG9zaXRBZGRyZXNzKHJlY2VpdmVfYWRkcmVzcykge1xyXG4gICAgICAgIGlmIChyZWNlaXZlX2FkZHJlc3MuZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLmVycm9yLm1lc3NhZ2UgPT09IFwibm9fYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2V0U3RhdGUoe2VtcHR5QWRkcmVzc0RlcG9zaXQ6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHtlbXB0eUFkZHJlc3NEZXBvc2l0OiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmdldEFtb3VudCgpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFtb3VudEVycm9yOiBcInRyYW5zZmVyLmVycm9ycy5wb3NcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pbnRlcm1lZGlhdGVBY2NvdW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGZlZSA9IHRoaXMuX2dldEZlZSgpO1xyXG4gICAgICAgIGNvbnN0IGdhdGVGZWUgPSB0aGlzLl9nZXRHYXRlRmVlKCk7XHJcblxyXG4gICAgICAgIGxldCBzZW5kQW1vdW50ID0gdGhpcy5zdGF0ZS50b193aXRoZHJhdy5jbG9uZSgpO1xyXG5cclxuICAgICAgICBsZXQgYmFsYW5jZUFtb3VudCA9IHNlbmRBbW91bnQuY2xvbmUoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEN1cnJlbnRCYWxhbmNlKCkuZ2V0KFwiYmFsYW5jZVwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNlbmRBbW91bnQucGx1cyhnYXRlRmVlKTtcclxuXHJcbiAgICAgICAgLyogSW5zdWZmaWNpZW50IGJhbGFuY2UgKi9cclxuICAgICAgICBpZiAoYmFsYW5jZUFtb3VudC5sdChzZW5kQW1vdW50KSkge1xyXG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBvcmlnaW5hbGx5IGVudGVyZWQgYW1vdW50XHJcbiAgICAgICAgICAgIHNlbmRBbW91bnQgPSB0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmNsb25lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kZXIuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW50ZXJtZWRpYXRlQWNjb3VudCxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5nZXRBbW91bnQoKSxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5hc3NldF9pZCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQ29pblR5cGUudG9Mb3dlckNhc2UoKSArXHJcbiAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvQWRkcmVzcyArXHJcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5tZW1vXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIjpcIiArIG5ldyBCdWZmZXIodGhpcy5zdGF0ZS5tZW1vLCBcInV0Zi04XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgZmVlLmFzc2V0X2lkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlQW1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGZlZUFtb3VudCA9IHRoaXMuX2dldEZlZSgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCYWxhbmNlID0gdGhpcy5fZ2V0Q3VycmVudEJhbGFuY2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYW1vdW50OiBjdXJyZW50QmFsYW5jZSA/IGN1cnJlbnRCYWxhbmNlLmdldChcImJhbGFuY2VcIikgOiAwLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdWJ0cmFjdCB0aGUgZmVlIGlmIGl0IGlzIHVzaW5nIHRoZSBzYW1lIGFzc2V0XHJcbiAgICAgICAgaWYgKHRvdGFsLmFzc2V0X2lkID09PSBmZWVBbW91bnQuYXNzZXRfaWQpIHtcclxuICAgICAgICAgICAgdG90YWwubWludXMoZmVlQW1vdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuc2V0QW1vdW50KHtzYXRzOiB0b3RhbC5nZXRBbW91bnQoKX0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IHRvdGFsLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tGZWVTdGF0dXMoYWNjb3VudCA9IHRoaXMucHJvcHMuc2VuZGVyKSB7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IFtcIjEuMy4wXCIsIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuYXNzZXRfaWRdO1xyXG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcclxuICAgICAgICBsZXQgcCA9IFtdO1xyXG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICBwLnB1c2goXHJcbiAgICAgICAgICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdDb2luVHlwZS50b0xvd2VyQ2FzZSgpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9BZGRyZXNzICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW8gPyBcIjpcIiArIHRoaXMuc3RhdGUubWVtbyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBQcm9taXNlLmFsbChwKVxyXG4gICAgICAgICAgICAudGhlbihzdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1thXSA9IHN0YXR1c1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHRoaXMuc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlRmVlKGZlZV9hc3NldF9pZCA9IHRoaXMuc3RhdGUuZmVlX2Fzc2V0X2lkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNlbmRlcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XHJcbiAgICAgICAgICAgIGFjY291bnRJRDogdGhpcy5wcm9wcy5zZW5kZXIuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIGZlZUlEOiBmZWVfYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ0NvaW5UeXBlLnRvTG93ZXJDYXNlKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvQWRkcmVzcyArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUubWVtbyA/IFwiOlwiICsgdGhpcy5zdGF0ZS5tZW1vIDogXCJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHtmZWUsIGhhc0JhbGFuY2UsIGhhc1Bvb2xCYWxhbmNlfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0JhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUG9vbEJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEN1cnJlbnRCYWxhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJhbGFuY2VzLmZpbmQoYiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiICYmIGIuZ2V0KFwiYXNzZXRfdHlwZVwiKSA9PT0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tCYWxhbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIHRvX3dpdGhkcmF3fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZSA9IHRoaXMuX2dldEN1cnJlbnRCYWxhbmNlKCk7XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlIHx8ICFmZWVBbW91bnQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxyXG4gICAgICAgICAgICB0b193aXRoZHJhdy5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgYXNzZXQsXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZSgpLFxyXG4gICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRHYXRlRmVlKClcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yICE9PSAhaGFzQmFsYW5jZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RmVlKCkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRGZWUgPSB7XHJcbiAgICAgICAgICAgIGdldEFtb3VudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuc3RhdGUuZmVlX2Fzc2V0X2lkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZlZVN0YXR1cyB8fCAhdGhpcy5zdGF0ZS5mZWVBbW91bnQpIHJldHVybiBkZWZhdWx0RmVlO1xyXG5cclxuICAgICAgICBjb25zdCBjb3JlU3RhdHVzID0gdGhpcy5zdGF0ZS5mZWVTdGF0dXNbXCIxLjMuMFwiXTtcclxuICAgICAgICBjb25zdCB3aXRoZHJhd0Fzc2V0U3RhdHVzID0gdGhpcy5zdGF0ZS5mZWVTdGF0dXNbXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuYXNzZXRfaWRcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIFVzZSBjb3JlIGFzc2V0IHRvIHBheSB0aGUgZmVlcyBpZiBwcmVzZW50IGFuZCBiYWxhbmNlIGlzIHN1ZmZpY2llbnQgc2luY2UgaXQncyBjaGVhcGVzdFxyXG4gICAgICAgIGlmIChjb3JlU3RhdHVzICYmIGNvcmVTdGF0dXMuaGFzQmFsYW5jZSkgcmV0dXJuIGNvcmVTdGF0dXMuZmVlO1xyXG4gICAgICAgIC8vIFVzZSBzYW1lIGFzc2V0IGFzIHdpdGhkcmF3IGlmIG5vdFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY29yZVN0YXR1cyAmJlxyXG4gICAgICAgICAgICAhY29yZVN0YXR1cy5oYXNCYWxhbmNlICYmXHJcbiAgICAgICAgICAgIHdpdGhkcmF3QXNzZXRTdGF0dXMgJiZcclxuICAgICAgICAgICAgd2l0aGRyYXdBc3NldFN0YXR1cy5oYXNCYWxhbmNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aXRoZHJhd0Fzc2V0U3RhdHVzLmZlZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvcmVTdGF0dXMgPyBjb3JlU3RhdHVzLmZlZSA6IGRlZmF1bHRGZWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uSW5wdXRBbW91bnQoZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuc2V0QW1vdW50KHtcclxuICAgICAgICAgICAgICAgIHJlYWw6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUgfHwgMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdWYWx1ZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycjpcIiwgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uSW5wdXRUbyhlKSB7XHJcbiAgICAgICAgbGV0IHRvQWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IHRvQWRkcmVzcyxcclxuICAgICAgICAgICAgdmFsaWRBZGRyZXNzOiBudWxsLFxyXG4gICAgICAgICAgICB0b0FkZHJlc3M6IHRvQWRkcmVzc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModG9BZGRyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25NZW1vQ2hhbmdlZChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtbzogZS50YXJnZXQudmFsdWV9LCB0aGlzLl91cGRhdGVGZWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUFkZHJlc3MoYWRkcmVzcywgcHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHtcclxuICAgICAgICAgICAgdXJsOiBvcGVubGVkZ2VyQVBJcy5CQVNFLFxyXG4gICAgICAgICAgICB3YWxsZXRUeXBlOiBwcm9wcy53YWxsZXRUeXBlLFxyXG4gICAgICAgICAgICBuZXdBZGRyZXNzOiBhZGRyZXNzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b0FkZHJlc3MgPT09IGFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkQWRkcmVzczogISFpc1ZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gdmFsaWRhdGluZyBhZGRyZXNzOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb3BlblJlZ2lzdHJhclNpdGUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3V25kID0gd2luZG93Lm9wZW4oU2V0dGluZ3NTdG9yZS5zaXRlX3JlZ2lzdHIsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgIG5ld1duZC5vcGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRHYXRlRmVlKCkge1xyXG4gICAgICAgIGNvbnN0IHtnYXRlRmVlLCBhc3NldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICByZWFsOiBwYXJzZUZsb2F0KGdhdGVGZWUgPyBnYXRlRmVlLnJlcGxhY2UoXCIsXCIsIFwiXCIpIDogMCksXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyV2l0aGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3Qge2Ftb3VudEVycm9yfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge25hbWU6IGFzc2V0TmFtZX0gPSB1dGlscy5yZXBsYWNlTmFtZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xyXG4gICAgICAgIGNvbnN0IHtzdXBwb3J0c01lbW9zfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuZmlhdE1vZGFsKXtcclxuICAgICAgICAvLyAgICAgaWYofnRoaXMucHJvcHMuZmlhdE1vZGFsLmluZGV4T2YoJ2NhbkZpYXRXaXRoJykpe1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICg8V2l0aGRyYXdGaWF0T3BlbkxlZGdlclxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD1cIm9wZW5sZWRnZXItZmlhdFwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZGVwb3NpdF9hc3NldD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIikuc3BsaXQoJ09QRU4uJykuam9pbignJyl9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVjZWl2ZV9hc3NldD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcnBjX3VybD17U2V0dGluZ3NTdG9yZS5ycGNfdXJsfVxyXG4gICAgICAgIC8vICAgICAgICAgLz4pO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPHA+Q2xpY2sgPGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5fb3BlblJlZ2lzdHJhclNpdGV9ID5oZXJlPC9hPiB0byByZWdpc3RlciBmb3IgZGVwb3NpdHMgPC9wPik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGZWUgPSB0aGlzLl9nZXRGZWUoKTtcclxuICAgICAgICBjb25zdCBnYXRlRmVlID0gdGhpcy5fZ2V0R2F0ZUZlZSgpO1xyXG4gICAgICAgIGNvbnN0IGZlZVN0YXR1cyA9IHRoaXMuc3RhdGUuZmVlU3RhdHVzW2N1cnJlbnRGZWUuYXNzZXRfaWRdO1xyXG4gICAgICAgIGNvbnN0IGZlZUFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChjdXJyZW50RmVlLmFzc2V0X2lkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVN1Ym1pdCA9XHJcbiAgICAgICAgICAgIChmZWVTdGF0dXMgJiYgIWZlZVN0YXR1cy5oYXNCYWxhbmNlKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciB8fFxyXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS50b0FkZHJlc3MgfHxcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdWYWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfZnVuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckN1cnJlbnRCYWxhbmNlKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLndpdGhkcmF3LmFtb3VudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndpdGhkcmF3VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25JbnB1dEFtb3VudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnthc3NldE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudEVycm9yID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXthbW91bnRFcnJvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIuZmVlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZlZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVBc3NldCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtmZWVBc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmVlU3RhdHVzICYmICFmZWVTdGF0dXMuaGFzQmFsYW5jZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2F0ZXdheS5mZWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYXRlRmVlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZlZVN0YXR1cyAmJiAhZmVlU3RhdHVzLmhhc0JhbGFuY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLndpdGhkcmF3LmFkZHJlc3NcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkud2l0aGRyYXdfcGxhY2Vob2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXQ6IGFzc2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRvQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0VG8uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC53aXRoZHJhd19hZGRyZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXQ6IGFzc2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUudmFsaWRBZGRyZXNzICYmIHRoaXMuc3RhdGUudG9BZGRyZXNzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS52YWxpZF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luX3R5cGU9e2Fzc2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3N1cHBvcnRzTWVtb3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIubWVtb1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1lbW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uTWVtb0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUudmFsaWRBZGRyZXNzICYmIHRoaXMuc3RhdGUudG9BZGRyZXNzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS52YWxpZF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbl90eXBlPXthc3NldE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIFNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIiArIChkaXNhYmxlU3VibWl0ID8gXCIgZGlzYWJsZWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJEZXBvc2l0KCkge1xyXG4gICAgICAgIGNvbnN0IHtyZWNlaXZlX2FkZHJlc3MsIGxvYWRpbmcsIGVtcHR5QWRkcmVzc0RlcG9zaXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lfSA9IHV0aWxzLnJlcGxhY2VOYW1lKHRoaXMucHJvcHMuYXNzZXQpO1xyXG4gICAgICAgIGNvbnN0IGhhc01lbW8gPVxyXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgJiZcclxuICAgICAgICAgICAgXCJtZW1vXCIgaW4gcmVjZWl2ZV9hZGRyZXNzICYmXHJcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWx1ZSA9IChyZWNlaXZlX2FkZHJlc3MgJiYgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpIHx8IFwiXCI7XHJcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5maWF0TW9kYWwpe1xyXG4gICAgICAgIC8vICAgICBpZih+dGhpcy5wcm9wcy5maWF0TW9kYWwuaW5kZXhPZignY2FuRmlhdERlcCcpKXtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPERlcG9zaXRGaWF0T3BlbkxlZGdlclxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD1cIm9wZW5sZWRnZXItZmlhdFwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZGVwb3NpdF9hc3NldD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIikuc3BsaXQoJ09QRU4uJykuam9pbignJyl9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVjZWl2ZV9hc3NldD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcnBjX3VybD17U2V0dGluZ3NTdG9yZS5ycGNfdXJsfVxyXG4gICAgICAgIC8vICAgICAgICAgLz4pO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPHA+Q2xpY2sgPGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5fb3BlblJlZ2lzdHJhclNpdGV9ID5oZXJlPC9hPiB0byByZWdpc3RlciBmb3IgZGVwb3NpdHMgPC9wPik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFhZGRyZXNzVmFsdWUgPyBcIm5vLW92ZXJmbG93XCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYWZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFkZF9mdW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuc2VuZGVyLmdldChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyQ3VycmVudEJhbGFuY2UoKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5kZXBvc2l0X3RpcFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVscC10b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmel8xMiBsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfbm90aWNlX2RlbGF5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFhZGRyZXNzVmFsdWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbXB0eUFkZHJlc3NEZXBvc2l0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucGxlYXNlX2dlbmVyYXRlX2FkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3NWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b24gdGV4dD17YWRkcmVzc1ZhbHVlfSAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2hhc01lbW8gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zZmVyLm1lbW9cIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weUJ1dHRvbiB0ZXh0PXtyZWNlaXZlX2FkZHJlc3MubWVtb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVfYWRkcmVzcyAmJiByZWNlaXZlX2FkZHJlc3MuZXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVfYWRkcmVzcy5lcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIFNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3Bpbm5lci1idXR0b24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXF1ZXN0RGVwb3NpdEFkZHJlc3NMb2FkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwiY2lyY2xlXCIgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdlbmVyYXRlX25ld1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyQ3VycmVudEJhbGFuY2UoKSB7XHJcbiAgICAgICAgY29uc3Qge25hbWU6IGFzc2V0TmFtZX0gPSB1dGlscy5yZXBsYWNlTmFtZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgICAgICBjb25zdCBpc0RlcG9zaXQgPSB0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50QmFsYW5jZSA9IHRoaXMuX2dldEN1cnJlbnRCYWxhbmNlKCk7XHJcblxyXG4gICAgICAgIGxldCBhc3NldCA9IGN1cnJlbnRCYWxhbmNlXHJcbiAgICAgICAgICAgID8gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGN1cnJlbnRCYWxhbmNlLmdldChcImFzc2V0X3R5cGVcIiksXHJcbiAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgIGFtb3VudDogY3VycmVudEJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gVEVNUCAvL1xyXG4gICAgICAgIC8vIGFzc2V0ID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAvLyAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgLy8gICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgLy8gICAgIGFtb3VudDogNjU2NTQ2NDVcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXBwbHlCYWxhbmNlQnV0dG9uID0gaXNEZXBvc2l0ID8gKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlckxlZnQ6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YXNzZXROYW1lfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLndpdGhkcmF3X2Z1bGxcIil9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlckxlZnQ6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3VwZGF0ZUFtb3VudC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgIWN1cnJlbnRCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlSW50KGN1cnJlbnRCYWxhbmNlLmdldChcImJhbGFuY2VcIiksIDEwKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNsaXBweVwiIHRpdGxlPVwiaWNvbnMuY2xpcHB5LndpdGhkcmF3X2Z1bGxcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMXJlbVwifX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7Zm9udFNpemU6IFwiMXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkuYmFsYW5jZV9hc3NldFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KX06XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyFhc3NldCA/IDAgOiBhc3NldC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FwcGx5QmFsYW5jZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Fzc2V0LCBhY3Rpb259ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgaXNEZXBvc2l0ID0gYWN0aW9uID09PSBcImRlcG9zaXRcIjtcclxuXHJcbiAgICAgICAgaWYgKCFhc3NldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWV9ID0gdXRpbHMucmVwbGFjZU5hbWUoYXNzZXQpO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9IHRoaXMucHJvcHMuaXNEb3duID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudW5hdmFpbGFibGVfT1BFTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogIXRoaXMucHJvcHMuaXNBdmFpbGFibGUgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogaXNEZXBvc2l0ID8gKFxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJEZXBvc2l0KClcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJXaXRoZHJhdygpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW9kYWxfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJnYXRld2F5LmRlcG9zaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibW9kYWwud2l0aGRyYXcuc3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb2RhbF9fZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5EZXBvc2l0V2l0aGRyYXdDb250ZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShEZXBvc2l0V2l0aGRyYXdDb250ZW50KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURlcG9zaXRXaXRoZHJhd01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7b3BlbjogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHtcclxuICAgICAgICAgICAgWmZBcGkucHVibGlzaCh0aGlzLnByb3BzLm1vZGFsSWQsIFwib3BlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zdGF0ZS5vcGVuID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPEJhc2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5tb2RhbElkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXBvc2l0V2l0aGRyYXdDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L0Jhc2VNb2RhbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XHJcbmltcG9ydCBCYXNlTW9kYWwgZnJvbSBcIi4uL01vZGFsL0Jhc2VNb2RhbFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7XHJcbiAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3MsXHJcbiAgICB2YWxpZGF0ZUFkZHJlc3MsXHJcbiAgICBXaXRoZHJhd0FkZHJlc3NlcyxcclxuICAgIGdldERlcG9zaXRMaW1pdCxcclxuICAgIGVzdGltYXRlT3V0cHV0LFxyXG4gICAgZXN0aW1hdGVJbnB1dFxyXG59IGZyb20gXCJjb21tb24vZ2F0ZXdheU1ldGhvZHNcIjtcclxuaW1wb3J0IEJsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZSBmcm9tIFwiY29tbW9uL0Jsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZVwiO1xyXG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tIFwiLi4vVXRpbGl0eS9Db3B5QnV0dG9uXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IHtibG9ja1RyYWRlc0FQSXN9IGZyb20gXCJhcGkvYXBpQ29uZmlnXCI7XHJcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuLi9VdGlsaXR5L0Zsb2F0aW5nRHJvcGRvd25cIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGUucmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydCBEZXBvc2l0RmlhdE9wZW5MZWRnZXIgZnJvbSBcImNvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvRGVwb3NpdEZpYXRPcGVuTGVkZ2VyXCI7XHJcbi8vIGltcG9ydCBXaXRoZHJhd0ZpYXRPcGVuTGVkZ2VyIGZyb20gXCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL1dpdGhkcmF3RmlhdE9wZW5MZWRnZXJcIjtcclxuXHJcbmNsYXNzIFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHNlbmRlcjogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcclxuICAgICAgICBhc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvQWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChwcm9wcy53YWxsZXRUeXBlKSxcclxuICAgICAgICAgICAgd2l0aGRyYXdWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGlucHV0QW1vdW50OiAwLFxyXG4gICAgICAgICAgICByZWNlaXZlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbWl0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYXBpRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKHRoaXMuc3RhdGUudG9BZGRyZXNzLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IEJsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgWmZBcGkucHVibGlzaCh0aGlzLnByb3BzLm1vZGFsSWQsIFwiY2xvc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2dldERlcG9zaXRBZGRyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdExpbWl0KCk7XHJcbiAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBucC5pbnB1dENvaW5UeXBlICE9PSB0aGlzLnByb3BzLmlucHV0Q29pblR5cGUgfHxcclxuICAgICAgICAgICAgbnAub3V0cHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMub3V0cHV0Q29pblR5cGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdExpbWl0KG5wKTtcclxuICAgICAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQobnApO1xyXG4gICAgICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzcyhucCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBucC5pbnB1dENvaW5UeXBlICE9PSB0aGlzLnByb3BzLmlucHV0Q29pblR5cGUgfHxcclxuICAgICAgICAgICAgbnAub3V0cHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMub3V0cHV0Q29pblR5cGUgfHxcclxuICAgICAgICAgICAgbnAuc2VuZGVyICE9PSB0aGlzLnByb3BzLnNlbmRlciB8fFxyXG4gICAgICAgICAgICBucC5hc3NldCAhPT0gdGhpcy5wcm9wcy5hc3NldCB8fFxyXG4gICAgICAgICAgICBucC5pc0F2YWlsYWJsZSAhPT0gdGhpcy5wcm9wcy5pc0F2YWlsYWJsZSB8fFxyXG4gICAgICAgICAgICBucC5pc0Rvd24gIT09IHRoaXMucHJvcHMuaXNEb3duIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXREZXBvc2l0TGltaXQocHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGltaXRMb2FkaW5nOiB0cnVlfSk7XHJcbiAgICAgICAgZ2V0RGVwb3NpdExpbWl0KHByb3BzLmlucHV0Q29pblR5cGUsIHByb3BzLm91dHB1dENvaW5UeXBlKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdExpbWl0OiByZXMuZGVwb3NpdExpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0TG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVwb3NpdCBsaW1pdCBlcnJvcjpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRMaW1pdDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdExvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQW1vdW50Q2hhbmdlKHZhbHVlLCBlKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXhwX251bWVyYWwgPSBuZXcgUmVnRXhwKC9bWzpkaWdpdDpdXS8pO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAvLyBFbnN1cmUgaW5wdXQgaXMgdmFsaWRcclxuICAgICAgICBpZiAoIXJlZ2V4cF9udW1lcmFsLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhdGNoIGluaXRpYWwgZGVjaW1hbCBpbnB1dFxyXG4gICAgICAgIGlmICh0YXJnZXQudmFsdWUuY2hhckF0KDApID09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IFwiMC5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhdGNoIGRvdWJsZSBkZWNpbWFsIGFuZCByZW1vdmUgaWYgaW52YWxpZFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlLmNoYXJBdCh0YXJnZXQudmFsdWUubGVuZ3RoKSAhPSB0YXJnZXQudmFsdWUuc2VhcmNoKFwiLlwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0YXJnZXQudmFsdWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gdXRpbHMubGltaXRCeVByZWNpc2lvbih0YXJnZXQudmFsdWUsIDgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRBbW91bnQ6IHRhcmdldC52YWx1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm91dHB1dFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7b3V0cHV0QW1vdW50OiB0YXJnZXQudmFsdWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VzdGltYXRlSW5wdXQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZXN0aW1hdGVPdXRwdXQocHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZUFtb3VudDogMCwgc2VuZEFtb3VudDogdGhpcy5zdGF0ZS5pbnB1dEFtb3VudH0pO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbnB1dEFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgICAgIGVzdGltYXRlT3V0cHV0KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0QW1vdW50LFxyXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLFxyXG4gICAgICAgICAgICBwcm9wcy5vdXRwdXRDb2luVHlwZVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0QW1vdW50OiByZXMuaW5wdXRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogcmVzLm91dHB1dEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZSBhbW91bnQgZXJyOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZUxvYWRpbmc6IGZhbHNlLCBhcGlFcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZXN0aW1hdGVJbnB1dChwcm9wcyA9IHRoaXMucHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlQW1vdW50OiB0aGlzLnN0YXRlLm91dHB1dEFtb3VudCwgc2VuZEFtb3VudDogMH0pO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdXRwdXRBbW91bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZUxvYWRpbmc6IHRydWV9KTtcclxuICAgICAgICBlc3RpbWF0ZUlucHV0KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm91dHB1dEFtb3VudCxcclxuICAgICAgICAgICAgcHJvcHMuaW5wdXRDb2luVHlwZSxcclxuICAgICAgICAgICAgcHJvcHMub3V0cHV0Q29pblR5cGVcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEFtb3VudDogcmVzLmlucHV0QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRBbW91bnQ6IHV0aWxzLmxpbWl0QnlQcmVjaXNpb24ocmVzLmlucHV0QW1vdW50LCA4KSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZCBhbW91bnQgZXJyOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZUxvYWRpbmc6IGZhbHNlLCBhcGlFcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RGVwb3NpdEFkZHJlc3MocHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5pbnB1dENvaW5UeXBlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcztcclxuXHJcbiAgICAgICAgLyogQWx3YXlzIGdlbmVyYXRlIG5ldyBhZGRyZXNzL21lbW8gZm9yIGluY3JlYXNlZCBzZWN1cml0eSAqL1xyXG4gICAgICAgIC8qbGV0IGFjY291bnRfbmFtZSA9IHByb3BzLnNlbmRlci5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgICAgIFwiYmxvY2t0cmFkZXNcIixcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKClcclxuICAgICAgICApOyovXHJcbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzOiBudWxsfSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KHByb3BzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlX2FkZHJlc3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXREZXBvc2l0T2JqZWN0KHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IHByb3BzLmlucHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIG91dHB1dEFkZHJlc3M6IHByb3BzLnNlbmRlci5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICB1cmw6IGJsb2NrVHJhZGVzQVBJcy5CQVNFLFxyXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiByZWNlaXZlX2FkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGREZXBvc2l0QWRkcmVzcyhcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZW5kZXIuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2FkZHJlc3NcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERlcG9zaXRBZGRyZXNzKFxyXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxyXG4gICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcclxuICAgICAgICAgICAgXCJibG9ja3RyYWRlc1wiLFxyXG4gICAgICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxyXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtb1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBSZWFjdFRvb2x0aXAucmVidWlsZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUFkZHJlc3MoYWRkcmVzcywgcHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHt3YWxsZXRUeXBlOiBwcm9wcy53YWxsZXRUeXBlLCBuZXdBZGRyZXNzOiBhZGRyZXNzfSlcclxuICAgICAgICAgICAgLnRoZW4oaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b0FkZHJlc3MgPT09IGFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkQWRkcmVzczogaXNWYWxpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHZhbGlkYXRpbmcgYWRkcmVzczpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29wZW5SZWdpc3RyYXJTaXRlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld1duZCA9IHdpbmRvdy5vcGVuKFNldHRpbmdzU3RvcmUuc2l0ZV9yZWdpc3RyLCBcIl9ibGFua1wiKTtcclxuICAgICAgICBuZXdXbmQub3BlbmVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ecm9wRG93blNlbGVjdChlKSB7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtwcmVmZXJyZWRCcmlkZ2U6IGV9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJsb2NrVHJhZGVzQ29udGFjdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9wZW4gTmV3IFRhYlwiKTtcclxuICAgICAgICBsZXQgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5ibG9ja3RyYWRlcy51cy9jb250YWN0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgIHdpbi5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJEZXBvc2l0KCkge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgICAgICBjb25zdCB7cmVjZWl2ZV9hZGRyZXNzLCBhcGlFcnJvcn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGhhc01lbW8gPVxyXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgJiZcclxuICAgICAgICAgICAgXCJtZW1vXCIgaW4gcmVjZWl2ZV9hZGRyZXNzICYmXHJcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWx1ZSA9IChyZWNlaXZlX2FkZHJlc3MgJiYgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgUVIgPSAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUVJcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPFFSQ29kZSBzaXplPXsxNDB9IHZhbHVlPXthZGRyZXNzVmFsdWV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBicmlkZ2VBc3NldHMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmJyaWRnZXMudG9KUygpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gdGhpcy5wcm9wcy5pbnB1dENvaW5UeXBlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZU5hbWUgPSAocHJlZml4ID8gcHJlZml4IDogXCJcIikgKyBhc3NldE5hbWU7XHJcblxyXG4gICAgICAgIGxldCBwcmljZSA9ICh0aGlzLnN0YXRlLnJlY2VpdmVBbW91bnQgLyB0aGlzLnN0YXRlLmlucHV0QW1vdW50KS50b0ZpeGVkKFxyXG4gICAgICAgICAgICA0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgcHJpY2VTdWZmaXggPSByZWNlaXZlTmFtZSArIFwiL1wiICsgaW5wdXROYW1lO1xyXG5cclxuICAgICAgICBjb25zdCBhYm92ZUxpbWl0ID1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dEFtb3VudCA+IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5kZXBvc2l0TGltaXQpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VuZEFtb3VudCA+IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5kZXBvc2l0TGltaXQpO1xyXG4gICAgICAgIGNvbnN0IGFib3ZlTGltaXRTdHlsZSA9IGFib3ZlTGltaXRcclxuICAgICAgICAgICAgPyB7Ym9yZGVyOiBcIjFweCBzb2xpZCAjYTk0NDQyXCJ9XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuYnV5LmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZWNlaXZlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5idXkuYnJpZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLmJyaWRnZV9UUkFERVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJsb2NrVHJhZGVzQ29udGFjdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiQkxPQ0tUUkFERVNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDaGFuZ2UgdGhpcyB3aGVuIHdlIGdhaW4gbW9yZSBicmRpZ2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17IWFwaUVycm9yID8ge2Rpc3BsYXk6IFwiXCJ9IDoge2Rpc3BsYXk6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93IGRvdWJsZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC02XCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5zZW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fib3ZlTGltaXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3ItbXNnIGlubGluZS1ibG9jayB0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAub3Zlcl9saW1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5Lm92ZXJfbGltaXRcIiAvPiZuYnNwOzxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2Fib3ZlTGltaXRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbmRBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLl9vbkFtb3VudENoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM9e2JyaWRnZUFzc2V0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e2JyaWRnZUFzc2V0cy5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXAsIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhKSBtYXBbYV0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUVudHJ5PXticmlkZ2VBc3NldHNbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWZlcnJlZEJyaWRnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlkZ2VBc3NldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uRHJvcERvd25TZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXJDYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X2xpbWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlcG9zaXRMaW1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoNCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJpZ2h0LXN5bWJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93IGRvdWJsZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC02XCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucmVjZWl2ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2Fib3ZlTGltaXRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlY2VpdmVBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLl9vbkFtb3VudENoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRwdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yaWdodC1zeW1ib2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlaXZlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDt7dGhpcy5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNlaXZlTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJmb290ZXIubG9hZGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthYm92ZUxpbWl0ID8gMCA6IHByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJpZ2h0LXN5bWJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlU3VmZml4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IWFkZHJlc3NWYWx1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cInRocmVlLWJvdW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc01lbW8gPyBudWxsIDogUVJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXthZGRyZXNzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5SWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwLjNyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnB1cmNoYXNlX25vdGljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEFzc2V0PXtpbnB1dE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRBc3NldD17cmVjZWl2ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oaWdobGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZGRyZXNzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzTWVtbyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogXCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtyZWNlaXZlX2FkZHJlc3MubWVtb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5SWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5wdXJjaGFzZV9ub3RpY2VfbWVtb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMC4zcmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2hpZ2hsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlaXZlX2FkZHJlc3MubWVtb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeSBob2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmNsb3NlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXthcGlFcnJvciA/IHtkaXNwbGF5OiBcIlwifSA6IHtkaXNwbGF5OiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvdyBkb3VibGUtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZV9UUkFERVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBwcmltYXJ5IGhvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuY2xvc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyQ3VycmVudEJhbGFuY2UoKSB7XHJcbiAgICAgICAgY29uc3Qge25hbWU6IGFzc2V0TmFtZX0gPSB1dGlscy5yZXBsYWNlTmFtZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgICAgICBjb25zdCBpc0RlcG9zaXQgPSB0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50QmFsYW5jZSA9IHRoaXMucHJvcHMuYmFsYW5jZXMuZmluZChiID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIgJiYgYi5nZXQoXCJhc3NldF90eXBlXCIpID09PSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYXNzZXQgPSBjdXJyZW50QmFsYW5jZVxyXG4gICAgICAgICAgICA/IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBjdXJyZW50QmFsYW5jZS5nZXQoXCJhc3NldF90eXBlXCIpLFxyXG4gICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICBhbW91bnQ6IGN1cnJlbnRCYWxhbmNlLmdldChcImJhbGFuY2VcIilcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFwcGx5QmFsYW5jZUJ1dHRvbiA9IGlzRGVwb3NpdCA/IChcclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLCBib3JkZXJMZWZ0OiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2Fzc2V0TmFtZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC53aXRoZHJhd19mdWxsXCIpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLCBib3JkZXJMZWZ0OiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl91cGRhdGVBbW91bnQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICFjdXJyZW50QmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUludChjdXJyZW50QmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpLCAxMClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjbGlwcHlcIiB0aXRsZT1cImljb25zLmNsaXBweS53aXRoZHJhd19mdWxsXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiU2ltcGxlVHJhZGVfX3dpdGhkcmF3LXJvd1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2ZvbnRTaXplOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnYXRld2F5LmJhbGFuY2VfYXNzZXRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9OlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXshYXNzZXQgPyAwIDogYXNzZXQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcHBseUJhbGFuY2VCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHthc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWFzc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwibW9kYWwuYnV5LnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzRG93biA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZV9UUkFERVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAhdGhpcy5wcm9wcy5pc0F2YWlsYWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyRGVwb3NpdCgpXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZSA9IEJpbmRUb0NoYWluU3RhdGUoXHJcbiAgICBTaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2VcclxuKTtcclxuXHJcbmNsYXNzIFN0b3JlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtwcmVmZXJyZWRCcmlkZ2UsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBjdXJyZW50QnJpZGdlID0gdGhpcy5wcm9wcy5icmlkZ2VzLmdldCh0aGlzLnByb3BzLnByZWZlcnJlZEJyaWRnZSk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50QnJpZGdlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRCcmlkZ2UgPSB0aGlzLnByb3BzLmJyaWRnZXMuZmlyc3QoKTtcclxuICAgICAgICAgICAgcHJlZmVycmVkQnJpZGdlID0gY3VycmVudEJyaWRnZS5pbnB1dENvaW5UeXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlXHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxyXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQnJpZGdlPXtwcmVmZXJyZWRCcmlkZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4uY3VycmVudEJyaWRnZS50b0pTKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuU3RvcmVXcmFwcGVyID0gY29ubmVjdChTdG9yZVdyYXBwZXIsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJlZmVycmVkQnJpZGdlOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgIFwicHJlZmVycmVkQnJpZGdlXCIsXHJcbiAgICAgICAgICAgICAgICBcImJ0Y1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcIm9wZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYnJpZGdlcykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAhdGhpcy5zdGF0ZS5vcGVuID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPEJhc2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMubW9kYWxJZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgbm9DbG9zZUJ0blxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8U3RvcmVXcmFwcGVyIHsuLi50aGlzLnByb3BzfSBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9CYXNlTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtpc0Zpbml0ZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgWmZBcGkgZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvZm91bmRhdGlvbi1hcGlcIjtcclxuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiLi9CYXNlTW9kYWxcIjtcclxuaW1wb3J0IFRyaWdnZXIgZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdHJpZ2dlclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgV2FsbGV0QXBpIGZyb20gXCJhcGkvV2FsbGV0QXBpXCI7XHJcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRQcmljZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBIZWxwQ29udGVudCBmcm9tIFwiLi4vVXRpbGl0eS9IZWxwQ29udGVudFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtMaXN0fSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHtDaGVja2JveH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5cclxuLyoqXHJcbiAqICBHaXZlbiBhbiBhY2NvdW50IGFuZCBhbiBhc3NldCBpZCwgcmVuZGVyIGEgbW9kYWwgYWxsb3dpbmcgbW9kaWZpY2F0aW9uIG9mIGEgbWFyZ2luIHBvc2l0aW9uIGZvciB0aGF0IGFzc2V0XHJcbiAqXHJcbiAqICBFeHBlY3RlZCBQcm9wZXJ0aWVzOlxyXG4gKiAgICAgcXVvdGVfYXNzZXQ6ICBhc3NldCBpZCwgbXVzdCBiZSBhIGJpdGFzc2V0XHJcbiAqICAgICBhY2NvdW50OiBmdWxsX2FjY291bnQgb2JqZWN0IGZvciB0aGUgYWNjb3VudCB0byB1c2VcclxuICpcclxuICovXHJcblxyXG5jbGFzcyBCb3Jyb3dNb2RhbENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBxdW90ZV9hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgYml0YXNzZXRfYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcclxuICAgICAgICBiYWNraW5nX2Fzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcclxuICAgICAgICBiYWNraW5nX2JhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXHJcbiAgICAgICAgY2FsbF9vcmRlcnM6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdCxcclxuICAgICAgICBoYXNDYWxsT3JkZXJzOiBQcm9wVHlwZXMuYm9vbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2luaXRpYWxTdGF0ZShwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxTdGF0ZShwcm9wcykge1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSBwcm9wcyA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbihwcm9wcykgOiB7fTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWJ0ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kZWJ0LFxyXG4gICAgICAgICAgICAgICAgcHJvcHMucXVvdGVfYXNzZXRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5iYWNraW5nX2Fzc2V0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gPSAhaXNOYU4oXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24udGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBjdXJyZW50UG9zaXRpb24udGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gLyAxMDAwXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBkZWJ0ID8gZGVidC50b1N0cmluZygpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IGNvbGxhdGVyYWwgPyBjb2xsYXRlcmFsLnRvU3RyaW5nKCkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKGRlYnQsIGNvbGxhdGVyYWwpLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiB0aGlzLl9nZXRJbml0aWFsRXJyb3JzKCksXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID4gMCA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidDogZGVidCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9hbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiAwLFxyXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogdGhpcy5fZ2V0SW5pdGlhbENvbGxhdGVyYWxSYXRpbyhwcm9wcyksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogMCxcclxuICAgICAgICAgICAgICAgIGVycm9yczogdGhpcy5fZ2V0SW5pdGlhbEVycm9ycygpLFxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VUYXJnZXRDb2xsYXRlcmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidDogMCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBSZWFjdFRvb2x0aXAucmVidWlsZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuX2luaXRpYWxTdGF0ZSh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSB8fFxyXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5xdW90ZV9hc3NldCwgdGhpcy5wcm9wcy5xdW90ZV9hc3NldCkgfHxcclxuICAgICAgICAgICAgIW5leHRQcm9wcy5iYWNraW5nX2Fzc2V0LmdldChcInN5bWJvbFwiKSA9PT1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJzeW1ib2xcIikgfHxcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuYWNjb3VudCwgdGhpcy5wcm9wcy5hY2NvdW50KSB8fFxyXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5jYWxsX29yZGVycywgdGhpcy5wcm9wcy5jYWxsX29yZGVycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3J0X2Ftb3VudCwgY29sbGF0ZXJhbCwgY29sbGF0ZXJhbF9yYXRpb30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmhhc0NhbGxPcmRlcnMgIT09IHRoaXMucHJvcHMuaGFzQ2FsbE9yZGVycyB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5faW5pdGlhbFN0YXRlKG5leHRQcm9wcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmV2YWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoc2hvcnRfYW1vdW50IHx8IGNvbGxhdGVyYWwgfHwgY29sbGF0ZXJhbF9yYXRpbykge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2hvcnRfYW1vdW50ID0gc2hvcnRfYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuY29sbGF0ZXJhbCA9IGNvbGxhdGVyYWw7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5jb2xsYXRlcmFsX3JhdGlvID0gY29sbGF0ZXJhbF9yYXRpbztcclxuICAgICAgICAgICAgICAgIHJldmFsaWRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEluaXRpYWxFcnJvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbF9iYWxhbmNlOiBudWxsLFxyXG4gICAgICAgICAgICByYXRpb190b29faGlnaDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX2dldE1haW50ZW5hbmNlUmF0aW8oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCJcclxuICAgICAgICAgICAgXSkgLyAxMDAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtQ2xpY2tlZChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcImNsb3NlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxvY2tlZENSKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9ja2VkQ1I6ICF0aGlzLnN0YXRlLmxvY2tlZENSID8gdHJ1ZSA6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQm9ycm93Q2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSBlLmFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IChcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbF9yYXRpbyAqXHJcbiAgICAgICAgICAgICAgICAoYW1vdW50IC8gZmVlZF9wcmljZSlcclxuICAgICAgICAgICAgKS50b0ZpeGVkKHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJwcmVjaXNpb25cIikpLFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxfcmF0aW9cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Db2xsYXRlcmFsQ2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgYW1vdW50ID0gZS5hbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgbGV0IGZlZWRfcHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcclxuICAgICAgICBjb25zdCBjb2xsYXRlcmFsUmF0aW8gPSBhbW91bnQgLyAodGhpcy5zdGF0ZS5zaG9ydF9hbW91bnQgLyBmZWVkX3ByaWNlKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICBzaG9ydF9hbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgc2hvcnRfYW1vdW50OiB0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCxcclxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiBpc0Zpbml0ZShjb2xsYXRlcmFsUmF0aW8pXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbGxhdGVyYWxSYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9nZXRJbml0aWFsQ29sbGF0ZXJhbFJhdGlvKHRoaXMucHJvcHMpXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVGFyZ2V0UmF0aW9DaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIGlucHV0IGlzIHZhbGlkXHJcbiAgICAgICAgY29uc3QgcmVnZXhwX251bWVyYWwgPSBuZXcgUmVnRXhwKC9bWzpkaWdpdDpdXS8pO1xyXG4gICAgICAgIGlmICghcmVnZXhwX251bWVyYWwudGVzdCh0YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHJhdGlvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uUmF0aW9DaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCBmZWVkX3ByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAvLyBFbnN1cmUgaW5wdXQgaXMgdmFsaWRcclxuICAgICAgICBjb25zdCByZWdleHBfbnVtZXJhbCA9IG5ldyBSZWdFeHAoL1tbOmRpZ2l0Ol1dLyk7XHJcbiAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KHRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmF0aW8gPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHNob3J0X2Ftb3VudDtcclxuICAgICAgICBsZXQgY29sbGF0ZXJhbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9ja2VkQ1IpIHtcclxuICAgICAgICAgICAgc2hvcnRfYW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAqIGZlZWRfcHJpY2UpIC9cclxuICAgICAgICAgICAgICAgIHJhdGlvXHJcbiAgICAgICAgICAgICkudG9GaXhlZCh0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKTtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbCA9IHRoaXMuc3RhdGUuY29sbGF0ZXJhbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG9ydF9hbW91bnQgPSB0aGlzLnN0YXRlLnNob3J0X2Ftb3VudDtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbCA9IChcclxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCAvIGZlZWRfcHJpY2UpICpcclxuICAgICAgICAgICAgICAgIHJhdGlvXHJcbiAgICAgICAgICAgICkudG9GaXhlZCh0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBzaG9ydF9hbW91bnQsXHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IGNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IHJhdGlvXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX21heGltaXplQ29sbGF0ZXJhbCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKVxyXG4gICAgICAgICAgICA6IHt9O1xyXG4gICAgICAgIGxldCBpbml0aWFsQ29sbGF0ZXJhbCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCkge1xyXG4gICAgICAgICAgICBpbml0aWFsQ29sbGF0ZXJhbCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19hc3NldFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IGdvIG92ZXIgdGhlIG1heGltdW0gY29sbGF0ZXJhbCByYXRpb1xyXG4gICAgICAgIGxldCBtYXhpbWl6ZWRDb2xsYXRlcmFsID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpIC9cclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYmFja2luZ19hc3NldCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsIC1cclxuICAgICAgICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCAvIHRoaXMuX2dldEZlZWRQcmljZSgpKSAqIDEwMDAuMFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25Db2xsYXRlcmFsQ2hhbmdlKFxyXG4gICAgICAgICAgICBuZXcgT2JqZWN0KHthbW91bnQ6IG1heGltaXplZENvbGxhdGVyYWwudG9TdHJpbmcoKX0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWF4aW1pemVEZWJ0KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpXHJcbiAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgbGV0IGluaXRpYWxDb2xsYXRlcmFsID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWF4aW11bUNvbGxhdGVyYWwgPVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpIC9cclxuICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0KSArXHJcbiAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsIC1cclxuICAgICAgICAgICAgMTA7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRfYW1vdW50ID1cclxuICAgICAgICAgICAgKG1heGltdW1Db2xsYXRlcmFsIC8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSAqXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZWRQcmljZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBzaG9ydF9hbW91bnQsXHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IG1heGltdW1Db2xsYXRlcmFsLFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxfcmF0aW9cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGF5RGVidCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKVxyXG4gICAgICAgICAgICA6IHtkZWJ0OiAwfTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5kZWJ0IDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRfYW1vdW50ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcclxuICAgICAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uZGVidCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iaXRhc3NldF9iYWxhbmNlLmdldChcImJhbGFuY2VcIiksXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9vbkJvcnJvd0NoYW5nZSh7XHJcbiAgICAgICAgICAgIGFtb3VudDogc2hvcnRfYW1vdW50LnRvU3RyaW5nKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChuZXdTdGF0ZS5zaG9ydF9hbW91bnQpIC9cclxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpIHtcclxuICAgICAgICBsZXQgZXJyb3JzID0gdGhpcy5fZ2V0SW5pdGlhbEVycm9ycygpO1xyXG4gICAgICAgIGxldCB7b3JpZ2luYWxfcG9zaXRpb259ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgYmFja2luZ19iYWxhbmNlID0gIXRoaXMucHJvcHMuYmFja2luZ19iYWxhbmNlXHJcbiAgICAgICAgICAgID8ge2JhbGFuY2U6IDB9XHJcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5iYWNraW5nX2JhbGFuY2UudG9KUygpO1xyXG5cclxuICAgICAgICBsZXQgbWFpbnRlbmFuY2VSYXRpbyA9IHRoaXMuX2dldE1haW50ZW5hbmNlUmF0aW8oKTtcclxuICAgICAgICBsZXQgb3JpZ2luYWxDUiA9IHRoaXMuX2dldENvbGxhdGVyYWxSYXRpbyhcclxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uZGVidCxcclxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGlzT3JpZ2luYWxCZWxvd01DUiA9XHJcbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWwgPiAwICYmIG9yaWdpbmFsQ1IgPCBtYWludGVuYW5jZVJhdGlvO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbCkgLSBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsID5cclxuICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcclxuICAgICAgICAgICAgICAgIGJhY2tpbmdfYmFsYW5jZS5iYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LnRvSlMoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuY29sbGF0ZXJhbFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgc3FwID0gdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImN1cnJlbnRfZmVlZFwiLCBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXSkgLyAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGlzT3JpZ2luYWxCZWxvd01DUiAmJlxyXG4gICAgICAgICAgICBuZXdTdGF0ZS5zaG9ydF9hbW91bnQgPiBvcmlnaW5hbF9wb3NpdGlvbi5kZWJ0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5iZWxvd19tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5pbmNyZWFzZWRfZGVidF9vbl9tYXJnaW5fY2FsbFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgaXNPcmlnaW5hbEJlbG93TUNSICYmXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbykgPD0gcGFyc2VGbG9hdChvcmlnaW5hbENSKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuYmVsb3dfcmF0aW9fbWNyX3VwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAge29jcjogb3JpZ2luYWxDUi50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICFpc09yaWdpbmFsQmVsb3dNQ1IgJiZcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChuZXdTdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSA8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpID8gMSA6IG1haW50ZW5hbmNlUmF0aW8pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5iZWxvd19tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5iZWxvd1wiLFxyXG4gICAgICAgICAgICAgICAge21yOiBtYWludGVuYW5jZVJhdGlvfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbykgPFxyXG4gICAgICAgICAgICAodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpID8gMSA6IG1haW50ZW5hbmNlUmF0aW8gKyAwLjUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5jbG9zZV9tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5jbG9zZVwiLFxyXG4gICAgICAgICAgICAgICAge21yOiBtYWludGVuYW5jZVJhdGlvfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBxdW90ZVByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICAgIGxldCBpc1RDUiA9XHJcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gPiAwICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlVGFyZ2V0Q29sbGF0ZXJhbFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgZXh0ZW5zaW9uc1Byb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGlzVENSKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnNQcm9wID0ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdHIgPSBXYWxsZXRBcGkubmV3X3RyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnNQcm9wKSB7XHJcbiAgICAgICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbihcImNhbGxfb3JkZXJfdXBkYXRlXCIsIHtcclxuICAgICAgICAgICAgICAgIGZlZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmRpbmdfYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFfY29sbGF0ZXJhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAqIGJhY2tpbmdQcmVjaXNpb24gLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsdGFfZGVidDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50ICogcXVvdGVQcmVjaXNpb24gLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRlYnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IGV4dGVuc2lvbnNQcm9wXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbihcImNhbGxfb3JkZXJfdXBkYXRlXCIsIHtcclxuICAgICAgICAgICAgICAgIGZlZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmRpbmdfYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFfY29sbGF0ZXJhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAqIGJhY2tpbmdQcmVjaXNpb24gLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsdGFfZGVidDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50ICogcXVvdGVQcmVjaXNpb24gLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRlYnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgV2FsbGV0RGIucHJvY2Vzc190cmFuc2FjdGlvbih0ciwgbnVsbCwgdHJ1ZSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1bmxvY2sgZmFpbGVkOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBaZkFwaS5wdWJsaXNoKHRoaXMucHJvcHMubW9kYWxJZCwgXCJjbG9zZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Q3VycmVudFBvc2l0aW9uKHByb3BzKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbDogbnVsbCxcclxuICAgICAgICAgICAgZGVidDogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNDYWxsT3JkZXJzICYmIHByb3BzLmNhbGxfb3JkZXJzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHByb3BzLmNhbGxfb3JkZXJzLmZpbHRlcihhID0+ICEhYSkuZmluZChhID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRJbihbXCJjYWxsX3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhc3NldF9pZFwiXSkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gISFjdXJyZW50UG9zaXRpb25cclxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRvSlMoKVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVidDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDEgL1xyXG4gICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJpY2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEluaXRpYWxDb2xsYXRlcmFsUmF0aW8ocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHByb3BzKSA/IDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCkge1xyXG4gICAgICAgIHJldHVybiBjb2xsYXRlcmFsIC8gKGRlYnQgLyB0aGlzLl9nZXRGZWVkUHJpY2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzUHJlZGljdGlvbk1hcmtldChwcm9wcykge1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5xdW90ZV9hc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0VXNlVGFyZ2V0Q29sbGF0ZXJhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlVGFyZ2V0Q29sbGF0ZXJhbDogIXRoaXMuc3RhdGUudXNlVGFyZ2V0Q29sbGF0ZXJhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBxdW90ZV9hc3NldCxcclxuICAgICAgICAgICAgYml0YXNzZXRfYmFsYW5jZSxcclxuICAgICAgICAgICAgYmFja2luZ19hc3NldCxcclxuICAgICAgICAgICAgYmFja2luZ19iYWxhbmNlXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgc2hvcnRfYW1vdW50LFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvLFxyXG4gICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyxcclxuICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbixcclxuICAgICAgICAgICAgdXNlVGFyZ2V0Q29sbGF0ZXJhbFxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBxdW90ZVByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFjb2xsYXRlcmFsX3JhdGlvIHx8XHJcbiAgICAgICAgICAgIGlzTmFOKGNvbGxhdGVyYWxfcmF0aW8pIHx8XHJcbiAgICAgICAgICAgICEoY29sbGF0ZXJhbF9yYXRpbyA+IDAuMCAmJiBjb2xsYXRlcmFsX3JhdGlvIDwgMTAwMC4wKVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbyA9IDA7XHJcbiAgICAgICAgYml0YXNzZXRfYmFsYW5jZSA9ICFiaXRhc3NldF9iYWxhbmNlXHJcbiAgICAgICAgICAgID8ge2JhbGFuY2U6IDAsIGlkOiBudWxsfVxyXG4gICAgICAgICAgICA6IGJpdGFzc2V0X2JhbGFuY2UudG9KUygpO1xyXG4gICAgICAgIGJhY2tpbmdfYmFsYW5jZSA9ICFiYWNraW5nX2JhbGFuY2VcclxuICAgICAgICAgICAgPyB7YmFsYW5jZTogMCwgaWQ6IG51bGx9XHJcbiAgICAgICAgICAgIDogYmFja2luZ19iYWxhbmNlLnRvSlMoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxhdGVyYWxDbGFzcyA9IGNsYXNzTmFtZXMoXCJmb3JtLWdyb3VwXCIsIHtcclxuICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogZXJyb3JzLmNvbGxhdGVyYWxfYmFsYW5jZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBjb2xsYXRlcmFsUmF0aW9DbGFzcyA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIFwiZm9ybS1ncm91cFwiLFxyXG4gICAgICAgICAgICB7XCJoYXMtZXJyb3JcIjogZXJyb3JzLmJlbG93X21haW50ZW5hbmNlfSxcclxuICAgICAgICAgICAge1wiaGFzLXdhcm5pbmdcIjogZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIER5bmFtaWNhbGx5IHVwZGF0ZSB1c2VyJ3MgcmVtYWluaW5nIGNvbGxhdGVyYWxcclxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGxldCBiYWNraW5nQmFsYW5jZSA9IGJhY2tpbmdfYmFsYW5jZS5pZFxyXG4gICAgICAgICAgICA/IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhY2tpbmdfYmFsYW5jZS5pZClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGxldCBiYWNraW5nQW1vdW50ID0gYmFja2luZ0JhbGFuY2UgPyBiYWNraW5nQmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpIDogMDtcclxuICAgICAgICBsZXQgY29sbGF0ZXJhbENoYW5nZSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9uIC1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAxMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0JhbGFuY2UgPSBiYWNraW5nQW1vdW50IC0gY29sbGF0ZXJhbENoYW5nZTtcclxuXHJcbiAgICAgICAgbGV0IGJpdEFzc2V0QmFsYW5jZVRleHQgPSAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7Yml0YXNzZXRfYmFsYW5jZS5pZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnQgYmFsYW5jZT17Yml0YXNzZXRfYmFsYW5jZS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtxdW90ZV9hc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fcGF5RGVidC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cucGF5X21heF9kZWJ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHxcclxuICAgICAgICAgICAgICAgIHtjb2xsYXRlcmFsX3JhdGlvICE9IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fbWF4aW1pemVEZWJ0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cudXNlX21heFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXNhYmxlZC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3cubWF4aW1pemVfZGVidF9zZXRfcmF0aW9fc2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy51c2VfbWF4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYmFja2luZ0JhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge2JhY2tpbmdfYmFsYW5jZS5pZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3JlbWFpbmluZ0JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFja2luZ19hc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYWNraW5nX2Fzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9tYXhpbWl6ZUNvbGxhdGVyYWwuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGZlZWRfcHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcclxuXHJcbiAgICAgICAgbGV0IG1haW50ZW5hbmNlUmF0aW8gPSB0aGlzLl9nZXRNYWludGVuYW5jZVJhdGlvKCk7XHJcblxyXG4gICAgICAgIGxldCBzcXVlZXplUmF0aW8gPVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXHJcbiAgICAgICAgICAgIF0pIC8gMTAwMDtcclxuXHJcbiAgICAgICAgbGV0IGlzUHJlZGljdGlvbk1hcmtldCA9IHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgbGV0IGlzT3JpZ2luYWxCZWxvd01DUiA9XHJcbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWwgPiAwICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2dldENvbGxhdGVyYWxSYXRpbyhcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmRlYnQsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsXHJcbiAgICAgICAgICAgICkgPCBtYWludGVuYW5jZVJhdGlvO1xyXG5cclxuICAgICAgICBpZiAoIWlzUHJlZGljdGlvbk1hcmtldCAmJiBpc05hTihmZWVkX3ByaWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciB0ZXh0LWNlbnRlciBuby1vdmVyZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJib3Jyb3cubm9fdmFsaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfc3ltYm9sPXtxdW90ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IGJ1dHRvbi1ncm91cCB0ZXh0LWNlbnRlciBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJpZ2dlciBjbG9zZT17dGhpcy5wcm9wcy5tb2RhbElkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJ1dHRvbiB3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBzbWFsbC0xMCBzbWFsbC1vZmZzZXQtMSBuby1vdmVyZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93LnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfc3ltYm9sPXtxdW90ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5oaWRlX2hlbHAgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50cy9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc1ByZWRpY3Rpb25NYXJrZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJCb3Jyb3dNb2RhbFByZWRpY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJvcnJvd01vZGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnQ9e3F1b3RlX2Fzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsPXtiYWNraW5nX2Fzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3Jyb3dlcj17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9e21haW50ZW5hbmNlUmF0aW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzT3JpZ2luYWxCZWxvd01DUiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJib3Jyb3cuZXJyb3JzLmJlbG93X2luZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUHJlZGljdGlvbk1hcmtldCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWZlZWRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvcnJvdy1wcmljZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uZmVlZF9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cXVvdGVfYXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudF9wcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17cXVvdGVfYXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudF9wcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWZlZWRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRvb2x0aXAgYm9ycm93LXByaWNlLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm1hcmdpbl9wcmljZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc3F1ZWV6ZVwiIC8+OiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtxdW90ZV9hc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImN1cnJlbnRfZmVlZFwiLCBcInNldHRsZW1lbnRfcHJpY2VcIiwgXCJiYXNlXCIsIFwiYW1vdW50XCJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiY3VycmVudF9mZWVkXCIsIFwic2V0dGxlbWVudF9wcmljZVwiLCBcImJhc2VcIiwgXCJhc3NldF9pZFwiXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiY3VycmVudF9mZWVkXCIsIFwic2V0dGxlbWVudF9wcmljZVwiLCBcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17c3F1ZWV6ZVJhdGlvICogcXVvdGVfYXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJjdXJyZW50X2ZlZWRcIiwgXCJzZXR0bGVtZW50X3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhbW91bnRcIl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3ctcHJpY2UtZmluYWwgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9ycy5iZWxvd19tYWludGVuYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtd2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS55b3VyX3ByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5uZXdQb3NpdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW50ZW5hbmNlUmF0aW8gKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlUHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtxdW90ZV9hc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtiYWNraW5nX2Fzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXRlcmFsICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2luZ1ByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVMb2NrZWRDUi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmxvY2tlZENSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxvY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVubG9ja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMV81eFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAtMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17c2hvcnRfYW1vdW50LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQm9ycm93Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W3F1b3RlX2Fzc2V0LmdldChcImlkXCIpXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JpdEFzc2V0QmFsYW5jZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xsYXRlcmFsQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTG9ja2VkQ1IuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZENSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxvY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVubG9ja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMV81eFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAtMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zYWN0aW9uLmNvbGxhdGVyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y29sbGF0ZXJhbC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNvbGxhdGVyYWxDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFja2luZ19hc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tiYWNraW5nX2Fzc2V0LmdldChcImlkXCIpXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhY2tpbmdCYWxhbmNlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY29sbGF0ZXJhbF9iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUHJlZGljdGlvbk1hcmtldCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbGxhdGVyYWxSYXRpb0NsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIzLjVyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93LmNvbGxfcmF0aW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbyA9PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25SYXRpb0NoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTIlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjg1JVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCI2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uUmF0aW9DaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbGxhdGVyYWxfcmF0aW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5iZWxvd19tYWludGVuYW5jZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI4NSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5iZWxvd19tYWludGVuYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tZ3JvdXBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMy41cmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1odG1sPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZVRhcmdldENvbGxhdGVyYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRVc2VUYXJnZXRDb2xsYXRlcmFsLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuZW5hYmxlX3RhcmdldF9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOYU4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblRhcmdldFJhdGlvQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC0xMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTIlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiODUlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25UYXJnZXRSYXRpb0NoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIxZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFVzZVRhcmdldENvbGxhdGVyYWwuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuZW5hYmxlX3RhcmdldF9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1wYWRkaW5nIGdyaWQtY29udGVudCBidXR0b24tZ3JvdXAgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImJ1dHRvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuYWRqdXN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsU3RhdGUodGhpcy5wcm9wcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBob2xsb3cgcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFRyaWdnZXIgY2xvc2U9e3RoaXMucHJvcHMubW9kYWxJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj48VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0uY2FuY2VsXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJpZ2dlcj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQm9ycm93TW9kYWxDb250ZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCb3Jyb3dNb2RhbENvbnRlbnQpO1xyXG5cclxuLyogVGhpcyB3cmFwcGVyIGNsYXNzIGFwcGVhcnMgdG8gYmUgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIGRlY29yYXRvciBlYXRzIHRoZSBzaG93IG1ldGhvZCBmcm9tIHJlZnMgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc21hbGxTY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBaZkFwaS5wdWJsaXNoKHRoaXMucHJvcHMubW9kYWxJZCwgXCJvcGVuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNtYWxsU2NyZWVuOiB3aW5kb3cuaW5uZXJIZWlnaHQgPD0gODAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cXVvdGVfYXNzZXQsIGJhY2tpbmdfYXNzZXQsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgYWNjb3VudEJhbGFuY2UgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuICAgICAgICBsZXQgY29yZUJhbGFuY2UsIGJpdEFzc2V0QmFsYW5jZTtcclxuXHJcbiAgICAgICAgaWYgKGFjY291bnRCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkIGluIGFjY291bnRCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09IGJhY2tpbmdfYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JlQmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09IHF1b3RlX2Fzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYml0QXNzZXRCYWxhbmNlID0gYWNjb3VudEJhbGFuY2VbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIXRoaXMuc3RhdGUub3BlbiA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxCYXNlTW9kYWxcclxuICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLm1vZGFsSWR9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvcHMubW9kYWxJZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvcnJvd01vZGFsQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cXVvdGVfYXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxfb3JkZXJzPXthY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiY2FsbF9vcmRlcnNcIiwgTGlzdCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTGlzdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNDYWxsT3JkZXJzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIikuc2l6ZSA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPXt0aGlzLnByb3BzLm1vZGFsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdGFzc2V0X2JhbGFuY2U9e2JpdEFzc2V0QmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2luZ19iYWxhbmNlPXtjb3JlQmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2luZ19hc3NldD17YmFja2luZ19hc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9oZWxwPXt0aGlzLnN0YXRlLnNtYWxsU2NyZWVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CYXNlTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBbkNBO0FBREE7QUF3Q0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFyQkE7QUEwQkE7Ozs7QUF2RUE7QUFDQTtBQXlFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU9BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFHQTtBQUNBO0FBRkE7QUFQQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBRkE7QUF2Q0E7QUF3REE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQUZBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQXhCQTtBQWlDQTtBQUNBO0FBT0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQXhCQTtBQWxDQTtBQW1FQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVZBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQVJBO0FBL0hBO0FBMklBOzs7O0FBMU9BO0FBQ0E7QUE0T0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUlBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFSQTtBQVJBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQXZCQTtBQURBO0FBVEE7QUFEQTtBQThDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQXJFQTtBQUxBO0FBc0ZBOzs7O0FBelRBO0FBQ0E7QUEyVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBSkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBSEE7QUFyQkE7QUFEQTtBQW1DQTs7OztBQXhDQTtBQUNBO0FBMENBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQXJCQTtBQXNDQTs7OztBQWpEQTtBQUNBO0FBbURBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUF4Q0E7QUFDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFSQTtBQWNBO0FBQ0E7Ozs7QUF6REE7QUFDQTtBQTJEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFMQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFXQTs7O0FBRUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUF0Q0E7QUFDQTtBQXdDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBZUE7Ozs7QUFsQ0E7QUFDQTtBQW9DQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUF5QkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFlQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBVEE7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQTVCQTtBQXFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUZBO0FBREE7QUFEQTtBQVBBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUF4QkE7QUFpQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBREE7QUFQQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBdEJBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBWkE7QUEwQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQS9CQTtBQXdDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBYkE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFOQTtBQVFBO0FBUkE7QUFEQTtBQWhMQTtBQThMQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFnQkE7QUFHQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFOQTtBQUpBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBWEE7QUFEQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBdERBO0FBNERBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBUEE7QUFEQTtBQXhFQTtBQXFGQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFZQTtBQVpBO0FBQ0E7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVJBO0FBVUE7QUFYQTtBQUpBO0FBSkE7QUF3QkE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBUkE7QUFEQTtBQVlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVNBO0FBVEE7QUFmQTtBQTRCQTs7OztBQWgxQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFDQTtBQUZBO0FBQ0E7QUF5MEJBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUdBO0FBRkE7QUFQQTtBQWNBOzs7O0FBakNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ24zQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBZEE7QUFlQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBU0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBYkE7QUFlQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVpBO0FBY0E7OztBQUdBO0FBS0E7QUFRQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBSkE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBTEE7QUFuQkE7QUE0QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBTkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBTEE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFmQTtBQURBO0FBVkE7QUFuQkE7QUFtREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFKQTtBQXBEQTtBQURBO0FBNEVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVkE7QUFKQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFOQTtBQVpBO0FBcEJBO0FBREE7QUE4Q0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWJBO0FBUEE7QUF5QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVhBO0FBVkE7QUE1QkE7QUF5REE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBREE7QUF6TEE7QUFvTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFOQTtBQURBO0FBN09BO0FBOFBBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVlBO0FBWkE7QUFDQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUkE7QUFVQTtBQVhBO0FBSkE7QUFKQTtBQXdCQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBZEE7QUEwQkE7Ozs7QUF6b0JBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBeW9CQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRkE7QUFNQTs7OztBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBWEE7QUFDQTtBQWFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVdBOzs7O0FBbENBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQVFBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBR0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBS0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFPQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBSUE7QUFJQTtBQUtBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUtBO0FBTkE7QUFkQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQkE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUdBO0FBQ0E7QUFHQTtBQU1BO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBUEE7QUFyQkE7QUFpQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFSQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFmQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQU9BO0FBT0E7QUFPQTtBQXZCQTtBQUxBO0FBcURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVRBO0FBZkE7QUE1REE7QUE4RkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQVJBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWJBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFSQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFOQTtBQXhCQTtBQWtDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVZBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFUQTtBQWpCQTtBQTZCQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBUkE7QUF2Q0E7QUFtREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQUhBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQUxBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBWkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFPQTtBQWZBO0FBbkJBO0FBZkE7QUFzREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBREE7QUF4RUE7QUFKQTtBQXBEQTtBQThJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQVBBO0FBaFVBO0FBVEE7QUFEQTtBQW9XQTs7OztBQWhqQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQWdqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBREE7QUFOQTtBQTBCQTs7OztBQXJFQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==