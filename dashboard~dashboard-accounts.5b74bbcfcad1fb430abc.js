(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 2850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(760);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2233);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1833);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1834);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(702);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(556);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(774);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(407);
/* harmony import */ var _Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2234);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(540);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(581);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(716);
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

AccountsListWrapper = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(AccountsListWrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkfmRhc2hib2FyZC1hY2NvdW50cy41Yjc0YmJjZmNhZDFmYjQzMGFiYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkTGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBXYWxsZXRVbmxvY2tTdG9yZSBmcm9tIFwic3RvcmVzL1dhbGxldFVubG9ja1N0b3JlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgVG90YWxCYWxhbmNlVmFsdWUgZnJvbSBcIi4uL1V0aWxpdHkvVG90YWxCYWxhbmNlVmFsdWVcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IHN0YXJTb3J0ID0gZnVuY3Rpb24oYSwgYiwgaW52ZXJzZSwgc3RhcnJlZEFjY291bnRzKSB7XHJcbiAgICBsZXQgYU5hbWUgPSBhLmdldChcIm5hbWVcIik7XHJcbiAgICBsZXQgYk5hbWUgPSBiLmdldChcIm5hbWVcIik7XHJcbiAgICBsZXQgYVN0YXJyZWQgPSBzdGFycmVkQWNjb3VudHMuaGFzKGFOYW1lKTtcclxuICAgIGxldCBiU3RhcnJlZCA9IHN0YXJyZWRBY2NvdW50cy5oYXMoYk5hbWUpO1xyXG5cclxuICAgIGlmIChhU3RhcnJlZCAmJiAhYlN0YXJyZWQpIHtcclxuICAgICAgICByZXR1cm4gaW52ZXJzZSA/IC0xIDogMTtcclxuICAgIH0gZWxzZSBpZiAoYlN0YXJyZWQgJiYgIWFTdGFycmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGludmVyc2UgPyAxIDogLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChhTmFtZSA+IGJOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnZlcnNlID8gMSA6IC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYU5hbWUgPCBiTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZXJzZSA/IC0xIDogMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuc29ydFRleHQoYU5hbWUsIGJOYW1lLCAhaW52ZXJzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnRzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaWdub3JlZEFjY291bnRzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMDAsXHJcbiAgICAgICAgY29tcGFjdDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGludmVyc2VTb3J0OiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiZGFzaGJvYXJkU29ydEludmVyc2VcIiwgdHJ1ZSksXHJcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImRhc2hib2FyZFNvcnRcIiwgXCJzdGFyXCIpLFxyXG4gICAgICAgICAgICBkYXNoYm9hcmRGaWx0ZXI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJkYXNoYm9hcmRGaWx0ZXJcIiwgXCJcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0UHJvcHMuYWNjb3VudHMsIHRoaXMucHJvcHMuYWNjb3VudHMpIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5pc0NvbnRhY3RzTGlzdCAhPT0gdGhpcy5wcm9wcy5pc0NvbnRhY3RzTGlzdCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuc2hvd015QWNjb3VudHMgIT09IHRoaXMucHJvcHMuc2hvd015QWNjb3VudHMgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLndpZHRoICE9PSB0aGlzLnByb3BzLndpZHRoIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5zaG93SWdub3JlZCAhPT0gdGhpcy5wcm9wcy5zaG93SWdub3JlZCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMubG9ja2VkICE9PSB0aGlzLnByb3BzLmxvY2tlZCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMucGFzc3dvcmRBY2NvdW50ICE9PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudCB8fFxyXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuc3RhcnJlZEFjY291bnRzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGFycmVkQWNjb3VudHNcclxuICAgICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uU3RhcihhY2NvdW50LCBpc1N0YXJyZWQsIGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCFpc1N0YXJyZWQpIHtcclxuICAgICAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkU3RhckFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlU3RhckFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nb0FjY291bnQobmFtZSwgdGFiKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hY2NvdW50LyR7bmFtZX1gKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBvdmVydmlld1RhYjogdGFiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUFjY291bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvY3JlYXRlLWFjY291bnQvd2FsbGV0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkZpbHRlcihlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGFzaGJvYXJkRmlsdGVyOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XHJcblxyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGRhc2hib2FyZEZpbHRlcjogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRTb3J0KGZpZWxkKSB7XHJcbiAgICAgICAgbGV0IGludmVyc2UgPVxyXG4gICAgICAgICAgICBmaWVsZCA9PT0gdGhpcy5zdGF0ZS5zb3J0QnlcclxuICAgICAgICAgICAgICAgID8gIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcclxuICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5pbnZlcnNlU29ydDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc29ydEJ5OiBmaWVsZCxcclxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IGludmVyc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgZGFzaGJvYXJkU29ydDogZmllbGQsXHJcbiAgICAgICAgICAgIGRhc2hib2FyZFNvcnRJbnZlcnNlOiBpbnZlcnNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQWRkQ29udGFjdChhY2NvdW50KSB7XHJcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QoYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uUmVtb3ZlQ29udGFjdChhY2NvdW50KSB7XHJcbiAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlQWNjb3VudENvbnRhY3QoYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckxpc3QoYWNjb3VudHMsIGlzSGlkZGVuQWNjb3VudHNMaXN0KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgc3RhcnJlZEFjY291bnRzLFxyXG4gICAgICAgICAgICBpc0NvbnRhY3RzTGlzdCxcclxuICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2Rhc2hib2FyZEZpbHRlciwgc29ydEJ5LCBpbnZlcnNlU29ydH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBiYWxhbmNlTGlzdCA9IEltbXV0YWJsZS5MaXN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2NvdW50c1xyXG4gICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSBhY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNNeUFjY291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5pc015QWNjb3VudChhY2NvdW50KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lID09PSBwYXNzd29yZEFjY291bnQ7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgRGlzcGxheSBhbGwgYWNjb3VudHMgZnJvbSBjb250YWN0cyBsaXN0XHJcbiAgICAgICAgICAgICAgICBEaXNwbGF5IG9ubHkgbXkgQWNjb3VudHMgZm9yIEFjY291bnRzIHBhZ2VcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNDb250YWN0c0xpc3RcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGlzTXlBY2NvdW50ID09PSB0aGlzLnByb3BzLnNob3dNeUFjY291bnRzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcIm5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoZGFzaGJvYXJkRmlsdGVyKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFyU29ydChhLCBiLCBpbnZlcnNlU29ydCwgc3RhcnJlZEFjY291bnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5zb3J0VGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VTb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidCA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuT3JkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZUxpc3QgPSBiYWxhbmNlTGlzdC5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSBhY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzTFRNID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJsaWZldGltZV9yZWZlcnJlcl9uYW1lXCIpID09PSBhY2NvdW50TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQuZ2V0KFwib3JkZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwib3JkZXJzXCIpLmZvckVhY2goKG9yZGVySUQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yZGVyID0gQ2hhaW5TdG9yZS5nZXRPYmplY3Qob3JkZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJBc3NldCA9IG9yZGVyLmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsX3ByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wZW5PcmRlcnNbb3JkZXJBc3NldF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVyc1tvcmRlckFzc2V0XSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0KFwiZm9yX3NhbGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5PcmRlcnNbb3JkZXJBc3NldF0gKz0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXQoXCJmb3Jfc2FsZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3Blbk9yZGVyczpcIiwgb3Blbk9yZGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50LmdldChcImNhbGxfb3JkZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIikuZm9yRWFjaCgoY2FsbElELCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGNhbGxJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGF0ZXJhbEFzc2V0ID0gcG9zaXRpb24uZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29sbGF0ZXJhbFtjb2xsYXRlcmFsQXNzZXRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxbY29sbGF0ZXJhbEFzc2V0XSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uZ2V0KFwiY29sbGF0ZXJhbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbFtjb2xsYXRlcmFsQXNzZXRdICs9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uZ2V0KFwiY29sbGF0ZXJhbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWJ0QXNzZXQgPSBwb3NpdGlvbi5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbF9wcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVidFtkZWJ0QXNzZXRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnRbZGVidEFzc2V0XSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uZ2V0KFwiZGVidFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidFtkZWJ0QXNzZXRdICs9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uZ2V0KFwiZGVidFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2JhbGFuY2VzLmZvckVhY2goYmFsYW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZUFtb3VudCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFiYWxhbmNlQW1vdW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWJhbGFuY2VBbW91bnQuZ2V0KFwiYmFsYW5jZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlTGlzdCA9IGJhbGFuY2VMaXN0LnB1c2goYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzTXlBY2NvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KGFjY291bnQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lID09PSBwYXNzd29yZEFjY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc1N0YXJyZWQgPSBzdGFycmVkQWNjb3VudHMuaGFzKGFjY291bnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNsYXNzID0gaXNTdGFycmVkID8gXCJnb2xkLXN0YXJcIiA6IFwiZ3JleS1zdGFyXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2FjY291bnROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdGFyLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N0YXJyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbnRhY3RzTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGlzSGlkZGVuQWNjb3VudHNMaXN0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25BZGRDb250YWN0LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGx1cy1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5wbHVzX2NpcmNsZS5hZGRfY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpIHx8IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmVDb250YWN0LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWludXMtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMubWludXNfY2lyY2xlLnJlbW92ZV9jb250YWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHBhZGRpbmdMZWZ0OiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZ29BY2NvdW50LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzTXlBY2NvdW50ID8gXCIgbXktYWNjb3VudFwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0xUTSA/IFwibGlmZXRpbWVcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZ29BY2NvdW50LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG90YWxCYWxhbmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuT3JkZXJzPXtvcGVuT3JkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZHRoID49IDc1MCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZ29BY2NvdW50LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvdGFsQmFsYW5jZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbD17Y29sbGF0ZXJhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkdGggPj0gMTIwMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZ29BY2NvdW50LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvdGFsQmFsYW5jZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidD17ZGVidH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2dvQWNjb3VudC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvdGFsQmFsYW5jZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzPXtiYWxhbmNlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbD17Y29sbGF0ZXJhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidD17ZGVidH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVycz17b3Blbk9yZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHt3aWR0aCwgc2hvd0lnbm9yZWQsIGlzQ29udGFjdHNMaXN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2Rhc2hib2FyZEZpbHRlcn0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgaW5jbHVkZWRBY2NvdW50cyA9IHRoaXMuX3JlbmRlckxpc3QodGhpcy5wcm9wcy5hY2NvdW50cyk7XHJcblxyXG4gICAgICAgIGxldCBoaWRkZW5BY2NvdW50cyA9IHRoaXMuX3JlbmRlckxpc3QodGhpcy5wcm9wcy5pZ25vcmVkQWNjb3VudHMsIHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVyVGV4dCA9ICFpc0NvbnRhY3RzTGlzdFxyXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFjY291bnRzLmZpbHRlclwiKVxyXG4gICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFjY291bnRzLmZpbHRlcl9jb250YWN0c1wiKTtcclxuICAgICAgICBmaWx0ZXJUZXh0ICs9IFwiLi4uXCI7XHJcblxyXG4gICAgICAgIGxldCBoYXNMb2NhbFdhbGxldCA9ICEhV2FsbGV0RGIuZ2V0V2FsbGV0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmNvbXBhY3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIiwgcGFkZGluZ0xlZnQ6IFwiMnJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpbHRlclRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiBcIjIwcmVtXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rhc2hib2FyZEZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzTG9jYWxXYWxsZXQgJiYgIWlzQ29udGFjdHNMaXN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NyZWF0ZUFjY291bnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5jcmVhdGVfYWNjb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoaWRkZW5BY2NvdW50cyAmJiBoaWRkZW5BY2NvdW50cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vblRvZ2dsZUlnbm9yZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YGFjY291bnQuJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0lnbm9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaGlkZV9pZ25vcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2hvd19pZ25vcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIGRhc2hib2FyZC10YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjg1cmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5jb21wYWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFNvcnQuYmluZCh0aGlzLCBcInN0YXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JleS1zdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaS1zdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5zb3J0X2FjY291bnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbnRhY3RzTGlzdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy51c2VyLmFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwifX0+SUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHBhZGRpbmdMZWZ0OiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFNvcnQuYmluZCh0aGlzLCBcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuYWNjb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm9wZW5fb3JkZXJzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aCA+PSA3NTAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmFzX2NvbGxhdGVyYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aCA+PSAxMjAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50b3RhbF92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5jbHVkZWRBY2NvdW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dJZ25vcmVkICYmIGhpZGRlbkFjY291bnRzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhc2hib2FyZC10YWJsZS0taGlkZGVuQWNjb3VudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY291bnQuaGlkZGVuX2FjY291bnRzX3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93SWdub3JlZCAmJiBoaWRkZW5BY2NvdW50c31cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5EYXNoYm9hcmRMaXN0ID0gQmluZFRvQ2hhaW5TdGF0ZShEYXNoYm9hcmRMaXN0KTtcclxuXHJcbmNsYXNzIEFjY291bnRzTGlzdFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8RGFzaGJvYXJkTGlzdCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICB9XHJcbn1cclxuQWNjb3VudHNMaXN0V3JhcHBlciA9IHdpdGhSb3V0ZXIoQWNjb3VudHNMaXN0V3JhcHBlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgQWNjb3VudHNMaXN0V3JhcHBlcixcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBXYWxsZXRVbmxvY2tTdG9yZSwgQWNjb3VudFN0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbG9ja2VkOiBXYWxsZXRVbmxvY2tTdG9yZS5nZXRTdGF0ZSgpLmxvY2tlZCxcclxuICAgICAgICAgICAgICAgIHN0YXJyZWRBY2NvdW50czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuc3RhcnJlZEFjY291bnRzLFxyXG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Ozs7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFjQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVlBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFUQTtBQTlHQTtBQWlJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUEE7QUFTQTtBQVRBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFEQTtBQVRBO0FBdEJBO0FBMENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBTkE7QUF4Q0E7QUFEQTtBQW9EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTEE7QUFhQTtBQWhCQTtBQXpEQTtBQTVDQTtBQTBIQTs7OztBQS9mQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBMGZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFWQTs7OztBIiwic291cmNlUm9vdCI6IiJ9