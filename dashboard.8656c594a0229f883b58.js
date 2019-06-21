(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 2851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2235);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1820);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2852);
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
                alt_container__WEBPACK_IMPORTED_MODULE_4__["default"],
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

/***/ 2852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2850);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2554);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MarketCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2853);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(558);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(476);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1818);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2366);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(702);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(701);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(760);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(560);
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
            return !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextState.featuredMarkets, this.state.featuredMarkets) || !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextState.newAssets, this.state.newAssets) || nextProps.linkedAccounts !== this.props.linkedAccounts ||
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
                // HACK: Show all defined markets
                validMarkets++;
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
                    hide: validMarkets > 35
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

/***/ 2853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1833);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2185);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2236);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2235);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(760);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(719);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLjg2NTZjNTk0YTAyMjlmODgzYjU4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldENhcmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5cclxuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmUsIE1hcmtldHNTdG9yZV19XHJcbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBsaW5rZWRBY2NvdW50czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubGlua2VkQWNjb3VudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBteUhpZGRlbkFjY291bnRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUhpZGRlbkFjY291bnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNSZWFkeTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuYWNjb3VudHNMb2FkZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnJlZnNMb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVudHJ5OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXNoYm9hcmRFbnRyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjY291bnRzXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBEYXNoYm9hcmRMaXN0IGZyb20gXCIuL0Rhc2hib2FyZExpc3RcIjtcclxuaW1wb3J0IHtSZWNlbnRUcmFuc2FjdGlvbnN9IGZyb20gXCIuLi9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBNYXJrZXRDYXJkIGZyb20gXCIuL01hcmtldENhcmRcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IExvZ2luU2VsZWN0b3IgZnJvbSBcIi4uL0xvZ2luU2VsZWN0b3JcIjtcclxuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCB7Z2V0RmVhdHVyZWRNYXJrZXRzfSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcclxuXHJcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IG1hcmtldHNCeUNoYWluID0ge1xyXG4gICAgICAgICAgICBcIjQwMThkNzg0XCI6IGdldEZlYXR1cmVkTWFya2V0cygpLFxyXG4gICAgICAgICAgICBcIjM5ZjVlMmVkXCI6IFtbXCJURVNUXCIsIFwiUEVHLkZBS0VVU0RcIl0sIFtcIlRFU1RcIiwgXCJCVFdUWVwiXV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjaGFpbklEID0gQXBpcy5pbnN0YW5jZSgpLmNoYWluX2lkO1xyXG4gICAgICAgIGlmIChjaGFpbklEKSBjaGFpbklEID0gY2hhaW5JRC5zdWJzdHIoMCwgOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICBzaG93SWdub3JlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZlYXR1cmVkTWFya2V0czpcclxuICAgICAgICAgICAgICAgIG1hcmtldHNCeUNoYWluW2NoYWluSURdIHx8IG1hcmtldHNCeUNoYWluW1wiNDAxOGQ3ODRcIl0sXHJcbiAgICAgICAgICAgIG5ld0Fzc2V0czogW10sXHJcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogcHJvcHMuY3VycmVudEVudHJ5XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLl9zb3J0TWFya2V0c0J5Vm9sdW1lID0gdGhpcy5fc29ydE1hcmtldHNCeVZvbHVtZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xyXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcclxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5mZWF0dXJlZE1hcmtldHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZlYXR1cmVkTWFya2V0c1xyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcclxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5uZXdBc3NldHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld0Fzc2V0c1xyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5saW5rZWRBY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5saW5rZWRBY2NvdW50cyB8fFxyXG4gICAgICAgICAgICAvLyBuZXh0UHJvcHMubWFya2V0U3RhdHMgIT09IHRoaXMucHJvcHMubWFya2V0U3RhdHMgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmlnbm9yZWRBY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5pZ25vcmVkQWNjb3VudHMgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnBhc3N3b3JkQWNjb3VudCAhPT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQgfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLndpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50c1JlYWR5ICE9PSB0aGlzLnByb3BzLmFjY291bnRzUmVhZHkgfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLnNob3dJZ25vcmVkICE9PSB0aGlzLnN0YXRlLnNob3dJZ25vcmVkIHx8XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZS5jdXJyZW50RW50cnkgIT09IHRoaXMuc3RhdGUuY3VycmVudEVudHJ5XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RGltZW5zaW9ucygpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vblRvZ2dsZUlnbm9yZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dJZ25vcmVkOiAhdGhpcy5zdGF0ZS5zaG93SWdub3JlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblN3aXRjaFR5cGUodHlwZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjdXJyZW50RW50cnk6IHR5cGVcclxuICAgICAgICB9KTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBkYXNoYm9hcmRFbnRyeTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBsaW5rZWRBY2NvdW50cyxcclxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcclxuICAgICAgICAgICAgYWNjb3VudHNSZWFkeSxcclxuICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIHNob3dJZ25vcmVkLFxyXG4gICAgICAgICAgICBmZWF0dXJlZE1hcmtldHMsXHJcbiAgICAgICAgICAgIG5ld0Fzc2V0cyxcclxuICAgICAgICAgICAgY3VycmVudEVudHJ5XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZEFjY291bnQgJiYgIWxpbmtlZEFjY291bnRzLmhhcyhwYXNzd29yZEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgIGxpbmtlZEFjY291bnRzID0gbGlua2VkQWNjb3VudHMuYWRkKHBhc3N3b3JkQWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lcyA9IGxpbmtlZEFjY291bnRzLnRvQXJyYXkoKS5zb3J0KCk7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkQWNjb3VudCAmJiBuYW1lcy5pbmRleE9mKHBhc3N3b3JkQWNjb3VudCkgPT09IC0xKVxyXG4gICAgICAgICAgICBuYW1lcy5wdXNoKHBhc3N3b3JkQWNjb3VudCk7XHJcbiAgICAgICAgbGV0IGlnbm9yZWQgPSBteUhpZGRlbkFjY291bnRzLnRvQXJyYXkoKS5zb3J0KCk7XHJcblxyXG4gICAgICAgIGxldCBhY2NvdW50Q291bnQgPVxyXG4gICAgICAgICAgICBsaW5rZWRBY2NvdW50cy5zaXplICtcclxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cy5zaXplICtcclxuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWxpZE1hcmtldHMgPSAwO1xyXG5cclxuICAgICAgICBsZXQgbWFya2V0cyA9IGZlYXR1cmVkTWFya2V0c1xyXG4gICAgICAgICAgICAubWFwKHBhaXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSEFDSzogU2hvdyBhbGwgZGVmaW5lZCBtYXJrZXRzXHJcbiAgICAgICAgICAgICAgICB2YWxpZE1hcmtldHMrKztcclxuICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTWFya2V0cyA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgc2hvdy1mb3ItJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWFjY291bnRDb3VudCA/IFwieGxhcmdlXCIgOiBcImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsaWRNYXJrZXRzID4gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBzaG93LWZvci0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhYWNjb3VudENvdW50ID8gXCJsYXJnZVwiIDogXCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYWlyWzBdICsgXCJfXCIgKyBwYWlyWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJZD17cGFpclsxXSArIFwiX1wiICsgcGFpclswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3PXtuZXdBc3NldHMuaW5kZXhPZihwYWlyWzFdKSAhPT0gLTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cGFpclswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17cGFpclsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0PXtwYWlyWzJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlPXt2YWxpZE1hcmtldHMgPiAzNX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSk7XHJcblxyXG4gICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9naW5TZWxlY3RvciAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXCJhY2NvdW50c1wiLCBcImNvbnRhY3RzXCIsIFwicmVjZW50XCJdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIndyYXBwZXJcIiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9ubHlBY2NvdW50cyA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNSwgcGFkZGluZ1RvcDogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmZlYXR1cmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbmx5QWNjb3VudHMgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMyBsYXJnZS11cC00IG5vLW92ZXJmbG93IGZtLW91dGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IERhc2hib2FyZFdyYXBwZXIgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gPERhc2hib2FyZCB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKERhc2hib2FyZFdyYXBwZXIgPSBjb25uZWN0KFxyXG4gICAgRGFzaGJvYXJkV3JhcHBlcixcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBNYXJrZXRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XHJcbiAgICAgICAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBxdW90ZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgYmFzZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGludmVydDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja1N0YXRzKG5ld1N0YXRzID0ge2Nsb3NlOiB7fX0sIG9sZFN0YXRzID0ge2Nsb3NlOiB7fX0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXdTdGF0cy52b2x1bWVCYXNlICE9PSBvbGRTdGF0cy52b2x1bWVCYXNlIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRzLmNsb3NlICYmIG5ld1N0YXRzLmNsb3NlLmJhc2UsXHJcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5iYXNlXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdHMuY2xvc2UgJiYgbmV3U3RhdHMuY2xvc2UucXVvdGUsXHJcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5xdW90ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tTdGF0cyhucC5tYXJrZXRTdGF0cywgdGhpcy5wcm9wcy5tYXJrZXRTdGF0cykgfHxcclxuICAgICAgICAgICAgbnAuYmFzZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlLmdldChcImlkXCIpIHx8XHJcbiAgICAgICAgICAgIG5wLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpIHx8XHJcbiAgICAgICAgICAgIG5zLmltZ0Vycm9yICE9PSB0aGlzLnN0YXRlLmltZ0Vycm9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHMuZGVmZXIodGhpcy5wcm9wcy5xdW90ZSwgdGhpcy5wcm9wcy5iYXNlKTtcclxuICAgICAgICB0aGlzLnN0YXRzQ2hlY2tlZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzLmJpbmQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAzNSAqIDEwMDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0c0ludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvTWFya2V0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBoaXN0b3J5ID0gdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5O1xyXG5cclxuICAgICAgICBoaXN0b3J5LnB1c2goXHJcbiAgICAgICAgICAgIGAvbWFya2V0LyR7dGhpcy5wcm9wcy5iYXNlLmdldChcInN5bWJvbFwiKX1fJHt0aGlzLnByb3BzLnF1b3RlLmdldChcclxuICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcclxuICAgICAgICAgICAgKX1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9IFwiYXNzZXQtc3ltYm9scy9idHMucG5nXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2hpZGUsIGlzTG93Vm9sdW1lLCBiYXNlLCBxdW90ZSwgbWFya2V0U3RhdHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoaXNMb3dWb2x1bWUgfHwgaGlkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlTmFtZShhc3NldCkge1xyXG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xyXG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIkVTQ1JPVy5cIikpIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIC8vIGxldCBpbWdOYW1lID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGltZ05hbWUubGVuZ3RoID09PSAyID8gaW1nTmFtZVsxXSA6IGltZ05hbWVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKGJhc2UpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbWFya2V0SUQgPSBiYXNlLmdldChcInN5bWJvbFwiKSArIFwiX1wiICsgcXVvdGUuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgIC8vIGxldCBzdGF0cyA9IG1hcmtldFN0YXRzO1xyXG4gICAgICAgIGxldCBjaGFuZ2VDbGFzcyA9ICFtYXJrZXRTdGF0c1xyXG4gICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KG1hcmtldFN0YXRzLmNoYW5nZSkgPiAwXHJcbiAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLXVwXCJcclxuICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdChtYXJrZXRTdGF0cy5jaGFuZ2UpIDwgMFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBcImdyaWQtYmxvY2sgbm8tb3ZlcmZsb3cgZm0tY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9NYXJrZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIHNocmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1hbGlnblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiA3MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX0gLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm0tdm9sdW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz46e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0U3RhdHMgJiYgbWFya2V0U3RhdHMucHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLnByaWNlX3RleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMucHJpY2UudG9SZWFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS12b2x1bWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXCIgLz46e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW1hcmtldFN0YXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfdm9sdW1lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLnZvbHVtZUJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZtLWNoYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jaGFuZ2VcIiAvPjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbmFtZXMoXCJmbG9hdC1yaWdodFwiLCBjaGFuZ2VDbGFzcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtYXJrZXRTdGF0cyA/IG51bGwgOiBtYXJrZXRTdGF0cy5jaGFuZ2V9JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NYXJrZXRDYXJkID0gQmluZFRvQ2hhaW5TdGF0ZShNYXJrZXRDYXJkKTtcclxuXHJcbmNsYXNzIE1hcmtldENhcmRXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPE1hcmtldENhcmQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgTWFya2V0Q2FyZFdyYXBwZXIsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmtldElkXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFGQTtBQXdCQTtBQXhCQTtBQTJCQTs7OztBQTlCQTtBQUNBO0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFuQkE7QUFvQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFkQTtBQURBO0FBc0JBOzs7O0FBN0tBO0FBQ0E7QUErS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBV0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUE3QkE7QUFsQkE7QUF3REE7Ozs7QUF2S0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVlBO0FBREE7QUFDQTtBQUNBO0FBNkpBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==