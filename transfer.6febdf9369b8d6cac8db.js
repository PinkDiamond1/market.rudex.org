(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 2542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1007);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1232);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(565);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1011);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1221);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(549);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1012);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1231);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2517);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(416);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(581);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(871);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(582);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2543);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_20__);



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var Transfer = function (_React$Component) {
    _inherits(Transfer, _React$Component);

    function Transfer(props) {
        _classCallCheck(this, Transfer);

        var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props));

        var state = Transfer.getInitialState();
        var query = query_string__WEBPACK_IMPORTED_MODULE_20___default.a.parse(props.location.search) || {};

        if (query.from) {
            state.from_name = query.from;
            bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(query.from);
        }
        if (query.to) {
            state.to_name = query.to;
            bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(query.to);
        }
        if (query.amount) state.amount = query.amount;
        if (query.asset) {
            state.asset_id = query.asset;
            state.asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(query.asset);
        }
        if (query.memo) state.memo = query.memo;
        var currentAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().currentAccount;
        if (!state.from_name) state.from_name = currentAccount;

        _this.state = state;
        _this.onTrxIncluded = _this.onTrxIncluded.bind(_this);

        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(_this._updateFee.bind(_this), 250);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);
        _this._checkBalance = _this._checkBalance.bind(_this);
        return _this;
    }

    _createClass(Transfer, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.nestedRef = null;
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            var _getAvailableAssets2 = this._getAvailableAssets(),
                current_types = _getAvailableAssets2.asset_types;

            var _getAvailableAssets3 = this._getAvailableAssets(ns),
                next_asset_types = _getAvailableAssets3.asset_types;

            if (next_asset_types.length === 1) {
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(next_asset_types[0]);
                if (current_types.length !== 1) {
                    this.onAmountChanged({ amount: ns.amount, asset: asset });
                }

                if (next_asset_types[0] !== this.state.fee_asset_id) {
                    if (asset && this.state.fee_asset_id !== next_asset_types[0]) {
                        this.setState({
                            feeAsset: asset,
                            fee_asset_id: next_asset_types[0]
                        });
                    }
                }
            }
            return true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            var _this2 = this;

            if (np.currentAccount !== this.state.from_name && np.currentAccount !== this.props.currentAccount) {
                this.setState({
                    from_name: np.currentAccount,
                    from_account: bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(np.currentAccount),
                    feeStatus: {},
                    fee_asset_id: "1.3.0",
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus(bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(np.currentAccount));
                });
            }
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                amount = _state.amount,
                from_account = _state.from_account,
                asset = _state.asset;

            if (!asset || !from_account) return;
            var balanceID = from_account.getIn(["balances", asset.get("id")]);
            var feeBalanceID = from_account.getIn(["balances", feeAmount.asset_id]);
            if (!asset || !from_account) return;
            if (!balanceID) return this.setState({ balanceError: true });
            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(balanceID);
            var feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(feeBalanceID) : null;
            if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
                this.setState({ fee_asset_id: "1.3.0" }, this._updateFee);
            }
            if (!balanceObject || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["checkBalance"])(amount, asset, feeAmount, balanceObject);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this3 = this;

            var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.from_account;

            if (!account) return;

            var assets = Object.keys(account.get("balances").toJS()).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this3.state.memo
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(_this3.state.feeStatus, feeStatus)) {
                    _this3.setState({
                        feeStatus: feeStatus
                    });
                }
                _this3._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this4 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var fee_asset_id = state.fee_asset_id,
                from_account = state.from_account,
                asset_id = state.asset_id;

            var _getAvailableAssets4 = this._getAvailableAssets(state),
                fee_asset_types = _getAvailableAssets4.fee_asset_types;

            if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
                fee_asset_id = fee_asset_types[0];
            }
            if (!from_account) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["checkFeeStatusAsync"])({
                accountID: from_account.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: state.memo
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;
                return Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["shouldPayFeeWithAssetAsync"])(from_account, fee).then(function (should) {
                    return should ? _this4.setState({ fee_asset_id: asset_id }, _this4._updateFee) : _this4.setState({
                        feeAmount: fee,
                        fee_asset_id: fee.asset_id,
                        hasBalance: hasBalance,
                        hasPoolBalance: hasPoolBalance,
                        error: !hasBalance || !hasPoolBalance
                    });
                });
            });
        }
    }, {
        key: "fromChanged",
        value: function fromChanged(from_name) {
            if (!from_name) this.setState({ from_account: null });
            this.setState({
                from_name: from_name,
                error: null,
                propose: false,
                propose_account: ""
            });
        }
    }, {
        key: "toChanged",
        value: function toChanged(to_name) {
            this.setState({ to_name: to_name, error: null });
        }
    }, {
        key: "onFromAccountChanged",
        value: function onFromAccountChanged(from_account) {
            var _this5 = this;

            this.setState({ from_account: from_account, error: null }, function () {
                _this5._updateFee();
                _this5._checkFeeStatus();
            });
        }
    }, {
        key: "onToAccountChanged",
        value: function onToAccountChanged(to_account) {
            this.setState({ to_account: to_account, error: null });
        }
    }, {
        key: "onAmountChanged",
        value: function onAmountChanged(_ref2) {
            var amount = _ref2.amount,
                asset = _ref2.asset;

            if (!asset) {
                return;
            }
            this.setState({ amount: amount, asset: asset, asset_id: asset.get("id"), error: null }, this._checkBalance);
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(_ref3) {
            var asset = _ref3.asset;

            this.setState({ feeAsset: asset, fee_asset_id: asset.get("id"), error: null }, this._updateFee);
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "onTrxIncluded",
        value: function onTrxIncluded(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                // this.setState(Transfer.getInitialState());
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].reset();
            } else if (confirm_store_state.closed) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].reset();
            }
        }
    }, {
        key: "onPropose",
        value: function onPropose(propose, e) {
            e.preventDefault();
            this.setState({ propose: propose, propose_account: null });
        }
    }, {
        key: "onProposeAccount",
        value: function onProposeAccount(propose_account) {
            this.setState({ propose_account: propose_account });
        }
    }, {
        key: "resetForm",
        value: function resetForm() {
            this.setState({ memo: "", to_name: "", to_account: null, amount: "" });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            var _this6 = this;

            e.preventDefault();
            this.setState({ error: null });
            var _state2 = this.state,
                asset = _state2.asset,
                amount = _state2.amount;

            var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({
                real: amount,
                asset_id: asset.get("id"),
                precision: asset.get("precision")
            });

            actions_AccountActions__WEBPACK_IMPORTED_MODULE_4__["default"].transfer(this.state.from_account.get("id"), this.state.to_account.get("id"), sendAmount.getAmount(), asset.get("id"), this.state.memo ? new Buffer(this.state.memo, "utf-8") : this.state.memo, this.state.propose ? this.state.propose_account : null, this.state.feeAsset ? this.state.feeAsset.get("id") : "1.3.0").then(function () {
                _this6.resetForm.call(_this6);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(_this6.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].listen(_this6.onTrxIncluded);
            }).catch(function (e) {
                var msg = e.message ? e.message.split("\n")[1] || e.message : null;
                console.log("error: ", e, msg);
                _this6.setState({ error: msg });
            });
        }
    }, {
        key: "setNestedRef",
        value: function setNestedRef(ref) {
            this.nestedRef = ref;
        }
    }, {
        key: "_setTotal",
        value: function _setTotal(asset_id, balance_id) {
            var feeAmount = this.state.feeAmount;

            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(balance_id);
            var transferAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(asset_id);

            var balance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({
                amount: balanceObject.get("balance"),
                asset_id: transferAsset.get("id"),
                precision: transferAsset.get("precision")
            });

            if (balanceObject) {
                if (feeAmount.asset_id === balance.asset_id) {
                    balance.minus(feeAmount);
                }
                this.setState({ amount: balance.getAmount({ real: true }) }, this._checkBalance);
            }
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var feeStatus = this.state.feeStatus;

            function hasFeePoolBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var from_account = state.from_account,
                from_error = state.from_error;

            var asset_types = [],
                fee_asset_types = [];
            if (!(from_account && from_account.get("balances") && !from_error)) {
                return { asset_types: asset_types, fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
            for (var key in account_balances) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    asset_types.splice(asset_types.indexOf(key), 1);
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }

            fee_asset_types = fee_asset_types.filter(function (a) {
                return hasFeePoolBalance(a) && hasBalance(a);
            });

            return { asset_types: asset_types, fee_asset_types: fee_asset_types };
        }
    }, {
        key: "render",
        value: function render() {
            var from_error = null;
            var _state3 = this.state,
                propose = _state3.propose,
                from_account = _state3.from_account,
                to_account = _state3.to_account,
                asset = _state3.asset,
                asset_id = _state3.asset_id,
                propose_account = _state3.propose_account,
                feeAmount = _state3.feeAmount,
                amount = _state3.amount,
                error = _state3.error,
                to_name = _state3.to_name,
                from_name = _state3.from_name,
                memo = _state3.memo,
                feeAsset = _state3.feeAsset,
                fee_asset_id = _state3.fee_asset_id,
                balanceError = _state3.balanceError;

            var from_my_account = stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].isMyAccount(from_account) || from_name === this.props.passwordAccount;

            if (from_account && !from_my_account && !propose) {
                from_error = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    "span",
                    null,
                    counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("account.errors.not_yours"),
                    "\xA0(",
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "a",
                        { onClick: this.onPropose.bind(this, true) },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("propose")
                    ),
                    ")"
                );
            }

            var _getAvailableAssets5 = this._getAvailableAssets(),
                asset_types = _getAvailableAssets5.asset_types,
                fee_asset_types = _getAvailableAssets5.fee_asset_types;

            var balance = null;

            // Estimate fee
            var fee = this.state.feeAmount.getAmount({ real: true });
            if (from_account && from_account.get("balances") && !from_error) {
                var account_balances = from_account.get("balances").toJS();
                if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(asset_types[0]);
                if (asset_types.length > 0) {
                    var current_asset_id = asset ? asset.get("id") : asset_types[0];
                    var feeID = feeAsset ? feeAsset.get("id") : "1.3.0";
                    balance = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            },
                            onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], fee, feeID)
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            balance: account_balances[current_asset_id]
                        })
                    );
                } else {
                    balance = "No funds";
                }
            }

            var propose_incomplete = propose && !propose_account;
            var amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
            var isAmountValid = amountValue && !Object(lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__["default"])(amountValue);
            var isToAccountValid = to_account && to_account.get("name") === to_name;
            var isSendNotValid = !from_account || !isToAccountValid || !isAmountValid || !asset || from_error || propose_incomplete || balanceError;
            var accountsList = immutable__WEBPACK_IMPORTED_MODULE_14___default.a.Set();
            accountsList = accountsList.add(from_account);
            var tabIndex = 1;

            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    "div",
                    {
                        className: "grid-block shrink vertical medium-horizontal",
                        style: { paddingTop: "2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "form",
                        {
                            style: { paddingBottom: 20, overflow: "visible" },
                            className: "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
                            onSubmit: this.onSubmit.bind(this),
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "transfer.header", component: "h2" }),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                label: "transfer.from",
                                ref: "from",
                                accountName: from_name,
                                onChange: this.fromChanged.bind(this),
                                onAccountChanged: this.onFromAccountChanged.bind(this),
                                account: from_account,
                                size: 60,
                                error: from_error,
                                typeahead: true,
                                tabIndex: tabIndex++
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                label: "transfer.to",
                                ref: "to",
                                accountName: to_name,
                                onChange: this.toChanged.bind(this),
                                onAccountChanged: this.onToAccountChanged.bind(this),
                                account: to_account,
                                size: 60,
                                tabIndex: tabIndex++,
                                typeahead: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block transfer-input" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                label: "transfer.amount",
                                amount: amount,
                                onChange: this.onAmountChanged.bind(this),
                                asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0],
                                assets: asset_types,
                                display_balance: balance,
                                tabIndex: tabIndex++
                            }),
                            this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "p",
                                {
                                    className: "has-error no-margin",
                                    style: { paddingTop: 10 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "transfer.errors.insufficient" })
                            ) : null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block transfer-input" },
                            memo && memo.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "label",
                                { className: "right-label" },
                                memo.length
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                className: "left-label tooltip",
                                component: "label",
                                content: "transfer.memo",
                                "data-place": "top",
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.memo_tip")
                            }),
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
                                style: { marginBottom: 0 },
                                rows: "3",
                                value: memo,
                                tabIndex: tabIndex++,
                                onChange: this.onMemoChanged.bind(this)
                            }),
                            this.state.propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "div",
                                {
                                    className: "error-area",
                                    style: { position: "absolute" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    content: "transfer.warn_name_unable_read_memo",
                                    name: this.state.from_name
                                })
                            ) : null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            {
                                className: "content-block transfer-input fee-row" + (this.state.propose ? " proposal" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                refCallback: this.setNestedRef.bind(this),
                                label: "transfer.fee",
                                disabled: true,
                                amount: fee,
                                onChange: this.onFeeChanged.bind(this),
                                asset: fee_asset_types.length && feeAmount ? feeAmount.asset_id : fee_asset_types.length === 1 ? fee_asset_types[0] : fee_asset_id ? fee_asset_id : fee_asset_types[0],
                                assets: fee_asset_types,
                                tabIndex: tabIndex++,
                                error: this.state.hasPoolBalance === false ? "transfer.errors.insufficient" : null
                            }),
                            propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "button",
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_18___default()("button float-right no-margin", { disabled: isSendNotValid }),
                                    type: "submit",
                                    value: "Submit",
                                    tabIndex: tabIndex++
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "propose"
                                })
                            ) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "button",
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_18___default()("button float-right no-margin", { disabled: isSendNotValid }),
                                    type: "submit",
                                    value: "Submit",
                                    tabIndex: tabIndex++
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "transfer.send"
                                })
                            )
                        ),
                        propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "full-width-content form-group transfer-input" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.propose_from" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                account_names: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getMyAccounts(),
                                onChange: this.onProposeAccount.bind(this),
                                tabIndex: tabIndex++
                            })
                        ) : null,
                        error ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block has-error" },
                            error
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            null,
                            propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    "button",
                                    {
                                        className: " button",
                                        onClick: this.onPropose.bind(this, false),
                                        tabIndex: tabIndex++
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                        component: "span",
                                        content: "cancel"
                                    })
                                )
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-content small-12 medium-6 large-4 large-offset-1 right-column" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "grid-content no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_13__["RecentTransactions"], {
                                accountsList: accountsList,
                                limit: 25,
                                compactView: true,
                                filter: "transfer",
                                fullHeight: true
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "grid-content medium-6 large-4" })
                )
            );
        }
    }], [{
        key: "getInitialState",
        value: function getInitialState() {
            return {
                from_name: "",
                to_name: "",
                from_account: null,
                to_account: null,
                amount: "",
                asset_id: null,
                asset: null,
                memo: "",
                error: null,
                propose: false,
                propose_account: "",
                feeAsset: null,
                fee_asset_id: "1.3.0",
                feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({ amount: 0 }),
                feeStatus: {}
            };
        }
    }]);

    return Transfer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_16__["connect"])(Transfer, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().currentAccount,
            passwordAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().passwordAccount,
            contactsList: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().accountContacts
        };
    }
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(423).Buffer))

/***/ }),

/***/ 2543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(2544);
const decodeComponent = __webpack_require__(2545);

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return (key, value, index) => {
				return value === null ? [
					encode(key, options),
					'[',
					index,
					']'
				].join('') : [
					encode(key, options),
					'[',
					encode(index, options),
					']=',
					encode(value, options)
				].join('');
			};
		case 'bracket':
			return (key, value) => {
				return value === null ? [encode(key, options), '[]'].join('') : [
					encode(key, options),
					'[]=',
					encode(value, options)
				].join('');
			};
		default:
			return (key, value) => {
				return value === null ? encode(key, options) : [
					encode(key, options),
					'=',
					encode(value, options)
				].join('');
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};
		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function extract(input) {
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return input.slice(queryStart + 1);
}

function parse(input, options) {
	options = Object.assign({decode: true, arrayFormat: 'none'}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = param.replace(/\+/g, ' ').split('=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);

		formatter(decode(key, options), value, ret);
	}

	return Object.keys(ret).sort().reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (obj, options) => {
	const defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	options = Object.assign(defaults, options);

	if (options.sort === false) {
		options.sort = () => {};
	}

	const formatter = encoderForArrayFormat(options);

	return obj ? Object.keys(obj).sort(options.sort).map(key => {
		const value = obj[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			const result = [];

			for (const value2 of value.slice()) {
				if (value2 === undefined) {
					continue;
				}

				result.push(formatter(key, value2, result.length));
			}

			return result.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&') : '';
};

exports.parseUrl = (input, options) => {
	return {
		url: input.split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ 2544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 2545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ })

}]);
//# sourceMappingURL=transfer.js.map