(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 2503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1013);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(894);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(895);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(581);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 *
 *  Given an operation type, displays the CORE fee for that operation
 *
 */

var FormattedFee = function (_React$Component) {
    _inherits(FormattedFee, _React$Component);

    function FormattedFee() {
        _classCallCheck(this, FormattedFee);

        return _possibleConstructorReturn(this, (FormattedFee.__proto__ || Object.getPrototypeOf(FormattedFee)).apply(this, arguments));
    }

    _createClass(FormattedFee, [{
        key: "getFee",
        value: function getFee() {
            // Return fee via refs
            return Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_5__["estimateFee"])(this.props.opType, this.props.options, this.props.globalObject);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                opType = _props.opType,
                options = _props.options,
                globalObject = _props.globalObject;


            if (!opType || !options || !globalObject) {
                return null;
            }

            var amount = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_5__["estimateFee"])(opType, options, globalObject);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], { amount: amount, asset: "1.3.0" });
        }
    }]);

    return FormattedFee;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FormattedFee.propTypes = {
    globalObject: _ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired,
    opType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
FormattedFee.defaultProps = {
    globalObject: "2.0.0",
    options: []
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(FormattedFee));

/***/ }),

/***/ 2506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1221);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1012);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1013);
/* harmony import */ var _Utility_FormattedFee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2503);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1286);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1218);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(416);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var stateSetter = function stateSetter(that, key) {
    var transform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
        return value;
    };
    return function (value) {
        return that.setState(_defineProperty({}, key, transform(value)));
    };
};

var keyGetter = function keyGetter(key) {
    return function (object) {
        return object[key];
    };
};

var FundFeePool = function (_React$Component) {
    _inherits(FundFeePool, _React$Component);

    function FundFeePool(props) {
        _classCallCheck(this, FundFeePool);

        var _this = _possibleConstructorReturn(this, (FundFeePool.__proto__ || Object.getPrototypeOf(FundFeePool)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = _this.initialState();
        return _this;
    }

    return FundFeePool;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onAccountNameChanged = stateSetter(this, "funderAccountName");
    this.onAccountChanged = stateSetter(this, "newFunderAccount");
    this.onPoolInput = stateSetter(this, "fundPoolAmount", keyGetter("amount"));

    this.onFundPool = function () {
        return actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].fundPool(_this2.state.newFunderAccount ? _this2.state.newFunderAccount.get("id") : null, _this2.props.core, _this2.props.asset, _this2.state.fundPoolAmount.replace(/,/g, ""));
    };

    this.reset = function () {
        _this2.setState(_this2.initialState());
    };

    this.initialState = function () {
        return {
            funderAccountName: _this2.props.funderAccountName,
            fundPoolAmount: 0
        };
    };

    this.render = function () {
        var props = _this2.props,
            state = _this2.state,
            onPoolInput = _this2.onPoolInput,
            onFundPool = _this2.onFundPool,
            reset = _this2.reset,
            onAccountNameChanged = _this2.onAccountNameChanged,
            onAccountChanged = _this2.onAccountChanged;
        var asset = props.asset,
            core = props.core,
            hideBalance = props.hideBalance,
            getDynamicObject = props.getDynamicObject;
        var funderAccountName = state.funderAccountName,
            fundPoolAmount = state.fundPoolAmount,
            newFunderAccount = state.newFunderAccount;

        var dynamicObject = null;
        if (!hideBalance) dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
        var coreID = core.get("id") || "1.3.0";
        var account = newFunderAccount;
        var balance = 0;
        if (newFunderAccount) {
            var coreBalanceID = newFunderAccount.getIn(["balances", coreID]);
            if (coreBalanceID) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject(coreBalanceID);
                if (balanceObject) {
                    balance = balanceObject.get("balance");
                }
            }
        }
        var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "span",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
            ":\xA0",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: balance, asset: coreID })
        );
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                component: "p",
                content: "explorer.asset.fee_pool.fund_text",
                asset: asset.get("symbol"),
                core: core.get("symbol")
            }),
            hideBalance || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { paddingBottom: "1.5rem" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.pool_balance" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    ": "
                ),
                dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    amount: dynamicObject.get("fee_pool"),
                    asset: coreID
                }) : null
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                label: "transaction.funding_account",
                accountName: funderAccountName,
                onChange: onAccountNameChanged,
                onAccountChanged: onAccountChanged,
                account: funderAccountName,
                error: null,
                tabIndex: 1
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                label: "transfer.amount",
                display_balance: balanceText,
                amount: fundPoolAmount,
                onChange: onPoolInput,
                asset: coreID,
                assets: [coreID],
                placeholder: "0.0",
                tabIndex: 2,
                style: { width: "100%", paddingTop: 16 }
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { paddingTop: "1rem" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                            disabled: fundPoolAmount <= 0
                        }),
                        onClick: onFundPool
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_fund_fee_pool" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    { className: "button outline", onClick: reset },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.approx_fee" }),
                    ":",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedFee__WEBPACK_IMPORTED_MODULE_6__["default"], { opType: "asset_fund_fee_pool" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)
            )
        );
    };
};

FundFeePool = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(FundFeePool, {
    propNames: ["asset", "core"],
    defaultProps: {
        core: "1.3.0"
    },
    withDynamic: true
});

/* harmony default export */ __webpack_exports__["default"] = (FundFeePool);

/***/ })

}]);
//# sourceMappingURL=account~asset.js.map