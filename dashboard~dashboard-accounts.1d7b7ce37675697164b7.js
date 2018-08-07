(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 2768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(788);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(709);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1263);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(895);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(730);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(565);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(802);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(416);
/* harmony import */ var _Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1264);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(549);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(571);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(589);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(747);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(744);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var starSort = function starSort(a, b, inverse, starredAccounts) {
    var aName = a.get("name");
    var bName = b.get("name");
    var aStarred = starredAccounts.has(aName);
    var bStarred = starredAccounts.has(bName);

    if (aStarred && !bStarred) {
        return inverse ? -1 : 1;
    } else if (bStarred && !aStarred) {
        return inverse ? 1 : -1;
    } else {
        if (aName > bName) {
            return inverse ? 1 : -1;
        } else if (aName < bName) {
            return inverse ? -1 : 1;
        } else {
            return common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].sortText(aName, bName, !inverse);
        }
    }
};

var DashboardList = function (_React$Component) {
    _inherits(DashboardList, _React$Component);

    function DashboardList(props) {
        _classCallCheck(this, DashboardList);

        var _this = _possibleConstructorReturn(this, (DashboardList.__proto__ || Object.getPrototypeOf(DashboardList)).call(this));

        var inputValue = props.viewSettings.get("marketLookupInput");
        var symbols = inputValue ? inputValue.split(":") : [null];
        var quote = symbols[0];
        var base = symbols.length === 2 ? symbols[1] : null;

        _this.state = {
            inverseSort: props.viewSettings.get("dashboardSortInverse", true),
            sortBy: props.viewSettings.get("dashboardSort", "star"),
            dashboardFilter: props.viewSettings.get("dashboardFilter", "")
        };
        return _this;
    }

    _createClass(DashboardList, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(nextProps.accounts, this.props.accounts) || nextProps.isContactsList !== this.props.isContactsList || nextProps.showMyAccounts !== this.props.showMyAccounts || nextProps.width !== this.props.width || nextProps.showIgnored !== this.props.showIgnored || nextProps.locked !== this.props.locked || nextProps.passwordAccount !== this.props.passwordAccount || !common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(nextProps.starredAccounts, this.props.starredAccounts) || !common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "_onStar",
        value: function _onStar(account, isStarred, e) {
            e.preventDefault();
            if (!isStarred) {
                actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].addStarAccount(account);
            } else {
                actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].removeStarAccount(account);
            }
        }
    }, {
        key: "_goAccount",
        value: function _goAccount(name, tab) {
            this.props.history.push("/account/" + name);
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                overviewTab: tab
            });
        }
    }, {
        key: "_createAccount",
        value: function _createAccount() {
            this.props.history.push("/create-account/wallet");
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(e) {
            this.setState({ dashboardFilter: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                dashboardFilter: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "_setSort",
        value: function _setSort(field) {
            var inverse = field === this.state.sortBy ? !this.state.inverseSort : this.state.inverseSort;
            this.setState({
                sortBy: field,
                inverseSort: inverse
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                dashboardSort: field,
                dashboardSortInverse: inverse
            });
        }
    }, {
        key: "_onAddContact",
        value: function _onAddContact(account) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].addAccountContact(account);
        }
    }, {
        key: "_onRemoveContact",
        value: function _onRemoveContact(account) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].removeAccountContact(account);
        }
    }, {
        key: "_renderList",
        value: function _renderList(accounts, isHiddenAccountsList) {
            var _this2 = this;

            var _props = this.props,
                width = _props.width,
                starredAccounts = _props.starredAccounts,
                isContactsList = _props.isContactsList,
                passwordAccount = _props.passwordAccount;
            var _state = this.state,
                dashboardFilter = _state.dashboardFilter,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort;

            var balanceList = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List();

            return accounts.filter(function (account) {
                if (!account) return false;
                var accountName = account.get("name");
                var isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"].isMyAccount(account) || accountName === passwordAccount;
                /*
                Display all accounts from contacts list
                Display only my Accounts for Accounts page
                */
                return isContactsList ? true : isMyAccount === _this2.props.showMyAccounts;
            }).filter(function (a) {
                if (!a) return false;
                return a.get("name").toLowerCase().indexOf(dashboardFilter) !== -1;
            }).sort(function (a, b) {
                switch (sortBy) {
                    case "star":
                        return starSort(a, b, inverseSort, starredAccounts);
                        break;

                    case "name":
                        return common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].sortText(a.get("name"), b.get("name"), inverseSort);
                        break;

                    default:
                        break;
                }
            }).map(function (account) {
                if (account) {
                    var collateral = {},
                        debt = {},
                        openOrders = {};
                    balanceList = balanceList.clear();

                    var accountName = account.get("name");
                    var isLTM = account.get("lifetime_referrer_name") === accountName;

                    if (account.get("orders")) {
                        account.get("orders").forEach(function (orderID, key) {
                            var order = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getObject(orderID);
                            if (order) {
                                var orderAsset = order.getIn(["sell_price", "base", "asset_id"]);
                                if (!openOrders[orderAsset]) {
                                    openOrders[orderAsset] = parseInt(order.get("for_sale"), 10);
                                } else {
                                    openOrders[orderAsset] += parseInt(order.get("for_sale"), 10);
                                }
                            }
                        });
                    }

                    // console.log("openOrders:", openOrders);

                    if (account.get("call_orders")) {
                        account.get("call_orders").forEach(function (callID, key) {
                            var position = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getObject(callID);
                            if (position) {
                                var collateralAsset = position.getIn(["call_price", "base", "asset_id"]);
                                if (!collateral[collateralAsset]) {
                                    collateral[collateralAsset] = parseInt(position.get("collateral"), 10);
                                } else {
                                    collateral[collateralAsset] += parseInt(position.get("collateral"), 10);
                                }
                                var debtAsset = position.getIn(["call_price", "quote", "asset_id"]);
                                if (!debt[debtAsset]) {
                                    debt[debtAsset] = parseInt(position.get("debt"), 10);
                                } else {
                                    debt[debtAsset] += parseInt(position.get("debt"), 10);
                                }
                            }
                        });
                    }

                    var account_balances = account.get("balances");
                    if (account.get("balances")) {
                        account_balances.forEach(function (balance) {
                            var balanceAmount = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getObject(balance);
                            if (!balanceAmount || !balanceAmount.get("balance")) {
                                return null;
                            }
                            balanceList = balanceList.push(balance);
                        });
                    }

                    var isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"].isMyAccount(account) || accountName === passwordAccount;

                    var isStarred = starredAccounts.has(accountName);
                    var starClass = isStarred ? "gold-star" : "grey-star";

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: accountName },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._onStar.bind(_this2, accountName, isStarred)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                className: starClass,
                                name: "fi-star",
                                title: "icons.fi_star.account"
                            })
                        ),
                        isContactsList ? isHiddenAccountsList && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onAddContact.bind(_this2, accountName)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                name: "plus-circle",
                                title: "icons.plus_circle.add_contact"
                            })
                        ) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onRemoveContact.bind(_this2, accountName)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                name: "minus-circle",
                                title: "icons.minus_circle.remove_contact"
                            })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { textAlign: "left" } },
                            account.get("id")
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "left", paddingLeft: 10 },
                                onClick: _this2._goAccount.bind(_this2, accountName, 0),
                                className: "clickable" + (isMyAccount ? " my-account" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: isLTM ? "lifetime" : "" },
                                accountName
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 1),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: [],
                                openOrders: openOrders
                            })
                        ),
                        width >= 750 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 2),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: [],
                                collateral: collateral
                            })
                        ) : null,
                        width >= 1200 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 2),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: [],
                                debt: debt
                            })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 0),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: balanceList,
                                collateral: collateral,
                                debt: debt,
                                openOrders: openOrders
                            })
                        )
                    );
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                width = _props2.width,
                showIgnored = _props2.showIgnored,
                isContactsList = _props2.isContactsList;
            var dashboardFilter = this.state.dashboardFilter;


            var includedAccounts = this._renderList(this.props.accounts);

            var hiddenAccounts = this._renderList(this.props.ignoredAccounts, true);

            var filterText = !isContactsList ? counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("explorer.accounts.filter") : counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("explorer.accounts.filter_contacts");
            filterText += "...";

            var hasLocalWallet = !!stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__["default"].getWallet();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: this.props.style },
                !this.props.compact ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { style: { paddingTop: "1rem", paddingLeft: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        placeholder: filterText,
                        style: { maxWidth: "20rem", display: "inline-block" },
                        type: "text",
                        value: dashboardFilter,
                        onChange: this._onFilter.bind(this)
                    }),
                    hasLocalWallet && !isContactsList ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            onClick: this._createAccount.bind(this),
                            style: {
                                display: "inline-block",
                                marginLeft: 5,
                                marginBottom: "1rem"
                            },
                            className: "button small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "header.create_account" })
                    ) : null,
                    hiddenAccounts && hiddenAccounts.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            onClick: this.props.onToggleIgnored,
                            style: {
                                display: "inline-block",
                                float: "right",
                                marginRight: "20px"
                            },
                            className: "button small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            content: "account." + (this.props.showIgnored ? "hide_ignored" : "show_ignored")
                        })
                    ) : null
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table table-hover dashboard-table",
                        style: { fontSize: "0.85rem" }
                    },
                    !this.props.compact ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    onClick: this._setSort.bind(this, "star"),
                                    className: "clickable"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    className: "grey-star",
                                    name: "fi-star",
                                    title: "icons.fi_star.sort_accounts"
                                })
                            ),
                            isContactsList ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    name: "user",
                                    title: "icons.user.account"
                                })
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "left" } },
                                "ID"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    style: { textAlign: "left", paddingLeft: 10 },
                                    onClick: this._setSort.bind(this, "name"),
                                    className: "clickable"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "header.account" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.open_orders" })
                            ),
                            width >= 750 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.as_collateral" })
                            ) : null,
                            width >= 1200 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transaction.borrow_amount" })
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    style: {
                                        textAlign: "right",
                                        marginRight: 20
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.total_value" })
                            )
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        includedAccounts,
                        showIgnored && hiddenAccounts.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            {
                                className: "dashboard-table--hiddenAccounts",
                                style: { backgroundColor: "transparent" },
                                key: "hidden"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { colSpan: "8" },
                                counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("account.hidden_accounts_row"),
                                ":"
                            )
                        ) : null,
                        showIgnored && hiddenAccounts
                    )
                )
            );
        }
    }]);

    return DashboardList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DashboardList.propTypes = {
    accounts: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccountsList.isRequired,
    ignoredAccounts: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccountsList
};
DashboardList.defaultProps = {
    width: 2000,
    compact: false
};

DashboardList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(DashboardList);

var AccountsListWrapper = function (_React$Component2) {
    _inherits(AccountsListWrapper, _React$Component2);

    function AccountsListWrapper() {
        _classCallCheck(this, AccountsListWrapper);

        return _possibleConstructorReturn(this, (AccountsListWrapper.__proto__ || Object.getPrototypeOf(AccountsListWrapper)).apply(this, arguments));
    }

    _createClass(AccountsListWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DashboardList, this.props);
        }
    }]);

    return AccountsListWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountsListWrapper = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["withRouter"])(AccountsListWrapper);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(AccountsListWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"], stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"], stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"]];
    },
    getProps: function getProps() {
        return {
            locked: stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().locked,
            starredAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().starredAccounts,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().viewSettings
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=dashboard~dashboard-accounts.js.map