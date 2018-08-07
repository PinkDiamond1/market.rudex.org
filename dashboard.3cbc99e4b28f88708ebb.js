(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 2769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1266);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(881);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2770);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var DashboardContainer = function (_React$Component) {
    _inherits(DashboardContainer, _React$Component);

    function DashboardContainer() {
        _classCallCheck(this, DashboardContainer);

        return _possibleConstructorReturn(this, (DashboardContainer.__proto__ || Object.getPrototypeOf(DashboardContainer)).apply(this, arguments));
    }

    _createClass(DashboardContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_4___default.a,
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__["default"]],
                    inject: {
                        linkedAccounts: function linkedAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().linkedAccounts;
                        },
                        myHiddenAccounts: function myHiddenAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().myHiddenAccounts;
                        },
                        accountsReady: function accountsReady() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().accountsLoaded && stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().refsLoaded;
                        },
                        passwordAccount: function passwordAccount() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().passwordAccount;
                        },
                        lowVolumeMarkets: function lowVolumeMarkets() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().lowVolumeMarkets;
                        },
                        currentEntry: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("dashboardEntry", "accounts")
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], this.props)
            );
        }
    }]);

    return DashboardContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardContainer);

/***/ }),

/***/ 2770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2768);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2517);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MarketCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2771);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(485);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(879);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2329);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(730);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(709);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(569);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var Dashboard = function (_React$Component) {
    _inherits(Dashboard, _React$Component);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

        var marketsByChain = {
            "4018d784": Object(_branding__WEBPACK_IMPORTED_MODULE_14__["getFeaturedMarkets"])(),
            "39f5e2ed": [["TEST", "PEG.FAKEUSD"], ["TEST", "BTWTY"]]
        };
        var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_7__["Apis"].instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);

        _this.state = {
            width: null,
            showIgnored: false,
            featuredMarkets: marketsByChain[chainID] || marketsByChain["4018d784"],
            newAssets: [],
            currentEntry: props.currentEntry
        };

        _this._setDimensions = _this._setDimensions.bind(_this);
        // this._sortMarketsByVolume = this._sortMarketsByVolume.bind(this);
        return _this;
    }

    _createClass(Dashboard, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();

            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextState.featuredMarkets, this.state.featuredMarkets) || !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextProps.lowVolumeMarkets, this.props.lowVolumeMarkets) || !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextState.newAssets, this.state.newAssets) || nextProps.linkedAccounts !== this.props.linkedAccounts ||
            // nextProps.marketStats !== this.props.marketStats ||
            nextProps.ignoredAccounts !== this.props.ignoredAccounts || nextProps.passwordAccount !== this.props.passwordAccount || nextState.width !== this.state.width || nextProps.accountsReady !== this.props.accountsReady || nextState.showIgnored !== this.state.showIgnored || nextState.currentEntry !== this.state.currentEntry;
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._setDimensions);
        }
    }, {
        key: "_setDimensions",
        value: function _setDimensions() {
            var width = window.innerWidth;

            if (width !== this.state.width) {
                this.setState({ width: width });
            }
        }
    }, {
        key: "_onToggleIgnored",
        value: function _onToggleIgnored() {
            this.setState({
                showIgnored: !this.state.showIgnored
            });
        }
    }, {
        key: "_onSwitchType",
        value: function _onSwitchType(type) {
            this.setState({
                currentEntry: type
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                dashboardEntry: type
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                linkedAccounts = _props.linkedAccounts,
                myHiddenAccounts = _props.myHiddenAccounts,
                accountsReady = _props.accountsReady,
                passwordAccount = _props.passwordAccount;
            var _state = this.state,
                width = _state.width,
                showIgnored = _state.showIgnored,
                featuredMarkets = _state.featuredMarkets,
                newAssets = _state.newAssets,
                currentEntry = _state.currentEntry;


            if (passwordAccount && !linkedAccounts.has(passwordAccount)) {
                linkedAccounts = linkedAccounts.add(passwordAccount);
            }
            var names = linkedAccounts.toArray().sort();
            if (passwordAccount && names.indexOf(passwordAccount) === -1) names.push(passwordAccount);
            var ignored = myHiddenAccounts.toArray().sort();

            var accountCount = linkedAccounts.size + myHiddenAccounts.size + (passwordAccount ? 1 : 0);

            if (!accountsReady) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null);
            }

            var validMarkets = 0;

            var markets = featuredMarkets.map(function (pair) {
                var isLowVolume = _this2.props.lowVolumeMarkets.get(pair[1] + "_" + pair[0]) || _this2.props.lowVolumeMarkets.get(pair[0] + "_" + pair[1]);
                // HACK: Show all defined markets
                isLowVolume = false;
                if (!isLowVolume) validMarkets++;
                var className = "";
                if (validMarkets > 15) {
                    className += " show-for-" + (!accountCount ? "xlarge" : "large");
                } else if (validMarkets > 12) {
                    className += " show-for-" + (!accountCount ? "large" : "medium");
                }

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    key: pair[0] + "_" + pair[1],
                    marketId: pair[1] + "_" + pair[0],
                    "new": newAssets.indexOf(pair[1]) !== -1,
                    className: className,
                    quote: pair[0],
                    base: pair[1],
                    invert: pair[2],
                    isLowVolume: isLowVolume,
                    hide: validMarkets > 29
                });
            }).filter(function (a) {
                return !!a;
            });

            if (!accountCount) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginSelector__WEBPACK_IMPORTED_MODULE_9__["default"], null);
            }

            var entries = ["accounts", "contacts", "recent"];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "wrapper", className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        ref: "container",
                        className: "grid-container",
                        style: { padding: "2rem 8px" }
                    },
                    this.props.onlyAccounts ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "block-content-header",
                            style: { marginBottom: 15, paddingTop: 0 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.featured" })
                    ),
                    this.props.onlyAccounts ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block small-up-1 medium-up-3 large-up-4 no-overflow fm-outer-container" },
                        markets
                    )
                )
            );
        }
    }]);

    return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var DashboardWrapper = function DashboardWrapper(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dashboard, props);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_13__["connect"])(DashboardWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1217);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1267);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1266);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var MarketCard = function (_React$Component) {
    _inherits(MarketCard, _React$Component);

    function MarketCard() {
        _classCallCheck(this, MarketCard);

        var _this = _possibleConstructorReturn(this, (MarketCard.__proto__ || Object.getPrototypeOf(MarketCard)).call(this));

        _this.statsInterval = null;

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(MarketCard, [{
        key: "_checkStats",
        value: function _checkStats() {
            var newStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { close: {} };
            var oldStats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { close: {} };

            return newStats.volumeBase !== oldStats.volumeBase || !common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].are_equal_shallow(newStats.close && newStats.close.base, oldStats.close && oldStats.close.base) || !common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].are_equal_shallow(newStats.close && newStats.close.quote, oldStats.close && oldStats.close.quote);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this._checkStats(np.marketStats, this.props.marketStats) || np.base.get("id") !== this.props.base.get("id") || np.quote.get("id") !== this.props.quote.get("id") || ns.imgError !== this.state.imgError;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.defer(this.props.quote, this.props.base);
            this.statsChecked = new Date();
            this.statsInterval = setInterval(actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.bind(this, this.props.quote, this.props.base), 35 * 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.statsInterval);
        }
    }, {
        key: "goToMarket",
        value: function goToMarket(e) {
            e.preventDefault();

            var history = this.context.router.history;

            history.push("/market/" + this.props.base.get("symbol") + "_" + this.props.quote.get("symbol"));
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                this.refs[imgName.toLowerCase()].src = "asset-symbols/bts.png";
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                hide = _props.hide,
                isLowVolume = _props.isLowVolume,
                base = _props.base,
                quote = _props.quote,
                marketStats = _props.marketStats;

            if (isLowVolume || hide) return null;

            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                // return imgName.length === 2 ? imgName[1] : imgName[0];
            }
            var imgName = getImageName(base);

            // let marketID = base.get("symbol") + "_" + quote.get("symbol");
            // let stats = marketStats;
            var changeClass = !marketStats ? "" : parseFloat(marketStats.change) > 0 ? "change-up" : parseFloat(marketStats.change) < 0 ? "change-down" : "";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("grid-block no-overflow fm-container", this.props.className),
                    onClick: this.goToMarket.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical shrink" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "v-align" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                            className: "align-center",
                            ref: imgName.toLowerCase(),
                            onError: this._onError.bind(this, imgName),
                            style: { maxWidth: 70 },
                            src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-name" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { dataPlace: "top", name: base.get("symbol") }),
                        " ",
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { dataPlace: "top", name: quote.get("symbol") })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-volume" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.price" }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            marketStats && marketStats.price ? common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].price_text(marketStats.price.toReal(), base, quote) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-volume" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.volume" }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            !marketStats ? null : common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(marketStats.volumeBase, quote.get("precision"))
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-change" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.change" }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("float-right", changeClass) },
                            !marketStats ? null : marketStats.change,
                            "%"
                        )
                    )
                )
            );
        }
    }]);

    return MarketCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketCard.contextTypes = {
    router: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired
};
MarketCard.propTypes = {
    quote: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    base: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    invert: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
};
MarketCard.defaultProps = {
    invert: true
};


MarketCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketCard);

var MarketCardWrapper = function (_React$Component2) {
    _inherits(MarketCardWrapper, _React$Component2);

    function MarketCardWrapper() {
        _classCallCheck(this, MarketCardWrapper);

        return _possibleConstructorReturn(this, (MarketCardWrapper.__proto__ || Object.getPrototypeOf(MarketCardWrapper)).apply(this, arguments));
    }

    _createClass(MarketCardWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketCard, this.props);
        }
    }]);

    return MarketCardWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(MarketCardWrapper, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps(props) {
        return {
            marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats.get(props.marketId)
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=dashboard.js.map