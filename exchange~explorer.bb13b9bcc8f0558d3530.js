(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 2424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2425);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TransitionWrapper = function (_React$Component) {
    _inherits(TransitionWrapper, _React$Component);

    function TransitionWrapper() {
        _classCallCheck(this, TransitionWrapper);

        var _this = _possibleConstructorReturn(this, (TransitionWrapper.__proto__ || Object.getPrototypeOf(TransitionWrapper)).call(this));

        _this.state = {
            animateEnter: false
        };

        _this.timer = null;
        return _this;
    }

    _createClass(TransitionWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.enableAnimation();
        }
    }, {
        key: "resetAnimation",
        value: function resetAnimation() {
            this.setState({
                animateEnter: false
            });

            this.enableAnimation();
        }
    }, {
        key: "enableAnimation",
        value: function enableAnimation() {
            var _this2 = this;

            this.timer = setTimeout(function () {
                if (_this2.timer) {
                    _this2.setState({
                        animateEnter: true
                    });
                }
            }, 2000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.children) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.props.component);
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default.a,
                    {
                        className: this.props.className,
                        component: this.props.component,
                        transitionName: this.props.transitionName,
                        transitionEnterTimeout: this.props.enterTimeout,
                        transitionEnter: this.state.animateEnter,
                        transitionLeave: false
                    },
                    this.props.children
                );
            }
        }
    }]);

    return TransitionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TransitionWrapper.defaultProps = {
    component: "span",
    enterTimeout: 2000
};
/* harmony default export */ __webpack_exports__["default"] = (TransitionWrapper);

/***/ }),

/***/ 2450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2401);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2310);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(760);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2451);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(701);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2235);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2257);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2185);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(702);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2258);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2236);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2454);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1818);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(407);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2455);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(709);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2203);
/* harmony import */ var _QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2456);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



























var MarketGroup = function (_React$Component) {
    _inherits(MarketGroup, _React$Component);

    function MarketGroup(props) {
        _classCallCheck(this, MarketGroup);

        var _this = _possibleConstructorReturn(this, (MarketGroup.__proto__ || Object.getPrototypeOf(MarketGroup)).call(this));

        _this.state = _this._getInitialState(props);
        return _this;
    }

    _createClass(MarketGroup, [{
        key: "_getInitialState",
        value: function _getInitialState(props) {
            var open = props.findMarketTab ? true : props.viewSettings.get("myMarketsBase_" + props.index);
            return {
                open: open !== undefined ? open : true,
                inverseSort: props.viewSettings.get("myMarketsInvert", true),
                sortBy: props.viewSettings.get("myMarketsSort", "volume")
            };
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.findMarketTab !== this.props.findMarketTab) {
                this.setState(this._getInitialState(nextProps));
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!nextProps.markets || !this.props.markets) {
                return true;
            }
            return !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextState, this.state) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.markets, this.props.markets) || nextProps.starredMarkets !== this.props.starredMarkets || nextProps.marketStats !== this.props.marketStats || nextProps.userMarkets !== this.props.userMarkets;
        }
    }, {
        key: "_inverseSort",
        value: function _inverseSort() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                myMarketsInvert: !this.state.myMarketsInvert
            });
            this.setState({
                inverseSort: !this.state.inverseSort
            });
        }
    }, {
        key: "_changeSort",
        value: function _changeSort(type) {
            if (type !== this.state.sortBy) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                    myMarketsSort: type
                });
                this.setState({
                    sortBy: type
                });
            } else {
                this._inverseSort();
            }
        }

        // _onSelectBase(e) {
        //     e.preventDefault();
        //     e.stopPropagation();

        //     SettingsActions.changeBase(this.props.index, e.target.value);
        // }

    }, {
        key: "_onToggle",
        value: function _onToggle() {
            if (!this.props.findMarketTab) {
                var open = !this.state.open;
                this.setState({
                    open: open
                });

                var setting = {};
                setting["myMarketsBase_" + this.props.index] = open;
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting(setting);
            }
        }
    }, {
        key: "_onToggleUserMarket",
        value: function _onToggleUserMarket(market) {
            var _market$split = market.split("_"),
                _market$split2 = _slicedToArray(_market$split, 2),
                base = _market$split2[0],
                quote = _market$split2[1];

            var newValue = !this.props.userMarkets.get(market);
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].setUserMarket(base, quote, newValue);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                columns = _props.columns,
                markets = _props.markets,
                base = _props.base,
                marketStats = _props.marketStats,
                starredMarkets = _props.starredMarkets,
                current = _props.current;
            var _state = this.state,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort,
                open = _state.open;


            if (!markets || !markets.length) {
                return null;
            }

            var headers = columns.map(function (header) {
                switch (header.name) {
                    case "market":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "name")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market" })
                        );

                    case "vol":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "volume"),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.vol_short" })
                        );

                    case "price":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name, style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.price" })
                        );

                    case "quoteSupply":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.base_supply" })
                        );

                    case "baseSupply":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.quote_supply" })
                        );

                    case "change":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "change"),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.change" })
                        );

                    case "issuer":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "explorer.assets.issuer" })
                        );

                    case "add":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name, style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.confirm_add" })
                        );

                    default:
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { key: header.name });
                }
            });

            var marketRows = markets.map(function (market) {
                if (_this2.props.onlyLiquid && marketStats.get(market.id) && marketStats.get(market.id).volumeBase == 0) {
                    return null;
                }
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    key: market.id,
                    name: base === "others" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: market.quote }),
                        ":",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: market.base })
                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        dataPlace: "left",
                        name: market.quote
                    }),
                    quote: market.quote,
                    base: market.base,
                    columns: columns,
                    leftAlign: true,
                    compact: true,
                    noSymbols: true,
                    stats: marketStats.get(market.id),
                    starred: starredMarkets.has(market.id),
                    current: current === market.id,
                    isChecked: _this2.props.userMarkets.has(market.id),
                    isDefault: _this2.props.defaultMarkets && _this2.props.defaultMarkets.has(market.id),
                    onCheckMarket: _this2._onToggleUserMarket.bind(_this2),
                    location: _this2.props.location,
                    history: _this2.props.history
                });
            }).filter(function (a) {
                return a !== null;
            }).sort(function (a, b) {
                var a_symbols = a.key.split("_");
                var b_symbols = b.key.split("_");
                var aStats = marketStats.get(a_symbols[0] + "_" + a_symbols[1]);
                var bStats = marketStats.get(b_symbols[0] + "_" + b_symbols[1]);

                switch (sortBy) {
                    case "name":
                        if (a_symbols[0] > b_symbols[0]) {
                            return inverseSort ? -1 : 1;
                        } else if (a_symbols[0] < b_symbols[0]) {
                            return inverseSort ? 1 : -1;
                        } else {
                            if (a_symbols[1] > b_symbols[1]) {
                                return inverseSort ? -1 : 1;
                            } else if (a_symbols[1] < b_symbols[1]) {
                                return inverseSort ? 1 : -1;
                            } else {
                                return 0;
                            }
                        }

                    case "volume":
                        if (aStats && bStats) {
                            if (inverseSort) {
                                return bStats.volumeBase - aStats.volumeBase;
                            } else {
                                return aStats.volumeBase - bStats.volumeBase;
                            }
                        } else {
                            return 0;
                        }

                    case "change":
                        if (aStats && bStats) {
                            if (inverseSort) {
                                return bStats.change - aStats.change;
                            } else {
                                return aStats.change - bStats.change;
                            }
                        } else {
                            return 0;
                        }
                }
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { style: { paddingRight: 10 } },
                open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "table",
                    { className: "table table-hover text-right" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            headers
                        )
                    ),
                    marketRows && marketRows.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "tbody",
                        null,
                        marketRows
                    ) : null
                ) : null
            );
        }
    }]);

    return MarketGroup;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MarketGroup.defaultProps = {
    maxRows: 20,
    onlyLiquid: false
};

var MyMarkets = function (_React$Component2) {
    _inherits(MyMarkets, _React$Component2);

    function MyMarkets(props) {
        _classCallCheck(this, MyMarkets);

        var _this3 = _possibleConstructorReturn(this, (MyMarkets.__proto__ || Object.getPrototypeOf(MyMarkets)).call(this));

        _this3.clearInput = function () {
            _this3.setState({ myMarketFilter: "" });
        };

        _this3.handleSearchUpdate = function (e) {
            _this3.setState({
                myMarketFilter: e.target.value && e.target.value.toUpperCase()
            });
        };

        _this3.state = {
            inverseSort: props.viewSettings.get("myMarketsInvert", true),
            sortBy: props.viewSettings.get("myMarketsSort", "volume"),
            activeTab: props.viewSettings.get("favMarketTab", "my-market"),
            activeMarketTab: props.viewSettings.get("activeMarketTab", 0),
            lookupQuote: null,
            lookupBase: null,
            inputValue: "",
            minWidth: "100%",
            findBaseInput: "USD",
            activeFindBase: "USD"
        };

        _this3._setMinWidth = _this3._setMinWidth.bind(_this3);
        _this3.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__["default"].getAssetList.defer, 150);
        return _this3;
    }

    _createClass(MyMarkets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.searchAssets, this.props.searchAssets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.markets, this.props.markets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.starredMarkets, this.props.starredMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.defaultMarkets, this.props.defaultMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.marketStats, this.props.marketStats) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextState, this.state) || nextProps.current !== this.props.current || nextProps.minWidth !== this.props.minWidth || nextProps.listHeight !== this.props.listHeight || nextProps.preferredBases !== this.props.preferredBases || nextProps.onlyStars !== this.props.onlyStars || nextProps.onlyLiquid !== this.props.onlyLiquid || nextProps.assetsLoading !== this.props.assetsLoading || nextProps.userMarkets !== this.props.userMarkets;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            if (this.props.setMinWidth) {
                window.addEventListener("resize", this._setMinWidth, {
                    capture: false,
                    passive: true
                });
            }

            if (this.props.currrent) {
                var currentBase = this.props.current.split("_")[1];
                var currentIndex = this.props.preferredBases.findIndex(function (a) {
                    return a === currentBase;
                });
                if (currentIndex !== -1 && currentIndex !== this.state.activeMarketTab) {
                    this.setState({ activeMarketTab: currentIndex });
                }
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var historyContainer = this.refs.favorites;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(historyContainer);

            this._setMinWidth();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.props.setMinWidth) {
                window.removeEventListener("resize", this._setMinWidth);
            }
            clearTimeout(this.timer);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (this.props.myMarketTab && !np.myMarketTab) {
                if (this.refs.findSearchInput) this.refs.findSearchInput.focus();
            }
        }
    }, {
        key: "_setMinWidth",
        value: function _setMinWidth() {
            if (this.props.setMinWidth && this.refs.favorites && this.props.activeTab === "my-market") {
                if (this.state.minWidth !== this.refs.favorites.offsetWidth) {
                    this.setState({
                        minWidth: this.refs.favorites.offsetWidth
                    });
                }
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.refs.favorites) {
                var historyContainer = this.refs.favorites;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(historyContainer);
            }
        }
    }, {
        key: "_inverseSort",
        value: function _inverseSort() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                myMarketsInvert: !this.state.myMarketsInvert
            });
            this.setState({
                inverseSort: !this.state.inverseSort
            });
        }
    }, {
        key: "_changeSort",
        value: function _changeSort(type) {
            if (type !== this.state.sortBy) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                    myMarketsSort: type
                });
                this.setState({
                    sortBy: type
                });
            } else {
                this._inverseSort();
            }
        }
    }, {
        key: "_goMarkets",
        value: function _goMarkets() {
            this.props.history.push("/markets");
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                favMarketTab: tab
            });
            this.setState({
                activeTab: tab
            });

            this._setMinWidth();
        }
    }, {
        key: "_onInputName",
        value: function _onInputName(getBackedAssets, e) {
            var _this4 = this;

            var toFind = e.target.value.trim().toUpperCase();
            var isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_20__["ChainValidation"].is_valid_symbol_error(toFind, true);

            this.setState({
                inputValue: toFind
            });
            /* Don't lookup invalid asset names */
            if (toFind && toFind.length >= 2 && !isValidName) return;

            if (this.state.inputValue !== toFind) {
                this.timer && clearTimeout(this.timer);
            }

            this.timer = setTimeout(function () {
                _this4._lookupAssets(toFind, getBackedAssets);
            }, 1500);
        }
    }, {
        key: "_lookupAssets",
        value: function _lookupAssets(value) {
            var gatewayAssets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!value && value !== "") return;

            var symbols = value.toUpperCase().split(":");
            var quote = symbols[0];
            var base = symbols.length === 2 ? symbols[1] : null;

            this.setState({
                lookupQuote: quote,
                lookupBase: base
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting.defer({
                marketLookupInput: value.toUpperCase()
            });

            this.getAssetList(quote, 50, gatewayAssets);
        }
    }, {
        key: "toggleActiveMarketTab",
        value: function toggleActiveMarketTab(index) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                activeMarketTab: index
            });

            this.setState({
                activeMarketTab: index
            });
        }
    }, {
        key: "_onInputBaseAsset",
        value: function _onInputBaseAsset(asset) {
            this.setState({
                findBaseInput: asset.toUpperCase(),
                error: null
            });
        }
    }, {
        key: "_onFoundBaseAsset",
        value: function _onFoundBaseAsset(asset) {
            if (asset) {
                this.setState({ activeFindBase: asset.get("symbol") });
            }
        }
    }, {
        key: "_getMarkets",
        value: function _getMarkets() {
            var _props2 = this.props,
                searchAssets = _props2.searchAssets,
                defaultMarkets = _props2.defaultMarkets,
                onlyStars = _props2.onlyStars,
                userMarkets = _props2.userMarkets,
                preferredBases = _props2.preferredBases,
                starredMarkets = _props2.starredMarkets;
            var _state2 = this.state,
                activeTab = _state2.activeTab,
                lookupQuote = _state2.lookupQuote,
                lookupBase = _state2.lookupBase,
                myMarketFilter = _state2.myMarketFilter,
                activeMarketTab = _state2.activeMarketTab;

            var possibleGatewayAssets = Object(common_gateways__WEBPACK_IMPORTED_MODULE_23__["getPossibleGatewayPrefixes"])(preferredBases);

            var bases = this._getBases();
            var allMarkets = [],
                baseGroups = {};
            var otherMarkets = [];

            var myMarketTab = activeTab === "my-market";

            if (searchAssets.size) {
                searchAssets.filter(function (a) {
                    try {
                        if (a.options.description) {
                            var description = JSON.parse(a.options.description);
                            if ("visible" in description) {
                                if (!description.visible) return false;
                            }
                        }
                    } catch (e) {}

                    return a.symbol.indexOf(lookupQuote) !== -1 && a.symbol.length >= lookupQuote.length;
                }).forEach(function (asset) {
                    bases.forEach(function (base) {
                        var marketID = asset.symbol + "_" + base;

                        if (base !== asset.symbol) {
                            allMarkets.push([marketID, { quote: asset.symbol, base: base }]);
                        }
                    });
                });
            }

            allMarkets = allMarkets.filter(function (a) {
                // If a base asset is specified, limit the quote asset to the exact search term
                if (lookupBase) {
                    return a[1].quote === lookupQuote;
                }
                return true;
            });

            var activeMarkets = myMarketTab ? defaultMarkets : immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map(allMarkets);
            if (myMarketTab && userMarkets.size) {
                userMarkets.forEach(function (market, key) {
                    if (!activeMarkets.has(key)) activeMarkets = activeMarkets.set(key, market);
                });
            }

            function filterAndSeparateMarkets(base, matchBases, markets, baseGroups, otherMarkets) {
                var others = markets.filter(function (a) {
                    if (a.base === a.quote) return false;
                    /* Return search results in the Find Markets Tab */
                    if (!myMarketTab) {
                        if (lookupQuote.length < 1) {
                            return false;
                        }

                        return a.quote.indexOf(lookupQuote) !== -1;
                    } else {
                        /* Return filtered markets if a filter is input */
                        var ID = a.quote + "_" + a.base;
                        if (!!myMarketFilter) {
                            return ID.indexOf(myMarketFilter) !== -1;
                        }
                        /* Return only starred markets if that option is checked */
                        if (onlyStars && !starredMarkets.has(ID)) {
                            return false;
                        }
                        /* Else return all markets */
                        return true;
                    }
                }).map(function (market) {
                    var marketID = market.quote + "_" + market.base;
                    if (matchBases.indexOf(market.base) !== -1) {
                        if (!baseGroups[base]) {
                            baseGroups[base] = [];
                        }
                        var marketObject = {
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        };
                        if (!baseGroups[base].find(function (m) {
                            return m.id === marketID;
                        })) baseGroups[base].push(marketObject);
                        return null;
                    } else if (!preferredBases.includes(market.base) && possibleGatewayAssets.indexOf(market.base) === -1) {
                        // console.log("Adding to other markets:", base, market.base, preferredBases.toJS())
                        return {
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        };
                    }
                }).filter(function (a) {
                    return !!a;
                }).take(myMarketTab ? 100 : 20).toArray();
                return { otherMarkets: others.concat(otherMarkets), baseGroups: baseGroups };
            }

            if (activeMarkets.size > 0) {
                var currentBase = myMarketTab ? preferredBases.get(activeMarketTab) : this.state.activeFindBase;

                /* Check for possible gateway versions of the asset */
                // gatewayPrefixes.forEach(prefix => {
                //     let possibleGatewayAssetName = `${prefix}.${currentBase}`;
                //     let gatewayAsset = ChainStore.getAsset(
                //         possibleGatewayAssetName
                //     );
                //     /* If the gateway offers an asset for this base, add it to the list */
                //     if (!!gatewayAsset) {
                //         let gatewayMarkets = activeMarkets
                //             .map(m => {
                //                 if (m.quote === m.base) return null;
                //                 let newID = `${
                //                     m.quote
                //                 }_${possibleGatewayAssetName}`;
                //                 if (activeMarkets.has(newID)) return null;
                //                 return {
                //                     base: possibleGatewayAssetName,
                //                     quote: m.quote
                //                 };
                //             }, {})
                //             .filter(m => !!m);
                //         ({otherMarkets, baseGroups} = filterAndSeparateMarkets(
                //             currentBase,
                //             [currentBase, possibleGatewayAssetName],
                //             gatewayMarkets,
                //             baseGroups,
                //             otherMarkets
                //         ));
                //     }
                // });
                var _filterAndSeparateMar = filterAndSeparateMarkets(currentBase, [currentBase], activeMarkets, baseGroups, otherMarkets);

                otherMarkets = _filterAndSeparateMar.otherMarkets;
                baseGroups = _filterAndSeparateMar.baseGroups;
            }

            return { baseGroups: baseGroups, otherMarkets: otherMarkets };
        }
    }, {
        key: "_getBases",
        value: function _getBases() {
            var _props3 = this.props,
                preferredBases = _props3.preferredBases,
                searchAssets = _props3.searchAssets;
            var _state3 = this.state,
                lookupQuote = _state3.lookupQuote,
                lookupBase = _state3.lookupBase;


            var bases = searchAssets.filter(function (a) {
                if (lookupBase && lookupBase.length) {
                    return a.symbol.indexOf(lookupBase) === 0;
                }
                return a.symbol.indexOf(lookupQuote) !== -1;
            }).map(function (asset) {
                if (lookupBase && lookupBase.length) {
                    if (asset.symbol.indexOf(lookupBase) === 0) {
                        return asset.symbol;
                    }
                } else if (preferredBases.includes(asset.symbol)) {
                    if (asset.symbol.length >= lookupQuote.length && asset.symbol.length < lookupQuote.length + 3) {
                        return asset.symbol;
                    }
                }
            }).filter(function (a) {
                return !!a;
            }).toArray();

            bases = bases.concat(preferredBases.filter(function (a) {
                if (!lookupBase || !lookupBase.length) {
                    return true;
                }
                return a.indexOf(lookupBase) === 0;
            }).toArray());

            bases = bases.filter(function (base) {
                if (lookupBase && lookupBase.length > 1) {
                    return base.indexOf(lookupBase) === 0;
                } else {
                    return true;
                }
            });

            return bases;
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var _props4 = this.props,
                starredMarkets = _props4.starredMarkets,
                marketStats = _props4.marketStats,
                columns = _props4.columns,
                assetsLoading = _props4.assetsLoading,
                preferredBases = _props4.preferredBases,
                current = _props4.current,
                viewSettings = _props4.viewSettings,
                listHeight = _props4.listHeight;
            var _state4 = this.state,
                activeMarketTab = _state4.activeMarketTab,
                activeTab = _state4.activeTab;


            var myMarketTab = activeTab === "my-market";
            var defaultBases = preferredBases.map(function (a) {
                return a;
            });

            if (!myMarketTab) {
                preferredBases = preferredBases.clear();
                preferredBases = preferredBases.push(this.state.activeFindBase);
            }

            // Add some default base options
            // let preferredBases = [coreSymbol, "BTC", "USD", "CNY"];

            /* In the find-market tab, only use market tab 0 */
            if (!myMarketTab) activeMarketTab = 0;

            var _getMarkets2 = this._getMarkets(),
                baseGroups = _getMarkets2.baseGroups,
                otherMarkets = _getMarkets2.otherMarkets;

            var hasOthers = otherMarkets && otherMarkets.length;
            var hc = "mymarkets-header clickable";
            var starClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()(hc, { inactive: !myMarketTab });
            var allClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()(hc, { inactive: myMarketTab });

            var listStyle = {
                minWidth: this.state.minWidth,
                minHeight: "6rem"
            };
            if (listHeight) {
                listStyle.height = listHeight;
            }

            var translator = __webpack_require__(562);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: this.props.className, style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: this.props.headerStyle,
                        className: "grid-block shrink left-orderbook-header bottom-header"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            ref: "myMarkets",
                            className: starClass,
                            onClick: this._changeTab.bind(this, "my-market"),
                            "data-intro": translator.translate("walkthrough.my_markets_tab")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market_name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: allClass,
                            onClick: this._changeTab.bind(this, "find-market"),
                            "data-intro": translator.translate("walkthrough.find_markets_tab")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.more" })
                    )
                ),
                this.props.controls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "small-12 medium-6",
                        style: { padding: "1rem 0" }
                    },
                    this.props.controls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { paddingBottom: "0.5rem" } },
                        this.props.controls
                    ) : null
                ) : null,
                myMarketTab ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "grid-block vertical shrink",
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "0.75rem 0.5rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { margin: "3px 0 0" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyLiquid,
                                onChange: function onChange() {
                                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                                        onlyLiquid: !_this5.props.onlyLiquid
                                    });
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.show_only_liquid" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { margin: "3px 0 0" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyStars,
                                onChange: function onChange() {
                                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__["default"].toggleStars();
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    string: "exchange.show_only_star_formatter",
                                    keys: [{
                                        type: "icon",
                                        value: "fi-star",
                                        className: "gold-star",
                                        arg: "star_icon"
                                    }]
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "search-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "form",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                autoComplete: "off",
                                style: {
                                    fontSize: "0.9rem",
                                    height: "inherit",
                                    position: "relative",
                                    top: 1,
                                    padding: 2
                                },
                                type: "text",
                                className: "no-margin market-filter-input",
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("exchange.filter"),
                                maxLength: "16",
                                name: "focus",
                                required: "required",
                                value: this.state.myMarketFilter,
                                onChange: this.handleSearchUpdate
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                                className: "clear-text",
                                type: "reset",
                                onClick: this.clearInput
                            })
                        )
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "0.75rem 0.5rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "table",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tbody",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tr",
                                { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        onAssetSelect: this._onFoundBaseAsset.bind(this),
                                        assets: defaultBases,
                                        onChange: this._onInputBaseAsset.bind(this),
                                        asset: this.state.findBaseInput,
                                        assetInput: this.state.findBaseInput,
                                        tabIndex: 1,
                                        style: {
                                            width: "100%",
                                            paddingBottom: "1.5rem"
                                        },
                                        onFound: this._onFoundBaseAsset.bind(this),
                                        label: "exchange.quote",
                                        noLabel: true,
                                        inputStyle: { fontSize: "0.9rem" }
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tr",
                                { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.user_issued_assets.name" }),
                                        ":"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                        style: {
                                            fontSize: "0.9rem",
                                            position: "relative",
                                            top: 1
                                        },
                                        type: "text",
                                        value: this.state.inputValue,
                                        onChange: this._onInputName.bind(this, true),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("exchange.search"),
                                        maxLength: "16",
                                        tabIndex: 2,
                                        ref: "findSearchInput"
                                    }),
                                    this.state.assetNameError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        {
                                            className: "error-area",
                                            style: { paddingTop: 10 }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "span",
                                            {
                                                style: {
                                                    wordBreak: "break-all"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                                content: "explorer.asset.invalid",
                                                name: this.state.inputValue
                                            })
                                        )
                                    ) : null
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "ul",
                    { className: "mymarkets-tabs" },
                    myMarketTab && preferredBases.map(function (base, index) {
                        if (!base) return null;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "li",
                            {
                                key: base,
                                onClick: _this5.toggleActiveMarketTab.bind(_this5, index),
                                className: classnames__WEBPACK_IMPORTED_MODULE_16___default()("mymarkets-tab", {
                                    active: activeMarketTab === index
                                })
                            },
                            base.replace("RUDEX.", "")
                        );
                    }),
                    !myMarketTab ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_16___default()("mymarkets-tab", {
                                active: true
                            })
                        },
                        this.state.activeFindBase
                    ) : null,
                    myMarketTab && hasOthers ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            key: "others",
                            style: { textTransform: "uppercase" },
                            onClick: this.toggleActiveMarketTab.bind(this, preferredBases.size + 1),
                            className: classnames__WEBPACK_IMPORTED_MODULE_16___default()("mymarkets-tab", {
                                active: activeMarketTab === preferredBases.size + 1
                            })
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.others" })
                    ) : null,
                    myMarketTab && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            key: "quote_edit",
                            style: { textTransform: "uppercase" },
                            onClick: function onClick() {
                                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22___default.a.publish("quote_selection", "open");
                            },
                            className: "mymarkets-tab"
                        },
                        "\xA0+\xA0"
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: listStyle,
                        className: "table-container grid-block vertical mymarkets-list",
                        ref: "favorites"
                    },
                    assetsLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            style: {
                                position: "absolute",
                                paddingTop: "3rem",
                                textAlign: "center",
                                width: "100%"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__["default"], { type: "three-bounce" })
                    ) : null,
                    preferredBases.filter(function (a) {
                        return a === preferredBases.get(activeMarketTab);
                    }).map(function (base, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketGroup, {
                            userMarkets: _this5.props.userMarkets,
                            defaultMarkets: _this5.props.defaultMarkets,
                            index: index,
                            allowChange: false,
                            key: base,
                            current: current,
                            starredMarkets: starredMarkets,
                            marketStats: marketStats,
                            viewSettings: viewSettings,
                            columns: myMarketTab ? columns : _this5.props.findColumns || columns,
                            markets: baseGroups[base],
                            base: base,
                            maxRows: myMarketTab ? 20 : 10,
                            findMarketTab: !myMarketTab,
                            location: _this5.props.location,
                            history: _this5.props.history,
                            onlyLiquid: _this5.props.onlyLiquid && myMarketTab
                        });
                    }),
                    activeMarketTab === preferredBases.size + 1 && myMarketTab && hasOthers ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketGroup, {
                        userMarkets: this.props.userMarkets,
                        index: preferredBases.size,
                        current: current,
                        starredMarkets: starredMarkets,
                        marketStats: marketStats,
                        viewSettings: viewSettings,
                        columns: columns,
                        markets: otherMarkets,
                        base: "others",
                        maxRows: myMarketTab ? 20 : 10,
                        findMarketTab: !myMarketTab,
                        location: this.props.location,
                        history: this.props.history
                    }) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__["default"], { quotes: this.props.preferredBases })
            );
        }
    }]);

    return MyMarkets;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MyMarkets.defaultProps = {
    activeTab: "my-market",
    setMinWidth: false
};


MyMarkets = react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default()(MyMarkets, 50, { leading: false });

var MyMarketsWrapper = function (_React$Component3) {
    _inherits(MyMarketsWrapper, _React$Component3);

    function MyMarketsWrapper() {
        _classCallCheck(this, MyMarketsWrapper);

        return _possibleConstructorReturn(this, (MyMarketsWrapper.__proto__ || Object.getPrototypeOf(MyMarketsWrapper)).apply(this, arguments));
    }

    _createClass(MyMarketsWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyMarkets, this.props);
        }
    }]);

    return MyMarketsWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(MyMarketsWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().starredMarkets,
            onlyLiquid: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("onlyLiquid", false),
            defaultMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().defaultMarkets,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings,
            preferredBases: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().preferredBases,
            marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().allMarketStats,
            userMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().userMarkets,
            searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().assets,
            onlyStars: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().onlyStars,
            assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().assetsLoading
        };
    }
}));

/***/ }),

/***/ 2451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1969);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2186);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2452);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2453);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(558);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(774);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2236);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(702);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(716);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var MarketRow = function (_React$Component) {
    _inherits(MarketRow, _React$Component);

    function MarketRow() {
        _classCallCheck(this, MarketRow);

        var _this = _possibleConstructorReturn(this, (MarketRow.__proto__ || Object.getPrototypeOf(MarketRow)).call(this));

        _this.statsInterval = null;
        return _this;
    }

    _createClass(MarketRow, [{
        key: "_onClick",
        value: function _onClick(marketID) {
            var newPath = "/market/" + marketID;
            if (newPath !== this.props.location.pathname) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].switchMarket();
                this.props.history.push("/market/" + marketID);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.statsChecked = new Date();
            this.statsInterval = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketStatsInterval(35 * 1000, this.props.base, this.props.quote);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.statsInterval) this.statsInterval();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextProps, this.props);
        }
    }, {
        key: "_onStar",
        value: function _onStar(quote, base, e) {
            e.preventDefault();
            if (!this.props.starred) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quote = _props.quote,
                base = _props.base,
                noSymbols = _props.noSymbols,
                stats = _props.stats,
                starred = _props.starred;

            if (!quote || !base) {
                return null;
            }

            var marketID = quote.get("symbol") + "_" + base.get("symbol");
            var marketName = quote.get("symbol") + ":" + base.get("symbol");
            var dynamic_data = this.props.getDynamicObject(quote.get("dynamic_asset_data_id"));
            var base_dynamic_data = this.props.getDynamicObject(base.get("dynamic_asset_data_id"));

            var price = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convertPrice(quote, base);

            var rowStyles = {};
            if (this.props.leftAlign) {
                rowStyles.textAlign = "left";
            }

            var buttonClass = "button outline";
            var buttonStyle = null;
            if (this.props.compact) {
                buttonClass += " no-margin";
                buttonStyle = {
                    marginBottom: 0,
                    fontSize: "0.75rem",
                    padding: "4px 10px",
                    borderRadius: "0px",
                    letterSpacing: "0.05rem"
                };
            }

            var columns = this.props.columns.map(function (column) {
                switch (column.name) {
                    case "star":
                        var starClass = starred ? "gold-star" : "grey-star";
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onStar.bind(_this2, quote.get("symbol"), base.get("symbol")),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                className: starClass,
                                name: "fi-star",
                                title: "icons.fi_star.symbol"
                            })
                        );

                    case "vol":
                        var amount = stats ? stats.volumeBase : 0;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right",
                                key: column.index
                            },
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_volume(amount)
                        );

                    case "change":
                        var change = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(stats && stats.change ? stats.change : 0, 2);
                        var changeClass = change === "0.00" ? "" : change > 0 ? "change-up" : "change-down";

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right " + changeClass,
                                key: column.index
                            },
                            change + "%"
                        );

                    case "marketName":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: buttonClass,
                                    style: buttonStyle
                                },
                                marketName
                            )
                        );

                    case "market":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                replaceNoneToBts: false,
                                maxWidth: 20,
                                name: quote.get("symbol")
                            }),
                            _this2.props.name
                        );

                    case "price":
                        var finalPrice = stats && stats.price ? stats.price.toReal() : stats && stats.close && stats.close.quote.amount && stats.close.base.amount ? common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(stats.close.quote.amount, quote, stats.close.base.amount, base, true) : common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(price.quote.amount, quote, price.base.amount, base, true);

                        var highPrecisionAssets = ["BTC", "OPEN.BTC", "TRADE.BTC", "GOLD", "SILVER"];
                        var precision = 6;
                        if (highPrecisionAssets.indexOf(base.get("symbol")) !== -1) {
                            precision = 8;
                        }

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right",
                                key: column.index
                            },
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(finalPrice, finalPrice > 1000 ? 0 : finalPrice > 10 ? 2 : precision)
                        );

                    case "quoteSupply":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            dynamic_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                style: { fontWeight: "bold" },
                                amount: parseInt(dynamic_data.get("current_supply"), 10),
                                asset: quote.get("id")
                            }) : null
                        );

                    case "baseSupply":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            base_dynamic_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                style: { fontWeight: "bold" },
                                amount: parseInt(base_dynamic_data.get("current_supply"), 10),
                                asset: base.get("id")
                            }) : null
                        );

                    case "issuer":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__["default"], { account: quote.get("issuer") })
                        );

                    case "add":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right" },
                                key: column.index,
                                onClick: _this2.props.onCheckMarket.bind(_this2, marketID)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "checkbox",
                                checked: !!_this2.props.isChecked || _this2.props.isDefault,
                                disabled: _this2.props.isDefault,
                                "data-tip": _this2.props.isDefault ? "This market is a default market and cannot be removed" : null
                            })
                        );

                    case "remove":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                key: column.index,
                                className: "clickable",
                                onClick: _this2.props.removeMarket
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    style: {
                                        marginBottom: "6px",
                                        marginRight: "6px",
                                        zIndex: 999
                                    },
                                    className: "text float-right remove"
                                },
                                "\u2013"
                            )
                        );

                    default:
                        break;
                }
            }).sort(function (a, b) {
                return a.key > b.key;
            });

            var className = "clickable";
            if (this.props.current) {
                className += " activeMarket";
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: className, style: rowStyles },
                columns
            );
        }
    }]);

    return MarketRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketRow.defaultProps = {
    noSymbols: false
};

MarketRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(MarketRow);

/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketRow, {
    propNames: ["quote", "base"],
    defaultProps: {
        tempComponent: "tr"
    },
    withDynamic: true
}));

/***/ }),

/***/ 2452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1832);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1833);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 *  Given an account id, displays the name of that account
 *
 *  Expects one property, 'account' which should be a account id
 */

var AccountName = function (_React$Component) {
    _inherits(AccountName, _React$Component);

    function AccountName() {
        _classCallCheck(this, AccountName);

        return _possibleConstructorReturn(this, (AccountName.__proto__ || Object.getPrototypeOf(AccountName)).apply(this, arguments));
    }

    _createClass(AccountName, [{
        key: "render",
        value: function render() {
            if (!this.props.account) return null;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                this.props.account.get("name")
            );
        }
    }]);

    return AccountName;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountName.propTypes = {
    account: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
};
AccountName.defaultProps = {
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(AccountName));

/***/ }),

/***/ 2456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(774);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1959);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2454);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(702);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var QuoteSelectionModal = function (_React$Component) {
    _inherits(QuoteSelectionModal, _React$Component);

    function QuoteSelectionModal() {
        _classCallCheck(this, QuoteSelectionModal);

        var _this = _possibleConstructorReturn(this, (QuoteSelectionModal.__proto__ || Object.getPrototypeOf(QuoteSelectionModal)).call(this));

        _this.state = {
            backingAsset: "",
            error: false,
            valid: false
        };
        return _this;
    }

    _createClass(QuoteSelectionModal, [{
        key: "_onMoveUp",
        value: function _onMoveUp(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].modifyPreferedBases({
                oldIndex: idx,
                newIndex: idx - 1
            });
        }
    }, {
        key: "_onMoveDown",
        value: function _onMoveDown(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].modifyPreferedBases({
                oldIndex: idx,
                newIndex: idx + 1
            });
        }
    }, {
        key: "_onRemove",
        value: function _onRemove(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            if (idx >= 0) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].modifyPreferedBases({
                    remove: idx
                });
            }
        }
    }, {
        key: "_onAdd",
        value: function _onAdd(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote.get("symbol");
            });
            if (idx === -1) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].modifyPreferedBases({
                    add: quote.get("symbol")
                });
            }
        }
    }, {
        key: "_onInputBackingAsset",
        value: function _onInputBackingAsset(asset) {
            this.setState({
                backingAsset: asset.toUpperCase(),
                error: null
            });
        }
    }, {
        key: "_onFoundBackingAsset",
        value: function _onFoundBackingAsset(asset) {
            if (asset) {
                if (!this.props.quotes.includes(asset.get("symbol"))) {
                    this.setState({ isValid: true });
                } else {
                    this.setState({
                        error: "Asset already being used",
                        isValid: false
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var error = this.state.error;

            var quoteCount = this.props.quotes.size;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    id: "quote_selection",
                    overlay: true,
                    modalHeader: "exchange.quote_selection",
                    noLogo: true
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { className: "block-list no-border-bottom" },
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
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.quote" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.move_down" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.move_up" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.remove" })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            this.props.quotes.map(function (q, idx) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    { key: q },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        idx + 1
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        q
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        idx !== quoteCount - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onMoveDown.bind(_this2, q),
                                            name: "chevron-down",
                                            className: "clickable"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        idx !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onMoveUp.bind(_this2, q),
                                            name: "chevron-down",
                                            className: "clickable rotate180"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        quoteCount > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onRemove.bind(_this2, q),
                                            name: "cross-circle",
                                            className: "clickable"
                                        })
                                    )
                                );
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            label: "exchange.custom_quote",
                            onChange: this._onInputBackingAsset.bind(this),
                            asset: this.state.backingAsset,
                            assetInput: this.state.backingAsset,
                            tabIndex: 1,
                            style: { width: "100%", paddingRight: "10px" },
                            onFound: this._onFoundBackingAsset.bind(this),
                            onAction: this._onAdd.bind(this),
                            action_label: "exchange.add_quote",
                            disableActionButton: !!error,
                            noLabel: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "error-area" },
                            error
                        )
                    )
                )
            );
        }
    }]);

    return QuoteSelectionModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (QuoteSelectionModal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2V+ZXhwbG9yZXIuYmIxM2I5YmNjOGYwNTU4ZDM1MzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL015TWFya2V0cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldFJvdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQWNjb3VudE5hbWUuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9RdW90ZVNlbGVjdGlvbk1vZGFsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbkdyb3VwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJzcGFuXCIsXHJcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17dGhpcy5wcm9wcy5lbnRlclRpbWVvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IE1hcmtldFJvdyBmcm9tIFwiLi9NYXJrZXRSb3dcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcclxuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRTZWxlY3RvclwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7Q2hhaW5WYWxpZGF0aW9uLCBDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcclxuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XHJcbmltcG9ydCB7Z2V0UG9zc2libGVHYXRld2F5UHJlZml4ZXMsIGdhdGV3YXlQcmVmaXhlc30gZnJvbSBcImNvbW1vbi9nYXRld2F5c1wiO1xyXG5pbXBvcnQgUXVvdGVTZWxlY3Rpb25Nb2RhbCBmcm9tIFwiLi9RdW90ZVNlbGVjdGlvbk1vZGFsXCI7XHJcblxyXG5jbGFzcyBNYXJrZXRHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIG1heFJvd3M6IDIwLFxyXG4gICAgICAgIG9ubHlMaXF1aWQ6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBwcm9wcy5maW5kTWFya2V0VGFiXHJcbiAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICA6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoYG15TWFya2V0c0Jhc2VfJHtwcm9wcy5pbmRleH1gKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvcGVuOiBvcGVuICE9PSB1bmRlZmluZWQgPyBvcGVuIDogdHJ1ZSxcclxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXHJcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c1NvcnRcIiwgXCJ2b2x1bWVcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5maW5kTWFya2V0VGFiICE9PSB0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRJbml0aWFsU3RhdGUobmV4dFByb3BzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldHMgfHwgIXRoaXMucHJvcHMubWFya2V0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcy5tYXJrZXRzLCB0aGlzLnByb3BzLm1hcmtldHMpIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyAhPT0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cyB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMubWFya2V0U3RhdHMgIT09IHRoaXMucHJvcHMubWFya2V0U3RhdHMgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnVzZXJNYXJrZXRzICE9PSB0aGlzLnByb3BzLnVzZXJNYXJrZXRzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW52ZXJzZVNvcnQoKSB7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgbXlNYXJrZXRzSW52ZXJ0OiAhdGhpcy5zdGF0ZS5teU1hcmtldHNJbnZlcnRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoYW5nZVNvcnQodHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlICE9PSB0aGlzLnN0YXRlLnNvcnRCeSkge1xyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgbXlNYXJrZXRzU29ydDogdHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gX29uU2VsZWN0QmFzZShlKSB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgLy8gICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VCYXNlKHRoaXMucHJvcHMuaW5kZXgsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBfb25Ub2dnbGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcclxuICAgICAgICAgICAgbGV0IG9wZW4gPSAhdGhpcy5zdGF0ZS5vcGVuO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9wZW46IG9wZW5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xyXG4gICAgICAgICAgICBzZXR0aW5nW2BteU1hcmtldHNCYXNlXyR7dGhpcy5wcm9wcy5pbmRleH1gXSA9IG9wZW47XHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG9nZ2xlVXNlck1hcmtldChtYXJrZXQpIHtcclxuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9IG1hcmtldC5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudXNlck1hcmtldHMuZ2V0KG1hcmtldCk7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldFVzZXJNYXJrZXQoYmFzZSwgcXVvdGUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgY29sdW1ucyxcclxuICAgICAgICAgICAgbWFya2V0cyxcclxuICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXHJcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxyXG4gICAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtzb3J0QnksIGludmVyc2VTb3J0LCBvcGVufSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICghbWFya2V0cyB8fCAhbWFya2V0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IGNvbHVtbnMubWFwKGhlYWRlciA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaGVhZGVyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2xcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwidm9sdW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbF9zaG9ydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJpY2VcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInF1b3RlU3VwcGx5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYmFzZV9zdXBwbHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5xdW90ZV9zdXBwbHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VTb3J0LmJpbmQodGhpcywgXCJjaGFuZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJpc3N1ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMuaXNzdWVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLmNvbmZpcm1fYWRkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2hlYWRlci5uYW1lfSAvPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbWFya2V0Um93cyA9IG1hcmtldHNcclxuICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMuZ2V0KG1hcmtldC5pZCkudm9sdW1lQmFzZSA9PSAwXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21hcmtldC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlID09PSBcIm90aGVyc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldC5xdW90ZX0gLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LmJhc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXttYXJrZXQucXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17bWFya2V0LnF1b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXttYXJrZXQuYmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFsaWduPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub1N5bWJvbHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzPXttYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnJlZD17c3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnQgPT09IG1hcmtldC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnByb3BzLnVzZXJNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cy5oYXMobWFya2V0LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tNYXJrZXQ9e3RoaXMuX29uVG9nZ2xlVXNlck1hcmtldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYV9zeW1ib2xzID0gYS5rZXkuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJfc3ltYm9scyA9IGIua2V5LnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBhU3RhdHMgPSBtYXJrZXRTdGF0cy5nZXQoYV9zeW1ib2xzWzBdICsgXCJfXCIgKyBhX3N5bWJvbHNbMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJTdGF0cyA9IG1hcmtldFN0YXRzLmdldChiX3N5bWJvbHNbMF0gKyBcIl9cIiArIGJfc3ltYm9sc1sxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYV9zeW1ib2xzWzBdID4gYl9zeW1ib2xzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYV9zeW1ib2xzWzBdIDwgYl9zeW1ib2xzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYV9zeW1ib2xzWzFdID4gYl9zeW1ib2xzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludmVyc2VTb3J0ID8gLTEgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhX3N5bWJvbHNbMV0gPCBiX3N5bWJvbHNbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2x1bWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFTdGF0cyAmJiBiU3RhdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZlcnNlU29ydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMudm9sdW1lQmFzZSAtIGFTdGF0cy52b2x1bWVCYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVN0YXRzLnZvbHVtZUJhc2UgLSBiU3RhdHMudm9sdW1lQmFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFTdGF0cyAmJiBiU3RhdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZlcnNlU29ydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMuY2hhbmdlIC0gYVN0YXRzLmNoYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFTdGF0cy5jaGFuZ2UgLSBiU3RhdHMuY2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICB7b3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+e2hlYWRlcnN9PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldFJvd3MgJiYgbWFya2V0Um93cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e21hcmtldFJvd3N9PC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNeU1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBhY3RpdmVUYWI6IFwibXktbWFya2V0XCIsXHJcbiAgICAgICAgc2V0TWluV2lkdGg6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXHJcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c1NvcnRcIiwgXCJ2b2x1bWVcIiksXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogcHJvcHMudmlld1NldHRpbmdzLmdldChcImZhdk1hcmtldFRhYlwiLCBcIm15LW1hcmtldFwiKSxcclxuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlTWFya2V0VGFiXCIsIDApLFxyXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcclxuICAgICAgICAgICAgbG9va3VwQmFzZTogbnVsbCxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBmaW5kQmFzZUlucHV0OiBcIlVTRFwiLFxyXG4gICAgICAgICAgICBhY3RpdmVGaW5kQmFzZTogXCJVU0RcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX3NldE1pbldpZHRoID0gdGhpcy5fc2V0TWluV2lkdGguYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuc2VhcmNoQXNzZXRzLCB0aGlzLnByb3BzLnNlYXJjaEFzc2V0cykgfHxcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMubWFya2V0cywgdGhpcy5wcm9wcy5tYXJrZXRzKSB8fFxyXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLnN0YXJyZWRNYXJrZXRzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0c1xyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMoXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuZGVmYXVsdE1hcmtldHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMubWFya2V0U3RhdHMsIHRoaXMucHJvcHMubWFya2V0U3RhdHMpIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLm1pbldpZHRoICE9PSB0aGlzLnByb3BzLm1pbldpZHRoIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5saXN0SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmxpc3RIZWlnaHQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnByZWZlcnJlZEJhc2VzICE9PSB0aGlzLnByb3BzLnByZWZlcnJlZEJhc2VzIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5vbmx5U3RhcnMgIT09IHRoaXMucHJvcHMub25seVN0YXJzIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5vbmx5TGlxdWlkICE9PSB0aGlzLnByb3BzLm9ubHlMaXF1aWQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmFzc2V0c0xvYWRpbmcgIT09IHRoaXMucHJvcHMuYXNzZXRzTG9hZGluZyB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMudXNlck1hcmtldHMgIT09IHRoaXMucHJvcHMudXNlck1hcmtldHNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRNaW5XaWR0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXRNaW5XaWR0aCwge1xyXG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEJhc2UgPSB0aGlzLnByb3BzLmN1cnJlbnQuc3BsaXQoXCJfXCIpWzFdO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnByb3BzLnByZWZlcnJlZEJhc2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIGEgPT4gYSA9PT0gY3VycmVudEJhc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSB0aGlzLnN0YXRlLmFjdGl2ZU1hcmtldFRhYlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZU1hcmtldFRhYjogY3VycmVudEluZGV4fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuZmF2b3JpdGVzO1xyXG4gICAgICAgIFBzLmluaXRpYWxpemUoaGlzdG9yeUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuX3NldE1pbldpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0TWluV2lkdGgpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0TWluV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm15TWFya2V0VGFiICYmICFucC5teU1hcmtldFRhYikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmZpbmRTZWFyY2hJbnB1dCkgdGhpcy5yZWZzLmZpbmRTZWFyY2hJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2V0TWluV2lkdGgoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldE1pbldpZHRoICYmXHJcbiAgICAgICAgICAgIHRoaXMucmVmcy5mYXZvcml0ZXMgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVUYWIgPT09IFwibXktbWFya2V0XCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubWluV2lkdGggIT09IHRoaXMucmVmcy5mYXZvcml0ZXMub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnJlZnMuZmF2b3JpdGVzLm9mZnNldFdpZHRoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVmcy5mYXZvcml0ZXMpIHtcclxuICAgICAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuZmF2b3JpdGVzO1xyXG4gICAgICAgICAgICBQcy51cGRhdGUoaGlzdG9yeUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9pbnZlcnNlU29ydCgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBteU1hcmtldHNJbnZlcnQ6ICF0aGlzLnN0YXRlLm15TWFya2V0c0ludmVydFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hhbmdlU29ydCh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgIT09IHRoaXMuc3RhdGUuc29ydEJ5KSB7XHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICBteU1hcmtldHNTb3J0OiB0eXBlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNvcnRCeTogdHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnZlcnNlU29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ29NYXJrZXRzKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL21hcmtldHNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoYW5nZVRhYih0YWIpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBmYXZNYXJrZXRUYWI6IHRhYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmVUYWI6IHRhYlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9zZXRNaW5XaWR0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbklucHV0TmFtZShnZXRCYWNrZWRBc3NldHMsIGUpIHtcclxuICAgICAgICBsZXQgdG9GaW5kID0gZS50YXJnZXQudmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IGlzVmFsaWROYW1lID0gIUNoYWluVmFsaWRhdGlvbi5pc192YWxpZF9zeW1ib2xfZXJyb3IodG9GaW5kLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IHRvRmluZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qIERvbid0IGxvb2t1cCBpbnZhbGlkIGFzc2V0IG5hbWVzICovXHJcbiAgICAgICAgaWYgKHRvRmluZCAmJiB0b0ZpbmQubGVuZ3RoID49IDIgJiYgIWlzVmFsaWROYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09IHRvRmluZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKHRvRmluZCwgZ2V0QmFja2VkQXNzZXRzKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9va3VwQXNzZXRzKHZhbHVlLCBnYXRld2F5QXNzZXRzID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSBcIlwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzeW1ib2xzID0gdmFsdWUudG9VcHBlckNhc2UoKS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgbGV0IHF1b3RlID0gc3ltYm9sc1swXTtcclxuICAgICAgICBsZXQgYmFzZSA9IHN5bWJvbHMubGVuZ3RoID09PSAyID8gc3ltYm9sc1sxXSA6IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogcXVvdGUsXHJcbiAgICAgICAgICAgIGxvb2t1cEJhc2U6IGJhc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nLmRlZmVyKHtcclxuICAgICAgICAgICAgbWFya2V0TG9va3VwSW5wdXQ6IHZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QocXVvdGUsIDUwLCBnYXRld2F5QXNzZXRzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVBY3RpdmVNYXJrZXRUYWIoaW5kZXgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IGluZGV4XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IGluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uSW5wdXRCYXNlQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmluZEJhc2VJbnB1dDogYXNzZXQudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Gb3VuZEJhc2VBc3NldChhc3NldCkge1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVGaW5kQmFzZTogYXNzZXQuZ2V0KFwic3ltYm9sXCIpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bXlNYXJrZXRGaWx0ZXI6IFwiXCJ9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoVXBkYXRlID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG15TWFya2V0RmlsdGVyOiBlLnRhcmdldC52YWx1ZSAmJiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9nZXRNYXJrZXRzKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VhcmNoQXNzZXRzLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWFya2V0cyxcclxuICAgICAgICAgICAgb25seVN0YXJzLFxyXG4gICAgICAgICAgICB1c2VyTWFya2V0cyxcclxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMsXHJcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhY3RpdmVUYWIsXHJcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlLFxyXG4gICAgICAgICAgICBsb29rdXBCYXNlLFxyXG4gICAgICAgICAgICBteU1hcmtldEZpbHRlcixcclxuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcG9zc2libGVHYXRld2F5QXNzZXRzID0gZ2V0UG9zc2libGVHYXRld2F5UHJlZml4ZXMoXHJcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGJhc2VzID0gdGhpcy5fZ2V0QmFzZXMoKTtcclxuICAgICAgICBsZXQgYWxsTWFya2V0cyA9IFtdLFxyXG4gICAgICAgICAgICBiYXNlR3JvdXBzID0ge307XHJcbiAgICAgICAgbGV0IG90aGVyTWFya2V0cyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBteU1hcmtldFRhYiA9IGFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIjtcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaEFzc2V0cy5zaXplKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0c1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGEub3B0aW9ucy5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ2aXNpYmxlXCIgaW4gZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5sZW5ndGggPj0gbG9va3VwUXVvdGUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChhc3NldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZXMuZm9yRWFjaChiYXNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UgIT09IGFzc2V0LnN5bWJvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGU6IGFzc2V0LnN5bWJvbCwgYmFzZTogYmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFsbE1hcmtldHMgPSBhbGxNYXJrZXRzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgLy8gSWYgYSBiYXNlIGFzc2V0IGlzIHNwZWNpZmllZCwgbGltaXQgdGhlIHF1b3RlIGFzc2V0IHRvIHRoZSBleGFjdCBzZWFyY2ggdGVybVxyXG4gICAgICAgICAgICBpZiAobG9va3VwQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMV0ucXVvdGUgPT09IGxvb2t1cFF1b3RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlTWFya2V0cyA9IG15TWFya2V0VGFiXHJcbiAgICAgICAgICAgID8gZGVmYXVsdE1hcmtldHNcclxuICAgICAgICAgICAgOiBJbW11dGFibGUuTWFwKGFsbE1hcmtldHMpO1xyXG4gICAgICAgIGlmIChteU1hcmtldFRhYiAmJiB1c2VyTWFya2V0cy5zaXplKSB7XHJcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzLmZvckVhY2goKG1hcmtldCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZU1hcmtldHMuaGFzKGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0cyA9IGFjdGl2ZU1hcmtldHMuc2V0KGtleSwgbWFya2V0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXHJcbiAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgIG1hdGNoQmFzZXMsXHJcbiAgICAgICAgICAgIG1hcmtldHMsXHJcbiAgICAgICAgICAgIGJhc2VHcm91cHMsXHJcbiAgICAgICAgICAgIG90aGVyTWFya2V0c1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBsZXQgb3RoZXJzID0gbWFya2V0c1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5iYXNlID09PSBhLnF1b3RlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIHNlYXJjaCByZXN1bHRzIGluIHRoZSBGaW5kIE1hcmtldHMgVGFiICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFteU1hcmtldFRhYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwUXVvdGUubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5xdW90ZS5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIGZpbHRlcmVkIG1hcmtldHMgaWYgYSBmaWx0ZXIgaXMgaW5wdXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgSUQgPSBhLnF1b3RlICsgXCJfXCIgKyBhLmJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIW15TWFya2V0RmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSUQuaW5kZXhPZihteU1hcmtldEZpbHRlcikgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFJldHVybiBvbmx5IHN0YXJyZWQgbWFya2V0cyBpZiB0aGF0IG9wdGlvbiBpcyBjaGVja2VkICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmx5U3RhcnMgJiYgIXN0YXJyZWRNYXJrZXRzLmhhcyhJRCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbHNlIHJldHVybiBhbGwgbWFya2V0cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9IG1hcmtldC5xdW90ZSArIFwiX1wiICsgbWFya2V0LmJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoQmFzZXMuaW5kZXhPZihtYXJrZXQuYmFzZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFzZUdyb3Vwc1tiYXNlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUdyb3Vwc1tiYXNlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWFya2V0SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbWFya2V0LmJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlR3JvdXBzW2Jhc2VdLmZpbmQobSA9PiBtLmlkID09PSBtYXJrZXRJRCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzW2Jhc2VdLnB1c2gobWFya2V0T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXByZWZlcnJlZEJhc2VzLmluY2x1ZGVzKG1hcmtldC5iYXNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUdhdGV3YXlBc3NldHMuaW5kZXhPZihtYXJrZXQuYmFzZSkgPT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkaW5nIHRvIG90aGVyIG1hcmtldHM6XCIsIGJhc2UsIG1hcmtldC5iYXNlLCBwcmVmZXJyZWRCYXNlcy50b0pTKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWFya2V0SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbWFya2V0LmJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcclxuICAgICAgICAgICAgICAgIC50YWtlKG15TWFya2V0VGFiID8gMTAwIDogMjApXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge290aGVyTWFya2V0czogb3RoZXJzLmNvbmNhdChvdGhlck1hcmtldHMpLCBiYXNlR3JvdXBzfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVNYXJrZXRzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCYXNlID0gbXlNYXJrZXRUYWJcclxuICAgICAgICAgICAgICAgID8gcHJlZmVycmVkQmFzZXMuZ2V0KGFjdGl2ZU1hcmtldFRhYilcclxuICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5hY3RpdmVGaW5kQmFzZTtcclxuXHJcbiAgICAgICAgICAgICh7b3RoZXJNYXJrZXRzLCBiYXNlR3JvdXBzfSA9IGZpbHRlckFuZFNlcGFyYXRlTWFya2V0cyhcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRCYXNlLFxyXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRCYXNlXSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldHMsXHJcbiAgICAgICAgICAgICAgICBiYXNlR3JvdXBzLFxyXG4gICAgICAgICAgICAgICAgb3RoZXJNYXJrZXRzXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICAgICAgLyogQ2hlY2sgZm9yIHBvc3NpYmxlIGdhdGV3YXkgdmVyc2lvbnMgb2YgdGhlIGFzc2V0ICovXHJcbiAgICAgICAgICAgIC8vIGdhdGV3YXlQcmVmaXhlcy5mb3JFYWNoKHByZWZpeCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcG9zc2libGVHYXRld2F5QXNzZXROYW1lID0gYCR7cHJlZml4fS4ke2N1cnJlbnRCYXNlfWA7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgZ2F0ZXdheUFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgLy8gICAgICAgICBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWVcclxuICAgICAgICAgICAgLy8gICAgICk7XHJcbiAgICAgICAgICAgIC8vICAgICAvKiBJZiB0aGUgZ2F0ZXdheSBvZmZlcnMgYW4gYXNzZXQgZm9yIHRoaXMgYmFzZSwgYWRkIGl0IHRvIHRoZSBsaXN0ICovXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoISFnYXRld2F5QXNzZXQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgZ2F0ZXdheU1hcmtldHMgPSBhY3RpdmVNYXJrZXRzXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC5tYXAobSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAobS5xdW90ZSA9PT0gbS5iYXNlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBuZXdJRCA9IGAke1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG0ucXVvdGVcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1fJHtwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWV9YDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChhY3RpdmVNYXJrZXRzLmhhcyhuZXdJRCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBiYXNlOiBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG0ucXVvdGVcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAuZmlsdGVyKG0gPT4gISFtKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAoe290aGVyTWFya2V0cywgYmFzZUdyb3Vwc30gPSBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRCYXNlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBbY3VycmVudEJhc2UsIHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGdhdGV3YXlNYXJrZXRzLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBiYXNlR3JvdXBzLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBvdGhlck1hcmtldHNcclxuICAgICAgICAgICAgLy8gICAgICAgICApKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge2Jhc2VHcm91cHMsIG90aGVyTWFya2V0c307XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEJhc2VzKCkge1xyXG4gICAgICAgIGxldCB7cHJlZmVycmVkQmFzZXMsIHNlYXJjaEFzc2V0c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB7bG9va3VwUXVvdGUsIGxvb2t1cEJhc2V9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGJhc2VzID0gc2VhcmNoQXNzZXRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldC5zeW1ib2wuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXQuc3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlZmVycmVkQmFzZXMuaW5jbHVkZXMoYXNzZXQuc3ltYm9sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sLmxlbmd0aCA+PSBsb29rdXBRdW90ZS5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sLmxlbmd0aCA8IGxvb2t1cFF1b3RlLmxlbmd0aCArIDNcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpXHJcbiAgICAgICAgICAgIC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgIGJhc2VzID0gYmFzZXMuY29uY2F0KFxyXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvb2t1cEJhc2UgfHwgIWxvb2t1cEJhc2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBiYXNlcyA9IGJhc2VzLmZpbHRlcihiYXNlID0+IHtcclxuICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UgJiYgbG9va3VwQmFzZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZS5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0cyxcclxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXHJcbiAgICAgICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgICAgIGFzc2V0c0xvYWRpbmcsXHJcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzLFxyXG4gICAgICAgICAgICBjdXJyZW50LFxyXG4gICAgICAgICAgICB2aWV3U2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGxpc3RIZWlnaHRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge2FjdGl2ZU1hcmtldFRhYiwgYWN0aXZlVGFifSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IG15TWFya2V0VGFiID0gYWN0aXZlVGFiID09PSBcIm15LW1hcmtldFwiO1xyXG4gICAgICAgIGxldCBkZWZhdWx0QmFzZXMgPSBwcmVmZXJyZWRCYXNlcy5tYXAoYSA9PiBhKTtcclxuXHJcbiAgICAgICAgaWYgKCFteU1hcmtldFRhYikge1xyXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyA9IHByZWZlcnJlZEJhc2VzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzID0gcHJlZmVycmVkQmFzZXMucHVzaCh0aGlzLnN0YXRlLmFjdGl2ZUZpbmRCYXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBzb21lIGRlZmF1bHQgYmFzZSBvcHRpb25zXHJcbiAgICAgICAgLy8gbGV0IHByZWZlcnJlZEJhc2VzID0gW2NvcmVTeW1ib2wsIFwiQlRDXCIsIFwiVVNEXCIsIFwiQ05ZXCJdO1xyXG5cclxuICAgICAgICAvKiBJbiB0aGUgZmluZC1tYXJrZXQgdGFiLCBvbmx5IHVzZSBtYXJrZXQgdGFiIDAgKi9cclxuICAgICAgICBpZiAoIW15TWFya2V0VGFiKSBhY3RpdmVNYXJrZXRUYWIgPSAwO1xyXG5cclxuICAgICAgICBsZXQge2Jhc2VHcm91cHMsIG90aGVyTWFya2V0c30gPSB0aGlzLl9nZXRNYXJrZXRzKCk7XHJcbiAgICAgICAgY29uc3QgaGFzT3RoZXJzID0gb3RoZXJNYXJrZXRzICYmIG90aGVyTWFya2V0cy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGhjID0gXCJteW1hcmtldHMtaGVhZGVyIGNsaWNrYWJsZVwiO1xyXG4gICAgICAgIGxldCBzdGFyQ2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogIW15TWFya2V0VGFifSk7XHJcbiAgICAgICAgbGV0IGFsbENsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6IG15TWFya2V0VGFifSk7XHJcblxyXG4gICAgICAgIGxldCBsaXN0U3R5bGUgPSB7XHJcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiNnJlbVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAobGlzdEhlaWdodCkge1xyXG4gICAgICAgICAgICBsaXN0U3R5bGUuaGVpZ2h0ID0gbGlzdEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0b3IgPSByZXF1aXJlKFwiY291bnRlcnBhcnRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIGxlZnQtb3JkZXJib29rLWhlYWRlciBib3R0b20taGVhZGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm15TWFya2V0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzLCBcIm15LW1hcmtldFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnRybz17dHJhbnNsYXRvci50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLm15X21hcmtldHNfdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9uYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWxsQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwiZmluZC1tYXJrZXRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e3RyYW5zbGF0b3IudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5maW5kX21hcmtldHNfdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1vcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxcmVtIDBcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9scyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7IW15TWFya2V0VGFiID8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuX2xvb2t1cEFzc2V0cy5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlNZTUJPTDpTWU1CT0xcIiAvPiA6IG51bGx9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAge215TWFya2V0VGFiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBzaHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC43NXJlbSAwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e21hcmdpbjogXCIzcHggMCAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlMaXF1aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6ICF0aGlzLnByb3BzLm9ubHlMaXF1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjRyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zaG93X29ubHlfbGlxdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7bWFyZ2luOiBcIjNweCAwIDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMub25seVN0YXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudG9nZ2xlU3RhcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2Uuc2hvd19vbmx5X3N0YXJfZm9ybWF0dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaWNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJmaS1zdGFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJnb2xkLXN0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInN0YXJfaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luIG1hcmtldC1maWx0ZXItaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5maWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmb2N1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5teU1hcmtldEZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGVhcklucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjc1cmVtIDAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Bc3NldFNlbGVjdD17dGhpcy5fb25Gb3VuZEJhc2VBc3NldC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2RlZmF1bHRCYXNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25JbnB1dEJhc2VBc3NldC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5maW5kQmFzZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbmRCYXNlSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvdW5kPXt0aGlzLl9vbkZvdW5kQmFzZUFzc2V0LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhjaGFuZ2UucXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXt7Zm9udFNpemU6IFwiMC45cmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMubmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0TmFtZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmluZFNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hc3NldE5hbWVFcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRCcmVhazogXCJicmVhay1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5pbnZhbGlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15bWFya2V0cy10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge215TWFya2V0VGFiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzLm1hcCgoYmFzZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFzZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWN0aXZlTWFya2V0VGFiLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJteW1hcmtldHMtdGFiXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogYWN0aXZlTWFya2V0VGFiID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHshbXlNYXJrZXRUYWIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJteW1hcmtldHMtdGFiXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVGaW5kQmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7bXlNYXJrZXRUYWIgJiYgaGFzT3RoZXJzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJvdGhlcnNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFjdGl2ZU1hcmtldFRhYi5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMuc2l6ZSArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcIm15bWFya2V0cy10YWJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiID09PSBwcmVmZXJyZWRCYXNlcy5zaXplICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm90aGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBRdW90ZSBlZGl0IHRhYiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7bXlNYXJrZXRUYWIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInF1b3RlX2VkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaZkFwaS5wdWJsaXNoKFwicXVvdGVfc2VsZWN0aW9uXCIsIFwib3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteW1hcmtldHMtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bGlzdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lciBncmlkLWJsb2NrIHZlcnRpY2FsIG15bWFya2V0cy1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJmYXZvcml0ZXNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHthc3NldHNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cInRocmVlLWJvdW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmVmZXJyZWRCYXNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT09IHByZWZlcnJlZEJhc2VzLmdldChhY3RpdmVNYXJrZXRUYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChiYXNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0R3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1hcmtldHM9e3RoaXMucHJvcHMudXNlck1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzPXt0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2hhbmdlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17c3RhcnJlZE1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzPXttYXJrZXRTdGF0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzPXt2aWV3U2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXJrZXRUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuZmluZENvbHVtbnMgfHwgY29sdW1uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldHM9e2Jhc2VHcm91cHNbYmFzZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9e215TWFya2V0VGFiID8gMjAgOiAxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZE1hcmtldFRhYj17IW15TWFya2V0VGFifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5TGlxdWlkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAmJiBteU1hcmtldFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVNYXJrZXRUYWIgPT09IHByZWZlcnJlZEJhc2VzLnNpemUgKyAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbXlNYXJrZXRUYWIgJiZcclxuICAgICAgICAgICAgICAgICAgICBoYXNPdGhlcnMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZXRHcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1hcmtldHM9e3RoaXMucHJvcHMudXNlck1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJlZmVycmVkQmFzZXMuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17c3RhcnJlZE1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cz17bWFya2V0U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M9e3ZpZXdTZXR0aW5nc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRzPXtvdGhlck1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPVwib3RoZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9e215TWFya2V0VGFiID8gMjAgOiAxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXJrZXRUYWI9eyFteU1hcmtldFRhYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UXVvdGVTZWxlY3Rpb25Nb2RhbCBxdW90ZXM9e3RoaXMucHJvcHMucHJlZmVycmVkQmFzZXN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk15TWFya2V0cyA9IGRlYm91bmNlUmVuZGVyKE15TWFya2V0cywgNTAsIHtsZWFkaW5nOiBmYWxzZX0pO1xyXG5cclxuY2xhc3MgTXlNYXJrZXRzV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxNeU1hcmtldHMgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgTXlNYXJrZXRzV3JhcHBlcixcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmUsIEFzc2V0U3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzLFxyXG4gICAgICAgICAgICAgICAgb25seUxpcXVpZDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJvbmx5TGlxdWlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRNYXJrZXRzLFxyXG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5wcmVmZXJyZWRCYXNlcyxcclxuICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcclxuICAgICAgICAgICAgICAgIHVzZXJNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudXNlck1hcmtldHMsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hBc3NldHM6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHMsXHJcbiAgICAgICAgICAgICAgICBvbmx5U3RhcnM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm9ubHlTdGFycyxcclxuICAgICAgICAgICAgICAgIGFzc2V0c0xvYWRpbmc6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHNMb2FkaW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgQWNjb3VudE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQWNjb3VudE5hbWVcIjtcclxuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jbGFzcyBNYXJrZXRSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBub1N5bWJvbHM6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2xpY2sobWFya2V0SUQpIHtcclxuICAgICAgICBjb25zdCBuZXdQYXRoID0gYC9tYXJrZXQvJHttYXJrZXRJRH1gO1xyXG4gICAgICAgIGlmIChuZXdQYXRoICE9PSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN3aXRjaE1hcmtldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL21hcmtldC8ke21hcmtldElEfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRzQ2hlY2tlZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHNJbnRlcnZhbChcclxuICAgICAgICAgICAgMzUgKiAxMDAwLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRzSW50ZXJ2YWwpIHRoaXMuc3RhdHNJbnRlcnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uU3RhcihxdW90ZSwgYmFzZSwgZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc3RhcnJlZCkge1xyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnJlbW92ZVN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtxdW90ZSwgYmFzZSwgbm9TeW1ib2xzLCBzdGF0cywgc3RhcnJlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmICghcXVvdGUgfHwgIWJhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFya2V0SUQgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIikgKyBcIl9cIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgIGxldCBtYXJrZXROYW1lID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpICsgXCI6XCIgKyBiYXNlLmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICBsZXQgZHluYW1pY19kYXRhID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxyXG4gICAgICAgICAgICBxdW90ZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBiYXNlX2R5bmFtaWNfZGF0YSA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChcclxuICAgICAgICAgICAgYmFzZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPSB1dGlscy5jb252ZXJ0UHJpY2UocXVvdGUsIGJhc2UpO1xyXG5cclxuICAgICAgICBsZXQgcm93U3R5bGVzID0ge307XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGVmdEFsaWduKSB7XHJcbiAgICAgICAgICAgIHJvd1N0eWxlcy50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBidXR0b25DbGFzcyA9IFwiYnV0dG9uIG91dGxpbmVcIjtcclxuICAgICAgICBsZXQgYnV0dG9uU3R5bGUgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBhY3QpIHtcclxuICAgICAgICAgICAgYnV0dG9uQ2xhc3MgKz0gXCIgbm8tbWFyZ2luXCI7XHJcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHggMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjA1cmVtXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zXHJcbiAgICAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNsYXNzID0gc3RhcnJlZCA/IFwiZ29sZC1zdGFyXCIgOiBcImdyZXktc3RhclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdGFyLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInN5bWJvbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5zeW1ib2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBzdGF0cyA/IHN0YXRzLnZvbHVtZUJhc2UgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X3ZvbHVtZShhbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlID0gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzICYmIHN0YXRzLmNoYW5nZSA/IHN0YXRzLmNoYW5nZSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VDbGFzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT09IFwiMC4wMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGFuZ2UgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY2hhbmdlLWRvd25cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ0ZXh0LXJpZ2h0IFwiICsgY2hhbmdlQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZSArIFwiJVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1hcmtldE5hbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwcmljZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxQcmljZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cyAmJiBzdGF0cy5wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3RhdHMucHJpY2UudG9SZWFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRzLmNsb3NlLnF1b3RlLmFtb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlLmJhc2UuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLmdldF9hc3NldF9wcmljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UucXVvdGUuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdXRpbHMuZ2V0X2Fzc2V0X3ByaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5xdW90ZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5iYXNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaFByZWNpc2lvbkFzc2V0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQlRDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9QRU4uQlRDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRSQURFLkJUQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHT0xEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNJTFZFUlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVjaXNpb24gPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJlY2lzaW9uQXNzZXRzLmluZGV4T2YoYmFzZS5nZXQoXCJzeW1ib2xcIikpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxQcmljZSA+IDEwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaW5hbFByaWNlID4gMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicXVvdGVTdXBwbHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNfZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY19kYXRhLmdldChcImN1cnJlbnRfc3VwcGx5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3F1b3RlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VfZHluYW1pY19kYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2R5bmFtaWNfZGF0YS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9zdXBwbHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFzZS5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpc3N1ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnROYW1lIGFjY291bnQ9e3F1b3RlLmdldChcImlzc3VlclwiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DaGVja01hcmtldC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmlzQ2hlY2tlZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0RlZmF1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlRoaXMgbWFya2V0IGlzIGEgZGVmYXVsdCBtYXJrZXQgYW5kIGNhbm5vdCBiZSByZW1vdmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMucmVtb3ZlTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQgZmxvYXQtcmlnaHQgcmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAk1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEua2V5ID4gYi5rZXk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJjbGlja2FibGVcIjtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBhY3RpdmVNYXJrZXRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3Jvd1N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICB7Y29sdW1uc31cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbk1hcmtldFJvdyA9IHdpdGhSb3V0ZXIoTWFya2V0Um93KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcihNYXJrZXRSb3csIHtcclxuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxyXG4gICAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICAgICAgdGVtcENvbXBvbmVudDogXCJ0clwiXHJcbiAgICB9LFxyXG4gICAgd2l0aER5bmFtaWM6IHRydWVcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcblxyXG4vKipcclxuICogIEdpdmVuIGFuIGFjY291bnQgaWQsIGRpc3BsYXlzIHRoZSBuYW1lIG9mIHRoYXQgYWNjb3VudFxyXG4gKlxyXG4gKiAgRXhwZWN0cyBvbmUgcHJvcGVydHksICdhY2NvdW50JyB3aGljaCBzaG91bGQgYmUgYSBhY2NvdW50IGlkXHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudE5hbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBhdXRvc3Vic2NyaWJlOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjY291bnQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiA8c3Bhbj57dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50TmFtZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuLi9Nb2RhbC9CYXNlTW9kYWxcIjtcclxuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRTZWxlY3RvclwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdW90ZVNlbGVjdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogXCJcIixcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9vbk1vdmVVcChxdW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMubW9kaWZ5UHJlZmVyZWRCYXNlcyh7XHJcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXHJcbiAgICAgICAgICAgIG5ld0luZGV4OiBpZHggLSAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uTW92ZURvd24ocXVvdGUpIHtcclxuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xyXG4gICAgICAgICAgICBvbGRJbmRleDogaWR4LFxyXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4ICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblJlbW92ZShxdW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlKTtcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiBpZHhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkFkZChxdW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlLmdldChcInN5bWJvbFwiKSk7XHJcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xyXG4gICAgICAgICAgICAgICAgYWRkOiBxdW90ZS5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbklucHV0QmFja2luZ0Fzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogYXNzZXQudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Gb3VuZEJhY2tpbmdBc3NldChhc3NldCkge1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMucXVvdGVzLmluY2x1ZGVzKGFzc2V0LmdldChcInN5bWJvbFwiKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVmFsaWQ6IHRydWV9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIkFzc2V0IGFscmVhZHkgYmVpbmcgdXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcXVvdGVDb3VudCA9IHRoaXMucHJvcHMucXVvdGVzLnNpemU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJhc2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJxdW90ZV9zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1vZGFsSGVhZGVyPVwiZXhjaGFuZ2UucXVvdGVfc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIG5vTG9nb1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9jay1saXN0IG5vLWJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW92ZV9kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tb3ZlX3VwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5yZW1vdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5xdW90ZXMubWFwKChxLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aWR4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4ICE9PSBxdW90ZUNvdW50IC0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbk1vdmVEb3duLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZXZyb24tZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkeCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbk1vdmVVcC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGV2cm9uLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIHJvdGF0ZTE4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGVDb3VudCA+IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmUuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3Jvc3MtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleGNoYW5nZS5jdXN0b21fcXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmJhY2tpbmdBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e3RoaXMuc3RhdGUuYmFja2luZ0Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvdW5kPXt0aGlzLl9vbkZvdW5kQmFja2luZ0Fzc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbj17dGhpcy5fb25BZGQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbl9sYWJlbD1cImV4Y2hhbmdlLmFkZF9xdW90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uPXshIWVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIj57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQmFzZU1vZGFsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBUkE7QUFXQTtBQUNBOzs7O0FBNURBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUF4RUE7QUEwRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQS9CQTtBQWtDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUZBO0FBYUE7Ozs7QUFqU0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFrU0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQStNQTtBQUNBO0FBQ0E7QUFqTkE7QUFtTkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXBOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFqQkE7QUFrQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFDQTtBQUNBO0FBSUE7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFBQTtBQUFBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBUEE7QUFkQTtBQXlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBREE7QUFWQTtBQXdCQTtBQXpDQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFyQkE7QUFEQTtBQW5EQTtBQWtGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBdEJBO0FBREE7QUFEQTtBQTRCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFKQTtBQXpCQTtBQURBO0FBN0JBO0FBREE7QUFQQTtBQXlGQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQVpBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQS9DQTtBQTREQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFSQTtBQVdBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQTBCQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQXJEQTtBQXNFQTtBQXRWQTtBQXlWQTs7OztBQWgxQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQWcxQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVRBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFxQkE7QUFPQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBTkE7QUFMQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBTUE7QUFSQTtBQUxBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVBBO0FBUkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQWlCQTtBQUNBO0FBNU9BO0FBOE9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQS9VQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUErVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQVpBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBREE7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFEQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBM0JBO0FBeUNBO0FBNUNBO0FBbEJBO0FBa0VBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBdkVBO0FBTkE7QUFnR0E7Ozs7QUFyS0E7QUFDQTtBQURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=