(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 2439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquivalentValueComponent", function() { return EquivalentValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceValueComponent", function() { return BalanceValueComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1969);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1832);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1833);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2186);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(558);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(760);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2235);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2238);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2237);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2234);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















/**
 *  Given an asset amount, displays the equivalent value in baseAsset if possible
 *
 *  Expects three properties
 *  -'toAsset' which should be a asset id
 *  -'fromAsset' which is the asset id of the original asset amount
 *  -'amount' which is the amount to convert
 *  -'fullPrecision' boolean to tell if the amount uses the full precision of the asset
 */

var ValueComponent = function (_MarketStatsCheck) {
    _inherits(ValueComponent, _MarketStatsCheck);

    function ValueComponent(props) {
        _classCallCheck(this, ValueComponent);

        return _possibleConstructorReturn(this, (ValueComponent.__proto__ || Object.getPrototypeOf(ValueComponent)).call(this, props));
    }

    _createClass(ValueComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a.rebuild();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return _get(ValueComponent.prototype.__proto__ || Object.getPrototypeOf(ValueComponent.prototype), "shouldComponentUpdate", this).call(this, np) || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(np.pulsate, this.props.pulsate) || np.toAsset !== this.props.toAsset || np.fromAsset !== this.props.fromAsset || np.amount !== this.props.amount;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var _props = this.props,
                amount = _props.amount,
                toAsset = _props.toAsset,
                fromAsset = _props.fromAsset,
                fullPrecision = _props.fullPrecision,
                allMarketStats = _props.allMarketStats,
                coreAsset = _props.coreAsset;

            return common_market_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convertValue(amount, toAsset, fromAsset, allMarketStats, coreAsset, fullPrecision);
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                amount = _props2.amount,
                toAsset = _props2.toAsset,
                fromAsset = _props2.fromAsset,
                fullPrecision = _props2.fullPrecision,
                others = _objectWithoutProperties(_props2, ["amount", "toAsset", "fromAsset", "fullPrecision"]);

            var toID = toAsset.get("id");
            var toSymbol = toAsset.get("symbol");

            if (!fullPrecision) {
                amount = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(amount, fromAsset);
            }

            var eqValue = this.getValue();

            if (!eqValue && eqValue !== 0) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "tooltip inline-block",
                        "data-place": "bottom",
                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.no_price"),
                        style: { fontSize: "0.9rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "account.no_price" })
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
                noPrefix: true,
                amount: eqValue,
                asset: toID,
                decimalOffset: toSymbol.indexOf("BTC") !== -1 ? 4 : this.props.fullDecimals ? 0 : this.props.noDecimals ? toAsset.get("precision") : toAsset.get("precision") - 2
            }, others));
        }
    }]);

    return ValueComponent;
}(_MarketStatsCheck__WEBPACK_IMPORTED_MODULE_11__["default"]);

ValueComponent.defaultProps = {
    fullPrecision: true,
    noDecimals: false,
    fullDecimals: false,
    hide_asset: false
};

ValueComponent = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(ValueComponent, {
    propNames: ["toAsset", "fromAsset", "coreAsset"],
    defaultProps: {
        toAsset: "1.3.0",
        coreAsset: "1.3.0"
    }
});

var EquivalentValueComponent = function (_React$Component) {
    _inherits(EquivalentValueComponent, _React$Component);

    function EquivalentValueComponent() {
        _classCallCheck(this, EquivalentValueComponent);

        return _possibleConstructorReturn(this, (EquivalentValueComponent.__proto__ || Object.getPrototypeOf(EquivalentValueComponent)).apply(this, arguments));
    }

    _createClass(EquivalentValueComponent, [{
        key: "render",
        value: function render() {
            var _props3 = this.props,
                refCallback = _props3.refCallback,
                others = _objectWithoutProperties(_props3, ["refCallback"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueComponent, _extends({}, others, { ref: refCallback }));
        }
    }]);

    return EquivalentValueComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

EquivalentValueComponent = Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(EquivalentValueComponent, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"]];
    },
    getProps: function getProps() {
        return {
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().allMarketStats
        };
    }
});

var BalanceValueComponent = function (_React$Component2) {
    _inherits(BalanceValueComponent, _React$Component2);

    function BalanceValueComponent() {
        _classCallCheck(this, BalanceValueComponent);

        return _possibleConstructorReturn(this, (BalanceValueComponent.__proto__ || Object.getPrototypeOf(BalanceValueComponent)).apply(this, arguments));
    }

    _createClass(BalanceValueComponent, [{
        key: "render",
        value: function render() {
            var _props4 = this.props,
                balance = _props4.balance,
                others = _objectWithoutProperties(_props4, ["balance"]);

            var isBalanceObject = !!balance.getIn(["balance", "amount"]);

            var amount = Number(isBalanceObject ? balance.getIn(["balance", "amount"]) : balance.get("balance"));
            var fromAsset = isBalanceObject ? balance.getIn(["balance", "asset_id"]) : balance.get("asset_type");
            if (isNaN(amount)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "--"
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EquivalentValueComponent, _extends({
                amount: amount,
                fromAsset: fromAsset,
                noDecimals: true
            }, others));
        }
    }]);

    return BalanceValueComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BalanceValueComponent.propTypes = {
    balance: _ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired
};

BalanceValueComponent = Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BalanceValueComponent, {
    keep_updating: true
});


/***/ }),

/***/ 2453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2186);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
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

/***/ 2454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(407);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1833);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2188);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1969);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2186);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var AssetDropdown = function (_React$Component) {
    _inherits(AssetDropdown, _React$Component);

    function AssetDropdown() {
        _classCallCheck(this, AssetDropdown);

        return _possibleConstructorReturn(this, (AssetDropdown.__proto__ || Object.getPrototypeOf(AssetDropdown)).apply(this, arguments));
    }

    _createClass(AssetDropdown, [{
        key: "render",
        value: function render() {
            if (this.props.assets.length === 0 || !this.props.value) return null;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                entries: this.props.assets.map(function (a) {
                    return a && a.get("symbol");
                }).filter(function (a) {
                    return !!a;
                }),
                values: this.props.assets.reduce(function (map, a) {
                    if (a && a.get("symbol")) map[a.get("symbol")] = a;
                    return map;
                }, {}),
                singleEntry: this.props.assets[0] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    asset: this.props.assets[0].get("id"),
                    amount: 0,
                    hide_amount: true
                }) : null,
                value: "",
                onChange: this.props.onChange
            });
        }
    }]);

    return AssetDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetDropdown.propTypes = {
    value: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // asset id
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};


AssetDropdown = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_10__["default"])(AssetDropdown, { asList: true });

/**
 * @brief Allows the user to enter an account by name or #ID
 *
 * This component is designed to be stateless as possible.  It's primary responsbility is to
 * manage the layout of data and to filter the user input.
 *
 */

var AssetSelector = function (_React$Component2) {
    _inherits(AssetSelector, _React$Component2);

    function AssetSelector() {
        _classCallCheck(this, AssetSelector);

        return _possibleConstructorReturn(this, (AssetSelector.__proto__ || Object.getPrototypeOf(AssetSelector)).apply(this, arguments));
    }

    _createClass(AssetSelector, [{
        key: "getAsset",


        // can be used in parent component: this.refs.asset_selector.getAsset()
        value: function getAsset() {
            return this.props.asset;
        }
    }, {
        key: "getError",
        value: function getError() {
            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.assetInput;

            var error = this.props.error;
            if (!error && input && !this.getNameType(input)) error = counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.invalid", {
                name: input
            });
            return error;
        }
    }, {
        key: "getNameType",
        value: function getNameType(value) {
            if (!value) return null;
            // if(value[0] === "#" && utils.is_object_id("1.2." + value.substring(1))) return "id";
            if (!bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainValidation"].is_valid_symbol_error(value, true)) return "symbol";
            return null;
        }
    }, {
        key: "onInputChanged",
        value: function onInputChanged(event) {
            var value = event.target.value.trim().substr(0, 16).toUpperCase(); //.toLowerCase();
            if (this.props.onChange && value !== this.props.assetInput) this.props.onChange(value);
        }
    }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
            if (event.keyCode === 13) {
                this.onFound(event);
                this.onAction(event);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.onFound && this.props.asset) this.props.onFound(this.props.asset);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            if (this.props.onFound && newProps.asset !== this.props.asset) this.props.onFound(newProps.asset);
        }
    }, {
        key: "onFound",
        value: function onFound(e) {
            e.preventDefault();
            if (this.props.onFound && !this.getError() && !this.props.disableActionButton) {
                if (this.props.asset) this.props.onFound(this.props.asset);
            }
        }
    }, {
        key: "onAssetSelect",
        value: function onAssetSelect(selected_asset) {
            if (selected_asset) {
                this.props.onFound(selected_asset);
                this.props.onChange(selected_asset.get("symbol"));
            }
        }
    }, {
        key: "onAction",
        value: function onAction(e) {
            e.preventDefault();
            if (this.props.onAction && !this.getError() && !this.props.disableActionButton) {
                if (this.props.asset) this.props.onAction(this.props.asset);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                disabled = _props.disabled,
                noLabel = _props.noLabel;

            var error = this.getError();
            var lookup_display = void 0;
            if (!disabled) {
                if (this.props.asset) {
                    lookup_display = this.props.asset.get("symbol");
                } else if (!error && this.props.assetInput) {
                    error = counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.not_found", {
                        name: this.props.assetInput
                    });
                }
            }

            var action_class = classnames__WEBPACK_IMPORTED_MODULE_9___default()("button", {
                disabled: !this.props.asset || error || this.props.disableActionButton
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-selector", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "header-area" },
                        error || noLabel ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "right-label" },
                            "\xA0 ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                lookup_display
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "label",
                            content: this.props.label
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "input-area" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                style: this.props.inputStyle,
                                disabled: this.props.disabled,
                                type: "text",
                                value: this.props.assetInput || "",
                                placeholder: this.props.placeholder || counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.assets.symbol"),
                                ref: "user_input",
                                onChange: this.onInputChanged.bind(this),
                                onKeyDown: this.onKeyDown.bind(this),
                                tabIndex: this.props.tabIndex
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-label select floating-dropdown" },
                                this.props.asset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetDropdown, {
                                    ref: this.props.refCallback,
                                    value: this.props.asset.get("symbol"),
                                    assets: immutable__WEBPACK_IMPORTED_MODULE_8___default.a.List(this.props.assets),
                                    onChange: this.onAssetSelect.bind(this)
                                }) : null
                            ),
                            this.props.children,
                            this.props.onAction ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: action_class,
                                    onClick: this.onAction.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: this.props.action_label
                                })
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "error-area", style: { paddingBottom: "10px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { style: { wordBreak: "break-all" } },
                            error
                        )
                    )
                )
            );
        }
    }]);

    return AssetSelector;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetSelector.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // a translation key for the label
    error: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // the error message override
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // the placeholder text to be displayed when there is no user_input
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, // a method to be called any time user input changes
    onFound: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, // a method to be called when existing account is selected
    assetInput: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // the current value of the account selector, the string the user enters
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset, // account object retrieved via BindToChainState decorator (not input)
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, // tabindex property to be passed to input tag
    disableActionButton: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool // use it if you need to disable action button
};
AssetSelector.defaultProps = {
    disabled: false
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetSelector));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZX5leHBsb3Jlci42MmRhOGZiMDI2MjUxNWEzZmFhOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRTZWxlY3Rvci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XHJcbmltcG9ydCBNYXJrZXRTdGF0c0NoZWNrIGZyb20gXCIuL01hcmtldFN0YXRzQ2hlY2tcIjtcclxuaW1wb3J0IE1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XHJcblxyXG4vKipcclxuICogIEdpdmVuIGFuIGFzc2V0IGFtb3VudCwgZGlzcGxheXMgdGhlIGVxdWl2YWxlbnQgdmFsdWUgaW4gYmFzZUFzc2V0IGlmIHBvc3NpYmxlXHJcbiAqXHJcbiAqICBFeHBlY3RzIHRocmVlIHByb3BlcnRpZXNcclxuICogIC0ndG9Bc3NldCcgd2hpY2ggc2hvdWxkIGJlIGEgYXNzZXQgaWRcclxuICogIC0nZnJvbUFzc2V0JyB3aGljaCBpcyB0aGUgYXNzZXQgaWQgb2YgdGhlIG9yaWdpbmFsIGFzc2V0IGFtb3VudFxyXG4gKiAgLSdhbW91bnQnIHdoaWNoIGlzIHRoZSBhbW91bnQgdG8gY29udmVydFxyXG4gKiAgLSdmdWxsUHJlY2lzaW9uJyBib29sZWFuIHRvIHRlbGwgaWYgdGhlIGFtb3VudCB1c2VzIHRoZSBmdWxsIHByZWNpc2lvbiBvZiB0aGUgYXNzZXRcclxuICovXHJcblxyXG5jbGFzcyBWYWx1ZUNvbXBvbmVudCBleHRlbmRzIE1hcmtldFN0YXRzQ2hlY2sge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBmdWxsUHJlY2lzaW9uOiB0cnVlLFxyXG4gICAgICAgIG5vRGVjaW1hbHM6IGZhbHNlLFxyXG4gICAgICAgIGZ1bGxEZWNpbWFsczogZmFsc2UsXHJcbiAgICAgICAgaGlkZV9hc3NldDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobnApIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5wdWxzYXRlLCB0aGlzLnByb3BzLnB1bHNhdGUpIHx8XHJcbiAgICAgICAgICAgIG5wLnRvQXNzZXQgIT09IHRoaXMucHJvcHMudG9Bc3NldCB8fFxyXG4gICAgICAgICAgICBucC5mcm9tQXNzZXQgIT09IHRoaXMucHJvcHMuZnJvbUFzc2V0IHx8XHJcbiAgICAgICAgICAgIG5wLmFtb3VudCAhPT0gdGhpcy5wcm9wcy5hbW91bnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgdG9Bc3NldCxcclxuICAgICAgICAgICAgZnJvbUFzc2V0LFxyXG4gICAgICAgICAgICBmdWxsUHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBhbGxNYXJrZXRTdGF0cyxcclxuICAgICAgICAgICAgY29yZUFzc2V0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIE1hcmtldFV0aWxzLmNvbnZlcnRWYWx1ZShcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICB0b0Fzc2V0LFxyXG4gICAgICAgICAgICBmcm9tQXNzZXQsXHJcbiAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzLFxyXG4gICAgICAgICAgICBjb3JlQXNzZXQsXHJcbiAgICAgICAgICAgIGZ1bGxQcmVjaXNpb25cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Ftb3VudCwgdG9Bc3NldCwgZnJvbUFzc2V0LCBmdWxsUHJlY2lzaW9uLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHRvSUQgPSB0b0Fzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIGxldCB0b1N5bWJvbCA9IHRvQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWZ1bGxQcmVjaXNpb24pIHtcclxuICAgICAgICAgICAgYW1vdW50ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChhbW91bnQsIGZyb21Bc3NldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZXFWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgaWYgKCFlcVZhbHVlICYmIGVxVmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwIGlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAubm9fcHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjlyZW1cIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5ub19wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgbm9QcmVmaXhcclxuICAgICAgICAgICAgICAgIGFtb3VudD17ZXFWYWx1ZX1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXt0b0lEfVxyXG4gICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17XHJcbiAgICAgICAgICAgICAgICAgICAgdG9TeW1ib2wuaW5kZXhPZihcIkJUQ1wiKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5mdWxsRGVjaW1hbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLm5vRGVjaW1hbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRvQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b0Fzc2V0LmdldChcInByZWNpc2lvblwiKSAtIDJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5WYWx1ZUNvbXBvbmVudCA9IEFzc2V0V3JhcHBlcihWYWx1ZUNvbXBvbmVudCwge1xyXG4gICAgcHJvcE5hbWVzOiBbXCJ0b0Fzc2V0XCIsIFwiZnJvbUFzc2V0XCIsIFwiY29yZUFzc2V0XCJdLFxyXG4gICAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICAgICAgdG9Bc3NldDogXCIxLjMuMFwiLFxyXG4gICAgICAgIGNvcmVBc3NldDogXCIxLjMuMFwiXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3JlZkNhbGxiYWNrLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxWYWx1ZUNvbXBvbmVudCB7Li4ub3RoZXJzfSByZWY9e3JlZkNhbGxiYWNrfSAvPjtcclxuICAgIH1cclxufVxyXG5cclxuRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50ID0gY29ubmVjdChcclxuICAgIEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGxNYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5jbGFzcyBCYWxhbmNlVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtiYWxhbmNlLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpc0JhbGFuY2VPYmplY3QgPSAhIWJhbGFuY2UuZ2V0SW4oW1wiYmFsYW5jZVwiLCBcImFtb3VudFwiXSk7XHJcblxyXG4gICAgICAgIGxldCBhbW91bnQgPSBOdW1iZXIoXHJcbiAgICAgICAgICAgIGlzQmFsYW5jZU9iamVjdFxyXG4gICAgICAgICAgICAgICAgPyBiYWxhbmNlLmdldEluKFtcImJhbGFuY2VcIiwgXCJhbW91bnRcIl0pXHJcbiAgICAgICAgICAgICAgICA6IGJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGZyb21Bc3NldCA9IGlzQmFsYW5jZU9iamVjdFxyXG4gICAgICAgICAgICA/IGJhbGFuY2UuZ2V0SW4oW1wiYmFsYW5jZVwiLCBcImFzc2V0X2lkXCJdKVxyXG4gICAgICAgICAgICA6IGJhbGFuY2UuZ2V0KFwiYXNzZXRfdHlwZVwiKTtcclxuICAgICAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIDxzcGFuPi0tPC9zcGFuPjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgIGZyb21Bc3NldD17ZnJvbUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgbm9EZWNpbWFscz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5CYWxhbmNlVmFsdWVDb21wb25lbnQgPSBCaW5kVG9DaGFpblN0YXRlKEJhbGFuY2VWYWx1ZUNvbXBvbmVudCwge1xyXG4gICAga2VlcF91cGRhdGluZzogdHJ1ZVxyXG59KTtcclxuZXhwb3J0IHtFcXVpdmFsZW50VmFsdWVDb21wb25lbnQsIEJhbGFuY2VWYWx1ZUNvbXBvbmVudH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogdHJ1ZSxcclxuICAgICAgICBtYXhXaWR0aDogMjBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmc1tcclxuICAgICAgICAgICAgICAgICAgICBpbWdOYW1lLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIF0uc3JjID0gYCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvYnRzLnBuZ2A7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlTmFtZShhc3NldCkge1xyXG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xyXG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIkVTQ1JPVy5cIikpIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIC8vIGxldCBpbWdOYW1lID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgLy9yZXR1cm4gaW1nTmFtZS5sZW5ndGggPT09IDIgPyBpbWdOYW1lWzFdIDogaW1nTmFtZVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGltZ05hbWUgPSBnZXRJbWFnZU5hbWUoYXNzZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsIG1hcmdpblJpZ2h0OiA1fX1cclxuICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRJbWFnZSA9IEFzc2V0V3JhcHBlcihBc3NldEltYWdlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEFzc2V0SW1hZ2Ugey4uLnRoaXMucHJvcHN9IGFzc2V0PXt0aGlzLnByb3BzLm5hbWV9IC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NoYWluVmFsaWRhdGlvbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuL0Zsb2F0aW5nRHJvcGRvd25cIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBBc3NldERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFzc2V0IGlkXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldHMubGVuZ3RoID09PSAwIHx8ICF0aGlzLnByb3BzLnZhbHVlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmxvYXRpbmdEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgZW50cmllcz17dGhpcy5wcm9wcy5hc3NldHNcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGEgPT4gYSAmJiBhLmdldChcInN5bWJvbFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5wcm9wcy5hc3NldHMucmVkdWNlKChtYXAsIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSAmJiBhLmdldChcInN5bWJvbFwiKSkgbWFwW2EuZ2V0KFwic3ltYm9sXCIpXSA9IGE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgICAgICAgICAgICAgIH0sIHt9KX1cclxuICAgICAgICAgICAgICAgIHNpbmdsZUVudHJ5PXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0c1swXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5hc3NldHNbMF0uZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Bc3NldERyb3Bkb3duID0gQXNzZXRXcmFwcGVyKEFzc2V0RHJvcGRvd24sIHthc0xpc3Q6IHRydWV9KTtcclxuXHJcbi8qKlxyXG4gKiBAYnJpZWYgQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGFuIGFjY291bnQgYnkgbmFtZSBvciAjSURcclxuICpcclxuICogVGhpcyBjb21wb25lbnQgaXMgZGVzaWduZWQgdG8gYmUgc3RhdGVsZXNzIGFzIHBvc3NpYmxlLiAgSXQncyBwcmltYXJ5IHJlc3BvbnNiaWxpdHkgaXMgdG9cclxuICogbWFuYWdlIHRoZSBsYXlvdXQgb2YgZGF0YSBhbmQgdG8gZmlsdGVyIHRoZSB1c2VyIGlucHV0LlxyXG4gKlxyXG4gKi9cclxuXHJcbmNsYXNzIEFzc2V0U2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gYSB0cmFuc2xhdGlvbiBrZXkgZm9yIHRoZSBsYWJlbFxyXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgZXJyb3IgbWVzc2FnZSBvdmVycmlkZVxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBpcyBubyB1c2VyX2lucHV0XHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCB0byBiZSBjYWxsZWQgYW55IHRpbWUgdXNlciBpbnB1dCBjaGFuZ2VzXHJcbiAgICAgICAgb25Gb3VuZDogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGV4aXN0aW5nIGFjY291bnQgaXMgc2VsZWN0ZWRcclxuICAgICAgICBhc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgYWNjb3VudCBzZWxlY3RvciwgdGhlIHN0cmluZyB0aGUgdXNlciBlbnRlcnNcclxuICAgICAgICBhc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LCAvLyBhY2NvdW50IG9iamVjdCByZXRyaWV2ZWQgdmlhIEJpbmRUb0NoYWluU3RhdGUgZGVjb3JhdG9yIChub3QgaW5wdXQpXHJcbiAgICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsIC8vIHRhYmluZGV4IHByb3BlcnR5IHRvIGJlIHBhc3NlZCB0byBpbnB1dCB0YWdcclxuICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gZGlzYWJsZSBhY3Rpb24gYnV0dG9uXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNhbiBiZSB1c2VkIGluIHBhcmVudCBjb21wb25lbnQ6IHRoaXMucmVmcy5hc3NldF9zZWxlY3Rvci5nZXRBc3NldCgpXHJcbiAgICBnZXRBc3NldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hc3NldDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFcnJvcihpbnB1dCA9IHRoaXMucHJvcHMuYXNzZXRJbnB1dCkge1xyXG4gICAgICAgIGxldCBlcnJvciA9IHRoaXMucHJvcHMuZXJyb3I7XHJcbiAgICAgICAgaWYgKCFlcnJvciAmJiBpbnB1dCAmJiAhdGhpcy5nZXROYW1lVHlwZShpbnB1dCkpXHJcbiAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYXNzZXQuaW52YWxpZFwiLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZVR5cGUodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAvLyBpZih2YWx1ZVswXSA9PT0gXCIjXCIgJiYgdXRpbHMuaXNfb2JqZWN0X2lkKFwiMS4yLlwiICsgdmFsdWUuc3Vic3RyaW5nKDEpKSkgcmV0dXJuIFwiaWRcIjtcclxuICAgICAgICBpZiAoIUNoYWluVmFsaWRhdGlvbi5pc192YWxpZF9zeW1ib2xfZXJyb3IodmFsdWUsIHRydWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJzeW1ib2xcIjtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0Q2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5zdWJzdHIoMCwgMTYpXHJcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpOyAvLy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHZhbHVlICE9PSB0aGlzLnByb3BzLmFzc2V0SW5wdXQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICB0aGlzLm9uRm91bmQoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb3VuZCAmJiB0aGlzLnByb3BzLmFzc2V0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQodGhpcy5wcm9wcy5hc3NldCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRm91bmQgJiYgbmV3UHJvcHMuYXNzZXQgIT09IHRoaXMucHJvcHMuYXNzZXQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZChuZXdQcm9wcy5hc3NldCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb3VuZChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvdW5kICYmXHJcbiAgICAgICAgICAgICF0aGlzLmdldEVycm9yKCkgJiZcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJ1dHRvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkgdGhpcy5wcm9wcy5vbkZvdW5kKHRoaXMucHJvcHMuYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFzc2V0U2VsZWN0KHNlbGVjdGVkX2Fzc2V0KSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkX2Fzc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZChzZWxlY3RlZF9hc3NldCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VsZWN0ZWRfYXNzZXQuZ2V0KFwic3ltYm9sXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24gJiZcclxuICAgICAgICAgICAgIXRoaXMuZ2V0RXJyb3IoKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5kaXNhYmxlQWN0aW9uQnV0dG9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0KSB0aGlzLnByb3BzLm9uQWN0aW9uKHRoaXMucHJvcHMuYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtkaXNhYmxlZCwgbm9MYWJlbH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBlcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcclxuICAgICAgICBsZXQgbG9va3VwX2Rpc3BsYXk7XHJcbiAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkge1xyXG4gICAgICAgICAgICAgICAgbG9va3VwX2Rpc3BsYXkgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghZXJyb3IgJiYgdGhpcy5wcm9wcy5hc3NldElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFzc2V0Lm5vdF9mb3VuZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5hc3NldElucHV0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbl9jbGFzcyA9IGNsYXNzbmFtZXMoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICBkaXNhYmxlZDpcclxuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmFzc2V0IHx8IGVycm9yIHx8IHRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJ1dHRvblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciB8fCBub0xhYmVsID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyaWdodC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyA8c3Bhbj57bG9va3VwX2Rpc3BsYXl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaW5wdXRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXNzZXRJbnB1dCB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0cy5zeW1ib2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInVzZXJfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hc3NldCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5yZWZDYWxsYmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17SW1tdXRhYmxlLkxpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFzc2V0U2VsZWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25BY3Rpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGlvbl9jbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjdGlvbi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5hY3Rpb25fbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3dvcmRCcmVhazogXCJicmVhay1hbGxcIn19PntlcnJvcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFzc2V0U2VsZWN0b3IpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTs7O0FBUUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFRQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBZ0JBOzs7O0FBdkZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQXVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFMQTtBQUNBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7Ozs7QUExQkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBMEJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7QUFoRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBMkRBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFsQkE7QUFxQkE7Ozs7QUE5QkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQThCQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUEvQkE7QUFEQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF2REE7QUFEQTtBQThEQTs7OztBQWhMQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBY0E7QUFEQTtBQUNBO0FBb0tBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=