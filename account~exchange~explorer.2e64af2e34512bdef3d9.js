(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 2401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquivalentValueComponent", function() { return EquivalentValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceValueComponent", function() { return BalanceValueComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1013);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(895);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1218);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1266);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1269);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1268);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1265);
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

/***/ 2416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1220);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1013);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1218);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(747);
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
//# sourceMappingURL=account~exchange~explorer.js.map